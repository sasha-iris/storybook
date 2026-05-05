# Iris Library — Recolor Guide for Lovable

Use this guide to apply the Iris Library brand color system to an existing Lovable project.

---

## Quick start (2 steps)

### Step 1 — Paste CSS variables

Go to **Settings → Custom CSS** and paste the contents of `iris-recolor.css`.

This overrides the default shadcn/ui color variables with Iris Library colors:
- Primary brand color: **#42389d** (purple)
- Accent / secondary CTA: **#1447e6** (blue)
- Destructive: **#c70036** (red)
- Success: **#007a55** (emerald)

### Step 2 — Prompt Lovable AI

Use this prompt in the Lovable chat to recolor your existing components:

```
Recolor this project using the Iris Library design system.

Primary brand color: #42389d (brand purple — use for primary buttons, active nav, focus rings, checkboxes, toggles)
Primary hover: #362f78 (darker purple — use on button hover/active)
Secondary CTA: #1447e6 (blue — use for secondary actions and links)
Success: #007a55 (emerald)
Danger/destructive: #c70036 (red)
Warning: #d03801 (orange)

Text:
- Headings: #101828
- Body: #4a5565
- Muted / placeholder: #6b7280
- Disabled: #99a1af

Backgrounds:
- Page: #f9fafb (gray-50)
- Surface / card: #ffffff
- Subtle: #f3f4f6 (gray-100)

Borders:
- Default: #e5e7eb (gray-200)
- Input: #d1d5db (gray-300)
- Focus ring: #42389d (brand purple)

Border radius: 12px (0.75rem) for buttons and inputs, 8px (0.5rem) for small elements.
Font: Inter (400/500/600/700).

Replace all existing primary/blue tones with the brand purple #42389d. Keep destructive red, success green, and warning orange as specified above. Update all focus rings, active states, checkboxes, and toggle colors to match.
```

---

## Color reference

| Role | Hex | HSL (shadcn format) |
|------|-----|---------------------|
| Primary (brand) | `#42389d` | `246 47% 42%` |
| Primary hover | `#362f78` | `246 44% 33%` |
| Accent (blue) | `#1447e6` | `225 84% 49%` |
| Destructive | `#c70036` | `344 100% 39%` |
| Success | `#007a55` | `162 100% 24%` |
| Warning | `#d03801` | `16 99% 41%` |
| Heading text | `#101828` | `220 43% 11%` |
| Body text | `#4a5565` | `215 16% 35%` |
| Muted text | `#6b7280` | `220 9% 46%` |
| Page background | `#f9fafb` | `210 20% 98%` |
| Card background | `#ffffff` | `0 0% 100%` |
| Subtle background | `#f3f4f6` | `220 14% 96%` |
| Border default | `#e5e7eb` | `220 13% 91%` |
| Input border | `#d1d5db` | `216 12% 84%` |

---

## Brand color scale (full purple palette)

| Token | Hex | Use |
|-------|-----|-----|
| brand/300 | `#b4c6fc` | Disabled checked state, subtle fills |
| brand/500 | `#6875f5` | Chart lines, trend indicators |
| brand/600 | `#5145cd` | Active background, brand fills |
| brand/700 | `#5145cd` | Border accents |
| brand/800 | `#42389d` | **Primary button, CTAs** |
| brand/900 | `#362f78` | Primary hover, dropdown trigger |

---

## Font setup

Add to your `index.html` `<head>` if Inter is not already loaded:

```html
<link rel="stylesheet"
  href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap">
```

Then in Tailwind config or Custom CSS:

```css
body { font-family: 'Inter', ui-sans-serif, system-ui, sans-serif; }
```

---

## Files in this package

| File | Use |
|------|-----|
| `iris-recolor.css` | Paste into Lovable Custom CSS to override shadcn color variables |
| `iris-recolor-guide.md` | This file — recolor instructions and color reference |
| `iris-tokens.css` | Full CSS variables (234 lines) — all Iris design tokens |
| `iris-components.css` | All Iris component CSS classes (2570 lines) |
| `iris-design-system.css` | Single combined file — tokens + components (2809 lines) |
