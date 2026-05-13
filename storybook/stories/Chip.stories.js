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
 * light:  #f3f4f6 / #4a5565 / #6b7280 / #e5e7eb / #f3f4f6 / #99a1af
 * dark:   #4a5565 / #ffffff / #f3f4f6 / #1e2939 / #d1d5dc / #ffffff
 * indigo: #5850ec / #ffffff / #f3f4f6 / #42389d / #b4c6fc / #ffffff
 * green:  #009966 / #ffffff / #f3f4f6 / #006045 / #5ee9b5 / #ffffff
 * red:    #e7000b / #ffffff / #f3f4f6 / #9f0712 / #ffa2a2 / #ffffff
 * orange: #d03801 / #ffffff / #f3f4f6 / #8a2c0d / #fdba8c / #ffffff
 * teal:   #009689 / #ffffff / #f3f4f6 / #005f59 / #46ecd5 / #ffffff
 * blue:   #155dfc / #ffffff / #f3f4f6 / #193cb8 / #8ec5ff / #ffffff
 * purple: #9810fa / #ffffff / #f3f4f6 / #6e11b0 / #dab2ff / #ffffff
 * pink:   #e60076 / #ffffff / #f3f4f6 / #a3004c / #fda5d5 / #ffffff
 */

const CHIP_COLORS = {
  light:  { bg: '#f3f4f6', text: '#4a5565', icon: '#6b7280', hover: '#e5e7eb', disabledBg: '#f3f4f6', disabledText: '#99a1af' },
  dark:   { bg: '#4a5565', text: '#ffffff', icon: '#f3f4f6', hover: '#1e2939', disabledBg: '#d1d5dc', disabledText: '#ffffff' },
  indigo: { bg: '#5850ec', text: '#ffffff', icon: '#f3f4f6', hover: '#42389d', disabledBg: '#b4c6fc', disabledText: '#ffffff' },
  green:  { bg: '#009966', text: '#ffffff', icon: '#f3f4f6', hover: '#006045', disabledBg: '#5ee9b5', disabledText: '#ffffff' },
  red:    { bg: '#e7000b', text: '#ffffff', icon: '#f3f4f6', hover: '#9f0712',  disabledBg: '#ffa2a2', disabledText: '#ffffff' },
  orange: { bg: '#d03801', text: '#ffffff', icon: '#f3f4f6', hover: '#8a2c0d', disabledBg: '#fdba8c', disabledText: '#ffffff' },
  teal:   { bg: '#009689', text: '#ffffff', icon: '#f3f4f6', hover: '#005f59', disabledBg: '#46ecd5', disabledText: '#ffffff' },
  blue:   { bg: '#155dfc', text: '#ffffff', icon: '#f3f4f6', hover: '#193cb8', disabledBg: '#8ec5ff', disabledText: '#ffffff' },
  purple: { bg: '#9810fa', text: '#ffffff', icon: '#f3f4f6', hover: '#6e11b0', disabledBg: '#dab2ff', disabledText: '#ffffff' },
  pink:   { bg: '#e60076', text: '#ffffff', icon: '#f3f4f6', hover: '#a3004c', disabledBg: '#fda5d5', disabledText: '#ffffff' },
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
  render: (args) => chip(args),
  parameters: {
    docs: {
      description: {
        story: 'Use the **Controls** panel to configure color, label, dot indicator, and disabled state.',
      },
      source: {
        transform: (_src, ctx) => {
          const a = ctx.args;
          const c = CHIP_COLORS[a.color] ?? CHIP_COLORS.light;
          const bg   = a.disabled ? c.disabledBg : c.bg;
          const text = a.disabled ? c.disabledText : c.text;
          const icon = c.icon;
          const dotPart = a.dot
            ? `\n  <svg width="12" height="12" viewBox="0 0 12 12" fill="${icon}" aria-hidden="true">\n    <circle cx="6" cy="6" r="3"/>\n  </svg>`
            : '';
          return `<span style="display:inline-flex;align-items:center;gap:4px;background:${bg};color:${text};border-radius:4px;padding:2px 8px;font-size:var(--text-xs);font-weight:var(--font-medium);white-space:nowrap;line-height:1.5;">${dotPart}\n  <span>${a.label}</span>\n  <button type="button" aria-label="Remove ${a.label}"${a.disabled ? ' aria-disabled="true"' : ''} style="display:inline-flex;align-items:center;background:none;border:none;cursor:${a.disabled ? 'not-allowed' : 'pointer'};padding:0;">\n    <svg width="12" height="12" viewBox="0 0 20 20" fill="${icon}" aria-hidden="true"><path fill-rule="evenodd" d="${X_PATH}" clip-rule="evenodd"/></svg>\n  </button>\n</span>`;
        },
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
<span style="display:inline-flex;align-items:center;gap:4px;background:#f3f4f6;color:#4a5565;border-radius:4px;padding:2px 8px;font-size:var(--text-xs);font-weight:var(--font-medium);white-space:nowrap;line-height:1.5;">
  <span>Marketing</span>
  <button type="button" aria-label="Remove Marketing" style="display:inline-flex;align-items:center;background:none;border:none;cursor:pointer;padding:0;">
    <svg width="12" height="12" viewBox="0 0 20 20" fill="#6b7280" aria-hidden="true">
      <path fill-rule="evenodd" d="${X_PATH}" clip-rule="evenodd"/>
    </svg>
  </button>
</span>

<!-- Indigo -->
<span style="display:inline-flex;align-items:center;gap:4px;background:#5850ec;color:#ffffff;border-radius:4px;padding:2px 8px;font-size:var(--text-xs);font-weight:var(--font-medium);white-space:nowrap;line-height:1.5;">
  <span>Design</span>
  <button type="button" aria-label="Remove Design" style="display:inline-flex;align-items:center;background:none;border:none;cursor:pointer;padding:0;">
    <svg width="12" height="12" viewBox="0 0 20 20" fill="#f3f4f6" aria-hidden="true">
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
<span style="display:inline-flex;align-items:center;gap:4px;background:#5850ec;color:#ffffff;border-radius:4px;padding:2px 8px;font-size:var(--text-xs);font-weight:var(--font-medium);white-space:nowrap;line-height:1.5;">
  <span>Design</span>
  <button type="button" aria-label="Remove Design" style="background:none;border:none;cursor:pointer;padding:0;display:inline-flex;align-items:center;">
    <svg width="12" height="12" viewBox="0 0 20 20" fill="#f3f4f6" aria-hidden="true"><path fill-rule="evenodd" d="${X_PATH}" clip-rule="evenodd"/></svg>
  </button>
</span>

<!-- Disabled -->
<span style="display:inline-flex;align-items:center;gap:4px;background:#b4c6fc;color:#ffffff;border-radius:4px;padding:2px 8px;font-size:var(--text-xs);font-weight:var(--font-medium);white-space:nowrap;line-height:1.5;cursor:not-allowed;">
  <span>Design</span>
  <button type="button" aria-label="Remove Design" aria-disabled="true" style="background:none;border:none;cursor:not-allowed;padding:0;display:inline-flex;align-items:center;">
    <svg width="12" height="12" viewBox="0 0 20 20" fill="#f3f4f6" aria-hidden="true"><path fill-rule="evenodd" d="${X_PATH}" clip-rule="evenodd"/></svg>
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
          <span style="width:64px;font:11px/1 sans-serif;color:#9ca3af;">${label}</span>
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
        code: `<span style="display:inline-flex;align-items:center;gap:4px;background:#5850ec;color:#ffffff;border-radius:4px;padding:2px 8px;font-size:var(--text-xs);font-weight:var(--font-medium);white-space:nowrap;line-height:1.5;">
  <svg width="12" height="12" viewBox="0 0 12 12" fill="#f3f4f6" aria-hidden="true">
    <circle cx="6" cy="6" r="3"/>
  </svg>
  <span>Design</span>
  <button type="button" aria-label="Remove Design" style="background:none;border:none;cursor:pointer;padding:0;display:inline-flex;align-items:center;">
    <svg width="12" height="12" viewBox="0 0 20 20" fill="#f3f4f6" aria-hidden="true">
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
