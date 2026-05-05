# Iris Library — Component Docs

All 30 component families. Use as knowledge for Lovable AI.

---

# Accordion

**Accordion** progressively discloses content — items can be expanded to reveal more detail, keeping the page compact.

Figma source: component set \

## Variants

- Card — shared container
- Card — with icon
- Separate cards
- Only links — minimal
- All styles

## CSS classes

```
.accordion
.accordion-body
.accordion-chevron
.accordion-flush
.accordion-header
.accordion-item
.open
```

## HTML examples

```html
<div class="accordion">

  <!-- Item 1 — expanded: add class "open" to .accordion-item -->
  <div class="accordion-item open">
    <button class="accordion-header" aria-expanded="true" aria-controls="body-0" id="header-0">
      <span style="flex:1;">Can I use FlowBite in open-source projects?</span>
      <svg class="accordion-chevron" viewBox="0 0 24 24" fill="none">
        <path d="M6 9l6 6 6-6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </button>
    <div class="accordion-body" id="body-0" role="region" aria-labelledby="header-0">
      Generally, it is accepted to use FlowBite in open-source projects…
    </div>
  </div>

  <!-- Item 2 — collapsed: no "open" class -->
  <div class="accordion-item">
    <button class="accordion-header" aria-expanded="false" aria-controls="body-1" id="header-1">
      <span style="flex:1;">How do you achieve the blurry effect?</span>
      <svg class="accordion-chevron" viewBox="0 0 24 24" fill="none">
        <path d="M6 9l6 6 6-6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </button>
    <div class="accordion-body" id="body-1" role="region" aria-labelledby="header-1">
      The blurry effect can be achieved using the CSS backdrop-filter property…
    </div>
  </div>

</div>
```

```html
<!-- Active item with icon inside .accordion-header -->
<div class="accordion-item open">
  <button class="accordion-header" aria-expanded="true" aria-controls="body-0" id="header-0">
    <span style="flex-shrink:0;display:flex;align-items:center;margin-right:8px;">
      <!-- question-mark-circle 18×18 -->
    </span>
    <span style="flex:1;">What is this library?</span>
    <svg class="accordion-chevron" viewBox="0 0 24 24" fill="none">
      <path d="M6 9l6 6 6-6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  </button>
  <div class="accordion-body" id="body-0" role="region" aria-labelledby="header-0">Body text…</div>
</div>
```

```html
<div style="display:flex;flex-direction:column;gap:16px;">

  <!-- Each item gets its own .accordion wrapper -->
  <div class="accordion">
    <div class="accordion-item open">
      <button class="accordion-header" aria-expanded="true" aria-controls="body-0" id="header-0">
        <span style="flex:1;">What is this library?</span>
        <svg class="accordion-chevron" viewBox="0 0 24 24" fill="none">
          <path d="M6 9l6 6 6-6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </button>
      <div class="accordion-body" id="body-0" role="region" aria-labelledby="header-0">Body text…</div>
    </div>
  </div>

  <div class="accordion">
    <div class="accordion-item">
      <button class="accordion-header" aria-expanded="false" aria-controls="body-1" id="header-1">
        <span style="flex:1;">How do you achieve the blurry effect?</span>
        <svg class="accordion-chevron" viewBox="0 0 24 24" fill="none">
          <path d="M6 9l6 6 6-6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </button>
      <div class="accordion-body" id="body-1" role="region" aria-labelledby="header-1">Body text…</div>
    </div>
  </div>

</div>
```

---

# Alerts

**Alert** surfaces a brief, potentially time-sensitive message without interrupting the user's workflow.

**Urgency levels** (from Notification system guidelines, node 9929:153267)
- **High** — requires immediate action to restore full product access (e.g. payment failed, session expired)
- **Medium** — notifies about features or opportunities that benefit the user
- **Low** — status-change messages ("Email verified", "Link copied") and general product info

**When to use**
- Surfacing the outcome of a user action (success, error, warning)
- Showing a persistent state the user should be aware of but can dismiss
- Inline validation feedback on a section (not a single field)

**When NOT to use**
- Requiring an explicit decision → use a **Modal Dialog**
- Communicating a site-wide critical outage → use a **Banner**
- Brief ephemeral feedback after an action → use a **Toast**

**Anatomy**
\

## Variants

- All colors
- All types

## CSS classes

```
.alert
.alert--danger
.alert--dark
.alert--default
.alert--info
.alert--light
.alert--medium
.alert--success
.alert--warning
.alert-body
.alert-dismiss
.alert-icon
.alert-title
.alert__body
.alert__content
.alert__cta
.alert__dismiss
.alert__header
.alert__heading
.alert__icon
.btn
.btn-xs
```

## HTML examples

```html
<!-- Success -->
<div role="alert" class="alert alert--success alert--medium"> … </div>

<!-- Danger -->
<div role="alert" class="alert alert--danger alert--medium"> … </div>

<!-- Info -->
<div role="alert" class="alert alert--info alert--medium"> … </div>

<!-- Warning -->
<div role="alert" class="alert alert--warning alert--medium"> … </div>

<!-- Default -->
<div role="alert" class="alert alert--default alert--medium"> … </div>
```

```html
<!-- Medium — tinted background -->
<div role="alert" class="alert alert--info alert--medium"> … </div>

<!-- Dark — solid accent background -->
<div role="alert" class="alert alert--info alert--dark"> … </div>

<!-- Light — white background with shadow -->
<div role="alert" class="alert alert--info alert--light"> … </div>
```

```html
<div role="alert" class="alert alert--warning alert--medium">
  <div class="alert__content">
    <div class="alert__header">
      <svg class="alert__icon" aria-hidden="true"><!-- check-circle --></svg>
      <span class="alert__heading">Your free trial ends in 3 days</span>
      <button class="alert__dismiss" aria-label="Dismiss"><!-- × --></button>
    </div>
    <p class="alert__body">Upgrade to a paid plan to keep all features and avoid data loss.</p>
    <button class="alert__cta">View more</button>
  </div>
</div>
```

---

# Autocomplete

**Autocomplete** combines a search input with a dropdown panel that surfaces suggestions as the user types.

**When to use**
- Global site/doc search with instant results (Default type)
- Entity lookup — searching users, customers, or tagged items (Advanced type with CTA)
- Filtering a long list by keyword when a dropdown alone is too small

**When NOT to use**
- Selecting from a short fixed list (≤ 8 items) → use a \

## Variants

- States — Default type
- States — Advanced type
- Sizes — Default vs Large

## CSS classes

```
.autocomplete
```

## HTML examples

```html
<!-- Initial: closed -->
<div style="display:flex;align-items:center;gap:8px;padding:0 12px;height:42px;background:#f9fafb;border:1px solid #e5e7eb;border-radius:8px;">
  <!-- search icon #6b7280 -->
  <input placeholder="Quick search for anything" style="flex:1;border:none;background:transparent;font-size:14px;color:#6b7280;"/>
</div>

<!-- Active: open, focus ring #155dfc -->
<div style="width:400px;">
  <div style="display:flex;align-items:center;gap:8px;padding:0 12px;height:42px;background:#f9fafb;border:1px solid #155dfc;border-radius:8px;">
    <!-- search icon #155dfc -->
    <input placeholder="Quick search for anything" style="flex:1;border:none;background:transparent;font-size:14px;color:#111928;"/>
  </div>
  <div role="listbox" style="background:#ffffff;border:1px solid #e5e7eb;border-radius:8px;margin-top:4px;padding:12px 16px 8px;">
    <div style="font-size:14px;font-weight:600;color:#111928;margin-bottom:6px;">Recent</div>
    <div role="option" style="display:flex;align-items:center;gap:8px;padding:3px 0;">
      <!-- search icon 14px #9ca3af -->
      <span style="font-size:14px;color:#6b7280;">Customizing colors</span>
    </div>
    <!-- more rows... -->
  </div>
</div>

<!-- Typing: × clear button, filtered results -->
<!-- With CTA: last row has divider + plus + "Add new" in #155dfc -->
```

```html
<!-- Advanced type — Active state (dismiss × on each item) -->
<div style="width:400px;">
  <div style="display:flex;align-items:center;gap:8px;padding:0 12px;height:42px;background:#f9fafb;border:1px solid #155dfc;border-radius:8px;">
    <!-- search icon #155dfc -->
    <input value="|Quick search for anything" style="flex:1;border:none;background:transparent;font-size:14px;color:#111928;"/>
  </div>
  <div role="listbox" style="background:#ffffff;border:1px solid #e5e7eb;border-radius:8px;margin-top:4px;padding:12px 16px 8px;">
    <div style="font-size:14px;font-weight:600;color:#111928;margin-bottom:6px;">Recent</div>
    <!-- Advanced result row: pill bg #f9fafb, r:8px -->
    <div role="option" style="display:flex;align-items:center;gap:8px;padding:4px 8px;border-radius:8px;background:#f9fafb;margin-bottom:4px;">
      <!-- category icon 14px #9ca3af (e.g. color-swatch, view-grid, user-circle) -->
      <span style="flex:1;font-size:14px;color:#6b7280;">Customizing colors</span>
      <!-- dismiss × icon 14px #6b7280 (active) or navigate → (typing) -->
    </div>
  </div>
</div>
```

```html
<!-- Default size: 42px height, 14px font -->
<div style="display:flex;align-items:center;gap:8px;padding:0 12px;height:42px;background:#f9fafb;border:1px solid #e5e7eb;border-radius:8px;">
  <!-- search icon 18px -->
  <input placeholder="Quick search for anything" style="font-size:14px;border:none;background:transparent;"/>
</div>

<!-- Large size: 52px height, 16px font -->
<div style="display:flex;align-items:center;gap:8px;padding:0 12px;height:52px;background:#f9fafb;border:1px solid #e5e7eb;border-radius:8px;">
  <!-- search icon 18px -->
  <input placeholder="Quick search for anything" style="font-size:16px;border:none;background:transparent;"/>
</div>
```

---

# Badge

Status badges for labeling content, categorizing items, and indicating state.

**When to use**
- Label a record's status (Active, Pending, Archived)
- Categorize items by topic, priority, or type
- Show a removable filter chip in a search or filter bar

**When NOT to use**
- Interactive filter toggles → use Toggle buttons or Chips
- Long explanatory text → use an Alert or inline notice
- Navigation indicators → use a Tab with a counter instead

**Anatomy**
\

## Variants

- Colors — all 8 themes
- Sizes — lg and sm
- With icon — all themes
- Dismissible — with × button

## HTML examples

```html
<!-- Gray — neutral status -->
<span style="display:inline-flex;align-items:center;gap:4px;background:#f3f4f6;color:#101828;font-size:var(--text-sm);font-weight:400;border-radius:6px;padding:2px 12px;white-space:nowrap;line-height:1.5;">Neutral</span>

<!-- Green — success / active -->
<span style="display:inline-flex;align-items:center;gap:4px;background:#d0fae5;color:#006045;font-size:var(--text-sm);font-weight:400;border-radius:6px;padding:2px 12px;white-space:nowrap;line-height:1.5;">Active</span>

<!-- Red — error / failed -->
<span style="display:inline-flex;align-items:center;gap:4px;background:#ffe2e2;color:#9f0712;font-size:var(--text-sm);font-weight:400;border-radius:6px;padding:2px 12px;white-space:nowrap;line-height:1.5;">Failed</span>

<!-- Yellow — warning / pending -->
<span style="display:inline-flex;align-items:center;gap:4px;background:#fef9c2;color:#894b00;font-size:var(--text-sm);font-weight:400;border-radius:6px;padding:2px 12px;white-space:nowrap;line-height:1.5;">Pending</span>
```

```html
<!-- lg (default) -->
<span style="display:inline-flex;align-items:center;gap:4px;background:#e5edff;color:#42389d;font-size:var(--text-sm);font-weight:400;border-radius:6px;padding:2px 12px;white-space:nowrap;line-height:1.5;">In review</span>

<!-- sm (compact) -->
<span style="display:inline-flex;align-items:center;gap:4px;background:#e5edff;color:#42389d;font-size:var(--text-xs);font-weight:var(--font-medium);border-radius:6px;padding:2px 10px;white-space:nowrap;line-height:1.5;">In review</span>
```

```html
<span style="display:inline-flex;align-items:center;gap:4px;background:#e5edff;color:#42389d;font-size:var(--text-sm);font-weight:400;border-radius:6px;padding:2px 12px;white-space:nowrap;line-height:1.5;">
  <svg width="16" height="16" viewBox="0 0 20 20" fill="#42389d" aria-hidden="true" style="flex-shrink:0;">
    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm.75-13a.75.75 0 00-1.5 0v5c0 .414.336.75.75.75h4a.75.75 0 000-1.5H10.75V5z" clip-rule="evenodd"/>
  </svg>
  <span>Scheduled</span>
</span>
```

---

# Banner

**Banner** displays a prominent, persistent message at the top (or bottom) of the screen for site-wide or contextually critical information.

**When to use**
- Communicating site-wide outages, maintenance windows, or planned downtime
- Promoting a time-sensitive offer or product update to all users
- Collecting newsletter signups inline at the top of a page
- Surfacing a partner/referral opportunity contextually

**When NOT to use**
- Single-action confirmations or errors → use an **Alert** or **Toast**
- Decisions that require user input → use a **Modal Dialog**
- Short ephemeral feedback → use a **Toast** (auto-dismisses in ≥ 5 s)

**Anatomy**
\

## Variants

- All types
- Non-dismissible

## CSS classes

```
.banner
.banner--bottom
.banner--container-cta
.banner--cta
.banner--default
.banner--newsletter
.banner__dismiss
.banner__icon
.banner__icon-text
.banner__text
.btn
.btn-light
.btn-md
.btn-primary
.btn-xs
.form-input
.form-label
```

## HTML examples

```html
<!-- Default notification banner -->
<div role="banner" class="banner banner--default"> … </div>

<!-- Container CTA (centered card) -->
<div role="banner" class="banner banner--container-cta"> … </div>

<!-- Bottom awareness strip -->
<div role="banner" class="banner banner--bottom"> … </div>

<!-- CTA with two action buttons -->
<div role="banner" class="banner banner--cta"> … </div>

<!-- Newsletter signup -->
<div role="banner" class="banner banner--newsletter"> … </div>
```

```html
<!-- Non-dismissible: omit the × button entirely -->
<div role="banner" class="banner banner--default">
  <div class="banner__icon-text">
    <svg class="banner__icon" aria-hidden="true"><!-- lightbulb --></svg>
    <span class="banner__text">New brand identity has been launched for our Flowbite library.</span>
  </div>
  <!-- no dismiss button -->
</div>
```

---

# Logo

Iris hexagonal Smart mark — standalone and with the "Iris" wordmark.

**Source:** Figma node \

## Variants

- Mark only — all sizes (light)
- Logo with text — all sizes (light)
- Dark variants — sm / md / lg
- Reference grid — all sizes × modes
- Card badge icons — used in KPI & Reporting cards
- Inline icons — used in Card/Layouts
- Trend icons — used in Card/KPI
- Sidebar nav icons — used in Navigation/Sidebar
- Badge icons — used in Badge
- Chip / Tag icons — used in Chip, Tag
- Indicators icons — used in Indicators
- Skeleton icons — used in Skeleton
- Banner icons — used in Banner
- Toast icons — used in Toast
- All icons — outline 24px
- All brand icons

## HTML examples

### Logo

```html
<!-- Mark only — xs (24 px, card badge) -->
<img src="./assets/iris-mark-xs.svg" height="24" alt="Iris mark" style="display:block;width:auto;">

<!-- Mark only — md (48 px) -->
<img src="./assets/iris-mark-md.svg" height="48" alt="Iris mark" style="display:block;width:auto;">
```

### Logo

```html
<!-- Full logo — sm (nav bar) -->
<div style="display:inline-flex;align-items:center;gap:12px;">
  <img src="./assets/iris-mark-sm.svg" height="32" alt="Iris mark" style="display:block;width:auto;">
  <span style="font-size:24px;font-weight:600;color:#101828;white-space:nowrap;">Iris</span>
</div>

<!-- Full logo — md (page header) -->
<div style="display:inline-flex;align-items:center;gap:16px;">
  <img src="./assets/iris-mark-md.svg" height="48" alt="Iris mark" style="display:block;width:auto;">
  <span style="font-size:36px;font-weight:600;color:#101828;white-space:nowrap;">Iris</span>
</div>
```

### Logo

```html
<!-- Dark logo — md (dark nav bar or panel header) -->
<div style="display:inline-flex;align-items:center;gap:16px;">
  <img src="./assets/iris-mark-md-dark.svg" height="48" alt="Iris mark" style="display:block;width:auto;">
  <span style="font-size:36px;font-weight:600;color:#ffffff;white-space:nowrap;">Iris</span>
</div>

<!-- Dark mark only — sm (icon slot on dark panel) -->
<img src="./assets/iris-mark-sm-dark.svg" height="32" alt="Iris mark" style="display:block;width:auto;">
```

### Icons

```html
<!-- Heroicons v2 outline — example: plus -->
<svg width="24" height="24" viewBox="0 0 24 24" fill="none"
  stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"
  aria-hidden="true">
  <path d="M12 4.5V19.5M19.5 12L4.5 12"/>
</svg>
```

---

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

---

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

---

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

---

# Chip

Filter chips for interactive selections — removable tags attached to filters, inputs, or search queries.

**When to use**
- Represent an active filter the user can remove (e.g. "Status: Active ×")
- Show selected items in a multi-select field
- Tag an entity with a removable category label

**When NOT to use**
- Read-only status labels → use Badge instead
- Navigation → use Tabs or Buttons
- Long text → chips truncate; use a different pattern

**Anatomy**
\

## Variants

- Colors — all 10 themes
- States — default / hover / disabled
- With dot indicator

## HTML examples

```html
<!-- Light (neutral default) -->
<span style="display:inline-flex;align-items:center;gap:4px;background:#f3f4f6;color:#4a5565;border-radius:4px;padding:2px 8px;font-size:var(--text-xs);font-weight:var(--font-medium);white-space:nowrap;line-height:1.5;">
  <span>Marketing</span>
  <button type="button" aria-label="Remove Marketing" style="display:inline-flex;align-items:center;background:none;border:none;cursor:pointer;padding:0;">
    <svg width="12" height="12" viewBox="0 0 20 20" fill="#6b7280" aria-hidden="true">
      <path fill-rule="evenodd" d="${X_PATH}" clip-rule="evenodd"/>
    </svg>
  </button>
</span>

<!-- Indigo -->
<span style="display:inline-flex;align-items:center;gap:4px;background:#5850ec;color:#ffffff;border-radius:4px;padding:2px 8px;font-size:var(--text-xs);font-weight:var(--font-medium);white-space:nowrap;line-height:1.5;">
  <span>Design</span>
  <button type="button" aria-label="Remove Design" style="display:inline-flex;align-items:center;background:none;border:none;cursor:pointer;padding:0;">
    <svg width="12" height="12" viewBox="0 0 20 20" fill="#f3f4f6" aria-hidden="true">
      <path fill-rule="evenodd" d="${X_PATH}" clip-rule="evenodd"/>
    </svg>
  </button>
</span>
```

```html
<!-- Default -->
<span style="display:inline-flex;align-items:center;gap:4px;background:#5850ec;color:#ffffff;border-radius:4px;padding:2px 8px;font-size:var(--text-xs);font-weight:var(--font-medium);white-space:nowrap;line-height:1.5;">
  <span>Design</span>
  <button type="button" aria-label="Remove Design" style="background:none;border:none;cursor:pointer;padding:0;display:inline-flex;align-items:center;">
    <svg width="12" height="12" viewBox="0 0 20 20" fill="#f3f4f6" aria-hidden="true"><path fill-rule="evenodd" d="${X_PATH}" clip-rule="evenodd"/></svg>
  </button>
</span>

<!-- Disabled -->
<span style="display:inline-flex;align-items:center;gap:4px;background:#b4c6fc;color:#ffffff;border-radius:4px;padding:2px 8px;font-size:var(--text-xs);font-weight:var(--font-medium);white-space:nowrap;line-height:1.5;cursor:not-allowed;">
  <span>Design</span>
  <button type="button" aria-label="Remove Design" aria-disabled="true" style="background:none;border:none;cursor:not-allowed;padding:0;display:inline-flex;align-items:center;">
    <svg width="12" height="12" viewBox="0 0 20 20" fill="#f3f4f6" aria-hidden="true"><path fill-rule="evenodd" d="${X_PATH}" clip-rule="evenodd"/></svg>
  </button>
</span>
```

```html
<span style="display:inline-flex;align-items:center;gap:4px;background:#5850ec;color:#ffffff;border-radius:4px;padding:2px 8px;font-size:var(--text-xs);font-weight:var(--font-medium);white-space:nowrap;line-height:1.5;">
  <svg width="12" height="12" viewBox="0 0 12 12" fill="#f3f4f6" aria-hidden="true">
    <circle cx="6" cy="6" r="3"/>
  </svg>
  <span>Design</span>
  <button type="button" aria-label="Remove Design" style="background:none;border:none;cursor:pointer;padding:0;display:inline-flex;align-items:center;">
    <svg width="12" height="12" viewBox="0 0 20 20" fill="#f3f4f6" aria-hidden="true">
      <path fill-rule="evenodd" d="${X_PATH}" clip-rule="evenodd"/>
    </svg>
  </button>
</span>
```

---

# Controls

**Controls** are interactive selection elements: Toggle, Checkbox, and Radio.
Use them to let users turn features on/off or choose from a set of options.

**When to use**
- **Toggle** — enable/disable a single binary setting with immediate effect (no submit button needed)
- **Checkbox** — select one or more independent options from a list; or represent an indeterminate (mixed) state
- **Radio** — select exactly one option from a mutually exclusive set

**When NOT to use**
- Do not use Toggle when the action requires confirmation before applying (use a Checkbox + submit instead)
- Do not use Radio for more than ~6 options — prefer a Select dropdown
- Do not use Checkbox as a toggle for live settings — use Toggle instead

**Anatomy**
- **Control element** (16×16 px checkbox/radio; 28×16 px toggle) — the visual indicator
- **Label** (14px/500) — primary text; required
- **Helper text** (12px/400, gray/500) — optional secondary description
- **Destructive variant** — red palette for danger

## Variants

- Toggle — all states
- Checkbox — all states
- Radio — all states
- Controls — all types

## HTML examples

```html
<!-- Toggle ON (default) -->
<span class="iris-toggle iris-toggle--on" role="switch" aria-checked="true">
  <span class="iris-toggle__thumb"></span>
</span>

<!-- Toggle OFF (default) -->
<span class="iris-toggle iris-toggle--off" role="switch" aria-checked="false">
  <span class="iris-toggle__thumb"></span>
</span>

<!-- Toggle ON — destructive -->
<span class="iris-toggle iris-toggle--on iris-toggle--destructive" role="switch" aria-checked="true">
  <span class="iris-toggle__thumb"></span>
</span>

<!-- Toggle ON — disabled -->
<span class="iris-toggle iris-toggle--on iris-toggle--disabled" role="switch" aria-checked="true" aria-disabled="true">
  <span class="iris-toggle__thumb"></span>
</span>
```

```html
<!-- Unchecked -->
<span class="iris-checkbox" role="checkbox" aria-checked="false"></span>

<!-- Checked -->
<span class="iris-checkbox iris-checkbox--checked" role="checkbox" aria-checked="true"></span>

<!-- Intermediate (indeterminate) -->
<span class="iris-checkbox iris-checkbox--intermediate" role="checkbox" aria-checked="mixed"></span>

<!-- Destructive + checked -->
<span class="iris-checkbox iris-checkbox--checked iris-checkbox--destructive" role="checkbox" aria-checked="true"></span>

<!-- Disabled + checked -->
<span class="iris-checkbox iris-checkbox--checked iris-checkbox--disabled" role="checkbox" aria-checked="true" aria-disabled="true"></span>
```

```html
<!-- Unselected -->
<span class="iris-radio" role="radio" aria-checked="false"></span>

<!-- Selected -->
<span class="iris-radio iris-radio--checked" role="radio" aria-checked="true"></span>

<!-- Destructive + selected -->
<span class="iris-radio iris-radio--checked iris-radio--destructive" role="radio" aria-checked="true"></span>

<!-- Disabled + selected -->
<span class="iris-radio iris-radio--checked iris-radio--disabled" role="radio" aria-checked="true" aria-disabled="true"></span>
```

---

# Datepicker

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

---

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

---

# Dropdown

**Dropdown** provides contextual menus triggered by a button. It comes in three layers:
a list item, a menu panel, and a trigger button.

**When to use**
- Contextual actions for a selected item (edit, delete, share)
- Navigation links grouped by category (Settings → Profile / Billing / Team)
- Filters and selections inline (date range picker, status filter)

**When NOT to use**
- Do not use Dropdown for more than ~12 items — use a full-page list or Search instead
- Do not use Dropdown for primary page navigation — use Sidebar or Tabs
- Do not use Dropdown when all options should be visible at once — use a Radio group

**Anatomy**
- **Trigger button** (.dropdown-trigger) — text or icon-only; brand/900 bg, indigo/200 ring
- **Menu panel** (.dropdown-menu) — white, 8px radius, shadow; min 224px wide
- **Section label** (.dropdown-label) — 12px/700 uppercase, optional count chip
- **List item** (.dropdown-item) — 37px, 14px/400; left icon + text + right chevron
- **Divider** (.dropdown-di

## Variants

- Menus — all types
- Notification panel
- Triggers — all variants

## CSS classes

```
.active
.danger
.dropdown-avatar-item
.dropdown-avatar-item__avatar
.dropdown-avatar-item__name
.dropdown-avatar-item__sub
.dropdown-count
.dropdown-cta
.dropdown-divider
.dropdown-item
.dropdown-item__chevron
.dropdown-item__icon
.dropdown-item__text
.dropdown-label
.dropdown-menu
.dropdown-notification
.dropdown-notification__avatar
.dropdown-notification__body
.dropdown-notification__msg
.dropdown-notification__time
.dropdown-profile
.dropdown-profile__avatar
.dropdown-profile__email
.dropdown-profile__name
.dropdown-search
.dropdown-search-input
.dropdown-search-input__chevron
.dropdown-search-input__icon
.dropdown-search-input__text
.dropdown-search-input__value
.dropdown-trigger
.dropdown-trigger--icon
.dropdown-trigger--outline
.dropdown-trigger--sm
```

## HTML examples

```html
<!-- Default item -->
<button class="dropdown-item">
  <span class="dropdown-item__icon"><!-- icon --></span>
  <span class="dropdown-item__text">First Action</span>
  <span class="dropdown-item__chevron"><!-- chevron-right --></span>
</button>

<!-- Selected item -->
<button class="dropdown-item active">
  <span class="dropdown-item__icon"><!-- icon --></span>
  <span class="dropdown-item__text">First Action</span>
  <span class="dropdown-item__chevron"><!-- chevron-right --></span>
</button>

<!-- Destructive item -->
<button class="dropdown-item danger">
  <span class="dropdown-item__icon"><!-- icon --></span>
  <span class="dropdown-item__text">Delete Account</span>
  <span class="dropdown-item__chevron"><!-- chevron-right --></span>
</button>

<!-- Disabled item -->
<button class="dropdown-item" aria-disabled="true">
  <span class="dropdown-item__icon"><!-- icon --></span>
  <span class="dropdown-item__text">Export CSV</span>
  <span class="dropdown-item__chevron"><!-- chevron-right --></span>
</button>
```

```html
<!-- Default menu (search + sections + footer) -->
<div class="dropdown-menu" style="width:224px;">
  <div class="dropdown-search">
    <div class="dropdown-search-input">
      <!-- search icon -->
      <span class="dropdown-search-input__text">Search</span>
      <span class="dropdown-search-input__value">Regular Select</span>
    </div>
  </div>
  <div class="dropdown-label">ACTIONS <span class="dropdown-count">5</span></div>
  <button class="dropdown-item">
    <span class="dropdown-item__icon"><!-- icon --></span>
    <span class="dropdown-item__text">First Action</span>
  </button>
  <hr class="dropdown-divider">
  <button class="dropdown-item danger">
    <span class="dropdown-item__text">Sign Out</span>
  </button>
</div>

<!-- Checkbox filter menu -->
<div class="dropdown-menu" style="width:280px;">
  <div class="dropdown-label">FILTER BY STATUS</div>
  <label style="display:flex;gap:8px;padding:8px 16px;cursor:pointer;">
    <span class="iris-checkbox iris-checkbox--checked" role="checkbox" aria-checked="true"></span>
    <span class="iris-control__label">Active reports</span>
  </label>
</div>

<!-- Toggle settings menu -->
<div class="dropdown-menu" style="width:260px;">
  <div style="padding:16px;display:flex;align-items:center;justify-content:space-between;">
    <span>Enable notifications</span>
    <span class="iris-toggle iris-toggle--on" role="switch" aria-checked="true">
      <span class="iris-toggle__thumb"></span>
    </span>
  </div>
</div>

<!-- App d
```

```html
<div class="dropdown-menu" style="width:384px;">

  <!-- Header -->
  <div style="background:var(--color-bg-default);padding:8px 12px;">
    <span style="font-size:var(--text-base);font-weight:500;">Notifications</span>
  </div>

  <!-- Notification row -->
  <div class="dropdown-notification">
    <span class="dropdown-notification__avatar">JL</span>
    <div class="dropdown-notification__body">
      <span class="dropdown-notification__msg">Jese Leos: "Hey, what's up?"</span>
      <span class="dropdown-notification__time">a few moments ago</span>
    </div>
  </div>

  <!-- Footer -->
  <div style="padding:8px 12px;display:flex;align-items:center;gap:8px;">
    <!-- eye icon -->
    <span style="font-size:var(--text-sm);font-weight:500;">View all</span>
  </div>

</div>
```

---

# Forms

**Forms** collects the core form input elements used across the Iris Library: Input Field, Floating Label, Textarea, File Upload, Tag Input, and Read-only display.

**When to use**
- Any user-facing form: sign-up, settings, contact, checkout
- Filtering and search configuration panels
- Inline editing within data tables or cards

**When NOT to use**
- For single-item selection from a list → use **Dropdown** or **Select**
- For toggle/checkbox/radio → use **Controls**
- For multi-value selection → use **Multiselect** or **Tag Input**

**Anatomy (Input Field)**
- Label (required) — \

## Variants

- Input — all states
- Input — all sizes
- Textarea — all types
- Read-only field
- Select — all states
- Multiselect — variants
- All types

## CSS classes

```
.bg-gray-100
.bg-gray-50
.bg-white
.block
.border
.border-gray-200
.border-gray-300
.border-l
.border-r
.border-t
.flex
.flex-1
.flex-wrap
.font-medium
.gap-1
.gap-2
.hidden
.inline-flex
.iris-range
.items-center
.justify-center
.mb-1
.mb-4
.mt-1
.outline-none
.overflow-hidden
.p-2
.p-3
.placeholder
.placeholder-gray-400
.px-2
.px-3
.resize-none
.resize-y
.rounded
.rounded-lg
.tag-pill
.text-gray-400
.text-gray-500
.text-gray-600
.text-gray-900
.text-sm
.text-xs
.w-full
```

## HTML examples

### Forms

```html
<!-- Normal -->
<div><input style="border:1px solid #d1d5db;" /></div>

<!-- Focus / typing -->
<div><input style="border:1px solid #155dfc;" /></div>

<!-- Success -->
<div><input style="border:1px solid #0e9f6e;" /></div>

<!-- Error -->
<div><input style="border:1px solid #f05252;" /></div>

<!-- Disabled -->
<div><input disabled style="border:1px solid #d1d5db;opacity:0.6;" /></div>
```

### Forms

```html
<!-- Small 37px -->
<input style="height:37px;" class="..." />

<!-- Regular 42px (default) -->
<input style="height:42px;" class="..." />

<!-- Large 52px -->
<input style="height:52px;" class="..." />
```

### Forms

```html
<!-- Border bottom — initial -->
<div style="border-bottom:2px solid #d1d5db;padding:12px;">
  <span style="color:#6b7280;font-size:14px;">Placeholder text</span>
</div>

<!-- Border bottom — active (label floated) -->
<div style="border-bottom:2px solid #155dfc;padding:6px 0 8px;">
  <div style="font-size:12px;font-weight:500;color:#155dfc;">Placeholder text</div>
  <span style="color:#111928;font-size:14px;">Typing |</span>
</div>
```

### Select

```html
<!-- Default -->
<div style="border:1px solid #d1d5db;border-radius:8px;height:40px;"></div>

<!-- Hovered (chevron flips to up) -->
<div style="border:1px solid #9ca3af;border-radius:8px;height:40px;"></div>

<!-- Disabled -->
<div style="border:1px solid #e5e7eb;border-radius:8px;height:40px;opacity:0.7;cursor:not-allowed;"></div>

<!-- Error -->
<div style="border:1px solid #c81e1e;border-radius:8px;height:40px;"></div>
```

---

# Colors

**Color tokens** are the single source of truth for all colors in the Iris Library.
They are CSS custom properties defined in \

## Variants

- Text color variables
- Background color variables
- Border color variables
- Semantic aliases (legacy)
- Type scale (H1 – Caption)
- Generic size scale (legacy)
- Font weights

## HTML examples

### Typography

```html
<!-- Page heading -->
<h1 style="font-size: var(--text-h1); font-weight: var(--font-bold); color: var(--color-text-heading); line-height: var(--leading-base);">
  Dashboard overview
</h1>

<!-- Section heading -->
<h2 style="font-size: var(--text-h2); font-weight: var(--font-normal); color: var(--color-text-heading);">
  Monthly performance
</h2>

<!-- Body text -->
<p style="font-size: var(--text-body-1); font-weight: var(--font-normal); color: var(--color-text-body);">
  Showing results for the last 30 days. Export the report to share with your team.
</p>

<!-- Supporting / secondary text -->
<p style="font-size: var(--text-body-2); color: var(--color-text-body-subtle);">
  Last updated 3 minutes ago
</p>

<!-- Label / hint -->
<span style="font-size: var(--text-caption); color: var(--color-text-fg-disabled);">
  Required field
</span>
```

---

# Indicators

Small visual signals that communicate status, count, or progress — without taking up significant space.

**When to use**
- Show online/offline or availability status next to a user name → **Badge indicator**
- Label chart series or legend items with a color dot → **Dot (legend) indicator**
- Show an unread count on a button or nav icon → **Count indicator**
- Mark completed or active steps in a multi-step form → **Icon / Stepper indicator**

**When NOT to use**
- Standalone status labels that need more prominence → use Badge or Chip
- Dismissible tags or filter chips → use Chip or Tag
- Page-level alerts requiring action → use Alert or Toast

**Anatomy**
Five distinct types — all light mode only:
- \

## Variants

- All types
- Dot — legend colors
- Badge — availability status
- In context — button with count
- In context — customer table
- In context — stepper

## CSS classes

```
.btn
.btn-md
.btn-primary
```

## HTML examples

```html
<!-- Dot (legend) -->
<span style="display:inline-flex;align-items:center;gap:4px;">
  <svg width="12" height="12" viewBox="0 0 12 12" aria-hidden="true"><circle cx="6" cy="6" r="6" fill="#155dfc"/></svg>
  <span style="font-size:var(--text-sm);font-weight:var(--font-medium);color:var(--color-text-heading);">Revenue</span>
</span>

<!-- Count -->
<span style="display:inline-flex;align-items:center;justify-content:center;width:24px;height:24px;border-radius:50%;background:#f05252;border:2px solid #ffffff;font-size:var(--text-sm);font-weight:var(--font-medium);color:#ffffff;" aria-label="3 notifications">3</span>

<!-- Badge: available -->
<span style="display:inline-flex;align-items:center;gap:6px;height:22px;padding:0 10px;border-radius:99px;background:#def7ec;" role="status">
  <svg width="12" height="12" viewBox="0 0 12 12" aria-hidden="true"><circle cx="6" cy="6" r="6" fill="#0e9f6e"/></svg>
  <span style="font-size:var(--text-xs);font-weight:var(--font-medium);color:#03543f;">Available</span>
</span>
```

```html
<span style="display:inline-flex;align-items:center;gap:4px;">
  <svg width="12" height="12" viewBox="0 0 12 12" aria-hidden="true"><circle cx="6" cy="6" r="6" fill="#155dfc"/></svg>
  <span style="font-size:var(--text-sm);font-weight:var(--font-medium);color:var(--color-text-heading);">Revenue</span>
</span>
```

```html
<!-- Available -->
<span style="display:inline-flex;align-items:center;gap:6px;height:22px;padding:0 10px;border-radius:99px;background:#def7ec;" role="status">
  <svg width="12" height="12" viewBox="0 0 12 12" aria-hidden="true"><circle cx="6" cy="6" r="6" fill="#0e9f6e"/></svg>
  <span style="font-size:var(--text-xs);font-weight:var(--font-medium);color:#03543f;">Available</span>
</span>

<!-- Unavailable -->
<span style="display:inline-flex;align-items:center;gap:6px;height:22px;padding:0 10px;border-radius:99px;background:#fde8e8;" role="status">
  <svg width="12" height="12" viewBox="0 0 12 12" aria-hidden="true"><circle cx="6" cy="6" r="6" fill="#f05252"/></svg>
  <span style="font-size:var(--text-xs);font-weight:var(--font-medium);color:#9b1c1c;">Unavailable</span>
</span>
```

---

# KBD

Keyboard key badge — visually represents a physical key or keyboard shortcut.

**When to use**
- Document keyboard shortcuts in help text, tooltips, or onboarding flows
- Inline within prose to reference a key (e.g. "Press \

## Variants

- Letter keys — A–Z
- Special keys — modifiers & control
- Function keys — F1–F12
- Arrow keys — ←→↑↓
- In context — shortcut combos

## CSS classes

```
.kbd-combo
```

## HTML examples

```html
<kbd style="display:inline-flex;align-items:center;justify-content:center;min-width:29px;height:30px;background:var(--color-bg-muted);border:1px solid var(--color-border-default);border-radius:8px;padding:0 6px;font-size:var(--text-xs);font-weight:var(--font-semibold);color:var(--color-bg-dark);">A</kbd>
```

```html
<!-- Modifier combo example -->
<span class="kbd-combo">
  <kbd style="display:inline-flex;align-items:center;justify-content:center;min-width:44px;height:30px;background:var(--color-bg-muted);border:1px solid var(--color-border-default);border-radius:8px;padding:0 6px;font-size:var(--text-xs);font-weight:var(--font-semibold);color:var(--color-bg-dark);">Shift</kbd>
  <kbd style="display:inline-flex;align-items:center;justify-content:center;min-width:29px;height:30px;background:var(--color-bg-muted);border:1px solid var(--color-border-default);border-radius:8px;padding:0 6px;font-size:var(--text-xs);font-weight:var(--font-semibold);color:var(--color-bg-dark);">S</kbd>
</span>
```

---

# List Group

**List Group** is a vertical menu or option list, typically rendered as a dropdown panel or sidebar sub-menu. It supports optional leading icons and light/dark themes.

**When to use**
- User account dropdown menus (Profile · Settings · Sign out)
- Context menus and action lists on right-click or overflow button
- Navigation sub-panels in sidebars

**When NOT to use**
- Long scrollable lists of data → use a **Table** instead
- Mutually exclusive choices → use **Radio** or **Select**
- Multi-select → use **Multiselect** or **Tag Input**

**Anatomy**
- Container — \

## Variants

- All variants
- In context — user dropdown
- Custom items — longer list

## CSS classes

```
.avatar-btn
.h-8
.list-group
.list-group-item
.rounded-full
.w-8
```

## HTML examples

```html
<!-- Light, no icons -->
<ul class="list-group">
  <li class="list-group-item">Profile</li>
  <li class="list-group-item">Settings</li>
  <li class="list-group-item">Messages</li>
  <li class="list-group-item">Download</li>
</ul>

<!-- Light, with icons -->
<ul class="list-group">
  <li class="list-group-item">
    <svg><!-- user-circle --></svg> Profile
  </li>
  ...
</ul>
```

```html
<!-- Avatar trigger button -->
<button class="avatar-btn">
  <img src="avatar.jpg" alt="User avatar" class="w-8 h-8 rounded-full" />
</button>

<!-- Dropdown panel (shown on click) -->
<ul class="list-group" style="position:absolute;top:100%;right:0;width:240px;z-index:50;">
  <li class="list-group-item"><svg>user-circle</svg> Profile</li>
  <li class="list-group-item"><svg>adjustments</svg> Settings</li>
  <li class="list-group-item"><svg>inbox</svg> Messages</li>
  <li class="list-group-item"><svg>cloud-download</svg> Download</li>
</ul>
```

```html
<ul style="width:240px;background:#fff;border:1px solid #e5e7eb;border-radius:8px;overflow:hidden;">
  <!-- repeat list-item pattern for each entry -->
</ul>
```

---

# Modal

**Modal Dialog** — a layer above the page that requires user interaction before continuing.

Figma source: \

## Variants

- Info — Terms of Service
- Pop-up — delete confirmation
- With forms — sign in
- Crypto wallet — connect wallet
- Dark mode — all types
- Sizes — SM / Default / LG / XL
- All types — light mode

## CSS classes

```
.btn
.btn-alternative
.btn-md
.btn-primary
.btn-red
.form-group
.form-helper
.form-input
.form-label
.modal-backdrop
.modal-body
.modal-close
.modal-dialog
.modal-dialog-lg
.modal-dialog-sm
.modal-dialog-xl
.modal-footer
.modal-header
.modal-title
```

## HTML examples

```html
<div role="dialog" aria-modal="true" aria-labelledby="modal-title" class="modal-dialog">
  <div class="modal-header">
    <h2 class="modal-title" id="modal-title">Terms of Service</h2>
    <button class="modal-close" aria-label="Close dialog"><!-- × --></button>
  </div>
  <div class="modal-body">
    <p>The European Union's General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant to ensure a common set of data rights in the European Union.</p>
    <p>With less than a month to go before the European Union enacts new consumer privacy laws for its citizens, companies around the world are updating their terms of service agreements to comply.</p>
  </div>
  <div class="modal-footer">
    <button class="btn btn-primary btn-md">I accept</button>
  </div>
</div>
```

```html
<div role="dialog" aria-modal="true" aria-labelledby="popup-title" class="modal-dialog modal-dialog-sm">
  <!-- Header: close button only, no title, no border -->
  <div class="modal-header" style="border-bottom:none;justify-content:flex-end;">
    <button class="modal-close" aria-label="Close dialog"><!-- × --></button>
  </div>
  <div class="modal-body" style="text-align:center;">
    <!-- exclamation-circle icon 42×42 -->
    <p id="popup-title">Are you sure you want to delete this product?</p>
  </div>
  <div class="modal-footer" style="justify-content:center;">
    <button class="btn btn-red btn-md">Yes, I'm sure</button>
    <button class="btn btn-alternative btn-md">No, cancel</button>
  </div>
</div>
```

```html
<div role="dialog" aria-modal="true" aria-labelledby="form-modal-title" class="modal-dialog modal-dialog-sm">
  <!-- Header: close button only, no title, no border -->
  <div class="modal-header" style="border-bottom:none;justify-content:flex-end;">
    <button class="modal-close" aria-label="Close dialog"><!-- × --></button>
  </div>
  <div class="modal-body">
    <h3 id="form-modal-title">Sign in to our platform</h3>

    <div class="form-group">
      <label class="form-label">Your email</label>
      <input class="form-input" type="email" placeholder="name@flowbite.com">
      <span class="form-helper">We'll never share your details. See our Privacy Policy.</span>
    </div>

    <div class="form-group">
      <label class="form-label">Password</label>
      <input class="form-input" type="password" placeholder="••••••••••">
    </div>

    <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:16px;">
      <label style="display:flex;align-items:center;gap:8px;">
        <input type="checkbox"> Remember me
      </label>
      <a href="#" style="color:#155dfc;">Lost Password?</a>
    </div>

    <button class="btn btn-primary btn-md" style="width:100%;justify-content:center;">Create account</button>
    <p style="text-align:center;margin-top:12px;">
      <a href="#" style="color:#155dfc;">Not registered? Create account</a>
    </p>
  </div>
</div>
```

---

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

---

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

---

# Sidebar

**Navigation / Sidebar** — left navigation for authenticated dashboard views.

Figma sources: component set \

## Variants

- Default — light, logo, overview active
- Active states — all items
- Financial model — collapsed
- Menu item states — all variants
- Color variants — White vs Gray
- Contracted — icon only (60px)
- Without logo
- Contracted — with logo (60px)
- In context — full page layout

## CSS classes

```
.sidebar-item-icon
```

## HTML examples

```html
<aside style="width:256px;height:100vh;background:var(--color-bg-muted);border-right:1px solid var(--color-border-default);">
  <!-- Logo -->
  <!-- Nav items — active: bg:#e5e7eb; color:#42389d; aria-current="page" -->
</aside>
```

```html
<!-- Active menu item: bg #e5e7eb, text #42389d, aria-current="page" -->
<a href="#" aria-current="page"
   style="display:flex;align-items:center;gap:4px;height:40px;padding:6px 8px;
          border-radius:8px;background:#e5e7eb;width:100%;box-sizing:border-box;text-decoration:none;">
  <!-- icon: 24×24, color #42389d -->
  <span style="font-family:inherit;font-size:var(--text-base);font-weight:var(--font-medium);line-height:1.5;color:#42389d;">Overview</span>
</a>

<!-- Inactive menu item: no background, text #111928 -->
<a href="#"
   style="display:flex;align-items:center;gap:4px;height:40px;padding:6px 8px;
          border-radius:8px;width:100%;box-sizing:border-box;text-decoration:none;">
  <!-- icon: 24×24, color #111928 -->
  <span style="font-family:inherit;font-size:var(--text-base);font-weight:var(--font-medium);line-height:1.5;color:#111928;">Metrics Library</span>
</a>
```

```html
<!-- Expandable menu item — collapsed state: chevron-down, sub-items hidden -->
<div style="display:flex;align-items:center;gap:4px;height:40px;padding:6px 8px;
            border-radius:8px;cursor:pointer;width:100%;box-sizing:border-box;">
  <div style="display:flex;flex:1;gap:4px;align-items:center;">
    <!-- icon: currency-dollar, 24×24, color #111928 -->
    <span style="font-family:inherit;font-size:var(--text-base);font-weight:var(--font-medium);line-height:1.5;color:#111928;">Financial model</span>
  </div>
  <!-- chevron-down when collapsed, chevron-up when expanded -->
  <!-- svg chevron-down here -->
</div>
<!-- Sub-items: rendered when expanded=true, hidden when collapsed -->
<!-- <div style="padding-left:28px;"> sub-item rows </div> -->
```

---

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

---

# Stepper

**Stepper** — coming soon. No active design usage identified at this time.

## Variants

- Coming soon

---

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

---

# Tabs

**Tabs** allow users to navigate between related views within the same context without leaving the page.

**When to use**
- Switch between different sections of related content (e.g. Overview / Details / History)
- Filter or segment a data set shown in the same area (e.g. Active / Archived / Draft)
- Organise form steps or configuration groups that don't require a separate page

**When NOT to use**
- Do not use tabs for navigation between unrelated pages — use the Sidebar or a nav menu instead
- Do not nest tabs inside other tabs — it creates orientation issues
- Do not use tabs when there are more than 7–8 items — consider a dropdown or sidebar nav

**Anatomy**
- **Label** — required; text identifying the tab's content section
- **Counter badge** — optional; numeric badge showing count (e.g. unread items, results)
- **Dropdown chevron** — optional; indicates the tab opens a sub-menu (chevron toggles down ↔ up)
- **Active indicator** — 2 px bottom border in brand purple (\

## Variants

- All states
- With counter badge
- With dropdown chevron
- Full tab bar (realistic)

## HTML examples

```html
<div role="tablist" style="display:flex;align-items:flex-end;border-bottom:1px solid var(--color-border-default);">
  <!-- Default -->
  <button role="tab" aria-selected="false"
    style="padding:12px 16px;height:45px;font-size:var(--text-sm);font-weight:var(--font-medium);
           color:#4b5563;border:none;border-bottom:2px solid transparent;
           margin-bottom:-1px;background:transparent;">
    Overview
  </button>

  <!-- Hover (applied via :hover in CSS) -->
  <button role="tab" aria-selected="false"
    style="padding:12px 16px;height:45px;font-size:var(--text-sm);font-weight:var(--font-medium);
           color:#374151;border:none;border-bottom:2px solid #d1d5db;
           margin-bottom:-1px;background:transparent;">
    Transactions
  </button>

  <!-- Active -->
  <button role="tab" aria-selected="true"
    style="padding:12px 16px;height:45px;font-size:var(--text-sm);font-weight:var(--font-medium);
           color:#42389d;border:none;border-bottom:2px solid #42389d;
           margin-bottom:-1px;background:transparent;">
    Reports
  </button>
</div>
```

---

# Tag

Inline text labels with a colored dot indicator — no background, purely typographic.

**When to use**
- Categorize or label items inline within text (e.g. a status label inside a table cell)
- Show a topic, category, or type tag with a color-coded dot for quick scanning
- Complement other elements without adding visual weight (unlike Badge or Chip)

**When NOT to use**
- Standalone status indicators that need a background for contrast → use Badge
- Removable active filters → use Chip
- Prominent action-required states → use Alert

**Anatomy**
\

## Variants

- Colors — all 9 themes
- Dismissible — with × button

## HTML examples

```html
<!-- Grey (neutral) -->
<span style="display:inline-flex;align-items:center;gap:4px;color:#4a5565;font-size:var(--text-xs);font-weight:var(--font-medium);white-space:nowrap;line-height:1.5;">
  <svg width="12" height="12" viewBox="0 0 12 12" fill="#4b5563" aria-hidden="true"><circle cx="6" cy="6" r="3"/></svg>
  <span>Neutral</span>
</span>

<!-- Green -->
<span style="display:inline-flex;align-items:center;gap:4px;color:#009966;font-size:var(--text-xs);font-weight:var(--font-medium);white-space:nowrap;line-height:1.5;">
  <svg width="12" height="12" viewBox="0 0 12 12" fill="#057a55" aria-hidden="true"><circle cx="6" cy="6" r="3"/></svg>
  <span>Active</span>
</span>

<!-- Red -->
<span style="display:inline-flex;align-items:center;gap:4px;color:#e7000b;font-size:var(--text-xs);font-weight:var(--font-medium);white-space:nowrap;line-height:1.5;">
  <svg width="12" height="12" viewBox="0 0 12 12" fill="#e02424" aria-hidden="true"><circle cx="6" cy="6" r="3"/></svg>
  <span>Failed</span>
</span>
```

```html
<span style="display:inline-flex;align-items:center;gap:4px;color:#5850ec;font-size:var(--text-xs);font-weight:var(--font-medium);white-space:nowrap;line-height:1.5;">
  <svg width="12" height="12" viewBox="0 0 12 12" fill="#5850ec" aria-hidden="true">
    <circle cx="6" cy="6" r="3"/>
  </svg>
  <span>Design</span>
  <button type="button" aria-label="Remove Design" style="display:inline-flex;align-items:center;background:none;border:none;cursor:pointer;padding:0;">
    <svg width="12" height="12" viewBox="0 0 20 20" fill="#5850ec" aria-hidden="true">
      <path fill-rule="evenodd" d="${X_PATH}" clip-rule="evenodd"/>
    </svg>
  </button>
</span>
```

---

# Toast

**Toast** is a brief, auto-dismissing notification that appears in response to a user action or system event.

**When to use**
- Confirming an action just completed (file saved, form submitted)
- Reporting a non-blocking error or warning (upload failed, quota exceeded)
- Delivering a push notification or incoming message alert
- Prompting the user to undo a destructive action within a short time window

**When NOT to use**
- Critical errors that block the workflow → use a modal or inline error state
- Persistent information the user must act on → use an Alert or Banner
- Long messages (> 2 sentences) → toasts are too small; use a notification drawer

**Anatomy**
\

## Variants

- All types

## CSS classes

```
.btn
.btn-green
.btn-light
.btn-primary
.btn-red
.btn-xs
.toast
.toast--danger
.toast--default
.toast--expanded
.toast--interactive
.toast--push
.toast--simple
.toast--success
.toast-body
.toast-close
.toast-icon
.toast-icon-danger
.toast-icon-success
.toast-message
.toast-title
.toast-title-row
```

## HTML examples

```html
<!-- Success -->
<div class="toast toast--success" role="status" aria-live="polite">
  <div class="toast-icon toast-icon-success"><!-- check icon --></div>
  <p class="toast-title">File saved successfully.</p>
  <button class="toast-close" aria-label="Dismiss">×</button>
</div>

<!-- Danger -->
<div class="toast toast--danger" role="alert" aria-live="assertive">
  <div class="toast-icon toast-icon-danger"><!-- bell icon --></div>
  <p class="toast-title">The file was permanently deleted.</p>
  <button class="toast-close" aria-label="Dismiss">×</button>
</div>

<!-- Default -->
<div class="toast toast--default" role="status" aria-live="polite"> … </div>

<!-- Simple -->
<div class="toast toast--simple" role="status" aria-live="polite"> … </div>

<!-- Push notification -->
<div class="toast toast--push" role="status" aria-live="polite"> … </div>

<!-- Interactive -->
<div class="toast toast--interactive" role="status" aria-live="polite"> … </div>
```

```html
<!-- Success with CTA -->
<div class="toast toast--success toast--expanded" role="status" aria-live="polite">
  <div class="toast-title-row">
    <!-- check-circle icon -->
    <strong class="toast-title">Success</strong>
    <button class="toast-close" aria-label="Dismiss">×</button>
  </div>
  <p class="toast-message">Your changes have been saved and are now visible to all collaborators.</p>
  <button class="btn btn-green btn-xs">View file</button>
</div>

<!-- Danger with CTA -->
<div class="toast toast--danger toast--expanded" role="alert" aria-live="assertive">
  <div class="toast-title-row">
    <!-- x-circle icon -->
    <strong class="toast-title">Attention</strong>
    <button class="toast-close" aria-label="Dismiss">×</button>
  </div>
  <p class="toast-message">Oh snap! Something went wrong. Your changes could not be saved.</p>
  <button class="btn btn-red btn-xs">Undo action</button>
</div>
```

---

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

