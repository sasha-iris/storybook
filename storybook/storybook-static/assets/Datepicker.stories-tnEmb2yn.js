const t={bgCard:"#ffffff",borderInput:"#d1d5db",titleColor:"#111928",dayText:"#111928",selectedSimple:"#1447e6",selectedRange:"#42389d",inRange:"#f3f4f6",btnOk:"#42389d",btnCancel:"#ffffff",btnCancelText:"#1e2939",calIcon:"#6b7280",dark_bgCard:"#374151",dark_dayText:"#ffffff",dark_title:"#ffffff",dark_btnCancel:"#4b5563",dark_calIcon:"#9ca3af"};function k(e){return`<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12.5 15L7.5 10L12.5 5" stroke="${e}" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>`}function $(e){return`<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M7.5 5L12.5 10L7.5 15" stroke="${e}" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>`}function G(e){return`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="1" y="3" width="14" height="12" rx="2" stroke="${e}" stroke-width="1.5"/>
    <path d="M1 7H15" stroke="${e}" stroke-width="1.5"/>
    <path d="M5 1V5" stroke="${e}" stroke-width="1.5" stroke-linecap="round"/>
    <path d="M11 1V5" stroke="${e}" stroke-width="1.5" stroke-linecap="round"/>
  </svg>`}function S(e,n){const a=["Su","Mo","Tu","We","Th","Fr","Sa"].map(l=>`<div class="iris-cal__day-header">${l}</div>`).join(""),r=e.map(({label:l,state:s})=>{let o="iris-cal__day";return s==="selected"&&(o+=" iris-cal__day--selected"),s==="range-end"&&(o+=" iris-cal__day--range-selected"),s==="range"&&(o+=" iris-cal__day--in-range"),s==="today"&&(o+=" iris-cal__day--today"),l||(o+=" iris-cal__day--muted"),`<button class="${o}">${l||""}</button>`}).join("");return`<div class="iris-cal__grid">${a}${r}</div>`}function q(e=14){const n=Array(3).fill({label:"",state:"empty"}),i=Array.from({length:31},(a,r)=>{const l=r+1;return{label:String(l),state:l===e?"selected":"normal"}});return[...n,...i]}function K(e,n){return`<div class="iris-cal${n?" iris-cal--dark":""}">${e}</div>`}function z(e,n){return`<div class="iris-cal__header">
    <button class="iris-cal__nav">${k(n?t.dark_title:t.titleColor)}</button>
    <span class="iris-cal__title">${e}</span>
    <button class="iris-cal__nav">${$(n?t.dark_title:t.titleColor)}</button>
  </div>`}function U(e){return`<div class="iris-cal__footer">
    <button class="btn btn-outline-gray btn-sm">Cancel</button>
    <button class="btn btn-primary btn-sm">Ok</button>
  </div>`}function g({placeholder:e="Select date",size:n="default",dark:i=!1,value:a="",error:r=!1}){const l=n==="large"?" iris-datepicker-input--lg":"",s=r?" iris-datepicker-input--error":"",o=a?" iris-datepicker-input--filled":"",d=i?t.dark_calIcon:t.calIcon,p=a||e;return`<div class="iris-datepicker-input${l}${s}${o}" style="width:325px;">
    <span class="iris-datepicker-input__icon">${G(d)}</span>
    <span class="iris-datepicker-input__value">${p}</span>
  </div>`}function P({dark:e,size:n}){const i=z("May 2024",e),a=S(q(14)),r=U();return K(`${i}${a}${r}`,e)}function N({dark:e}){const n=e?" iris-cal--dark":"",a=[...Array(1).fill({label:"",state:"empty"}),...Array.from({length:30},(s,o)=>{const d=o+1;return d===26?{label:String(d),state:"range-end"}:d>26?{label:String(d),state:"range"}:{label:String(d),state:"normal"}})],l=[...Array(3).fill({label:"",state:"empty"}),...Array.from({length:31},(s,o)=>{const d=o+1;return d===10?{label:String(d),state:"range-end"}:d<10?{label:String(d),state:"range"}:{label:String(d),state:"normal"}})];return`<div class="iris-cal iris-cal--range${n}">
    <div class="iris-cal__months">
      <div>
        ${z("April 2024",e)}
        ${S(a)}
      </div>
      <div>
        ${z("May 2024",e)}
        ${S(l)}
      </div>
    </div>
    ${U()}
  </div>`}function J({dark:e,selectedMonth:n="FEB"}){const i=e?t.dark_bgCard:t.bgCard,a=e?t.dark_dayText:t.dayText,r=e?t.dark_title:t.titleColor,l=e?t.dark_title:t.titleColor,o=["JAN","FEB","MAR","APR","MAY","JUN","JUL","AUG","SEP","OCT","NOV","DEC"].map(u=>{const c=u===n;return`<div style="height:40px;display:flex;align-items:center;justify-content:center;
      font-size:12px;font-weight:${c?700:400};
      color:${c?"#ffffff":a};
      background:${c?t.selectedRange:"transparent"};
      border-radius:8px;cursor:pointer;">${u}</div>`}).join(""),d=e?t.dark_btnCancel:t.btnCancel,p=e?"#ffffff":t.btnCancelText,f=e?"none":`1px solid ${t.borderInput}`;return`<div style="background:${i};border-radius:8px;padding:12px;width:255px;
    box-shadow:0 4px 24px rgba(0,0,0,0.12);font-family:inherit;box-sizing:border-box;">
    <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:8px;">
      <button style="background:none;border:none;cursor:pointer;padding:0;">${k(r)}</button>
      <span style="font-size:12px;font-weight:700;color:${l};">2024</span>
      <button style="background:none;border:none;cursor:pointer;padding:0;">${$(r)}</button>
    </div>
    <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:4px;">${o}</div>
    <div style="display:flex;justify-content:flex-end;gap:8px;margin-top:12px;">
      <button style="height:37px;padding:0 16px;background:${d};border:${f};
        border-radius:12px;font-size:12px;font-weight:500;color:${p};cursor:pointer;font-family:inherit;">Cancel</button>
      <button style="height:37px;padding:0 16px;background:${t.btnOk};border:none;
        border-radius:12px;font-size:12px;font-weight:500;color:#ffffff;cursor:pointer;font-family:inherit;">Ok</button>
    </div>
  </div>`}function W({dark:e,selectedYear:n=2019}){const i=e?t.dark_bgCard:t.bgCard,a=e?t.dark_dayText:t.dayText,r=e?t.dark_title:t.titleColor,l=e?t.dark_title:t.titleColor,o=[2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021].map(u=>{const c=u===n;return`<div style="height:40px;display:flex;align-items:center;justify-content:center;
      font-size:12px;font-weight:${c?700:400};
      color:${c?"#ffffff":a};
      background:${c?t.selectedSimple:"transparent"};
      border-radius:8px;cursor:pointer;">${u}</div>`}).join(""),d=e?t.dark_btnCancel:t.btnCancel,p=e?"#ffffff":t.btnCancelText,f=e?"none":`1px solid ${t.borderInput}`;return`<div style="background:${i};border-radius:8px;padding:12px;width:198px;
    box-shadow:0 4px 24px rgba(0,0,0,0.12);font-family:inherit;box-sizing:border-box;">
    <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:8px;">
      <button style="background:none;border:none;cursor:pointer;padding:0;">${k(r)}</button>
      <span style="font-size:12px;font-weight:700;color:${l};">2010-2021</span>
      <button style="background:none;border:none;cursor:pointer;padding:0;">${$(r)}</button>
    </div>
    <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:4px;">${o}</div>
    <div style="display:flex;justify-content:flex-end;gap:8px;margin-top:12px;">
      <button style="height:37px;padding:0 16px;background:${d};border:${f};
        border-radius:12px;font-size:12px;font-weight:500;color:${p};cursor:pointer;font-family:inherit;">Cancel</button>
      <button style="height:37px;padding:0 16px;background:${t.btnOk};border:none;
        border-radius:12px;font-size:12px;font-weight:500;color:#ffffff;cursor:pointer;font-family:inherit;">Ok</button>
    </div>
  </div>`}function V({dark:e}){const n=e?t.dark_bgCard:t.bgCard,i=e?"#6b7280":"#9ca3af",a=e?t.dark_title:t.titleColor,r=e?t.dark_btnCancel:t.btnCancel,l=e?"#ffffff":t.btnCancelText,s=e?"none":`1px solid ${t.borderInput}`;function o(u,c,C){const w=c.map((y,D)=>{const b=y===C;return`<div style="height:40px;display:flex;align-items:center;justify-content:center;
        font-size:12px;font-weight:${b?700:400};
        color:${b?e?"#ffffff":t.titleColor:i};
        background:${b?e?"#4b5563":t.inRange:"transparent"};
        border-radius:4px;">${y}</div>`}).join("");return`<div style="flex:1;">
      <div style="font-size:10px;font-weight:600;color:${i};text-align:center;margin-bottom:4px;">${u}</div>
      <div style="overflow:hidden;">${w}</div>
    </div>`}const d=[1993,1994,1995,1996,1997],p=["Jan","Feb","Mar","Apr","May"],f=[12,13,14,15,16];return`<div style="background:${n};border-radius:8px;padding:12px;width:198px;
    box-shadow:0 4px 24px rgba(0,0,0,0.12);font-family:inherit;box-sizing:border-box;">
    <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:8px;">
      <span style="font-size:12px;font-weight:700;color:${a};">Date of Birth</span>
    </div>
    <div style="display:flex;gap:8px;">
      ${o("Year",d,1995)}
      ${o("Month",p,"Mar")}
      ${o("Day",f,14)}
    </div>
    <div style="display:flex;justify-content:flex-end;gap:8px;margin-top:12px;">
      <button style="height:37px;padding:0 16px;background:${r};border:${s};
        border-radius:12px;font-size:12px;font-weight:500;color:${l};cursor:pointer;font-family:inherit;">Cancel</button>
      <button style="height:37px;padding:0 16px;background:${t.btnOk};border:none;
        border-radius:12px;font-size:12px;font-weight:500;color:#ffffff;cursor:pointer;font-family:inherit;">Ok</button>
    </div>
  </div>`}function H({dark:e,activeTab:n="month"}){const i=e?t.dark_bgCard:t.bgCard,a=e?t.dark_title:t.titleColor,r="#f3f4f6",l=t.selectedRange,s=e?t.dark_title:t.titleColor,o=e?t.dark_btnCancel:t.btnCancel,d=e?"#ffffff":t.btnCancelText,p=e?"none":`1px solid ${t.borderInput}`,f=`<button style="flex:1;height:32px;background:${n==="month"?r:"transparent"};
    border:none;border-radius:6px;font-size:12px;font-weight:500;
    color:${n==="month"?l:e?t.dark_dayText:t.dayText};cursor:pointer;font-family:inherit;">Month</button>`,u=`<button style="flex:1;height:32px;background:${n==="year"?r:"transparent"};
    border:none;border-radius:6px;font-size:12px;font-weight:500;
    color:${n==="year"?l:e?t.dark_dayText:t.dayText};cursor:pointer;font-family:inherit;">Year</button>`,c=["January","February","March","April","May","June","July","August","September","October","November","December"],C=Array.from({length:12},(b,_)=>2010+_),w=n==="month"?c:C.map(String),y=n==="month"?"February":"2019",D=w.map(b=>{const _=b===y;return`<div style="padding:8px 12px;font-size:12px;font-weight:${_?500:400};
      color:${_?t.selectedRange:e?t.dark_dayText:"#374151"};cursor:pointer;">${b}</div>`}).join("");return`<div style="background:${i};border-radius:8px;padding:12px;width:328px;
    box-shadow:0 4px 24px rgba(0,0,0,0.12);font-family:inherit;box-sizing:border-box;">
    <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:8px;">
      <button style="background:none;border:none;cursor:pointer;padding:0;">${k(s)}</button>
      <span style="font-size:12px;font-weight:700;color:${a};">FEB 2024</span>
      <button style="background:none;border:none;cursor:pointer;padding:0;">${$(s)}</button>
    </div>
    <div style="display:flex;gap:4px;background:${e?"#4b5563":"#f9fafb"};border-radius:8px;padding:4px;margin-bottom:8px;">
      ${f}${u}
    </div>
    <div style="max-height:240px;overflow-y:auto;display:grid;grid-template-columns:1fr 1fr;">
      ${D}
    </div>
    <div style="display:flex;justify-content:flex-end;gap:8px;margin-top:12px;">
      <button style="height:37px;padding:0 16px;background:${o};border:${p};
        border-radius:12px;font-size:12px;font-weight:500;color:${d};cursor:pointer;font-family:inherit;">Cancel</button>
      <button style="height:37px;padding:0 16px;background:${t.btnOk};border:none;
        border-radius:12px;font-size:12px;font-weight:500;color:#ffffff;cursor:pointer;font-family:inherit;">Apply</button>
    </div>
  </div>`}function Q(e){const{type:n,dark:i,size:a}=e,l=g({placeholder:n==="range"?"Select period":"Select date",size:a,dark:i});let s="";return n==="simple"?s=P({dark:i,size:a}):n==="range"?s=N({dark:i}):n==="month"?s=J({dark:i}):n==="year"?s=W({dark:i}):n==="dob"?s=V({dark:i}):n==="tab"&&(s=H({dark:i})),`<div style="display:inline-flex;flex-direction:column;gap:8px;font-family:inherit;">
    ${l}
    ${s}
  </div>`}const X={title:"Iris Library/Datepicker",tags:["autodocs","stable"],parameters:{docs:{description:{component:`
**Datepicker** lets users select a single date, a date range, or a partial date (month/year/date-of-birth). It renders as an input trigger that opens a dropdown calendar panel.

**When to use**
- Filtering data by date or date range
- Collecting birth dates or appointment dates in forms
- Year/month navigation in reporting dashboards

**When NOT to use**
- Relative time ("last 7 days") — use a Dropdown or preset chip group instead
- Inline date display only — use a plain text or Badge

**Anatomy**
- Input trigger (calendar icon + placeholder/value, Default 42px / Large 52px)
- Calendar panel (header with prev/next arrows + month-year title)
- Day grid (7 columns, day names row + day number cells)
- Selected state: single day (\`#1447e6\`) or range endpoints (\`#42389d\`) with in-range fill (\`#f3f4f6\`)
- Footer: Cancel + Ok/Apply buttons
        `}}},argTypes:{type:{control:"select",options:["simple","range","month","year","dob","tab"],description:"Calendar panel type. `simple` = single date; `range` = start–end; `month`/`year` = picker grids; `dob` = date-of-birth scroll; `tab` = month/year tabbed picker.",table:{category:"Appearance",defaultValue:{summary:"simple"}}},size:{control:"select",options:["default","large"],description:"Input trigger height. `default` = 42px, `large` = 52px.",table:{category:"Appearance",defaultValue:{summary:"default"}}},dark:{control:"boolean",description:"Dark theme. Card bg `#374151`, text `#ffffff`, cancel button `#4b5563`.",table:{category:"State",defaultValue:{summary:!1}}}},args:{type:"simple",size:"default",dark:!1}},v={name:"Interactive (Controls)",render:e=>Q(e),parameters:{docs:{source:{transform:(e,n)=>{const{type:i,dark:a,size:r}=n.args;return`<!-- Input trigger -->
<div class="iris-datepicker-input${r==="large"?" iris-datepicker-input--lg":""}">
  <span class="iris-datepicker-input__icon"><!-- calendar icon --></span>
  <span class="iris-datepicker-input__value">${i==="range"?"Select period":"Select date"}</span>
</div>

<!-- Calendar popup (type="${i}") -->
<div class="iris-cal${i==="range"?" iris-cal--range":""}${a?" iris-cal--dark":""}">
  <div class="iris-cal__header">
    <button class="iris-cal__nav"><!-- chevron-left --></button>
    <span class="iris-cal__title">May 2024</span>
    <button class="iris-cal__nav"><!-- chevron-right --></button>
  </div>
  <div class="iris-cal__grid">
    <!-- day headers: iris-cal__day-header -->
    <!-- day cells: iris-cal__day, iris-cal__day--selected, iris-cal__day--in-range, iris-cal__day--muted -->
  </div>
  ${i==="range"?`<!-- presets -->
<div class="iris-cal__presets">
  <span class="iris-cal__preset iris-cal__preset--active">Last 30 days</span>
  <span class="iris-cal__preset">This month</span>
</div>`:`<div class="iris-cal__footer">
  <button class="btn btn-outline-gray btn-sm">Cancel</button>
  <button class="btn btn-primary btn-sm">Ok</button>
</div>`}
</div>`}}}}},m={name:"All types — light",args:{dark:!1},parameters:{controls:{include:["dark"]},docs:{description:{story:`All 6 Datepicker panel types in light theme. Left-to-right: Simple, Range, Choose Month, Choose Year, Date of Birth, Month/Year Tab picker.

✅ Use **Simple** for single-date fields (appointments, deadlines)
✅ Use **Range** for period filters — always show both months
✅ Use **Month / Year** pickers when day-level precision is not needed
✅ Use **Date of Birth** for user profile forms — scroll columns feel natural on mobile
❌ Don't use **Range** when only a single boundary date is needed`},source:{code:`<!-- Input trigger -->
<div class="iris-datepicker-input">
  <span class="iris-datepicker-input__icon"><!-- calendar icon --></span>
  <span class="iris-datepicker-input__value">Select date</span>
</div>

<!-- Calendar popup -->
<div class="iris-cal">
  <div class="iris-cal__header">
    <button class="iris-cal__nav"><!-- chevron-left --></button>
    <span class="iris-cal__title">May 2024</span>
    <button class="iris-cal__nav"><!-- chevron-right --></button>
  </div>
  <div class="iris-cal__grid">
    <div class="iris-cal__day-header">Su</div><!-- Mo Tu We Th Fr Sa -->
    <button class="iris-cal__day">1</button>
    <button class="iris-cal__day iris-cal__day--selected">14</button>
    <button class="iris-cal__day iris-cal__day--in-range">15</button>
    <button class="iris-cal__day iris-cal__day--muted">1</button><!-- outside month -->
  </div>
  <div class="iris-cal__footer">
    <button class="btn btn-outline-gray btn-sm">Cancel</button>
    <button class="btn btn-primary btn-sm">Ok</button>
  </div>
</div>

<!-- Range picker: two months side by side -->
<div class="iris-cal iris-cal--range">
  <div class="iris-cal__months">
    <div>
      <div class="iris-cal__header">...</div>
      <div class="iris-cal__grid">...</div>
    </div>
    <div>
      <div class="iris-cal__header">...</div>
      <div class="iris-cal__grid">...</div>
    </div>
  </div>
  <div class="iris-cal__footer">
    <button class="btn btn-outline-gray btn-sm">Cancel</button>
    <button class="btn btn-primary btn-sm">Ok</button>
  </div>
</div>`}}},render:({dark:e})=>`<div style="display:flex;flex-wrap:wrap;gap:24px;align-items:flex-start;font-family:inherit;">
      ${[P({dark:e,size:"default"}),N({dark:e}),J({dark:e}),W({dark:e}),V({dark:e}),H({dark:e})].map(a=>`<div>${a}</div>`).join("")}
    </div>`},h={name:"Input sizes",args:{dark:!1},parameters:{controls:{include:["dark"]},docs:{description:{story:"Two input trigger heights from Figma. **Default** (42px) suits most form layouts. **Large** (52px) matches xl button rows or prominent date selectors on landing pages."},source:{code:`<!-- Default 42px -->
<div class="iris-datepicker-input">...</div>

<!-- Large 52px -->
<div class="iris-datepicker-input iris-datepicker-input--lg">...</div>

<!-- Error state -->
<div class="iris-datepicker-input iris-datepicker-input--error">...</div>

<!-- Filled (has value) -->
<div class="iris-datepicker-input iris-datepicker-input--filled">...</div>`}}},render:({dark:e})=>`<div style="display:flex;flex-direction:column;gap:12px;font-family:inherit;">
      <div>
        <div style="font-size:11px;color:#6b7280;margin-bottom:4px;font-family:inherit;">Default (42px)</div>
        ${g({placeholder:"Select date",size:"default",dark:e})}
      </div>
      <div>
        <div style="font-size:11px;color:#6b7280;margin-bottom:4px;font-family:inherit;">Large (52px)</div>
        ${g({placeholder:"Select date",size:"large",dark:e})}
      </div>
      <div>
        <div style="font-size:11px;color:#6b7280;margin-bottom:4px;font-family:inherit;">Filled (Default)</div>
        ${g({placeholder:"Select date",size:"default",dark:e,value:"May 14, 2024"})}
      </div>
      <div>
        <div style="font-size:11px;color:#6b7280;margin-bottom:4px;font-family:inherit;">Range filled</div>
        ${g({placeholder:"Select period",size:"default",dark:e,value:"Apr 26 – May 10, 2024"})}
      </div>
    </div>`},x={name:"Day cell states",args:{dark:!1},parameters:{controls:{include:["dark"]},docs:{description:{story:"All individual day cell states from Figma node 9667:2900. Shows how selected, range-endpoint, in-range, and default cells appear side-by-side."},source:{code:`<button class="iris-cal__day">14</button>
<button class="iris-cal__day iris-cal__day--today">14</button>
<button class="iris-cal__day iris-cal__day--selected">14</button>
<button class="iris-cal__day iris-cal__day--range-selected">14</button>
<button class="iris-cal__day iris-cal__day--in-range">14</button>
<button class="iris-cal__day iris-cal__day--muted">14</button>
<button class="iris-cal__day iris-cal__day--disabled">14</button>`}}},render:({dark:e})=>{const n=e?" iris-cal--dark":"",a=[{label:"Normal",cls:""},{label:"Today",cls:" iris-cal__day--today"},{label:"Selected",cls:" iris-cal__day--selected"},{label:"Range end",cls:" iris-cal__day--range-selected"},{label:"In range",cls:" iris-cal__day--in-range"},{label:"Muted",cls:" iris-cal__day--muted"},{label:"Disabled",cls:" iris-cal__day--disabled"}].map(r=>`<div style="display:flex;flex-direction:column;align-items:center;gap:6px;">
        <button class="iris-cal__day${r.cls}">14</button>
        <span style="font-size:10px;color:#6b7280;font-family:inherit;">${r.label}</span>
      </div>`).join("");return`<div class="iris-cal${n}" style="display:inline-flex;gap:16px;width:auto;padding:20px;">${a}</div>`}};var T,I,M;v.parameters={...v.parameters,docs:{...(T=v.parameters)==null?void 0:T.docs,source:{originalSource:`{
  name: 'Interactive (Controls)',
  render: args => fullWidget(args),
  parameters: {
    docs: {
      source: {
        transform: (_src, ctx) => {
          const {
            type,
            dark,
            size
          } = ctx.args;
          const placeholder = type === 'range' ? 'Select period' : 'Select date';
          const lgCls = size === 'large' ? ' iris-datepicker-input--lg' : '';
          const darkCal = dark ? ' iris-cal--dark' : '';
          return \`<!-- Input trigger -->
<div class="iris-datepicker-input\${lgCls}">
  <span class="iris-datepicker-input__icon"><!-- calendar icon --></span>
  <span class="iris-datepicker-input__value">\${placeholder}</span>
</div>

<!-- Calendar popup (type="\${type}") -->
<div class="iris-cal\${type === 'range' ? ' iris-cal--range' : ''}\${darkCal}">
  <div class="iris-cal__header">
    <button class="iris-cal__nav"><!-- chevron-left --></button>
    <span class="iris-cal__title">May 2024</span>
    <button class="iris-cal__nav"><!-- chevron-right --></button>
  </div>
  <div class="iris-cal__grid">
    <!-- day headers: iris-cal__day-header -->
    <!-- day cells: iris-cal__day, iris-cal__day--selected, iris-cal__day--in-range, iris-cal__day--muted -->
  </div>
  \${type === 'range' ? \`<!-- presets -->\\n<div class="iris-cal__presets">\\n  <span class="iris-cal__preset iris-cal__preset--active">Last 30 days</span>\\n  <span class="iris-cal__preset">This month</span>\\n</div>\` : \`<div class="iris-cal__footer">\\n  <button class="btn btn-outline-gray btn-sm">Cancel</button>\\n  <button class="btn btn-primary btn-sm">Ok</button>\\n</div>\`}
</div>\`;
        }
      }
    }
  }
}`,...(M=(I=v.parameters)==null?void 0:I.docs)==null?void 0:M.source}}};var A,R,B;m.parameters={...m.parameters,docs:{...(A=m.parameters)==null?void 0:A.docs,source:{originalSource:`{
  name: 'All types — light',
  args: {
    dark: false
  },
  parameters: {
    controls: {
      include: ['dark']
    },
    docs: {
      description: {
        story: \`All 6 Datepicker panel types in light theme. Left-to-right: Simple, Range, Choose Month, Choose Year, Date of Birth, Month/Year Tab picker.

✅ Use **Simple** for single-date fields (appointments, deadlines)
✅ Use **Range** for period filters — always show both months
✅ Use **Month / Year** pickers when day-level precision is not needed
✅ Use **Date of Birth** for user profile forms — scroll columns feel natural on mobile
❌ Don't use **Range** when only a single boundary date is needed\`
      },
      source: {
        code: \`<!-- Input trigger -->
<div class="iris-datepicker-input">
  <span class="iris-datepicker-input__icon"><!-- calendar icon --></span>
  <span class="iris-datepicker-input__value">Select date</span>
</div>

<!-- Calendar popup -->
<div class="iris-cal">
  <div class="iris-cal__header">
    <button class="iris-cal__nav"><!-- chevron-left --></button>
    <span class="iris-cal__title">May 2024</span>
    <button class="iris-cal__nav"><!-- chevron-right --></button>
  </div>
  <div class="iris-cal__grid">
    <div class="iris-cal__day-header">Su</div><!-- Mo Tu We Th Fr Sa -->
    <button class="iris-cal__day">1</button>
    <button class="iris-cal__day iris-cal__day--selected">14</button>
    <button class="iris-cal__day iris-cal__day--in-range">15</button>
    <button class="iris-cal__day iris-cal__day--muted">1</button><!-- outside month -->
  </div>
  <div class="iris-cal__footer">
    <button class="btn btn-outline-gray btn-sm">Cancel</button>
    <button class="btn btn-primary btn-sm">Ok</button>
  </div>
</div>

<!-- Range picker: two months side by side -->
<div class="iris-cal iris-cal--range">
  <div class="iris-cal__months">
    <div>
      <div class="iris-cal__header">...</div>
      <div class="iris-cal__grid">...</div>
    </div>
    <div>
      <div class="iris-cal__header">...</div>
      <div class="iris-cal__grid">...</div>
    </div>
  </div>
  <div class="iris-cal__footer">
    <button class="btn btn-outline-gray btn-sm">Cancel</button>
    <button class="btn btn-primary btn-sm">Ok</button>
  </div>
</div>\`
      }
    }
  },
  render: ({
    dark
  }) => {
    const gap = 24;
    const types = [simpleCalendar({
      dark,
      size: 'default'
    }), rangeCalendarSimple({
      dark
    }), monthPicker({
      dark
    }), yearPicker({
      dark
    }), dobPicker({
      dark
    }), tabPicker({
      dark
    })];
    return \`<div style="display:flex;flex-wrap:wrap;gap:\${gap}px;align-items:flex-start;font-family:inherit;">
      \${types.map(t => \`<div>\${t}</div>\`).join('')}
    </div>\`;
  }
}`,...(B=(R=m.parameters)==null?void 0:R.docs)==null?void 0:B.source}}};var j,L,O;h.parameters={...h.parameters,docs:{...(j=h.parameters)==null?void 0:j.docs,source:{originalSource:`{
  name: 'Input sizes',
  args: {
    dark: false
  },
  parameters: {
    controls: {
      include: ['dark']
    },
    docs: {
      description: {
        story: \`Two input trigger heights from Figma. **Default** (42px) suits most form layouts. **Large** (52px) matches xl button rows or prominent date selectors on landing pages.\`
      },
      source: {
        code: \`<!-- Default 42px -->
<div class="iris-datepicker-input">...</div>

<!-- Large 52px -->
<div class="iris-datepicker-input iris-datepicker-input--lg">...</div>

<!-- Error state -->
<div class="iris-datepicker-input iris-datepicker-input--error">...</div>

<!-- Filled (has value) -->
<div class="iris-datepicker-input iris-datepicker-input--filled">...</div>\`
      }
    }
  },
  render: ({
    dark
  }) => {
    return \`<div style="display:flex;flex-direction:column;gap:12px;font-family:inherit;">
      <div>
        <div style="font-size:11px;color:#6b7280;margin-bottom:4px;font-family:inherit;">Default (42px)</div>
        \${datepickerInput({
      placeholder: 'Select date',
      size: 'default',
      dark
    })}
      </div>
      <div>
        <div style="font-size:11px;color:#6b7280;margin-bottom:4px;font-family:inherit;">Large (52px)</div>
        \${datepickerInput({
      placeholder: 'Select date',
      size: 'large',
      dark
    })}
      </div>
      <div>
        <div style="font-size:11px;color:#6b7280;margin-bottom:4px;font-family:inherit;">Filled (Default)</div>
        \${datepickerInput({
      placeholder: 'Select date',
      size: 'default',
      dark,
      value: 'May 14, 2024'
    })}
      </div>
      <div>
        <div style="font-size:11px;color:#6b7280;margin-bottom:4px;font-family:inherit;">Range filled</div>
        \${datepickerInput({
      placeholder: 'Select period',
      size: 'default',
      dark,
      value: 'Apr 26 – May 10, 2024'
    })}
      </div>
    </div>\`;
  }
}`,...(O=(L=h.parameters)==null?void 0:L.docs)==null?void 0:O.source}}};var F,E,Y;x.parameters={...x.parameters,docs:{...(F=x.parameters)==null?void 0:F.docs,source:{originalSource:`{
  name: 'Day cell states',
  args: {
    dark: false
  },
  parameters: {
    controls: {
      include: ['dark']
    },
    docs: {
      description: {
        story: \`All individual day cell states from Figma node 9667:2900. Shows how selected, range-endpoint, in-range, and default cells appear side-by-side.\`
      },
      source: {
        code: \`<button class="iris-cal__day">14</button>
<button class="iris-cal__day iris-cal__day--today">14</button>
<button class="iris-cal__day iris-cal__day--selected">14</button>
<button class="iris-cal__day iris-cal__day--range-selected">14</button>
<button class="iris-cal__day iris-cal__day--in-range">14</button>
<button class="iris-cal__day iris-cal__day--muted">14</button>
<button class="iris-cal__day iris-cal__day--disabled">14</button>\`
      }
    }
  },
  render: ({
    dark
  }) => {
    const darkCls = dark ? ' iris-cal--dark' : '';
    const stateData = [{
      label: 'Normal',
      cls: ''
    }, {
      label: 'Today',
      cls: ' iris-cal__day--today'
    }, {
      label: 'Selected',
      cls: ' iris-cal__day--selected'
    }, {
      label: 'Range end',
      cls: ' iris-cal__day--range-selected'
    }, {
      label: 'In range',
      cls: ' iris-cal__day--in-range'
    }, {
      label: 'Muted',
      cls: ' iris-cal__day--muted'
    }, {
      label: 'Disabled',
      cls: ' iris-cal__day--disabled'
    }];
    const cells = stateData.map(s => \`<div style="display:flex;flex-direction:column;align-items:center;gap:6px;">
        <button class="iris-cal__day\${s.cls}">14</button>
        <span style="font-size:10px;color:#6b7280;font-family:inherit;">\${s.label}</span>
      </div>\`).join('');
    return \`<div class="iris-cal\${darkCls}" style="display:inline-flex;gap:16px;width:auto;padding:20px;">\${cells}</div>\`;
  }
}`,...(Y=(E=x.parameters)==null?void 0:E.docs)==null?void 0:Y.source}}};const Z=["Interactive","AllTypesLight","InputSizes","DayCellStates"];export{m as AllTypesLight,x as DayCellStates,h as InputSizes,v as Interactive,Z as __namedExportsOrder,X as default};
