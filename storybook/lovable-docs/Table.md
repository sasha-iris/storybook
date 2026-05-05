# Cells

**Table / Cells** — primitive cell components for the Iris financial/analytics table.

Figma nodes: TableCell \

## Variants

- Cell options — all variants
- Cell × row type backgrounds
- Editable — not-editing vs editing
- Cell with caption (secondary line)
- Column headers (horizontal) — all types
- Period headers (vertical) — all types
- Cell percent — badge ramp
- Percent badge ramp — 10% → 100%
- Cohort row — white & grey
- Cohort analysis table — assembled heatmap
- Financial table — P&L excerpt
- Financial table — all row types
- Financial table — ACTUALS vs FORECAST
- Financial table — all cell options in context

## HTML examples

### Cells

```html
<!-- Default option -->
<div style="display:flex;align-items:center;justify-content:flex-end;gap:4px;
            width:146px;height:38px;padding:8px 16px;background:var(--color-bg-surface);box-sizing:border-box;">
  <span style="font-family:inherit;font-size:var(--text-sm);font-weight:var(--font-medium);line-height:1.5;color:#111928;flex-shrink:0;">$</span>
  <span style="font-family:inherit;font-size:var(--text-sm);font-weight:var(--font-medium);line-height:1.5;color:#111928;text-align:right;">500,00</span>
</div>

<!-- Blue option — cell bg + text both blue -->
<div style="display:flex;align-items:center;justify-content:flex-end;gap:4px;
            width:146px;height:38px;padding:8px 16px;background:#ebf5ff;box-sizing:border-box;">
  <span style="font-family:inherit;font-size:var(--text-sm);font-weight:var(--font-medium);line-height:1.5;color:#1c64f2;flex-shrink:0;">$</span>
  <span style="font-family:inherit;font-size:var(--text-sm);font-weight:var(--font-medium);line-height:1.5;color:#1c64f2;text-align:right;">500,00</span>
</div>

<!-- Calculated option -->
<div style="display:flex;align-items:center;justify-content:flex-end;gap:4px;
            width:146px;height:38px;padding:8px 16px;background:var(--color-bg-surface);box-sizing:border-box;">
  <span style="font-family:inherit;font-size:var(--text-sm);font-weight:var(--font-medium);line-height:1.5;color:#0e9f6e;flex-shrink:0;">$</span>
  <span style="font-family:inherit;font-size:var(--text-sm);font-weight:var(--font
```

### Cells

```html
<!-- Default row -->
<div style="background:#ffffff;width:146px;height:38px;padding:8px 16px;box-sizing:border-box;display:flex;align-items:center;justify-content:flex-end;gap:4px;">
  <span style="font-family:inherit;font-size:var(--text-sm);font-weight:var(--font-medium);line-height:1.5;color:#111928;">$</span>
  <span style="font-family:inherit;font-size:var(--text-sm);font-weight:var(--font-medium);line-height:1.5;color:#111928;text-align:right;">500,00</span>
</div>
<!-- Derival row -->
<div style="background:#fff8f1;…">…</div>
<!-- Total row -->
<div style="background:var(--color-bg-muted);…">…</div>
<!-- Non-collapsible row -->
<div style="background:var(--color-bg-default);…">…</div>
```

### Cells

```html
<!-- Editable, editing=true (focused state) -->
<div style="display:flex;align-items:center;width:146px;height:38px;
            background:var(--color-bg-surface);border:1px solid #e5e7eb;box-sizing:border-box;">
  <div style="flex:1;display:flex;align-items:center;justify-content:flex-end;
              border:1px solid #1c64f2;border-radius:4px;
              padding:8px 16px;overflow:hidden;box-sizing:border-box;">
    <span style="font-family:inherit;font-size:var(--text-sm);font-weight:var(--font-medium);line-height:1.5;color:#111928;text-align:right;">
      500,00|
    </span>
  </div>
</div>
```

### Cohort

```html
<!-- 60% badge — white text (brand/500) -->
<div style="display:flex;flex-direction:column;align-items:flex-start;
            padding:8px 4px;background:var(--color-bg-surface);box-sizing:border-box;">
  <div style="display:flex;align-items:center;justify-content:center;
              width:62px;height:42px;padding:10px;border-radius:4px;
              background:#6875f5;box-sizing:border-box;">
    <span style="font-family:inherit;font-size:var(--text-xs);font-weight:var(--font-semibold);line-height:1.5;color:#fff;
                 white-space:nowrap;text-align:center;">60%</span>
  </div>
</div>

<!-- 40% badge — dark text (brand/300) -->
<div style="display:flex;flex-direction:column;align-items:flex-start;
            padding:8px 4px;background:var(--color-bg-surface);box-sizing:border-box;">
  <div style="display:flex;align-items:center;justify-content:center;
              width:62px;height:42px;padding:10px;border-radius:4px;
              background:#b4c6fc;box-sizing:border-box;">
    <span style="font-family:inherit;font-size:var(--text-xs);font-weight:var(--font-semibold);line-height:1.5;color:#111928;
                 white-space:nowrap;text-align:center;">40%</span>
  </div>
</div>
```
