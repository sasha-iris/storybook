/**
 * Iris Library — Card / Chart
 * Source: Figma › ---- Cards · Frame: Cards (13559:76419)
 *
 * COMPACT KPI CHART CARDS — not standalone analytics panels.
 *
 * All chart areas in this file are 60 px tall, flush to the card bottom,
 * with no axis labels, no grid lines, and no legend rows.
 * These are embedded chart variants of the KPI card family.
 *
 * For a full analytics panel (axis labels, legend, period controls) this
 * project does not implement standalone chart panels — that would require
 * a chart library (Chart.js / ApexCharts / D3).
 */

import { ICON, compact } from './card-icons.js';

/**
 * ## Card / Chart — compact chart KPI cards
 *
 * The Chart sub-family adds a **shallow embedded chart** (60 px, no axis) to the
 * standard KPI card shell. The chart communicates trend shape at a glance without
 * becoming a full analytics panel.
 *
 * ### Anatomy
 * ```
 * .card  (max-width: 280px standard / 440px wide)
 *   .card-body-padded
 *     [label row]   .card-stat-label (left)  +  .card-icon (right, optional)
 *     .card-stat-value
 *     .card-trend   (.card-trend-up / -down / -neutral)
 *   <svg>   60 px flush chart — NO axis, NO grid, NO legend
 * ```
 *
 * ### Variant map
 * | Story | Layout | Chart |
 * |---|---|---|
 * | **Default** | label + icon-right, value, trend, chart | line or bar (interactive) |
 * | **Line variants** | up / down / flat side-by-side | 60px line |
 * | **Bar variants** | up / down / flat side-by-side | 60px bars |
 * | **Compare text** | label + value + compare subtitle + chart | line |
 * | **Trend-top** | trend delta at TOP, then label + value + chart | line |
 * | **Horizontal wide** | value + trend on left · chart on right | line |
 *
 * ### Chart vs Metric
 * Both use inline SVG at ≤ 60 px height. The difference is intent:
 * - **Card/Metric** — `.card-sparkline` class; standard height 48 px; pure trend shape
 * - **Card/Chart** — flush SVG at card bottom; 60 px; chart occupies full card width
 *
 * ### Developer notes
 * - Place the `<svg>` **after** `.card-body-padded`, directly inside `.card`, for a flush bottom.
 * - `preserveAspectRatio="none"` lets the SVG stretch to full card width.
 * - In production, replace the inline SVG with your chart library's canvas/svg output
 *   inside the same container — keep the same 60 px height constraint.
 * - Do not add padding or margin between `.card-body-padded` and the `<svg>`.
 */
export default {
  title: 'Iris Library/Card/Chart',
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    backgrounds: { default: 'light' },
    docs: {
      description: {
        component: 'Compact KPI cards with a **60 px flush chart** at the bottom. No axis labels, no legend. Use when trend shape matters but a full analytics panel is not needed.',
      },
    },
  },
  argTypes: {
    label: {
      control: 'text',
      description: 'Metric label — `.card-stat-label` at top-left of the card.',
      table: { category: 'Content', type: { summary: 'string' } },
    },
    value: {
      control: 'text',
      description: 'Formatted metric value — `.card-stat-value`.',
      table: { category: 'Content', type: { summary: 'string' } },
    },
    direction: {
      control: { type: 'radio', options: ['up', 'down', 'flat'] },
      description: 'Trend direction — controls arrow glyph, colour class, and chart line colour.',
      table: { category: 'Trend', type: { summary: "'up'|'down'|'flat'" } },
    },
    chartType: {
      control: { type: 'radio', options: ['line', 'bar'] },
      description: '`line` = polyline with area fill. `bar` = 7 vertical rects.',
      table: { category: 'Chart', type: { summary: "'line'|'bar'" } },
    },
    icon: {
      control: 'text',
      description: 'Inline SVG string for the icon badge at top-right of the label row. Leave empty to hide. Use `ICON.*` from `card-icons.js`.',
      table: { category: 'Icon', type: { summary: 'string (SVG)' } },
    },
    iconColor: {
      control: { type: 'select', options: ['blue', 'green', 'red', 'yellow', 'purple', 'dark'] },
      description: 'Icon box background colour — `.card-icon-{color}`.',
      table: { category: 'Icon', type: { summary: 'string' } },
    },
  },
  args: {
    label:     'Total Revenue',
    value:     '$45,231',
    direction: 'up',
    chartType: 'line',
    icon:      ICON.revenue,
    iconColor: 'blue',
  },
};

/* ── Shared helpers ──────────────────────────── */

const COLORS = { up: '#0E9F6E', down: '#E02424', flat: '#6B7280' };

// 60px line chart, no axis, flush width (viewBox 320×60)
const LINE_PTS = {
  up:   '0,54 45,46 90,50 140,30 180,32 230,16 275,8 310,4 320,3',
  down: '0,3  40,8  85,16 135,26 180,34 225,42 270,50 310,54 320,55',
  flat: '0,30 50,26 100,32 150,28 200,24 250,30 300,28 320,30',
};

const compactLine = (dir) => {
  const c = COLORS[dir];
  const p = LINE_PTS[dir];
  return `<svg style="width:100%;height:60px;display:block;"
               viewBox="0 0 320 60" preserveAspectRatio="none"
               xmlns="http://www.w3.org/2000/svg">
    <polygon points="${p} 320,60 0,60" fill="${c}" opacity="0.12"/>
    <polyline points="${p}" fill="none" stroke="${c}" stroke-width="2"
              stroke-linejoin="round" stroke-linecap="round"/>
  </svg>`;
};

// 60px bar chart, no axis, flush width (viewBox 320×60)
const BAR_VALS = {
  up:   [32, 44, 52, 40, 62, 74, 88],
  down: [84, 74, 66, 58, 50, 40, 30],
  flat: [52, 58, 50, 56, 52, 54, 52],
};

const compactBar = (vals, color) => {
  const w = 320 / vals.length;
  return `<svg style="width:100%;height:60px;display:block;"
               viewBox="0 0 320 60" preserveAspectRatio="none"
               xmlns="http://www.w3.org/2000/svg">
    ${vals.map((v, i) => {
      const h = (v / 100) * 56;
      return `<rect x="${i * w + 1.5}" y="${60 - h}" width="${w - 3}" height="${h}"
                    fill="${color}" rx="2" opacity="0.85"/>`;
    }).join('')}
  </svg>`;
};

const TREND_DELTA = { up: '+20.1%', down: '−4.3%', flat: '0.0%' };
const trendClass  = (d) => d === 'up' ? 'card-trend-up' : d === 'down' ? 'card-trend-down' : 'card-trend-neutral';
const trendArrow  = (d) => d === 'up' ? '↑' : d === 'down' ? '↓' : '→';

/* ─────────────────────────────────────────────
   DEFAULT — interactive
───────────────────────────────────────────── */
/**
 * Fully interactive compact chart card.
 * Switch `direction` to change line colour and arrow.
 * Switch `chartType` between line and bar.
 * Toggle `icon` to show/hide the icon badge.
 *
 * **QA checklist**
 * - Icon badge is 40×40px, top-right of label row (same row, not a separate header)
 * - Chart SVG height always 60px, fills full card width (no side padding)
 * - No axis labels visible on chart
 * - `direction:down` → red line/bars, ↓ arrow, `card-trend-down` colour
 * - `chartType:bar` → 7 bars, height proportional to data values
 */
export const Default = {
  name: 'Interactive',
  parameters: {
    backgrounds: { default: 'white' },
    docs: {
      description: { story: 'Fully interactive. Switch `direction` and `chartType` in Controls. Icon badge is inline right of the label, not in a separate header row.' },
      source: {
        language: 'html',
        code: `<!-- Compact chart KPI card — label + icon-right, value, trend, flush 60px chart -->
<div class="card" style="max-width:280px; overflow:hidden;">
  <div class="card-body-padded">
    <div style="display:flex; justify-content:space-between; align-items:flex-start; margin-bottom:12px;">
      <div class="card-stat-label">Total Revenue</div>
      <!-- .card-icon: 40×40 badge, contains a 20×20 inline SVG -->
      <div class="card-icon card-icon-blue">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor"
             stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/>
          <polyline points="17 6 23 6 23 12"/>
        </svg>
      </div>
    </div>
    <div class="card-stat-value">$45,231</div>
    <div class="card-trend card-trend-up">
      <span class="card-trend-arrow">↑</span>
      <span>+20.1%</span>
      <span class="card-trend-context">vs last month</span>
    </div>
  </div>
  <!-- SVG flush to card bottom — no padding, no wrapper -->
  <svg style="width:100%; height:60px; display:block;"
       viewBox="0 0 320 60" preserveAspectRatio="none">
    <polygon points="0,54 90,50 140,30 230,16 320,3 320,60 0,60"
             fill="#0E9F6E" opacity="0.12"/>
    <polyline points="0,54 90,50 140,30 230,16 320,3"
              fill="none" stroke="#0E9F6E" stroke-width="2"
              stroke-linejoin="round" stroke-linecap="round"/>
  </svg>
</div>`,
      },
    },
  },
  render: ({ label, value, direction, chartType, icon, iconColor }) => {
    const chart = chartType === 'bar'
      ? compactBar(BAR_VALS[direction], COLORS[direction])
      : compactLine(direction);
    return `
      <div class="card" style="max-width:280px;overflow:hidden;">
        <div class="card-body-padded">
          <div style="display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:12px;">
            <div class="card-stat-label">${label}</div>
            ${icon ? `<div class="card-icon card-icon-${iconColor}" style="flex-shrink:0;">${icon}</div>` : ''}
          </div>
          <div class="card-stat-value">${value}</div>
          <div class="card-trend ${trendClass(direction)}">
            <span class="card-trend-arrow">${trendArrow(direction)}</span>
            <span>${TREND_DELTA[direction]}</span>
            <span class="card-trend-context">vs last month</span>
          </div>
        </div>
        ${chart}
      </div>`;
  },
};

/* ─────────────────────────────────────────────
   LINE VARIANTS — up / down / flat
───────────────────────────────────────────── */
/**
 * All three trend directions side-by-side using the line chart variant.
 * Use for visual regression — line colour, area fill, and arrow glyph must all match direction.
 *
 * **QA checklist**
 * - Up: green line (#0E9F6E), ↑ arrow, area fill opacity 0.12
 * - Down: red line (#E02424), ↓ arrow
 * - Flat: gray line (#6B7280), → arrow
 * - All three charts same height (60px)
 * - Line rises/falls smoothly left-to-right matching direction
 */
export const LineVariants = {
  name: 'Line chart variants',
  parameters: {
    backgrounds: { default: 'white' },
    docs: { description: { story: 'Up / down / flat line chart variants side-by-side. Use for direction colour and arrow glyph verification.' } },
  },
  render: () => `
    <div style="display:flex;gap:16px;flex-wrap:wrap;">
      ${[
        ['up',   'Total Revenue',    '$45,231', '+20.1%', ICON.revenue, 'blue'],
        ['down', 'Churn Rate',       '3.8%',    '+0.4%',  ICON.trendDn, 'red'],
        ['flat', 'Avg Session Time', '3m 42s',  '−0.1%',  ICON.clock,   'dark'],
      ].map(([dir, label, value, delta, icon, color]) => `
        <div class="card" style="width:220px;overflow:hidden;">
          <div class="card-body-padded">
            <div style="display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:12px;">
              <div class="card-stat-label">${label}</div>
              <div class="card-icon card-icon-${color}" style="width:32px;height:32px;flex-shrink:0;">${compact(icon)}</div>
            </div>
            <div class="card-stat-value" style="font-size:1.625rem;">${value}</div>
            <div class="card-trend ${trendClass(dir)}" style="font-size:var(--text-xs);">
              <span class="card-trend-arrow">${trendArrow(dir)}</span>
              <span>${delta}</span>
              <span class="card-trend-context">vs last month</span>
            </div>
          </div>
          ${compactLine(dir)}
        </div>`).join('')}
    </div>`,
};

/* ─────────────────────────────────────────────
   BAR VARIANTS — up / down
───────────────────────────────────────────── */
/**
 * Bar chart variant — 7 vertical rects representing weekly period values.
 * Use when individual period bars are more meaningful than overall shape.
 *
 * **QA checklist**
 * - 7 bars fill full card width, equal spacing
 * - Bar colour matches trend direction
 * - No gap between bar bottom and SVG bottom edge
 * - Bar top has `rx="2"` (2px radius)
 */
export const BarVariants = {
  name: 'Bar chart variants',
  parameters: {
    backgrounds: { default: 'white' },
    docs: { description: { story: 'Weekly 7-bar variant. Bar colour matches trend direction. Use when individual period counts matter more than overall shape.' } },
  },
  render: () => `
    <div style="display:flex;gap:16px;flex-wrap:wrap;">
      ${[
        ['up',   'Weekly signups',  '1,284', '+8.4%',   ICON.users,   'green'],
        ['down', 'Daily errors',    '124',   '−22.4%',  ICON.warning, 'red'],
        ['flat', 'Support tickets', '38',    '−1.2%',   ICON.chat,    'yellow'],
      ].map(([dir, label, value, delta, icon, color]) => `
        <div class="card" style="width:220px;overflow:hidden;">
          <div class="card-body-padded">
            <div style="display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:12px;">
              <div class="card-stat-label">${label}</div>
              <div class="card-icon card-icon-${color}" style="width:32px;height:32px;flex-shrink:0;">${compact(icon)}</div>
            </div>
            <div class="card-stat-value" style="font-size:1.625rem;">${value}</div>
            <div class="card-trend ${trendClass(dir)}" style="font-size:var(--text-xs);">
              <span class="card-trend-arrow">${trendArrow(dir)}</span>
              <span>${delta}</span>
              <span class="card-trend-context">this week</span>
            </div>
          </div>
          ${compactBar(BAR_VALS[dir], COLORS[dir])}
        </div>`).join('')}
    </div>`,
};

/*
 * CompareText, TrendTop, and HorizontalWide were removed — no backing Figma node
 * in frame 13559:76419. They were inferred layout inventions with no design source.
 * Remaining stories: Default (Interactive), LineVariants, BarVariants, FourUpGrid.
 */

/* ─────────────────────────────────────────────
   4-UP GRID — line chart row
───────────────────────────────────────────── */
/**
 * Four compact chart cards in a CSS grid row.
 * The standard dashboard header pattern when sparklines are needed.
 *
 * **QA checklist**
 * - All four cards equal height (grid stretch)
 * - Chart SVGs all 60px tall
 * - Grid: `repeat(4,1fr)` with 16px gap
 * - At narrow widths: collapses to 2 or 1 column (set in production CSS)
 */
export const FourUpGrid = {
  name: '4-up dashboard grid',
  parameters: {
    layout: 'fullscreen',
    docs: { description: { story: '4-column equal-width grid of compact chart KPI cards. Primary dashboard header pattern when both value and trend shape are needed.' } },
  },
  render: () => `
    <div style="padding:24px;">
      <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:16px;max-width:960px;">
        ${[
          { dir: 'up',   label: 'Total Revenue',   value: '$45,231', delta: '+20.1%', icon: ICON.revenue, color: 'blue'   },
          { dir: 'up',   label: 'New Customers',   value: '3,462',   delta: '+15.3%', icon: ICON.users,   color: 'green'  },
          { dir: 'down', label: 'Active Tickets',  value: '284',     delta: '+8.2%',  icon: ICON.chat,    color: 'yellow' },
          { dir: 'up',   label: 'Conversion Rate', value: '3.24%',   delta: '+0.8%',  icon: ICON.chart,   color: 'purple' },
        ].map(({ dir, label, value, delta, icon, color }) => `
          <div class="card" style="overflow:hidden;">
            <div class="card-body-padded">
              <div style="display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:10px;">
                <div class="card-stat-label">${label}</div>
                <div class="card-icon card-icon-${color}" style="width:32px;height:32px;flex-shrink:0;">${compact(icon)}</div>
              </div>
              <div class="card-stat-value" style="font-size:var(--text-2xl);">${value}</div>
              <div class="card-trend ${trendClass(dir)}" style="font-size:var(--text-xs);">
                <span class="card-trend-arrow">${trendArrow(dir)}</span>
                <span>${delta}</span>
                <span class="card-trend-context">vs last month</span>
              </div>
            </div>
            ${compactLine(dir)}
          </div>`).join('')}
      </div>
    </div>`,
};
