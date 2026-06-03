const e={label:"#111928",labelDisabled:"#9ca3af",optional:"#6b7280",placeholder:"#6b7280",value:"#111928",valueDisabled:"#9ca3af",inputBg:"#f9fafb",inputBgError:"#fdf2f2",borderDef:"#d1d5db",borderDisabled:"#e5e7eb",borderHover:"#9ca3af",borderError:"#c81e1e",borderErrMs:"#f05252",errorText:"#c81e1e",errorTextMs:"#f05252",chevron:"#6b7280",chevronChk:"#1f2a37",help:"#6b7280"},S=(t="#6b7280")=>`<svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="m4.5 6.75 4.5 4.5 4.5-4.5" stroke="${t}" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`,V=(t="#6b7280")=>`<svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="m4.5 11.25 4.5-4.5 4.5 4.5" stroke="${t}" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`,C=(t="#9ca3af")=>`<svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z" stroke="${t}" stroke-width="1.5"/><path d="m7 10 2 2 4-4" stroke="${t}" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`,A=(t="#6b7280")=>`<svg width="14" height="14" viewBox="0 0 14 14" fill="none"><circle cx="7" cy="7" r="6" stroke="${t}" stroke-width="1.2"/><path d="M7 6v4M7 4.5v.5" stroke="${t}" stroke-width="1.2" stroke-linecap="round"/></svg>`,B=(t="#6b7280")=>`<svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M7.5 2.5 2.5 7.5M2.5 2.5l5 5" stroke="${t}" stroke-width="1.5" stroke-linecap="round"/></svg>`;function z(t){const{type:l="default",state:r="default",labelText:o="",value:s="Regular Select",optionalText:n=!1,infoIcon:h=!1}=t,a=r==="disabled",d=r==="hovered",i=r==="error",f=i?e.borderError:d?e.borderHover:a?e.borderDisabled:e.borderDef,b=a?e.valueDisabled:i?e.errorText:e.value,x=a?e.borderDisabled:e.chevron,H=a?e.borderDisabled:e.chevron,L=a?"0.7":"1",I=l==="with-label"||o?`
    <div style="display:flex;align-items:center;gap:6px;margin-bottom:6px;">
      <span style="font-size:14px;font-weight:500;color:${a?e.labelDisabled:e.label};font-family:inherit;">${o||"Select language"}</span>
      ${n?`<span style="font-size:14px;color:${e.optional};font-family:inherit;">(Optional)</span>`:""}
      ${h?`<span style="display:flex;align-items:center;">${A()}</span>`:""}
    </div>`:"",M=l==="default"?`<span style="font-size:14px;color:${e.optional};margin-right:2px;font-family:inherit;">Label:</span>`:"",T=i?`<div style="font-size:12px;color:${e.errorText};margin-top:4px;font-family:inherit;">Error text.</div>`:"";return`<div style="opacity:${L};font-family:inherit;">
    ${I}
    <div style="display:flex;align-items:center;gap:8px;height:40px;padding:0 10px;
      background:${e.inputBg};border:1px solid ${f};border-radius:8px;
      box-sizing:border-box;cursor:${a?"not-allowed":"pointer"};">
      ${C(H)}
      ${M}
      <span style="flex:1;min-width:0;font-size:14px;color:${b};font-family:inherit;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">${s}</span>
      ${d?V(x):S(x)}
    </div>
    ${T}
  </div>`}function U(t){const{state:l="default",showLabel:r=!0,showHelper:o=!0,selectedValues:s=[]}=t,n=l==="error",h=n?e.errorTextMs:e.label,a=n?e.borderErrMs:e.borderDef,d=n?e.inputBgError:"#ffffff",i=n?e.errorTextMs:e.help,f=s.map(b=>`<span style="display:inline-flex;align-items:center;gap:4px;padding:2px 6px;background:#e0e7ff;border-radius:4px;font-size:12px;color:#3730a3;font-family:inherit;">
      ${b} <span style="cursor:pointer;display:flex;">${B("#3730a3")}</span>
    </span>`).join("");return`<div style="font-family:inherit;">
    ${r?`<div style="font-size:14px;font-weight:500;color:${h};margin-bottom:6px;font-family:inherit;">Label</div>`:""}
    <div style="display:flex;align-items:center;flex-wrap:wrap;gap:6px;min-height:45px;padding:8px 10px;
      background:${d};border:1px solid ${a};border-radius:8px;box-sizing:border-box;cursor:pointer;">
      ${f}
      <span style="flex:1;font-size:14px;color:${e.placeholder};font-family:inherit;min-width:80px;">Placeholder</span>
      ${S(e.chevronChk)}
    </div>
    ${o?`<div style="font-size:12px;color:${i};margin-top:4px;font-family:inherit;">Helper</div>`:""}
  </div>`}const K={title:"Iris Library/Select",tags:["autodocs","stable"],parameters:{docs:{description:{component:`
**Select** covers two components: the **Input/Select** (single selection with inline label prefix, icon, and chevron) and the **Multiselect** (multi-value tag-based selector).

**When to use**
- **Input/Select** — choosing one option from a static list (language, country, role)
- **Multiselect** — choosing multiple options (tags, permissions, categories)

**When NOT to use**
- Binary on/off → use **Toggle**
- 2–4 mutually exclusive options visible at once → use **Radio**
- Free-text search with matching suggestions → use **Autocomplete**

**Anatomy (Input/Select)**
- Optional top-label row (label text + "(Optional)" + info icon)
- Input row: leading icon · inline label prefix · value or placeholder · chevron
- Error message below (when state=error)

**Anatomy (Multiselect)**
- Label (optional)
- Input area: dismissible tag pills + placeholder + chevron
- Helper text (optional)
        `}}},argTypes:{type:{control:"select",options:["default","with-label"],description:"`default` shows an inline label prefix inside the input. `with-label` shows a separate label row above the input.",table:{category:"Appearance",defaultValue:{summary:"default"}}},state:{control:"select",options:["default","hovered","disabled","error"],description:"Input state. `hovered` swaps chevron-down for chevron-up and darkens border. Keyboard: Space/Enter opens dropdown; Escape closes.",table:{category:"State",defaultValue:{summary:"default"}}},value:{control:"text",description:"Selected value displayed inside the input.",table:{category:"Content",defaultValue:{summary:"Regular Select"}}},optionalText:{control:"boolean",description:'Show "(Optional)" after the label in with-label type.',table:{category:"Content",defaultValue:{summary:!1}}},infoIcon:{control:"boolean",description:"Show info icon next to the label in with-label type.",table:{category:"Appearance",defaultValue:{summary:!1}}}},args:{type:"default",state:"default",value:"Regular Select",optionalText:!1,infoIcon:!1}},p={name:"Interactive (Controls)",render:t=>`<div style="max-width:360px;font-family:inherit;">${z(t)}</div>`,parameters:{docs:{source:{transform:(t,l)=>{const{type:r,state:o,value:s}=l.args;return`<!-- Input/Select (${r}, ${o}) -->
<div style="height:40px;border:1px solid ${o==="error"?"#c81e1e":o==="hovered"?"#9ca3af":o==="disabled"?"#e5e7eb":"#d1d5db"};border-radius:8px;background:#f9fafb;display:flex;align-items:center;padding:0 10px;gap:8px;cursor:pointer;">
  <!-- leading icon -->
  ${r==="default"?'<span style="color:#6b7280;font-size:14px;">Label:</span>':""}
  <span style="flex:1;font-size:14px;color:#111928;">${s}</span>
  <!-- chevron-down icon -->
</div>${o==="error"?`
<div style="font-size:12px;color:#c81e1e;margin-top:4px;">Error text.</div>`:""}`}}}}},c={name:"Select — all states",args:{type:"default"},parameters:{controls:{include:["type"]},docs:{description:{story:"All 4 states of Input/Select. Toggle the **type** control to see inline vs top-label variant."},source:{code:`<!-- Default -->
<div style="border:1px solid #d1d5db;border-radius:8px;height:40px;"></div>

<!-- Hovered (chevron flips to up) -->
<div style="border:1px solid #9ca3af;border-radius:8px;height:40px;"></div>

<!-- Disabled -->
<div style="border:1px solid #e5e7eb;border-radius:8px;height:40px;opacity:0.7;cursor:not-allowed;"></div>

<!-- Error -->
<div style="border:1px solid #c81e1e;border-radius:8px;height:40px;"></div>`}}},render:({type:t})=>`<div style="display:grid;grid-template-columns:repeat(4,220px);gap:16px;font-family:inherit;">
      ${[{state:"default",label:"Default",value:"English (UK)"},{state:"hovered",label:"Hovered",value:"English (UK)"},{state:"disabled",label:"Disabled",value:"English (UK)"},{state:"error",label:"Error",value:"English (UK)"}].map(r=>`<div>
        <div style="font-size:11px;color:#6b7280;margin-bottom:8px;font-family:inherit;">${r.label}</div>
        ${z({...r,type:t,labelText:t==="with-label"?"Select language":"",optionalText:t==="with-label"})}
      </div>`).join("")}
    </div>`},u={name:"Multiselect — variants",args:{},parameters:{controls:{disable:!0},docs:{description:{story:`Multiselect in Default and Error states, with and without label/helper. Error state shows red label, red border, \`#fdf2f2\` background, and red helper text.

✅ Use the helper text to explain expected input (e.g. "Select all that apply")
✅ Always show a count or scrollable area if more than 5 values may be selected
❌ Don't show selected tag pills that overflow outside the input width — truncate or collapse`},source:{code:`<!-- Default with label + helper -->
<div>
  <label style="font-size:14px;font-weight:500;color:#111928;">Label</label>
  <div style="min-height:45px;border:1px solid #d1d5db;border-radius:8px;background:#fff;display:flex;flex-wrap:wrap;gap:6px;padding:8px 10px;">
    <span class="tag-pill">Option A ×</span>
    <span class="placeholder">Placeholder</span>
    <!-- chevron-down -->
  </div>
  <p style="font-size:12px;color:#6b7280;">Helper</p>
</div>

<!-- Error state -->
<div>
  <label style="font-size:14px;font-weight:500;color:#f05252;">Label</label>
  <div style="border:1px solid #f05252;background:#fdf2f2;..."></div>
  <p style="font-size:12px;color:#f05252;">Helper</p>
</div>`}}},render:()=>`<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:20px;max-width:800px;font-family:inherit;">
      ${[{state:"default",showLabel:!0,showHelper:!0,selectedValues:[],title:"Default — empty"},{state:"default",showLabel:!0,showHelper:!0,selectedValues:["Design","Marketing"],title:"Default — with values"},{state:"default",showLabel:!1,showHelper:!0,selectedValues:[],title:"No label"},{state:"default",showLabel:!0,showHelper:!1,selectedValues:[],title:"No helper"},{state:"error",showLabel:!0,showHelper:!0,selectedValues:[],title:"Error — with label + helper"},{state:"error",showLabel:!0,showHelper:!1,selectedValues:[],title:"Error — no helper"}].map(l=>`<div>
        <div style="font-size:11px;color:#6b7280;margin-bottom:8px;font-family:inherit;">${l.title}</div>
        ${U(l)}
      </div>`).join("")}
    </div>`};var v,g,y;p.parameters={...p.parameters,docs:{...(v=p.parameters)==null?void 0:v.docs,source:{originalSource:`{
  name: 'Interactive (Controls)',
  render: args => \`<div style="max-width:360px;font-family:inherit;">\${selectInput(args)}</div>\`,
  parameters: {
    docs: {
      source: {
        transform: (_src, ctx) => {
          const {
            type,
            state,
            value
          } = ctx.args;
          const border = state === 'error' ? '#c81e1e' : state === 'hovered' ? '#9ca3af' : state === 'disabled' ? '#e5e7eb' : '#d1d5db';
          return \`<!-- Input/Select (\${type}, \${state}) -->
<div style="height:40px;border:1px solid \${border};border-radius:8px;background:#f9fafb;display:flex;align-items:center;padding:0 10px;gap:8px;cursor:pointer;">
  <!-- leading icon -->
  \${type === 'default' ? '<span style="color:#6b7280;font-size:14px;">Label:</span>' : ''}
  <span style="flex:1;font-size:14px;color:#111928;">\${value}</span>
  <!-- chevron-down icon -->
</div>\${state === 'error' ? '\\n<div style="font-size:12px;color:#c81e1e;margin-top:4px;">Error text.</div>' : ''}\`;
        }
      }
    }
  }
}`,...(y=(g=p.parameters)==null?void 0:g.docs)==null?void 0:y.source}}};var m,w,$;c.parameters={...c.parameters,docs:{...(m=c.parameters)==null?void 0:m.docs,source:{originalSource:`{
  name: 'Select — all states',
  args: {
    type: 'default'
  },
  parameters: {
    controls: {
      include: ['type']
    },
    docs: {
      description: {
        story: 'All 4 states of Input/Select. Toggle the **type** control to see inline vs top-label variant.'
      },
      source: {
        code: \`<!-- Default -->
<div style="border:1px solid #d1d5db;border-radius:8px;height:40px;"></div>

<!-- Hovered (chevron flips to up) -->
<div style="border:1px solid #9ca3af;border-radius:8px;height:40px;"></div>

<!-- Disabled -->
<div style="border:1px solid #e5e7eb;border-radius:8px;height:40px;opacity:0.7;cursor:not-allowed;"></div>

<!-- Error -->
<div style="border:1px solid #c81e1e;border-radius:8px;height:40px;"></div>\`
      }
    }
  },
  render: ({
    type
  }) => {
    const states = [{
      state: 'default',
      label: 'Default',
      value: 'English (UK)'
    }, {
      state: 'hovered',
      label: 'Hovered',
      value: 'English (UK)'
    }, {
      state: 'disabled',
      label: 'Disabled',
      value: 'English (UK)'
    }, {
      state: 'error',
      label: 'Error',
      value: 'English (UK)'
    }];
    return \`<div style="display:grid;grid-template-columns:repeat(4,220px);gap:16px;font-family:inherit;">
      \${states.map(s => \`<div>
        <div style="font-size:11px;color:#6b7280;margin-bottom:8px;font-family:inherit;">\${s.label}</div>
        \${selectInput({
      ...s,
      type,
      labelText: type === 'with-label' ? 'Select language' : '',
      optionalText: type === 'with-label'
    })}
      </div>\`).join('')}
    </div>\`;
  }
}`,...($=(w=c.parameters)==null?void 0:w.docs)==null?void 0:$.source}}};var k,E,D;u.parameters={...u.parameters,docs:{...(k=u.parameters)==null?void 0:k.docs,source:{originalSource:`{
  name: 'Multiselect — variants',
  args: {},
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      description: {
        story: \`Multiselect in Default and Error states, with and without label/helper. Error state shows red label, red border, \\\`#fdf2f2\\\` background, and red helper text.

✅ Use the helper text to explain expected input (e.g. "Select all that apply")
✅ Always show a count or scrollable area if more than 5 values may be selected
❌ Don't show selected tag pills that overflow outside the input width — truncate or collapse\`
      },
      source: {
        code: \`<!-- Default with label + helper -->
<div>
  <label style="font-size:14px;font-weight:500;color:#111928;">Label</label>
  <div style="min-height:45px;border:1px solid #d1d5db;border-radius:8px;background:#fff;display:flex;flex-wrap:wrap;gap:6px;padding:8px 10px;">
    <span class="tag-pill">Option A ×</span>
    <span class="placeholder">Placeholder</span>
    <!-- chevron-down -->
  </div>
  <p style="font-size:12px;color:#6b7280;">Helper</p>
</div>

<!-- Error state -->
<div>
  <label style="font-size:14px;font-weight:500;color:#f05252;">Label</label>
  <div style="border:1px solid #f05252;background:#fdf2f2;..."></div>
  <p style="font-size:12px;color:#f05252;">Helper</p>
</div>\`
      }
    }
  },
  render: () => {
    const variants = [{
      state: 'default',
      showLabel: true,
      showHelper: true,
      selectedValues: [],
      title: 'Default — empty'
    }, {
      state: 'default',
      showLabel: true,
      showHelper: true,
      selectedValues: ['Design', 'Marketing'],
      title: 'Default — with values'
    }, {
      state: 'default',
      showLabel: false,
      showHelper: true,
      selectedValues: [],
      title: 'No label'
    }, {
      state: 'default',
      showLabel: true,
      showHelper: false,
      selectedValues: [],
      title: 'No helper'
    }, {
      state: 'error',
      showLabel: true,
      showHelper: true,
      selectedValues: [],
      title: 'Error — with label + helper'
    }, {
      state: 'error',
      showLabel: true,
      showHelper: false,
      selectedValues: [],
      title: 'Error — no helper'
    }];
    return \`<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:20px;max-width:800px;font-family:inherit;">
      \${variants.map(v => \`<div>
        <div style="font-size:11px;color:#6b7280;margin-bottom:8px;font-family:inherit;">\${v.title}</div>
        \${multiselect(v)}
      </div>\`).join('')}
    </div>\`;
  }
}`,...(D=(E=u.parameters)==null?void 0:E.docs)==null?void 0:D.source}}};const j=["Interactive","AllStates","MultiselectVariants"];export{c as AllStates,p as Interactive,u as MultiselectVariants,j as __namedExportsOrder,K as default};
