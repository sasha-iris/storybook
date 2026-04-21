/**
 * Iris Library — Card / KPI
 * Source: Figma › ---- Cards · Frame: Cards (13559:76419)
 */
import { ICON, compact } from './card-icons.js';

/**
 * ## KPI card
 *
 * A single-metric card where a large number is the entire story.
 * No chart area — if you need a trend line, use **Card/Metric**.
 *
 * ### Anatomy
 * ```
 * .card
 *   .card-header
 *     .card-icon               40×40px coloured icon box  (optional)
 *     .card-header-controls    action menu                (optional)
 *   .card-body-padded
 *     .card-stat-label         metric name  (text-sm / secondary)
 *     .card-stat-value         number hero  (2rem / bold)
 *     .card-trend              delta row
 *       .card-trend-arrow      ↑ or ↓ or →
 *       delta text             e.g. "+12.5%"
 *       .card-trend-context    e.g. "vs last month"
 * ```
 *
 * ### KPI vs Metric vs Chart
 * | | KPI | Metric | Chart |
 * |---|---|---|---|
 * | Numeric hero | ✓ | ✓ | optional |
 * | Sparkline | ✗ | ✓ (48px) | ✗ |
 * | Chart area | ✗ | ✗ | ✓ (≥200px) |
 * | Axis labels | ✗ | ✗ | ✓ |
 * | Legend | ✗ | ✗ | ✓ |
 *
 * ### Trend colour tokens
 * | Direction | Class | Colour |
 * |---|---|---|
 * | Improved | `.card-trend-up` | `#0E9F6E` (green) |
 * | Declined | `.card-trend-down` | `#E02424` (red) |
 * | No change | `.card-trend-neutral` | `#6B7280` (gray) |
 *
 * ### Sizing
 * - Standard KPI width: 240–280px (¼ of a 1080px grid with 16px gaps)
 * - `.card-stat-value` → `2rem / bold` (standard)
 * - `.card-stat-value-lg` → `2.5rem / extrabold` (hero variant)
 */
export default {
  title: 'Iris Library/Card/KPI',
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    backgrounds: { default: 'light' },
    docs: {
      description: {
        component: `Single-metric **KPI card** — the numeric value is the entire story.
No chart area. No sparkline. Just a number, a label, and a trend delta.

### When to use KPI vs Metric vs Chart

| Need | Card family |
|---|---|
| Number + trend delta only — no chart | **Card/KPI** |
| Number + 48 px inline sparkline (\`.card-sparkline\`) | **Card/Metric** |
| Number + 60 px flush embedded chart (no axis) | **Card/Chart** |

### Slots

| Slot | Class | Required |
|---|---|---|
| Metric name | \`.card-stat-label\` | Yes |
| Numeric hero | \`.card-stat-value\` or \`.card-stat-value-lg\` | Yes |
| Trend row | \`.card-trend\` + modifier | No |
| Icon box | \`.card-icon\` + \`.card-icon-{color}\` | No |

### Trend modifiers

| Class | Colour | When |
|---|---|---|
| \`.card-trend-up\` | \`#0E9F6E\` green | Value improved |
| \`.card-trend-down\` | \`#E02424\` red | Value declined |
| \`.card-trend-neutral\` | \`#6B7280\` gray | No meaningful change |

### Size variants

- \`.card-stat-value\` — \`2rem / 700\` — standard KPI
- \`.card-stat-value-lg\` — \`2.5rem / 800\` — hero dashboard KPI

### Developer notes

- The trend **arrow glyph** (\`↑\` \`↓\` \`→\`) and the trend **colour class** are independent.
  Always set both together. A red arrow pointing up, or a green arrow pointing down,
  are both confusing and incorrect.
- Icon box is optional. Hide it by omitting the \`.card-header\` entirely when no icon is needed.
- Pre-format the value string before passing it to the card — do not use raw floats.
  Use \`Intl.NumberFormat\` or a formatting helper.`,
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
      description: 'Formatted value, e.g. `"$45,231"`.',
      table: { category: 'Content', type: { summary: 'string' } },
    },
    trendValue: {
      control: 'text',
      description: 'Delta string including sign, e.g. `"+20.1%"`.',
      table: { category: 'Trend', type: { summary: 'string' } },
    },
    trendDirection: {
      control: { type: 'radio' },
      options: ['up', 'down', 'neutral'],
      description: '`up` = green ↑ · `down` = red ↓ · `neutral` = gray →',
      table: { category: 'Trend', type: { summary: "'up'|'down'|'neutral'" } },
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
      options: [8, 12, 16, 20, 24],
      description: 'Card corner radius (px).',
      table: { category: 'Style', type: { summary: 'number' }, defaultValue: { summary: '8' } },
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
      description: 'Trend row colour override. `default` follows the direction token.',
      table: { category: 'Style', type: { summary: 'string' } },
    },
  },
  args: {
    label:          'Total Sales',
    value:          '$16,416',
    trendValue:     '-23.17%',
    trendDirection: 'up',
    compareText:    'Compared to day prior',
    iconTone:       'blue',
    backgroundColor: 'surface',
    borderRadius:   8,
    padding:        32,
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
  'blue':    'var(--color-bg-primary)',    /* #1C64F2 */
  'green':   'var(--color-success)',       /* #0E9F6E */
  'pink':    'var(--iris-pink-500)',        /* old-colors/pink/500 */
  'red':     'var(--color-danger)',         /* #E02424 */
  'neutral': 'var(--color-text-body-subtle)',/* old-colors/gray/500 */
};

/* Helpers */
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

/* ── SVG icon helpers ────────────────────────────────────────── */
const dollarIcon = `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M8 1.5v13M5.5 4.5C5.5 3.4 6.6 2.5 8 2.5c1.4 0 2.5.9 2.5 2S9.4 6.3 8 6.5c-1.6.3-2.5 1-2.5 2.2 0 1.2 1.1 2.3 2.5 2.3 1.4 0 2.5-.9 2.5-2" stroke="var(--iris-gray-800)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;

const trendUpIcon = (col) => `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M2 11L6 7L9 10L14 4" stroke="${col}" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M10 4H14V8"           stroke="${col}" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;

const trendDownIcon = (col) => `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M2 5L6 9L9 6L14 12" stroke="${col}" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M10 12H14V8"         stroke="${col}" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;

const trendNeutralIcon = (col) => `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M2 8H14M10 4L14 8L10 12" stroke="${col}" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;

/* ── Bar chart SVG helper ────────────────────────────────────── */
/**
 * Renders 14 SVG <rect> bars into a viewBox="0 0 222 40" SVG.
 * Inner card width = 286px − 32px − 32px padding = 222px.
 * justify-content:space-between → gap = (222 − 14×3) / 13
 * Index 6 always gets mutedColor (Figma muted bar token).
 */
const mkBarsHtml = (heights, mainColor, mutedColor) => {
  const svgW = 222, svgH = 40, barW = 3, n = heights.length;
  const gap  = (svgW - n * barW) / (n - 1);
  return heights.map((h, i) => {
    const x = (i * (barW + gap)).toFixed(3);
    const y = (svgH - h).toFixed(3);
    return `<rect x="${x}" y="${y}" width="${barW}" height="${h}" fill="${i === 6 ? mutedColor : mainColor}" rx="1.5"/>`;
  }).join('');
};

/* ── Exact Figma bar heights (px) — node 602:20752 set ──────── */
// h-full bars resolve to 40px (chart area = card 200px − pt32 − pb16 − gap − header)
// Source: get_design_context on file ZKtEULdYKaXe5uQl1J6ijI node 602:20752
const FH = {
  // barchart-vert / Up  (602:23611)  — used in Default
  vertUp:       [15.536, 16.357, 27.857, 17.179, 40, 25.393, 19.643, 8.964, 29.5, 40, 19.643, 13.893, 25,     40    ],
  // barchart / Up  (602:20796)
  barchartUp:   [15.536, 16.357, 27.857, 17.179, 40, 25.393, 19.643, 8.964, 29.5, 40, 19.643, 13.893, 25,     36.071],
  // barchart / Down  (602:20845)
  barchartDown: [15.536, 16.357, 27.857, 17.179, 40, 25.393, 19.643, 8.964, 29.5, 40, 19.643, 13.893, 36.071, 20    ],
  // barchart-big / Up  (602:24711)  — bars 2 and 12 are h-full
  barchartBig:  [15.536, 16.357, 40,     17.179, 40, 25.393, 19.643, 8.964, 29.5, 40, 19.643, 13.893, 40,     36.071],
};

/* ── Line chart SVG helpers ─────────────────────────────────── */
/**
 * Full-bleed area line chart for the 286×69 px absolute chart zone.
 * APPROXIMATED: Figma chart areas are server-rendered PNG assets
 * (imgCharts / imgCharts1 / imgCharts3 in the design context output).
 * Exact paths cannot be extracted from the Figma file.
 * Visual character (rising vs falling wave) is preserved; precise curves are not.
 *
 * Up   → stroke #6875F5 (old-colors/brand/500), fill rgba(104,117,245,0.12)
 * Down → stroke #E74694 (old-colors/pink/500),  fill rgba(231,70,148,0.12)
 */
const lineChartSvg = (isUp) => {
  const stroke = isUp ? 'var(--iris-brand-500)' : 'var(--iris-pink-500)';
  const fill   = isUp ? 'var(--iris-brand-fill)' : 'var(--iris-pink-fill)';
  // Paths approximate the wave character visible in the Figma screenshot.
  // viewBox 0 0 286 69 — full card width, chart zone height.
  const upPath   = 'M0,54 C22,50 34,42 54,37 C74,32 84,24 104,18 C120,13 130,19 150,12 C168,6 178,10 200,5 C218,2 240,3 270,2 L286,1';
  const downPath = 'M0,13 C22,17 34,26 54,31 C74,36 84,29 104,38 C120,45 130,39 150,48 C168,56 178,50 200,57 C218,63 240,61 270,65 L286,67';
  const d = isUp ? upPath : downPath;
  return `<svg viewBox="0 0 286 69" xmlns="http://www.w3.org/2000/svg"
               style="width:100%;height:100%;display:block;overflow:visible;">
    <path d="${d} L286,69 L0,69 Z" fill="${fill}"/>
    <path d="${d}" fill="none" stroke="${stroke}" stroke-width="1.5"
          stroke-linecap="round" stroke-linejoin="round"/>
  </svg>`;
};

/**
 * Credit / Up chart (node 602:23265) — uses imgCharts2 in Figma.
 * Unique asset not shared with linechart variants. Approximated here as a
 * gradual-improvement curve with more pronounced initial dip (credit-style).
 * Color follows barchart-vert / Up tokens.
 */
const creditChartSvg = () => {
  const d = 'M0,50 C14,46 24,38 42,32 C58,27 68,34 86,27 C102,21 110,13 128,9 C142,6 152,11 170,6 C186,2 200,5 222,3 C248,1 268,2 286,1';
  return `<svg viewBox="0 0 286 69" xmlns="http://www.w3.org/2000/svg"
               style="width:100%;height:100%;display:block;overflow:visible;">
    <path d="${d} L286,69 L0,69 Z" fill="var(--iris-brand-fill)"/>
    <path d="${d}" fill="none" stroke="var(--iris-brand-500)" stroke-width="1.5"
          stroke-linecap="round" stroke-linejoin="round"/>
  </svg>`;
};

/* ─────────────────────────────────────────────
   DEFAULT  (Figma node 602-20752 — barchart-vert)
───────────────────────────────────────────── */
/**
 * Fully interactive KPI card — exact Figma2Code parity for node 602-20752.
 *
 * Layout (column, gap:24px):
 * 1. **Label row** — 12px/500 label + circular icon button (top-right)
 * 2. **Value** — 24px/600
 * 3. **Body row** — compare text (left) + trend icon + delta (right)
 * 4. **Bar chart** — 14 bars × 3px, space-between, #6875F5
 *
 * **QA checklist**
 * - Shell: 286×200px, padding 32 32 16 32, gap 24px, border-radius 8px
 * - Label: 12px / 500 / #111928
 * - Value: 24px / 600 / #111928
 * - Icon button: 9px padding, background #D1D5DB, border-radius 999px
 * - Compare text: 12px / 400 / #6B7280 (left, flex:1)
 * - Trend: 16px SVG icon + 12px / 600 / #5850EC (right)
 * - Chart: 14 bars at 3px width, rx:1.5, space-between, #6875F5 (index 6 = #B4C6FC)
 */
export const Default = {
  parameters: {
    docs: {
      description: {
        story: `KPI card — exact Figma2Code parity (node 602-20752, \`barchart-vert\`).
Shell is 286×200 px with \`padding:32px 32px 16px 32px\` and \`gap:24px\`.
Chart: 14 vertical bars × 3 px, \`justify-content:space-between\`, colour \`#6875F5\`.
Controls are live — change any arg to preview.`,
      },
      source: {
        language: 'html',
        code: `<!-- KPI card — barchart-vert (Figma node 602-20752) -->
<div style="display:flex;flex-direction:column;width:286px;height:200px;
            padding:32px 32px 16px 32px;gap:24px;border-radius:8px;
            background:#FFF;box-shadow:0px 1px 2px rgba(0,0,0,0.08);
            box-sizing:border-box;">
  <!-- label + icon -->
  <div style="display:flex;justify-content:space-between;align-items:flex-start;">
    <div>
      <div style="font-size:var(--text-xs);font-weight:var(--font-medium);color:var(--iris-gray-900);line-height:1.5;">Total Sales</div>
      <div style="font-size:var(--text-2xl);font-weight:var(--font-semibold);color:var(--iris-gray-900);line-height:1.5;">$16,416</div>
    </div>
    <button style="padding:9px;background:#D1D5DB;border-radius:999px;border:none;cursor:pointer;
                   display:flex;align-items:center;justify-content:center;line-height:0;">
      <!-- currency-dollar 16×16 SVG -->
    </button>
  </div>
  <!-- body row: compare text | trend -->
  <div style="display:flex;align-items:center;justify-content:space-between;">
    <span style="flex:1;font-size:var(--text-xs);font-weight:var(--font-normal);color:var(--color-text-body-subtle);">Compared to day prior</span>
    <div style="display:flex;align-items:center;gap:4px;">
      <!-- trending-up 16×16 SVG -->
      <span style="font-size:var(--text-xs);font-weight:var(--font-semibold);color:var(--iris-brand-600);">-23.17%</span>
    </div>
  </div>
  <!-- 14-bar chart, 3px bars, space-between -->
  <svg viewBox="0 0 222 40" style="width:100%;height:40px;display:block;">
    <!-- rect elements, fill:#6875F5, rx:1.5, index 6 fill:#B4C6FC -->
  </svg>
</div>`,
      },
    },
  },
  render: ({ label, value, trendValue, trendDirection, compareText,
             backgroundColor, borderRadius, padding, iconTone, chartColor }) => {
    /* Background — BG_MAP['surface'] returns '' → fall back to Figma white */
    const bg = BG_MAP[backgroundColor] || 'var(--color-bg-white)';

    /* Chart bar color — 'default' maps to '' → use Figma indigo */
    const barOverride = CHART_COLOR_MAP[chartColor];
    const barColor    = barOverride || 'var(--iris-brand-500)';
    /* Muted bar (index 6): keep Figma lavender for default, match override otherwise */
    const barMuted    = barOverride ? barColor : 'var(--iris-brand-300)';

    /* Trend color */
    const trendCol = trendDirection === 'down' ? 'var(--color-text-fg-danger)' : trendDirection === 'neutral' ? 'var(--color-text-body-subtle)' : 'var(--iris-brand-600)';
    const trendSvg = trendDirection === 'down'   ? trendDownIcon(trendCol)
                   : trendDirection === 'neutral' ? trendNeutralIcon(trendCol)
                   : trendUpIcon(trendCol);

    /* Icon button — 'none' hides it; tones map to light background swatches */
    const ICON_BG = {
      'none':   null,
      'blue':   'var(--color-bg-brand-soft)',
      'green':  '#D1FAE5',
      'red':    '#FEE2E2',
      'yellow': '#FEF3C7',
      'purple': '#EDE9FE',
      'dark':   '#374151',
    };
    const iconBg   = ICON_BG[iconTone];
    const iconHtml = iconBg !== null
      ? `<button style="padding:9px;background:${iconBg ?? 'var(--iris-gray-300)'};border-radius:var(--radius-full);
                        border:none;cursor:pointer;display:flex;align-items:center;
                        justify-content:center;line-height:0;flex-shrink:0;">${dollarIcon}</button>`
      : '';

    /* Bar heights — exact Figma px (barchart-vert / Up from FH.vertUp)
       Down + neutral have no Figma variant; these are visual approximations only */
    const vals = trendDirection === 'down'
      ? [40, 25, 14, 20, 40, 30, 9, 20, 26, 40, 18, 28, 17, 16]
      : trendDirection === 'neutral'
      ? [22, 25, 20, 24, 28, 22, 25, 20, 26, 24, 22, 25, 20, 22]
      : FH.vertUp;

    const bars = mkBarsHtml(vals, barColor, barMuted);

    /* padding arg drives top + sides; Figma bottom stays 16px */
    return `
    <div style="display:flex;flex-direction:column;width:286px;height:200px;
                padding:${padding}px ${padding}px 16px ${padding}px;gap:24px;
                border-radius:${borderRadius}px;background:${bg};
                box-shadow:var(--iris-shadow-sm);box-sizing:border-box;">
      <!-- label row + icon button -->
      <div style="display:flex;justify-content:space-between;align-items:flex-start;">
        <div>
          <div style="font-size:var(--text-xs);font-weight:var(--font-medium);color:var(--iris-gray-900);line-height:1.5;">${label}</div>
          <div style="font-size:var(--text-2xl);font-weight:var(--font-semibold);color:var(--iris-gray-900);line-height:1.5;">${value}</div>
        </div>
        ${iconHtml}
      </div>
      <!-- body row: compare text | trend -->
      <div style="display:flex;align-items:center;justify-content:space-between;gap:8px;">
        <span style="flex:1;font-size:var(--text-xs);font-weight:var(--font-normal);color:var(--color-text-body-subtle);line-height:1.5;">${compareText}</span>
        <div style="display:inline-flex;align-items:center;gap:4px;flex-shrink:0;">
          ${trendSvg}
          <span style="font-size:var(--text-xs);font-weight:var(--font-semibold);color:${trendCol};white-space:nowrap;">${trendValue}</span>
        </div>
      </div>
      <!-- 14-bar vertical mini chart -->
      <svg viewBox="0 0 222 40" xmlns="http://www.w3.org/2000/svg"
           style="width:100%;height:40px;display:block;flex-shrink:0;">${bars}</svg>
    </div>`;
  },
};

/* ─────────────────────────────────────────────
   BARCHART / UP  (Figma node 602:20796)
───────────────────────────────────────────── */
/**
 * Figma variant `barchart / Upwards` — node 602:20796.
 *
 * Differs from `barchart-vert` in two ways:
 * 1. **`gap:40px`** (not 24px) between the top row and chart area.
 * 2. **Trend row is inside the Card Header** — stacked label → trend → value
 *    (no separate Card Body row with compare text).
 *
 * Shell: 286×200 px · `padding:32px 32px 16px 32px` · `gap:40px`
 *
 * **QA checklist**
 * - Trend: icon 16×16 + delta `12px/600/#5850EC`, between label and value
 * - Bar colour: `#6875F5` (`old-colors/brand/500`)
 * - Muted bar (index 6): `#B4C6FC` (`old-colors/brand/300`)
 * - Icon button: `padding:9px` · `background:#D1D5DB` · `border-radius:999px`
 * - Bar at index 13 is `36.071px` (not `h-full` — differs from barchart-vert)
 */
export const BarchartUp = {
  name: 'barchart · Up',
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story: `Exact Figma variant **barchart / Upwards** (node 602:20796).
Shell: 286×200 px · \`padding:32px 32px 16px 32px\` · \`gap:40px\`.
Trend sits **inside the Card Header** between label and value — no compare text row.
Bar colour: \`#6875F5\` · muted bar (index 6): \`#B4C6FC\`.
For interactive controls, see **Default** (barchart-vert).`,
      },
    },
  },
  render: () => {
    const trendCol = 'var(--iris-brand-600)'; // old-colors/brand/600
    const bars = mkBarsHtml(FH.barchartUp, 'var(--iris-brand-500)', 'var(--iris-brand-300)');
    return `
    <div style="display:flex;flex-direction:column;width:286px;height:200px;
                padding:32px 32px 16px 32px;gap:40px;border-radius:var(--radius-md);background:var(--color-bg-white);
                box-shadow:var(--iris-shadow-sm);box-sizing:border-box;">
      <!-- top row: Card Header + icon button -->
      <div style="display:flex;gap:16px;align-items:flex-start;width:100%;flex-shrink:0;">
        <div style="flex:1;min-width:0;display:flex;flex-direction:column;align-items:flex-start;">
          <div style="font-size:var(--text-xs);font-weight:var(--font-medium);color:var(--iris-gray-900);line-height:1.5;">Total Sales</div>
          <div style="display:inline-flex;align-items:center;">
            ${trendUpIcon(trendCol)}
            <span style="font-size:var(--text-xs);font-weight:var(--font-semibold);color:${trendCol};line-height:1.5;white-space:nowrap;">-23.17%</span>
          </div>
          <div style="font-size:var(--text-2xl);font-weight:var(--font-semibold);color:var(--iris-gray-900);line-height:1.5;">$16,416</div>
        </div>
        <button style="padding:9px;background:var(--iris-gray-300);border-radius:var(--radius-full);border:none;cursor:pointer;
                       display:flex;align-items:center;justify-content:center;line-height:0;flex-shrink:0;">
          ${dollarIcon}
        </button>
      </div>
      <!-- chart: 14 bars, space-between, #6875F5 -->
      <svg viewBox="0 0 222 40" xmlns="http://www.w3.org/2000/svg"
           style="width:100%;height:40px;display:block;flex:1;">${bars}</svg>
    </div>`;
  },
};

/* ─────────────────────────────────────────────
   BARCHART / DOWN  (Figma node 602:20845)
───────────────────────────────────────────── */
/**
 * Figma variant `barchart / Downwards` — node 602:20845.
 *
 * Identical structure to `barchart / Up` — only colours change.
 *
 * Shell: 286×200 px · `padding:32px 32px 16px 32px` · `gap:40px`
 *
 * **QA checklist**
 * - Trend: icon 16×16 + delta `12px/600/#E74694` (old-colors/pink/500)
 * - Bar colour: `#E74694` (`old-colors/pink/500`)
 * - Muted bar (index 6): `#F8B4D9` (`old-colors/pink/300`)
 * - Bar at index 12 is `36.071px` (not 25px as in Up) — height profile differs
 * - Bar at index 13 is `20px` (not 36.071px as in Up)
 */
export const BarchartDown = {
  name: 'barchart · Down',
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story: `Exact Figma variant **barchart / Downwards** (node 602:20845).
Shell: 286×200 px · \`padding:32px 32px 16px 32px\` · \`gap:40px\`.
Bar colour: \`#E74694\` (old-colors/pink/500) · muted bar (index 6): \`#F8B4D9\` (pink/300).
Bar height profile differs from Up at indices 12 and 13.`,
      },
    },
  },
  render: () => {
    const trendCol = 'var(--iris-pink-500)'; // old-colors/pink/500
    const bars = mkBarsHtml(FH.barchartDown, 'var(--iris-pink-500)', 'var(--iris-pink-300)');
    return `
    <div style="display:flex;flex-direction:column;width:286px;height:200px;
                padding:32px 32px 16px 32px;gap:40px;border-radius:var(--radius-md);background:var(--color-bg-white);
                box-shadow:var(--iris-shadow-sm);box-sizing:border-box;">
      <!-- top row: Card Header + icon button -->
      <div style="display:flex;gap:16px;align-items:flex-start;width:100%;flex-shrink:0;">
        <div style="flex:1;min-width:0;display:flex;flex-direction:column;align-items:flex-start;">
          <div style="font-size:var(--text-xs);font-weight:var(--font-medium);color:var(--iris-gray-900);line-height:1.5;">Total Sales</div>
          <div style="display:inline-flex;align-items:center;">
            ${trendDownIcon(trendCol)}
            <span style="font-size:var(--text-xs);font-weight:var(--font-semibold);color:${trendCol};line-height:1.5;white-space:nowrap;">-23.17%</span>
          </div>
          <div style="font-size:var(--text-2xl);font-weight:var(--font-semibold);color:var(--iris-gray-900);line-height:1.5;">$16,416</div>
        </div>
        <button style="padding:9px;background:var(--iris-gray-300);border-radius:var(--radius-full);border:none;cursor:pointer;
                       display:flex;align-items:center;justify-content:center;line-height:0;flex-shrink:0;">
          ${dollarIcon}
        </button>
      </div>
      <!-- chart: 14 bars, space-between, #E74694 -->
      <svg viewBox="0 0 222 40" xmlns="http://www.w3.org/2000/svg"
           style="width:100%;height:40px;display:block;flex:1;">${bars}</svg>
    </div>`;
  },
};

/* ─────────────────────────────────────────────
   BARCHART-BIG / UP  (Figma node 602:24711)
───────────────────────────────────────────── */
/**
 * Figma variant `barchart-big / Upwards` — node 602:24711.
 *
 * Same shell and layout as `barchart / Up` (`gap:40px`, trend in header).
 * Differs in bar height profile: bars at indices 2 and 12 are `h-full` (40px)
 * instead of 27.857px and 25px. Creates a denser, taller-looking chart.
 *
 * Shell: 286×200 px · `padding:32px 32px 16px 32px` · `gap:40px`
 *
 * **QA checklist**
 * - Bar colour: `#6875F5` · muted (index 6): `#B4C6FC`
 * - Bars 2, 4, 9, 12 are `40px` (h-full) — 4 full-height bars vs 3 in barchart-vert
 * - Bar 13: `36.071px` (same as barchart / Up)
 * - No compare text row — trend is inside Card Header
 */
export const BarchartBig = {
  name: 'barchart-big · Up',
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story: `Exact Figma variant **barchart-big / Upwards** (node 602:24711).
Shell: 286×200 px · \`padding:32px 32px 16px 32px\` · \`gap:40px\`.
Bar heights differ from barchart / Up: indices 2 and 12 are \`h-full\` (40 px), giving a denser profile.
Bar colour: \`#6875F5\` · muted bar (index 6): \`#B4C6FC\`.`,
      },
    },
  },
  render: () => {
    const trendCol = 'var(--iris-brand-600)'; // old-colors/brand/600
    const bars = mkBarsHtml(FH.barchartBig, 'var(--iris-brand-500)', 'var(--iris-brand-300)');
    return `
    <div style="display:flex;flex-direction:column;width:286px;height:200px;
                padding:32px 32px 16px 32px;gap:40px;border-radius:var(--radius-md);background:var(--color-bg-white);
                box-shadow:var(--iris-shadow-sm);box-sizing:border-box;">
      <!-- top row: Card Header + icon button -->
      <div style="display:flex;gap:16px;align-items:flex-start;width:100%;flex-shrink:0;">
        <div style="flex:1;min-width:0;display:flex;flex-direction:column;align-items:flex-start;">
          <div style="font-size:var(--text-xs);font-weight:var(--font-medium);color:var(--iris-gray-900);line-height:1.5;">Total Sales</div>
          <div style="display:inline-flex;align-items:center;">
            ${trendUpIcon(trendCol)}
            <span style="font-size:var(--text-xs);font-weight:var(--font-semibold);color:${trendCol};line-height:1.5;white-space:nowrap;">-23.17%</span>
          </div>
          <div style="font-size:var(--text-2xl);font-weight:var(--font-semibold);color:var(--iris-gray-900);line-height:1.5;">$16,416</div>
        </div>
        <button style="padding:9px;background:var(--iris-gray-300);border-radius:var(--radius-full);border:none;cursor:pointer;
                       display:flex;align-items:center;justify-content:center;line-height:0;flex-shrink:0;">
          ${dollarIcon}
        </button>
      </div>
      <!-- chart: 14 bars, space-between, #6875F5 — bars 2,4,9,12 = 40px -->
      <svg viewBox="0 0 222 40" xmlns="http://www.w3.org/2000/svg"
           style="width:100%;height:40px;display:block;flex:1;">${bars}</svg>
    </div>`;
  },
};

/* ─────────────────────────────────────────────
   LINECHART / UP  (Figma node 602:20753)
───────────────────────────────────────────── */
/**
 * Figma variant `Linechart / Upwards` — node 602:20753.
 *
 * Shell: 286×168 px · `padding:16px` · `gap:16px` · `position:relative` · `overflow:hidden`
 *
 * Top row (flex, gap:16, align-items:flex-start) has **3 children**:
 * 1. Label/value column (`flex:1`) — 12px/500 label + 24px/600 value
 * 2. Trend column (`flex-shrink:0`, `align-items:flex-end`) — trendUp icon + delta
 * 3. Icon button — `padding:9px` · `background:#D1D5DB` · `border-radius:999px`
 *
 * Chart zone: `position:absolute` · `bottom:0` · `left:-1.45%` · `right:-1.45%` · `height:69px`
 * (slight negative bleed mirrors Figma's full-bleed image asset treatment)
 * **Chart path is approximated** — Figma exports this as a PNG image asset.
 *
 * **QA checklist**
 * - Shell: 286×168 px, 16px padding all sides, 8px border-radius
 * - Label: 12px / 500 / #111928 · Value: 24px / 600 / #111928
 * - Trend: 16px trendUp SVG (color #5850EC) + 12px / 600 / #5850EC
 * - Chart: absolute, bottom-flush, ~-1.45% side bleed, height 69px
 * - Stroke: #6875F5 · Fill: rgba(104,117,245,0.12)
 */
export const LinechartUp = {
  name: 'Linechart · Up',
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story: `Exact Figma variant **Linechart / Upwards** (node 602:20753).
Shell: 286×168 px · \`padding:16px\` · \`gap:16px\` · overflow hidden.
Top row: label/value (flex:1) | trend icon+delta (shrink:0) | icon button.
Chart: absolute, bottom-flush, slight side bleed (~−1.45%), height 69 px.
**Note:** chart path is approximated — Figma exports this area as a PNG asset.`,
      },
    },
  },
  render: () => {
    const trendCol = 'var(--iris-brand-600)'; // old-colors/brand/600
    return `
    <div style="position:relative;display:flex;flex-direction:column;width:286px;height:168px;
                padding:16px;gap:16px;border-radius:var(--radius-md);background:var(--color-bg-white);
                box-shadow:var(--iris-shadow-sm);box-sizing:border-box;overflow:hidden;">
      <!-- top row: label/value | trend | icon button -->
      <div style="display:flex;gap:16px;align-items:flex-start;flex-shrink:0;">
        <!-- 1st child: label + value -->
        <div style="flex:1;min-width:0;display:flex;flex-direction:column;justify-content:center;">
          <div style="font-size:var(--text-xs);font-weight:var(--font-medium);color:var(--iris-gray-900);line-height:1.5;">Total Sales</div>
          <div style="font-size:var(--text-2xl);font-weight:var(--font-semibold);color:var(--iris-gray-900);line-height:1.5;">$16,416</div>
        </div>
        <!-- 2nd child: Card Body (trend icon + delta) -->
        <div style="flex-shrink:0;display:flex;flex-direction:column;justify-content:center;
                    align-items:flex-end;gap:4px;align-self:center;">
          <div style="display:inline-flex;align-items:center;gap:4px;">
            ${trendUpIcon(trendCol)}
            <span style="font-size:var(--text-xs);font-weight:var(--font-semibold);color:${trendCol};white-space:nowrap;">-23.17%</span>
          </div>
        </div>
        <!-- 3rd child: icon button -->
        <button style="padding:9px;background:var(--iris-gray-300);border-radius:var(--radius-full);border:none;cursor:pointer;
                       display:flex;align-items:center;justify-content:center;line-height:0;flex-shrink:0;">
          ${dollarIcon}
        </button>
      </div>
      <!-- chart: absolute, bottom-flush, slight side bleed -->
      <div style="position:absolute;bottom:0;left:-1.45%;right:-1.45%;height:69px;">
        ${lineChartSvg(true)}
      </div>
    </div>`;
  },
};

/* ─────────────────────────────────────────────
   LINECHART / DOWN  (Figma node 602:20589)
───────────────────────────────────────────── */
/**
 * Figma variant `Linechart / Downwards` — node 602:20589.
 *
 * Identical structure to `Linechart / Up`. Only the trend and chart colours change.
 *
 * Shell: 286×168 px · `padding:16px` · `gap:16px`
 *
 * **QA checklist**
 * - Trend: trendDown SVG (color #E74694) + 12px / 600 / #E74694
 * - Chart: stroke #E74694 (old-colors/pink/500) · fill rgba(231,70,148,0.12)
 * - All layout dimensions identical to Linechart / Up
 */
export const LinechartDown = {
  name: 'Linechart · Down',
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story: `Exact Figma variant **Linechart / Downwards** (node 602:20589).
Shell: 286×168 px · \`padding:16px\` · \`gap:16px\`.
Trend color: \`#E74694\` (old-colors/pink/500). Chart stroke: \`#E74694\`, fill: \`rgba(231,70,148,0.12)\`.
All layout dimensions identical to Linechart · Up.
**Note:** chart path is approximated — Figma exports this area as a PNG asset.`,
      },
    },
  },
  render: () => {
    const trendCol = 'var(--iris-pink-500)'; // old-colors/pink/500
    return `
    <div style="position:relative;display:flex;flex-direction:column;width:286px;height:168px;
                padding:16px;gap:16px;border-radius:var(--radius-md);background:var(--color-bg-white);
                box-shadow:var(--iris-shadow-sm);box-sizing:border-box;overflow:hidden;">
      <!-- top row: label/value | trend | icon button -->
      <div style="display:flex;gap:16px;align-items:flex-start;flex-shrink:0;">
        <!-- 1st child: label + value -->
        <div style="flex:1;min-width:0;display:flex;flex-direction:column;justify-content:center;">
          <div style="font-size:var(--text-xs);font-weight:var(--font-medium);color:var(--iris-gray-900);line-height:1.5;">Total Sales</div>
          <div style="font-size:var(--text-2xl);font-weight:var(--font-semibold);color:var(--iris-gray-900);line-height:1.5;">$16,416</div>
        </div>
        <!-- 2nd child: Card Body (trend icon + delta) -->
        <div style="flex-shrink:0;display:flex;flex-direction:column;justify-content:center;
                    align-items:flex-end;gap:4px;align-self:center;">
          <div style="display:inline-flex;align-items:center;gap:4px;">
            ${trendDownIcon(trendCol)}
            <span style="font-size:var(--text-xs);font-weight:var(--font-semibold);color:${trendCol};white-space:nowrap;">-23.17%</span>
          </div>
        </div>
        <!-- 3rd child: icon button -->
        <button style="padding:9px;background:var(--iris-gray-300);border-radius:var(--radius-full);border:none;cursor:pointer;
                       display:flex;align-items:center;justify-content:center;line-height:0;flex-shrink:0;">
          ${dollarIcon}
        </button>
      </div>
      <!-- chart: absolute, bottom-flush, slight side bleed -->
      <div style="position:absolute;bottom:0;left:-1.45%;right:-1.45%;height:69px;">
        ${lineChartSvg(false)}
      </div>
    </div>`;
  },
};

/* ─────────────────────────────────────────────
   LINECHART-VERT / UP  (Figma node 602:22376)
───────────────────────────────────────────── */
/**
 * Figma variant `Linechart-vert / Upwards` — node 602:22376.
 *
 * Shell: 286×168 px · `padding:16px` · **`gap:4px`** (tighter than Linechart variants)
 *
 * Layout has **2 flex rows** above the chart:
 * 1. **Top row** (`gap:16`, `align-items:flex-start`): label/value col (flex:1) + icon button only
 *    — **no trend here** — this differs from `Linechart / Up`
 * 2. **Card Body row** (`flex-row`, `align-items:center`): compare text (flex:1) + trend icon+delta (right)
 *
 * Chart zone: `position:absolute` · `bottom:0` · `left:-1.45%` · `right:-1.45%` · `height:69px`
 *
 * **QA checklist**
 * - Gap between rows: 4px (not 16px) — critical distinguisher from Linechart variants
 * - Top row: NO trend in header — only label, value, icon button
 * - Card Body row: compare text left (flex:1, 12px/400/#6B7280) + trend right
 * - Trend: trendUp icon (#5850EC) + 12px/600/#5850EC
 * - Chart: same stroke/fill tokens as Linechart / Up
 */
export const LinechartVertUp = {
  name: 'Linechart-vert · Up',
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story: `Exact Figma variant **Linechart-vert / Upwards** (node 602:22376).
Shell: 286×168 px · \`padding:16px\` · **\`gap:4px\`** (tighter spacing).
Top row: label/value (flex:1) + icon button only — **no trend in the top row**.
Separate Card Body row below: compare text (flex:1) + trend icon+delta (right).
Chart: absolute, bottom-flush, ~−1.45% side bleed, height 69 px.`,
      },
    },
  },
  render: () => {
    const trendCol = 'var(--iris-brand-600)'; // old-colors/brand/600
    return `
    <div style="position:relative;display:flex;flex-direction:column;width:286px;height:168px;
                padding:16px;gap:4px;border-radius:var(--radius-md);background:var(--color-bg-white);
                box-shadow:var(--iris-shadow-sm);box-sizing:border-box;overflow:hidden;">
      <!-- row 1: label/value + icon button (NO trend) -->
      <div style="display:flex;gap:16px;align-items:flex-start;flex-shrink:0;">
        <div style="flex:1;min-width:0;display:flex;flex-direction:column;justify-content:center;">
          <div style="font-size:var(--text-xs);font-weight:var(--font-medium);color:var(--iris-gray-900);line-height:1.5;">Total Sales</div>
          <div style="font-size:var(--text-2xl);font-weight:var(--font-semibold);color:var(--iris-gray-900);line-height:1.5;">$16,416</div>
        </div>
        <button style="padding:9px;background:var(--iris-gray-300);border-radius:var(--radius-full);border:none;cursor:pointer;
                       display:flex;align-items:center;justify-content:center;line-height:0;flex-shrink:0;">
          ${dollarIcon}
        </button>
      </div>
      <!-- row 2: Card Body — compare text | trend -->
      <div style="display:flex;flex-direction:row;align-items:center;
                  justify-content:space-between;flex-shrink:0;gap:8px;">
        <span style="flex:1;font-size:var(--text-xs);font-weight:var(--font-normal);color:var(--color-text-body-subtle);line-height:1.5;">
          Compared to day prior
        </span>
        <div style="display:inline-flex;align-items:center;gap:4px;flex-shrink:0;">
          ${trendUpIcon(trendCol)}
          <span style="font-size:var(--text-xs);font-weight:var(--font-semibold);color:${trendCol};white-space:nowrap;">-23.17%</span>
        </div>
      </div>
      <!-- chart: absolute, bottom-flush, slight side bleed -->
      <div style="position:absolute;bottom:0;left:-1.45%;right:-1.45%;height:69px;">
        ${lineChartSvg(true)}
      </div>
    </div>`;
  },
};

/* ─────────────────────────────────────────────
   LINECHART-VERT / DOWN  (Figma node 602:22409)
───────────────────────────────────────────── */
/**
 * Figma variant `Linechart-vert / Downwards` — node 602:22409.
 *
 * Same outer shell and top row as `Linechart-vert / Up`.
 * **Key difference:** Card Body row switches from `flex-row` to `flex-col items-start`.
 * (Figma code: `isCardKpiAndDownwardsAndLinechartVert ? "flex-col items-start justify-center"`)
 * Compare text and trend stack vertically instead of sitting side-by-side.
 *
 * Shell: 286×168 px · `padding:16px` · `gap:4px`
 *
 * **QA checklist**
 * - Card Body: `flex-direction:column` · `align-items:flex-start` (not row)
 * - Compare text above trend (stacked, not side-by-side)
 * - Trend color: #E74694 (old-colors/pink/500) — trendDown SVG
 * - Chart: stroke #E74694 · fill rgba(231,70,148,0.12)
 * - All other dimensions identical to Linechart-vert / Up
 */
export const LinechartVertDown = {
  name: 'Linechart-vert · Down',
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story: `Exact Figma variant **Linechart-vert / Downwards** (node 602:22409).
Shell: 286×168 px · \`padding:16px\` · \`gap:4px\`.
Card Body row uses \`flex-col items-start\` — compare text and trend stack vertically.
This is the key structural difference from **Linechart-vert · Up**.
Trend color: \`#E74694\` (old-colors/pink/500). Chart stroke: \`#E74694\`.`,
      },
    },
  },
  render: () => {
    const trendCol = 'var(--iris-pink-500)'; // old-colors/pink/500
    return `
    <div style="position:relative;display:flex;flex-direction:column;width:286px;height:168px;
                padding:16px;gap:4px;border-radius:var(--radius-md);background:var(--color-bg-white);
                box-shadow:var(--iris-shadow-sm);box-sizing:border-box;overflow:hidden;">
      <!-- row 1: label/value + icon button (NO trend) -->
      <div style="display:flex;gap:16px;align-items:flex-start;flex-shrink:0;">
        <div style="flex:1;min-width:0;display:flex;flex-direction:column;justify-content:center;">
          <div style="font-size:var(--text-xs);font-weight:var(--font-medium);color:var(--iris-gray-900);line-height:1.5;">Total Sales</div>
          <div style="font-size:var(--text-2xl);font-weight:var(--font-semibold);color:var(--iris-gray-900);line-height:1.5;">$16,416</div>
        </div>
        <button style="padding:9px;background:var(--iris-gray-300);border-radius:var(--radius-full);border:none;cursor:pointer;
                       display:flex;align-items:center;justify-content:center;line-height:0;flex-shrink:0;">
          ${dollarIcon}
        </button>
      </div>
      <!-- row 2: Card Body — STACKED (flex-col, items-start) for Downwards variant -->
      <div style="display:flex;flex-direction:column;align-items:flex-start;
                  justify-content:center;flex-shrink:0;gap:2px;">
        <span style="font-size:var(--text-xs);font-weight:var(--font-normal);color:var(--color-text-body-subtle);line-height:1.5;">
          Compared to day prior
        </span>
        <div style="display:inline-flex;align-items:center;gap:4px;">
          ${trendDownIcon(trendCol)}
          <span style="font-size:var(--text-xs);font-weight:var(--font-semibold);color:${trendCol};white-space:nowrap;">-23.17%</span>
        </div>
      </div>
      <!-- chart: absolute, bottom-flush, slight side bleed -->
      <div style="position:absolute;bottom:0;left:-1.45%;right:-1.45%;height:69px;">
        ${lineChartSvg(false)}
      </div>
    </div>`;
  },
};

/* ─────────────────────────────────────────────
   CREDIT / UP  (Figma node 602:23265)
───────────────────────────────────────────── */
/**
 * Figma variant `Credit / Upwards` — node 602:23265.
 *
 * Same 3-child top row structure as `Linechart / Up` (gap:16, trend in top row).
 * Two differences from the linechart variants:
 * 1. **Unique chart asset** — uses `imgCharts2` in Figma (a gradual-improvement curve
 *    with a more pronounced initial dip — "credit score recovery" visual character).
 *    Approximated via `creditChartSvg()`.
 * 2. **No side bleed** — chart zone is `position:absolute; inset:0` (edge-to-edge,
 *    not the −1.45% bleed used by linechart variants).
 *
 * Shell: 286×168 px · `padding:16px` · `gap:16px`
 *
 * **QA checklist**
 * - Trend: trendUp icon (#5850EC) + 12px/600/#5850EC
 * - Chart: stroke #6875F5 (old-colors/brand/500) · fill rgba(104,117,245,0.12)
 * - Chart zone: `inset:0` (no side bleed) — different from linechart variants
 * - Chart visual character: gradual rise with initial dip (not monotonic ascent)
 */
export const CreditUp = {
  name: 'Credit · Up',
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story: `Exact Figma variant **Credit / Upwards** (node 602:23265).
Shell: 286×168 px · \`padding:16px\` · \`gap:16px\`.
Same 3-child top row as Linechart · Up.
Chart uses \`creditChartSvg()\` — a unique "gradual recovery" curve (approximated from \`imgCharts2\` Figma asset).
Chart zone: \`position:absolute; inset:0\` — **no side bleed**, unlike linechart variants.`,
      },
    },
  },
  render: () => {
    const trendCol = 'var(--iris-brand-600)'; // old-colors/brand/600
    return `
    <div style="position:relative;display:flex;flex-direction:column;width:286px;height:168px;
                padding:16px;gap:16px;border-radius:var(--radius-md);background:var(--color-bg-white);
                box-shadow:var(--iris-shadow-sm);box-sizing:border-box;overflow:hidden;">
      <!-- top row: label/value | trend | icon button -->
      <div style="display:flex;gap:16px;align-items:flex-start;flex-shrink:0;">
        <!-- 1st child: label + value -->
        <div style="flex:1;min-width:0;display:flex;flex-direction:column;justify-content:center;">
          <div style="font-size:var(--text-xs);font-weight:var(--font-medium);color:var(--iris-gray-900);line-height:1.5;">Total Sales</div>
          <div style="font-size:var(--text-2xl);font-weight:var(--font-semibold);color:var(--iris-gray-900);line-height:1.5;">$16,416</div>
        </div>
        <!-- 2nd child: Card Body (trend icon + delta) -->
        <div style="flex-shrink:0;display:flex;flex-direction:column;justify-content:center;
                    align-items:flex-end;gap:4px;align-self:center;">
          <div style="display:inline-flex;align-items:center;gap:4px;">
            ${trendUpIcon(trendCol)}
            <span style="font-size:var(--text-xs);font-weight:var(--font-semibold);color:${trendCol};white-space:nowrap;">-23.17%</span>
          </div>
        </div>
        <!-- 3rd child: icon button -->
        <button style="padding:9px;background:var(--iris-gray-300);border-radius:var(--radius-full);border:none;cursor:pointer;
                       display:flex;align-items:center;justify-content:center;line-height:0;flex-shrink:0;">
          ${dollarIcon}
        </button>
      </div>
      <!-- chart: absolute inset:0, no side bleed (differs from linechart variants) -->
      <div style="position:absolute;bottom:0;left:0;right:0;height:69px;">
        ${creditChartSvg()}
      </div>
    </div>`;
  },
};

/* ─────────────────────────────────────────────
   SEGMENTED BAR CHART  (Figma — barchart-segm-hor)
───────────────────────────────────────────── */
/**
 * Wide horizontal KPI card with a 12-column stacked segment chart.
 * Exact Figma2Code parity for the `barchart-segm-hor` variant.
 *
 * Layout (inline-flex, row, gap:16px):
 * - **Left** — label (12px/500) + value (24px/600)
 * - **Center** — 12 stacked-segment columns × 6px, height:50px, align-items:flex-end
 * - **Right** — trend icon + delta (top, 12px/600/#5850EC) + compare text (12px/400/#6B7280)
 *
 * Segment colours (bottom → top):
 * `#F2F4F7` gray · `#22C55E` green · `#EC4899` pink · `#33BFFF` cyan · `#1D4ED8` dark blue
 *
 * **QA checklist**
 * - Shell: 449×104px, padding 32 32 16 32, gap:16px, border-radius:8px
 * - Label: 12px / 500 / #111928 · Value: 24px / 600 / #111928
 * - Chart: 12 columns, each 6px wide, gap:10px, align-items:flex-end, height:50px
 * - Zero-height segments are omitted (no phantom divs)
 * - Trend/compare right-aligned in right column
 */
export const SegmentedBarChart = {
  name: 'barchart-segm-hor · Up',
  parameters:{
    backgrounds: { default: 'white' },
    docs: {
      description: {
        story: `Exact Figma variant **barchart-segm-hor / Upwards** (node 602:25133).
Horizontal card — 449×104 px · \`padding:32px 32px 16px 32px\` · \`gap:16px\` · row layout.
12 stacked-segment columns × 6 px wide, \`gap:10px\`, \`height:50px\`, bottom-aligned.
Segment order per column (top → bottom): gray → green → pink → cyan → dark blue.
Zero-height segments are omitted. Columns align to the bottom of the 50 px chart area.`,
      },
      source: {
        language: 'html',
        code: `<!-- KPI card — barchart-segm-hor -->
<div style="display:inline-flex;width:449px;height:104px;
            padding:32px 32px 16px 32px;gap:16px;border-radius:8px;
            background:#FFF;box-shadow:0px 1px 2px rgba(0,0,0,0.08);
            box-sizing:border-box;align-items:center;">
  <!-- left: label + value -->
  <div style="flex:1;min-width:0;">
    <div style="font-size:var(--text-xs);font-weight:var(--font-medium);color:var(--iris-gray-900);">Total Sales</div>
    <div style="font-size:var(--text-2xl);font-weight:var(--font-semibold);color:var(--iris-gray-900);">$16,416</div>
  </div>
  <!-- center: 12-column stacked chart -->
  <div style="display:flex;align-items:flex-end;gap:10px;height:50px;flex-shrink:0;">
    <!-- each column: flex-direction column-reverse, width:6px -->
    <!-- segment divs: background one of #F2F4F7 #22C55E #EC4899 #33BFFF #1D4ED8 -->
  </div>
  <!-- right: trend + compare -->
  <div style="flex:1;min-width:0;display:flex;flex-direction:column;
              align-items:flex-end;gap:2px;">
    <div style="display:inline-flex;align-items:center;gap:4px;">
      <!-- trending icon 16×16 SVG, color:#5850EC -->
      <span style="font-size:var(--text-xs);font-weight:var(--font-semibold);color:var(--iris-brand-600);">-23.17%</span>
    </div>
    <span style="font-size:var(--text-xs);font-weight:var(--font-normal);color:var(--color-text-body-subtle);">Compared to day prior</span>
  </div>
</div>`,
      },
    },
  },
  render:() => {
    /* Exact segment heights from Figma2Code — order: [gray, green, pink, cyan, blue] */
    const SEG_COLORS = [
      'var(--iris-seg-gray)',  /* Gray/30      */
      'var(--iris-seg-green)', /* Green/500    */
      'var(--iris-seg-pink)',  /* Pink/500     */
      'var(--iris-seg-sky)',   /* Sky/500      */
      'var(--iris-seg-blue)',  /* Primary/700  */
    ];
    const SEG_DATA = [
      [16, 3,  7,  9,  6],
      [ 4, 3,  9,  4, 15],
      [17,18,  3,  4,  8],
      [13, 4, 18,  4, 11],
      [22,13,  0,  4, 11],
      [14, 2, 19,  4, 11],
      [16, 8,  7,  4,  6],
      [13, 3,  9,  4,  6],
      [ 7, 3,  0,  6,  3],
      [ 7, 0,  0,  4,  3],
      [13, 3,  9,  4,  6],
      [ 7, 3,  6,  0,  3],
    ];

    /* Each column: flex-direction:column (gray at top, blue at bottom) matching Figma.
       Container align-items:flex-end bottom-aligns shorter columns.
       overflow:hidden clips any sub-pixel rounding overflow. */
    const columns = SEG_DATA.map(segs => {
      const parts = segs
        .map((h, i) => h > 0
          ? `<div style="width:6px;height:${h}px;background:${SEG_COLORS[i]};flex-shrink:0;"></div>`
          : '')
        .join('');
      return `<div style="display:flex;flex-direction:column;width:6px;flex-shrink:0;overflow:hidden;">${parts}</div>`;
    }).join('');

    const trendCol = 'var(--iris-brand-600)'; // old-colors/brand/600

    return `
    <div style="display:inline-flex;width:449px;height:104px;
                padding:32px 32px 16px 32px;gap:16px;border-radius:var(--radius-md);background:var(--color-bg-white);
                box-shadow:var(--iris-shadow-sm);box-sizing:border-box;align-items:center;">
      <!-- left: label + value -->
      <div style="flex:1;min-width:0;">
        <div style="font-size:var(--text-xs);font-weight:var(--font-medium);color:var(--iris-gray-900);line-height:1.5;">Total Sales</div>
        <div style="font-size:var(--text-2xl);font-weight:var(--font-semibold);color:var(--iris-gray-900);line-height:1.5;">$16,416</div>
      </div>
      <!-- center: 12-column stacked segment chart -->
      <div style="display:flex;align-items:flex-end;gap:10px;height:50px;flex-shrink:0;">
        ${columns}
      </div>
      <!-- right: trend + compare text -->
      <div style="flex:1;min-width:0;display:flex;flex-direction:column;align-items:flex-end;gap:2px;">
        <div style="display:inline-flex;align-items:center;gap:4px;">
          ${trendUpIcon(trendCol)}
          <span style="font-size:var(--text-xs);font-weight:var(--font-semibold);color:${trendCol};">-23.17%</span>
        </div>
        <span style="font-size:var(--text-xs);font-weight:var(--font-normal);color:var(--color-text-body-subtle);text-align:right;
                     line-height:18px;">Compared to day prior</span>
      </div>
    </div>`;
  }
};

