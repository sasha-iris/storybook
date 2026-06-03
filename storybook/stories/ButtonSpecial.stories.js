/**
 * Iris Library — Specialised Utility Buttons
 *
 * Source: Figma › Iris Library › ---- Buttons page
 * Frames:
 *   - ChartButton  (node 9705:152804) — compact icon trigger in chart toolbars
 *   - TableButton  (node 9287:163857) — icon action button in table row cells
 *
 * ─── Chart Button (node 9705:152804) ─────────────────────────────
 * 24×24px container, 4px padding, border-radius 6px (note: 9px on hover in Figma).
 * Uses an arrow-right icon (16px). No border, no shadow in default state.
 * States: Default · Hover (bg var(--color-bg-secondary)) · Disabled (icon fades to gray/300 #D1D5DB).
 *
 * Design specs:
 * - Size: 24×24px outer, p=4px, border-radius 6px (hover: 9px in Figma — approximated as 6px)
 * - Icon: 16px arrow-right
 * - Default: transparent bg, no border, icon = dark gray
 * - Hover: bg = var(--color-bg-secondary) (--color-bg-tertiary)
 * - Disabled: icon color = #D1D5DB (gray/300), no pointer events
 *
 * ─── Table Button (node 9287:163857) ─────────────────────────────
 * 28×28px container, 8px padding, border-radius 6px.
 * Uses an arrow-right icon (12px). Has border + shadow in all states.
 * States: Default · Hover (darker shadow) · Disabled (bg var(--color-bg-secondary), icon gray/300).
 *
 * Design specs:
 * - Size: 28×28px outer, p=8px, border-radius 6px
 * - Border: 1px solid var(--color-border-default) (--color-border-base)
 * - Shadow default: shadow-sm (0 1px 3px rgba(0,0,0,.1), 0 1px 2px -1px rgba(0,0,0,.1))
 * - Hover: bg = var(--color-bg-secondary), shadow-lg (0 10px 15px -3px rgba(0,0,0,.1), 0 4px 6px rgba(0,0,0,.05))
 * - Disabled: bg = var(--color-bg-secondary), no shadow, icon = gray/300
 * - Icon: 12px arrow-right
 *
 * ## QA notes (Chart Button)
 * - No visible border or shadow in Default/Hover state — transparent until hovered
 * - Hover bg = var(--color-bg-secondary), NOT a border color change
 * - Disabled icon must use gray/300 (#D1D5DB), not opacity trick
 *
 * ## QA notes (Table Button)
 * - Shadow is always present (default state). Hover amplifies it.
 * - Disabled drops the shadow entirely and uses bg=gray/100
 * - Icon is smaller (12px) than chart button's icon (16px)
 */

export default {
  title: 'Iris Library/Button/Special',
  tags: ['autodocs', 'stable'],
  parameters: {
    layout: 'padded',
    backgrounds: { default: 'light' },
    docs: {
      description: {
        component: `
Two compact utility button patterns used inside chart toolbars and data tables.

**Chart button** — \`.btn-chart\` — 24×24px, transparent bg, no border, icon-only
**Table button** — \`.btn-table\` — 28×28px, white bg, border + shadow, icon-only

\`\`\`html
<!-- Chart button -->
<button class="btn-chart" aria-label="Navigate">
  <!-- 16px arrow-right icon -->
</button>

<!-- Table button -->
<button class="btn-table" aria-label="Navigate">
  <!-- 12px arrow-right icon -->
</button>
\`\`\`

These are NOT general-purpose buttons — purpose-built for dense UI contexts.
      `,
      },
    },
  },
  argTypes: {
    // ── Appearance ───────────────────────────────────────────
    variant: {
      control: 'select',
      options: ['chart', 'table'],
      description: 'Button type. `chart`: 24×24px, transparent bg, no border. `table`: 28×28px, white bg, border + shadow.',
      table: { category: 'Appearance', defaultValue: { summary: 'chart' } },
    },
    // ── State ────────────────────────────────────────────────
    state: {
      control: 'select',
      options: ['default', 'hover', 'disabled'],
      description: 'Render state. Hover and disabled are simulated via inline styles (not real CSS :hover).',
      table: { category: 'State', defaultValue: { summary: 'default' } },
    },
  },
  args: {
    variant: 'chart',
    state: 'default',
  },
};

/* ── Helpers ──────────────────────────────────────────────── */

const ARROW_RIGHT = (size = 16) => `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
  style="width:${size}px;height:${size}px;" aria-hidden="true">
  <path fill-rule="evenodd"
    d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414
    -1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
    clip-rule="evenodd"/>
</svg>`;

const chartBtn = ({ state = 'default' } = {}) => {
  const stateStyle = state === 'hover'
    ? 'background:var(--color-bg-tertiary,var(--color-bg-secondary));border-radius:9px;'
    : '';
  const dis = state === 'disabled' ? ' disabled' : '';
  return `<button class="btn-chart"${dis} aria-label="Navigate" style="${stateStyle}">${ARROW_RIGHT(16)}</button>`;
};

const tableBtn = ({ state = 'default' } = {}) => {
  const stateStyle = state === 'hover'
    ? 'background:var(--color-bg-muted);box-shadow:0 10px 15px -3px rgba(0,0,0,.1),0 4px 6px rgba(0,0,0,.05);'
    : '';
  const dis = state === 'disabled' ? ' disabled' : '';
  return `<button class="btn-table"${dis} aria-label="Navigate" style="${stateStyle}">${ARROW_RIGHT(12)}</button>`;
};

/* ── Stories ─────────────────────────────────────────────── */

export const Interactive = {
    name: 'Interactive (Controls)',
  render: ({ variant, state }) => {
    const htmlCode = `<button class="btn-${variant}" aria-label="Navigate"${state === 'disabled' ? ' disabled' : ''}>\n  <svg width="${variant === 'chart' ? '16' : '12'}" height="${variant === 'chart' ? '16' : '12'}" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M5 12h14M12 5l7 7-7 7"/></svg>\n</button>`;

    const reactCode = `<button\n  className="btn-${variant}"\n  onClick={onClick}\n  disabled={state === 'disabled'}\n  aria-label="Navigate"\n>\n  <svg width="${variant === 'chart' ? '16' : '12'}" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"/></svg>\n</button>`;

    const componentCode = `export function SpecialButton({ variant = 'chart', disabled = false, onClick }) {\n  const size = variant === 'chart' ? 16 : 12;\n  return (\n    <button\n      className={\`btn-\${variant}\`}\n      onClick={onClick}\n      disabled={disabled}\n      aria-label="Navigate"\n    >\n      <svg width={size} height={size} viewBox="0 0 24 24">\n        <path d="M5 12h14M12 5l7 7-7 7" />\n      </svg>\n    </button>\n  );\n}`;

    const htmlEscaped = htmlCode.replace(/</g, '&lt;').replace(/>/g, '&gt;');
    const reactEscaped = reactCode.replace(/</g, '&lt;').replace(/>/g, '&gt;');
    const componentEscaped = componentCode.replace(/</g, '&lt;').replace(/>/g, '&gt;');

    let preview = variant === 'chart' ? chartBtn({ state }) : tableBtn({ state });

    return `
      <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:40px;align-items:start;">
        <div style="padding:20px;border:1px solid var(--color-border-default);border-radius:8px;">${preview}</div>
        <div style="display:flex;flex-direction:column;gap:24px;">
          <div style="padding:20px;border:1px solid var(--color-border-default);border-radius:8px;">
            <div style="font-weight:600;font-size:12px;color:var(--color-text-secondary);margin-bottom:12px;text-transform:uppercase;">HTML</div>
            <div style="background:#f9fafb;padding:12px;border-radius:6px;margin-bottom:12px;overflow:auto;">
              <pre style="margin:0;font-family:monospace;font-size:13px;white-space:pre-wrap;"><code>${htmlEscaped}</code></pre>
            </div>
            <button data-copy="${htmlCode.split('"').join('&quot;')}" class="storybook-copy-btn" style="padding:8px 12px;background:var(--color-bg-secondary);border:1px solid #d1d5db;border-radius:4px;cursor:pointer;font-size:12px;display:flex;align-items:center;gap:6px;">
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="2" y="2" width="8" height="8" rx="1"/><path d="M6 14H12C13.1046 14 14 13.1046 14 12V6"/></svg>Copy
            </button>
          </div>
          <div style="padding:20px;border:1px solid var(--color-border-default);border-radius:8px;">
            <div style="font-weight:600;font-size:12px;color:var(--color-text-secondary);margin-bottom:12px;text-transform:uppercase;">React</div>
            <div style="background:#f9fafb;padding:12px;border-radius:6px;margin-bottom:12px;overflow:auto;">
              <pre style="margin:0;font-family:monospace;font-size:13px;white-space:pre-wrap;"><code>${reactEscaped}</code></pre>
            </div>
            <button data-copy="${reactCode.split('"').join('&quot;')}" class="storybook-copy-btn" style="padding:8px 12px;background:var(--color-bg-secondary);border:1px solid #d1d5db;border-radius:4px;cursor:pointer;font-size:12px;display:flex;align-items:center;gap:6px;">
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="2" y="2" width="8" height="8" rx="1"/><path d="M6 14H12C13.1046 14 14 13.1046 14 12V6"/></svg>Copy
            </button>
          </div>
          <div style="padding:20px;border:1px solid var(--color-border-default);border-radius:8px;">
            <div style="font-weight:600;font-size:12px;color:var(--color-text-secondary);margin-bottom:12px;text-transform:uppercase;">Component (With Events)</div>
            <div style="background:#f9fafb;padding:12px;border-radius:6px;margin-bottom:12px;overflow:auto;">
              <pre style="margin:0;font-family:monospace;font-size:13px;white-space:pre-wrap;"><code>${componentEscaped}</code></pre>
            </div>
            <button data-copy="${componentCode.split('"').join('&quot;')}" class="storybook-copy-btn" style="padding:8px 12px;background:var(--color-bg-secondary);border:1px solid #d1d5db;border-radius:4px;cursor:pointer;font-size:12px;display:flex;align-items:center;gap:6px;">
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
            this.style.background = '#dcfce7';
            this.style.borderColor = '#bbf7d0';
            setTimeout(() => {
              this.innerHTML = originalText;
              this.style.background = 'var(--color-bg-secondary)';
              this.style.borderColor = '#d1d5db';
            }, 2000);
          });
        });
      </script>
    `;
  },
  parameters: {
    docs: {
      description: {
        story: 'Use **variant** to switch between chart and table button. Use **state** to simulate default / hover / disabled.',
      },
    },
  },
};

/**
 * Chart button — switch between states using the `state` control.
 * QA: Default = transparent bg, no border. Hover = bg var(--color-bg-secondary). Disabled = icon #D1D5DB.
 */
export const ChartButtonStates = {
    name: 'Chart Button — states',
  args: { state: 'default' },
  parameters: {
    controls: { include: ['state'] },
    docs: {
      description: {
        story: `
Chart button (node 9705:152804) — 24×24px, transparent bg. Use **state** control to switch between Default / Hover / Disabled.

| State    | BG           | Icon color |
|---------|--------------|------------|
| Default  | transparent  | var(--color-text-primary)    |
| Hover    | var(--color-bg-secondary)      | var(--color-text-primary)    |
| Disabled | transparent  | #D1D5DB    |
        `,
      },
      source: {
        code: `<button class="btn-chart" aria-label="Navigate">
  <!-- 16px arrow-right icon -->
</button>`,
        language: 'html',
      },
    },
  },
  render: ({ state }) => chartBtn({ state }),
};

/**
 * Chart button — all 3 states side by side, simulated toolbar context.
 * QA: No border, no bg in default. Hover fills bg only. Disabled icon = gray/300.
 */
export const ChartButtonToolbar = {
    name: 'Chart Button — toolbar context',
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story: 'All 3 states shown in a simulated chart toolbar wrapper.',
      },
    },
  },
  render: () => `
    <div style="display:inline-flex;border:1px solid var(--color-border-default);border-radius:8px;
                padding:4px;gap:2px;background:var(--color-bg-surface);">
      <button class="btn-chart" aria-label="Previous"
        style="transform:scaleX(-1);">${ARROW_RIGHT(16)}</button>
      <button class="btn-chart" style="background:var(--color-bg-tertiary,var(--color-bg-secondary));border-radius:9px;"
        aria-label="Next (hovered)">${ARROW_RIGHT(16)}</button>
      <button class="btn-chart" disabled aria-label="Disabled">${ARROW_RIGHT(16)}</button>
    </div>
    <p style="margin-top:12px;font:11px/1.5 sans-serif;color:var(--color-text-secondary);">
      Default · Hover (simulated) · Disabled — shown in a chart toolbar wrapper
    </p>`,
};

/**
 * Table button — switch between states using the `state` control.
 * QA: Shadow always present in default. Hover = amplified shadow. Disabled = no shadow, bg gray.
 */
export const TableButtonStates = {
    name: 'Table Button — states',
  args: { state: 'default' },
  parameters: {
    controls: { include: ['state'] },
    docs: {
      description: {
        story: `
Table button (node 9287:163857) — 28×28px, always bordered. Use **state** control to switch states.

| State    | BG       | Shadow    | Icon     |
|---------|----------|-----------|----------|
| Default  | var(--color-bg-white)  | shadow-sm | var(--color-text-primary)  |
| Hover    | var(--color-bg-secondary)  | shadow-lg | var(--color-text-primary)  |
| Disabled | var(--color-bg-secondary)  | none      | #D1D5DB  |

QA: Icon is **12px** (smaller than chart button's 16px).
        `,
      },
      source: {
        code: `<button class="btn-table" aria-label="Navigate">
  <!-- 12px arrow-right icon -->
</button>`,
        language: 'html',
      },
    },
  },
  render: ({ state }) => tableBtn({ state }),
};

/**
 * Table button — in a realistic table row context.
 */
export const TableButtonInContext = {
    name: 'Table Button — table row context',
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story: 'Button shown in a realistic data table row to verify sizing and shadow in context.',
      },
    },
  },
  render: () => `
    <table style="border-collapse:collapse;width:100%;max-width:600px;font-size:14px;">
      <thead>
        <tr style="border-bottom:2px solid var(--color-border-default);">
          <th style="text-align:left;padding:8px 12px;color:var(--color-text-secondary);font-weight:500;">Name</th>
          <th style="text-align:left;padding:8px 12px;color:var(--color-text-secondary);font-weight:500;">Status</th>
          <th style="text-align:left;padding:8px 12px;color:var(--color-text-secondary);font-weight:500;">Amount</th>
          <th style="padding:8px 12px;"></th>
        </tr>
      </thead>
      <tbody>
        ${[
          { name:'Alice Martin',   status:'Active',   amount:'$1,240' },
          { name:'Bob Chen',       status:'Inactive', amount:'$890'   },
          { name:'Carol Williams', status:'Active',   amount:'$2,110' },
        ].map(row => `
          <tr style="border-bottom:1px solid var(--color-bg-muted);">
            <td style="padding:12px;">${row.name}</td>
            <td style="padding:12px;">${row.status}</td>
            <td style="padding:12px;">${row.amount}</td>
            <td style="padding:12px;text-align:right;">
              <button class="btn-table" aria-label="View ${row.name}">${ARROW_RIGHT(12)}</button>
            </td>
          </tr>`).join('')}
      </tbody>
    </table>`,
};

/**
 * Both utility button types side-by-side for QA comparison.
 */
export const BothUtilityButtons = {
    name: 'Overview — Chart vs Table button',
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story: `
Both utility button types side-by-side for easy QA comparison.

| Property        | Chart Button | Table Button |
|----------------|-------------|-------------|
| Size            | 24×24px     | 28×28px     |
| Border          | none        | 1px var(--color-border-default) |
| Shadow          | none        | shadow-sm   |
| Border-radius   | 6px         | 6px         |
| Icon size       | 16px        | 12px        |
| Hover bg        | var(--color-bg-secondary)     | var(--color-bg-secondary)     |
| Disabled icon   | #D1D5DB     | #D1D5DB     |
      `,
      },
    },
  },
  render: () => `
    <div style="display:flex;flex-direction:column;gap:24px;">
      <div>
        <p style="font:11px/1 600 sans-serif;text-transform:uppercase;letter-spacing:.1em;
                  color:#9CA3AF;margin:0 0 10px;">Chart Button (node 9705:152804)</p>
        <div style="display:flex;gap:12px;align-items:center;">
          <button class="btn-chart" aria-label="Default">${ARROW_RIGHT(16)}</button>
          <button class="btn-chart" style="background:var(--color-bg-tertiary,var(--color-bg-secondary));"
            aria-label="Hover">${ARROW_RIGHT(16)}</button>
          <button class="btn-chart" disabled aria-label="Disabled">${ARROW_RIGHT(16)}</button>
          <span style="font:11px/1 sans-serif;color:#9CA3AF;">Default · Hover · Disabled</span>
        </div>
      </div>
      <div>
        <p style="font:11px/1 600 sans-serif;text-transform:uppercase;letter-spacing:.1em;
                  color:#9CA3AF;margin:0 0 10px;">Table Button (node 9287:163857)</p>
        <div style="display:flex;gap:12px;align-items:center;">
          <button class="btn-table" aria-label="Default">${ARROW_RIGHT(12)}</button>
          <button class="btn-table" style="background:var(--color-bg-muted);box-shadow:0 10px 15px -3px rgba(0,0,0,.1),0 4px 6px rgba(0,0,0,.05);"
            aria-label="Hover">${ARROW_RIGHT(12)}</button>
          <button class="btn-table" disabled aria-label="Disabled">${ARROW_RIGHT(12)}</button>
          <span style="font:11px/1 sans-serif;color:#9CA3AF;">Default · Hover · Disabled</span>
        </div>
      </div>
    </div>`,
};
