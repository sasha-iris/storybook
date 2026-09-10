#!/usr/bin/env python3
"""Publish prototype pages from the working copy into the public site.

Run it after editing anything in iris-examples/pages:

    python3 scripts/publish-prototypes.py            # publish everything that changed
    python3 scripts/publish-prototypes.py segments   # only files matching a name

Three things it does that are easy to forget by hand, and each of which has
already gone wrong once:

  1. The working copies carry `<base href="http://localhost:8010/pages/">`.
     Publishing that took the live pages down, because every asset then
     resolved to a machine nobody else can reach.
  2. The design rationale in the comments names the product owner. That is
     private, and it creeps back in every time a note is pasted from the
     working documents.
  3. The shared stylesheets are cache-busted with `?v=N`. Change the CSS
     without changing N and the browser keeps serving the old file.

Every page is published twice: to `pages/`, which the portfolio links, and to
the site root, where the URLs the client already holds still point.
"""

import pathlib
import re
import subprocess
import sys

ROOT = pathlib.Path(__file__).resolve().parent.parent
SRC = ROOT / 'iris-examples'
PUB = ROOT / 'storybook' / 'public'
VERSIONED = ('segments-proto.css', 'segments-v2.css')


def clean(text: str) -> str:
    text = re.sub(r'[ \t]*<base href="http://localhost:\d+/[^"]*">\n', '', text)
    text = text.replace('MARKO_REQUIREMENTS', 'the requirements note')
    text = text.replace('MARKO_AUDIT', 'the review audit')
    text = re.sub(r'pnl-marko-feedback\.md', 'the review feedback log', text)
    text = re.sub(r'(^|(?<=[.!?—]\s))Marko\b', 'The product owner', text, flags=re.M)
    text = re.sub(r'\bMarko\b', 'the product owner', text)
    return text


def next_version() -> int:
    seen = {0}
    for f in list(PUB.glob('*.html')) + list((PUB / 'pages').glob('*.html')):
        seen.update(int(n) for n in re.findall(r'(?:%s)\?v=(\d+)' % '|'.join(
            a.replace('.', r'\.') for a in VERSIONED), f.read_text()))
    return max(seen) + 1


def main() -> int:
    pattern = sys.argv[1] if len(sys.argv) > 1 else ''
    changed = subprocess.run(['git', 'status', '--porcelain', 'pages', 'assets'],
                             cwd=SRC, capture_output=True, text=True).stdout.split('\n')
    rels = [line[3:].strip() for line in changed if line.strip()]
    rels = [r for r in rels if pattern in r] if pattern else rels
    if not rels:
        print('nothing changed in iris-examples/pages or /assets')
        return 0

    version = next_version()
    for rel in rels:
        src = SRC / rel
        if not src.exists():
            continue
        if src.suffix == '.html':
            text = clean(src.read_text())
            text = re.sub(r'(%s)\?v=\d+' % '|'.join(a.replace('.', r'\.') for a in VERSIONED),
                          lambda m: f'{m.group(1)}?v={version}', text)
            (PUB / rel).write_text(text)
            root = PUB / src.name
            if root.exists():
                root.write_text(text.replace('../assets/', './'))
            print(f'  {rel} -> pages/ and root, assets at v={version}')
        else:
            (PUB / rel).write_bytes(src.read_bytes())
            twin = PUB / src.name
            if twin.exists():
                twin.write_bytes(src.read_bytes())
            print(f'  {rel} -> assets/ and root')

    # keep the working copies on the same asset version, or the next publish regresses it
    for f in (SRC / 'pages').glob('*.html'):
        t = f.read_text()
        n = re.sub(r'(%s)\?v=\d+' % '|'.join(a.replace('.', r'\.') for a in VERSIONED),
                   lambda m: f'{m.group(1)}?v={version}', t)
        if n != t:
            f.write_text(n)

    published = [PUB / r for r in rels if (PUB / r).exists() and r.endswith('.html')]
    published += [PUB / pathlib.Path(r).name for r in rels
                  if r.endswith('.html') and (PUB / pathlib.Path(r).name).exists()]
    bad_base = [f.name for f in published if '<base href' in f.read_text()]
    bad_name = [f.name for f in published if re.search(r'marko', f.read_text(), re.I)]
    print('\nbase tags left :', bad_base or 'none')
    print('client name left:', bad_name or 'none')
    print('\nnow run:  cd storybook && npm run build-storybook')
    print('then re-shoot the case screenshots:  python3 scripts/shoot-portfolio.py')
    return 1 if (bad_base or bad_name) else 0


if __name__ == '__main__':
    raise SystemExit(main())
