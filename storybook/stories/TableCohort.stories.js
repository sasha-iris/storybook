/**
 * Iris Library — Table / Cohort
 *
 * Source: Figma › Iris Library
 *   • TableCellPercent — node 9372:85
 *   • CohortRow        — node 9387:1751
 *
 * Cohort analysis table row with percentage heat-map badges.
 * Shows retention / engagement data where each cell is a colored badge on a brand ramp.
 *
 * ## Percentage badge color ramp (brand/50 → brand/900)
 *
 * | Percent | Badge bg  | Text     | Token       |
 * |---------|-----------|----------|-------------|
 * | 10%     | #f0f5ff   | #111928  | brand/50    |
 * | 20%     | #e5edff   | #111928  | brand/100   |
 * | 30%     | #cddbfe   | #111928  | brand/200   |
 * | 40%     | #b4c6fc   | #111928  | brand/300   |
 * | 50%     | #8da2fb   | #111928  | brand/400   |
 * | 60%     | #6875f5   | #ffffff  | brand/500   |
 * | 70%     | #5850ec   | #ffffff  | brand/600   |
 * | 80%     | #5145cd   | #ffffff  | brand/700   |
 * | 90%     | #42389d   | #ffffff  | brand/800   |
 * | 100%    | #362f78   | #ffffff  | brand/900   |
 *
 * Text flips from #111928 → #ffffff at brand/500 (60%+).
 *
 * ## Percent cell dimensions (Figma-exact)
 * Cell container: px: 4px, py: 8px · Badge: 62 × 42px, border-radius: 4px, padding: 10px
 * (Note: cell padding is px:4px, NOT px:16px like standard data cells)
 *
 * ## CohortRow structure (left → right)
 * 1. Row header: period label (e.g. "Feb 2023") — 140px, Inter 500 14px
 * 2. Count cell: cohort size integer — 116px
 * 3. Percent cells: retention % badges — each 70px wide container
 * 4. Financial cells: $ per user, count, $ total, multiplier, $ amount, $ amount
 *
 * ## Row states
 * | State | Row bg    | Text       |
 * |-------|-----------|------------|
 * | White | #ffffff   | #111928    |
 * | Grey  | #f3f4f6   | #42389d    |
 *
 * Grey row: header, count, and all financial text change to brand/800 (#42389d).
 * Badge colours are identical on both row states — only the cell container bg changes.
 */

/* ── Percent ramp definition ────────────────────────────────────────────── */

const PERCENT_RAMP = [
  { pct: '10%',  bg: '#f0f5ff', text: '#111928' },
  { pct: '20%',  bg: '#e5edff', text: '#111928' },
  { pct: '30%',  bg: '#cddbfe', text: '#111928' },
  { pct: '40%',  bg: '#b4c6fc', text: '#111928' },
  { pct: '50%',  bg: '#8da2fb', text: '#111928' },
  { pct: '60%',  bg: '#6875f5', text: '#ffffff' },
  { pct: '70%',  bg: '#5850ec', text: '#ffffff' },
  { pct: '80%',  bg: '#5145cd', text: '#ffffff' },
  { pct: '90%',  bg: '#42389d', text: '#ffffff' },
  { pct: '100%', bg: '#362f78', text: '#ffffff' },
];

/* ── Cell builders ──────────────────────────────────────────────────────── */

/**
 * Percentage badge cell.
 * @param {object} p
 * @param {string} p.pct      – label e.g. "60%"
 * @param {string} p.bg       – badge background from ramp
 * @param {string} p.text     – badge text colour
 * @param {string} p.cellBg   – cell container background (#fff or #f3f4f6)
 */
const pctCell = ({ pct, bg, text, cellBg = '#ffffff' }) => /* html */`
  <div style="display:flex;flex-direction:column;align-items:flex-start;
              padding:8px 4px;background:${cellBg};
              box-sizing:border-box;flex-shrink:0;">
    <div style="display:flex;align-items:center;justify-content:center;
                width:62px;height:42px;padding:10px;border-radius:4px;
                background:${bg};box-sizing:border-box;">
      <span style="font:600 12px/1.5 'Inter',sans-serif;color:${text};
                   white-space:nowrap;text-align:center;">${pct}</span>
    </div>
  </div>`;

/**
 * Standard right-aligned data cell for cohort row (stretches to row height).
 * @param {object} p
 * @param {string}  p.amount   – value text
 * @param {boolean} p.currency – show "$" prefix
 * @param {string}  p.textCol  – text colour
 * @param {string}  p.bg       – cell background
 * @param {number}  p.width    – cell width in px
 */
const finCell = ({
  amount,
  currency = false,
  textCol = '#111928',
  bg = '#ffffff',
  width = 116,
}) => /* html */`
  <div style="display:flex;align-items:center;justify-content:flex-end;gap:4px;
              padding:8px 16px;align-self:stretch;background:${bg};
              width:${width}px;flex-shrink:0;box-sizing:border-box;">
    ${currency ? `<span style="font:500 14px/1.5 'Inter',sans-serif;color:${textCol};flex-shrink:0;">$</span>` : ''}
    <div style="flex:1 0 0;min-width:1px;">
      <span style="font:500 14px/1.5 'Inter',sans-serif;color:${textCol};
                   text-align:right;display:block;white-space:nowrap;">${amount}</span>
    </div>
  </div>`;

/* ── Default export ─────────────────────────────────────────────────────── */

export default {
  title: 'Iris Library/Table/Cohort',
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    backgrounds: { default: 'light' },
    docs: {
      description: {
        component: `Cohort analysis table primitives — percentage heat-map badges and complete cohort rows.

### Percentage badge ramp

10-step brand color ramp from brand/50 (\`#f0f5ff\`) to brand/900 (\`#362f78\`).
Text flips from \`#111928\` to \`#ffffff\` at 60% (brand/500+).

| Range | Text |
|---|---|
| 10% – 50% | \`#111928\` (dark) |
| 60% – 100% | \`#ffffff\` (white) |

### CohortRow

Each row contains left → right:
1. **Row header** — period label (140px, Inter 500 14px)
2. **Count cell** — initial cohort size (116px)
3. **Percent cells** — retention % badges (70px each, badge 62×42px)
4. **Financial cells** — various widths (82–140px)

### Row states

| State | Row bg | All text |
|---|---|---|
| White | \`#ffffff\` | \`#111928\` |
| Grey (alternate) | \`#f3f4f6\` | \`#42389d\` |

Grey row changes header + financial text to brand/800. Badge colours stay identical — only the cell container bg changes to \`#f3f4f6\`.

### Developer notes
- Percent cell container: \`padding:8px 4px\` (not the standard 8px 16px)
- Badge: \`62×42px\`, \`border-radius:4px\`, \`padding:10px\`
- Row height is driven by the badge cells (~58px) — financial cells use \`align-self:stretch\` to match
- Financial cells that are taller than 38px naturally — use flexbox stretching not fixed heights

### QA notes
- Verify smooth color progression: lightest (#f0f5ff) → darkest (#362f78)
- Text contrast at 50% (#8da2fb badge): dark text (#111928) — confirm legibility
- At 60% (#6875f5 badge): flips to white — check no intermediate step is missed
- Grey row: ALL text (header, count, financials) must change to #42389d
- Badges on grey row: badge colours are identical to white row — only outer cell bg shifts`,
      },
    },
  },
};

/* ─────────────────────────────────────────────────────────────────────────
   PERCENT BADGE RAMP  — node 9372:85
───────────────────────────────────────────────────────────────────────── */
/**
 * Full 10-step percentage badge ramp on white and grey cell backgrounds.
 * Demonstrates the brand color ramp used in cohort/heatmap tables.
 *
 * **QA checklist**
 * - 10 steps: 10% → 100%, evenly spaced on the brand scale
 * - Text flips from #111928 to #ffffff at 60%
 * - Badge: 62×42px, border-radius 4px
 * - Cell container: px:4px (tighter than standard data cells)
 * - Grey bg row: badge colours unchanged, only cell container bg = #f3f4f6
 */
export const PercentBadgeRamp = {
  name: 'Percent badge ramp — 10% → 100%',
  parameters: {
    docs: {
      description: {
        story: 'Full 10-step percentage heat-map badge ramp on white and grey cell backgrounds. Text flips from dark to white at 60%.',
      },
      source: {
        language: 'html',
        code: `<!-- 60% badge — white text (brand/500) -->
<div style="display:flex;flex-direction:column;align-items:flex-start;
            padding:8px 4px;background:#fff;box-sizing:border-box;">
  <div style="display:flex;align-items:center;justify-content:center;
              width:62px;height:42px;padding:10px;border-radius:4px;
              background:#6875f5;box-sizing:border-box;">
    <span style="font:600 12px/1.5 'Inter',sans-serif;color:#fff;
                 white-space:nowrap;text-align:center;">60%</span>
  </div>
</div>

<!-- 40% badge — dark text (brand/300) -->
<div style="display:flex;flex-direction:column;align-items:flex-start;
            padding:8px 4px;background:#fff;box-sizing:border-box;">
  <div style="display:flex;align-items:center;justify-content:center;
              width:62px;height:42px;padding:10px;border-radius:4px;
              background:#b4c6fc;box-sizing:border-box;">
    <span style="font:600 12px/1.5 'Inter',sans-serif;color:#111928;
                 white-space:nowrap;text-align:center;">40%</span>
  </div>
</div>`,
      },
    },
  },
  render: () => /* html */`
    <div style="display:flex;flex-direction:column;gap:16px;">
      <div>
        <p style="font:700 11px/1 'Inter',sans-serif;text-transform:uppercase;
                  letter-spacing:.12em;color:#6b7280;margin:0 0 8px;
                  border-bottom:1px solid #e5e7eb;padding-bottom:6px;">
          On white cell bg (#fff)
        </p>
        <div style="display:flex;align-items:flex-end;flex-wrap:wrap;">
          ${PERCENT_RAMP.map(({ pct, bg, text }) =>
            pctCell({ pct, bg, text, cellBg: '#ffffff' })).join('')}
        </div>
      </div>
      <div>
        <p style="font:700 11px/1 'Inter',sans-serif;text-transform:uppercase;
                  letter-spacing:.12em;color:#6b7280;margin:0 0 8px;
                  border-bottom:1px solid #e5e7eb;padding-bottom:6px;">
          On grey cell bg (#f3f4f6)
        </p>
        <div style="display:flex;align-items:flex-end;flex-wrap:wrap;">
          ${PERCENT_RAMP.map(({ pct, bg, text }) =>
            pctCell({ pct, bg, text, cellBg: '#f3f4f6' })).join('')}
        </div>
      </div>
    </div>`,
};

/* ─────────────────────────────────────────────────────────────────────────
   COHORT ROW  — node 9387:1751
───────────────────────────────────────────────────────────────────────── */
/**
 * Complete cohort row with realistic "Feb 2023" data from Figma.
 * Shows white (default) and grey (alternating) row states.
 *
 * Row columns (Figma-exact widths):
 *   Row header (140px) · Count (116px) · 13× Percent cells
 *   · $ per user (140px) · Count (82px) · $ total (120px)
 *   · Multiplier (120px) · $ amount (120px) · $ amount (120px)
 *
 * Percent values from Figma Feb 2023 row:
 *   100%, 98%, 84%, 72%, 80%, 66%, 62%, 54%, 48%, 36%, 22%, 14%, 8%
 *
 * **QA checklist**
 * - White row: all text #111928
 * - Grey row: ALL text #42389d (header + count + all financials)
 * - Badges are identical on both rows — only cell bg changes
 * - Row height driven by badge cells (~58px); financial cells stretch to match
 * - Horizontal scroll on narrow viewports — do not truncate the row
 */
export const CohortRowExample = {
  name: 'Cohort row — white & grey',
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        story: `Full cohort row (Feb 2023 from Figma) in white and grey row states.
Grey row changes header and all financial cell text to brand/800 (\`#42389d\`).
Scroll horizontally if the viewport is narrow.`,
      },
    },
  },
  render: () => {
    /* Figma-exact percent values for the Feb 2023 row */
    const FEB_PCTS = [
      { pct: '100%', bg: '#362f78', text: '#ffffff' },
      { pct: '98%',  bg: '#362f78', text: '#ffffff' },
      { pct: '84%',  bg: '#42389d', text: '#ffffff' },
      { pct: '72%',  bg: '#5145cd', text: '#ffffff' },
      { pct: '80%',  bg: '#5145cd', text: '#ffffff' },
      { pct: '66%',  bg: '#5850ec', text: '#ffffff' },
      { pct: '62%',  bg: '#5850ec', text: '#ffffff' },
      { pct: '54%',  bg: '#6875f5', text: '#ffffff' },
      { pct: '48%',  bg: '#8da2fb', text: '#111928' },
      { pct: '36%',  bg: '#b4c6fc', text: '#111928' },
      { pct: '22%',  bg: '#cddbfe', text: '#111928' },
      { pct: '14%',  bg: '#e5edff', text: '#111928' },
      { pct: '8%',   bg: '#f0f5ff', text: '#111928' },
    ];

    /* Figma-exact financial columns */
    const FIN_COLS = [
      { amount: '25.00', currency: true,  width: 140 },
      { amount: '25.00', currency: false, width: 82  },
      { amount: '25.00', currency: true,  width: 120 },
      { amount: '1x',    currency: false, width: 120 },
      { amount: '25.00', currency: true,  width: 120 },
      { amount: '0.00',  currency: true,  width: 120 },
    ];

    const cohortRow = (grey) => {
      const rowBg  = grey ? '#f3f4f6' : '#ffffff';
      const textCol = grey ? '#42389d' : '#111928';
      return /* html */`
        <div style="display:flex;align-items:stretch;background:${rowBg};
                    border-bottom:1px solid #e5e7eb;">
          <!-- Row header: period label -->
          <div style="display:flex;align-items:center;justify-content:flex-end;gap:4px;
                      padding:8px 16px;background:${rowBg};width:140px;
                      flex-shrink:0;box-sizing:border-box;">
            <span style="font:500 14px/1.5 'Inter',sans-serif;color:${textCol};flex:1 0 0;">
              Feb 2023
            </span>
          </div>
          <!-- Count cell -->
          <div style="display:flex;align-items:center;justify-content:flex-end;gap:4px;
                      padding:8px 16px;background:${rowBg};width:116px;
                      flex-shrink:0;box-sizing:border-box;">
            <div style="flex:1 0 0;min-width:1px;">
              <span style="font:500 14px/1.5 'Inter',sans-serif;color:${textCol};
                           text-align:right;display:block;">1</span>
            </div>
          </div>
          <!-- Percent badge cells -->
          <div style="display:flex;align-items:center;background:${rowBg};">
            ${FEB_PCTS.map(({ pct, bg, text }) =>
              pctCell({ pct, bg, text, cellBg: rowBg })).join('')}
          </div>
          <!-- Financial cells -->
          ${FIN_COLS.map(({ amount, currency, width }) =>
            finCell({ amount, currency, textCol, bg: rowBg, width })).join('')}
        </div>`;
    };

    return /* html */`
      <div style="padding:24px;overflow-x:auto;">
        <div style="border:1px solid #e5e7eb;border-radius:8px;
                    overflow:hidden;display:inline-flex;flex-direction:column;min-width:max-content;">
          <!-- Column headers row for orientation -->
          <div style="display:flex;align-items:stretch;background:#f9fafb;
                      border-bottom:1px solid #e5e7eb;">
            <div style="width:140px;flex-shrink:0;padding:8px 16px;box-sizing:border-box;
                        display:flex;align-items:center;">
              <span style="font:600 11px/1 'Inter',sans-serif;text-transform:uppercase;
                           letter-spacing:.08em;color:#9ca3af;">Cohort</span>
            </div>
            <div style="width:116px;flex-shrink:0;padding:8px 16px;box-sizing:border-box;
                        display:flex;align-items:center;justify-content:flex-end;">
              <span style="font:600 11px/1 'Inter',sans-serif;text-transform:uppercase;
                           letter-spacing:.08em;color:#9ca3af;">Users</span>
            </div>
            <div style="display:flex;align-items:center;padding:0 4px;">
              ${['Month 1','Month 2','Month 3','Month 4','Month 5',
                 'Month 6','Month 7','Month 8','Month 9','Month 10',
                 'Month 11','Month 12','Month 13']
                .map(m => /* html */`
                  <div style="width:70px;flex-shrink:0;padding:8px 4px;box-sizing:border-box;
                              display:flex;align-items:center;justify-content:center;">
                    <span style="font:600 10px/1 'Inter',sans-serif;text-transform:uppercase;
                                 letter-spacing:.06em;color:#9ca3af;text-align:center;
                                 white-space:nowrap;">${m}</span>
                  </div>`).join('')}
            </div>
            ${[
              { label: '$ / User', w: 140 },
              { label: 'Count',    w: 82  },
              { label: '$ Total',  w: 120 },
              { label: 'Mult.',    w: 120 },
              { label: '$ Amt',    w: 120 },
              { label: '$ Amt',    w: 120 },
            ].map(({ label, w }) => /* html */`
              <div style="width:${w}px;flex-shrink:0;padding:8px 16px;box-sizing:border-box;
                          display:flex;align-items:center;justify-content:flex-end;">
                <span style="font:600 11px/1 'Inter',sans-serif;text-transform:uppercase;
                             letter-spacing:.08em;color:#9ca3af;">${label}</span>
              </div>`).join('')}
          </div>
          <!-- White row -->
          ${cohortRow(false)}
          <!-- Grey row (alternating) -->
          ${cohortRow(true)}
          <!-- Second white row (to show alternating pattern) -->
          ${cohortRow(false)}
        </div>
        <p style="font:400 12px/1.5 'Inter',sans-serif;color:#9ca3af;margin:8px 0 0;">
          White row + grey (alternating) + white row. Scroll horizontally to see all columns.
        </p>
      </div>`;
  },
};

/* ─────────────────────────────────────────────────────────────────────────
   COHORT ANALYSIS TABLE  — assembled multi-cohort heatmap
───────────────────────────────────────────── */
/**
 * Assembled cohort analysis table: 7 monthly cohorts rendered as a retention
 * heatmap. Newer cohorts have fewer filled columns, producing the characteristic
 * triangular shape. The color ramp gives an immediate visual read of retention
 * decay over time.
 *
 * Data (realistic SaaS retention — % retained at each month post-acquisition):
 * | Cohort   | M1   | M2  | M3  | M4  | M5  | M6  | M7  |
 * |----------|------|-----|-----|-----|-----|-----|-----|
 * | Aug 2023 | 100% | 82% | 72% | 64% | 58% | 52% | 46% |
 * | Sep 2023 | 100% | 80% | 70% | 62% | 56% | 48% |  —  |
 * | Oct 2023 | 100% | 78% | 68% | 60% | 52% |  —  |  —  |
 * | Nov 2023 | 100% | 76% | 66% | 58% |  —  |  —  |  —  |
 * | Dec 2023 | 100% | 74% | 62% |  —  |  —  |  —  |  —  |
 * | Jan 2024 | 100% | 72% |  —  |  —  |  —  |  —  |  —  |
 * | Feb 2024 | 100% |  —  |  —  |  —  |  —  |  —  |  —  |
 *
 * **QA checklist**
 * - Triangular shape: each newer cohort has exactly one fewer filled column
 * - All Month 1 cells: brand/900 (#362f78) — darkest badge on every row
 * - Empty cells: #f3f4f6 badge bg, #d1d5db dash glyph, no color badge
 * - Even-indexed rows (0-based): white bg; odd-indexed: grey bg (#f3f4f6)
 *   + text flips to brand/800 (#42389d) on grey rows
 * - Column headers: "Cohort" · "Users" · "Month 1" … "Month 7"
 * - Badge dimensions: 62×42px, border-radius:4px; cell container: px:4px
 * - Scroll horizontally on narrow viewports — do not truncate
 */
export const CohortAnalysisTable = {
  name: 'Cohort analysis table — assembled heatmap',
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        story: `Multi-cohort retention heatmap assembled from the \`CohortRow\` primitive.
Seven cohort periods (Aug 2023 – Feb 2024) with a triangular fill pattern —
each newer cohort has one fewer months of data. The brand color ramp creates an
immediate visual read of retention decay: darkest (brand/900) in Month 1,
fading toward brand/50 as retention drops in later months.`,
      },
    },
  },
  render: () => {
    /* Map a retention percentage to the closest ramp step */
    const PCT_MAP = [
      { min: 95, bg: '#362f78', text: '#ffffff' },
      { min: 85, bg: '#42389d', text: '#ffffff' },
      { min: 75, bg: '#5145cd', text: '#ffffff' },
      { min: 65, bg: '#5850ec', text: '#ffffff' },
      { min: 55, bg: '#6875f5', text: '#ffffff' },
      { min: 45, bg: '#8da2fb', text: '#111928' },
      { min: 35, bg: '#b4c6fc', text: '#111928' },
      { min: 25, bg: '#cddbfe', text: '#111928' },
      { min: 15, bg: '#e5edff', text: '#111928' },
      { min:  0, bg: '#f0f5ff', text: '#111928' },
    ];
    const toRamp = (pct) => PCT_MAP.find(r => pct >= r.min) || PCT_MAP[PCT_MAP.length - 1];

    /* Cohort rows: label, initial user count, retention % per month (null = no data yet) */
    const COHORTS = [
      { label: 'Aug 2023', users: 1240, pcts: [100, 82, 72, 64, 58, 52, 46]          },
      { label: 'Sep 2023', users: 1185, pcts: [100, 80, 70, 62, 56, 48, null]        },
      { label: 'Oct 2023', users: 1320, pcts: [100, 78, 68, 60, 52, null, null]      },
      { label: 'Nov 2023', users: 1092, pcts: [100, 76, 66, 58, null, null, null]    },
      { label: 'Dec 2023', users:  980, pcts: [100, 74, 62, null, null, null, null]  },
      { label: 'Jan 2024', users: 1410, pcts: [100, 72, null, null, null, null, null]},
      { label: 'Feb 2024', users: 1530, pcts: [100, null, null, null, null, null, null]},
    ];

    const MONTHS = ['Month 1','Month 2','Month 3','Month 4','Month 5','Month 6','Month 7'];

    /* Empty cell placeholder for periods with no data yet */
    const emptyCell = (cellBg) => /* html */`
      <div style="display:flex;flex-direction:column;align-items:flex-start;
                  padding:8px 4px;background:${cellBg};box-sizing:border-box;flex-shrink:0;">
        <div style="display:flex;align-items:center;justify-content:center;
                    width:62px;height:42px;padding:10px;border-radius:4px;
                    background:#f3f4f6;box-sizing:border-box;">
          <span style="font:500 12px/1.5 'Inter',sans-serif;color:#d1d5db;">—</span>
        </div>
      </div>`;

    /* Column header row */
    const headerRow = /* html */`
      <div style="display:flex;align-items:stretch;background:#f9fafb;
                  border-bottom:1px solid #e5e7eb;">
        <div style="width:140px;flex-shrink:0;padding:8px 16px;box-sizing:border-box;
                    display:flex;align-items:center;">
          <span style="font:600 11px/1 'Inter',sans-serif;text-transform:uppercase;
                       letter-spacing:.08em;color:#9ca3af;">Cohort</span>
        </div>
        <div style="width:116px;flex-shrink:0;padding:8px 16px;box-sizing:border-box;
                    display:flex;align-items:center;justify-content:flex-end;">
          <span style="font:600 11px/1 'Inter',sans-serif;text-transform:uppercase;
                       letter-spacing:.08em;color:#9ca3af;">Users</span>
        </div>
        ${MONTHS.map(m => /* html */`
          <div style="width:70px;flex-shrink:0;padding:8px 4px;box-sizing:border-box;
                      display:flex;align-items:center;justify-content:center;">
            <span style="font:600 10px/1 'Inter',sans-serif;text-transform:uppercase;
                         letter-spacing:.06em;color:#9ca3af;text-align:center;
                         white-space:nowrap;">${m}</span>
          </div>`).join('')}
      </div>`;

    /* Data rows */
    const dataRows = COHORTS.map(({ label, users, pcts }, idx) => {
      const grey    = idx % 2 === 1;
      const rowBg   = grey ? '#f3f4f6' : '#ffffff';
      const textCol = grey ? '#42389d' : '#111928';

      return /* html */`
        <div style="display:flex;align-items:stretch;background:${rowBg};
                    border-bottom:1px solid #e5e7eb;">
          <div style="display:flex;align-items:center;padding:8px 16px;
                      width:140px;flex-shrink:0;box-sizing:border-box;background:${rowBg};">
            <span style="font:500 14px/1.5 'Inter',sans-serif;color:${textCol};flex:1 0 0;">
              ${label}
            </span>
          </div>
          <div style="display:flex;align-items:center;justify-content:flex-end;
                      padding:8px 16px;width:116px;flex-shrink:0;
                      box-sizing:border-box;background:${rowBg};">
            <span style="font:500 14px/1.5 'Inter',sans-serif;color:${textCol};
                         text-align:right;">${users.toLocaleString('en-US')}</span>
          </div>
          <div style="display:flex;align-items:center;background:${rowBg};">
            ${pcts.map(pct =>
              pct === null
                ? emptyCell(rowBg)
                : pctCell({ ...toRamp(pct), pct: pct + '%', cellBg: rowBg })
            ).join('')}
          </div>
        </div>`;
    }).join('');

    return /* html */`
      <div style="padding:24px;overflow-x:auto;">
        <div style="border:1px solid #e5e7eb;border-radius:8px;overflow:hidden;
                    display:inline-flex;flex-direction:column;min-width:max-content;">
          ${headerRow}
          ${dataRows}
        </div>
        <p style="font:400 12px/1.5 'Inter',sans-serif;color:#9ca3af;margin:8px 0 0;">
          7 cohort periods · triangular fill · alternating grey rows ·
          scroll horizontally on narrow viewports
        </p>
      </div>`;
  },
};
