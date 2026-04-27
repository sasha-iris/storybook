/**
 * Iris Library — Button
 * @requires @storybook/addon-actions — included via addon-essentials
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

/* ── Interactive story (Controls + Actions) ─────────────────── */
export const Interactive = {
  name: 'Interactive (Controls)',
  render: (args) => btn(args),
  parameters: {
    // html-vite native approach: Storybook listens to DOM events via CSS selectors
    actions: {
      handles: ['click button', 'focus button', 'blur button', 'keydown button'],
    },
    docs: {
      description: {
        story: [
          'Use the **Controls** panel to configure any combination of color, size, and modifiers.',
          '',
          '**Actions tab** logs: `click` · `focus` · `blur` · `keydown`.',
        ].join('\n'),
      },
      source: {
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

/* ── Colors ──────────────────────────────────────────────────
   All 7 colors. Control: size — changes all buttons at once  */
export const FigmaColors = {
  name: 'Colors — all Figma colors',
  args: { size: 'md' },
  parameters: {
    controls: { include: ['size'] },
    docs: {
      description: {
        story: `
All 7 Figma colors shown solid + outline. Use **size** control to preview all colors at any size.

**QA:** Primary = \`#42389d\` (purple, not blue). "Yellow" = \`#d03801\` (orange — intentional). Gray = light surface \`#f9fafb\` with dark text \`#1e2939\`.
        `,
      },
      source: {
        code: `<button class="btn btn-primary btn-md">Primary</button>
<button class="btn btn-dark btn-md">Dark</button>
<button class="btn btn-green btn-md">Green</button>
<button class="btn btn-red btn-md">Red</button>
<button class="btn btn-yellow btn-md">Yellow</button>
<button class="btn btn-blue btn-md">Blue</button>
<button class="btn btn-gray btn-md">Gray</button>

<!-- Outline -->
<button class="btn btn-outline-primary btn-md">Primary</button>`,
        language: 'html',
      },
    },
  },
  render: ({ size }) => `
    <div style="display:flex;flex-direction:column;gap:16px;">
      <div>
        <p style="font:10px/1 600 sans-serif;text-transform:uppercase;letter-spacing:.1em;
                  color:#9CA3AF;margin:0 0 8px;">Solid</p>
        <div style="display:flex;flex-wrap:wrap;gap:8px;align-items:center;">
          ${['primary','dark','green','red','yellow','blue','gray'].map(c =>
            btn({ label: c.charAt(0).toUpperCase()+c.slice(1), color: c, size })
          ).join('')}
        </div>
      </div>
      <div>
        <p style="font:10px/1 600 sans-serif;text-transform:uppercase;letter-spacing:.1em;
                  color:#9CA3AF;margin:0 0 8px;">Outline</p>
        <div style="display:flex;flex-wrap:wrap;gap:8px;align-items:center;">
          ${['primary','dark','green','red','yellow','blue','gray'].map(c =>
            btn({ label: c.charAt(0).toUpperCase()+c.slice(1), color: c, size, outline: true })
          ).join('')}
        </div>
      </div>
    </div>`,
};

/* ── Sizes ───────────────────────────────────────────────────
   All 5 sizes. Controls: color, outline — change the color   */
export const FigmaSizes = {
  name: 'Sizes — xs to xl',
  args: { color: 'primary', outline: false },
  parameters: {
    controls: { include: ['color', 'outline'] },
    docs: {
      description: {
        story: `
All 5 sizes: xs (34px) · sm (36px) · md (40px) · lg (48px) · xl (52px).
Use **color** and **outline** controls to preview the full size scale in any color.
        `,
      },
      source: {
        code: `<button class="btn btn-primary btn-xs">xs</button>
<button class="btn btn-primary btn-sm">sm</button>
<button class="btn btn-primary btn-md">md</button>
<button class="btn btn-primary btn-lg">lg</button>
<button class="btn btn-primary btn-xl">xl</button>`,
        language: 'html',
      },
    },
  },
  render: ({ color, outline }) => `
    <div style="display:flex;flex-direction:column;gap:20px;">
      <div>
        <p style="font:10px/1 600 sans-serif;text-transform:uppercase;letter-spacing:.1em;
                  color:#9CA3AF;margin:0 0 8px;">Text button — all sizes</p>
        <div style="display:flex;flex-wrap:wrap;gap:8px;align-items:center;">
          ${[
            { size:'xs', label:'xs · 12px' },
            { size:'sm', label:'sm · 14px' },
            { size:'md', label:'md · 14px' },
            { size:'lg', label:'lg · 16px' },
            { size:'xl', label:'xl · 16px' },
          ].map(({ size, label }) => btn({ label, color, size, outline })).join('')}
        </div>
      </div>
      <div>
        <p style="font:10px/1 600 sans-serif;text-transform:uppercase;letter-spacing:.1em;
                  color:#9CA3AF;margin:0 0 8px;">Icon-only — all sizes</p>
        <div style="display:flex;flex-wrap:wrap;gap:8px;align-items:center;">
          ${['xs','sm','md','lg','xl'].map(size =>
            btn({ label: `${size}`, color, size, outline, iconOnly: true })
          ).join('')}
        </div>
      </div>
    </div>`,
};

/* ── States ──────────────────────────────────────────────────
   Default / Disabled / Outline / Outline-disabled.
   Control: size — see states at any size                      */
export const FigmaStates = {
  name: 'States — default / disabled',
  args: { size: 'md' },
  parameters: {
    controls: { include: ['size'] },
    docs: {
      description: {
        story: `
Each row: **Default** · **Disabled** · **Outline** · **Outline disabled**.
Use **size** control to verify states render correctly at all sizes.

**QA:** Disabled = 50% opacity, \`pointer-events: none\`. Hover darkens fill by one palette step.
        `,
      },
    },
  },
  render: ({ size }) => `
    <div style="display:flex;flex-direction:column;gap:12px;">
      ${['primary','dark','green','red','yellow','blue'].map(color => `
        <div style="display:flex;gap:8px;align-items:center;">
          <span style="width:64px;font:11px/1 sans-serif;color:#6B7280;flex-shrink:0;">${color}</span>
          ${btn({ label: 'Default',          color, size })}
          ${btn({ label: 'Disabled',         color, size, disabled: true })}
          ${btn({ label: 'Outline',          color, size, outline: true })}
          ${btn({ label: 'Outline disabled', color, size, outline: true, disabled: true })}
        </div>`).join('')}
    </div>`,
};

/* ── With Icons ──────────────────────────────────────────────
   Left / right / icon-only. Controls: color + size           */
export const IconPlacement = {
  name: 'With Icons',
  args: { color: 'primary', size: 'md' },
  parameters: {
    controls: { include: ['color', 'size'] },
    docs: {
      description: {
        story: `
Left icon, right icon, and icon-only at any **color** + **size** combination.
Icon size: 20px for md/lg/xl, 16px for xs/sm.
        `,
      },
      source: {
        code: `<!-- Left icon -->
<button class="btn btn-primary btn-md">
  <svg><!-- heroicon 20px --></svg>
  <span>Label</span>
</button>

<!-- Right icon -->
<button class="btn btn-primary btn-md">
  <span>Label</span>
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
  render: ({ color, size }) => `
    <div style="display:flex;flex-direction:column;gap:12px;">
      <div style="display:flex;gap:8px;align-items:center;">
        <span style="width:100px;font:11px/1 sans-serif;color:#6B7280;">Left icon</span>
        ${btn({ label: 'Button', color, size, iconLeft: true })}
        ${btn({ label: 'Button', color, size, iconLeft: true, outline: true })}
      </div>
      <div style="display:flex;gap:8px;align-items:center;">
        <span style="width:100px;font:11px/1 sans-serif;color:#6B7280;">Right icon</span>
        ${btn({ label: 'Button', color, size, iconRight: true })}
        ${btn({ label: 'Button', color, size, iconRight: true, outline: true })}
      </div>
      <div style="display:flex;gap:8px;align-items:center;">
        <span style="width:100px;font:11px/1 sans-serif;color:#6B7280;">Icon only</span>
        ${btn({ label: 'Action', color, size, iconOnly: true })}
        ${btn({ label: 'Action', color, size, iconOnly: true, outline: true })}
      </div>
    </div>`,
};

/* ── Pill ────────────────────────────────────────────────────
   Pill border-radius. Controls: color + size                  */
export const Pill = {
  name: 'Pill — rounded corners',
  args: { size: 'md' },
  parameters: {
    controls: { include: ['size'] },
    docs: {
      description: {
        story: 'Full pill border-radius via `.btn-pill`. Use **size** to see pill at any size.',
      },
      source: {
        code: `<button class="btn btn-primary btn-pill btn-md">Primary</button>
<button class="btn btn-outline-primary btn-pill btn-md">Primary outline</button>`,
        language: 'html',
      },
    },
  },
  render: ({ size }) => `
    <div style="display:flex;flex-direction:column;gap:12px;">
      <div style="display:flex;flex-wrap:wrap;gap:8px;align-items:center;">
        ${['primary','dark','green','red','yellow','blue','gray'].map(c =>
          btn({ label: c.charAt(0).toUpperCase()+c.slice(1), color: c, size, pill: true })
        ).join('')}
      </div>
      <div style="display:flex;flex-wrap:wrap;gap:8px;align-items:center;">
        ${['primary','dark','green','red','yellow','blue'].map(c =>
          btn({ label: c.charAt(0).toUpperCase()+c.slice(1), color: c, size, pill: true, outline: true })
        ).join('')}
      </div>
    </div>`,
};

/* ── Disabled ────────────────────────────────────────────────
   Disabled state across colors. Control: size                 */
export const Disabled = {
  name: 'Disabled state',
  args: { size: 'md' },
  parameters: {
    controls: { include: ['size'] },
    docs: {
      description: {
        story: 'Disabled renders at 50% opacity with `pointer-events: none`. Use **size** to verify across sizes.',
      },
      source: {
        code: `<button class="btn btn-primary btn-md" disabled aria-disabled="true">Disabled</button>
<button class="btn btn-outline-primary btn-md" disabled aria-disabled="true">Outline disabled</button>`,
        language: 'html',
      },
    },
  },
  render: ({ size }) => `
    <div style="display:flex;flex-direction:column;gap:12px;">
      <div style="display:flex;flex-wrap:wrap;gap:8px;">
        ${['primary','dark','green','red','yellow','blue','gray'].map(c =>
          btn({ label: c.charAt(0).toUpperCase()+c.slice(1), color: c, size, disabled: true })
        ).join('')}
      </div>
      <div style="display:flex;flex-wrap:wrap;gap:8px;">
        ${['primary','dark','green','red','yellow','blue'].map(c =>
          btn({ label: c.charAt(0).toUpperCase()+c.slice(1), color: c, size, disabled: true, outline: true })
        ).join('')}
      </div>
    </div>`,
};
