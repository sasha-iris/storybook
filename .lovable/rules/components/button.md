# Button component rules

## Source

`storybook/stories/Button.stories.js`

## Colors (the `color` prop)

Supported values — use exactly these strings:

| Value | Notes |
|-------|-------|
| `primary` | Brand purple, default choice |
| `dark` | Near-black |
| `green` | Semantic success |
| `red` | Semantic danger/destructive |
| `yellow` | Semantic warning |
| `blue` | Informational |
| `gray` | Neutral secondary |
| `alternative` | Outlined/ghost alternative |
| `light` | Light surface |
| `purple` | Explicit purple (vs primary) |

Do not use color values outside this list.

## Sizes (the `size` prop)

| Value | Notes |
|-------|-------|
| `xs` | Tight spaces, inline actions |
| `sm` | Default compact |
| `md` | Standard |
| `lg` | Prominent actions |
| `xl` | Hero / marketing CTAs |

## Modifiers (boolean props)

| Prop | Effect |
|------|--------|
| `outline` | Outlined/ghost style |
| `pill` | Full border-radius (`--radius-full`) |
| `disabled` | Non-interactive, reduced opacity |
| `iconLeft` | Icon slot before label |
| `iconRight` | Icon slot after label |
| `iconOnly` | Square icon-only button (no label) |

## Border-radius token

Buttons use `var(--radius-lg)` (= 12px) by default.  
Pill buttons use `var(--radius-full)`.

## Usage rules

- Use `primary` for the single most important action per page/card.
- Use `gray` or `alternative` for secondary/cancel actions.
- Use `red` only for destructive or irreversible actions.
- Do not combine `iconLeft` and `iconRight` on the same button.
- `iconOnly` requires an accessible `aria-label` — always include it.
- Disabled buttons must not have `onClick` handlers.

## What NOT to do

- Do not create custom color variants outside the 10 supported colors.
- Do not use raw hex for button background — always use the button color prop.
- Do not use `xl` in dense UI (tables, cards, sidebars).
