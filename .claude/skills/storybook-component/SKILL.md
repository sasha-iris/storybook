---
name: storybook-component
description: Upgrade any Iris Library component family in Storybook — pull from Figma, apply correct patterns, slot into the right hierarchy. Use for Button, Table, Navigation, Input, Badge, or any non-Card family.
---

# Storybook Component Skill

Use this skill when working on any Storybook component family that is NOT Card
(Card has its own skill: storybook-cards).

## Read first — mandatory
Before doing anything, read:
- `storybook/CLAUDE.md` — project rules, hierarchy, story architecture, validation checklist
- `storybook/PATTERNS.md` — argTypes template, Interactive story, Gallery story, source snippets, hierarchy

## Sidebar hierarchy
The approved flat-by-family structure (from CLAUDE.md):

```
Iris Library/
  Foundation/    Colors, Typography
  Brand/         Logo, Icons
  Button/        Button + Button/Group / Link / Social / Special
  Card/          Card/Basics / KPI / Layouts / Reporting / States
  Navigation/    Navigation/Sidebar
  Table/         Table/Cells / Cohort / Composed
```

Title format:
```js
// ✅ Correct
title: 'Iris Library/Button'
title: 'Iris Library/Button/Group'
title: 'Iris Library/Navigation/Sidebar'

// ❌ Wrong — Components wrapper removed
title: 'Iris Library/Components/Button'
```

For a new family not in the list: add one top-level slot (`Iris Library/Input`),
then update the hierarchy table in CLAUDE.md.

## Do first — audit
Before editing any file, output:

COMPONENT AUDIT: [FamilyName]
- Story file(s): [list]
- Current title(s): [list]
- Stories found: [list]
- Interactive story present? yes/no
- argTypes with categories? yes/no
- source snippets present? yes/no
- Figma node IDs referenced? yes/no
- Files to edit: [list]
- Files not to touch: [list]

## Required story pattern (from PATTERNS.md)

### Interactive story
```js
export const Interactive = {
  name: 'Interactive (Controls)',
  render: (args) => component(args),
  parameters: {
    docs: {
      source: {
        transform: (_src, ctx) => {
          // build clean HTML from ctx.args
        },
      },
    },
  },
};
```

### Gallery story (scoped Controls)
```js
export const AllColors = {
  name: 'Colors — all variants',
  args: { size: 'md' },
  parameters: { controls: { include: ['size'] } },
  render: ({ size }) => `...all colors using ${size}...`,
};
```

## Figma workflow
1. Find the Figma node ID from existing story comments or ask the user
2. Fetch with `get_design_context(nodeId, fileKey)` — fileKey: `ZKtEULdYKaXe5uQl1J6ijI`
3. Only implement variants confirmed in Figma — do not invent
4. Note the node ID in the story file header comment

## UX documentation quality — REQUIRED (see PATTERNS.md §6 for code)

These are the practices UX specialists identify as most valuable in component libraries.
Apply them to every component family.

### 1. Usage guidelines on the default export
Every component must have a `parameters.docs.description.component` with:
- What the component is (one sentence)
- **When to use** (2–4 bullets)
- **When NOT to use** (1–3 bullets with alternatives)
- **Anatomy** (brief — key parts, which are optional)

### 2. Real content in args
Never use placeholder text. Use realistic labels and data.
- Buttons: real action verbs (`Save changes`, `Export CSV`, `Cancel`)
- Cards: real metric names and plausible numbers (`Monthly active users`, `12,480`)
- Vary content length across stories to surface truncation and layout bugs

### 3. Status tag on the default export
```js
tags: ['autodocs', 'stable']  // or 'beta', 'deprecated', 'experimental'
```
Always include `autodocs`. Add stability tag based on how complete the component is.

### 4. Accessibility notes in argType descriptions
For any arg affecting a11y (label, aria-*, disabled, icon-only, color):
- Note which ARIA attribute it maps to
- Note keyboard behavior (Enter, Space, Tab, Escape) if relevant
- Note contrast requirement for color variants (WCAG AA: 4.5:1 text / 3:1 UI)

### 5. Do's and Don'ts in story descriptions
For states and edge-case stories, add 2–4 ✅/❌ bullets in `parameters.docs.description.story`.
Only add when a real mistake is possible. Skip if no clear guidance exists.

### 6. Responsive note (when applicable)
If the component behaves differently on mobile, note it in the relevant story description.
Omit entirely if there is no mobile-specific behavior.

## Self-test before declaring done — MANDATORY

Do not say "done" or push until every applicable item below is verified.
Verify by reading the built output, not by assuming the code is correct.

### 1. Build
```bash
npm run build-storybook
```
Must exit with `✓ built` and zero errors. Warnings are acceptable.

### 2. Interactive story — verify Controls are wired
Read the render function. Confirm:
- `render: (args) => component(args)` — args parameter is used, not ignored
- Every argType in `argTypes` has a matching key in `args`
- `source.transform` reads from `storyCtx.args` and builds a real HTML string
- No `controls: { disable: true }` on this story

### 3. Gallery stories — verify scoped Controls are wired
For each gallery story, read the render function. Confirm:
- `args` contains the scoped default (e.g. `{ size: 'md' }`)
- `parameters.controls.include` lists the same keys as `args`
- `render: ({ size }) => ...` destructures and uses the arg — not ignored
- If `size` is the control, changing it would visibly affect all items in the output

### 4. argTypes — verify structure
Grep the story file for `table.category`. Confirm:
- Every argType has `table.category` (Content / Appearance / State)
- Every argType has `table.defaultValue: { summary: value }`
- The summary value matches the default in `args`

### 5. Source snippets — verify present
Confirm at least one of:
- `parameters.docs.source.code` on gallery stories with a real HTML example
- `parameters.docs.source.transform` on Interactive story that builds HTML from args

### 6. Hierarchy — verify title
Grep for `title:` in the story file. Confirm:
- Matches `'Iris Library/FamilyName'` or `'Iris Library/FamilyName/SubVariant'`
- Does NOT contain `Components/`
- Family name matches the approved list in CLAUDE.md

### 7. Figma fidelity — verify no invented content
For each story, confirm:
- Colors match Figma tokens (check hex values against Figma node or CLAUDE.md tokens)
- No variants added that aren't confirmed in Figma
- Figma node ID noted in file header comment if component was pulled from Figma

### 8. UX documentation — verify quality
- Default export has `parameters.docs.description.component` with usage guidelines
- Args use real content (not "Button text", "Lorem ipsum", "Label")
- Default export has `tags: ['autodocs', 'stable']` (or other appropriate status)
- At least one argType description mentions ARIA or keyboard behavior if relevant
- Story descriptions for state/edge-case stories have Do/Don't guidance

### If any check fails
Fix before pushing. Do not push a half-working feature and say "should work".
Do not ask the user to check — check yourself first.
