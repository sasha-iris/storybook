const H=`<svg class="accordion-chevron" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M6 9l6 6 6-6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,O=`<svg width="18" height="18" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"/>
</svg>`,T=[{title:"Can I use FlowBite in open-source projects?",body:"Generally, it is accepted to use FlowBite in open-source projects, as long as the project is licensed under the same terms. Feel free to use this design kit for your open-source projects. Find out more information by reading the license."},{title:'How do you achieve the "blurry" effect?',body:"The blurry effect can be achieved using the CSS backdrop-filter property. This works well in modern browsers and improves the visual quality of overlays and floating panels."},{title:"What about browser support?",body:"Browser support for modern CSS features is generally very good. We recommend checking caniuse.com for specific properties. Most features used in this library have 95%+ global coverage."}];function m({title:e,body:o,open:n,showIcon:r,index:a}){const i=r?`<span style="flex-shrink:0;display:flex;align-items:center;margin-right:8px;">${O}</span>`:"";return`<div class="accordion-item${n?" open":""}">
    <button
      class="accordion-header"
      aria-expanded="${n}"
      aria-controls="accordion-body-${a}"
      id="accordion-header-${a}">
      ${i}<span style="flex:1;">${e}</span>
      ${H}
    </button>
    <div class="accordion-body" id="accordion-body-${a}" role="region" aria-labelledby="accordion-header-${a}">
      ${o}
    </div>
  </div>`}function s({style:e="card",showIcon:o=!1,openIndex:n=0,items:r=T}={}){if(e==="separate")return`<div style="display:flex;flex-direction:column;gap:16px;">${r.map((t,y)=>`<div class="accordion">${m({...t,open:y===n,showIcon:o,index:y})}</div>`).join("")}</div>`;const a=e==="links"?" accordion-flush":"",i=r.map((v,t)=>m({...v,open:t===n,showIcon:o,index:t})).join("");return`<div class="accordion${a}">${i}</div>`}const W={title:"Iris Library/Accordion",tags:["autodocs","stable"],parameters:{layout:"padded",docs:{description:{component:`
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
        `.trim()}}},argTypes:{openIndex:{control:"select",options:[0,1,2],description:"Which accordion item is expanded (0-based). In a real implementation this state is managed by JS.",table:{category:"Content",defaultValue:{summary:0}}},showIcon:{control:"boolean",description:"Show a `question-mark-circle` icon (18×18) before each item title.",table:{category:"Content",defaultValue:{summary:!1}}},style:{control:"select",options:["card","separate","links"],description:"`card` — `.accordion` shared container. `separate` — each item its own `.accordion` (gap 16px). `links` — `.accordion-flush` (no bg/border, divider lines).",table:{category:"Appearance",defaultValue:{summary:"card"}}}},args:{style:"card",showIcon:!1,openIndex:0}},d={name:"Interactive (Controls)",render:e=>s(e),parameters:{docs:{description:{story:"Use **Controls** to switch styles, toggle the icon, and change which item is expanded."},source:{transform:(e,o)=>{const{style:n,showIcon:r,openIndex:a}=o.args,i=n==="links"?" accordion-flush":"";return n==="separate"?`<!-- Accordion — style:separate, gap:16px -->
<div style="display:flex;flex-direction:column;gap:16px;">

  <!-- Each item is its own .accordion -->
  <div class="accordion">
    <div class="accordion-item open">
      <button class="accordion-header" aria-expanded="true" aria-controls="body-0" id="header-0">
        ${r?'<svg width="18" height="18"><!-- question-mark-circle --></svg>':""}
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

</div>`:`<!-- Accordion — style:${n}, showIcon:${r}, openIndex:${a} -->
<div class="accordion${i}">

  <!-- Active item (index ${a}) — add class "open" -->
  <div class="accordion-item open">
    <button class="accordion-header" aria-expanded="true" aria-controls="body-0" id="header-0">
      ${r?'<svg width="18" height="18"><!-- question-mark-circle --></svg>':""}
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

</div>`}}}}},c={name:"Card — shared container",parameters:{docs:{description:{story:"\nDefault card accordion — Figma: `Style=Card, Dark Version=False, Icon=False`.\n\nUses `.accordion` wrapper. Active item gets `.accordion-item.open` — header background changes to `var(--color-bg-muted)`.\n\n**✅ Do** — use for FAQ sections where items belong to the same topic group.\n**❌ Don't** — use when items are visually or conceptually independent — prefer Separate Cards.\n        ".trim()},source:{language:"html",code:`<div class="accordion">

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

</div>`}}},render:()=>s({style:"card",showIcon:!1,openIndex:0})},l={name:"Card — with icon",parameters:{docs:{description:{story:`
Card accordion with \`question-mark-circle\` icon — Figma: \`Style=Card, Icon=True\`.

Icon: 18×18, placed inside \`.accordion-header\` before the title span. Gap: 8px (margin-right on icon span).

**✅ Do** — use an icon when it reinforces the content type (e.g. a question icon for FAQ).
**❌ Don't** — use an icon just for decoration when it doesn't add meaning.
        `.trim()},source:{language:"html",code:`<!-- Active item with icon inside .accordion-header -->
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
</div>`}}},render:()=>s({style:"card",showIcon:!0,openIndex:0})},p={name:"Separate cards",parameters:{docs:{description:{story:`
Each accordion item is its own \`.accordion\` — Figma: \`Style=Separate Cards, Icon=False\`.

Gap: **16px** between \`.accordion\` wrappers (flex column gap on parent div). Each item is a full independent card.

**✅ Do** — use when accordion items are independent of each other (different topics or categories).
**❌ Don't** — use for tightly related items; Card style communicates grouping better.
        `.trim()},source:{language:"html",code:`<div style="display:flex;flex-direction:column;gap:16px;">

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

</div>`}}},render:()=>s({style:"separate",showIcon:!1,openIndex:0})},u={name:"Only links — minimal",parameters:{docs:{description:{story:`
Minimal accordion — Figma: \`Style=Only Links, Dark Version=False, Icon=False\`.

Uses \`.accordion.accordion-flush\` — removes outer border and border-radius. Items are separated by internal top borders only.

**✅ Do** — use on white or very light backgrounds where you want the accordion to feel like part of the content flow.
**❌ Don't** — use when items need visual separation from surrounding content — Card or Separate Cards add more containment.
        `.trim()},source:{language:"html",code:`<div class="accordion accordion-flush">

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

</div>`}}},render:()=>s({style:"links",showIcon:!1,openIndex:0})},h={name:"All styles",args:{showIcon:!1,openIndex:0},parameters:{controls:{include:["showIcon","openIndex"]},docs:{description:{story:"All three styles side by side. Toggle **showIcon** to add icons and **openIndex** to change which item is expanded."},source:{language:"html",code:`<!-- .accordion — shared container (Card) -->
<!-- .accordion × n in flex gap:16px (Separate Cards) -->
<!-- .accordion.accordion-flush — flush / Only Links -->`}}},render:({showIcon:e,openIndex:o})=>`
    <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:32px;align-items:start;padding:8px 0;">
      <div>
        <div style="font:700 10px/1.5 ui-monospace,monospace;color:#9ca3af;text-transform:uppercase;letter-spacing:.08em;margin-bottom:12px;">Card</div>
        ${s({style:"card",showIcon:e,openIndex:o})}
      </div>
      <div>
        <div style="font:700 10px/1.5 ui-monospace,monospace;color:#9ca3af;text-transform:uppercase;letter-spacing:.08em;margin-bottom:12px;">Separate Cards</div>
        ${s({style:"separate",showIcon:e,openIndex:o})}
      </div>
      <div>
        <div style="font:700 10px/1.5 ui-monospace,monospace;color:#9ca3af;text-transform:uppercase;letter-spacing:.08em;margin-bottom:12px;">Only Links</div>
        ${s({style:"links",showIcon:!1,openIndex:o})}
      </div>
    </div>
  `};var g,b,f;d.parameters={...d.parameters,docs:{...(g=d.parameters)==null?void 0:g.docs,source:{originalSource:`{
  name: 'Interactive (Controls)',
  render: args => accordion(args),
  parameters: {
    docs: {
      description: {
        story: 'Use **Controls** to switch styles, toggle the icon, and change which item is expanded.'
      },
      source: {
        transform: (_src, storyCtx) => {
          const {
            style,
            showIcon,
            openIndex
          } = storyCtx.args;
          const flushClass = style === 'links' ? ' accordion-flush' : '';
          if (style === 'separate') {
            return \`<!-- Accordion — style:separate, gap:16px -->
<div style="display:flex;flex-direction:column;gap:16px;">

  <!-- Each item is its own .accordion -->
  <div class="accordion">
    <div class="accordion-item open">
      <button class="accordion-header" aria-expanded="true" aria-controls="body-0" id="header-0">
        \${showIcon ? '<svg width="18" height="18"><!-- question-mark-circle --></svg>' : ''}
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

</div>\`;
          }
          return \`<!-- Accordion — style:\${style}, showIcon:\${showIcon}, openIndex:\${openIndex} -->
<div class="accordion\${flushClass}">

  <!-- Active item (index \${openIndex}) — add class "open" -->
  <div class="accordion-item open">
    <button class="accordion-header" aria-expanded="true" aria-controls="body-0" id="header-0">
      \${showIcon ? '<svg width="18" height="18"><!-- question-mark-circle --></svg>' : ''}
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

</div>\`;
        }
      }
    }
  }
}`,...(f=(b=d.parameters)==null?void 0:b.docs)==null?void 0:f.source}}};var x,w,k;c.parameters={...c.parameters,docs:{...(x=c.parameters)==null?void 0:x.docs,source:{originalSource:`{
  name: 'Card — shared container',
  parameters: {
    docs: {
      description: {
        story: \`
Default card accordion — Figma: \\\`Style=Card, Dark Version=False, Icon=False\\\`.

Uses \\\`.accordion\\\` wrapper. Active item gets \\\`.accordion-item.open\\\` — header background changes to \\\`var(--color-bg-muted)\\\`.

**✅ Do** — use for FAQ sections where items belong to the same topic group.
**❌ Don't** — use when items are visually or conceptually independent — prefer Separate Cards.
        \`.trim()
      },
      source: {
        language: 'html',
        code: \`<div class="accordion">

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

</div>\`
      }
    }
  },
  render: () => accordion({
    style: 'card',
    showIcon: false,
    openIndex: 0
  })
}`,...(k=(w=c.parameters)==null?void 0:w.docs)==null?void 0:k.source}}};var C,I,B;l.parameters={...l.parameters,docs:{...(C=l.parameters)==null?void 0:C.docs,source:{originalSource:`{
  name: 'Card — with icon',
  parameters: {
    docs: {
      description: {
        story: \`
Card accordion with \\\`question-mark-circle\\\` icon — Figma: \\\`Style=Card, Icon=True\\\`.

Icon: 18×18, placed inside \\\`.accordion-header\\\` before the title span. Gap: 8px (margin-right on icon span).

**✅ Do** — use an icon when it reinforces the content type (e.g. a question icon for FAQ).
**❌ Don't** — use an icon just for decoration when it doesn't add meaning.
        \`.trim()
      },
      source: {
        language: 'html',
        code: \`<!-- Active item with icon inside .accordion-header -->
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
</div>\`
      }
    }
  },
  render: () => accordion({
    style: 'card',
    showIcon: true,
    openIndex: 0
  })
}`,...(B=(I=l.parameters)==null?void 0:I.docs)==null?void 0:B.source}}};var S,F,$;p.parameters={...p.parameters,docs:{...(S=p.parameters)==null?void 0:S.docs,source:{originalSource:`{
  name: 'Separate cards',
  parameters: {
    docs: {
      description: {
        story: \`
Each accordion item is its own \\\`.accordion\\\` — Figma: \\\`Style=Separate Cards, Icon=False\\\`.

Gap: **16px** between \\\`.accordion\\\` wrappers (flex column gap on parent div). Each item is a full independent card.

**✅ Do** — use when accordion items are independent of each other (different topics or categories).
**❌ Don't** — use for tightly related items; Card style communicates grouping better.
        \`.trim()
      },
      source: {
        language: 'html',
        code: \`<div style="display:flex;flex-direction:column;gap:16px;">

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

</div>\`
      }
    }
  },
  render: () => accordion({
    style: 'separate',
    showIcon: false,
    openIndex: 0
  })
}`,...($=(F=p.parameters)==null?void 0:F.docs)==null?void 0:$.source}}};var j,A,D;u.parameters={...u.parameters,docs:{...(j=u.parameters)==null?void 0:j.docs,source:{originalSource:`{
  name: 'Only links — minimal',
  parameters: {
    docs: {
      description: {
        story: \`
Minimal accordion — Figma: \\\`Style=Only Links, Dark Version=False, Icon=False\\\`.

Uses \\\`.accordion.accordion-flush\\\` — removes outer border and border-radius. Items are separated by internal top borders only.

**✅ Do** — use on white or very light backgrounds where you want the accordion to feel like part of the content flow.
**❌ Don't** — use when items need visual separation from surrounding content — Card or Separate Cards add more containment.
        \`.trim()
      },
      source: {
        language: 'html',
        code: \`<div class="accordion accordion-flush">

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

</div>\`
      }
    }
  },
  render: () => accordion({
    style: 'links',
    showIcon: false,
    openIndex: 0
  })
}`,...(D=(A=u.parameters)==null?void 0:A.docs)==null?void 0:D.source}}};var M,q,E;h.parameters={...h.parameters,docs:{...(M=h.parameters)==null?void 0:M.docs,source:{originalSource:`{
  name: 'All styles',
  args: {
    showIcon: false,
    openIndex: 0
  },
  parameters: {
    controls: {
      include: ['showIcon', 'openIndex']
    },
    docs: {
      description: {
        story: 'All three styles side by side. Toggle **showIcon** to add icons and **openIndex** to change which item is expanded.'
      },
      source: {
        language: 'html',
        code: \`<!-- .accordion — shared container (Card) -->
<!-- .accordion × n in flex gap:16px (Separate Cards) -->
<!-- .accordion.accordion-flush — flush / Only Links -->\`
      }
    }
  },
  render: ({
    showIcon,
    openIndex
  }) => \`
    <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:32px;align-items:start;padding:8px 0;">
      <div>
        <div style="font:700 10px/1.5 ui-monospace,monospace;color:#9ca3af;text-transform:uppercase;letter-spacing:.08em;margin-bottom:12px;">Card</div>
        \${accordion({
    style: 'card',
    showIcon,
    openIndex
  })}
      </div>
      <div>
        <div style="font:700 10px/1.5 ui-monospace,monospace;color:#9ca3af;text-transform:uppercase;letter-spacing:.08em;margin-bottom:12px;">Separate Cards</div>
        \${accordion({
    style: 'separate',
    showIcon,
    openIndex
  })}
      </div>
      <div>
        <div style="font:700 10px/1.5 ui-monospace,monospace;color:#9ca3af;text-transform:uppercase;letter-spacing:.08em;margin-bottom:12px;">Only Links</div>
        \${accordion({
    style: 'links',
    showIcon: false,
    openIndex
  })}
      </div>
    </div>
  \`
}`,...(E=(q=h.parameters)==null?void 0:q.docs)==null?void 0:E.source}}};const V=["Interactive","CardStyle","CardWithIcon","SeparateCards","OnlyLinks","AllStyles"];export{h as AllStyles,c as CardStyle,l as CardWithIcon,d as Interactive,u as OnlyLinks,p as SeparateCards,V as __namedExportsOrder,W as default};
