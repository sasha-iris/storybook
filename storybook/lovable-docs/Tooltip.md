# Tooltip

**Tooltip** surfaces a short label or explanation when a user hovers or focuses an element.

**When to use**
- Clarifying an icon button that has no visible label
- Surfacing extra context for a form field or data point without cluttering the layout
- Showing keyboard shortcuts or command names on hover

**When NOT to use**
- Long or critical information → use a popover or inline help text (tooltips are hidden by default and not read on mobile)
- Required form guidance → use a visible hint below the field
- Error messages → use an inline validation message

**Anatomy**
\

## Variants

- All positions
- Both colors

## CSS classes

```
.btn
.btn-primary
.btn-sm
.tooltip-bottom
.tooltip-bubble
.tooltip-dark
.tooltip-left
.tooltip-light
.tooltip-right
.tooltip-top
.tooltip-wrap
```

## HTML examples

```html
<!-- Top -->
<div class="tooltip-wrap tooltip-top" data-tooltip>
  <button class="btn btn-primary btn-sm" aria-describedby="tip-top">Trigger</button>
  <div class="tooltip-bubble tooltip-dark" role="tooltip" id="tip-top"> … </div>
</div>

<!-- Right -->
<div class="tooltip-wrap tooltip-right" data-tooltip>
  <button class="btn btn-primary btn-sm" aria-describedby="tip-right">Trigger</button>
  <div class="tooltip-bubble tooltip-dark" role="tooltip" id="tip-right"> … </div>
</div>

<!-- Bottom -->
<div class="tooltip-wrap tooltip-bottom" data-tooltip>
  <button class="btn btn-primary btn-sm" aria-describedby="tip-bottom">Trigger</button>
  <div class="tooltip-bubble tooltip-dark" role="tooltip" id="tip-bottom"> … </div>
</div>

<!-- Left -->
<div class="tooltip-wrap tooltip-left" data-tooltip>
  <button class="btn btn-primary btn-sm" aria-describedby="tip-left">Trigger</button>
  <div class="tooltip-bubble tooltip-dark" role="tooltip" id="tip-left"> … </div>
</div>
```

```html
<!-- Dark tooltip -->
<div class="tooltip-bubble tooltip-dark" role="tooltip">
  <strong style="font-weight:var(--font-medium);font-size:var(--text-sm);color:#ffffff;">More information</strong>
  <div style="height:1px;background:#4b5563;margin:6px 0;"></div>
  <p style="font-size:var(--text-xs);color:var(--color-bg-muted);">The user wants to find a specific page or site.</p>
</div>

<!-- White tooltip -->
<div class="tooltip-bubble tooltip-light" role="tooltip">
  <strong style="font-weight:var(--font-medium);font-size:var(--text-sm);color:var(--color-text-heading);">More information</strong>
  <div style="height:1px;background:var(--color-border-default);margin:6px 0;"></div>
  <p style="font-size:var(--text-xs);color:var(--color-text-secondary);">The user wants to find a specific page or site.</p>
</div>
```
