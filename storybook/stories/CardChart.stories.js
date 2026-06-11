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
// barchart (602:20796 up / 602:20845 down): Charts frame [222x40]
// barchart-vert: Charts frame [222x40], bar 13 = 40 (full)
// barchart-big: Charts frame [222x58], bars 2,4,9,12 = 58 (full)
// Index 6 is always the lighter-shade bar (#B4C6FC up / #F8B4D9 down)
// UP and DOWN differ at positions 12-13; VERT differs from UP at position 13
const BARS_UP   = [15.54, 16.36, 27.86, 17.18, 40, 25.39, 19.64, 8.96, 29.5, 40, 19.64, 13.89, 25, 36.07];
const BARS_DN   = [15.54, 16.36, 27.86, 17.18, 40, 25.39, 19.64, 8.96, 29.5, 40, 19.64, 13.89, 36.07, 20];
const BARS_VERT = [15.54, 16.36, 27.86, 17.18, 40, 25.39, 19.64, 8.96, 29.5, 40, 19.64, 13.89, 25, 40];
const BARS_BIG  = [15.54, 16.36, 58,    17.18, 58, 25.39, 19.64, 8.96, 29.5, 58, 19.64, 13.89, 58, 36.07];

// ── Shared SVG icons ─────────────────────────────────────────────────────────

const ICON_DOLLAR = `<svg width="16" height="16" viewBox="0 0 20 20" fill="#6B7280" xmlns="http://www.w3.org/2000/svg">
  <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z"/>
  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clip-rule="evenodd"/>
</svg>`;

// Grey pill button — real .iris-kpi__pill class (always currency-dollar)
const PILL = `<div class="iris-kpi__pill">${ICON_DOLLAR}</div>`;

// Trend arrow icons (Heroicons v1 solid 20px → 16px display)
const iconTrendUp = (color) => `<svg width="16" height="16" viewBox="0 0 20 20" fill="${color}" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z" clip-rule="evenodd"/>
</svg>`;

const iconTrendDown = (color) => `<svg width="16" height="16" viewBox="0 0 20 20" fill="${color}" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" d="M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z" clip-rule="evenodd"/>
</svg>`;

// ── Shared helpers ────────────────────────────────────────────────────────────

function trendBadge(dir, pctOverride) {
  const c = dir === 'up' ? C_UP : C_DN;
  const icon = dir === 'up' ? iconTrendUp(c) : iconTrendDown(c);
  const pct = pctOverride || (dir === 'up' ? '+12.5%' : '-23.17%');
  return `<div class="iris-kpi__trend iris-kpi__trend--${dir}">
    ${icon}
    <span>${pct}</span>
  </div>`;
}

// Exact SVG paths exported from Figma — Charts frame nodes 602:20777 (up) / 602:20749 (down)
// Up fill: gradient #E5E7EB → white. Down fill: gradient white→transparent.
// Both share the same bumpy stroke shape; direction is conveyed by color + trend badge.
function lineChartSvg(dir) {
  const strokeColor = dir === 'up' ? C_UP : C_DN;

  // Fill areas differ at the right-side clip y-coordinate (V1.42073 up vs V24.561 down)
  const FILL_UP = 'M12.7111 29.6097C6.35555 29.6097 6.35556 19.5123 0 19.5122V62C0 66.4183 3.58173 70 8 70H278C282.418 70 286 66.4279 286 62.0096V1.42073C278.056 1.42073 279.644 12.7805 273.289 12.7805C266.933 12.7805 266.933 19.5122 260.578 19.5122C254.222 19.5122 254.222 12.7805 247.867 12.7805C241.511 12.7805 240.717 24.561 235.156 24.561C229.594 24.561 228.8 6.04878 222.444 6.04878C216.089 6.04878 216.089 0.99999 209.733 1C203.378 1.00001 197.022 9.41466 190.667 9.41466C184.311 9.41466 184.311 4.36591 177.956 4.36588C171.6 4.36586 169.716 8.77907 165.244 12.7805C159.175 18.2123 158.889 29.6098 152.533 29.6098C146.178 29.6097 146.178 19.5122 139.822 19.5122C133.467 19.5122 133.467 11.0976 127.111 11.0976C120.756 11.0976 120.756 9.41463 114.4 9.41463C108.044 9.41463 108.044 24.1402 101.689 24.1402C95.3334 24.1402 95.3333 14.4634 88.9778 14.4634C82.6222 14.4634 82.6222 29.6097 76.2667 29.6098C69.9111 29.6098 69.9111 26.6646 63.5555 26.6646C57.2 26.6646 57.2 24.561 50.8444 24.561C44.4889 24.561 44.4889 32.9756 38.1333 32.9756C31.7778 32.9756 31.7778 41.3902 25.4222 41.3902C19.0667 41.3902 19.0667 29.6097 12.7111 29.6097Z';
  const FILL_DN = 'M12.7111 29.6097C6.35555 29.6097 6.35556 19.5123 0 19.5122V62C0 66.4183 3.58173 70 8 70H278C282.418 70 286 66.4279 286 62.0096V24.561C278.056 24.561 279.644 12.7805 273.289 12.7805C266.933 12.7805 266.933 19.5122 260.578 19.5122C254.222 19.5122 254.222 12.7805 247.867 12.7805C241.511 12.7805 240.717 24.561 235.156 24.561C229.594 24.561 228.8 6.04878 222.444 6.04878C216.089 6.04878 216.089 0.99999 209.733 1C203.378 1.00001 197.022 9.41466 190.667 9.41466C184.311 9.41466 184.311 4.36591 177.956 4.36588C171.6 4.36586 169.716 8.77907 165.244 12.7805C159.175 18.2123 158.889 29.6098 152.533 29.6098C146.178 29.6097 146.178 19.5122 139.822 19.5122C133.467 19.5122 133.467 11.0976 127.111 11.0976C120.756 11.0976 120.756 9.41463 114.4 9.41463C108.044 9.41463 108.044 24.1402 101.689 24.1402C95.3334 24.1402 95.3333 14.4634 88.9778 14.4634C82.6222 14.4634 82.6222 29.6097 76.2667 29.6098C69.9111 29.6098 69.9111 26.6646 63.5555 26.6646C57.2 26.6646 57.2 24.561 50.8444 24.561C44.4889 24.561 44.4889 32.9756 38.1333 32.9756C31.7778 32.9756 31.7778 41.3902 25.4222 41.3902C19.0667 41.3902 19.0667 29.6097 12.7111 29.6097Z';
  const STROKE_UP = 'M0 19.7917C6.35556 19.7917 6.35555 30.0417 12.7111 30.0417C19.0667 30.0417 19.0667 42 25.4222 42C31.7778 42 31.7778 33.4584 38.1333 33.4584C44.4889 33.4584 44.4889 24.9167 50.8444 24.9167C57.2 24.9167 57.2 27.0521 63.5555 27.0521C69.9111 27.0521 69.9111 30.0417 76.2667 30.0417C82.6222 30.0417 82.6222 14.6667 88.9778 14.6667C95.3333 14.6667 95.3334 24.4896 101.689 24.4896C108.044 24.4896 108.044 9.54167 114.4 9.54167C120.756 9.54167 120.756 11.25 127.111 11.25C133.467 11.25 133.467 19.7917 139.822 19.7917C146.178 19.7917 146.178 30.0417 152.533 30.0417C158.889 30.0417 159.175 18.4721 165.244 12.9583C169.716 8.89652 171.6 4.41667 177.956 4.4167C184.311 4.41673 184.311 9.5417 190.667 9.5417C197.022 9.5417 203.378 1.00001 209.733 1C216.089 0.99999 216.089 6.125 222.444 6.125C228.8 6.125 229.594 24.9167 235.156 24.9167C240.717 24.9167 241.511 12.9583 247.867 12.9583C254.222 12.9583 254.222 19.7917 260.578 19.7917C266.933 19.7917 266.933 12.9583 273.289 12.9583C279.644 12.9583 278.056 1.42708 286 1.42708';
  const STROKE_DN = 'M0 19.7917C6.35556 19.7917 6.35555 30.0417 12.7111 30.0417C19.0667 30.0417 19.0667 42 25.4222 42C31.7778 42 31.7778 33.4584 38.1333 33.4584C44.4889 33.4584 44.4889 24.9167 50.8444 24.9167C57.2 24.9167 57.2 27.0521 63.5555 27.0521C69.9111 27.0521 69.9111 30.0417 76.2667 30.0417C82.6222 30.0417 82.6222 14.6667 88.9778 14.6667C95.3333 14.6667 95.3334 24.4896 101.689 24.4896C108.044 24.4896 108.044 9.54167 114.4 9.54167C120.756 9.54167 120.756 11.25 127.111 11.25C133.467 11.25 133.467 19.7917 139.822 19.7917C146.178 19.7917 146.178 30.0417 152.533 30.0417C158.889 30.0417 159.175 18.4721 165.244 12.9583C169.716 8.89652 171.6 4.41667 177.956 4.4167C184.311 4.41673 184.311 9.5417 190.667 9.5417C197.022 9.5417 203.378 1.00001 209.733 1C216.089 0.99999 216.089 6.125 222.444 6.125C228.8 6.125 229.594 24.9167 235.156 24.9167C240.717 24.9167 241.511 12.9583 247.867 12.9583C254.222 12.9583 254.222 19.7917 260.578 19.7917C266.933 19.7917 266.933 12.9583 273.289 12.9583C279.644 12.9583 278.056 24.9167 286 24.9167';

  const gradId = `lc-grad-${dir}`;
  const gradDef = dir === 'up'
    ? `<linearGradient id="${gradId}" x1="143" y1="1" x2="143" y2="70" gradientUnits="userSpaceOnUse"><stop stop-color="#E5E7EB"/><stop offset="1" stop-color="white"/></linearGradient>`
    : `<linearGradient id="${gradId}" x1="143" y1="1" x2="143" y2="70" gradientUnits="userSpaceOnUse"><stop stop-color="white" stop-opacity="0.6"/><stop offset="1" stop-color="#B0B0B0" stop-opacity="0"/></linearGradient>`;

  return `<div class="iris-kpi__chart">
    <svg style="width:100%;height:70px;display:block;" viewBox="0 0 286 70" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>${gradDef}</defs>
      <path d="${dir === 'up' ? FILL_UP : FILL_DN}" fill="url(#${gradId})"/>
      <path d="${dir === 'up' ? STROKE_UP : STROKE_DN}" stroke="${strokeColor}" stroke-width="2"/>
    </svg>
  </div>`;
}

// Bar chart: 14 bars × 3px, heights from Figma
// Standard (602:20796 up / 602:20845 down): container 40px. Big: container 58px.
function barChartHtml(dir, heights, containerH = 40) {
  const bars = heights.map((h, i) => {
    const cls = `iris-kpi__bar${dir === 'down' ? (i === 6 ? ' iris-kpi__bar--down-light' : ' iris-kpi__bar--down') : (i === 6 ? ' iris-kpi__bar--light' : '')}`;
    const ht = h >= containerH ? '100%' : `${h}px`;
    return `<div class="${cls}" style="height:${ht};"></div>`;
  }).join('');
  return `<div class="iris-kpi__bars" style="height:${containerH}px;">${bars}</div>`;
}

// Segmented horizontal bar chart — barchart-segm-hor only
// 12 columns × 6px, gap 10px, 50px tall container
// Segment colors: gray #F2F4F7, green #22C55E, pink #EC4899, sky #33BFFF, blue #1D4ED8
const SEGM_COLORS = ['#F2F4F7', '#22C55E', '#EC4899', '#33BEFF', '#1D4ED8'];
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

// All shells are the real `.iris-kpi` + size modifier classes.
// Inner layout rows stay as flex wrappers (layout-only inline styles).

// Linechart — label + value + trend in top row, chart flush at bottom (286×168px)
function cardLinechart(dir) {
  return `<div class="iris-kpi iris-kpi--line">
    <div style="display:flex;gap:16px;align-items:flex-start;">
      <div style="flex:1;min-width:0;">
        <div class="iris-kpi__label">Total Sales</div>
        <div class="iris-kpi__value">$16,416</div>
      </div>
      ${trendBadge(dir)}
      ${PILL}
    </div>
    ${lineChartSvg(dir)}
  </div>`;
}

// Linechart-vert — label + value, then "Compared to day prior" + trend, chart flush at bottom
function cardLinechartVert(dir) {
  return `<div class="iris-kpi iris-kpi--line-tight">
    <div style="display:flex;gap:16px;align-items:flex-start;">
      <div style="flex:1;min-width:0;">
        <div class="iris-kpi__label">Total Sales</div>
        <div class="iris-kpi__value">$16,416</div>
      </div>
      ${PILL}
    </div>
    <div style="display:flex;align-items:center;justify-content:space-between;">
      <span class="iris-kpi__subtitle">Compared to day prior</span>
      ${trendBadge(dir, dir === 'up' ? '+12.5%' : '−8.3%')}
    </div>
    ${lineChartSvg(dir)}
  </div>`;
}

// barchart — label + trend + value in header, bars at bottom (286×200px)
function cardBarchart(dir) {
  return `<div class="iris-kpi iris-kpi--bar">
    <div style="display:flex;gap:16px;align-items:flex-start;">
      <div style="flex:1;min-width:0;">
        <div class="iris-kpi__label">Total Sales</div>
        ${trendBadge(dir)}
        <div class="iris-kpi__value">$16,416</div>
      </div>
      ${PILL}
    </div>
    ${barChartHtml(dir, dir === 'up' ? BARS_UP : BARS_DN)}
  </div>`;
}

// barchart-vert — label + value, then "Compared to day prior" + trend, bars at bottom (286×200px)
function cardBarchartVert(dir = 'up') {
  return `<div class="iris-kpi iris-kpi--bar" style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:16px;align-items:start;">
    <div style="display:flex;flex-direction:column;gap:16px;">
      <div style="display:flex;gap:16px;align-items:flex-start;">
        <div style="flex:1;min-width:0;">
          <div class="iris-kpi__label">Total Sales</div>
          <div class="iris-kpi__value">$16,416</div>
        </div>
        ${PILL}
      </div>
      <div style="display:flex;align-items:center;justify-content:space-between;">
        <span class="iris-kpi__subtitle">Compared to day prior</span>
        ${trendBadge(dir, dir === 'up' ? '+12.5%' : '−8.3%')}
      </div>
    </div>
    ${barChartHtml(dir, BARS_VERT)}
  </div>`;
}

// barchart-big — Charts frame [222x58], bars at idx 2,4,9,12 are full height (58px)
function cardBarchartBig(dir = 'up') {
  return `<div class="iris-kpi iris-kpi--bar">
    <div style="display:flex;gap:16px;align-items:flex-start;">
      <div style="flex:1;min-width:0;">
        <div class="iris-kpi__label">Total Sales</div>
        <div class="iris-kpi__value">$16,416</div>
      </div>
      ${trendBadge(dir)}
      ${PILL}
    </div>
    ${barChartHtml(dir, BARS_BIG, 58)}
  </div>`;
}


// barchart-segm-hor — wide horizontal card: segmented chart left, value right (449×104px)
function cardBarchartSegmHor() {
  return `<div class="iris-kpi iris-kpi--wide">
    <div style="display:flex;flex-direction:column;gap:8px;flex:1;min-width:0;justify-content:flex-end;">
      <div class="iris-kpi__label">Total Sales</div>
      ${segmChartHtml()}
    </div>
    <div style="display:flex;flex-direction:column;align-items:flex-end;gap:4px;flex-shrink:0;">
      ${trendBadge('up')}
      <span class="iris-kpi__subtitle" style="text-align:right;">Compared to day prior</span>
    </div>
    ${PILL}
  </div>`;
}

// Credit — mostly flat line with a sharp V-dip at centre (286×168px, Charts 286×69px)
// Exact SVG from Figma: 2 fill layers + 1 stroke. Dip goes from y≈18.8 down to y≈60.5 at x≈152.
function cardCredit() {
  const FILL1 = 'M12.7111 18.5122L0 18.5122V61C0 65.4183 3.58173 69 8 69H278C282.418 69 286 65.4265 286 61.0082V18.5121C278.056 18.5121 279.644 23.561 273.289 23.561C266.933 23.561 266.933 18.5122 260.578 18.5122H247.867C241.511 18.5122 240.717 23.5609 235.156 23.561C229.594 23.561 228.8 35.5001 222.444 35.5001C216.089 35.5001 216.089 18.5122 209.733 18.5122L190.667 18.5122L177.956 18.5122C171.6 18.5122 169.5 17 165.244 18.5122C160.989 20.0243 158.889 60 152.533 60C146.178 60 146.178 18.5122 139.822 18.5122L127.111 18.5122L114.4 18.5122C108.044 18.5122 108.044 23.1402 101.689 23.1402C95.3334 23.1402 95.3333 18.5122 88.9778 18.5122C82.6222 18.5122 82.6222 28.6097 76.2667 28.6097C69.9111 28.6098 69.9111 18.5122 63.5555 18.5122C57.2 18.5122 57.2 23.561 50.8444 23.561C44.4889 23.561 44.4889 18.5122 38.1333 18.5122L25.4222 18.5122H12.7111Z';
  const FILL2 = 'M38.1333 18.5122L29.095 18.5122L127.111 18.5122H165.244C169.482 17.0063 171.583 18.4996 177.876 18.5121L190.667 18.5122H247.867H260.578L286 18.5121C278.056 18.5121 279.644 23.5609 273.289 23.5609C266.933 23.5609 266.933 18.5122 260.578 18.5122H247.867C241.511 18.5122 240.717 23.5609 235.156 23.5609C229.594 23.561 228.8 35.5001 222.444 35.5001C216.089 35.5001 216.089 18.5122 209.733 18.5122L190.667 18.5122L177.956 18.5122C177.929 18.5122 177.903 18.5122 177.876 18.5121L165.244 18.5122C160.989 20.0243 158.889 60 152.533 60C146.178 60 146.178 18.5122 139.822 18.5122L127.111 18.5122L114.4 18.5122C108.044 18.5122 108.044 23.1402 101.689 23.1402C95.3334 23.1402 95.3333 18.5122 88.9778 18.5122C82.6222 18.5122 82.6222 28.6097 76.2667 28.6097C69.9111 28.6098 69.9111 18.5122 63.5555 18.5122C57.2 18.5122 57.2 23.561 50.8444 23.561C44.4889 23.561 44.4889 18.5122 38.1333 18.5122Z';
  const STROKE = 'M0 18.7918C6.35556 18.7918 6.35555 18.7918 12.7111 18.7918C19.0667 18.7918 19.0667 18.7918 25.4222 18.7918C31.7778 18.7918 31.7778 18.7918 38.1333 18.7918C44.4889 18.7918 44.4889 23.9168 50.8444 23.9168C57.2 23.9168 57.2 18.7918 63.5555 18.7918C69.9111 18.7918 69.9111 29.0418 76.2667 29.0418C82.6222 29.0418 82.6222 18.7918 88.9778 18.7918C95.3333 18.7917 95.3334 23.4897 101.689 23.4897C108.044 23.4897 108.044 18.7918 114.4 18.7918C120.756 18.7918 120.756 18.7918 127.111 18.7918C133.467 18.7918 133.467 18.7918 139.822 18.7918C146.178 18.7918 146.178 60.5002 152.533 60.5002C158.889 60.5002 161.489 18.7918 165.244 18.7918C169 18.7918 171.6 18.7917 177.956 18.7918C184.311 18.7918 184.311 18.7918 190.667 18.7918C197.022 18.7918 203.378 18.7919 209.733 18.7918C216.089 18.7918 216.089 35.5002 222.444 35.5002C228.8 35.5002 229.594 23.9168 235.156 23.9168C240.717 23.9167 241.511 18.7918 247.867 18.7918C254.222 18.7918 254.222 18.7918 260.578 18.7918C266.933 18.7918 266.933 23.9168 273.289 23.9168C279.644 23.9168 278.056 18.7918 286 18.7918';

  return `<div class="iris-kpi iris-kpi--line">
    <div style="display:flex;gap:16px;align-items:flex-start;">
      <div style="flex:1;min-width:0;">
        <div class="iris-kpi__label">Total Sales</div>
        <div class="iris-kpi__value">$16,416</div>
      </div>
      ${trendBadge('up')}
      ${PILL}
    </div>
    <div class="iris-kpi__chart">
      <svg style="width:100%;height:69px;display:block;" viewBox="0 0 286 69" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="credit-grad1" x1="143" y1="0" x2="143" y2="69" gradientUnits="userSpaceOnUse">
            <stop stop-color="#E5E7EB"/>
            <stop offset="1" stop-color="white"/>
          </linearGradient>
          <linearGradient id="credit-grad2" x1="143" y1="18" x2="143" y2="60" gradientUnits="userSpaceOnUse">
            <stop stop-color="white"/>
            <stop offset="1"/>
          </linearGradient>
        </defs>
        <path d="${FILL1}" fill="url(#credit-grad1)"/>
        <path d="${FILL2}" fill="url(#credit-grad2)"/>
        <path d="${STROKE}" stroke="${C_UP}" stroke-width="2"/>
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

See [SETUP.md](https://github.com/sasha-iris/storybook/blob/main/docs/SETUP.md) for complete installation instructions.
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

/* ── Snippet builder — shared by Interactive panels + Show code ───────────── */
const KPI_MODIFIER = {
  'linechart': 'iris-kpi--line',
  'linechart-vert': 'iris-kpi--line-tight',
  'barchart': 'iris-kpi--bar',
  'barchart-vert': 'iris-kpi--bar',
  'barchart-big': 'iris-kpi--bar',
  'barchart-segm-hor': 'iris-kpi--wide',
  'credit': 'iris-kpi--line',
};

function kpiSnippet({ direction = 'up', chartType = 'linechart' }) {
  const mod = KPI_MODIFIER[chartType] || 'iris-kpi--line';
  const pct = direction === 'up' ? '+12.5%' : '-23.17%';
  return `<div class="iris-kpi ${mod}">
  <div style="display:flex;gap:16px;align-items:flex-start;">
    <div style="flex:1;min-width:0;">
      <div class="iris-kpi__label">Total Sales</div>
      <div class="iris-kpi__value">$16,416</div>
    </div>
    <div class="iris-kpi__trend iris-kpi__trend--${direction}">
      <!-- trend arrow icon -->
      <span>${pct}</span>
    </div>
    <div class="iris-kpi__pill"><!-- currency-dollar icon --></div>
  </div>
  <div class="iris-kpi__chart"><!-- Figma-exported chart SVG --></div>
</div>`;
}

/* ── Interactive (Controls) ─────────────────────────────────────────────────── */

export const Interactive = {
    name: 'Interactive (Controls)',
  render: (args) => {
    // Select the right card builder based on chartType
    let previewHtml;
    switch(args.chartType) {
      case 'linechart-vert': previewHtml = cardLinechartVert(args.direction); break;
      case 'barchart': previewHtml = cardBarchart(args.direction); break;
      case 'barchart-vert': previewHtml = cardBarchartVert(args.direction); break;
      case 'barchart-big': previewHtml = cardBarchartBig(args.direction); break;
      case 'barchart-segm-hor': previewHtml = cardBarchartSegmHor(); break;
      case 'credit': previewHtml = cardCredit(); break;
      default: previewHtml = cardLinechart(args.direction);
    }

    const h = kpiSnippet(args);
    const r = h.replace(/class=/g, 'className=').replace(/<!--/g, '{/*').replace(/-->/g, '*/}');
    const c = `const MOD = { linechart: 'iris-kpi--line', 'linechart-vert': 'iris-kpi--line-tight', barchart: 'iris-kpi--bar', 'barchart-segm-hor': 'iris-kpi--wide' };\n\nexport function KpiCard({ label, value, trendPct, direction = 'up', chartType = 'linechart', chart }) {\n  return (\n    <div className={\`iris-kpi \${MOD[chartType] || 'iris-kpi--line'}\`}>\n      <div style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>\n        <div style={{ flex: 1, minWidth: 0 }}>\n          <div className="iris-kpi__label">{label}</div>\n          <div className="iris-kpi__value">{value}</div>\n        </div>\n        <div className={\`iris-kpi__trend iris-kpi__trend--\${direction}\`}>\n          {/* trend arrow icon */}\n          <span>{trendPct}</span>\n        </div>\n        <div className="iris-kpi__pill">{/* currency-dollar icon */}</div>\n      </div>\n      <div className="iris-kpi__chart">{chart}</div>\n    </div>\n  );\n}`;

    return `
      <div style="display:flex;flex-direction:column;gap:24px;">
        <div style="padding:16px;border:1px solid var(--color-border-default);border-radius:8px;">
          ${previewHtml}
        </div>
        <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:16px;align-items:start;">
          <div style="padding:16px;border:1px solid var(--color-border-default);border-radius:8px;">
            <div style="font-weight:600;font-size:12px;color:var(--color-text-secondary);margin-bottom:12px;text-transform:uppercase;letter-spacing:0.5px;">HTML</div>
            <div style="background:var(--color-bg-tertiary);padding:12px;border-radius:6px;margin-bottom:12px;overflow:auto;">
              <pre style="margin:0;font-family:monospace;font-size:13px;white-space:pre-wrap;word-break:break-word;"><code>${h.replace(/</g,'&lt;').replace(/>/g,'&gt;')}</code></pre>
            </div>
            <button data-copy="${h.split('"').join('&quot;')}" class="storybook-copy-btn" style="padding:8px 12px;background:var(--color-bg-secondary);color:var(--color-text-primary);border:1px solid var(--color-border-default);border-radius:4px;cursor:pointer;font-family:inherit;font-size:12px;font-weight:500;display:flex;align-items:center;gap:6px;">
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="2" y="2" width="8" height="8" rx="1"/><path d="M6 14H12C13.1046 14 14 13.1046 14 12V6"/></svg>Copy
            </button>
          </div>
          <div style="padding:16px;border:1px solid var(--color-border-default);border-radius:8px;">
            <div style="font-weight:600;font-size:12px;color:var(--color-text-secondary);margin-bottom:12px;text-transform:uppercase;letter-spacing:0.5px;">React</div>
            <div style="background:var(--color-bg-tertiary);padding:12px;border-radius:6px;margin-bottom:12px;overflow:auto;">
              <pre style="margin:0;font-family:monospace;font-size:13px;white-space:pre-wrap;word-break:break-word;"><code>${r.replace(/</g,'&lt;').replace(/>/g,'&gt;')}</code></pre>
            </div>
            <button data-copy="${r.split('"').join('&quot;')}" class="storybook-copy-btn" style="padding:8px 12px;background:var(--color-bg-secondary);color:var(--color-text-primary);border:1px solid var(--color-border-default);border-radius:4px;cursor:pointer;font-family:inherit;font-size:12px;font-weight:500;display:flex;align-items:center;gap:6px;">
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="2" y="2" width="8" height="8" rx="1"/><path d="M6 14H12C13.1046 14 14 13.1046 14 12V6"/></svg>Copy
            </button>
          </div>
          <div style="padding:16px;border:1px solid var(--color-border-default);border-radius:8px;">
            <div style="font-weight:600;font-size:12px;color:var(--color-text-secondary);margin-bottom:12px;text-transform:uppercase;letter-spacing:0.5px;">Component (With Events)</div>
            <div style="background:var(--color-bg-tertiary);padding:12px;border-radius:6px;margin-bottom:12px;overflow:auto;">
              <pre style="margin:0;font-family:monospace;font-size:13px;white-space:pre-wrap;word-break:break-word;"><code>${c.replace(/</g,'&lt;').replace(/>/g,'&gt;')}</code></pre>
            </div>
            <button data-copy="${c.split('"').join('&quot;')}" class="storybook-copy-btn" style="padding:8px 12px;background:var(--color-bg-secondary);color:var(--color-text-primary);border:1px solid var(--color-border-default);border-radius:4px;cursor:pointer;font-family:inherit;font-size:12px;font-weight:500;display:flex;align-items:center;gap:6px;">
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="2" y="2" width="8" height="8" rx="1"/><path d="M6 14H12C13.1046 14 14 13.1046 14 12V6"/></svg>Copy
            </button>
          </div>
        </div>
      </div>
      <script>
        document.querySelectorAll('.storybook-copy-btn').forEach(btn => {
          btn.addEventListener('click', function() {
            navigator.clipboard.writeText(this.dataset.copy);
            const originalText = this.innerHTML;
            this.innerHTML = '<svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5"><polyline points="13 2 3 13 1 11"></polyline></svg>Copied!';
            this.style.background = 'var(--color-success-light)';
            this.style.color = 'var(--color-success-dark)';
            this.style.borderColor = 'var(--color-success-lighter)';
            setTimeout(() => {
              this.innerHTML = originalText;
              this.style.background = 'var(--color-bg-secondary)';
              this.style.color = 'var(--color-text-primary)';
              this.style.borderColor = 'var(--color-border-default)';
            }, 2000);
          });
        });
      </script>
    `;
  },
  parameters: {
    docs: {
      description: {
        story: 'Use **direction** to switch trend up/down and **chartType** to preview any KPI variant. Source snippet reflects the linechart structure — adapt the chart area for other types.',
      },
      source: {
        transform: (_src, storyCtx) => kpiSnippet(storyCtx.args),
      },
    },
  },
};

/* ── Linechart ──────────────────────────────────────────────────────────────── */

export const LinechartUp = {
    name: 'Linechart — Upwards',
  parameters: {
    docs: {
      description: { story: 'Smooth line chart trending upward. Trend badge: **#5850EC** (brand purple). Area fill: 12% opacity.' },
      source: {
        language: 'html',
        code: `<!-- Card KPI — Linechart (286×168px) -->
<div class="iris-kpi iris-kpi--line">
  <!-- Header row: label + trend + icon pill -->
  <div style="display:flex;gap:16px;align-items:flex-start;">
    <div style="flex:1;min-width:0;">
      <div class="iris-kpi__label">Total Sales</div>
      <div class="iris-kpi__value">$16,416</div>
    </div>
    <div class="iris-kpi__trend iris-kpi__trend--up">
      <!-- trend-up arrow SVG -->
      <span>+12.5%</span>
    </div>
    <div class="iris-kpi__pill"><!-- currency-dollar SVG --></div>
  </div>

  <!-- Line chart SVG — flush to card bottom -->
  <div class="iris-kpi__chart">
    <svg style="width:100%;height:70px;display:block;" viewBox="0 0 286 70" preserveAspectRatio="none">
      <!-- Figma-exported area fill + stroke paths (#5850EC up / #E74694 down) -->
    </svg>
  </div>
</div>`,
      },
    },
  },
  render: () => `<div style="display:flex;gap:16px;flex-wrap:wrap;">${cardLinechart('up')}${cardLinechart('down')}</div>`,
};

export const LinechartDown = {
    name: 'Linechart — Downwards',
  parameters: {
    docs: {
      description: { story: 'Smooth line chart trending downward. Trend badge: **#E74694** (pink).' },
      source: {
        language: 'html',
        code: `<!-- Card KPI — Linechart Downwards: same structure as Upwards;
     trend modifier switches to --down (#E74694 pink via the class). -->
<div class="iris-kpi iris-kpi--line">
  <div style="display:flex;gap:16px;align-items:flex-start;">
    <div style="flex:1;min-width:0;">
      <div class="iris-kpi__label">Total Sales</div>
      <div class="iris-kpi__value">$16,416</div>
    </div>
    <div class="iris-kpi__trend iris-kpi__trend--down">
      <!-- trend-down arrow SVG -->
      <span>−8.3%</span>
    </div>
    <div class="iris-kpi__pill"><!-- dollar SVG --></div>
  </div>
  <div class="iris-kpi__chart">
    <svg style="width:100%;height:70px;display:block;" viewBox="0 0 286 70" preserveAspectRatio="none">
      <!-- Figma-exported downward paths, stroke #E74694 -->
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
    name: 'Linechart-vert — Upwards',
  parameters: {
    docs: {
      description: { story: 'Line chart with "Compared to day prior" label. Up + down variants side by side.' },
      source: {
        language: 'html',
        code: `<!-- Card KPI — Linechart-vert (286×168px)
     Difference from Linechart: trend badge moves below the value, "Compared to day prior" label added. -->
<div class="iris-kpi iris-kpi--line-tight">
  <div style="display:flex;gap:16px;align-items:flex-start;">
    <div style="flex:1;min-width:0;">
      <div class="iris-kpi__label">Total Sales</div>
      <div class="iris-kpi__value">$16,416</div>
    </div>
    <div class="iris-kpi__pill"><!-- dollar SVG --></div>
  </div>
  <!-- "Compared to day prior" row with trend -->
  <div style="display:flex;align-items:center;justify-content:space-between;">
    <span class="iris-kpi__subtitle">Compared to day prior</span>
    <div class="iris-kpi__trend iris-kpi__trend--up">
      <!-- trend arrow SVG -->
      <span>+12.5%</span>
    </div>
  </div>
  <div class="iris-kpi__chart"><!-- Figma-exported chart SVG --></div>
</div>`,
      },
    },
  },
  render: () => `<div style="display:flex;gap:16px;flex-wrap:wrap;">${cardLinechartVert('up')}${cardLinechartVert('down')}</div>`,
};

/* ── barchart ───────────────────────────────────────────────────────────────── */

export const BarchartUp = {
    name: 'barchart — Upwards',
  parameters: {
    docs: {
      description: { story: '14 bars × 3px. Bar color: **#6875F5** (brand/500), bar at index 6 lighter: **#B4C6FC** (brand/300). Trend in header row.' },
      source: {
        language: 'html',
        code: `<!-- Card KPI — barchart (286×200px)
     Bar colour comes from the class: default #6875F5, --light #B4C6FC (index 6),
     --down #E74694, --down-light #F8B4D9. Heights are data (inline). -->
<div class="iris-kpi iris-kpi--bar">
  <!-- Header -->
  <div style="display:flex;gap:16px;align-items:flex-start;">
    <div style="flex:1;min-width:0;">
      <div class="iris-kpi__label">Total Sales</div>
      <div class="iris-kpi__trend iris-kpi__trend--up">
        <!-- trend-up arrow SVG -->
        <span>+12.5%</span>
      </div>
      <div class="iris-kpi__value">$16,416</div>
    </div>
    <div class="iris-kpi__pill"><!-- dollar SVG --></div>
  </div>
  <!-- Bar chart: 14 bars × 3px, heights from Figma data -->
  <div class="iris-kpi__bars" style="height:40px;">
    <div class="iris-kpi__bar" style="height:15px;"></div>
    <!-- … 12 more bars … -->
    <div class="iris-kpi__bar iris-kpi__bar--light" style="height:19px;"></div><!-- index 6 -->
  </div>
</div>`,
      },
    },
  },
  render: () => `<div style="display:flex;gap:16px;flex-wrap:wrap;">${cardBarchart('up')}${cardBarchart('down')}</div>`,
};

/* ── barchart-vert ──────────────────────────────────────────────────────────── */

export const BarchartVert = {
    name: 'barchart-vert — Upwards',
  parameters: {
    docs: {
      description: { story: 'Same 14-bar layout with "Compared to day prior" label above the chart.' },
      source: {
        language: 'html',
        code: `<!-- Card KPI — barchart-vert (286×200px)
     Same as barchart but "Compared to day prior" sits between the value and the bars. -->
<div class="iris-kpi iris-kpi--bar">
  <div style="display:flex;flex-direction:column;gap:16px;">
    <div style="display:flex;gap:16px;align-items:flex-start;">
      <div style="flex:1;min-width:0;">
        <div class="iris-kpi__label">Total Sales</div>
        <div class="iris-kpi__value">$16,416</div>
      </div>
      <div class="iris-kpi__pill"><!-- dollar SVG --></div>
    </div>
    <div style="display:flex;align-items:center;justify-content:space-between;">
      <span class="iris-kpi__subtitle">Compared to day prior</span>
      <div class="iris-kpi__trend iris-kpi__trend--up">
        <!-- trend-up arrow SVG -->
        <span>+12.5%</span>
      </div>
    </div>
  </div>
  <div class="iris-kpi__bars" style="height:40px;">
    <!-- 14 .iris-kpi__bar divs, heights from Figma -->
  </div>
</div>`,
      },
    },
  },
  render: () => cardBarchartVert('up'),
};

/* ── barchart-big ───────────────────────────────────────────────────────────── */

export const BarchartBig = {
    name: 'barchart-big — Upwards',
  parameters: {
    docs: {
      description: { story: 'barchart with 4 bars at full container height instead of 2 (indexes 4, 9, 12, 13 = full).' },
      source: {
        language: 'html',
        code: `<!-- Card KPI — barchart-big (286×200px)
     Same structure as barchart; taller 58px chart with 4 full-height bars. -->
<div class="iris-kpi iris-kpi--bar">
  <div style="display:flex;gap:16px;align-items:flex-start;">
    <div style="flex:1;min-width:0;">
      <div class="iris-kpi__label">Total Sales</div>
      <div class="iris-kpi__value">$16,416</div>
    </div>
    <div class="iris-kpi__trend iris-kpi__trend--up">
      <!-- trend-up arrow SVG -->
      <span>+12.5%</span>
    </div>
    <div class="iris-kpi__pill"><!-- dollar SVG --></div>
  </div>
  <div class="iris-kpi__bars" style="height:58px;">
    <div class="iris-kpi__bar" style="height:15px;"></div>
    <!-- … bars at full height use height:100% … -->
    <div class="iris-kpi__bar" style="height:100%;"></div>
  </div>
</div>`,
      },
    },
  },
  render: () => cardBarchartBig('up'),
};

/* ── barchart-segm-hor ──────────────────────────────────────────────────────── */

export const BarchartSegmHor = {
    name: 'barchart-segm-hor — Upwards',
  parameters: {
    docs: {
      description: { story: 'Wide horizontal card (449×104px). Left: 12 segmented columns with 5 color categories. Right: trend + subtitle.' },
      source: {
        language: 'html',
        code: `<!-- Card KPI — barchart-segm-hor (449×104px)
     5 segment colors: gray #F2F4F7, green #22C55E, pink #EC4899, sky #33BFFF, blue #1D4ED8.
     Column width: 6px, gap 10px, container 50px (chart data stays inline). -->
<div class="iris-kpi iris-kpi--wide">

  <!-- Left: label + segmented columns -->
  <div style="display:flex;flex-direction:column;gap:8px;flex:1;min-width:0;justify-content:flex-end;">
    <div class="iris-kpi__label">Total Sales</div>
    <div style="display:flex;align-items:flex-end;gap:10px;height:50px;flex-shrink:0;">
      <div style="display:flex;flex-direction:column;width:6px;overflow:hidden;flex-shrink:0;">
        <div style="width:6px;height:16px;background:#F2F4F7;"></div>
        <div style="width:6px;height:3px;background:#22C55E;"></div>
        <!-- … repeat for all 12 columns … -->
      </div>
    </div>
  </div>

  <!-- Right: trend badge + subtitle + icon pill -->
  <div style="display:flex;flex-direction:column;align-items:flex-end;gap:4px;flex-shrink:0;">
    <div class="iris-kpi__trend iris-kpi__trend--up">
      <!-- trend-up arrow SVG -->
      <span>+12.5%</span>
    </div>
    <span class="iris-kpi__subtitle" style="text-align:right;">Compared to day prior</span>
  </div>
  <div class="iris-kpi__pill"><!-- dollar SVG --></div>

</div>`,
      },
    },
  },
  render: () => cardBarchartSegmHor(),
};

/* ── Credit ─────────────────────────────────────────────────────────────────── */

export const CreditUp = {
    name: 'Credit — Upwards',
  parameters: {
    docs: {
      description: { story: 'Credit-style variant with a distinct wave curve shape (different from standard Linechart).' },
      source: {
        language: 'html',
        code: `<!-- Card KPI — Credit (286×168px)
     Same shell and header as Linechart; different Figma-exported wave path. -->
<div class="iris-kpi iris-kpi--line">
  <div style="display:flex;gap:16px;align-items:flex-start;">
    <div style="flex:1;min-width:0;">
      <div class="iris-kpi__label">Total Sales</div>
      <div class="iris-kpi__value">$16,416</div>
    </div>
    <div class="iris-kpi__trend iris-kpi__trend--up">
      <!-- trend-up arrow SVG -->
      <span>+12.5%</span>
    </div>
    <div class="iris-kpi__pill"><!-- dollar SVG --></div>
  </div>
  <div class="iris-kpi__chart">
    <svg style="width:100%;height:69px;display:block;" viewBox="0 0 286 69" preserveAspectRatio="none">
      <!-- Figma-exported credit-wave fill + stroke paths (#5850EC) -->
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
    <div style="padding:32px;background:var(--color-bg-secondary);display:flex;flex-wrap:wrap;gap:24px;align-items:flex-end;">
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
