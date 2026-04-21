# Typography tokens

## Source

`storybook/stories/Typography.stories.js`

## Usage rule

Use CSS custom properties (`var(--text-*)`, `var(--font-*)`) — do not hard-code `font-size`, `font-weight`, or `line-height` values directly.

---

## Semantic scale (preferred for UI text)

Use these tokens for all product UI text. They carry semantic meaning and should be preferred over the raw scale.

| Token | Size | Weight | Use case |
|-------|------|--------|----------|
| `--text-h1` | 30px | 700 | Page title, hero heading |
| `--text-h2` | 24px | 400 | Section heading |
| `--text-h3` | 20px | 400 | Sub-section heading, card title |
| `--text-h4` | 18px | 400 | Widget title, sidebar heading |
| `--text-body-1` | 16px | 400 | Primary body copy |
| `--text-body-2` | 14px | 400 | Secondary body copy, table cell text |
| `--text-caption` | 12px | 400 | Labels, metadata, timestamps, helper text |

**Note:** `--text-h1` is the only heading that is bold (700) by default. `h2`–`h4` are regular weight — add `var(--font-semibold)` or `var(--font-bold)` explicitly when a heavier heading is needed.

---

## Raw type scale (for precise control)

Use when the semantic scale doesn't match the required size exactly.

| Token | Size | Weight |
|-------|------|--------|
| `--text-5xl` | 48px | 800 |
| `--text-4xl` | 36px | 800 |
| `--text-3xl` | 30px | 700 |
| `--text-2xl` | 24px | 700 |
| `--text-xl` | 20px | 600 |
| `--text-lg` | 18px | 600 |
| `--text-md` | 16px | 500 |
| `--text-sm` | 14px | 400 |
| `--text-xs` | 12px | 400 |

---

## Font weight tokens

| Token | Value | Use case |
|-------|-------|----------|
| `--font-light` | 300 | Decorative large numbers, display text |
| `--font-normal` | 400 | Default body text |
| `--font-medium` | 500 | Emphasized body, input labels |
| `--font-semibold` | 600 | Subheadings, active nav items, button labels |
| `--font-bold` | 700 | Headings, KPI values |
| `--font-extrabold` | 800 | Display numbers, hero KPIs |

---

## Base font family

All text uses `var(--font-family-base)` — the system sans-serif stack.  
Do not override `font-family` on individual elements unless rendering a monospace code block.

---

## Quick reference — common UI patterns

| Element | Token combination |
|---------|------------------|
| Page title | `--text-h1` |
| Card title | `--text-h3` + `--font-semibold` |
| Table column header | `--text-caption` + `--font-semibold` + `--color-text-body-subtle` |
| Table cell value | `--text-body-2` + `--color-text-body` |
| KPI big number | `--text-3xl` or `--text-4xl` + `--font-bold` |
| KPI trend label | `--text-caption` + semantic color token |
| Button label (md) | `--text-body-2` + `--font-semibold` |
| Form label | `--text-body-2` + `--font-medium` |
| Helper / caption | `--text-caption` + `--color-text-body-subtle` |
| Metadata timestamp | `--text-caption` + `--font-normal` + `--color-text-fg-disabled` |
