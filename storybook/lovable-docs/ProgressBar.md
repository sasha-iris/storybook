# Progress Bar

**Progress Bar** communicates the completion status of a task or process as a fraction of a total.

**When to use**
- Show upload, export, or processing progress with a known total
- Visualise a metric against a target (e.g. storage used, budget consumed, goal completion)
- Represent a step completion percentage in a multi-step flow

**When NOT to use**
- Do not use a progress bar for indeterminate loading — use a spinner instead
- Do not use for binary pass/fail states — use a Badge or Status indicator
- Do not use when the metric is best compared across items — use a bar chart instead

**Anatomy**
- **Track** — full-width gray background bar (6 px, \

## Variants

- All colors
- All values (25 / 50 / 75 / 100)
- Label below (helper text)
- In context — dashboard card

## CSS classes

```
.progress
.progress-bar
```

## HTML examples

```html
<!-- Primary -->
<div style="width:100%;">
  <div style="font-size:var(--text-xs);font-weight:var(--font-medium);color:var(--color-text-secondary);text-align:right;">75%</div>
  <div style="position:relative;height:6px;background:var(--color-border-default);border-radius:2px;overflow:hidden;">
    <div style="position:absolute;left:0;top:0;height:100%;width:75%;background:#5850ec;border-radius:2px;"></div>
  </div>
</div>

<!-- Green -->
<div style="width:100%;margin-top:16px;">
  <div style="font-size:var(--text-xs);font-weight:var(--font-medium);color:var(--color-text-secondary);text-align:right;">75%</div>
  <div style="position:relative;height:6px;background:var(--color-border-default);border-radius:2px;overflow:hidden;">
    <div style="position:absolute;left:0;top:0;height:100%;width:75%;background:#31c48d;border-radius:2px;"></div>
  </div>
</div>

<!-- Orange -->
<div style="width:100%;margin-top:16px;">
  <div style="font-size:var(--text-xs);font-weight:var(--font-medium);color:var(--color-text-secondary);text-align:right;">75%</div>
  <div style="position:relative;height:6px;background:var(--color-border-default);border-radius:2px;overflow:hidden;">
    <div style="position:absolute;left:0;top:0;height:100%;width:75%;background:#ff8a4c;border-radius:2px;"></div>
  </div>
</div>
```

```html
<div role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"
  style="width:100%;">
  <div style="font-size:var(--text-xs);font-weight:var(--font-medium);color:var(--color-text-secondary);text-align:right;">75%</div>
  <div style="position:relative;height:6px;background:var(--color-border-default);border-radius:2px;overflow:hidden;">
    <div style="position:absolute;left:0;top:0;height:100%;width:75%;background:#5850ec;border-radius:2px;"></div>
  </div>
</div>
```

```html
<div style="width:100%;">
  <div style="position:relative;height:6px;background:var(--color-border-default);border-radius:2px;overflow:hidden;">
    <div style="position:absolute;left:0;top:0;height:100%;width:75%;background:#5850ec;border-radius:2px;"></div>
  </div>
  <div style="font-size:var(--text-xs);font-weight:var(--font-medium);color:var(--color-text-secondary);text-align:right;margin-top:6px;">75%</div>
</div>
```
