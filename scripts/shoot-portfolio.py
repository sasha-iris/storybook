#!/usr/bin/env python3
"""Re-shoot the screenshots the portfolio case studies lead with.

    python3 scripts/shoot-portfolio.py            # every shot
    python3 scripts/shoot-portfolio.py segments   # only shots whose name matches

Serve the built site first, so the shots are of what actually ships:

    python3 -m http.server 8023 --directory storybook/storybook-static

Shots are taken at 1440×900 at 2× and written at their native size. Nothing is
resampled afterwards: the declared width/height in the HTML must match the file
or the page jumps while it loads, so this script rewrites those attributes too.
"""

import pathlib
import re
import subprocess
import sys

ROOT = pathlib.Path(__file__).resolve().parent.parent
IMG = ROOT / 'storybook' / 'public' / 'portfolio' / 'img'
BASE = 'http://localhost:8023'
FULL = {'x': 0, 'y': 0, 'width': 1440, 'height': 900}

SHOTS = [
    ('segments-list',    '/pages/segments-v2.html',              FULL),
    ('segments-detail',  '/pages/segment-detail-v2.html?id=s26', FULL),
    ('segments-builder', '/pages/segment-builder.html?id=s4',    FULL),
    ('thumb-segments',   '/pages/segments-v2.html',              {'x': 150, 'y': 300, 'width': 760, 'height': 475}),
    ('pnl-statement',    '/pages/pnl-v2.html',                   FULL),
    ('thumb-pnl',        '/pages/pnl-v2.html',                   {'x': 150, 'y': 250, 'width': 760, 'height': 475}),
    ('assumptions',      '/pages/assumptions-v2.html',           {'x': 0, 'y': 0, 'width': 1440, 'height': 820}),
    ('lib-storybook',    '/?path=/story/iris-library-card-kpi--all-variants', {'x': 0, 'y': 0, 'width': 1440, 'height': 860}),
    ('thumb-library',    '/?path=/story/iris-library-table-cohort--cohort-analysis-table', {'x': 0, 'y': 60, 'width': 760, 'height': 475}),
    ('lib-financial',    '/iframe.html?id=iris-library-table-composed--financial-table-periods&viewMode=story', {'x': 0, 'y': 0, 'width': 1200, 'height': 560}),
    ('lib-cohort',       '/iframe.html?id=iris-library-table-cohort--cohort-analysis-table&viewMode=story', {'x': 0, 'y': 0, 'width': 1200, 'height': 560}),
]


def shoot(which):
    from playwright.sync_api import sync_playwright
    with sync_playwright() as pw:
        browser = pw.chromium.launch()
        for name, url, clip in which:
            page = browser.new_page(viewport={'width': max(1440, clip['width']), 'height': 1000},
                                    device_scale_factor=2)
            errors = []
            page.on('console', lambda m: errors.append(m.text) if m.type == 'error' else None)
            page.goto(BASE + url, wait_until='networkidle', timeout=30000)
            page.wait_for_timeout(2000)
            page.screenshot(path=str(IMG / f'{name}.png'), clip=clip)
            print(f'  {name:18} console errors: {len(errors)}')
            page.close()
        browser.close()


def reconcile_dimensions():
    """The declared size must equal the file, or the page reflows as it loads."""
    changed = []
    for f in (ROOT / 'storybook' / 'public' / 'portfolio').glob('*.html'):
        s = f.read_text()
        for src in set(re.findall(r'src="(img/[a-z0-9-]+\.png)"', s)):
            out = subprocess.run(['sips', '-g', 'pixelWidth', '-g', 'pixelHeight', src],
                                 cwd=f.parent, capture_output=True, text=True).stdout
            w = re.search(r'pixelWidth: (\d+)', out).group(1)
            h = re.search(r'pixelHeight: (\d+)', out).group(1)
            before = s
            s = re.sub(r'(src="' + re.escape(src) + r'"[^>]*?)width="\d+" height="\d+"',
                       lambda m: m.group(1) + f'width="{w}" height="{h}"', s)
            if s != before and s != before:
                changed.append(f'{f.name}: {src} {w}x{h}')
        f.write_text(s)
    print('  declared dimensions reconciled')


if __name__ == '__main__':
    pattern = sys.argv[1] if len(sys.argv) > 1 else ''
    selected = [s for s in SHOTS if pattern in s[0]] if pattern else SHOTS
    print(f'shooting {len(selected)} of {len(SHOTS)}:')
    shoot(selected)
    reconcile_dimensions()
    print('\nnow run:  cd storybook && npm run build-storybook')
