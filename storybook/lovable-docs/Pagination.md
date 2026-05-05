# Pagination

**Pagination** lets users navigate between pages of a result set.

Figma sources:
- Pagination strip: \

## Variants

- Few pages — no ellipsis
- Many pages — with ellipsis
- Both sizes
- Button states — all variants
- Showing indicator — both sizes
- In context — with Showing indicator

## CSS classes

```
.active
.disabled
.page-item
.page-link
.pagination
.pagination-info
```

## HTML examples

```html
<nav aria-label="Pagination">
  <ul class="pagination">
    <li class="page-item disabled">
      <button class="page-link" aria-label="Previous page" disabled aria-disabled="true"><!-- chevron-left --></button>
    </li>
    <li class="page-item active">
      <button class="page-link" aria-label="Page 1" aria-current="page">1</button>
    </li>
    <li class="page-item">
      <button class="page-link" aria-label="Page 2">2</button>
    </li>
    <li class="page-item">
      <button class="page-link" aria-label="Page 3">3</button>
    </li>
    <li class="page-item">
      <button class="page-link" aria-label="Next page"><!-- chevron-right --></button>
    </li>
  </ul>
</nav>
```

```html
<!-- Default: CSS .page-link size (36×36px) -->
<nav aria-label="Pagination"><ul class="pagination"><!-- ... --></ul></nav>

<!-- Small: inline override style="min-width:32px;height:32px;" on each .page-link -->
<nav aria-label="Pagination"><ul class="pagination"><!-- ... --></ul></nav>
```
