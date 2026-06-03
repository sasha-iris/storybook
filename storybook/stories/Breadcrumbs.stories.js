/**
 * Iris Library — Breadcrumbs
 *
 * Source: Figma › Iris Library › Breadcrumb component set (node 3284:24211)
 *
 * ## Confirmed variants (light mode only)
 * | Type            | CSS wrapper                       | Notes                      |
 * |-----------------|-----------------------------------|----------------------------|
 * | Default         | none (just .breadcrumb)           | white bg, no padding       |
 * | With background | inline bg pill + .breadcrumb      | #f9fafb, r=8px, p=12px 20px |
 *
 * CSS classes used (from styles.css):
 *   .breadcrumb         — <ol> list container
 *   .breadcrumb-item    — each <li>
 *   .breadcrumb-item.active — current page item (last)
 *   .breadcrumb-sep     — chevron separator inside each non-last item
 *
 * No CSS class for the "with-background" pill wrapper — uses inline padding/bg.
 */

// ─── Icons ────────────────────────────────────────────────────────────────────

const homeIcon = `<svg width="16" height="16" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg" style="flex-shrink:0;vertical-align:middle;">
  <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"/>
</svg>`;

const chevronRight = `<svg width="16" height="16" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
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

  const crumbs = labels.map((label, i) => {
    const isCurrent = i === labels.length - 1;
    const isFirst = i === 0;

    const icon = (isFirst && showHomeIcon) ? homeIcon : '';

    const sep = !isCurrent
      ? `<span class="breadcrumb-sep" aria-hidden="true">${chevronRight}</span>`
      : '';

    if (isCurrent) {
      return `<li class="breadcrumb-item active">
        <span aria-current="page">${icon}${label}</span>
      </li>`;
    }

    return `<li class="breadcrumb-item">
      <a href="#">${icon}${label}</a>
      ${sep}
    </li>`;
  });

  const nav = `<nav aria-label="Breadcrumb">
    <ol class="breadcrumb">
      ${crumbs.join('')}
    </ol>
  </nav>`;

  if (!isBg) return nav;

  // Figma Type=With background (3284:24211): ALL items = #4a5565, chevron = #6a7282
  // .breadcrumb-bg class defined in styles.css overrides link/active/sep colors
  return `<div style="display:inline-flex;background:var(--color-bg-default);border:1px solid var(--color-border-default);border-radius:8px;padding:12px 20px;">
    <nav aria-label="Breadcrumb" class="breadcrumb-bg">
      <ol class="breadcrumb">
        ${crumbs.join('')}
      </ol>
    </nav>
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

CSS classes: \`.breadcrumb\` → \`.breadcrumb-item [.active]\` + \`.breadcrumb-sep\`

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

**Accessibility**
- Container: \`<nav aria-label="Breadcrumb">\` wrapping an \`<ol class="breadcrumb">\`
- Current item: \`aria-current="page"\` on a \`<span>\` inside \`.breadcrumb-item.active\`
- Separator chevrons: \`aria-hidden="true"\` on \`.breadcrumb-sep\`
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
      description: '`default` — no background, uses `.breadcrumb` on white bg. `with-background` — wrapped in a `#f9fafb` pill (inline style, no CSS class).',
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
  render: (args) => {
    const a = args;
    const isBg = a.type === 'with-background';
    const labels = PATHS[a.depth] || PATHS[3];
    const wrapOpen = isBg ? '<div style="display:inline-flex;background:#f9fafb;border-radius:8px;padding:12px 20px;">' : '';
    const wrapClose = isBg ? '</div>' : '';
    const items = labels.map((label, i) => {
      const isCurrent = i === labels.length - 1;
      const isFirst = i === 0;
      const iconSnip = (isFirst && a.showHomeIcon) ? '\n        <!-- home icon 20×20 -->' : '';
      if (isCurrent) {
        return `    <li class="breadcrumb-item active">\n      <span aria-current="page">${iconSnip}${label}</span>\n    </li>`;
      }
      return `    <li class="breadcrumb-item">\n      <a href="#">${iconSnip}${label}</a>\n      <span class="breadcrumb-sep" aria-hidden="true"><!-- chevron-right --></span>\n    </li>`;
    }).join('\n');

    const htmlCode = `${wrapOpen}<nav aria-label="Breadcrumb">\n  <ol class="breadcrumb">\n${items}\n  </ol>\n</nav>${wrapClose}`;

    const reactCode = `<nav aria-label="Breadcrumb">\n  <ol className="breadcrumb">\n    {breadcrumbs.map((item, i) => (\n      <li key={i} className={i === breadcrumbs.length - 1 ? 'breadcrumb-item active' : 'breadcrumb-item'}>\n        {i === breadcrumbs.length - 1 ? (\n          <span aria-current="page">{item.label}</span>\n        ) : (\n          <>\n            <a href={item.href}>{item.label}</a>\n            <span className="breadcrumb-sep" aria-hidden="true"><!--chevron--></span>\n          </>\n        )}\n      </li>\n    ))}\n  </ol>\n</nav>`;

    const componentCode = `export function Breadcrumb({ items = ${JSON.stringify(labels.map(l => ({label: l, href: '#'}))).replace(/"/g, "'")}, type = "${a.type}", showIcon = ${a.showHomeIcon} }) {\n  return (\n    <nav aria-label="Breadcrumb">\n      <ol className="breadcrumb">\n        {items.map((item, i) => {\n          const isCurrent = i === items.length - 1;\n          return (\n            <li key={i} className={isCurrent ? 'breadcrumb-item active' : 'breadcrumb-item'}>\n              {isCurrent ? (\n                <span aria-current="page">{item.label}</span>\n              ) : (\n                <>\n                  <a href={item.href}>{item.label}</a>\n                  <span className="breadcrumb-sep" aria-hidden="true">{/* chevron */}</span>\n                </>\n              )}\n            </li>\n          );\n        })}\n      </ol>\n    </nav>\n  );\n}`;

    const htmlEscaped = htmlCode.replace(/</g, '&lt;').replace(/>/g, '&gt;');
    const reactEscaped = reactCode.replace(/</g, '&lt;').replace(/>/g, '&gt;');
    const componentEscaped = componentCode.replace(/</g, '&lt;').replace(/>/g, '&gt;');

    return `
      <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:40px;align-items:start;">
        <div style="padding:20px;border:1px solid #e5e7eb;border-radius:8px;">
          ${breadcrumb(args)}
        </div>
        <div style="display:flex;flex-direction:column;gap:24px;">
          <div style="padding:20px;border:1px solid #e5e7eb;border-radius:8px;">
            <div style="font-weight:600;font-size:12px;color:#666;margin-bottom:12px;text-transform:uppercase;letter-spacing:0.5px;">HTML</div>
            <div style="background:#f9fafb;padding:12px;border-radius:6px;margin-bottom:12px;overflow:auto;">
              <pre style="margin:0;font-family:monospace;font-size:13px;white-space:pre-wrap;word-break:break-word;"><code>${htmlEscaped}</code></pre>
            </div>
            <button data-copy="${htmlCode.split('"').join('&quot;')}" class="storybook-copy-btn" style="padding:8px 12px;background:#f3f4f6;color:#374151;border:1px solid #d1d5db;border-radius:4px;cursor:pointer;font-family:inherit;font-size:12px;font-weight:500;display:flex;align-items:center;gap:6px;">
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="2" y="2" width="8" height="8" rx="1"/><path d="M6 14H12C13.1046 14 14 13.1046 14 12V6"/></svg>Copy
            </button>
          </div>
          <div style="padding:20px;border:1px solid #e5e7eb;border-radius:8px;">
            <div style="font-weight:600;font-size:12px;color:#666;margin-bottom:12px;text-transform:uppercase;letter-spacing:0.5px;">React</div>
            <div style="background:#f9fafb;padding:12px;border-radius:6px;margin-bottom:12px;overflow:auto;">
              <pre style="margin:0;font-family:monospace;font-size:13px;white-space:pre-wrap;word-break:break-word;"><code>${reactEscaped}</code></pre>
            </div>
            <button data-copy="${reactCode.split('"').join('&quot;')}" class="storybook-copy-btn" style="padding:8px 12px;background:#f3f4f6;color:#374151;border:1px solid #d1d5db;border-radius:4px;cursor:pointer;font-family:inherit;font-size:12px;font-weight:500;display:flex;align-items:center;gap:6px;">
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="2" y="2" width="8" height="8" rx="1"/><path d="M6 14H12C13.1046 14 14 13.1046 14 12V6"/></svg>Copy
            </button>
          </div>
          <div style="padding:20px;border:1px solid #e5e7eb;border-radius:8px;">
            <div style="font-weight:600;font-size:12px;color:#666;margin-bottom:12px;text-transform:uppercase;letter-spacing:0.5px;">Component (With Events)</div>
            <div style="background:#f9fafb;padding:12px;border-radius:6px;margin-bottom:12px;overflow:auto;">
              <pre style="margin:0;font-family:monospace;font-size:13px;white-space:pre-wrap;word-break:break-word;"><code>${componentEscaped}</code></pre>
            </div>
            <button data-copy="${componentCode.split('"').join('&quot;')}" class="storybook-copy-btn" style="padding:8px 12px;background:#f3f4f6;color:#374151;border:1px solid #d1d5db;border-radius:4px;cursor:pointer;font-family:inherit;font-size:12px;font-weight:500;display:flex;align-items:center;gap:6px;">
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
            this.style.color = '#166534';
            this.style.borderColor = '#bbf7d0';
            setTimeout(() => {
              this.innerHTML = originalText;
              this.style.background = '#f3f4f6';
              this.style.color = '#374151';
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
        story: 'Use **Controls** to switch between Default and With-background types, toggle the home icon, and change depth.',
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
**✅ Do** — always mark the last item \`.breadcrumb-item.active\` + \`aria-current="page"\` — screen readers announce it as the current location.
**❌ Don't** — make the current (last) item a link — it represents where the user already is.
        `.trim(),
      },
      source: {
        language: 'html',
        code: `<nav aria-label="Breadcrumb">
  <ol class="breadcrumb">

    <li class="breadcrumb-item">
      <a href="#">
        <!-- home icon 20×20 -->
        Home
      </a>
      <span class="breadcrumb-sep" aria-hidden="true"><!-- chevron-right --></span>
    </li>

    <li class="breadcrumb-item">
      <a href="#">E-commerce</a>
      <span class="breadcrumb-sep" aria-hidden="true"><!-- chevron-right --></span>
    </li>

    <!-- Current page: .breadcrumb-item.active + aria-current="page" -->
    <li class="breadcrumb-item active">
      <span aria-current="page">Products</span>
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

The pill is a plain wrapper div with inline styles (padding:12px 20px, background:#f9fafb, border-radius:8px). The inner breadcrumb uses the same \`.breadcrumb\` classes.

**✅ Do** — use when the breadcrumb needs to stand out against a busy or image-based background.
**❌ Don't** — use on \`#f9fafb\` page backgrounds — the pill will be invisible.
        `.trim(),
      },
      source: {
        language: 'html',
        code: `<!-- With background: pill wrapper + .breadcrumb-bg modifier -->
<!-- All items render in #4a5565 (var(--color-text-body)), chevron in #6a7282 -->
<div style="display:inline-flex;background:var(--color-bg-default);border:1px solid var(--color-border-default);border-radius:8px;padding:12px 20px;">
  <nav aria-label="Breadcrumb" class="breadcrumb-bg">
    <ol class="breadcrumb">
      <li class="breadcrumb-item">
        <a href="#"><!-- home icon --> Home</a>
        <span class="breadcrumb-sep" aria-hidden="true"><!-- chevron-right --></span>
      </li>
      <li class="breadcrumb-item">
        <a href="#">E-commerce</a>
        <span class="breadcrumb-sep" aria-hidden="true"><!-- chevron-right --></span>
      </li>
      <li class="breadcrumb-item active">
        <span aria-current="page">Products</span>
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
        code: `<!-- Default: .breadcrumb inside <nav> -->
<nav aria-label="Breadcrumb"><ol class="breadcrumb"><!-- ... --></ol></nav>

<!-- With background: pill wrapper + .breadcrumb -->
<div style="display:inline-flex;background:#f9fafb;border-radius:8px;padding:12px 20px;">
  <nav aria-label="Breadcrumb"><ol class="breadcrumb"><!-- ... --></ol></nav>
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
        code: `<!-- 2 levels: Home › Products -->
<!-- 3 levels: Home › E-commerce › Products -->
<!-- 4 levels: Home › E-commerce › Products › Laptop -->`,
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
  args: { type: 'default' },
  parameters: {
    controls: { include: ['type'] },
    docs: {
      description: {
        story: `
Breadcrumb with a text "Home" label instead of the house icon.

**✅ Do** — use the text-only variant when available horizontal space is limited.
        `.trim(),
      },
      source: {
        language: 'html',
        code: `<!-- First item: text label only, no icon -->
<li class="breadcrumb-item">
  <a href="#">Home</a>
  <span class="breadcrumb-sep" aria-hidden="true"><!-- chevron-right --></span>
</li>`,
      },
    },
  },
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
