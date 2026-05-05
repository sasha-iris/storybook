# Chip

Filter chips for interactive selections — removable tags attached to filters, inputs, or search queries.

**When to use**
- Represent an active filter the user can remove (e.g. "Status: Active ×")
- Show selected items in a multi-select field
- Tag an entity with a removable category label

**When NOT to use**
- Read-only status labels → use Badge instead
- Navigation → use Tabs or Buttons
- Long text → chips truncate; use a different pattern

**Anatomy**
\

## Variants

- Colors — all 10 themes
- States — default / hover / disabled
- With dot indicator

## HTML examples

```html
<!-- Light (neutral default) -->
<span style="display:inline-flex;align-items:center;gap:4px;background:#f3f4f6;color:#4a5565;border-radius:4px;padding:2px 8px;font-size:var(--text-xs);font-weight:var(--font-medium);white-space:nowrap;line-height:1.5;">
  <span>Marketing</span>
  <button type="button" aria-label="Remove Marketing" style="display:inline-flex;align-items:center;background:none;border:none;cursor:pointer;padding:0;">
    <svg width="12" height="12" viewBox="0 0 20 20" fill="#6b7280" aria-hidden="true">
      <path fill-rule="evenodd" d="${X_PATH}" clip-rule="evenodd"/>
    </svg>
  </button>
</span>

<!-- Indigo -->
<span style="display:inline-flex;align-items:center;gap:4px;background:#5850ec;color:#ffffff;border-radius:4px;padding:2px 8px;font-size:var(--text-xs);font-weight:var(--font-medium);white-space:nowrap;line-height:1.5;">
  <span>Design</span>
  <button type="button" aria-label="Remove Design" style="display:inline-flex;align-items:center;background:none;border:none;cursor:pointer;padding:0;">
    <svg width="12" height="12" viewBox="0 0 20 20" fill="#f3f4f6" aria-hidden="true">
      <path fill-rule="evenodd" d="${X_PATH}" clip-rule="evenodd"/>
    </svg>
  </button>
</span>
```

```html
<!-- Default -->
<span style="display:inline-flex;align-items:center;gap:4px;background:#5850ec;color:#ffffff;border-radius:4px;padding:2px 8px;font-size:var(--text-xs);font-weight:var(--font-medium);white-space:nowrap;line-height:1.5;">
  <span>Design</span>
  <button type="button" aria-label="Remove Design" style="background:none;border:none;cursor:pointer;padding:0;display:inline-flex;align-items:center;">
    <svg width="12" height="12" viewBox="0 0 20 20" fill="#f3f4f6" aria-hidden="true"><path fill-rule="evenodd" d="${X_PATH}" clip-rule="evenodd"/></svg>
  </button>
</span>

<!-- Disabled -->
<span style="display:inline-flex;align-items:center;gap:4px;background:#b4c6fc;color:#ffffff;border-radius:4px;padding:2px 8px;font-size:var(--text-xs);font-weight:var(--font-medium);white-space:nowrap;line-height:1.5;cursor:not-allowed;">
  <span>Design</span>
  <button type="button" aria-label="Remove Design" aria-disabled="true" style="background:none;border:none;cursor:not-allowed;padding:0;display:inline-flex;align-items:center;">
    <svg width="12" height="12" viewBox="0 0 20 20" fill="#f3f4f6" aria-hidden="true"><path fill-rule="evenodd" d="${X_PATH}" clip-rule="evenodd"/></svg>
  </button>
</span>
```

```html
<span style="display:inline-flex;align-items:center;gap:4px;background:#5850ec;color:#ffffff;border-radius:4px;padding:2px 8px;font-size:var(--text-xs);font-weight:var(--font-medium);white-space:nowrap;line-height:1.5;">
  <svg width="12" height="12" viewBox="0 0 12 12" fill="#f3f4f6" aria-hidden="true">
    <circle cx="6" cy="6" r="3"/>
  </svg>
  <span>Design</span>
  <button type="button" aria-label="Remove Design" style="background:none;border:none;cursor:pointer;padding:0;display:inline-flex;align-items:center;">
    <svg width="12" height="12" viewBox="0 0 20 20" fill="#f3f4f6" aria-hidden="true">
      <path fill-rule="evenodd" d="${X_PATH}" clip-rule="evenodd"/>
    </svg>
  </button>
</span>
```
