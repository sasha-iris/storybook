# Iris component library, and the pages built from it

A design system for a financial analytics product — 47 components, 249 stories — together with
the prototype pages built on top of it.

**[The component library, running](https://sasha-iris.github.io/storybook/)**

---

## What is here

| Path | What it is |
| --- | --- |
| `storybook/stories/` | The library: 47 component families, documented as stories with copyable code |
| `storybook/iris-components.css`, `iris-tokens.css` | The CSS the product consumes, and its design tokens |
| `storybook/public/pages/` | Prototype pages, each built only from library classes |
| `iris-react/` | Thin React wrappers over the same CSS — no runtime CSS-in-JS |
| `.lovable/` | Component rules for the low-code environment that consumes the same stylesheet |

## Three rules the work runs on

**If it is not in Figma, it does not go in Storybook.** Components that existed only in the
documentation were deleted rather than backfilled with designs. A library that documents things
the product does not have is worse than an incomplete one.

**A prototype never invents data.** Prototypes get read as specification, so a record that was
never calculated shows no data instead of a plausible number, and an estimated value says that it
is estimated.

**Pages use library classes only.** When a page needs something the library does not have, that is
a finding about the library — recorded as a gap, not solved with a local class. Several
accessibility fixes reached the design system that way.

## Running it locally

```bash
cd storybook && npm ci && npm run storybook
```

The prototype pages are static and need no build:

```bash
python3 -m http.server 8022 --directory storybook/public
```

Pushing to `main` builds and deploys the site to GitHub Pages, so a push is a release.
