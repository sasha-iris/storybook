const t={bg:"#ffffff",border:"#e5e7eb",divider:"#e5e7eb",text:"#111928",iconFill:"#111928",dark_bg:"#374151",dark_border:"#4b5563",dark_div:"#4b5563",dark_text:"#ffffff",dark_icon:"#ffffff"},h={"user-circle":e=>`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM2.4 13.6A6 6 0 0 1 14 13.6" stroke="${e}" stroke-width="1.3" stroke-linecap="round"/>
    <circle cx="8" cy="8" r="7" stroke="${e}" stroke-width="1.3"/>
  </svg>`,adjustments:e=>`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M2 4h12M2 8h12M2 12h12" stroke="${e}" stroke-width="1.3" stroke-linecap="round"/>
    <circle cx="5" cy="4" r="1.5" fill="${e}"/>
    <circle cx="10" cy="8" r="1.5" fill="${e}"/>
    <circle cx="6" cy="12" r="1.5" fill="${e}"/>
  </svg>`,inbox:e=>`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="1" y="1" width="14" height="14" rx="2" stroke="${e}" stroke-width="1.3"/>
    <path d="M1 9h3l2 2h4l2-2h3" stroke="${e}" stroke-width="1.3" stroke-linejoin="round"/>
  </svg>`,"cloud-download":e=>`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M5.5 12.5H4a3 3 0 0 1 0-6h.15A4.5 4.5 0 0 1 13 7.5a3 3 0 0 1-1 5.5h-1.5" stroke="${e}" stroke-width="1.3" stroke-linecap="round"/>
    <path d="M8 8.5v5M6 11.5l2 2 2-2" stroke="${e}" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>`},p=[{label:"Profile",icon:"user-circle"},{label:"Settings",icon:"adjustments"},{label:"Messages",icon:"inbox"},{label:"Download",icon:"cloud-download"}];function g({items:e=p,showIcons:s=!1,dark:n=!1,width:r=240}){const u=n?t.dark_bg:t.bg,i=n?t.dark_border:t.border,o=n?t.dark_div:t.divider,A=n?t.dark_text:t.text,L=n?t.dark_icon:t.iconFill,j=e.map((f,z)=>{const _=z>0?`border-top:1px solid ${o};`:"",C=s&&f.icon?`<span style="flex-shrink:0;display:flex;align-items:center;">${(h[f.icon]||h["user-circle"])(L)}</span>`:"";return`<div style="display:flex;align-items:center;gap:10px;height:37px;padding:0 16px;
      box-sizing:border-box;cursor:pointer;${_}
      font-family:inherit;">
      ${C}
      <span style="font-size:14px;font-weight:500;color:${A};font-family:inherit;">${f.label}</span>
    </div>`}).join("");return`<div style="width:${r}px;background:${u};border:1px solid ${i};
    border-radius:8px;overflow:hidden;font-family:inherit;">${j}</div>`}const T={title:"Iris Library/List Group",tags:["autodocs","stable"],parameters:{docs:{description:{component:"\n**List Group** is a vertical menu or option list, typically rendered as a dropdown panel or sidebar sub-menu. It supports optional leading icons and light/dark themes.\n\n**When to use**\n- User account dropdown menus (Profile · Settings · Sign out)\n- Context menus and action lists on right-click or overflow button\n- Navigation sub-panels in sidebars\n\n**When NOT to use**\n- Long scrollable lists of data → use a **Table** instead\n- Mutually exclusive choices → use **Radio** or **Select**\n- Multi-select → use **Multiselect** or **Tag Input**\n\n**Anatomy**\n- Container — `bg:#ffffff`, `border:1px solid #e5e7eb`, `border-radius:8px`, `width:240px`\n- List item — `height:37px`, `padding:0 16px`, separated by `1px solid #e5e7eb` dividers\n- Leading icon (optional) — `16×16px`, fill `#111928` (light) / `#ffffff` (dark)\n- Label — `font-size:14px`, `font-weight:500`\n\n**Dark mode**\n- Container: `bg:#374151`, `border:#4b5563`\n- Dividers: `#4b5563`\n- Text + icons: `#ffffff`\n        "}}},argTypes:{showIcons:{control:"boolean",description:"Show a 16×16px leading icon beside each item label.",table:{category:"Appearance",defaultValue:{summary:!1}}},dark:{control:"boolean",description:"Dark theme. Container `bg:#374151`, dividers `#4b5563`, text/icons `#ffffff`. Use on dark surfaces or inside dark dropdowns.",table:{category:"Appearance",defaultValue:{summary:!1}}},width:{control:{type:"range",min:160,max:400,step:8},description:"Container width in px. Figma default is 240px.",table:{category:"Appearance",defaultValue:{summary:240}}}},args:{showIcons:!1,dark:!1,width:240}},a={name:"Interactive (Controls)",render:e=>g({...e,items:p}),parameters:{docs:{source:{transform:(e,s)=>{const{showIcons:n,dark:r}=s.args,u=r?"#374151":"#ffffff",i=r?"#4b5563":"#e5e7eb",o=r?"#ffffff":"#111928";return`<ul style="width:240px;background:${u};border:1px solid ${i};border-radius:8px;overflow:hidden;list-style:none;margin:0;padding:0;">
  <li style="display:flex;align-items:center;gap:10px;height:37px;padding:0 16px;font-size:14px;font-weight:500;color:${o};">
    ${n?"<!-- 16×16 icon -->":""}Profile
  </li>
  <li style="border-top:1px solid ${i};display:flex;align-items:center;gap:10px;height:37px;padding:0 16px;font-size:14px;font-weight:500;color:${o};">
    ${n?"<!-- 16×16 icon -->":""}Settings
  </li>
  <li style="border-top:1px solid ${i};display:flex;align-items:center;gap:10px;height:37px;padding:0 16px;font-size:14px;font-weight:500;color:${o};">
    ${n?"<!-- 16×16 icon -->":""}Messages
  </li>
  <li style="border-top:1px solid ${i};display:flex;align-items:center;gap:10px;height:37px;padding:0 16px;font-size:14px;font-weight:500;color:${o};">
    ${n?"<!-- 16×16 icon -->":""}Download
  </li>
</ul>`}}}}},l={name:"All variants",args:{},parameters:{controls:{disable:!0},docs:{description:{story:`All 4 Figma variants in a 2×2 grid: icons on/off × light/dark.

✅ Always use icons consistently — either all items have icons or none do
✅ In dark dropdowns, make sure the container background matches the surrounding dark surface
❌ Don't mix icon sizes within one list — all icons must be the same size`},source:{code:`<!-- Light, no icons -->
<ul class="list-group">
  <li class="list-group-item">Profile</li>
  <li class="list-group-item">Settings</li>
  <li class="list-group-item">Messages</li>
  <li class="list-group-item">Download</li>
</ul>

<!-- Light, with icons -->
<ul class="list-group">
  <li class="list-group-item">
    <svg><!-- user-circle --></svg> Profile
  </li>
  ...
</ul>`}}},render:()=>`<div style="display:grid;grid-template-columns:repeat(2,auto);gap:24px;align-items:start;font-family:inherit;">
      ${[{showIcons:!1,dark:!1,label:"Light — no icons"},{showIcons:!0,dark:!1,label:"Light — with icons"},{showIcons:!1,dark:!0,label:"Dark — no icons"},{showIcons:!0,dark:!0,label:"Dark — with icons"}].map(s=>`<div>
          <div style="font-size:11px;color:#6b7280;margin-bottom:8px;font-family:inherit;">${s.label}</div>
          ${g({...s,items:p})}
        </div>`).join("")}
    </div>`},d={name:"In context — user dropdown",args:{dark:!1},parameters:{controls:{include:["dark"]},docs:{description:{story:"Shows the List Group as a user-account dropdown triggered from an avatar button — the most common usage pattern. Toggle **dark** to preview the dark-mode variant."},source:{code:`<!-- Avatar trigger button -->
<button class="avatar-btn">
  <img src="avatar.jpg" alt="User avatar" class="w-8 h-8 rounded-full" />
</button>

<!-- Dropdown panel (shown on click) -->
<ul class="list-group" style="position:absolute;top:100%;right:0;width:240px;z-index:50;">
  <li class="list-group-item"><svg>user-circle</svg> Profile</li>
  <li class="list-group-item"><svg>adjustments</svg> Settings</li>
  <li class="list-group-item"><svg>inbox</svg> Messages</li>
  <li class="list-group-item"><svg>cloud-download</svg> Download</li>
</ul>`}}},render:({dark:e})=>`<div style="position:relative;display:inline-block;padding:16px;background:${e?"#1f2937":"#f3f4f6"};border-radius:12px;font-family:inherit;">
      <div style="display:flex;align-items:center;gap:10px;margin-bottom:12px;">
        <div style="width:36px;height:36px;border-radius:50%;background:${e?"#374151":"#e5e7eb"};display:flex;align-items:center;justify-content:center;cursor:pointer;">
          ${h["user-circle"](e?"#9ca3af":"#6b7280")}
        </div>
        <span style="font-size:13px;font-weight:500;color:${e?"#d1d5db":"#374151"};font-family:inherit;">bonnie.green</span>
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="m3 5 4 4 4-4" stroke="${e?"#9ca3af":"#6b7280"}" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/></svg>
      </div>
      ${g({items:p,showIcons:!0,dark:e})}
    </div>`},c={name:"Custom items — longer list",args:{showIcons:!0,dark:!1},parameters:{controls:{include:["showIcons","dark"]},docs:{description:{story:"An 8-item list demonstrating that dividers and padding stay consistent regardless of item count."},source:{code:`<ul style="width:240px;background:#fff;border:1px solid #e5e7eb;border-radius:8px;overflow:hidden;">
  <!-- repeat list-item pattern for each entry -->
</ul>`}}},render:({showIcons:e,dark:s})=>`<div style="font-family:inherit;">
      ${g({items:[{label:"Profile",icon:"user-circle"},{label:"Settings",icon:"adjustments"},{label:"Messages",icon:"inbox"},{label:"Downloads",icon:"cloud-download"},{label:"Edit account",icon:"adjustments"},{label:"Notifications",icon:"inbox"},{label:"Privacy",icon:"adjustments"},{label:"Sign out",icon:"user-circle"}],showIcons:e,dark:s})}
    </div>`};var m,b,x;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  name: 'Interactive (Controls)',
  render: args => listGroup({
    ...args,
    items: DEFAULT_ITEMS
  }),
  parameters: {
    docs: {
      source: {
        transform: (_src, ctx) => {
          const {
            showIcons,
            dark
          } = ctx.args;
          const bg = dark ? '#374151' : '#ffffff';
          const border = dark ? '#4b5563' : '#e5e7eb';
          const text = dark ? '#ffffff' : '#111928';
          return \`<ul style="width:240px;background:\${bg};border:1px solid \${border};border-radius:8px;overflow:hidden;list-style:none;margin:0;padding:0;">
  <li style="display:flex;align-items:center;gap:10px;height:37px;padding:0 16px;font-size:14px;font-weight:500;color:\${text};">
    \${showIcons ? '<!-- 16×16 icon -->' : ''}Profile
  </li>
  <li style="border-top:1px solid \${border};display:flex;align-items:center;gap:10px;height:37px;padding:0 16px;font-size:14px;font-weight:500;color:\${text};">
    \${showIcons ? '<!-- 16×16 icon -->' : ''}Settings
  </li>
  <li style="border-top:1px solid \${border};display:flex;align-items:center;gap:10px;height:37px;padding:0 16px;font-size:14px;font-weight:500;color:\${text};">
    \${showIcons ? '<!-- 16×16 icon -->' : ''}Messages
  </li>
  <li style="border-top:1px solid \${border};display:flex;align-items:center;gap:10px;height:37px;padding:0 16px;font-size:14px;font-weight:500;color:\${text};">
    \${showIcons ? '<!-- 16×16 icon -->' : ''}Download
  </li>
</ul>\`;
        }
      }
    }
  }
}`,...(x=(b=a.parameters)==null?void 0:b.docs)==null?void 0:x.source}}};var w,v,y;l.parameters={...l.parameters,docs:{...(w=l.parameters)==null?void 0:w.docs,source:{originalSource:`{
  name: 'All variants',
  args: {},
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      description: {
        story: \`All 4 Figma variants in a 2×2 grid: icons on/off × light/dark.

✅ Always use icons consistently — either all items have icons or none do
✅ In dark dropdowns, make sure the container background matches the surrounding dark surface
❌ Don't mix icon sizes within one list — all icons must be the same size\`
      },
      source: {
        code: \`<!-- Light, no icons -->
<ul class="list-group">
  <li class="list-group-item">Profile</li>
  <li class="list-group-item">Settings</li>
  <li class="list-group-item">Messages</li>
  <li class="list-group-item">Download</li>
</ul>

<!-- Light, with icons -->
<ul class="list-group">
  <li class="list-group-item">
    <svg><!-- user-circle --></svg> Profile
  </li>
  ...
</ul>\`
      }
    }
  },
  render: () => {
    const variants = [{
      showIcons: false,
      dark: false,
      label: 'Light — no icons'
    }, {
      showIcons: true,
      dark: false,
      label: 'Light — with icons'
    }, {
      showIcons: false,
      dark: true,
      label: 'Dark — no icons'
    }, {
      showIcons: true,
      dark: true,
      label: 'Dark — with icons'
    }];
    return \`<div style="display:grid;grid-template-columns:repeat(2,auto);gap:24px;align-items:start;font-family:inherit;">
      \${variants.map(v => \`<div>
          <div style="font-size:11px;color:#6b7280;margin-bottom:8px;font-family:inherit;">\${v.label}</div>
          \${listGroup({
      ...v,
      items: DEFAULT_ITEMS
    })}
        </div>\`).join('')}
    </div>\`;
  }
}`,...(y=(v=l.parameters)==null?void 0:v.docs)==null?void 0:y.source}}};var k,$,I;d.parameters={...d.parameters,docs:{...(k=d.parameters)==null?void 0:k.docs,source:{originalSource:`{
  name: 'In context — user dropdown',
  args: {
    dark: false
  },
  parameters: {
    controls: {
      include: ['dark']
    },
    docs: {
      description: {
        story: \`Shows the List Group as a user-account dropdown triggered from an avatar button — the most common usage pattern. Toggle **dark** to preview the dark-mode variant.\`
      },
      source: {
        code: \`<!-- Avatar trigger button -->
<button class="avatar-btn">
  <img src="avatar.jpg" alt="User avatar" class="w-8 h-8 rounded-full" />
</button>

<!-- Dropdown panel (shown on click) -->
<ul class="list-group" style="position:absolute;top:100%;right:0;width:240px;z-index:50;">
  <li class="list-group-item"><svg>user-circle</svg> Profile</li>
  <li class="list-group-item"><svg>adjustments</svg> Settings</li>
  <li class="list-group-item"><svg>inbox</svg> Messages</li>
  <li class="list-group-item"><svg>cloud-download</svg> Download</li>
</ul>\`
      }
    }
  },
  render: ({
    dark
  }) => {
    const bg = dark ? '#1f2937' : '#f3f4f6';
    const avatarBg = dark ? '#374151' : '#e5e7eb';
    return \`<div style="position:relative;display:inline-block;padding:16px;background:\${bg};border-radius:12px;font-family:inherit;">
      <div style="display:flex;align-items:center;gap:10px;margin-bottom:12px;">
        <div style="width:36px;height:36px;border-radius:50%;background:\${avatarBg};display:flex;align-items:center;justify-content:center;cursor:pointer;">
          \${ICONS['user-circle'](dark ? '#9ca3af' : '#6b7280')}
        </div>
        <span style="font-size:13px;font-weight:500;color:\${dark ? '#d1d5db' : '#374151'};font-family:inherit;">bonnie.green</span>
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="m3 5 4 4 4-4" stroke="\${dark ? '#9ca3af' : '#6b7280'}" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/></svg>
      </div>
      \${listGroup({
      items: DEFAULT_ITEMS,
      showIcons: true,
      dark
    })}
    </div>\`;
  }
}`,...(I=($=d.parameters)==null?void 0:$.docs)==null?void 0:I.source}}};var D,S,M;c.parameters={...c.parameters,docs:{...(D=c.parameters)==null?void 0:D.docs,source:{originalSource:`{
  name: 'Custom items — longer list',
  args: {
    showIcons: true,
    dark: false
  },
  parameters: {
    controls: {
      include: ['showIcons', 'dark']
    },
    docs: {
      description: {
        story: 'An 8-item list demonstrating that dividers and padding stay consistent regardless of item count.'
      },
      source: {
        code: \`<ul style="width:240px;background:#fff;border:1px solid #e5e7eb;border-radius:8px;overflow:hidden;">
  <!-- repeat list-item pattern for each entry -->
</ul>\`
      }
    }
  },
  render: ({
    showIcons,
    dark
  }) => {
    const items = [{
      label: 'Profile',
      icon: 'user-circle'
    }, {
      label: 'Settings',
      icon: 'adjustments'
    }, {
      label: 'Messages',
      icon: 'inbox'
    }, {
      label: 'Downloads',
      icon: 'cloud-download'
    }, {
      label: 'Edit account',
      icon: 'adjustments'
    }, {
      label: 'Notifications',
      icon: 'inbox'
    }, {
      label: 'Privacy',
      icon: 'adjustments'
    }, {
      label: 'Sign out',
      icon: 'user-circle'
    }];
    return \`<div style="font-family:inherit;">
      \${listGroup({
      items,
      showIcons,
      dark
    })}
    </div>\`;
  }
}`,...(M=(S=c.parameters)==null?void 0:S.docs)==null?void 0:M.source}}};const P=["Interactive","AllVariants","InContext","CustomItems"];export{l as AllVariants,c as CustomItems,d as InContext,a as Interactive,P as __namedExportsOrder,T as default};
