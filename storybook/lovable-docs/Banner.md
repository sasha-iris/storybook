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
