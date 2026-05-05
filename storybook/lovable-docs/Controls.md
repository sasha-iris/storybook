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
