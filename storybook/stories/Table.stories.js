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
 * | Default                | #ffffff    |
 * | Derival                | #fff8f1    |
 * | Total                  | #f3f4f6    |
 * | Defaul-non-collapsible | #f9fafb    |
 *
 * ## TableHeaderHorizontal — column category map
 * | Type            | Background | Text      |
 * |-----------------|------------|-----------|
 * | Default         | #ffffff    | #111928   |
 * | Derival         | #fff8f1    | #111928   |
 * | Total / Union   | #f3f4f6    | #111928 / #42389d |
 * | NonCollapsible  | #f9fafb    | #111928   |
 * | Expand          | #edebfe    | #42389d   |
 * | Income          | #f3faf7    | #057a55   |
 * | Disbursements   | #fdf2f2    | #e02424   |
 *
 * ## TableHeaderVertical — period header map
 * | Type     | Background | Text    |
 * |----------|------------|---------|
 * | Default  | #f9fafb    | #6b7280 |
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
  bg = '#ffffff',
  caption = null,
  iconLeft = false,
  iconRight = false,
} = {}) => /* html */`
  <div style="display:flex;align-items:center;justify-content:flex-end;gap:4px;
              width:146px;height:38px;padding:8px 16px;background:${bg};
              box-sizing:border-box;flex-shrink:0;">
    ${iconLeft ? `<span style="display:flex;align-items:center;flex-shrink:0;color:${textColor};">${CHECK_ICON}</span>` : ''}
    ${currency ? `<span style="font:500 14px/1.5 'Inter',sans-serif;color:${textColor};flex-shrink:0;">$</span>` : ''}
    <div style="flex:1 0 0;display:flex;flex-direction:column;align-items:flex-end;
                justify-content:center;min-width:1px;">
      <span style="font:500 14px/1.5 'Inter',sans-serif;color:${textColor};
                   text-align:right;white-space:nowrap;">${amount}</span>
      ${caption
        ? `<span style="font:400 12px/1.5 'Inter',sans-serif;color:#6b7280;text-align:right;">${caption}</span>`
        : ''}
    </div>
    ${iconRight ? `<span style="display:flex;align-items:center;flex-shrink:0;color:${textColor};">${CHECK_ICON}</span>` : ''}
  </div>`;

/** Editable cell in the focused / editing state (editing=true). */
const editableCell = () => /* html */`
  <div style="display:flex;align-items:center;width:146px;height:38px;
              background:#ffffff;border:1px solid #e5e7eb;
              box-sizing:border-box;flex-shrink:0;">
    <div style="flex:1;display:flex;align-items:center;justify-content:flex-end;
                border:1px solid #1c64f2;border-radius:4px;padding:8px 16px;
                overflow:hidden;box-sizing:border-box;">
      <span style="flex:1 0 0;font:500 14px/1.5 'Inter',sans-serif;
                   color:#111928;text-align:right;white-space:nowrap;">500,00|</span>
    </div>
  </div>`;

/* ── Header builders ────────────────────────────────────────────────────── */

/** Horizontal column header (category label, text left-aligned in the cell). */
const hHeader = ({
  text = 'Label',
  bg = '#ffffff',
  color = '#111928',
  bold = false,
} = {}) => /* html */`
  <div style="display:flex;align-items:center;justify-content:flex-end;gap:4px;
              width:146px;height:38px;padding:8px 16px;background:${bg};
              box-sizing:border-box;flex-shrink:0;">
    <span style="font:${bold ? 600 : 500} 14px/1.5 'Inter',sans-serif;
                 color:${color};flex:1 0 0;">${text}</span>
  </div>`;

/** Vertical period header (uppercase 12px bold, right-aligned). */
const vHeader = ({
  label = 'LABEL',
  bg = '#f9fafb',
  color = '#6b7280',
} = {}) => /* html */`
  <div style="display:flex;align-items:center;justify-content:flex-end;gap:4px;
              width:146px;height:38px;padding:8px 16px;background:${bg};
              box-sizing:border-box;flex-shrink:0;">
    <span style="font:700 12px/1.5 'Inter',sans-serif;
                 color:${color};flex:1 0 0;text-align:right;">${label}</span>
  </div>`;

/* ── Layout helpers ─────────────────────────────────────────────────────── */

const rowLabel = (text) =>
  /* html */`<span style="display:inline-flex;align-items:center;justify-content:flex-end;
    width:180px;padding-right:12px;flex-shrink:0;
    font:500 11px/1.5 'Inter',sans-serif;color:#9ca3af;">${text}</span>`;

const sectionHead = (text) =>
  /* html */`<p style="font:700 11px/1 'Inter',sans-serif;text-transform:uppercase;
    letter-spacing:.12em;color:#6b7280;margin:0 0 14px;
    border-bottom:1px solid #e5e7eb;padding-bottom:7px;">${text}</p>`;

/* ── Default export ─────────────────────────────────────────────────────── */

export default {
  title: 'Iris Library/Table/Cells',
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    backgrounds: { default: 'light' },
    docs: {
      description: {
        component: `Primitive cell components for the Iris financial/analytics table — used in reporting dashboards (budget, P&L, cohort analysis).

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
| Default | \`#ffffff\` |
| Derival | \`#fff8f1\` |
| Total | \`#f3f4f6\` |
| Defaul-non-collapsible | \`#f9fafb\` |

### TableHeaderHorizontal

Column category encoded in background and text colour:

| Type | Background | Text |
|---|---|---|
| Default | \`#ffffff\` | \`#111928\` |
| Derival | \`#fff8f1\` | \`#111928\` |
| Total | \`#f3f4f6\` | \`#111928\` |
| Union | \`#f3f4f6\` | \`#42389d\` |
| Defaul-non-collapsible | \`#f9fafb\` | \`#111928\` |
| Expand | \`#edebfe\` | \`#42389d\` |
| Income | \`#f3faf7\` | \`#057a55\` |
| Disbursements | \`#fdf2f2\` | \`#e02424\` |

### TableHeaderVertical

Period column headers (time-series, e.g. months):

| Type | Background | Text |
|---|---|---|
| Default (LABEL) | \`#f9fafb\` | \`#6b7280\` |
| ACTUALS | \`#cddbfe\` | \`#4b5563\` |
| FORECAST | \`#96f7e4\` | \`#4b5563\` |

### Developer notes
- All cells: \`height:38px\`, \`padding:8px 16px\`, \`box-sizing:border-box\`
- Font: Inter 500 14px / 1.5, values right-aligned; bold headers use 600
- Period headers: 700 12px uppercase, right-aligned
- Editing state: inner container has \`border:1px solid #1c64f2; border-radius:4px\`; outer has \`border:1px solid #e5e7eb\`
- **check-circle icon** (APPROX — see JSDoc): Heroicons solid SVG approximation

### QA notes
- \`Grey\` and \`Default\` differ only in text colour (#6b7280 vs #111928) — verify at-a-glance legibility
- \`Blue\` uniquely changes the cell background to \`#ebf5ff\` — other options inherit row bg
- Editing state text reverts to \`#111928\` (not blue) — verify with designer intent
- \`$\` currency symbol must match value text colour in every option
- Bold header (600) vs regular (500): check visual weight difference in the type column story`,
      },
    },
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
  parameters: {
    docs: {
      description: {
        story: 'All 7 `option` variants on a white (Default) row. The `Blue` option is the only one that also changes the cell background to `#ebf5ff`.',
      },
      source: {
        language: 'html',
        code: `<!-- Default option -->
<div style="display:flex;align-items:center;justify-content:flex-end;gap:4px;
            width:146px;height:38px;padding:8px 16px;background:#fff;box-sizing:border-box;">
  <span style="font:500 14px/1.5 'Inter',sans-serif;color:#111928;flex-shrink:0;">$</span>
  <span style="font:500 14px/1.5 'Inter',sans-serif;color:#111928;text-align:right;">500,00</span>
</div>

<!-- Blue option — cell bg + text both blue -->
<div style="display:flex;align-items:center;justify-content:flex-end;gap:4px;
            width:146px;height:38px;padding:8px 16px;background:#ebf5ff;box-sizing:border-box;">
  <span style="font:500 14px/1.5 'Inter',sans-serif;color:#1c64f2;flex-shrink:0;">$</span>
  <span style="font:500 14px/1.5 'Inter',sans-serif;color:#1c64f2;text-align:right;">500,00</span>
</div>

<!-- Calculated option -->
<div style="display:flex;align-items:center;justify-content:flex-end;gap:4px;
            width:146px;height:38px;padding:8px 16px;background:#fff;box-sizing:border-box;">
  <span style="font:500 14px/1.5 'Inter',sans-serif;color:#0e9f6e;flex-shrink:0;">$</span>
  <span style="font:500 14px/1.5 'Inter',sans-serif;color:#0e9f6e;text-align:right;">500,00</span>
</div>`,
      },
    },
  },
  render: () => {
    const OPTIONS = [
      { label: 'Default',    color: '#111928', bg: '#ffffff' },
      { label: 'Grey',       color: '#6b7280', bg: '#ffffff' },
      { label: 'Editable',   color: '#1c64f2', bg: '#ffffff' },
      { label: 'Blue',       color: '#1c64f2', bg: '#ebf5ff' },
      { label: 'Calculated', color: '#0e9f6e', bg: '#ffffff' },
      { label: 'Waste',      color: '#e74694', bg: '#ffffff' },
      { label: 'Indigo',     color: '#42389d', bg: '#ffffff' },
    ];
    return /* html */`
      <div style="display:inline-flex;flex-direction:column;gap:1px;">
        ${OPTIONS.map(({ label, color, bg }) => /* html */`
          <div style="display:flex;align-items:center;">
            ${rowLabel(label)}
            ${dataCell({ textColor: color, bg })}
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
 * - Default (white): pure #ffffff
 * - Derival: warm cream #fff8f1 — subtle orange tint
 * - Total: cool light gray #f3f4f6
 * - NonCollapsible: near-white #f9fafb — barely distinguishable from white in isolation
 */
export const CellRowTypes = {
  name: 'Cell × row type backgrounds',
  parameters: {
    docs: {
      description: {
        story: 'The same Default-option cell on each of the 4 row type backgrounds. Only the background changes — layout and font are identical.',
      },
    },
  },
  render: () => {
    const ROW_TYPES = [
      { label: 'Default',                bg: '#ffffff' },
      { label: 'Derival',                bg: '#fff8f1' },
      { label: 'Total',                  bg: '#f3f4f6' },
      { label: 'Defaul-non-collapsible', bg: '#f9fafb' },
    ];
    return /* html */`
      <div style="display:inline-flex;flex-direction:column;gap:1px;">
        ${ROW_TYPES.map(({ label, bg }) => /* html */`
          <div style="display:flex;align-items:center;">
            ${rowLabel(label)}
            ${dataCell({ bg })}
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
 * - Outer container: 1px solid #e5e7eb
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
            background:#fff;border:1px solid #e5e7eb;box-sizing:border-box;">
  <div style="flex:1;display:flex;align-items:center;justify-content:flex-end;
              border:1px solid #1c64f2;border-radius:4px;
              padding:8px 16px;overflow:hidden;box-sizing:border-box;">
    <span style="font:500 14px/1.5 'Inter',sans-serif;color:#111928;text-align:right;">
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
    },
  },
  render: () => /* html */`
    <div style="display:inline-flex;flex-direction:column;gap:1px;">
      ${[
        { label: 'Default + caption',    color: '#111928', bg: '#ffffff' },
        { label: 'Calculated + caption', color: '#0e9f6e', bg: '#ffffff' },
        { label: 'Waste + caption',      color: '#e74694', bg: '#ffffff' },
        { label: 'Indigo + caption',     color: '#42389d', bg: '#ffffff' },
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
 * - Total: #f3f4f6 gray, #111928
 * - Union: #f3f4f6 gray, #42389d brand purple (same bg as Total, different text)
 * - NonCollapsible: #f9fafb near-white, #111928
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
  <span style="font:500 14px/1.5 'Inter',sans-serif;color:#057a55;flex:1 0 0;">Income</span>
</div>

<!-- Income — bold -->
<div style="display:flex;align-items:center;justify-content:flex-end;gap:4px;
            width:146px;height:38px;padding:8px 16px;background:#f3faf7;box-sizing:border-box;">
  <span style="font:600 14px/1.5 'Inter',sans-serif;color:#057a55;flex:1 0 0;">Income</span>
</div>`,
      },
    },
  },
  render: () => {
    const TYPES = [
      { label: 'Default',            bg: '#ffffff', color: '#111928' },
      { label: 'Derival',            bg: '#fff8f1', color: '#111928' },
      { label: 'Total',              bg: '#f3f4f6', color: '#111928' },
      { label: 'Union',              bg: '#f3f4f6', color: '#42389d' },
      { label: 'NonCollapsible',     bg: '#f9fafb', color: '#111928' },
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
 * - Default: #f9fafb bg, #6b7280 gray text, "LABEL"
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
  <span style="font:700 12px/1.5 'Inter',sans-serif;color:#4b5563;
               flex:1 0 0;text-align:right;">ACTUALS</span>
</div>`,
      },
    },
  },
  render: () => {
    const TYPES = [
      { label: 'Default',  bg: '#f9fafb', color: '#6b7280', text: 'LABEL'    },
      { label: 'ACTUALS',  bg: '#cddbfe', color: '#4b5563', text: 'ACTUALS'  },
      { label: 'FORECAST', bg: '#96f7e4', color: '#4b5563', text: 'FORECAST' },
    ];
    return /* html */`
      <div style="display:flex;gap:12px;align-items:flex-end;">
        ${TYPES.map(({ label, bg, color, text }) => /* html */`
          <div>
            <p style="font:600 10px/1 'Inter',sans-serif;text-transform:uppercase;
                      letter-spacing:.08em;color:#9ca3af;margin:0 0 6px;text-align:center;">
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
 * | white   | true (cell bg #fff) · false (cell bg #f3f4f6) |
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
 * | 60%     | #6875f5   | #ffffff |
 * | 70%     | #5850ec   | #ffffff |
 * | 80%     | #5145cd   | #ffffff |
 * | 90%     | #42389d   | #ffffff |
 * | 100%    | #362f78   | #ffffff |
 *
 * Text flips from `#111928` → `#ffffff` at 60% (brand/500).
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
 * - `white=false`: cell container bg = #f3f4f6; badge colours unchanged
 */
export const CellPercent = {
  name: 'Cell percent — badge ramp',
  parameters: {
    docs: {
      description: {
        story: `Percentage badge cell (node 9372:85). A 10-step brand ramp badge used
in cohort/heatmap table columns. Text flips from dark to white at 60%.
Shown on both \`white\` (default) and \`grey\` (#f3f4f6) cell backgrounds.`,
      },
      source: {
        language: 'html',
        code: `<!-- TableCellPercent — 60% on white cell bg -->
<div style="display:flex;flex-direction:column;align-items:flex-start;
            padding:8px 4px;background:#ffffff;box-sizing:border-box;">
  <div style="display:flex;align-items:center;justify-content:center;
              width:62px;height:42px;padding:10px;border-radius:4px;
              background:#6875f5;box-sizing:border-box;">
    <span style="font:600 12px/1.5 'Inter',sans-serif;color:#ffffff;
                 white-space:nowrap;text-align:center;">60%</span>
  </div>
</div>

<!-- TableCellPercent — 40% on grey cell bg (white=false) -->
<div style="display:flex;flex-direction:column;align-items:flex-start;
            padding:8px 4px;background:#f3f4f6;box-sizing:border-box;">
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
  render: () => {
    /* Figma-exact 10-step ramp: percent → badge bg, text colour */
    const RAMP = [
      { pct: '100%', bg: '#362f78', text: '#ffffff' },
      { pct:  '90%', bg: '#42389d', text: '#ffffff' },
      { pct:  '80%', bg: '#5145cd', text: '#ffffff' },
      { pct:  '70%', bg: '#5850ec', text: '#ffffff' },
      { pct:  '60%', bg: '#6875f5', text: '#ffffff' },
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
          <span style="font:600 12px/1.5 'Inter',sans-serif;color:${text};
                       white-space:nowrap;text-align:center;">${pct}</span>
        </div>
      </div>`;

    const row = (cellBg, label) => /* html */`
      <div>
        <p style="font:600 10px/1 'Inter',sans-serif;text-transform:uppercase;
                  letter-spacing:.08em;color:#9ca3af;margin:0 0 6px;">
          ${label}
        </p>
        <div style="display:inline-flex;align-items:center;
                    border:1px solid #e5e7eb;border-radius:6px;overflow:hidden;">
          ${RAMP.map(r => badge({ ...r, cellBg })).join('')}
        </div>
      </div>`;

    return /* html */`
      <div style="display:flex;flex-direction:column;gap:20px;">
        ${row('#ffffff', 'white = true (default)')}
        ${row('#f3f4f6', 'white = false (grey cell bg)')}
      </div>`;
  },
};
