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
