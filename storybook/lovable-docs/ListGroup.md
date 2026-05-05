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
