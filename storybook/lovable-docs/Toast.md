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
