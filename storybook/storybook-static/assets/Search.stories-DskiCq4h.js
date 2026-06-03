const e={inputBg:"#f9fafb",border:"#d1d5db",placeholder:"#6b7280",selectBg:"#f3f4f6",btnPurple:"#42389d",btnText:"#111928"},a=(t="#ffffff",n=20)=>`<svg width="${n}" height="${n}" viewBox="0 0 20 20" fill="none"><path d="M17.5 17.5 13.5 13.5M15 9a6 6 0 1 1-12 0 6 6 0 0 1 12 0Z" stroke="${t}" stroke-width="1.5" stroke-linecap="round"/></svg>`,b=(t="#111928",n=20)=>`<svg width="${n}" height="${n}" viewBox="0 0 20 20" fill="none"><path d="m5 7.5 5 5 5-5" stroke="${t}" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`,m=()=>'<svg width="14" height="12" viewBox="0 0 14 12" fill="none"><rect width="14" height="4" y="0" fill="#B22334"/><rect width="14" height="4" y="4" fill="#FFFFFF"/><rect width="14" height="4" y="8" fill="#B22334"/><rect x="0" y="0" width="6" height="8" fill="#3C3B6E"/></svg>';function l({placeholder:t="Search",width:n="100%",leftIcon:r=!1,rightIcon:y=!1}){return`<div style="display:flex;align-items:center;gap:8px;height:42px;padding:0 12px;
    background:${e.inputBg};flex:1;min-width:0;box-sizing:border-box;">
    ${r?`<span style="flex-shrink:0;display:flex;">${a(e.placeholder,18)}</span>`:""}
    <span style="flex:1;font-size:14px;color:${e.placeholder};font-family:inherit;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">${t}</span>
    ${y?`<span style="flex-shrink:0;display:flex;">${icnMic()}</span>`:""}
  </div>`}function d(t,n=42){return`<button style="width:${n}px;height:${n}px;background:${t};border:none;cursor:pointer;display:flex;align-items:center;justify-content:center;flex-shrink:0;">
    ${a("#ffffff",20)}
  </button>`}function v(t){return`<button style="height:42px;padding:0 12px;background:${e.selectBg};border:1px solid ${e.border};cursor:pointer;display:flex;align-items:center;gap:6px;white-space:nowrap;flex-shrink:0;">
    <span style="font-size:14px;font-weight:500;color:${e.btnText};font-family:inherit;">${t}</span>
    ${b()}
  </button>`}const s={"input-select-btn":()=>`<div style="display:flex;overflow:hidden;border:1px solid ${e.border};border-radius:8px;">
      ${v("All categories")}
      ${l({placeholder:"Search Mockups, Logos, Design Templates..."})}
      ${d(e.btnPurple)}
    </div>`,"input-btn":()=>`<div style="display:flex;overflow:hidden;border:1px solid ${e.border};border-radius:8px;">
      ${l({placeholder:"Search",leftIcon:!0})}
      ${d(e.btnPurple)}
    </div>`,"input-flag":()=>`<div style="display:flex;align-items:center;height:42px;padding:0 12px;background:${e.inputBg};border:1px solid ${e.border};border-radius:8px;gap:8px;box-sizing:border-box;">
      <div style="display:flex;align-items:center;gap:4px;flex-shrink:0;">
        ${m()}
        <span style="font-size:14px;font-weight:600;color:${e.placeholder};font-family:inherit;">USA</span>
        ${b(e.placeholder,14)}
      </div>
      <div style="width:1px;height:18px;background:#e5e7eb;flex-shrink:0;"></div>
      <span style="font-size:14px;color:${e.placeholder};font-family:inherit;">Search for city</span>
    </div>`,"btn-inside":()=>`<div style="display:flex;align-items:center;height:54px;padding:0 8px;background:${e.inputBg};border:1px solid ${e.border};border-radius:8px;gap:8px;box-sizing:border-box;">
      <span style="display:flex;flex-shrink:0;">${a(e.placeholder,18)}</span>
      <span style="flex:1;font-size:14px;color:${e.placeholder};font-family:inherit;">Search Mockups, Logos ...</span>
      <button style="height:34px;padding:0 12px;background:${e.btnBlue};border:none;border-radius:6px;cursor:pointer;font-family:inherit;">
        <span style="font-size:12px;font-weight:500;color:#ffffff;">Search</span>
      </button>
    </div>`},x={"input-select-btn":"Input + Select + Button","input-btn":"Input + Button","input-flag":"Input + Flag","btn-inside":"Input & Button inside form"},w={title:"Iris Library/Search",tags:["autodocs","stable"],parameters:{docs:{description:{component:`
**Search** provides 6 composite search input patterns, each combining an input field with buttons, selects, or flags in a single visual unit.

**When to use**
- Site-wide search (Input + Button)
- Category-filtered search (Input + Select + Button)
- Location/country search (Input + Flag)
- Embedded in a card or modal (Button inside form)

**When NOT to use**
- When the user types open-ended text and you don't need a trigger button → use plain **Input Field**
- For filtering a visible list as you type → use **Autocomplete**

**Anatomy**
- Input area — \`bg:#f9fafb\`, \`border:#d1d5db\`, placeholder \`#6b7280\`
- Category select (optional) — \`bg:#f3f4f6\`, dropdown chevron
- Search button — icon-only (\`bg:#42389d\`) or labeled (\`bg:#1447e6\`)
- Flag + country code (optional) — for geo-search
        `}}},argTypes:{type:{control:"select",options:Object.keys(x),description:"Search composite type. Each combines input + controls differently.",table:{category:"Appearance",defaultValue:{summary:"input-btn"}}}},args:{type:"input-btn"}},o={name:"Interactive (Controls)",render:({type:t})=>`<div style="max-width:540px;font-family:inherit;">${(s[t]||s["input-btn"])()}</div>`,parameters:{docs:{source:{transform:(t,n)=>{const r=n.args.type||"input-btn";return r==="input-btn"?`<div class="flex overflow-hidden rounded-lg border border-gray-300">
  <div class="flex flex-1 items-center gap-2 px-3 h-[42px] bg-gray-50">
    <!-- search icon -->
    <span class="text-gray-400 text-sm">Search</span>
  </div>
  <button class="w-[42px] h-[42px] bg-[#42389d] flex items-center justify-center">
    <!-- search icon white -->
  </button>
</div>`:`<!-- Search type: ${r} -->
<!-- See gallery story for full HTML -->`}}}}},i={name:"All types",args:{},parameters:{controls:{disable:!0},docs:{description:{story:`All 6 search patterns from Figma. Each is a full-width composite — place them in headers, filter bars, or hero sections.

✅ **Input + Select + Button** — most common pattern for marketplace/catalog search
✅ **Button inside** — use when search is embedded in a card with rounded container
✅ **Input + Flag** — geo-search or international phone number prefix
❌ Don't put two button variants side-by-side in the same form — pick one style per context`},source:{code:`<!-- Input + Select + Button -->
<div class="flex overflow-hidden rounded-lg border border-gray-300">
  <button class="h-[42px] px-3 bg-gray-100 border-r border-gray-300 flex items-center gap-2">
    All categories <svg>…chevron…</svg>
  </button>
  <input class="flex-1 px-3 bg-gray-50 text-sm text-gray-400" placeholder="Search Mockups, Logos…" />
  <button class="w-[42px] bg-[#42389d]"><svg>…search icon…</svg></button>
</div>`}}},render:()=>`<div style="display:flex;flex-direction:column;gap:20px;max-width:680px;font-family:inherit;">
      ${Object.entries(x).map(([t,n])=>`<div>
          <div style="font-size:11px;color:#6b7280;margin-bottom:6px;font-family:inherit;">${n}</div>
          ${s[t]()}
        </div>`).join("")}
    </div>`};var p,c,u;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
  name: 'Interactive (Controls)',
  render: ({
    type
  }) => {
    const fn = TYPES[type] || TYPES['input-btn'];
    return \`<div style="max-width:540px;font-family:inherit;">\${fn()}</div>\`;
  },
  parameters: {
    docs: {
      source: {
        transform: (_src, ctx) => {
          const t = ctx.args.type || 'input-btn';
          if (t === 'input-btn') {
            return \`<div class="flex overflow-hidden rounded-lg border border-gray-300">
  <div class="flex flex-1 items-center gap-2 px-3 h-[42px] bg-gray-50">
    <!-- search icon -->
    <span class="text-gray-400 text-sm">Search</span>
  </div>
  <button class="w-[42px] h-[42px] bg-[#42389d] flex items-center justify-center">
    <!-- search icon white -->
  </button>
</div>\`;
          }
          return \`<!-- Search type: \${t} -->\\n<!-- See gallery story for full HTML -->\`;
        }
      }
    }
  }
}`,...(u=(c=o.parameters)==null?void 0:c.docs)==null?void 0:u.source}}};var f,h,g;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`{
  name: 'All types',
  args: {},
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      description: {
        story: \`All 6 search patterns from Figma. Each is a full-width composite — place them in headers, filter bars, or hero sections.

✅ **Input + Select + Button** — most common pattern for marketplace/catalog search
✅ **Button inside** — use when search is embedded in a card with rounded container
✅ **Input + Flag** — geo-search or international phone number prefix
❌ Don't put two button variants side-by-side in the same form — pick one style per context\`
      },
      source: {
        code: \`<!-- Input + Select + Button -->
<div class="flex overflow-hidden rounded-lg border border-gray-300">
  <button class="h-[42px] px-3 bg-gray-100 border-r border-gray-300 flex items-center gap-2">
    All categories <svg>…chevron…</svg>
  </button>
  <input class="flex-1 px-3 bg-gray-50 text-sm text-gray-400" placeholder="Search Mockups, Logos…" />
  <button class="w-[42px] bg-[#42389d]"><svg>…search icon…</svg></button>
</div>\`
      }
    }
  },
  render: () => {
    return \`<div style="display:flex;flex-direction:column;gap:20px;max-width:680px;font-family:inherit;">
      \${Object.entries(TYPE_LABELS).map(([key, label]) => \`<div>
          <div style="font-size:11px;color:#6b7280;margin-bottom:6px;font-family:inherit;">\${label}</div>
          \${TYPES[key]()}
        </div>\`).join('')}
    </div>\`;
  }
}`,...(g=(h=i.parameters)==null?void 0:h.docs)==null?void 0:g.source}}};const $=["Interactive","AllTypes"];export{i as AllTypes,o as Interactive,$ as __namedExportsOrder,w as default};
