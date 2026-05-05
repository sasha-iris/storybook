# Basics

The \

## Variants

- Card with button
- Card with link
- Horizontal card
- Linechart — Upwards (602:20753)
- Linechart — Downwards (602:20589)
- Linechart-vert — Upwards (602:22376)
- barchart — Upwards (602:20796)
- barchart-vert — Upwards (602:23611)
- barchart-big — Upwards (602:24711)
- barchart-segm-hor — Upwards (602:25133)
- Credit — Upwards (602:23265)
- All variants — overview
- User profile card
- With form inputs
- E-commerce card
- Card with list
- Pricing card
- CTA card
- Nav tabs card
- Stats card (segmented tabs)
- Testimonial card
- Crypto card — connect wallet
- Default — active, Iris owner
- Hovered — active, Iris owner
- Inactive — paused
- User owner
- Loading (skeleton)
- Empty state
- Error state
- All states — side by side

## CSS classes

```
.btn
.btn-alternative
.btn-light
.btn-md
.btn-primary
.btn-sm
.btn-xs
.card
.card-body
.card-body-padded
.card-footer
.card-footer-link
.card-header
.card-header-controls
.card-header-sub
.card-header-title
.card-icon
.card-icon-blue
.card-icon-green
.card-reporting
.card-reporting--hovered
.card-reporting--inactive
.card-stat-label
.card-stat-value
.card-trend
.card-trend-arrow
.card-trend-context
.card-trend-up
.form-group
.form-input
.form-label
.rpt-chip
.rpt-chip--email
.rpt-chip--muted
.rpt-chip--slack
.skeleton
.skeleton-text
.skeleton-w-1-2
.skeleton-w-1-3
.skeleton-w-2-3
.skeleton-w-full
```

## HTML examples

### Basics

```html
<!-- Card with flush top image -->
<div class="card">
  <!-- Real usage: replace div with <img src="…" alt="…" style="width:100%;height:180px;object-fit:cover;display:block;"> -->
  <div style="height:180px; background:var(--color-bg-tertiary);"></div>
  <div class="card-body-padded">
    <h5>Card title</h5>
    <p>Body copy goes here.</p>
    <button class="btn btn-primary btn-sm">Read more</button>
  </div>
</div>
```

### Basics

```html
<!-- Card with header + footer -->
<div class="card">
  <div class="card-header">
    <div>
      <div class="card-header-title">Recent activity</div>
      <div class="card-header-sub">Last 7 days</div>
    </div>
    <div class="card-header-controls">
      <button class="btn btn-alternative btn-xs">View all</button>
      <button class="btn btn-light btn-xs">⋯</button>
    </div>
  </div>
  <div class="card-body">
    <!-- content -->
  </div>
  <div class="card-footer">
    <span>Updated just now</span>
    <a href="#" class="card-footer-link">See details →</a>
  </div>
</div>
```

### Basics

```html
<div style="background:var(--color-bg-surface);border:1px solid var(--color-border-default);border-radius:8px;
     box-shadow:0 4px 6px -1px rgba(0,0,0,.1),0 2px 4px -2px rgba(0,0,0,.05);
     padding:24px;max-width:384px;">
  <h5 style="font-size:var(--text-2xl);font-weight:var(--font-bold);color:#111928;line-height:1.3;margin:0 0 12px;">
    Noteworthy technology acquisitions 2021
  </h5>
  <p style="font-size:var(--text-base);color:var(--color-text-secondary);line-height:1.6;margin:0 0 20px;">
    Here are the biggest enterprise technology acquisitions of 2021 so far,
    in reverse chronological order.
  </p>
  <button style="display:inline-flex;align-items:center;gap:8px;
                 background:#42389d;color:#fff;font-size:var(--text-sm);font-weight:var(--font-medium);
                 border:none;border-radius:12px;padding:10px 20px;cursor:pointer;">
    Read more
    <svg width="16" height="16" viewBox="0 0 20 20" fill="none"
         xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M4.167 10h11.666M10.833 5l5 5-5 5"
            stroke="currentColor" stroke-width="1.67"
            stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  </button>
</div>
```

### KPI

```html
<!-- Card KPI — Linechart (286×168px) -->
<div style="background:var(--color-bg-surface);border-radius:8px;box-shadow:0 1px 1px rgba(0,0,0,.08);
            width:286px;height:168px;padding:16px;display:flex;flex-direction:column;
            gap:16px;position:relative;overflow:hidden;box-sizing:border-box;">

  <!-- Header row: label + trend + icon pill -->
  <div style="display:flex;gap:16px;align-items:flex-start;">
    <div style="flex:1;min-width:0;">
      <div style="font:500 12px/1.5 'Inter',sans-serif;color:#111928;">Total Sales</div>
      <div style="font:600 24px/1.5 'Inter',sans-serif;color:#111928;">$16,416</div>
    </div>
    <!-- Trend badge (up: #5850EC, down: #E74694) -->
    <div style="display:flex;align-items:center;gap:2px;flex-shrink:0;">
      <!-- trend-up arrow SVG here -->
      <span style="font:600 12px/1.5 'Inter',sans-serif;color:#5850EC;">+12.5%</span>
    </div>
    <!-- Grey pill icon -->
    <div style="background:#D1D5DB;border-radius:999px;padding:9px;flex-shrink:0;">
      <!-- currency-dollar SVG here -->
    </div>
  </div>

  <!-- Line chart SVG — flush to card bottom, absolute positioned -->
  <div style="position:absolute;bottom:0;left:0;right:0;">
    <svg style="width:100%;height:70px;display:block;" viewBox="0 0 286 70" preserveAspectRatio="none">
      <!-- area fill at 12% opacity (color #5850EC for up, #E74694 for down) -->
      <path d="M0,60 C30,55 55,64 85,48 …286,3 L286,70 L0,70 Z" fill="#5850EC" opacity="0.12"/>
      <!
```
