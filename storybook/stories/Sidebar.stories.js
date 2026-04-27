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

// ─── Icon helpers (Heroicons v1 outline, 24px viewBox) ───────────────────────

const icons = {
  viewGrid: `<svg width="24" height="24" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zm8 0a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 14a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zm8 0a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" fill="currentColor"/>
  </svg>`,

  documentReport: `<svg width="24" height="24" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M6 2a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6H6zm7 1.5V8h4.5L13 3.5zM8 13a1 1 0 011-1h6a1 1 0 110 2H9a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H9z" fill="currentColor"/>
  </svg>`,

  chartPie: `<svg width="24" height="24" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M11 2a9 9 0 00-9 9 9 9 0 009 9 9 9 0 009-9h-9V2z" fill="currentColor"/>
    <path d="M13 2v7h7a9 9 0 00-7-7z" fill="currentColor"/>
  </svg>`,

  creditCard: `<svg width="24" height="24" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M4 4h16a2 2 0 012 2v12a2 2 0 01-2 2H4a2 2 0 01-2-2V6a2 2 0 012-2zm0 5h16v2H4V9zm2 5h4v2H6v-2z" fill="currentColor"/>
  </svg>`,

  viewGridAdd: `<svg width="24" height="24" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zm8 0a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 14a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zm11-1a1 1 0 10-2 0v2h-2a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2v-2z" fill="currentColor"/>
  </svg>`,

  presentationChart: `<svg width="24" height="24" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M2 3a1 1 0 011-1h18a1 1 0 110 2H3a1 1 0 01-1-1zm2 4a1 1 0 011-1h14a1 1 0 011 1v8a1 1 0 01-1 1H5a1 1 0 01-1-1V7zm3 1v6h10V8H7zm1 4l2-2 2 2 3-3" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
    <path d="M10 19l2 2 2-2" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>`,

  currencyDollar: `<svg width="24" height="24" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2v2m0 16v2M8 6.268A4 4 0 0112 6c2.21 0 4 1.343 4 3s-1.79 3-4 3-4 1.343-4 3 1.79 3 4 3a4 4 0 004-1.268" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
  </svg>`,

  cog: `<svg width="24" height="24" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM12 15a3 3 0 100-6 3 3 0 000 6z" fill="currentColor"/>
  </svg>`,

  help: `<svg width="24" height="24" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z" fill="currentColor"/>
  </svg>`,

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
        ${menuItem({ icon: icons.presentationChart, label: '13-week Cash Flow', active: activeItem === 'cashflow' })}
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
        ${menuItem({ icon: icons.cog, label: 'Settings', active: activeItem === 'settings' })}
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
      ${['overview','metrics','pnl','budget','cohorts','cashflow','financial','settings','help'].map(item => `
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
