/**
 * Iris Library — Accordion
 *
 * Source: Figma › Iris Library › Accordion component set (node 2370:20939)
 *
 * ## Confirmed variants (light mode only — dark mode excluded per project rules)
 * | Style          | Icon  | Active header      | Inactive header    | Border   |
 * |----------------|-------|--------------------|--------------------|----------|
 * | Card           | No    | bg #f3f4f6 #111928 | bg #fff  #6b7280   | #e5e7eb  |
 * | Card           | Yes   | bg #f3f4f6 #111928 | bg #fff  #6b7280   | #e5e7eb  |
 * | Separate Cards | No    | bg #f3f4f6 #111928 | bg #fff  #6b7280   | #e5e7eb  |
 * | Separate Cards | Yes   | bg #f3f4f6 #111928 | bg #fff  #6b7280   | #e5e7eb  |
 * | Only Links     | No    | transparent #111928 | transparent #111928 | sep #e5e7eb |
 *
 * ## Tokens
 * - Header font: 16px/500 (Only Links: 18px/500)
 * - Body font: 16px/400, color #6b7280
 * - Chevron: 16×16 stroke outline, color = header text color
 * - Icon: question-mark-circle solid 18×18, gap=8px before title
 * - Active header padding: 20px (Only Links: 24px top/bottom, 0 horizontal)
 * - Separate Cards gap: 16px between items, inactive buttons r=8px
 */

// ─── Icons ────────────────────────────────────────────────────────────────────

const chevronUp = (color) => `<svg width="16" height="16" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path d="M18 15l-6-6-6 6" stroke="${color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;

const chevronDown = (color) => `<svg width="16" height="16" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path d="M6 9l6 6 6-6" stroke="${color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;

const questionMarkCircle = (color) => `<svg width="18" height="18" viewBox="0 0 20 20" fill="${color}" xmlns="http://www.w3.org/2000/svg">
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

// ─── Item builders ────────────────────────────────────────────────────────────

/**
 * Renders a single accordion header button.
 */
function accordionHeader({ title, open, style, showIcon, index }) {
  const isLinks = style === 'links';
  const isSeparate = style === 'separate';

  const textColor = open ? '#111928' : (isLinks ? '#111928' : '#6b7280');
  const bgColor = open ? '#f3f4f6' : (isLinks ? 'transparent' : '#ffffff');
  const borderStyle = isLinks ? 'none' : `1px solid #e5e7eb`;
  const borderRadius = (isSeparate && !open) ? 'border-radius:8px;' : '';
  const fs = isLinks ? '18px' : '16px';
  const padding = isLinks ? '24px 0' : '20px';
  const chevron = open ? chevronUp(textColor) : chevronDown(textColor);

  const iconHtml = showIcon
    ? `<span style="flex-shrink:0;display:flex;align-items:center;">${questionMarkCircle(textColor)}</span>`
    : '';

  const titleRow = showIcon
    ? `<div style="display:flex;align-items:center;gap:8px;flex:1;min-width:0;">${iconHtml}<span style="font:500 ${fs}/1.5 inherit;color:${textColor};">${title}</span></div>`
    : `<span style="flex:1;font:500 ${fs}/1.5 inherit;color:${textColor};">${title}</span>`;

  return `<button
    aria-expanded="${open}"
    aria-controls="accordion-body-${index}"
    id="accordion-header-${index}"
    style="
      width:100%;display:flex;align-items:center;justify-content:space-between;
      padding:${padding};background:${bgColor};border:${borderStyle};${borderRadius}
      cursor:pointer;text-align:left;box-sizing:border-box;
    ">
    ${titleRow}
    <span style="flex-shrink:0;display:flex;align-items:center;margin-left:16px;">${chevron}</span>
  </button>`;
}

/**
 * Renders an accordion body panel.
 */
function accordionBody({ body, open, style, index }) {
  const isLinks = style === 'links';
  const borderStyle = isLinks ? 'none' : `1px solid #e5e7eb`;
  const borderTop = isLinks ? 'none' : 'none';
  const bgColor = isLinks ? 'transparent' : '#ffffff';
  const padding = isLinks ? '0 0 20px 0' : '20px';

  if (!open) return '';

  return `<div
    id="accordion-body-${index}"
    role="region"
    aria-labelledby="accordion-header-${index}"
    style="
      background:${bgColor};border:${borderStyle};border-top:${borderTop};
      padding:${padding};box-sizing:border-box;
    ">
    <p style="font:400 16px/1.625 inherit;color:#6b7280;margin:0;">${body}</p>
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
  const isSeparate = style === 'separate';
  const isLinks = style === 'links';

  // Outer wrapper styles differ by style
  const wrapperStyle = isSeparate
    ? 'display:flex;flex-direction:column;gap:16px;'
    : isLinks
      ? 'display:flex;flex-direction:column;border-top:1px solid #e5e7eb;'
      : 'display:flex;flex-direction:column;border:1px solid #e5e7eb;border-radius:8px;overflow:hidden;';

  const renderedItems = items.map((item, i) => {
    const open = i === openIndex;
    const header = accordionHeader({ title: item.title, open, style, showIcon, index: i });
    const body   = accordionBody({ body: item.body, open, style, index: i });

    if (isSeparate) {
      // Each item is its own card with border
      const cardBorder = open
        ? 'border:1px solid #e5e7eb;border-radius:8px;overflow:hidden;'
        : '';
      return `<div style="${cardBorder}">${header}${body}</div>`;
    }

    if (isLinks) {
      // Separator below each item
      return `<div style="border-bottom:1px solid #e5e7eb;">${header}${body}</div>`;
    }

    // Card style: items stacked, border-top between items
    const borderTop = i > 0 ? 'border-top:1px solid #e5e7eb;' : '';
    return `<div style="${borderTop}">${header}${body}</div>`;
  }).join('');

  return `<div style="${wrapperStyle}" role="list">${renderedItems}</div>`;
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
| Style | Description |
|---|---|
| Card | Items share one bordered container with a bg-toggle on active header |
| Separate Cards | Each item is its own card; inactive items have \`r=8px\` |
| Only Links | No borders or backgrounds; items separated by a 1px line |

**QA checklist**
- Active header: bg \`#f3f4f6\`, text \`#111928\`, chevron-up
- Inactive header: bg \`#ffffff\`, text \`#6b7280\`, chevron-down
- Only Links: no bg on header, separator \`1px #e5e7eb\`
- Body: 16px/400, color \`#6b7280\`
- \`aria-expanded\` on every header button; \`role="region"\` on every body panel
- Keyboard: Tab focuses headers; Enter/Space toggles
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
      description: '`card` — shared bordered container. `separate` — each item is its own card (gap 16px). `links` — no bg/border, only divider lines.',
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
          const isSeparate = style === 'separate';
          const isLinks = style === 'links';
          const outerStyle = isSeparate
            ? 'display:flex;flex-direction:column;gap:16px;'
            : isLinks
              ? 'display:flex;flex-direction:column;border-top:1px solid #e5e7eb;'
              : 'display:flex;flex-direction:column;border:1px solid #e5e7eb;border-radius:8px;overflow:hidden;';
          return `<!-- Accordion — style:${style}, showIcon:${showIcon}, openIndex:${openIndex} -->
<div style="${outerStyle}">

  <!-- Active item (index ${openIndex}) -->
  <div>
    <button aria-expanded="true" aria-controls="body-0" id="header-0"
            style="width:100%;display:flex;align-items:center;justify-content:space-between;
                   padding:20px;background:#f3f4f6;border:1px solid #e5e7eb;cursor:pointer;">
      ${showIcon ? '<svg width="18" height="18"><!-- question-mark-circle --></svg>' : ''}
      <span style="flex:1;font:500 16px/1.5 inherit;color:#111928;">Item title</span>
      <svg width="16" height="16" fill="none" viewBox="0 0 24 24"><!-- chevron-up, color #111928 --></svg>
    </button>
    <div id="body-0" role="region" aria-labelledby="header-0"
         style="background:#ffffff;border:1px solid #e5e7eb;padding:20px;">
      <p style="font:400 16px/1.625 inherit;color:#6b7280;margin:0;">Body text content…</p>
    </div>
  </div>

  <!-- Collapsed item -->
  <div>
    <button aria-expanded="false" aria-controls="body-1" id="header-1"
            style="width:100%;display:flex;align-items:center;justify-content:space-between;
                   padding:20px;background:#ffffff;border:1px solid #e5e7eb;cursor:pointer;">
      <span style="flex:1;font:500 16px/1.5 inherit;color:#6b7280;">Item title</span>
      <svg width="16" height="16" fill="none" viewBox="0 0 24 24"><!-- chevron-down, color #6b7280 --></svg>
    </button>
    <!-- body hidden when collapsed -->
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

Items share one bordered container. Active header: bg \`#f3f4f6\`, text \`#111928\`. Inactive: bg \`#ffffff\`, text \`#6b7280\`.

**✅ Do** — use for FAQ sections where items belong to the same topic group.
**❌ Don't** — use when items are visually or conceptually independent — prefer Separate Cards.
        `.trim(),
      },
      source: {
        language: 'html',
        code: `<div style="display:flex;flex-direction:column;border:1px solid #e5e7eb;border-radius:8px;overflow:hidden;">

  <!-- Item 1 — expanded -->
  <div>
    <button aria-expanded="true" aria-controls="body-0" id="header-0"
            style="width:100%;display:flex;align-items:center;justify-content:space-between;
                   padding:20px;background:#f3f4f6;border:none;cursor:pointer;text-align:left;">
      <span style="flex:1;font:500 16px/1.5 inherit;color:#111928;">Can I use FlowBite in open-source projects?</span>
      <!-- chevron-up, 16×16, color #111928 -->
    </button>
    <div id="body-0" role="region" aria-labelledby="header-0"
         style="background:#ffffff;border-top:1px solid #e5e7eb;padding:20px;">
      <p style="font:400 16px/1.625 inherit;color:#6b7280;margin:0;">Body text…</p>
    </div>
  </div>

  <!-- Item 2 — collapsed -->
  <div style="border-top:1px solid #e5e7eb;">
    <button aria-expanded="false" aria-controls="body-1" id="header-1"
            style="width:100%;display:flex;align-items:center;justify-content:space-between;
                   padding:20px;background:#ffffff;border:none;cursor:pointer;text-align:left;">
      <span style="flex:1;font:500 16px/1.5 inherit;color:#6b7280;">How do you achieve the blurry effect?</span>
      <!-- chevron-down, 16×16, color #6b7280 -->
    </button>
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

Icon: 18×18, color matches header text (\`#111928\` active / \`#6b7280\` inactive). Gap between icon and title: 8px.

**✅ Do** — use an icon when it reinforces the content type (e.g. a question icon for FAQ).
**❌ Don't** — use an icon just for decoration when it doesn't add meaning.
        `.trim(),
      },
      source: {
        language: 'html',
        code: `<!-- Active item with icon -->
<button aria-expanded="true"
        style="width:100%;display:flex;align-items:center;justify-content:space-between;
               padding:20px;background:#f3f4f6;border:none;cursor:pointer;">
  <div style="display:flex;align-items:center;gap:8px;flex:1;">
    <!-- question-mark-circle 18×18, fill #111928 -->
    <span style="font:500 16px/1.5 inherit;color:#111928;">What is this library?</span>
  </div>
  <!-- chevron-up 16×16, color #111928 -->
</button>`,
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
Each accordion item is its own card — Figma: \`Style=Separate Cards, Icon=False\`.

Gap: **16px** between items. Collapsed items have \`border-radius:8px\`. Active item's body shares the border with the header (no gap).

**✅ Do** — use when accordion items are independent of each other (different topics or categories).
**❌ Don't** — use for tightly related items; Card style communicates grouping better.
        `.trim(),
      },
      source: {
        language: 'html',
        code: `<div style="display:flex;flex-direction:column;gap:16px;">

  <!-- Active item: no outer border-radius so header + body share border -->
  <div style="border:1px solid #e5e7eb;border-radius:8px;overflow:hidden;">
    <button aria-expanded="true"
            style="width:100%;padding:20px;background:#f3f4f6;border:none;cursor:pointer;
                   display:flex;align-items:center;justify-content:space-between;">
      <span style="font:500 16px/1.5 inherit;color:#111928;">What is this library?</span>
      <!-- chevron-up #111928 -->
    </button>
    <div style="background:#ffffff;border-top:1px solid #e5e7eb;padding:20px;">
      <p style="font:400 16px/1.625 inherit;color:#6b7280;margin:0;">Body text…</p>
    </div>
  </div>

  <!-- Collapsed item: r=8px, full border -->
  <button aria-expanded="false"
          style="width:100%;padding:20px;background:#ffffff;
                 border:1px solid #e5e7eb;border-radius:8px;cursor:pointer;
                 display:flex;align-items:center;justify-content:space-between;">
    <span style="font:500 16px/1.5 inherit;color:#6b7280;">How do you achieve the blurry effect?</span>
    <!-- chevron-down #6b7280 -->
  </button>

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

No background or border on items. Each item separated by a \`1px #e5e7eb\` line. Header font: **18px**/500. Padding: **24px top/bottom**, 0 horizontal.

**✅ Do** — use on white or very light backgrounds where you want the accordion to feel like part of the content flow.
**❌ Don't** — use when items need visual separation from surrounding content — Card or Separate Cards add more containment.
        `.trim(),
      },
      source: {
        language: 'html',
        code: `<div style="display:flex;flex-direction:column;border-top:1px solid #e5e7eb;">

  <!-- Item 1 — expanded -->
  <div style="border-bottom:1px solid #e5e7eb;">
    <button aria-expanded="true"
            style="width:100%;display:flex;align-items:center;justify-content:space-between;
                   padding:24px 0;background:transparent;border:none;cursor:pointer;">
      <span style="flex:1;font:500 18px/1.5 inherit;color:#111928;">Can I use FlowBite in open-source projects?</span>
      <!-- chevron-up 16×16, color #111928 -->
    </button>
    <div style="padding:0 0 20px 0;">
      <p style="font:400 16px/1.625 inherit;color:#6b7280;margin:0;">Body text…</p>
    </div>
  </div>

  <!-- Item 2 — collapsed -->
  <div style="border-bottom:1px solid #e5e7eb;">
    <button aria-expanded="false"
            style="width:100%;display:flex;align-items:center;justify-content:space-between;
                   padding:24px 0;background:transparent;border:none;cursor:pointer;">
      <span style="flex:1;font:500 18px/1.5 inherit;color:#111928;">How do you achieve the blurry effect?</span>
      <!-- chevron-down 16×16, color #111928 -->
    </button>
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
        code: `<!-- style="card"     — shared container -->
<!-- style="separate" — individual cards with gap:16px -->
<!-- style="links"    — no bg, divider lines only -->`,
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
