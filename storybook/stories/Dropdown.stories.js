/**
 * Dropdown — list item · menu panel · trigger buttons
 * Figma: 9456:150381 (dropdown-list-item) · 3283:21147 (Dropdown Menu) ·
 *        3283:21134 (Dropdown Buttons)
 * File key: ZKtEULdYKaXe5uQl1J6ijI
 */

/* ── Inline SVG icons ────────────────────────────────────────── */
const CHEVRON_RIGHT  = `<svg width="18" height="18" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"/></svg>`;
const CHEVRON_DOWN   = `<svg width="18" height="18" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"/></svg>`;
const CHEVRON_UP     = `<svg width="18" height="18" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fill-rule="evenodd" d="M14.707 5.293a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L10 8.586l3.293-3.293a1 1 0 011.414 0z" clip-rule="evenodd"/></svg>`;
const USER_ADD       = `<svg width="18" height="18" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z"/></svg>`;
const SEARCH_ICON    = `<svg width="18" height="18" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"/></svg>`;
const LOGOUT         = `<svg width="18" height="18" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fill-rule="evenodd" d="M3 3a1 1 0 00-1 1v12a1 1 0 001 1h6a1 1 0 000-2H4V5h5a1 1 0 000-2H3zm9.707 4.293a1 1 0 00-1.414 1.414L12.586 10l-1.293 1.293a1 1 0 101.414 1.414l2-2a1 1 0 000-1.414l-2-2z" clip-rule="evenodd"/><path d="M7 9a1 1 0 000 2h6a1 1 0 000-2H7z"/></svg>`;
const INFO_ICON      = `<svg width="18" height="18" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"/></svg>`;
const PENCIL         = `<svg width="18" height="18" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"/></svg>`;
const INBOX          = `<svg width="18" height="18" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path d="M8.707 7.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l2-2a1 1 0 00-1.414-1.414L11 7.586V3a1 1 0 10-2 0v4.586l-.293-.293z"/><path d="M3 5a2 2 0 012-2h1a1 1 0 010 2H5v7h2l1 2h4l1-2h2V5h-1a1 1 0 110-2h1a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5z"/></svg>`;
const FIRE           = `<svg width="16" height="16" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fill-rule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" clip-rule="evenodd"/></svg>`;
const PLUS           = `<svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fill-rule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clip-rule="evenodd"/></svg>`;
const EYE            = `<svg width="14" height="14" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path d="M10 12a2 2 0 100-4 2 2 0 000 4z"/><path fill-rule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clip-rule="evenodd"/></svg>`;
const SHOPPING_BAG   = `<svg width="18" height="18" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fill-rule="evenodd" d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z" clip-rule="evenodd"/></svg>`;
const USER_GROUP     = `<svg width="18" height="18" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"/></svg>`;
const USER_CIRCLE    = `<svg width="18" height="18" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clip-rule="evenodd"/></svg>`;
const COG            = `<svg width="18" height="18" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fill-rule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clip-rule="evenodd"/></svg>`;
const ARCHIVE        = `<svg width="18" height="18" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path d="M4 3a2 2 0 100 4h12a2 2 0 100-4H4z"/><path fill-rule="evenodd" d="M3 8h14v7a2 2 0 01-2 2H5a2 2 0 01-2-2V8zm5 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z" clip-rule="evenodd"/></svg>`;
const CURRENCY       = `<svg width="18" height="18" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z"/><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clip-rule="evenodd"/></svg>`;
const DOCUMENT       = `<svg width="18" height="18" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fill-rule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clip-rule="evenodd"/></svg>`;

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
    <span class="dropdown-search-input__value">${value}</span>
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
    `<button class="dropdown-item${i === 2 ? ' danger' : ''}" style="color:${i < 2 ? 'var(--color-text-primary)' : ''};">
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

// Type=Helper text — checkbox list where each item has a label + helper text below
const helperTextMenu = () => menu(`
  ${section({
    label: 'FILTER BY TYPE', count: 2,
    items: [
      { label: 'Analytics reports', helper: 'Charts, funnels, and cohorts', checked: true },
      { label: 'Data exports',      helper: 'CSV and JSON downloads',       checked: true },
      { label: 'Scheduled emails',  helper: 'Daily and weekly digests',     checked: false },
    ].map(({ label, helper, checked }) => `
      <label class="iris-control" style="padding:8px 16px;width:100%;">
        <span class="iris-control__check" style="margin-top:2px;"><span class="iris-checkbox${checked ? ' iris-checkbox--checked' : ''}" role="checkbox" aria-checked="${checked}"></span></span>
        <span class="iris-control__body"><span class="iris-control__label">${label}</span><span class="iris-control__helper">${helper}</span></span>
      </label>`).join(''),
  })}
`, { width: 280 });

// Type=Radio & Helper text — radio buttons with label + helper text
const radioWithHelperMenu = () => menu(`
  <div style="padding:16px;display:flex;flex-direction:column;gap:12px;">
    ${[
      { label: 'Last 7 days',  helper: 'From today',           checked: false },
      { label: 'Last 30 days', helper: 'From today',           checked: true  },
      { label: 'Last 90 days', helper: 'Quarterly view',       checked: false },
      { label: 'Custom range', helper: 'Pick start and end',   checked: false },
    ].map(({ label, helper, checked }) => `
    <label class="iris-control">
      <span class="iris-control__check" style="margin-top:2px;"><span class="iris-radio${checked ? ' iris-radio--checked' : ''}" role="radio" aria-checked="${checked}"></span></span>
      <span class="iris-control__body"><span class="iris-control__label">${label}</span><span class="iris-control__helper">${helper}</span></span>
    </label>`).join('')}
  </div>
`, { width: 240 });

// Type=User Select — short avatar list (Figma: 2-3 users, name 14px/600 + joined subtitle)
const userSelectMenu = () => menu(`
  <div style="padding:12px 16px 4px;display:flex;flex-direction:column;gap:8px;">
    ${[
      { initials: 'JL', name: 'Jese Leos',    sub: 'Joined August 2014' },
      { initials: 'BG', name: 'Bonnie Green',  sub: 'Joined August 2014' },
      { initials: 'RB', name: 'Robert Brown',  sub: 'Joined June 2021'   },
    ].map(({ initials, name, sub }) => `
    <div class="dropdown-avatar-item">
      <span class="dropdown-avatar-item__avatar">${initials}</span>
      <div>
        <div style="font-size:14px;font-weight:600;color:#111928;">${name}</div>
        <div style="font-size:12px;font-weight:400;color:#6b7280;">${sub}</div>
      </div>
    </div>`).join('')}
  </div>
  <div class="dropdown-cta" style="margin:4px 0 0;">${USER_ADD} Add new user</div>
`, { width: 200 });

// Type=App dropdown — 2-column grid of icon + label app nav links
const appDropdownMenu = () => {
  const apps = [
    { icon: SHOPPING_BAG, label: 'Sales',    active: false },
    { icon: USER_GROUP,   label: 'Users',    active: false },
    { icon: INBOX,        label: 'Inbox',    active: false },
    { icon: USER_CIRCLE,  label: 'Profile',  active: false },
    { icon: COG,          label: 'Settings', active: true  },
    { icon: ARCHIVE,      label: 'Products', active: false },
    { icon: CURRENCY,     label: 'Pricing',  active: false },
    { icon: DOCUMENT,     label: 'Billing',  active: false },
    { icon: LOGOUT,       label: 'Logout',   active: false },
  ];
  return menu(`
  <div style="padding:8px;display:grid;grid-template-columns:1fr 1fr;gap:4px;">
    ${apps.map(({ icon, label, active }) => `
    <button style="display:flex;align-items:center;gap:8px;padding:8px 10px;border-radius:6px;background:${active ? 'var(--color-bg-secondary)' : 'transparent'};border:none;cursor:pointer;color:var(--color-text-primary);font-size:14px;font-weight:400;font-family:inherit;text-align:left;">
      <span style="color:var(--color-border-light);flex-shrink:0;">${icon}</span>
      ${label}
    </button>`).join('')}
  </div>
`, { width: 256 });
};

// Type=Dropdown with search — search input + checkbox items with helper text
const withSearchMenu = () => menu(`
  <div style="padding:12px 16px 8px;">
    <div class="dropdown-search-input">
      <span class="dropdown-search-input__icon">${SEARCH_ICON}</span>
      <span class="dropdown-search-input__text">Search members…</span>
    </div>
  </div>
  ${section({
    label: 'TEAM MEMBERS',
    items: [
      { label: 'Jese Leos',    helper: 'jese@example.com',   checked: true  },
      { label: 'Bonnie Green', helper: 'bonnie@example.com', checked: false },
      { label: 'Joseph McFall', helper: 'joseph@example.com', checked: true },
    ].map(({ label, helper, checked }) => `
      <label class="iris-control" style="padding:8px 16px;width:100%;">
        <span class="iris-control__check" style="margin-top:2px;"><span class="iris-checkbox${checked ? ' iris-checkbox--checked' : ''}" role="checkbox" aria-checked="${checked}"></span></span>
        <span class="iris-control__body"><span class="iris-control__label">${label}</span><span class="iris-control__helper">${helper}</span></span>
      </label>`).join(''),
  })}
`, { width: 280 });

const menuMap = {
  default: defaultMenu,
  checkbox: checkboxMenu,
  helperText: helperTextMenu,
  toggle: toggleMenu,
  radio: radioMenu,
  radioWithHelper: radioWithHelperMenu,
  userSelect: userSelectMenu,
  appDropdown: appDropdownMenu,
  withSearch: withSearchMenu,
  profile: profileMenu,
  notification: notificationMenu,
  scrolling: scrollingMenu,
  dark: darkMenu,
};

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
      control: { type: 'select', options: ['default','checkbox','helperText','toggle','radio','radioWithHelper','userSelect','appDropdown','withSearch','profile','notification','scrolling','dark'] },
      description: 'Which menu variant to preview. Each type demonstrates a different Figma component.',
      table: { category: 'Appearance', defaultValue: { summary: 'default' } },
    },
    triggerLabel: {
      name: 'Trigger label',
      control: { type: 'text' },
      description: 'Label shown on the trigger button (text trigger only).',
      table: { category: 'Content', defaultValue: { summary: 'Menu' } },
      if: { arg: 'iconOnly', eq: false },
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

    const htmlCode = `<div style="position:relative;">\n  <button class="dropdown-trigger">\n    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor"><polyline points="4 6 8 10 12 6"></polyline></svg>\n    ${triggerLabel}\n  </button>\n  <div class="dropdown-menu" style="position:absolute;top:100%;left:0;background:#fff;border:1px solid var(--color-border-default);border-radius:8px;width:224px;margin-top:4px;z-index:10;">\n    <button style="width:100%;padding:8px 12px;text-align:left;border:none;background:transparent;cursor:pointer;">Option 1</button>\n    <button style="width:100%;padding:8px 12px;text-align:left;border:none;background:transparent;cursor:pointer;">Option 2</button>\n  </div>\n</div>`;

    const reactCode = `<div style={{ position: 'relative' }}>\n  <button\n    className="dropdown-trigger"\n    onClick={() => setOpen(!open)}\n  >\n    {open ? '▲' : '▼'} ${triggerLabel}\n  </button>\n  {open && (\n    <div className="dropdown-menu" style={{\n      position: 'absolute',\n      top: '100%',\n      left: 0,\n      background: '#fff',\n      border: '1px solid var(--color-border-default)',\n      borderRadius: '8px',\n      marginTop: '4px',\n      zIndex: 10,\n    }}>\n      {items.map((item) => (\n        <button\n          key={item}\n          onClick={() => {\n            onSelect(item);\n            setOpen(false);\n          }}\n          style={{ width: '100%', padding: '8px 12px', textAlign: 'left' }}\n        >\n          {item}\n        </button>\n      ))}\n    </div>\n  )}\n</div>`;

    const componentCode = `export function Dropdown({ items = [], triggerLabel, onSelect, iconOnly = false }) {\n  const [open, setOpen] = useState(false);\n\n  const handleSelect = (item) => {\n    onSelect?.(item);\n    setOpen(false);\n  };\n\n  const triggerClass = \`dropdown-trigger\${iconOnly ? ' dropdown-trigger--icon' : ''}\`;\n\n  return (\n    <div style={{ position: 'relative' }}>\n      <button\n        className={triggerClass}\n        onClick={() => setOpen(!open)}\n        aria-expanded={open}\n        aria-haspopup="menu"\n      >\n        {iconOnly ? '+' : triggerLabel}\n      </button>\n      {open && (\n        <div\n          className="dropdown-menu\"\n          role="menu\"\n          style={{\n            position: 'absolute',\n            top: '100%',\n            left: 0,\n            background: '#fff',\n            border: '1px solid var(--color-border-default)',\n            borderRadius: '8px',\n            minWidth: '224px',\n            zIndex: 10,\n          }}\n        >\n          {items.map((item) => (\n            <button\n              key={item}\n              role="menuitem\"\n              onClick={() => handleSelect(item)}\n              style={{\n                width: '100%',\n                padding: '8px 12px',\n                textAlign: 'left',\n                border: 'none',\n                background: 'transparent',\n                cursor: 'pointer',\n              }}\n            >\n              {item}\n            </button>\n          ))}\n        </div>\n      )}\n    </div>\n  );\n}`;

    const htmlEscaped = htmlCode.replace(/</g, '&lt;').replace(/>/g, '&gt;');
    const reactEscaped = reactCode.replace(/</g, '&lt;').replace(/>/g, '&gt;');
    const componentEscaped = componentCode.replace(/</g, '&lt;').replace(/>/g, '&gt;');

    return `
      <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:40px;align-items:start;">
        <div style="padding:20px;border:1px solid var(--color-border-default);border-radius:8px;">
          <div style="display:flex;flex-direction:column;gap:16px;align-items:flex-start;">
            ${trigger}
            ${menuMap[menuType]?.() ?? defaultMenu()}
          </div>
        </div>
        <div style="display:flex;flex-direction:column;gap:24px;">
          <div style="padding:20px;border:1px solid var(--color-border-default);border-radius:8px;">
            <div style="font-weight:600;font-size:12px;color:var(--color-text-secondary);margin-bottom:12px;text-transform:uppercase;letter-spacing:0.5px;">HTML</div>
            <div style="background:var(--color-bg-tertiary);padding:12px;border-radius:6px;margin-bottom:12px;overflow:auto;">
              <pre style="margin:0;font-family:monospace;font-size:13px;white-space:pre-wrap;word-break:break-word;"><code>${htmlEscaped}</code></pre>
            </div>
            <button data-copy="${htmlCode.split('"').join('&quot;')}" class="storybook-copy-btn" style="padding:8px 12px;background:var(--color-bg-secondary);color:var(--color-text-primary);border:1px solid var(--color-border-default);border-radius:4px;cursor:pointer;font-family:inherit;font-size:12px;font-weight:500;display:flex;align-items:center;gap:6px;">
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="2" y="2" width="8" height="8" rx="1"/><path d="M6 14H12C13.1046 14 14 13.1046 14 12V6"/></svg>Copy
            </button>
          </div>
          <div style="padding:20px;border:1px solid var(--color-border-default);border-radius:8px;">
            <div style="font-weight:600;font-size:12px;color:var(--color-text-secondary);margin-bottom:12px;text-transform:uppercase;letter-spacing:0.5px;">React</div>
            <div style="background:var(--color-bg-tertiary);padding:12px;border-radius:6px;margin-bottom:12px;overflow:auto;">
              <pre style="margin:0;font-family:monospace;font-size:13px;white-space:pre-wrap;word-break:break-word;"><code>${reactEscaped}</code></pre>
            </div>
            <button data-copy="${reactCode.split('"').join('&quot;')}" class="storybook-copy-btn" style="padding:8px 12px;background:var(--color-bg-secondary);color:var(--color-text-primary);border:1px solid var(--color-border-default);border-radius:4px;cursor:pointer;font-family:inherit;font-size:12px;font-weight:500;display:flex;align-items:center;gap:6px;">
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="2" y="2" width="8" height="8" rx="1"/><path d="M6 14H12C13.1046 14 14 13.1046 14 12V6"/></svg>Copy
            </button>
          </div>
          <div style="padding:20px;border:1px solid var(--color-border-default);border-radius:8px;">
            <div style="font-weight:600;font-size:12px;color:var(--color-text-secondary);margin-bottom:12px;text-transform:uppercase;letter-spacing:0.5px;">Component (With Events)</div>
            <div style="background:var(--color-bg-tertiary);padding:12px;border-radius:6px;margin-bottom:12px;overflow:auto;">
              <pre style="margin:0;font-family:monospace;font-size:13px;white-space:pre-wrap;word-break:break-word;"><code>${componentEscaped}</code></pre>
            </div>
            <button data-copy="${componentCode.split('"').join('&quot;')}" class="storybook-copy-btn" style="padding:8px 12px;background:var(--color-bg-secondary);color:var(--color-text-primary);border:1px solid var(--color-border-default);border-radius:4px;cursor:pointer;font-family:inherit;font-size:12px;font-weight:500;display:flex;align-items:center;gap:6px;">
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="2" y="2" width="8" height="8" rx="1"/><path d="M6 14H12C13.1046 14 14 13.1046 14 12V6"/></svg>Copy
            </button>
          </div>
        </div>
      </div>
      <script>
        document.querySelectorAll('.storybook-copy-btn').forEach(btn => {
          btn.addEventListener('click', function() {
            navigator.clipboard.writeText(this.dataset.copy);
            const originalText = this.innerHTML;
            this.innerHTML = '<svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5"><polyline points="13 2 3 13 1 11"></polyline></svg>Copied!';
            this.style.background = 'var(--color-success-light)';
            this.style.color = 'var(--color-success-dark)';
            this.style.borderColor = 'var(--color-success-lighter)';
            setTimeout(() => {
              this.innerHTML = originalText;
              this.style.background = 'var(--color-bg-secondary)';
              this.style.color = 'var(--color-text-primary)';
              this.style.borderColor = 'var(--color-border-default)';
            }, 2000);
          });
        });
      </script>
    `;
  },
  parameters: {
    docs: {
      description: {
        story: `
Use **Menu type** to switch between all Figma menu variants. Use **Icon-only trigger** to preview the circular button.

✅ Change menu type to see: Default · Checkbox · Helper text · Toggle · Radio · Radio + helper · User select · App dropdown · With search · User profile · Notifications · Scrolling list · Dark mode
❌ Do not nest dropdowns more than 1 level deep
        `,
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
| Hover | #101828 | gray/500 | gray/100 var(--color-bg-secondary) |
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
| Default | 224px | Type=Default (search + sections + footer) |
| Checkbox filter | 280px | Type=Checkbox (.iris-checkbox + helper text) |
| Helper text | 280px | Type=Helper text (checkbox + label + helper) |
| Toggle settings | 260px | Type=Toggle switch (.iris-toggle) |
| Radio selection | 224px | Type=Radio |
| Radio + helper text | 240px | Type=Radio & Helper text |
| User select | 200px | Type=User Select (short avatar list) |
| App dropdown | 256px | Type=App dropdown (2-col icon grid) |
| With search | 280px | Type=Dropdown with search (input + checkboxes) |
| User profile | 224px | Type=Dropdown header |
| Notifications | 384px | Type=Notification |
| Scrolling list | 180px | Type=Dropdown with scrolling |
| Dark mode | 224px | Property 1=Default, Dark mode=True |

✅ Toggle and Checkbox menus reuse \`.iris-toggle\` / \`.iris-checkbox\` from the Controls component
        `,
      },
      source: {
        language: 'html',
        code: `<!-- Default menu (search + sections + footer) -->
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

<!-- App dropdown (2-col icon grid) -->
<div class="dropdown-menu" style="width:256px;">
  <div style="padding:8px;display:grid;grid-template-columns:1fr 1fr;gap:4px;">
    <button style="display:flex;align-items:center;gap:8px;padding:8px 10px;">
      <!-- shopping-bag icon --> Sales
    </button>
  </div>
</div>`,
      },
    },
  },
  render: () => {
    const entries = [
      ['Default',           defaultMenu()],
      ['Checkbox filter',   checkboxMenu()],
      ['Helper text',       helperTextMenu()],
      ['Toggle settings',   toggleMenu()],
      ['Radio selection',   radioMenu()],
      ['Radio + helper',    radioWithHelperMenu()],
      ['User select',       userSelectMenu()],
      ['App dropdown',      appDropdownMenu()],
      ['With search',       withSearchMenu()],
      ['User profile',      profileMenu()],
      ['Scrolling list',    scrollingMenu()],
      ['Dark mode',         darkMenu()],
    ];
    return `
<div style="display:flex;flex-wrap:wrap;gap:32px;align-items:flex-start;">
  ${entries.map(([label, html]) => `
  <div>
    <p style="font-size:11px;font-weight:600;text-transform:uppercase;color:var(--color-text-secondary);margin-bottom:8px;">${label}</p>
    ${html}
  </div>`).join('')}
</div>`;
  },
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
      source: {
        language: 'html',
        code: `<div class="dropdown-menu" style="width:384px;">

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

</div>`,
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
      <button class="dropdown-trigger">${CHEVRON_DOWN} Menu ${CHEVRON_DOWN}</button>
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

/* ── Filter Select Dropdown with outline icon ──────────────────────── */

/* Heroicons @24/outline */
const ICON_CATEGORY = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" width="16" height="16"><path stroke-linecap="round" stroke-linejoin="round" d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0ZM3.75 12h.007v.008H3.75V12Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm-.375 5.25h.007v.008H3.75v-.008Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" /></svg>`;
const ICON_LOCATION = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" width="16" height="16"><path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" /><path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" /></svg>`;

export const FilterSelectDropdown = {
    name: 'Filter Select — Interactive (Controls)',
  argTypes: {
    label: {
      control: 'text',
      description: 'Button label text',
      table: { category: 'Content', defaultValue: { summary: 'Category' } },
    },
    showIcon: {
      control: 'boolean',
      description: 'Show leading icon on the left',
      table: { category: 'Content', defaultValue: { summary: true } },
    },
    size: {
      control: 'select',
      options: ['sm', 'md'],
      description: '`sm` = 36px height, 16px icons · `md` = 40px height, 18px icons',
      table: { category: 'Appearance', defaultValue: { summary: 'sm' } },
    },
    open: {
      control: 'boolean',
      description: 'Open state — chevron flips up, background turns muted',
      table: { category: 'State', defaultValue: { summary: false } },
    },
    active: {
      control: 'boolean',
      description: 'Active/selected state — button highlighted with brand color',
      table: { category: 'State', defaultValue: { summary: false } },
    },
    showMenu: {
      control: 'boolean',
      description: 'Show dropdown menu below the button',
      table: { category: 'State', defaultValue: { summary: false } },
    },
  },
  args: {
    label: 'Category',
    showIcon: true,
    size: 'sm',
    open: false,
    active: false,
    showMenu: false,
  },
  parameters: {
    docs: {
      description: {
        story: `
**Multi-select filter button** — opens a popover with checkboxes. Use above tables and lists when users need to filter by multiple values simultaneously.

✅ **Use this when:**
- User can select multiple values (Category: Electronics + Clothing)
- Shows count badge when active: "Category (2)"
- Menu stays open while selecting
- Examples: Category, Location, Cover, Demand, Days of cover

❌ **Use \`form-select\` instead when:**
- User picks ONE value and menu closes immediately
- Simple single-select (All Channels, All Time, status)
- Border-radius 8px, not 12px

---

**Specs (Figma):**
- Height: 36px (\`btn-sm\`)
- Icon: 16px (\`w-4 h-4\` in React)
- Border: 1px solid \`var(--color-border-default)\`, radius 12px
- Hover: \`var(--color-bg-muted)\`
- Chevron flips when open

**React pattern:**
\`\`\`jsx
<button className="btn btn-outline-gray btn-sm">
  <SomeIcon className="w-4 h-4" />
  {label}{count > 0 && \` (\${count})\`}
  <ChevronDownIcon className="w-4 h-4" />
</button>
// Inside popover: checkboxes list
\`\`\`
        `,
      },
      source: {
        transform: (_src, ctx) => {
          const { label, open } = ctx.args;
          return `<button class="dropdown-trigger dropdown-trigger--outline${open ? ' open' : ''}">
  <svg width="16" height="16"><!-- icon --></svg>
  ${label}
  <svg width="16" height="16"><!-- ${open ? 'ChevronUp' : 'ChevronDown'} --></svg>
</button>`;
        },
      },
    },
  },
  render: (args) => {
    const { label, showIcon, size, open, active, showMenu } = args;
    const isSm = size !== 'md';
    const iconSizePx = isSm ? 16 : 18;
    const sizeClass = isSm ? ' dropdown-trigger--sm' : '';
    const bg = open || active ? 'background:var(--color-bg-muted);' : '';
    const chevron = open ? CHEVRON_UP : CHEVRON_DOWN;
    const icon = ICON_CATEGORY.replace(/width="\d+"/, `width="${iconSizePx}"`).replace(/height="\d+"/, `height="${iconSizePx}"`);
    return `
<div style="position:relative;width:220px;">
  <button class="dropdown-trigger dropdown-trigger--outline${sizeClass}${active ? ' active' : ''}" style="width:100%;display:flex;align-items:center;gap:8px;justify-content:flex-start;${bg}">
    ${showIcon !== false ? icon : ''}
    <span style="flex:1;text-align:left;">${label}</span>
    ${chevron}
  </button>
  ${showMenu ? `<div class="dropdown-menu dropdown-menu--absolute dropdown-menu--checkbox" style="width:100%;top:calc(100%+4px);left:0;">
    ${['Electronics', 'Clothing', 'Books', 'Accessories'].map((opt, i) => `
    <label class="iris-control" style="display:flex;gap:8px;align-items:flex-start;cursor:pointer;width:100%;">
      <span class="iris-control__check" style="margin-top:2px;"><span class="iris-checkbox${i === 0 ? ' iris-checkbox--checked' : ''}" role="checkbox" aria-checked="${i === 0}"></span></span>
      <span class="iris-control__body"><span class="iris-control__label">${opt}</span></span>
    </label>`).join('')}
    <hr class="dropdown-divider" style="margin:0;">
    <button class="btn btn-link btn-sm" style="width:100%;text-align:center;padding:0;">Clear</button>
  </div>` : ''}
</div>`;
  },
};

/* ── Filter Select Gallery — states ───────────────────────────── */
export const FilterSelectStates = {
    name: 'Filter Select — all states',
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story: 'All states of the filter dropdown button: default, open (chevron up), active (selection made), with menu open.',
      },
    },
  },
  render: () => `
<div style="display:flex;gap:40px;align-items:flex-start;">

  <div>
    <p style="font-size:11px;font-weight:600;text-transform:uppercase;color:var(--color-text-secondary);margin-bottom:12px;">Default state</p>
    <div style="position:relative;width:220px;">
      <button class="dropdown-trigger dropdown-trigger--outline" style="width:100%;display:flex;align-items:center;gap:8px;justify-content:flex-start;">
        ${ICON_CATEGORY}
        <span style="flex:1;text-align:left;font-size:14px;">Category</span>
        ${CHEVRON_DOWN}
      </button>
      <div class="dropdown-menu dropdown-menu--absolute dropdown-menu--checkbox" style="width:100%;top:calc(100%+4px);left:0;">
        ${['Electronics', 'Clothing', 'Books'].map(opt => `
        <label class="iris-control" style="display:flex;gap:8px;align-items:flex-start;cursor:pointer;width:100%;">
          <span class="iris-control__check" style="margin-top:2px;"><span class="iris-checkbox" role="checkbox" aria-checked="false"></span></span>
          <span class="iris-control__body"><span class="iris-control__label">${opt}</span></span>
        </label>`).join('')}
      </div>
    </div>
  </div>

  <div>
    <p style="font-size:11px;font-weight:600;text-transform:uppercase;color:var(--color-text-secondary);margin-bottom:12px;">Open — 2 selected</p>
    <div style="position:relative;width:220px;">
      <button class="dropdown-trigger dropdown-trigger--outline" style="width:100%;display:flex;align-items:center;gap:8px;justify-content:flex-start;background:var(--color-bg-muted);">
        ${ICON_LOCATION}
        <span style="flex:1;text-align:left;font-size:14px;">Location <strong>(2)</strong></span>
        ${CHEVRON_UP}
      </button>
      <div class="dropdown-menu dropdown-menu--absolute dropdown-menu--checkbox" style="width:100%;top:calc(100%+4px);left:0;">
        ${[['NYC Store', true], ['Chicago WH', true], ['LA DC', false]].map(([opt, checked]) => `
        <label class="iris-control" style="display:flex;gap:8px;align-items:flex-start;cursor:pointer;width:100%;">
          <span class="iris-control__check" style="margin-top:2px;"><span class="iris-checkbox${checked ? ' iris-checkbox--checked' : ''}" role="checkbox" aria-checked="${checked}"></span></span>
          <span class="iris-control__body"><span class="iris-control__label">${opt}</span></span>
        </label>`).join('')}
        <hr class="dropdown-divider" style="margin:0;">
        <button class="btn btn-link btn-sm" style="width:100%;text-align:center;padding:0;">Clear</button>
      </div>
    </div>
  </div>

</div>`,
};

