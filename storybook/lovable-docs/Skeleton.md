# Skeleton

**Skeleton** renders a low-fidelity placeholder that mirrors the shape of content while it loads.

**When to use**
- While async data is being fetched (API calls, lazy imports)
- When the exact shape of the incoming content is known
- To reduce perceived latency — users see structure immediately

**When NOT to use**
- Short waits (< 300 ms) → use a spinner instead
- Unknown content shape → use a generic full-area spinner
- Error or empty states → use a dedicated empty-state component

**Anatomy**
Skeleton blocks come in two weights: \

## Variants

- All types
- Static — no animation

## CSS classes

```
.skeleton
.skeleton--card-image
.skeleton--image-text
.skeleton--list
.skeleton--simple-text
.skeleton--static
.skeleton--text
.skeleton--widget
.skeleton-avatar
.skeleton-image
```

## HTML examples

```html
<!-- Card + Image skeleton -->
<div class="skeleton skeleton--card-image"> … </div>

<!-- Image + Text skeleton -->
<div class="skeleton skeleton--image-text"> … </div>

<!-- Text skeleton -->
<div class="skeleton skeleton--text"> … </div>

<!-- List skeleton (5 rows) -->
<div class="skeleton skeleton--list"> … </div>

<!-- Simple text skeleton (7 rows) -->
<div class="skeleton skeleton--simple-text"> … </div>

<!-- Widget (bar chart) skeleton -->
<div class="skeleton skeleton--widget"> … </div>
```

```html
<!-- Check for reduced motion preference -->
<script>
  const animated = !window.matchMedia('(prefers-reduced-motion: reduce)').matches;
</script>

<!-- Pass animated=false when reduced motion is preferred -->
<div class="skeleton skeleton--card-image skeleton--static"> … </div>
```
