/**
 * Iris Library — Accordion
 *
 * Source: Figma › Iris Library › Accordion component set (node 2370:20939)
 *
 * ## Confirmed variants (light mode only — dark mode excluded per project rules)
 * | Style          | CSS class                     | Notes                              |
 * |----------------|-------------------------------|------------------------------------|
 * | Card           | .accordion                    | shared bordered container          |
 * | Separate Cards | (gap wrapper + .accordion × n)| each item is its own .accordion    |
 * | Only Links     | .accordion.accordion-flush    | no outer border, divider lines     |
 *
 * All layout driven by styles.css classes: .accordion, .accordion-item,
 * .accordion-item.open, .accordion-header, .accordion-chevron, .accordion-body,
 * .accordion-flush
 */

// ─── Icons ────────────────────────────────────────────────────────────────────

const chevronSvg = `<svg class="accordion-chevron" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M6 9l6 6 6-6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;

const questionMarkCircle = `<svg width="18" height="18" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"/>
</svg>`;

// ─── Sample content ───────────────────────────────────────────────────────────

const DEFAULT_ITEMS = [
  {
    title: 'Can I use FlowBite in open-source projects?',
    body: 'Generally, it is accepted to use FlowBite in open-source projects, as long as the project is licensed under the same terms. Feel free to use this design kit for your open-source projects. Find out more information by reading the license.',
  },
  {
    title: 'How do you achieve the "blurry" effect?',
    body: 'The blurry effect can be achieved using the CSS backdrop-filter property. This works well in modern browsers and improves the visual quality of overlays and floating panels.',
  },
  {
    title: 'What about browser support?',
    body: 'Browser support for modern CSS features is generally very good. We recommend checking caniuse.com for specific properties. Most features used in this library have 95%+ global coverage.',
  },
];

// ─── Item builder ─────────────────────────────────────────────────────────────

function accordionItem({ title, body, open, showIcon, index }) {
  const iconHtml = showIcon
    ? `<span style="flex-shrink:0;display:flex;align-items:center;margin-right:8px;">${questionMarkCircle}</span>`
    : '';

  return `<div class="accordion-item${open ? ' open' : ''}">
    <button
      class="accordion-header"
      aria-expanded="${open}"
      aria-controls="accordion-body-${index}"
      id="accordion-header-${index}">
      ${iconHtml}<span style="flex:1;">${title}</span>
      ${chevronSvg}
    </button>
    <div class="accordion-body" id="accordion-body-${index}" role="region" aria-labelledby="accordion-header-${index}">
      ${body}
    </div>
  </div>`;
}

// ─── Full accordion builder ───────────────────────────────────────────────────

/**
 * @param {{
 *   style?: 'card'|'separate'|'links',
 *   showIcon?: boolean,
 *   openIndex?: number,
 *   items?: Array<{title:string, body:string}>
 * }} opts
 */
function accordion({ style = 'card', showIcon = false, openIndex = 0, items = DEFAULT_ITEMS } = {}) {
  if (style === 'separate') {
    const cards = items.map((item, i) => {
      const open = i === openIndex;
      return `<div class="accordion">${accordionItem({ ...item, open, showIcon, index: i })}</div>`;
    }).join('');
    return `<div style="display:flex;flex-direction:column;gap:16px;">${cards}</div>`;
  }

  const flushClass = style === 'links' ? ' accordion-flush' : '';
  const renderedItems = items.map((item, i) =>
    accordionItem({ ...item, open: i === openIndex, showIcon, index: i })
  ).join('');

  return `<div class="accordion${flushClass}">${renderedItems}</div>`;
}

// ─── Default export ───────────────────────────────────────────────────────────

export default {
  title: 'Iris Library/Accordion',
  tags: ['autodocs', 'stable'],
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `
**Accordion** progressively discloses content — items can be expanded to reveal more detail, keeping the page compact.

Figma source: component set \`2370:20939\`.

**When to use**
- FAQs, help content, or any set of questions with variable-length answers
- Settings panels where options only matter to some users
- Long pages where you need to reduce scroll depth without removing content

**When NOT to use**
- Content all users need to see — don't hide it; use visible sections instead
- Very short answers (1–2 lines) — just show them inline
- Step-by-step flows — use a Stepper instead

**Anatomy**
\`[Header: icon? + title + chevron] / [Body: text content]\`

**Styles**
| Style | CSS | Description |
|---|---|---|
| Card | \`.accordion\` | Items share one bordered container |
| Separate Cards | \`.accordion\` × n, gap 16px | Each item is its own card |
| Only Links | \`.accordion.accordion-flush\` | No borders/bg, only divider lines |

**Accessibility**
- \`aria-expanded\` on every \`.accordion-header\` button
- \`role="region"\` + \`aria-labelledby\` on every \`.accordion-body\` panel
- Keyboard: Tab focuses headers; Enter/Space toggles open/closed
        `.trim(),
      },
    },
  },
  argTypes: {
    // ── Content ──────────────────────────────────────────────
    openIndex: {
      control: 'select',
      options: [0, 1, 2],
      description: 'Which accordion item is expanded (0-based). In a real implementation this state is managed by JS.',
      table: { category: 'Content', defaultValue: { summary: 0 } },
    },
    showIcon: {
      control: 'boolean',
      description: 'Show a `question-mark-circle` icon (18×18) before each item title.',
      table: { category: 'Content', defaultValue: { summary: false } },
    },
    // ── Appearance ───────────────────────────────────────────
    style: {
      control: 'select',
      options: ['card', 'separate', 'links'],
      description: '`card` — `.accordion` shared container. `separate` — each item its own `.accordion` (gap 16px). `links` — `.accordion-flush` (no bg/border, divider lines).',
      table: { category: 'Appearance', defaultValue: { summary: 'card' } },
    },
  },
  args: {
    style: 'card',
    showIcon: false,
    openIndex: 0,
  },
};

// ─── Interactive ──────────────────────────────────────────────────────────────

export const Interactive = {
    name: 'Interactive (Controls)',
  render: (args) => {
    const a = args;

    const htmlCode = `<div style="display:flex;flex-direction:column;gap:16px;">\n  <div class="accordion">\n    <button\n      class="accordion-header"\n      aria-expanded="${a.openIndex === 0}"\n      style="width:100%;padding:12px;text-align:left;background:#f9fafb;border:1px solid #e5e7eb;border-radius:8px;cursor:pointer;"\n    >\n      ${a.showIcon ? '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor"><circle cx="12" cy="12" r="10"/><path d="M12 8v8M8 12h8"/></svg>' : ''}\n      <span>Item Title</span>\n      <svg style="transform:rotate(180deg);" width="16" height="16" viewBox="0 0 16 16"><polyline points="4 6 8 10 12 6"></polyline></svg>\n    </button>\n    <div class="accordion-body" style="padding:12px;display:${a.openIndex === 0 ? 'block' : 'none'};">Body content</div>\n  </div>\n</div>`;

    const reactCode = `<div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>\n  {items.map((item, idx) => (\n    <div key={idx} className="accordion">\n      <button\n        className="accordion-header"\n        onClick={() => setOpenIndex(openIndex === idx ? -1 : idx)}\n        aria-expanded={openIndex === idx}\n        style={{\n          width: '100%',\n          padding: '12px',\n          textAlign: 'left',\n          background: '#f9fafb',\n          border: '1px solid #e5e7eb',\n          borderRadius: '8px',\n          cursor: 'pointer',\n        }}\n      >\n        <span>{item.title}</span>\n        <svg\n          style={{\n            transform: openIndex === idx ? 'rotate(0deg)' : 'rotate(180deg)',\n            transition: 'transform 0.2s',\n          }}\n        >\n          {/* chevron icon */}\n        </svg>\n      </button>\n      {openIndex === idx && (\n        <div className="accordion-body\" style={{ padding: '12px' }}>\n          {item.body}\n        </div>\n      )}\n    </div>\n  ))}\n</div>`;

    const componentCode = `export function Accordion({ items = [], showIcon = false, openIndex = 0 }) {\n  const [open, setOpen] = useState(openIndex);\n\n  return (\n    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>\n      {items.map((item, idx) => (\n        <div key={idx} className="accordion">\n          <button\n            className="accordion-header\"\n            onClick={() => setOpen(open === idx ? -1 : idx)}\n            aria-expanded={open === idx}\n            style={{\n              width: '100%',\n              padding: '12px',\n              textAlign: 'left',\n              background: '#f9fafb',\n              border: '1px solid #e5e7eb',\n              borderRadius: '8px',\n              cursor: 'pointer',\n              display: 'flex',\n              alignItems: 'center',\n              gap: '8px',\n            }}\n          >\n            {showIcon && <span>❓</span>}\n            <span style={{ flex: 1 }}>{item.title}</span>\n            <svg\n              style={{\n                transform: open === idx ? 'rotate(0deg)' : 'rotate(180deg)',\n                transition: 'transform 0.2s',\n              }}\n            />\n          </button>\n          {open === idx && (\n            <div className="accordion-body\" style={{ padding: '12px', borderTop: '1px solid #e5e7eb' }}>\n              {item.body}\n            </div>\n          )}\n        </div>\n      ))}\n    </div>\n  );\n}`;

    const htmlEscaped = htmlCode.replace(/</g, '&lt;').replace(/>/g, '&gt;');
    const reactEscaped = reactCode.replace(/</g, '&lt;').replace(/>/g, '&gt;');
    const componentEscaped = componentCode.replace(/</g, '&lt;').replace(/>/g, '&gt;');

    return `
      <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:40px;align-items:start;">
        <div style="padding:20px;border:1px solid #e5e7eb;border-radius:8px;">
          ${accordion(args)}
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
        story: 'Use **Controls** to switch styles, toggle the icon, and change which item is expanded.',
      },
    },
  },
};

// ─── Card style ───────────────────────────────────────────────────────────────

export const CardStyle = {
    name: 'Card — shared container',
  parameters: {
    docs: {
      description: {
        story: `
Default card accordion — Figma: \`Style=Card, Dark Version=False, Icon=False\`.

Uses \`.accordion\` wrapper. Active item gets \`.accordion-item.open\` — header background changes to \`var(--color-bg-muted)\`.

**✅ Do** — use for FAQ sections where items belong to the same topic group.
**❌ Don't** — use when items are visually or conceptually independent — prefer Separate Cards.
        `.trim(),
      },
      source: {
        language: 'html',
        code: `<div class="accordion">

  <!-- Item 1 — expanded: add class "open" to .accordion-item -->
  <div class="accordion-item open">
    <button class="accordion-header" aria-expanded="true" aria-controls="body-0" id="header-0">
      <span style="flex:1;">Can I use FlowBite in open-source projects?</span>
      <svg class="accordion-chevron" viewBox="0 0 24 24" fill="none">
        <path d="M6 9l6 6 6-6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </button>
    <div class="accordion-body" id="body-0" role="region" aria-labelledby="header-0">
      Generally, it is accepted to use FlowBite in open-source projects…
    </div>
  </div>

  <!-- Item 2 — collapsed: no "open" class -->
  <div class="accordion-item">
    <button class="accordion-header" aria-expanded="false" aria-controls="body-1" id="header-1">
      <span style="flex:1;">How do you achieve the blurry effect?</span>
      <svg class="accordion-chevron" viewBox="0 0 24 24" fill="none">
        <path d="M6 9l6 6 6-6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </button>
    <div class="accordion-body" id="body-1" role="region" aria-labelledby="header-1">
      The blurry effect can be achieved using the CSS backdrop-filter property…
    </div>
  </div>

</div>`,
      },
    },
  },
  render: () => accordion({ style: 'card', showIcon: false, openIndex: 0 }),
};

// ─── Card with icon ───────────────────────────────────────────────────────────

export const CardWithIcon = {
    name: 'Card — with icon',
  parameters: {
    docs: {
      description: {
        story: `
Card accordion with \`question-mark-circle\` icon — Figma: \`Style=Card, Icon=True\`.

Icon: 18×18, placed inside \`.accordion-header\` before the title span. Gap: 8px (margin-right on icon span).

**✅ Do** — use an icon when it reinforces the content type (e.g. a question icon for FAQ).
**❌ Don't** — use an icon just for decoration when it doesn't add meaning.
        `.trim(),
      },
      source: {
        language: 'html',
        code: `<!-- Active item with icon inside .accordion-header -->
<div class="accordion-item open">
  <button class="accordion-header" aria-expanded="true" aria-controls="body-0" id="header-0">
    <span style="flex-shrink:0;display:flex;align-items:center;margin-right:8px;">
      <!-- question-mark-circle 18×18 -->
    </span>
    <span style="flex:1;">What is this library?</span>
    <svg class="accordion-chevron" viewBox="0 0 24 24" fill="none">
      <path d="M6 9l6 6 6-6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  </button>
  <div class="accordion-body" id="body-0" role="region" aria-labelledby="header-0">Body text…</div>
</div>`,
      },
    },
  },
  render: () => accordion({ style: 'card', showIcon: true, openIndex: 0 }),
};

// ─── Separate cards ───────────────────────────────────────────────────────────

export const SeparateCards = {
    name: 'Separate cards',
  parameters: {
    docs: {
      description: {
        story: `
Each accordion item is its own \`.accordion\` — Figma: \`Style=Separate Cards, Icon=False\`.

Gap: **16px** between \`.accordion\` wrappers (flex column gap on parent div). Each item is a full independent card.

**✅ Do** — use when accordion items are independent of each other (different topics or categories).
**❌ Don't** — use for tightly related items; Card style communicates grouping better.
        `.trim(),
      },
      source: {
        language: 'html',
        code: `<div style="display:flex;flex-direction:column;gap:16px;">

  <!-- Each item gets its own .accordion wrapper -->
  <div class="accordion">
    <div class="accordion-item open">
      <button class="accordion-header" aria-expanded="true" aria-controls="body-0" id="header-0">
        <span style="flex:1;">What is this library?</span>
        <svg class="accordion-chevron" viewBox="0 0 24 24" fill="none">
          <path d="M6 9l6 6 6-6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </button>
      <div class="accordion-body" id="body-0" role="region" aria-labelledby="header-0">Body text…</div>
    </div>
  </div>

  <div class="accordion">
    <div class="accordion-item">
      <button class="accordion-header" aria-expanded="false" aria-controls="body-1" id="header-1">
        <span style="flex:1;">How do you achieve the blurry effect?</span>
        <svg class="accordion-chevron" viewBox="0 0 24 24" fill="none">
          <path d="M6 9l6 6 6-6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </button>
      <div class="accordion-body" id="body-1" role="region" aria-labelledby="header-1">Body text…</div>
    </div>
  </div>

</div>`,
      },
    },
  },
  render: () => accordion({ style: 'separate', showIcon: false, openIndex: 0 }),
};

// ─── Only links ───────────────────────────────────────────────────────────────

export const OnlyLinks = {
    name: 'Only links — minimal',
  parameters: {
    docs: {
      description: {
        story: `
Minimal accordion — Figma: \`Style=Only Links, Dark Version=False, Icon=False\`.

Uses \`.accordion.accordion-flush\` — removes outer border and border-radius. Items are separated by internal top borders only.

**✅ Do** — use on white or very light backgrounds where you want the accordion to feel like part of the content flow.
**❌ Don't** — use when items need visual separation from surrounding content — Card or Separate Cards add more containment.
        `.trim(),
      },
      source: {
        language: 'html',
        code: `<div class="accordion accordion-flush">

  <div class="accordion-item open">
    <button class="accordion-header" aria-expanded="true" aria-controls="body-0" id="header-0">
      <span style="flex:1;">Can I use FlowBite in open-source projects?</span>
      <svg class="accordion-chevron" viewBox="0 0 24 24" fill="none">
        <path d="M6 9l6 6 6-6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </button>
    <div class="accordion-body" id="body-0" role="region" aria-labelledby="header-0">Body text…</div>
  </div>

  <div class="accordion-item">
    <button class="accordion-header" aria-expanded="false" aria-controls="body-1" id="header-1">
      <span style="flex:1;">How do you achieve the blurry effect?</span>
      <svg class="accordion-chevron" viewBox="0 0 24 24" fill="none">
        <path d="M6 9l6 6 6-6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </button>
    <div class="accordion-body" id="body-1" role="region" aria-labelledby="header-1">Body text…</div>
  </div>

</div>`,
      },
    },
  },
  render: () => accordion({ style: 'links', showIcon: false, openIndex: 0 }),
};

// ─── All styles ───────────────────────────────────────────────────────────────

export const AllStyles = {
    name: 'All styles',
  args: { showIcon: false, openIndex: 0 },
  parameters: {
    controls: { include: ['showIcon', 'openIndex'] },
    docs: {
      description: {
        story: 'All three styles side by side. Toggle **showIcon** to add icons and **openIndex** to change which item is expanded.',
      },
      source: {
        language: 'html',
        code: `<!-- .accordion — shared container (Card) -->
<!-- .accordion × n in flex gap:16px (Separate Cards) -->
<!-- .accordion.accordion-flush — flush / Only Links -->`,
      },
    },
  },
  render: ({ showIcon, openIndex }) => `
    <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:32px;align-items:start;padding:8px 0;">
      <div>
        <div style="font:700 10px/1.5 ui-monospace,monospace;color:#9ca3af;text-transform:uppercase;letter-spacing:.08em;margin-bottom:12px;">Card</div>
        ${accordion({ style: 'card', showIcon, openIndex })}
      </div>
      <div>
        <div style="font:700 10px/1.5 ui-monospace,monospace;color:#9ca3af;text-transform:uppercase;letter-spacing:.08em;margin-bottom:12px;">Separate Cards</div>
        ${accordion({ style: 'separate', showIcon, openIndex })}
      </div>
      <div>
        <div style="font:700 10px/1.5 ui-monospace,monospace;color:#9ca3af;text-transform:uppercase;letter-spacing:.08em;margin-bottom:12px;">Only Links</div>
        ${accordion({ style: 'links', showIcon: false, openIndex })}
      </div>
    </div>
  `,
};
