/**
 * Iris Library — Card / Metric
 * Source: Figma › ---- Cards · Frame: Cards (13559:76419)
 */
import { ICON } from './card-icons.js';

/**
 * ## Metric card
 *
 * A KPI value **plus** a `.card-sparkline` — the inline SVG mini-chart
 * that communicates trend shape without axis labels.
 *
 * ### Anatomy
 * ```
 * .card
 *   .card-header
 *     .card-header-title
 *     .card-header-sub          (optional: "vs last 30 days")
 *     .card-period-select       (optional: 7d / 30d / 90d buttons)
 *   .card-body-padded
 *     .card-stat-value          current value
 *     .card-trend               delta row
 *     .card-sparkline           inline SVG  (viewBox="0 0 200 48")
 * ```
 *
 * ### Metric vs KPI vs Chart
 * | | KPI | Metric | Chart |
 * |---|---|---|---|
 * | `.card-stat-value` | ✓ | ✓ | optional |
 * | `.card-sparkline` (48px) | ✗ | ✓ | ✗ |
 * | `.card-chart-area` (≥200px) | ✗ | ✗ | ✓ |
 * | Axis labels / legend | ✗ | ✗ | ✓ |
 *
 * ### Sparkline SVG spec
 * - Container: `.card-sparkline` — `width:100%; height:48px`
 * - ViewBox: `0 0 200 48`
 * - Line: `<polyline>` — `stroke-width:2`, `stroke-linejoin:round`
 * - Fill: `<polygon>` extending to bottom edge — `opacity:0.15`
 * - Colour: matches trend direction — green (#0E9F6E) up / red (#E02424) down / gray flat
 * - No external chart library required; replace with Chart.js/D3 in production
 *
 * ### Period selector
 * `.card-period-select` wraps `.card-period-btn` elements.
 * Active period gets `.active` (dark bg, white text).
 * Place in `.card-header-controls` (right-aligned).
 */
export default {
  title: 'Iris Library/Card/Metric',
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    backgrounds: { default: 'light' },
    docs: {
      description: {
        component: 'KPI value + sparkline card. Use when trend *shape* matters, not just the delta. For a full chart with axis labels see Card/Chart.',
      },
    },
  },
  argTypes: {
    label: {
      control: 'text',
      description: 'Metric label.',
      table: { category: 'Content', type: { summary: 'string' } },
    },
    value: {
      control: 'text',
      description: 'Formatted value, e.g. `"142,384"`.',
      table: { category: 'Content', type: { summary: 'string' } },
    },
    trendValue: {
      control: 'text',
      description: 'Delta string including sign, e.g. `"+18.2%"`.',
      table: { category: 'Trend', type: { summary: 'string' } },
    },
    trendDirection: {
      control: { type: 'radio' },
      options: ['up', 'down', 'neutral'],
      description: '`up` = green ↑ · `down` = red ↓ · `neutral` = gray →. Also drives sparkline colour unless `chartColor` overrides.',
      table: { category: 'Trend', type: { summary: "'up'|'down'|'neutral'" } },
    },
    chartType: {
      control: { type: 'radio' },
      options: ['line', 'bar'],
      description: '`line` = polyline sparkline · `bar` = 7-bar weekly breakdown.',
      table: { category: 'Chart', type: { summary: "'line'|'bar'" } },
    },
    compareText: {
      control: 'text',
      description: 'Comparison context, e.g. `"vs last month"`.',
      table: { category: 'Trend', type: { summary: 'string' } },
    },
    iconTone: {
      control: { type: 'select' },
      options: ['none', 'blue', 'green', 'red', 'yellow', 'purple', 'dark'],
      description: 'Icon badge colour tone. `none` hides the badge.',
      table: { category: 'Icon', type: { summary: 'string' } },
    },
    backgroundColor: {
      control: { type: 'select' },
      options: ['surface', 'muted', 'subtle', 'success-soft', 'warning-soft', 'danger-soft'],
      description: 'Card background tint.',
      table: { category: 'Style', type: { summary: 'string' } },
    },
    borderRadius: {
      control: { type: 'select' },
      options: [12, 16, 20, 24],
      description: 'Card corner radius (px).',
      table: { category: 'Style', type: { summary: 'number' }, defaultValue: { summary: '16' } },
    },
    padding: {
      control: { type: 'select' },
      options: [16, 20, 24, 32],
      description: 'Body top/bottom padding (px).',
      table: { category: 'Style', type: { summary: 'number' }, defaultValue: { summary: '16' } },
    },
    chartColor: {
      control: { type: 'select' },
      options: ['default', 'blue', 'green', 'pink', 'red', 'neutral'],
      description: 'Sparkline colour override. `default` follows `trendDirection`.',
      table: { category: 'Chart', type: { summary: 'string' } },
    },
  },
  args: {
    label:          'Total visitors',
    value:          '142,384',
    trendValue:     '+18.2%',
    trendDirection: 'up',
    chartType:      'line',
    compareText:    'vs last month',
    iconTone:       'none',
    backgroundColor: 'surface',
    borderRadius:   16,
    padding:        20,
    chartColor:     'default',
  },
};

/* ── Arg → CSS value maps (Default story only) ──────────────── */
const BG_MAP = {
  'surface':      '',
  'muted':        'var(--color-bg-tertiary)',
  'subtle':       'var(--color-bg-secondary)',
  'success-soft': 'var(--color-bg-success-soft)',
  'warning-soft': '#FFFBEB',
  'danger-soft':  '#FEF2F2',
};
const CHART_COLOR_MAP = {
  'default': '',
  'blue':    '#1C64F2',
  'green':   '#0E9F6E',
  'pink':    '#E74694',
  'red':     '#E02424',
  'neutral': '#6B7280',
};

/* ── SVG helpers ─────────────────────────────── */
const COLORS = { up: '#0E9F6E', down: '#E02424', flat: '#6B7280' };
const POINTS = {
  up:   '0,36 25,33 50,35 75,29 100,31 125,23 150,19 175,15 200,12',
  down: '0,12 25,15 50,13 75,19 100,17 125,25 150,29 175,33 200,36',
  flat: '0,26 25,24 50,28 75,25 100,27 125,24 150,26 175,25 200,26',
};

const lineSparkline = (dir) => {
  const c = COLORS[dir];
  const p = POINTS[dir];
  return `<svg class="card-sparkline" viewBox="0 0 200 48"
               preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
    <polygon points="${p} 200,48 0,48" fill="${c}" opacity="0.1"/>
    <polyline points="${p}" fill="none" stroke="${c}" stroke-width="1.5"
              stroke-linejoin="round" stroke-linecap="round"/>
  </svg>`;
};

const barSparkline = (vals, color) => {
  const svgW = 200, svgH = 48;
  const n = vals.length;
  const barW = 9;
  const gapW = (svgW - n * barW) / (n + 1); // evenly distributed gaps
  const maxH = 36;                            // bars use lower 36 of 48px
  return `<svg class="card-sparkline" viewBox="0 0 ${svgW} ${svgH}"
               preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
    ${vals.map((v, i) => {
      const h = Math.max(3, Math.round((v / 100) * maxH));
      const x = (gapW + i * (barW + gapW)).toFixed(1);
      return `<rect x="${x}" y="${svgH - h}" width="${barW}" height="${h}"
                    fill="${color}" rx="2"/>`;
    }).join('')}
  </svg>`;
};

const BAR_VALS = {
  up:   [28, 35, 32, 40, 45, 42, 50, 55, 52, 62, 65, 70, 76, 84],
  down: [80, 76, 82, 74, 70, 72, 64, 60, 65, 56, 50, 46, 40, 34],
  flat: [50, 54, 48, 53, 56, 51, 54, 50, 55, 52, 50, 56, 52, 51],
};

const trendClass = (d) => d === 'up' ? 'card-trend-up' : d === 'down' ? 'card-trend-down' : 'card-trend-neutral';
const trendArrow = (d) => d === 'up' ? '↑' : d === 'down' ? '↓' : '→';
/* Pill badge — Figma KPI trend pattern */
const trendBadge = (dir, delta) => {
  const up = dir === 'up', dn = dir === 'down';
  const bg  = up ? 'var(--color-bg-success-soft)' : dn ? '#FEF2F2' : 'var(--color-bg-tertiary)';
  const col = up ? '#057A55' : dn ? '#9B1C1C' : '#374151';
  const arr = up ? '↑'      : dn ? '↓'       : '→';
  return `<span style="display:inline-flex;align-items:center;gap:3px;font-size:var(--text-xs);font-weight:var(--font-semibold);padding:2px 8px;border-radius:var(--radius-full);background:${bg};color:${col};">${arr}&thinsp;${delta}</span>`;
};

/* ─────────────────────────────────────────────
   DEFAULT — fully interactive
───────────────────────────────────────────── */
/**
 * All props wired to Controls. Change `direction` and `chartType` to preview
 * all sparkline variants from a single story.
 *
 * **QA checklist**
 * - `direction:up` → green line, ↑ arrow, `card-trend-up` colour
 * - `direction:down` → red line, ↓ arrow — **not** up-arrow (was a bug in a prior version)
 * - `chartType:bar` → 7 vertical bars fill full card width proportionally
 * - Sparkline height is always 48px regardless of card width
 * - No axis labels or grid lines on sparkline (these belong in Chart cards)
 */
export const Default = {
  parameters: {
    backgrounds: { default: 'white' },
    docs: { description: { story: 'Fully interactive metric card. Use `direction` + `chartType` Controls to switch all sparkline variants.' } },
  },
  render: ({ label, value, trendValue, trendDirection, chartType, compareText, iconTone, backgroundColor, borderRadius, padding, chartColor }) => {
    /* trendDirection uses 'neutral'; internal COLORS/POINTS use 'flat' */
    const dir = trendDirection === 'neutral' ? 'flat' : trendDirection;
    const resolvedColor = CHART_COLOR_MAP[chartColor] || COLORS[dir];
    const pts = POINTS[dir];
    const svg = chartType === 'bar'
      ? barSparkline(BAR_VALS[dir], resolvedColor)
      : `<svg class="card-sparkline" viewBox="0 0 200 48"
             preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <polygon points="${pts} 200,48 0,48" fill="${resolvedColor}" opacity="0.1"/>
          <polyline points="${pts}" fill="none" stroke="${resolvedColor}" stroke-width="1.5"
                    stroke-linejoin="round" stroke-linecap="round"/>
        </svg>`;
    return `
      <div class="card" style="max-width:280px;border-radius:${borderRadius}px;${BG_MAP[backgroundColor] ? `background:${BG_MAP[backgroundColor]};` : ''}">
        <div class="card-body-padded" style="padding-top:${padding}px;padding-bottom:0;">
          <div style="display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:8px;">
            <div class="card-stat-label" style="font-weight:var(--font-medium);">${label}</div>
            ${iconTone !== 'none' ? `<div class="card-icon card-icon-${iconTone}" style="flex-shrink:0;">${ICON.chart}</div>` : ''}
          </div>
          <div class="card-stat-value">${value}</div>
          <div style="display:flex;align-items:center;gap:8px;margin-top:8px;">
            ${trendBadge(trendDirection, trendValue)}
            <span style="font-size:var(--text-sm);color:var(--color-text-body-subtle);">${compareText}</span>
          </div>
          ${svg}
        </div>
      </div>`;
  },
};

/* ─────────────────────────────────────────────
   ALL SPARKLINE DIRECTIONS
───────────────────────────────────────────── */
/**
 * All three direction variants side-by-side for visual regression.
 *
 * **QA checklist**
 * - Up sparkline: line rises left-to-right; colour #0E9F6E
 * - Down sparkline: line falls left-to-right; colour #E02424; arrow is ↓ (not ↑)
 * - Flat sparkline: roughly horizontal; colour #6B7280
 */
export const AllDirections = {
  name: 'All sparkline directions',
  parameters: {
    backgrounds: { default: 'white' },
    docs: { description: { story: 'Up / down / flat side-by-side. Use for visual regression of sparkline colours and arrow glyphs.' } },
  },
  render: () => `
    <div style="display:flex;gap:16px;flex-wrap:wrap;">
      ${(['up','down','flat']).map(dir => `
        <div class="card" style="width:220px;">
          <div class="card-header">
            <div class="card-header-title">
              ${dir === 'up' ? 'Visitors' : dir === 'down' ? 'Bounce rate' : 'Avg session'}</div>
          </div>
          <div class="card-body-padded" style="padding-top:0;padding-bottom:0;">
            <div class="card-stat-value">
              ${dir === 'up' ? '142,384' : dir === 'down' ? '38.4%' : '3m 42s'}</div>
            <div style="display:flex;align-items:center;gap:8px;margin-top:8px;">
              ${trendBadge(dir, dir === 'up' ? '+18.2%' : dir === 'down' ? '+4.6%' : '–0.2%')}
              <span style="font-size:var(--text-sm);color:var(--color-text-body-subtle);">vs last month</span>
            </div>
            ${lineSparkline(dir)}
          </div>
        </div>`).join('')}
    </div>`,
};

/* ─────────────────────────────────────────────
   BAR SPARKLINE
───────────────────────────────────────────── */
/**
 * Bar variant — 7 vertical rects representing weekly values.
 * Useful when individual period bars matter more than overall shape.
 *
 * **QA checklist**
 * - 7 bars fill the full SVG width proportionally
 * - Bar colour matches trend direction
 * - No gap between bar bottom and SVG bottom edge
 */
export const BarSparkline = {
  name: 'Mini bar sparkline',
  parameters: {
    backgrounds: { default: 'white' },
    docs: { description: { story: '7-bar weekly breakdown variant. Use when individual period values are meaningful.' } },
  },
  render: () => `
    <div style="display:flex;gap:16px;flex-wrap:wrap;">
      <div class="card" style="width:260px;">
        <div class="card-header">
          <div class="card-header-title">Weekly signups</div>
        </div>
        <div class="card-body-padded" style="padding-top:0;padding-bottom:0;">
          <div class="card-stat-value">1,284</div>
          <div style="display:flex;align-items:center;gap:8px;margin-top:8px;">
            ${trendBadge('up', '+8.4%')}
            <span style="font-size:var(--text-sm);color:var(--color-text-body-subtle);">this week</span>
          </div>
          ${barSparkline([28,35,32,40,45,42,50,55,52,62,65,70,76,84], '#1C64F2')}
        </div>
      </div>
      <div class="card" style="width:260px;">
        <div class="card-header">
          <div class="card-header-title">Daily errors</div>
        </div>
        <div class="card-body-padded" style="padding-top:0;padding-bottom:0;">
          <div class="card-stat-value">124</div>
          <div style="display:flex;align-items:center;gap:8px;margin-top:8px;">
            ${trendBadge('down', '−22.4%')}
            <span style="font-size:var(--text-sm);color:var(--color-text-body-subtle);">vs yesterday</span>
          </div>
          ${barSparkline([80,76,82,74,70,72,64,60,65,56,50,46,40,34], '#E02424')}
        </div>
      </div>
    </div>`,
};

/* ─────────────────────────────────────────────
   WITH PERIOD SELECTOR
───────────────────────────────────────────── */
/**
 * `.card-period-select` wraps `.card-period-btn` elements in `.card-header-controls`.
 * Active state: `.active` class → `background:--color-bg-dark; color:#fff`.
 *
 * **QA checklist**
 * - Active button: dark bg, white text, no border-radius overlap at joins
 * - Inactive buttons: surface bg, secondary text
 * - Period select group has `border:1px solid --color-border-default`; border between buttons `border-right:1px solid`
 */
export const WithPeriodSelector = {
  name: 'With period selector',
  parameters: {
    backgrounds: { default: 'white' },
    docs: { description: { story: 'Period toggle (7d/30d/90d) in card header. Active button uses `.active` class.' } },
  },
  render: () => `
    <div class="card" style="max-width:360px;">
      <div class="card-header">
        <div class="card-header-title">Revenue</div>
        <div class="card-period-select">
          <button class="card-period-btn">7d</button>
          <button class="card-period-btn active">30d</button>
          <button class="card-period-btn">90d</button>
        </div>
      </div>
      <div class="card-body-padded" style="padding-top:0;padding-bottom:0;">
        <div class="card-stat-value">$82,310</div>
        <div style="display:flex;align-items:center;gap:8px;margin-top:8px;">
          ${trendBadge('up', '+24.1%')}
          <span style="font-size:var(--text-sm);color:var(--color-text-body-subtle);">vs previous period</span>
        </div>
        ${lineSparkline('up')}
      </div>
    </div>`,
};

/* ─────────────────────────────────────────────
   METRIC GRID 4-UP
───────────────────────────────────────────── */
/**
 * Four metric cards in a 1fr grid — the primary dashboard header pattern.
 *
 * **QA checklist**
 * - Cards equal height via CSS grid stretch
 * - Sparklines all same height (48px)
 * - No axis labels visible on any sparkline
 */
export const MetricGrid = {
  name: 'Metric grid — 4-up',
  parameters: {
    layout: 'fullscreen',
    docs: { description: { story: '4-column metric grid. Each card has value + trend + sparkline. Primary dashboard header pattern.' } },
  },
  render: () => `
    <div style="padding:24px;">
      <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:16px;max-width:960px;">
        ${[
          ['Page views',   '4.3M',   '+28.4%', 'up',   lineSparkline('up')],
          ['Unique users', '214k',   '+12.1%', 'up',   lineSparkline('up')],
          ['Avg session',  '3m 42s', '−1.8%',  'down', lineSparkline('down')],
          ['Bounce rate',  '37.2%',  '−3.2%',  'flat', lineSparkline('flat')],
        ].map(([label, value, delta, dir, svg]) => `
          <div class="card">
            <div class="card-body-padded" style="padding-bottom:0;">
              <div class="card-stat-label" style="margin-bottom:4px;font-weight:var(--font-medium);">${label}</div>
              <div class="card-stat-value" style="font-size:var(--text-2xl);">${value}</div>
              <div style="display:flex;align-items:center;gap:6px;margin-top:6px;">
                ${trendBadge(dir, delta)}
              </div>
              ${svg}
            </div>
          </div>`).join('')}
      </div>
    </div>`,
};
