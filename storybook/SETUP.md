# Iris Library — Getting Started

## Using Components in Your Project

All components in this library require CSS styles. Follow these steps to set up:

### Option 1: Copy CSS File (Recommended for Small Projects)

1. **Copy the styles file** from this repository:
   - `iris-components.css` — Contains all component styles + Foundation tokens

2. **Link in your HTML:**
   ```html
   <link rel="stylesheet" href="path/to/iris-components.css">
   ```

3. **Copy component HTML** from Storybook:
   - Open http://localhost:61051 (or your deployed Storybook)
   - Navigate to the component (e.g., Button → Interactive Controls)
   - Adjust controls to match your needs
   - Click **Copy** button to copy HTML or React code

### Option 2: Import as CSS Module

```javascript
import 'iris-library/iris-components.css';
```

Then use the component classes:
```html
<button class="btn btn-primary btn-md">
  <span>Click me</span>
</button>
```

## Foundation Tokens

All colors use CSS custom properties (tokens) defined in `:root`:

```css
/* Available in iris-components.css */
:root {
  --color-text-body: #4a5565;
  --color-text-heading: #101828;
  --color-bg-white: #ffffff;
  --color-bg-primary: #42389d;
  --color-border-default: #e5e7eb;
  /* ...and many more */
}
```

Use tokens in your own styles:
```css
.my-component {
  color: var(--color-text-body);
  background: var(--color-bg-white);
  border-color: var(--color-border-default);
}
```

## Component Reference

### Button
Classes: `.btn .btn-{color} .btn-{size}`
- Colors: primary, dark, green, red, yellow, blue, gray, alternative, light
- Sizes: xs, sm, md, lg, xl
- Modifiers: `.btn-outline-{color}`, `.btn-pill`, `.btn-icon`

Example:
```html
<button class="btn btn-primary btn-md">
  <span>Button text</span>
</button>
```

### Badge
Classes: `.badge .badge-{color} .badge-{size}`
- Colors: indigo, green, red, yellow, blue, gray, purple, pink, cyan
- Sizes: lg, sm
- Modifiers: `.badge-icon`, `.badge-dismissible`

Example:
```html
<span class="badge badge-lg badge-indigo">Active</span>
```

### Progress Bar
Classes: `.progress .progress-bar .progress-bar-{color}`
- Colors: primary, green, red, yellow, blue

Example:
```html
<div class="progress">
  <div class="progress-bar progress-bar-primary" style="width: 65%;"></div>
</div>
```

## Where to Get Latest Styles

- **GitHub:** [sasha-iris/storybook](https://github.com/sasha-iris/storybook)
- **File:** `iris-components.css`
- **Updates:** Check back regularly for new components and token changes

## Questions?

Refer to the component documentation in Storybook for:
- Do's and Don'ts
- When to use each color
- Component variants and states
- HTML and React code examples
