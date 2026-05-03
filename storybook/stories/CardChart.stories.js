/**
 * Iris Library — Card / KPI
 *
 * Source: Figma › Iris Library › node 602:20752 — component "Card KPI"
 *
 * ## Figma variants
 * property2 (direction): "Upwards" | "Downwards"
 * property3 (chart type): "Linechart" | "Linechart-vert" | "barchart" |
 *                         "barchart-vert" | "barchart-big" | "barchart-segm-hor" | "Credit"
 *
 * Node IDs:
 *   602:20753  Linechart / Upwards
 *   602:20589  Linechart / Downwards
 *   602:22376  Linechart-vert / Upwards
 *   602:22409  Linechart-vert / Downwards
 *   602:20796  barchart / Upwards
 *   602:20845  barchart / Downwards
 *   602:23611  barchart-vert / Upwards
 *   602:24711  barchart-big / Upwards
 *   602:25133  barchart-segm-hor / Upwards
 *   602:23265  Credit / Upwards
 *
 * ## Figma design tokens (exact)
 * Trend up:    #5850EC  (old-colors/brand/600)
 * Trend down:  #E74694  (old-colors/pink/500)
 * Bar up:      #6875F5  (old-colors/brand/500)
 * Bar up lt:   #B4C6FC  (old-colors/brand/300)  ← index-6 bar, lighter
 * Bar down:    #E74694  (old-colors/pink/500)
 * Bar down lt: #F8B4D9  (old-colors/pink/300)   ← index-6 bar, lighter
 * Pill bg:     #D1D5DB  (old-colors/gray/300)
 * Label:       #111928  (old-colors/gray/900)
 * Subtitle:    #6B7280  (old-colors/gray/500)
 *
 * ## Card sizes (Figma)
 * Linechart, Linechart-vert, Credit:  286 × 168 px, padding 16px
 * barchart, barchart-big:             286 × 200 px, padding 32px 32px 16px
 * barchart-vert:                      286 × 200 px, padding 32px 32px 16px
 * barchart-segm-hor:                  449 × 104 px, padding 32px 32px 16px, flex-row
 *
 * ## QA notes
 * - Trend UP color is #5850EC (purple), NOT green
 * - Trend DOWN color is #E74694 (pink), NOT red
 * - Icon is always grey pill (#D1D5DB circle) + currency-dollar 16px
 * - No colored card-icon badges in this component
 * - Bar chart: 14 bars × 3px wide, border-radius 32px, heights from Figma
 * - Index-6 bar is always a lighter shade
 * - Line chart: 69px tall, flush to card bottom, absolutely positioned
 */

// ── Figma color constants ────────────────────────────────────────────────────
const C_UP    = '#5850EC';
const C_DN    = '#E74694';
const C_BU    = '#6875F5';
const C_BU_LT = '#B4C6FC';
const C_BD_LT = '#F8B4D9';

// ── Bar heights in px from Figma ─────────────────────────────────────────────
// barchart (602:20796): Charts frame [222x40], max bar = 40px
// barchart-big (602:24711): Charts frame [222x58], max bar = 58px
// index 6 is always the lighter-shade bar (#B4C6FC up / #F8B4D9 down)
const BARS_STANDARD = [15, 16, 27, 17, 40, 25, 19, 8, 29, 40, 19, 13, 25, 36];
const BARS_BIG      = [15, 16, 58, 17, 58, 25, 19, 8, 29, 58, 19, 13, 58, 36];

// ── Shared SVG icons ─────────────────────────────────────────────────────────

const ICON_DOLLAR = `<svg width="16" height="16" viewBox="0 0 20 20" fill="#6B7280" xmlns="http://www.w3.org/2000/svg">
  <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z"/>
  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clip-rule="evenodd"/>
</svg>`;

// Grey pill button — always currency-dollar, always #D1D5DB bg
const PILL = `<div style="background:#D1D5DB;border-radius:999px;padding:9px;flex-shrink:0;display:flex;align-items:center;justify-content:center;">${ICON_DOLLAR}</div>`;

// Trend arrow icons (Heroicons v1 solid 20px → 16px display)
const iconTrendUp = (color) => `<svg width="16" height="16" viewBox="0 0 20 20" fill="${color}" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z" clip-rule="evenodd"/>
</svg>`;

const iconTrendDown = (color) => `<svg width="16" height="16" viewBox="0 0 20 20" fill="${color}" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" d="M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z" clip-rule="evenodd"/>
</svg>`;

// ── Shared helpers ────────────────────────────────────────────────────────────

const F = (spec) => `font:${spec} 'Inter',sans-serif;`;

function trendBadge(dir) {
  const c = dir === 'up' ? C_UP : C_DN;
  const icon = dir === 'up' ? iconTrendUp(c) : iconTrendDown(c);
  const pct = dir === 'up' ? '+12.5%' : '−8.3%';
  return `<div style="display:flex;align-items:center;gap:2px;flex-shrink:0;">
    ${icon}
    <span style="${F('600 12px/1.5')}color:${c};white-space:nowrap;">${pct}</span>
  </div>`;
}

// Line chart: 69px flush to card bottom, absolute position
// SVG approximates Figma raster — smooth wave trending up or down
function lineChartSvg(dir) {
  const c = dir === 'up' ? C_UP : C_DN;
  const path = dir === 'up'
    ? 'M0,60 C30,55 55,64 85,48 C115,32 138,42 165,26 C192,10 210,20 238,10 C258,4 272,8 286,3'
    : 'M0,3 C28,8 50,2 80,18 C110,34 130,24 158,40 C186,56 205,46 232,58 C255,64 270,58 286,65';
  const area = `${path} L286,70 L0,70 Z`;
  return `<div style="position:absolute;bottom:0;left:0;right:0;">
    <svg style="width:100%;height:70px;display:block;" viewBox="0 0 286 70" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
      <path d="${area}" fill="${c}" opacity="0.12"/>
      <path d="${path}" fill="none" stroke="${c}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  </div>`;
}

// Bar chart: 14 bars × 3px, heights from Figma
// Standard (602:20796): container 40px. Big (602:24711): container 58px.
function barChartHtml(dir, heights = BARS_STANDARD, containerH = 40) {
  const main = dir === 'up' ? C_BU : C_DN;
  const light = dir === 'up' ? C_BU_LT : C_BD_LT;
  const bars = heights.map((h, i) => {
    const col = (i === 6) ? light : main;
    const ht = h >= containerH ? '100%' : `${h}px`;
    return `<div style="width:3px;height:${ht};background:${col};border-radius:32px;flex-shrink:0;"></div>`;
  }).join('');
  return `<div style="display:flex;align-items:flex-end;justify-content:space-between;width:100%;height:${containerH}px;flex-shrink:0;">${bars}</div>`;
}

// Segmented horizontal bar chart — barchart-segm-hor only (602:25133)
// 12 columns × 6px, gap 10px, 50px tall container
// Segment colors: gray #F2F4F7, green #22C55E, pink #EC4899, sky #33BFFF, blue #1D4ED8
const SEGM_COLORS = ['#F2F4F7', '#22C55E', '#EC4899', '#33BFFF', '#1D4ED8'];
const SEGM_DATA = [
  [16, 3, 7, 9, 6],
  [4,  3, 9, 4, 15],
  [17, 18, 3, 4, 8],
  [13, 4, 18, 4, 11],
  [22, 13, 0, 4, 11],
  [14, 2, 19, 4, 11],
  [16, 8, 7, 4, 6],
  [13, 3, 9, 4, 6],
  [7,  3, 0, 6, 3],
  [7,  0, 0, 4, 3],
  [13, 3, 9, 4, 6],
  [7,  3, 6, 0, 3],
];

function segmChartHtml() {
  return `<div style="display:flex;align-items:flex-end;gap:10px;height:50px;flex-shrink:0;">
    ${SEGM_DATA.map(segs => `
      <div style="display:flex;flex-direction:column;width:6px;overflow:hidden;flex-shrink:0;">
        ${segs.map((h, si) => h > 0
          ? `<div style="width:6px;height:${h}px;background:${SEGM_COLORS[si]};flex-shrink:0;"></div>`
          : '').join('')}
      </div>`).join('')}
  </div>`;
}

// ── Card builders ─────────────────────────────────────────────────────────────

const BASE = `background:white;border-radius:8px;box-shadow:0 1px 1px rgba(0,0,0,0.08);box-sizing:border-box;overflow:hidden;position:relative;`;

// Linechart — label + value + trend in top row, chart flush at bottom (286×168px)
function cardLinechart(dir) {
  return `<div style="${BASE}width:286px;height:168px;padding:16px;display:flex;flex-direction:column;gap:16px;">
    <div style="display:flex;gap:16px;align-items:flex-start;">
      <div style="flex:1;min-width:0;">
        <div style="${F('500 12px/1.5')}color:#111928;">Total Sales</div>
        <div style="${F('600 24px/1.5')}color:#111928;">$16,416</div>
      </div>
      ${trendBadge(dir)}
      ${PILL}
    </div>
    ${lineChartSvg(dir)}
  </div>`;
}

// Linechart-vert — label + value, then "Compared to day prior" + trend, chart flush at bottom
function cardLinechartVert(dir) {
  const c = dir === 'up' ? C_UP : C_DN;
  const pct = dir === 'up' ? '+12.5%' : '−8.3%';
  const icon = dir === 'up' ? iconTrendUp(c) : iconTrendDown(c);
  return `<div style="${BASE}width:286px;height:168px;padding:16px;display:flex;flex-direction:column;gap:4px;">
    <div style="display:flex;gap:16px;align-items:flex-start;">
      <div style="flex:1;min-width:0;">
        <div style="${F('500 12px/1.5')}color:#111928;">Total Sales</div>
        <div style="${F('600 24px/1.5')}color:#111928;">$16,416</div>
      </div>
      ${PILL}
    </div>
    <div style="display:flex;align-items:center;justify-content:space-between;">
      <span style="${F('400 12px/1.5')}color:#6B7280;">Compared to day prior</span>
      <div style="display:flex;align-items:center;gap:2px;flex-shrink:0;">
        ${icon}
        <span style="${F('600 12px/1.5')}color:${c};white-space:nowrap;">${pct}</span>
      </div>
    </div>
    ${lineChartSvg(dir)}
  </div>`;
}

// barchart — label + trend + value in header, bars at bottom (286×200px)
function cardBarchart(dir) {
  return `<div style="${BASE}width:286px;height:200px;padding:32px 32px 16px;display:flex;flex-direction:column;gap:40px;">
    <div style="display:flex;gap:16px;align-items:flex-start;">
      <div style="flex:1;min-width:0;">
        <div style="${F('500 12px/1.5')}color:#111928;">Total Sales</div>
        ${trendBadge(dir)}
        <div style="${F('600 24px/1.5')}color:#111928;">$16,416</div>
      </div>
      ${PILL}
    </div>
    ${barChartHtml(dir)}
  </div>`;
}

// barchart-vert — label + value, then "Compared to day prior" + trend, bars at bottom (286×200px)
function cardBarchartVert(dir = 'up') {
  const c = dir === 'up' ? C_UP : C_DN;
  const pct = dir === 'up' ? '+12.5%' : '−8.3%';
  const icon = dir === 'up' ? iconTrendUp(c) : iconTrendDown(c);
  return `<div style="${BASE}width:286px;height:200px;padding:32px 32px 16px;display:flex;flex-direction:column;gap:24px;">
    <div style="display:flex;flex-direction:column;gap:16px;">
      <div style="display:flex;gap:16px;align-items:flex-start;">
        <div style="flex:1;min-width:0;">
          <div style="${F('500 12px/1.5')}color:#111928;">Total Sales</div>
          <div style="${F('600 24px/1.5')}color:#111928;">$16,416</div>
        </div>
        ${PILL}
      </div>
      <div style="display:flex;align-items:center;justify-content:space-between;">
        <span style="${F('400 12px/1.5')}color:#6B7280;">Compared to day prior</span>
        <div style="display:flex;align-items:center;gap:2px;flex-shrink:0;">
          ${icon}
          <span style="${F('600 12px/1.5')}color:${c};white-space:nowrap;">${pct}</span>
        </div>
      </div>
    </div>
    ${barChartHtml(dir)}
  </div>`;
}

// barchart-big (602:24711) — Charts frame [222x58], bars at idx 2,4,9,12 are full height (58px)
function cardBarchartBig(dir = 'up') {
  return `<div style="${BASE}width:286px;height:200px;padding:32px 32px 16px;display:flex;flex-direction:column;gap:40px;">
    <div style="display:flex;gap:16px;align-items:flex-start;">
      <div style="flex:1;min-width:0;">
        <div style="${F('500 12px/1.5')}color:#111928;">Total Sales</div>
        ${trendBadge(dir)}
        <div style="${F('600 24px/1.5')}color:#111928;">$16,416</div>
      </div>
      ${PILL}
    </div>
    ${barChartHtml(dir, BARS_BIG, 58)}
  </div>`;
}

// barchart-segm-hor — wide horizontal card: segmented chart left, value right (449×104px)
function cardBarchartSegmHor() {
  return `<div style="${BASE}width:449px;height:104px;padding:32px 32px 16px;display:flex;flex-direction:row;gap:16px;align-items:flex-end;">
    <div style="display:flex;flex-direction:column;gap:8px;flex:1;min-width:0;justify-content:flex-end;">
      <div style="${F('500 12px/1.5')}color:#111928;">Total Sales</div>
      ${segmChartHtml()}
    </div>
    <div style="display:flex;flex-direction:column;align-items:flex-end;gap:4px;flex-shrink:0;">
      ${trendBadge('up')}
      <span style="${F('400 12px/1.5')}color:#6B7280;text-align:right;">Compared to day prior</span>
    </div>
    ${PILL}
  </div>`;
}

// Credit — same shell as Linechart, different chart curve (286×168px)
function cardCredit() {
  const c = C_UP;
  // Credit uses a smoother, credit-card-style wave (different shape from standard linechart)
  const path = 'M0,40 C40,42 60,28 100,32 C140,36 155,20 190,24 C220,28 240,18 286,8';
  const area = `${path} L286,70 L0,70 Z`;
  return `<div style="${BASE}width:286px;height:168px;padding:16px;display:flex;flex-direction:column;gap:16px;">
    <div style="display:flex;gap:16px;align-items:flex-start;">
      <div style="flex:1;min-width:0;">
        <div style="${F('500 12px/1.5')}color:#111928;">Total Sales</div>
        <div style="${F('600 24px/1.5')}color:#111928;">$16,416</div>
      </div>
      ${trendBadge('up')}
      ${PILL}
    </div>
    <div style="position:absolute;bottom:0;left:0;right:0;">
      <svg style="width:100%;height:70px;display:block;" viewBox="0 0 286 70" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
        <path d="${area}" fill="${c}" opacity="0.12"/>
        <path d="${path}" fill="none" stroke="${c}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </div>
  </div>`;
}

// ── Story exports ─────────────────────────────────────────────────────────────

export default {
  title: 'Iris Library/Card/KPI',
  tags: ['autodocs', 'stable'],
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `
**Card KPI** — Figma component node \`602:20752\`.

Single-metric card with an embedded mini-chart. Shows one top-level business metric with a trend indicator and a supporting sparkline or bar chart.

**When to use**
- Displaying a single numeric KPI at a glance (revenue, users, conversion rate)
- Pairing a metric with its trend direction and magnitude
- Dashboard overview rows where space is limited (286 × 168 – 200 px cards)

**When NOT to use**
- Multiple related metrics in one card → use Card/Reporting
- Detailed time-series exploration → use a full chart component
- Non-numeric content → use Card/Basics

**Anatomy**
\`[label] [value] [trend badge] [icon pill] / [chart area flush to bottom]\`

The chart type (\`property3\`) and trend direction (\`property2\`) are the two Figma variant axes.

### Variant map
| \`property3\` | \`property2\` | Node |
|---|---|---|
| Linechart | Upwards / Downwards | 602:20753, 602:20589 |
| Linechart-vert | Upwards / Downwards | 602:22376, 602:22409 |
| barchart | Upwards / Downwards | 602:20796, 602:20845 |
| barchart-vert | Upwards | 602:23611 |
| barchart-big | Upwards | 602:24711 |
| barchart-segm-hor | Upwards | 602:25133 |
| Credit | Upwards | 602:23265 |

### Tokens
| Element | Value |
|---|---|
| Trend UP | \`#5850EC\` old-colors/brand/600 |
| Trend DOWN | \`#E74694\` old-colors/pink/500 |
| Bar UP | \`#6875F5\` / \`#B4C6FC\` (index-6 lighter) |
| Bar DOWN | \`#E74694\` / \`#F8B4D9\` (index-6 lighter) |
| Icon pill bg | \`#D1D5DB\` old-colors/gray/300 |
| Icon | currency-dollar, 16px, fill #6B7280 |

### QA checklist
- Trend UP is **purple #5850EC** — not green
- Trend DOWN is **pink #E74694** — not red
- Icon pill is grey circle, always \`currency-dollar\`, no coloured badge boxes
- Bar chart: 14 bars, 3px wide, border-radius 32px, bar at index 6 = lighter shade
- Line chart: height 69–70px, flush to card bottom, absolutely positioned
        `,
      },
    },
  },
  argTypes: {
    // ── Appearance ───────────────────────────────────────────
    direction: {
      control: 'select',
      options: ['up', 'down'],
      description: 'Trend direction. **Up** = #5850EC (brand purple). **Down** = #E74694 (pink). Never use green/red — matches Figma tokens exactly.',
      table: { category: 'Appearance', defaultValue: { summary: 'up' } },
    },
    chartType: {
      control: 'select',
      options: ['linechart', 'linechart-vert', 'barchart', 'barchart-vert', 'barchart-big', 'barchart-segm-hor', 'credit'],
      description: 'Chart variant (Figma `property3`). Determines card dimensions and chart layout.',
      table: { category: 'Appearance', defaultValue: { summary: 'linechart' } },
    },
  },
  args: {
    direction: 'up',
    chartType: 'linechart',
  },
};

/* ── Interactive (Controls) ─────────────────────────────────────────────────── */

export const Interactive = {
  name: 'Interactive (Controls)',
  parameters: {
    docs: {
      description: {
        story: 'Use **direction** to switch trend up/down and **chartType** to preview any KPI variant. Source snippet reflects the linechart structure — adapt the chart area for other types.',
      },
      source: {
        transform: (_src, storyCtx) => {
          const { direction } = storyCtx.args;
          const c = direction === 'up' ? '#5850EC' : '#E74694';
          const pct = direction === 'up' ? '+12.5%' : '−8.3%';
          const arrow = direction === 'up'
            ? `<path fill-rule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z" clip-rule="evenodd"/>`
            : `<path fill-rule="evenodd" d="M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z" clip-rule="evenodd"/>`;
          return `<!-- Card KPI — Linechart / ${direction === 'up' ? 'Upwards' : 'Downwards'} -->
<div style="background:var(--color-bg-surface);border:1px solid var(--color-border-default);border-radius:8px;
            width:286px;height:168px;padding:16px;
            display:flex;flex-direction:column;gap:16px;position:relative;overflow:hidden;">
  <div style="display:flex;gap:16px;align-items:flex-start;">
    <div style="flex:1;">
      <div style="font:500 12px/1.5 sans-serif;color:#111928;">Total Sales</div>
      <div style="font:600 24px/1.5 sans-serif;color:#111928;">$16,416</div>
    </div>
    <!-- Trend badge -->
    <div style="display:flex;align-items:center;gap:2px;">
      <svg width="16" height="16" viewBox="0 0 20 20" fill="${c}" xmlns="http://www.w3.org/2000/svg">
        ${arrow}
      </svg>
      <span style="font:600 12px/1.5 sans-serif;color:${c};">${pct}</span>
    </div>
    <!-- Icon pill -->
    <div style="background:#D1D5DB;border-radius:999px;padding:9px;display:flex;align-items:center;justify-content:center;">
      <!-- currency-dollar icon -->
    </div>
  </div>
  <!-- Line chart SVG — flush to card bottom, absolutely positioned -->
  <div style="position:absolute;bottom:0;left:0;right:0;">
    <svg style="width:100%;height:70px;display:block;" viewBox="0 0 286 70" preserveAspectRatio="none">
      <!-- sparkline path here -->
    </svg>
  </div>
</div>`;
        },
      },
    },
  },
  render: ({ direction, chartType }) => {
    switch (chartType) {
      case 'linechart-vert':   return cardLinechartVert(direction);
      case 'barchart':         return cardBarchart(direction);
      case 'barchart-vert':    return cardBarchartVert(direction);
      case 'barchart-big':     return cardBarchartBig(direction);
      case 'barchart-segm-hor': return cardBarchartSegmHor();
      case 'credit':           return cardCredit();
      default:                 return cardLinechart(direction);
    }
  },
};

/* ── Linechart ──────────────────────────────────────────────────────────────── */

export const LinechartUp = {
  name: 'Linechart — Upwards (602:20753)',
  parameters: {
    docs: {
      description: { story: 'Smooth line chart trending upward. Trend badge: **#5850EC** (brand purple). Area fill: 12% opacity.' },
      source: {
        language: 'html',
        code: `<!-- Card KPI — Linechart (286×168px) -->
<div style="background:var(--color-bg-surface);border-radius:8px;box-shadow:0 1px 1px rgba(0,0,0,.08);
            width:286px;height:168px;padding:16px;display:flex;flex-direction:column;
            gap:16px;position:relative;overflow:hidden;box-sizing:border-box;">

  <!-- Header row: label + trend + icon pill -->
  <div style="display:flex;gap:16px;align-items:flex-start;">
    <div style="flex:1;min-width:0;">
      <div style="font:500 12px/1.5 'Inter',sans-serif;color:#111928;">Total Sales</div>
      <div style="font:600 24px/1.5 'Inter',sans-serif;color:#111928;">$16,416</div>
    </div>
    <!-- Trend badge (up: #5850EC, down: #E74694) -->
    <div style="display:flex;align-items:center;gap:2px;flex-shrink:0;">
      <!-- trend-up arrow SVG here -->
      <span style="font:600 12px/1.5 'Inter',sans-serif;color:#5850EC;">+12.5%</span>
    </div>
    <!-- Grey pill icon -->
    <div style="background:#D1D5DB;border-radius:999px;padding:9px;flex-shrink:0;">
      <!-- currency-dollar SVG here -->
    </div>
  </div>

  <!-- Line chart SVG — flush to card bottom, absolute positioned -->
  <div style="position:absolute;bottom:0;left:0;right:0;">
    <svg style="width:100%;height:70px;display:block;" viewBox="0 0 286 70" preserveAspectRatio="none">
      <!-- area fill at 12% opacity (color #5850EC for up, #E74694 for down) -->
      <path d="M0,60 C30,55 55,64 85,48 …286,3 L286,70 L0,70 Z" fill="#5850EC" opacity="0.12"/>
      <!-- stroke line -->
      <path d="M0,60 C30,55 55,64 85,48 …286,3" fill="none" stroke="#5850EC" stroke-width="2"
            stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  </div>
</div>`,
      },
    },
  },
  render: () => `<div style="display:flex;gap:16px;flex-wrap:wrap;">${cardLinechart('up')}${cardLinechart('down')}</div>`,
};

export const LinechartDown = {
  name: 'Linechart — Downwards (602:20589)',
  parameters: {
    docs: {
      description: { story: 'Smooth line chart trending downward. Trend badge: **#E74694** (pink).' },
      source: {
        language: 'html',
        code: `<!-- Card KPI — Linechart Downwards: same structure as Linechart Upwards.
     Change trend color to #E74694 (pink) and invert the SVG path direction. -->
<div style="background:var(--color-bg-surface);border-radius:8px;box-shadow:0 1px 1px rgba(0,0,0,.08);
            width:286px;height:168px;padding:16px;display:flex;flex-direction:column;
            gap:16px;position:relative;overflow:hidden;box-sizing:border-box;">
  <div style="display:flex;gap:16px;align-items:flex-start;">
    <div style="flex:1;min-width:0;">
      <div style="font:500 12px/1.5 'Inter',sans-serif;color:#111928;">Total Sales</div>
      <div style="font:600 24px/1.5 'Inter',sans-serif;color:#111928;">$16,416</div>
    </div>
    <div style="display:flex;align-items:center;gap:2px;flex-shrink:0;">
      <!-- trend-down arrow SVG -->
      <span style="font:600 12px/1.5 'Inter',sans-serif;color:#E74694;">−8.3%</span>
    </div>
    <div style="background:#D1D5DB;border-radius:999px;padding:9px;flex-shrink:0;"><!-- dollar SVG --></div>
  </div>
  <div style="position:absolute;bottom:0;left:0;right:0;">
    <svg style="width:100%;height:70px;display:block;" viewBox="0 0 286 70" preserveAspectRatio="none">
      <path d="M0,3 C28,8 50,2 80,18 …286,65 L286,70 L0,70 Z" fill="#E74694" opacity="0.12"/>
      <path d="M0,3 C28,8 50,2 80,18 …286,65" fill="none" stroke="#E74694" stroke-width="2"
            stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  </div>
</div>`,
      },
    },
  },
  render: () => cardLinechart('down'),
};

/* ── Linechart-vert ─────────────────────────────────────────────────────────── */

export const LinechartVertUp = {
  name: 'Linechart-vert — Upwards (602:22376)',
  parameters: {
    docs: {
      description: { story: 'Line chart with "Compared to day prior" label. Up + down variants side by side.' },
      source: {
        language: 'html',
        code: `<!-- Card KPI — Linechart-vert (286×168px)
     Difference from Linechart: trend badge moves below the value, "Compared to day prior" label added. -->
<div style="background:var(--color-bg-surface);border-radius:8px;box-shadow:0 1px 1px rgba(0,0,0,.08);
            width:286px;height:168px;padding:16px;display:flex;flex-direction:column;
            gap:4px;position:relative;overflow:hidden;box-sizing:border-box;">
  <div style="display:flex;gap:16px;align-items:flex-start;">
    <div style="flex:1;min-width:0;">
      <div style="font:500 12px/1.5 'Inter',sans-serif;color:#111928;">Total Sales</div>
      <div style="font:600 24px/1.5 'Inter',sans-serif;color:#111928;">$16,416</div>
    </div>
    <div style="background:#D1D5DB;border-radius:999px;padding:9px;flex-shrink:0;"><!-- dollar SVG --></div>
  </div>
  <!-- "Compared to day prior" row with trend -->
  <div style="display:flex;align-items:center;justify-content:space-between;">
    <span style="font:400 12px/1.5 'Inter',sans-serif;color:#6B7280;">Compared to day prior</span>
    <div style="display:flex;align-items:center;gap:2px;flex-shrink:0;">
      <!-- trend arrow SVG -->
      <span style="font:600 12px/1.5 'Inter',sans-serif;color:#5850EC;">+12.5%</span>
    </div>
  </div>
  <!-- Line chart SVG (same as Linechart, see LinechartUp story) -->
  <div style="position:absolute;bottom:0;left:0;right:0;"><!-- SVG chart --></div>
</div>`,
      },
    },
  },
  render: () => `<div style="display:flex;gap:16px;flex-wrap:wrap;">${cardLinechartVert('up')}${cardLinechartVert('down')}</div>`,
};

/* ── barchart ───────────────────────────────────────────────────────────────── */

export const BarchartUp = {
  name: 'barchart — Upwards (602:20796)',
  parameters: {
    docs: {
      description: { story: '14 bars × 3px. Bar color: **#6875F5** (brand/500), bar at index 6 lighter: **#B4C6FC** (brand/300). Trend in header row.' },
      source: {
        language: 'html',
        code: `<!-- Card KPI — barchart (286×200px)
     Layout: header (label + trend + value) at top, bar chart at bottom.
     14 bars × 3px wide, border-radius 32px, aligned to flex-end (bottom).
     Bar color: up=#6875F5, down=#E74694. Index-6 bar is lighter: up=#B4C6FC, down=#F8B4D9. -->
<div style="background:var(--color-bg-surface);border-radius:8px;box-shadow:0 1px 1px rgba(0,0,0,.08);
            width:286px;height:200px;padding:32px 32px 16px;display:flex;flex-direction:column;
            gap:40px;box-sizing:border-box;">
  <!-- Header -->
  <div style="display:flex;gap:16px;align-items:flex-start;">
    <div style="flex:1;min-width:0;">
      <div style="font:500 12px/1.5 'Inter',sans-serif;color:#111928;">Total Sales</div>
      <!-- Trend badge -->
      <div style="display:flex;align-items:center;gap:2px;">
        <!-- trend-up arrow SVG -->
        <span style="font:600 12px/1.5 'Inter',sans-serif;color:#5850EC;">+12.5%</span>
      </div>
      <div style="font:600 24px/1.5 'Inter',sans-serif;color:#111928;">$16,416</div>
    </div>
    <div style="background:#D1D5DB;border-radius:999px;padding:9px;flex-shrink:0;"><!-- dollar SVG --></div>
  </div>
  <!-- Bar chart: 14 bars, flex-end aligned, container 56px tall -->
  <div style="display:flex;align-items:flex-end;justify-content:space-between;width:100%;height:56px;flex-shrink:0;">
    <div style="width:3px;height:15px;background:#6875F5;border-radius:32px;"></div>
    <!-- … 13 more bars with heights from Figma … -->
    <!-- Index 6: width:3px; background:#B4C6FC (lighter shade) -->
  </div>
</div>`,
      },
    },
  },
  render: () => `<div style="display:flex;gap:16px;flex-wrap:wrap;">${cardBarchart('up')}${cardBarchart('down')}</div>`,
};

/* ── barchart-vert ──────────────────────────────────────────────────────────── */

export const BarchartVert = {
  name: 'barchart-vert — Upwards (602:23611)',
  parameters: {
    docs: {
      description: { story: 'Same 14-bar layout with "Compared to day prior" label above the chart.' },
      source: {
        language: 'html',
        code: `<!-- Card KPI — barchart-vert (286×200px)
     Same as barchart but "Compared to day prior" label sits between the value and the bars. -->
<div style="background:var(--color-bg-surface);border-radius:8px;box-shadow:0 1px 1px rgba(0,0,0,.08);
            width:286px;height:200px;padding:32px 32px 16px;display:flex;flex-direction:column;
            gap:24px;box-sizing:border-box;">
  <div style="display:flex;flex-direction:column;gap:16px;">
    <div style="display:flex;gap:16px;align-items:flex-start;">
      <div style="flex:1;min-width:0;">
        <div style="font:500 12px/1.5 'Inter',sans-serif;color:#111928;">Total Sales</div>
        <div style="font:600 24px/1.5 'Inter',sans-serif;color:#111928;">$16,416</div>
      </div>
      <div style="background:#D1D5DB;border-radius:999px;padding:9px;flex-shrink:0;"><!-- dollar SVG --></div>
    </div>
    <div style="display:flex;align-items:center;justify-content:space-between;">
      <span style="font:400 12px/1.5 'Inter',sans-serif;color:#6B7280;">Compared to day prior</span>
      <div style="display:flex;align-items:center;gap:2px;">
        <!-- trend-up arrow SVG -->
        <span style="font:600 12px/1.5 'Inter',sans-serif;color:#5850EC;">+12.5%</span>
      </div>
    </div>
  </div>
  <!-- Bar chart (same as barchart, see BarchartUp story) -->
  <div style="display:flex;align-items:flex-end;justify-content:space-between;width:100%;height:56px;flex-shrink:0;">
    <!-- 14 bars × 3px, heights from Figma -->
  </div>
</div>`,
      },
    },
  },
  render: () => cardBarchartVert('up'),
};

/* ── barchart-big ───────────────────────────────────────────────────────────── */

export const BarchartBig = {
  name: 'barchart-big — Upwards (602:24711)',
  parameters: {
    docs: {
      description: { story: 'barchart with 4 bars at full container height instead of 2 (indexes 4, 9, 12, 13 = full).' },
      source: {
        language: 'html',
        code: `<!-- Card KPI — barchart-big (286×200px)
     Same structure as barchart, but bars at indexes 4, 9, 12, and 13 reach full height (56px).
     All other bar heights differ from standard barchart. -->
<div style="background:var(--color-bg-surface);border-radius:8px;box-shadow:0 1px 1px rgba(0,0,0,.08);
            width:286px;height:200px;padding:32px 32px 16px;display:flex;flex-direction:column;
            gap:40px;box-sizing:border-box;">
  <!-- Header: label + trend + value -->
  <div style="display:flex;gap:16px;align-items:flex-start;">
    <div style="flex:1;min-width:0;">
      <div style="font:500 12px/1.5 'Inter',sans-serif;color:#111928;">Total Sales</div>
      <div style="display:flex;align-items:center;gap:2px;">
        <!-- trend-up arrow SVG -->
        <span style="font:600 12px/1.5 'Inter',sans-serif;color:#5850EC;">+12.5%</span>
      </div>
      <div style="font:600 24px/1.5 'Inter',sans-serif;color:#111928;">$16,416</div>
    </div>
    <div style="background:#D1D5DB;border-radius:999px;padding:9px;flex-shrink:0;"><!-- dollar SVG --></div>
  </div>
  <!-- Bar chart: 14 bars × 3px, indexes 4/9/12/13 at 56px (100%) -->
  <div style="display:flex;align-items:flex-end;justify-content:space-between;width:100%;height:56px;flex-shrink:0;">
    <div style="width:3px;height:15px;background:#6875F5;border-radius:32px;"></div>
    <!-- … 11 more bars — index 6: background:#B4C6FC (lighter shade) … -->
    <div style="width:3px;height:56px;background:#6875F5;border-radius:32px;"></div><!-- index 12 -->
    <div style="width:3px;height:56px;background:#6875F5;border-radius:32px;"></div><!-- index 13 -->
  </div>
</div>`,
      },
    },
  },
  render: () => cardBarchartBig('up'),
};

/* ── barchart-segm-hor ──────────────────────────────────────────────────────── */

export const BarchartSegmHor = {
  name: 'barchart-segm-hor — Upwards (602:25133)',
  parameters: {
    docs: {
      description: { story: 'Wide horizontal card (449×104px). Left: 12 segmented columns with 5 color categories. Right: trend + subtitle.' },
      source: {
        language: 'html',
        code: `<!-- Card KPI — barchart-segm-hor (449×104px)
     Layout: flex-row. Left: label + 12 segmented columns. Right: trend badge + "Compared to day prior".
     5 segment colors: gray #F2F4F7, green #22C55E, pink #EC4899, sky #33BFFF, blue #1D4ED8.
     Column width: 6px. Gap between columns: 10px. Container height: 50px. -->
<div style="background:var(--color-bg-surface);border-radius:8px;box-shadow:0 1px 1px rgba(0,0,0,.08);
            width:449px;height:104px;padding:32px 32px 16px;
            display:flex;flex-direction:row;gap:16px;align-items:flex-end;box-sizing:border-box;">

  <!-- Left: label + segmented columns -->
  <div style="display:flex;flex-direction:column;gap:8px;flex:1;min-width:0;justify-content:flex-end;">
    <div style="font:500 12px/1.5 'Inter',sans-serif;color:#111928;">Total Sales</div>
    <!-- Segmented chart: 12 columns × 6px wide, aligned to bottom -->
    <div style="display:flex;align-items:flex-end;gap:10px;height:50px;flex-shrink:0;">
      <!-- Each column: stacked color segments (height in px from data) -->
      <div style="display:flex;flex-direction:column;width:6px;overflow:hidden;flex-shrink:0;">
        <div style="width:6px;height:16px;background:#F2F4F7;flex-shrink:0;"></div>
        <div style="width:6px;height:3px;background:#22C55E;flex-shrink:0;"></div>
        <!-- … repeat for all 12 columns … -->
      </div>
    </div>
  </div>

  <!-- Right: trend badge + subtitle + icon pill -->
  <div style="display:flex;flex-direction:column;align-items:flex-end;gap:4px;flex-shrink:0;">
    <div style="display:flex;align-items:center;gap:2px;">
      <!-- trend-up arrow SVG -->
      <span style="font:600 12px/1.5 'Inter',sans-serif;color:#5850EC;">+12.5%</span>
    </div>
    <span style="font:400 12px/1.5 'Inter',sans-serif;color:#6B7280;text-align:right;">Compared to day prior</span>
  </div>
  <div style="background:#D1D5DB;border-radius:999px;padding:9px;flex-shrink:0;"><!-- dollar SVG --></div>

</div>`,
      },
    },
  },
  render: () => cardBarchartSegmHor(),
};

/* ── Credit ─────────────────────────────────────────────────────────────────── */

export const CreditUp = {
  name: 'Credit — Upwards (602:23265)',
  parameters: {
    docs: {
      description: { story: 'Credit-style variant with a distinct wave curve shape (different from standard Linechart).' },
      source: {
        language: 'html',
        code: `<!-- Card KPI — Credit (286×168px)
     Same shell and header as Linechart. Different SVG path — smoother, credit-card-style wave.
     Trend color: #5850EC (brand/600). No "Compared to day prior" row (same as standard Linechart). -->
<div style="background:var(--color-bg-surface);border-radius:8px;box-shadow:0 1px 1px rgba(0,0,0,.08);
            width:286px;height:168px;padding:16px;display:flex;flex-direction:column;
            gap:16px;position:relative;overflow:hidden;box-sizing:border-box;">

  <!-- Header row: label + value + trend + icon pill -->
  <div style="display:flex;gap:16px;align-items:flex-start;">
    <div style="flex:1;min-width:0;">
      <div style="font:500 12px/1.5 'Inter',sans-serif;color:#111928;">Total Sales</div>
      <div style="font:600 24px/1.5 'Inter',sans-serif;color:#111928;">$16,416</div>
    </div>
    <div style="display:flex;align-items:center;gap:2px;flex-shrink:0;">
      <!-- trend-up arrow SVG -->
      <span style="font:600 12px/1.5 'Inter',sans-serif;color:#5850EC;">+12.5%</span>
    </div>
    <div style="background:#D1D5DB;border-radius:999px;padding:9px;flex-shrink:0;"><!-- dollar SVG --></div>
  </div>

  <!-- Credit-style wave chart — flush to card bottom, absolutely positioned
       Path differs from standard linechart: smoother, shallower curve with plateau in the middle -->
  <div style="position:absolute;bottom:0;left:0;right:0;">
    <svg style="width:100%;height:70px;display:block;" viewBox="0 0 286 70"
         preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
      <!-- area fill at 12% opacity -->
      <path d="M0,40 C40,42 60,28 100,32 C140,36 155,20 190,24 C220,28 240,18 286,8
               L286,70 L0,70 Z" fill="#5850EC" opacity="0.12"/>
      <!-- stroke line -->
      <path d="M0,40 C40,42 60,28 100,32 C140,36 155,20 190,24 C220,28 240,18 286,8"
            fill="none" stroke="#5850EC" stroke-width="2"
            stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  </div>
</div>`,
      },
    },
  },
  render: () => cardCredit(),
};

/* ── All variants overview ──────────────────────────────────────────────────── */

export const AllVariants = {
  name: 'All variants — overview',
  args: { direction: 'up' },
  parameters: {
    controls: { include: ['direction'] },
    layout: 'fullscreen',
    docs: {
      description: {
        story: 'All 7 chart types side by side. Use the **direction** control to switch all cards between up and down trend simultaneously.',
      },
      source: {
        code: `<!-- See individual chart type stories for copy-paste snippets -->`,
        language: 'html',
      },
    },
  },
  render: ({ direction }) => `
    <div style="padding:32px;background:#f3f4f6;display:flex;flex-wrap:wrap;gap:24px;align-items:flex-end;">
      <div>
        <p style="font:600 11px/1.2 sans-serif;color:#6B7280;text-transform:uppercase;letter-spacing:.06em;margin:0 0 8px;">Linechart</p>
        ${cardLinechart(direction)}
      </div>
      <div>
        <p style="font:600 11px/1.2 sans-serif;color:#6B7280;text-transform:uppercase;letter-spacing:.06em;margin:0 0 8px;">Linechart-vert</p>
        ${cardLinechartVert(direction)}
      </div>
      <div>
        <p style="font:600 11px/1.2 sans-serif;color:#6B7280;text-transform:uppercase;letter-spacing:.06em;margin:0 0 8px;">barchart</p>
        ${cardBarchart(direction)}
      </div>
      <div>
        <p style="font:600 11px/1.2 sans-serif;color:#6B7280;text-transform:uppercase;letter-spacing:.06em;margin:0 0 8px;">barchart-vert</p>
        ${cardBarchartVert(direction)}
      </div>
      <div>
        <p style="font:600 11px/1.2 sans-serif;color:#6B7280;text-transform:uppercase;letter-spacing:.06em;margin:0 0 8px;">barchart-big</p>
        ${cardBarchartBig(direction)}
      </div>
      <div>
        <p style="font:600 11px/1.2 sans-serif;color:#6B7280;text-transform:uppercase;letter-spacing:.06em;margin:0 0 8px;">Credit</p>
        ${cardCredit()}
      </div>
      <div>
        <p style="font:600 11px/1.2 sans-serif;color:#6B7280;text-transform:uppercase;letter-spacing:.06em;margin:0 0 8px;">barchart-segm-hor</p>
        ${cardBarchartSegmHor()}
      </div>
    </div>`,
};
