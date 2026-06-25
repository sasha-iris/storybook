---
name: iris-page
description: Build any page, form, or UI feature in ~/experiments/iris-examples using ONLY existing Iris Storybook classes — zero custom CSS. Use this skill whenever the user asks to build, create, or extend a page/form/screen/dashboard/fragment in iris-examples or "with Iris classes / from Storybook" — signup, login, settings, dashboards, any UI. Also use when reviewing or fixing an existing iris-examples page. Trigger even if the user just says "build a form" or "make a page" in this project.
---

# iris-page — build features from Iris Storybook classes only

## Why this skill exists

iris-examples is an experiment: assemble real features ONLY from Iris Library
classes, and treat every missing piece as a documented gap for the Storybook
team — never as an excuse to invent styles. Pages built here double as a
validation suite for the design system. An invented inline style defeats the
entire purpose: it hides a library gap AND ships a lie.

## Where things live

| What | Path |
|---|---|
| Pages | `~/experiments/iris-examples/pages/*.html` |
| CSS (copies!) | `~/experiments/iris-examples/assets/{iris-components.css,styles.css,iris-tokens.css}` |
| CSS source of truth | `~/experiments/storybook/{iris-components.css,styles.css}` |
| Story sources (patterns) | `~/experiments/storybook/stories/*.stories.js` |
| Preview server | `.claude/launch.json` config `iris-examples`, port 8000 |
| Gap log (write-only) | `~/experiments/iris-examples/CONTINUE_HERE.md` + session log memory — record gaps THERE; do NOT read it for task context unless the user explicitly asks to continue previous work |

Git: commit to the LOCAL iris-examples repo. Never push to GitHub — the
project is intentionally local-only.

## Hard rules

1. **Zero custom CSS.** No `<style>` blocks, no invented inline styles. Inline
   styles are allowed only for *data* (width of a specific column, a demo
   avatar) and page-level layout scaffolding (centering the card on the page).
   If you are typing a hex color or a px padding that styles a component —
   stop, you are doing it wrong.
2. **Find the pattern in Storybook first.** Before writing markup, grep
   `~/experiments/storybook/stories/` for the component family and copy the
   structure from its `source.code` / builder verbatim. The story IS the spec.
3. **Never edit the CSS copies in assets/.** If CSS needs a change, that is a
   Storybook-side task (use the storybook-component skill, change BOTH
   styles.css and iris-components.css, then re-sync):
   `cp ~/experiments/storybook/{iris-components.css,styles.css} ~/experiments/iris-examples/assets/`
4. **Gap protocol.** Missing pattern (no horizontal form row, …) → do NOT
   invent. Render the minimal honest fallback (token-based inline, clearly
   commented `<!-- GAP: ... -->`) and record the gap in CONTINUE_HERE.md + the
   session log. Known logged gaps: `.form-group` is column-only (no "checkbox
   left / link right" row pattern); no "settings form row" pattern (label+desc
   left | control right); no page-heading class (h1+subtitle — compose from
   tokens).
   CLOSED gaps (do not re-log): text links — use Button/Link `.btn-link
   .btn-link-semibold|-medium .btn-{xs|sm|md}` (Figma 9484:151934, all 12
   variants covered); card footer links — `.card-footer-link`.

## Canon cheat-sheet (verified 2026-06-12)

- Brand purple **#42389d** = `--color-bg-primary` → buttons, checkbox accent,
  active states, links-as-actions. Hover **#362f78**.
- `--color-primary` **#1C64F2** is a DIFFERENT token (legacy blue, used by
  banner links etc.). Do not confuse the two; do not "fix" either of them.
- Inputs: bg **#f3f4f6**, border #e5e7eb, radius 8 (`.form-input`).
- Font: `font-family: inherit` or omit — never hardcode a stack.
- Forms: `form-group · form-label · form-input · form-helper ·
  form-check + form-check-input + form-check-label · btn btn-primary btn-md`.
- Tables: `iris-th / iris-td / iris-cell--*`; cohort: `iris-cohort-*`.
- Pages load assets in this order: iris-tokens.css → iris-components.css →
  styles.css. Keep that order.

## Workflow

1. Read the reference page closest to the task (`pages/signup.html` for forms).
2. Grep stories for each component family you need; lift markup from the story.
3. Build the page. Real content, no lorem ipsum.
4. **Validate classes mechanically** — every class in your HTML must exist in
   the CSS:
   ```bash
   python3 ~/experiments/.claude/skills/iris-page/scripts/check_classes.py \
     ~/experiments/iris-examples/pages/<page>.html
   ```
   Zero unknown classes is the bar. Fabricated class names are exactly the bug
   family this project exists to kill.
5. **Verify visually via computed styles, not by eye.** Start preview config
   `iris-examples`, open the page, and check with `getComputedStyle`:
   input bg `rgb(243,244,246)`, primary button bg `rgb(66,56,157)`,
   checkbox `accent-color: rgb(66,56,157)`, radius 8 on inputs / 12 on buttons.
   Take a screenshot as proof.
6. If the page has JS behaviour (validation, toggles) — exercise it in the
   preview (submit invalid input, click the toggle) and confirm the outcome.
7. Log what you built + any gaps to the session log memory; commit locally.

## Definition of done

- check_classes.py reports CLEAN
- computed styles match the canon cheat-sheet
- behaviour exercised in preview
- gaps (if any) recorded in CONTINUE_HERE.md and session log
- committed to local git, NOT pushed
