const a={grey:{dot:"#4b5563",text:"#4a5565"},indigo:{dot:"#5850ec",text:"#5850ec"},green:{dot:"#057a55",text:"#009966"},red:{dot:"#e02424",text:"#e7000b"},orange:{dot:"#d03801",text:"#d03801"},teal:{dot:"#009689",text:"#009689"},blue:{dot:"#155dfc",text:"#155dfc"},purple:{dot:"#7e3af2",text:"#9810fa"},pink:{dot:"#d61f69",text:"#e60076"}},c=Object.keys(a),p="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z";function g({label:e="Label",color:t="grey",dismissible:n=!1}){const{dot:i,text:l}=a[t]??a.grey,d=`<svg width="12" height="12" viewBox="0 0 12 12" fill="${i}" aria-hidden="true" style="flex-shrink:0;">
    <circle cx="6" cy="6" r="3"/>
  </svg>`,C=n?`<button type="button" aria-label="Remove ${e}" style="display:inline-flex;align-items:center;justify-content:center;background:none;border:none;cursor:pointer;padding:0;line-height:0;">
        <svg width="12" height="12" viewBox="0 0 20 20" fill="${i}" aria-hidden="true">
          <path fill-rule="evenodd" d="${p}" clip-rule="evenodd"/>
        </svg>
       </button>`:"";return`<span style="display:inline-flex;align-items:center;gap:4px;color:${l};font-size:var(--text-xs);font-weight:var(--font-medium);white-space:nowrap;line-height:1.5;font-family:inherit;">${d}<span>${e}</span>${C}</span>`}const D={title:"Iris Library/Tag",tags:["autodocs","stable"],parameters:{layout:"padded",docs:{description:{component:`
Inline text labels with a colored dot indicator — no background, purely typographic.

**When to use**
- Categorize or label items inline within text (e.g. a status label inside a table cell)
- Show a topic, category, or type tag with a color-coded dot for quick scanning
- Complement other elements without adding visual weight (unlike Badge or Chip)

**When NOT to use**
- Standalone status indicators that need a background for contrast → use Badge
- Removable active filters → use Chip
- Prominent action-required states → use Alert

**Anatomy**
\`● dot · label · [×?]\` — dot is always visible; dismiss × is optional.

**Colors** — 9 themes. Note: dot and text use slightly different shades for Green, Red, Purple, Pink (Figma-exact values preserved).
        `}}},argTypes:{label:{control:"text",description:"Tag label text.",table:{category:"Content",defaultValue:{summary:"Design"}}},dismissible:{control:"boolean",description:'Show a dismiss × button after the label. Wire `aria-label="Remove [label]"` for screen readers.',table:{category:"Content",defaultValue:{summary:!1}}},color:{control:"select",options:c,description:"Color theme. Sets both dot and text color. `grey` is the neutral default.",table:{category:"Appearance",defaultValue:{summary:"grey"}}}},args:{label:"Design",color:"grey",dismissible:!1}},r={name:"Interactive (Controls)",render:e=>g(e),parameters:{docs:{description:{story:"Use the **Controls** panel to configure color, label, and dismiss button."},source:{transform:(e,t)=>{const n=t.args,{dot:i,text:l}=a[n.color]??a.grey,d=n.dismissible?`
  <button type="button" aria-label="Remove ${n.label}" style="display:inline-flex;align-items:center;background:none;border:none;cursor:pointer;padding:0;">
    <svg width="12" height="12" viewBox="0 0 20 20" fill="${i}" aria-hidden="true"><path fill-rule="evenodd" d="${p}" clip-rule="evenodd"/></svg>
  </button>`:"";return`<span style="display:inline-flex;align-items:center;gap:4px;color:${l};font-size:var(--text-xs);font-weight:var(--font-medium);white-space:nowrap;line-height:1.5;">
  <svg width="12" height="12" viewBox="0 0 12 12" fill="${i}" aria-hidden="true">
    <circle cx="6" cy="6" r="3"/>
  </svg>
  <span>${n.label}</span>${d}
</span>`}}}}},s={name:"Colors — all 9 themes",parameters:{controls:{disable:!0},docs:{description:{story:`
All 9 color themes. Tags have no background — the dot and text carry the color.

**✅ Do** — use \`grey\` for neutral/default states; semantic colors for status or category.
**✅ Do** — use tags inside dense layouts (table cells, list rows) where a Badge would be too heavy.
**❌ Don't** — rely on color alone — always pair with a meaningful label (WCAG 1.4.1).
        `},source:{code:`<!-- Grey (neutral) -->
<span style="display:inline-flex;align-items:center;gap:4px;color:#4a5565;font-size:var(--text-xs);font-weight:var(--font-medium);white-space:nowrap;line-height:1.5;">
  <svg width="12" height="12" viewBox="0 0 12 12" fill="#4b5563" aria-hidden="true"><circle cx="6" cy="6" r="3"/></svg>
  <span>Neutral</span>
</span>

<!-- Green -->
<span style="display:inline-flex;align-items:center;gap:4px;color:#009966;font-size:var(--text-xs);font-weight:var(--font-medium);white-space:nowrap;line-height:1.5;">
  <svg width="12" height="12" viewBox="0 0 12 12" fill="#057a55" aria-hidden="true"><circle cx="6" cy="6" r="3"/></svg>
  <span>Active</span>
</span>

<!-- Red -->
<span style="display:inline-flex;align-items:center;gap:4px;color:#e7000b;font-size:var(--text-xs);font-weight:var(--font-medium);white-space:nowrap;line-height:1.5;">
  <svg width="12" height="12" viewBox="0 0 12 12" fill="#e02424" aria-hidden="true"><circle cx="6" cy="6" r="3"/></svg>
  <span>Failed</span>
</span>`,language:"html"}}},render:()=>{const e={grey:"Neutral",indigo:"Design",green:"Active",red:"Failed",orange:"Urgent",teal:"Support",blue:"Engineering",purple:"Product",pink:"Creative"};return`<div style="display:flex;flex-wrap:wrap;gap:16px;align-items:center;">
      ${c.map(t=>g({label:e[t],color:t})).join(`
      `)}
    </div>`}},o={name:"Dismissible — with × button",parameters:{controls:{disable:!0},docs:{description:{story:`
All 9 themes with a dismiss × button. The × uses the same color as the dot.

**✅ Do** — use dismissible tags for inline removable labels (e.g. topic tags on a post, selected categories).
**✅ Do** — wire \`aria-label="Remove [label]"\` on the × for screen readers.
**❌ Don't** — use dismissible tags as primary filter chips — use Chip for that pattern.
        `},source:{code:`<span style="display:inline-flex;align-items:center;gap:4px;color:#5850ec;font-size:var(--text-xs);font-weight:var(--font-medium);white-space:nowrap;line-height:1.5;">
  <svg width="12" height="12" viewBox="0 0 12 12" fill="#5850ec" aria-hidden="true">
    <circle cx="6" cy="6" r="3"/>
  </svg>
  <span>Design</span>
  <button type="button" aria-label="Remove Design" style="display:inline-flex;align-items:center;background:none;border:none;cursor:pointer;padding:0;">
    <svg width="12" height="12" viewBox="0 0 20 20" fill="#5850ec" aria-hidden="true">
      <path fill-rule="evenodd" d="${p}" clip-rule="evenodd"/>
    </svg>
  </button>
</span>`,language:"html"}}},render:()=>{const e={grey:"Neutral",indigo:"Design",green:"Active",red:"Failed",orange:"Urgent",teal:"Support",blue:"Engineering",purple:"Product",pink:"Creative"};return`<div style="display:flex;flex-wrap:wrap;gap:16px;align-items:center;">
      ${c.map(t=>g({label:e[t],color:t,dismissible:!0})).join(`
      `)}
    </div>`}};var u,h,m;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  name: 'Interactive (Controls)',
  render: args => tag(args),
  parameters: {
    docs: {
      description: {
        story: 'Use the **Controls** panel to configure color, label, and dismiss button.'
      },
      source: {
        transform: (_src, ctx) => {
          const a = ctx.args;
          const {
            dot,
            text
          } = TAG_COLORS[a.color] ?? TAG_COLORS.grey;
          const dismissPart = a.dismissible ? \`\\n  <button type="button" aria-label="Remove \${a.label}" style="display:inline-flex;align-items:center;background:none;border:none;cursor:pointer;padding:0;">\\n    <svg width="12" height="12" viewBox="0 0 20 20" fill="\${dot}" aria-hidden="true"><path fill-rule="evenodd" d="\${X_PATH}" clip-rule="evenodd"/></svg>\\n  </button>\` : '';
          return \`<span style="display:inline-flex;align-items:center;gap:4px;color:\${text};font-size:var(--text-xs);font-weight:var(--font-medium);white-space:nowrap;line-height:1.5;">
  <svg width="12" height="12" viewBox="0 0 12 12" fill="\${dot}" aria-hidden="true">
    <circle cx="6" cy="6" r="3"/>
  </svg>
  <span>\${a.label}</span>\${dismissPart}
</span>\`;
        }
      }
    }
  }
}`,...(m=(h=r.parameters)==null?void 0:h.docs)==null?void 0:m.source}}};var f,v,b;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
  name: 'Colors — all 9 themes',
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      description: {
        story: \`
All 9 color themes. Tags have no background — the dot and text carry the color.

**✅ Do** — use \\\`grey\\\` for neutral/default states; semantic colors for status or category.
**✅ Do** — use tags inside dense layouts (table cells, list rows) where a Badge would be too heavy.
**❌ Don't** — rely on color alone — always pair with a meaningful label (WCAG 1.4.1).
        \`
      },
      source: {
        code: \`<!-- Grey (neutral) -->
<span style="display:inline-flex;align-items:center;gap:4px;color:#4a5565;font-size:var(--text-xs);font-weight:var(--font-medium);white-space:nowrap;line-height:1.5;">
  <svg width="12" height="12" viewBox="0 0 12 12" fill="#4b5563" aria-hidden="true"><circle cx="6" cy="6" r="3"/></svg>
  <span>Neutral</span>
</span>

<!-- Green -->
<span style="display:inline-flex;align-items:center;gap:4px;color:#009966;font-size:var(--text-xs);font-weight:var(--font-medium);white-space:nowrap;line-height:1.5;">
  <svg width="12" height="12" viewBox="0 0 12 12" fill="#057a55" aria-hidden="true"><circle cx="6" cy="6" r="3"/></svg>
  <span>Active</span>
</span>

<!-- Red -->
<span style="display:inline-flex;align-items:center;gap:4px;color:#e7000b;font-size:var(--text-xs);font-weight:var(--font-medium);white-space:nowrap;line-height:1.5;">
  <svg width="12" height="12" viewBox="0 0 12 12" fill="#e02424" aria-hidden="true"><circle cx="6" cy="6" r="3"/></svg>
  <span>Failed</span>
</span>\`,
        language: 'html'
      }
    }
  },
  render: () => {
    const labels = {
      grey: 'Neutral',
      indigo: 'Design',
      green: 'Active',
      red: 'Failed',
      orange: 'Urgent',
      teal: 'Support',
      blue: 'Engineering',
      purple: 'Product',
      pink: 'Creative'
    };
    return \`<div style="display:flex;flex-wrap:wrap;gap:16px;align-items:center;">
      \${COLOR_NAMES.map(c => tag({
      label: labels[c],
      color: c
    })).join('\\n      ')}
    </div>\`;
  }
}`,...(b=(v=s.parameters)==null?void 0:v.docs)==null?void 0:b.source}}};var x,y,w;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`{
  name: 'Dismissible — with × button',
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      description: {
        story: \`
All 9 themes with a dismiss × button. The × uses the same color as the dot.

**✅ Do** — use dismissible tags for inline removable labels (e.g. topic tags on a post, selected categories).
**✅ Do** — wire \\\`aria-label="Remove [label]"\\\` on the × for screen readers.
**❌ Don't** — use dismissible tags as primary filter chips — use Chip for that pattern.
        \`
      },
      source: {
        code: \`<span style="display:inline-flex;align-items:center;gap:4px;color:#5850ec;font-size:var(--text-xs);font-weight:var(--font-medium);white-space:nowrap;line-height:1.5;">
  <svg width="12" height="12" viewBox="0 0 12 12" fill="#5850ec" aria-hidden="true">
    <circle cx="6" cy="6" r="3"/>
  </svg>
  <span>Design</span>
  <button type="button" aria-label="Remove Design" style="display:inline-flex;align-items:center;background:none;border:none;cursor:pointer;padding:0;">
    <svg width="12" height="12" viewBox="0 0 20 20" fill="#5850ec" aria-hidden="true">
      <path fill-rule="evenodd" d="\${X_PATH}" clip-rule="evenodd"/>
    </svg>
  </button>
</span>\`,
        language: 'html'
      }
    }
  },
  render: () => {
    const labels = {
      grey: 'Neutral',
      indigo: 'Design',
      green: 'Active',
      red: 'Failed',
      orange: 'Urgent',
      teal: 'Support',
      blue: 'Engineering',
      purple: 'Product',
      pink: 'Creative'
    };
    return \`<div style="display:flex;flex-wrap:wrap;gap:16px;align-items:center;">
      \${COLOR_NAMES.map(c => tag({
      label: labels[c],
      color: c,
      dismissible: true
    })).join('\\n      ')}
    </div>\`;
  }
}`,...(w=(y=o.parameters)==null?void 0:y.docs)==null?void 0:w.source}}};const $=["Interactive","AllColors","Dismissible"];export{s as AllColors,o as Dismissible,r as Interactive,$ as __namedExportsOrder,D as default};
