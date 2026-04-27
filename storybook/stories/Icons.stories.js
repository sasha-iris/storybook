/**
 * Iris Library — Icons
 *
 * Only the icons that are actually used in existing Storybook components.
 * No extras. No speculative additions.
 *
 * Sources:
 * - card-icons.js         → Card / KPI icon badges
 * - CardLayouts.stories.js → Inline icons (check-circle, star, chevron, dots, mail)
 * - CardKPI.stories.js     → Trend arrows (up, down, neutral)
 * - Sidebar.stories.js     → Navigation icons
 */

import { ICON } from './card-icons.js';

// ─── Inline icons from CardLayouts ──────────────────────────────────────────

const checkCircleBlue = `<svg width="20" height="20" viewBox="0 0 20 20" fill="#155dfc" aria-hidden="true"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/></svg>`;
const checkCircleGray = `<svg width="20" height="20" viewBox="0 0 20 20" fill="#9ca3af" aria-hidden="true"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/></svg>`;
const star = `<svg width="20" height="20" viewBox="0 0 20 20" fill="#FFDF20" aria-hidden="true"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>`;
const chevronRight = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="#155dfc" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M7.5 5l5 5-5 5"/></svg>`;
const dotsHorizontal = `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#6b7280" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/><circle cx="5" cy="12" r="1"/></svg>`;
const questionMark = `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#6b7280" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 015.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>`;
const mail = `<svg width="16" height="16" viewBox="0 0 20 20" fill="#6b7280" aria-hidden="true"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/></svg>`;

// ─── Trend icons from CardKPI ────────────────────────────────────────────────

const trendUp = (color = '#0E9F6E') => `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 12L6 8L9 11L14 4" stroke="${color}" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M10 4H14V8" stroke="${color}" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
const trendDown = (color = '#E02424') => `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 4L6 8L9 5L14 12" stroke="${color}" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M10 12H14V8" stroke="${color}" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
const trendNeutral = (color = '#6B7280') => `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 8H14" stroke="${color}" stroke-width="1.5" stroke-linecap="round"/><path d="M10 4L14 8L10 12" stroke="${color}" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`;

// ─── Sidebar navigation icons ────────────────────────────────────────────────

const sidebarIcons = {
  viewGrid: `<svg width="24" height="24" fill="none" viewBox="0 0 24 24"><path d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zm8 0a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 14a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zm8 0a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" fill="currentColor"/></svg>`,
  documentReport: `<svg width="24" height="24" fill="none" viewBox="0 0 24 24"><path fill-rule="evenodd" clip-rule="evenodd" d="M6 2a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6H6zm7 1.5V8h4.5L13 3.5zM8 13a1 1 0 011-1h6a1 1 0 110 2H9a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H9z" fill="currentColor"/></svg>`,
  chartPie: `<svg width="24" height="24" fill="none" viewBox="0 0 24 24"><path d="M11 2a9 9 0 00-9 9 9 9 0 009 9 9 9 0 009-9h-9V2z" fill="currentColor"/><path d="M13 2v7h7a9 9 0 00-7-7z" fill="currentColor"/></svg>`,
  creditCard: `<svg width="24" height="24" fill="none" viewBox="0 0 24 24"><path d="M4 4h16a2 2 0 012 2v12a2 2 0 01-2 2H4a2 2 0 01-2-2V6a2 2 0 012-2zm0 5h16v2H4V9zm2 5h4v2H6v-2z" fill="currentColor"/></svg>`,
  viewGridAdd: `<svg width="24" height="24" fill="none" viewBox="0 0 24 24"><path d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zm8 0a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 14a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zm11-1a1 1 0 10-2 0v2h-2a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2v-2z" fill="currentColor"/></svg>`,
  presentationChart: `<svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="13" rx="1"/><path d="M8 21h8M12 17v4"/><path d="M7 9l3 3 2-2 3-3" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  currencyDollar: `<svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M12 2v2m0 16v2M8 6.268A4 4 0 0112 6c2.21 0 4 1.343 4 3s-1.79 3-4 3-4 1.343-4 3 1.79 3 4 3a4 4 0 004-1.268"/></svg>`,
  cog: `<svg width="24" height="24" fill="none" viewBox="0 0 24 24"><path fill-rule="evenodd" clip-rule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM12 15a3 3 0 100-6 3 3 0 000 6z" fill="currentColor"/></svg>`,
  help: `<svg width="24" height="24" fill="none" viewBox="0 0 24 24"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z" fill="currentColor"/></svg>`,
  chevronUp: `<svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 15l-6-6-6 6"/></svg>`,
  chevronDown: `<svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9l6 6 6-6"/></svg>`,
};

// ─── Renderer ────────────────────────────────────────────────────────────────

function iconGrid(items) {
  return `
    <div style="display:flex;flex-wrap:wrap;gap:24px;align-items:flex-start;">
      ${items.map(([name, svg, bg = '#fff']) => `
        <div style="display:flex;flex-direction:column;align-items:center;gap:8px;width:80px;">
          <div style="width:48px;height:48px;background:${bg};border:1px solid #e5e7eb;border-radius:8px;display:flex;align-items:center;justify-content:center;">
            ${svg}
          </div>
          <span style="font:11px/1.3 sans-serif;color:#6b7280;text-align:center;word-break:break-word;">${name}</span>
        </div>
      `).join('')}
    </div>
  `;
}

// ─── Stories ─────────────────────────────────────────────────────────────────

export default {
  title: 'Iris Library/Icons',
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `
Icons used in the Iris Library Storybook components.

**Only icons that appear in existing components are listed here.**
No extras, no speculative additions.

| Set | Used in |
|-----|---------|
| Card badge icons | Card/KPI, Card/Reporting |
| Inline card icons | Card/Layouts (check-circle, star, chevron, dots, mail) |
| Trend icons | Card/KPI (trend up, down, neutral) |
| Sidebar nav icons | Navigation/Sidebar |
        `,
      },
    },
  },
};

/* ─────────────────────────────────────────────
   CARD BADGE ICONS
───────────────────────────────────────────── */
export const CardBadgeIcons = {
  name: 'Card badge icons — used in KPI & Reporting cards',
  parameters: {
    docs: {
      description: {
        story: 'From `card-icons.js`. Used inside `.card-icon` badge containers (40×40px). Import via `import { ICON } from \'./card-icons.js\'`.',
      },
    },
  },
  render: () => iconGrid([
    ['revenue', ICON.revenue],
    ['users', ICON.users],
    ['bag', ICON.bag],
    ['chart', ICON.chart],
    ['trendDn', ICON.trendDn],
    ['clock', ICON.clock],
    ['chat', ICON.chat],
    ['eye', ICON.eye],
    ['palette', ICON.palette],
    ['squares', ICON.squares],
    ['shield', ICON.shield],
    ['warning', ICON.warning],
    ['undo', ICON.undo],
    ['inbox', ICON.inbox],
    ['xCircle', ICON.xCircle],
    ['wifiOff', ICON.wifiOff],
  ]),
};

/* ─────────────────────────────────────────────
   INLINE CARD ICONS
───────────────────────────────────────────── */
export const InlineCardIcons = {
  name: 'Inline icons — used in Card/Layouts',
  parameters: {
    docs: {
      description: {
        story: 'Inline SVG icons used inside CardLayouts stories. Not imported from a shared file — embedded directly in story markup.',
      },
    },
  },
  render: () => iconGrid([
    ['check-circle (active)', checkCircleBlue],
    ['check-circle (disabled)', checkCircleGray],
    ['star', star],
    ['chevron-right', chevronRight],
    ['dots-horizontal', dotsHorizontal],
    ['question-mark', questionMark],
    ['mail / envelope', mail],
  ]),
};

/* ─────────────────────────────────────────────
   TREND ICONS
───────────────────────────────────────────── */
export const TrendIcons = {
  name: 'Trend icons — used in Card/KPI',
  parameters: {
    docs: {
      description: {
        story: 'Trend direction icons (16px) used in KPI card trend badges. Color is passed as a parameter.',
      },
    },
  },
  render: () => `
    <div style="display:flex;flex-wrap:wrap;gap:24px;">
      <div style="display:flex;flex-direction:column;align-items:center;gap:8px;">
        <div style="width:48px;height:48px;background:#f0fdf4;border:1px solid #e5e7eb;border-radius:8px;display:flex;align-items:center;justify-content:center;">
          ${trendUp()}
        </div>
        <span style="font:11px/1.3 sans-serif;color:#6b7280;text-align:center;">trend up<br>#0E9F6E</span>
      </div>
      <div style="display:flex;flex-direction:column;align-items:center;gap:8px;">
        <div style="width:48px;height:48px;background:#fef2f2;border:1px solid #e5e7eb;border-radius:8px;display:flex;align-items:center;justify-content:center;">
          ${trendDown()}
        </div>
        <span style="font:11px/1.3 sans-serif;color:#6b7280;text-align:center;">trend down<br>#E02424</span>
      </div>
      <div style="display:flex;flex-direction:column;align-items:center;gap:8px;">
        <div style="width:48px;height:48px;background:#f9fafb;border:1px solid #e5e7eb;border-radius:8px;display:flex;align-items:center;justify-content:center;">
          ${trendNeutral()}
        </div>
        <span style="font:11px/1.3 sans-serif;color:#6b7280;text-align:center;">trend neutral<br>#6B7280</span>
      </div>
    </div>
  `,
};

/* ─────────────────────────────────────────────
   SIDEBAR NAV ICONS
───────────────────────────────────────────── */
export const SidebarIcons = {
  name: 'Sidebar nav icons — used in Navigation/Sidebar',
  parameters: {
    docs: {
      description: {
        story: 'Navigation icons used in the Sidebar component (24px, Heroicons style). Embedded inline in `Sidebar.stories.js`.',
      },
    },
  },
  render: () => iconGrid(
    Object.entries(sidebarIcons).map(([name, svg]) => [
      name,
      `<span style="color:#42389d;">${svg}</span>`,
    ])
  ),
};
