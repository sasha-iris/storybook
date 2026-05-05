# #ffffff

**Datepicker** lets users select a single date, a date range, or a partial date (month/year/date-of-birth). It renders as an input trigger that opens a dropdown calendar panel.

**When to use**
- Filtering data by date or date range
- Collecting birth dates or appointment dates in forms
- Year/month navigation in reporting dashboards

**When NOT to use**
- Relative time ("last 7 days") — use a Dropdown or preset chip group instead
- Inline date display only — use a plain text or Badge

**Anatomy**
- Input trigger (calendar icon + placeholder/value, Default 42px / Large 52px)
- Calendar panel (header with prev/next arrows + month-year title)
- Day grid (7 columns, day names row + day number cells)
- Selected state: single day (\

## Variants

- All types — light
- Input sizes
- Day cell states

## CSS classes

```
.datepicker-calendar
.datepicker-input
.datepicker-input--lg
```

## HTML examples

```html
<!-- Simple datepicker -->
<div class="datepicker-input" style="height:42px;">
  <!-- calendar icon + placeholder -->
</div>
<div class="datepicker-calendar">
  <!-- header + day grid + footer -->
</div>
```

```html
<!-- Default 42px -->
<div class="datepicker-input" style="height:42px;">...</div>

<!-- Large 52px -->
<div class="datepicker-input datepicker-input--lg" style="height:52px;">...</div>
```

```html
<!-- Selected: bg #1447e6, text #ffffff, border-radius 8px -->
<!-- Range endpoint: bg #42389d, text #ffffff -->
<!-- In-range: bg #f3f4f6, text #111928 -->
<!-- Normal: transparent, text #111928 -->
```
