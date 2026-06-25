---
name: storybook-a11y
description: Accessibility review pass for Iris Storybook component families — ARIA attributes, keyboard interaction, WCAG AA contrast (4.5:1 text / 3:1 UI). Use this skill whenever the user asks to check, audit, or improve accessibility / a11y / contrast / ARIA / keyboard support of any Storybook story, component family, or the whole library — even if they just say "check a11y" or "review button accessibility".
---

# storybook-a11y — accessibility review for Iris Storybook

## Why this skill exists

The fidelity validation (classes, colors, Figma) is done; a11y was explicitly
out of its scope ("a11y / responsive / states were not checked" — CONTINUE_HERE).
PATTERNS.md §6.4 sets the requirements but nothing enforces them. This skill is
the enforcement pass, aligned with the project's A11y-first practice.

## Scope discipline

- Review ONE component family per pass (same depth-over-breadth rule as
  storybook-component). The user names the family, or work through
  DEV_HANDOFF.md "USE NOW" list top-down.
- This is a REVIEW skill: findings first, fixes second. Markup fixes (adding
  `aria-label`, `role`, `type="button"`) apply directly. **Color/contrast
  fixes never apply silently** — a Figma-canonical color that fails WCAG is a
  designer question: record it in the story's QA notes + CONTINUE_HERE as
  "pending designer confirmation", exactly like the Union-color precedent.
  Changing a canon color to pass contrast would break Figma fidelity — the
  designer decides which constraint wins.

## What to check (per story, not per file)

### 1. ARIA / semantics — read the builder HTML in the .stories.js
- Icon-only buttons → `aria-label` (+ `title` for tooltip)
- Active nav/menu item → `aria-current="page"`
- Dismiss buttons → `aria-label="Dismiss"`, `type="button"`
- Toasts → `role="status" aria-live="polite"`; errors → `role="alert"
  aria-live="assertive"`
- Tooltips → `role="tooltip"` + trigger `aria-describedby="<id>"`
- Decorative SVG → `aria-hidden="true"`; informative SVG → accessible name
- Form inputs → associated `<label>` (wrap or `for=`), helper text linked via
  `aria-describedby` when it conveys requirements/errors
- Modal → `role="dialog" aria-modal="true"`, labelled by its title
- One `role="banner"` per page max (it maps to the header landmark)
- Interactive elements are real `<button>`/`<a>`, not styled `<div>`s; if a
  story uses a `<div class="...-item">` for brevity, the SNIPPET must still
  show the accessible element — devs copy snippets, not previews

### 2. Keyboard — note in argTypes/story descriptions per PATTERNS §6.4
- Enter/Space activate; Escape closes overlays (modal, dropdown, datepicker)
- Tab order documented for composite widgets; focus trap noted for modals
- Disabled state: `disabled` attribute (not just opacity) so it leaves tab order
- Focus indicator: check `:focus-visible` styles exist for interactive classes

### 3. Contrast — measure, don't eyeball
Build is static: serve `storybook-static` (launch.json config
`storybook-static`, port 8021), open the story iframe
(`/iframe.html?id=<story-id>&viewMode=story`) and compute ratios with
`preview_eval` — read the helper snippet in
[references/contrast.md](references/contrast.md). Thresholds (WCAG AA):
- normal text ≥ **4.5:1** (text < 24px / < 18.7px bold)
- large text ≥ **3:1**
- UI components & state indicators (borders of inputs, focus rings,
  checkbox borders, badge text on tinted bg) ≥ **3:1**

Known risk spots from past sessions: white text on `--color-primary` blue
buttons, badge color pairs (`.badge-*` tinted backgrounds), `.tooltip-light`
on white pages, placeholder text `#9ca3af` on `#f3f4f6` inputs, disabled
states, dark-theme variants (ListGroup/Sidebar/Card dark).

## Output format — ALWAYS this structure

```
A11Y REVIEW: <Family>
| # | Story | Issue | Kind (ARIA/Keyboard/Contrast) | Severity | Fix |
...
Measured contrast: <element pair> — <ratio>:1 (needs ≥ X) ✓/✗
Fixed now: <markup fixes applied>
Designer questions: <canon colors failing contrast — logged, not changed>
```

## Fix rules (when applying markup fixes)

- Fix the BUILDER and the SNIPPETS together — preview and snippet must stay
  identical (definition of done from the fidelity work).
- A11y attributes go into story files only; if a fix needs CSS (e.g. adding
  `:focus-visible`), follow the CSS-sync rule: BOTH styles.css and
  iris-components.css, then `cp` to iris-examples/assets/.
- After fixes: `npm run build-storybook` must pass; re-verify the changed
  story in the preview; update the story's QA notes; log to session memory.
- No pushes — local only, user decides when to deploy.
