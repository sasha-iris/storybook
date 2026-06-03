const e={label:"#111928",placeholder:"#6b7280",value:"#111928",disabled:"#9ca3af",help:"#6b7280",inputBg:"#f9fafb",borderDef:"#d1d5db",borderFocus:"#155dfc",borderOk:"#0e9f6e",borderErr:"#f05252",captionOk:"#057a55",captionErr:"#e02424",tagBg:"#f3f4f6",tagText:"#4b5563",btnDark:"#1f2a37",btnBlue:"#1447e6",toolbarBg:"#f9fafb",footerBg:"#f9fafb",dragBorder:"#e5e7eb"},pe=(t="#6b7280")=>`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM2 14s-1 0-1-1 1-4 7-4 7 3 7 4-1 1-1 1H2Z" fill="${t}"/></svg>`,oe=(t="#6b7280")=>`<svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 3 3 9M3 3l6 6" stroke="${t}" stroke-width="1.5" stroke-linecap="round"/></svg>`,ce=(t="#6b7280")=>`<svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M7.5 2.5 2.5 7.5M2.5 2.5l5 5" stroke="${t}" stroke-width="1.5" stroke-linecap="round"/></svg>`,F=(t="#6b7280")=>`<svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M14 14 10.5 10.5M11.5 7a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Z" stroke="${t}" stroke-width="1.5" stroke-linecap="round"/></svg>`,re=(t="#6b7280")=>`<svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="m4.5 6.75 4.5 4.5 4.5-4.5" stroke="${t}" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`,I=(t="#9ca3af")=>`<svg width="40" height="40" viewBox="0 0 40 40" fill="none"><path d="M13 28a7 7 0 0 1 0-14 7 7 0 0 1 6.5-4.4A7 7 0 0 1 28 14.7 6 6 0 1 1 28 27H13Z" stroke="${t}" stroke-width="1.5"/><path d="M20 32v-8M17 27l3-3 3 3" stroke="${t}" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`,fe=(t="#6b7280")=>`<svg width="24" height="24" viewBox="0 0 24 24" fill="none"><rect x="2" y="4" width="20" height="16" rx="2" stroke="${t}" stroke-width="1.5"/><circle cx="8" cy="10" r="2" stroke="${t}" stroke-width="1.5"/><path d="m2 17 5-4 4 3 3-3 5 4" stroke="${t}" stroke-width="1.5" stroke-linejoin="round"/></svg>`,ue=(t="#6b7280")=>`<svg width="24" height="24" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="9" stroke="${t}" stroke-width="1.5"/><path d="M8.5 14.5s1 2 3.5 2 3.5-2 3.5-2" stroke="${t}" stroke-width="1.5" stroke-linecap="round"/><circle cx="9" cy="10" r="1" fill="${t}"/><circle cx="15" cy="10" r="1" fill="${t}"/></svg>`,T=(t="#155dfc")=>`<svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M22 2 11 13M22 2 15 22l-4-9-9-4 20-7Z" stroke="${t}" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`,C=(t="#374151")=>`<svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M5 3h4.5a3 3 0 0 1 0 6H5V3ZM5 9h5a3 3 0 0 1 0 6H5V9Z" stroke="${t}" stroke-width="1.5"/></svg>`,A=(t="#374151")=>`<svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M10 3H7M9 13H6M9 3 7 13" stroke="${t}" stroke-width="1.5" stroke-linecap="round"/></svg>`,j=(t="#374151")=>`<svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M6.5 9.5a3.54 3.54 0 0 0 5 0l2-2a3.54 3.54 0 0 0-5-5L7 4M9.5 6.5a3.54 3.54 0 0 0-5 0L2.5 8.5a3.54 3.54 0 0 0 5 5L9 12" stroke="${t}" stroke-width="1.5" stroke-linecap="round"/></svg>`;function f({label:t="First name",placeholder:n="Input text",value:i="",state:o="normal",size:s="regular",helpText:r="",icon:a=!1}){const l=s==="small"?37:s==="large"?52:42,d=o==="disabled",p=o==="error",u=o==="success",c=o==="typing"||o==="active",w=d?e.disabled:i?e.value:e.placeholder,k=p?e.borderErr:u?e.borderOk:c?e.borderFocus:e.borderDef,z=d?"0.6":"1",D=d?e.disabled:e.placeholder,S=i||n,B=t?`<div style="font-size:14px;font-weight:500;color:${e.label};margin-bottom:6px;font-family:inherit;">${t}</div>`:"",ae=a?`<span style="flex-shrink:0;display:flex;align-items:center;">${pe(D)}</span>`:"",se=i&&!d?`<span style="flex-shrink:0;display:flex;align-items:center;cursor:pointer;">${oe(e.label)}</span>`:"",le=p?e.captionErr:u?e.captionOk:e.help,de=r?`<div style="font-size:12px;color:${le};margin-top:4px;font-family:inherit;">${r}</div>`:"";return`<div style="font-family:inherit;opacity:${z};">
    ${B}
    <div style="display:flex;align-items:center;gap:8px;height:${l}px;padding:0 12px;
      background:${e.inputBg};border:1px solid ${k};border-radius:8px;
      box-sizing:border-box;width:100%;">
      ${ae}
      <span style="flex:1;font-size:14px;color:${w};font-family:inherit;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">${c&&i?i+"|":S}</span>
      ${se}
    </div>
    ${de}
  </div>`}function me({state:t="initial",type:n="border-bottom",placeholder:i="Placeholder text"}){const o=t==="active"||t==="typing",s=t==="success",r=t==="danger",a=t==="disabled",l=r?e.captionErr:s?e.captionOk:o?e.borderFocus:e.borderDef,d=r?e.captionErr:s?e.captionOk:o?e.borderFocus:e.placeholder,p=r||s?"Oh, snapp! Some helper message":"",u=r?e.captionErr:e.captionOk,c=n==="background",w=c?o?"#eff6ff":e.inputBg:"transparent",k=c?`border:1px solid ${l};border-radius:8px;`:`border-bottom:2px solid ${l};`,z=a?"0.5":"1",D=o||s||r?`<div style="font-size:12px;font-weight:500;color:${d};margin-bottom:2px;font-family:inherit;">${i}</div>`:"",S=a?e.disabled:o||s||r?e.value:e.placeholder,B=o&&n==="border-bottom"?"Typing |":i;return`<div style="opacity:${z};font-family:inherit;">
    <div style="position:relative;${k}background:${w};padding:${o||s||r?"6px 12px 8px":"12px 12px"};box-sizing:border-box;">
      ${D}
      <div style="display:flex;align-items:center;gap:8px;">
        ${F(a?e.disabled:e.placeholder)}
        <span style="font-size:14px;color:${S};font-family:inherit;">${B}</span>
        ${oe(a?e.disabled:e.placeholder)}
      </div>
    </div>
    ${p?`<div style="font-size:12px;color:${u};margin-top:4px;font-family:inherit;">${p}</div>`:""}
  </div>`}function ge({type:t="default",label:n="Your message",placeholder:i="Write text here ...",help:o="A note for extra info"}){const s=(a,l="")=>`<div style="font-family:inherit;">
    <div style="display:flex;justify-content:space-between;align-items:baseline;margin-bottom:6px;">
      <span style="font-size:14px;font-weight:500;color:${e.label};font-family:inherit;">${n}</span>
      <span style="font-size:12px;color:${e.help};font-family:inherit;">${o}</span>
    </div>
    ${a}
    ${l}
  </div>`,r=`<textarea style="width:100%;height:120px;padding:10px 12px;background:${e.inputBg};border:1px solid ${e.borderDef};border-radius:8px;font-size:14px;color:${e.placeholder};font-family:inherit;resize:vertical;box-sizing:border-box;outline:none;" placeholder="${i}"></textarea>`;if(t==="default")return s(r);if(t==="cta"){const a=`<div style="border-top:1px solid ${e.borderDef};padding:10px 12px;background:${e.footerBg};display:flex;justify-content:space-between;align-items:center;border-radius:0 0 8px 8px;">
      <div style="display:flex;gap:8px;">
        <button style="background:none;border:none;cursor:pointer;padding:4px;">${C()}</button>
        <button style="background:none;border:none;cursor:pointer;padding:4px;">${A()}</button>
        <button style="background:none;border:none;cursor:pointer;padding:4px;">${j()}</button>
      </div>
      <div style="display:flex;gap:8px;">
        <button style="height:34px;padding:0 14px;background:transparent;border:1px solid ${e.borderDef};border-radius:8px;font-size:12px;font-weight:500;color:${e.label};cursor:pointer;font-family:inherit;">Preview</button>
        <button style="height:34px;padding:0 14px;background:${e.btnBlue};border:none;border-radius:8px;font-size:12px;font-weight:500;color:#fff;cursor:pointer;font-family:inherit;">Post comment</button>
      </div>
    </div>`,l=`<div style="border:1px solid ${e.borderDef};border-radius:8px;overflow:hidden;">
      <textarea style="width:100%;height:120px;padding:10px 12px;background:${e.inputBg};border:none;font-size:14px;color:${e.placeholder};font-family:inherit;resize:none;box-sizing:border-box;outline:none;" placeholder="${i}"></textarea>
      ${a}
    </div>`;return`<div style="font-family:inherit;">
      <div style="display:flex;justify-content:space-between;align-items:baseline;margin-bottom:6px;">
        <span style="font-size:14px;font-weight:500;color:${e.label};font-family:inherit;">${n}</span>
        <span style="font-size:12px;color:${e.help};font-family:inherit;">${o}</span>
      </div>
      ${l}
    </div>`}if(t==="wysiwyg"){const a=`<div style="display:flex;align-items:center;gap:6px;padding:8px 12px;background:${e.toolbarBg};border-bottom:1px solid ${e.borderDef};">
      <button style="background:none;border:none;cursor:pointer;padding:3px;">${C()}</button>
      <button style="background:none;border:none;cursor:pointer;padding:3px;">${A()}</button>
      <div style="width:1px;height:16px;background:${e.borderDef};margin:0 2px;"></div>
      <button style="background:none;border:none;cursor:pointer;padding:3px;">${j()}</button>
      <div style="width:1px;height:16px;background:${e.borderDef};margin:0 2px;"></div>
      <button style="background:none;border:none;cursor:pointer;padding:3px;">${F(e.label)}</button>
    </div>`,l=`<div style="border:1px solid ${e.borderDef};border-radius:8px;overflow:hidden;">
      ${a}
      <textarea style="width:100%;height:120px;padding:10px 12px;background:#ffffff;border:none;font-size:14px;color:${e.placeholder};font-family:inherit;resize:none;box-sizing:border-box;outline:none;" placeholder="${i}"></textarea>
    </div>`,d=`<div style="margin-top:8px;display:flex;justify-content:flex-end;">
      <button style="height:40px;padding:0 16px;background:${e.btnBlue};border:none;border-radius:8px;font-size:12px;font-weight:600;color:#fff;cursor:pointer;font-family:inherit;display:flex;align-items:center;gap:6px;">
        ${T("#fff")} Send message
      </button>
    </div>`;return`<div style="font-family:inherit;">
      <div style="display:flex;justify-content:space-between;align-items:baseline;margin-bottom:6px;">
        <span style="font-size:14px;font-weight:500;color:${e.label};font-family:inherit;">${n}</span>
        <span style="font-size:12px;color:${e.help};font-family:inherit;">${o}</span>
      </div>
      ${l}${d}
    </div>`}return t==="chatroom"?`<div style="display:flex;align-items:center;gap:8px;padding:12px 16px;background:${e.inputBg};border-top:1px solid ${e.borderDef};font-family:inherit;">
      <button style="background:none;border:none;cursor:pointer;padding:0;flex-shrink:0;display:flex;">${fe()}</button>
      <button style="background:none;border:none;cursor:pointer;padding:0;flex-shrink:0;display:flex;">${ue()}</button>
      <div style="flex:1;background:#ffffff;border:1px solid ${e.borderDef};border-radius:8px;padding:10px 12px;">
        <span style="font-size:14px;color:${e.placeholder};font-family:inherit;">${i}</span>
      </div>
      <button style="background:none;border:none;cursor:pointer;padding:0;flex-shrink:0;display:flex;">${T()}</button>
    </div>`:r}function be({type:t="default",size:n="default",label:i="Upload file",help:o="A note for extra info"}){const s=n==="lg"?52:42,r=`<div style="font-size:14px;font-weight:500;color:${e.label};margin-bottom:6px;font-family:inherit;">${i}</div>`,a=`<div style="font-size:12px;color:${e.help};margin-top:4px;font-family:inherit;">${o}</div>`;return t==="default"?`<div style="font-family:inherit;">
      ${r}
      <div style="display:flex;height:${s}px;border:1px solid ${e.borderDef};border-radius:8px;overflow:hidden;box-sizing:border-box;">
        <div style="display:flex;align-items:center;justify-content:center;gap:6px;padding:0 16px;background:${e.btnDark};cursor:pointer;flex-shrink:0;">
          <span style="font-size:14px;font-weight:500;color:#ffffff;white-space:nowrap;font-family:inherit;">Choose file</span>
          ${re("#ffffff")}
        </div>
        <div style="flex:1;display:flex;align-items:center;padding:0 12px;background:${e.inputBg};">
          <span style="font-size:14px;color:${e.placeholder};font-family:inherit;">No file chosen</span>
        </div>
      </div>
      ${a}
    </div>`:t==="drag"?`<div style="font-family:inherit;">
      ${r}
      <div style="display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;padding:32px;
        background:${e.inputBg};border:2px dashed ${e.dragBorder};border-radius:8px;text-align:center;">
        ${I()}
        <div style="font-size:14px;color:${e.help};font-family:inherit;">Click to upload or drag and drop</div>
        <div style="font-size:12px;color:${e.help};font-family:inherit;">SVG, PNG, JPG or GIF (MAX. 800×400px)</div>
      </div>
      ${a}
    </div>`:t==="drag-btn"?`<div style="font-family:inherit;">
      ${r}
      <div style="display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;padding:32px;
        background:${e.inputBg};border:2px dashed ${e.dragBorder};border-radius:8px;text-align:center;">
        ${I()}
        <div style="font-size:14px;color:${e.help};font-family:inherit;">Click to upload or drag and drop</div>
        <div style="font-size:12px;font-weight:600;color:${e.help};font-family:inherit;">Max. File Size: 30MB</div>
        <button style="height:34px;padding:0 14px;background:${e.btnBlue};border:none;border-radius:8px;font-size:12px;font-weight:500;color:#fff;cursor:pointer;font-family:inherit;display:flex;align-items:center;gap:6px;">
          ${F("#fff")} Browse File
        </button>
      </div>
      ${a}
    </div>`:""}function xe({label:t=!0,help:n=!1,tags:i=["bonnie.green@company.com","jese.leos@company.com"]}){const o=t?`<div style="font-size:16px;font-weight:500;color:${e.label};margin-bottom:6px;font-family:inherit;">Tags</div>`:"",s=n?`<div style="font-size:12px;color:${e.help};margin-top:4px;font-family:inherit;">A note for extra info</div>`:"",r=i.map(a=>`<div style="display:inline-flex;align-items:center;gap:6px;padding:2px 8px;background:${e.tagBg};border-radius:4px;">
      <span style="font-size:12px;font-weight:500;color:${e.tagText};font-family:inherit;">${a}</span>
      <span style="cursor:pointer;display:flex;align-items:center;">${ce(e.tagText)}</span>
    </div>`).join("");return`<div style="font-family:inherit;">
    ${o}
    <div style="display:flex;flex-wrap:wrap;align-items:center;gap:6px;padding:8px 12px;min-height:46px;
      background:#ffffff;border:1px solid ${e.borderDef};border-radius:8px;box-sizing:border-box;">
      ${r}
      <input type="text" placeholder="Add tag..." style="border:none;outline:none;font-size:12px;color:${e.placeholder};background:transparent;min-width:80px;font-family:inherit;" />
    </div>
    ${s}
  </div>`}function ye({fieldLabel:t="Email:",value:n="namesurname@company.com"}){return`<div style="display:inline-flex;align-items:center;gap:8px;font-family:inherit;">
    <span style="font-size:14px;font-weight:500;color:${e.label};white-space:nowrap;">${t}</span>
    <span style="font-size:14px;color:${e.value};">${n}</span>
    ${re(e.borderDef)}
  </div>`}function he(t){const{fieldState:n,size:i,showIcon:o,showHelp:s}=t,r=s?"We'll never share your details. See our Privacy Policy.":"";return`<div style="display:flex;flex-direction:column;gap:20px;max-width:400px;font-family:inherit;">
    ${f({label:"First name",placeholder:"Enter your first name",value:n==="typing"?"John":"",state:n,size:i,icon:o,helpText:r})}
    ${f({label:"Last name",placeholder:"Enter your last name",value:n==="typing"?"Doe":"",state:"normal",size:i,icon:!1,helpText:r})}
    ${f({label:"Email address",placeholder:"name@company.com",value:"",state:n==="error"?"error":"normal",size:i,icon:!1,helpText:n==="error"?"Please enter a valid email address.":r})}
  </div>`}const ve={title:"Iris Library/Forms",tags:["autodocs","stable"],parameters:{docs:{description:{component:`
**Forms** collects the core form input elements used across the Iris Library: Input Field, Floating Label, Textarea, File Upload, Tag Input, and Read-only display.

**When to use**
- Any user-facing form: sign-up, settings, contact, checkout
- Filtering and search configuration panels
- Inline editing within data tables or cards

**When NOT to use**
- For single-item selection from a list → use **Dropdown** or **Select**
- For toggle/checkbox/radio → use **Controls**
- For multi-value selection → use **Multiselect** or **Tag Input**

**Anatomy (Input Field)**
- Label (required) — \`font-size:14px font-weight:500\`
- Input container — \`height:37px/42px/52px\`, bg \`#f9fafb\`, border \`#d1d5db\`
- Leading icon (optional) — 16×16px
- Input text or placeholder
- Clear × button (shown when value present)
- Helper/caption text — \`font-size:12px\`, color varies by state
        `}}},argTypes:{fieldState:{control:"select",options:["normal","typing","active","success","error","disabled"],description:"Input state. Affects border color and text color. Keyboard: Tab moves focus (triggering active); Escape clears active state.",table:{category:"State",defaultValue:{summary:"normal"}}},size:{control:"select",options:["small","regular","large"],description:"Input height. `small`=37px, `regular`=42px, `large`=52px.",table:{category:"Appearance",defaultValue:{summary:"regular"}}},showIcon:{control:"boolean",description:"Show leading icon (user icon) inside the input.",table:{category:"Appearance",defaultValue:{summary:!1}}},showHelp:{control:"boolean",description:"Show helper/caption text below the input.",table:{category:"Appearance",defaultValue:{summary:!0}}}},args:{fieldState:"normal",size:"regular",showIcon:!1,showHelp:!0}},m={name:"Interactive (Controls)",render:t=>he(t),parameters:{docs:{source:{transform:(t,n)=>{const{fieldState:i,size:o,showIcon:s}=n.args;return`<div class="mb-4">
  <label class="block text-sm font-medium text-gray-900 mb-1">First name</label>
  <input type="text"
    style="height:${o==="small"?37:o==="large"?52:42}px;border-color:${i==="error"?"#f05252":i==="success"?"#0e9f6e":i==="typing"||i==="active"?"#155dfc":"#d1d5db"};"
    class="w-full px-3 bg-gray-50 border rounded-lg text-sm text-gray-900 placeholder-gray-400 outline-none"
    placeholder="Enter your first name"
    ${i==="disabled"?"disabled":""}
  />
  <p class="text-xs text-gray-500 mt-1">Helper text</p>
</div>`}}}}},g={name:"Input — all states",args:{size:"regular"},parameters:{controls:{include:["size"]},docs:{description:{story:"All 6 input states side-by-side at the selected size.\n\n✅ Use `error` state together with a helper message explaining what went wrong\n✅ Use `success` for real-time validation (email, username availability)\n❌ Don't show `success` state before the user has finished typing"},source:{code:`<!-- Normal -->
<div><input style="border:1px solid #d1d5db;" /></div>

<!-- Focus / typing -->
<div><input style="border:1px solid #155dfc;" /></div>

<!-- Success -->
<div><input style="border:1px solid #0e9f6e;" /></div>

<!-- Error -->
<div><input style="border:1px solid #f05252;" /></div>

<!-- Disabled -->
<div><input disabled style="border:1px solid #d1d5db;opacity:0.6;" /></div>`}}},render:({size:t})=>`<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:20px;max-width:800px;font-family:inherit;">
      ${[{state:"normal",label:"Normal",value:"",help:"We'll never share your details."},{state:"typing",label:"Typing",value:"John",help:""},{state:"success",label:"Success",value:"John",help:"Great, that username is available!"},{state:"error",label:"Error",value:"",help:"Please enter your first name."},{state:"disabled",label:"Disabled",value:"",help:""},{state:"active",label:"Active",value:"",help:""}].map(i=>`<div>
        <div style="font-size:11px;color:#6b7280;margin-bottom:8px;font-family:inherit;">${i.label}</div>
        ${f({label:"First name",placeholder:"Input text",value:i.value,state:i.state,size:t,helpText:i.help})}
      </div>`).join("")}
    </div>`},b={name:"Input — all sizes",args:{fieldState:"normal"},parameters:{controls:{include:["fieldState"]},docs:{description:{story:"Three input heights from Figma. **Small** (37px) for dense data tables; **Regular** (42px) for standard forms; **Large** (52px) for prominent CTAs or hero sections."},source:{code:`<!-- Small 37px -->
<input style="height:37px;" class="..." />

<!-- Regular 42px (default) -->
<input style="height:42px;" class="..." />

<!-- Large 52px -->
<input style="height:52px;" class="..." />`}}},render:({fieldState:t})=>`<div style="display:flex;flex-direction:column;gap:20px;max-width:380px;font-family:inherit;">
      ${["small","regular","large"].map(n=>`<div>
          <div style="font-size:11px;color:#6b7280;margin-bottom:6px;font-family:inherit;">${n.charAt(0).toUpperCase()+n.slice(1)} (${n==="small"?37:n==="large"?52:42}px)</div>
          ${f({label:"First name",placeholder:"Input text",state:t,size:n})}
        </div>`).join("")}
    </div>`},x={name:"Floating Label — all states",args:{},parameters:{controls:{disable:!0},docs:{description:{story:`Floating label floats above the input when active. Two styles: **Border bottom** (minimal, for clean dashboards) and **Background** (filled, for form cards).

✅ Use border-bottom style in data-heavy tables or compact forms
✅ Use background style in modal dialogs and settings panels
❌ Don't mix border-bottom and background styles within a single form`},source:{code:`<!-- Border bottom — initial -->
<div style="border-bottom:2px solid #d1d5db;padding:12px;">
  <span style="color:#6b7280;font-size:14px;">Placeholder text</span>
</div>

<!-- Border bottom — active (label floated) -->
<div style="border-bottom:2px solid #155dfc;padding:6px 0 8px;">
  <div style="font-size:12px;font-weight:500;color:#155dfc;">Placeholder text</div>
  <span style="color:#111928;font-size:14px;">Typing |</span>
</div>`}}},render:()=>{const t=["initial","typing","success","danger","disabled"];return`<div style="display:flex;flex-direction:column;gap:32px;font-family:inherit;">
      ${["border-bottom","background"].map(i=>`
        <div>
          <div style="font-size:11px;font-weight:600;color:#374151;margin-bottom:16px;font-family:inherit;text-transform:uppercase;letter-spacing:0.05em;">
            ${i==="border-bottom"?"Border bottom":"Background fill"}
          </div>
          <div style="display:grid;grid-template-columns:repeat(5,180px);gap:16px;">
            ${t.map(o=>`<div>
              <div style="font-size:10px;color:#6b7280;margin-bottom:8px;font-family:inherit;">${o.charAt(0).toUpperCase()+o.slice(1)}</div>
              ${me({state:o,type:i})}
            </div>`).join("")}
          </div>
        </div>
      `).join("")}
    </div>`}},y={name:"Textarea — all types",args:{},parameters:{controls:{disable:!0},docs:{description:{story:`4 textarea variants from Figma.

- **Default** — plain multiline input for feedback forms
- **CTA + Button** — with formatting toolbar and Post/Preview buttons (comments, replies)
- **WYSIWYG** — rich text editor with icon toolbar + Send button (articles, docs)
- **Chatroom** — horizontal bar with photo/emoji actions (messaging UIs)

✅ Use **Chatroom** only in full-height chat layouts where the bar sticks to the bottom
❌ Don't use **WYSIWYG** for short user inputs like names or addresses`},source:{code:`<!-- Default textarea -->
<textarea class="w-full bg-gray-50 border border-gray-300 rounded-lg p-3 text-sm resize-y"></textarea>

<!-- Chatroom bar -->
<div class="flex items-center gap-2 p-3 bg-gray-50 border-t border-gray-200">
  <!-- photo / emoji icons -->
  <textarea class="flex-1 bg-white border border-gray-300 rounded-lg p-2 text-sm resize-none"></textarea>
  <!-- send icon -->
</div>`}}},render:()=>`<div style="display:flex;flex-direction:column;gap:32px;max-width:540px;font-family:inherit;">
      ${[{type:"default",title:"Default"},{type:"cta",title:"CTA + Button"},{type:"wysiwyg",title:"WYSIWYG editor"},{type:"chatroom",title:"Chatroom"}].map(n=>`<div>
        <div style="font-size:11px;color:#6b7280;margin-bottom:8px;font-family:inherit;">${n.title}</div>
        ${ge({type:n.type})}
      </div>`).join("")}
    </div>`},h={name:"File Upload — all types",args:{size:"default"},parameters:{controls:{include:["size"]},docs:{description:{story:`4 file upload variants. **Default** suits form rows; **Drag & Drop** suits profile/media upload pages.

✅ Always show accepted file formats and size limits
✅ Use "Browse File" button in drag-and-drop when the drop zone is the primary action
❌ Don't use drag-and-drop in compact forms or mobile-first layouts — use the default style instead`},source:{code:`<!-- Default file input -->
<input type="file" class="hidden" id="file" />
<label for="file" style="height:42px;display:flex;border:1px solid #d1d5db;border-radius:8px;overflow:hidden;">
  <span style="background:#1f2a37;color:#fff;padding:0 16px;display:flex;align-items:center;">Choose file</span>
  <span style="background:#f9fafb;padding:0 12px;display:flex;align-items:center;color:#6b7280;">No file chosen</span>
</label>

<!-- Drag & Drop zone -->
<div style="border:2px dashed #e5e7eb;border-radius:8px;background:#f9fafb;padding:32px;text-align:center;">
  <!-- cloud icon -->
  <p>Click to upload or drag and drop</p>
  <p class="text-xs">SVG, PNG, JPG or GIF (MAX. 800×400px)</p>
</div>`}}},render:({size:t})=>`<div style="display:flex;flex-direction:column;gap:24px;max-width:540px;font-family:inherit;">
      ${[{type:"default",title:"Default"},{type:"default",title:"Default — LG",size:"lg"},{type:"drag",title:"Drag & Drop"},{type:"drag-btn",title:"Drag & Drop + Button"}].map(i=>`<div>
        <div style="font-size:11px;color:#6b7280;margin-bottom:8px;font-family:inherit;">${i.title}</div>
        ${be({type:i.type,size:i.size||t})}
      </div>`).join("")}
    </div>`},v={name:"Tag Input — variants",args:{},parameters:{controls:{disable:!0},docs:{description:{story:`Tag (multi-value) input field for email addresses, keywords, or labels. Tags render as dismissible pills inside the input.

✅ Use for email recipient fields, label assignment, keyword tagging
❌ Don't use for mutually-exclusive options — use Radio or Select instead`},source:{code:`<div class="flex flex-wrap gap-1 p-2 border border-gray-300 rounded-lg min-h-[46px]">
  <span class="inline-flex items-center gap-1 px-2 py-0.5 bg-gray-100 rounded text-xs font-medium text-gray-600">
    bonnie.green@company.com
    <button>×</button>
  </span>
  <input class="text-xs outline-none flex-1 min-w-[80px]" placeholder="Add tag..." />
</div>`}}},render:()=>`<div style="display:grid;grid-template-columns:repeat(2,1fr);gap:20px;max-width:700px;font-family:inherit;">
      ${[{label:!0,help:!1,title:"With label"},{label:!1,help:!1,title:"No label"},{label:!0,help:!0,title:"With label + helper"},{label:!1,help:!0,title:"Helper only"}].map(n=>`<div>
        <div style="font-size:11px;color:#6b7280;margin-bottom:8px;font-family:inherit;">${n.title}</div>
        ${xe({label:n.label,help:n.help})}
      </div>`).join("")}
    </div>`},$={name:"Read-only field",args:{},parameters:{controls:{disable:!0},docs:{description:{story:`Inline read-only display: label + value + disabled chevron. Use in profile summaries or confirmation screens where the user cannot edit the value.

✅ Always pair with an "Edit" affordance nearby if the value is editable elsewhere
❌ Don't use inside dense data tables — use plain text cells instead`},source:{code:`<div class="flex items-center gap-2">
  <span class="text-sm font-medium text-gray-900">Email:</span>
  <span class="text-sm text-gray-900">namesurname@company.com</span>
  <!-- disabled chevron -->
</div>`}}},render:()=>`<div style="display:flex;flex-direction:column;gap:12px;font-family:inherit;">
      ${[{fieldLabel:"Email:",value:"namesurname@company.com"},{fieldLabel:"Username:",value:"bonnie.green"},{fieldLabel:"Role:",value:"Administrator"}].map(n=>ye(n)).join("")}
    </div>`};var E,U,L;m.parameters={...m.parameters,docs:{...(E=m.parameters)==null?void 0:E.docs,source:{originalSource:`{
  name: 'Interactive (Controls)',
  render: args => fullForm(args),
  parameters: {
    docs: {
      source: {
        transform: (_src, ctx) => {
          const {
            fieldState,
            size,
            showIcon
          } = ctx.args;
          const h = size === 'small' ? 37 : size === 'large' ? 52 : 42;
          const border = fieldState === 'error' ? '#f05252' : fieldState === 'success' ? '#0e9f6e' : fieldState === 'typing' || fieldState === 'active' ? '#155dfc' : '#d1d5db';
          return \`<div class="mb-4">
  <label class="block text-sm font-medium text-gray-900 mb-1">First name</label>
  <input type="text"
    style="height:\${h}px;border-color:\${border};"
    class="w-full px-3 bg-gray-50 border rounded-lg text-sm text-gray-900 placeholder-gray-400 outline-none"
    placeholder="Enter your first name"
    \${fieldState === 'disabled' ? 'disabled' : ''}
  />
  <p class="text-xs text-gray-500 mt-1">Helper text</p>
</div>\`;
        }
      }
    }
  }
}`,...(L=(U=m.parameters)==null?void 0:U.docs)==null?void 0:L.source}}};var M,P,G;g.parameters={...g.parameters,docs:{...(M=g.parameters)==null?void 0:M.docs,source:{originalSource:`{
  name: 'Input — all states',
  args: {
    size: 'regular'
  },
  parameters: {
    controls: {
      include: ['size']
    },
    docs: {
      description: {
        story: \`All 6 input states side-by-side at the selected size.

✅ Use \\\`error\\\` state together with a helper message explaining what went wrong
✅ Use \\\`success\\\` for real-time validation (email, username availability)
❌ Don't show \\\`success\\\` state before the user has finished typing\`
      },
      source: {
        code: \`<!-- Normal -->
<div><input style="border:1px solid #d1d5db;" /></div>

<!-- Focus / typing -->
<div><input style="border:1px solid #155dfc;" /></div>

<!-- Success -->
<div><input style="border:1px solid #0e9f6e;" /></div>

<!-- Error -->
<div><input style="border:1px solid #f05252;" /></div>

<!-- Disabled -->
<div><input disabled style="border:1px solid #d1d5db;opacity:0.6;" /></div>\`
      }
    }
  },
  render: ({
    size
  }) => {
    const states = [{
      state: 'normal',
      label: 'Normal',
      value: '',
      help: "We'll never share your details."
    }, {
      state: 'typing',
      label: 'Typing',
      value: 'John',
      help: ''
    }, {
      state: 'success',
      label: 'Success',
      value: 'John',
      help: 'Great, that username is available!'
    }, {
      state: 'error',
      label: 'Error',
      value: '',
      help: 'Please enter your first name.'
    }, {
      state: 'disabled',
      label: 'Disabled',
      value: '',
      help: ''
    }, {
      state: 'active',
      label: 'Active',
      value: '',
      help: ''
    }];
    return \`<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:20px;max-width:800px;font-family:inherit;">
      \${states.map(s => \`<div>
        <div style="font-size:11px;color:#6b7280;margin-bottom:8px;font-family:inherit;">\${s.label}</div>
        \${inputField({
      label: 'First name',
      placeholder: 'Input text',
      value: s.value,
      state: s.state,
      size,
      helpText: s.help
    })}
      </div>\`).join('')}
    </div>\`;
  }
}`,...(G=(P=g.parameters)==null?void 0:P.docs)==null?void 0:G.source}}};var W,O,H;b.parameters={...b.parameters,docs:{...(W=b.parameters)==null?void 0:W.docs,source:{originalSource:`{
  name: 'Input — all sizes',
  args: {
    fieldState: 'normal'
  },
  parameters: {
    controls: {
      include: ['fieldState']
    },
    docs: {
      description: {
        story: 'Three input heights from Figma. **Small** (37px) for dense data tables; **Regular** (42px) for standard forms; **Large** (52px) for prominent CTAs or hero sections.'
      },
      source: {
        code: \`<!-- Small 37px -->
<input style="height:37px;" class="..." />

<!-- Regular 42px (default) -->
<input style="height:42px;" class="..." />

<!-- Large 52px -->
<input style="height:52px;" class="..." />\`
      }
    }
  },
  render: ({
    fieldState
  }) => {
    return \`<div style="display:flex;flex-direction:column;gap:20px;max-width:380px;font-family:inherit;">
      \${['small', 'regular', 'large'].map(s => \`<div>
          <div style="font-size:11px;color:#6b7280;margin-bottom:6px;font-family:inherit;">\${s.charAt(0).toUpperCase() + s.slice(1)} (\${s === 'small' ? 37 : s === 'large' ? 52 : 42}px)</div>
          \${inputField({
      label: 'First name',
      placeholder: 'Input text',
      state: fieldState,
      size: s
    })}
        </div>\`).join('')}
    </div>\`;
  }
}`,...(H=(O=b.parameters)==null?void 0:O.docs)==null?void 0:H.source}}};var N,R,Y;x.parameters={...x.parameters,docs:{...(N=x.parameters)==null?void 0:N.docs,source:{originalSource:`{
  name: 'Floating Label — all states',
  args: {},
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      description: {
        story: \`Floating label floats above the input when active. Two styles: **Border bottom** (minimal, for clean dashboards) and **Background** (filled, for form cards).

✅ Use border-bottom style in data-heavy tables or compact forms
✅ Use background style in modal dialogs and settings panels
❌ Don't mix border-bottom and background styles within a single form\`
      },
      source: {
        code: \`<!-- Border bottom — initial -->
<div style="border-bottom:2px solid #d1d5db;padding:12px;">
  <span style="color:#6b7280;font-size:14px;">Placeholder text</span>
</div>

<!-- Border bottom — active (label floated) -->
<div style="border-bottom:2px solid #155dfc;padding:6px 0 8px;">
  <div style="font-size:12px;font-weight:500;color:#155dfc;">Placeholder text</div>
  <span style="color:#111928;font-size:14px;">Typing |</span>
</div>\`
      }
    }
  },
  render: () => {
    const states = ['initial', 'typing', 'success', 'danger', 'disabled'];
    const types = ['border-bottom', 'background'];
    return \`<div style="display:flex;flex-direction:column;gap:32px;font-family:inherit;">
      \${types.map(tp => \`
        <div>
          <div style="font-size:11px;font-weight:600;color:#374151;margin-bottom:16px;font-family:inherit;text-transform:uppercase;letter-spacing:0.05em;">
            \${tp === 'border-bottom' ? 'Border bottom' : 'Background fill'}
          </div>
          <div style="display:grid;grid-template-columns:repeat(5,180px);gap:16px;">
            \${states.map(st => \`<div>
              <div style="font-size:10px;color:#6b7280;margin-bottom:8px;font-family:inherit;">\${st.charAt(0).toUpperCase() + st.slice(1)}</div>
              \${floatingLabel({
      state: st,
      type: tp
    })}
            </div>\`).join('')}
          </div>
        </div>
      \`).join('')}
    </div>\`;
  }
}`,...(Y=(R=x.parameters)==null?void 0:R.docs)==null?void 0:Y.source}}};var V,J,Z;y.parameters={...y.parameters,docs:{...(V=y.parameters)==null?void 0:V.docs,source:{originalSource:`{
  name: 'Textarea — all types',
  args: {},
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      description: {
        story: \`4 textarea variants from Figma.

- **Default** — plain multiline input for feedback forms
- **CTA + Button** — with formatting toolbar and Post/Preview buttons (comments, replies)
- **WYSIWYG** — rich text editor with icon toolbar + Send button (articles, docs)
- **Chatroom** — horizontal bar with photo/emoji actions (messaging UIs)

✅ Use **Chatroom** only in full-height chat layouts where the bar sticks to the bottom
❌ Don't use **WYSIWYG** for short user inputs like names or addresses\`
      },
      source: {
        code: \`<!-- Default textarea -->
<textarea class="w-full bg-gray-50 border border-gray-300 rounded-lg p-3 text-sm resize-y"></textarea>

<!-- Chatroom bar -->
<div class="flex items-center gap-2 p-3 bg-gray-50 border-t border-gray-200">
  <!-- photo / emoji icons -->
  <textarea class="flex-1 bg-white border border-gray-300 rounded-lg p-2 text-sm resize-none"></textarea>
  <!-- send icon -->
</div>\`
      }
    }
  },
  render: () => {
    const types = [{
      type: 'default',
      title: 'Default'
    }, {
      type: 'cta',
      title: 'CTA + Button'
    }, {
      type: 'wysiwyg',
      title: 'WYSIWYG editor'
    }, {
      type: 'chatroom',
      title: 'Chatroom'
    }];
    return \`<div style="display:flex;flex-direction:column;gap:32px;max-width:540px;font-family:inherit;">
      \${types.map(t => \`<div>
        <div style="font-size:11px;color:#6b7280;margin-bottom:8px;font-family:inherit;">\${t.title}</div>
        \${textarea({
      type: t.type
    })}
      </div>\`).join('')}
    </div>\`;
  }
}`,...(Z=(J=y.parameters)==null?void 0:J.docs)==null?void 0:Z.source}}};var X,_,q;h.parameters={...h.parameters,docs:{...(X=h.parameters)==null?void 0:X.docs,source:{originalSource:`{
  name: 'File Upload — all types',
  args: {
    size: 'default'
  },
  parameters: {
    controls: {
      include: ['size']
    },
    docs: {
      description: {
        story: \`4 file upload variants. **Default** suits form rows; **Drag & Drop** suits profile/media upload pages.

✅ Always show accepted file formats and size limits
✅ Use "Browse File" button in drag-and-drop when the drop zone is the primary action
❌ Don't use drag-and-drop in compact forms or mobile-first layouts — use the default style instead\`
      },
      source: {
        code: \`<!-- Default file input -->
<input type="file" class="hidden" id="file" />
<label for="file" style="height:42px;display:flex;border:1px solid #d1d5db;border-radius:8px;overflow:hidden;">
  <span style="background:#1f2a37;color:#fff;padding:0 16px;display:flex;align-items:center;">Choose file</span>
  <span style="background:#f9fafb;padding:0 12px;display:flex;align-items:center;color:#6b7280;">No file chosen</span>
</label>

<!-- Drag & Drop zone -->
<div style="border:2px dashed #e5e7eb;border-radius:8px;background:#f9fafb;padding:32px;text-align:center;">
  <!-- cloud icon -->
  <p>Click to upload or drag and drop</p>
  <p class="text-xs">SVG, PNG, JPG or GIF (MAX. 800×400px)</p>
</div>\`
      }
    }
  },
  render: ({
    size
  }) => {
    const types = [{
      type: 'default',
      title: 'Default'
    }, {
      type: 'default',
      title: 'Default — LG',
      size: 'lg'
    }, {
      type: 'drag',
      title: 'Drag & Drop'
    }, {
      type: 'drag-btn',
      title: 'Drag & Drop + Button'
    }];
    return \`<div style="display:flex;flex-direction:column;gap:24px;max-width:540px;font-family:inherit;">
      \${types.map(t => \`<div>
        <div style="font-size:11px;color:#6b7280;margin-bottom:8px;font-family:inherit;">\${t.title}</div>
        \${fileUpload({
      type: t.type,
      size: t.size || size
    })}
      </div>\`).join('')}
    </div>\`;
  }
}`,...(q=(_=h.parameters)==null?void 0:_.docs)==null?void 0:q.source}}};var K,Q,ee;v.parameters={...v.parameters,docs:{...(K=v.parameters)==null?void 0:K.docs,source:{originalSource:`{
  name: 'Tag Input — variants',
  args: {},
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      description: {
        story: \`Tag (multi-value) input field for email addresses, keywords, or labels. Tags render as dismissible pills inside the input.

✅ Use for email recipient fields, label assignment, keyword tagging
❌ Don't use for mutually-exclusive options — use Radio or Select instead\`
      },
      source: {
        code: \`<div class="flex flex-wrap gap-1 p-2 border border-gray-300 rounded-lg min-h-[46px]">
  <span class="inline-flex items-center gap-1 px-2 py-0.5 bg-gray-100 rounded text-xs font-medium text-gray-600">
    bonnie.green@company.com
    <button>×</button>
  </span>
  <input class="text-xs outline-none flex-1 min-w-[80px]" placeholder="Add tag..." />
</div>\`
      }
    }
  },
  render: () => {
    const variants = [{
      label: true,
      help: false,
      title: 'With label'
    }, {
      label: false,
      help: false,
      title: 'No label'
    }, {
      label: true,
      help: true,
      title: 'With label + helper'
    }, {
      label: false,
      help: true,
      title: 'Helper only'
    }];
    return \`<div style="display:grid;grid-template-columns:repeat(2,1fr);gap:20px;max-width:700px;font-family:inherit;">
      \${variants.map(v => \`<div>
        <div style="font-size:11px;color:#6b7280;margin-bottom:8px;font-family:inherit;">\${v.title}</div>
        \${tagInput({
      label: v.label,
      help: v.help
    })}
      </div>\`).join('')}
    </div>\`;
  }
}`,...(ee=(Q=v.parameters)==null?void 0:Q.docs)==null?void 0:ee.source}}};var te,ne,ie;$.parameters={...$.parameters,docs:{...(te=$.parameters)==null?void 0:te.docs,source:{originalSource:`{
  name: 'Read-only field',
  args: {},
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      description: {
        story: \`Inline read-only display: label + value + disabled chevron. Use in profile summaries or confirmation screens where the user cannot edit the value.

✅ Always pair with an "Edit" affordance nearby if the value is editable elsewhere
❌ Don't use inside dense data tables — use plain text cells instead\`
      },
      source: {
        code: \`<div class="flex items-center gap-2">
  <span class="text-sm font-medium text-gray-900">Email:</span>
  <span class="text-sm text-gray-900">namesurname@company.com</span>
  <!-- disabled chevron -->
</div>\`
      }
    }
  },
  render: () => {
    const items = [{
      fieldLabel: 'Email:',
      value: 'namesurname@company.com'
    }, {
      fieldLabel: 'Username:',
      value: 'bonnie.green'
    }, {
      fieldLabel: 'Role:',
      value: 'Administrator'
    }];
    return \`<div style="display:flex;flex-direction:column;gap:12px;font-family:inherit;">
      \${items.map(i => readOnly(i)).join('')}
    </div>\`;
  }
}`,...(ie=(ne=$.parameters)==null?void 0:ne.docs)==null?void 0:ie.source}}};const $e=["Interactive","AllStates","AllSizes","FloatingLabels","TextareaTypes","FileUploadTypes","TagInputVariants","ReadOnlyField"];export{b as AllSizes,g as AllStates,h as FileUploadTypes,x as FloatingLabels,m as Interactive,$ as ReadOnlyField,v as TagInputVariants,y as TextareaTypes,$e as __namedExportsOrder,ve as default};
