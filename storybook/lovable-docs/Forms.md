# Forms

**Forms** collects the core form input elements used across the Iris Library: Input Field, Floating Label, Textarea, File Upload, Tag Input, and Read-only display.

**When to use**
- Any user-facing form: sign-up, settings, contact, checkout
- Filtering and search configuration panels
- Inline editing within data tables or cards

**When NOT to use**
- For single-item selection from a list → use **Dropdown** or **Select**
- For toggle/checkbox/radio → use **Controls**
- For multi-value selection → use **Multiselect** or **Tag Input**

**Anatomy (Input Field)**
- Label (required) — \

## Variants

- Input — all states
- Input — all sizes
- Textarea — all types
- Read-only field
- Select — all states
- Multiselect — variants
- All types

## CSS classes

```
.bg-gray-100
.bg-gray-50
.bg-white
.block
.border
.border-gray-200
.border-gray-300
.border-l
.border-r
.border-t
.flex
.flex-1
.flex-wrap
.font-medium
.gap-1
.gap-2
.hidden
.inline-flex
.iris-range
.items-center
.justify-center
.mb-1
.mb-4
.mt-1
.outline-none
.overflow-hidden
.p-2
.p-3
.placeholder
.placeholder-gray-400
.px-2
.px-3
.resize-none
.resize-y
.rounded
.rounded-lg
.tag-pill
.text-gray-400
.text-gray-500
.text-gray-600
.text-gray-900
.text-sm
.text-xs
.w-full
```

## HTML examples

### Forms

```html
<!-- Normal -->
<div><input style="border:1px solid #d1d5db;" /></div>

<!-- Focus / typing -->
<div><input style="border:1px solid #155dfc;" /></div>

<!-- Success -->
<div><input style="border:1px solid #0e9f6e;" /></div>

<!-- Error -->
<div><input style="border:1px solid #f05252;" /></div>

<!-- Disabled -->
<div><input disabled style="border:1px solid #d1d5db;opacity:0.6;" /></div>
```

### Forms

```html
<!-- Small 37px -->
<input style="height:37px;" class="..." />

<!-- Regular 42px (default) -->
<input style="height:42px;" class="..." />

<!-- Large 52px -->
<input style="height:52px;" class="..." />
```

### Forms

```html
<!-- Border bottom — initial -->
<div style="border-bottom:2px solid #d1d5db;padding:12px;">
  <span style="color:#6b7280;font-size:14px;">Placeholder text</span>
</div>

<!-- Border bottom — active (label floated) -->
<div style="border-bottom:2px solid #155dfc;padding:6px 0 8px;">
  <div style="font-size:12px;font-weight:500;color:#155dfc;">Placeholder text</div>
  <span style="color:#111928;font-size:14px;">Typing |</span>
</div>
```

### Select

```html
<!-- Default -->
<div style="border:1px solid #d1d5db;border-radius:8px;height:40px;"></div>

<!-- Hovered (chevron flips to up) -->
<div style="border:1px solid #9ca3af;border-radius:8px;height:40px;"></div>

<!-- Disabled -->
<div style="border:1px solid #e5e7eb;border-radius:8px;height:40px;opacity:0.7;cursor:not-allowed;"></div>

<!-- Error -->
<div style="border:1px solid #c81e1e;border-radius:8px;height:40px;"></div>
```
