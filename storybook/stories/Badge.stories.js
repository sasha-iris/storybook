/**
 * Iris Library — Badge
 *
 * Source: Figma › Iris Library › Badges (node 639:4756)
 * Light mode only.
 *
 * ## Figma variants
 * Type: Basic · Only icon
 * Size: sm · lg
 * Theme: gray · blue · indigo · purple · pink · green · yellow · red
 * Icon: leading clock icon (optional)
 * Dismiss: × remove button (optional)
 *
 * ## Size spec (from Figma)
 * | Size | Height | Font | Weight | Padding  | Icon |
 * |------|--------|------|--------|----------|------|
 * | lg   | 25 px  | 14px | 400    | 2px 12px | 16px |
 * | sm   | 22 px  | 12px | 500    | 2px 10px | 14px |
 *
 * ## Color tokens (bg / text / dismiss ×)
 * gray:   #f3f4f6 / #101828 / #6a7282
 * blue:   #dbeafe / #193cb8 / #2b7fff
 * indigo: #e5edff / #42389d / #6875f5
 * purple: #f3e8ff / #6e11b0 / #ad46ff
 * pink:   #fce7f3 / #a3004c / #f6339a
 * green:  #d0fae5 / #006045 / #00bc7d
 * yellow: #fef9c2 / #894b00 / #fdc700
 * red:    #ffe2e2 / #9f0712 / #fb2c36
 */

const BADGE_COLORS = {
  gray:   { bg: '#f3f4f6', text: '#101828', dismiss: '#6a7282' },
  blue:   { bg: '#dbeafe', text: '#193cb8', dismiss: '#2b7fff' },
  indigo: { bg: '#e5edff', text: '#42389d', dismiss: '#6875f5' },
  purple: { bg: '#f3e8ff', text: '#6e11b0', dismiss: '#ad46ff' },
  pink:   { bg: '#fce7f3', text: '#a3004c', dismiss: '#f6339a' },
  green:  { bg: '#d0fae5', text: '#006045', dismiss: '#00bc7d' },
  yellow: { bg: '#fef9c2', text: '#894b00', dismiss: '#fdc700' },
  red:    { bg: '#ffe2e2', text: '#9f0712', dismiss: '#fb2c36' },
};

const COLOR_NAMES = Object.keys(BADGE_COLORS);

// Heroicons mini — clock (20x20 solid)
const ICON_PATH = 'M10 18a8 8 0 100-16 8 8 0 000 16zm.75-13a.75.75 0 00-1.5 0v5c0 .414.336.75.75.75h4a.75.75 0 000-1.5H10.75V5z';
// Heroicons mini — x-mark (20x20 solid)
const DISMISS_PATH = 'M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z';

function badge({ label = 'Badge', color = 'indigo', size = 'lg', icon = false, dismissible = false }) {
  const { bg, text, dismiss } = BADGE_COLORS[color] ?? BADGE_COLORS.indigo;
  const isLg = size === 'lg';
  const fs = isLg ? 'var(--text-sm)' : 'var(--text-xs)';
  const fw = isLg ? '400' : 'var(--font-medium)';
  const pad = isLg ? '2px 12px' : '2px 10px';
  const iconSz = isLg ? 16 : 14;

  const iconHtml = icon
    ? `<svg width="${iconSz}" height="${iconSz}" viewBox="0 0 20 20" fill="${text}" aria-hidden="true" style="flex-shrink:0;"><path fill-rule="evenodd" d="${ICON_PATH}" clip-rule="evenodd"/></svg>`
    : '';

  const dismissHtml = dismissible
    ? `<button type="button" aria-label="Remove" style="display:inline-flex;align-items:center;justify-content:center;background:none;border:none;cursor:pointer;padding:0;line-height:0;"><svg width="${iconSz}" height="${iconSz}" viewBox="0 0 20 20" fill="${dismiss}" aria-hidden="true"><path fill-rule="evenodd" d="${DISMISS_PATH}" clip-rule="evenodd"/></svg></button>`
    : '';

  return `<span style="display:inline-flex;align-items:center;gap:4px;background:${bg};color:${text};font-size:${fs};font-weight:${fw};border-radius:6px;padding:${pad};white-space:nowrap;line-height:1.5;font-family:inherit;">${iconHtml}<span>${label}</span>${dismissHtml}</span>`;
}

export default {
  title: 'Iris Library/Badge',
  tags: ['autodocs', 'stable'],
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `
Status badges for labeling content, categorizing items, and indicating state.

**When to use**
- Label a record's status (Active, Pending, Archived)
- Categorize items by topic, priority, or type
- Show a removable filter chip in a search or filter bar

**When NOT to use**
- Interactive filter toggles → use Toggle buttons or Chips
- Long explanatory text → use an Alert or inline notice
- Navigation indicators → use a Tab with a counter instead

**Anatomy**
\`[icon?] label [×?]\` — icon and dismiss button are both optional.

**Sizes** — \`lg\` (14 px text, 25 px height) for default usage; \`sm\` (12 px, 22 px) for dense tables and compact lists.

**Colors** — 8 themes: gray (neutral), blue, indigo, purple, pink, green, yellow, red.
Each theme has a matched background, text, and dismiss-icon color confirmed from Figma.
        `,
      },
    },
  },
  argTypes: {
    label: {
      control: 'text',
      description: 'Badge label text.',
      table: { category: 'Content', defaultValue: { summary: 'Active' } },
    },
    icon: {
      control: 'boolean',
      description: 'Show a leading icon before the label. Icon color matches the theme text color.',
      table: { category: 'Content', defaultValue: { summary: false } },
    },
    dismissible: {
      control: 'boolean',
      description: 'Show a dismiss × button after the label. Wire `aria-label="Remove [label]"` for screen readers. The × uses a brighter variant of the theme color.',
      table: { category: 'Content', defaultValue: { summary: false } },
    },
    color: {
      control: 'select',
      options: COLOR_NAMES,
      description: 'Color theme. Semantic: green = success · red = error · yellow = warning · gray = neutral · blue/indigo/purple/pink = category.',
      table: { category: 'Appearance', defaultValue: { summary: 'indigo' } },
    },
    size: {
      control: 'radio',
      options: ['lg', 'sm'],
      description: '`lg` — 14 px text, 25 px height, 12 px h-padding. `sm` — 12 px text, 22 px height, 10 px h-padding.',
      table: { category: 'Appearance', defaultValue: { summary: 'lg' } },
    },
  },
  args: {
    label: 'Active',
    color: 'indigo',
    size: 'lg',
    icon: false,
    dismissible: false,
  },
};

/* ─────────────────────────────────────────────
   INTERACTIVE
───────────────────────────────────────────── */
export const Interactive = {
  name: 'Interactive (Controls)',
  render: (args) => badge(args),
  parameters: {
    docs: {
      description: {
        story: 'Use the **Controls** panel to configure any combination of color, size, icon, and dismiss button.',
      },
      source: {
        transform: (_src, ctx) => {
          const a = ctx.args;
          const { bg, text, dismiss } = BADGE_COLORS[a.color] ?? BADGE_COLORS.indigo;
          const isLg = a.size === 'lg';
          const fs = isLg ? 'var(--text-sm)' : 'var(--text-xs)';
          const fw = isLg ? '400' : 'var(--font-medium)';
          const pad = isLg ? '2px 12px' : '2px 10px';
          const iconSz = isLg ? 16 : 14;

          const iconPart = a.icon
            ? `\n  <svg width="${iconSz}" height="${iconSz}" viewBox="0 0 20 20" fill="${text}" aria-hidden="true">\n    <path fill-rule="evenodd" d="${ICON_PATH}" clip-rule="evenodd"/>\n  </svg>`
            : '';
          const dismissPart = a.dismissible
            ? `\n  <button type="button" aria-label="Remove ${a.label}" style="display:inline-flex;align-items:center;justify-content:center;background:none;border:none;cursor:pointer;padding:0;">\n    <svg width="${iconSz}" height="${iconSz}" viewBox="0 0 20 20" fill="${dismiss}" aria-hidden="true">\n      <path fill-rule="evenodd" d="${DISMISS_PATH}" clip-rule="evenodd"/>\n    </svg>\n  </button>`
            : '';

          return `<span style="display:inline-flex;align-items:center;gap:4px;background:${bg};color:${text};font-size:${fs};font-weight:${fw};border-radius:6px;padding:${pad};white-space:nowrap;line-height:1.5;">${iconPart}\n  <span>${a.label}</span>${dismissPart}\n</span>`;
        },
      },
    },
  },
};

/* ─────────────────────────────────────────────
   ALL COLORS
───────────────────────────────────────────── */
export const AllColors = {
  name: 'Colors — all 8 themes',
  args: { size: 'lg' },
  parameters: {
    controls: { include: ['size'] },
    docs: {
      description: {
        story: `
All 8 color themes. Use the **size** control to compare at either size.

**✅ Do** — pick color by semantic meaning: green = success, red = error/danger, yellow = warning, gray = neutral.
**❌ Don't** — rely on color alone to convey meaning — always pair with a descriptive label (WCAG 1.4.1).
        `,
      },
      source: {
        code: `<!-- Gray — neutral status -->
<span style="display:inline-flex;align-items:center;gap:4px;background:#f3f4f6;color:#101828;font-size:var(--text-sm);font-weight:400;border-radius:6px;padding:2px 12px;white-space:nowrap;line-height:1.5;">Neutral</span>

<!-- Green — success / active -->
<span style="display:inline-flex;align-items:center;gap:4px;background:#d0fae5;color:#006045;font-size:var(--text-sm);font-weight:400;border-radius:6px;padding:2px 12px;white-space:nowrap;line-height:1.5;">Active</span>

<!-- Red — error / failed -->
<span style="display:inline-flex;align-items:center;gap:4px;background:#ffe2e2;color:#9f0712;font-size:var(--text-sm);font-weight:400;border-radius:6px;padding:2px 12px;white-space:nowrap;line-height:1.5;">Failed</span>

<!-- Yellow — warning / pending -->
<span style="display:inline-flex;align-items:center;gap:4px;background:#fef9c2;color:#894b00;font-size:var(--text-sm);font-weight:400;border-radius:6px;padding:2px 12px;white-space:nowrap;line-height:1.5;">Pending</span>`,
        language: 'html',
      },
    },
  },
  render: ({ size }) => {
    const labels = {
      gray: 'Neutral', blue: 'Assigned', indigo: 'In review',
      purple: 'Scheduled', pink: 'Draft', green: 'Active',
      yellow: 'Pending', red: 'Failed',
    };
    return `<div style="display:flex;flex-wrap:wrap;gap:8px;align-items:center;">
      ${COLOR_NAMES.map(c => badge({ label: labels[c], color: c, size })).join('\n      ')}
    </div>`;
  },
};

/* ─────────────────────────────────────────────
   ALL SIZES
───────────────────────────────────────────── */
export const AllSizes = {
  name: 'Sizes — lg and sm',
  args: { color: 'indigo' },
  parameters: {
    controls: { include: ['color'] },
    docs: {
      description: {
        story: `
\`lg\` (default) and \`sm\` at the selected color theme.

**✅ Do** — use \`sm\` in dense tables or compact list rows where vertical space is tight.
**✅ Do** — use \`lg\` as the default in cards, page headers, and status columns.
**❌ Don't** — mix sizes within the same row — pick one and be consistent per context.
        `,
      },
      source: {
        code: `<!-- lg (default) -->
<span style="display:inline-flex;align-items:center;gap:4px;background:#e5edff;color:#42389d;font-size:var(--text-sm);font-weight:400;border-radius:6px;padding:2px 12px;white-space:nowrap;line-height:1.5;">In review</span>

<!-- sm (compact) -->
<span style="display:inline-flex;align-items:center;gap:4px;background:#e5edff;color:#42389d;font-size:var(--text-xs);font-weight:var(--font-medium);border-radius:6px;padding:2px 10px;white-space:nowrap;line-height:1.5;">In review</span>`,
        language: 'html',
      },
    },
  },
  render: ({ color }) => `
    <div style="display:flex;flex-direction:column;gap:16px;">
      <div style="display:flex;align-items:center;gap:16px;">
        <span style="width:32px;font:11px/1 sans-serif;color:#9ca3af;">lg</span>
        ${badge({ label: 'In review', color, size: 'lg' })}
      </div>
      <div style="display:flex;align-items:center;gap:16px;">
        <span style="width:32px;font:11px/1 sans-serif;color:#9ca3af;">sm</span>
        ${badge({ label: 'In review', color, size: 'sm' })}
      </div>
    </div>`,
};

/* ─────────────────────────────────────────────
   WITH ICON
───────────────────────────────────────────── */
export const WithIcon = {
  name: 'With icon — all themes',
  args: { size: 'lg' },
  parameters: {
    controls: { include: ['size'] },
    docs: {
      description: {
        story: `
All 8 themes with a leading icon. Use the **size** control to compare.

**✅ Do** — use the icon to reinforce the badge meaning (clock = pending/scheduled, check = done).
**❌ Don't** — use the icon purely as decoration — it adds visual complexity without benefit.
        `,
      },
      source: {
        code: `<span style="display:inline-flex;align-items:center;gap:4px;background:#e5edff;color:#42389d;font-size:var(--text-sm);font-weight:400;border-radius:6px;padding:2px 12px;white-space:nowrap;line-height:1.5;">
  <svg width="16" height="16" viewBox="0 0 20 20" fill="#42389d" aria-hidden="true" style="flex-shrink:0;">
    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm.75-13a.75.75 0 00-1.5 0v5c0 .414.336.75.75.75h4a.75.75 0 000-1.5H10.75V5z" clip-rule="evenodd"/>
  </svg>
  <span>Scheduled</span>
</span>`,
        language: 'html',
      },
    },
  },
  render: ({ size }) => {
    const labels = {
      gray: 'Unknown', blue: 'Assigned', indigo: 'Scheduled',
      purple: 'Queued', pink: 'Draft', green: 'Active',
      yellow: 'Pending', red: 'Overdue',
    };
    return `<div style="display:flex;flex-wrap:wrap;gap:8px;align-items:center;">
      ${COLOR_NAMES.map(c => badge({ label: labels[c], color: c, size, icon: true })).join('\n      ')}
    </div>`;
  },
};

/* ─────────────────────────────────────────────
   DISMISSIBLE
───────────────────────────────────────────── */
export const Dismissible = {
  name: 'Dismissible — with × button',
  args: { size: 'lg' },
  parameters: {
    controls: { include: ['size'] },
    docs: {
      description: {
        story: `
All 8 themes with a dismiss × button. The × uses a brighter variant of the theme color (confirmed from Figma — not the same as the text color).

**✅ Do** — use for removable filter chips or tags (e.g. selected filters in a search bar).
**✅ Do** — set \`aria-label="Remove [label]"\` on the × button for screen readers.
**❌ Don't** — use dismissible badges for read-only status labels — use the basic badge instead.
        `,
      },
      source: {
        code: `<span style="display:inline-flex;align-items:center;gap:4px;background:#e5edff;color:#42389d;font-size:var(--text-sm);font-weight:400;border-radius:6px;padding:2px 12px;white-space:nowrap;line-height:1.5;">
  <span>In review</span>
  <button type="button" aria-label="Remove In review"
    style="display:inline-flex;align-items:center;justify-content:center;background:none;border:none;cursor:pointer;padding:0;">
    <svg width="16" height="16" viewBox="0 0 20 20" fill="#6875f5" aria-hidden="true">
      <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"/>
    </svg>
  </button>
</span>`,
        language: 'html',
      },
    },
  },
  render: ({ size }) => {
    const labels = {
      gray: 'Neutral', blue: 'Assigned', indigo: 'In review',
      purple: 'Scheduled', pink: 'Draft', green: 'Active',
      yellow: 'Pending', red: 'Failed',
    };
    return `<div style="display:flex;flex-wrap:wrap;gap:8px;align-items:center;">
      ${COLOR_NAMES.map(c => badge({ label: labels[c], color: c, size, dismissible: true })).join('\n      ')}
    </div>`;
  },
};
