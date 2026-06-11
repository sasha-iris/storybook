/**
 * Iris Library — Table / Composed
 *
 * Assembled table stories that combine the building blocks from Table/Cells
 * into realistic product table layouts — built on the REAL shippable classes:
 *
 *   • `.iris-cell` + `.iris-cell--num`         — 146×38 data cell
 *   • `.iris-cell--{option}`                   — default / grey / editable / calculated / waste / indigo / blue
 *   • `.iris-cell--row-{default|noncoll|derived|total}` — row background
 *   • `.iris-th-h--{type}` + `.iris-th-h__label` — column category headers
 *   • `.iris-th-v--{actuals|forecast|default}` — period headers
 *
 * Building blocks (see Table/Cells for component-level reference):
 *   • TableCell             — node 9279:163646
 *   • TableHeaderHorizontal — node 9279:163718
 *   • TableHeaderVertical   — node 9279:163779
 *
 * Inline styles are used ONLY for layout concerns the classes don't encode:
 * label-column width (200px vs the 146px default), indentation, bold labels,
 * row flex wrappers and 1px dividers. All colour/typography comes from classes.
 *
 * ## Table anatomy
 *
 * ```
 * ┌─────────────────┬──────────┬───────────────┬──────────┐
 * │  (corner)       │ Income   │ Disbursements │ Total    │  ← .iris-th-h--{type}
 * ├─────────────────┼──────────┼───────────────┼──────────┤
 * │  Revenue        │ 45,231   │       —       │ 45,231   │  .iris-cell--row-default
 * │  Gross Profit   │ 45,231   │  28,400       │ 16,831   │  .iris-cell--row-derived
 * │  Net Income     │ 45,231   │  40,900       │  4,331   │  .iris-cell--row-total
 * └─────────────────┴──────────┴───────────────┴──────────┘
 * ```
 */

/* ── Class maps (mirror Table/Cells) ────────────────────────────────────── */

const OPTION_CLASS = {
  default: 'iris-cell--default',
  grey: 'iris-cell--grey',
  editable: 'iris-cell--editable',
  calculated: 'iris-cell--calculated',
  waste: 'iris-cell--waste',
  indigo: 'iris-cell--indigo',
  blue: 'iris-cell--blue',
};
const ROW_CLASS = {
  default: 'iris-cell--row-default',
  noncollapsible: 'iris-cell--row-noncoll',
  derival: 'iris-cell--row-derived',
  total: 'iris-cell--row-total',
};

/* ── Real-class cell helpers ────────────────────────────────────────────── */

/** Numeric data cell. Blue carries its own #ebf5ff bg and ignores rowType. */
const val = ({ amount = '—', option = 'default', rowType = 'default', currency = true, width } = {}) => {
  const empty = amount === '—';
  const opt = OPTION_CLASS[empty ? 'grey' : option] || OPTION_CLASS.default;
  const rowCls = (!empty && option === 'blue') ? '' : ` ${ROW_CLASS[rowType] || ROW_CLASS.default}`;
  const w = width ? ` style="width:${width}px;"` : '';
  return `<div class="iris-cell iris-cell--num ${opt}${rowCls}"${w}>${(currency && !empty) ? '<span>$</span>' : ''}<span>${amount}</span></div>`;
};

/** Row label cell — left-aligned first column (width/indent/bold = layout-only inline). */
const lbl = ({ text = '', rowType = 'default', bold = false, indent = 0, width = 200 } = {}) => {
  const style = `width:${width}px;${indent ? `padding-left:${16 + indent}px;` : ''}${bold ? 'font-weight:var(--font-semibold);' : ''}`;
  return `<div class="iris-cell iris-cell--default ${ROW_CLASS[rowType] || ROW_CLASS.default}" style="${style}"><span>${text}</span></div>`;
};

/** Column category header — real `.iris-th-h--{type}`. */
const colHdr = ({ text = '', type = 'default', bold = true, width } = {}) =>
  `<div class="iris-th-h iris-th-h--${type}${bold ? ' iris-th-h--bold' : ''}"${width ? ` style="width:${width}px;"` : ''}><span class="iris-th-h__label">${text}</span></div>`;

/** Period header — real `.iris-th-v--{type}` (uppercase via CSS). */
const periodHdr = ({ label = '', type = 'default' } = {}) =>
  `<div class="iris-th-v iris-th-v--${type}">${label}</div>`;

/** 1px divider + row wrapper + table shell — pure layout. */
const DIV = `<div style="height:1px;background:var(--color-border-default);flex-shrink:0;width:100%;"></div>`;
const flexRow = (cells) => `<div style="display:flex;align-items:stretch;">${cells}</div>${DIV}`;
const tableWrap = (content) => /* html */`
  <div style="overflow-x:auto;">
    <div style="display:inline-flex;flex-direction:column;
                border:1px solid var(--color-border-default);border-radius:8px;
                overflow:hidden;min-width:max-content;">
      ${content}
    </div>
  </div>`;

/* ── Default export ─────────────────────────────────────────────────────── */

export default {
  title: 'Iris Library/Table/Composed',
  tags: ['autodocs', 'stable'],
  parameters: {
    layout: 'padded',
    backgrounds: { default: 'light' },
    docs: {
      description: {
        component: `**Table / Composed** — assembled financial table layouts ready to ship,
built on the real \`.iris-cell--*\` / \`.iris-th-h--*\` / \`.iris-th-v--*\` classes.

Combines the cell primitives from **Table/Cells** into complete product table structures.

**When to use**
- P&L statements, budget tables, and financial reports in Iris Finance dashboards
- Any table that needs semantic row-type colour coding (income/disbursement/total)
- Period-column tables with ACTUALS vs FORECAST bands

**When NOT to use**
- Simple lists without financial semantics → use a standard HTML table or list group
- Single-cell or cell composition work → start from Table/Cells
- Cohort retention heat-maps → use Table/Cohort

### Row types

| Row class | Background | Typical use |
|---|---|---|
| \`.iris-cell--row-default\` | \`#ffffff\` | Standard data rows |
| \`.iris-cell--row-noncoll\` | \`#f9fafb\` | Section sub-header |
| \`.iris-cell--row-derived\` | \`#fff8f1\` | Derived / sub-total |
| \`.iris-cell--row-total\` | \`#f3f4f6\` | Grand total |

### Cell options

| Option class | Text | Use |
|---|---|---|
| \`--default\` | \`#111928\` | Neutral values |
| \`--grey\` | \`#6b7280\` | Empty / N-A / zero variance |
| \`--editable\` | \`#1c64f2\` | Editable values |
| \`--calculated\` | \`#0e9f6e\` | Derived positive values |
| \`--waste\` | \`#e74694\` | Negative / below-plan values |
| \`--indigo\` | \`#42389d\` | Grand-total values |
| \`--blue\` | \`#1c64f2\` on \`#ebf5ff\` | User-entered override (own bg, ignores row type) |

### Column / period headers

Income \`.iris-th-h--income\` · Disbursements \`.iris-th-h--disbursements\` · Total \`.iris-th-h--total\` ·
Expand \`.iris-th-h--expand\` — see Table/Cells for the full set.
ACTUALS \`.iris-th-v--actuals\` (\`#cddbfe\`) · FORECAST \`.iris-th-v--forecast\` (\`#96f7e4\`).

See [SETUP.md](https://github.com/sasha-iris/storybook/blob/main/docs/SETUP.md) for complete installation instructions.
`,
      },
    },
  },
  argTypes: {
    // ── Appearance ───────────────────────────────────────────
    rowType: {
      control: 'select',
      options: ['default', 'noncollapsible', 'derival', 'total'],
      description: 'Row background. CSS class: `.iris-cell--row-{default|noncoll|derived|total}`.',
      table: { category: 'Appearance', defaultValue: { summary: 'default' } },
    },
    option: {
      control: 'select',
      options: ['default', 'grey', 'editable', 'calculated', 'waste', 'indigo', 'blue'],
      description: 'Value-cell semantic colour. CSS class: `.iris-cell--{option}`. Blue carries its own `#ebf5ff` bg.',
      table: { category: 'Appearance', defaultValue: { summary: 'calculated' } },
    },
    // ── Content ──────────────────────────────────────────────
    label: {
      control: 'text',
      description: 'Row label (first column).',
      table: { category: 'Content', defaultValue: { summary: 'Gross Profit' } },
    },
    amount: {
      control: 'text',
      description: 'Value shown in the data cells.',
      table: { category: 'Content', defaultValue: { summary: '16,831,00' } },
    },
  },
  args: {
    rowType: 'default',
    option: 'calculated',
    label: 'Gross Profit',
    amount: '16,831,00',
  },
};

/* ─────────────────────────────────────────────────────────────────────────
   INTERACTIVE
─────────────────────────────────────────────────────────────────────────── */
export const Interactive = {
  name: 'Interactive (Controls)',
  render: ({ rowType, option, label, amount }) => {
    const rowHtml = [
      lbl({ text: label, rowType }),
      val({ amount, option, rowType }),
      val({ amount, option, rowType }),
    ].join('');

    const optCls = OPTION_CLASS[option];
    const rowCls = option === 'blue' ? '' : ` ${ROW_CLASS[rowType]}`;
    const html = `<div style="display:flex;align-items:stretch;">\n  <div class="iris-cell iris-cell--default ${ROW_CLASS[rowType]}" style="width:200px;"><span>${label}</span></div>\n  <div class="iris-cell iris-cell--num ${optCls}${rowCls}"><span>$</span><span>${amount}</span></div>\n</div>`;
    const react = `<div style={{ display: "flex", alignItems: "stretch" }}>\n  <div className="iris-cell iris-cell--default ${ROW_CLASS[rowType]}" style={{ width: 200 }}><span>{label}</span></div>\n  <div className="iris-cell iris-cell--num ${optCls}${rowCls}"><span>$</span><span>{amount}</span></div>\n</div>`;
    const component = `const ROW = { default: 'default', noncollapsible: 'noncoll', derival: 'derived', total: 'total' };\n\nexport function TableRow({ label, cells, rowType = 'default' }) {\n  const rowClass = 'iris-cell--row-' + ROW[rowType];\n  return (\n    <div style={{ display: 'flex', alignItems: 'stretch' }}>\n      <div className={\`iris-cell iris-cell--default \${rowClass}\`} style={{ width: 200 }}>\n        <span>{label}</span>\n      </div>\n      {cells.map(({ amount, option = 'default' }, i) => (\n        <div key={i} className={\`iris-cell iris-cell--num iris-cell--\${option}\${option === 'blue' ? '' : ' ' + rowClass}\`}>\n          <span>$</span><span>{amount}</span>\n        </div>\n      ))}\n    </div>\n  );\n}`;

    const esc = (s) => s.replace(/</g, '&lt;').replace(/>/g, '&gt;');
    const panel = (title, code) => `
      <div style="padding:16px;border:1px solid var(--color-border-default);border-radius:8px;">
        <div style="font-weight:600;font-size:12px;color:var(--color-text-secondary);margin-bottom:12px;text-transform:uppercase;letter-spacing:0.5px;">${title}</div>
        <div style="background:var(--color-bg-tertiary);padding:12px;border-radius:6px;margin-bottom:12px;overflow:auto;">
          <pre style="margin:0;font-family:monospace;font-size:13px;white-space:pre-wrap;word-break:break-word;"><code>${esc(code)}</code></pre>
        </div>
        <button data-copy="${code.split('"').join('&quot;')}" class="storybook-copy-btn" style="padding:8px 12px;background:var(--color-bg-secondary);color:var(--color-text-primary);border:1px solid var(--color-border-default);border-radius:4px;cursor:pointer;font-family:inherit;font-size:12px;font-weight:500;display:flex;align-items:center;gap:6px;">
          <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="2" y="2" width="8" height="8" rx="1"/><path d="M6 14H12C13.1046 14 14 13.1046 14 12V6"/></svg>Copy
        </button>
      </div>`;

    return `
      <div style="display:flex;flex-direction:column;gap:24px;">
        <div style="padding:16px;border:1px solid var(--color-border-default);border-radius:8px;">
          <div style="display:flex;align-items:stretch;border:1px solid var(--color-border-default);border-radius:8px;overflow:hidden;width:max-content;">${rowHtml}</div>
        </div>
        <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:16px;align-items:start;">
          ${panel('HTML', html)}
          ${panel('React', react)}
          ${panel('Component (With Events)', component)}
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
      </script>`;
  },
  parameters: {
    docs: {
      description: {
        story:
          'Configure one table row with **rowType** (background class), **option** (value colour class), **label** and **amount**. The preview, the HTML/React/Component panels and **Show code** all emit the same real `.iris-cell` markup.',
      },
      source: {
        transform: (_src, ctx) => {
          const { rowType, option, label, amount } = ctx.args;
          const optCls = OPTION_CLASS[option] || OPTION_CLASS.default;
          const rowCls = option === 'blue' ? '' : ` ${ROW_CLASS[rowType] || ROW_CLASS.default}`;
          return `<div style="display:flex;align-items:stretch;">\n  <div class="iris-cell iris-cell--default ${ROW_CLASS[rowType] || ROW_CLASS.default}" style="width:200px;"><span>${label}</span></div>\n  <div class="iris-cell iris-cell--num ${optCls}${rowCls}"><span>$</span><span>${amount}</span></div>\n</div>`;
        },
      },
    },
  },
};

/* ─────────────────────────────────────────────────────────────────────────
   BASIC FINANCIAL TABLE
───────────────────────────────────────────────────────────────────────── */
/**
 * **QA checklist**
 * - Header row: Income=`.iris-th-h--income` (green), Disbursements=`--disbursements` (red), Total=`--total` (grey)
 * - Derival row (`--row-derived`): #fff8f1 spans all columns including label
 * - Total row (`--row-total`): #f3f4f6 spans all columns; values Indigo #42389d
 * - Income values: `.iris-cell--calculated` #0e9f6e · Disbursement values: `.iris-cell--waste` #e74694
 * - Empty slots: `.iris-cell--grey` em-dash
 */
export const FinancialTableBasic = {
  name: 'Financial table — P&L excerpt',
  parameters: {
    docs: {
      description: {
        story: `A complete P&L excerpt with Income / Disbursements / Total category columns on real header and cell classes. Demonstrates Derival (sub-total) and Total rows alongside Default rows.`,
      },
      source: {
        language: 'html',
        code: `<!-- Header row — real .iris-th-h--{type} -->
<div style="display:flex;align-items:stretch;">
  <div class="iris-th-h iris-th-h--total" style="width:200px;"><span class="iris-th-h__label"></span></div>
  <div class="iris-th-h iris-th-h--income iris-th-h--bold"><span class="iris-th-h__label">Income</span></div>
  <div class="iris-th-h iris-th-h--disbursements iris-th-h--bold"><span class="iris-th-h__label">Disbursements</span></div>
  <div class="iris-th-h iris-th-h--total iris-th-h--bold"><span class="iris-th-h__label">Total</span></div>
</div>

<!-- Default data row -->
<div style="display:flex;align-items:stretch;">
  <div class="iris-cell iris-cell--default iris-cell--row-default" style="width:200px;"><span>Revenue</span></div>
  <div class="iris-cell iris-cell--num iris-cell--calculated iris-cell--row-default"><span>$</span><span>45,231,00</span></div>
  <div class="iris-cell iris-cell--num iris-cell--grey iris-cell--row-default"><span>—</span></div>
  <div class="iris-cell iris-cell--num iris-cell--calculated iris-cell--row-default"><span>$</span><span>45,231,00</span></div>
</div>

<!-- Derival sub-total row -->
<div style="display:flex;align-items:stretch;">
  <div class="iris-cell iris-cell--default iris-cell--row-derived" style="width:200px;font-weight:var(--font-semibold);"><span>Gross Profit</span></div>
  <!-- … cells with .iris-cell--row-derived … -->
</div>

<!-- Total row — values .iris-cell--indigo on .iris-cell--row-total -->`,
      },
    },
  },
  render: () => {
    const headerRow = flexRow(
      colHdr({ text: '', type: 'total', width: 200 }) +
      colHdr({ text: 'Income', type: 'income' }) +
      colHdr({ text: 'Disbursements', type: 'disbursements' }) +
      colHdr({ text: 'Total', type: 'total' })
    );

    const rows = [
      { label: 'Revenue', rowType: 'default',
        cells: [{ amount: '45,231,00', option: 'calculated' }, { amount: '—' }, { amount: '45,231,00', option: 'calculated' }] },
      { label: 'COGS', rowType: 'default',
        cells: [{ amount: '—' }, { amount: '28,400,00', option: 'waste' }, { amount: '28,400,00', option: 'waste' }] },
      { label: 'Gross Profit', rowType: 'derival', bold: true,
        cells: [{ amount: '45,231,00', option: 'calculated' }, { amount: '28,400,00', option: 'waste' }, { amount: '16,831,00', option: 'default' }] },
      { label: 'Operating Expenses', rowType: 'default',
        cells: [{ amount: '—' }, { amount: '12,500,00', option: 'waste' }, { amount: '12,500,00', option: 'waste' }] },
      { label: 'Net Income', rowType: 'total', bold: true,
        cells: [{ amount: '45,231,00', option: 'indigo' }, { amount: '40,900,00', option: 'indigo' }, { amount: '4,331,00', option: 'indigo' }] },
    ];

    const dataRows = rows.map(({ label, rowType, bold, cells }) =>
      flexRow(lbl({ text: label, rowType, bold }) + cells.map((c) => val({ ...c, rowType })).join(''))
    ).join('');

    return tableWrap(headerRow + dataRows);
  },
};

/* ─────────────────────────────────────────────────────────────────────────
   TABLE WITH ALL ROW TYPES
───────────────────────────────────────────────────────────────────────── */
/**
 * **QA checklist**
 * - NonCollapsible row: `.iris-cell--row-noncoll` #f9fafb, bold label
 * - Derival row: `.iris-cell--row-derived` #fff8f1 — warm tint
 * - Total row: `.iris-cell--row-total` #f3f4f6 — visually heavier than Derival
 * - Section header rows have no data values — `.iris-cell--grey` dashes
 * - Total-row values: `.iris-cell--indigo` #42389d
 */
export const FinancialTableRowTypes = {
  name: 'Financial table — all row types',
  parameters: {
    docs: {
      description: {
        story: `All 4 row-type background classes in a realistic hierarchy: NonCollapsible section header → Default data rows → Derival sub-total → Total grand total.`,
      },
      source: {
        language: 'html',
        code: `<!-- NonCollapsible section header row -->
<div style="display:flex;align-items:stretch;">
  <div class="iris-cell iris-cell--default iris-cell--row-noncoll" style="width:220px;font-weight:var(--font-semibold);"><span>Revenue</span></div>
  <div class="iris-cell iris-cell--num iris-cell--grey iris-cell--row-noncoll"><span>—</span></div>
</div>

<!-- Default data row (indented line item) -->
<div style="display:flex;align-items:stretch;">
  <div class="iris-cell iris-cell--default iris-cell--row-default" style="width:220px;padding-left:32px;"><span>Product sales</span></div>
  <div class="iris-cell iris-cell--num iris-cell--calculated iris-cell--row-default"><span>$</span><span>32,400,00</span></div>
</div>

<!-- Derival sub-total row: .iris-cell--row-derived -->
<!-- Total row: .iris-cell--row-total + .iris-cell--indigo values -->`,
      },
    },
  },
  render: () => {
    const hRow = flexRow(
      colHdr({ text: '', type: 'total', width: 220 }) +
      colHdr({ text: 'Jan 2024', type: 'default', bold: false }) +
      colHdr({ text: 'Feb 2024', type: 'default', bold: false }) +
      colHdr({ text: 'Mar 2024', type: 'default', bold: false }) +
      colHdr({ text: 'Q1 Total', type: 'total' })
    );

    const dr = (rowType, label, vals, opts = {}) => flexRow(
      lbl({ text: label, rowType, bold: !!opts.bold, indent: opts.indent || 0, width: 220 }) +
      vals.map((v) => val({ amount: v, option: v === '—' ? 'grey' : (opts.option || 'default'), rowType })).join('')
    );

    return tableWrap(
      hRow +
      dr('noncollapsible', 'Revenue', ['—', '—', '—', '—'], { bold: true }) +
      dr('default', 'Product sales', ['32,400,00', '35,100,00', '38,200,00', '105,700,00'], { indent: 16, option: 'calculated' }) +
      dr('default', 'Services', ['12,831,00', '13,500,00', '14,000,00', '40,331,00'], { indent: 16, option: 'calculated' }) +
      dr('derival', 'Revenue sub-total', ['45,231,00', '48,600,00', '52,200,00', '146,031,00'], { bold: true }) +
      dr('noncollapsible', 'Expenses', ['—', '—', '—', '—'], { bold: true }) +
      dr('default', 'Salaries', ['18,000,00', '18,000,00', '18,000,00', '54,000,00'], { indent: 16, option: 'waste' }) +
      dr('default', 'Software', ['2,400,00', '2,400,00', '2,400,00', '7,200,00'], { indent: 16, option: 'waste' }) +
      dr('default', 'Marketing', ['5,000,00', '5,500,00', '6,000,00', '16,500,00'], { indent: 16, option: 'waste' }) +
      dr('derival', 'Expenses sub-total', ['25,400,00', '25,900,00', '26,400,00', '77,700,00'], { bold: true }) +
      dr('total', 'Net Income', ['19,831,00', '22,700,00', '25,800,00', '68,331,00'], { bold: true, option: 'indigo' })
    );
  },
};

/* ─────────────────────────────────────────────────────────────────────────
   TABLE WITH ACTUALS / FORECAST PERIOD HEADERS
───────────────────────────────────────────────────────────────────────── */
/**
 * **QA checklist**
 * - ACTUALS headers: `.iris-th-v--actuals` #cddbfe (brand/200)
 * - FORECAST headers: `.iris-th-v--forecast` #96f7e4 (teal/200)
 * - Both: 700 12px uppercase, right-aligned, text #4b5563 (from the class)
 * - Scroll horizontally on narrow viewports (overflow-x:auto)
 */
export const FinancialTablePeriods = {
  name: 'Financial table — ACTUALS vs FORECAST',
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        story: `Budget forecast table using real **\`.iris-th-v--{type}\`** period headers:
ACTUALS (\`#cddbfe\`) vs FORECAST (\`#96f7e4\`). Scroll horizontally on narrow viewports.`,
      },
      source: {
        language: 'html',
        code: `<!-- Period header row — real .iris-th-v--{type} -->
<div style="display:flex;align-items:stretch;">
  <div class="iris-th-h iris-th-h--total" style="width:200px;"><span class="iris-th-h__label"></span></div>
  <div class="iris-th-v iris-th-v--actuals">JAN 2024</div>
  <div class="iris-th-v iris-th-v--actuals">FEB 2024</div>
  <div class="iris-th-v iris-th-v--actuals">MAR 2024</div>
  <div class="iris-th-v iris-th-v--forecast">APR 2024</div>
  <div class="iris-th-v iris-th-v--forecast">MAY 2024</div>
  <div class="iris-th-v iris-th-v--forecast">JUN 2024</div>
  <div class="iris-th-h iris-th-h--total iris-th-h--bold"><span class="iris-th-h__label">H1 Total</span></div>
</div>`,
      },
    },
  },
  render: () => {
    const periodHRow = flexRow(
      colHdr({ text: '', type: 'total', width: 200 }) +
      periodHdr({ label: 'JAN 2024', type: 'actuals' }) +
      periodHdr({ label: 'FEB 2024', type: 'actuals' }) +
      periodHdr({ label: 'MAR 2024', type: 'actuals' }) +
      periodHdr({ label: 'APR 2024', type: 'forecast' }) +
      periodHdr({ label: 'MAY 2024', type: 'forecast' }) +
      periodHdr({ label: 'JUN 2024', type: 'forecast' }) +
      colHdr({ text: 'H1 Total', type: 'total' })
    );

    const pr = (rowType, label, vals, opts = {}) => flexRow(
      lbl({ text: label, rowType, bold: !!opts.bold, indent: opts.indent || 0 }) +
      vals.map((v) => val({ amount: v, option: v === '—' ? 'grey' : (opts.option || 'default'), rowType })).join('')
    );

    return /* html */`
      <div style="padding:24px;overflow-x:auto;">
        <div style="display:inline-flex;flex-direction:column;border:1px solid var(--color-border-default);
                    border-radius:8px;overflow:hidden;min-width:max-content;">
          ${periodHRow}
          ${pr('noncollapsible', 'Revenue', ['—', '—', '—', '—', '—', '—', '—'], { bold: true })}
          ${pr('default', 'Product sales', ['32,400', '35,100', '38,200', '40,000', '42,500', '45,000', '233,200'], { indent: 16, option: 'calculated' })}
          ${pr('default', 'Services', ['12,831', '13,500', '14,000', '14,500', '15,000', '15,500', '85,331'], { indent: 16, option: 'calculated' })}
          ${pr('derival', 'Revenue total', ['45,231', '48,600', '52,200', '54,500', '57,500', '60,500', '318,531'], { bold: true })}
          ${pr('noncollapsible', 'Expenses', ['—', '—', '—', '—', '—', '—', '—'], { bold: true })}
          ${pr('default', 'Salaries', ['18,000', '18,000', '18,000', '18,000', '18,000', '18,000', '108,000'], { indent: 16, option: 'waste' })}
          ${pr('default', 'Software', ['2,400', '2,400', '2,400', '2,600', '2,600', '2,600', '15,000'], { indent: 16, option: 'waste' })}
          ${pr('default', 'Marketing', ['5,000', '5,500', '6,000', '6,000', '6,500', '7,000', '36,000'], { indent: 16, option: 'waste' })}
          ${pr('derival', 'Expenses total', ['25,400', '25,900', '26,400', '26,600', '27,100', '27,600', '159,000'], { bold: true })}
          ${pr('total', 'Net Income', ['19,831', '22,700', '25,800', '27,900', '30,400', '32,900', '159,531'], { bold: true, option: 'indigo' })}
        </div>
        <p style="font-family:inherit;font-size:var(--text-xs);font-weight:var(--font-normal);line-height:1.5;color:var(--color-text-secondary);margin:8px 0 0;">
          ACTUALS (Jan–Mar) · FORECAST (Apr–Jun) · real <code>.iris-th-v--*</code> headers · scroll horizontally for all columns
        </p>
      </div>`;
  },
};

/* ─────────────────────────────────────────────────────────────────────────
   MIXED OPTION TABLE — all cell options in a realistic composition
───────────────────────────────────────────────────────────────────────── */
/**
 * **QA checklist**
 * - Budget column: `.iris-cell--default` — plan values
 * - Actual column: `--calculated` (above plan) / `--waste` (below plan) / `--blue` (user override, own #ebf5ff bg) / `--grey` (zero variance)
 * - Total row: `--row-total` bg + `--indigo` values
 * - Blue cell keeps #ebf5ff regardless of row type
 */
export const MixedOptionTable = {
  name: 'Financial table — all cell options in context',
  parameters: {
    docs: {
      description: {
        story: `Budget vs Actual comparison showing all 7 \`.iris-cell--{option}\` colours in realistic context. Use this story as a reference for when each option should appear.`,
      },
      source: {
        language: 'html',
        code: `<!-- Blue (user-entered override) — own #ebf5ff bg, ignores row type -->
<div class="iris-cell iris-cell--num iris-cell--blue"><span>$</span><span>13,500,00</span></div>

<!-- Calculated (derived, above plan) -->
<div class="iris-cell iris-cell--num iris-cell--calculated iris-cell--row-default"><span>$</span><span>35,100,00</span></div>

<!-- Waste (below plan) -->
<div class="iris-cell iris-cell--num iris-cell--waste iris-cell--row-default"><span>$</span><span>6,200,00</span></div>

<!-- Grey (zero variance) -->
<div class="iris-cell iris-cell--num iris-cell--grey iris-cell--row-default"><span>$</span><span>0,00</span></div>

<!-- Indigo grand total on total row -->
<div class="iris-cell iris-cell--num iris-cell--indigo iris-cell--row-total"><span>$</span><span>59,800,00</span></div>`,
      },
    },
  },
  render: () => {
    const colHeaders = flexRow(
      colHdr({ text: '', type: 'total', width: 200 }) +
      colHdr({ text: 'Budget', type: 'default', bold: false }) +
      colHdr({ text: 'Actual', type: 'default', bold: false }) +
      colHdr({ text: 'Variance', type: 'default', bold: false }) +
      colHdr({ text: '% Var', type: 'default', bold: false })
    );

    const r = (rowType, label, cells, opts = {}) => flexRow(
      lbl({ text: label, rowType, bold: !!opts.bold }) +
      cells.map((c) => val({ ...c, rowType })).join('')
    );

    return tableWrap(
      colHeaders +
      r('noncollapsible', 'Revenue', [{ amount: '—' }, { amount: '—' }, { amount: '—' }, { amount: '—' }], { bold: true }) +
      r('default', 'Product sales', [
        { amount: '32,400,00' },
        { amount: '35,100,00', option: 'calculated' },
        { amount: '+2,700,00', option: 'calculated' },
        { amount: '+8.3%', option: 'calculated', currency: false },
      ]) +
      r('default', 'Services', [
        { amount: '12,831,00' },
        { amount: '13,500,00', option: 'blue' },
        { amount: '+669,00', option: 'calculated' },
        { amount: '+5.2%', option: 'calculated', currency: false },
      ]) +
      r('default', 'Consulting', [
        { amount: '8,000,00' },
        { amount: '6,200,00', option: 'waste' },
        { amount: '–1,800,00', option: 'waste' },
        { amount: '–22.5%', option: 'waste', currency: false },
      ]) +
      r('derival', 'Revenue sub-total', [
        { amount: '53,231,00' },
        { amount: '54,800,00', option: 'calculated' },
        { amount: '+1,569,00', option: 'calculated' },
        { amount: '+2.9%', option: 'calculated', currency: false },
      ], { bold: true }) +
      r('default', 'Pass-through', [
        { amount: '5,000,00' },
        { amount: '5,000,00', option: 'grey' },
        { amount: '0,00', option: 'grey' },
        { amount: '0%', option: 'grey', currency: false },
      ]) +
      r('total', 'Net Total', [
        { amount: '58,231,00', option: 'indigo' },
        { amount: '59,800,00', option: 'indigo' },
        { amount: '+1,569,00', option: 'indigo' },
        { amount: '+2.7%', option: 'indigo', currency: false },
      ], { bold: true })
    );
  },
};
