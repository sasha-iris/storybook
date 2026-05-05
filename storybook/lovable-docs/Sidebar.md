# Sidebar

**Navigation / Sidebar** — left navigation for authenticated dashboard views.

Figma sources: component set \

## Variants

- Default — light, logo, overview active
- Active states — all items
- Financial model — collapsed
- Menu item states — all variants
- Color variants — White vs Gray
- Contracted — icon only (60px)
- Without logo
- Contracted — with logo (60px)
- In context — full page layout

## CSS classes

```
.sidebar-item-icon
```

## HTML examples

```html
<aside style="width:256px;height:100vh;background:var(--color-bg-muted);border-right:1px solid var(--color-border-default);">
  <!-- Logo -->
  <!-- Nav items — active: bg:#e5e7eb; color:#42389d; aria-current="page" -->
</aside>
```

```html
<!-- Active menu item: bg #e5e7eb, text #42389d, aria-current="page" -->
<a href="#" aria-current="page"
   style="display:flex;align-items:center;gap:4px;height:40px;padding:6px 8px;
          border-radius:8px;background:#e5e7eb;width:100%;box-sizing:border-box;text-decoration:none;">
  <!-- icon: 24×24, color #42389d -->
  <span style="font-family:inherit;font-size:var(--text-base);font-weight:var(--font-medium);line-height:1.5;color:#42389d;">Overview</span>
</a>

<!-- Inactive menu item: no background, text #111928 -->
<a href="#"
   style="display:flex;align-items:center;gap:4px;height:40px;padding:6px 8px;
          border-radius:8px;width:100%;box-sizing:border-box;text-decoration:none;">
  <!-- icon: 24×24, color #111928 -->
  <span style="font-family:inherit;font-size:var(--text-base);font-weight:var(--font-medium);line-height:1.5;color:#111928;">Metrics Library</span>
</a>
```

```html
<!-- Expandable menu item — collapsed state: chevron-down, sub-items hidden -->
<div style="display:flex;align-items:center;gap:4px;height:40px;padding:6px 8px;
            border-radius:8px;cursor:pointer;width:100%;box-sizing:border-box;">
  <div style="display:flex;flex:1;gap:4px;align-items:center;">
    <!-- icon: currency-dollar, 24×24, color #111928 -->
    <span style="font-family:inherit;font-size:var(--text-base);font-weight:var(--font-medium);line-height:1.5;color:#111928;">Financial model</span>
  </div>
  <!-- chevron-down when collapsed, chevron-up when expanded -->
  <!-- svg chevron-down here -->
</div>
<!-- Sub-items: rendered when expanded=true, hidden when collapsed -->
<!-- <div style="padding-left:28px;"> sub-item rows </div> -->
```
