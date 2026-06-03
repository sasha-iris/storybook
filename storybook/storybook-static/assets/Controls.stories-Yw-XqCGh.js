const d=({on:e=!0,destructive:r=!1,disabled:s=!1}={})=>`<span class="${["iris-toggle",e?"iris-toggle--on":"iris-toggle--off",r&&"iris-toggle--destructive",s&&"iris-toggle--disabled"].filter(Boolean).join(" ")}" role="switch" aria-checked="${e}"><span class="iris-toggle__thumb"></span></span>`,t=({checked:e=!1,intermediate:r=!1,destructive:s=!1,disabled:o=!1}={})=>`<span class="${["iris-checkbox",e&&"iris-checkbox--checked",r&&"iris-checkbox--intermediate",s&&"iris-checkbox--destructive",o&&"iris-checkbox--disabled"].filter(Boolean).join(" ")}" role="checkbox" aria-checked="${r?"mixed":e?"true":"false"}"></span>`,u=({checked:e=!1,destructive:r=!1,disabled:s=!1}={})=>`<span class="${["iris-radio",e&&"iris-radio--checked",r&&"iris-radio--destructive",s&&"iris-radio--disabled"].filter(Boolean).join(" ")}" role="radio" aria-checked="${e}"></span>`,c=({type:e="toggle",on:r=!1,checked:s=!1,intermediate:o=!1,destructive:n=!1,disabled:l=!1,label:b="Weekly traffic report",helper:p="Sent every Monday at 9 am"}={})=>{const _=["iris-control",n&&"iris-control--destructive",l&&"iris-control--disabled"].filter(Boolean).join(" ");let h="";return e==="toggle"&&(h=d({on:r,destructive:n,disabled:l})),e==="checkbox"&&(h=t({checked:s,intermediate:o,destructive:n,disabled:l})),e==="radio"&&(h=u({checked:s,destructive:n,disabled:l})),`<label class="${_}">
  <span class="iris-control__check">${h}</span>
  <span class="iris-control__body">
    <span class="iris-control__label">${b}</span>
    <span class="iris-control__helper">${p}</span>
  </span>
</label>`},i=e=>`<div style="display:flex;flex-wrap:wrap;align-items:center;gap:16px;">${e.join("")}</div>`,g=e=>`<div style="display:flex;flex-direction:column;gap:16px;">${e.join("")}</div>`,a=(e,r)=>`<div style="display:flex;flex-direction:column;gap:8px;">
    <span style="font-size:11px;font-weight:600;text-transform:uppercase;letter-spacing:.04em;
                 color:var(--color-text-secondary);">${e}</span>
    ${r}
  </div>`,G={title:"Iris Library/Controls",tags:["autodocs","stable"],parameters:{docs:{description:{component:`
**Controls** are interactive selection elements: Toggle, Checkbox, and Radio.
Use them to let users turn features on/off or choose from a set of options.

**When to use**
- **Toggle** — enable/disable a single binary setting with immediate effect (no submit button needed)
- **Checkbox** — select one or more independent options from a list; or represent an indeterminate (mixed) state
- **Radio** — select exactly one option from a mutually exclusive set

**When NOT to use**
- Do not use Toggle when the action requires confirmation before applying (use a Checkbox + submit instead)
- Do not use Radio for more than ~6 options — prefer a Select dropdown
- Do not use Checkbox as a toggle for live settings — use Toggle instead

**Anatomy**
- **Control element** (16×16 px checkbox/radio; 28×16 px toggle) — the visual indicator
- **Label** (14px/500) — primary text; required
- **Helper text** (12px/400, gray/500) — optional secondary description
- **Destructive variant** — red palette for dangerous or error states
- **Disabled variant** — muted palette; \`pointer-events:none\`
        `}}},argTypes:{type:{name:"Control type",control:{type:"select",options:["toggle","checkbox","radio"]},description:"Which control element to render (`toggle`, `checkbox`, `radio`).",table:{category:"Appearance",defaultValue:{summary:"toggle"}}},on:{name:"Toggle ON",control:{type:"boolean"},description:"Toggle only — `true` = ON (brand/800 purple), `false` = OFF (gray/300). Maps to `aria-checked`.",table:{category:"State",defaultValue:{summary:"false"}}},checked:{name:"Checked",control:{type:"boolean"},description:'Checkbox / Radio — whether the control is selected. Maps to `aria-checked="true"`.',table:{category:"State",defaultValue:{summary:"false"}}},intermediate:{name:"Intermediate",control:{type:"boolean"},description:'Checkbox only — indeterminate state (partial selection). Maps to `aria-checked="mixed"`. Overrides `checked`.',table:{category:"State",defaultValue:{summary:"false"}}},destructive:{name:"Destructive",control:{type:"boolean"},description:"Enables the red destructive palette. Use for irreversible or error-state controls.",table:{category:"Appearance",defaultValue:{summary:"false"}}},disabled:{name:"Disabled",control:{type:"boolean"},description:"Disables pointer-events and applies the muted disabled palette. WCAG: disabled elements are exempt from contrast requirements.",table:{category:"State",defaultValue:{summary:"false"}}},label:{name:"Label",control:{type:"text"},description:"Primary label text rendered next to the control.",table:{category:"Content",defaultValue:{summary:"Weekly traffic report"}}},helper:{name:"Helper text",control:{type:"text"},description:"Optional secondary description shown below the label (gray/500).",table:{category:"Content",defaultValue:{summary:"Sent every Monday at 9 am"}}}},args:{type:"toggle",on:!1,checked:!1,intermediate:!1,destructive:!1,disabled:!1,label:"Weekly traffic report",helper:"Sent every Monday at 9 am"}},m={name:"Interactive (Controls)",render:({type:e,on:r,checked:s,intermediate:o,destructive:n,disabled:l,label:b,helper:p})=>c({type:e,on:r,checked:s,intermediate:o,destructive:n,disabled:l,label:b,helper:p}),parameters:{docs:{description:{story:`
Use the Controls panel to explore all state combinations.

✅ Change **type** between Toggle / Checkbox / Radio
✅ Toggle **ON**, **Checked**, **Intermediate**, **Destructive**, **Disabled**
✅ Edit **Label** and **Helper text** with real copy

❌ Don't use placeholder text like "Label" or "Toggle label" in production
        `},source:{transform:(e,r)=>{const{type:s,on:o,checked:n,intermediate:l,destructive:b,disabled:p,label:_,helper:h}=r.args,A=["iris-control",b&&"iris-control--destructive",p&&"iris-control--disabled"].filter(Boolean).join(" ");let k="";return s==="toggle"?k=`<span class="${["iris-toggle",o?"iris-toggle--on":"iris-toggle--off",b&&"iris-toggle--destructive",p&&"iris-toggle--disabled"].filter(Boolean).join(" ")}" role="switch" aria-checked="${o}"><span class="iris-toggle__thumb"></span></span>`:s==="checkbox"?k=`<span class="${["iris-checkbox",n&&"iris-checkbox--checked",l&&"iris-checkbox--intermediate",b&&"iris-checkbox--destructive",p&&"iris-checkbox--disabled"].filter(Boolean).join(" ")}" role="checkbox" aria-checked="${l?"mixed":n}"></span>`:k=`<span class="${["iris-radio",n&&"iris-radio--checked",b&&"iris-radio--destructive",p&&"iris-radio--disabled"].filter(Boolean).join(" ")}" role="radio" aria-checked="${n}"></span>`,`<label class="${A}">
  <span class="iris-control__check">${k}</span>
  <span class="iris-control__body">
    <span class="iris-control__label">${_}</span>
    <span class="iris-control__helper">${h}</span>
  </span>
</label>`}}}}},f={name:"Toggle — all states",args:{},parameters:{controls:{disable:!0},docs:{description:{story:"\nAll Toggle variants from Figma node **9479:135603**.\n\n| State | ON bg | OFF bg |\n|-------|-------|--------|\n| Default | brand/800 `#42389d` | gray/300 `#d1d5db` |\n| Hover | brand/900 `#362f78` | gray/400 `#9ca3af` |\n| Destructive | red/700 `#c81e1e` | red/700 `#c81e1e` |\n| Disabled ON | indigo/200 `#cddbfe` | gray/200 `#e5e7eb` |\n| Disabled Destructive | red/200 `#ffc9c9` | — |\n\n✅ Use Toggle for binary settings that take immediate effect (e.g. enable notifications)\n❌ Do not use Toggle inside a form that requires a Save button — use Checkbox instead\n        "},source:{language:"html",code:`<!-- Toggle ON (default) -->
<span class="iris-toggle iris-toggle--on" role="switch" aria-checked="true">
  <span class="iris-toggle__thumb"></span>
</span>

<!-- Toggle OFF (default) -->
<span class="iris-toggle iris-toggle--off" role="switch" aria-checked="false">
  <span class="iris-toggle__thumb"></span>
</span>

<!-- Toggle ON — destructive -->
<span class="iris-toggle iris-toggle--on iris-toggle--destructive" role="switch" aria-checked="true">
  <span class="iris-toggle__thumb"></span>
</span>

<!-- Toggle ON — disabled -->
<span class="iris-toggle iris-toggle--on iris-toggle--disabled" role="switch" aria-checked="true" aria-disabled="true">
  <span class="iris-toggle__thumb"></span>
</span>`}}},render:()=>g([a("Default",i([d({on:!0}),d({on:!1})])),a("Destructive",i([d({on:!0,destructive:!0}),d({on:!1,destructive:!0})])),a("Disabled ON",i([d({on:!0,disabled:!0}),d({on:!0,disabled:!0,destructive:!0})])),a("Disabled OFF",i([d({on:!1,disabled:!0}),d({on:!1,disabled:!0,destructive:!0})]))])},x={name:"Checkbox — all states",args:{},parameters:{controls:{disable:!0},docs:{description:{story:`
All Checkbox variants from Figma node **9462:787**.

- **Unchecked** — gray/50 bg, gray/300 border
- **Checked** — brand/800 bg + white checkmark
- **Intermediate** — brand/800 bg + white minus bar (use for "select all" when partial selection)
- **Destructive** — red fill/border; unchecked border is \`#c10007\`
- **Disabled** — indigo/200 fill (checked) or gray/200 border (unchecked); \`pointer-events:none\`

✅ Use Intermediate state for parent checkboxes controlling a partial selection
❌ Do not use Checkbox for a single binary setting — use Toggle instead
        `},source:{language:"html",code:`<!-- Unchecked -->
<span class="iris-checkbox" role="checkbox" aria-checked="false"></span>

<!-- Checked -->
<span class="iris-checkbox iris-checkbox--checked" role="checkbox" aria-checked="true"></span>

<!-- Intermediate (indeterminate) -->
<span class="iris-checkbox iris-checkbox--intermediate" role="checkbox" aria-checked="mixed"></span>

<!-- Destructive + checked -->
<span class="iris-checkbox iris-checkbox--checked iris-checkbox--destructive" role="checkbox" aria-checked="true"></span>

<!-- Disabled + checked -->
<span class="iris-checkbox iris-checkbox--checked iris-checkbox--disabled" role="checkbox" aria-checked="true" aria-disabled="true"></span>`}}},render:()=>g([a("Default",i([t({checked:!1}),t({checked:!0}),t({intermediate:!0})])),a("Destructive",i([t({checked:!1,destructive:!0}),t({checked:!0,destructive:!0}),t({intermediate:!0,destructive:!0})])),a("Disabled unchecked",i([t({checked:!1,disabled:!0}),t({checked:!1,disabled:!0,destructive:!0})])),a("Disabled checked",i([t({checked:!0,disabled:!0}),t({intermediate:!0,disabled:!0}),t({checked:!0,disabled:!0,destructive:!0}),t({intermediate:!0,disabled:!0,destructive:!0})]))])},y={name:"Radio — all states",args:{},parameters:{controls:{disable:!0},docs:{description:{story:`
All Radiobutton variants from Figma node **9675:152295**.

- **Unselected** — gray/50 bg, gray/300 border
- **Selected** — brand/800 bg + white 6×6 dot
- **Destructive** — red/700 fill/border
- **Disabled** — indigo/200 (selected) or gray/200 border (unselected)

✅ Group radio buttons in a \`role="radiogroup"\` with a descriptive \`aria-labelledby\`
❌ Do not use Radio for fewer than 2 or more than ~6 options
        `},source:{language:"html",code:`<!-- Unselected -->
<span class="iris-radio" role="radio" aria-checked="false"></span>

<!-- Selected -->
<span class="iris-radio iris-radio--checked" role="radio" aria-checked="true"></span>

<!-- Destructive + selected -->
<span class="iris-radio iris-radio--checked iris-radio--destructive" role="radio" aria-checked="true"></span>

<!-- Disabled + selected -->
<span class="iris-radio iris-radio--checked iris-radio--disabled" role="radio" aria-checked="true" aria-disabled="true"></span>`}}},render:()=>g([a("Default",i([u({checked:!1}),u({checked:!0})])),a("Destructive",i([u({checked:!1,destructive:!0}),u({checked:!0,destructive:!0})])),a("Disabled",i([u({checked:!1,disabled:!0}),u({checked:!0,disabled:!0}),u({checked:!1,disabled:!0,destructive:!0}),u({checked:!0,disabled:!0,destructive:!0})]))])},v={name:"Controls — all types",args:{},parameters:{controls:{disable:!0},docs:{description:{story:"\nFull control rows from Figma node **84:21156**: control element + label + helper text.\n\nThree types × three states (default · destructive · disabled) = 9 combinations shown.\n\nLabel color: `--color-text-heading` (#101828) | Helper color: `--color-text-secondary` (#6b7280)\nDestructive: label + helper → `#c81e1e` / `#fb2c36`\nDisabled: label + helper → gray/300 `#d1d5db`\n        "},source:{language:"html",code:`<!-- Toggle control row -->
<label class="iris-control">
  <span class="iris-control__check">
    <span class="iris-toggle iris-toggle--on" role="switch" aria-checked="true">
      <span class="iris-toggle__thumb"></span>
    </span>
  </span>
  <span class="iris-control__body">
    <span class="iris-control__label">Enable daily digest</span>
    <span class="iris-control__helper">Sent every morning at 7 am</span>
  </span>
</label>

<!-- Checkbox control row — destructive -->
<label class="iris-control iris-control--destructive">
  <span class="iris-control__check">
    <span class="iris-checkbox iris-checkbox--checked iris-checkbox--destructive"
          role="checkbox" aria-checked="true"></span>
  </span>
  <span class="iris-control__body">
    <span class="iris-control__label">Delete all historical data</span>
    <span class="iris-control__helper">This action cannot be undone</span>
  </span>
</label>

<!-- Radio control row — disabled -->
<label class="iris-control iris-control--disabled">
  <span class="iris-control__check">
    <span class="iris-radio iris-radio--disabled" role="radio" aria-checked="false" aria-disabled="true"></span>
  </span>
  <span class="iris-control__body">
    <span class="iris-control__label">Premium plan</span>
    <span class="iris-control__helper">Upgrade to access this option</span>
  </span>
</label>`}}},render:()=>`
<div style="display:flex;flex-direction:column;gap:24px;max-width:340px;">

  ${a("Toggle",g([c({type:"toggle",on:!0,label:"Enable daily digest",helper:"Sent every morning at 7 am"}),c({type:"toggle",on:!0,destructive:!0,label:"Disable all notifications",helper:"You will stop receiving alerts"}),c({type:"toggle",on:!1,disabled:!0,label:"Auto-archive reports",helper:"Requires admin permissions"})]))}

  ${a("Checkbox",g([c({type:"checkbox",checked:!0,label:"Remember my preferences",helper:"Saved to your account"}),c({type:"checkbox",checked:!0,destructive:!0,label:"Delete all historical data",helper:"This action cannot be undone"}),c({type:"checkbox",checked:!1,disabled:!0,label:"Export raw data",helper:"Requires export permissions"})]))}

  ${a("Radio",g([c({type:"radio",checked:!0,label:"Standard plan",helper:"Up to 10 team members"}),c({type:"radio",checked:!0,destructive:!0,label:"Cancel subscription",helper:"Effective at end of billing period"}),c({type:"radio",checked:!1,disabled:!0,label:"Enterprise plan",helper:"Contact sales to unlock"})]))}

</div>`};var D,C,T;m.parameters={...m.parameters,docs:{...(D=m.parameters)==null?void 0:D.docs,source:{originalSource:`{
  name: 'Interactive (Controls)',
  render: ({
    type,
    on,
    checked,
    intermediate,
    destructive,
    disabled,
    label,
    helper
  }) => controlRow({
    type,
    on,
    checked,
    intermediate,
    destructive,
    disabled,
    label,
    helper
  }),
  parameters: {
    docs: {
      description: {
        story: \`
Use the Controls panel to explore all state combinations.

✅ Change **type** between Toggle / Checkbox / Radio
✅ Toggle **ON**, **Checked**, **Intermediate**, **Destructive**, **Disabled**
✅ Edit **Label** and **Helper text** with real copy

❌ Don't use placeholder text like "Label" or "Toggle label" in production
        \`
      },
      source: {
        transform: (_src, ctx) => {
          const {
            type,
            on,
            checked,
            intermediate,
            destructive,
            disabled,
            label,
            helper
          } = ctx.args;
          const wrapCls = ['iris-control', destructive && 'iris-control--destructive', disabled && 'iris-control--disabled'].filter(Boolean).join(' ');
          let ctrlHtml = '';
          if (type === 'toggle') {
            const cls = ['iris-toggle', on ? 'iris-toggle--on' : 'iris-toggle--off', destructive && 'iris-toggle--destructive', disabled && 'iris-toggle--disabled'].filter(Boolean).join(' ');
            ctrlHtml = \`<span class="\${cls}" role="switch" aria-checked="\${on}"><span class="iris-toggle__thumb"></span></span>\`;
          } else if (type === 'checkbox') {
            const cls = ['iris-checkbox', checked && 'iris-checkbox--checked', intermediate && 'iris-checkbox--intermediate', destructive && 'iris-checkbox--destructive', disabled && 'iris-checkbox--disabled'].filter(Boolean).join(' ');
            ctrlHtml = \`<span class="\${cls}" role="checkbox" aria-checked="\${intermediate ? 'mixed' : checked}"></span>\`;
          } else {
            const cls = ['iris-radio', checked && 'iris-radio--checked', destructive && 'iris-radio--destructive', disabled && 'iris-radio--disabled'].filter(Boolean).join(' ');
            ctrlHtml = \`<span class="\${cls}" role="radio" aria-checked="\${checked}"></span>\`;
          }
          return \`<label class="\${wrapCls}">
  <span class="iris-control__check">\${ctrlHtml}</span>
  <span class="iris-control__body">
    <span class="iris-control__label">\${label}</span>
    <span class="iris-control__helper">\${helper}</span>
  </span>
</label>\`;
        }
      }
    }
  }
}`,...(T=(C=m.parameters)==null?void 0:C.docs)==null?void 0:T.source}}};var $,R,S;f.parameters={...f.parameters,docs:{...($=f.parameters)==null?void 0:$.docs,source:{originalSource:`{
  name: 'Toggle — all states',
  args: {},
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      description: {
        story: \`
All Toggle variants from Figma node **9479:135603**.

| State | ON bg | OFF bg |
|-------|-------|--------|
| Default | brand/800 \\\`#42389d\\\` | gray/300 \\\`#d1d5db\\\` |
| Hover | brand/900 \\\`#362f78\\\` | gray/400 \\\`#9ca3af\\\` |
| Destructive | red/700 \\\`#c81e1e\\\` | red/700 \\\`#c81e1e\\\` |
| Disabled ON | indigo/200 \\\`#cddbfe\\\` | gray/200 \\\`#e5e7eb\\\` |
| Disabled Destructive | red/200 \\\`#ffc9c9\\\` | — |

✅ Use Toggle for binary settings that take immediate effect (e.g. enable notifications)
❌ Do not use Toggle inside a form that requires a Save button — use Checkbox instead
        \`
      },
      source: {
        language: 'html',
        code: \`<!-- Toggle ON (default) -->
<span class="iris-toggle iris-toggle--on" role="switch" aria-checked="true">
  <span class="iris-toggle__thumb"></span>
</span>

<!-- Toggle OFF (default) -->
<span class="iris-toggle iris-toggle--off" role="switch" aria-checked="false">
  <span class="iris-toggle__thumb"></span>
</span>

<!-- Toggle ON — destructive -->
<span class="iris-toggle iris-toggle--on iris-toggle--destructive" role="switch" aria-checked="true">
  <span class="iris-toggle__thumb"></span>
</span>

<!-- Toggle ON — disabled -->
<span class="iris-toggle iris-toggle--on iris-toggle--disabled" role="switch" aria-checked="true" aria-disabled="true">
  <span class="iris-toggle__thumb"></span>
</span>\`
      }
    }
  },
  render: () => stack([labeled('Default', row([toggle({
    on: true
  }), toggle({
    on: false
  })])), labeled('Destructive', row([toggle({
    on: true,
    destructive: true
  }), toggle({
    on: false,
    destructive: true
  })])), labeled('Disabled ON', row([toggle({
    on: true,
    disabled: true
  }), toggle({
    on: true,
    disabled: true,
    destructive: true
  })])), labeled('Disabled OFF', row([toggle({
    on: false,
    disabled: true
  }), toggle({
    on: false,
    disabled: true,
    destructive: true
  })]))])
}`,...(S=(R=f.parameters)==null?void 0:R.docs)==null?void 0:S.source}}};var O,F,U;x.parameters={...x.parameters,docs:{...(O=x.parameters)==null?void 0:O.docs,source:{originalSource:`{
  name: 'Checkbox — all states',
  args: {},
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      description: {
        story: \`
All Checkbox variants from Figma node **9462:787**.

- **Unchecked** — gray/50 bg, gray/300 border
- **Checked** — brand/800 bg + white checkmark
- **Intermediate** — brand/800 bg + white minus bar (use for "select all" when partial selection)
- **Destructive** — red fill/border; unchecked border is \\\`#c10007\\\`
- **Disabled** — indigo/200 fill (checked) or gray/200 border (unchecked); \\\`pointer-events:none\\\`

✅ Use Intermediate state for parent checkboxes controlling a partial selection
❌ Do not use Checkbox for a single binary setting — use Toggle instead
        \`
      },
      source: {
        language: 'html',
        code: \`<!-- Unchecked -->
<span class="iris-checkbox" role="checkbox" aria-checked="false"></span>

<!-- Checked -->
<span class="iris-checkbox iris-checkbox--checked" role="checkbox" aria-checked="true"></span>

<!-- Intermediate (indeterminate) -->
<span class="iris-checkbox iris-checkbox--intermediate" role="checkbox" aria-checked="mixed"></span>

<!-- Destructive + checked -->
<span class="iris-checkbox iris-checkbox--checked iris-checkbox--destructive" role="checkbox" aria-checked="true"></span>

<!-- Disabled + checked -->
<span class="iris-checkbox iris-checkbox--checked iris-checkbox--disabled" role="checkbox" aria-checked="true" aria-disabled="true"></span>\`
      }
    }
  },
  render: () => stack([labeled('Default', row([checkbox({
    checked: false
  }), checkbox({
    checked: true
  }), checkbox({
    intermediate: true
  })])), labeled('Destructive', row([checkbox({
    checked: false,
    destructive: true
  }), checkbox({
    checked: true,
    destructive: true
  }), checkbox({
    intermediate: true,
    destructive: true
  })])), labeled('Disabled unchecked', row([checkbox({
    checked: false,
    disabled: true
  }), checkbox({
    checked: false,
    disabled: true,
    destructive: true
  })])), labeled('Disabled checked', row([checkbox({
    checked: true,
    disabled: true
  }), checkbox({
    intermediate: true,
    disabled: true
  }), checkbox({
    checked: true,
    disabled: true,
    destructive: true
  }), checkbox({
    intermediate: true,
    disabled: true,
    destructive: true
  })]))])
}`,...(U=(F=x.parameters)==null?void 0:F.docs)==null?void 0:U.source}}};var N,j,B;y.parameters={...y.parameters,docs:{...(N=y.parameters)==null?void 0:N.docs,source:{originalSource:`{
  name: 'Radio — all states',
  args: {},
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      description: {
        story: \`
All Radiobutton variants from Figma node **9675:152295**.

- **Unselected** — gray/50 bg, gray/300 border
- **Selected** — brand/800 bg + white 6×6 dot
- **Destructive** — red/700 fill/border
- **Disabled** — indigo/200 (selected) or gray/200 border (unselected)

✅ Group radio buttons in a \\\`role="radiogroup"\\\` with a descriptive \\\`aria-labelledby\\\`
❌ Do not use Radio for fewer than 2 or more than ~6 options
        \`
      },
      source: {
        language: 'html',
        code: \`<!-- Unselected -->
<span class="iris-radio" role="radio" aria-checked="false"></span>

<!-- Selected -->
<span class="iris-radio iris-radio--checked" role="radio" aria-checked="true"></span>

<!-- Destructive + selected -->
<span class="iris-radio iris-radio--checked iris-radio--destructive" role="radio" aria-checked="true"></span>

<!-- Disabled + selected -->
<span class="iris-radio iris-radio--checked iris-radio--disabled" role="radio" aria-checked="true" aria-disabled="true"></span>\`
      }
    }
  },
  render: () => stack([labeled('Default', row([radio({
    checked: false
  }), radio({
    checked: true
  })])), labeled('Destructive', row([radio({
    checked: false,
    destructive: true
  }), radio({
    checked: true,
    destructive: true
  })])), labeled('Disabled', row([radio({
    checked: false,
    disabled: true
  }), radio({
    checked: true,
    disabled: true
  }), radio({
    checked: false,
    disabled: true,
    destructive: true
  }), radio({
    checked: true,
    disabled: true,
    destructive: true
  })]))])
}`,...(B=(j=y.parameters)==null?void 0:j.docs)==null?void 0:B.source}}};var E,H,I;v.parameters={...v.parameters,docs:{...(E=v.parameters)==null?void 0:E.docs,source:{originalSource:`{
  name: 'Controls — all types',
  args: {},
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      description: {
        story: \`
Full control rows from Figma node **84:21156**: control element + label + helper text.

Three types × three states (default · destructive · disabled) = 9 combinations shown.

Label color: \\\`--color-text-heading\\\` (#101828) | Helper color: \\\`--color-text-secondary\\\` (#6b7280)
Destructive: label + helper → \\\`#c81e1e\\\` / \\\`#fb2c36\\\`
Disabled: label + helper → gray/300 \\\`#d1d5db\\\`
        \`
      },
      source: {
        language: 'html',
        code: \`<!-- Toggle control row -->
<label class="iris-control">
  <span class="iris-control__check">
    <span class="iris-toggle iris-toggle--on" role="switch" aria-checked="true">
      <span class="iris-toggle__thumb"></span>
    </span>
  </span>
  <span class="iris-control__body">
    <span class="iris-control__label">Enable daily digest</span>
    <span class="iris-control__helper">Sent every morning at 7 am</span>
  </span>
</label>

<!-- Checkbox control row — destructive -->
<label class="iris-control iris-control--destructive">
  <span class="iris-control__check">
    <span class="iris-checkbox iris-checkbox--checked iris-checkbox--destructive"
          role="checkbox" aria-checked="true"></span>
  </span>
  <span class="iris-control__body">
    <span class="iris-control__label">Delete all historical data</span>
    <span class="iris-control__helper">This action cannot be undone</span>
  </span>
</label>

<!-- Radio control row — disabled -->
<label class="iris-control iris-control--disabled">
  <span class="iris-control__check">
    <span class="iris-radio iris-radio--disabled" role="radio" aria-checked="false" aria-disabled="true"></span>
  </span>
  <span class="iris-control__body">
    <span class="iris-control__label">Premium plan</span>
    <span class="iris-control__helper">Upgrade to access this option</span>
  </span>
</label>\`
      }
    }
  },
  render: () => \`
<div style="display:flex;flex-direction:column;gap:24px;max-width:340px;">

  \${labeled('Toggle', stack([controlRow({
    type: 'toggle',
    on: true,
    label: 'Enable daily digest',
    helper: 'Sent every morning at 7 am'
  }), controlRow({
    type: 'toggle',
    on: true,
    destructive: true,
    label: 'Disable all notifications',
    helper: 'You will stop receiving alerts'
  }), controlRow({
    type: 'toggle',
    on: false,
    disabled: true,
    label: 'Auto-archive reports',
    helper: 'Requires admin permissions'
  })]))}

  \${labeled('Checkbox', stack([controlRow({
    type: 'checkbox',
    checked: true,
    label: 'Remember my preferences',
    helper: 'Saved to your account'
  }), controlRow({
    type: 'checkbox',
    checked: true,
    destructive: true,
    label: 'Delete all historical data',
    helper: 'This action cannot be undone'
  }), controlRow({
    type: 'checkbox',
    checked: false,
    disabled: true,
    label: 'Export raw data',
    helper: 'Requires export permissions'
  })]))}

  \${labeled('Radio', stack([controlRow({
    type: 'radio',
    checked: true,
    label: 'Standard plan',
    helper: 'Up to 10 team members'
  }), controlRow({
    type: 'radio',
    checked: true,
    destructive: true,
    label: 'Cancel subscription',
    helper: 'Effective at end of billing period'
  }), controlRow({
    type: 'radio',
    checked: false,
    disabled: true,
    label: 'Enterprise plan',
    helper: 'Contact sales to unlock'
  })]))}

</div>\`
}`,...(I=(H=v.parameters)==null?void 0:H.docs)==null?void 0:I.source}}};const q=["Interactive","TogglesGallery","CheckboxesGallery","RadiosGallery","ControlsGallery"];export{x as CheckboxesGallery,v as ControlsGallery,m as Interactive,y as RadiosGallery,f as TogglesGallery,q as __namedExportsOrder,G as default};
