/**
 * Iris Library — Icons
 *
 * Only the icons that are actually used in existing Storybook components.
 * No extras. No speculative additions.
 *
 * Sources:
 * - card-icons.js          → Card / KPI icon badges
 * - CardLayouts.stories.js → Inline icons (check-circle, star, chevron, dots, mail)
 * - CardKPI.stories.js     → Trend arrows (up, down, neutral)
 * - Sidebar.stories.js     → Navigation icons
 * - Badge.stories.js       → clock, x-mark (dismiss)
 * - Chip.stories.js        → dot (r=3), x-mark (dismiss)
 * - Tag.stories.js         → dot (r=3), x-mark (dismiss)
 * - Indicators.stories.js  → check (stroke), dot-solid (r=6), mail-outline, fire-outline
 * - Skeleton.stories.js    → image-placeholder (landscape SVG)
 * - Toast.stories.js       → check (solid), check-circle (solid), x-circle (solid), bell (outline), paper-airplane (solid), refresh (solid)
 * - Banner.stories.js      → light-bulb (solid), receipt-tax (solid), arrow-narrow-right (solid), book-open (solid)
 * - Breadcrumbs.stories.js → home (solid), chevron-right (outline stroke)
 * - Dropdown.stories.js    → chevron-right/down (solid), user-add, search, logout, information-circle, pencil, inbox, fire, plus, eye, shopping-bag, user-group, user-circle, cog, archive, currency-dollar, document
 * - Autocomplete.stories.js→ search, x-circle, x-mark, arrow-right, plus (overlaps with Dropdown)
 * - Datepicker.stories.js  → chevron-left/right (stroke), calendar (stroke)
 * - ListGroup.stories.js   → user-circle, adjustments, inbox, cloud-download (all stroke 16×16)
 * - Modal.stories.js       → close (stroke ×), exclamation (amber circle), mail (stroke), lock (stroke), question-circle (stroke)
 * - Drawer.stories.js      → same home/document/bag/mail/lock-closed/chevron-down as above, close (solid x-mark)
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
          <div style="width:48px;height:48px;background:${bg};border:1px solid var(--color-border-default);border-radius:8px;display:flex;align-items:center;justify-content:center;">
            ${svg}
          </div>
          <span style="font:11px/1.3 sans-serif;color:var(--color-text-secondary);text-align:center;word-break:break-word;">${name}</span>
        </div>
      `).join('')}
    </div>
  `;
}

// ─── Stories ─────────────────────────────────────────────────────────────────

export default {
  title: 'Iris Library/Foundation/Icons',
  tags: ['autodocs', 'stable'],
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
| Badge icons | Badge (clock, x-mark dismiss) |
| Chip / Tag icons | Chip, Tag (dot r=3, x-mark dismiss) |
| Indicators icons | Indicators (check stroke, dot-solid, mail outline, fire outline) |
| Skeleton icons | Skeleton (image-placeholder landscape) |
| Toast icons | Toast (check solid, check-circle solid, x-circle solid, bell outline, paper-airplane solid, refresh solid) |
| Alert icons | Alerts re-uses check-circle (solid) from Toast icons and x-mark from Badge/Chip icons |
| Banner icons | Banner (light-bulb solid, receipt-tax solid, arrow-narrow-right solid, book-open solid) |
| Breadcrumbs icons | Breadcrumbs (home solid, chevron-right stroke) |
| Dropdown icons | Dropdown (chevron-right/down solid, user-add, search, logout, information-circle, pencil, inbox, fire, plus, eye, shopping-bag, user-group, user-circle, cog, archive, currency-dollar, document) |
| Autocomplete icons | Autocomplete (search, x-circle, x-mark, arrow-right, plus — overlaps with Dropdown) |
| Datepicker icons | Datepicker (chevron-left/right stroke, calendar stroke) |
| ListGroup icons | ListGroup (user-circle, adjustments, inbox, cloud-download — stroke 16×16) |
| Modal icons | Modal (close ×, exclamation amber, mail stroke, lock stroke, question-circle stroke) |
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
        <div style="width:48px;height:48px;background:#f0fdf4;border:1px solid var(--color-border-default);border-radius:8px;display:flex;align-items:center;justify-content:center;">
          ${trendUp()}
        </div>
        <span style="font:11px/1.3 sans-serif;color:var(--color-text-secondary);text-align:center;">trend up<br>#0E9F6E</span>
      </div>
      <div style="display:flex;flex-direction:column;align-items:center;gap:8px;">
        <div style="width:48px;height:48px;background:#fef2f2;border:1px solid var(--color-border-default);border-radius:8px;display:flex;align-items:center;justify-content:center;">
          ${trendDown()}
        </div>
        <span style="font:11px/1.3 sans-serif;color:var(--color-text-secondary);text-align:center;">trend down<br>#E02424</span>
      </div>
      <div style="display:flex;flex-direction:column;align-items:center;gap:8px;">
        <div style="width:48px;height:48px;background:#f9fafb;border:1px solid var(--color-border-default);border-radius:8px;display:flex;align-items:center;justify-content:center;">
          ${trendNeutral()}
        </div>
        <span style="font:11px/1.3 sans-serif;color:var(--color-text-secondary);text-align:center;">trend neutral<br>#6B7280</span>
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

/* ─────────────────────────────────────────────
   BADGE ICONS  (Badge.stories.js — commit 79ba121)
───────────────────────────────────────────── */

// Heroicons mini solid 20×20
const clockPath = 'M10 18a8 8 0 100-16 8 8 0 000 16zm.75-13a.75.75 0 00-1.5 0v5c0 .414.336.75.75.75h4a.75.75 0 000-1.5H10.75V5z';
const xMarkPath = 'M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z';

const clockSvg = `<svg width="16" height="16" viewBox="0 0 20 20" fill="#42389d" aria-hidden="true"><path fill-rule="evenodd" d="${clockPath}" clip-rule="evenodd"/></svg>`;
const xMarkSvg = `<svg width="16" height="16" viewBox="0 0 20 20" fill="#6b7280" aria-hidden="true"><path fill-rule="evenodd" d="${xMarkPath}" clip-rule="evenodd"/></svg>`;

export const BadgeIcons = {
    name: 'Badge icons — used in Badge',
  parameters: {
    docs: {
      description: {
        story: `Heroicons mini (solid, viewBox 0 0 20 20) used in the Badge component.
\`clock\` — leading icon slot (optional). \`x-mark\` — dismiss button (also used in Chip and Tag).`,
      },
    },
  },
  render: () => iconGrid([
    ['clock', clockSvg],
    ['x-mark (dismiss)', xMarkSvg],
  ]),
};

/* ─────────────────────────────────────────────
   CHIP / TAG ICONS  (Chip.stories.js, Tag.stories.js — commit 383f059)
───────────────────────────────────────────── */

const dotSmSvg  = `<svg width="12" height="12" viewBox="0 0 12 12" aria-hidden="true"><circle cx="6" cy="6" r="3" fill="#5850ec"/></svg>`;

export const ChipTagIcons = {
    name: 'Chip / Tag icons — used in Chip, Tag',
  parameters: {
    docs: {
      description: {
        story: `Icons used in the Chip and Tag components (12px slots).
\`dot (r=3)\` — left-slot status dot (color-parameterized). \`x-mark\` — same dismiss path as Badge, rendered at 12px.`,
      },
    },
  },
  render: () => iconGrid([
    ['dot (r=3)', dotSmSvg],
    ['x-mark (dismiss)', `<svg width="12" height="12" viewBox="0 0 20 20" fill="#5850ec" aria-hidden="true"><path fill-rule="evenodd" d="${xMarkPath}" clip-rule="evenodd"/></svg>`],
  ]),
};

/* ─────────────────────────────────────────────
   INDICATORS ICONS  (Indicators.stories.js — commit 2c86436)
───────────────────────────────────────────── */

const checkStrokeSvg = `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="#155dfc" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M2.5 8.5L6 12L13.5 4"/></svg>`;
const dotSolidSvg    = `<svg width="12" height="12" viewBox="0 0 12 12" aria-hidden="true"><circle cx="6" cy="6" r="6" fill="#155dfc"/></svg>`;
const mailOutlineSvg = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#6b7280" stroke-width="1.5" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"/></svg>`;
const fireOutlineSvg = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#6b7280" stroke-width="1.5" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z"/><path stroke-linecap="round" stroke-linejoin="round" d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z"/></svg>`;

export const IndicatorsIcons = {
    name: 'Indicators icons — used in Indicators',
  parameters: {
    docs: {
      description: {
        story: `Icons used in the Indicators component.
\`check\` — stroke 16×16, custom path (icon-type indicator circle). \`dot-solid\` — circle 12×12 r=6 (legend dot, color-parameterized).
\`mail\` and \`fire\` — Heroicons v2 outline 24×24 (used in "in context" example). Different from the v1 solid mail in Inline Card Icons.`,
      },
    },
  },
  render: () => iconGrid([
    ['check (stroke)', checkStrokeSvg],
    ['dot-solid (r=6)', dotSolidSvg],
    ['mail (outline v2)', mailOutlineSvg],
    ['fire (outline v2)', fireOutlineSvg],
  ]),
};

/* ─────────────────────────────────────────────
   SKELETON ICONS  (Skeleton.stories.js — commit 8627768)
───────────────────────────────────────────── */

const imagePlaceholderSvg = `<svg width="44" height="31" viewBox="0 0 44 31" fill="none" opacity="0.6" aria-hidden="true"><circle cx="7" cy="8" r="4" fill="#6b7280"/><path d="M0 31 L14 12 L27 24 L35 15 L44 31 Z" fill="#6b7280"/></svg>`;

export const SkeletonIcons = {
    name: 'Skeleton icons — used in Skeleton',
  parameters: {
    docs: {
      description: {
        story: 'Custom landscape/image placeholder icon rendered inside skeleton image areas. Not from Heroicons — drawn to match the Figma skeleton image placeholder shape.',
      },
    },
  },
  render: () => `
    <div style="display:flex;flex-wrap:wrap;gap:24px;align-items:flex-start;">
      <div style="display:flex;flex-direction:column;align-items:center;gap:8px;width:120px;">
        <div style="width:80px;height:56px;background:#d1d5db;border:1px solid var(--color-border-default);border-radius:8px;display:flex;align-items:center;justify-content:center;">
          ${imagePlaceholderSvg}
        </div>
        <span style="font:11px/1.3 sans-serif;color:var(--color-text-secondary);text-align:center;">image-placeholder<br>(44×31, custom)</span>
      </div>
    </div>
  `,
};

/* ─────────────────────────────────────────────
   TOAST ICONS  (Toast.stories.js — node 3338:16753)
───────────────────────────────────────────── */

const _CHECK_PATH        = 'M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z';
const _CHECK_CIRCLE_PATH = 'M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z';
const _X_CIRCLE_PATH     = 'M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z';
const _PAPER_PLANE_PATH  = 'M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z';
const _REFRESH_PATH      = 'M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z';

function _ts(path, color) {
  return `<svg width="20" height="20" viewBox="0 0 20 20" fill="${color}" aria-hidden="true"><path fill-rule="evenodd" d="${path}" clip-rule="evenodd"/></svg>`;
}
const _bellToastSvg = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#f05252" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"/></svg>`;

// ─── Banner icon paths ────────────────────────────────────────────────────────

const _LIGHT_BULB_PATH    = 'M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1h4v1a2 2 0 11-4 0zM12 14c.015-.997.138-2.004.4-2.947a4.978 4.978 0 00.6-2.053C13 7.343 11.657 6 10 6c-1.657 0-3 1.343-3 3a4.978 4.978 0 00.6 2.053c.262.943.385 1.95.4 2.947h4z';
const _RECEIPT_TAX_PATH   = 'M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zM12 2a1 1 0 01.967.744L14.146 7H17a1 1 0 010 2h-3.434l.498 2.233A1 1 0 0113 12.97V17a1 1 0 11-2 0v-4h-.5a1 1 0 010-2H11V9H9a1 1 0 010-2h2.354L12.033 2.744A1 1 0 0112 2z';
const _ARROW_NARROW_RIGHT = 'M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z';
const _BOOK_OPEN_PATH     = 'M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z';

export const BannerIcons = {
    name: 'Banner icons — used in Banner',
  parameters: {
    docs: {
      description: {
        story: `Icons used in Banner component variants. All Heroicons v1 solid (viewBox 0 0 20 20).

| Icon | Used in |
|------|---------|
| light-bulb | Default banner — icon circle |
| receipt-tax | Bottom banner — feature label |
| arrow-narrow-right | Bottom banner — partner link; CTA banner — "Get started" button |
| book-open | CTA banner — "Learn more" button |`,
      },
    },
  },
  render: () => iconGrid([
    ['light-bulb (solid)', _ts(_LIGHT_BULB_PATH, '#6b7280')],
    ['receipt-tax (solid)', _ts(_RECEIPT_TAX_PATH, '#6b7280')],
    ['arrow-narrow-right (solid)', _ts(_ARROW_NARROW_RIGHT, '#155dfc')],
    ['book-open (solid)', _ts(_BOOK_OPEN_PATH, '#1e2939')],
  ]),
};

export const ToastIcons = {
    name: 'Toast icons — used in Toast',
  parameters: {
    docs: {
      description: {
        story: `Icons used in Toast component variants. All solid icons are Heroicons v1 (viewBox 0 0 20 20). Bell is Heroicons v1 outline (viewBox 0 0 24 24, displayed at 20px).

| Icon | Used in |
|------|---------|
| check | Success icon box, Default icon box |
| check-circle | Success (CTA) title row |
| x-circle | Danger (CTA) title row |
| bell (outline) | Danger icon box |
| paper-airplane | Simple toast |
| refresh | Interactive toast icon box |`,
      },
    },
  },
  render: () => iconGrid([
    ['check (solid)', _ts(_CHECK_PATH, '#007a55')],
    ['check-circle (solid)', _ts(_CHECK_CIRCLE_PATH, '#0e9f6e')],
    ['x-circle (solid)', _ts(_X_CIRCLE_PATH, '#e02424')],
    ['bell (outline)', _bellToastSvg],
    ['paper-airplane (solid)', _ts(_PAPER_PLANE_PATH, '#155dfc')],
    ['refresh (solid)', _ts(_REFRESH_PATH, '#155dfc')],
  ]),
};

/* ─────────────────────────────────────────────
   BREADCRUMBS ICONS  (Breadcrumbs.stories.js — commit 2474386)
───────────────────────────────────────────── */

const homeIconSvg = `<svg width="16" height="16" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"/></svg>`;
const breadcrumbChevronSvg = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#6b7280" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M9 5l7 7-7 7"/></svg>`;

export const BreadcrumbsIcons = {
    name: 'Breadcrumbs icons — used in Breadcrumbs',
  parameters: {
    docs: {
      description: {
        story: '`home` — solid 20×20, used as first breadcrumb item when `showHomeIcon` is true. `chevron-right` — outline stroke 24×24, used as separator between crumbs.',
      },
    },
  },
  render: () => iconGrid([
    ['home (solid)', `<span style="color:#111928;">${homeIconSvg}</span>`],
    ['chevron-right (stroke)', breadcrumbChevronSvg],
  ]),
};

/* ─────────────────────────────────────────────
   DROPDOWN ICONS  (Dropdown.stories.js — commit 0b8ab02)
───────────────────────────────────────────── */

const _dd = (path, w=18) => `<svg width="${w}" height="${w}" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">${path}</svg>`;

const DD_CHEVRON_RIGHT  = _dd(`<path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"/>`);
const DD_CHEVRON_DOWN   = _dd(`<path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"/>`);
const DD_USER_ADD       = _dd(`<path d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z"/>`);
const DD_SEARCH         = _dd(`<path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"/>`);
const DD_LOGOUT         = _dd(`<path fill-rule="evenodd" d="M3 3a1 1 0 00-1 1v12a1 1 0 001 1h6a1 1 0 000-2H4V5h5a1 1 0 000-2H3zm9.707 4.293a1 1 0 00-1.414 1.414L12.586 10l-1.293 1.293a1 1 0 101.414 1.414l2-2a1 1 0 000-1.414l-2-2z" clip-rule="evenodd"/><path d="M7 9a1 1 0 000 2h6a1 1 0 000-2H7z"/>`);
const DD_INFO           = _dd(`<path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"/>`);
const DD_PENCIL         = _dd(`<path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"/>`);
const DD_INBOX          = _dd(`<path d="M8.707 7.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l2-2a1 1 0 00-1.414-1.414L11 7.586V3a1 1 0 10-2 0v4.586l-.293-.293z"/><path d="M3 5a2 2 0 012-2h1a1 1 0 010 2H5v7h2l1 2h4l1-2h2V5h-1a1 1 0 110-2h1a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5z"/>`);
const DD_FIRE           = _dd(`<path fill-rule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" clip-rule="evenodd"/>`, 16);
const DD_PLUS           = _dd(`<path fill-rule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clip-rule="evenodd"/>`, 20);
const DD_EYE            = _dd(`<path d="M10 12a2 2 0 100-4 2 2 0 000 4z"/><path fill-rule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clip-rule="evenodd"/>`, 14);
const DD_SHOPPING_BAG   = _dd(`<path fill-rule="evenodd" d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z" clip-rule="evenodd"/>`);
const DD_USER_GROUP     = _dd(`<path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"/>`);
const DD_USER_CIRCLE    = _dd(`<path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clip-rule="evenodd"/>`);
const DD_COG            = _dd(`<path fill-rule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clip-rule="evenodd"/>`);
const DD_ARCHIVE        = _dd(`<path d="M4 3a2 2 0 100 4h12a2 2 0 100-4H4z"/><path fill-rule="evenodd" d="M3 8h14v7a2 2 0 01-2 2H5a2 2 0 01-2-2V8zm5 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z" clip-rule="evenodd"/>`);
const DD_CURRENCY       = _dd(`<path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z"/><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clip-rule="evenodd"/>`);
const DD_DOCUMENT       = _dd(`<path fill-rule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clip-rule="evenodd"/>`);

export const DropdownIcons = {
    name: 'Dropdown icons — used in Dropdown',
  parameters: {
    docs: {
      description: {
        story: 'All Heroicons v1 solid (viewBox 0 0 20 20) used in Dropdown menu variants. Also reused in Drawer (navigation type).',
      },
    },
  },
  render: () => iconGrid([
    ['chevron-right', DD_CHEVRON_RIGHT],
    ['chevron-down',  DD_CHEVRON_DOWN],
    ['user-add',      DD_USER_ADD],
    ['search',        DD_SEARCH],
    ['logout',        DD_LOGOUT],
    ['information-circle', DD_INFO],
    ['pencil',        DD_PENCIL],
    ['inbox',         DD_INBOX],
    ['fire',          DD_FIRE],
    ['plus',          DD_PLUS],
    ['eye',           DD_EYE],
    ['shopping-bag',  DD_SHOPPING_BAG],
    ['user-group',    DD_USER_GROUP],
    ['user-circle',   DD_USER_CIRCLE],
    ['cog',           DD_COG],
    ['archive',       DD_ARCHIVE],
    ['currency-dollar', DD_CURRENCY],
    ['document',      DD_DOCUMENT],
  ]),
};

/* ─────────────────────────────────────────────
   AUTOCOMPLETE ICONS  (Autocomplete.stories.js — commit f482ff6)
───────────────────────────────────────────── */

const _ac = (path, w=18) => `<svg width="${w}" height="${w}" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fill-rule="evenodd" d="${path}" clip-rule="evenodd"/></svg>`;

const AC_SEARCH      = _ac(`M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z`);
const AC_X_CIRCLE    = _ac(`M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 8.707a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z`);
const AC_X           = _ac(`M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z`);
const AC_ARROW_RIGHT = _ac(`M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z`);

export const AutocompleteIcons = {
    name: 'Autocomplete icons — used in Autocomplete',
  parameters: {
    docs: {
      description: {
        story: 'Heroicons v1 solid (viewBox 0 0 20 20). `search` and `plus` are shared with Dropdown. `x-circle` clears the input. `x` dismisses a result row. `arrow-right` navigates to a result in Advanced type.',
      },
    },
  },
  render: () => iconGrid([
    ['search',       AC_SEARCH],
    ['x-circle (clear)', AC_X_CIRCLE],
    ['x (dismiss row)', AC_X],
    ['arrow-right (navigate)', AC_ARROW_RIGHT],
    ['plus (add CTA)', DD_PLUS],
  ]),
};

/* ─────────────────────────────────────────────
   DATEPICKER ICONS  (Datepicker.stories.js — commit 58d439b)
───────────────────────────────────────────── */

const DP_CHEV_LEFT  = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true"><path d="M12.5 15L7.5 10L12.5 5" stroke="#6b7280" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
const DP_CHEV_RIGHT = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true"><path d="M7.5 5L12.5 10L7.5 15" stroke="#6b7280" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
const DP_CALENDAR   = `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true"><rect x="1" y="3" width="14" height="12" rx="2" stroke="#6b7280" stroke-width="1.5"/><path d="M1 7H15" stroke="#6b7280" stroke-width="1.5"/><path d="M5 1V5" stroke="#6b7280" stroke-width="1.5" stroke-linecap="round"/><path d="M11 1V5" stroke="#6b7280" stroke-width="1.5" stroke-linecap="round"/></svg>`;

export const DatepickerIcons = {
    name: 'Datepicker icons — used in Datepicker',
  parameters: {
    docs: {
      description: {
        story: 'Custom stroke icons (not Heroicons). `chevron-left/right` navigate months (20×20). `calendar` is the input trigger icon (16×16).',
      },
    },
  },
  render: () => iconGrid([
    ['chevron-left (month nav)', DP_CHEV_LEFT],
    ['chevron-right (month nav)', DP_CHEV_RIGHT],
    ['calendar (input trigger)', DP_CALENDAR],
  ]),
};

/* ─────────────────────────────────────────────
   LIST GROUP ICONS  (ListGroup.stories.js — commit b61458d)
───────────────────────────────────────────── */

const _lg = (path) => `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">${path}</svg>`;

const LG_USER_CIRCLE    = _lg(`<path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM2.4 13.6A6 6 0 0 1 14 13.6" stroke="#111928" stroke-width="1.3" stroke-linecap="round"/><circle cx="8" cy="8" r="7" stroke="#111928" stroke-width="1.3"/>`);
const LG_ADJUSTMENTS    = _lg(`<path d="M2 4h12M2 8h12M2 12h12" stroke="#111928" stroke-width="1.3" stroke-linecap="round"/><circle cx="5" cy="4" r="1.5" fill="#111928"/><circle cx="10" cy="8" r="1.5" fill="#111928"/><circle cx="6" cy="12" r="1.5" fill="#111928"/>`);
const LG_INBOX          = _lg(`<rect x="1" y="1" width="14" height="14" rx="2" stroke="#111928" stroke-width="1.3"/><path d="M1 9h3l2 2h4l2-2h3" stroke="#111928" stroke-width="1.3" stroke-linejoin="round"/>`);
const LG_CLOUD_DOWNLOAD = _lg(`<path d="M5.5 12.5H4a3 3 0 0 1 0-6h.15A4.5 4.5 0 0 1 13 7.5a3 3 0 0 1-1 5.5h-1.5" stroke="#111928" stroke-width="1.3" stroke-linecap="round"/><path d="M8 8.5v5M6 11.5l2 2 2-2" stroke="#111928" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/>`);

export const ListGroupIcons = {
    name: 'List Group icons — used in List Group',
  parameters: {
    docs: {
      description: {
        story: 'Custom stroke icons (16×16). Not from Heroicons — drawn to match the Figma List Group icon set. Color is passed as a parameter (`#111928` light / `var(--color-bg-white)` dark).',
      },
    },
  },
  render: () => iconGrid([
    ['user-circle',    LG_USER_CIRCLE],
    ['adjustments',    LG_ADJUSTMENTS],
    ['inbox',          LG_INBOX],
    ['cloud-download', LG_CLOUD_DOWNLOAD],
  ]),
};

/* ─────────────────────────────────────────────
   MODAL ICONS  (Modal.stories.js — commit 88a8325)
───────────────────────────────────────────── */

const ML_CLOSE       = `<svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true"><path d="M13.5 4.5L4.5 13.5M4.5 4.5L13.5 13.5" stroke="#6b7280" stroke-width="1.5" stroke-linecap="round"/></svg>`;
const ML_EXCLAMATION = `<svg width="42" height="42" viewBox="0 0 42 42" fill="none" aria-hidden="true"><circle cx="21" cy="21" r="21" fill="#FEF3C7"/><path d="M21 11v12" stroke="#D97706" stroke-width="2" stroke-linecap="round"/><circle cx="21" cy="28.5" r="1.5" fill="#D97706"/></svg>`;
const ML_MAIL        = `<svg width="16" height="16" viewBox="0 0 20 20" fill="none" aria-hidden="true"><path d="M2 4h16v12H2V4zm0 0l8 7 8-7" stroke="#6b7280" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
const ML_LOCK        = `<svg width="16" height="16" viewBox="0 0 20 20" fill="none" aria-hidden="true"><rect x="3" y="9" width="14" height="10" rx="2" stroke="#6b7280" stroke-width="1.5"/><path d="M7 9V6a3 3 0 016 0v3" stroke="#6b7280" stroke-width="1.5" stroke-linecap="round"/></svg>`;
const ML_QUESTION    = `<svg width="14" height="14" viewBox="0 0 20 20" fill="none" aria-hidden="true"><circle cx="10" cy="10" r="9" stroke="#6b7280" stroke-width="1.5"/><path d="M10 13v1M10 7a2 2 0 012 2c0 1.1-.9 1.7-1.5 2.2-.5.4-.5.6-.5.8" stroke="#6b7280" stroke-width="1.5" stroke-linecap="round"/></svg>`;

export const ModalIcons = {
    name: 'Modal icons — used in Modal',
  parameters: {
    docs: {
      description: {
        story: 'Custom stroke icons used in Modal variants. `close ×` — 18×18 diagonal cross. `exclamation` — 42×42 amber circle (warning modal). `mail` + `lock` — 16×16 input prefix icons in sign-in form. `question-circle` — 14×14 tooltip trigger.',
      },
    },
  },
  render: () => iconGrid([
    ['close ×',       ML_CLOSE],
    ['exclamation (warning)', ML_EXCLAMATION],
    ['mail (input prefix)', ML_MAIL],
    ['lock (input prefix)', ML_LOCK],
    ['question-circle', ML_QUESTION],
  ]),
};
