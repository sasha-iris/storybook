# Drawer

**Drawer** (also called a side sheet or flyout) slides in from the edge of the screen to reveal supplementary content without navigating away from the current page.

> ⚠️ **Status: hidden — design story usage unconfirmed.** This component is committed for reference. It is not shown in the sidebar until it is used in active design stories.

**Types confirmed in Figma (node 13261:81153)**
- Side drawer (slides in from right)
- Bottom sheet (slides up from bottom)

## Variants

- Side drawer (right)
- Bottom sheet

## CSS classes

Drawer has no dedicated CSS class — it uses inline positioning. Combine with `.modal-backdrop` for the overlay.

```
.modal-backdrop
```

## HTML examples

```html
<!-- Side drawer (right) -->
<div style="position:fixed;top:0;bottom:0;right:0;width:320px;background:#fff;z-index:50;box-shadow:-4px 0 16px rgba(0,0,0,.12);">
  <!-- drawer content -->
</div>

<!-- Bottom sheet -->
<div style="position:fixed;bottom:0;left:0;right:0;background:#fff;z-index:50;box-shadow:0 -4px 16px rgba(0,0,0,.12);">
  <!-- bottom content -->
</div>
```
