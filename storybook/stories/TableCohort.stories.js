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
 * | 60%     | #6875f5   | var(--color-bg-white)  | brand/500   |
 * | 70%     | #5850ec   | var(--color-bg-white)  | brand/600   |
 * | 80%     | #5145cd   | var(--color-bg-white)  | brand/700   |
 * | 90%     | #42389d   | var(--color-bg-white)  | brand/800   |
 * | 100%    | #362f78   | var(--color-bg-white)  | brand/900   |
 *
 * Text flips from #111928 → var(--color-bg-white) at brand/500 (60%+).
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
 * ## Row background
 * All rows: var(--color-bg-white). No zebra striping — the heatmap color ramp provides
 * sufficient visual structure. Zebra conflicts with light heatmap bands.
 */

/* ── Percent ramp definition ────────────────────────────────────────────── */

const PERCENT_RAMP = [
  { pct: '10%',  bg: '#f0f5ff', text: '#111928' },
  { pct: '20%',  bg: '#e5edff', text: '#111928' },
  { pct: '30%',  bg: '#cddbfe', text: '#111928' },
  { pct: '40%',  bg: '#b4c6fc', text: '#111928' },
  { pct: '50%',  bg: '#8da2fb', text: '#111928' },
  { pct: '60%',  bg: '#6875f5', text: 'var(--color-bg-white)' },
  { pct: '70%',  bg: '#5850ec', text: 'var(--color-bg-white)' },
  { pct: '80%',  bg: '#5145cd', text: 'var(--color-bg-white)' },
  { pct: '90%',  bg: '#42389d', text: 'var(--color-bg-white)' },
  { pct: '100%', bg: '#362f78', text: 'var(--color-bg-white)' },
];

/* ── Cell builders ──────────────────────────────────────────────────────── */

/**
 * Percentage badge cell.
 * @param {object} p
 * @param {string} p.pct      – label e.g. "60%"
 * @param {string} p.bg       – badge background from ramp
 * @param {string} p.text     – badge text colour
 * @param {string} p.cellBg   – cell container background (#fff or var(--color-bg-secondary))
 */
const pctCell = ({ pct, bg, text, cellBg = 'var(--color-bg-white)' }) => /* html */`
  <div style="display:flex;flex-direction:column;align-items:flex-start;
              padding:8px 4px;background:${cellBg};
              box-sizing:border-box;flex-shrink:0;">
    <div style="display:flex;align-items:center;justify-content:center;
                width:62px;height:42px;padding:10px;border-radius:4px;
                background:${bg};box-sizing:border-box;">
      <span style="font-family:inherit;font-size:var(--text-xs);font-weight:var(--font-semibold);line-height:1.5;color:${text};
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
  bg = 'var(--color-bg-white)',
  width = 116,
}) => /* html */`
  <div style="display:flex;align-items:center;justify-content:flex-end;gap:4px;
              padding:8px 16px;align-self:stretch;background:${bg};
              width:${width}px;flex-shrink:0;box-sizing:border-box;">
    ${currency ? `<span style="font-family:inherit;font-size:var(--text-sm);font-weight:var(--font-medium);line-height:1.5;color:${textCol};flex-shrink:0;">$</span>` : ''}
    <div style="flex:1 0 0;min-width:1px;">
      <span style="font-family:inherit;font-size:var(--text-sm);font-weight:var(--font-medium);line-height:1.5;color:${textCol};
                   text-align:right;display:block;white-space:nowrap;">${amount}</span>
    </div>
  </div>`;

/* ── Default export ─────────────────────────────────────────────────────── */

export default {
  title: 'Iris Library/Table/Cohort',
  tags: ['autodocs', 'stable'],
  parameters: {
    layout: 'padded',
    backgrounds: { default: 'light' },
    docs: {
      description: {
        component: `**Table / Cohort** — cohort analysis table primitives.

Figma nodes: TableCellPercent \`9372:85\` · CohortRow \`9387:1751\`

**When to use**
- Retention analysis tables where each cell shows a percentage value on a brand heat-map
- Cohort rows in financial dashboards (budget, P&L, subscriber cohorts)

**When NOT to use**
- Standard numeric tables without heatmap semantics → use Table/Cells
- Non-cohort data → use Table/Composed

**Anatomy**
\`[row header] [count cell] [percent badges ×N] [financial cells]\`

### Percentage badge ramp

10-step brand color ramp from brand/50 (\`#f0f5ff\`) to brand/900 (\`#362f78\`).
Text flips from \`#111928\` to \`var(--color-bg-white)\` at 60% (brand/500+).

| Range | Text |
|---|---|
| 10% – 50% | \`#111928\` (dark) |
| 60% – 100% | \`var(--color-bg-white)\` (white) |

### CohortRow

Each row contains left → right:
1. **Row header** — period label (140px, Inter 500 14px)
2. **Count cell** — initial cohort size (116px)
3. **Percent cells** — retention % badges (70px each, badge 62×42px)
4. **Financial cells** — various widths (82–140px)

### Row background

All rows use \`var(--color-bg-white)\`. No zebra striping — the heatmap color ramp provides sufficient
visual structure. Alternating grey rows conflict with the lightest heatmap bands
(\`#f0f5ff\`, \`#e5edff\`) and add visual noise on top of an already color-encoded table.

### Developer notes
- Percent cell container: \`padding:8px 4px\` (not the standard 8px 16px)
- Badge: \`62×42px\`, \`border-radius:4px\`, \`padding:10px\`
- Row height is driven by the badge cells (~58px) — financial cells use \`align-self:stretch\` to match
- Financial cells that are taller than 38px naturally — use flexbox stretching not fixed heights

### QA notes
- Verify smooth color progression: lightest (#f0f5ff) → darkest (#362f78)
- Text contrast at 50% (#8da2fb badge): dark text (#111928) — confirm legibility
- At 60% (#6875f5 badge): flips to white — check no intermediate step is missed
- All rows: white background (var(--color-bg-white)), no zebra striping

See [SETUP.md](https://github.com/sasha-iris/storybook/blob/main/docs/SETUP.md) for complete installation instructions.
`,
      },
    },
  },
  argTypes: {
    // ── Appearance ───────────────────────────────────────────
    percentage: {
      control: 'select',
      options: ['10%', '20%', '30%', '40%', '50%', '60%', '70%', '80%', '90%', '100%'],
      description: 'Retention percentage. Drives badge color from brand/50 (10%) to brand/900 (100%). Text flips from dark to white at 60%.',
      table: { category: 'Appearance', defaultValue: { summary: '60%' } },
    },
    rowState: {
      control: 'select',
      options: ['white'],
      description: 'Row background. Always white (var(--color-bg-white)) — no zebra striping on cohort heatmap tables.',
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
  render: (args) => {
    const h = `<table><tr><td style="padding:8px;"><div style="background:var(--color-border-default);color:var(--color-text-primary);padding:4px 8px;border-radius:4px;">${args.percentage}</div></td></tr></table>`;
    const r = `<table><tr><td><Badge percentage={percentage} variant={rowState} /></td></tr></table>`;
    const c = `export function CohortTable({data}){return(<table>{data.map(r=>(<tr key={r.id}><td>{r.percentage}%</td></tr>))}</table>);}`;

    const htmlEscaped = h.replace(/</g,'&lt;').replace(/>/g,'&gt;');
    const reactEscaped = r.replace(/</g,'&lt;').replace(/>/g,'&gt;');
    const componentEscaped = c.replace(/</g,'&lt;').replace(/>/g,'&gt;');

    const step = PERCENT_RAMP.find(r => r.pct === args.percentage) || PERCENT_RAMP[5];
    const cellBg = args.rowState === 'grey' ? 'var(--color-bg-secondary)' : 'var(--color-bg-white)';

    return `
      <div style="display:flex;flex-direction:column;gap:24px;">
        <div style="padding:16px;border:1px solid var(--color-border-default);border-radius:8px;">
          ${pctCell({ pct: step.pct, bg: step.bg, text: step.text, cellBg })}
        </div>
        <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:16px;align-items:start;">
          <div style="padding:16px;border:1px solid var(--color-border-default);border-radius:8px;">
            <div style="font-weight:600;font-size:12px;color:var(--color-text-secondary);margin-bottom:12px;text-transform:uppercase;letter-spacing:0.5px;">HTML</div>
            <div style="background:var(--color-bg-tertiary);padding:12px;border-radius:6px;margin-bottom:12px;overflow:auto;">
              <pre style="margin:0;font-family:monospace;font-size:13px;white-space:pre-wrap;word-break:break-word;"><code>${htmlEscaped}</code></pre>
            </div>
            <button data-copy="${h.split('"').join('&quot;')}" class="storybook-copy-btn" style="padding:8px 12px;background:var(--color-bg-secondary);color:var(--color-text-primary);border:1px solid var(--color-border-default);border-radius:4px;cursor:pointer;font-family:inherit;font-size:12px;font-weight:500;display:flex;align-items:center;gap:6px;">
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="2" y="2" width="8" height="8" rx="1"/><path d="M6 14H12C13.1046 14 14 13.1046 14 12V6"/></svg>Copy
            </button>
          </div>
          <div style="padding:16px;border:1px solid var(--color-border-default);border-radius:8px;">
            <div style="font-weight:600;font-size:12px;color:var(--color-text-secondary);margin-bottom:12px;text-transform:uppercase;letter-spacing:0.5px;">React</div>
            <div style="background:var(--color-bg-tertiary);padding:12px;border-radius:6px;margin-bottom:12px;overflow:auto;">
              <pre style="margin:0;font-family:monospace;font-size:13px;white-space:pre-wrap;word-break:break-word;"><code>${reactEscaped}</code></pre>
            </div>
            <button data-copy="${r.split('"').join('&quot;')}" class="storybook-copy-btn" style="padding:8px 12px;background:var(--color-bg-secondary);color:var(--color-text-primary);border:1px solid var(--color-border-default);border-radius:4px;cursor:pointer;font-family:inherit;font-size:12px;font-weight:500;display:flex;align-items:center;gap:6px;">
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="2" y="2" width="8" height="8" rx="1"/><path d="M6 14H12C13.1046 14 14 13.1046 14 12V6"/></svg>Copy
            </button>
          </div>
          <div style="padding:16px;border:1px solid var(--color-border-default);border-radius:8px;">
            <div style="font-weight:600;font-size:12px;color:var(--color-text-secondary);margin-bottom:12px;text-transform:uppercase;letter-spacing:0.5px;">Component (With Events)</div>
            <div style="background:var(--color-bg-tertiary);padding:12px;border-radius:6px;margin-bottom:12px;overflow:auto;">
              <pre style="margin:0;font-family:monospace;font-size:13px;white-space:pre-wrap;word-break:break-word;"><code>${componentEscaped}</code></pre>
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
        story: 'Preview a single percent badge. Use **percentage** to walk the brand ramp and **rowState** to switch between white and grey row backgrounds.',
      },
      source: {
        transform: (_src, storyCtx) => {
          const { percentage, rowState } = storyCtx.args;
          const step = PERCENT_RAMP.find(r => r.pct === percentage) || PERCENT_RAMP[5];
          const cellBg = rowState === 'grey' ? 'var(--color-bg-secondary)' : 'var(--color-bg-white)';
          return `<div style="padding:8px 4px;background:${cellBg};box-sizing:border-box;">
  <div style="display:flex;align-items:center;justify-content:center;
              width:62px;height:42px;padding:10px;border-radius:4px;
              background:${step.bg};box-sizing:border-box;">
    <span style="font-family:inherit;font-size:var(--text-xs);font-weight:var(--font-semibold);line-height:1.5;color:${step.text};white-space:nowrap;">
      ${step.pct}
    </span>
  </div>
</div>`;
        },
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
 * - Text flips from #111928 to var(--color-bg-white) at 60%
 * - Badge: 62×42px, border-radius 4px
 * - Cell container: px:4px (tighter than standard data cells)
 * - Grey bg row: badge colours unchanged, only cell container bg = var(--color-bg-secondary)
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
            padding:8px 4px;background:var(--color-bg-surface);box-sizing:border-box;">
  <div style="display:flex;align-items:center;justify-content:center;
              width:62px;height:42px;padding:10px;border-radius:4px;
              background:#6875f5;box-sizing:border-box;">
    <span style="font-family:inherit;font-size:var(--text-xs);font-weight:var(--font-semibold);line-height:1.5;color:#fff;
                 white-space:nowrap;text-align:center;">60%</span>
  </div>
</div>

<!-- 40% badge — dark text (brand/300) -->
<div style="display:flex;flex-direction:column;align-items:flex-start;
            padding:8px 4px;background:var(--color-bg-surface);box-sizing:border-box;">
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
  render: () => /* html */`
    <div style="display:flex;flex-direction:column;gap:16px;">
      <div>
        <p style="font-family:inherit;font-size:11px;font-weight:var(--font-bold);line-height:1;text-transform:uppercase;
                  letter-spacing:.12em;color:var(--color-text-secondary);margin:0 0 8px;
                  border-bottom:1px solid var(--color-border-default);padding-bottom:6px;">
          On white cell bg (#fff)
        </p>
        <div style="display:flex;align-items:flex-end;flex-wrap:wrap;">
          ${PERCENT_RAMP.map(({ pct, bg, text }) =>
            pctCell({ pct, bg, text, cellBg: 'var(--color-bg-white)' })).join('')}
        </div>
      </div>
      <div>
        <p style="font-family:inherit;font-size:11px;font-weight:var(--font-bold);line-height:1;text-transform:uppercase;
                  letter-spacing:.12em;color:var(--color-text-secondary);margin:0 0 8px;
                  border-bottom:1px solid var(--color-border-default);padding-bottom:6px;">
          On grey cell bg (var(--color-bg-secondary))
        </p>
        <div style="display:flex;align-items:flex-end;flex-wrap:wrap;">
          ${PERCENT_RAMP.map(({ pct, bg, text }) =>
            pctCell({ pct, bg, text, cellBg: 'var(--color-bg-secondary)' })).join('')}
        </div>
      </div>
    </div>`,
};

/* ─────────────────────────────────────────────────────────────────────────
   COHORT ROW  — node 9387:1751
───────────────────────────────────────────────────────────────────────── */
/**
 * Complete cohort row with realistic "Feb 2023" data from Figma.
 * All rows are white (var(--color-bg-white)) — no zebra striping.
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
 * - All rows: white background (var(--color-bg-white)), text #111928
 * - Row height driven by badge cells (~58px); financial cells stretch to match
 * - Horizontal scroll on narrow viewports — do not truncate the row
 */
export const CohortRowExample = {
    name: 'Cohort row',
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        story: `Full cohort row (Feb 2023 from Figma). All rows white — no zebra striping.
Scroll horizontally if the viewport is narrow.`,
      },
      source: {
        language: 'html',
        code: `<!-- CohortRow — white row state -->
<div style="display:flex;align-items:stretch;background:var(--color-bg-white);border-bottom:1px solid var(--color-border-default);">

  <!-- Row header (140px) -->
  <div style="display:flex;align-items:center;padding:8px 16px;
              width:140px;flex-shrink:0;box-sizing:border-box;background:var(--color-bg-white);">
    <span style="font-family:inherit;font-size:var(--text-sm);font-weight:var(--font-medium);line-height:1.5;color:#111928;">Feb 2023</span>
  </div>

  <!-- Count cell (116px) -->
  <div style="display:flex;align-items:center;justify-content:flex-end;
              padding:8px 16px;width:116px;flex-shrink:0;box-sizing:border-box;background:var(--color-bg-white);">
    <span style="font-family:inherit;font-size:var(--text-sm);font-weight:var(--font-medium);line-height:1.5;color:#111928;">1</span>
  </div>

  <!-- Percent badge cell (62×42px badge, px:4px container) -->
  <div style="display:flex;flex-direction:column;align-items:flex-start;
              padding:8px 4px;background:var(--color-bg-white);box-sizing:border-box;flex-shrink:0;">
    <div style="display:flex;align-items:center;justify-content:center;
                width:62px;height:42px;padding:10px;border-radius:4px;
                background:#362f78;box-sizing:border-box;">
      <span style="font-family:inherit;font-size:var(--text-xs);font-weight:var(--font-semibold);line-height:1.5;color:var(--color-bg-white);white-space:nowrap;">100%</span>
    </div>
  </div>
  <!-- … more percent cells … -->

  <!-- Financial cell ($ per user, 140px) -->
  <div style="display:flex;align-items:center;justify-content:flex-end;gap:4px;
              padding:8px 16px;width:140px;flex-shrink:0;box-sizing:border-box;background:var(--color-bg-white);">
    <span style="font-family:inherit;font-size:var(--text-sm);font-weight:var(--font-medium);line-height:1.5;color:#111928;flex-shrink:0;">$</span>
    <span style="font-family:inherit;font-size:var(--text-sm);font-weight:var(--font-medium);line-height:1.5;color:#111928;text-align:right;">25.00</span>
  </div>
</div>

<!-- All rows use background:var(--color-bg-white) — no zebra striping -->`,
      },
    },
  },
  render: () => {
    /* Figma-exact percent values for the Feb 2023 row */
    const FEB_PCTS = [
      { pct: '100%', bg: '#362f78', text: 'var(--color-bg-white)' },
      { pct: '98%',  bg: '#362f78', text: 'var(--color-bg-white)' },
      { pct: '84%',  bg: '#42389d', text: 'var(--color-bg-white)' },
      { pct: '72%',  bg: '#5145cd', text: 'var(--color-bg-white)' },
      { pct: '80%',  bg: '#5145cd', text: 'var(--color-bg-white)' },
      { pct: '66%',  bg: '#5850ec', text: 'var(--color-bg-white)' },
      { pct: '62%',  bg: '#5850ec', text: 'var(--color-bg-white)' },
      { pct: '54%',  bg: '#6875f5', text: 'var(--color-bg-white)' },
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

    const cohortRow = () => {
      const rowBg  = 'var(--color-bg-white)';
      const textCol = '#111928';
      return /* html */`
        <div style="display:flex;align-items:stretch;background:${rowBg};
                    border-bottom:1px solid var(--color-border-default);">
          <!-- Row header: period label -->
          <div style="display:flex;align-items:center;justify-content:flex-end;gap:4px;
                      padding:8px 16px;background:${rowBg};width:140px;
                      flex-shrink:0;box-sizing:border-box;">
            <span style="font-family:inherit;font-size:var(--text-sm);font-weight:var(--font-medium);line-height:1.5;color:${textCol};flex:1 0 0;">
              Feb 2023
            </span>
          </div>
          <!-- Count cell -->
          <div style="display:flex;align-items:center;justify-content:flex-end;gap:4px;
                      padding:8px 16px;background:${rowBg};width:116px;
                      flex-shrink:0;box-sizing:border-box;">
            <div style="flex:1 0 0;min-width:1px;">
              <span style="font-family:inherit;font-size:var(--text-sm);font-weight:var(--font-medium);line-height:1.5;color:${textCol};
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
        <div style="border:1px solid var(--color-border-default);border-radius:8px;
                    overflow:hidden;display:inline-flex;flex-direction:column;min-width:max-content;">
          <!-- Column headers row for orientation -->
          <div style="display:flex;align-items:stretch;background:var(--color-bg-default);
                      border-bottom:1px solid var(--color-border-default);">
            <div style="width:140px;flex-shrink:0;padding:8px 16px;box-sizing:border-box;
                        display:flex;align-items:center;">
              <span style="font-family:inherit;font-size:11px;font-weight:var(--font-semibold);line-height:1;text-transform:uppercase;
                           letter-spacing:.08em;color:var(--color-border-light);">Cohort</span>
            </div>
            <div style="width:116px;flex-shrink:0;padding:8px 16px;box-sizing:border-box;
                        display:flex;align-items:center;justify-content:flex-end;">
              <span style="font-family:inherit;font-size:11px;font-weight:var(--font-semibold);line-height:1;text-transform:uppercase;
                           letter-spacing:.08em;color:var(--color-border-light);">Users</span>
            </div>
            <div style="display:flex;align-items:center;padding:0 4px;">
              ${['Month 1','Month 2','Month 3','Month 4','Month 5',
                 'Month 6','Month 7','Month 8','Month 9','Month 10',
                 'Month 11','Month 12','Month 13']
                .map(m => /* html */`
                  <div style="width:70px;flex-shrink:0;padding:8px 4px;box-sizing:border-box;
                              display:flex;align-items:center;justify-content:center;">
                    <span style="font-family:inherit;font-size:10px;font-weight:var(--font-semibold);line-height:1;text-transform:uppercase;
                                 letter-spacing:.06em;color:var(--color-border-light);text-align:center;
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
                <span style="font-family:inherit;font-size:11px;font-weight:var(--font-semibold);line-height:1;text-transform:uppercase;
                             letter-spacing:.08em;color:var(--color-border-light);">${label}</span>
              </div>`).join('')}
          </div>
          ${cohortRow()}
          ${cohortRow()}
          ${cohortRow()}
        </div>
        <p style="font-family:inherit;font-size:var(--text-xs);font-weight:var(--font-normal);line-height:1.5;color:var(--color-border-light);margin:8px 0 0;">
          3 rows shown. All rows white — no zebra. Scroll horizontally to see all columns.
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
 * - Empty cells: var(--color-bg-secondary) badge bg, var(--color-border-default) dash glyph, no color badge
 * - All rows: white bg (var(--color-bg-white)), text #111928 — no zebra striping
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
      source: {
        language: 'html',
        code: `<!-- Cohort analysis table shell -->
<div style="display:inline-flex;flex-direction:column;border:1px solid var(--color-border-default);
            border-radius:8px;overflow:hidden;min-width:max-content;">

  <!-- Header row -->
  <div style="display:flex;align-items:stretch;background:var(--color-bg-default);border-bottom:1px solid var(--color-border-default);">
    <div style="width:140px;padding:8px 16px;box-sizing:border-box;">
      <span style="font-family:inherit;font-size:11px;font-weight:var(--font-semibold);line-height:1;text-transform:uppercase;
                   letter-spacing:.08em;color:var(--color-border-light);">Cohort</span>
    </div>
    <div style="width:116px;padding:8px 16px;box-sizing:border-box;display:flex;justify-content:flex-end;">
      <span style="font-family:inherit;font-size:11px;font-weight:var(--font-semibold);line-height:1;text-transform:uppercase;
                   letter-spacing:.08em;color:var(--color-border-light);">Users</span>
    </div>
    <!-- Month headers (70px each) -->
    <div style="width:70px;padding:8px 4px;box-sizing:border-box;display:flex;justify-content:center;">
      <span style="font-family:inherit;font-size:10px;font-weight:var(--font-semibold);line-height:1;text-transform:uppercase;
                   letter-spacing:.06em;color:var(--color-border-light);">Month 1</span>
    </div>
    <!-- … Month 2 … Month 7 … -->
  </div>

  <!-- Data row — white (even index) -->
  <div style="display:flex;align-items:stretch;background:var(--color-bg-white);border-bottom:1px solid var(--color-border-default);">
    <div style="width:140px;padding:8px 16px;box-sizing:border-box;">
      <span style="font-family:inherit;font-size:var(--text-sm);font-weight:var(--font-medium);line-height:1.5;color:#111928;">Aug 2023</span>
    </div>
    <div style="width:116px;padding:8px 16px;box-sizing:border-box;display:flex;align-items:center;justify-content:flex-end;">
      <span style="font-family:inherit;font-size:var(--text-sm);font-weight:var(--font-medium);line-height:1.5;color:#111928;">1,240</span>
    </div>
    <!-- 100% badge (brand/900) -->
    <div style="padding:8px 4px;background:var(--color-bg-white);box-sizing:border-box;flex-shrink:0;">
      <div style="display:flex;align-items:center;justify-content:center;
                  width:62px;height:42px;border-radius:4px;background:#362f78;">
        <span style="font-family:inherit;font-size:var(--text-xs);font-weight:var(--font-semibold);line-height:1.5;color:var(--color-bg-white);">100%</span>
      </div>
    </div>
    <!-- … remaining months … -->
  </div>

  <!-- All rows: background var(--color-bg-white) — no zebra striping -->

  <!-- Empty cell placeholder (no data yet):
    <div style="padding:8px 4px;background:var(--color-bg-white);">
      <div style="width:62px;height:42px;border-radius:4px;background:var(--color-bg-muted);
                  display:flex;align-items:center;justify-content:center;">
        <span style="font-family:inherit;font-size:var(--text-xs);font-weight:var(--font-medium);line-height:1.5;color:var(--color-border-default);">—</span>
      </div>
    </div>
  -->
</div>`,
      },
    },
  },
  render: () => {
    /* Map a retention percentage to the closest ramp step */
    const PCT_MAP = [
      { min: 95, bg: '#362f78', text: 'var(--color-bg-white)' },
      { min: 85, bg: '#42389d', text: 'var(--color-bg-white)' },
      { min: 75, bg: '#5145cd', text: 'var(--color-bg-white)' },
      { min: 65, bg: '#5850ec', text: 'var(--color-bg-white)' },
      { min: 55, bg: '#6875f5', text: 'var(--color-bg-white)' },
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
                    background:var(--color-bg-muted);box-sizing:border-box;">
          <span style="font-family:inherit;font-size:var(--text-xs);font-weight:var(--font-medium);line-height:1.5;color:var(--color-border-default);">—</span>
        </div>
      </div>`;

    /* Column header row */
    const headerRow = /* html */`
      <div style="display:flex;align-items:stretch;background:var(--color-bg-default);
                  border-bottom:1px solid var(--color-border-default);">
        <div style="width:140px;flex-shrink:0;padding:8px 16px;box-sizing:border-box;
                    display:flex;align-items:center;">
          <span style="font-family:inherit;font-size:11px;font-weight:var(--font-semibold);line-height:1;text-transform:uppercase;
                       letter-spacing:.08em;color:var(--color-border-light);">Cohort</span>
        </div>
        <div style="width:116px;flex-shrink:0;padding:8px 16px;box-sizing:border-box;
                    display:flex;align-items:center;justify-content:flex-end;">
          <span style="font-family:inherit;font-size:11px;font-weight:var(--font-semibold);line-height:1;text-transform:uppercase;
                       letter-spacing:.08em;color:var(--color-border-light);">Users</span>
        </div>
        ${MONTHS.map(m => /* html */`
          <div style="width:70px;flex-shrink:0;padding:8px 4px;box-sizing:border-box;
                      display:flex;align-items:center;justify-content:center;">
            <span style="font-family:inherit;font-size:10px;font-weight:var(--font-semibold);line-height:1;text-transform:uppercase;
                         letter-spacing:.06em;color:var(--color-border-light);text-align:center;
                         white-space:nowrap;">${m}</span>
          </div>`).join('')}
      </div>`;

    /* Data rows */
    const dataRows = COHORTS.map(({ label, users, pcts }, idx) => {
      const rowBg   = 'var(--color-bg-white)';
      const textCol = '#111928';

      return /* html */`
        <div style="display:flex;align-items:stretch;background:${rowBg};
                    border-bottom:1px solid var(--color-border-default);">
          <div style="display:flex;align-items:center;padding:8px 16px;
                      width:140px;flex-shrink:0;box-sizing:border-box;background:${rowBg};">
            <span style="font-family:inherit;font-size:var(--text-sm);font-weight:var(--font-medium);line-height:1.5;color:${textCol};flex:1 0 0;">
              ${label}
            </span>
          </div>
          <div style="display:flex;align-items:center;justify-content:flex-end;
                      padding:8px 16px;width:116px;flex-shrink:0;
                      box-sizing:border-box;background:${rowBg};">
            <span style="font-family:inherit;font-size:var(--text-sm);font-weight:var(--font-medium);line-height:1.5;color:${textCol};
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
        <div style="border:1px solid var(--color-border-default);border-radius:8px;overflow:hidden;
                    display:inline-flex;flex-direction:column;min-width:max-content;">
          ${headerRow}
          ${dataRows}
        </div>
        <p style="font-family:inherit;font-size:var(--text-xs);font-weight:var(--font-normal);line-height:1.5;color:var(--color-border-light);margin:8px 0 0;">
          7 cohort periods · triangular fill · all rows white · scroll horizontally on narrow viewports
        </p>
      </div>`;
  },
};
