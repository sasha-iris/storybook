# Colors

**Color tokens** are the single source of truth for all colors in the Iris Library.
They are CSS custom properties defined in \

## Variants

- Text color variables
- Background color variables
- Border color variables
- Semantic aliases (legacy)
- Type scale (H1 – Caption)
- Generic size scale (legacy)
- Font weights

## HTML examples

### Typography

```html
<!-- Page heading -->
<h1 style="font-size: var(--text-h1); font-weight: var(--font-bold); color: var(--color-text-heading); line-height: var(--leading-base);">
  Dashboard overview
</h1>

<!-- Section heading -->
<h2 style="font-size: var(--text-h2); font-weight: var(--font-normal); color: var(--color-text-heading);">
  Monthly performance
</h2>

<!-- Body text -->
<p style="font-size: var(--text-body-1); font-weight: var(--font-normal); color: var(--color-text-body);">
  Showing results for the last 30 days. Export the report to share with your team.
</p>

<!-- Supporting / secondary text -->
<p style="font-size: var(--text-body-2); color: var(--color-text-body-subtle);">
  Last updated 3 minutes ago
</p>

<!-- Label / hint -->
<span style="font-size: var(--text-caption); color: var(--color-text-fg-disabled);">
  Required field
</span>
```
