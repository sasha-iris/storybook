# Autocomplete

**Autocomplete** combines a search input with a dropdown panel that surfaces suggestions as the user types.

**When to use**
- Global site/doc search with instant results (Default type)
- Entity lookup — searching users, customers, or tagged items (Advanced type with CTA)
- Filtering a long list by keyword when a dropdown alone is too small

**When NOT to use**
- Selecting from a short fixed list (≤ 8 items) → use a \

## Variants

- States — Default type
- States — Advanced type
- Sizes — Default vs Large

## CSS classes

```
.autocomplete
```

## HTML examples

```html
<!-- Initial: closed -->
<div style="display:flex;align-items:center;gap:8px;padding:0 12px;height:42px;background:#f9fafb;border:1px solid #e5e7eb;border-radius:8px;">
  <!-- search icon #6b7280 -->
  <input placeholder="Quick search for anything" style="flex:1;border:none;background:transparent;font-size:14px;color:#6b7280;"/>
</div>

<!-- Active: open, focus ring #155dfc -->
<div style="width:400px;">
  <div style="display:flex;align-items:center;gap:8px;padding:0 12px;height:42px;background:#f9fafb;border:1px solid #155dfc;border-radius:8px;">
    <!-- search icon #155dfc -->
    <input placeholder="Quick search for anything" style="flex:1;border:none;background:transparent;font-size:14px;color:#111928;"/>
  </div>
  <div role="listbox" style="background:#ffffff;border:1px solid #e5e7eb;border-radius:8px;margin-top:4px;padding:12px 16px 8px;">
    <div style="font-size:14px;font-weight:600;color:#111928;margin-bottom:6px;">Recent</div>
    <div role="option" style="display:flex;align-items:center;gap:8px;padding:3px 0;">
      <!-- search icon 14px #9ca3af -->
      <span style="font-size:14px;color:#6b7280;">Customizing colors</span>
    </div>
    <!-- more rows... -->
  </div>
</div>

<!-- Typing: × clear button, filtered results -->
<!-- With CTA: last row has divider + plus + "Add new" in #155dfc -->
```

```html
<!-- Advanced type — Active state (dismiss × on each item) -->
<div style="width:400px;">
  <div style="display:flex;align-items:center;gap:8px;padding:0 12px;height:42px;background:#f9fafb;border:1px solid #155dfc;border-radius:8px;">
    <!-- search icon #155dfc -->
    <input value="|Quick search for anything" style="flex:1;border:none;background:transparent;font-size:14px;color:#111928;"/>
  </div>
  <div role="listbox" style="background:#ffffff;border:1px solid #e5e7eb;border-radius:8px;margin-top:4px;padding:12px 16px 8px;">
    <div style="font-size:14px;font-weight:600;color:#111928;margin-bottom:6px;">Recent</div>
    <!-- Advanced result row: pill bg #f9fafb, r:8px -->
    <div role="option" style="display:flex;align-items:center;gap:8px;padding:4px 8px;border-radius:8px;background:#f9fafb;margin-bottom:4px;">
      <!-- category icon 14px #9ca3af (e.g. color-swatch, view-grid, user-circle) -->
      <span style="flex:1;font-size:14px;color:#6b7280;">Customizing colors</span>
      <!-- dismiss × icon 14px #6b7280 (active) or navigate → (typing) -->
    </div>
  </div>
</div>
```

```html
<!-- Default size: 42px height, 14px font -->
<div style="display:flex;align-items:center;gap:8px;padding:0 12px;height:42px;background:#f9fafb;border:1px solid #e5e7eb;border-radius:8px;">
  <!-- search icon 18px -->
  <input placeholder="Quick search for anything" style="font-size:14px;border:none;background:transparent;"/>
</div>

<!-- Large size: 52px height, 16px font -->
<div style="display:flex;align-items:center;gap:8px;padding:0 12px;height:52px;background:#f9fafb;border:1px solid #e5e7eb;border-radius:8px;">
  <!-- search icon 18px -->
  <input placeholder="Quick search for anything" style="font-size:16px;border:none;background:transparent;"/>
</div>
```
