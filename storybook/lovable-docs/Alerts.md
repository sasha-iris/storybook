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
