/**
 * Iris Library — Table / Composed
 *
 * Assembled table stories that combine the building blocks from Table/Cells
 * into realistic product table layouts.
 *
 * Building blocks (see Table/Cells for component-level reference):
 *   • TableCell             — node 9279:163646
 *   • TableHeaderHorizontal — node 9279:163718
 *   • TableHeaderVertical   — node 9279:163779
 *
 * All helpers below are intentionally inlined so this file is self-contained
 * and does not depend on the non-exported helpers in Table.stories.js.
 *
 * ## Table anatomy
 *
 * ```
 * ┌─────────────────┬──────────┬───────────────┬──────────┐
 * │  Row label      │ Income   │ Disbursements │ Total    │  ← header row
 * │  (180px)        │ (146px)  │   (146px)     │ (146px)  │
 * ├─────────────────┼──────────┼───────────────┼──────────┤
 * │  Revenue        │ 45,231   │       —       │ 45,231   │  Default row
 * │  COGS           │    —     │  28,400       │ 28,400   │  Default row (alt)
 * │  Gross Profit   │ 45,231   │  28,400       │ 16,831   │  Derival row (orange)
 * │  OpEx           │    —     │  12,500       │ 12,500   │  Default row
 * │  Net Income     │ 45,231   │  40,900       │  4,331   │  Total row (gray)
 * └─────────────────┴──────────┴───────────────┴──────────┘
 * ```
 *
 * ## Row type used as a grid-level primitive
 * Each table row is a horizontal flex of cells that all share the same background:
 * - Default row:   #ffffff  (standard data rows)
 * - NonColl row:   #f9fafb  (section headers / non-collapsible rows)
 * - Derival row:   #fff8f1  (derived / sub-total)
 * - Total row:     #f3f4f6  (grand total)
 */

/* ── Shared cell helpers (self-contained) ─────────────────────────────── */

/** Row label cell — left-aligned text, first column */
const lbl = ({
  text,
  bg = '#ffffff',
  color = '#111928',
  bold = false,
  width = 180,
  indent = 0,
} = {}) => /* html */`
  <div style="display:flex;align-items:center;
              width:${width}px;min-height:38px;padding:8px 16px;background:${bg};
              box-sizing:border-box;flex-shrink:0;">
    <span style="font:${bold ? 600 : 500} 14px/1.5 'Inter',sans-serif;
                 color:${color};flex:1 0 0;
                 ${indent ? `padding-left:${indent}px;` : ''}">${text}</span>
  </div>`;

/** Column category header (horizontal) */
const cHdr = ({
  text = 'Column',
  bg = '#ffffff',
  color = '#111928',
  bold = true,
  width = 146,
} = {}) => /* html */`
  <div style="display:flex;align-items:center;justify-content:flex-end;gap:4px;
              width:${width}px;height:38px;padding:8px 16px;background:${bg};
              box-sizing:border-box;flex-shrink:0;">
    <span style="font:${bold ? 600 : 500} 14px/1.5 'Inter',sans-serif;
                 color:${color};flex:1 0 0;">${text}</span>
  </div>`;

/** Period header (vertical) — uppercase 12px bold, right-aligned */
const pHdr = ({
  label = 'LABEL',
  bg = '#f9fafb',
  color = '#6b7280',
  width = 146,
} = {}) => /* html */`
  <div style="display:flex;align-items:center;justify-content:flex-end;gap:4px;
              width:${width}px;height:38px;padding:8px 16px;background:${bg};
              box-sizing:border-box;flex-shrink:0;">
    <span style="font:700 12px/1.5 'Inter',sans-serif;
                 color:${color};flex:1 0 0;text-align:right;">${label}</span>
  </div>`;

/** Data value cell — right-aligned, numeric */
const val = ({
  amount = '—',
  currency = false,
  textColor = '#111928',
  bg = '#ffffff',
  width = 146,
  grey = false,   // grey = true renders em-dash in grey (empty/N/A cell)
} = {}) => {
  const tc = grey ? '#6b7280' : textColor;
  return /* html */`
  <div style="display:flex;align-items:center;justify-content:flex-end;gap:4px;
              width:${width}px;height:38px;padding:8px 16px;background:${bg};
              box-sizing:border-box;flex-shrink:0;">
    ${(!grey && currency) ? `<span style="font:500 14px/1.5 'Inter',sans-serif;color:${tc};flex-shrink:0;">$</span>` : ''}
    <div style="flex:1 0 0;min-width:1px;">
      <span style="font:500 14px/1.5 'Inter',sans-serif;color:${tc};
                   text-align:right;display:block;white-space:nowrap;">${amount}</span>
    </div>
  </div>`;
};

/** Horizontal divider between table rows */
const DIV = `<div style="height:1px;background:#e5e7eb;flex-shrink:0;width:100%;"></div>`;

/** Wrap a row's cells in a flex row with a bottom border */
const row = (cells, bg = '#ffffff') => /* html */`
  <div style="display:flex;align-items:stretch;background:${bg};">
    ${cells}
  </div>
  ${DIV}`;

/** Outer table shell */
const tableWrap = (content, { overflow = false } = {}) => /* html */`
  <div style="${overflow ? 'overflow-x:auto;' : ''}">
    <div style="display:inline-flex;flex-direction:column;
                border:1px solid #e5e7eb;border-radius:8px;
                overflow:hidden;min-width:${overflow ? 'max-content' : '0'};">
      ${content}
    </div>
  </div>`;

/* ── Default export ─────────────────────────────────────────────────────── */

export default {
  title: 'Iris Library/Table/Composed',
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    backgrounds: { default: 'light' },
    docs: {
      description: {
        component: `Assembled table layouts that combine the building blocks from **Table/Cells** into realistic product tables.

Each composed story is the minimal complete structure you would ship in production.
For the individual cell tokens and option reference see **Table/Cells**.

### How rows are built

Each table row is a horizontal flex of cells. All cells on a row share one background colour (the row type):

| Row type | Background | Typical use |
|---|---|---|
| Default | \`#ffffff\` | Standard data rows |
| NonCollapsible | \`#f9fafb\` | Section sub-header (non-collapsible) |
| Derival | \`#fff8f1\` | Derived / sub-total |
| Total | \`#f3f4f6\` | Grand total |

### Column category headers

Category semantics are encoded in the column header background and text colour:

| Category | Header bg | Text |
|---|---|---|
| Income | \`#f3faf7\` | \`#057a55\` |
| Disbursements | \`#fdf2f2\` | \`#e02424\` |
| Total / Union | \`#f3f4f6\` | \`#111928\` / \`#42389d\` |
| Expand | \`#edebfe\` | \`#42389d\` |

### Period header columns

ACTUALS columns use brand/200 (\`#cddbfe\`) header bg.
FORECAST columns use teal/200 (\`#96f7e4\`) header bg.`,
      },
    },
  },
};

/* ─────────────────────────────────────────────────────────────────────────
   BASIC FINANCIAL TABLE
───────────────────────────────────────────────────────────────────────── */
/**
 * P&L excerpt: Income / Disbursements / Total columns.
 *
 * Row types demonstrated:
 * - Default (white): standard line items
 * - Derival (orange #fff8f1): Gross Profit sub-total
 * - Total (gray #f3f4f6): Net Income grand total
 *
 * Cell options demonstrated:
 * - Calculated (green): positive income values
 * - Default (black): neutral values
 * - Waste (pink): expense/disbursement values
 * - Grey: empty/N/A slots
 * - Indigo: grand total values
 *
 * **QA checklist**
 * - Header row has colored category backgrounds (Income=green, Disbursements=red, Total=gray)
 * - Derival row: orange bg #fff8f1 spans all columns including label
 * - Total row: gray bg #f3f4f6 spans all columns
 * - Bottom-left + bottom-right corners of the table are clipped to border-radius
 * - All cell heights: 38px; all dividers: 1px #e5e7eb
 * - Income column values: #0e9f6e (Calculated option)
 * - Disbursements column values: #e74694 (Waste option)
 * - Total column grand total: #42389d (Indigo option)
 */
export const FinancialTableBasic = {
  name: 'Financial table — P&L excerpt',
  parameters: {
    docs: {
      description: {
        story: `A complete P&L excerpt table with Income / Disbursements / Total category columns.
Demonstrates Derival (sub-total) and Total rows in context alongside standard Default rows.`,
      },
      source: {
        language: 'html',
        code: `<!-- Financial table shell -->
<div style="display:inline-flex;flex-direction:column;border:1px solid #e5e7eb;
            border-radius:8px;overflow:hidden;">

  <!-- Header row -->
  <div style="display:flex;align-items:stretch;background:#fff;">
    <div style="width:180px;height:38px;padding:8px 16px;background:#f9fafb;..."><!-- corner --></div>
    <div style="width:146px;height:38px;padding:8px 16px;background:#f3faf7;...">Income</div>
    <div style="width:146px;height:38px;padding:8px 16px;background:#fdf2f2;...">Disbursements</div>
    <div style="width:146px;height:38px;padding:8px 16px;background:#f3f4f6;...">Total</div>
  </div>

  <!-- Default data row -->
  <div style="display:flex;align-items:stretch;background:#fff;">
    <div style="width:180px;height:38px;padding:8px 16px;...">Revenue</div>
    <!-- Income cell — Calculated option, green text -->
    <div style="display:flex;align-items:center;justify-content:flex-end;gap:4px;
                width:146px;height:38px;padding:8px 16px;background:#fff;...">
      <span style="color:#0e9f6e;">$</span>
      <span style="color:#0e9f6e;">45,231,00</span>
    </div>
    <!-- ... remaining cells -->
  </div>

  <!-- Derival sub-total row (orange bg) -->
  <div style="display:flex;align-items:stretch;background:#fff8f1;">
    <!-- all cells share #fff8f1 background -->
  </div>

  <!-- Total row (gray bg) -->
  <div style="display:flex;align-items:stretch;background:#f3f4f6;">
    <!-- all cells share #f3f4f6 background -->
  </div>
</div>`,
      },
    },
  },
  render: () => {
    const ROW_BG = { default: '#ffffff', derival: '#fff8f1', total: '#f3f4f6', noncoll: '#f9fafb' };
    const COL = { income: { bg: '#f3faf7', color: '#057a55' }, disb: { bg: '#fdf2f2', color: '#e02424' }, total: { bg: '#f3f4f6', color: '#111928' } };

    const headerRow = /* html */`
      <div style="display:flex;align-items:stretch;">
        ${lbl({ text: '',          bg: '#f9fafb', width: 180, bold: true })}
        ${cHdr({ text: 'Income',        ...COL.income })}
        ${cHdr({ text: 'Disbursements', ...COL.disb   })}
        ${cHdr({ text: 'Total',         ...COL.total   })}
      </div>
      ${DIV}`;

    const rows = [
      {
        label: 'Revenue',    rowBg: ROW_BG.default,
        income: { amount: '45,231,00', currency: true, textColor: '#0e9f6e' },
        disb:   { amount: '—', grey: true },
        total:  { amount: '45,231,00', currency: true, textColor: '#0e9f6e' },
      },
      {
        label: 'COGS',       rowBg: ROW_BG.default,
        income: { amount: '—', grey: true },
        disb:   { amount: '28,400,00', currency: true, textColor: '#e74694' },
        total:  { amount: '28,400,00', currency: true, textColor: '#e74694' },
      },
      {
        label: 'Gross Profit', rowBg: ROW_BG.derival,
        income: { amount: '45,231,00', currency: true, textColor: '#0e9f6e' },
        disb:   { amount: '28,400,00', currency: true, textColor: '#e74694' },
        total:  { amount: '16,831,00', currency: true, textColor: '#111928' },
      },
      {
        label: 'Operating Expenses', rowBg: ROW_BG.default,
        income: { amount: '—', grey: true },
        disb:   { amount: '12,500,00', currency: true, textColor: '#e74694' },
        total:  { amount: '12,500,00', currency: true, textColor: '#e74694' },
      },
      {
        label: 'Net Income', rowBg: ROW_BG.total,
        income: { amount: '45,231,00', currency: true, textColor: '#42389d' },
        disb:   { amount: '40,900,00', currency: true, textColor: '#42389d' },
        total:  { amount: '4,331,00',  currency: true, textColor: '#42389d' },
      },
    ];

    const dataRows = rows.map(({ label, rowBg, income, disb, total: t }) => `
      <div style="display:flex;align-items:stretch;background:${rowBg};">
        ${lbl({ text: label, bg: rowBg, bold: rowBg !== ROW_BG.default })}
        ${val({ ...income, bg: rowBg })}
        ${val({ ...disb,   bg: rowBg })}
        ${val({ ...t,      bg: rowBg })}
      </div>
      ${DIV}`).join('');

    return tableWrap(headerRow + dataRows);
  },
};

/* ─────────────────────────────────────────────────────────────────────────
   TABLE WITH ALL ROW TYPES
───────────────────────────────────────────────────────────────────────── */
/**
 * A budget section showing all 4 row types in their natural hierarchy:
 * NonCollapsible section header → Default data rows → Derival subtotal → Total.
 *
 * Row types:
 * - NonCollapsible (#f9fafb): "Operating Expenses" section header
 * - Default (#ffffff): individual line items
 * - Derival (#fff8f1): sub-total for the section
 * - Total (#f3f4f6): grand total across all sections
 *
 * **QA checklist**
 * - NonCollapsible row: #f9fafb bg, label is bold 600
 * - Derival row: #fff8f1 warm orange tint
 * - Total row: #f3f4f6 cool gray — visually heavier than Derival
 * - Section header row has no data values — all slots are blank/gray
 * - All dividers: 1px #e5e7eb
 * - Total row values: Indigo option (#42389d) bold
 */
export const FinancialTableRowTypes = {
  name: 'Financial table — all row types',
  parameters: {
    docs: {
      description: {
        story: `All 4 row-type backgrounds in a realistic hierarchy: NonCollapsible section header → Default data rows → Derival sub-total → Total grand total.`,
      },
    },
  },
  render: () => {
    const B = { def: '#ffffff', nc: '#f9fafb', deriv: '#fff8f1', tot: '#f3f4f6' };
    const COL = { expand: { bg: '#edebfe', color: '#42389d' }, def: { bg: '#ffffff', color: '#111928' }, total: { bg: '#f3f4f6', color: '#111928' } };

    const hRow = /* html */`
      <div style="display:flex;align-items:stretch;">
        ${lbl({ text: '',             bg: '#f9fafb', width: 220, bold: true })}
        ${cHdr({ text: 'Jan 2024',    ...COL.def,    width: 146 })}
        ${cHdr({ text: 'Feb 2024',    ...COL.def,    width: 146 })}
        ${cHdr({ text: 'Mar 2024',    ...COL.def,    width: 146 })}
        ${cHdr({ text: 'Q1 Total',    ...COL.total,  width: 146 })}
      </div>
      ${DIV}`;

    // Helper: 4-cell data row
    const dr = (rowBg, label, v1, v2, v3, vt, opts = {}) => /* html */`
      <div style="display:flex;align-items:stretch;background:${rowBg};">
        ${lbl({ text: label, bg: rowBg, width: 220, bold: opts.bold, indent: opts.indent || 0, color: opts.labelColor || '#111928' })}
        ${val({ amount: v1, currency: true, textColor: opts.tc || '#111928', bg: rowBg, grey: v1 === '—' })}
        ${val({ amount: v2, currency: true, textColor: opts.tc || '#111928', bg: rowBg, grey: v2 === '—' })}
        ${val({ amount: v3, currency: true, textColor: opts.tc || '#111928', bg: rowBg, grey: v3 === '—' })}
        ${val({ amount: vt, currency: true, textColor: opts.tc || '#111928', bg: rowBg, grey: vt === '—' })}
      </div>
      ${DIV}`;

    return tableWrap(
      hRow +
      // Section A — NonCollapsible header
      dr(B.nc, 'Revenue', '—', '—', '—', '—', { bold: true }) +
      dr(B.def, 'Product sales', '32,400,00', '35,100,00', '38,200,00', '105,700,00', { indent: 16, tc: '#0e9f6e' }) +
      dr(B.def, 'Services', '12,831,00', '13,500,00', '14,000,00', '40,331,00',       { indent: 16, tc: '#0e9f6e' }) +
      dr(B.deriv, 'Revenue sub-total', '45,231,00', '48,600,00', '52,200,00', '146,031,00', { bold: true }) +
      // Section B — NonCollapsible header
      dr(B.nc, 'Expenses', '—', '—', '—', '—', { bold: true }) +
      dr(B.def, 'Salaries',  '18,000,00', '18,000,00', '18,000,00', '54,000,00', { indent: 16, tc: '#e74694' }) +
      dr(B.def, 'Software',  '2,400,00',  '2,400,00',  '2,400,00',  '7,200,00',  { indent: 16, tc: '#e74694' }) +
      dr(B.def, 'Marketing', '5,000,00',  '5,500,00',  '6,000,00',  '16,500,00', { indent: 16, tc: '#e74694' }) +
      dr(B.deriv, 'Expenses sub-total', '25,400,00', '25,900,00', '26,400,00', '77,700,00', { bold: true }) +
      // Grand total
      dr(B.tot, 'Net Income', '19,831,00', '22,700,00', '25,800,00', '68,331,00', { bold: true, tc: '#42389d' })
    );
  },
};

/* ─────────────────────────────────────────────────────────────────────────
   TABLE WITH ACTUALS / FORECAST PERIOD HEADERS
───────────────────────────────────────────────────────────────────────── */
/**
 * Budget table with vertical period headers: ACTUALS columns (brand/200 bg)
 * followed by FORECAST columns (teal/200 bg), plus a Total column.
 *
 * This table uses `overflow-x:auto` — it is wider than a standard padded layout.
 *
 * **QA checklist**
 * - ACTUALS header bg: #cddbfe (brand/200)
 * - FORECAST header bg: #96f7e4 (teal/200)
 * - Both period headers: font 700 12px uppercase, text #4b5563, right-aligned
 * - Period columns: 146px each; Total column: 146px
 * - Table border-radius clips all four corners
 * - Scroll indicator visible on narrow viewports (overflow-x:auto)
 * - Default row bg white; Derival row bg #fff8f1
 */
export const FinancialTablePeriods = {
  name: 'Financial table — ACTUALS vs FORECAST',
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        story: `Budget forecast table using **TableHeaderVertical** period column headers.
ACTUALS (historical) columns use brand/200 (\`#cddbfe\`); FORECAST columns use teal/200 (\`#96f7e4\`).
Scroll horizontally on narrow viewports.`,
      },
      source: {
        language: 'html',
        code: `<!-- Period header row — ACTUALS + FORECAST -->
<div style="display:flex;align-items:stretch;">
  <!-- Corner label cell -->
  <div style="width:200px;..."></div>

  <!-- 3 ACTUALS period headers -->
  <div style="width:146px;height:38px;padding:8px 16px;background:#cddbfe;...">
    <span style="font:700 12px/1.5 'Inter',sans-serif;color:#4b5563;text-align:right;">JAN 2024</span>
  </div>
  <!-- ... more ACTUALS cols ... -->

  <!-- 3 FORECAST period headers -->
  <div style="width:146px;height:38px;padding:8px 16px;background:#96f7e4;...">
    <span style="font:700 12px/1.5 'Inter',sans-serif;color:#4b5563;text-align:right;">APR 2024</span>
  </div>

  <!-- Total column -->
  <div style="width:146px;height:38px;padding:8px 16px;background:#f3f4f6;...">Total</div>
</div>`,
      },
    },
  },
  render: () => {
    const B = { def: '#ffffff', deriv: '#fff8f1', tot: '#f3f4f6', nc: '#f9fafb' };

    const periodHRow = /* html */`
      <div style="display:flex;align-items:stretch;">
        ${lbl({ text: '',         bg: '#f9fafb', width: 200, bold: true })}
        ${pHdr({ label: 'JAN 2024', bg: '#cddbfe', color: '#4b5563' })}
        ${pHdr({ label: 'FEB 2024', bg: '#cddbfe', color: '#4b5563' })}
        ${pHdr({ label: 'MAR 2024', bg: '#cddbfe', color: '#4b5563' })}
        ${pHdr({ label: 'APR 2024', bg: '#96f7e4', color: '#4b5563' })}
        ${pHdr({ label: 'MAY 2024', bg: '#96f7e4', color: '#4b5563' })}
        ${pHdr({ label: 'JUN 2024', bg: '#96f7e4', color: '#4b5563' })}
        ${cHdr({ text: 'H1 Total',  bg: '#f3f4f6', color: '#111928', bold: true })}
      </div>
      ${DIV}`;

    const pr = (rowBg, label, vals, opts = {}) => /* html */`
      <div style="display:flex;align-items:stretch;background:${rowBg};">
        ${lbl({ text: label, bg: rowBg, width: 200, bold: !!opts.bold, color: opts.labelColor || '#111928', indent: opts.indent || 0 })}
        ${vals.map((v, i) => {
          const isActuals   = i < 3;
          const isForecast  = i >= 3 && i < 6;
          const periodBg    = isActuals ? '#cddbfe' : isForecast ? '#96f7e4' : '#f3f4f6';
          // For data rows, cells inherit the row bg — period header bg only applies to the header row
          const cellBg      = rowBg;
          const tc          = opts.tc || '#111928';
          return val({ amount: v, currency: true, textColor: tc, bg: cellBg, grey: v === '—' });
        }).join('')}
      </div>
      ${DIV}`;

    return /* html */`
      <div style="padding:24px;overflow-x:auto;">
        <div style="display:inline-flex;flex-direction:column;border:1px solid #e5e7eb;
                    border-radius:8px;overflow:hidden;min-width:max-content;">
          ${periodHRow}
          <!-- Revenue section -->
          ${pr(B.nc, 'Revenue', ['—','—','—','—','—','—','—'], { bold: true })}
          ${pr(B.def, 'Product sales', ['32,400','35,100','38,200','40,000','42,500','45,000','233,200'], { indent: 16, tc: '#0e9f6e' })}
          ${pr(B.def, 'Services',      ['12,831','13,500','14,000','14,500','15,000','15,500','85,331'],  { indent: 16, tc: '#0e9f6e' })}
          ${pr(B.deriv, 'Revenue total', ['45,231','48,600','52,200','54,500','57,500','60,500','318,531'], { bold: true })}
          <!-- Expenses section -->
          ${pr(B.nc, 'Expenses', ['—','—','—','—','—','—','—'], { bold: true })}
          ${pr(B.def, 'Salaries',  ['18,000','18,000','18,000','18,000','18,000','18,000','108,000'], { indent: 16, tc: '#e74694' })}
          ${pr(B.def, 'Software',  ['2,400', '2,400', '2,400', '2,600', '2,600', '2,600', '15,000'],  { indent: 16, tc: '#e74694' })}
          ${pr(B.def, 'Marketing', ['5,000', '5,500', '6,000', '6,000', '6,500', '7,000', '36,000'],  { indent: 16, tc: '#e74694' })}
          ${pr(B.deriv, 'Expenses total', ['25,400','25,900','26,400','26,600','27,100','27,600','159,000'], { bold: true })}
          <!-- Grand total -->
          ${pr(B.tot, 'Net Income', ['19,831','22,700','25,800','27,900','30,400','32,900','159,531'], { bold: true, tc: '#42389d' })}
        </div>
        <p style="font:400 12px/1.5 'Inter',sans-serif;color:#9ca3af;margin:8px 0 0;padding:0 0 0 0;">
          ACTUALS (Jan–Mar) · FORECAST (Apr–Jun) · scroll horizontally to see all columns
        </p>
      </div>`;
  },
};

/* ─────────────────────────────────────────────────────────────────────────
   MIXED OPTION TABLE — all cell options in a realistic composition
───────────────────────────────────────────────────────────────────────── */
/**
 * A budget vs actual comparison table that uses all 7 cell options in context.
 * Each option appears where it would in a real product: Calculated for derived
 * actuals, Blue for user-overridden values, Waste for negative variances, etc.
 *
 * Columns: Budget | Actual | Variance | Variance %
 *
 * **QA checklist**
 * - Budget column: Default option (black) — plan values
 * - Actual column: Calculated (green) for positive, Waste (pink) for negative
 * - Variance column: Calculated (green +) or Waste (pink –), or Grey for zero
 * - Blue cell: user-entered override — blue text + #ebf5ff bg
 * - Indigo in total row: brand/800 total value
 * - Each row type (Default/Derival/Total) uses its correct background
 */
export const MixedOptionTable = {
  name: 'Financial table — all cell options in context',
  parameters: {
    docs: {
      description: {
        story: `Budget vs Actual comparison table that shows all 7 cell option colours in realistic context.
Use this story as a reference for when each option should appear.`,
      },
    },
  },
  render: () => {
    const B = { def: '#ffffff', deriv: '#fff8f1', tot: '#f3f4f6', nc: '#f9fafb' };

    const colHeaders = /* html */`
      <div style="display:flex;align-items:stretch;">
        ${lbl({ text: '',          bg: '#f9fafb', width: 200, bold: true })}
        ${cHdr({ text: 'Budget',   bg: '#ffffff',  color: '#111928', bold: false })}
        ${cHdr({ text: 'Actual',   bg: '#ffffff',  color: '#111928', bold: false })}
        ${cHdr({ text: 'Variance', bg: '#ffffff',  color: '#111928', bold: false })}
        ${cHdr({ text: '% Var',    bg: '#ffffff',  color: '#111928', bold: false })}
      </div>
      ${DIV}`;

    // Helper: one complete row
    const r = (rowBg, labelText, budget, actual, variance, pct, labelBold = false) => /* html */`
      <div style="display:flex;align-items:stretch;background:${rowBg};">
        ${lbl({ text: labelText, bg: rowBg, width: 200, bold: labelBold })}
        ${val({ amount: budget.v, currency: true, textColor: budget.tc || '#111928', bg: rowBg, grey: budget.v === '—' })}
        ${val({ amount: actual.v, currency: true, textColor: actual.tc || '#111928', bg: actual.cellBg || rowBg, grey: actual.v === '—' })}
        ${val({ amount: variance.v, currency: true, textColor: variance.tc || '#111928', bg: rowBg, grey: variance.v === '0,00' ? true : false })}
        ${val({ amount: pct.v, currency: false, textColor: pct.tc || '#111928', bg: rowBg, grey: pct.v === '0%' })}
      </div>
      ${DIV}`;

    return tableWrap(
      colHeaders +

      // Section header
      r(B.nc, 'Revenue', { v: '—' }, { v: '—' }, { v: '—' }, { v: '—' }, true) +

      // Default rows — positive variance
      r(B.def,
        'Product sales',
        { v: '32,400,00' },                                              // budget — Default
        { v: '35,100,00', tc: '#0e9f6e' },                              // actual — Calculated
        { v: '+2,700,00', tc: '#0e9f6e' },                              // variance — Calculated
        { v: '+8.3%',     tc: '#0e9f6e' }                               // % — Calculated
      ) +

      // Row with a Blue (user-override) actual
      r(B.def,
        'Services',
        { v: '12,831,00' },                                              // budget — Default
        { v: '13,500,00', tc: '#1c64f2', cellBg: '#ebf5ff' },          // actual — Blue (user-entered)
        { v: '+669,00',   tc: '#0e9f6e' },                              // variance — Calculated
        { v: '+5.2%',     tc: '#0e9f6e' }
      ) +

      // Row with negative variance — Waste
      r(B.def,
        'Consulting',
        { v: '8,000,00' },                                               // budget — Default
        { v: '6,200,00',  tc: '#e74694' },                              // actual — Waste (below plan)
        { v: '–1,800,00', tc: '#e74694' },                              // variance — Waste
        { v: '–22.5%',    tc: '#e74694' }
      ) +

      // Derival sub-total
      r(B.deriv,
        'Revenue sub-total',
        { v: '53,231,00' },
        { v: '54,800,00', tc: '#0e9f6e' },
        { v: '+1,569,00', tc: '#0e9f6e' },
        { v: '+2.9%',     tc: '#0e9f6e' },
        true
      ) +

      // Grey option — zero variance row
      r(B.def,
        'Pass-through',
        { v: '5,000,00' },
        { v: '5,000,00',  tc: '#6b7280' },                             // actual — Grey (identical to budget)
        { v: '0,00',      tc: '#6b7280' },                             // variance — Grey
        { v: '0%',        tc: '#6b7280' }
      ) +

      // Total row — Indigo
      r(B.tot,
        'Net Total',
        { v: '58,231,00', tc: '#42389d' },
        { v: '59,800,00', tc: '#42389d' },
        { v: '+1,569,00', tc: '#42389d' },
        { v: '+2.7%',     tc: '#42389d' },
        true
      )
    );
  },
};
