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

## Editing strategy
1. Inspect existing Card stories.
2. Reuse and improve existing stories first.
3. Add missing Card stories only if needed.
4. Keep file edits tightly scoped.
5. Avoid broad rewrites.

## Definition of done
Card is done for this pass when:
- it no longer looks like a primitive preview gallery
- story names are clearer
- the docs are more useful to developers
- QA has concrete guidance
- important variants are visible and understandable
- the section is presentation-ready without broadening the project
