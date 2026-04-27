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
    // ── Content ──────────────────────────────────────────────
    label: {
      control: 'text',
      description: 'Button label text. Ignored when `iconOnly` is true.',
      table: { category: 'Content', defaultValue: { summary: 'Button text' } },
    },
    iconLeft: {
      control: 'boolean',
      description: 'Prepend a left icon (star placeholder). Size: 16px for xs/sm, 20px for md/lg/xl.',
      table: { category: 'Content', defaultValue: { summary: false } },
    },
    iconRight: {
      control: 'boolean',
      description: 'Append a right icon (arrow). Ignored when `iconOnly` is true.',
      table: { category: 'Content', defaultValue: { summary: false } },
    },
    iconOnly: {
      control: 'boolean',
      description: 'Icon-only mode — removes label, forces square aspect ratio via `.btn-icon`.',
      table: { category: 'Content', defaultValue: { summary: false } },
    },
    // ── Appearance ───────────────────────────────────────────
    color: {
      control: 'select',
      options: ['primary','dark','green','red','yellow','blue','gray',
                'alternative','light','purple'],
      description: [
        'Figma colors: **primary** `#42389d` · **dark** `#1e2939` · **green** `#007a55` ·',
        '**red** `#c10007` · **yellow** `#d03801` (renders orange) · **blue** `#1447e6` ·',
        '**gray** light surface w/ dark text.',
        '',
        '`alternative` / `light` / `purple` are legacy variants not in current Figma.',
      ].join('\n'),
      table: { category: 'Appearance', defaultValue: { summary: 'primary' } },
    },
    size: {
      control: 'select',
      options: ['xs','sm','md','lg','xl'],
      description: 'Figma sizes: xs (34px h) · sm (36px) · md / base (40px) · lg / l (48px) · xl (52px).',
      table: { category: 'Appearance', defaultValue: { summary: 'md' } },
    },
    outline: {
      control: 'boolean',
      description: 'Outline / ghost mode. Swaps `.btn-{color}` for `.btn-outline-{color}`. Background becomes transparent.',
      table: { category: 'Appearance', defaultValue: { summary: false } },
    },
    pill: {
      control: 'boolean',
      description: 'Full pill border-radius via `.btn-pill`. Default radius is 12px (`--radius-lg`).',
      table: { category: 'Appearance', defaultValue: { summary: false } },
    },
    // ── State ────────────────────────────────────────────────
    disabled: {
      control: 'boolean',
      description: 'Disabled state — 50% opacity, `pointer-events: none`. Adds `disabled` + `aria-disabled="true"` attributes.',
      table: { category: 'State', defaultValue: { summary: false } },
    },
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
  parameters: {
    docs: {
      description: {
        story: 'Use the **Controls** panel below to configure any combination of color, size, and modifiers. The rendered HTML updates live.',
      },
      source: {
        // Dynamically generate a clean snippet from current args
        transform: (_src, storyCtx) => {
          const a = storyCtx.args;
          const colorClass = a.outline ? `btn-outline-${a.color}` : `btn-${a.color}`;
          const classes = ['btn', colorClass, `btn-${a.size}`, a.pill ? 'btn-pill' : '', a.iconOnly ? 'btn-icon' : ''].filter(Boolean).join(' ');
          if (a.iconOnly) return `<button class="${classes}" aria-label="${a.label}">\n  <!-- icon svg here -->\n</button>`;
          const left  = a.iconLeft  ? '\n  <!-- left icon -->' : '';
          const right = a.iconRight ? '\n  <!-- right icon -->' : '';
          const dis   = a.disabled  ? ' disabled aria-disabled="true"' : '';
          return `<button class="${classes}"${dis}>${left}\n  <span>${a.label}</span>${right}\n</button>`;
        },
      },
    },
  },
};

/* ── Figma Colors ────────────────────────────────────────────
   All 7 Figma color values — base (md) size, default state   */
export const FigmaColors = {
  name: 'Colors — Figma palette',
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story: `
All 7 colors from Figma Buttons page (node 84:13517). Sizes shown: **md** (Figma "base").

**QA:** Primary = \`#42389d\` (purple, not blue). "Yellow" = \`#d03801\` (orange — intentional). Gray = light surface \`#f9fafb\` with dark text \`#1e2939\`.
        `,
      },
      source: {
        code: `<!-- Solid -->
<button class="btn btn-primary btn-md">Primary</button>
<button class="btn btn-dark btn-md">Dark</button>
<button class="btn btn-green btn-md">Green</button>
<button class="btn btn-red btn-md">Red</button>
<button class="btn btn-yellow btn-md">Yellow</button>
<button class="btn btn-blue btn-md">Blue</button>
<button class="btn btn-gray btn-md">Gray</button>

<!-- Outline -->
<button class="btn btn-outline-primary btn-md">Primary</button>
<button class="btn btn-outline-dark btn-md">Dark</button>`,
        language: 'html',
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
    controls: { disable: true },
    docs: {
      description: {
        story: `
All 5 sizes from Figma — xs (34px h) · sm (36px) · md/base (40px) · lg/l (48px) · xl (52px).
Padding and font size scale with size as specified in Figma.
        `,
      },
      source: {
        code: `<button class="btn btn-primary btn-xs">Extra small</button>
<button class="btn btn-primary btn-sm">Small</button>
<button class="btn btn-primary btn-md">Medium (base)</button>
<button class="btn btn-primary btn-lg">Large</button>
<button class="btn btn-primary btn-xl">Extra large</button>

<!-- Icon-only at each size -->
<button class="btn btn-primary btn-icon btn-xs" aria-label="Action"><!-- icon --></button>
<button class="btn btn-primary btn-icon btn-md" aria-label="Action"><!-- icon --></button>
<button class="btn btn-primary btn-icon btn-xl" aria-label="Action"><!-- icon --></button>`,
        language: 'html',
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
    controls: { disable: true },
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
  parameters: { controls: { disable: true } },
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
    controls: { disable: true },
    docs: {
      description: {
        story: `
Figma button supports left icon, right icon, or icon-only.
Gap between icon and label: **8px**. Icon size: **20px** for md/lg/xl, **16px** for xs/sm.
        `,
      },
      source: {
        code: `<!-- Left icon -->
<button class="btn btn-primary btn-md">
  <svg><!-- heroicon 20px --></svg>
  <span>Button text</span>
</button>

<!-- Right icon -->
<button class="btn btn-primary btn-md">
  <span>Button text</span>
  <svg><!-- heroicon 20px --></svg>
</button>

<!-- Icon only -->
<button class="btn btn-primary btn-icon btn-md" aria-label="Action">
  <svg><!-- heroicon 20px --></svg>
</button>`,
        language: 'html',
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
  parameters: { controls: { disable: true } },
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
  parameters: { controls: { disable: true } },
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
    controls: { disable: true },
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
