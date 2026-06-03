/**
 * Iris Library — Progress Bar
 * Source: Figma › Iris Library
 * File key: ZKtEULdYKaXe5uQl1J6ijI
 *
 * Figma node IDs:
 *   [Progress Bars] frame          3283:24174
 *   [Progress Bars] component set  (child of 3283:24174)
 *
 * Variants confirmed from Figma:
 *   Color  — Orange | Primary | Green | Purple | Yellow | Pink | Indigo | Dark | Blue
 *   Value  — 25 | 50 | 75 | 100  (Storybook extends to 0–100 via number control)
 *   Text   — Right (always shown)
 *   Bottom helper text — False (label above) | True (label below)
 *
 * Dimensions: track 6px h, border-radius 2px, full-width container
 * Font: Inter 12px weight 500, color #6b7280
 * Track bg: #e5e7eb
 *
 * Fill colors per Figma:
 *   Orange  #ff8a4c · Primary  #5850ec · Green   #31c48d · Purple  #7e3af2
 *   Yellow  #ffdf20 · Pink     #e74694 · Indigo  #5850ec · Dark    #111928 · Blue #1c64f2
 */

export default {
  title: 'Iris Library/Progress Bar',
  tags: ['autodocs', 'stable'],
  parameters: {
    layout: 'padded',
    backgrounds: { default: 'white' },
    docs: {
      description: {
        component: `
**Progress Bar** communicates the completion status of a task or process as a fraction of a total.

**When to use**
- Show upload, export, or processing progress with a known total
- Visualise a metric against a target (e.g. storage used, budget consumed, goal completion)
- Represent a step completion percentage in a multi-step flow

**When NOT to use**
- Do not use a progress bar for indeterminate loading — use a spinner instead
- Do not use for binary pass/fail states — use a Badge or Status indicator
- Do not use when the metric is best compared across items — use a bar chart instead

**Anatomy**
- **Track** — full-width gray background bar (6 px, \`#e5e7eb\`, border-radius 2 px)
- **Fill** — colored foreground bar growing left-to-right, same height and radius as the track
- **Label** — percentage value shown above (default) or below the track as helper text; always right-aligned
        `.trim(),
      },
    },
  },
  argTypes: {
    value: {
      control: { type: 'range', min: 0, max: 100, step: 1 },
      description: 'Current progress value as a percentage (0–100). Maps to the fill bar width.',
      table: {
        category: 'Content',
        defaultValue: { summary: '50' },
      },
    },
    color: {
      control: 'select',
      options: ['primary', 'green', 'orange', 'blue', 'purple', 'indigo', 'pink', 'yellow', 'dark'],
      description: 'Fill color of the progress bar. Maps to Figma Color variant.',
      table: {
        category: 'Appearance',
        defaultValue: { summary: 'primary' },
      },
    },
    labelBelow: {
      control: 'boolean',
      description: 'When true, moves the percentage label below the track as helper text (Figma: Bottom helper text=True).',
      table: {
        category: 'Appearance',
        defaultValue: { summary: 'false' },
      },
    },
  },
  args: {
    value: 50,
    color: 'primary',
    labelBelow: false,
  },
};

/* ── color map (Figma-confirmed) ──────────────────────────────── */

const COLORS = {
  orange:  '#ff8a4c',
  primary: '#5850ec',
  green:   '#31c48d',
  purple:  '#7e3af2',
  yellow:  '#ffdf20',
  pink:    '#e74694',
  indigo:  '#5850ec',
  dark:    '#111928',
  blue:    '#1c64f2',
};

/* ── helpers ────────────────────────────────────────────────────── */

function progressBar({ value = 50, color = 'primary', labelBelow = false } = {}) {
  const fillColor = COLORS[color] ?? COLORS.primary;
  const pct = Math.min(100, Math.max(0, value));

  // .progress provides: overflow:hidden, width:100% — override height/bg/radius for Figma spec
  const track = `
    <div class="progress" style="height:6px;background:var(--color-border-default);border-radius:2px;">
      <div class="progress-bar" style="width:${pct}%;background:${fillColor};border-radius:2px;"></div>
    </div>`;

  const label = `
    <div style="font-size:var(--text-xs);font-weight:var(--font-medium);color:var(--color-text-secondary);text-align:right;line-height:1.5;">${pct}%</div>`;

  return `
    <div style="width:100%;">
      ${labelBelow ? '' : label}
      ${labelBelow ? '' : '<div style="height:6px;"></div>'}
      ${track}
      ${labelBelow ? '<div style="height:6px;"></div>' : ''}
      ${labelBelow ? label : ''}
    </div>`;
}

/* ── stories ────────────────────────────────────────────────────── */

export const Interactive = {
  name: 'Interactive (Controls)',
  render: (args) => {
    const { value, color, labelBelow } = args;
    const fillColor = COLORS[color] ?? COLORS.primary;
    const pct = Math.min(100, Math.max(0, value));
    const labelHtml = `<div style="font-size:var(--text-xs);font-weight:var(--font-medium);color:var(--color-text-secondary);text-align:right;">${pct}%</div>`;

    let htmlCode = '';
    let reactCode = '';

    if (labelBelow) {
      htmlCode = `<div class="progress">
  <div class="progress-bar progress-bar-${color}"></div>
</div>
<div class="progress-label">${pct}%</div>`;
      reactCode = `<div className="progress">
  <div className="progress-bar progress-bar-${color}" />
</div>
<div className="progress-label">${pct}%</div>`;
    } else {
      htmlCode = `<div class="progress-label">${pct}%</div>
<div class="progress">
  <div class="progress-bar progress-bar-${color}"></div>
</div>`;
      reactCode = `<div className="progress-label">${pct}%</div>
<div className="progress">
  <div className="progress-bar progress-bar-${color}" />
</div>`;
    }

    return `
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:40px;align-items:start;">
        <div style="padding:20px;border:1px solid #e5e7eb;border-radius:8px;">
          <div style="max-width:480px;">${progressBar(args)}</div>
        </div>
        <div style="display:flex;flex-direction:column;gap:24px;">
          <div style="padding:20px;border:1px solid #e5e7eb;border-radius:8px;">
            <div style="font-weight:600;font-size:12px;color:#666;margin-bottom:12px;text-transform:uppercase;letter-spacing:0.5px;">HTML</div>
            <div style="background:#f9fafb;padding:12px;border-radius:6px;margin-bottom:12px;overflow:auto;">
              <pre style="margin:0;font-family:monospace;font-size:13px;white-space:pre-wrap;word-break:break-word;"><code>${htmlCode.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</code></pre>
            </div>
            <button onclick="navigator.clipboard.writeText(\`${htmlCode.replace(/`/g, '\\`')}\`)" style="padding:8px 16px;background:#42389d;color:white;border:none;border-radius:6px;cursor:pointer;font-family:inherit;font-size:12px;font-weight:600;">📋 Copy HTML</button>
          </div>
          <div style="padding:20px;border:1px solid #e5e7eb;border-radius:8px;">
            <div style="font-weight:600;font-size:12px;color:#666;margin-bottom:12px;text-transform:uppercase;letter-spacing:0.5px;">React</div>
            <div style="background:#f9fafb;padding:12px;border-radius:6px;margin-bottom:12px;overflow:auto;">
              <pre style="margin:0;font-family:monospace;font-size:13px;white-space:pre-wrap;word-break:break-word;"><code>${reactCode.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</code></pre>
            </div>
            <button onclick="navigator.clipboard.writeText(\`${reactCode.replace(/`/g, '\\`')}\`)" style="padding:8px 16px;background:#42389d;color:white;border:none;border-radius:6px;cursor:pointer;font-family:inherit;font-size:12px;font-weight:600;">📋 Copy React</button>
          </div>
        </div>
      </div>
    `;
  },
  parameters: {
    docs: {
      source: {
        transform: (_src, ctx) => {
          const { value, color, labelBelow } = ctx.args;
          const fillColor = COLORS[color] ?? COLORS.primary;
          const pct = Math.min(100, Math.max(0, value));
          const labelHtml = `<div style="font-size:var(--text-xs);font-weight:var(--font-medium);color:var(--color-text-secondary);text-align:right;">${pct}%</div>`;
          if (labelBelow) {
            return `<div style="width:100%;">
  <div style="position:relative;height:6px;background:var(--color-border-default);border-radius:2px;overflow:hidden;">
    <div style="position:absolute;left:0;top:0;height:100%;width:${pct}%;background:${fillColor};border-radius:2px;"></div>
  </div>
  ${labelHtml}
</div>`;
          }
          return `<div style="width:100%;">
  ${labelHtml}
  <div style="position:relative;height:6px;background:var(--color-border-default);border-radius:2px;overflow:hidden;">
    <div style="position:absolute;left:0;top:0;height:100%;width:${pct}%;background:${fillColor};border-radius:2px;"></div>
  </div>
</div>`;
        },
      },
    },
  },
};

/**
 * All nine fill colors from Figma at 75% value.
 * Use the **Value** slider to see how fill proportions behave across the palette.
 *
 * **✅ Do** — pick a color that maps to the semantic meaning of the metric
 *   (green for health/success, orange/red for warnings, primary for neutral progress).
 * **❌ Don't** — use Yellow (`#ffdf20`) on white without ensuring the track contrast is sufficient
 *   (yellow is low-contrast on light backgrounds; pair it with a dark label or dark container).
 */
export const AllColors = {
  name: 'All colors',
  args: { value: 75 },
  parameters: {
    controls: { include: ['value'] },
    docs: {
      description: {
        story: `
All nine fill colors from Figma (node \`3283:24174\`) at 75%.
Use the **Value** control to see how width scales across the palette.

**✅ Do** — map color to semantic meaning: green for health/success, orange/yellow for warnings, primary for neutral progress.
**❌ Don't** — use Yellow (\`#ffdf20\`) on a white background without sufficient contrast in surrounding text — the bar itself is low-contrast on light surfaces.
        `.trim(),
      },
      source: {
        code: `<!-- Primary -->
<div style="width:100%;">
  <div style="font-size:var(--text-xs);font-weight:var(--font-medium);color:var(--color-text-secondary);text-align:right;">75%</div>
  <div style="position:relative;height:6px;background:var(--color-border-default);border-radius:2px;overflow:hidden;">
    <div style="position:absolute;left:0;top:0;height:100%;width:75%;background:#5850ec;border-radius:2px;"></div>
  </div>
</div>

<!-- Green -->
<div style="width:100%;margin-top:16px;">
  <div style="font-size:var(--text-xs);font-weight:var(--font-medium);color:var(--color-text-secondary);text-align:right;">75%</div>
  <div style="position:relative;height:6px;background:var(--color-border-default);border-radius:2px;overflow:hidden;">
    <div style="position:absolute;left:0;top:0;height:100%;width:75%;background:#31c48d;border-radius:2px;"></div>
  </div>
</div>

<!-- Orange -->
<div style="width:100%;margin-top:16px;">
  <div style="font-size:var(--text-xs);font-weight:var(--font-medium);color:var(--color-text-secondary);text-align:right;">75%</div>
  <div style="position:relative;height:6px;background:var(--color-border-default);border-radius:2px;overflow:hidden;">
    <div style="position:absolute;left:0;top:0;height:100%;width:75%;background:#ff8a4c;border-radius:2px;"></div>
  </div>
</div>`,
        language: 'html',
      },
    },
  },
  render: ({ value }) => `
    <div style="max-width:480px;display:flex;flex-direction:column;gap:20px;">
      ${Object.entries(COLORS).map(([name, hex]) => `
        <div>
          <div style="font-family:ui-monospace,monospace;font-size:10px;color:#9ca3af;margin-bottom:8px;">${name} — ${hex}</div>
          ${progressBar({ value, color: name })}
        </div>
      `).join('')}
    </div>`,
};

/**
 * The four Figma value breakpoints (25 / 50 / 75 / 100) for the Primary color.
 * Use the **Color** control to preview a different fill color across all four steps.
 *
 * **✅ Do** — always set `aria-valuenow`, `aria-valuemin`, `aria-valuemax` on the `<progress>` or
 *   role="progressbar" element in production — the visual label alone is not enough for screen readers.
 * **❌ Don't** — hardcode widths in px; use `%` so the bar adapts to its container.
 */
export const AllValues = {
  name: 'All values (25 / 50 / 75 / 100)',
  args: { color: 'primary' },
  parameters: {
    controls: { include: ['color'] },
    docs: {
      description: {
        story: `
The four value breakpoints from Figma (Value=25/50/75/100) using Primary color.
Use the **Color** control to preview a different fill across all steps.

**✅ Do** — set \`aria-valuenow\`, \`aria-valuemin\`, \`aria-valuemax\` on \`role="progressbar"\` in production.
**❌ Don't** — hardcode widths in px; use \`%\` so the bar adapts to its container width.
        `.trim(),
      },
      source: {
        code: `<div role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"
  style="width:100%;">
  <div style="font-size:var(--text-xs);font-weight:var(--font-medium);color:var(--color-text-secondary);text-align:right;">75%</div>
  <div style="position:relative;height:6px;background:var(--color-border-default);border-radius:2px;overflow:hidden;">
    <div style="position:absolute;left:0;top:0;height:100%;width:75%;background:#5850ec;border-radius:2px;"></div>
  </div>
</div>`,
        language: 'html',
      },
    },
  },
  render: ({ color }) => `
    <div style="max-width:480px;display:flex;flex-direction:column;gap:20px;">
      ${[25, 50, 75, 100].map(v => progressBar({ value: v, color })).join('')}
    </div>`,
};

/**
 * `Bottom helper text=True` from Figma: the percentage label appears below the track,
 * useful when a top label would crowd the layout (e.g. inside a compact card or table row).
 *
 * **✅ Do** — use the bottom label variant when the bar is inside a dense layout where
 *   top-label spacing is unavailable.
 * **❌ Don't** — show both a top label and a bottom helper text simultaneously — pick one position.
 */
export const LabelBelow = {
  name: 'Label below (helper text)',
  args: { value: 75 },
  parameters: {
    controls: { include: ['value'] },
    docs: {
      description: {
        story: `
\`Bottom helper text=True\` from Figma: the percentage label appears **below** the track.
Use in compact layouts (cards, table rows) where space above the track is unavailable.

**✅ Do** — use the bottom label in dense contexts (card footers, table cells).
**❌ Don't** — show both a top and a bottom label on the same bar — pick one position.
        `.trim(),
      },
      source: {
        code: `<div style="width:100%;">
  <div style="position:relative;height:6px;background:var(--color-border-default);border-radius:2px;overflow:hidden;">
    <div style="position:absolute;left:0;top:0;height:100%;width:75%;background:#5850ec;border-radius:2px;"></div>
  </div>
  <div style="font-size:var(--text-xs);font-weight:var(--font-medium);color:var(--color-text-secondary);text-align:right;margin-top:6px;">75%</div>
</div>`,
        language: 'html',
      },
    },
  },
  render: ({ value }) => `
    <div style="max-width:480px;display:flex;flex-direction:column;gap:20px;">
      ${['primary', 'green', 'orange', 'blue'].map(c => progressBar({ value, color: c, labelBelow: true })).join('')}
    </div>`,
};

/**
 * A realistic usage example: multiple progress bars in a card-like container,
 * as seen in dashboards tracking resource consumption or project milestones.
 */
export const InContext = {
  name: 'In context — dashboard card',
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story: `
Realistic example: multiple progress bars inside a dashboard card tracking resource usage across projects.
This shows how bars at different values and colors sit together with labels and context text.
        `.trim(),
      },
      source: {
        code: `<div style="background:var(--color-bg-surface);border:1px solid var(--color-border-default);border-radius:12px;padding:24px;max-width:480px;">
  <h4 style="font-size:var(--text-sm);font-weight:var(--font-semibold);color:#111928;margin:0 0 20px;">Resource usage</h4>

  <div style="display:flex;flex-direction:column;gap:20px;">
    <!-- Storage -->
    <div>
      <div style="display:flex;justify-content:space-between;font-size:var(--text-xs);color:var(--color-text-secondary);margin-bottom:6px;">
        <span>Storage</span><span>82%</span>
      </div>
      <div style="position:relative;height:6px;background:var(--color-border-default);border-radius:2px;overflow:hidden;">
        <div style="position:absolute;left:0;top:0;height:100%;width:82%;background:#ff8a4c;border-radius:2px;"></div>
      </div>
    </div>

    <!-- API quota -->
    <div>
      <div style="display:flex;justify-content:space-between;font-size:var(--text-xs);color:var(--color-text-secondary);margin-bottom:6px;">
        <span>API quota</span><span>45%</span>
      </div>
      <div style="position:relative;height:6px;background:var(--color-border-default);border-radius:2px;overflow:hidden;">
        <div style="position:absolute;left:0;top:0;height:100%;width:45%;background:#5850ec;border-radius:2px;"></div>
      </div>
    </div>

    <!-- Compute -->
    <div>
      <div style="display:flex;justify-content:space-between;font-size:var(--text-xs);color:var(--color-text-secondary);margin-bottom:6px;">
        <span>Compute</span><span>23%</span>
      </div>
      <div style="position:relative;height:6px;background:var(--color-border-default);border-radius:2px;overflow:hidden;">
        <div style="position:absolute;left:0;top:0;height:100%;width:23%;background:#31c48d;border-radius:2px;"></div>
      </div>
    </div>
  </div>
</div>`,
        language: 'html',
      },
    },
  },
  render: () => `
    <div style="background:var(--color-bg-surface);border:1px solid var(--color-border-default);border-radius:12px;padding:24px;max-width:480px;">
      <h4 style="font-family:inherit;font-size:var(--text-sm);font-weight:var(--font-semibold);
                 color:#111928;margin:0 0 20px 0;">Resource usage</h4>
      <div style="display:flex;flex-direction:column;gap:20px;">
        ${[
          { label: 'Storage',      value: 82, color: 'orange'  },
          { label: 'API quota',    value: 45, color: 'primary' },
          { label: 'Compute',      value: 23, color: 'green'   },
          { label: 'Bandwidth',    value: 61, color: 'blue'    },
        ].map(({ label, value, color }) => `
          <div>
            <div style="display:flex;justify-content:space-between;
                        font-family:inherit;
                        font-size:var(--text-xs);font-weight:var(--font-medium);color:var(--color-text-secondary);margin-bottom:6px;">
              <span>${label}</span><span>${value}%</span>
            </div>
            <div style="position:relative;height:6px;background:var(--color-border-default);border-radius:2px;overflow:hidden;">
              <div style="position:absolute;left:0;top:0;height:100%;width:${value}%;
                          background:${COLORS[color]};border-radius:2px;"></div>
            </div>
          </div>`).join('')}
      </div>
    </div>`,
};
