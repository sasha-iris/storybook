# Iris Library — Complete Component Reference for Lovable

> **Source:** Figma file `ZKtEULdYKaXe5uQl1J6ijI` (Iris Library)
> **Stack in Lovable:** React + Tailwind CSS + shadcn/ui
> **Font:** Inter (400/500/600/700/800) — add to `index.html` `<head>`:
> ```html
> <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap">
> ```
> **CSS variables:** all shadcn/ui overrides and Iris tokens are in `iris-recolor.css`.
> **Class-based styles:** available via `styles.css` (Iris Storybook CSS).

---

## Design Tokens

### Colors — Brand

| Token | Hex | Use |
|-------|-----|-----|
| brand-800 | `#42389d` | Primary buttons, active nav, links, focus rings |
| brand-900 | `#362f78` | Primary button hover |
| brand-600 | `#5850ec` | Border brand |
| brand-500 | `#6875f5` | Charts, data bars |
| brand-300 | `#b4c6fc` | Disabled checked state |

### Colors — Semantic

| Role | Hex | Use |
|------|-----|-----|
| Success | `#007a55` | Green button, success badge bg text |
| Danger | `#c70036` | Destructive actions, error badges |
| Warning | `#d03801` | Yellow/orange warning badge |
| Info/Link | `#1447e6` | Blue links, info accent |

### Colors — Grays (Iris scale)

| Name | Hex | Role |
|------|-----|------|
| gray-50 | `#f9fafb` | Page bg, input bg |
| gray-100 | `#f3f4f6` | Sidebar bg, muted bg, hover, disabled bg |
| gray-200 | `#e5e7eb` | Borders, sidebar active bg, dividers |
| gray-300 | `#d1d5db` | Input border (default), control off |
| gray-400 | `#9ca3af` | Disabled text, control hover |
| gray-500 | `#6b7280` | Placeholder, muted text, inactive icons |
| gray-900 | `#111928` | Primary text, inactive nav text |
| dark | `#1e2939` | Dark button bg, dark sidebar item text |
| heading | `#101828` | H1–H4 heading text |

### Typography

| Name | Size | Weight | Use |
|------|------|--------|-----|
| H1 | 30px / 1.875rem | 700 | Page titles |
| H2 | 24px / 1.5rem | 400 | Section titles |
| H3 | 20px / 1.25rem | 400 | Card/panel titles |
| H4 | 18px / 1.125rem | 400 | Sub-section titles |
| Body 1 | 16px / 1rem | 400 | Default body |
| Body 2 | 14px / 0.875rem | 400 | Secondary text, labels |
| Caption | 12px / 0.75rem | 400 | Helper text, meta |
| Line-height | 1.5 | — | All text |

### Radius

| Token | Value | Use |
|-------|-------|-----|
| sm | 4px | Inline chips, table badges |
| md | 8px | Inputs, selects, dropdowns, nav items |
| lg | 12px | Buttons, cards |
| xl | 16px | Cards, lib-card shell |
| full | 9999px | Pill buttons, avatars |

### Shadows

| Token | Value | Use |
|-------|-------|-----|
| sm | `0px 1px 2px rgba(0,0,0,0.08)` | Cards, KPI tiles |
| md | `0px 4px 12px rgba(0,0,0,0.10)` | Dropdowns, modals, tooltips |

---

## Sidebar / Navigation

**Figma:** nodes `9272:163206` (sidebar) and `9263:160934` (menu item)

### Layout

| Property | Value |
|----------|-------|
| Width | 256px |
| Height | 100vh |
| Background | `#f3f4f6` (gray-100) |
| Border-right | `1px solid #e5e7eb` |
| Layout | flex column, gap 24px between sections |
| Box-sizing | border-box |

### Logo area

| Property | Value |
|----------|-------|
| Padding | `24px 8px 0 28px` |

### Nav container (main + bottom)

| Property | Value |
|----------|-------|
| Padding | `0 8px 0 28px` (28px left, 8px right) |
| Gap between items | 8px |
| Width | 100%, box-sizing border-box |

### Menu item

| Property | Value |
|----------|-------|
| Height | 40px |
| Padding | `6px 8px` |
| Border-radius | 8px |
| Icon size | 24x24px |
| Icon-label gap | 4px |
| Font | Inter 500 16px / 1.5 |

### Menu item states

| State | Background | Text color | Icon color |
|-------|-----------|-----------|------------|
| Active | `#e5e7eb` (gray-200) | `#42389d` (brand-800) | `#42389d` |
| Inactive | transparent | `#111928` (gray-900) | `#6b7280` (gray-500) |
| Hover (inactive) | `#f3f4f6` (gray-100) | `#111928` | `#6b7280` |

IMPORTANT: Active item uses gray background + purple text. NOT a purple background.

### Expandable menu item

- Chevron: 20x20px, `#1f2a37`, right-aligned
- Chevron flips: chevron-down (collapsed) to chevron-up (expanded)
- Sub-items: `padding-left 28px`, same height/font as regular items, no icon
- Sub-item active: `bg #f3f4f6`, `color #42389d`
- Sub-item hover: `bg #e5e7eb`

### Bottom nav divider

- `1px solid #e5e7eb`, full width

### HTML structure

```html
<aside style="
  width:256px; height:100vh;
  background:#f3f4f6; border-right:1px solid #e5e7eb;
  display:flex; flex-direction:column; gap:24px;
  box-sizing:border-box;">

  <!-- Logo -->
  <div style="padding:24px 8px 0 28px;"><!-- logo --></div>

  <!-- Main nav -->
  <nav style="display:flex;flex-direction:column;gap:8px;padding:0 8px 0 28px;box-sizing:border-box;">

    <!-- ACTIVE item -->
    <a href="#" aria-current="page" style="
      display:flex;align-items:center;gap:4px;
      height:40px;padding:6px 8px;border-radius:8px;
      background:#e5e7eb;color:#42389d;
      font:500 16px/1.5 inherit;text-decoration:none;">
      <svg width="24" height="24" style="flex-shrink:0;color:#42389d;"><!-- icon --></svg>
      <span>Overview</span>
    </a>

    <!-- INACTIVE item -->
    <a href="#" style="
      display:flex;align-items:center;gap:4px;
      height:40px;padding:6px 8px;border-radius:8px;
      background:transparent;color:#111928;
      font:500 16px/1.5 inherit;text-decoration:none;">
      <svg width="24" height="24" style="flex-shrink:0;color:#6b7280;"><!-- icon --></svg>
      <span>Metrics</span>
    </a>

    <!-- EXPANDABLE item -->
    <div>
      <button style="
        display:flex;align-items:center;gap:4px;
        width:100%;height:40px;padding:6px 8px;border-radius:8px;
        background:transparent;color:#111928;
        font:500 16px/1.5 inherit;border:none;cursor:pointer;">
        <svg width="24" height="24" style="flex-shrink:0;color:#6b7280;"><!-- icon --></svg>
        <span style="flex:1;text-align:left;">Financial Model</span>
        <svg width="20" height="20" style="flex-shrink:0;color:#1f2a37;"><!-- chevron-down --></svg>
      </button>
      <!-- Sub-items (when expanded) -->
      <div style="padding-left:28px;display:flex;flex-direction:column;gap:8px;margin-top:4px;">
        <a href="#" style="
          display:flex;align-items:center;
          height:40px;padding:6px 8px;border-radius:8px;
          color:#111928;font:500 16px/1.5 inherit;text-decoration:none;">
          Income Statement
        </a>
      </div>
    </div>
  </nav>

  <!-- Divider -->
  <div style="height:1px;background:#e5e7eb;width:100%;flex-shrink:0;"></div>

  <!-- Bottom nav -->
  <nav style="display:flex;flex-direction:column;gap:8px;padding:0 8px 0 28px;box-sizing:border-box;">
    <a href="#" style="
      display:flex;align-items:center;gap:4px;
      height:40px;padding:6px 8px;border-radius:8px;
      background:transparent;color:#111928;
      font:500 16px/1.5 inherit;text-decoration:none;">
      <svg width="24" height="24" style="flex-shrink:0;color:#6b7280;"><!-- help icon --></svg>
      <span>Help</span>
    </a>
  </nav>

  <!-- Spacer -->
  <div style="flex:1;"></div>

  <!-- User profile -->
  <div style="padding:12px 16px;border-top:1px solid #e5e7eb;display:flex;align-items:center;gap:10px;">
    <div style="width:32px;height:32px;border-radius:50%;background:#42389d;color:#fff;font:600 14px/1 inherit;display:flex;align-items:center;justify-content:center;flex-shrink:0;">A</div>
    <div style="flex:1;min-width:0;">
      <div style="font-size:14px;font-weight:600;color:#111928;">Alex Smith</div>
      <div style="font-size:12px;color:#6b7280;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">alex@example.com</div>
    </div>
  </div>

</aside>
```

### Tailwind class shorthand

```
Active item:      bg-[#e5e7eb] text-[#42389d]
Inactive item:    bg-transparent text-[#111928]
Hover (inactive): hover:bg-[#f3f4f6]
Icon active:      text-[#42389d]
Icon inactive:    text-[#6b7280]
Item:             h-10 px-2 py-1.5 rounded-lg gap-1 text-base font-medium
Icon:             w-6 h-6 flex-shrink-0
Nav:              flex flex-col gap-2 pl-7 pr-2
```

---

## Button

**CSS classes:** `.btn` + color + size modifier

### Colors (all require `.btn` base)

| Class | BG | Hover BG | Text |
|-------|----|----------|------|
| `.btn-primary` | `#42389d` | `#362f78` | white |
| `.btn-dark` | `#1e2939` | `#111928` | white |
| `.btn-green` | `#007a55` | `#005e3e` | white |
| `.btn-red` | `#c10007` | `#a30006` | white |
| `.btn-yellow` | `#d03801` | `#b43100` | white |
| `.btn-blue` | `#1447e6` | `#0f3bc0` | white |
| `.btn-gray` | `#f9fafb` | `#f3f4f6` | `#1e2939`, border `#e5e7eb` |
| `.btn-outline-primary` | transparent | `#42389d` | `#42389d`, white on hover |

### Sizes

| Class | Height | Padding | Font |
|-------|--------|---------|------|
| `.btn-xs` | ~34px | `8px 12px` | 12px |
| `.btn-sm` | 36px | `8px 12px` | 14px |
| `.btn-md` | 40px | `10px 20px` | 14px |
| `.btn-lg` | 48px | `12px 20px` | 16px |
| `.btn-xl` | 52px | `14px 24px` | 16px |

Border-radius: **12px**
Focus: `outline: 2px solid #42389d; outline-offset: 2px`

### Modifiers

- `.btn-icon` — icon-only square
- `.btn-pill` — `border-radius: 9999px`
- `[disabled]` — `opacity: 0.5; cursor: not-allowed`
- `.btn-link` — text link, no border/bg
- `.btn-group` — horizontal group container (segmented control)
- `.btn-group .btn` — inactive segment: `background:#ffffff; color:#111928; border:1px solid #e5e7eb; font-size:14px; padding:8px 16px`
- `.btn-group .btn.active` — active segment: `background:#f3f4f6; color:#101828; font-weight:600` — **GRAY background, dark text. NOT purple. NOT btn-primary.**
- `.btn-group .btn:hover` — same as active: `background:#f3f4f6`

⚠️ **btn-group active ≠ btn-primary.** Active segment is `#f3f4f6` gray + `#101828` dark text. Purple (`#42389d`) is NEVER used as active background in btn-group.

### HTML examples

```html
<button class="btn btn-primary btn-md">Primary</button>
<button class="btn btn-dark btn-md">Dark</button>
<button class="btn btn-green btn-md">Green</button>
<button class="btn btn-red btn-md">Red</button>
<button class="btn btn-yellow btn-md">Yellow</button>
<button class="btn btn-blue btn-md">Blue</button>
<button class="btn btn-gray btn-md">Gray</button>
<button class="btn btn-outline-primary btn-md">Outline</button>

<!-- Sizes -->
<button class="btn btn-primary btn-xs">xs</button>
<button class="btn btn-primary btn-sm">sm</button>
<button class="btn btn-primary btn-md">md</button>
<button class="btn btn-primary btn-lg">lg</button>
<button class="btn btn-primary btn-xl">xl</button>

<!-- With icon (left) -->
<button class="btn btn-primary btn-md">
  <svg width="20" height="20"><!-- heroicon --></svg>
  <span>Label</span>
</button>

<!-- Icon-only -->
<button class="btn btn-primary btn-icon btn-md" aria-label="Action">
  <svg width="20" height="20"><!-- heroicon --></svg>
</button>

<!-- Pill -->
<button class="btn btn-primary btn-md btn-pill">Pill</button>

<!-- Disabled -->
<button class="btn btn-primary btn-md" disabled>Disabled</button>

<!-- Segmented control (btn-group) — CORRECT active state -->
<!--
  Active segment:   background:#f3f4f6  color:#101828  font-weight:600
  Inactive segment: background:#ffffff  color:#111928  border:1px solid #e5e7eb
  Container:        border-radius:12px  overflow:hidden
  Active is GRAY, NOT purple. Do not use #42389d as active bg.
-->
<div class="btn-group">
  <button class="btn" style="background:#ffffff;color:#111928;border:1px solid #e5e7eb;font-size:14px;padding:8px 16px;">Years</button>
  <button class="btn" style="background:#ffffff;color:#111928;border:1px solid #e5e7eb;border-left:none;font-size:14px;padding:8px 16px;">Months</button>
  <button class="btn active" style="background:#f3f4f6;color:#101828;font-weight:600;border:1px solid #e5e7eb;border-left:none;font-size:14px;padding:8px 16px;">Days</button>
</div>
```

---

## Input / Forms

### Input states

| State | Border color |
|-------|-------------|
| Default | `#d1d5db` |
| Focus | `#155dfc` |
| Success | `#0e9f6e` |
| Error | `#f05252` |
| Disabled | `#d1d5db`, opacity 0.6 |

### Input sizes

| Size | Height |
|------|--------|
| Small | 37px |
| Medium (default) | 42px |
| Large | 52px |

Background: `#f9fafb` · Border-radius: `8px` · Font: 14px/400

### CSS classes

```
.form-group    — wrapper div
.form-label    — 14px/500 #111928, margin-bottom 4px
.form-input    — full-width input, height 42px
.form-helper   — 12px #6b7280, margin-top 4px
.form-error    — 12px #c70036
```

### HTML examples

```html
<!-- Standard input with label + helper -->
<div class="form-group">
  <label class="form-label">Email address</label>
  <input class="form-input" type="email" placeholder="name@example.com">
  <span class="form-helper">We will never share your email.</span>
</div>

<!-- Error state -->
<div class="form-group">
  <label class="form-label">Password</label>
  <input class="form-input" type="password" style="border-color:#f05252;">
  <span style="font-size:12px;color:#c70036;">Password must be at least 8 characters.</span>
</div>

<!-- Disabled -->
<div class="form-group">
  <label class="form-label">Username</label>
  <input class="form-input" disabled placeholder="username" style="opacity:0.6;cursor:not-allowed;">
</div>

<!-- Floating label — initial -->
<div style="border-bottom:2px solid #d1d5db;padding:12px;">
  <span style="color:#6b7280;font-size:14px;">Placeholder text</span>
</div>

<!-- Floating label — active/filled -->
<div style="border-bottom:2px solid #155dfc;padding:6px 0 8px;">
  <div style="font-size:12px;font-weight:500;color:#155dfc;">Label</div>
  <span style="color:#111928;font-size:14px;">Value text</span>
</div>
```

### Select

```html
<!-- Default -->
<div style="border:1px solid #d1d5db;border-radius:8px;height:40px;
  display:flex;align-items:center;padding:0 12px;background:#f9fafb;cursor:pointer;">
  <span style="flex:1;color:#6b7280;font-size:14px;">Select option</span>
  <svg width="16" height="16"><!-- chevron-down --></svg>
</div>

<!-- Error -->
<div style="border:1px solid #c81e1e;border-radius:8px;height:40px;
  display:flex;align-items:center;padding:0 12px;background:#f9fafb;">
  <span style="flex:1;color:#111928;font-size:14px;">Selected value</span>
</div>

<!-- Disabled -->
<div style="border:1px solid #e5e7eb;border-radius:8px;height:40px;opacity:0.7;cursor:not-allowed;
  display:flex;align-items:center;padding:0 12px;background:#f9fafb;">
  <span style="flex:1;color:#6b7280;font-size:14px;">Select option</span>
</div>
```

### Textarea

```html
<div class="form-group">
  <label class="form-label">Description</label>
  <textarea class="form-input" rows="4" style="resize:vertical;height:auto;"></textarea>
</div>
```

---

## Controls (Checkbox, Radio, Toggle)

**Anatomy:** 16x16px control + 14px/500 label + optional 12px/400 helper

### Toggle

- Size: 28x16px (track), 12x12px thumb
- ON: `#42389d` (brand-800)
- OFF: `#d1d5db` (gray-300)
- Destructive ON: `#c81e1e`
- Disabled ON brand: `#cddbfe`
- Disabled ON danger: `#ffc9c9`

### Checkbox

- Size: 16x16px, radius 4px
- Unchecked border: `#d1d5db`
- Checked: bg `#42389d`, checkmark white
- Intermediate: bg `#42389d`, dash icon
- Destructive: `#c10007`
- Disabled + checked: `#cddbfe`

### Radio

- Size: 16x16px, circle
- Unselected border: `#d1d5db`
- Selected border + dot: `#42389d`
- Destructive: `#c81e1e`
- Disabled border: `#e5e7eb`

### HTML

```html
<!-- Toggle ON -->
<span class="iris-toggle iris-toggle--on" role="switch" aria-checked="true">
  <span class="iris-toggle__thumb"></span>
</span>

<!-- Toggle OFF -->
<span class="iris-toggle iris-toggle--off" role="switch" aria-checked="false">
  <span class="iris-toggle__thumb"></span>
</span>

<!-- Toggle destructive ON -->
<span class="iris-toggle iris-toggle--on iris-toggle--destructive" role="switch" aria-checked="true">
  <span class="iris-toggle__thumb"></span>
</span>

<!-- Toggle disabled ON -->
<span class="iris-toggle iris-toggle--on iris-toggle--disabled" role="switch" aria-checked="true" aria-disabled="true">
  <span class="iris-toggle__thumb"></span>
</span>

<!-- Checkbox unchecked -->
<span class="iris-checkbox" role="checkbox" aria-checked="false"></span>

<!-- Checkbox checked -->
<span class="iris-checkbox iris-checkbox--checked" role="checkbox" aria-checked="true"></span>

<!-- Checkbox indeterminate -->
<span class="iris-checkbox iris-checkbox--intermediate" role="checkbox" aria-checked="mixed"></span>

<!-- Checkbox destructive + checked -->
<span class="iris-checkbox iris-checkbox--checked iris-checkbox--destructive" role="checkbox" aria-checked="true"></span>

<!-- Radio unselected -->
<span class="iris-radio" role="radio" aria-checked="false"></span>

<!-- Radio selected -->
<span class="iris-radio iris-radio--checked" role="radio" aria-checked="true"></span>

<!-- Radio destructive selected -->
<span class="iris-radio iris-radio--checked iris-radio--destructive" role="radio" aria-checked="true"></span>
```

### Full control row with label

```html
<label style="display:flex;align-items:flex-start;gap:12px;cursor:pointer;">
  <span class="iris-checkbox iris-checkbox--checked" role="checkbox" aria-checked="true"></span>
  <div>
    <span style="font-size:14px;font-weight:500;color:#111928;display:block;">Remember me</span>
    <span style="font-size:12px;color:#6b7280;">Keep me signed in on this device</span>
  </div>
</label>
```

---

## Tabs

### Specs

| Property | Value |
|----------|-------|
| Tab height | 45px |
| Tab padding | `12px 16px` |
| Font | 14px / 500 |
| Tab bar border | `1px solid #e5e7eb` (bottom) |
| Active indicator | `2px solid #42389d` (bottom) |
| Active text | `#42389d` |
| Default text | `#4b5563` |
| Hover text | `#374151`, indicator `#d1d5db` |

### HTML

```html
<div role="tablist" style="display:flex;align-items:flex-end;border-bottom:1px solid #e5e7eb;">

  <!-- Active -->
  <button role="tab" aria-selected="true" style="
    padding:12px 16px;height:45px;
    font-size:14px;font-weight:500;color:#42389d;
    border:none;border-bottom:2px solid #42389d;
    margin-bottom:-1px;background:transparent;cursor:pointer;">
    Overview
  </button>

  <!-- Default -->
  <button role="tab" aria-selected="false" style="
    padding:12px 16px;height:45px;
    font-size:14px;font-weight:500;color:#4b5563;
    border:none;border-bottom:2px solid transparent;
    margin-bottom:-1px;background:transparent;cursor:pointer;">
    Transactions
  </button>

  <!-- With counter badge -->
  <button role="tab" aria-selected="false" style="
    padding:12px 16px;height:45px;
    font-size:14px;font-weight:500;color:#4b5563;
    border:none;border-bottom:2px solid transparent;
    margin-bottom:-1px;background:transparent;cursor:pointer;
    display:flex;align-items:center;gap:8px;">
    Reports
    <span style="display:inline-flex;align-items:center;justify-content:center;
      min-width:20px;height:20px;padding:0 6px;
      background:#e5edff;color:#42389d;
      font-size:12px;font-weight:500;border-radius:9999px;">4</span>
  </button>

</div>
```

---

## Badge / Chip / Tag

### Sizes

| Size | Font | Padding | Radius |
|------|------|---------|--------|
| lg (default) | 14px / 400 | `2px 12px` | 6px |
| sm | 12px / 500 | `2px 10px` | 6px |

### Color palette

| Theme | Background | Text |
|-------|-----------|------|
| Gray (neutral) | `#f3f4f6` | `#101828` |
| Green (success) | `#d0fae5` | `#006045` |
| Red (error) | `#ffe2e2` | `#9f0712` |
| Yellow (warning) | `#fef9c2` | `#894b00` |
| Brand/Indigo | `#e5edff` | `#42389d` |
| Blue | `#dbeafe` | `#1e40af` |

### HTML

```html
<!-- Gray -->
<span style="display:inline-flex;align-items:center;gap:4px;
  background:#f3f4f6;color:#101828;
  font-size:14px;font-weight:400;border-radius:6px;
  padding:2px 12px;white-space:nowrap;line-height:1.5;">
  Neutral
</span>

<!-- Green success -->
<span style="display:inline-flex;align-items:center;gap:4px;
  background:#d0fae5;color:#006045;
  font-size:14px;font-weight:400;border-radius:6px;
  padding:2px 12px;white-space:nowrap;line-height:1.5;">
  Active
</span>

<!-- Red error -->
<span style="display:inline-flex;align-items:center;gap:4px;
  background:#ffe2e2;color:#9f0712;
  font-size:14px;font-weight:400;border-radius:6px;
  padding:2px 12px;white-space:nowrap;line-height:1.5;">
  Failed
</span>

<!-- Yellow warning -->
<span style="display:inline-flex;align-items:center;gap:4px;
  background:#fef9c2;color:#894b00;
  font-size:14px;font-weight:400;border-radius:6px;
  padding:2px 12px;white-space:nowrap;line-height:1.5;">
  Pending
</span>

<!-- Brand indigo -->
<span style="display:inline-flex;align-items:center;gap:4px;
  background:#e5edff;color:#42389d;
  font-size:14px;font-weight:400;border-radius:6px;
  padding:2px 12px;white-space:nowrap;line-height:1.5;">
  In review
</span>

<!-- sm size -->
<span style="display:inline-flex;align-items:center;gap:4px;
  background:#e5edff;color:#42389d;
  font-size:12px;font-weight:500;border-radius:6px;
  padding:2px 10px;white-space:nowrap;line-height:1.5;">
  Tag
</span>

<!-- With icon -->
<span style="display:inline-flex;align-items:center;gap:4px;
  background:#e5edff;color:#42389d;font-size:14px;border-radius:6px;padding:2px 12px;line-height:1.5;">
  <svg width="16" height="16" fill="#42389d" viewBox="0 0 20 20" aria-hidden="true"><!-- icon --></svg>
  Scheduled
</span>

<!-- Dismissible -->
<span style="display:inline-flex;align-items:center;gap:6px;
  background:#f3f4f6;color:#101828;font-size:14px;border-radius:6px;padding:2px 8px 2px 12px;line-height:1.5;">
  Label
  <button aria-label="Remove" style="display:flex;align-items:center;padding:0;background:transparent;border:none;cursor:pointer;color:#6b7280;">
    <svg width="14" height="14"><!-- x --></svg>
  </button>
</span>
```

---

## Dropdown / Menu

### Panel specs

| Property | Value |
|----------|-------|
| Background | `#ffffff` |
| Border-radius | 8px |
| Border | `1px solid #e5e7eb` |
| Shadow | `0px 4px 12px rgba(0,0,0,0.10)` |
| Min-width | 224px |
| Padding | `8px 0` |

### Item specs

| Property | Value |
|----------|-------|
| Height | 37px |
| Padding | `8px 16px` |
| Font | 14px / 400 |
| Icon size | 16x16px |
| Selected bg | `#e5edff` |
| Hover bg | `#f3f4f6` |
| Danger text | `#c70036`, icon `#f05252` |
| Disabled opacity | 0.5 |

### CSS classes

```
.dropdown-menu           — panel wrapper
.dropdown-item           — single row (button/link)
.dropdown-item.active    — selected state
.dropdown-item.danger    — destructive action
.dropdown-item__icon     — left icon
.dropdown-item__text     — label
.dropdown-item__chevron  — right chevron
.dropdown-label          — section header (12px/700 uppercase)
.dropdown-count          — count chip next to label
.dropdown-divider        — hr separator (1px #e5e7eb)
.dropdown-search         — search header inside menu
.dropdown-trigger        — trigger button
.dropdown-trigger--outline
.dropdown-trigger--sm
.dropdown-trigger--icon
.dropdown-notification   — notification row
.dropdown-profile        — user profile row
```

### HTML

```html
<!-- Standard dropdown -->
<div class="dropdown-menu" style="width:224px;">
  <div class="dropdown-label">ACTIONS <span class="dropdown-count">5</span></div>

  <button class="dropdown-item">
    <span class="dropdown-item__icon"><!-- icon 16px --></span>
    <span class="dropdown-item__text">Edit</span>
  </button>

  <button class="dropdown-item active">
    <span class="dropdown-item__icon"><!-- icon 16px --></span>
    <span class="dropdown-item__text">Selected option</span>
  </button>

  <button class="dropdown-item" aria-disabled="true">
    <span class="dropdown-item__text">Export (unavailable)</span>
  </button>

  <hr class="dropdown-divider">

  <button class="dropdown-item danger">
    <span class="dropdown-item__icon"><!-- trash icon, #f05252 --></span>
    <span class="dropdown-item__text">Delete</span>
  </button>
</div>

<!-- With checkbox items (filter menu) -->
<div class="dropdown-menu" style="width:280px;">
  <div class="dropdown-label">FILTER BY STATUS</div>
  <label style="display:flex;gap:8px;padding:8px 16px;cursor:pointer;font-size:14px;color:#111928;">
    <span class="iris-checkbox iris-checkbox--checked" role="checkbox" aria-checked="true"></span>
    Active reports
  </label>
</div>

<!-- Notification panel -->
<div class="dropdown-menu" style="width:384px;">
  <div style="background:#f9fafb;padding:8px 12px;">
    <span style="font-size:16px;font-weight:500;color:#111928;">Notifications</span>
  </div>
  <div class="dropdown-notification">
    <span class="dropdown-notification__avatar">JL</span>
    <div class="dropdown-notification__body">
      <span class="dropdown-notification__msg">Jese: "Hey, what is up?"</span>
      <span class="dropdown-notification__time">a few moments ago</span>
    </div>
  </div>
  <div style="padding:8px 12px;">
    <span style="font-size:14px;font-weight:500;color:#42389d;">View all</span>
  </div>
</div>
```

---

## Dialog / Modal

### Sizes

| Class | Width |
|-------|-------|
| `.modal-dialog` | ~520px (default) |
| `.modal-dialog-sm` | ~400px |
| `.modal-dialog-lg` | ~800px |
| `.modal-dialog-xl` | ~1024px |

### CSS classes

```
.modal-backdrop  — fixed full-screen overlay (rgba(0,0,0,0.5))
.modal-dialog    — panel (white, radius 16px, shadow-md)
.modal-header    — padding 20px 24px, border-bottom 1px #e5e7eb, flex row
.modal-title     — 18px/600 #111928
.modal-close     — x button top-right
.modal-body      — padding 24px, scrollable
.modal-footer    — padding 16px 24px, border-top 1px #e5e7eb, flex row, gap 12px, justify flex-end
```

### HTML

```html
<!-- Info modal -->
<div role="dialog" aria-modal="true" aria-labelledby="modal-title" class="modal-dialog">
  <div class="modal-header">
    <h2 class="modal-title" id="modal-title">Terms of Service</h2>
    <button class="modal-close" aria-label="Close">x</button>
  </div>
  <div class="modal-body">
    <p>Content goes here.</p>
  </div>
  <div class="modal-footer">
    <button class="btn btn-primary btn-md">I accept</button>
    <button class="btn btn-gray btn-md">Decline</button>
  </div>
</div>

<!-- Confirmation pop-up (sm) -->
<div role="dialog" aria-modal="true" class="modal-dialog modal-dialog-sm">
  <div class="modal-header" style="border-bottom:none;justify-content:flex-end;">
    <button class="modal-close" aria-label="Close">x</button>
  </div>
  <div class="modal-body" style="text-align:center;">
    <!-- exclamation icon 42x42px -->
    <p style="font-size:18px;font-weight:600;color:#111928;margin-bottom:8px;">Delete item?</p>
    <p style="font-size:14px;color:#6b7280;">This action cannot be undone.</p>
  </div>
  <div class="modal-footer" style="justify-content:center;">
    <button class="btn btn-red btn-md">Yes, delete</button>
    <button class="btn btn-gray btn-md">Cancel</button>
  </div>
</div>

<!-- With form (sign in) -->
<div role="dialog" aria-modal="true" class="modal-dialog modal-dialog-sm">
  <div class="modal-header" style="border-bottom:none;justify-content:flex-end;">
    <button class="modal-close" aria-label="Close">x</button>
  </div>
  <div class="modal-body">
    <h3 style="font-size:20px;font-weight:600;color:#111928;margin-bottom:20px;">Sign in</h3>
    <div class="form-group">
      <label class="form-label">Email</label>
      <input class="form-input" type="email" placeholder="name@example.com">
    </div>
    <div class="form-group">
      <label class="form-label">Password</label>
      <input class="form-input" type="password" placeholder="&#x2022;&#x2022;&#x2022;&#x2022;&#x2022;&#x2022;&#x2022;&#x2022;">
    </div>
    <button class="btn btn-primary btn-md" style="width:100%;justify-content:center;">Sign in</button>
  </div>
</div>

<!-- Overlay -->
<div class="modal-backdrop" aria-hidden="true"></div>
```

---

## Drawer

Side drawer (right) or bottom sheet for supplementary content.

```html
<!-- Side drawer (right) -->
<div style="position:fixed;top:0;bottom:0;right:0;width:320px;
  background:#fff;z-index:50;box-shadow:-4px 0 16px rgba(0,0,0,.12);
  display:flex;flex-direction:column;">
  <div style="display:flex;align-items:center;justify-content:space-between;
    padding:20px 24px;border-bottom:1px solid #e5e7eb;">
    <h3 style="font-size:18px;font-weight:600;color:#111928;">Panel title</h3>
    <button aria-label="Close" style="background:none;border:none;cursor:pointer;color:#6b7280;">x</button>
  </div>
  <div style="flex:1;overflow-y:auto;padding:24px;">
    <!-- content -->
  </div>
  <div style="padding:16px 24px;border-top:1px solid #e5e7eb;">
    <button class="btn btn-primary btn-md" style="width:100%;justify-content:center;">Save changes</button>
  </div>
</div>

<!-- Bottom sheet -->
<div style="position:fixed;bottom:0;left:0;right:0;
  background:#fff;z-index:50;
  box-shadow:0 -4px 16px rgba(0,0,0,.12);
  border-radius:16px 16px 0 0;padding:24px;">
  <div style="width:32px;height:4px;background:#d1d5db;border-radius:9999px;margin:0 auto 20px;"></div>
  <!-- content -->
</div>

<!-- Overlay -->
<div class="modal-backdrop" aria-hidden="true"></div>
```

---

## Table

### Cell specs

| Property | Value |
|----------|-------|
| Cell width | 146px |
| Cell height | 38px |
| Cell padding | `8px 16px` |
| Text align | right (numeric data) |
| Font | 14px / 500 / `#111928` |

### Row types

| Row type | Background |
|----------|-----------|
| Default | `#ffffff` |
| Derival (calculated) | `#fff8f1` |
| Total | `#f3f4f6` |
| Non-collapsible | `#f9fafb` |

### Column header

```html
<div style="display:flex;align-items:center;justify-content:flex-end;
  width:146px;height:38px;padding:8px 16px;
  background:#f3f4f6;box-sizing:border-box;">
  <span style="font-size:12px;font-weight:600;color:#6b7280;text-transform:uppercase;">Jan 2024</span>
</div>
```

### Data cell

```html
<!-- Default -->
<div style="display:flex;align-items:center;justify-content:flex-end;gap:4px;
  width:146px;height:38px;padding:8px 16px;background:#fff;box-sizing:border-box;">
  <span style="font-size:14px;font-weight:500;color:#111928;">$</span>
  <span style="font-size:14px;font-weight:500;color:#111928;text-align:right;">500,00</span>
</div>

<!-- Editable (focused) -->
<div style="display:flex;align-items:center;width:146px;height:38px;
  background:#fff;border:1px solid #e5e7eb;box-sizing:border-box;">
  <div style="flex:1;display:flex;align-items:center;justify-content:flex-end;
    border:1px solid #1c64f2;border-radius:4px;
    padding:8px 16px;overflow:hidden;box-sizing:border-box;">
    <span style="font-size:14px;font-weight:500;color:#111928;text-align:right;">500,00|</span>
  </div>
</div>
```

### Cohort badge (percent heatmap)

```html
<!-- >= 50% — white text, brand-500 bg -->
<div style="display:flex;align-items:center;justify-content:center;
  width:62px;height:42px;padding:10px;border-radius:4px;
  background:#6875f5;box-sizing:border-box;">
  <span style="font-size:12px;font-weight:600;color:#fff;">60%</span>
</div>

<!-- < 50% — dark text, brand-300 bg -->
<div style="display:flex;align-items:center;justify-content:center;
  width:62px;height:42px;padding:10px;border-radius:4px;
  background:#b4c6fc;box-sizing:border-box;">
  <span style="font-size:12px;font-weight:600;color:#111928;">40%</span>
</div>
```

---

## Accordion

### CSS classes

```
.accordion             — container (border, radius 12px, overflow hidden)
.accordion-item        — single item (border-bottom)
.accordion-item.open   — expanded state
.accordion-header      — trigger button (flex, min-height 48px, 16px/500)
.accordion-body        — content area (14px, padding 0 20px 16px)
.accordion-chevron     — chevron icon (rotates 180 deg when .open)
```

### HTML

```html
<div class="accordion">

  <!-- Expanded -->
  <div class="accordion-item open">
    <button class="accordion-header" aria-expanded="true" aria-controls="body-0" id="header-0">
      <span style="flex:1;">What is the Iris Library?</span>
      <svg class="accordion-chevron" viewBox="0 0 24 24" fill="none">
        <path d="M6 9l6 6 6-6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </button>
    <div class="accordion-body" id="body-0" role="region" aria-labelledby="header-0">
      The Iris Library is a design system for financial dashboards.
    </div>
  </div>

  <!-- Collapsed -->
  <div class="accordion-item">
    <button class="accordion-header" aria-expanded="false" aria-controls="body-1" id="header-1">
      <span style="flex:1;">How do I get started?</span>
      <svg class="accordion-chevron" viewBox="0 0 24 24" fill="none">
        <path d="M6 9l6 6 6-6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </button>
    <div class="accordion-body" id="body-1" role="region" aria-labelledby="header-1">
      Import the CSS and follow the HTML structure.
    </div>
  </div>

</div>
```

---

## Alert

### Variants (color + type)

```
Color modifiers:
  .alert--success  .alert--danger  .alert--warning  .alert--info  .alert--default

Type modifiers (second class):
  .alert--medium   — tinted bg (default)
  .alert--dark     — solid accent bg
  .alert--light    — white bg + shadow
```

### HTML

```html
<div role="alert" class="alert alert--warning alert--medium">
  <div class="alert__content">
    <div class="alert__header">
      <svg class="alert__icon" aria-hidden="true"><!-- icon --></svg>
      <span class="alert__heading">Your free trial ends in 3 days</span>
      <button class="alert__dismiss" aria-label="Dismiss">x</button>
    </div>
    <p class="alert__body">Upgrade to keep all features and avoid data loss.</p>
    <button class="alert__cta">View plans</button>
  </div>
</div>
```

---

## Toast

### Types

| Class | Role |
|-------|------|
| `.toast--success` | Confirmation |
| `.toast--danger` | Error notification |
| `.toast--default` | Neutral message |
| `.toast--simple` | Text-only minimal |
| `.toast--push` | Push notification |
| `.toast--interactive` | With CTA |
| `.toast--expanded` | Full message + CTA |

**Position:** fixed bottom-right (or top-right), z-index 50, width ~320px

### HTML

```html
<!-- Success -->
<div class="toast toast--success" role="status" aria-live="polite">
  <div class="toast-icon toast-icon-success"><!-- check icon --></div>
  <p class="toast-title">File saved successfully.</p>
  <button class="toast-close" aria-label="Dismiss">x</button>
</div>

<!-- Danger -->
<div class="toast toast--danger" role="alert" aria-live="assertive">
  <div class="toast-icon toast-icon-danger"><!-- bell icon --></div>
  <p class="toast-title">The file was permanently deleted.</p>
  <button class="toast-close" aria-label="Dismiss">x</button>
</div>

<!-- Expanded success with CTA -->
<div class="toast toast--success toast--expanded" role="status" aria-live="polite">
  <div class="toast-title-row">
    <strong class="toast-title">Success</strong>
    <button class="toast-close" aria-label="Dismiss">x</button>
  </div>
  <p class="toast-message">Your changes have been saved.</p>
  <button class="btn btn-green btn-xs">View file</button>
</div>
```

---

## Tooltip

### Specs

- Dark: bg `#1f2a37`, text white
- Light: bg `#ffffff`, border `#e5e7eb`, shadow-md
- Font: 12px / 400 (body), 14px / 500 (title)
- Radius: 8px
- Padding: `8px 12px`
- Max-width: 200px

### CSS classes

```
.tooltip-wrap     — position:relative container
.tooltip-bubble   — the tooltip panel (position:absolute)
.tooltip-dark     — dark variant
.tooltip-light    — white variant
.tooltip-top      — above trigger
.tooltip-right    — to the right
.tooltip-bottom   — below trigger
.tooltip-left     — to the left
```

### HTML

```html
<div class="tooltip-wrap tooltip-top">
  <button class="btn btn-primary btn-sm" aria-describedby="tip-1">Hover me</button>
  <div class="tooltip-bubble tooltip-dark" role="tooltip" id="tip-1">
    <strong style="font-size:14px;font-weight:500;color:#fff;">Info title</strong>
    <div style="height:1px;background:#4b5563;margin:6px 0;"></div>
    <p style="font-size:12px;color:#f3f4f6;">Short description text.</p>
  </div>
</div>
```

---

## Pagination

### Sizes

| Size | Item |
|------|------|
| Default | 36x36px |
| Small | 32x32px |

### CSS classes

```
.pagination        — flex row, gap 2px
.page-item         — list item
.page-item.active  — current page (brand bg)
.page-item.disabled — prev/next at boundary
.page-link         — button (36x36px, radius 8px, 14px/400)
```

### HTML

```html
<nav aria-label="Pagination">
  <ul class="pagination">
    <li class="page-item disabled">
      <button class="page-link" aria-label="Previous" disabled><!-- chevron-left --></button>
    </li>
    <li class="page-item active">
      <button class="page-link" aria-current="page">1</button>
    </li>
    <li class="page-item">
      <button class="page-link">2</button>
    </li>
    <li class="page-item">
      <button class="page-link">3</button>
    </li>
    <li class="page-item">
      <span class="page-link" aria-hidden="true">...</span>
    </li>
    <li class="page-item">
      <button class="page-link">10</button>
    </li>
    <li class="page-item">
      <button class="page-link" aria-label="Next"><!-- chevron-right --></button>
    </li>
  </ul>
</nav>
```

---

## Progress Bar

### Specs

| Property | Value |
|----------|-------|
| Track height | 8px |
| Track bg | `#e5e7eb` |
| Fill: primary | `#42389d` |
| Fill: green | `#007a55` |
| Fill: red | `#c10007` |
| Fill: yellow | `#d03801` |
| Fill: blue | `#1447e6` |
| Border-radius | 9999px |

### HTML

```html
<div>
  <div style="display:flex;justify-content:space-between;margin-bottom:4px;">
    <span style="font-size:14px;font-weight:500;color:#111928;">Progress</span>
    <span style="font-size:14px;color:#6b7280;">65%</span>
  </div>
  <div style="height:8px;background:#e5e7eb;border-radius:9999px;overflow:hidden;">
    <div style="height:100%;width:65%;background:#42389d;border-radius:9999px;"></div>
  </div>
</div>
```

---

## Skeleton

```html
<div style="animation:pulse 2s infinite;">
  <div style="height:16px;background:#f3f4f6;border-radius:4px;margin-bottom:8px;"></div>
  <div style="height:16px;background:#f3f4f6;border-radius:4px;width:75%;"></div>
</div>
```

---

## Breadcrumbs

```html
<nav aria-label="Breadcrumb">
  <ol style="display:flex;align-items:center;gap:8px;list-style:none;">
    <li><a href="/" style="font-size:14px;color:#6b7280;text-decoration:none;">Home</a></li>
    <li aria-hidden="true" style="color:#d1d5db;">/ </li>
    <li><a href="/reports" style="font-size:14px;color:#6b7280;text-decoration:none;">Reports</a></li>
    <li aria-hidden="true" style="color:#d1d5db;">/ </li>
    <li><span style="font-size:14px;color:#111928;font-weight:500;" aria-current="page">Q1 2024</span></li>
  </ol>
</nav>
```

---

## Banner

Site-wide notice bar (not inline alert).

```html
<div role="banner" style="
  background:#e5edff;border-bottom:1px solid #b4c6fc;
  padding:12px 24px;
  display:flex;align-items:center;justify-content:space-between;gap:12px;">
  <div style="display:flex;align-items:center;gap:8px;">
    <!-- info icon 20px #42389d -->
    <span style="font-size:14px;font-weight:500;color:#42389d;">
      New feature available — upgrade to unlock analytics.
    </span>
  </div>
  <div style="display:flex;align-items:center;gap:8px;flex-shrink:0;">
    <button class="btn btn-primary btn-sm">Upgrade</button>
    <button aria-label="Dismiss" style="background:transparent;border:none;cursor:pointer;color:#6b7280;font-size:18px;">x</button>
  </div>
</div>
```

---

## List Group

```html
<ul style="list-style:none;border:1px solid #e5e7eb;border-radius:8px;overflow:hidden;">
  <li style="display:flex;align-items:center;justify-content:space-between;
    padding:12px 16px;border-bottom:1px solid #e5e7eb;font-size:14px;color:#111928;">
    <span>Item 1</span>
    <span style="background:#d0fae5;color:#006045;font-size:12px;border-radius:6px;padding:2px 8px;">Active</span>
  </li>
  <li style="display:flex;align-items:center;padding:12px 16px;border-bottom:1px solid #e5e7eb;font-size:14px;color:#111928;">
    <span>Item 2</span>
  </li>
  <li style="display:flex;align-items:center;padding:12px 16px;font-size:14px;color:#111928;">
    <span>Item 3</span>
  </li>
</ul>
```

---

## KBD (Keyboard shortcut)

```html
<kbd style="display:inline-flex;align-items:center;
  background:#f3f4f6;border:1px solid #d1d5db;border-bottom:2px solid #d1d5db;
  border-radius:4px;padding:2px 6px;
  font-family:ui-monospace,monospace;font-size:12px;color:#374151;">
  Ctrl+K
</kbd>
```

---

## Indicator / Status dot

```html
<!-- Online -->
<span style="display:inline-flex;align-items:center;gap:6px;font-size:14px;color:#111928;">
  <span style="width:8px;height:8px;border-radius:50%;background:#007a55;flex-shrink:0;"></span>
  Online
</span>

<!-- Offline -->
<span style="display:inline-flex;align-items:center;gap:6px;font-size:14px;color:#111928;">
  <span style="width:8px;height:8px;border-radius:50%;background:#6b7280;flex-shrink:0;"></span>
  Offline
</span>

<!-- At risk -->
<span style="display:inline-flex;align-items:center;gap:6px;font-size:14px;color:#111928;">
  <span style="width:8px;height:8px;border-radius:50%;background:#d03801;flex-shrink:0;"></span>
  At risk
</span>
```

---

## Stepper

```html
<ol style="display:flex;align-items:center;list-style:none;">

  <!-- Completed -->
  <li style="display:flex;align-items:center;">
    <div style="width:32px;height:32px;border-radius:50%;
      background:#42389d;color:#fff;font-size:14px;font-weight:500;
      display:flex;align-items:center;justify-content:center;flex-shrink:0;">
      v
    </div>
    <span style="font-size:14px;font-weight:500;color:#42389d;margin-left:8px;white-space:nowrap;">Account info</span>
    <div style="flex:1;min-width:24px;height:1px;background:#42389d;margin:0 12px;"></div>
  </li>

  <!-- Current -->
  <li style="display:flex;align-items:center;">
    <div style="width:32px;height:32px;border-radius:50%;
      border:2px solid #42389d;color:#42389d;font-size:14px;font-weight:500;
      display:flex;align-items:center;justify-content:center;flex-shrink:0;">
      2
    </div>
    <span style="font-size:14px;font-weight:500;color:#111928;margin-left:8px;white-space:nowrap;">Payment</span>
    <div style="flex:1;min-width:24px;height:1px;background:#e5e7eb;margin:0 12px;"></div>
  </li>

  <!-- Future -->
  <li style="display:flex;align-items:center;">
    <div style="width:32px;height:32px;border-radius:50%;
      border:2px solid #d1d5db;color:#6b7280;font-size:14px;font-weight:500;
      display:flex;align-items:center;justify-content:center;flex-shrink:0;">
      3
    </div>
    <span style="font-size:14px;color:#6b7280;margin-left:8px;white-space:nowrap;">Review</span>
  </li>

</ol>
```

---

## Search

### Input + Button (most common)

```html
<div style="display:flex;overflow:hidden;border:1px solid #d1d5db;border-radius:8px;">
  <div style="display:flex;align-items:center;gap:8px;height:42px;padding:0 12px;background:#f9fafb;flex:1;">
    <!-- search icon 18px #6b7280 -->
    <span style="font-size:14px;color:#6b7280;">Search</span>
  </div>
  <button style="width:42px;height:42px;background:#42389d;border:none;cursor:pointer;
    display:flex;align-items:center;justify-content:center;">
    <!-- search icon 20px white -->
  </button>
</div>
```

### Input + Select + Button

```html
<div style="display:flex;overflow:hidden;border:1px solid #d1d5db;border-radius:8px;">
  <button style="height:42px;padding:0 12px;background:#f3f4f6;border:none;border-right:1px solid #d1d5db;
    cursor:pointer;display:flex;align-items:center;gap:6px;white-space:nowrap;">
    <span style="font-size:14px;font-weight:500;color:#111928;">All categories</span>
    <!-- chevron-down 16px -->
  </button>
  <div style="flex:1;display:flex;align-items:center;padding:0 12px;background:#f9fafb;">
    <span style="font-size:14px;color:#6b7280;">Search Mockups, Logos...</span>
  </div>
  <button style="width:42px;height:42px;background:#42389d;border:none;cursor:pointer;
    display:flex;align-items:center;justify-content:center;">
    <!-- search icon 20px white -->
  </button>
</div>
```

---

## Cards / Panels

### Standard card

```html
<div style="background:#fff;border:1px solid #e5e7eb;border-radius:12px;padding:24px;
  box-shadow:0px 1px 2px rgba(0,0,0,0.08);">
  <!-- content -->
</div>
```

### KPI / Metric card

```html
<div style="background:#fff;border:1px solid #e5e7eb;border-radius:12px;padding:20px 24px;
  display:flex;flex-direction:column;gap:8px;
  box-shadow:0px 1px 2px rgba(0,0,0,0.08);">
  <span style="font-size:14px;color:#6b7280;font-weight:400;">Total Revenue</span>
  <span style="font-size:30px;font-weight:700;color:#111928;">$48,295</span>
  <div style="display:flex;align-items:center;gap:4px;">
    <!-- trend up arrow icon, green -->
    <span style="font-size:14px;font-weight:500;color:#007a55;">+12.5%</span>
    <span style="font-size:12px;color:#6b7280;">vs last month</span>
  </div>
</div>
```

### Chart / Reporting card

```html
<div style="background:#fff;border:1px solid #e5e7eb;border-radius:12px;overflow:hidden;">
  <div style="padding:20px 24px;border-bottom:1px solid #e5e7eb;
    display:flex;align-items:center;justify-content:space-between;">
    <h3 style="font-size:18px;font-weight:600;color:#111928;">Revenue Overview</h3>
    <div class="btn-group"><!-- period buttons --></div>
  </div>
  <div style="padding:24px;">
    <!-- chart component -->
  </div>
</div>
```

---

## Tag Input (Multi-value)

```html
<div style="display:flex;flex-wrap:wrap;gap:4px;align-items:center;
  min-height:42px;padding:4px 8px;
  border:1px solid #d1d5db;border-radius:8px;background:#f9fafb;">

  <span style="display:inline-flex;align-items:center;gap:4px;
    background:#e5edff;color:#42389d;
    font-size:12px;font-weight:500;border-radius:9999px;padding:2px 8px;">
    react
    <button aria-label="Remove" style="background:none;border:none;cursor:pointer;color:#42389d;padding:0;line-height:1;">x</button>
  </span>

  <input style="border:none;background:transparent;font-size:14px;color:#111928;outline:none;min-width:80px;flex:1;"
    placeholder="Add tag...">
</div>
```

---

## Datepicker

### Key specs

| Property | Value |
|----------|-------|
| Input | 42px height, border `#d1d5db`, radius 8px, bg `#f9fafb` |
| Calendar panel | white, border `#e5e7eb`, radius 8px, shadow-md, ~280px wide |
| Day cell | 36x36px, circle shape |
| Selected day | bg `#42389d`, text white, radius 50% |
| Today | border `2px solid #42389d`, text `#42389d` |
| Day hover | bg `#f3f4f6` |
| Other-month day | color `#9ca3af` |
| Nav arrows | 20x20px, `#6b7280` |

```html
<!-- Trigger input -->
<div style="position:relative;width:240px;">
  <input style="width:100%;height:42px;padding:0 12px 0 40px;
    border:1px solid #d1d5db;border-radius:8px;
    background:#f9fafb;font-size:14px;color:#111928;cursor:pointer;box-sizing:border-box;"
    placeholder="Select date" readonly>
  <span style="position:absolute;left:12px;top:50%;transform:translateY(-50%);color:#6b7280;">
    <!-- calendar icon 18px -->
  </span>
</div>
```

---

## Autocomplete

- Input: same as Forms (42px, border `#d1d5db`, radius 8px, bg `#f9fafb`)
- Results panel: dropdown-menu spec (white, radius 8px, shadow, border `#e5e7eb`)
- Matched text highlight: `color:#42389d; font-weight:600`
- Result item: 37px, 14px/400, hover bg `#f3f4f6`
- No results message: `#6b7280` centered in panel

---

## States Reference

### Focus

```css
/* All interactive elements */
outline: 2px solid #42389d;
outline-offset: 2px;

/* Inputs on focus */
border-color: #155dfc;
```

### Disabled

```css
opacity: 0.5;          /* buttons */
opacity: 0.6;          /* inputs */
cursor: not-allowed;
color: #99a1af;        /* text */
border-color: #e5e7eb; /* border */
background: #f3f4f6;   /* bg */
```

### Hover

| Element | Hover bg |
|---------|----------|
| Nav items | `#f3f4f6` |
| Buttons | see button hover tokens above |
| Dropdown items | `#f3f4f6` |
| Table rows | `#f9fafb` |

### Error

| Property | Value |
|----------|-------|
| Border | `#f05252` |
| Text | `#c70036` |
| Icon | `#c70036` |
| Helper text | `#c70036`, 12px |

### Success

| Property | Value |
|----------|-------|
| Border | `#0e9f6e` |
| Text | `#007a55` |

---

## Layout Grid

### Dashboard layout (sidebar + main)

```html
<div style="display:flex;height:100vh;overflow:hidden;">

  <!-- Fixed sidebar -->
  <aside style="width:256px;flex-shrink:0;overflow-y:auto;">
    <!-- Sidebar component -->
  </aside>

  <!-- Scrollable main -->
  <main style="flex:1;overflow-y:auto;background:#f9fafb;">

    <!-- Page header -->
    <div style="padding:24px 32px;border-bottom:1px solid #e5e7eb;background:#fff;">
      <h1 style="font-size:24px;font-weight:700;color:#101828;">Page Title</h1>
    </div>

    <!-- Page body -->
    <div style="padding:32px;">

      <!-- KPI row (4 cards) -->
      <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:16px;margin-bottom:24px;">
        <!-- KPI cards -->
      </div>

      <!-- Chart + detail (2 col) -->
      <div style="display:grid;grid-template-columns:2fr 1fr;gap:16px;">
        <!-- Chart card -->
        <!-- Summary card -->
      </div>

    </div>
  </main>

</div>
```

---

## Icon Usage

Iris Library uses **Heroicons v2 solid** (24/solid, viewBox 0 0 24 24). Display at 24x24px.

| Context | Size | Color |
|---------|------|-------|
| Sidebar inactive | 24x24px | `#6b7280` |
| Sidebar active | 24x24px | `#42389d` |
| Button | 20x20px | inherits button text color |
| Dropdown item | 16x16px | `#6b7280` or `#f05252` (danger) |
| Inline text | 16x16px | matches surrounding text |
| Badge | 16x16px | matches badge text color |
| Alert | 20x20px | matches alert semantic color |

```html
<!-- Always use aria-hidden on decorative icons -->
<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
  <!-- heroicons v2 solid path -->
</svg>
```
