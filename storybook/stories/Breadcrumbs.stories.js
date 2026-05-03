/**
 * Iris Library — Breadcrumbs
 *
 * Source: Figma › Iris Library › Breadcrumb component set (node 3284:24211)
 *
 * ## Confirmed variants (light mode only)
 * | Type            | Bg       | Active text | Current text | Separator   | Padding     |
 * |-----------------|----------|-------------|--------------|-------------|-------------|
 * | Default         | none     | #101828     | #4a5565      | #4a5565     | none        |
 * | With background | #f9fafb  | #4a5565     | #4a5565      | #6a7282     | 12px 20px   |
 *
 * ## Tokens
 * - Font: 14px / fw=500
 * - Gap between items: 16px
 * - Home icon: Heroicons v1 solid home, 20×20
 * - Separator: chevron-right outline, 20×20
 * - Background pill: r=8px, bg #f9fafb
 */

// ─── Icons ────────────────────────────────────────────────────────────────────

const homeIcon = `<svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"/>
</svg>`;

const chevronRight = `<svg width="20" height="20" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path d="M9 5l7 7-7 7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;

// ─── Sample path sets ────────────────────────────────────────────────────────

const PATHS = {
  2: ['Home', 'Products'],
  3: ['Home', 'E-commerce', 'Products'],
  4: ['Home', 'E-commerce', 'Products', 'Laptop'],
};

// ─── Builder ─────────────────────────────────────────────────────────────────

/**
 * @param {{
 *   type?: 'default' | 'with-background',
 *   showHomeIcon?: boolean,
 *   depth?: 2|3|4,
 *   items?: string[]
 * }} opts
 */
function breadcrumb({ type = 'default', showHomeIcon = true, depth = 3, items } = {}) {
  const labels = items || PATHS[depth] || PATHS[3];
  const isBg = type === 'with-background';

  // Colors per type
  const linkColor    = isBg ? '#4a5565' : '#101828';
  const currentColor = '#4a5565';
  const sepColor     = isBg ? '#6a7282' : '#4a5565';
  const iconColor    = isBg ? '#4a5565' : '#101828';

  const crumbs = labels.map((label, i) => {
    const isCurrent = i === labels.length - 1;
    const isFirst = i === 0;
    const color = isCurrent ? currentColor : linkColor;

    const icon = (isFirst && showHomeIcon)
      ? `<span style="flex-shrink:0;color:${iconColor};display:flex;align-items:center;">${homeIcon}</span>`
      : '';

    const text = `<span style="font:500 14px/1.5 inherit;color:${color};white-space:nowrap;">${label}</span>`;

    const link = isCurrent
      ? `<span aria-current="page" style="display:flex;align-items:center;gap:4px;">${icon}${text}</span>`
      : `<a href="#" style="display:flex;align-items:center;gap:4px;text-decoration:none;">${icon}${text}</a>`;

    const sep = i < labels.length - 1
      ? `<span aria-hidden="true" style="flex-shrink:0;color:${sepColor};display:flex;align-items:center;">${chevronRight}</span>`
      : '';

    return link + sep;
  });

  const inner = `
    <nav aria-label="Breadcrumb">
      <ol style="
        display:flex;align-items:center;gap:0;
        list-style:none;margin:0;padding:0;
        flex-wrap:wrap;
      ">
        ${crumbs.map(c => `<li style="display:flex;align-items:center;gap:16px;">${c}</li>`).join('')}
      </ol>
    </nav>`;

  if (!isBg) return inner;

  return `
    <div style="
      display:inline-flex;
      background:#f9fafb;border-radius:8px;
      padding:12px 20px;
    ">
      ${inner}
    </div>`;
}

// ─── Default export ───────────────────────────────────────────────────────────

export default {
  title: 'Iris Library/Breadcrumbs',
  tags: ['autodocs', 'stable'],
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `
**Breadcrumbs** show the user's location within the site hierarchy and let them navigate back to any ancestor page.

Figma source: component set \`3284:24211\`.

**When to use**
- Pages nested 2 or more levels deep in the site hierarchy
- Content-heavy apps where users frequently navigate between sections (e-commerce, dashboards, docs)
- When users may land on a deep page directly (SEO / shared links) and need orientation

**When NOT to use**
- Top-level pages — breadcrumbs add noise when there is only one level
- Flat site structures — use tabs or a nav bar instead
- Mobile primary navigation — breadcrumbs get cramped; prefer a back button

**Anatomy**
\`[home icon?] [Link] › [Link] › … › [Current page (not linked)]\`

The last item is always the current page — it carries \`aria-current="page"\` and is not a link.

**QA checklist**
- Container: \`<nav aria-label="Breadcrumb">\` wrapping an \`<ol>\`
- Current item: \`aria-current="page"\` on a \`<span>\`, not an \`<a>\`
- Separator chevrons: \`aria-hidden="true"\`
- Default — active links: \`#101828\`, current text: \`#4a5565\`, separator: \`#4a5565\`
- With background — all text: \`#4a5565\`, separator: \`#6a7282\`, bg: \`#f9fafb\`, r=8px, p=12px 20px
        `.trim(),
      },
    },
  },
  argTypes: {
    // ── Content ──────────────────────────────────────────────
    depth: {
      control: 'select',
      options: [2, 3, 4],
      description: 'Number of breadcrumb items. 3 is the Figma default (Home › E-commerce › Products).',
      table: { category: 'Content', defaultValue: { summary: 3 } },
    },
    showHomeIcon: {
      control: 'boolean',
      description: 'Show the home icon on the first breadcrumb item. When `false`, the first item renders as text only.',
      table: { category: 'Content', defaultValue: { summary: true } },
    },
    // ── Appearance ───────────────────────────────────────────
    type: {
      control: 'select',
      options: ['default', 'with-background'],
      description: '`default` — no background, active links `#101828`. `with-background` — `#f9fafb` pill, all text `#4a5565`.',
      table: { category: 'Appearance', defaultValue: { summary: 'default' } },
    },
  },
  args: {
    type: 'default',
    showHomeIcon: true,
    depth: 3,
  },
};

// ─── Interactive ──────────────────────────────────────────────────────────────

export const Interactive = {
  name: 'Interactive (Controls)',
  render: (args) => breadcrumb(args),
  parameters: {
    docs: {
      description: {
        story: 'Use **Controls** to switch between Default and With-background types, toggle the home icon, and change depth.',
      },
      source: {
        transform: (_src, storyCtx) => {
          const { type, showHomeIcon, depth } = storyCtx.args;
          const isBg = type === 'with-background';
          const labels = PATHS[depth] || PATHS[3];
          const linkColor = isBg ? '#4a5565' : '#101928';
          const currentColor = '#4a5565';
          const sepColor = isBg ? '#6a7282' : '#4a5565';
          const wrapOpen = isBg
            ? `<div style="display:inline-flex;background:#f9fafb;border-radius:8px;padding:12px 20px;">`
            : '';
          const wrapClose = isBg ? '</div>' : '';
          const items = labels.map((label, i) => {
            const isCurrent = i === labels.length - 1;
            const isFirst = i === 0;
            const color = isCurrent ? currentColor : linkColor;
            const iconSnip = (isFirst && showHomeIcon) ? `\n      <!-- home icon 20×20 -->` : '';
            if (isCurrent) {
              return `    <li style="display:flex;align-items:center;gap:16px;">
      <span aria-current="page" style="font:500 14px/1.5 inherit;color:${color};">${iconSnip}
        ${label}
      </span>
    </li>`;
            }
            return `    <li style="display:flex;align-items:center;gap:16px;">
      <a href="#" style="font:500 14px/1.5 inherit;color:${color};text-decoration:none;">${iconSnip}
        ${label}
      </a>
      <span aria-hidden="true" style="color:${sepColor};"><!-- chevron-right --></span>
    </li>`;
          }).join('\n');
          return `${wrapOpen}
<nav aria-label="Breadcrumb">
  <ol style="display:flex;align-items:center;flex-wrap:wrap;list-style:none;margin:0;padding:0;">
${items}
  </ol>
</nav>${wrapClose}`;
        },
      },
    },
  },
};

// ─── Default ──────────────────────────────────────────────────────────────────

export const Default = {
  name: 'Default — no background',
  parameters: {
    docs: {
      description: {
        story: `
Default breadcrumb — Figma: \`Type=Default\` (node \`3284:24211\`).

**✅ Do** — use as the primary breadcrumb style on white or light-gray page backgrounds.
**✅ Do** — always mark the last item with \`aria-current="page"\` — screen readers announce it as the current location.
**❌ Don't** — make the current (last) item a link — it represents where the user already is.
        `.trim(),
      },
      source: {
        language: 'html',
        code: `<nav aria-label="Breadcrumb">
  <ol style="display:flex;align-items:center;flex-wrap:wrap;list-style:none;margin:0;padding:0;">

    <li style="display:flex;align-items:center;gap:16px;">
      <a href="#" style="display:flex;align-items:center;gap:4px;text-decoration:none;">
        <!-- home icon 20×20, fill #101828 -->
        <span style="font:500 14px/1.5 inherit;color:#101828;">Home</span>
      </a>
      <span aria-hidden="true" style="color:#4a5565;"><!-- chevron-right --></span>
    </li>

    <li style="display:flex;align-items:center;gap:16px;">
      <a href="#" style="text-decoration:none;">
        <span style="font:500 14px/1.5 inherit;color:#101828;">E-commerce</span>
      </a>
      <span aria-hidden="true" style="color:#4a5565;"><!-- chevron-right --></span>
    </li>

    <li>
      <!-- Current page: no link, aria-current="page" -->
      <span aria-current="page" style="font:500 14px/1.5 inherit;color:#4a5565;">Products</span>
    </li>

  </ol>
</nav>`,
      },
    },
  },
  render: () => breadcrumb({ type: 'default', showHomeIcon: true, depth: 3 }),
};

// ─── With Background ─────────────────────────────────────────────────────────

export const WithBackground = {
  name: 'With background',
  parameters: {
    docs: {
      description: {
        story: `
Breadcrumb with a light pill background — Figma: \`Type=With background\` (node \`3284:24211\`).

Padding: 12px 20px · bg: \`#f9fafb\` · border-radius: 8px.

**✅ Do** — use when the breadcrumb needs to stand out against a busy or image-based background.
**❌ Don't** — use on \`#f9fafb\` page backgrounds — the pill will be invisible.
        `.trim(),
      },
      source: {
        language: 'html',
        code: `<div style="display:inline-flex;background:#f9fafb;border-radius:8px;padding:12px 20px;">
  <nav aria-label="Breadcrumb">
    <ol style="display:flex;align-items:center;flex-wrap:wrap;list-style:none;margin:0;padding:0;">

      <li style="display:flex;align-items:center;gap:16px;">
        <a href="#" style="display:flex;align-items:center;gap:4px;text-decoration:none;">
          <!-- home icon 20×20, fill #4a5565 -->
          <span style="font:500 14px/1.5 inherit;color:#4a5565;">Home</span>
        </a>
        <span aria-hidden="true" style="color:#6a7282;"><!-- chevron-right --></span>
      </li>

      <li style="display:flex;align-items:center;gap:16px;">
        <a href="#" style="text-decoration:none;">
          <span style="font:500 14px/1.5 inherit;color:#4a5565;">E-commerce</span>
        </a>
        <span aria-hidden="true" style="color:#6a7282;"><!-- chevron-right --></span>
      </li>

      <li>
        <span aria-current="page" style="font:500 14px/1.5 inherit;color:#4a5565;">Products</span>
      </li>

    </ol>
  </nav>
</div>`,
      },
    },
  },
  render: () => breadcrumb({ type: 'with-background', showHomeIcon: true, depth: 3 }),
};

// ─── Both types ───────────────────────────────────────────────────────────────

export const BothTypes = {
  name: 'Both types',
  args: { showHomeIcon: true },
  parameters: {
    controls: { include: ['showHomeIcon'] },
    docs: {
      description: {
        story: 'Default and With-background side by side. Toggle **showHomeIcon** to preview both with and without the home icon.',
      },
      source: {
        language: 'html',
        code: `<!-- Default -->
<nav aria-label="Breadcrumb"><!-- type=default --></nav>

<!-- With background -->
<div style="display:inline-flex;background:#f9fafb;border-radius:8px;padding:12px 20px;">
  <nav aria-label="Breadcrumb"><!-- type=with-background --></nav>
</div>`,
      },
    },
  },
  render: ({ showHomeIcon }) => `
    <div style="display:flex;flex-direction:column;gap:24px;padding:24px;">
      <div>
        <div style="font:700 10px/1.5 ui-monospace,monospace;color:#9ca3af;text-transform:uppercase;letter-spacing:.08em;margin-bottom:10px;">Default</div>
        ${breadcrumb({ type: 'default', showHomeIcon, depth: 3 })}
      </div>
      <div>
        <div style="font:700 10px/1.5 ui-monospace,monospace;color:#9ca3af;text-transform:uppercase;letter-spacing:.08em;margin-bottom:10px;">With background</div>
        ${breadcrumb({ type: 'with-background', showHomeIcon, depth: 3 })}
      </div>
    </div>
  `,
};

// ─── Depth variants ───────────────────────────────────────────────────────────

export const DepthVariants = {
  name: 'Depth variants — 2 to 4 items',
  args: { type: 'default' },
  parameters: {
    controls: { include: ['type'] },
    docs: {
      description: {
        story: `
Breadcrumbs at 2, 3, and 4 levels deep. Use the **type** control to switch between Default and With-background.

**✅ Do** — keep breadcrumbs to 4 levels or fewer; beyond that truncate middle items with \`…\`.
**❌ Don't** — show breadcrumbs on a 1-level page — there is nowhere to navigate back to.
        `.trim(),
      },
      source: {
        language: 'html',
        code: `<!-- 2 levels -->
<nav aria-label="Breadcrumb"><!-- Home › Products --></nav>

<!-- 3 levels (Figma default) -->
<nav aria-label="Breadcrumb"><!-- Home › E-commerce › Products --></nav>

<!-- 4 levels -->
<nav aria-label="Breadcrumb"><!-- Home › E-commerce › Products › Laptop --></nav>`,
      },
    },
  },
  render: ({ type }) => `
    <div style="display:flex;flex-direction:column;gap:20px;padding:24px;">
      ${[2, 3, 4].map(depth => `
        <div>
          <div style="font:700 10px/1.5 ui-monospace,monospace;color:#9ca3af;text-transform:uppercase;letter-spacing:.08em;margin-bottom:8px;">${depth} items</div>
          ${breadcrumb({ type, showHomeIcon: true, depth })}
        </div>
      `).join('')}
    </div>
  `,
};

// ─── Without home icon ────────────────────────────────────────────────────────

export const WithoutHomeIcon = {
  name: 'Without home icon',
  parameters: {
    controls: { include: ['type'] },
    docs: {
      description: {
        story: `
Breadcrumb with a text "Home" label instead of the house icon. Use when the icon-only home label is unclear in context.

**✅ Do** — use the text-only variant when available horizontal space is limited.
        `.trim(),
      },
      source: {
        language: 'html',
        code: `<!-- First item: text label "Home", no icon -->
<li>
  <a href="#" style="font:500 14px/1.5 inherit;color:#101828;text-decoration:none;">Home</a>
</li>`,
      },
    },
  },
  args: { type: 'default' },
  render: ({ type }) => `
    <div style="display:flex;flex-direction:column;gap:20px;padding:24px;">
      <div>
        <div style="font:700 10px/1.5 ui-monospace,monospace;color:#9ca3af;text-transform:uppercase;letter-spacing:.08em;margin-bottom:8px;">With icon</div>
        ${breadcrumb({ type, showHomeIcon: true, depth: 3 })}
      </div>
      <div>
        <div style="font:700 10px/1.5 ui-monospace,monospace;color:#9ca3af;text-transform:uppercase;letter-spacing:.08em;margin-bottom:8px;">Without icon</div>
        ${breadcrumb({ type, showHomeIcon: false, depth: 3 })}
      </div>
    </div>
  `,
};
