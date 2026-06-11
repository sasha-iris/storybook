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
// option → real .iris-cell--* modifier (Figma-verified node 9279:163646)
const OPTION_CLASS = {
  default: 'iris-cell--default', grey: 'iris-cell--grey', editable: 'iris-cell--editable',
  blue: 'iris-cell--blue', calculated: 'iris-cell--calculated', waste: 'iris-cell--waste', indigo: 'iris-cell--indigo',
};
// rowType → real .iris-cell--row-* modifier
const ROW_CLASS = {
  default: 'iris-cell--row-default', derival: 'iris-cell--row-derived',
  total: 'iris-cell--row-total', 'non-collapsible': 'iris-cell--row-noncoll',
};

/**
 * Right-aligned numeric data cell — built on real .iris-cell classes.
 * `option` sets text colour; `rowType` sets the row background (Blue carries its
 * own #ebf5ff and ignores rowType, per Figma).
 */
const dataCell = ({ amount = '500,00', currency = true, option = 'default', rowType = 'default', caption = null } = {}) => {
  const rowCls = option === 'blue' ? '' : ` ${ROW_CLASS[rowType] || ROW_CLASS.default}`;
  const cls = `iris-cell iris-cell--num ${OPTION_CLASS[option] || OPTION_CLASS.default}${rowCls}`;
  return /* html */`
  <div class="${cls}">
    ${currency ? `<span style="flex-shrink:0;">$</span>` : ''}
    <div style="display:flex;flex-direction:column;align-items:flex-end;min-width:1px;">
      <span style="white-space:nowrap;">${amount}</span>
      ${caption ? `<span class="iris-caption-xs">${caption}</span>` : ''}
    </div>
  </div>`;
};

/** Editable cell in the focused / editing state (editing=true). Inner focus ring + .iris-cell base. */
const editableCell = () => /* html */`
  <div class="iris-cell iris-cell--num iris-cell--editable iris-cell--row-default" style="padding:0;">
    <div style="flex:1;display:flex;align-items:center;justify-content:flex-end;
                border:1px solid #1c64f2;border-radius:4px;padding:8px 16px;
                overflow:hidden;box-sizing:border-box;color:#111928;">
      <span style="white-space:nowrap;">500,00|</span>
    </div>
  </div>`;

/* ── Header builders ────────────────────────────────────────────────────── */

/** Horizontal column header — real .iris-th-h--{type} class (Figma node 9279:163718). */
const hHeader = ({ text = 'Label', type = 'default', bold = false } = {}) => /* html */`
  <div class="iris-th-h iris-th-h--${type}${bold ? ' iris-th-h--bold' : ''}">
    <span class="iris-th-h__label">${text}</span>
  </div>`;

/** Vertical period header — real .iris-th-v--{type} class (Figma node 9279:163779). */
const vHeader = ({ label = 'LABEL', type = 'default' } = {}) => /* html */`
  <div class="iris-th-v iris-th-v--${type}">${label}</div>`;

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

// Colour/background are now driven by real .iris-cell--* / .iris-cell--row-* classes
// (see OPTION_CLASS / ROW_CLASS near dataCell). Figma-verified node 9279:163646.

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
| Union | \`var(--color-bg-secondary)\` | \`#111928\` * |
| Defaul-non-collapsible | \`var(--color-bg-tertiary)\` | \`#111928\` |
| Expand | \`#edebfe\` | \`#42389d\` |
| Income | \`#f3faf7\` | \`#057a55\` |
| Disbursements | \`#fdf2f2\` | \`#e02424\` |

\\* **Union** currently renders identical to Total (\`#111928\` on \`var(--color-bg-secondary)\`) per Figma node 9279:163718. A distinct brand-purple text was proposed but is **pending designer confirmation** — the docs reflect what actually ships today.

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
        story: 'Configure a single cell with **option** (semantic colour), **rowType** (row background), **amount**, and **currency** Controls. Built on the real `.iris-cell` classes — the preview, the HTML/React panels and **Show code** all emit `class="iris-cell …"`. Blue carries its own `#ebf5ff` and ignores rowType.',
      },
      source: {
        transform: (_src, ctx) => {
          const { option, rowType, amount, currency } = ctx.args;
          const optCls = OPTION_CLASS[option] || OPTION_CLASS.default;
          const rowCls = option === 'blue' ? '' : ` ${ROW_CLASS[rowType] || ROW_CLASS.default}`;
          return `<div class="iris-cell iris-cell--num ${optCls}${rowCls}">\n  ${currency ? '<span>$</span>' : ''}<span>${amount}</span>\n</div>`;
        },
      },
    },
  },
  render: ({ option, rowType, amount, currency }) => {
    const optCls = OPTION_CLASS[option] || OPTION_CLASS.default;
    const rowCls = option === 'blue' ? '' : ` ${ROW_CLASS[rowType] || ROW_CLASS.default}`;
    const cellClass = `iris-cell iris-cell--num ${optCls}${rowCls}`;

    const htmlCode = `<div class="${cellClass}">\n  ${currency ? '<span>$</span>' : ''}<span>${amount}</span>\n</div>`;

    const reactCode = `<div className="${cellClass}">\n  ${currency ? '<span>$</span>' : ''}<span>{amount}</span>\n</div>`;

    const componentCode = `const ROW = { default: 'default', derival: 'derived', total: 'total', 'non-collapsible': 'noncoll' };\n\nexport function DataCell({ amount, option = 'default', rowType = 'default', currency = true }) {\n  const optionClass = 'iris-cell--' + option;\n  // Blue carries its own background; other options take the row background.\n  const rowClass = option === 'blue' ? '' : ' iris-cell--row-' + (ROW[rowType] || 'default');\n\n  return (\n    <div className={'iris-cell iris-cell--num ' + optionClass + rowClass}>\n      {currency && <span>$</span>}\n      <span>{amount}</span>\n    </div>\n  );\n}`;

    const htmlEscaped = htmlCode.replace(/</g, '&lt;').replace(/>/g, '&gt;');
    const reactEscaped = reactCode.replace(/</g, '&lt;').replace(/>/g, '&gt;');
    const componentEscaped = componentCode.replace(/</g, '&lt;').replace(/>/g, '&gt;');

    return `
      <div style="display:flex;flex-direction:column;gap:24px;">
        <div style="padding:16px;border:1px solid var(--color-border-default);border-radius:8px;">
          ${dataCell({ amount, currency, option, rowType })}
        </div>
        <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:16px;align-items:start;">
          <div style="padding:16px;border:1px solid var(--color-border-default);border-radius:8px;">
            <div style="font-weight:600;font-size:12px;color:var(--color-text-secondary);margin-bottom:12px;text-transform:uppercase;letter-spacing:0.5px;">HTML</div>
            <div style="background:var(--color-bg-tertiary);padding:12px;border-radius:6px;margin-bottom:12px;overflow:auto;">
              <pre style="margin:0;font-family:monospace;font-size:13px;white-space:pre-wrap;word-break:break-word;"><code>${htmlEscaped}</code></pre>
            </div>
            <button data-copy="${htmlCode.split('"').join('&quot;')}" class="storybook-copy-btn" style="padding:8px 12px;background:var(--color-bg-secondary);color:var(--color-text-primary);border:1px solid var(--color-border-default);border-radius:4px;cursor:pointer;font-family:inherit;font-size:12px;font-weight:500;display:flex;align-items:center;gap:6px;">
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="2" y="2" width="8" height="8" rx="1"/><path d="M6 14H12C13.1046 14 14 13.1046 14 12V6"/></svg>Copy
            </button>
          </div>
          <div style="padding:16px;border:1px solid var(--color-border-default);border-radius:8px;">
            <div style="font-weight:600;font-size:12px;color:var(--color-text-secondary);margin-bottom:12px;text-transform:uppercase;letter-spacing:0.5px;">React</div>
            <div style="background:var(--color-bg-tertiary);padding:12px;border-radius:6px;margin-bottom:12px;overflow:auto;">
              <pre style="margin:0;font-family:monospace;font-size:13px;white-space:pre-wrap;word-break:break-word;"><code>${reactEscaped}</code></pre>
            </div>
            <button data-copy="${reactCode.split('"').join('&quot;')}" class="storybook-copy-btn" style="padding:8px 12px;background:var(--color-bg-secondary);color:var(--color-text-primary);border:1px solid var(--color-border-default);border-radius:4px;cursor:pointer;font-family:inherit;font-size:12px;font-weight:500;display:flex;align-items:center;gap:6px;">
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="2" y="2" width="8" height="8" rx="1"/><path d="M6 14H12C13.1046 14 14 13.1046 14 12V6"/></svg>Copy
            </button>
          </div>
          <div style="padding:16px;border:1px solid var(--color-border-default);border-radius:8px;">
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
        code: `<!-- Default option on a default row -->
<div class="iris-cell iris-cell--num iris-cell--default iris-cell--row-default">
  <span>$</span><span>500,00</span>
</div>

<!-- Blue option — carries its own #ebf5ff background (ignores row) -->
<div class="iris-cell iris-cell--num iris-cell--blue">
  <span>$</span><span>500,00</span>
</div>

<!-- Calculated option (green) on a total row -->
<div class="iris-cell iris-cell--num iris-cell--calculated iris-cell--row-total">
  <span>$</span><span>500,00</span>
</div>`,
      },
    },
  },
  render: ({ rowType }) => {
    const OPTIONS = ['default', 'grey', 'editable', 'blue', 'calculated', 'waste', 'indigo'];
    return /* html */`
      <div style="display:inline-flex;flex-direction:column;gap:1px;">
        ${OPTIONS.map((key) => /* html */`
          <div style="display:flex;align-items:center;">
            ${rowLabel(key.charAt(0).toUpperCase() + key.slice(1))}
            ${dataCell({ option: key, rowType })}
          </div>`).join('')}
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
        code: `<!-- Same Default-option cell across all 4 row backgrounds -->
<div class="iris-cell iris-cell--num iris-cell--default iris-cell--row-default"><span>$</span><span>500,00</span></div>
<div class="iris-cell iris-cell--num iris-cell--default iris-cell--row-derived"><span>$</span><span>500,00</span></div>
<div class="iris-cell iris-cell--num iris-cell--default iris-cell--row-total"><span>$</span><span>500,00</span></div>
<div class="iris-cell iris-cell--num iris-cell--default iris-cell--row-noncoll"><span>$</span><span>500,00</span></div>`,
        language: 'html',
      },
    },
  },
  render: ({ option }) => {
    const ROW_TYPES = [
      { label: 'Default',         key: 'default' },
      { label: 'Derival',         key: 'derival' },
      { label: 'Total',           key: 'total' },
      { label: 'Non-collapsible', key: 'non-collapsible' },
    ];
    return /* html */`
      <div style="display:inline-flex;flex-direction:column;gap:1px;">
        ${ROW_TYPES.map(({ label, key }) => /* html */`
          <div style="display:flex;align-items:center;">
            ${rowLabel(label)}
            ${dataCell({ option, rowType: key })}
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
    controls: { disable: true },
    docs: {
      description: {
        story: 'Editable option in both states. In `editing=true` state the focus ring is `#1c64f2`; text reverts to `#111928` (not blue).',
      },
      source: {
        language: 'html',
        code: `<!-- Editable, not editing -->
<div class="iris-cell iris-cell--num iris-cell--editable iris-cell--row-default">
  <span>$</span><span>500,00</span>
</div>

<!-- Editable, editing=true (inner focus ring) -->
<div class="iris-cell iris-cell--num iris-cell--editable iris-cell--row-default" style="padding:0;">
  <div style="flex:1;display:flex;align-items:center;justify-content:flex-end;
              border:1px solid #1c64f2;border-radius:4px;padding:8px 16px;color:#111928;">
    <span>500,00|</span>
  </div>
</div>`,
      },
    },
  },
  render: () => /* html */`
    <div style="display:inline-flex;flex-direction:column;gap:1px;">
      <div style="display:flex;align-items:center;">
        ${rowLabel('Editable (not editing)')}
        ${dataCell({ option: 'editable' })}
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
    controls: { disable: true },
    docs: {
      description: {
        story: 'Optional `showCaption` adds a secondary `12px` line below the value. Caption colour is always `#6b7280` regardless of option.',
      },
      source: {
        language: 'html',
        code: `<!-- Cell with caption — secondary line uses .iris-caption-xs (#6b7280) -->
<div class="iris-cell iris-cell--num iris-cell--default iris-cell--row-default">
  <span>$</span>
  <div style="display:flex;flex-direction:column;align-items:flex-end;">
    <span>500,00</span>
    <span class="iris-caption-xs">500,00</span>
  </div>
</div>`,
      },
    },
  },
  render: () => /* html */`
    <div style="display:inline-flex;flex-direction:column;gap:1px;">
      ${[
        { label: 'Default + caption',    option: 'default' },
        { label: 'Calculated + caption', option: 'calculated' },
        { label: 'Waste + caption',      option: 'waste' },
        { label: 'Indigo + caption',     option: 'indigo' },
      ].map(({ label, option }) => /* html */`
        <div style="display:flex;align-items:center;">
          ${rowLabel(label)}
          ${dataCell({ option, caption: '500,00' })}
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
 * - Union: var(--color-bg-secondary) gray, #111928 text — currently identical to Total (purple text pending designer confirmation)
 * - NonCollapsible: var(--color-bg-tertiary) near-white, #111928
 * - Expand: #edebfe purple/100, #42389d — bright purple column
 * - Income: #f3faf7 green/50, #057a55 — green category
 * - Disbursements: #fdf2f2 red/50, #e02424 — red category
 * - Bold (600) vs regular (500): weight difference must be visible at 14px
 */
export const HeaderHorizontal = {
    name: 'Column headers (horizontal) — all types',
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story: `All 8 **TableHeaderHorizontal** type variants in regular (500) and bold (600),
built on the real \`.iris-th-h--{type}\` classes. Column category (Income / Disbursements /
Expand / Union) is communicated through background + text colour.

**✅ Do** — pick the type that matches the column's financial meaning (Income → green, Disbursements → red).
**❌ Don't** — hardcode the hex values inline; the colour map lives in \`.iris-th-h--{type}\` so it stays in sync.`,
      },
      source: {
        language: 'html',
        code: `<!-- Income column header (regular weight) -->
<div class="iris-th-h iris-th-h--income">
  <span class="iris-th-h__label">Income</span>
</div>

<!-- Income column header (bold — e.g. a totals row) -->
<div class="iris-th-h iris-th-h--income iris-th-h--bold">
  <span class="iris-th-h__label">Income</span>
</div>

<!-- Swap the modifier for any of the 8 types: -->
<!-- default · derival · total · union · noncollapsible · expand · income · disbursements -->
<div class="iris-th-h iris-th-h--disbursements">
  <span class="iris-th-h__label">Disbursements</span>
</div>`,
      },
    },
  },
  render: () => {
    // label = displayed header text + variant name · type = real .iris-th-h--{type} modifier
    const TYPES = [
      { label: 'Default',        type: 'default'        },
      { label: 'Derival',        type: 'derival'        },
      { label: 'Total',          type: 'total'          },
      { label: 'Union',          type: 'union'          },
      { label: 'NonCollapsible', type: 'noncollapsible' },
      { label: 'Expand',         type: 'expand'         },
      { label: 'Income',         type: 'income'         },
      { label: 'Disbursements',  type: 'disbursements'  },
    ];
    const column = (title, bold) => /* html */`
      <div>
        ${sectionHead(title)}
        <div style="display:inline-flex;flex-direction:column;gap:1px;">
          ${TYPES.map(({ label, type }) => /* html */`
            <div style="display:flex;align-items:center;">
              ${rowLabel(label)}
              ${hHeader({ text: label, type, bold })}
            </div>`).join('')}
        </div>
      </div>`;
    return /* html */`
      <div style="display:flex;gap:40px;align-items:flex-start;">
        ${column('Regular (500)', false)}
        ${column('Bold (600)', true)}
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
    controls: { disable: true },
    docs: {
      description: {
        story: `**TableHeaderVertical** — column headers for time-period columns (e.g. months in a cohort
or budget table), built on the real \`.iris-th-v--{type}\` classes. ACTUALS use brand/200
(\`#cddbfe\`); FORECAST use teal/200 (\`#96f7e4\`).

**✅ Do** — use ACTUALS / FORECAST bands to separate realised vs projected period columns.
**❌ Don't** — mix these 12px uppercase period headers with the 14px \`.iris-th-h\` category headers in the same row.`,
      },
      source: {
        language: 'html',
        code: `<!-- ACTUALS period header (text is uppercased by the class) -->
<div class="iris-th-v iris-th-v--actuals">ACTUALS</div>

<!-- Swap the modifier: default · actuals · forecast -->
<div class="iris-th-v iris-th-v--forecast">FORECAST</div>
<div class="iris-th-v iris-th-v--default">LABEL</div>`,
      },
    },
  },
  render: () => {
    // label = variant name (caption) · text = displayed content · type = real .iris-th-v--{type} modifier
    const TYPES = [
      { label: 'Default',  type: 'default',  text: 'LABEL'    },
      { label: 'ACTUALS',  type: 'actuals',  text: 'ACTUALS'  },
      { label: 'FORECAST', type: 'forecast', text: 'FORECAST' },
    ];
    return /* html */`
      <div style="display:flex;gap:12px;align-items:flex-end;">
        ${TYPES.map(({ label, type, text }) => /* html */`
          <div>
            <p style="font-family:inherit;font-size:10px;font-weight:var(--font-semibold);line-height:1;text-transform:uppercase;
                      letter-spacing:.08em;color:var(--color-border-light);margin:0 0 6px;text-align:center;">
              ${label}
            </p>
            ${vHeader({ label: text, type })}
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
    controls: { disable: true },
    docs: {
      description: {
        story: `Percentage badge cell (node 9372:85). A 10-step brand ramp badge used
in cohort/heatmap table columns. Text flips from dark to white at 60%.
Shown on both \`white\` (default) and \`grey\` (var(--color-bg-secondary)) cell backgrounds.`,
      },
      source: {
        language: 'html',
        code: `<!-- TableCellPercent — 60% (text auto-flips white at 60%+) -->
<div class="iris-cohort-cell">
  <div class="iris-cohort-badge iris-cohort-badge--60">60%</div>
</div>

<!-- 40% on a grey cell (white=false) -->
<div class="iris-cohort-cell" style="background:#f3f4f6;">
  <div class="iris-cohort-badge iris-cohort-badge--40">40%</div>
</div>`,
      },
    },
  },
  render: () => {
    // Figma 10-step ramp → real .iris-cohort-badge--{step} classes (text flips white at 60%).
    const STEPS = [100, 90, 80, 70, 60, 50, 40, 30, 20, 10];

    const badge = (n, cellBg) => /* html */`
      <div class="iris-cohort-cell" style="background:${cellBg};">
        <div class="iris-cohort-badge iris-cohort-badge--${n}">${n}%</div>
      </div>`;

    const row = (cellBg, label) => /* html */`
      <div>
        <p style="font-family:inherit;font-size:10px;font-weight:var(--font-semibold);line-height:1;text-transform:uppercase;
                  letter-spacing:.08em;color:var(--color-border-light);margin:0 0 6px;">
          ${label}
        </p>
        <div style="display:inline-flex;align-items:center;
                    border:1px solid var(--color-border-default);border-radius:6px;overflow:hidden;">
          ${STEPS.map(n => badge(n, cellBg)).join('')}
        </div>
      </div>`;

    return /* html */`
      <div style="display:flex;flex-direction:column;gap:20px;">
        ${row('#ffffff', 'white = true (default)')}
        ${row('#f3f4f6', 'white = false (grey cell bg)')}
      </div>`;
  },
};
