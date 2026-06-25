#!/usr/bin/env python3
"""Validate that every CSS class used in an HTML page exists in the Iris CSS.

Usage: check_classes.py <page.html> [more.html ...]

Checks against the CSS *sources of truth* in ~/experiments/storybook/
(falls back to iris-examples/assets copies if the storybook repo is absent).
Exit code 0 = all pages clean, 1 = unknown classes found.
"""
import re
import sys
from pathlib import Path

STORYBOOK = Path.home() / "experiments/storybook"
ASSETS = Path.home() / "experiments/iris-examples/assets"

# Classes that are deliberately not components (page scaffolding, JS hooks)
WHITELIST = {"page", "page-wrap", "js-hook"}


def css_classes(*files):
    classes = set()
    for f in files:
        if f.exists():
            classes |= set(re.findall(r"\.([a-zA-Z][a-zA-Z0-9_-]*)", f.read_text()))
    return classes


def html_classes(path):
    used = set()
    for attr in re.findall(r'class="([^"]*)"', path.read_text()):
        for tok in attr.split():
            if re.match(r"^[a-zA-Z][a-zA-Z0-9_-]*$", tok):
                used.add(tok)
    return used


def main():
    if len(sys.argv) < 2:
        sys.exit(__doc__)
    base = STORYBOOK if (STORYBOOK / "styles.css").exists() else ASSETS
    known = css_classes(base / "styles.css", base / "iris-components.css",
                        ASSETS / "iris-tokens.css")
    if not known:
        sys.exit("ERROR: no CSS files found to check against")

    failed = False
    for arg in sys.argv[1:]:
        page = Path(arg)
        unknown = sorted(html_classes(page) - known - WHITELIST)
        if unknown:
            failed = True
            print(f"{page.name}: UNKNOWN classes (not in any Iris CSS): {unknown}")
        else:
            print(f"{page.name}: CLEAN")
    sys.exit(1 if failed else 0)


if __name__ == "__main__":
    main()
