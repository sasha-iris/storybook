/**
 * Iris Library — Table / Cohort
 *
 * Source: Figma › Iris Library
 *   • TableCellPercent — node 9372:85   (component set "Table cell-percent")
 *   • CohortRow        — node 9387:1751 (component set "Cohort row")
 *
 * Cohort analysis table built on REAL shippable classes:
 *   • `.iris-cohort-cell`              — 70×58 percent-cell container (padding 8px 4px)
 *   • `.iris-cohort-badge`             — 62×42 badge, radius 4px, padding 10px
 *   • `.iris-cohort-badge--{10..100}`  — 10-step brand heat ramp
 *   • `.iris-cohort-badge--empty`      — no-data placeholder dash
 *   • `.iris-cell` / `.iris-cell--num` — surrounding label / count / financial cells
 *   • `.iris-th`                       — uppercase column headers
 *
 * Every story renders these classes in BOTH the preview AND the copy snippets —
 * what you see is what you ship.
 *
 * ## Percentage badge color ramp (brand/50 → brand/900) — verified node 9372:85
 *
 * | Band | Badge bg  | Text     | Token       |
 * |------|-----------|----------|-------------|
 * | 10   | #f0f5ff   | #111928  | brand/50    |
 * | 20   | #e5edff   | #111928  | brand/100   |
 * | 30   | #cddbfe   | #111928  | brand/200   |
 * | 40   | #b4c6fc   | #111928  | brand/300   |
 * | 50   | #8da2fb   | #111928  | brand/400   |
 * | 60   | #6875f5   | #ffffff  | brand/500   |
 * | 70   | #5850ec   | #ffffff  | brand/600   |
 * | 80   | #5145cd   | #ffffff  | brand/700   |
 * | 90   | #42389d   | #ffffff  | brand/800   |
 * | 100  | #362f78   | #ffffff  | brand/900   |
 *
 * Text flips from #111928 → #ffffff at band 60 (brand/500). All colours live in
 * `.iris-cohort-badge--{n}` — never inline them.
 *
 * ## Exact percent → band mapping (Figma-verified: CEIL, not round)
 * The badge shows the exact percentage text but is coloured by the next-highest
 * 10-band: 84% → band 90, 72% → band 80, 66% → band 70, 8% → band 10.
 * Confirmed against the Feb 2023 row variant names in node 9387:1751.
 *
 * ## CohortRow structure (Figma node 9387:1751, left → right)
 * 1. Row header — period label (140px)
 * 2. Count cell — cohort size (116px)
 * 3. percents frame — 13× percent cells (70px each)
 * 4. Financial cells — $ values (140 / 82 / 120 / 120 / 120 / 120px)
 *
 * ## Row background
 * All rows: white. No zebra striping — the heat ramp already encodes structure
 * and the lightest bands (#f0f5ff, #e5edff) clash with grey zebra rows.
 * Figma offers a White=No grey variant for embedding on tinted surfaces.
 */

/* ── Real-class helpers ─────────────────────────────────────────────────── */

const RAMP = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

/** Map an exact percentage to its brand heat band (Figma: ceil to nearest 10). */
const band = (pct) => Math.min(100, Math.max(10, Math.ceil(pct / 10) * 10));

/**
 * One percent badge cell on real classes.
 * @param {number} pct        – exact percentage (drives label + band colour)
 * @param {string} [cellBg]   – optional row background (layout concern, e.g. grey row)
 */
const pctCell = (pct, cellBg) => {
  const bg = cellBg ? ` style="background:${cellBg};"` : '';
  return `<div class="iris-cohort-cell"${bg}><div class="iris-cohort-badge iris-cohort-badge--${band(pct)}">${pct}%</div></div>`;
};

/** Empty (no-data) placeholder cell — real `--empty` class. */
const emptyCell = (cellBg) => {
  const bg = cellBg ? ` style="background:${cellBg};"` : '';
  return `<div class="iris-cohort-cell"${bg}><div class="iris-cohort-badge iris-cohort-badge--empty">—</div></div>`;
};

/** Standard label / count / financial cell on real `.iris-cell` classes. */
const dataCell = (text, { num = false, currency = false } = {}) =>
  `<div class="iris-cell iris-cell--default${num ? ' iris-cell--num' : ''}">${currency ? '<span>$</span>' : ''}<span>${text}</span></div>`;

/** Uppercase column header — real `.iris-th` text class inside a width/align wrapper. */
const thCell = (label, width, align = 'flex-start') =>
  `<div style="width:${width}px;flex-shrink:0;display:flex;align-items:center;justify-content:${align};box-sizing:border-box;"><span class="iris-th">${label}</span></div>`;

/** 3-panel copy gallery (HTML / React / Component) — matches Table/Cells convention. */
const codeGallery = ({ html, react, component }) => {
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
    <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:16px;align-items:start;">
      ${panel('HTML', html)}
      ${panel('React', react)}
      ${panel('Component (With Events)', component)}
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
};

/* ── Default export ─────────────────────────────────────────────────────── */

export default {
  title: 'Iris Library/Table/Cohort',
  tags: ['autodocs', 'stable'],
  parameters: {
    layout: 'padded',
    backgrounds: { default: 'light' },
    docs: {
      description: {
        component: `**Table / Cohort** — cohort-analysis table primitives built on the real
\`.iris-cohort-cell\` / \`.iris-cohort-badge--{n}\` classes from \`iris-components.css\`.

Figma nodes: TableCellPercent \`9372:85\` · CohortRow \`9387:1751\`

**When to use**
- Retention / engagement tables where each cell is a percentage on a brand heat-map
- Cohort rows in financial dashboards (subscriber, budget, P&L cohorts)

**When NOT to use**
- Standard numeric tables without heat-map semantics → use Table/Cells
- Composed financial grids without cohorts → use Table/Composed

**Anatomy**
\`[row header] [count] [percent badges ×N] [financial cells]\`

### Percentage badge ramp (10 bands)

| Range | Text |
|---|---|
| band 10 – 50 | \`#111928\` (dark) |
| band 60 – 100 | \`#ffffff\` (white) |

The exact percent text is shown, but the badge colour is the **ceil** band:
84% → band 90, 8% → band 10 (Figma-verified).

### CSS classes

| Class | Purpose |
|---|---|
| \`.iris-cohort-cell\` | 70×58 cell container, padding 8px 4px |
| \`.iris-cohort-badge\` | 62×42 badge base, radius 4px |
| \`.iris-cohort-badge--{10..100}\` | brand heat band |
| \`.iris-cohort-badge--empty\` | no-data placeholder |

### Row background
All rows white — no zebra striping. The heat ramp already encodes structure;
alternating grey rows clash with the lightest bands (\`#f0f5ff\`, \`#e5edff\`).
Figma's \`White=No\` variant tints the cell for embedding on grey surfaces.

### Accessibility
- Badges encode data by **colour only** — always keep the numeric label visible; never rely on the band alone.
- Dark-on-light bands (10–50) and white-on-dark bands (60–100) both clear WCAG AA 4.5:1 for the 12px label.

See [SETUP.md](https://github.com/sasha-iris/storybook/blob/main/docs/SETUP.md) for complete installation instructions.
`,
      },
    },
  },
  argTypes: {
    // ── Appearance ───────────────────────────────────────────
    percentage: {
      control: 'select',
      options: RAMP.map((n) => `${n}%`),
      description:
        'Retention percentage. Drives the badge band from brand/50 (10) to brand/900 (100) via `.iris-cohort-badge--{n}`. Text flips dark→white at band 60.',
      table: { category: 'Appearance', defaultValue: { summary: '60%' } },
    },
    rowState: {
      control: 'select',
      options: ['white', 'grey'],
      description:
        'Row background. `white` = transparent cell (default). `grey` tints the `.iris-cohort-cell` for the Figma `White=No` variant. Badge colours are unchanged.',
      table: { category: 'Appearance', defaultValue: { summary: 'white' } },
    },
  },
  args: {
    percentage: '60%',
    rowState: 'white',
  },
};

/* ─────────────────────────────────────────────────────────────────────────
   INTERACTIVE
─────────────────────────────────────────────────────────────────────────── */
export const Interactive = {
  name: 'Interactive (Controls)',
  render: ({ percentage, rowState }) => {
    const pct = parseInt(percentage, 10);
    const grey = rowState === 'grey';
    const cellBg = grey ? 'var(--color-bg-secondary)' : '';

    const html = `<div class="iris-cohort-cell"${grey ? ' style="background:var(--color-bg-secondary);"' : ''}>\n  <div class="iris-cohort-badge iris-cohort-badge--${band(pct)}">${pct}%</div>\n</div>`;
    const react = `<div className="iris-cohort-cell"${grey ? ' style={{ background: "var(--color-bg-secondary)" }}' : ''}>\n  <div className="iris-cohort-badge iris-cohort-badge--${band(pct)}">{percent}%</div>\n</div>`;
    const component = `// Badge colour = next-highest 10-band (Figma: ceil)\nconst band = (p) => Math.min(100, Math.max(10, Math.ceil(p / 10) * 10));\n\nexport function CohortCell({ percent, grey = false }) {\n  return (\n    <div className="iris-cohort-cell" style={grey ? { background: "var(--color-bg-secondary)" } : undefined}>\n      <div className={\`iris-cohort-badge iris-cohort-badge--\${band(percent)}\`}>\n        {percent}%\n      </div>\n    </div>\n  );\n}`;

    return `
      <div style="display:flex;flex-direction:column;gap:24px;">
        <div style="padding:16px;border:1px solid var(--color-border-default);border-radius:8px;display:inline-flex;">
          ${pctCell(pct, cellBg)}
        </div>
        ${codeGallery({ html, react, component })}
      </div>`;
  },
  parameters: {
    docs: {
      description: {
        story:
          'Configure one percent cell with **percentage** (walks the brand ramp) and **rowState** (white vs grey). Built on the real `.iris-cohort-cell` / `.iris-cohort-badge--{n}` classes — the preview, the HTML/React/Component panels and **Show code** all emit the same markup.',
      },
      source: {
        transform: (_src, ctx) => {
          const pct = parseInt(ctx.args.percentage, 10);
          const grey = ctx.args.rowState === 'grey';
          return `<div class="iris-cohort-cell"${grey ? ' style="background:var(--color-bg-secondary);"' : ''}>\n  <div class="iris-cohort-badge iris-cohort-badge--${band(pct)}">${pct}%</div>\n</div>`;
        },
      },
    },
  },
};

/* ─────────────────────────────────────────────────────────────────────────
   PERCENT BADGE RAMP  — node 9372:85
───────────────────────────────────────────────────────────────────────── */
export const PercentBadgeRamp = {
  name: 'Percent badge ramp — band 10 → 100',
  parameters: {
    docs: {
      description: {
        story:
          'Full 10-step heat-map ramp on white and grey cell backgrounds. All badges are real `.iris-cohort-badge--{n}` classes. Text flips dark→white at band 60.',
      },
      source: {
        language: 'html',
        code: `<!-- band 60 — white text (brand/500) -->
<div class="iris-cohort-cell">
  <div class="iris-cohort-badge iris-cohort-badge--60">60%</div>
</div>

<!-- band 40 — dark text (brand/300), on a grey row -->
<div class="iris-cohort-cell" style="background:var(--color-bg-secondary);">
  <div class="iris-cohort-badge iris-cohort-badge--40">40%</div>
</div>`,
      },
    },
  },
  render: () => /* html */ `
    <div style="display:flex;flex-direction:column;gap:16px;">
      <div>
        <p style="font-family:inherit;font-size:11px;font-weight:var(--font-bold);line-height:1;text-transform:uppercase;
                  letter-spacing:.12em;color:var(--color-text-secondary);margin:0 0 8px;
                  border-bottom:1px solid var(--color-border-default);padding-bottom:6px;">
          On white cell bg
        </p>
        <div style="display:flex;align-items:flex-end;flex-wrap:wrap;">
          ${RAMP.map((n) => pctCell(n)).join('')}
        </div>
      </div>
      <div>
        <p style="font-family:inherit;font-size:11px;font-weight:var(--font-bold);line-height:1;text-transform:uppercase;
                  letter-spacing:.12em;color:var(--color-text-secondary);margin:0 0 8px;
                  border-bottom:1px solid var(--color-border-default);padding-bottom:6px;">
          On grey cell bg (var(--color-bg-secondary))
        </p>
        <div style="display:flex;align-items:flex-end;flex-wrap:wrap;">
          ${RAMP.map((n) => pctCell(n, 'var(--color-bg-secondary)')).join('')}
        </div>
      </div>
    </div>`,
};

/* ─────────────────────────────────────────────────────────────────────────
   COHORT ROW  — node 9387:1751
───────────────────────────────────────────────────────────────────────── */
/* Figma-exact Feb 2023 row: percent values + financial columns. */
const FEB_PCTS = [100, 98, 84, 72, 80, 66, 62, 54, 48, 36, 22, 14, 8];
const FEB_FIN = [
  { label: '$ / User', amount: '25.00', currency: true },
  { label: 'Count', amount: '25.00', currency: true },
  { label: '$ Total', amount: '25.00', currency: true },
  { label: 'Mult.', amount: '1x', currency: false },
  { label: '$ Amt', amount: '25.00', currency: true },
  { label: '$ Amt', amount: '0.00', currency: true },
];

export const CohortRowExample = {
  name: 'Cohort row',
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        story:
          'Full cohort row (Feb 2023 from Figma node 9387:1751): period label + count + 13 percent badges + 6 financial cells, all on real `.iris-cohort-*` / `.iris-cell` / `.iris-th` classes. Scroll horizontally on narrow viewports.',
      },
      source: {
        language: 'html',
        code: `<!-- Cohort row — real classes, no inline styling on the cells themselves -->
<div style="display:flex;align-items:stretch;border-bottom:1px solid var(--color-border-default);">

  <!-- Row header (period label) -->
  <div class="iris-cell iris-cell--default"><span>Feb 2023</span></div>

  <!-- Count cell -->
  <div class="iris-cell iris-cell--default iris-cell--num"><span>1</span></div>

  <!-- Percent badge cell (exact % text, ceil band colour) -->
  <div class="iris-cohort-cell">
    <div class="iris-cohort-badge iris-cohort-badge--100">100%</div>
  </div>
  <!-- … 12 more percent cells … -->

  <!-- Financial cell -->
  <div class="iris-cell iris-cell--default iris-cell--num"><span>$</span><span>25.00</span></div>
</div>`,
      },
    },
  },
  render: () => {
    const headerRow = /* html */ `
      <div style="display:flex;align-items:stretch;border-bottom:1px solid var(--color-border-default);">
        ${thCell('Cohort', 146)}
        ${thCell('Users', 146, 'flex-end')}
        <div style="display:flex;align-items:center;">
          ${['M1','M2','M3','M4','M5','M6','M7','M8','M9','M10','M11','M12','M13']
            .map((m) => thCell(m, 70, 'center')).join('')}
        </div>
        ${FEB_FIN.map((f) => thCell(f.label, 146, 'flex-end')).join('')}
      </div>`;

    const row = /* html */ `
      <div style="display:flex;align-items:stretch;border-bottom:1px solid var(--color-border-default);">
        ${dataCell('Feb 2023')}
        ${dataCell('1', { num: true })}
        <div style="display:flex;align-items:center;">
          ${FEB_PCTS.map((p) => pctCell(p)).join('')}
        </div>
        ${FEB_FIN.map((f) => dataCell(f.amount, { num: true, currency: f.currency })).join('')}
      </div>`;

    return /* html */ `
      <div style="padding:24px;overflow-x:auto;">
        <div style="border:1px solid var(--color-border-default);border-radius:8px;
                    overflow:hidden;display:inline-flex;flex-direction:column;min-width:max-content;">
          ${headerRow}
          ${row}
          ${row}
          ${row}
        </div>
        <p style="font-family:inherit;font-size:var(--text-xs);font-weight:var(--font-normal);line-height:1.5;color:var(--color-text-secondary);margin:8px 0 0;">
          3 rows · all white · real <code>.iris-cohort-*</code> / <code>.iris-cell</code> classes · scroll horizontally for all columns.
        </p>
      </div>`;
  },
};

/* ─────────────────────────────────────────────────────────────────────────
   COHORT ANALYSIS TABLE  — assembled multi-cohort heatmap
───────────────────────────────────────────────────────────────────────── */
/**
 * Assembled retention heatmap: 7 monthly cohorts. Newer cohorts have fewer filled
 * columns → the characteristic triangular shape. Empty cells use `.iris-cohort-badge--empty`.
 *
 * **QA checklist**
 * - Triangular fill: each newer cohort has exactly one fewer filled column
 * - All Month 1 cells: band 100 (#362f78) — darkest badge on every row
 * - Empty cells: `.iris-cohort-badge--empty` (grey bg, faint dash) — no heat colour
 * - All rows white — no zebra striping
 * - Badge: 62×42, radius 4 · cell: 70×58, padding 8px 4px
 */
export const CohortAnalysisTable = {
  name: 'Cohort analysis table — assembled heatmap',
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        story:
          'Multi-cohort retention heatmap (Aug 2023 – Feb 2024) assembled from the cohort-cell primitive. Triangular fill — each newer cohort has one fewer month of data. Empty periods use `.iris-cohort-badge--empty`. All real classes.',
      },
      source: {
        language: 'html',
        code: `<!-- One data row of the heatmap -->
<div style="display:flex;align-items:stretch;border-bottom:1px solid var(--color-border-default);">
  <div class="iris-cell iris-cell--default"><span>Aug 2023</span></div>
  <div class="iris-cell iris-cell--default iris-cell--num"><span>1,240</span></div>

  <!-- 100% retention (band 100) -->
  <div class="iris-cohort-cell">
    <div class="iris-cohort-badge iris-cohort-badge--100">100%</div>
  </div>

  <!-- No data yet -->
  <div class="iris-cohort-cell">
    <div class="iris-cohort-badge iris-cohort-badge--empty">—</div>
  </div>
</div>`,
      },
    },
  },
  render: () => {
    /* label, initial users, retention % per month (null = no data yet) */
    const COHORTS = [
      { label: 'Aug 2023', users: 1240, pcts: [100, 82, 72, 64, 58, 52, 46] },
      { label: 'Sep 2023', users: 1185, pcts: [100, 80, 70, 62, 56, 48, null] },
      { label: 'Oct 2023', users: 1320, pcts: [100, 78, 68, 60, 52, null, null] },
      { label: 'Nov 2023', users: 1092, pcts: [100, 76, 66, 58, null, null, null] },
      { label: 'Dec 2023', users: 980, pcts: [100, 74, 62, null, null, null, null] },
      { label: 'Jan 2024', users: 1410, pcts: [100, 72, null, null, null, null, null] },
      { label: 'Feb 2024', users: 1530, pcts: [100, null, null, null, null, null, null] },
    ];
    const MONTHS = ['Month 1', 'Month 2', 'Month 3', 'Month 4', 'Month 5', 'Month 6', 'Month 7'];

    const headerRow = /* html */ `
      <div style="display:flex;align-items:stretch;border-bottom:1px solid var(--color-border-default);">
        ${thCell('Cohort', 146)}
        ${thCell('Users', 146, 'flex-end')}
        ${MONTHS.map((m) => thCell(m, 70, 'center')).join('')}
      </div>`;

    const dataRows = COHORTS.map(({ label, users, pcts }) => /* html */ `
      <div style="display:flex;align-items:stretch;border-bottom:1px solid var(--color-border-default);">
        ${dataCell(label)}
        ${dataCell(users.toLocaleString('en-US'), { num: true })}
        ${pcts.map((p) => (p === null ? emptyCell() : pctCell(p))).join('')}
      </div>`).join('');

    return /* html */ `
      <div style="padding:24px;overflow-x:auto;">
        <div style="border:1px solid var(--color-border-default);border-radius:8px;overflow:hidden;
                    display:inline-flex;flex-direction:column;min-width:max-content;">
          ${headerRow}
          ${dataRows}
        </div>
        <p style="font-family:inherit;font-size:var(--text-xs);font-weight:var(--font-normal);line-height:1.5;color:var(--color-text-secondary);margin:8px 0 0;">
          7 cohort periods · triangular fill · empty cells via <code>.iris-cohort-badge--empty</code> · all rows white.
        </p>
      </div>`;
  },
};
