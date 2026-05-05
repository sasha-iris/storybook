# Logo

Iris hexagonal Smart mark — standalone and with the "Iris" wordmark.

**Source:** Figma node \

## Variants

- Mark only — all sizes (light)
- Logo with text — all sizes (light)
- Dark variants — sm / md / lg
- Reference grid — all sizes × modes
- Card badge icons — used in KPI & Reporting cards
- Inline icons — used in Card/Layouts
- Trend icons — used in Card/KPI
- Sidebar nav icons — used in Navigation/Sidebar
- Badge icons — used in Badge
- Chip / Tag icons — used in Chip, Tag
- Indicators icons — used in Indicators
- Skeleton icons — used in Skeleton
- Banner icons — used in Banner
- Toast icons — used in Toast
- All icons — outline 24px
- All brand icons

## HTML examples

### Logo

```html
<!-- Mark only — xs (24 px, card badge) -->
<img src="./assets/iris-mark-xs.svg" height="24" alt="Iris mark" style="display:block;width:auto;">

<!-- Mark only — md (48 px) -->
<img src="./assets/iris-mark-md.svg" height="48" alt="Iris mark" style="display:block;width:auto;">
```

### Logo

```html
<!-- Full logo — sm (nav bar) -->
<div style="display:inline-flex;align-items:center;gap:12px;">
  <img src="./assets/iris-mark-sm.svg" height="32" alt="Iris mark" style="display:block;width:auto;">
  <span style="font-size:24px;font-weight:600;color:#101828;white-space:nowrap;">Iris</span>
</div>

<!-- Full logo — md (page header) -->
<div style="display:inline-flex;align-items:center;gap:16px;">
  <img src="./assets/iris-mark-md.svg" height="48" alt="Iris mark" style="display:block;width:auto;">
  <span style="font-size:36px;font-weight:600;color:#101828;white-space:nowrap;">Iris</span>
</div>
```

### Logo

```html
<!-- Dark logo — md (dark nav bar or panel header) -->
<div style="display:inline-flex;align-items:center;gap:16px;">
  <img src="./assets/iris-mark-md-dark.svg" height="48" alt="Iris mark" style="display:block;width:auto;">
  <span style="font-size:36px;font-weight:600;color:#ffffff;white-space:nowrap;">Iris</span>
</div>

<!-- Dark mark only — sm (icon slot on dark panel) -->
<img src="./assets/iris-mark-sm-dark.svg" height="32" alt="Iris mark" style="display:block;width:auto;">
```

### Icons

```html
<!-- Heroicons v2 outline — example: plus -->
<svg width="24" height="24" viewBox="0 0 24 24" fill="none"
  stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"
  aria-hidden="true">
  <path d="M12 4.5V19.5M19.5 12L4.5 12"/>
</svg>
```
