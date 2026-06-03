/**
 * Iris Library — Table / Cells
 *
 * Source: Figma › Iris Library
 *   • TableCell             — node 9279:163646
 *   • TableHeaderHorizontal — node 9279:163718
 *   • TableHeaderVertical   — node 9279:163779
 *
 * These are the primitive cell components for the Iris financial/analytics table.
 * Used in reporting dashboards (budget, P&L, cohort analysis) where each column
 * carries a semantic category and each cell value has a typed option.
 *
 * ## Cell dimensions (Figma-exact)
 * height: 38px · padding: 8px 16px · font: Inter 500 14px / 1.5 · right-aligned
 *
 * ## TableCell — option × row type colour map
 *
 * The `option` prop controls text colour (and, for Blue, the cell background):
 * | Option     | Text      | Cell bg          |
 * |------------|-----------|------------------|
 * | Default    | #111928   | inherits row bg  |
 * | Grey       | #6b7280   | inherits row bg  |
 * | Editable   | #1c64f2   | white            |
 * | Blue       | #1c64f2   | #ebf5ff          |
 * | Calculated | #0e9f6e   | inherits row bg  |
 * | Waste      | #e74694   | inherits row bg  |
 * | Indigo     | #42389d   | inherits row bg  |
 *
 * The `type` (row level) sets the background all cells on that row share:
 * | Row type               | Background |
 * |------------------------|------------|
 * | Default                | var(--color-bg-white)    |
 * | Derival                | #fff8f1    |
 * | Total                  | var(--color-bg-secondary)    |
 * | Defaul-non-collapsible | var(--color-bg-tertiary)    |
 *
 * ## TableHeaderHorizontal — column category map
 * | Type            | Background | Text      |
 * |-----------------|------------|-----------|
 * | Default         | var(--color-bg-white)    | #111928   |
 * | Derival         | #fff8f1    | #111928   |
 * | Total / Union   | var(--color-bg-secondary)    | #111928 / #42389d |
 * | NonCollapsible  | var(--color-bg-tertiary)    | #111928   |
 * | Expand          | #edebfe    | #42389d   |
 * | Income          | #f3faf7    | #057a55   |
 * | Disbursements   | #fdf2f2    | #e02424   |
 *
 * ## TableHeaderVertical — period header map
 * | Type     | Background | Text    |
 * |----------|------------|---------|
 * | Default  | var(--color-bg-tertiary)    | #6b7280 |
 * | ACTUALS  | #cddbfe    | #4b5563 |
 * | FORECAST | #96f7e4    | #4b5563 |
 *
 * ## Approximations
 * - check-circle icon (showIconLeft / showIconRight): Figma source is a raster composite
 *   asset (no single extractable vector). APPROX: Heroicons solid check-circle SVG.
 */

/* ── Check-circle icon (APPROX — Heroicons solid) ── */
const CHECK_ICON = /* html */`<svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor"
  xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293
    a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2
    a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
</svg>`;

/* ── Cell builders ──────────────────────────────────────────────────────── */

/**
 * Right-aligned numeric data cell.
 * @param {object} p
 * @param {string}  p.amount    – formatted value, default "500,00"
 * @param {boolean} p.currency  – show "$" prefix, default true
 * @param {string}  p.textColor – value/symbol colour
 * @param {string}  p.bg        – cell background (use row bg for non-Blue options)
 * @param {string|null} p.caption – optional 12px secondary line, always #6b7280
 * @param {boolean} p.iconLeft  – show check-circle left of $
 * @param {boolean} p.iconRight – show check-circle right of value
 */
const dataCell = ({
  amount = '500,00',
  currency = true,
  textColor = '#111928',
  bg = 'var(--color-bg-white)',
  caption = null,
  iconLeft = false,
  iconRight = false,
} = {}) => /* html */`
  <div style="display:flex;align-items:center;justify-content:flex-end;gap:4px;
              width:146px;height:38px;padding:8px 16px;background:${bg};
              box-sizing:border-box;flex-shrink:0;">
    ${iconLeft ? `<span style="display:flex;align-items:center;flex-shrink:0;color:${textColor};">${CHECK_ICON}</span>` : ''}
    ${currency ? `<span style="font-family:inherit;font-size:var(--text-sm);font-weight:var(--font-medium);line-height:1.5;color:${textColor};flex-shrink:0;">$</span>` : ''}
    <div style="flex:1 0 0;display:flex;flex-direction:column;align-items:flex-end;
                justify-content:center;min-width:1px;">
      <span style="font-family:inherit;font-size:var(--text-sm);font-weight:var(--font-medium);line-height:1.5;color:${textColor};
                   text-align:right;white-space:nowrap;">${amount}</span>
      ${caption
        ? `<span style="font-family:inherit;font-size:var(--text-xs);font-weight:var(--font-normal);line-height:1.5;color:var(--color-text-secondary);text-align:right;">${caption}</span>`
        : ''}
    </div>
    ${iconRight ? `<span style="display:flex;align-items:center;flex-shrink:0;color:${textColor};">${CHECK_ICON}</span>` : ''}
  </div>`;

/** Editable cell in the focused / editing state (editing=true). */
const editableCell = () => /* html */`
  <div style="display:flex;align-items:center;width:146px;height:38px;
              background:var(--color-bg-surface);border:1px solid var(--color-border-default);
              box-sizing:border-box;flex-shrink:0;">
    <div style="flex:1;display:flex;align-items:center;justify-content:flex-end;
                border:1px solid #1c64f2;border-radius:4px;padding:8px 16px;
                overflow:hidden;box-sizing:border-box;">
      <span style="flex:1 0 0;font-family:inherit;font-size:var(--text-sm);font-weight:var(--font-medium);line-height:1.5;
                   color:#111928;text-align:right;white-space:nowrap;">500,00|</span>
    </div>
  </div>`;

/* ── Header builders ────────────────────────────────────────────────────── */

/** Horizontal column header (category label, text left-aligned in the cell). */
const hHeader = ({
  text = 'Label',
  bg = 'var(--color-bg-white)',
  color = '#111928',
  bold = false,
} = {}) => /* html */`
  <div style="display:flex;align-items:center;justify-content:flex-end;gap:4px;
              width:146px;height:38px;padding:8px 16px;background:${bg};
              box-sizing:border-box;flex-shrink:0;">
    <span style="font-family:inherit;font-size:var(--text-sm);font-weight:${bold ? 'var(--font-semibold)' : 'var(--font-medium)'};line-height:1.5;
                 color:${color};flex:1 0 0;">${text}</span>
  </div>`;

/** Vertical period header (uppercase 12px bold, right-aligned). */
const vHeader = ({
  label = 'LABEL',
  bg = 'var(--color-bg-tertiary)',
  color = '#6b7280',
} = {}) => /* html */`
  <div style="display:flex;align-items:center;justify-content:flex-end;gap:4px;
              width:146px;height:38px;padding:8px 16px;background:${bg};
              box-sizing:border-box;flex-shrink:0;">
    <span style="font-family:inherit;font-size:var(--text-xs);font-weight:var(--font-bold);line-height:1.5;
                 color:${color};flex:1 0 0;text-align:right;">${label}</span>
  </div>`;

/* ── Layout helpers ─────────────────────────────────────────────────────── */

const rowLabel = (text) =>
  /* html */`<span style="display:inline-flex;align-items:center;justify-content:flex-end;
    width:180px;padding-right:12px;flex-shrink:0;
    font-family:inherit;font-size:11px;font-weight:var(--font-medium);line-height:1.5;color:var(--color-border-light);">${text}</span>`;

const sectionHead = (text) =>
  /* html */`<p style="font-family:inherit;font-size:11px;font-weight:var(--font-bold);line-height:1;text-transform:uppercase;
    letter-spacing:.12em;color:var(--color-text-secondary);margin:0 0 14px;
    border-bottom:1px solid var(--color-border-default);padding-bottom:7px;">${text}</p>`;

/* ── Default export ─────────────────────────────────────────────────────── */

// ── Option → color map (used by Interactive story) ───────────────────────────
const OPTION_COLORS = {
  default:    { textColor: '#111928', cellBg: null },
  grey:       { textColor: '#6b7280', cellBg: null },
  editable:   { textColor: '#1c64f2', cellBg: null },
  blue:       { textColor: '#1c64f2', cellBg: '#ebf5ff' },
  calculated: { textColor: '#0e9f6e', cellBg: null },
  waste:      { textColor: '#e74694', cellBg: null },
  indigo:     { textColor: '#42389d', cellBg: null },
};

const ROW_BG = {
  default:          'var(--color-bg-white)',
  derival:          '#fff8f1',
  total:            'var(--color-bg-secondary)',
  'non-collapsible':'var(--color-bg-tertiary)',
};

export default {
  title: 'Iris Library/Table/Cells',
  tags: ['autodocs', 'stable'],
  parameters: {
    layout: 'padded',
    backgrounds: { default: 'light' },
    docs: {
      description: {
        component: `**Table / Cells** — primitive cell components for the Iris financial/analytics table.

Figma nodes: TableCell \`9279:163646\` · TableHeaderHorizontal \`9279:163718\` · TableHeaderVertical \`9279:163779\`

**When to use**
- Building financial reporting tables: budget, P&L, cohort analysis
- Displaying numeric data with semantic colour coding (positive/negative/calculated/derived)
- Assembling period-column headers (ACTUALS vs FORECAST bands)

**When NOT to use**
- Generic data tables without financial semantics → use a standard HTML table
- Non-numeric content rows → cells are right-aligned numeric by design

**Anatomy**
\`[$] [value] [caption?] [icon?]\` · width: 146px · height: 38px · padding: 8px 16px

Primitive cell components for the Iris financial/analytics table — used in reporting dashboards (budget, P&L, cohort analysis).

### TableCell

The \`option\` prop controls text colour. \`Blue\` is the only option that also changes the cell background.

| Option | Text | Cell bg |
|---|---|---|
| Default | \`#111928\` | row bg |
| Grey | \`#6b7280\` | row bg |
| Editable | \`#1c64f2\` | white (not editing) |
| Blue | \`#1c64f2\` | \`#ebf5ff\` |
| Calculated | \`#0e9f6e\` | row bg |
| Waste | \`#e74694\` | row bg |
| Indigo | \`#42389d\` | row bg |

Row backgrounds by type:

| Row type | Background |
|---|---|
| Default | \`var(--color-bg-white)\` |
| Derival | \`#fff8f1\` |
| Total | \`var(--color-bg-secondary)\` |
| Defaul-non-collapsible | \`var(--color-bg-tertiary)\` |

### TableHeaderHorizontal

Column category encoded in background and text colour:

| Type | Background | Text |
|---|---|---|
| Default | \`var(--color-bg-white)\` | \`#111928\` |
| Derival | \`#fff8f1\` | \`#111928\` |
| Total | \`var(--color-bg-secondary)\` | \`#111928\` |
| Union | \`var(--color-bg-secondary)\` | \`#42389d\` |
| Defaul-non-collapsible | \`var(--color-bg-tertiary)\` | \`#111928\` |
| Expand | \`#edebfe\` | \`#42389d\` |
| Income | \`#f3faf7\` | \`#057a55\` |
| Disbursements | \`#fdf2f2\` | \`#e02424\` |

### TableHeaderVertical

Period column headers (time-series, e.g. months):

| Type | Background | Text |
|---|---|---|
| Default (LABEL) | \`var(--color-bg-tertiary)\` | \`#6b7280\` |
| ACTUALS | \`#cddbfe\` | \`#4b5563\` |
| FORECAST | \`#96f7e4\` | \`#4b5563\` |

### Developer notes
- All cells: \`height:38px\`, \`padding:8px 16px\`, \`box-sizing:border-box\`
- Font: Inter 500 14px / 1.5, values right-aligned; bold headers use 600
- Period headers: 700 12px uppercase, right-aligned
- Editing state: inner container has \`border:1px solid #1c64f2; border-radius:4px\`; outer has \`border:1px solid var(--color-border-default)\`
- **check-circle icon** (APPROX — see JSDoc): Heroicons solid SVG approximation

### QA notes
- \`Grey\` and \`Default\` differ only in text colour (#6b7280 vs #111928) — verify at-a-glance legibility
- \`Blue\` uniquely changes the cell background to \`#ebf5ff\` — other options inherit row bg
- Editing state text reverts to \`#111928\` (not blue) — verify with designer intent
- \`$\` currency symbol must match value text colour in every option
- Bold header (600) vs regular (500): check visual weight difference in the type column story

See [SETUP.md](https://github.com/sasha-iris/storybook/blob/main/docs/SETUP.md) for complete installation instructions.
        `,
      },
    },
  },
  argTypes: {
    // ── Appearance ───────────────────────────────────────────
    option: {
      control: 'select',
      options: ['default', 'grey', 'editable', 'blue', 'calculated', 'waste', 'indigo'],
      description: 'Cell semantic colour. `blue` is the only option that also changes the cell background to `#ebf5ff`.',
      table: { category: 'Appearance', defaultValue: { summary: 'default' } },
    },
    rowType: {
      control: 'select',
      options: ['default', 'derival', 'total', 'non-collapsible'],
      description: 'Row background shared by all cells in that row. `blue` option overrides this with `#ebf5ff`.',
      table: { category: 'Appearance', defaultValue: { summary: 'default' } },
    },
    // ── Content ──────────────────────────────────────────────
    amount: {
      control: 'text',
      description: 'Formatted numeric value. Use locale-appropriate formatting (e.g. `500,00` or `1,234.56`).',
      table: { category: 'Content', defaultValue: { summary: '500,00' } },
    },
    currency: {
      control: 'boolean',
      description: 'Show `$` currency prefix to the left of the value.',
      table: { category: 'Content', defaultValue: { summary: true } },
    },
  },
  args: {
    option: 'default',
    rowType: 'default',
    amount: '500,00',
    currency: true,
  },
};

/* ─────────────────────────────────────────────────────────────────────────
   INTERACTIVE
─────────────────────────────────────────────────────────────────────────── */
export const Interactive = {
    name: 'Interactive (Controls)',
  parameters: {
    docs: {
      description: {
        story: 'Configure a single cell with **option** (semantic colour), **rowType** (row background), **amount**, and **currency** Controls. The Blue option overrides rowType background with `#ebf5ff`.',
      },
    },
  },
  render: ({ option, rowType, amount, currency }) => {
    const { textColor, cellBg } = OPTION_COLORS[option] || OPTION_COLORS.default;
    const bg = cellBg || ROW_BG[rowType] || 'var(--color-bg-white)';

    const htmlCode = `<table style="width:100%;border-collapse:collapse;">\n  <thead>\n    <tr style="background:var(--color-bg-tertiary);border-bottom:1px solid var(--color-border-default);">\n      <th style="padding:12px 16px;text-align:left;font-weight:600;">Column</th>\n      <th style="padding:12px 16px;text-align:right;font-weight:600;">Amount</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr style="background:${bg};border-bottom:1px solid var(--color-border-default);">\n      <td style="padding:8px 16px;">Data</td>\n      <td style="padding:8px 16px;text-align:right;color:${textColor};">${currency ? '$' : ''}${amount}</td>\n    </tr>\n  </tbody>\n</table>`;

    const reactCode = `<table style={{ width: '100%', borderCollapse: 'collapse' }}>\n  <thead>\n    <tr style={{ background: 'var(--color-bg-tertiary)', borderBottom: '1px solid var(--color-border-default)' }}>\n      <th style={{ padding: '12px 16px', textAlign: 'left', fontWeight: '600' }}>Column</th>\n      <th style={{ padding: '12px 16px', textAlign: 'right' }}>Amount</th>\n    </tr>\n  </thead>\n  <tbody>\n    {data.map((row) => (\n      <tr key={row.id} style={{ borderBottom: '1px solid var(--color-border-default)' }}>\n        <td>{row.label}</td>\n        <td style={{ textAlign: 'right', color: colors[option] }}>\n          {currency ? '$' : ''}{row.amount}\n        </td>\n      </tr>\n    ))}\n  </tbody>\n</table>`;

    const componentCode = `export function DataTable({ data = [], currency = false, rowType = 'default', option = 'default' }) {\n  const optionColors = {\n    default: 'var(--color-text-primary)',\n    positive: '#0e9f6e',\n    negative: '#f05252',\n    warning: '#e5a008',\n  };\n\n  return (\n    <table style={{ width: '100%', borderCollapse: 'collapse' }}>\n      <thead>\n        <tr style={{ background: 'var(--color-bg-tertiary)', borderBottom: '1px solid var(--color-border-default)' }}>\n          <th style={{ padding: '12px 16px', textAlign: 'left' }}>Label</th>\n          <th style={{ padding: '12px 16px', textAlign: 'right' }}>Amount</th>\n        </tr>\n      </thead>\n      <tbody>\n        {data.map((row) => (\n          <tr key={row.id} style={{ borderBottom: '1px solid var(--color-border-default)' }}>\n            <td style={{ padding: '8px 16px' }}>{row.label}</td>\n            <td style={{\n              padding: '8px 16px',\n              textAlign: 'right',\n              color: optionColors[option],\n            }}>\n              {currency ? '$' : ''}\n              {row.amount}\n            </td>\n          </tr>\n        ))}\n      </tbody>\n    </table>\n  );\n}`;

    const htmlEscaped = htmlCode.replace(/</g, '&lt;').replace(/>/g, '&gt;');
    const reactEscaped = reactCode.replace(/</g, '&lt;').replace(/>/g, '&gt;');
    const componentEscaped = componentCode.replace(/</g, '&lt;').replace(/>/g, '&gt;');

    return `
      <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:40px;align-items:start;">
        <div style="padding:20px;border:1px solid var(--color-border-default);border-radius:8px;">
          ${dataCell({ amount, currency, textColor: textColor, bg })}
        </div>
        <div style="display:flex;flex-direction:column;gap:24px;">
          <div style="padding:20px;border:1px solid var(--color-border-default);border-radius:8px;">
            <div style="font-weight:600;font-size:12px;color:var(--color-text-secondary);margin-bottom:12px;text-transform:uppercase;letter-spacing:0.5px;">HTML</div>
            <div style="background:var(--color-bg-tertiary);padding:12px;border-radius:6px;margin-bottom:12px;overflow:auto;">
              <pre style="margin:0;font-family:monospace;font-size:13px;white-space:pre-wrap;word-break:break-word;"><code>${htmlEscaped}</code></pre>
            </div>
            <button data-copy="${htmlCode.split('"').join('&quot;')}" class="storybook-copy-btn" style="padding:8px 12px;background:var(--color-bg-secondary);color:var(--color-text-primary);border:1px solid var(--color-border-default);border-radius:4px;cursor:pointer;font-family:inherit;font-size:12px;font-weight:500;display:flex;align-items:center;gap:6px;">
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="2" y="2" width="8" height="8" rx="1"/><path d="M6 14H12C13.1046 14 14 13.1046 14 12V6"/></svg>Copy
            </button>
          </div>
          <div style="padding:20px;border:1px solid var(--color-border-default);border-radius:8px;">
            <div style="font-weight:600;font-size:12px;color:var(--color-text-secondary);margin-bottom:12px;text-transform:uppercase;letter-spacing:0.5px;">React</div>
            <div style="background:var(--color-bg-tertiary);padding:12px;border-radius:6px;margin-bottom:12px;overflow:auto;">
              <pre style="margin:0;font-family:monospace;font-size:13px;white-space:pre-wrap;word-break:break-word;"><code>${reactEscaped}</code></pre>
            </div>
            <button data-copy="${reactCode.split('"').join('&quot;')}" class="storybook-copy-btn" style="padding:8px 12px;background:var(--color-bg-secondary);color:var(--color-text-primary);border:1px solid var(--color-border-default);border-radius:4px;cursor:pointer;font-family:inherit;font-size:12px;font-weight:500;display:flex;align-items:center;gap:6px;">
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="2" y="2" width="8" height="8" rx="1"/><path d="M6 14H12C13.1046 14 14 13.1046 14 12V6"/></svg>Copy
            </button>
          </div>
          <div style="padding:20px;border:1px solid var(--color-border-default);border-radius:8px;">
            <div style="font-weight:600;font-size:12px;color:var(--color-text-secondary);margin-bottom:12px;text-transform:uppercase;letter-spacing:0.5px;">Component (With Events)</div>
            <div style="background:var(--color-bg-tertiary);padding:12px;border-radius:6px;margin-bottom:12px;overflow:auto;">
              <pre style="margin:0;font-family:monospace;font-size:13px;white-space:pre-wrap;word-break:break-word;"><code>${componentEscaped}</code></pre>
            </div>
            <button data-copy="${componentCode.split('"').join('&quot;')}" class="storybook-copy-btn" style="padding:8px 12px;background:var(--color-bg-secondary);color:var(--color-text-primary);border:1px solid var(--color-border-default);border-radius:4px;cursor:pointer;font-family:inherit;font-size:12px;font-weight:500;display:flex;align-items:center;gap:6px;">
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
};

/* ─────────────────────────────────────────────────────────────────────────
   CELL OPTIONS  — node 9279:163646
───────────────────────────────────────────────────────────────────────── */
/**
 * All 7 `option` variants of TableCell on a Default (white) row background.
 *
 * **QA checklist**
 * - Default: #111928 — visually dominant black
 * - Grey: #6b7280 — clearly softer than Default, same bg
 * - Editable: #1c64f2 blue, still white bg (no edit ring)
 * - Blue: #1c64f2 text + #ebf5ff bg — both $ and value are blue
 * - Calculated: #0e9f6e green
 * - Waste: #e74694 pink/magenta
 * - Indigo: #42389d dark brand purple
 * - $ symbol colour must match value colour in every row
 */
export const CellOptions = {
    name: 'Cell options — all variants',
  args: { rowType: 'default' },
  parameters: {
    controls: { include: ['rowType'] },
    docs: {
      description: {
        story: 'All 7 `option` variants. Use the **rowType** control to preview how each option looks on different row backgrounds. Note: `Blue` always uses its own `#ebf5ff` background regardless of rowType.',
      },
      source: {
        language: 'html',
        code: `<!-- Default option -->
<div style="display:flex;align-items:center;justify-content:flex-end;gap:4px;
            width:146px;height:38px;padding:8px 16px;background:var(--color-bg-surface);box-sizing:border-box;">
  <span style="font-family:inherit;font-size:var(--text-sm);font-weight:var(--font-medium);line-height:1.5;color:#111928;flex-shrink:0;">$</span>
  <span style="font-family:inherit;font-size:var(--text-sm);font-weight:var(--font-medium);line-height:1.5;color:#111928;text-align:right;">500,00</span>
</div>

<!-- Blue option — cell bg + text both blue -->
<div style="display:flex;align-items:center;justify-content:flex-end;gap:4px;
            width:146px;height:38px;padding:8px 16px;background:#ebf5ff;box-sizing:border-box;">
  <span style="font-family:inherit;font-size:var(--text-sm);font-weight:var(--font-medium);line-height:1.5;color:#1c64f2;flex-shrink:0;">$</span>
  <span style="font-family:inherit;font-size:var(--text-sm);font-weight:var(--font-medium);line-height:1.5;color:#1c64f2;text-align:right;">500,00</span>
</div>

<!-- Calculated option -->
<div style="display:flex;align-items:center;justify-content:flex-end;gap:4px;
            width:146px;height:38px;padding:8px 16px;background:var(--color-bg-surface);box-sizing:border-box;">
  <span style="font-family:inherit;font-size:var(--text-sm);font-weight:var(--font-medium);line-height:1.5;color:#0e9f6e;flex-shrink:0;">$</span>
  <span style="font-family:inherit;font-size:var(--text-sm);font-weight:var(--font-medium);line-height:1.5;color:#0e9f6e;text-align:right;">500,00</span>
</div>`,
      },
    },
  },
  render: ({ rowType }) => {
    const rowBg = ROW_BG[rowType] || 'var(--color-bg-white)';
    const OPTIONS = [
      { label: 'Default',    key: 'default' },
      { label: 'Grey',       key: 'grey' },
      { label: 'Editable',   key: 'editable' },
      { label: 'Blue',       key: 'blue' },
      { label: 'Calculated', key: 'calculated' },
      { label: 'Waste',      key: 'waste' },
      { label: 'Indigo',     key: 'indigo' },
    ];
    return /* html */`
      <div style="display:inline-flex;flex-direction:column;gap:1px;">
        ${OPTIONS.map(({ label, key }) => {
          const { textColor, cellBg } = OPTION_COLORS[key];
          const bg = cellBg || rowBg;
          return /* html */`
            <div style="display:flex;align-items:center;">
              ${rowLabel(label)}
              ${dataCell({ textColor, bg })}
            </div>`;
        }).join('')}
      </div>`;
  },
};

/* ─────────────────────────────────────────────────────────────────────────
   CELL × ROW TYPES  — node 9279:163646
───────────────────────────────────────────────────────────────────────── */
/**
 * Default option cell across all 4 row type backgrounds.
 * The row background is the only difference — cell layout is identical.
 *
 * **QA checklist**
 * - Default (white): pure var(--color-bg-white)
 * - Derival: warm cream #fff8f1 — subtle orange tint
 * - Total: cool light gray var(--color-bg-secondary)
 * - NonCollapsible: near-white var(--color-bg-tertiary) — barely distinguishable from white in isolation
 */
export const CellRowTypes = {
    name: 'Cell × row type backgrounds',
  args: { option: 'default' },
  parameters: {
    controls: { include: ['option'] },
    docs: {
      description: {
        story: 'All 4 row backgrounds with the same cell. Use the **option** control to see how different semantic colours look across each row type.',
      },
      source: {
        code: `<!-- Default row -->
<div style="background:var(--color-bg-white);width:146px;height:38px;padding:8px 16px;box-sizing:border-box;display:flex;align-items:center;justify-content:flex-end;gap:4px;">
  <span style="font-family:inherit;font-size:var(--text-sm);font-weight:var(--font-medium);line-height:1.5;color:#111928;">$</span>
  <span style="font-family:inherit;font-size:var(--text-sm);font-weight:var(--font-medium);line-height:1.5;color:#111928;text-align:right;">500,00</span>
</div>
<!-- Derival row -->
<div style="background:#fff8f1;…">…</div>
<!-- Total row -->
<div style="background:var(--color-bg-muted);…">…</div>
<!-- Non-collapsible row -->
<div style="background:var(--color-bg-default);…">…</div>`,
        language: 'html',
      },
    },
  },
  render: ({ option }) => {
    const { textColor, cellBg } = OPTION_COLORS[option] || OPTION_COLORS.default;
    const ROW_TYPES = [
      { label: 'Default',                bg: 'var(--color-bg-white)' },
      { label: 'Derival',                bg: '#fff8f1' },
      { label: 'Total',                  bg: 'var(--color-bg-secondary)' },
      { label: 'Non-collapsible',        bg: 'var(--color-bg-tertiary)' },
    ];
    return /* html */`
      <div style="display:inline-flex;flex-direction:column;gap:1px;">
        ${ROW_TYPES.map(({ label, bg }) => /* html */`
          <div style="display:flex;align-items:center;">
            ${rowLabel(label)}
            ${dataCell({ textColor, bg: cellBg || bg })}
          </div>`).join('')}
      </div>`;
  },
};

/* ─────────────────────────────────────────────────────────────────────────
   EDITING STATE  — node 9279:163662
───────────────────────────────────────────────────────────────────────── */
/**
 * Comparison of Editable option: not-editing vs editing.
 *
 * Editing state (editing=true):
 * - Outer container: 1px solid var(--color-border-default)
 * - Inner focus ring: 1px solid #1c64f2, border-radius 4px
 * - Text: #111928 (reverts to primary — not blue)
 * - Cursor character `|` appended to value
 *
 * **QA checklist**
 * - Not-editing: blue text (#1c64f2) on white, no outline
 * - Editing: double border (outer gray + inner blue ring), text reverts to #111928
 * - Both cells: 146px wide, 38px tall
 */
export const CellEditing = {
    name: 'Editable — not-editing vs editing',
  parameters: {
    docs: {
      description: {
        story: 'Editable option in both states. In `editing=true` state the focus ring is `#1c64f2`; text reverts to `#111928` (not blue).',
      },
      source: {
        language: 'html',
        code: `<!-- Editable, editing=true (focused state) -->
<div style="display:flex;align-items:center;width:146px;height:38px;
            background:var(--color-bg-surface);border:1px solid var(--color-border-default);box-sizing:border-box;">
  <div style="flex:1;display:flex;align-items:center;justify-content:flex-end;
              border:1px solid #1c64f2;border-radius:4px;
              padding:8px 16px;overflow:hidden;box-sizing:border-box;">
    <span style="font-family:inherit;font-size:var(--text-sm);font-weight:var(--font-medium);line-height:1.5;color:#111928;text-align:right;">
      500,00|
    </span>
  </div>
</div>`,
      },
    },
  },
  render: () => /* html */`
    <div style="display:inline-flex;flex-direction:column;gap:1px;">
      <div style="display:flex;align-items:center;">
        ${rowLabel('Editable (not editing)')}
        ${dataCell({ textColor: '#1c64f2' })}
      </div>
      <div style="display:flex;align-items:center;">
        ${rowLabel('Editable (editing=true)')}
        ${editableCell()}
      </div>
    </div>`,
};

/* ─────────────────────────────────────────────────────────────────────────
   CELL WITH CAPTION  — node 9279:163646 (showCaption=true)
───────────────────────────────────────────────────────────────────────── */
/**
 * Optional `showCaption` adds a secondary 12px line below the main value.
 * Caption is always #6b7280 regardless of option colour.
 * Available on: Default, Grey, Calculated, Waste, Indigo.
 * Not available on Editable or Blue.
 *
 * **QA checklist**
 * - Caption font: Inter 400 12px / 1.5, colour #6b7280
 * - Both lines right-aligned
 * - Cell height remains 38px — content clips if needed
 * - Caption text is independent from option colour
 */
export const CellWithCaption = {
    name: 'Cell with caption (secondary line)',
  parameters: {
    docs: {
      description: {
        story: 'Optional `showCaption` adds a secondary `12px` line below the value. Caption colour is always `#6b7280` regardless of option.',
      },
      source: {
        language: 'html',
        code: `<!-- Cell with caption — Default option -->
<div style="display:flex;align-items:center;justify-content:flex-end;gap:4px;
            width:146px;height:38px;padding:8px 16px;background:var(--color-bg-surface);box-sizing:border-box;">
  <span style="font-family:inherit;font-size:var(--text-sm);font-weight:var(--font-medium);line-height:1.5;color:#111928;flex-shrink:0;">$</span>
  <div style="flex:1 0 0;display:flex;flex-direction:column;align-items:flex-end;
              justify-content:center;min-width:1px;">
    <span style="font-family:inherit;font-size:var(--text-sm);font-weight:var(--font-medium);line-height:1.5;color:#111928;text-align:right;">500,00</span>
    <span style="font-family:inherit;font-size:var(--text-xs);font-weight:var(--font-normal);line-height:1.5;color:var(--color-text-secondary);text-align:right;">500,00</span>
  </div>
</div>`,
      },
    },
  },
  render: () => /* html */`
    <div style="display:inline-flex;flex-direction:column;gap:1px;">
      ${[
        { label: 'Default + caption',    color: '#111928', bg: 'var(--color-bg-white)' },
        { label: 'Calculated + caption', color: '#0e9f6e', bg: 'var(--color-bg-white)' },
        { label: 'Waste + caption',      color: '#e74694', bg: 'var(--color-bg-white)' },
        { label: 'Indigo + caption',     color: '#42389d', bg: 'var(--color-bg-white)' },
      ].map(({ label, color, bg }) => /* html */`
        <div style="display:flex;align-items:center;">
          ${rowLabel(label)}
          ${dataCell({ textColor: color, bg, caption: '500,00' })}
        </div>`).join('')}
    </div>`,
};

/* ─────────────────────────────────────────────────────────────────────────
   HEADER HORIZONTAL  — node 9279:163718
───────────────────────────────────────────────────────────────────────── */
/**
 * All 8 TableHeaderHorizontal types in regular (500) and bold (600) variants.
 * Column category is encoded in background + text colour.
 *
 * **QA checklist**
 * - Default: white bg, #111928 — neutral
 * - Derival: #fff8f1 warm tint, #111928
 * - Total: var(--color-bg-secondary) gray, #111928
 * - Union: var(--color-bg-secondary) gray, #42389d brand purple (same bg as Total, different text)
 * - NonCollapsible: var(--color-bg-tertiary) near-white, #111928
 * - Expand: #edebfe purple/100, #42389d — bright purple column
 * - Income: #f3faf7 green/50, #057a55 — green category
 * - Disbursements: #fdf2f2 red/50, #e02424 — red category
 * - Bold (600) vs regular (500): weight difference must be visible at 14px
 */
export const HeaderHorizontal = {
    name: 'Column headers (horizontal) — all types',
  parameters: {
    docs: {
      description: {
        story: `All 8 **TableHeaderHorizontal** type variants in regular (500) and bold (600).
Column category (Income / Disbursements / Expand / Union) is communicated through background + text colour.`,
      },
      source: {
        language: 'html',
        code: `<!-- Income — regular -->
<div style="display:flex;align-items:center;justify-content:flex-end;gap:4px;
            width:146px;height:38px;padding:8px 16px;background:#f3faf7;box-sizing:border-box;">
  <span style="font-family:inherit;font-size:var(--text-sm);font-weight:var(--font-medium);line-height:1.5;color:#057a55;flex:1 0 0;">Income</span>
</div>

<!-- Income — bold -->
<div style="display:flex;align-items:center;justify-content:flex-end;gap:4px;
            width:146px;height:38px;padding:8px 16px;background:#f3faf7;box-sizing:border-box;">
  <span style="font-family:inherit;font-size:var(--text-sm);font-weight:var(--font-semibold);line-height:1.5;color:#057a55;flex:1 0 0;">Income</span>
</div>`,
      },
    },
  },
  render: () => {
    const TYPES = [
      { label: 'Default',            bg: 'var(--color-bg-white)', color: '#111928' },
      { label: 'Derival',            bg: '#fff8f1', color: '#111928' },
      { label: 'Total',              bg: 'var(--color-bg-secondary)', color: '#111928' },
      { label: 'Union',              bg: 'var(--color-bg-secondary)', color: '#42389d' },
      { label: 'NonCollapsible',     bg: 'var(--color-bg-tertiary)', color: '#111928' },
      { label: 'Expand',             bg: '#edebfe', color: '#42389d' },
      { label: 'Income',             bg: '#f3faf7', color: '#057a55' },
      { label: 'Disbursements',      bg: '#fdf2f2', color: '#e02424' },
    ];
    return /* html */`
      <div style="display:flex;gap:40px;align-items:flex-start;">
        <div>
          ${sectionHead('Regular (500)')}
          <div style="display:inline-flex;flex-direction:column;gap:1px;">
            ${TYPES.map(({ label, bg, color }) => /* html */`
              <div style="display:flex;align-items:center;">
                ${rowLabel(label)}
                ${hHeader({ text: label, bg, color, bold: false })}
              </div>`).join('')}
          </div>
        </div>
        <div>
          ${sectionHead('Bold (600)')}
          <div style="display:inline-flex;flex-direction:column;gap:1px;">
            ${TYPES.map(({ label, bg, color }) => /* html */`
              <div style="display:flex;align-items:center;">
                ${rowLabel(label)}
                ${hHeader({ text: label, bg, color, bold: true })}
              </div>`).join('')}
          </div>
        </div>
      </div>`;
  },
};

/* ─────────────────────────────────────────────────────────────────────────
   HEADER VERTICAL  — node 9279:163779
───────────────────────────────────────────────────────────────────────── */
/**
 * TableHeaderVertical — period column headers for time-series tables.
 * Font: Inter 700 12px uppercase, right-aligned (distinct from data cell font).
 *
 * **QA checklist**
 * - Default: var(--color-bg-tertiary) bg, #6b7280 gray text, "LABEL"
 * - ACTUALS: #cddbfe (brand/200 blue) bg, #4b5563 darker text
 * - FORECAST: #96f7e4 (teal/200) bg, #4b5563 darker text
 * - Font is 12px bold uppercase — NOT 14px medium like data cells
 * - Text is right-aligned (unlike horizontal headers which are left-aligned)
 */
export const HeaderVertical = {
    name: 'Period headers (vertical) — all types',
  parameters: {
    docs: {
      description: {
        story: `**TableHeaderVertical** — column headers for time-period columns (e.g. months in a cohort or budget table).
ACTUALS use brand/200 (\`#cddbfe\`); FORECAST use teal/200 (\`#96f7e4\`).`,
      },
      source: {
        language: 'html',
        code: `<!-- ACTUALS period header -->
<div style="display:flex;align-items:center;justify-content:flex-end;gap:4px;
            width:146px;height:38px;padding:8px 16px;background:#cddbfe;box-sizing:border-box;">
  <span style="font-family:inherit;font-size:var(--text-xs);font-weight:var(--font-bold);line-height:1.5;color:#4b5563;
               flex:1 0 0;text-align:right;">ACTUALS</span>
</div>`,
      },
    },
  },
  render: () => {
    const TYPES = [
      { label: 'Default',  bg: 'var(--color-bg-tertiary)', color: '#6b7280', text: 'LABEL'    },
      { label: 'ACTUALS',  bg: '#cddbfe', color: '#4b5563', text: 'ACTUALS'  },
      { label: 'FORECAST', bg: '#96f7e4', color: '#4b5563', text: 'FORECAST' },
    ];
    return /* html */`
      <div style="display:flex;gap:12px;align-items:flex-end;">
        ${TYPES.map(({ label, bg, color, text }) => /* html */`
          <div>
            <p style="font-family:inherit;font-size:10px;font-weight:var(--font-semibold);line-height:1;text-transform:uppercase;
                      letter-spacing:.08em;color:var(--color-border-light);margin:0 0 6px;text-align:center;">
              ${label}
            </p>
            ${vHeader({ label: text, bg, color })}
          </div>`).join('')}
      </div>`;
  },
};

/* ─────────────────────────────────────────────────────────────────────────
   TABLE CELL PERCENT  — node 9372:85
   10-step brand ramp badge · white & grey cell backgrounds
───────────────────────────────────────────── */
/**
 * Percentage badge cell used in cohort/heatmap columns.
 *
 * Unlike standard data cells this cell does NOT show a currency value —
 * it shows a coloured badge whose background encodes the percentage on a
 * 10-step brand ramp (brand/50 → brand/900).
 *
 * ## Props (Figma)
 * | Prop    | Values                              |
 * |---------|-------------------------------------|
 * | percent | "10" "20" "30" "40" "50" "60" "70" "80" "90" "100" |
 * | white   | true (cell bg #fff) · false (cell bg var(--color-bg-secondary)) |
 * | hover   | "No" (only documented state)        |
 *
 * ## Badge colour ramp
 * | Percent | Badge bg  | Text    |
 * |---------|-----------|---------|
 * | 10%     | #f0f5ff   | #111928 |
 * | 20%     | #e5edff   | #111928 |
 * | 30%     | #cddbfe   | #111928 |
 * | 40%     | #b4c6fc   | #111928 |
 * | 50%     | #8da2fb   | #111928 |
 * | 60%     | #6875f5   | var(--color-bg-white) |
 * | 70%     | #5850ec   | var(--color-bg-white) |
 * | 80%     | #5145cd   | var(--color-bg-white) |
 * | 90%     | #42389d   | var(--color-bg-white) |
 * | 100%    | #362f78   | var(--color-bg-white) |
 *
 * Text flips from `#111928` → `var(--color-bg-white)` at 60% (brand/500).
 *
 * ## Dimensions (Figma-exact)
 * Cell container: `width:auto · padding:8px 4px`
 * Badge: `62×42px · border-radius:4px · padding:10px`
 * Note: cell uses `px:4px` — tighter than the standard `px:16px` data cell.
 *
 * **QA checklist**
 * - 10 steps, 10% → 100%, all badges present
 * - Text flips at exactly 60% — no step missed
 * - Badge: 62×42px, `border-radius:4px`
 * - Cell padding: 4px horizontal (not 16px)
 * - `white=false`: cell container bg = var(--color-bg-secondary); badge colours unchanged
 */
export const CellPercent = {
    name: 'Cell percent — badge ramp',
  parameters: {
    docs: {
      description: {
        story: `Percentage badge cell (node 9372:85). A 10-step brand ramp badge used
in cohort/heatmap table columns. Text flips from dark to white at 60%.
Shown on both \`white\` (default) and \`grey\` (var(--color-bg-secondary)) cell backgrounds.`,
      },
      source: {
        language: 'html',
        code: `<!-- TableCellPercent — 60% on white cell bg -->
<div style="display:flex;flex-direction:column;align-items:flex-start;
            padding:8px 4px;background:var(--color-bg-white);box-sizing:border-box;">
  <div style="display:flex;align-items:center;justify-content:center;
              width:62px;height:42px;padding:10px;border-radius:4px;
              background:#6875f5;box-sizing:border-box;">
    <span style="font-family:inherit;font-size:var(--text-xs);font-weight:var(--font-semibold);line-height:1.5;color:var(--color-bg-white);
                 white-space:nowrap;text-align:center;">60%</span>
  </div>
</div>

<!-- TableCellPercent — 40% on grey cell bg (white=false) -->
<div style="display:flex;flex-direction:column;align-items:flex-start;
            padding:8px 4px;background:var(--color-bg-muted);box-sizing:border-box;">
  <div style="display:flex;align-items:center;justify-content:center;
              width:62px;height:42px;padding:10px;border-radius:4px;
              background:#b4c6fc;box-sizing:border-box;">
    <span style="font-family:inherit;font-size:var(--text-xs);font-weight:var(--font-semibold);line-height:1.5;color:#111928;
                 white-space:nowrap;text-align:center;">40%</span>
  </div>
</div>`,
      },
    },
  },
  render: () => {
    /* Figma-exact 10-step ramp: percent → badge bg, text colour */
    const RAMP = [
      { pct: '100%', bg: '#362f78', text: 'var(--color-bg-white)' },
      { pct:  '90%', bg: '#42389d', text: 'var(--color-bg-white)' },
      { pct:  '80%', bg: '#5145cd', text: 'var(--color-bg-white)' },
      { pct:  '70%', bg: '#5850ec', text: 'var(--color-bg-white)' },
      { pct:  '60%', bg: '#6875f5', text: 'var(--color-bg-white)' },
      { pct:  '50%', bg: '#8da2fb', text: '#111928' },
      { pct:  '40%', bg: '#b4c6fc', text: '#111928' },
      { pct:  '30%', bg: '#cddbfe', text: '#111928' },
      { pct:  '20%', bg: '#e5edff', text: '#111928' },
      { pct:  '10%', bg: '#f0f5ff', text: '#111928' },
    ];

    const badge = ({ pct, bg, text, cellBg }) => /* html */`
      <div style="display:flex;flex-direction:column;align-items:flex-start;
                  padding:8px 4px;background:${cellBg};box-sizing:border-box;flex-shrink:0;">
        <div style="display:flex;align-items:center;justify-content:center;
                    width:62px;height:42px;padding:10px;border-radius:4px;
                    background:${bg};box-sizing:border-box;">
          <span style="font-family:inherit;font-size:var(--text-xs);font-weight:var(--font-semibold);line-height:1.5;color:${text};
                       white-space:nowrap;text-align:center;">${pct}</span>
        </div>
      </div>`;

    const row = (cellBg, label) => /* html */`
      <div>
        <p style="font-family:inherit;font-size:10px;font-weight:var(--font-semibold);line-height:1;text-transform:uppercase;
                  letter-spacing:.08em;color:var(--color-border-light);margin:0 0 6px;">
          ${label}
        </p>
        <div style="display:inline-flex;align-items:center;
                    border:1px solid var(--color-border-default);border-radius:6px;overflow:hidden;">
          ${RAMP.map(r => badge({ ...r, cellBg })).join('')}
        </div>
      </div>`;

    return /* html */`
      <div style="display:flex;flex-direction:column;gap:20px;">
        ${row('var(--color-bg-white)', 'white = true (default)')}
        ${row('var(--color-bg-secondary)', 'white = false (grey cell bg)')}
      </div>`;
  },
};
