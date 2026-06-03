/**
 * Iris Library — Indicators
 *
 * Source: Figma › Iris Library › Indicators
 *   Component set: node 110:20493
 *   Examples:      node 110:22652
 * Light mode only.
 *
 * ## Indicator types (from Figma)
 * Default        — 12×12 dot + label text (legend / status row)
 * Count          — 24×24 circle #f05252 with number (notification badge)
 * Icon           — 24×24 circle var(--color-primary) with check icon
 * Stepper        — outer 24×24 #bedbff + inner 12×12 var(--color-primary)
 * Badge          — pill h=22 br=99 (available / unavailable status)
 *
 * ## Legend colors (node 110:22652)
 * blue:   var(--color-primary)
 * purple: #9061f9
 * indigo: #6875f5
 * teal:   #00bba7
 *
 * ## Badge variants
 * available:   bg=#def7ec  dot=#0e9f6e  text=#03543f
 * unavailable: bg=#fde8e8  dot=#f05252  text=#9b1c1c
 */

const LEGEND_COLORS = {
  blue:   'var(--color-primary)',
  purple: '#9061f9',
  indigo: '#6875f5',
  teal:   '#00bba7',
};

const BADGE_VARIANTS = {
  available:   { bg: '#def7ec', dot: '#0e9f6e', text: '#03543f' },
  unavailable: { bg: '#fde8e8', dot: '#f05252', text: '#9b1c1c' },
};

// Check icon — 16×16 stroke
const CHECK_SVG = `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="var(--color-bg-white)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M2.5 8.5L6 12L13.5 4"/></svg>`;

function dotIndicator({ label = 'Indicator text', dotColor = 'var(--color-primary)' }) {
  return `<span style="display:inline-flex;align-items:center;gap:4px;">
  <svg width="12" height="12" viewBox="0 0 12 12" aria-hidden="true">
    <circle cx="6" cy="6" r="6" fill="${dotColor}"/>
  </svg>
  <span style="font-size:var(--text-sm);font-weight:var(--font-medium);color:var(--color-text-heading);line-height:1;">${label}</span>
</span>`;
}

function countIndicator({ count = 1 }) {
  return `<span style="display:inline-flex;align-items:center;justify-content:center;width:24px;height:24px;border-radius:50%;background:#f05252;border:2px solid var(--color-bg-white);font-size:var(--text-sm);font-weight:var(--font-medium);color:var(--color-bg-white);line-height:1;" aria-label="${count} notifications">${count}</span>`;
}

function iconIndicator() {
  return `<span style="display:inline-flex;align-items:center;justify-content:center;width:24px;height:24px;border-radius:50%;background:var(--color-primary);" aria-label="Completed">${CHECK_SVG}</span>`;
}

function stepperIndicator() {
  return `<span style="display:inline-flex;align-items:center;justify-content:center;width:24px;height:24px;border-radius:50%;background:#bedbff;" aria-hidden="true">
  <span style="width:12px;height:12px;border-radius:50%;background:var(--color-primary);display:block;"></span>
</span>`;
}

function badgeIndicator({ label = 'Available', variant = 'available' }) {
  const { bg, dot, text } = BADGE_VARIANTS[variant] ?? BADGE_VARIANTS.available;
  return `<span style="display:inline-flex;align-items:center;gap:6px;height:22px;padding:0 10px;border-radius:99px;background:${bg};" role="status">
  <svg width="12" height="12" viewBox="0 0 12 12" aria-hidden="true">
    <circle cx="6" cy="6" r="6" fill="${dot}"/>
  </svg>
  <span style="font-size:var(--text-xs);font-weight:var(--font-medium);color:${text};line-height:1;white-space:nowrap;">${label}</span>
</span>`;
}

export default {
  title: 'Iris Library/Indicators',
  tags: ['autodocs', 'stable'],
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `
Small visual signals that communicate status, count, or progress — without taking up significant space.

**When to use**
- Show online/offline or availability status next to a user name → **Badge indicator**
- Label chart series or legend items with a color dot → **Dot (legend) indicator**
- Show an unread count on a button or nav icon → **Count indicator**
- Mark completed or active steps in a multi-step form → **Icon / Stepper indicator**

**When NOT to use**
- Standalone status labels that need more prominence → use Badge or Chip
- Dismissible tags or filter chips → use Chip or Tag
- Page-level alerts requiring action → use Alert or Toast

**Anatomy**
Five distinct types — all light mode only:
- \`Dot\` — 12×12 dot + label (var(--text-sm)/var(--font-medium)). Used for chart legends and status rows.
- \`Count\` — 24×24 red circle with a number. Overlaid on buttons or nav items.
- \`Icon\` — 24×24 blue circle with a check mark. Marks a completed step.
- \`Stepper\` — 24×24 outer ring (#bedbff) with 12×12 inner dot (var(--color-primary)). Active/pending step in a stepper.
- \`Badge\` — pill shape (h=22, br=99). Green = available, red = unavailable.
        `,
      },
    },
  },
  argTypes: {
    type: {
      control: 'select',
      options: ['dot', 'count', 'icon', 'stepper', 'badge'],
      description: 'Indicator variant. Each type has a distinct visual and semantic role.',
      table: { category: 'Appearance', defaultValue: { summary: 'badge' } },
    },
    label: {
      control: 'text',
      description: 'Text label. Used by `dot` and `badge` types only.',
      table: { category: 'Content', defaultValue: { summary: 'Available' } },
      if: { arg: 'type', match: /^(dot|badge)$/ },
    },
    variant: {
      control: 'select',
      options: ['available', 'unavailable'],
      description: 'Color variant for the **badge** type only. `available` = green, `unavailable` = red.',
      table: { category: 'Appearance', defaultValue: { summary: 'available' } },
      if: { arg: 'type', eq: 'badge' },
    },
    dotColor: {
      control: 'color',
      description: 'Dot fill for the **dot (legend)** type. Use one of the standard legend colors: blue `var(--color-primary)`, purple `#9061f9`, indigo `#6875f5`, teal `#00bba7`.',
      table: { category: 'Appearance', defaultValue: { summary: 'var(--color-primary)' } },
      if: { arg: 'type', eq: 'dot' },
    },
    count: {
      control: { type: 'number', min: 1, max: 99 },
      description: 'Number shown inside the **count** indicator. Pairs with `aria-label` for screen readers.',
      table: { category: 'Content', defaultValue: { summary: 1 } },
      if: { arg: 'type', eq: 'count' },
    },
  },
  args: {
    type: 'badge',
    label: 'Available',
    variant: 'available',
    dotColor: 'var(--color-primary)',
    count: 3,
  },
};

/* ─────────────────────────────────────────────
   INTERACTIVE
───────────────────────────────────────────── */
export const Interactive = {
    name: 'Interactive (Controls)',
  render: ({ type, label, variant, dotColor, count }) => {
    const htmlCode = `<div style="display:inline-block;width:12px;height:12px;border-radius:50%;background:${dotColor || 'var(--color-primary)'};"></div>`;
    const reactCode = `<div style={{\n  display: 'inline-block',\n  width: '12px',\n  height: '12px',\n  borderRadius: '50%',\n  background: color,\n}} />`;
    const componentCode = `export function Indicator({ type = 'dot', color = 'var(--color-primary)', label, count }) {\n  return (\n    <div style={{\n      display: 'inline-block',\n      width: '12px',\n      height: '12px',\n      borderRadius: '50%',\n      background: color,\n    }} />\n  );\n}`;
    const htmlEscaped = htmlCode.replace(/</g, '&lt;').replace(/>/g, '&gt;');
    const reactEscaped = reactCode.replace(/</g, '&lt;').replace(/>/g, '&gt;');
    const componentEscaped = componentCode.replace(/</g, '&lt;').replace(/>/g, '&gt;');
    let preview;
    switch (type) {
      case 'dot':     preview = dotIndicator({ label, dotColor }); break;
      case 'count':   preview = countIndicator({ count }); break;
      case 'icon':    preview = iconIndicator(); break;
      case 'stepper': preview = stepperIndicator(); break;
      default:        preview = badgeIndicator({ label, variant });
    }
    return `<div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:40px;"><div style="padding:20px;border:1px solid var(--color-border-default);border-radius:8px;">${preview}</div><div style="display:flex;flex-direction:column;gap:24px;"><div style="padding:20px;border:1px solid var(--color-border-default);border-radius:8px;"><div style="font-weight:600;font-size:12px;margin-bottom:12px;">HTML</div><div style="background:var(--color-bg-tertiary);padding:12px;border-radius:6px;margin-bottom:12px;overflow:auto;"><pre style="margin:0;font-family:monospace;font-size:13px;"><code>${htmlEscaped}</code></pre></div><button data-copy="${htmlCode.split('"').join('&quot;')}" class="storybook-copy-btn" style="padding:8px 12px;background:var(--color-bg-secondary);border:1px solid var(--color-border-default);cursor:pointer;">Copy</button></div><div style="padding:20px;border:1px solid var(--color-border-default);border-radius:8px;"><div style="font-weight:600;font-size:12px;margin-bottom:12px;">React</div><div style="background:var(--color-bg-tertiary);padding:12px;border-radius:6px;margin-bottom:12px;overflow:auto;"><pre style="margin:0;font-family:monospace;font-size:13px;"><code>${reactEscaped}</code></pre></div><button data-copy="${reactCode.split('"').join('&quot;')}" class="storybook-copy-btn" style="padding:8px 12px;background:var(--color-bg-secondary);border:1px solid var(--color-border-default);cursor:pointer;">Copy</button></div><div style="padding:20px;border:1px solid var(--color-border-default);border-radius:8px;"><div style="font-weight:600;font-size:12px;margin-bottom:12px;">Component</div><div style="background:var(--color-bg-tertiary);padding:12px;border-radius:6px;margin-bottom:12px;overflow:auto;"><pre style="margin:0;font-family:monospace;font-size:13px;"><code>${componentEscaped}</code></pre></div><button data-copy="${componentCode.split('"').join('&quot;')}" class="storybook-copy-btn" style="padding:8px 12px;background:var(--color-bg-secondary);border:1px solid var(--color-border-default);cursor:pointer;">Copy</button></div></div></div><script>document.querySelectorAll('.storybook-copy-btn').forEach(b=>{b.addEventListener('click',function(){navigator.clipboard.writeText(this.dataset.copy);this.innerHTML='Copied!';this.style.background='var(--color-success-light)';setTimeout(()=>{this.innerHTML='Copy';this.style.background='var(--color-bg-secondary)';},2000);});});</script>`;
  },
  parameters: {
    docs: {
      description: {
        story: 'Use the **Controls** panel to switch between all 5 indicator types and configure their props. Note: `label` / `variant` apply to badge; `dotColor` applies to dot; `count` applies to count.',
      },
      source: {
        transform: (_src, ctx) => {
          const { type, label, variant, dotColor, count } = ctx.args;
          if (type === 'dot') {
            return `<span style="display:inline-flex;align-items:center;gap:4px;">
  <svg width="12" height="12" viewBox="0 0 12 12" aria-hidden="true">
    <circle cx="6" cy="6" r="6" fill="${dotColor}"/>
  </svg>
  <span style="font-size:var(--text-sm);font-weight:var(--font-medium);color:var(--color-text-heading);line-height:1;">${label}</span>
</span>`;
          }
          if (type === 'count') {
            return `<span style="display:inline-flex;align-items:center;justify-content:center;width:24px;height:24px;border-radius:50%;background:#f05252;border:2px solid var(--color-bg-white);font-size:var(--text-sm);font-weight:var(--font-medium);color:var(--color-bg-white);line-height:1;" aria-label="${count} notifications">${count}</span>`;
          }
          if (type === 'icon') {
            return `<span style="display:inline-flex;align-items:center;justify-content:center;width:24px;height:24px;border-radius:50%;background:var(--color-primary);" aria-label="Completed">
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="var(--color-bg-white)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
    <path d="M2.5 8.5L6 12L13.5 4"/>
  </svg>
</span>`;
          }
          if (type === 'stepper') {
            return `<span style="display:inline-flex;align-items:center;justify-content:center;width:24px;height:24px;border-radius:50%;background:#bedbff;" aria-hidden="true">
  <span style="width:12px;height:12px;border-radius:50%;background:var(--color-primary);display:block;"></span>
</span>`;
          }
          // badge
          const bv = BADGE_VARIANTS[variant] ?? BADGE_VARIANTS.available;
          return `<span style="display:inline-flex;align-items:center;gap:6px;height:22px;padding:0 10px;border-radius:99px;background:${bv.bg};" role="status">
  <svg width="12" height="12" viewBox="0 0 12 12" aria-hidden="true">
    <circle cx="6" cy="6" r="6" fill="${bv.dot}"/>
  </svg>
  <span style="font-size:var(--text-xs);font-weight:var(--font-medium);color:${bv.text};line-height:1;white-space:nowrap;">${label}</span>
</span>`;
        },
      },
    },
  },
};

/* ─────────────────────────────────────────────
   ALL TYPES
───────────────────────────────────────────── */
export const AllTypes = {
    name: 'All types',
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story: `
All 5 indicator types side by side.

| Type | Size | Use case |
|---|---|---|
| Dot | 12×12 + text | Chart legend, status row |
| Count | 24×24 | Notification count on button/nav |
| Icon | 24×24 | Completed step |
| Stepper | 24×24 | Active/pending step |
| Badge | 22px pill | Availability status |

**✅ Do** — pick the type that matches the semantic (status, count, step, legend) — don't use count badge just for color.
**❌ Don't** — stack multiple indicator types on the same element.
        `,
      },
      source: {
        code: `<!-- Dot (legend) -->
<span style="display:inline-flex;align-items:center;gap:4px;">
  <svg width="12" height="12" viewBox="0 0 12 12" aria-hidden="true"><circle cx="6" cy="6" r="6" fill="var(--color-primary)"/></svg>
  <span style="font-size:var(--text-sm);font-weight:var(--font-medium);color:var(--color-text-heading);">Revenue</span>
</span>

<!-- Count -->
<span style="display:inline-flex;align-items:center;justify-content:center;width:24px;height:24px;border-radius:50%;background:#f05252;border:2px solid var(--color-bg-white);font-size:var(--text-sm);font-weight:var(--font-medium);color:var(--color-bg-white);" aria-label="3 notifications">3</span>

<!-- Badge: available -->
<span style="display:inline-flex;align-items:center;gap:6px;height:22px;padding:0 10px;border-radius:99px;background:#def7ec;" role="status">
  <svg width="12" height="12" viewBox="0 0 12 12" aria-hidden="true"><circle cx="6" cy="6" r="6" fill="#0e9f6e"/></svg>
  <span style="font-size:var(--text-xs);font-weight:var(--font-medium);color:#03543f;">Available</span>
</span>`,
        language: 'html',
      },
    },
  },
  render: () => `<div style="display:flex;flex-wrap:wrap;align-items:center;gap:24px;">
    <div style="display:flex;flex-direction:column;align-items:center;gap:8px;">
      <span style="font-size:11px;color:var(--color-text-secondary);text-transform:uppercase;letter-spacing:.05em;">Dot</span>
      ${dotIndicator({ label: 'Revenue', dotColor: 'var(--color-primary)' })}
    </div>
    <div style="display:flex;flex-direction:column;align-items:center;gap:8px;">
      <span style="font-size:11px;color:var(--color-text-secondary);text-transform:uppercase;letter-spacing:.05em;">Count</span>
      ${countIndicator({ count: 3 })}
    </div>
    <div style="display:flex;flex-direction:column;align-items:center;gap:8px;">
      <span style="font-size:11px;color:var(--color-text-secondary);text-transform:uppercase;letter-spacing:.05em;">Icon</span>
      ${iconIndicator()}
    </div>
    <div style="display:flex;flex-direction:column;align-items:center;gap:8px;">
      <span style="font-size:11px;color:var(--color-text-secondary);text-transform:uppercase;letter-spacing:.05em;">Stepper</span>
      ${stepperIndicator()}
    </div>
    <div style="display:flex;flex-direction:column;align-items:center;gap:8px;">
      <span style="font-size:11px;color:var(--color-text-secondary);text-transform:uppercase;letter-spacing:.05em;">Badge</span>
      ${badgeIndicator({ label: 'Available', variant: 'available' })}
    </div>
  </div>`,
};

/* ─────────────────────────────────────────────
   LEGEND COLORS
───────────────────────────────────────────── */
export const LegendColors = {
    name: 'Dot — legend colors',
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story: `
The 4 standard chart legend colors from Figma. Use these dots to label series in charts, tables, or dashboards.

**✅ Do** — pair each dot color with a meaningful series name — never use color alone (WCAG 1.4.1).
**✅ Do** — maintain consistent color-to-series mapping across all charts on the same page.
**❌ Don't** — invent new dot colors outside this palette — extend in Figma first.
        `,
      },
      source: {
        code: `<span style="display:inline-flex;align-items:center;gap:4px;">
  <svg width="12" height="12" viewBox="0 0 12 12" aria-hidden="true"><circle cx="6" cy="6" r="6" fill="var(--color-primary)"/></svg>
  <span style="font-size:var(--text-sm);font-weight:var(--font-medium);color:var(--color-text-heading);">Revenue</span>
</span>`,
        language: 'html',
      },
    },
  },
  render: () => {
    const labels = { blue: 'Revenue', purple: 'Expenses', indigo: 'Profit', teal: 'Forecast' };
    return `<div style="display:flex;flex-wrap:wrap;gap:16px;align-items:center;">
      ${Object.entries(LEGEND_COLORS).map(([name, color]) =>
        dotIndicator({ label: labels[name], dotColor: color })
      ).join('\n      ')}
    </div>`;
  },
};

/* ─────────────────────────────────────────────
   BADGE VARIANTS
───────────────────────────────────────────── */
export const BadgeVariants = {
    name: 'Badge — availability status',
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story: `
Two badge indicator variants for user availability status (from Figma node 110:22652).

**✅ Do** — use \`role="status"\` on the badge so screen readers announce availability changes.
**✅ Do** — pair with a user name for context — never use the badge alone.
**❌ Don't** — use these pill badges for general-purpose categorization — use Tag or Badge for that.
        `,
      },
      source: {
        code: `<!-- Available -->
<span style="display:inline-flex;align-items:center;gap:6px;height:22px;padding:0 10px;border-radius:99px;background:#def7ec;" role="status">
  <svg width="12" height="12" viewBox="0 0 12 12" aria-hidden="true"><circle cx="6" cy="6" r="6" fill="#0e9f6e"/></svg>
  <span style="font-size:var(--text-xs);font-weight:var(--font-medium);color:#03543f;">Available</span>
</span>

<!-- Unavailable -->
<span style="display:inline-flex;align-items:center;gap:6px;height:22px;padding:0 10px;border-radius:99px;background:#fde8e8;" role="status">
  <svg width="12" height="12" viewBox="0 0 12 12" aria-hidden="true"><circle cx="6" cy="6" r="6" fill="#f05252"/></svg>
  <span style="font-size:var(--text-xs);font-weight:var(--font-medium);color:#9b1c1c;">Unavailable</span>
</span>`,
        language: 'html',
      },
    },
  },
  render: () => `<div style="display:flex;gap:12px;align-items:center;">
    ${badgeIndicator({ label: 'Available',   variant: 'available' })}
    ${badgeIndicator({ label: 'Unavailable', variant: 'unavailable' })}
  </div>`,
};

/* ─────────────────────────────────────────────
   IN CONTEXT — BUTTON WITH COUNT
───────────────────────────────────────────── */
export const InContextButton = {
    name: 'In context — button with count',
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story: `
Count indicator overlaid on a button — the pattern from Figma node 110:22652.

**✅ Do** — position the count indicator at the top-right corner of the button using \`position:absolute\`.
**✅ Do** — add \`aria-label\` with the full count to the indicator span for screen readers.
**❌ Don't** — show a count of 0 — hide the indicator entirely when there are no notifications.
        `,
      },
      source: {
        code: `<div style="position:relative;display:inline-flex;">
  <button type="button" class="btn btn-primary btn-md">
    Messages
  </button>
  <span style="position:absolute;top:-8px;right:-8px;display:inline-flex;align-items:center;justify-content:center;min-width:24px;height:24px;border-radius:50%;background:#f05252;border:2px solid var(--color-bg-white);font-size:var(--text-xs);font-weight:var(--font-medium);color:var(--color-bg-white);padding:0 4px;" aria-label="8 unread messages">8</span>
</div>`,
        language: 'html',
      },
    },
  },
  render: () => `<div style="padding:16px;display:inline-flex;">
    <div style="position:relative;display:inline-flex;">
      <button type="button" style="display:inline-flex;align-items:center;gap:8px;padding:10px 16px;background:#42389d;border:none;border-radius:12px;font-size:var(--text-sm);font-weight:var(--font-medium);color:var(--color-bg-white);cursor:pointer;font-family:inherit;">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"/></svg>
        Messages
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z"/><path stroke-linecap="round" stroke-linejoin="round" d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z"/></svg>
      </button>
      <span style="position:absolute;top:-8px;right:-8px;display:inline-flex;align-items:center;justify-content:center;min-width:24px;height:24px;border-radius:50%;background:#f05252;border:2px solid var(--color-bg-white);font-size:var(--text-xs);font-weight:var(--font-medium);color:var(--color-bg-white);padding:0 4px;" aria-label="8 unread messages">8</span>
    </div>
  </div>`,
};

/* ─────────────────────────────────────────────
   IN CONTEXT — CUSTOMER TABLE WITH STATUS
───────────────────────────────────────────── */
export const InContextTable = {
    name: 'In context — customer table',
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story: `
Badge indicators used as status labels in a customer list — the "Badge indicator" example from Figma node 110:22652.

**✅ Do** — align the badge to the right of user info for quick scanning.
**✅ Do** — use \`role="status"\` so screen readers announce status changes live.
**❌ Don't** — use the badge as the only status signal without a text label (color blindness).
        `,
      },
      source: {
        code: `<div style="border:1px solid var(--color-border-default);border-radius:8px;overflow:hidden;">
  <div style="display:flex;align-items:center;justify-content:space-between;padding:10px 16px;">
    <span style="font-size:var(--text-sm);color:var(--color-text-heading);font-weight:var(--font-medium);">Sarah Johnson</span>
    <span style="display:inline-flex;align-items:center;gap:6px;height:22px;padding:0 10px;border-radius:99px;background:#def7ec;" role="status">
      <svg width="12" height="12" viewBox="0 0 12 12" aria-hidden="true"><circle cx="6" cy="6" r="6" fill="#0e9f6e"/></svg>
      <span style="font-size:var(--text-xs);font-weight:var(--font-medium);color:#03543f;">Available</span>
    </span>
  </div>
</div>`,
        language: 'html',
      },
    },
  },
  render: () => {
    const customers = [
      { name: 'Sarah Johnson',  role: 'Account Manager',    variant: 'available' },
      { name: 'Marcus Lee',     role: 'Support Engineer',   variant: 'unavailable' },
      { name: 'Priya Sharma',   role: 'Customer Success',   variant: 'available' },
      { name: 'Tom Eriksson',   role: 'Solutions Architect', variant: 'unavailable' },
    ];

    const avatar = (name) => {
      const initials = name.split(' ').map(w => w[0]).join('');
      const hue = name.charCodeAt(0) * 37 % 360;
      return `<span style="display:inline-flex;align-items:center;justify-content:center;width:32px;height:32px;border-radius:50%;background:hsl(${hue},60%,85%);font-size:var(--text-xs);font-weight:var(--font-semibold);color:hsl(${hue},40%,30%);flex-shrink:0;">${initials}</span>`;
    };

    const rows = customers.map(c => `<div style="display:flex;align-items:center;justify-content:space-between;padding:12px 16px;border-bottom:1px solid var(--color-bg-muted);">
      <div style="display:flex;align-items:center;gap:10px;">
        ${avatar(c.name)}
        <div>
          <div style="font-size:var(--text-sm);font-weight:var(--font-medium);color:var(--color-text-heading);">${c.name}</div>
          <div style="font-size:var(--text-xs);color:var(--color-text-secondary);">${c.role}</div>
        </div>
      </div>
      ${badgeIndicator({ label: c.variant === 'available' ? 'Available' : 'Unavailable', variant: c.variant })}
    </div>`).join('');

    return `<div style="border:1px solid var(--color-border-default);border-radius:8px;overflow:hidden;max-width:480px;">
      <div style="padding:12px 16px;border-bottom:1px solid var(--color-border-default);background:var(--color-bg-default);">
        <span style="font-size:13px;font-weight:var(--font-semibold);color:var(--color-text-primary);text-transform:uppercase;letter-spacing:.05em;">Support Team</span>
      </div>
      ${rows}
    </div>`;
  },
};

/* ─────────────────────────────────────────────
   IN CONTEXT — STEPPER
───────────────────────────────────────────── */
export const InContextStepper = {
    name: 'In context — stepper',
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story: `
Stepper indicators used in a multi-step progress bar — the "Stepper" example from Figma node 110:22652.

**✅ Do** — use \`aria-current="step"\` on the active step for screen readers.
**✅ Do** — use the icon indicator (blue circle + check) to mark completed steps.
**❌ Don't** — use the stepper indicator for non-sequential status states — use badge or dot instead.
        `,
      },
      source: {
        code: `<div style="display:flex;align-items:center;gap:0;">
  <!-- Completed step -->
  <span style="display:inline-flex;align-items:center;justify-content:center;width:24px;height:24px;border-radius:50%;background:var(--color-primary);" aria-label="Step 1: Completed">
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="var(--color-bg-white)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M2.5 8.5L6 12L13.5 4"/></svg>
  </span>
  <span style="flex:1;height:1px;background:var(--color-border-default);"></span>
  <!-- Active step -->
  <span style="display:inline-flex;align-items:center;justify-content:center;width:24px;height:24px;border-radius:50%;background:#bedbff;" aria-current="step" aria-label="Step 2: Current">
    <span style="width:12px;height:12px;border-radius:50%;background:var(--color-primary);display:block;"></span>
  </span>
  <span style="flex:1;height:1px;background:var(--color-border-default);"></span>
  <!-- Pending step -->
  <span style="display:inline-flex;align-items:center;justify-content:center;width:24px;height:24px;border-radius:50%;background:#bedbff;" aria-label="Step 3: Pending">
    <span style="width:12px;height:12px;border-radius:50%;background:var(--color-primary);display:block;"></span>
  </span>
</div>`,
        language: 'html',
      },
    },
  },
  render: () => {
    const steps = [
      { label: 'Account details', state: 'complete' },
      { label: 'Company info',    state: 'active' },
      { label: 'Review & submit', state: 'pending' },
    ];

    const stepIcon = (state) => {
      if (state === 'complete') return iconIndicator();
      return stepperIndicator();
    };

    const stepItems = steps.map((s, i) => `
      <div style="display:flex;flex-direction:column;align-items:center;gap:8px;flex:1;">
        <div style="display:flex;align-items:center;width:100%;">
          ${i > 0 ? '<span style="flex:1;height:1px;background:var(--color-border-default);"></span>' : '<span style="flex:1;"></span>'}
          ${stepIcon(s.state)}
          ${i < steps.length - 1 ? '<span style="flex:1;height:1px;background:var(--color-border-default);"></span>' : '<span style="flex:1;"></span>'}
        </div>
        <span style="font-size:var(--text-xs);font-weight:${s.state === 'active' ? 'var(--font-semibold)' : 'var(--font-normal)'};color:${s.state === 'active' ? 'var(--color-text-heading)' : 'var(--color-text-secondary)'};white-space:nowrap;">${s.label}</span>
      </div>`).join('');

    return `<div style="max-width:480px;padding:16px;">
      <div style="display:flex;align-items:flex-start;">
        ${stepItems}
      </div>
    </div>`;
  },
};
