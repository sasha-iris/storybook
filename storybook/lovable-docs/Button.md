# Button

Iris button component — 7 colors × 5 sizes × 2 outline modes × icon-only.

**CSS classes:** \

## Variants

- Colors — all Figma colors
- Sizes — xs to xl
- States — default / disabled
- Pill — rounded corners
- Disabled state
- Default — text segments (Years / Months / Days)
- With stat — action + count
- With dropdown — text + icon slot
- With tooltip
- All types — overview
- Semibold — brand purple
- Medium — subtle gray
- Type comparison — Semibold vs Medium
- Dark — all sizes
- White variants (on dark background)
- Multi-provider showcase
- Overview — Chart vs Table button

## CSS classes

```
.active
.btn
.btn-blue
.btn-chart
.btn-dark
.btn-gray
.btn-green
.btn-group
.btn-group-stat-count
.btn-icon
.btn-lg
.btn-link
.btn-link-medium
.btn-link-semibold
.btn-md
.btn-outline-primary
.btn-pill
.btn-primary
.btn-red
.btn-sm
.btn-social
.btn-social-dark
.btn-social-dark-outline
.btn-social-white
.btn-social-white-outline
.btn-table
.btn-xl
.btn-xs
.btn-yellow
```

## HTML examples

### Button

```html
<button class="btn btn-primary btn-md">Primary</button>
<button class="btn btn-dark btn-md">Dark</button>
<button class="btn btn-green btn-md">Green</button>
<button class="btn btn-red btn-md">Red</button>
<button class="btn btn-yellow btn-md">Yellow</button>
<button class="btn btn-blue btn-md">Blue</button>
<button class="btn btn-gray btn-md">Gray</button>

<!-- Outline -->
<button class="btn btn-outline-primary btn-md">Primary</button>
```

### Button

```html
<button class="btn btn-primary btn-xs">xs</button>
<button class="btn btn-primary btn-sm">sm</button>
<button class="btn btn-primary btn-md">md</button>
<button class="btn btn-primary btn-lg">lg</button>
<button class="btn btn-primary btn-xl">xl</button>
```

### Button

```html
<!-- Left icon -->
<button class="btn btn-primary btn-md">
  <svg><!-- heroicon 20px --></svg>
  <span>Label</span>
</button>

<!-- Right icon -->
<button class="btn btn-primary btn-md">
  <span>Label</span>
  <svg><!-- heroicon 20px --></svg>
</button>

<!-- Icon only -->
<button class="btn btn-primary btn-icon btn-md" aria-label="Action">
  <svg><!-- heroicon 20px --></svg>
</button>
```

### Group

```html
<div class="btn-group">
  <button class="btn">Years</button>
  <button class="btn">Months</button>
  <button class="btn active">Days</button>
</div>
```
