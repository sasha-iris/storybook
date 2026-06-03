# Iris Library — Getting Started

## Live Storybook

👉 **[https://sasha-iris.github.io/storybook/](https://sasha-iris.github.io/storybook/)**

Browse all components, interact with controls, and copy code snippets directly from the browser.

---

## Quick Setup

### Step 1 — Get the CSS

Download `iris-components.css` from the repository root and link it in your HTML:

```html
<link rel="stylesheet" href="path/to/iris-components.css">
```

Or import it in JavaScript/React:

```javascript
import 'iris-components.css';
```

That's it — all component styles and design tokens are included in this single file.

---

### Step 2 — Copy component code

1. Open the [live Storybook](https://sasha-iris.github.io/storybook/)
2. Navigate to any component (e.g. **Button → Interactive Controls**)
3. Use the **Controls panel** on the right to configure size, state, color, etc.
4. Copy the generated snippet — **HTML**, **React**, or **Component with Events**

The preview and the code update in real time as you change controls.

---

## Design Tokens

All colors, spacing, and typography use CSS custom properties defined in `:root`. You can use them in your own styles:

```css
.my-component {
  color: var(--color-text-body);
  background: var(--color-bg-white);
  border: 1px solid var(--color-border-default);
}
```

Key tokens:

| Token | Value | Usage |
|---|---|---|
| `--color-text-heading` | `#101828` | Headings, labels |
| `--color-text-body` | `#4a5565` | Body text |
| `--color-text-secondary` | `#6b7280` | Captions, hints |
| `--color-bg-white` | `#ffffff` | Card backgrounds |
| `--color-bg-secondary` | `#f9fafb` | Page background, hover |
| `--color-bg-tertiary` | `#f3f4f6` | Input backgrounds |
| `--color-border-default` | `#e5e7eb` | Borders, dividers |
| `--color-primary` | `#42389d` | Brand / interactive |

---

## Component Reference

### Button
```html
<button class="btn btn-primary btn-md">Label</button>
<button class="btn btn-outline-gray btn-sm">Cancel</button>
<button class="btn btn-primary btn-md btn-pill">Pill</button>
```
Sizes: `xs` `sm` `md` `lg` `xl`
Colors: `primary` `dark` `green` `red` `yellow` `blue` `gray` `light`

---

### Badge
```html
<span class="badge badge-lg badge-indigo">Active</span>
<span class="badge badge-sm badge-green">Done</span>
<span class="badge badge-lg badge-red">Error</span>
```
Sizes: `lg` `sm`
Colors: `gray` `blue` `indigo` `purple` `pink` `green` `yellow` `red`

---

### Card
```html
<div class="card">
  <div class="card-header">
    <h3 class="card-title">Title</h3>
  </div>
  <div class="card-body-padded">
    Content here
  </div>
</div>
```

---

### Progress Bar
```html
<div class="progress">
  <div class="progress-bar progress-bar-primary" style="width: 65%;"></div>
</div>
```
Colors: `primary` `green` `red` `yellow` `blue`

---

### Tabs
```html
<div class="iris-tabs">
  <button class="iris-tab iris-tab--active">Tab 1</button>
  <button class="iris-tab">Tab 2</button>
</div>
```

---

### Controls (Toggle / Checkbox / Radio)
```html
<!-- Toggle -->
<span class="iris-toggle iris-toggle--on" role="switch" aria-checked="true">
  <span class="iris-toggle__thumb"></span>
</span>

<!-- Checkbox -->
<span class="iris-checkbox iris-checkbox--checked" role="checkbox" aria-checked="true"></span>

<!-- Radio -->
<span class="iris-radio iris-radio--checked" role="radio" aria-checked="true"></span>
```

---

### Dropdown
```html
<button class="dropdown-trigger">Menu</button>

<div class="dropdown-menu" style="width:224px;">
  <button class="dropdown-item">
    <span class="dropdown-item__text">Action</span>
  </button>
  <hr class="dropdown-divider">
  <button class="dropdown-item danger">
    <span class="dropdown-item__text">Delete</span>
  </button>
</div>
```

---

## Dark Mode

The library supports dark mode via the `[data-theme="dark"]` attribute on `<html>` or `<body>`:

```html
<html data-theme="dark">
```

All color tokens automatically switch to their dark-mode values.

---

## Keeping Styles Up to Date

The source of truth is always `iris-components.css` in this repository.

- **GitHub:** [github.com/sasha-iris/storybook](https://github.com/sasha-iris/storybook)
- Check back for new components, token changes, and bug fixes
- After updating the file, no rebuild needed — just replace the CSS

---

## Questions?

Each component in Storybook includes:
- Do's and Don'ts
- All states and variants
- Live controls playground
- HTML, React, and Component code snippets
- Setup and accessibility notes
