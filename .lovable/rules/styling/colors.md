# Color tokens

## Source

`storybook/stories/Colors.stories.js`

## Usage rule

Always use CSS custom properties (`var(--color-*)`) — never hard-code hex values unless no token exists for that exact usage.

---

## Text colors (`--color-text-*`)

| Token | Hex | Use case |
|-------|-----|----------|
| `--color-text-white` | `#ffffff` | Text on dark/brand surfaces |
| `--color-text-black` | `#000000` | Rare — maximum contrast |
| `--color-text-heading` | `#101828` | Page headings, card titles |
| `--color-text-body` | `#4a5565` | Body copy, descriptions |
| `--color-text-body-subtle` | `#6a7282` | Secondary/supporting text, captions |
| `--color-text-fg-brand` | `#1447e6` | Brand-colored links, active states |
| `--color-text-fg-success` | `#007a55` | Positive values, success messages |
| `--color-text-fg-danger` | `#c70036` | Errors, destructive actions, negative values |
| `--color-text-fg-warning-subtle` | `#d03801` | Warnings, at-risk values |
| `--color-text-fg-disabled` | `#99a1af` | Disabled labels, placeholder text |

---

## Background colors (`--color-bg-*`)

| Token | Hex | Use case |
|-------|-----|----------|
| `--color-bg-white` | `#ffffff` | Default page / card background |
| `--color-bg-secondary-soft` | `#f9fafb` | Alternate row, subtle section background |
| `--color-bg-tertiary` | `#f3f4f6` | Input background, disabled surface |
| `--color-bg-quaternary` | `#e5e7eb` | Dividers used as backgrounds, skeleton |
| `--color-bg-brand` | `#5145cd` | Primary brand fill (buttons, active indicators) |
| `--color-bg-success` | — | Success toasts, badges, row highlights |
| `--color-bg-danger` | — | Error toasts, badges, destructive zones |
| `--color-bg-warning` | — | Warning toasts, badges |

---

## Border colors (`--color-border-*`)

| Token | Use case |
|-------|----------|
| `--color-border-base` (`#e5e7eb`) | Default card/table borders |
| `--color-border-base-soft` | Subtle separators |
| `--color-border-dark` | Stronger dividers, active input outlines |
| `--color-border-brand` | Focused inputs, selected states |
| `--color-border-success` | Success-state input/card border |
| `--color-border-danger` | Error-state input/card border |
| `--color-border-warning` | Warning-state input/card border |

---

## Semantic pairing guide

| Situation | Text token | Background token | Border token |
|-----------|-----------|-----------------|-------------|
| Success state | `--color-text-fg-success` | `--color-bg-success` | `--color-border-success` |
| Error / danger | `--color-text-fg-danger` | `--color-bg-danger` | `--color-border-danger` |
| Warning | `--color-text-fg-warning-subtle` | `--color-bg-warning` | `--color-border-warning` |
| Brand / active | `--color-text-fg-brand` | `--color-bg-brand` | `--color-border-brand` |
| Disabled | `--color-text-fg-disabled` | `--color-bg-tertiary` | `--color-border-base-soft` |
| Default surface | `--color-text-body` | `--color-bg-white` | `--color-border-base` |

---

## Brand palette (raw — use only where no semantic token applies)

| Name | Hex |
|------|-----|
| Iris purple | `#4208E5` |
| Iris purple light | `#C2BEFE` |
| Gray/900 (heading) | `#101828` |
| Gray/800 | `#1f2937` |
| Gray/500 | `#6B7280` |
| Gray/400 | `#9CA3AF` |
