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

// Sidebar icons — Heroicons v1 solid (viewBox 0 0 20 20), displayed at 24px
const sidebarIcons = {
  viewGrid: `<svg width="24" height="24" viewBox="0 0 20 20" fill="currentColor"><path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM13 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2h-2z"/></svg>`,
  documentReport: `<svg width="24" height="24" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm2 10a1 1 0 10-2 0v3a1 1 0 102 0v-3zm2-3a1 1 0 011 1v5a1 1 0 11-2 0v-5a1 1 0 011-1zm4-1a1 1 0 10-2 0v7a1 1 0 102 0V8z" clip-rule="evenodd"/></svg>`,
  chartPie: `<svg width="24" height="24" viewBox="0 0 20 20" fill="currentColor"><path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"/><path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"/></svg>`,
  creditCard: `<svg width="24" height="24" viewBox="0 0 20 20" fill="currentColor"><path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z"/><path fill-rule="evenodd" d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 000 2h1a1 1 0 100-2H9z" clip-rule="evenodd"/></svg>`,
  viewGridAdd: `<svg width="24" height="24" viewBox="0 0 20 20" fill="currentColor"><path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM14 11a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1v-1z"/></svg>`,
  presentationChartLine: `<svg width="24" height="24" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/></svg>`,
  currencyDollar: `<svg width="24" height="24" viewBox="0 0 20 20" fill="currentColor"><path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z"/><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clip-rule="evenodd"/></svg>`,
  help: `<svg width="24" height="24" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"/></svg>`,
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
