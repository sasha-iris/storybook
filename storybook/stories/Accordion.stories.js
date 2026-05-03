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
  render: (args) => accordion(args),
  parameters: {
    docs: {
      description: {
        story: 'Use **Controls** to switch styles, toggle the icon, and change which item is expanded.',
      },
      source: {
        transform: (_src, storyCtx) => {
          const { style, showIcon, openIndex } = storyCtx.args;
          const flushClass = style === 'links' ? ' accordion-flush' : '';
          if (style === 'separate') {
            return `<!-- Accordion — style:separate, gap:16px -->
<div style="display:flex;flex-direction:column;gap:16px;">

  <!-- Each item is its own .accordion -->
  <div class="accordion">
    <div class="accordion-item open">
      <button class="accordion-header" aria-expanded="true" aria-controls="body-0" id="header-0">
        ${showIcon ? '<svg width="18" height="18"><!-- question-mark-circle --></svg>' : ''}
        <span style="flex:1;">Can I use FlowBite in open-source projects?</span>
        <svg class="accordion-chevron" viewBox="0 0 24 24"><!-- chevron --></svg>
      </button>
      <div class="accordion-body" id="body-0" role="region" aria-labelledby="header-0">
        Body text content…
      </div>
    </div>
  </div>

  <div class="accordion">
    <div class="accordion-item">
      <button class="accordion-header" aria-expanded="false" aria-controls="body-1" id="header-1">
        <span style="flex:1;">How do you achieve the blurry effect?</span>
        <svg class="accordion-chevron" viewBox="0 0 24 24"><!-- chevron --></svg>
      </button>
      <div class="accordion-body" id="body-1" role="region" aria-labelledby="header-1">
        Body text content…
      </div>
    </div>
  </div>

</div>`;
          }
          return `<!-- Accordion — style:${style}, showIcon:${showIcon}, openIndex:${openIndex} -->
<div class="accordion${flushClass}">

  <!-- Active item (index ${openIndex}) — add class "open" -->
  <div class="accordion-item open">
    <button class="accordion-header" aria-expanded="true" aria-controls="body-0" id="header-0">
      ${showIcon ? '<svg width="18" height="18"><!-- question-mark-circle --></svg>' : ''}
      <span style="flex:1;">Can I use FlowBite in open-source projects?</span>
      <svg class="accordion-chevron" viewBox="0 0 24 24"><!-- chevron --></svg>
    </button>
    <div class="accordion-body" id="body-0" role="region" aria-labelledby="header-0">
      Body text content…
    </div>
  </div>

  <!-- Collapsed item — no "open" class -->
  <div class="accordion-item">
    <button class="accordion-header" aria-expanded="false" aria-controls="body-1" id="header-1">
      <span style="flex:1;">How do you achieve the blurry effect?</span>
      <svg class="accordion-chevron" viewBox="0 0 24 24"><!-- chevron --></svg>
    </button>
    <div class="accordion-body" id="body-1" role="region" aria-labelledby="header-1">
      Body text content…
    </div>
  </div>

</div>`;
        },
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
