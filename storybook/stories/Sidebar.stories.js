/**
 * Iris Library — Navigation / Sidebar
 *
 * Source: Figma › Iris Library › Sidebar (node 1057:2041)
 * Light variant:      node 9272:163206 (Type=Default, Color=White/Gray, Icons=True, Logo=True)
 * Contracted variant: node 1060:44      (Type=Contracted, Icons=True, Color=White, Logo=False)
 * Contracted+logo:    node 12688:49221  (Type=Contracted, Icons=True, Color=White, Logo=True)
 * In-context example: node 17:40413    (full-page layout with sidebar)
 * Menu item:          node 9263:160934
 *
 * ## Variants
 * | Type       | Color | Icons | Logo | Width |
 * |------------|-------|-------|------|-------|
 * | Default    | White | Yes   | Yes  | 256px |
 * | Default    | White | Yes   | No   | 256px |
 * | Contracted | White | Yes   | No   | 60px  |
 *
 * ## Anatomy
 * - Logo area (top)
 * - Menu items (icon + label, optional chevron for expandable)
 * - Sub-items (indented, no icon)
 * - Divider
 * - Bottom section (Help, Settings)
 *
 * ## Tokens used
 * - bg: var(--color-bg-tertiary) = #f3f4f6
 * - border: var(--color-border-base) = #e5e7eb
 * - text active: #42389d (old-colors/brand/800)
 * - text default: var(--color-text-heading) = #111928
 * - active bg: var(--color-bg-quaternary) = #e5e7eb
 *
 * ## QA notes
 * - Width: 256px (expanded) · 60px (contracted, node 1060:44)
 * - Contracted bg: #ffffff (white) — NOT #f3f4f6
 * - Menu item height: 40px
 * - Border-radius on items: 8px
 * - Logo: Iris mark xs (24px) + wordmark, or sm (32px) standalone
 * - Active item: bg #e5e7eb, text #42389d
 * - Sub-items: 28px left indent, no icon
 * - Divider: 1px #e5e7eb full width
 */

import { irisLogo, irisMarkImg } from './brand-assets.js';

// ─── Icon helpers (Heroicons v1 solid, 20×20 viewBox) ────────────────────────
// All fill icons use viewBox="0 0 20 20" — the Heroicons v1 solid convention.
// Displayed at width/height 24 so they scale up proportionally.

const icons = {
  // Overview
  viewGrid: `<svg width="24" height="24" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM13 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2h-2z"/>
  </svg>`,

  // Metrics Library — document with 3 vertical bar charts
  documentReport: `<svg width="24" height="24" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm2 10a1 1 0 10-2 0v3a1 1 0 102 0v-3zm2-3a1 1 0 011 1v5a1 1 0 11-2 0v-5a1 1 0 011-1zm4-1a1 1 0 10-2 0v7a1 1 0 102 0V8z" clip-rule="evenodd"/>
  </svg>`,

  // Profit & Loss — filled pie chart
  chartPie: `<svg width="24" height="24" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"/>
    <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"/>
  </svg>`,

  // Budget — credit card
  creditCard: `<svg width="24" height="24" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z"/>
    <path fill-rule="evenodd" d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 000 2h1a1 1 0 100-2H9z" clip-rule="evenodd"/>
  </svg>`,

  // Cohorts — grid with plus
  viewGridAdd: `<svg width="24" height="24" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM14 11a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1v-1z"/>
  </svg>`,

  // 13-week Cash Flow — presentation screen with upward line chart
  presentationChartLine: `<svg width="24" height="24" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
  </svg>`,

  // Financial model — dollar sign in circle
  currencyDollar: `<svg width="24" height="24" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z"/>
    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clip-rule="evenodd"/>
  </svg>`,

  // Help — question mark circle
  help: `<svg width="24" height="24" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"/>
  </svg>`,

  // ── Contracted sidebar icons (Figma node 1060:44) ────────────────────────

  shoppingBag: `<svg width="24" height="24" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z" clip-rule="evenodd"/>
  </svg>`,

  inboxIn: `<svg width="24" height="24" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" d="M5 3a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2V5a2 2 0 00-2-2H5zm0 2h10v7h-2.101l-.813-1.627A1 1 0 0011.19 10H8.81a1 1 0 00-.896.553L7.1 12H5V5z" clip-rule="evenodd"/>
  </svg>`,

  lockClosed: `<svg width="24" height="24" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd"/>
  </svg>`,

  clipboardList: `<svg width="24" height="24" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"/>
    <path fill-rule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clip-rule="evenodd"/>
  </svg>`,

  collection: `<svg width="24" height="24" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z"/>
  </svg>`,

  support: `<svg width="24" height="24" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-2 0c0 .993-.241 1.929-.668 2.754l-1.524-1.525a3.997 3.997 0 00.078-2.183l1.562-1.562C15.802 8.249 16 9.1 16 10zm-5.165 3.913l1.58 1.58A5.98 5.98 0 0110 16a5.976 5.976 0 01-2.516-.552l1.562-1.562a4.006 4.006 0 001.789.027zm-4.677-2.796a4.002 4.002 0 01-.041-2.08l-.08.08-1.53-1.533A5.98 5.98 0 004 10c0 .954.223 1.856.619 2.657l1.54-1.54zm1.088-6.45A5.974 5.974 0 0110 4c.954 0 1.856.223 2.657.619l-1.54 1.54a4.002 4.002 0 00-2.346.033L7.246 4.668zM12 10a2 2 0 11-4 0 2 2 0 014 0z" clip-rule="evenodd"/>
  </svg>`,

  adjustments: `<svg width="24" height="24" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M5 4a1 1 0 00-2 0v7.268a2 2 0 000 3.464V16a1 1 0 102 0v-1.268a2 2 0 000-3.464V4zM11 4a1 1 0 10-2 0v1.268a2 2 0 000 3.464V16a1 1 0 102 0V8.732a2 2 0 000-3.464V4zM16 3a1 1 0 011 1v7.268a2 2 0 010 3.464V16a1 1 0 11-2 0v-1.268a2 2 0 010-3.464V4a1 1 0 011-1z"/>
  </svg>`,

  globe: `<svg width="24" height="24" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM4.332 8.027a6.012 6.012 0 011.912-2.706C6.512 5.73 6.974 6 7.5 6A1.5 1.5 0 019 7.5V8a2 2 0 004 0 2 2 0 011.523-1.943A5.977 5.977 0 0116 10c0 .34-.028.675-.083 1H15a2 2 0 00-2 2v2.197A5.973 5.973 0 0110 16v-2a2 2 0 00-2-2 2 2 0 01-2-2 2 2 0 00-1.668-1.973z" clip-rule="evenodd"/>
  </svg>`,

  cog: `<svg width="24" height="24" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clip-rule="evenodd"/>
  </svg>`,

  // Chevrons (outline stroke, 20px display)
  chevronDown: `<svg width="20" height="20" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M6 9l6 6 6-6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>`,

  chevronUp: `<svg width="20" height="20" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M18 15l-6-6-6 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>`,
};

// ─── Building blocks ─────────────────────────────────────────────────────────

const menuItemStyles = {
  base: `
    display:flex; align-items:center; gap:4px;
    height:40px; padding:6px 8px; border-radius:8px;
    cursor:pointer; width:100%; box-sizing:border-box;
    text-decoration:none;
  `,
  active: 'background:#e5e7eb;',
  hover: 'background:transparent;',
};

function menuItem({ icon, label, active = false, expandable = false, expanded = false, color = '#111928' }) {
  const activeColor = '#42389d';
  const textColor = active ? activeColor : color;
  const bg = active ? 'background:#e5e7eb;' : '';
  // Chevron stroke is always #1f2a37 per Figma (node 9263:160845) — not textColor
  const chevronColor = '#1f2a37';

  return `
    <div style="${menuItemStyles.base}${bg}">
      <div style="display:flex;flex:1;gap:4px;align-items:center;min-width:0;">
        ${icon ? `<span style="flex-shrink:0;width:24px;height:24px;color:${textColor};display:flex;align-items:center;">${icon}</span>` : ''}
        <span style="font:500 16px/1.5 var(--font-family-base,Inter,sans-serif);color:${textColor};white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">${label}</span>
      </div>
      ${expandable ? `<span style="flex-shrink:0;color:${chevronColor};">${expanded ? icons.chevronUp : icons.chevronDown}</span>` : ''}
    </div>
  `;
}

function subItem({ label, active = false }) {
  const textColor = active ? '#42389d' : '#111928';
  const bg = active ? 'background:#e5e7eb;border-radius:8px;' : '';
  return `
    <div style="padding-left:28px;">
      <div style="${menuItemStyles.base}${bg}">
        <span style="font:500 16px/1.5 var(--font-family-base,Inter,sans-serif);color:${textColor};">${label}</span>
      </div>
    </div>
  `;
}

function divider() {
  return `<div style="padding:4px 0;width:100%;"><div style="height:1px;background:#e5e7eb;width:100%;"></div></div>`;
}

// ─── Contracted sidebar builder ──────────────────────────────────────────────
// Figma: Type=Contracted, Icons=True, Color=White — node 1060:44
// Width: 60px, bg: #ffffff (white, not #f3f4f6)
// Active: 40×40px centered, bg #f3f4f6, radius 8px, icon #1f2a37
// Inactive: 60×32px full-width, transparent, icon #6b7280

function contractedItem({ icon, label, active = false }) {
  if (active) {
    return `
      <button title="${label}" aria-label="${label}" aria-current="page" style="
        width:40px;height:40px;margin:0 auto;
        background:var(--color-bg-muted);border-radius:8px;border:none;
        display:flex;align-items:center;justify-content:center;
        color:#1f2a37;cursor:pointer;flex-shrink:0;
      ">${icon}</button>`;
  }
  return `
    <button title="${label}" aria-label="${label}" style="
      width:60px;height:32px;padding:4px 0;
      background:transparent;border:none;
      display:flex;align-items:center;justify-content:center;
      color:var(--color-text-secondary);cursor:pointer;flex-shrink:0;
    ">${icon}</button>`;
}

function contractedSidebar({ activeKey = 'chartPie' } = {}) {
  const firstMenu = [
    { key: 'chartPie',      icon: icons.chartPie,      label: 'Overview' },
    { key: 'documentReport',icon: icons.documentReport, label: 'Metrics Library' },
    { key: 'shoppingBag',   icon: icons.shoppingBag,   label: 'Orders' },
    { key: 'inboxIn',       icon: icons.inboxIn,       label: 'Inbox' },
    { key: 'lockClosed',    icon: icons.lockClosed,    label: 'Security' },
  ];
  const secondMenu = [
    { key: 'clipboardList', icon: icons.clipboardList, label: 'Reports' },
    { key: 'collection',    icon: icons.collection,    label: 'Collections' },
    { key: 'support',       icon: icons.support,       label: 'Support' },
  ];
  const bottomMenu = [
    { key: 'adjustments',   icon: icons.adjustments,   label: 'Adjustments' },
    { key: 'globe',         icon: icons.globe,         label: 'Language' },
    { key: 'cog',           icon: icons.cog,           label: 'Settings' },
  ];

  const section = (items, gap, paddingTop = '0', paddingBottom = '0') => `
    <div style="display:flex;flex-direction:column;gap:${gap}px;padding:${paddingTop}px 0 ${paddingBottom}px;">
      ${items.map(item => contractedItem({ ...item, active: item.key === activeKey })).join('')}
    </div>`;

  const sep = () => `<div style="height:1px;background:#e5e7eb;flex-shrink:0;"></div>`;

  return `
    <div style="
      width:60px;height:100%;min-height:600px;
      background:#ffffff;
      border-right:1px solid #e5e7eb;
      display:flex;flex-direction:column;
      padding-top:16px;box-sizing:border-box;
    ">
      ${section(firstMenu, 16, 0, 12)}
      ${sep()}
      ${section(secondMenu, 8, 12, 12)}
      ${sep()}
      ${section(bottomMenu, 8, 12, 12)}
    </div>`;
}

// ─── Sidebar builder ─────────────────────────────────────────────────────────

// color: 'white' = #ffffff | 'gray' = #f3f4f6  (both are light-mode variants per Figma 1057:2041)
function sidebar({ showLogo = true, activeItem = 'overview', financialExpanded = true, color = 'gray' } = {}) {
  const bg = color === 'white' ? '#ffffff' : '#f3f4f6';
  return `
    <div style="
      background:${bg};
      border-right:1px solid #e5e7eb;
      display:flex; flex-direction:column; gap:24px;
      width:256px; height:100%; min-height:600px;
      box-sizing:border-box;
    ">
      ${showLogo ? `
        <div style="padding:24px 8px 0 28px;">
          ${irisLogo({ size: 'sm', dark: false })}
        </div>
      ` : ''}

      <!-- Main nav -->
      <div style="display:flex;flex-direction:column;gap:8px;padding:0 8px 0 28px;width:100%;box-sizing:border-box;">
        ${menuItem({ icon: icons.viewGrid, label: 'Overview', active: activeItem === 'overview' })}
        ${menuItem({ icon: icons.documentReport, label: 'Metrics Library', active: activeItem === 'metrics' })}
        ${menuItem({ icon: icons.chartPie, label: 'Profit & Loss', active: activeItem === 'pnl' })}
        ${menuItem({ icon: icons.creditCard, label: 'Budget', active: activeItem === 'budget' })}
        ${menuItem({ icon: icons.viewGridAdd, label: 'Cohorts', active: activeItem === 'cohorts' })}
        ${menuItem({ icon: icons.presentationChartLine, label: '13-week Cash Flow', active: activeItem === 'cashflow' })}
        ${menuItem({ icon: icons.currencyDollar, label: 'Financial model', active: activeItem === 'financial', expandable: true, expanded: financialExpanded })}
        ${financialExpanded ? `
          ${subItem({ label: 'Overview', active: activeItem === 'financial-overview' })}
          ${subItem({ label: 'Income Statement', active: activeItem === 'income' })}
          ${subItem({ label: 'Cash Flow', active: activeItem === 'cf' })}
          ${subItem({ label: 'Balance Sheet', active: activeItem === 'bs' })}
          ${subItem({ label: 'Drivers', active: activeItem === 'drivers' })}
        ` : ''}
      </div>

      ${divider()}

      <!-- Bottom nav -->
      <div style="display:flex;flex-direction:column;gap:8px;padding:0 8px 24px 28px;width:100%;box-sizing:border-box;">
        ${menuItem({ icon: icons.help, label: 'Help', active: activeItem === 'help' })}
      </div>
    </div>
  `;
}

// ─── Stories ─────────────────────────────────────────────────────────────────

export default {
  title: 'Iris Library/Navigation/Sidebar',
  tags: ['autodocs', 'stable'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `
**Navigation / Sidebar** — left navigation for authenticated dashboard views.

Figma sources: component set \`1057:2041\`, menu-item states \`9263:160845\`, live example \`9272:163206\`.

**Light-mode variants (Color=White / Color=Gray)**
| Variant | Background | Border/Separator |
|---|---|---|
| Color=Gray (default) | \`#f3f4f6\` | \`#e5e7eb\` |
| Color=White | \`#ffffff\` | \`#e5e7eb\` |

**Menu item types (node \`9263:160845\`)**
| Type | Description |
|---|---|
| Primary | Regular nav item, optional icon, no chevron |
| Expandable | Nav item with sub-menu — chevron rotates on expand |
| Secondary | Sub-item — indented 28px, no icon |

**Menu item states**
| State | bg | text | icon | chevron |
|---|---|---|---|---|
| Selected | \`#e5e7eb\` | \`#42389d\` | \`#42389d\` | \`#1f2a37\` |
| Default | transparent | \`#111928\` | \`#6b7280\` | \`#1f2a37\` |

**When to use**
- Persistent left navigation for dashboard / app views
- Use \`color=gray\` as the default; \`color=white\` when the sidebar sits on an already-light page background
- Use \`showLogo: false\` when the logo is rendered in a top bar

**When NOT to use**
- Top navigation bars → use a separate Nav component
- Mobile viewports — sidebar is desktop-only; use a drawer/overlay pattern on mobile

**Anatomy**
\`[Logo?] / [Primary nav items + expandable items] / [Sub-items 28px indent] / [Divider] / [Bottom items]\`

**QA checklist**
- Width: 256px · Menu item height: 40px · border-radius: 8px
- Active: bg \`#e5e7eb\`, text+icon \`#42389d\`, chevron always \`#1f2a37\`
- Sub-items: 28px left indent, no icon, \`#111928\` text
- Active item requires \`aria-current="page"\` for accessibility
        `.trim(),
      },
    },
  },
  argTypes: {
    // ── Content ──────────────────────────────────────────────
    showLogo: {
      control: 'boolean',
      description: 'Show the Iris logo + wordmark at the top. Set `false` when logo lives in a top bar.',
      table: { category: 'Content', defaultValue: { summary: true } },
    },
    activeItem: {
      control: 'select',
      options: ['overview', 'metrics', 'pnl', 'budget', 'cohorts', 'cashflow', 'financial', 'help'],
      description: 'Which nav item is in the active/selected state. Applies `#42389d` text + `#e5e7eb` bg.',
      table: { category: 'Content', defaultValue: { summary: 'overview' } },
    },
    // ── Appearance ───────────────────────────────────────────
    color: {
      control: 'select',
      options: ['gray', 'white'],
      description: 'Background color variant. `gray` = `#f3f4f6` (Figma Color=Gray). `white` = `#ffffff` (Figma Color=White). Both are light-mode variants (node `1057:2041`).',
      table: { category: 'Appearance', defaultValue: { summary: 'gray' } },
    },
    // ── State ────────────────────────────────────────────────
    financialExpanded: {
      control: 'boolean',
      description: 'Whether the Financial model sub-menu is expanded. Controls chevron direction and sub-item visibility.',
      table: { category: 'State', defaultValue: { summary: true } },
    },
  },
  args: {
    showLogo: true,
    activeItem: 'overview',
    color: 'gray',
    financialExpanded: true,
  },
};

/* ─────────────────────────────────────────────
   DEFAULT — with logo, overview active
───────────────────────────────────────────── */
/**
 * Default light sidebar — logo visible, Financial model expanded, Overview active.
 *
 * **QA checklist**
 * - Logo renders as hexagonal mark + "Iris" text
 * - Active item (Overview) has bg #e5e7eb, text #42389d
 * - Financial model shows chevron-up (expanded)
 * - Sub-items indented 28px, no icon
 */
export const Interactive = {
  name: 'Interactive (Controls)',
  parameters: {
    docs: {
      description: {
        story: 'Use **Controls** to configure any sidebar combination: background color, active item, logo visibility, Financial model expanded.',
      },
      source: {
        transform: (_src, storyCtx) => {
          const { showLogo, activeItem, financialExpanded, color } = storyCtx.args;
          const bg = color === 'white' ? '#ffffff' : '#f3f4f6';
          return `<!-- Sidebar — color:${color}, showLogo:${showLogo}, active:${activeItem}, expanded:${financialExpanded} -->
<aside style="width:256px;height:100vh;background:${bg};border-right:1px solid #e5e7eb;
              display:flex;flex-direction:column;padding:16px 0;box-sizing:border-box;">
  ${showLogo ? `<!-- Logo area -->\n  <div style="padding:0 16px 16px;"><!-- Iris mark + wordmark --></div>` : ''}
  <nav>
    <!-- Menu items — active item gets bg:#e5e7eb; color:#42389d -->
    <!-- aria-current="page" on the active <a> for accessibility -->
  </nav>
</aside>`;
        },
      },
    },
  },
  render: ({ showLogo, activeItem, financialExpanded, color }) => `
    <div style="height:100vh;display:flex;">
      ${sidebar({ showLogo, activeItem, financialExpanded, color })}
    </div>
  `,
};

export const Default = {
  name: 'Default — light, logo, overview active',
  parameters: {
    docs: {
      description: { story: 'Default sidebar state: logo visible, Financial model expanded, Overview active.' },
      source: {
        code: `<aside style="width:256px;height:100vh;background:var(--color-bg-muted);border-right:1px solid var(--color-border-default);">
  <!-- Logo -->
  <!-- Nav items — active: bg:#e5e7eb; color:#42389d; aria-current="page" -->
</aside>`,
        language: 'html',
      },
    },
  },
  render: () => `
    <div style="height:100vh;display:flex;">
      ${sidebar({ showLogo: true, activeItem: 'overview', financialExpanded: true })}
    </div>
  `,
};

/* ─────────────────────────────────────────────
   ACTIVE STATES — each item active
───────────────────────────────────────────── */
/**
 * All active states — shows each menu item in its selected state.
 */
export const ActiveStates = {
  name: 'Active states — all items',
  parameters: {
    docs: {
      description: {
        story: 'Each sidebar item shown in its active state. Use to verify color (#42389d) and background (#e5e7eb) are applied correctly.',
      },
      source: {
        language: 'html',
        code: `<!-- Active menu item: bg #e5e7eb, text #42389d, aria-current="page" -->
<a href="#" aria-current="page"
   style="display:flex;align-items:center;gap:4px;height:40px;padding:6px 8px;
          border-radius:8px;background:#e5e7eb;width:100%;box-sizing:border-box;text-decoration:none;">
  <!-- icon: 24×24, color #42389d -->
  <span style="font-family:inherit;font-size:var(--text-base);font-weight:var(--font-medium);line-height:1.5;color:#42389d;">Overview</span>
</a>

<!-- Inactive menu item: no background, text #111928 -->
<a href="#"
   style="display:flex;align-items:center;gap:4px;height:40px;padding:6px 8px;
          border-radius:8px;width:100%;box-sizing:border-box;text-decoration:none;">
  <!-- icon: 24×24, color #111928 -->
  <span style="font-family:inherit;font-size:var(--text-base);font-weight:var(--font-medium);line-height:1.5;color:#111928;">Metrics Library</span>
</a>`,
      },
    },
  },
  render: () => `
    <div style="display:flex;gap:16px;flex-wrap:wrap;padding:16px;background:var(--color-bg-default);">
      ${['overview','metrics','pnl','budget','cohorts','cashflow','financial','help'].map(item => `
        <div>
          <p style="font:10px/1 600 sans-serif;text-transform:uppercase;letter-spacing:.08em;color:#9CA3AF;margin:0 0 8px;">${item}</p>
          ${sidebar({ showLogo: false, activeItem: item, financialExpanded: false })}
        </div>
      `).join('')}
    </div>
  `,
};

/* ─────────────────────────────────────────────
   COLLAPSED — Financial model collapsed
───────────────────────────────────────────── */
/**
 * Financial model section collapsed — chevron points down.
 */
export const Collapsed = {
  name: 'Financial model — collapsed',
  parameters: {
    docs: {
      description: {
        story: 'Financial model sub-menu collapsed. Chevron points down. Sub-items hidden.',
      },
      source: {
        language: 'html',
        code: `<!-- Expandable menu item — collapsed state: chevron-down, sub-items hidden -->
<div style="display:flex;align-items:center;gap:4px;height:40px;padding:6px 8px;
            border-radius:8px;cursor:pointer;width:100%;box-sizing:border-box;">
  <div style="display:flex;flex:1;gap:4px;align-items:center;">
    <!-- icon: currency-dollar, 24×24, color #111928 -->
    <span style="font-family:inherit;font-size:var(--text-base);font-weight:var(--font-medium);line-height:1.5;color:#111928;">Financial model</span>
  </div>
  <!-- chevron-down when collapsed, chevron-up when expanded -->
  <!-- svg chevron-down here -->
</div>
<!-- Sub-items: rendered when expanded=true, hidden when collapsed -->
<!-- <div style="padding-left:28px;"> sub-item rows </div> -->`,
      },
    },
  },
  render: () => `
    <div style="height:100vh;display:flex;">
      ${sidebar({ showLogo: true, activeItem: 'financial', financialExpanded: false })}
    </div>
  `,
};

/* ─────────────────────────────────────────────
   NO LOGO
───────────────────────────────────────────── */
/**
 * Sidebar without the logo area — used when logo is rendered in a top bar instead.
 */
/* ─────────────────────────────────────────────
   MENU ITEM STATES — all 8 from node 9263:160845
───────────────────────────────────────────── */
export const MenuItemStates = {
  name: 'Menu item states — all variants',
  parameters: {
    controls: { include: [] },
    docs: {
      description: {
        story: `
All 8 menu item states from Figma component set \`9263:160845\`.

| Type | Selected | Expanded | bg | text | icon | chevron |
|---|---|---|---|---|---|---|
| Primary | ✅ | — | \`#e5e7eb\` | \`#42389d\` | \`#42389d\` | — |
| Primary | ❌ | — | transparent | \`#111928\` | \`#6b7280\` | — |
| Expandable | ✅ | ❌ | \`#e5e7eb\` | \`#42389d\` | \`#42389d\` | down · \`#1f2a37\` |
| Expandable | ❌ | ❌ | transparent | \`#111928\` | \`#6b7280\` | down · \`#1f2a37\` |
| Expandable | ✅ | ✅ | \`#e5e7eb\` | \`#42389d\` | \`#42389d\` | up · \`#1f2a37\` |
| Expandable | ❌ | ✅ | transparent | \`#111928\` | \`#6b7280\` | up · \`#1f2a37\` |
| Secondary | ✅ | — | \`#e5e7eb\` | \`#42389d\` | — | — |
| Secondary | ❌ | — | transparent | \`#111928\` | — | — |
        `.trim(),
      },
      source: {
        language: 'html',
        code: `<!-- Primary — Selected (active) -->
<div style="display:flex;align-items:center;gap:4px;height:40px;padding:6px 8px;
            border-radius:8px;background:#e5e7eb;width:220px;box-sizing:border-box;">
  <span style="color:#42389d;"><!-- icon 24×24 --></span>
  <span style="font:500 16px/1.5 Inter,sans-serif;color:#42389d;">Label</span>
</div>

<!-- Primary — Default -->
<div style="display:flex;align-items:center;gap:4px;height:40px;padding:6px 8px;
            border-radius:8px;width:220px;box-sizing:border-box;">
  <span style="color:var(--color-text-secondary);"><!-- icon 24×24 --></span>
  <span style="font:500 16px/1.5 Inter,sans-serif;color:#111928;">Label</span>
</div>

<!-- Expandable — Selected, Collapsed -->
<div style="display:flex;align-items:center;gap:4px;height:40px;padding:6px 8px;
            border-radius:8px;background:#e5e7eb;width:220px;box-sizing:border-box;">
  <div style="display:flex;flex:1;gap:4px;align-items:center;">
    <span style="color:#42389d;"><!-- icon 24×24 --></span>
    <span style="font:500 16px/1.5 Inter,sans-serif;color:#42389d;">Label</span>
  </div>
  <span style="color:#1f2a37;"><!-- chevron-down --></span>
</div>

<!-- Secondary — Selected (sub-item, 28px indent) -->
<div style="padding-left:28px;">
  <div style="display:flex;align-items:center;height:40px;padding:6px 8px;
              border-radius:8px;background:#e5e7eb;width:192px;box-sizing:border-box;">
    <span style="font:500 16px/1.5 Inter,sans-serif;color:#42389d;">Sub-item</span>
  </div>
</div>`,
      },
    },
  },
  render: () => {
    const labeledItem = (label, html) => `
      <div style="display:flex;flex-direction:column;gap:4px;">
        <div style="font:10px/1 600 ui-monospace,monospace;color:#9ca3af;text-transform:uppercase;letter-spacing:.06em;">${label}</div>
        <div style="background:var(--color-bg-default);padding:8px;border-radius:8px;">${html}</div>
      </div>`;

    return `
      <div style="padding:24px;display:grid;grid-template-columns:repeat(2,1fr);gap:16px;max-width:600px;">
        ${labeledItem('Primary — Selected', menuItem({ icon: icons.viewGrid, label: 'Overview', active: true }))}
        ${labeledItem('Primary — Default', menuItem({ icon: icons.viewGrid, label: 'Overview', active: false }))}
        ${labeledItem('Expandable — Selected, Collapsed', menuItem({ icon: icons.currencyDollar, label: 'Financial model', active: true, expandable: true, expanded: false }))}
        ${labeledItem('Expandable — Default, Collapsed', menuItem({ icon: icons.currencyDollar, label: 'Financial model', active: false, expandable: true, expanded: false }))}
        ${labeledItem('Expandable — Selected, Expanded', menuItem({ icon: icons.currencyDollar, label: 'Financial model', active: true, expandable: true, expanded: true }))}
        ${labeledItem('Expandable — Default, Expanded', menuItem({ icon: icons.currencyDollar, label: 'Financial model', active: false, expandable: true, expanded: true }))}
        ${labeledItem('Secondary — Selected', subItem({ label: 'Income Statement', active: true }))}
        ${labeledItem('Secondary — Default', subItem({ label: 'Income Statement', active: false }))}
      </div>`;
  },
};

/* ─────────────────────────────────────────────
   COLOR VARIANTS — White vs Gray (light theme)
───────────────────────────────────────────── */
export const ColorVariants = {
  name: 'Color variants — White vs Gray',
  parameters: {
    controls: { include: [] },
    docs: {
      description: {
        story: `
Both light-mode color variants side-by-side from Figma component set \`1057:2041\`.

- **Color=Gray** (\`#f3f4f6\`) — default; use on white page backgrounds
- **Color=White** (\`#ffffff\`) — use when the sidebar sits on an already-light or gray page background

Both use identical menu item tokens and the same \`#e5e7eb\` right border.
        `.trim(),
      },
      source: {
        language: 'html',
        code: `<!-- Color=Gray (default) -->
<aside style="width:256px;background:var(--color-bg-muted);border-right:1px solid var(--color-border-default);">...</aside>

<!-- Color=White -->
<aside style="width:256px;background:#ffffff;border-right:1px solid #e5e7eb;">...</aside>`,
      },
    },
  },
  render: () => `
    <div style="height:100vh;display:flex;gap:0;">
      <div>
        <div style="padding:8px 12px;font:11px/1.5 600 ui-monospace,monospace;color:var(--color-text-secondary);background:var(--color-bg-default);border-bottom:1px solid #e5e7eb;">Color=Gray · #f3f4f6</div>
        ${sidebar({ showLogo: true, activeItem: 'overview', financialExpanded: true, color: 'gray' })}
      </div>
      <div>
        <div style="padding:8px 12px;font:11px/1.5 600 ui-monospace,monospace;color:var(--color-text-secondary);background:var(--color-bg-default);border-bottom:1px solid #e5e7eb;">Color=White · #ffffff</div>
        ${sidebar({ showLogo: true, activeItem: 'overview', financialExpanded: true, color: 'white' })}
      </div>
    </div>
  `,
};

/* ─────────────────────────────────────────────
   CONTRACTED — icon-only 60px variant
───────────────────────────────────────────── */
export const ContractedSidebar = {
  name: 'Contracted — icon only (60px)',
  parameters: {
    controls: { include: [] },
    docs: {
      description: {
        story: `
Contracted sidebar — Figma node \`1060:44\` (\`Type=Contracted, Icons=True, Color=White\`).
Width: **60px**. Background: **#ffffff** — intentionally different from the expanded sidebar's \`#f3f4f6\`.

Hover any icon to see its label. All buttons carry \`aria-label\` for keyboard and screen reader access.

Active item: **40×40px** centered square, bg \`#f3f4f6\`, radius 8px, icon \`#1f2a37\`.
Inactive: **60×32px** full width, transparent bg, icon \`#6b7280\`.

**✅ Do** — always include \`aria-label\` and \`title\` on icon-only buttons.
**✅ Do** — keep the right border (1px \`#e5e7eb\`) — it is the only visual separator from page content.
**❌ Don't** — use \`#f3f4f6\` as the contracted sidebar background — Figma spec is \`#ffffff\`.
**❌ Don't** — increase the width beyond 60px — the contracted state is intentionally compact.
        `.trim(),
      },
      source: {
        language: 'html',
        code: `<!-- Contracted sidebar: 60px wide, white bg, icon-only -->
<aside style="width:60px;height:100vh;background:#ffffff;
              border-right:1px solid #e5e7eb;
              display:flex;flex-direction:column;
              padding-top:16px;box-sizing:border-box;">

  <!-- First section (gap 16px) -->
  <nav style="display:flex;flex-direction:column;gap:16px;padding-bottom:12px;">

    <!-- Active: 40×40 centered, bg #f3f4f6, radius 8px, icon #1f2a37 -->
    <button aria-label="Overview" aria-current="page" title="Overview"
            style="width:40px;height:40px;margin:0 auto;background:var(--color-bg-muted);
                   border-radius:8px;border:none;display:flex;
                   align-items:center;justify-content:center;color:#1f2a37;cursor:pointer;">
      <!-- chart-pie icon 24×24 -->
    </button>

    <!-- Inactive: 60×32 full width, transparent, icon #6b7280 -->
    <button aria-label="Metrics Library" title="Metrics Library"
            style="width:60px;height:32px;background:transparent;border:none;
                   display:flex;align-items:center;justify-content:center;
                   color:var(--color-text-secondary);cursor:pointer;">
      <!-- document-report icon 24×24 -->
    </button>

  </nav>

  <div style="height:1px;background:#e5e7eb;"></div>

  <!-- Second section (gap 8px, padding 12px top/bottom) -->
  <nav style="display:flex;flex-direction:column;gap:8px;padding:12px 0;">
    <!-- clipboard-list, collection, support icons -->
  </nav>

  <div style="height:1px;background:#e5e7eb;"></div>

  <!-- Bottom section (gap 8px, padding 12px top/bottom) -->
  <nav style="display:flex;flex-direction:column;gap:8px;padding:12px 0;">
    <!-- adjustments, globe, cog icons -->
  </nav>

</aside>`,
      },
    },
  },
  render: () => `
    <div style="height:100vh;display:flex;">
      ${contractedSidebar({ activeKey: 'chartPie' })}
    </div>
  `,
};

export const NoLogo = {
  name: 'Without logo',
  parameters: {
    docs: {
      description: {
        story: 'Sidebar without the logo area — use when the Iris logo is already rendered in a top bar. Nav items start from the top with no additional padding.',
      },
      source: {
        language: 'html',
        code: `<!-- Sidebar without logo: omit the logo div entirely; nav starts at top -->
<aside style="width:256px;height:100vh;background:var(--color-bg-muted);border-right:1px solid var(--color-border-default);
              display:flex;flex-direction:column;gap:24px;box-sizing:border-box;">
  <!-- No logo area -->
  <nav style="display:flex;flex-direction:column;gap:8px;padding:24px 8px 0 28px;">
    <!-- Menu items here -->
  </nav>
</aside>`,
      },
    },
  },
  render: () => `
    <div style="height:100vh;display:flex;">
      ${sidebar({ showLogo: false, activeItem: 'overview', financialExpanded: true })}
    </div>
  `,
};

/* ─────────────────────────────────────────────
   CONTRACTED WITH LOGO — icon-only 60px + Iris mark
   Figma: node 12688:49221 (Type=Contracted, Icons=True, Color=White, Logo=True)
───────────────────────────────────────────── */

// ─── Contracted-with-logo builder ────────────────────────────────────────────
// Identical to contractedSidebar() but adds the 24px Iris mark at the top.
// Logo frame: 60×24px, centered, padding-top 16px (from Content frame).

function contractedSidebarWithLogo({ activeKey = 'chartPie' } = {}) {
  const firstMenu = [
    { key: 'chartPie',      icon: icons.chartPie,      label: 'Overview' },
    { key: 'documentReport',icon: icons.documentReport, label: 'Metrics Library' },
    { key: 'shoppingBag',   icon: icons.shoppingBag,   label: 'Orders' },
    { key: 'inboxIn',       icon: icons.inboxIn,       label: 'Inbox' },
    { key: 'lockClosed',    icon: icons.lockClosed,    label: 'Security' },
  ];
  const secondMenu = [
    { key: 'clipboardList', icon: icons.clipboardList, label: 'Reports' },
    { key: 'collection',    icon: icons.collection,    label: 'Collections' },
    { key: 'support',       icon: icons.support,       label: 'Support' },
  ];
  const bottomMenu = [
    { key: 'adjustments',   icon: icons.adjustments,   label: 'Adjustments' },
    { key: 'globe',         icon: icons.globe,         label: 'Language' },
    { key: 'cog',           icon: icons.cog,           label: 'Settings' },
  ];

  const section = (items, gap, paddingTop = '0', paddingBottom = '0') => `
    <div style="display:flex;flex-direction:column;gap:${gap}px;padding:${paddingTop}px 0 ${paddingBottom}px;">
      ${items.map(item => contractedItem({ ...item, active: item.key === activeKey })).join('')}
    </div>`;

  const sep = () => `<div style="height:1px;background:#e5e7eb;flex-shrink:0;"></div>`;

  return `
    <div style="
      width:60px;height:100%;min-height:600px;
      background:#ffffff;
      border-right:1px solid #e5e7eb;
      display:flex;flex-direction:column;
      padding-top:16px;box-sizing:border-box;
    ">
      <!-- Logo: Iris mark xs (24×24px), centered -->
      <div style="width:60px;height:24px;display:flex;align-items:center;justify-content:center;margin-bottom:16px;flex-shrink:0;">
        ${irisMarkImg({ size: 'xs' })}
      </div>

      ${section(firstMenu, 16, 0, 12)}
      ${sep()}
      ${section(secondMenu, 8, 12, 12)}
      ${sep()}
      ${section(bottomMenu, 8, 12, 12)}
    </div>`;
}

export const ContractedWithLogo = {
  name: 'Contracted — with logo (60px)',
  parameters: {
    controls: { include: [] },
    docs: {
      description: {
        story: `
Contracted sidebar with Iris mark — Figma node \`12688:49221\` (\`Type=Contracted, Icons=True, Color=White, Logo=True\`).

Same 60px width and icon-only layout as the logo-less variant, but adds the **24×24px Iris hexagonal mark** at the top.

Use this variant when the contracted sidebar is the only navigation element on the page and there is no separate top bar to display the brand mark.

**✅ Do** — show the Iris mark when no top bar is present.
**❌ Don't** — show both the mark here AND a full logo in a top bar — duplicate branding.
        `.trim(),
      },
      source: {
        language: 'html',
        code: `<!-- Contracted sidebar with logo mark: 60px wide, white bg -->
<aside style="width:60px;height:100vh;background:#ffffff;
              border-right:1px solid #e5e7eb;
              display:flex;flex-direction:column;
              padding-top:16px;box-sizing:border-box;">

  <!-- Iris mark xs (24×24px), centered -->
  <div style="width:60px;height:24px;display:flex;align-items:center;justify-content:center;margin-bottom:16px;">
    <img src="./assets/iris-mark-xs.svg" height="24" alt="Iris mark" />
  </div>

  <!-- Nav sections: same structure as logo-less contracted sidebar -->
  <nav style="display:flex;flex-direction:column;gap:16px;padding-bottom:12px;">
    <!-- Active icon: 40×40 centered, bg #f3f4f6, r=8px, icon #1f2a37 -->
    <!-- Inactive icon: 60×32 full-width, transparent, icon #6b7280 -->
  </nav>

  <div style="height:1px;background:#e5e7eb;"></div>
  <!-- Second and bottom nav sections... -->
</aside>`,
      },
    },
  },
  render: () => `
    <div style="height:100vh;display:flex;">
      ${contractedSidebarWithLogo({ activeKey: 'chartPie' })}
    </div>
  `,
};

/* ─────────────────────────────────────────────
   IN CONTEXT — full-page layout
   Figma: node 17:40413 (Example frame — sidebar + content)
───────────────────────────────────────────── */
export const InContext = {
  name: 'In context — full page layout',
  parameters: {
    controls: { include: [] },
    docs: {
      description: {
        story: `
Full-page layout example — Figma node \`17:40413\`.

Shows the expanded sidebar alongside a typical dashboard content area. Use this to verify the sidebar integrates correctly with the page background and content layout.

**✅ Do** — pair the \`Color=Gray\` sidebar with a white (\`#ffffff\`) page background.
**❌ Don't** — set the page background to the same \`#f3f4f6\` as the sidebar — they will visually merge.
        `.trim(),
      },
      source: {
        language: 'html',
        code: `<!-- Full-page layout -->
<div style="display:flex;height:100vh;">
  <!-- Sidebar: 256px, bg #f3f4f6 -->
  <aside style="width:256px;flex-shrink:0;"><!-- sidebar --></aside>

  <!-- Page content: fills remaining width, white bg -->
  <main style="flex:1;background:#ffffff;padding:24px;overflow:auto;">
    <!-- Dashboard content -->
  </main>
</div>`,
      },
    },
  },
  render: () => `
    <div style="display:flex;height:100vh;background:#ffffff;">
      ${sidebar({ showLogo: true, activeItem: 'overview', financialExpanded: true, color: 'gray' })}
      <main style="
        flex:1;background:#ffffff;padding:24px;overflow:auto;
        display:flex;flex-direction:column;gap:16px;
      ">
        <div style="font:600 20px/1.4 inherit;color:#111928;">Overview</div>
        <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:16px;">
          ${['Monthly revenue', 'Active users', 'New signups'].map((label, i) => `
            <div style="background:var(--color-bg-default);border:1px solid var(--color-border-default);border-radius:8px;padding:20px;">
              <div style="font:400 12px/1.5 inherit;color:var(--color-text-secondary);margin-bottom:4px;">${label}</div>
              <div style="font:600 24px/1.2 inherit;color:#111928;">${['$48,200', '12,480', '1,240'][i]}</div>
              <div style="font:400 12px/1.5 inherit;color:#0e9f6e;margin-top:4px;">${['+8.2%', '+4.1%', '+12.5%'][i]} vs last month</div>
            </div>
          `).join('')}
        </div>
        <div style="background:var(--color-bg-default);border:1px solid var(--color-border-default);border-radius:8px;padding:20px;flex:1;">
          <div style="font:600 14px/1.5 inherit;color:#111928;margin-bottom:12px;">Recent activity</div>
          ${[
            ['Q1 Financial Model updated', '2 hours ago'],
            ['Budget approved', 'Yesterday'],
            ['New cohort created', '3 days ago'],
          ].map(([text, time]) => `
            <div style="display:flex;justify-content:space-between;padding:8px 0;border-bottom:1px solid #e5e7eb;">
              <span style="font:400 14px/1.5 inherit;color:#111928;">${text}</span>
              <span style="font:400 12px/1.5 inherit;color:#9ca3af;">${time}</span>
            </div>
          `).join('')}
        </div>
      </main>
    </div>
  `,
};
