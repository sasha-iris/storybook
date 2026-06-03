const U=`<svg width="16" height="16" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg" style="flex-shrink:0;vertical-align:middle;">
  <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"/>
</svg>`,z=`<svg width="16" height="16" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path d="M9 5l7 7-7 7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,g={2:["Home","Products"],3:["Home","E-commerce","Products"],4:["Home","E-commerce","Products","Laptop"]};function a({type:e="default",showHomeIcon:r=!0,depth:v=3,items:f}={}){const o=f||g[v]||g[3],s=e==="with-background",n=o.map((i,c)=>{const t=c===o.length-1,d=c===0&&r?U:"",w=t?"":`<span class="breadcrumb-sep" aria-hidden="true">${z}</span>`;return t?`<li class="breadcrumb-item active">
        <span aria-current="page">${d}${i}</span>
      </li>`:`<li class="breadcrumb-item">
      <a href="#">${d}${i}</a>
      ${w}
    </li>`}),y=`<nav aria-label="Breadcrumb">
    <ol class="breadcrumb">
      ${n.join("")}
    </ol>
  </nav>`;return s?`<div style="display:inline-flex;background:var(--color-bg-default);border:1px solid var(--color-border-default);border-radius:8px;padding:12px 20px;">
    <nav aria-label="Breadcrumb" class="breadcrumb-bg">
      <ol class="breadcrumb">
        ${n.join("")}
      </ol>
    </nav>
  </div>`:y}const M={title:"Iris Library/Breadcrumbs",tags:["autodocs","stable"],parameters:{layout:"padded",docs:{description:{component:`
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
        `.trim()}}},argTypes:{depth:{control:"select",options:[2,3,4],description:"Number of breadcrumb items. 3 is the Figma default (Home › E-commerce › Products).",table:{category:"Content",defaultValue:{summary:3}}},showHomeIcon:{control:"boolean",description:"Show the home icon on the first breadcrumb item. When `false`, the first item renders as text only.",table:{category:"Content",defaultValue:{summary:!0}}},type:{control:"select",options:["default","with-background"],description:"`default` — no background, uses `.breadcrumb` on white bg. `with-background` — wrapped in a `#f9fafb` pill (inline style, no CSS class).",table:{category:"Appearance",defaultValue:{summary:"default"}}}},args:{type:"default",showHomeIcon:!0,depth:3}},l={name:"Interactive (Controls)",render:e=>a(e),parameters:{docs:{description:{story:"Use **Controls** to switch between Default and With-background types, toggle the home icon, and change depth."},source:{transform:(e,r)=>{const{type:v,showHomeIcon:f,depth:o}=r.args,s=v==="with-background",n=g[o]||g[3],y=s?'<div style="display:inline-flex;background:#f9fafb;border-radius:8px;padding:12px 20px;">':"",i=s?"</div>":"",c=n.map((t,x)=>{const d=x===n.length-1,k=x===0&&f?`
        <!-- home icon 20×20 -->`:"";return d?`    <li class="breadcrumb-item active">
      <span aria-current="page">${k}${t}</span>
    </li>`:`    <li class="breadcrumb-item">
      <a href="#">${k}${t}</a>
      <span class="breadcrumb-sep" aria-hidden="true"><!-- chevron-right --></span>
    </li>`}).join(`
`);return`${y}<nav aria-label="Breadcrumb">
  <ol class="breadcrumb">
${c}
  </ol>
</nav>${i}`}}}}},u={name:"Default — no background",parameters:{docs:{description:{story:'\nDefault breadcrumb — Figma: `Type=Default` (node `3284:24211`).\n\n**✅ Do** — use as the primary breadcrumb style on white or light-gray page backgrounds.\n**✅ Do** — always mark the last item `.breadcrumb-item.active` + `aria-current="page"` — screen readers announce it as the current location.\n**❌ Don\'t** — make the current (last) item a link — it represents where the user already is.\n        '.trim()},source:{language:"html",code:`<nav aria-label="Breadcrumb">
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
</nav>`}}},render:()=>a({type:"default",showHomeIcon:!0,depth:3})},p={name:"With background",parameters:{docs:{description:{story:"\nBreadcrumb with a light pill background — Figma: `Type=With background` (node `3284:24211`).\n\nThe pill is a plain wrapper div with inline styles (padding:12px 20px, background:#f9fafb, border-radius:8px). The inner breadcrumb uses the same `.breadcrumb` classes.\n\n**✅ Do** — use when the breadcrumb needs to stand out against a busy or image-based background.\n**❌ Don't** — use on `#f9fafb` page backgrounds — the pill will be invisible.\n        ".trim()},source:{language:"html",code:`<!-- With background: pill wrapper + .breadcrumb-bg modifier -->
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
</div>`}}},render:()=>a({type:"with-background",showHomeIcon:!0,depth:3})},m={name:"Both types",args:{showHomeIcon:!0},parameters:{controls:{include:["showHomeIcon"]},docs:{description:{story:"Default and With-background side by side. Toggle **showHomeIcon** to preview both with and without the home icon."},source:{language:"html",code:`<!-- Default: .breadcrumb inside <nav> -->
<nav aria-label="Breadcrumb"><ol class="breadcrumb"><!-- ... --></ol></nav>

<!-- With background: pill wrapper + .breadcrumb -->
<div style="display:inline-flex;background:#f9fafb;border-radius:8px;padding:12px 20px;">
  <nav aria-label="Breadcrumb"><ol class="breadcrumb"><!-- ... --></ol></nav>
</div>`}}},render:({showHomeIcon:e})=>`
    <div style="display:flex;flex-direction:column;gap:24px;padding:24px;">
      <div>
        <div style="font:700 10px/1.5 ui-monospace,monospace;color:#9ca3af;text-transform:uppercase;letter-spacing:.08em;margin-bottom:10px;">Default</div>
        ${a({type:"default",showHomeIcon:e,depth:3})}
      </div>
      <div>
        <div style="font:700 10px/1.5 ui-monospace,monospace;color:#9ca3af;text-transform:uppercase;letter-spacing:.08em;margin-bottom:10px;">With background</div>
        ${a({type:"with-background",showHomeIcon:e,depth:3})}
      </div>
    </div>
  `},b={name:"Depth variants — 2 to 4 items",args:{type:"default"},parameters:{controls:{include:["type"]},docs:{description:{story:`
Breadcrumbs at 2, 3, and 4 levels deep. Use the **type** control to switch between Default and With-background.

**✅ Do** — keep breadcrumbs to 4 levels or fewer; beyond that truncate middle items with \`…\`.
**❌ Don't** — show breadcrumbs on a 1-level page — there is nowhere to navigate back to.
        `.trim()},source:{language:"html",code:`<!-- 2 levels: Home › Products -->
<!-- 3 levels: Home › E-commerce › Products -->
<!-- 4 levels: Home › E-commerce › Products › Laptop -->`}}},render:({type:e})=>`
    <div style="display:flex;flex-direction:column;gap:20px;padding:24px;">
      ${[2,3,4].map(r=>`
        <div>
          <div style="font:700 10px/1.5 ui-monospace,monospace;color:#9ca3af;text-transform:uppercase;letter-spacing:.08em;margin-bottom:8px;">${r} items</div>
          ${a({type:e,showHomeIcon:!0,depth:r})}
        </div>
      `).join("")}
    </div>
  `},h={name:"Without home icon",args:{type:"default"},parameters:{controls:{include:["type"]},docs:{description:{story:`
Breadcrumb with a text "Home" label instead of the house icon.

**✅ Do** — use the text-only variant when available horizontal space is limited.
        `.trim()},source:{language:"html",code:`<!-- First item: text label only, no icon -->
<li class="breadcrumb-item">
  <a href="#">Home</a>
  <span class="breadcrumb-sep" aria-hidden="true"><!-- chevron-right --></span>
</li>`}}},render:({type:e})=>`
    <div style="display:flex;flex-direction:column;gap:20px;padding:24px;">
      <div>
        <div style="font:700 10px/1.5 ui-monospace,monospace;color:#9ca3af;text-transform:uppercase;letter-spacing:.08em;margin-bottom:8px;">With icon</div>
        ${a({type:e,showHomeIcon:!0,depth:3})}
      </div>
      <div>
        <div style="font:700 10px/1.5 ui-monospace,monospace;color:#9ca3af;text-transform:uppercase;letter-spacing:.08em;margin-bottom:8px;">Without icon</div>
        ${a({type:e,showHomeIcon:!1,depth:3})}
      </div>
    </div>
  `};var H,D,$;l.parameters={...l.parameters,docs:{...(H=l.parameters)==null?void 0:H.docs,source:{originalSource:`{
  name: 'Interactive (Controls)',
  render: args => breadcrumb(args),
  parameters: {
    docs: {
      description: {
        story: 'Use **Controls** to switch between Default and With-background types, toggle the home icon, and change depth.'
      },
      source: {
        transform: (_src, storyCtx) => {
          const {
            type,
            showHomeIcon,
            depth
          } = storyCtx.args;
          const isBg = type === 'with-background';
          const labels = PATHS[depth] || PATHS[3];
          const wrapOpen = isBg ? '<div style="display:inline-flex;background:#f9fafb;border-radius:8px;padding:12px 20px;">' : '';
          const wrapClose = isBg ? '</div>' : '';
          const items = labels.map((label, i) => {
            const isCurrent = i === labels.length - 1;
            const isFirst = i === 0;
            const iconSnip = isFirst && showHomeIcon ? '\\n        <!-- home icon 20×20 -->' : '';
            if (isCurrent) {
              return \`    <li class="breadcrumb-item active">
      <span aria-current="page">\${iconSnip}\${label}</span>
    </li>\`;
            }
            return \`    <li class="breadcrumb-item">
      <a href="#">\${iconSnip}\${label}</a>
      <span class="breadcrumb-sep" aria-hidden="true"><!-- chevron-right --></span>
    </li>\`;
          }).join('\\n');
          return \`\${wrapOpen}<nav aria-label="Breadcrumb">
  <ol class="breadcrumb">
\${items}
  </ol>
</nav>\${wrapClose}\`;
        }
      }
    }
  }
}`,...($=(D=l.parameters)==null?void 0:D.docs)==null?void 0:$.source}}};var B,I,W;u.parameters={...u.parameters,docs:{...(B=u.parameters)==null?void 0:B.docs,source:{originalSource:`{
  name: 'Default — no background',
  parameters: {
    docs: {
      description: {
        story: \`
Default breadcrumb — Figma: \\\`Type=Default\\\` (node \\\`3284:24211\\\`).

**✅ Do** — use as the primary breadcrumb style on white or light-gray page backgrounds.
**✅ Do** — always mark the last item \\\`.breadcrumb-item.active\\\` + \\\`aria-current="page"\\\` — screen readers announce it as the current location.
**❌ Don't** — make the current (last) item a link — it represents where the user already is.
        \`.trim()
      },
      source: {
        language: 'html',
        code: \`<nav aria-label="Breadcrumb">
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
</nav>\`
      }
    }
  },
  render: () => breadcrumb({
    type: 'default',
    showHomeIcon: true,
    depth: 3
  })
}`,...(W=(I=u.parameters)==null?void 0:I.docs)==null?void 0:W.source}}};var C,S,T;p.parameters={...p.parameters,docs:{...(C=p.parameters)==null?void 0:C.docs,source:{originalSource:`{
  name: 'With background',
  parameters: {
    docs: {
      description: {
        story: \`
Breadcrumb with a light pill background — Figma: \\\`Type=With background\\\` (node \\\`3284:24211\\\`).

The pill is a plain wrapper div with inline styles (padding:12px 20px, background:#f9fafb, border-radius:8px). The inner breadcrumb uses the same \\\`.breadcrumb\\\` classes.

**✅ Do** — use when the breadcrumb needs to stand out against a busy or image-based background.
**❌ Don't** — use on \\\`#f9fafb\\\` page backgrounds — the pill will be invisible.
        \`.trim()
      },
      source: {
        language: 'html',
        code: \`<!-- With background: pill wrapper + .breadcrumb-bg modifier -->
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
</div>\`
      }
    }
  },
  render: () => breadcrumb({
    type: 'with-background',
    showHomeIcon: true,
    depth: 3
  })
}`,...(T=(S=p.parameters)==null?void 0:S.docs)==null?void 0:T.source}}};var P,F,A;m.parameters={...m.parameters,docs:{...(P=m.parameters)==null?void 0:P.docs,source:{originalSource:`{
  name: 'Both types',
  args: {
    showHomeIcon: true
  },
  parameters: {
    controls: {
      include: ['showHomeIcon']
    },
    docs: {
      description: {
        story: 'Default and With-background side by side. Toggle **showHomeIcon** to preview both with and without the home icon.'
      },
      source: {
        language: 'html',
        code: \`<!-- Default: .breadcrumb inside <nav> -->
<nav aria-label="Breadcrumb"><ol class="breadcrumb"><!-- ... --></ol></nav>

<!-- With background: pill wrapper + .breadcrumb -->
<div style="display:inline-flex;background:#f9fafb;border-radius:8px;padding:12px 20px;">
  <nav aria-label="Breadcrumb"><ol class="breadcrumb"><!-- ... --></ol></nav>
</div>\`
      }
    }
  },
  render: ({
    showHomeIcon
  }) => \`
    <div style="display:flex;flex-direction:column;gap:24px;padding:24px;">
      <div>
        <div style="font:700 10px/1.5 ui-monospace,monospace;color:#9ca3af;text-transform:uppercase;letter-spacing:.08em;margin-bottom:10px;">Default</div>
        \${breadcrumb({
    type: 'default',
    showHomeIcon,
    depth: 3
  })}
      </div>
      <div>
        <div style="font:700 10px/1.5 ui-monospace,monospace;color:#9ca3af;text-transform:uppercase;letter-spacing:.08em;margin-bottom:10px;">With background</div>
        \${breadcrumb({
    type: 'with-background',
    showHomeIcon,
    depth: 3
  })}
      </div>
    </div>
  \`
}`,...(A=(F=m.parameters)==null?void 0:F.docs)==null?void 0:A.source}}};var E,j,L;b.parameters={...b.parameters,docs:{...(E=b.parameters)==null?void 0:E.docs,source:{originalSource:`{
  name: 'Depth variants — 2 to 4 items',
  args: {
    type: 'default'
  },
  parameters: {
    controls: {
      include: ['type']
    },
    docs: {
      description: {
        story: \`
Breadcrumbs at 2, 3, and 4 levels deep. Use the **type** control to switch between Default and With-background.

**✅ Do** — keep breadcrumbs to 4 levels or fewer; beyond that truncate middle items with \\\`…\\\`.
**❌ Don't** — show breadcrumbs on a 1-level page — there is nowhere to navigate back to.
        \`.trim()
      },
      source: {
        language: 'html',
        code: \`<!-- 2 levels: Home › Products -->
<!-- 3 levels: Home › E-commerce › Products -->
<!-- 4 levels: Home › E-commerce › Products › Laptop -->\`
      }
    }
  },
  render: ({
    type
  }) => \`
    <div style="display:flex;flex-direction:column;gap:20px;padding:24px;">
      \${[2, 3, 4].map(depth => \`
        <div>
          <div style="font:700 10px/1.5 ui-monospace,monospace;color:#9ca3af;text-transform:uppercase;letter-spacing:.08em;margin-bottom:8px;">\${depth} items</div>
          \${breadcrumb({
    type,
    showHomeIcon: true,
    depth
  })}
        </div>
      \`).join('')}
    </div>
  \`
}`,...(L=(j=b.parameters)==null?void 0:j.docs)==null?void 0:L.source}}};var O,V,_;h.parameters={...h.parameters,docs:{...(O=h.parameters)==null?void 0:O.docs,source:{originalSource:`{
  name: 'Without home icon',
  args: {
    type: 'default'
  },
  parameters: {
    controls: {
      include: ['type']
    },
    docs: {
      description: {
        story: \`
Breadcrumb with a text "Home" label instead of the house icon.

**✅ Do** — use the text-only variant when available horizontal space is limited.
        \`.trim()
      },
      source: {
        language: 'html',
        code: \`<!-- First item: text label only, no icon -->
<li class="breadcrumb-item">
  <a href="#">Home</a>
  <span class="breadcrumb-sep" aria-hidden="true"><!-- chevron-right --></span>
</li>\`
      }
    }
  },
  render: ({
    type
  }) => \`
    <div style="display:flex;flex-direction:column;gap:20px;padding:24px;">
      <div>
        <div style="font:700 10px/1.5 ui-monospace,monospace;color:#9ca3af;text-transform:uppercase;letter-spacing:.08em;margin-bottom:8px;">With icon</div>
        \${breadcrumb({
    type,
    showHomeIcon: true,
    depth: 3
  })}
      </div>
      <div>
        <div style="font:700 10px/1.5 ui-monospace,monospace;color:#9ca3af;text-transform:uppercase;letter-spacing:.08em;margin-bottom:8px;">Without icon</div>
        \${breadcrumb({
    type,
    showHomeIcon: false,
    depth: 3
  })}
      </div>
    </div>
  \`
}`,...(_=(V=h.parameters)==null?void 0:V.docs)==null?void 0:_.source}}};const N=["Interactive","Default","WithBackground","BothTypes","DepthVariants","WithoutHomeIcon"];export{m as BothTypes,u as Default,b as DepthVariants,l as Interactive,p as WithBackground,h as WithoutHomeIcon,N as __namedExportsOrder,M as default};
