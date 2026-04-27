/**
 * Iris Library — Navigation / Sidebar
 *
 * Source: Figma › Iris Library › Sidebar (node 1057:2041)
 * Light variant: node 9272:163206 (Type=Default, Color=White/Gray, Icons=True, Logo=True)
 * Menu item:     node 9263:160934
 *
 * ## Variants
 * | Type      | Color | Icons | Logo |
 * |-----------|-------|-------|------|
 * | Default   | Light | Yes   | Yes  |
 * | Default   | Light | Yes   | No   |
 * | Contracted| Light | Yes   | Yes  |
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
 * - Width: 256px (expanded), 60px (contracted)
 * - Menu item height: 40px
 * - Border-radius on items: 8px
 * - Logo: Iris mark xs (24px) + wordmark, or sm (32px) standalone
 * - Active item: bg #e5e7eb, text #42389d
 * - Sub-items: 28px left indent, no icon
 * - Divider: 1px #e5e7eb full width
 */

import { irisLogo } from './brand-assets.js';

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

  return `
    <div style="${menuItemStyles.base}${bg}">
      <div style="display:flex;flex:1;gap:4px;align-items:center;min-width:0;">
        ${icon ? `<span style="flex-shrink:0;width:24px;height:24px;color:${textColor};display:flex;align-items:center;">${icon}</span>` : ''}
        <span style="font:500 16px/1.5 var(--font-family-base,Inter,sans-serif);color:${textColor};white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">${label}</span>
      </div>
      ${expandable ? `<span style="flex-shrink:0;color:${textColor};">${expanded ? icons.chevronUp : icons.chevronDown}</span>` : ''}
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

// ─── Sidebar builder ─────────────────────────────────────────────────────────

function sidebar({ showLogo = true, activeItem = 'overview', financialExpanded = true } = {}) {
  return `
    <div style="
      background:var(--color-bg-tertiary,#f3f4f6);
      border-right:1px solid var(--color-border-base,#e5e7eb);
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
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `
Iris left sidebar navigation — light theme.

**Source:** Figma node \`1057:2041\` — Sidebar component.

### Variants
| Type | Color | Icons | Logo |
|------|-------|-------|------|
| Default | Light (gray/100 bg) | Yes | Yes |
| Default | Light | Yes | No |
| Contracted | Light | Yes | Yes |

### Anatomy
- **Logo** — Iris mark + wordmark (top)
- **Menu item** — icon (24px) + label + optional chevron
- **Sub-item** — indented label, no icon (28px left padding)
- **Divider** — 1px separator
- **Bottom section** — Settings, Help

### Tokens
- Background: \`var(--color-bg-tertiary)\` (#f3f4f6)
- Border: \`var(--color-border-base)\` (#e5e7eb)
- Active text: \`#42389d\` (brand/800)
- Active bg: \`var(--color-bg-quaternary)\` (#e5e7eb)
- Default text: \`var(--color-text-heading)\` (#111928)

### QA checklist
- Sidebar width: 256px
- Menu item height: 40px, border-radius: 8px
- Active item: bg #e5e7eb, text #42389d
- Sub-items: 28px left indent, no icon
- Logo: Iris mark sm (32px) + "Iris" wordmark
        `,
      },
    },
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
export const Default = {
  name: 'Default — light, logo, overview active',
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
    },
  },
  render: () => `
    <div style="display:flex;gap:16px;flex-wrap:wrap;padding:16px;background:#f9fafb;">
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
export const NoLogo = {
  name: 'Without logo',
  render: () => `
    <div style="height:100vh;display:flex;">
      ${sidebar({ showLogo: false, activeItem: 'overview', financialExpanded: true })}
    </div>
  `,
};
