---
name: storybook-cards
description: Upgrade the Card component family in Storybook from primitive previews into developer-facing and QA-facing documentation.
---

# Storybook Cards Skill

Use this skill when the task is about Card in Storybook.

## Read first — mandatory
Before doing anything, read these two files:
- `storybook/CLAUDE.md` — project rules, story architecture, validation checklist
- `storybook/PATTERNS.md` — concrete code patterns (argTypes, Interactive story, Gallery story, hierarchy)

## Objective
Turn the Card section into proper Storybook documentation, not just a gallery of previews.

## Title format for Card stories
```
'Iris Library/Card'           ← main Card family
'Iris Library/Card/KPI'       ← sub-variant
'Iris Library/Card/Layouts'
'Iris Library/Card/Reporting'
'Iris Library/Card/States'
```
Do NOT use `'Iris Library/Components/Card/...'` — the Components wrapper is removed.

## Story architecture (see PATTERNS.md for code)
Every Card story file must follow the two-type pattern:
- **Interactive story** — `render: (args) => card(args)` with full Controls + source.transform
- **Gallery stories** — each shows one fixed dimension, `controls.include` exposes orthogonal arg

## Do first
Before editing, output a short audit in exactly this format:

CARD STORYBOOK AUDIT
- Existing Card story files:
- Existing Card variants:
- KPI/chart/stat/data card variants found or not found:
- Missing Storybook docs capabilities (Interactive story? argTypes categories? source snippets?):
- Files you will edit:
- Files you will not touch:

Then continue.

## Hard scope limits
Work only on Card unless the user explicitly says otherwise.

Do not touch:
- Button
- Input
- Dropdown
- Navigation
- Sidebar
- Pagination
- Primitives
- unrelated global styles
- unrelated story files

Do not expand breadth.
Do not regenerate the whole library.

## Card docs target
The Card family should feel useful to:
- frontend developers
- QA
- design reviewers
- future codegen / AI assistance

## What a good Card section should contain

### 1. Overview
A Card overview story or docs section should explain:
- what Card is
- what variants exist
- when to use each variant
- what remains consistent across variants

### 2. Variants
Document meaningful existing Card use cases separately.
Typical examples, only if they exist in the current design/codebase:
- Default
- With Image
- Grid Card
- Hero Card
- Form Card
- KPI Card
- Metric Card
- Analytics Card
- Chart-like Card
- Summary/Data Card

Do not invent unsupported variants.

### 3. Anatomy
Where useful, explain Card composition:
- header
- media
- body
- footer
- actions
- value/trend area
- chart/legend area
- badge/status area

Clarify optional vs required parts where possible.

### 4. States
If relevant and supported, document:
- default
- hover
- selected
- disabled
- loading
- empty
- error

Only include states that actually make sense.

### 5. Developer-facing quality
For each important Card story, improve:
- story title
- args
- argTypes
- controls
- description
- source snippet
- realistic example content
- composition notes
- layout constraints
- safe areas for variation
- what should remain fixed

### 6. QA-facing quality
For each important Card story, add concise QA notes when useful:
- spacing consistency
- alignment
- truncation / overflow
- image/media behavior
- responsive layout expectations
- state rendering expectations
- KPI/value overflow behavior
- chart area stability if applicable
- card grouping/grid alignment if applicable

### 7. Preferred Storybook implementation
Prefer existing Storybook standards:
- use focused stories by use case
- use args
- use argTypes
- use Controls
- use Docs / Autodocs where possible
- use source snippets
- use MDX only if the existing docs quality is not enough

## UX documentation quality — REQUIRED (see PATTERNS.md §6 for code)

These are the practices UX specialists and design systems teams identify as most impactful.
Apply them to every Card story file.

### 1. Usage guidelines on the default export
Every Card story file must have `parameters.docs.description.component` with:
- What this Card variant is (one sentence)
- **When to use** (2–4 bullets, e.g. "KPI Card: use when showing a single top-level metric")
- **When NOT to use** (1–2 bullets, e.g. "Don't use KPI Card for multi-row tabular data")
- **Anatomy** (list the key parts: header, value, trend, chart area, footer, etc.)

### 2. Real content in args
Never use placeholder text.
- KPI card values: `12,480` / `+4.2%` / `Monthly active users` — not `0` / `Metric`
- Content card: realistic title + description mimicking actual product copy
- Vary content length across stories to surface truncation and layout issues

### 3. Status tag
```js
tags: ['autodocs', 'stable']  // or 'beta' / 'experimental' as appropriate
```

### 4. Accessibility notes
For any arg affecting a11y, note it in the description:
- Image alt text requirement
- ARIA role on interactive cards (e.g. `role="button"` if the whole card is clickable)
- Focus management for selectable cards
- Contrast requirement for color/status badges

### 5. Do's and Don'ts in story descriptions
For states (loading, error, empty) and tricky variants (truncation, overflow):
- 2–3 ✅/❌ bullets per story where real mistakes are common
- Skip if no clear guidance applies — don't invent rules

## Editing strategy
1. Inspect existing Card stories.
2. Reuse and improve existing stories first.
3. Add missing Card stories only if needed.
4. Keep file edits tightly scoped.
5. Avoid broad rewrites.

## Self-test before declaring done — MANDATORY

Do not say "done" or push until every applicable item below is verified.
Verify by reading the built output and story source, not by assuming the code is correct.

### 1. Build
```bash
npm run build-storybook
```
Must exit with `✓ built` and zero errors.

### 2. Interactive story — verify Controls are wired
- `render: (args) => card(args)` — args used, not ignored
- Every argType key exists in `args` with a matching default
- `source.transform` reads `storyCtx.args` and returns a real HTML string
- No `controls: { disable: true }` on this story

### 3. Gallery stories — verify scoped Controls are wired
For each gallery story:
- `args` has the scoped default (e.g. `{ color: 'primary' }`)
- `parameters.controls.include` lists the same keys
- `render` destructures and uses the arg — changing it would change all items

### 4. argTypes — verify structure
- Every argType has `table.category` (Content / Appearance / State / Data)
- Every argType has `table.defaultValue: { summary: value }`
- Summary matches the value in `args`

### 5. Source snippets
- Gallery stories have `parameters.docs.source.code` with real HTML
- Interactive story has `parameters.docs.source.transform`

### 6. Figma fidelity
- No variants that aren't confirmed in Figma node
- Colors match Figma hex values exactly
- Figma node ID in file header comment

### 7. Title format
- `'Iris Library/Card/SubVariant'` — no `Components/` wrapper

### 8. UX documentation
- Default export has `parameters.docs.description.component` with usage guidelines (When to use / When NOT to use / Anatomy)
- Args use realistic product content — no placeholder text, no lorem ipsum
- Default export has `tags: ['autodocs', 'stable']` or equivalent
- State/edge stories (loading, empty, overflow) have ✅/❌ guidance where useful

### If any check fails — fix before pushing. Never push broken work.

## Definition of done
Card is done for this pass when all self-tests above pass AND:
- it no longer looks like a primitive preview gallery
- story names are clearer
- the docs are more useful to developers
- QA has concrete guidance
- important variants are visible and understandable
