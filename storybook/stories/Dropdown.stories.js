/**
 * Dropdown — list item · menu panel · trigger buttons
 * Figma: 9456:150381 (dropdown-list-item) · 3283:21147 (Dropdown Menu) ·
 *        3283:21134 (Dropdown Buttons)
 * File key: ZKtEULdYKaXe5uQl1J6ijI
 */

import { iris as irisLogo } from './brand-assets.js';

/* ── Inline SVG icons ────────────────────────────────────────── */
const CHEVRON_RIGHT = `<svg width="18" height="18" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"/></svg>`;
const CHEVRON_DOWN  = `<svg width="18" height="18" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"/></svg>`;
const USER_ADD      = `<svg width="18" height="18" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z"/></svg>`;
const SEARCH_ICON   = `<svg width="18" height="18" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"/></svg>`;
const LOGOUT        = `<svg width="18" height="18" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fill-rule="evenodd" d="M3 3a1 1 0 00-1 1v12a1 1 0 001 1h6a1 1 0 000-2H4V5h5a1 1 0 000-2H3zm9.707 4.293a1 1 0 00-1.414 1.414L12.586 10l-1.293 1.293a1 1 0 101.414 1.414l2-2a1 1 0 000-1.414l-2-2z" clip-rule="evenodd"/><path d="M7 9a1 1 0 000 2h6a1 1 0 000-2H7z"/></svg>`;
const INFO_ICON     = `<svg width="18" height="18" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"/></svg>`;
const PENCIL        = `<svg width="18" height="18" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"/></svg>`;
const INBOX         = `<svg width="18" height="18" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path d="M8.707 7.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l2-2a1 1 0 00-1.414-1.414L11 7.586V3a1 1 0 10-2 0v4.586l-.293-.293z"/><path d="M3 5a2 2 0 012-2h1a1 1 0 010 2H5v7h2l1 2h4l1-2h2V5h-1a1 1 0 110-2h1a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5z"/></svg>`;
const FIRE          = `<svg width="16" height="16" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fill-rule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" clip-rule="evenodd"/></svg>`;
const PLUS          = `<svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fill-rule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clip-rule="evenodd"/></svg>`;
const EYE           = `<svg width="14" height="14" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path d="M10 12a2 2 0 100-4 2 2 0 000 4z"/><path fill-rule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clip-rule="evenodd"/></svg>`;

/* ── Primitive builders ──────────────────────────────────────── */

/** Single dropdown-list-item */
const item = ({ label, icon = null, chevron = true, active = false, danger = false, disabled = false } = {}) => {
  const cls = ['dropdown-item', active && 'active', danger && 'danger'].filter(Boolean).join(' ');
  const aria = disabled ? 'aria-disabled="true"' : '';
  return `<button class="${cls}" ${aria}>
  ${icon ? `<span class="dropdown-item__icon">${icon}</span>` : ''}
  <span class="dropdown-item__text">${label}</span>
  ${chevron ? `<span class="dropdown-item__chevron">${CHEVRON_RIGHT}</span>` : ''}
</button>`;
};

/** Section: label + optional count + items */
const section = ({ label, count = null, items = '' }) => `
<div>
  <div class="dropdown-label">${label}${count != null ? `<span class="dropdown-count">${count}</span>` : ''}</div>
  ${items}
</div>`;

/** Horizontal separator */
const divider = () => `<hr class="dropdown-divider">`;

/** Search/select input row at top of menu */
const searchRow = (placeholder = 'Search', value = 'Regular Select') => `
<div class="dropdown-search">
  <div class="dropdown-search-input">
    <span class="dropdown-search-input__icon">${SEARCH_ICON}</span>
    <span class="dropdown-search-input__text">${placeholder}</span>
    <span class="dropdown-search-input__value" style="flex:1;color:var(--color-text-heading);">${value}</span>
    <span class="dropdown-search-input__chevron">${CHEVRON_DOWN}</span>
  </div>
</div>`;

/** Full menu wrapper */
const menu = (content, { dark = false, width = 224 } = {}) =>
  `<div class="dropdown-menu${dark ? ' dropdown-menu--dark' : ''}" style="width:${width}px;">${content}</div>`;

/** Footer with outline + primary buttons inside menu */
const menuFooter = (outlineLabel = 'Cancel', primaryLabel = 'Apply') => `
<div style="padding:0 16px 8px;display:flex;flex-direction:column;gap:8px;margin-top:4px;">
  <button class="dropdown-trigger dropdown-trigger--sm dropdown-trigger--outline" style="justify-content:center;width:100%;">${FIRE} ${outlineLabel}</button>
  <button class="dropdown-trigger dropdown-trigger--sm" style="justify-content:center;width:100%;background:var(--btn-primary-bg);border-color:var(--btn-primary-bg);">${FIRE} ${primaryLabel}</button>
</div>`;

/* ── Concrete menu types ─────────────────────────────────────── */

const defaultMenu = () => menu(`
  ${searchRow()}
  ${section({
    label: 'ACTIONS', count: 5,
    items: [
      item({ label: 'First Action',  icon: USER_ADD }),
      item({ label: 'Second Action', icon: USER_ADD }),
      item({ label: 'Third Action',  icon: USER_ADD }),
      item({ label: 'Fourth Action', icon: USER_ADD }),
      item({ label: 'Fifth Action',  icon: USER_ADD }),
    ].join(''),
  })}
  ${divider()}
  ${section({
    label: 'DANGER ZONE',
    items: [
      item({ label: 'Delete Report', icon: USER_ADD, danger: true }),
      item({ label: 'Sign Out',      icon: LOGOUT,   danger: true }),
    ].join(''),
  })}
  ${menuFooter('Cancel', 'Confirm')}
`);

const checkboxMenu = () => menu(`
  ${section({
    label: 'FILTER BY STATUS', count: 2,
    items: `
      <label class="iris-control" style="display:flex;gap:8px;align-items:flex-start;padding:8px 16px;cursor:pointer;width:100%;">
        <span class="iris-control__check" style="margin-top:2px;"><span class="iris-checkbox iris-checkbox--checked" role="checkbox" aria-checked="true"></span></span>
        <span class="iris-control__body"><span class="iris-control__label">Active reports</span><span class="iris-control__helper">Currently running and scheduled</span></span>
      </label>
      <label class="iris-control" style="display:flex;gap:8px;align-items:flex-start;padding:8px 16px;cursor:pointer;width:100%;">
        <span class="iris-control__check" style="margin-top:2px;"><span class="iris-checkbox iris-checkbox--checked" role="checkbox" aria-checked="true"></span></span>
        <span class="iris-control__body"><span class="iris-control__label">Paused reports</span><span class="iris-control__helper">Manually stopped by owner</span></span>
      </label>
      <label class="iris-control" style="display:flex;gap:8px;align-items:flex-start;padding:8px 16px;cursor:pointer;width:100%;">
        <span class="iris-control__check" style="margin-top:2px;"><span class="iris-checkbox" role="checkbox" aria-checked="false"></span></span>
        <span class="iris-control__body"><span class="iris-control__label">Archived reports</span><span class="iris-control__helper">Older than 90 days</span></span>
      </label>`,
  })}
`, { width: 280 });

const toggleMenu = () => menu(`
  <div style="padding:16px;display:flex;flex-direction:column;gap:12px;">
    ${['Enable notifications', 'Enable 2FA authentication', 'Subscribe to newsletter'].map((label, i) => `
    <div style="display:flex;align-items:center;justify-content:space-between;gap:8px;">
      <span style="font-size:var(--text-sm);font-weight:500;color:var(--color-text-heading);">${label}</span>
      <span class="iris-toggle iris-toggle--${i === 0 ? 'on' : 'off'}" role="switch" aria-checked="${i === 0}"><span class="iris-toggle__thumb"></span></span>
    </div>`).join('')}
  </div>
`, { width: 260 });

const radioMenu = () => menu(`
  <div style="padding:16px;display:flex;flex-direction:column;gap:12px;">
    ${[
      { label: 'Last 7 days', checked: false },
      { label: 'Last 30 days', checked: true },
      { label: 'Last 90 days', checked: false },
    ].map(({ label, checked }) => `
    <label style="display:flex;align-items:center;gap:8px;cursor:pointer;">
      <span class="iris-radio${checked ? ' iris-radio--checked' : ''}" role="radio" aria-checked="${checked}"></span>
      <span style="font-size:var(--text-sm);font-weight:500;color:var(--color-text-heading);">${label}</span>
    </label>`).join('')}
  </div>
`, { width: 224 });

const profileMenu = () => menu(`
  <div class="dropdown-profile">
    <span class="dropdown-profile__avatar">JL</span>
    <div><div class="dropdown-profile__name">Jese Leos</div><div class="dropdown-profile__email">jese@example.com</div></div>
  </div>
  <hr class="dropdown-divider">
  ${['Your profile', 'Settings', 'Sign out'].map((label, i) =>
    `<button class="dropdown-item${i === 2 ? ' danger' : ''}" style="color:${i < 2 ? '#374151' : ''};">
      <span class="dropdown-item__text">${label}</span>
    </button>`
  ).join('')}
  <hr class="dropdown-divider">
  <button class="dropdown-item danger"><span class="dropdown-item__text">Delete account</span></button>
`);

const notificationMenu = () => menu(`
  <div style="background:var(--color-bg-default);padding:8px 12px;">
    <span style="font-size:var(--text-base);font-weight:500;color:var(--color-text-heading);">Notifications</span>
  </div>
  <div style="padding-top:12px;">
    ${[
      { initials: 'JL', msg: 'Jese Leos: "Hey, what\'s up? All set for the presentation?"', time: 'a few moments ago' },
      { initials: 'JM', msg: 'Joseph McFall and 5 others started following you.', time: '10 minutes ago' },
      { initials: 'BG', msg: 'Bonnie Green and 141 others love your story. See it and view more stories.', time: '44 minutes ago' },
    ].map(({ initials, msg, time }) => `
    <div class="dropdown-notification">
      <span class="dropdown-notification__avatar">${initials}</span>
      <div class="dropdown-notification__body">
        <span class="dropdown-notification__msg">${msg}</span>
        <span class="dropdown-notification__time">${time}</span>
      </div>
    </div>`).join('')}
  </div>
  <div style="background:var(--color-bg-default);padding:8px 12px;display:flex;align-items:center;gap:8px;">
    ${EYE}<span style="font-size:var(--text-sm);font-weight:500;color:var(--color-text-heading);">View all</span>
  </div>
`, { width: 384 });

const scrollingMenu = () => menu(`
  <div style="padding:16px 16px 0;display:flex;flex-direction:column;gap:8px;">
    ${[
      { initials: 'JL', name: 'Jese Leos', date: 'Joined August 2014' },
      { initials: 'BG', name: 'Bonnie Green', date: 'Joined March 2018' },
      { initials: 'JM', name: 'Joseph McFall', date: 'Joined January 2020' },
      { initials: 'RB', name: 'Robert Brown', date: 'Joined June 2021' },
      { initials: 'LL', name: 'Leslie Livingston', date: 'Joined November 2022' },
    ].map(({ initials, name, date }) => `
    <div class="dropdown-avatar-item">
      <span class="dropdown-avatar-item__avatar">${initials}</span>
      <div>
        <div class="dropdown-avatar-item__name">${name}</div>
        <div class="dropdown-avatar-item__sub">${date}</div>
      </div>
    </div>`).join('')}
    <div class="dropdown-cta" style="margin:0 -16px;width:calc(100% + 32px);">${USER_ADD} Add new user</div>
  </div>
`, { width: 180 });

const darkMenu = () => menu(`
  ${['First Action', 'Second Action', 'Third Action', 'Fourth Action'].map((label, i) =>
    `<button class="dropdown-item">
      <span class="dropdown-item__icon">${[USER_ADD, INBOX, INFO_ICON, PENCIL][i]}</span>
      <span class="dropdown-item__text">${label}</span>
    </button>`
  ).join('')}
  <hr class="dropdown-divider">
  <button class="dropdown-item danger">
    <span class="dropdown-item__icon">${LOGOUT}</span>
    <span class="dropdown-item__text">Sign Out</span>
  </button>
`, { dark: true });

const menuMap = { default: defaultMenu, checkbox: checkboxMenu, toggle: toggleMenu, radio: radioMenu, profile: profileMenu, notification: notificationMenu, scrolling: scrollingMenu, dark: darkMenu };

/* ── Default export ──────────────────────────────────────────── */

export default {
  title: 'Iris Library/Dropdown',
  tags: ['autodocs', 'stable'],
  parameters: {
    docs: {
      description: {
        component: `
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
- **Divider** (.dropdown-divider) — 1px gray/200 separator
        `,
      },
    },
  },

  argTypes: {
    menuType: {
      name: 'Menu type',
      control: { type: 'select', options: Object.keys(menuMap) },
      description: 'Which menu variant to preview. Each type demonstrates a different Figma component.',
      table: { category: 'Appearance', defaultValue: { summary: 'default' } },
    },
    triggerLabel: {
      name: 'Trigger label',
      control: { type: 'text' },
      description: 'Label shown on the trigger button (text trigger only).',
      table: { category: 'Content', defaultValue: { summary: 'Menu' } },
    },
    iconOnly: {
      name: 'Icon-only trigger',
      control: { type: 'boolean' },
      description: 'Show a circular icon-only trigger instead of the text button.',
      table: { category: 'Appearance', defaultValue: { summary: 'false' } },
    },
  },

  args: {
    menuType: 'default',
    triggerLabel: 'Menu',
    iconOnly: false,
  },
};

/* ── Interactive ─────────────────────────────────────────────── */

export const Interactive = {
  name: 'Interactive (Controls)',
  render: ({ menuType, triggerLabel, iconOnly }) => {
    const triggerCls = `dropdown-trigger${iconOnly ? ' dropdown-trigger--icon' : ''}`;
    const trigger = `<button class="${triggerCls}">${iconOnly ? PLUS : `${CHEVRON_DOWN} ${triggerLabel} ${CHEVRON_DOWN}`}</button>`;
    return `
<div style="display:flex;flex-direction:column;gap:16px;align-items:flex-start;">
  ${trigger}
  ${menuMap[menuType]?.() ?? defaultMenu()}
</div>`;
  },
  parameters: {
    docs: {
      description: {
        story: `
Use **Menu type** to switch between all Figma menu variants. Use **Icon-only trigger** to preview the circular button.

✅ Change menu type to see: Default · Checkbox filter · Toggle settings · Radio selection · User profile · Notifications · Scrolling user list · Dark mode
❌ Do not nest dropdowns more than 1 level deep
        `,
      },
      source: {
        transform: (_src, ctx) => {
          const { iconOnly, triggerLabel } = ctx.args;
          return `<!-- Trigger button -->
<button class="dropdown-trigger${iconOnly ? ' dropdown-trigger--icon' : ''}">
  ${iconOnly ? '<!-- plus icon -->' : `<!-- chevron icon --> ${triggerLabel} <!-- chevron icon -->`}
</button>

<!-- Menu panel -->
<div class="dropdown-menu" style="width:224px;">

  <!-- Search/select row -->
  <div class="dropdown-search">
    <div class="dropdown-search-input">
      <!-- search icon -->
      <span class="dropdown-search-input__text">Search</span>
      <span class="dropdown-search-input__value">Regular Select</span>
      <!-- chevron-down icon -->
    </div>
  </div>

  <!-- Section with count -->
  <div class="dropdown-label">ACTIONS <span class="dropdown-count">5</span></div>

  <!-- Items -->
  <button class="dropdown-item">
    <span class="dropdown-item__icon"><!-- icon --></span>
    <span class="dropdown-item__text">First Action</span>
    <span class="dropdown-item__chevron"><!-- chevron-right --></span>
  </button>

  <!-- Divider -->
  <hr class="dropdown-divider">

  <!-- Destructive item -->
  <button class="dropdown-item danger">
    <span class="dropdown-item__icon"><!-- icon --></span>
    <span class="dropdown-item__text">Sign Out</span>
    <span class="dropdown-item__chevron"><!-- chevron-right --></span>
  </button>

</div>`;
        },
      },
    },
  },
};

/* ── List Items — all states ─────────────────────────────────── */

export const ListItemsGallery = {
  name: 'List Items — all states',
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story: `
All 9 variants from Figma node **9456:150381**.

| State | Text color | Icon color | Bg |
|-------|-----------|------------|-----|
| Default | #101828 | gray/500 | — |
| Selected | brand/800 #42389d | brand/600 #5145cd | — |
| Hover | #101828 | gray/500 | gray/100 #f3f4f6 |
| Selected hover | brand/900 #362f78 | brand/800 #42389d | gray/100 |
| Destructive | danger/700 #c70036 | red/500 #f05252 | — |
| Destructive hover | danger/900 #8b0836 | red/600 #e02424 | gray/100 |
| Disabled | #4a5565 | gray/300 | — |
| Disabled selected | indigo/300 #b4c6fc | indigo/300 | — |
| Disabled destructive | faded red | — | — |

✅ Use \`aria-disabled="true"\` on items that are contextually unavailable (not permanently hidden)
❌ Do not hide items — show them as disabled so users understand what actions exist
        `,
      },
      source: {
        language: 'html',
        code: `<!-- Default item -->
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
</button>`,
      },
    },
  },
  render: () => `
<div style="display:flex;flex-wrap:wrap;gap:32px;align-items:flex-start;">

  <div>
    <p style="font-size:11px;font-weight:600;text-transform:uppercase;color:var(--color-text-secondary);margin-bottom:8px;">Default</p>
    <div class="dropdown-menu" style="width:224px;">
      ${item({ label: 'First Action', icon: USER_ADD })}
      ${item({ label: 'Second Action', icon: USER_ADD })}
    </div>
  </div>

  <div>
    <p style="font-size:11px;font-weight:600;text-transform:uppercase;color:var(--color-text-secondary);margin-bottom:8px;">Selected</p>
    <div class="dropdown-menu" style="width:224px;">
      ${item({ label: 'First Action', icon: USER_ADD, active: true })}
      ${item({ label: 'Second Action', icon: USER_ADD })}
    </div>
  </div>

  <div>
    <p style="font-size:11px;font-weight:600;text-transform:uppercase;color:var(--color-text-secondary);margin-bottom:8px;">Destructive</p>
    <div class="dropdown-menu" style="width:224px;">
      ${item({ label: 'Delete Report', icon: USER_ADD, danger: true })}
      ${item({ label: 'Sign Out',      icon: LOGOUT,   danger: true })}
    </div>
  </div>

  <div>
    <p style="font-size:11px;font-weight:600;text-transform:uppercase;color:var(--color-text-secondary);margin-bottom:8px;">Disabled</p>
    <div class="dropdown-menu" style="width:224px;">
      ${item({ label: 'Export CSV', icon: USER_ADD, disabled: true })}
      ${item({ label: 'Edit Team', icon: USER_ADD, active: true, disabled: true })}
    </div>
  </div>

</div>`,
};

/* ── Menus — all types ───────────────────────────────────────── */

export const MenusGallery = {
  name: 'Menus — all types',
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story: `
Complete menu panels from Figma node **3283:21147**.

| Type | Width | Figma name |
|------|-------|-----------|
| Default | 224px | Type=Default (with search, sections, footer buttons) |
| Checkbox filter | 280px | Type=Checkbox (uses .iris-checkbox + .iris-control) |
| Toggle settings | 260px | Type=Toggle switch (uses .iris-toggle) |
| Radio selection | 224px | Type=Radio |
| User profile | 224px | Type=Dropdown header |
| Notifications | 384px | Type=Notification |
| Scrolling list | 180px | Type=Dropdown with scrolling |
| Dark mode | 224px | Property 1=Default, Dark mode=True |

✅ Toggle and Checkbox menus reuse \`.iris-toggle\` / \`.iris-checkbox\` from the Controls component
        `,
      },
    },
  },
  render: () => `
<div style="display:flex;flex-wrap:wrap;gap:32px;align-items:flex-start;">
  <div><p style="font-size:11px;font-weight:600;text-transform:uppercase;color:var(--color-text-secondary);margin-bottom:8px;">Default</p>${defaultMenu()}</div>
  <div><p style="font-size:11px;font-weight:600;text-transform:uppercase;color:var(--color-text-secondary);margin-bottom:8px;">Checkbox filter</p>${checkboxMenu()}</div>
  <div><p style="font-size:11px;font-weight:600;text-transform:uppercase;color:var(--color-text-secondary);margin-bottom:8px;">Toggle settings</p>${toggleMenu()}</div>
  <div><p style="font-size:11px;font-weight:600;text-transform:uppercase;color:var(--color-text-secondary);margin-bottom:8px;">Radio selection</p>${radioMenu()}</div>
  <div><p style="font-size:11px;font-weight:600;text-transform:uppercase;color:var(--color-text-secondary);margin-bottom:8px;">User profile</p>${profileMenu()}</div>
  <div><p style="font-size:11px;font-weight:600;text-transform:uppercase;color:var(--color-text-secondary);margin-bottom:8px;">Scrolling list</p>${scrollingMenu()}</div>
  <div><p style="font-size:11px;font-weight:600;text-transform:uppercase;color:var(--color-text-secondary);margin-bottom:8px;">Dark mode</p>${darkMenu()}</div>
</div>`,
};

/* ── Notification menu (standalone, full width) ──────────────── */

export const NotificationMenu = {
  name: 'Notification panel',
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story: `
Notification dropdown from Figma **Type=Notification**: 384×500 px.

Header: 16px/500 on gray/50 bg. Each row: 44×44 avatar + message body + blue timestamp. Footer: eye icon + "View all".

✅ Use for bell-icon notification feeds — up to ~5 items, then truncate with "View all"
❌ Do not use for action menus — use the Default type instead
        `,
      },
    },
  },
  render: () => notificationMenu(),
};

/* ── Trigger buttons ─────────────────────────────────────────── */

export const TriggersGallery = {
  name: 'Triggers — all variants',
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story: `
Trigger button variants from Figma node **3283:21134**.

| Variant | Shape | Figma |
|---------|-------|-------|
| Text (light) | pill, radius 12 | Property 1=Default, Dark mode=False |
| Icon-only (light) | circle | Property 1=Only Icon, Dark mode=False |
| Text (dark menu) | same | Property 1=Default, Dark mode=True |
| Icon-only (dark menu) | circle | Property 1=Only Icon, Dark mode=True |

Trigger bg: brand/900 \`#362f78\` · ring: indigo/200 \`#cddbfe\` (3px border) · text: white

✅ Use the 3px indigo ring to distinguish dropdown triggers from regular primary buttons
❌ Do not use a standard .btn-primary as a dropdown trigger — the ring signals "opens a menu"
        `,
      },
      source: {
        language: 'html',
        code: `<!-- Text trigger -->
<button class="dropdown-trigger">
  <!-- chevron-down icon --> Menu <!-- chevron-down icon -->
</button>

<!-- Icon-only trigger -->
<button class="dropdown-trigger dropdown-trigger--icon">
  <!-- plus icon -->
</button>`,
      },
    },
  },
  render: () => `
<div style="display:flex;flex-wrap:wrap;gap:32px;align-items:flex-start;">

  <div>
    <p style="font-size:11px;font-weight:600;text-transform:uppercase;color:var(--color-text-secondary);margin-bottom:12px;">Text trigger (light)</p>
    <div style="display:flex;flex-direction:column;gap:12px;align-items:flex-start;">
      <button class="dropdown-trigger">${CHEVRON_DOWN} Menu ${CHEVRON_DOWN}</button>
    </div>
  </div>

  <div>
    <p style="font-size:11px;font-weight:600;text-transform:uppercase;color:var(--color-text-secondary);margin-bottom:12px;">Icon-only trigger</p>
    <div style="display:flex;gap:12px;">
      <button class="dropdown-trigger dropdown-trigger--icon">${PLUS}</button>
    </div>
  </div>

  <div>
    <p style="font-size:11px;font-weight:600;text-transform:uppercase;color:var(--color-text-secondary);margin-bottom:12px;">With dark menu</p>
    <div style="display:flex;flex-direction:column;gap:16px;align-items:flex-start;">
      <button class="dropdown-trigger">${CHEVRON_DOWN} Menu ${FIRE}</button>
      ${darkMenu()}
    </div>
  </div>

  <div>
    <p style="font-size:11px;font-weight:600;text-transform:uppercase;color:var(--color-text-secondary);margin-bottom:12px;">Footer buttons (inside menu)</p>
    <div class="dropdown-menu" style="width:224px;">
      ${divider()}
      ${menuFooter('Cancel', 'Apply changes')}
    </div>
  </div>

</div>`,
};
