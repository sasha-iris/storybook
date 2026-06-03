/**
 * Iris Library — Chip
 *
 * Source: Figma › Iris Library › chip (node 9444:148518)
 * Light mode only.
 *
 * ## Figma variants
 * Color: light · dark · indigo · green · red · orange · teal · blue · purple · pink
 * State: default · hover · disabled
 *
 * ## Size spec (from Figma)
 * Height: 22 px · border-radius: 4px · font: 12px/500
 * Icon slots: 12×12 px (left optional dot · right dismiss ×)
 *
 * ## Color tokens (default bg / text / icon / hover bg / disabled bg / disabled text)
 * light:  var(--color-bg-secondary) / #4a5565 / #6b7280 / var(--color-border-default) / var(--color-bg-secondary) / #99a1af
 * dark:   #4a5565 / var(--color-bg-white) / var(--color-bg-secondary) / var(--color-text-heading) / #d1d5dc / var(--color-bg-white)
 * indigo: #5850ec / var(--color-bg-white) / var(--color-bg-secondary) / #42389d / #b4c6fc / var(--color-bg-white)
 * green:  #009966 / var(--color-bg-white) / var(--color-bg-secondary) / #006045 / #5ee9b5 / var(--color-bg-white)
 * red:    #e7000b / var(--color-bg-white) / var(--color-bg-secondary) / #9f0712 / #ffa2a2 / var(--color-bg-white)
 * orange: #d03801 / var(--color-bg-white) / var(--color-bg-secondary) / #8a2c0d / #fdba8c / var(--color-bg-white)
 * teal:   #009689 / var(--color-bg-white) / var(--color-bg-secondary) / #005f59 / #46ecd5 / var(--color-bg-white)
 * blue:   var(--color-primary) / var(--color-bg-white) / var(--color-bg-secondary) / #193cb8 / #8ec5ff / var(--color-bg-white)
 * purple: #9810fa / var(--color-bg-white) / var(--color-bg-secondary) / #6e11b0 / #dab2ff / var(--color-bg-white)
 * pink:   #e60076 / var(--color-bg-white) / var(--color-bg-secondary) / #a3004c / #fda5d5 / var(--color-bg-white)
 */

const CHIP_COLORS = {
  light:  { bg: 'var(--color-bg-muted)', text: 'var(--color-text-secondary)', icon: 'var(--color-text-secondary)', hover: 'var(--color-border-default)', disabledBg: 'var(--color-bg-muted)', disabledText: 'var(--color-text-disabled)' },
  dark:   { bg: 'var(--color-text-secondary)', text: 'var(--color-bg-surface)', icon: 'var(--color-bg-muted)', hover: 'var(--color-text-heading)', disabledBg: 'var(--color-border-default)', disabledText: 'var(--color-bg-surface)' },
  indigo: { bg: '#5850ec', text: 'var(--color-bg-surface)', icon: 'var(--color-bg-muted)', hover: '#42389d', disabledBg: '#b4c6fc', disabledText: 'var(--color-bg-surface)' },
  green:  { bg: 'var(--color-success)', text: 'var(--color-bg-surface)', icon: 'var(--color-bg-muted)', hover: 'var(--color-success)', disabledBg: 'var(--color-success)', disabledText: 'var(--color-bg-surface)' },
  red:    { bg: 'var(--color-danger)', text: 'var(--color-bg-surface)', icon: 'var(--color-bg-muted)', hover: 'var(--color-danger)', disabledBg: 'var(--color-danger)', disabledText: 'var(--color-bg-surface)' },
  orange: { bg: 'var(--color-warning)', text: 'var(--color-bg-surface)', icon: 'var(--color-bg-muted)', hover: 'var(--color-warning)', disabledBg: 'var(--color-warning)', disabledText: 'var(--color-bg-surface)' },
  teal:   { bg: 'var(--color-info)', text: 'var(--color-bg-surface)', icon: 'var(--color-bg-muted)', hover: 'var(--color-info)', disabledBg: 'var(--color-info)', disabledText: 'var(--color-bg-surface)' },
  blue:   { bg: 'var(--color-primary)', text: 'var(--color-bg-surface)', icon: 'var(--color-bg-muted)', hover: 'var(--color-bg-primary-hover)', disabledBg: 'var(--color-border-focus)', disabledText: 'var(--color-bg-surface)' },
  purple: { bg: '#9810fa', text: 'var(--color-bg-surface)', icon: 'var(--color-bg-muted)', hover: '#6e11b0', disabledBg: '#dab2ff', disabledText: 'var(--color-bg-surface)' },
  pink:   { bg: '#e60076', text: 'var(--color-bg-surface)', icon: 'var(--color-bg-muted)', hover: '#a3004c', disabledBg: '#fda5d5', disabledText: 'var(--color-bg-surface)' },
};

const COLOR_NAMES = Object.keys(CHIP_COLORS);

// Heroicons mini — x-mark (20×20 solid)
const X_PATH = 'M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z';

function chip({ label = 'Label', color = 'light', disabled = false, dot = false, state = 'default' }) {
  const c = CHIP_COLORS[color] ?? CHIP_COLORS.light;
  const bg   = state === 'hover'    ? c.hover
             : state === 'disabled' || disabled ? c.disabledBg
             : c.bg;
  const text = state === 'disabled' || disabled ? c.disabledText : c.text;
  const icon = c.icon;
  const opacity = (state === 'disabled' || disabled) ? 'opacity:0.9;' : '';
  const cursor  = (state === 'disabled' || disabled) ? 'cursor:not-allowed;' : '';

  const dotHtml = dot
    ? `<svg width="12" height="12" viewBox="0 0 12 12" fill="${icon}" aria-hidden="true" style="flex-shrink:0;">
        <circle cx="6" cy="6" r="3"/>
       </svg>`
    : '';

  const dismissHtml = `<button type="button" aria-label="Remove ${label}"
    style="display:inline-flex;align-items:center;justify-content:center;background:none;border:none;cursor:${disabled ? 'not-allowed' : 'pointer'};padding:0;line-height:0;">
    <svg width="12" height="12" viewBox="0 0 20 20" fill="${icon}" aria-hidden="true">
      <path fill-rule="evenodd" d="${X_PATH}" clip-rule="evenodd"/>
    </svg>
  </button>`;

  return `<span style="display:inline-flex;align-items:center;gap:4px;background:${bg};color:${text};border-radius:4px;padding:2px 8px;font-size:var(--text-xs);font-weight:var(--font-medium);white-space:nowrap;line-height:1.5;font-family:inherit;${opacity}${cursor}">${dotHtml}<span>${label}</span>${dismissHtml}</span>`;
}

export default {
  title: 'Iris Library/Chip',
  tags: ['autodocs', 'stable'],
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `
Filter chips for interactive selections — removable tags attached to filters, inputs, or search queries.

**When to use**
- Represent an active filter the user can remove (e.g. "Status: Active ×")
- Show selected items in a multi-select field
- Tag an entity with a removable category label

**When NOT to use**
- Read-only status labels → use Badge instead
- Navigation → use Tabs or Buttons
- Long text → chips truncate; use a different pattern

**Anatomy**
\`[dot?] label [×]\` — dot indicator is optional; dismiss × is always present.

**Colors** — 10 themes: light (default), dark, and 8 semantic colors.
**States** — default, hover, disabled (opacity + muted text/bg).
        `,
      },
    },
  },
  argTypes: {
    label: {
      control: 'text',
      description: 'Chip label text.',
      table: { category: 'Content', defaultValue: { summary: 'Label' } },
    },
    dot: {
      control: 'boolean',
      description: 'Show a small dot indicator before the label.',
      table: { category: 'Content', defaultValue: { summary: false } },
    },
    color: {
      control: 'select',
      options: COLOR_NAMES,
      description: 'Color theme. `light` = neutral default; colored variants for semantic or categorical use.',
      table: { category: 'Appearance', defaultValue: { summary: 'light' } },
    },
    disabled: {
      control: 'boolean',
      description: 'Disabled state — muted background and text, cursor `not-allowed`. Sets `aria-disabled` on the dismiss button.',
      table: { category: 'State', defaultValue: { summary: false } },
    },
  },
  args: {
    label: 'Marketing',
    color: 'light',
    disabled: false,
    dot: false,
  },
};

/* ─────────────────────────────────────────────
   INTERACTIVE
───────────────────────────────────────────── */
export const Interactive = {
    name: 'Interactive (Controls)',
  render: (args) => {
    const a = args;
    const c = CHIP_COLORS[a.color] ?? CHIP_COLORS.light;
    const bg   = a.disabled ? c.disabledBg : c.bg;
    const text = a.disabled ? c.disabledText : c.text;
    const icon = c.icon;
    const dotPart = a.dot ? `\n  <svg width="12" height="12" viewBox="0 0 12 12" fill="${icon}" aria-hidden="true">\n    <circle cx="6" cy="6" r="3"/>\n  </svg>` : '';

    const htmlCode = `<span style="display:inline-flex;align-items:center;gap:4px;background:${bg};color:${text};border-radius:4px;padding:2px 8px;font-size:var(--text-xs);font-weight:var(--font-medium);white-space:nowrap;line-height:1.5;">${dotPart}\n  <span>${a.label}</span>\n  <button type="button" aria-label="Remove ${a.label}"${a.disabled ? ' aria-disabled="true"' : ''} style="display:inline-flex;align-items:center;background:none;border:none;cursor:${a.disabled ? 'not-allowed' : 'pointer'};padding:0;">\n    <svg width="12" height="12" viewBox="0 0 20 20" fill="${icon}" aria-hidden="true"><path fill-rule="evenodd" d="${X_PATH}" clip-rule="evenodd"/></svg>\n  </button>\n</span>`;

    const reactCode = `<span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', background: '${bg}', color: '${text}', borderRadius: '4px', padding: '2px 8px', fontSize: 'var(--text-xs)', fontWeight: 'var(--font-medium)', whiteSpace: 'nowrap', lineHeight: '1.5' }}>\n  ${a.dot ? '<svg width="12" height="12" viewBox="0 0 12 12" fill="${icon}" aria-hidden="true"><circle cx="6" cy="6" r="3"/></svg>' : ''}\n  <span>${a.label}</span>\n  <button\n    type="button"\n    aria-label={\`Remove \${label}\`}\n    ${a.disabled ? 'aria-disabled="true"' : ''}\n    onClick={onRemove}\n    style={{ display: 'inline-flex', alignItems: 'center', background: 'none', border: 'none', cursor: '${a.disabled ? 'not-allowed' : 'pointer'}', padding: '0' }}\n  >\n    <svg width="12" height="12" viewBox="0 0 20 20" fill="${icon}" aria-hidden="true">{/* x icon */}</svg>\n  </button>\n</span>`;

    const componentCode = `export function Chip({ label = "${a.label}", color = "${a.color}", dot = ${a.dot}, disabled = ${a.disabled}, onRemove }) {\n  return (\n    <span className={\`chip chip--\${color}\${disabled ? ' disabled' : ''}\`}>\n      {dot && <svg width="12" height="12" viewBox="0 0 12 12" aria-hidden="true"><circle cx="6" cy="6" r="3"/></svg>}\n      <span>{label}</span>\n      <button\n        type="button"\n        aria-label={\`Remove \${label}\`}\n        aria-disabled={disabled}\n        onClick={onRemove}\n        disabled={disabled}\n      >\n        <svg width="12" height="12" viewBox="0 0 20 20" aria-hidden="true">{/* x icon */}</svg>\n      </button>\n    </span>\n  );\n}`;

    const htmlEscaped = htmlCode.replace(/</g, '&lt;').replace(/>/g, '&gt;');
    const reactEscaped = reactCode.replace(/</g, '&lt;').replace(/>/g, '&gt;');
    const componentEscaped = componentCode.replace(/</g, '&lt;').replace(/>/g, '&gt;');

    return `
      <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:40px;align-items:start;">
        <div style="padding:20px;border:1px solid var(--color-border-default);border-radius:8px;">
          ${chip(args)}
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
  parameters: {
    docs: {
      description: {
        story: 'Use the **Controls** panel to configure color, label, dot indicator, and disabled state.',
      },
    },
  },
};

/* ─────────────────────────────────────────────
   ALL COLORS
───────────────────────────────────────────── */
export const AllColors = {
    name: 'Colors — all 10 themes',
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story: `
All 10 color themes in default state.

**✅ Do** — use \`light\` as the default neutral chip; use colored variants to indicate category or priority.
**❌ Don't** — mix chip colors within the same filter bar without a clear semantic reason.
        `,
      },
      source: {
        code: `<!-- Light (neutral default) -->
<span style="display:inline-flex;align-items:center;gap:4px;background:var(--color-bg-secondary);color:#4a5565;border-radius:4px;padding:2px 8px;font-size:var(--text-xs);font-weight:var(--font-medium);white-space:nowrap;line-height:1.5;">
  <span>Marketing</span>
  <button type="button" aria-label="Remove Marketing" style="display:inline-flex;align-items:center;background:none;border:none;cursor:pointer;padding:0;">
    <svg width="12" height="12" viewBox="0 0 20 20" fill="#6b7280" aria-hidden="true">
      <path fill-rule="evenodd" d="${X_PATH}" clip-rule="evenodd"/>
    </svg>
  </button>
</span>

<!-- Indigo -->
<span style="display:inline-flex;align-items:center;gap:4px;background:#5850ec;color:var(--color-bg-white);border-radius:4px;padding:2px 8px;font-size:var(--text-xs);font-weight:var(--font-medium);white-space:nowrap;line-height:1.5;">
  <span>Design</span>
  <button type="button" aria-label="Remove Design" style="display:inline-flex;align-items:center;background:none;border:none;cursor:pointer;padding:0;">
    <svg width="12" height="12" viewBox="0 0 20 20" fill="var(--color-bg-secondary)" aria-hidden="true">
      <path fill-rule="evenodd" d="${X_PATH}" clip-rule="evenodd"/>
    </svg>
  </button>
</span>`,
        language: 'html',
      },
    },
  },
  render: () => {
    const labels = { light: 'Marketing', dark: 'Finance', indigo: 'Design', green: 'Active', red: 'Overdue', orange: 'Urgent', teal: 'Support', blue: 'Engineering', purple: 'Product', pink: 'Creative' };
    return `<div style="display:flex;flex-wrap:wrap;gap:8px;align-items:center;">
      ${COLOR_NAMES.map(c => chip({ label: labels[c], color: c })).join('\n      ')}
    </div>`;
  },
};

/* ─────────────────────────────────────────────
   STATES
───────────────────────────────────────────── */
export const States = {
    name: 'States — default / hover / disabled',
  args: { color: 'indigo' },
  parameters: {
    controls: { include: ['color'] },
    docs: {
      description: {
        story: `
Default, hover, and disabled states for the selected color. Use the **color** control to compare themes.

**✅ Do** — show the disabled state when the chip cannot be removed (e.g. a required filter).
**✅ Do** — apply \`aria-disabled="true"\` and \`cursor: not-allowed\` to convey disabled state to screen readers and mouse users.
**❌ Don't** — hide the chip entirely when disabled — keep it visible so users know the filter exists.
        `,
      },
      source: {
        code: `<!-- Default -->
<span style="display:inline-flex;align-items:center;gap:4px;background:#5850ec;color:var(--color-bg-white);border-radius:4px;padding:2px 8px;font-size:var(--text-xs);font-weight:var(--font-medium);white-space:nowrap;line-height:1.5;">
  <span>Design</span>
  <button type="button" aria-label="Remove Design" style="background:none;border:none;cursor:pointer;padding:0;display:inline-flex;align-items:center;">
    <svg width="12" height="12" viewBox="0 0 20 20" fill="var(--color-bg-secondary)" aria-hidden="true"><path fill-rule="evenodd" d="${X_PATH}" clip-rule="evenodd"/></svg>
  </button>
</span>

<!-- Disabled -->
<span style="display:inline-flex;align-items:center;gap:4px;background:#b4c6fc;color:var(--color-bg-white);border-radius:4px;padding:2px 8px;font-size:var(--text-xs);font-weight:var(--font-medium);white-space:nowrap;line-height:1.5;cursor:not-allowed;">
  <span>Design</span>
  <button type="button" aria-label="Remove Design" aria-disabled="true" style="background:none;border:none;cursor:not-allowed;padding:0;display:inline-flex;align-items:center;">
    <svg width="12" height="12" viewBox="0 0 20 20" fill="var(--color-bg-secondary)" aria-hidden="true"><path fill-rule="evenodd" d="${X_PATH}" clip-rule="evenodd"/></svg>
  </button>
</span>`,
        language: 'html',
      },
    },
  },
  render: ({ color }) => {
    const rows = [
      { state: 'default',  label: 'Default' },
      { state: 'hover',    label: 'Hover' },
      { state: 'disabled', label: 'Disabled' },
    ];
    return `<div style="display:flex;flex-direction:column;gap:12px;">
      ${rows.map(({ state, label }) => `
        <div style="display:flex;align-items:center;gap:16px;">
          <span style="width:64px;font:11px/1 sans-serif;color:var(--color-border-light);">${label}</span>
          ${chip({ label: 'Design', color, state })}
        </div>`).join('')}
    </div>`;
  },
};

/* ─────────────────────────────────────────────
   WITH DOT
───────────────────────────────────────────── */
export const WithDot = {
    name: 'With dot indicator',
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story: `
Chips with an optional leading dot indicator. Useful for category/status chips where a visual marker aids scanning.

**✅ Do** — use the dot to reinforce the color's semantic meaning (e.g. green dot = active status).
**❌ Don't** — use the dot as the sole color indicator — the chip background already carries the color.
        `,
      },
      source: {
        code: `<span style="display:inline-flex;align-items:center;gap:4px;background:#5850ec;color:var(--color-bg-white);border-radius:4px;padding:2px 8px;font-size:var(--text-xs);font-weight:var(--font-medium);white-space:nowrap;line-height:1.5;">
  <svg width="12" height="12" viewBox="0 0 12 12" fill="var(--color-bg-secondary)" aria-hidden="true">
    <circle cx="6" cy="6" r="3"/>
  </svg>
  <span>Design</span>
  <button type="button" aria-label="Remove Design" style="background:none;border:none;cursor:pointer;padding:0;display:inline-flex;align-items:center;">
    <svg width="12" height="12" viewBox="0 0 20 20" fill="var(--color-bg-secondary)" aria-hidden="true">
      <path fill-rule="evenodd" d="${X_PATH}" clip-rule="evenodd"/>
    </svg>
  </button>
</span>`,
        language: 'html',
      },
    },
  },
  render: () => {
    const labels = { light: 'Marketing', dark: 'Finance', indigo: 'Design', green: 'Active', red: 'Overdue', orange: 'Urgent', teal: 'Support', blue: 'Engineering', purple: 'Product', pink: 'Creative' };
    return `<div style="display:flex;flex-wrap:wrap;gap:8px;align-items:center;">
      ${COLOR_NAMES.map(c => chip({ label: labels[c], color: c, dot: true })).join('\n      ')}
    </div>`;
  },
};
