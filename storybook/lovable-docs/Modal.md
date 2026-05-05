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
