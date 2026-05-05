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
