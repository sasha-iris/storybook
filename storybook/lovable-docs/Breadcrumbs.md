# Breadcrumbs

**Breadcrumbs** show the user's location within the site hierarchy and let them navigate back to any ancestor page.

Figma source: component set \

## Variants

- Default — no background
- With background
- Both types
- Depth variants — 2 to 4 items
- Without home icon

## CSS classes

```
.active
.breadcrumb
.breadcrumb-bg
.breadcrumb-item
.breadcrumb-sep
```

## HTML examples

```html
<nav aria-label="Breadcrumb">
  <ol class="breadcrumb">

    <li class="breadcrumb-item">
      <a href="#">
        <!-- home icon 20×20 -->
        Home
      </a>
      <span class="breadcrumb-sep" aria-hidden="true"><!-- chevron-right --></span>
    </li>

    <li class="breadcrumb-item">
      <a href="#">E-commerce</a>
      <span class="breadcrumb-sep" aria-hidden="true"><!-- chevron-right --></span>
    </li>

    <!-- Current page: .breadcrumb-item.active + aria-current="page" -->
    <li class="breadcrumb-item active">
      <span aria-current="page">Products</span>
    </li>

  </ol>
</nav>
```

```html
<!-- With background: pill wrapper + .breadcrumb-bg modifier -->
<!-- All items render in #4a5565 (var(--color-text-body)), chevron in #6a7282 -->
<div style="display:inline-flex;background:var(--color-bg-default);border:1px solid var(--color-border-default);border-radius:8px;padding:12px 20px;">
  <nav aria-label="Breadcrumb" class="breadcrumb-bg">
    <ol class="breadcrumb">
      <li class="breadcrumb-item">
        <a href="#"><!-- home icon --> Home</a>
        <span class="breadcrumb-sep" aria-hidden="true"><!-- chevron-right --></span>
      </li>
      <li class="breadcrumb-item">
        <a href="#">E-commerce</a>
        <span class="breadcrumb-sep" aria-hidden="true"><!-- chevron-right --></span>
      </li>
      <li class="breadcrumb-item active">
        <span aria-current="page">Products</span>
      </li>
    </ol>
  </nav>
</div>
```

```html
<!-- Default: .breadcrumb inside <nav> -->
<nav aria-label="Breadcrumb"><ol class="breadcrumb"><!-- ... --></ol></nav>

<!-- With background: pill wrapper + .breadcrumb -->
<div style="display:inline-flex;background:#f9fafb;border-radius:8px;padding:12px 20px;">
  <nav aria-label="Breadcrumb"><ol class="breadcrumb"><!-- ... --></ol></nav>
</div>
```
