# Project instructions for Claude Code

## Main goal
Work inside the existing Storybook project.
Do not rebuild the library from scratch.
Improve the current Storybook incrementally.

## Priority rule
Prefer depth over breadth.
When asked to improve a component family, focus on one family only and do not expand to unrelated components unless explicitly requested.

## Storybook standard for this project
Every component family should move toward a proper developer-facing Storybook documentation experience, not just visual previews.

For any component family, prefer:
- focused stories by use case
- args
- argTypes
- Controls
- Docs / Autodocs
- source snippets
- concise developer notes
- concise QA notes
- realistic examples where useful

## Scope control
If the task mentions only one family such as Card:
- do not work on Buttons, Inputs, Dropdowns, Navigation, Sidebar, Pagination, Primitives, or any other family
- do not broaden the task
- do not regenerate the whole library

## Reuse policy
Before creating new stories or files:
1. inspect what already exists
2. improve existing stories first
3. only create new files if clearly necessary

## Documentation quality
A component family is not considered complete if it only has primitive visual preview stories.
It should include:
- clear story naming
- clear variant grouping
- developer-facing description
- QA-facing notes
- source snippet or code usage example where possible
- props / args documentation where possible

## Card-specific intent
Card is treated as a high-priority family.
When working on Card:
- distinguish between content cards, image cards, grid cards, hero cards, form cards, KPI cards, metric cards, analytics cards, and chart-like cards if they exist in the design or codebase
- do not invent unsupported variants
- if a variant is not clearly present, say so

## Editing behavior
Before major edits, produce a short audit first in plain text:
- existing files
- existing variants
- missing docs features
- files to edit
- files not to touch

## Token discipline
Be efficient.
Avoid broad rewrites, broad CSS rewrites, or expanding unrelated areas.
Prefer improving a small number of stories to a high standard
