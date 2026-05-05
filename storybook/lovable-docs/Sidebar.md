# Sidebar

**Navigation / Sidebar** — left navigation for authenticated dashboard views. Width 256px expanded, 60px contracted (icon-only).

## ⚠️ Critical: active item colors

The active menu item has **gray background + purple text** — NOT a purple background.

| State | Background | Text / Icon color |
|-------|-----------|-------------------|
| Active | `#f3f4f6` (gray-100) | `#42389d` (brand purple) |
| Inactive | transparent | `#111928` (dark gray) |
| Hover | `#f3f4f6` | `#111928` |

**If you see a purple or colored background on the active item — that is wrong. Fix it to `#f3f4f6`.**

## Layout specs

- Sidebar width: 256px
- Sidebar background: `#f3f4f6` (gray variant) or `#ffffff` (white variant)
- Border-right: `1px solid #e5e7eb`
- Logo area padding: `24px 8px 0 28px`
- Nav section padding: `0 8px 0 28px`
- Gap between sections: 24px
- Gap between items: 8px

## Menu item specs

- Height: 40px
- Padding: `6px 8px`
- Border-radius: `8px`
- Gap (icon + label): 4px
- Font: Inter 500 16px / line-height 1.5
- Icon size: 24×24px

## Sub-items (expandable section)

- Left indent: 28px, no icon
- Same height/font as regular items

## Divider

- `1px solid #e5e7eb`, full width

## Contracted sidebar (icon-only, 60px)

- Background: `#ffffff` (white)
- Active item: 40×40px centered, `background: #f3f4f6`, `border-radius: 8px`, icon `#1f2a37`
- Inactive item: 60×32px, transparent, icon `#6b7280`

## HTML structure

```html
<aside style="
  width: 256px;
  height: 100vh;
  background: #f3f4f6;
  border-right: 1px solid #e5e7eb;
  display: flex;
  flex-direction: column;
  gap: 24px;
  box-sizing: border-box;
">

  <!-- Logo -->
  <div style="padding: 24px 8px 0 28px;">
    <!-- logo here -->
  </div>

  <!-- Main nav -->
  <nav style="display: flex; flex-direction: column; gap: 8px; padding: 0 8px 0 28px;">

    <!-- ACTIVE item: gray bg + purple text -->
    <a href="#" aria-current="page" style="
      display: flex; align-items: center; gap: 4px;
      height: 40px; padding: 6px 8px; border-radius: 8px;
      background: #f3f4f6; color: #42389d;
      font: 500 16px/1.5 inherit; text-decoration: none;
    ">
      <svg width="24" height="24"><!-- icon --></svg>
      <span>Overview</span>
    </a>

    <!-- INACTIVE item: transparent bg + dark text -->
    <a href="#" style="
      display: flex; align-items: center; gap: 4px;
      height: 40px; padding: 6px 8px; border-radius: 8px;
      background: transparent; color: #111928;
      font: 500 16px/1.5 inherit; text-decoration: none;
    ">
      <svg width="24" height="24"><!-- icon --></svg>
      <span>Metrics Library</span>
    </a>

    <!-- EXPANDABLE item with chevron -->
    <div style="
      display: flex; align-items: center; gap: 4px;
      height: 40px; padding: 6px 8px; border-radius: 8px;
      color: #111928; font: 500 16px/1.5 inherit; cursor: pointer;
    ">
      <div style="display: flex; flex: 1; gap: 4px; align-items: center;">
        <svg width="24" height="24"><!-- icon --></svg>
        <span>Financial model</span>
      </div>
      <!-- chevron-down when collapsed, chevron-up when expanded -->
      <svg width="20" height="20"><!-- chevron --></svg>
    </div>

    <!-- SUB-ITEMS (shown when expanded) -->
    <div style="padding-left: 28px; display: flex; flex-direction: column; gap: 8px;">
      <a href="#" style="
        display: flex; align-items: center;
        height: 40px; padding: 6px 8px; border-radius: 8px;
        color: #111928; font: 500 16px/1.5 inherit; text-decoration: none;
      ">Income Statement</a>
    </div>

  </nav>

  <!-- Divider -->
  <div style="height: 1px; background: #e5e7eb; width: 100%;"></div>

  <!-- Bottom nav -->
  <nav style="display: flex; flex-direction: column; gap: 8px; padding: 0 8px 24px 28px;">
    <a href="#" style="
      display: flex; align-items: center; gap: 4px;
      height: 40px; padding: 6px 8px; border-radius: 8px;
      background: transparent; color: #111928;
      font: 500 16px/1.5 inherit; text-decoration: none;
    ">
      <svg width="24" height="24"><!-- help icon --></svg>
      <span>Help</span>
    </a>
  </nav>

</aside>
```

## CSS (if using Tailwind)

```
Active item:   bg-[#f3f4f6] text-[#42389d]   ← gray bg, purple text
Inactive item: bg-transparent text-[#111928]
Hover item:    hover:bg-[#f3f4f6] hover:text-[#111928]
Item height:   h-10 (40px)
Item padding:  px-2 py-1.5 (6px 8px)
Item radius:   rounded-lg (8px)
Item font:     text-base font-medium (16px 500)
Icon size:     w-6 h-6 (24px)
Nav padding:   pl-7 pr-2 (28px left, 8px right)
```
