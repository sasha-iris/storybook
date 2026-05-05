# Indicators

Small visual signals that communicate status, count, or progress — without taking up significant space.

**When to use**
- Show online/offline or availability status next to a user name → **Badge indicator**
- Label chart series or legend items with a color dot → **Dot (legend) indicator**
- Show an unread count on a button or nav icon → **Count indicator**
- Mark completed or active steps in a multi-step form → **Icon / Stepper indicator**

**When NOT to use**
- Standalone status labels that need more prominence → use Badge or Chip
- Dismissible tags or filter chips → use Chip or Tag
- Page-level alerts requiring action → use Alert or Toast

**Anatomy**
Five distinct types — all light mode only:
- \

## Variants

- All types
- Dot — legend colors
- Badge — availability status
- In context — button with count
- In context — customer table
- In context — stepper

## CSS classes

```
.btn
.btn-md
.btn-primary
```

## HTML examples

```html
<!-- Dot (legend) -->
<span style="display:inline-flex;align-items:center;gap:4px;">
  <svg width="12" height="12" viewBox="0 0 12 12" aria-hidden="true"><circle cx="6" cy="6" r="6" fill="#155dfc"/></svg>
  <span style="font-size:var(--text-sm);font-weight:var(--font-medium);color:var(--color-text-heading);">Revenue</span>
</span>

<!-- Count -->
<span style="display:inline-flex;align-items:center;justify-content:center;width:24px;height:24px;border-radius:50%;background:#f05252;border:2px solid #ffffff;font-size:var(--text-sm);font-weight:var(--font-medium);color:#ffffff;" aria-label="3 notifications">3</span>

<!-- Badge: available -->
<span style="display:inline-flex;align-items:center;gap:6px;height:22px;padding:0 10px;border-radius:99px;background:#def7ec;" role="status">
  <svg width="12" height="12" viewBox="0 0 12 12" aria-hidden="true"><circle cx="6" cy="6" r="6" fill="#0e9f6e"/></svg>
  <span style="font-size:var(--text-xs);font-weight:var(--font-medium);color:#03543f;">Available</span>
</span>
```

```html
<span style="display:inline-flex;align-items:center;gap:4px;">
  <svg width="12" height="12" viewBox="0 0 12 12" aria-hidden="true"><circle cx="6" cy="6" r="6" fill="#155dfc"/></svg>
  <span style="font-size:var(--text-sm);font-weight:var(--font-medium);color:var(--color-text-heading);">Revenue</span>
</span>
```

```html
<!-- Available -->
<span style="display:inline-flex;align-items:center;gap:6px;height:22px;padding:0 10px;border-radius:99px;background:#def7ec;" role="status">
  <svg width="12" height="12" viewBox="0 0 12 12" aria-hidden="true"><circle cx="6" cy="6" r="6" fill="#0e9f6e"/></svg>
  <span style="font-size:var(--text-xs);font-weight:var(--font-medium);color:#03543f;">Available</span>
</span>

<!-- Unavailable -->
<span style="display:inline-flex;align-items:center;gap:6px;height:22px;padding:0 10px;border-radius:99px;background:#fde8e8;" role="status">
  <svg width="12" height="12" viewBox="0 0 12 12" aria-hidden="true"><circle cx="6" cy="6" r="6" fill="#f05252"/></svg>
  <span style="font-size:var(--text-xs);font-weight:var(--font-medium);color:#9b1c1c;">Unavailable</span>
</span>
```
