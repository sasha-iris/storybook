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

## Validation before pushing
- [ ] `npm run build-storybook` passes with no errors
- [ ] Interactive story: change a Control → component updates
- [ ] Gallery story: changing the scoped Control → all items update
- [ ] source.transform or source.code present on key stories
- [ ] Title matches approved hierarchy
- [ ] No Components/ wrapper in title
