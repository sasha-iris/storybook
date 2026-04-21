/**
 * Iris Library — Button
 *
 * Source: Figma › Iris Library › ---- Buttons page
 * Frames used: node 84:13517 (main Buttons frame), node 84:13521 (Button component)
 *
 * ## Figma variant dimensions
 * | Figma size | Story size | Height | Padding      | Font |
 * |-----------|-----------|--------|--------------|------|
 * | xs        | xs        | ~34px  | 8px / 12px   | 12px |
 * | sm        | sm        | 36px   | 8px / 12px   | 14px |
 * | base      | md        | 40px   | 10px / 20px  | 14px |
 * | l         | lg        | 48px   | 12px / 20px  | 16px |
 * | xl        | xl        | 52px   | 14px / 24px  | 16px |
 *
 * ## Figma color values (Buttons page tokens)
 * | Figma color | BG hex  | Token / note                        |
 * |------------|---------|-------------------------------------|
 * | Primary    | #42389d | colors/brand/800 — purple           |
 * | Dark       | #1e2939 | colors/border/border-dark           |
 * | Green      | #007a55 | colors/emerald/700                  |
 * | Red        | #c10007 | colors/red/700                      |
 * | Yellow     | #d03801 | colors/orange/600 (Figma calls it Yellow) |
 * | Blue       | #1447e6 | colors/blue/700                     |
 * | Gray       | #f9fafb | colors/background/bg-secondary-medium; text: #1e2939 |
 *
 * ## Border radius
 * All buttons: 12px — Figma token `border/border-radius/rounded-xl`
 * CSS: `var(--radius-lg)` = 0.75rem = 12px
 *
 * ## QA notes
 * - Primary is PURPLE (#42389d), NOT the legacy blue (#1C64F2)
 * - "Yellow" in Figma renders ORANGE (#d03801) — this is intentional
 * - Gray button has dark text (#1e2939) + light border (#e5e7eb)
 * - Outline variants: border + text match the fill color; no background
 * - Hover state darkens the fill by one palette step
 * - Disabled: 50% opacity, pointer-events none
 * - Focus ring: 2px outline, color = --btn-primary-bg, offset 2px
 * - Icon-only: same sizes, aspect-ratio 1:1 via `.btn-icon`
 */

export default {
  title: 'Iris Library/Components/Button',
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    backgrounds: { default: 'light' },
    docs: {
      description: {
        component: `
Iris button component — 7 colors × 5 sizes × 2 outline modes × icon-only.

**CSS classes:** \`btn btn-{color} btn-{size}\`
**Outline:** swap \`btn-{color}\` for \`btn-outline-{color}\`
**Icon-only:** add \`btn-icon\` modifier (removes padding, sets square dimensions)
**Group:** wrap in \`.btn-group\` container

\`\`\`html
<button class="btn btn-primary btn-md">Button text</button>
<button class="btn btn-outline-primary btn-md">Button text</button>
<button class="btn btn-icon btn-primary btn-md" aria-label="Action"><!-- icon --></button>
\`\`\`
        `,
      },
    },
  },
  argTypes: {
    label:   { control: 'text',    description: 'Button label text' },
    color:   {
      control: 'select',
      options: ['primary','dark','green','red','yellow','blue','gray',
                'alternative','light','purple'],
      description: 'Figma colors: primary · dark · green · red · yellow · blue · gray',
    },
    size:    {
      control: 'select',
      options: ['xs','sm','md','lg','xl'],
      description: 'xs=34h · sm=36h · md=40h (base) · lg=48h (l) · xl=52h',
    },
    outline:   { control: 'boolean', description: 'Outline/ghost mode' },
    pill:      { control: 'boolean', description: 'Full pill border-radius' },
    disabled:  { control: 'boolean', description: 'Disabled state' },
    iconLeft:  { control: 'boolean', description: 'Show left icon placeholder' },
    iconRight: { control: 'boolean', description: 'Show right icon placeholder' },
    iconOnly:  { control: 'boolean', description: 'Icon-only square button' },
  },
  args: {
    label: 'Button text',
    color: 'primary',
    size: 'md',
    outline: false,
    pill: false,
    disabled: false,
    iconLeft: false,
    iconRight: false,
    iconOnly: false,
  },
};

/* ── Helpers ────────────────────────────────────────────────── */

/* Figma icon sizes: xs/sm = 16px, base(md)/l(lg)/xl = 20px */
const ICON_PX = { xs: 16, sm: 16, md: 20, lg: 20, xl: 20 };

const iconSvg = (px) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
  style="width:${px}px;height:${px}px;flex-shrink:0;" aria-hidden="true">
  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462
    c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755
    1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197
    -1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81
    h3.461a1 1 0 00.951-.69l1.07-3.292z" />
</svg>`;

const arrowIcon = (px) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
  style="width:${px}px;height:${px}px;flex-shrink:0;" aria-hidden="true">
  <path fill-rule="evenodd"
    d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414
    L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
    clip-rule="evenodd"/>
</svg>`;

const btn = ({
  label = 'Button text',
  color = 'primary',
  size = 'md',
  outline = false,
  pill = false,
  disabled = false,
  iconLeft = false,
  iconRight = false,
  iconOnly = false,
}) => {
  const colorClass = outline ? `btn-outline-${color}` : `btn-${color}`;
  const classes = [
    'btn',
    colorClass,
    `btn-${size}`,
    pill ? 'btn-pill' : '',
    iconOnly ? 'btn-icon' : '',
  ].filter(Boolean).join(' ');

  const px        = ICON_PX[size] || 20;
  const leftSlot  = iconLeft  || iconOnly ? iconSvg(px)   : '';
  const rightSlot = iconRight && !iconOnly ? arrowIcon(px) : '';
  const labelHtml = iconOnly ? '' : `<span>${label}</span>`;

  return `<button class="${classes}"${disabled ? ' disabled aria-disabled="true"' : ''}
    aria-label="${iconOnly ? label : ''}"
  >${leftSlot}${labelHtml}${rightSlot}</button>`;
};

/* ── Interactive story (Controls) ──────────────────────────── */
export const Interactive = {
  name: 'Interactive (Controls)',
  render: (args) => btn(args),
};

/* ── Figma Colors ────────────────────────────────────────────
   All 7 Figma color values — base (md) size, default state   */
export const FigmaColors = {
  name: 'Colors — Figma palette',
  parameters: {
    docs: {
      description: {
        story: `
All 7 colors from Figma Buttons page (node 84:13517). Sizes shown: **md** (Figma "base").

QA: Primary = #42389d (purple). "Yellow" = #d03801 (orange). Gray = light surface w/ dark text.
        `,
      },
    },
  },
  render: () => `
    <div style="display:flex;flex-direction:column;gap:16px;">
      <div>
        <p style="font:10px/1 600 sans-serif;text-transform:uppercase;letter-spacing:.1em;
                  color:#9CA3AF;margin:0 0 8px;">Solid</p>
        <div style="display:flex;flex-wrap:wrap;gap:8px;align-items:center;">
          ${['primary','dark','green','red','yellow','blue','gray'].map(c =>
            btn({ label: c.charAt(0).toUpperCase()+c.slice(1), color: c })
          ).join('')}
        </div>
      </div>
      <div>
        <p style="font:10px/1 600 sans-serif;text-transform:uppercase;letter-spacing:.1em;
                  color:#9CA3AF;margin:0 0 8px;">Outline</p>
        <div style="display:flex;flex-wrap:wrap;gap:8px;align-items:center;">
          ${['primary','dark','green','red','yellow','blue','gray'].map(c =>
            btn({ label: c.charAt(0).toUpperCase()+c.slice(1), color: c, outline: true })
          ).join('')}
        </div>
      </div>
    </div>`,
};

/* ── Figma Sizes ─────────────────────────────────────────────
   All 5 sizes from Figma (xs/sm/base/l/xl)                   */
export const FigmaSizes = {
  name: 'Sizes — Figma scale (xs → xl)',
  parameters: {
    docs: {
      description: {
        story: `
All 5 sizes from Figma (xs=34h · sm=36h · base/md=40h · l/lg=48h · xl=52h).
Padding and font size change per size as specified in Figma.
        `,
      },
    },
  },
  render: () => `
    <div style="display:flex;flex-direction:column;gap:20px;">
      <div>
        <p style="font:10px/1 600 sans-serif;text-transform:uppercase;letter-spacing:.1em;
                  color:#9CA3AF;margin:0 0 8px;">Primary — all sizes</p>
        <div style="display:flex;flex-wrap:wrap;gap:8px;align-items:center;">
          ${[
            { size:'xs', label:'xs · 12px · py8/px12' },
            { size:'sm', label:'sm · 14px · py8/px12' },
            { size:'md', label:'base · 14px · py10/px20' },
            { size:'lg', label:'l · 16px · py12/px20' },
            { size:'xl', label:'xl · 16px · py14/px24' },
          ].map(({ size, label }) => btn({ label, color: 'primary', size })).join('')}
        </div>
      </div>
      <div>
        <p style="font:10px/1 600 sans-serif;text-transform:uppercase;letter-spacing:.1em;
                  color:#9CA3AF;margin:0 0 8px;">Icon-only — all sizes</p>
        <div style="display:flex;flex-wrap:wrap;gap:8px;align-items:center;">
          ${['xs','sm','md','lg','xl'].map(size =>
            btn({ label: `${size} icon`, color: 'primary', size, iconOnly: true })
          ).join('')}
        </div>
      </div>
    </div>`,
};

/* ── States ──────────────────────────────────────────────────
   Default / Hover (class-based) / Disabled                   */
export const FigmaStates = {
  name: 'States — default / hover / disabled',
  parameters: {
    docs: {
      description: {
        story: `
Figma states: **Default** · **Hover** (darker fill) · **Disabled** (50% opacity).
Focus state: 2px outline, color = \`--btn-primary-bg\` (#42389d), offset 2px — visible on keyboard nav.

QA: Hover on primary should show \`#362f78\` (brand/900). Disabled must not respond to pointer events.
        `,
      },
    },
  },
  render: () => `
    <div style="display:flex;flex-direction:column;gap:16px;">
      ${['primary','dark','green','red'].map(color => `
        <div style="display:flex;gap:8px;align-items:center;">
          <span style="width:80px;font:11px/1 sans-serif;color:#6B7280;">${color}</span>
          ${btn({ label: 'Default', color })}
          ${btn({ label: 'Disabled', color, disabled: true })}
          ${btn({ label: 'Outline', color, outline: true })}
          ${btn({ label: 'Outline disabled', color, outline: true, disabled: true })}
        </div>`).join('')}
    </div>`,
};

/* ── Outline variants ────────────────────────────────────────
   All outline colors at base (md) size                        */
export const OutlineVariants = {
  name: 'Outline — all colors',
  render: () => `
    <div style="display:flex;flex-wrap:wrap;gap:8px;align-items:center;">
      ${['primary','dark','green','red','yellow','blue','gray'].map(c =>
        btn({ label: c.charAt(0).toUpperCase()+c.slice(1), color: c, outline: true })
      ).join('')}
    </div>`,
};

/* ── Icon placement ──────────────────────────────────────────
   Left icon · right icon · icon-only                         */
export const IconPlacement = {
  name: 'With Icons',
  parameters: {
    docs: {
      description: {
        story: `
Figma button allows left icon, right icon, or icon-only.
Gap between icon and label: **8px** (Figma: gap-[8px]).
Icon size: 20px for base/lg/xl; 16px for xs/sm.
        `,
      },
    },
  },
  render: () => `
    <div style="display:flex;flex-direction:column;gap:12px;">
      <div style="display:flex;gap:8px;align-items:center;">
        <span style="width:120px;font:11px/1 sans-serif;color:#6B7280;">Left icon</span>
        ${btn({ label: 'Button text', color: 'primary', iconLeft: true })}
        ${btn({ label: 'Button text', color: 'dark', iconLeft: true })}
        ${btn({ label: 'Button text', color: 'green', iconLeft: true })}
      </div>
      <div style="display:flex;gap:8px;align-items:center;">
        <span style="width:120px;font:11px/1 sans-serif;color:#6B7280;">Right icon</span>
        ${btn({ label: 'Button text', color: 'primary', iconRight: true })}
        ${btn({ label: 'Button text', color: 'dark', iconRight: true })}
        ${btn({ label: 'Button text', color: 'green', iconRight: true })}
      </div>
      <div style="display:flex;gap:8px;align-items:center;">
        <span style="width:120px;font:11px/1 sans-serif;color:#6B7280;">Icon only</span>
        ${['primary','dark','green','red','gray'].map(c =>
          btn({ label: c, color: c, iconOnly: true })
        ).join('')}
      </div>
    </div>`,
};

/* ── Pill shape ──────────────────────────────────────────── */
export const Pill = {
  render: () => `
    <div style="display:flex;flex-wrap:wrap;gap:10px;align-items:center;">
      ${['primary','dark','green'].map(c =>
        btn({ label: c.charAt(0).toUpperCase()+c.slice(1), color: c, pill: true })
      ).join('')}
      ${['primary','dark'].map(c =>
        btn({ label: c.charAt(0).toUpperCase()+c.slice(1), color: c, pill: true, outline: true })
      ).join('')}
    </div>`,
};

/* ── Disabled ────────────────────────────────────────────── */
export const Disabled = {
  render: () => `
    <div style="display:flex;flex-wrap:wrap;gap:10px;align-items:center;">
      ${btn({ label: 'Disabled primary', color: 'primary', disabled: true })}
      ${btn({ label: 'Disabled outline', color: 'primary', outline: true, disabled: true })}
      ${btn({ label: 'Disabled dark',    color: 'dark',    disabled: true })}
      ${btn({ label: 'Disabled green',   color: 'green',   disabled: true })}
    </div>`,
};

/* ── Legacy: AllVariants ─────────────────────────────────────
   Kept for backward compat; reflects old variant naming       */
export const AllVariants = {
  name: 'Overview',
  parameters: {
    docs: {
      description: {
        story: `Legacy overview story. For Figma-exact stories, see FigmaColors and FigmaSizes.`,
      },
    },
  },
  render: () => `
    <div style="display:flex;flex-direction:column;gap:20px;">
      <div>
        <p style="font:10px/1 600 sans-serif;text-transform:uppercase;
                  letter-spacing:.1em;color:#9CA3AF;margin-bottom:8px;">Figma colors (solid)</p>
        <div style="display:flex;flex-wrap:wrap;gap:8px;align-items:center;">
          ${['primary','dark','green','red','yellow','blue','gray']
            .map(c => btn({ label: c.charAt(0).toUpperCase()+c.slice(1), color: c })).join('')}
        </div>
      </div>
      <div>
        <p style="font:10px/1 600 sans-serif;text-transform:uppercase;
                  letter-spacing:.1em;color:#9CA3AF;margin-bottom:8px;">Legacy colors</p>
        <div style="display:flex;flex-wrap:wrap;gap:8px;align-items:center;">
          ${['alternative','light','purple']
            .map(c => btn({ label: c.charAt(0).toUpperCase()+c.slice(1), color: c })).join('')}
        </div>
      </div>
      <div>
        <p style="font:10px/1 600 sans-serif;text-transform:uppercase;
                  letter-spacing:.1em;color:#9CA3AF;margin-bottom:8px;">Outline</p>
        <div style="display:flex;flex-wrap:wrap;gap:8px;align-items:center;">
          ${['primary','dark','green','red','yellow','blue','gray']
            .map(c => btn({ label: c.charAt(0).toUpperCase()+c.slice(1), color: c, outline: true })).join('')}
        </div>
      </div>
    </div>`,
};
