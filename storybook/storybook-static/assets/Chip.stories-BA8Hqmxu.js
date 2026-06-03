const l={light:{bg:"#f3f4f6",text:"#4a5565",icon:"#6b7280",hover:"#e5e7eb",disabledBg:"#f3f4f6",disabledText:"#99a1af"},dark:{bg:"#4a5565",text:"#ffffff",icon:"#f3f4f6",hover:"#1e2939",disabledBg:"#d1d5dc",disabledText:"#ffffff"},indigo:{bg:"#5850ec",text:"#ffffff",icon:"#f3f4f6",hover:"#42389d",disabledBg:"#b4c6fc",disabledText:"#ffffff"},green:{bg:"#009966",text:"#ffffff",icon:"#f3f4f6",hover:"#006045",disabledBg:"#5ee9b5",disabledText:"#ffffff"},red:{bg:"#e7000b",text:"#ffffff",icon:"#f3f4f6",hover:"#9f0712",disabledBg:"#ffa2a2",disabledText:"#ffffff"},orange:{bg:"#d03801",text:"#ffffff",icon:"#f3f4f6",hover:"#8a2c0d",disabledBg:"#fdba8c",disabledText:"#ffffff"},teal:{bg:"#009689",text:"#ffffff",icon:"#f3f4f6",hover:"#005f59",disabledBg:"#46ecd5",disabledText:"#ffffff"},blue:{bg:"#155dfc",text:"#ffffff",icon:"#f3f4f6",hover:"#193cb8",disabledBg:"#8ec5ff",disabledText:"#ffffff"},purple:{bg:"#9810fa",text:"#ffffff",icon:"#f3f4f6",hover:"#6e11b0",disabledBg:"#dab2ff",disabledText:"#ffffff"},pink:{bg:"#e60076",text:"#ffffff",icon:"#f3f4f6",hover:"#a3004c",disabledBg:"#fda5d5",disabledText:"#ffffff"}},h=Object.keys(l),r="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z";function g({label:n="Label",color:t="light",disabled:e=!1,dot:a=!1,state:o="default"}){const i=l[t]??l.light,s=o==="hover"?i.hover:o==="disabled"||e?i.disabledBg:i.bg,u=o==="disabled"||e?i.disabledText:i.text,b=i.icon,A=o==="disabled"||e?"opacity:0.9;":"",R=o==="disabled"||e?"cursor:not-allowed;":"",O=a?`<svg width="12" height="12" viewBox="0 0 12 12" fill="${b}" aria-hidden="true" style="flex-shrink:0;">
        <circle cx="6" cy="6" r="3"/>
       </svg>`:"",_=`<button type="button" aria-label="Remove ${n}"
    style="display:inline-flex;align-items:center;justify-content:center;background:none;border:none;cursor:${e?"not-allowed":"pointer"};padding:0;line-height:0;">
    <svg width="12" height="12" viewBox="0 0 20 20" fill="${b}" aria-hidden="true">
      <path fill-rule="evenodd" d="${r}" clip-rule="evenodd"/>
    </svg>
  </button>`;return`<span style="display:inline-flex;align-items:center;gap:4px;background:${s};color:${u};border-radius:4px;padding:2px 8px;font-size:var(--text-xs);font-weight:var(--font-medium);white-space:nowrap;line-height:1.5;font-family:inherit;${A}${R}">${O}<span>${n}</span>${_}</span>`}const P={title:"Iris Library/Chip",tags:["autodocs","stable"],parameters:{layout:"padded",docs:{description:{component:`
Filter chips for interactive selections — removable tags attached to filters, inputs, or search queries.

**When to use**
- Represent an active filter the user can remove (e.g. "Status: Active ×")
- Show selected items in a multi-select field
- Tag an entity with a removable category label

**When NOT to use**
- Read-only status labels → use Badge instead
- Navigation → use Tabs or Buttons
- Long text → chips truncate; use a different pattern

**Anatomy**
\`[dot?] label [×]\` — dot indicator is optional; dismiss × is always present.

**Colors** — 10 themes: light (default), dark, and 8 semantic colors.
**States** — default, hover, disabled (opacity + muted text/bg).
        `}}},argTypes:{label:{control:"text",description:"Chip label text.",table:{category:"Content",defaultValue:{summary:"Label"}}},dot:{control:"boolean",description:"Show a small dot indicator before the label.",table:{category:"Content",defaultValue:{summary:!1}}},color:{control:"select",options:h,description:"Color theme. `light` = neutral default; colored variants for semantic or categorical use.",table:{category:"Appearance",defaultValue:{summary:"light"}}},disabled:{control:"boolean",description:"Disabled state — muted background and text, cursor `not-allowed`. Sets `aria-disabled` on the dismiss button.",table:{category:"State",defaultValue:{summary:!1}}}},args:{label:"Marketing",color:"light",disabled:!1,dot:!1}},d={name:"Interactive (Controls)",render:n=>g(n),parameters:{docs:{description:{story:"Use the **Controls** panel to configure color, label, dot indicator, and disabled state."},source:{transform:(n,t)=>{const e=t.args,a=l[e.color]??l.light,o=e.disabled?a.disabledBg:a.bg,i=e.disabled?a.disabledText:a.text,s=a.icon,u=e.dot?`
  <svg width="12" height="12" viewBox="0 0 12 12" fill="${s}" aria-hidden="true">
    <circle cx="6" cy="6" r="3"/>
  </svg>`:"";return`<span style="display:inline-flex;align-items:center;gap:4px;background:${o};color:${i};border-radius:4px;padding:2px 8px;font-size:var(--text-xs);font-weight:var(--font-medium);white-space:nowrap;line-height:1.5;">${u}
  <span>${e.label}</span>
  <button type="button" aria-label="Remove ${e.label}"${e.disabled?' aria-disabled="true"':""} style="display:inline-flex;align-items:center;background:none;border:none;cursor:${e.disabled?"not-allowed":"pointer"};padding:0;">
    <svg width="12" height="12" viewBox="0 0 20 20" fill="${s}" aria-hidden="true"><path fill-rule="evenodd" d="${r}" clip-rule="evenodd"/></svg>
  </button>
</span>`}}}}},c={name:"Colors — all 10 themes",parameters:{controls:{disable:!0},docs:{description:{story:`
All 10 color themes in default state.

**✅ Do** — use \`light\` as the default neutral chip; use colored variants to indicate category or priority.
**❌ Don't** — mix chip colors within the same filter bar without a clear semantic reason.
        `},source:{code:`<!-- Light (neutral default) -->
<span style="display:inline-flex;align-items:center;gap:4px;background:#f3f4f6;color:#4a5565;border-radius:4px;padding:2px 8px;font-size:var(--text-xs);font-weight:var(--font-medium);white-space:nowrap;line-height:1.5;">
  <span>Marketing</span>
  <button type="button" aria-label="Remove Marketing" style="display:inline-flex;align-items:center;background:none;border:none;cursor:pointer;padding:0;">
    <svg width="12" height="12" viewBox="0 0 20 20" fill="#6b7280" aria-hidden="true">
      <path fill-rule="evenodd" d="${r}" clip-rule="evenodd"/>
    </svg>
  </button>
</span>

<!-- Indigo -->
<span style="display:inline-flex;align-items:center;gap:4px;background:#5850ec;color:#ffffff;border-radius:4px;padding:2px 8px;font-size:var(--text-xs);font-weight:var(--font-medium);white-space:nowrap;line-height:1.5;">
  <span>Design</span>
  <button type="button" aria-label="Remove Design" style="display:inline-flex;align-items:center;background:none;border:none;cursor:pointer;padding:0;">
    <svg width="12" height="12" viewBox="0 0 20 20" fill="#f3f4f6" aria-hidden="true">
      <path fill-rule="evenodd" d="${r}" clip-rule="evenodd"/>
    </svg>
  </button>
</span>`,language:"html"}}},render:()=>{const n={light:"Marketing",dark:"Finance",indigo:"Design",green:"Active",red:"Overdue",orange:"Urgent",teal:"Support",blue:"Engineering",purple:"Product",pink:"Creative"};return`<div style="display:flex;flex-wrap:wrap;gap:8px;align-items:center;">
      ${h.map(t=>g({label:n[t],color:t})).join(`
      `)}
    </div>`}},f={name:"States — default / hover / disabled",args:{color:"indigo"},parameters:{controls:{include:["color"]},docs:{description:{story:`
Default, hover, and disabled states for the selected color. Use the **color** control to compare themes.

**✅ Do** — show the disabled state when the chip cannot be removed (e.g. a required filter).
**✅ Do** — apply \`aria-disabled="true"\` and \`cursor: not-allowed\` to convey disabled state to screen readers and mouse users.
**❌ Don't** — hide the chip entirely when disabled — keep it visible so users know the filter exists.
        `},source:{code:`<!-- Default -->
<span style="display:inline-flex;align-items:center;gap:4px;background:#5850ec;color:#ffffff;border-radius:4px;padding:2px 8px;font-size:var(--text-xs);font-weight:var(--font-medium);white-space:nowrap;line-height:1.5;">
  <span>Design</span>
  <button type="button" aria-label="Remove Design" style="background:none;border:none;cursor:pointer;padding:0;display:inline-flex;align-items:center;">
    <svg width="12" height="12" viewBox="0 0 20 20" fill="#f3f4f6" aria-hidden="true"><path fill-rule="evenodd" d="${r}" clip-rule="evenodd"/></svg>
  </button>
</span>

<!-- Disabled -->
<span style="display:inline-flex;align-items:center;gap:4px;background:#b4c6fc;color:#ffffff;border-radius:4px;padding:2px 8px;font-size:var(--text-xs);font-weight:var(--font-medium);white-space:nowrap;line-height:1.5;cursor:not-allowed;">
  <span>Design</span>
  <button type="button" aria-label="Remove Design" aria-disabled="true" style="background:none;border:none;cursor:not-allowed;padding:0;display:inline-flex;align-items:center;">
    <svg width="12" height="12" viewBox="0 0 20 20" fill="#f3f4f6" aria-hidden="true"><path fill-rule="evenodd" d="${r}" clip-rule="evenodd"/></svg>
  </button>
</span>`,language:"html"}}},render:({color:n})=>`<div style="display:flex;flex-direction:column;gap:12px;">
      ${[{state:"default",label:"Default"},{state:"hover",label:"Hover"},{state:"disabled",label:"Disabled"}].map(({state:e,label:a})=>`
        <div style="display:flex;align-items:center;gap:16px;">
          <span style="width:64px;font:11px/1 sans-serif;color:#9ca3af;">${a}</span>
          ${g({label:"Design",color:n,state:e})}
        </div>`).join("")}
    </div>`},p={name:"With dot indicator",parameters:{controls:{disable:!0},docs:{description:{story:`
Chips with an optional leading dot indicator. Useful for category/status chips where a visual marker aids scanning.

**✅ Do** — use the dot to reinforce the color's semantic meaning (e.g. green dot = active status).
**❌ Don't** — use the dot as the sole color indicator — the chip background already carries the color.
        `},source:{code:`<span style="display:inline-flex;align-items:center;gap:4px;background:#5850ec;color:#ffffff;border-radius:4px;padding:2px 8px;font-size:var(--text-xs);font-weight:var(--font-medium);white-space:nowrap;line-height:1.5;">
  <svg width="12" height="12" viewBox="0 0 12 12" fill="#f3f4f6" aria-hidden="true">
    <circle cx="6" cy="6" r="3"/>
  </svg>
  <span>Design</span>
  <button type="button" aria-label="Remove Design" style="background:none;border:none;cursor:pointer;padding:0;display:inline-flex;align-items:center;">
    <svg width="12" height="12" viewBox="0 0 20 20" fill="#f3f4f6" aria-hidden="true">
      <path fill-rule="evenodd" d="${r}" clip-rule="evenodd"/>
    </svg>
  </button>
</span>`,language:"html"}}},render:()=>{const n={light:"Marketing",dark:"Finance",indigo:"Design",green:"Active",red:"Overdue",orange:"Urgent",teal:"Support",blue:"Engineering",purple:"Product",pink:"Creative"};return`<div style="display:flex;flex-wrap:wrap;gap:8px;align-items:center;">
      ${h.map(t=>g({label:n[t],color:t,dot:!0})).join(`
      `)}
    </div>`}};var x,v,m;d.parameters={...d.parameters,docs:{...(x=d.parameters)==null?void 0:x.docs,source:{originalSource:`{
  name: 'Interactive (Controls)',
  render: args => chip(args),
  parameters: {
    docs: {
      description: {
        story: 'Use the **Controls** panel to configure color, label, dot indicator, and disabled state.'
      },
      source: {
        transform: (_src, ctx) => {
          const a = ctx.args;
          const c = CHIP_COLORS[a.color] ?? CHIP_COLORS.light;
          const bg = a.disabled ? c.disabledBg : c.bg;
          const text = a.disabled ? c.disabledText : c.text;
          const icon = c.icon;
          const dotPart = a.dot ? \`\\n  <svg width="12" height="12" viewBox="0 0 12 12" fill="\${icon}" aria-hidden="true">\\n    <circle cx="6" cy="6" r="3"/>\\n  </svg>\` : '';
          return \`<span style="display:inline-flex;align-items:center;gap:4px;background:\${bg};color:\${text};border-radius:4px;padding:2px 8px;font-size:var(--text-xs);font-weight:var(--font-medium);white-space:nowrap;line-height:1.5;">\${dotPart}\\n  <span>\${a.label}</span>\\n  <button type="button" aria-label="Remove \${a.label}"\${a.disabled ? ' aria-disabled="true"' : ''} style="display:inline-flex;align-items:center;background:none;border:none;cursor:\${a.disabled ? 'not-allowed' : 'pointer'};padding:0;">\\n    <svg width="12" height="12" viewBox="0 0 20 20" fill="\${icon}" aria-hidden="true"><path fill-rule="evenodd" d="\${X_PATH}" clip-rule="evenodd"/></svg>\\n  </button>\\n</span>\`;
        }
      }
    }
  }
}`,...(m=(v=d.parameters)==null?void 0:v.docs)==null?void 0:m.source}}};var y,w,k;c.parameters={...c.parameters,docs:{...(y=c.parameters)==null?void 0:y.docs,source:{originalSource:`{
  name: 'Colors — all 10 themes',
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      description: {
        story: \`
All 10 color themes in default state.

**✅ Do** — use \\\`light\\\` as the default neutral chip; use colored variants to indicate category or priority.
**❌ Don't** — mix chip colors within the same filter bar without a clear semantic reason.
        \`
      },
      source: {
        code: \`<!-- Light (neutral default) -->
<span style="display:inline-flex;align-items:center;gap:4px;background:#f3f4f6;color:#4a5565;border-radius:4px;padding:2px 8px;font-size:var(--text-xs);font-weight:var(--font-medium);white-space:nowrap;line-height:1.5;">
  <span>Marketing</span>
  <button type="button" aria-label="Remove Marketing" style="display:inline-flex;align-items:center;background:none;border:none;cursor:pointer;padding:0;">
    <svg width="12" height="12" viewBox="0 0 20 20" fill="#6b7280" aria-hidden="true">
      <path fill-rule="evenodd" d="\${X_PATH}" clip-rule="evenodd"/>
    </svg>
  </button>
</span>

<!-- Indigo -->
<span style="display:inline-flex;align-items:center;gap:4px;background:#5850ec;color:#ffffff;border-radius:4px;padding:2px 8px;font-size:var(--text-xs);font-weight:var(--font-medium);white-space:nowrap;line-height:1.5;">
  <span>Design</span>
  <button type="button" aria-label="Remove Design" style="display:inline-flex;align-items:center;background:none;border:none;cursor:pointer;padding:0;">
    <svg width="12" height="12" viewBox="0 0 20 20" fill="#f3f4f6" aria-hidden="true">
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
      light: 'Marketing',
      dark: 'Finance',
      indigo: 'Design',
      green: 'Active',
      red: 'Overdue',
      orange: 'Urgent',
      teal: 'Support',
      blue: 'Engineering',
      purple: 'Product',
      pink: 'Creative'
    };
    return \`<div style="display:flex;flex-wrap:wrap;gap:8px;align-items:center;">
      \${COLOR_NAMES.map(c => chip({
      label: labels[c],
      color: c
    })).join('\\n      ')}
    </div>\`;
  }
}`,...(k=(w=c.parameters)==null?void 0:w.docs)==null?void 0:k.source}}};var $,D,B;f.parameters={...f.parameters,docs:{...($=f.parameters)==null?void 0:$.docs,source:{originalSource:`{
  name: 'States — default / hover / disabled',
  args: {
    color: 'indigo'
  },
  parameters: {
    controls: {
      include: ['color']
    },
    docs: {
      description: {
        story: \`
Default, hover, and disabled states for the selected color. Use the **color** control to compare themes.

**✅ Do** — show the disabled state when the chip cannot be removed (e.g. a required filter).
**✅ Do** — apply \\\`aria-disabled="true"\\\` and \\\`cursor: not-allowed\\\` to convey disabled state to screen readers and mouse users.
**❌ Don't** — hide the chip entirely when disabled — keep it visible so users know the filter exists.
        \`
      },
      source: {
        code: \`<!-- Default -->
<span style="display:inline-flex;align-items:center;gap:4px;background:#5850ec;color:#ffffff;border-radius:4px;padding:2px 8px;font-size:var(--text-xs);font-weight:var(--font-medium);white-space:nowrap;line-height:1.5;">
  <span>Design</span>
  <button type="button" aria-label="Remove Design" style="background:none;border:none;cursor:pointer;padding:0;display:inline-flex;align-items:center;">
    <svg width="12" height="12" viewBox="0 0 20 20" fill="#f3f4f6" aria-hidden="true"><path fill-rule="evenodd" d="\${X_PATH}" clip-rule="evenodd"/></svg>
  </button>
</span>

<!-- Disabled -->
<span style="display:inline-flex;align-items:center;gap:4px;background:#b4c6fc;color:#ffffff;border-radius:4px;padding:2px 8px;font-size:var(--text-xs);font-weight:var(--font-medium);white-space:nowrap;line-height:1.5;cursor:not-allowed;">
  <span>Design</span>
  <button type="button" aria-label="Remove Design" aria-disabled="true" style="background:none;border:none;cursor:not-allowed;padding:0;display:inline-flex;align-items:center;">
    <svg width="12" height="12" viewBox="0 0 20 20" fill="#f3f4f6" aria-hidden="true"><path fill-rule="evenodd" d="\${X_PATH}" clip-rule="evenodd"/></svg>
  </button>
</span>\`,
        language: 'html'
      }
    }
  },
  render: ({
    color
  }) => {
    const rows = [{
      state: 'default',
      label: 'Default'
    }, {
      state: 'hover',
      label: 'Hover'
    }, {
      state: 'disabled',
      label: 'Disabled'
    }];
    return \`<div style="display:flex;flex-direction:column;gap:12px;">
      \${rows.map(({
      state,
      label
    }) => \`
        <div style="display:flex;align-items:center;gap:16px;">
          <span style="width:64px;font:11px/1 sans-serif;color:#9ca3af;">\${label}</span>
          \${chip({
      label: 'Design',
      color,
      state
    })}
        </div>\`).join('')}
    </div>\`;
  }
}`,...(B=(D=f.parameters)==null?void 0:D.docs)==null?void 0:B.source}}};var C,S,T;p.parameters={...p.parameters,docs:{...(C=p.parameters)==null?void 0:C.docs,source:{originalSource:`{
  name: 'With dot indicator',
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      description: {
        story: \`
Chips with an optional leading dot indicator. Useful for category/status chips where a visual marker aids scanning.

**✅ Do** — use the dot to reinforce the color's semantic meaning (e.g. green dot = active status).
**❌ Don't** — use the dot as the sole color indicator — the chip background already carries the color.
        \`
      },
      source: {
        code: \`<span style="display:inline-flex;align-items:center;gap:4px;background:#5850ec;color:#ffffff;border-radius:4px;padding:2px 8px;font-size:var(--text-xs);font-weight:var(--font-medium);white-space:nowrap;line-height:1.5;">
  <svg width="12" height="12" viewBox="0 0 12 12" fill="#f3f4f6" aria-hidden="true">
    <circle cx="6" cy="6" r="3"/>
  </svg>
  <span>Design</span>
  <button type="button" aria-label="Remove Design" style="background:none;border:none;cursor:pointer;padding:0;display:inline-flex;align-items:center;">
    <svg width="12" height="12" viewBox="0 0 20 20" fill="#f3f4f6" aria-hidden="true">
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
      light: 'Marketing',
      dark: 'Finance',
      indigo: 'Design',
      green: 'Active',
      red: 'Overdue',
      orange: 'Urgent',
      teal: 'Support',
      blue: 'Engineering',
      purple: 'Product',
      pink: 'Creative'
    };
    return \`<div style="display:flex;flex-wrap:wrap;gap:8px;align-items:center;">
      \${COLOR_NAMES.map(c => chip({
      label: labels[c],
      color: c,
      dot: true
    })).join('\\n      ')}
    </div>\`;
  }
}`,...(T=(S=p.parameters)==null?void 0:S.docs)==null?void 0:T.source}}};const L=["Interactive","AllColors","States","WithDot"];export{c as AllColors,d as Interactive,f as States,p as WithDot,L as __namedExportsOrder,P as default};
