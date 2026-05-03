// Figma: Iris Library / Tooltip — node 718:1479
// File: ZKtEULdYKaXe5uQl1J6ijI
// 2 colors (Dark, White) × 4 positions (Top, Right, Bottom, Left).
// Shown statically with a representative trigger — tooltip is always visible for documentation.

// ─── Helpers ─────────────────────────────────────────────────────────────────

function tooltipBody({ color, title, body }) {
  const isDark = color === 'dark';
  const bg         = isDark ? '#1f2a37' : '#ffffff';
  const titleColor = isDark ? '#ffffff' : '#111928';
  const divColor   = isDark ? '#4b5563' : '#e5e7eb';
  const bodyColor  = isDark ? '#f3f4f6' : '#6b7280';
  const shadow     = isDark ? '' : 'box-shadow:0 2px 8px rgba(0,0,0,.15);';
  return `
<div style="background:${bg};border-radius:4px;padding:8px;min-width:100px;max-width:200px;${shadow}font-family:inherit;">
  <div style="color:${titleColor};font-weight:500;font-size:14px;line-height:20px;margin-bottom:6px;white-space:nowrap;">${title}</div>
  <div style="height:1px;background:${divColor};margin:0 0 6px;"></div>
  <div style="color:${bodyColor};font-weight:400;font-size:12px;line-height:16px;">${body}</div>
</div>`;
}

function tooltipArrow({ position, color }) {
  const fill = color === 'dark' ? '#1f2a37' : '#ffffff';
  const borders = {
    top:    `border-left:17px solid transparent;border-right:17px solid transparent;border-top:8px solid ${fill}`,
    bottom: `border-left:17px solid transparent;border-right:17px solid transparent;border-bottom:8px solid ${fill}`,
    right:  `border-top:17px solid transparent;border-bottom:17px solid transparent;border-right:8px solid ${fill}`,
    left:   `border-top:17px solid transparent;border-bottom:17px solid transparent;border-left:8px solid ${fill}`,
  };
  return `<div style="width:0;height:0;flex-shrink:0;${borders[position]}"></div>`;
}

const TRIGGER = `<button style="padding:6px 16px;background:#155dfc;color:#fff;border:none;border-radius:6px;font:500 13px/20px inherit;cursor:default;white-space:nowrap;">Show info</button>`;

function tooltip({ color = 'dark', position = 'top', title, body }) {
  const box = tooltipBody({ color, title, body });
  const arr = tooltipArrow({ position, color });
  if (position === 'top') {
    return `<div style="display:inline-flex;flex-direction:column;align-items:center;">${box}${arr}${TRIGGER}</div>`;
  }
  if (position === 'bottom') {
    return `<div style="display:inline-flex;flex-direction:column;align-items:center;">${TRIGGER}${arr}${box}</div>`;
  }
  if (position === 'right') {
    return `<div style="display:inline-flex;flex-direction:row;align-items:center;">${TRIGGER}${arr}${box}</div>`;
  }
  // left
  return `<div style="display:inline-flex;flex-direction:row;align-items:center;">${box}${arr}${TRIGGER}</div>`;
}

// ─── Default export ───────────────────────────────────────────────────────────

export default {
  title: 'Iris Library/Tooltip',
  tags: ['autodocs', 'stable'],
  parameters: {
    docs: {
      description: {
        component: `
**Tooltip** surfaces a short label or explanation when a user hovers or focuses an element.

**When to use**
- Clarifying an icon button that has no visible label
- Surfacing extra context for a form field or data point without cluttering the layout
- Showing keyboard shortcuts or command names on hover

**When NOT to use**
- Long or critical information → use a popover or inline help text (tooltips are hidden by default and not read on mobile)
- Required form guidance → use a visible hint below the field
- Error messages → use an inline validation message

**Anatomy**
\`[arrow] [title] [divider] [body]\` — title + body combination; use the \`title\`-only pattern for short single-line labels.

**Colors**: \`dark\` (default) suits most page backgrounds; \`white\` suits dark-background contexts or when the tooltip sits on a dark card.
        `,
      },
    },
  },
  argTypes: {
    // ── Content ─────────────────────────────────────────────────────────────
    title: {
      control: 'text',
      description: 'Short label rendered at 500/14px. Keep to one line — overflow is not handled.',
      table: { category: 'Content', defaultValue: { summary: 'More information' } },
    },
    body: {
      control: 'text',
      description: 'Supporting description at 400/12px. Keep to 1–2 sentences maximum.',
      table: { category: 'Content', defaultValue: { summary: 'Descriptive text…' } },
    },
    // ── Appearance ───────────────────────────────────────────────────────────
    color: {
      control: 'select',
      options: ['dark', 'white'],
      description: `Color theme. \`dark\` — bg \`#1f2a37\`, text \`#ffffff\`/\`#f3f4f6\`. \`white\` — bg \`#ffffff\`, text \`#111928\`/\`#6b7280\` with a drop shadow. Choose \`white\` on dark-background surfaces.`,
      table: { category: 'Appearance', defaultValue: { summary: 'dark' } },
    },
    position: {
      control: 'select',
      options: ['top', 'right', 'bottom', 'left'],
      description: 'Direction the tooltip appears relative to its trigger. The arrow caret always points toward the trigger.',
      table: { category: 'Appearance', defaultValue: { summary: 'top' } },
    },
  },
  args: {
    color: 'dark',
    position: 'top',
    title: 'More information',
    body: 'The user wants to find a specific page or site.',
  },
};

// ─── 1. Interactive ───────────────────────────────────────────────────────────

export const Interactive = {
  name: 'Interactive (Controls)',
  render: (args) => {
    return `<div style="padding:60px;display:inline-flex;align-items:center;justify-content:center;">
      ${tooltip(args)}
    </div>`;
  },
  parameters: {
    docs: {
      description: {
        story: 'Use **Controls** to switch color, position, and content. The tooltip is always visible here — in production it appears on hover/focus.',
      },
      source: {
        transform: (_src, ctx) => {
          const { color, position, title, body } = ctx.args;
          return `<!-- Tooltip: ${color} / ${position} -->
<div class="tooltip-wrapper tooltip--${position}" data-tooltip>
  <button class="btn btn-primary" aria-describedby="tip-1">Show info</button>
  <div class="tooltip tooltip--${color}" role="tooltip" id="tip-1">
    <strong class="tooltip__title">${title}</strong>
    <div class="tooltip__divider"></div>
    <p class="tooltip__body">${body}</p>
  </div>
</div>`;
        },
      },
    },
  },
};

// ─── 2. All Positions ─────────────────────────────────────────────────────────

export const AllPositions = {
  name: 'All positions',
  args: { color: 'dark' },
  parameters: {
    controls: { include: ['color'] },
    docs: {
      description: {
        story: `All four position variants. Switch **color** to preview both themes across all positions.

**✅ Do** — choose the position that keeps the tooltip within the viewport (prefer \`top\` or \`bottom\` for most inline elements).
**❌ Don't** — use \`left\`/\`right\` on elements near viewport edges; the tooltip will clip.`,
      },
      source: {
        code: `<!-- Top -->
<div class="tooltip-wrapper tooltip--top" data-tooltip>
  <button aria-describedby="tip-top">Trigger</button>
  <div class="tooltip tooltip--dark" role="tooltip" id="tip-top"> … </div>
</div>

<!-- Right -->
<div class="tooltip-wrapper tooltip--right" data-tooltip>
  <button aria-describedby="tip-right">Trigger</button>
  <div class="tooltip tooltip--dark" role="tooltip" id="tip-right"> … </div>
</div>

<!-- Bottom -->
<div class="tooltip-wrapper tooltip--bottom" data-tooltip>
  <button aria-describedby="tip-bottom">Trigger</button>
  <div class="tooltip tooltip--dark" role="tooltip" id="tip-bottom"> … </div>
</div>

<!-- Left -->
<div class="tooltip-wrapper tooltip--left" data-tooltip>
  <button aria-describedby="tip-left">Trigger</button>
  <div class="tooltip tooltip--dark" role="tooltip" id="tip-left"> … </div>
</div>`,
        language: 'html',
      },
    },
  },
  render: ({ color }) => {
    const t = { title: 'More information', body: 'The user wants to find a specific page or site.' };
    const positions = ['top', 'right', 'bottom', 'left'];
    const labels    = { top: 'Top', right: 'Right', bottom: 'Bottom', left: 'Left' };
    return `
<div style="display:grid;grid-template-columns:1fr 1fr;gap:64px 80px;padding:80px 60px;background:#f9fafb;width:fit-content;">
  ${positions.map(pos => `
    <div style="display:flex;flex-direction:column;align-items:center;gap:8px;">
      <span style="font:500 11px/1 inherit;color:#6b7280;text-transform:uppercase;letter-spacing:.08em;margin-bottom:4px;">${labels[pos]}</span>
      ${tooltip({ color, position: pos, ...t })}
    </div>`).join('')}
</div>`;
  },
};

// ─── 3. Both Colors ───────────────────────────────────────────────────────────

export const BothColors = {
  name: 'Both colors',
  args: { position: 'top' },
  parameters: {
    controls: { include: ['position'] },
    docs: {
      description: {
        story: `Dark vs White color themes side by side. Switch **position** to compare arrow placement across both themes.

**✅ Do** — use \`dark\` (default) on light-background pages.
**✅ Do** — use \`white\` on dark-background surfaces (dark cards, dark sidebars).
**❌ Don't** — use \`white\` on a white page background without ensuring the drop shadow provides sufficient separation.`,
      },
      source: {
        code: `<!-- Dark tooltip -->
<div class="tooltip tooltip--dark" role="tooltip">
  <strong class="tooltip__title">More information</strong>
  <div class="tooltip__divider"></div>
  <p class="tooltip__body">The user wants to find a specific page or site.</p>
</div>

<!-- White tooltip -->
<div class="tooltip tooltip--white" role="tooltip">
  <strong class="tooltip__title">More information</strong>
  <div class="tooltip__divider"></div>
  <p class="tooltip__body">The user wants to find a specific page or site.</p>
</div>`,
        language: 'html',
      },
    },
  },
  render: ({ position }) => {
    const t = { title: 'More information', body: 'The user wants to find a specific page or site.' };
    return `
<div style="display:flex;gap:80px;padding:80px 60px;align-items:center;justify-content:center;background:#f3f4f6;">
  <div style="display:flex;flex-direction:column;align-items:center;gap:8px;">
    <span style="font:500 11px/1 inherit;color:#6b7280;text-transform:uppercase;letter-spacing:.08em;margin-bottom:4px;">Dark</span>
    ${tooltip({ color: 'dark', position, ...t })}
  </div>
  <div style="display:flex;flex-direction:column;align-items:center;gap:8px;">
    <span style="font:500 11px/1 inherit;color:#6b7280;text-transform:uppercase;letter-spacing:.08em;margin-bottom:4px;">White</span>
    ${tooltip({ color: 'white', position, ...t })}
  </div>
</div>`;
  },
};
