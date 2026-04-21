# Lovable — Iris Design System

## What this repo is

This is the **Iris Library** — a production design system implemented as a Storybook (`@storybook/html-vite` v8).  
All components are rendered as plain HTML strings. There is no React, no Vue, no framework component layer.

## When generating UI

**Always prefer existing Iris components** over writing raw HTML + inline styles from scratch.  
The Iris Library covers: Button, Card (all families), Table (Cells, Cohort, Composed), Colors, Typography, Brand/Logo, Brand Icons.

Before generating any UI element, check whether an Iris component covers the use case.  
Only fall back to raw HTML when no Iris component exists for that element.

## Core rules

1. **Use design tokens, not raw values.**  
   Colors → `var(--color-text-*)`, `var(--color-bg-*)`, `var(--color-border-*)`.  
   Typography → `var(--text-h1)` … `var(--text-caption)`, weight tokens `var(--font-*)`.  
   Do not hard-code `#4208E5`, `16px`, `700` etc. unless no token exists.

2. **Match the component API exactly.**  
   Use the args, modifiers, and variant names documented in `.lovable/rules/components/`.  
   Do not invent variant names not present in Storybook.

3. **HTML-string rendering.**  
   Components return HTML strings — not JSX. Do not add React wrappers, `className`, or JSX props.

4. **Storybook is the source of truth.**  
   Stories in `storybook/stories/` are the authoritative reference for every component.  
   Figma is reference only — always defer to the Storybook implementation.

5. **No unsupported variants.**  
   If a requested variant does not appear in the Storybook, say so and offer the closest supported option.

## File locations

| What | Where |
|------|-------|
| Stories | `storybook/stories/` |
| Brand assets | `storybook/public/assets/` |
| Storybook config | `storybook/.storybook/` |
| Component rules | `.lovable/rules/components/` |
| Styling rules | `.lovable/rules/styling/` |

## Brand

- Primary brand color: `#4208E5` (Iris purple)
- Light variant: `#C2BEFE`
- Logo mark: hexagonal SVG — use `irisMarkImg({ size })` from `brand-assets.js`
- Full logo: `irisLogo({ size, dark })` from `brand-assets.js`
