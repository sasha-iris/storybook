# Lovable — Iris Design System

## Repository

- **GitHub:** https://github.com/sasha-iris/storybook
- **Branch:** `main`
- **Live Storybook:** https://sasha-iris.github.io/storybook/

## What this repo is

The **Iris Library** is a production design system. It is documented as a Storybook
(`@storybook/html-vite` v8) where all components are rendered as plain HTML strings.

> **Important for Lovable:** The component library itself does not ship React components.
> When building UI with Lovable, use the design tokens, visual patterns, and component
> structures described in `.lovable/rules/` as your reference. Reproduce the same
> visual output using whatever stack Lovable uses — the rules describe the intent,
> not the implementation language.

## Component families available

| Family | Coverage |
|--------|----------|
| **Button** | 10 colors × 5 sizes × 6 modifiers |
| **Card** | Content, Layout, KPI, Chart, Reporting, States |
| **Table** | Cells, Cohort analysis, Composed financial |
| **Colors** | Full semantic token system |
| **Typography** | Semantic scale + raw scale + weight tokens |
| **Brand / Logo** | Iris hexagonal mark, 4 sizes, light + dark |
| **Brand Icons** | 20+ brand icons (social, payments, platforms) |

## Core rules — always follow these

1. **Use design tokens, not raw values.**
   - Colors → `var(--color-text-*)`, `var(--color-bg-*)`, `var(--color-border-*)`
   - Typography → `var(--text-h1)` … `var(--text-caption)`, weights via `var(--font-*)`
   - Do not hard-code hex values or pixel sizes when a token exists.

2. **Use supported variants only.**
   - Every variant name is listed in `.lovable/rules/components/`.
   - Do not invent new variants. If none match, say so and use the closest one.

3. **Follow the visual spec exactly.**
   - Spacing, border-radius, font weights, and colors must match the rules files.
   - Do not add extra shadows, gradients, or decorative elements not in the spec.

4. **Storybook is the source of truth.**
   - The live Storybook at https://sasha-iris.github.io/storybook/ shows the exact
     intended appearance of every component.
   - When in doubt, match what is shown there.

5. **No unsupported components.**
   - If asked for a component not in the Iris Library, build it using the token system
     (colors, typography, spacing) and flag it as a custom component.

## Design tokens quick reference

```css
/* Text */
--color-text-heading: #101828
--color-text-body: #4a5565
--color-text-body-subtle: #6a7282
--color-text-fg-brand: #1447e6
--color-text-fg-success: #007a55
--color-text-fg-danger: #c70036
--color-text-fg-disabled: #99a1af

/* Backgrounds */
--color-bg-white: #ffffff
--color-bg-secondary-soft: #f9fafb
--color-bg-tertiary: #f3f4f6
--color-bg-brand: #5145cd

/* Borders */
--color-border-base: #e5e7eb

/* Typography */
--text-h1: 30px / 700
--text-h2: 24px / 400
--text-h3: 20px / 400
--text-body-1: 16px / 400
--text-body-2: 14px / 400
--text-caption: 12px / 400
```

## Brand

- Primary brand color: `#4208E5` (Iris purple)
- Light variant: `#C2BEFE`
- Logo: hexagonal mark, 4 sizes (24 / 32 / 48 / 64 px), light and dark modes
- Font family: system sans-serif via `var(--font-family-base)`

## File structure

```
.lovable/
  system.md                        ← this file (project-wide rules)
  rules/
    components/
      button.md                    ← Button colors, sizes, modifiers
      card.md                      ← All card families and variants
      table.md                     ← Cell types, row types, table patterns
    styling/
      colors.md                    ← Full color token reference
      typography.md                ← Full typography token reference

storybook/
  stories/                         ← Component story files (source of truth)
  public/assets/                   ← Iris logo SVG files
  .storybook/                      ← Storybook configuration
```
