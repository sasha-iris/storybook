const v=`<svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor"
  xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293
    a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2
    a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
</svg>`,u=({amount:t="500,00",currency:n=!0,textColor:e="#111928",bg:i="#ffffff",caption:l=null,iconLeft:o=!1,iconRight:a=!1}={})=>`
  <div style="display:flex;align-items:center;justify-content:flex-end;gap:4px;
              width:146px;height:38px;padding:8px 16px;background:${i};
              box-sizing:border-box;flex-shrink:0;">
    ${o?`<span style="display:flex;align-items:center;flex-shrink:0;color:${e};">${v}</span>`:""}
    ${n?`<span style="font-family:inherit;font-size:var(--text-sm);font-weight:var(--font-medium);line-height:1.5;color:${e};flex-shrink:0;">$</span>`:""}
    <div style="flex:1 0 0;display:flex;flex-direction:column;align-items:flex-end;
                justify-content:center;min-width:1px;">
      <span style="font-family:inherit;font-size:var(--text-sm);font-weight:var(--font-medium);line-height:1.5;color:${e};
                   text-align:right;white-space:nowrap;">${t}</span>
      ${l?`<span style="font-family:inherit;font-size:var(--text-xs);font-weight:var(--font-normal);line-height:1.5;color:var(--color-text-secondary);text-align:right;">${l}</span>`:""}
    </div>
    ${a?`<span style="display:flex;align-items:center;flex-shrink:0;color:${e};">${v}</span>`:""}
  </div>`,re=()=>`
  <div style="display:flex;align-items:center;width:146px;height:38px;
              background:var(--color-bg-surface);border:1px solid var(--color-border-default);
              box-sizing:border-box;flex-shrink:0;">
    <div style="flex:1;display:flex;align-items:center;justify-content:flex-end;
                border:1px solid #1c64f2;border-radius:4px;padding:8px 16px;
                overflow:hidden;box-sizing:border-box;">
      <span style="flex:1 0 0;font-family:inherit;font-size:var(--text-sm);font-weight:var(--font-medium);line-height:1.5;
                   color:#111928;text-align:right;white-space:nowrap;">500,00|</span>
    </div>
  </div>`,w=({text:t="Label",bg:n="#ffffff",color:e="#111928",bold:i=!1}={})=>`
  <div style="display:flex;align-items:center;justify-content:flex-end;gap:4px;
              width:146px;height:38px;padding:8px 16px;background:${n};
              box-sizing:border-box;flex-shrink:0;">
    <span style="font-family:inherit;font-size:var(--text-sm);font-weight:${i?"var(--font-semibold)":"var(--font-medium)"};line-height:1.5;
                 color:${e};flex:1 0 0;">${t}</span>
  </div>`,se=({label:t="LABEL",bg:n="#f9fafb",color:e="#6b7280"}={})=>`
  <div style="display:flex;align-items:center;justify-content:flex-end;gap:4px;
              width:146px;height:38px;padding:8px 16px;background:${n};
              box-sizing:border-box;flex-shrink:0;">
    <span style="font-family:inherit;font-size:var(--text-xs);font-weight:var(--font-bold);line-height:1.5;
                 color:${e};flex:1 0 0;text-align:right;">${t}</span>
  </div>`,s=t=>`<span style="display:inline-flex;align-items:center;justify-content:flex-end;
    width:180px;padding-right:12px;flex-shrink:0;
    font-family:inherit;font-size:11px;font-weight:var(--font-medium);line-height:1.5;color:#9ca3af;">${t}</span>`,C=t=>`<p style="font-family:inherit;font-size:11px;font-weight:var(--font-bold);line-height:1;text-transform:uppercase;
    letter-spacing:.12em;color:var(--color-text-secondary);margin:0 0 14px;
    border-bottom:1px solid var(--color-border-default);padding-bottom:7px;">${t}</p>`,r={default:{textColor:"#111928",cellBg:null},grey:{textColor:"#6b7280",cellBg:null},editable:{textColor:"#1c64f2",cellBg:null},blue:{textColor:"#1c64f2",cellBg:"#ebf5ff"},calculated:{textColor:"#0e9f6e",cellBg:null},waste:{textColor:"#e74694",cellBg:null},indigo:{textColor:"#42389d",cellBg:null}},y={default:"#ffffff",derival:"#fff8f1",total:"#f3f4f6","non-collapsible":"#f9fafb"},de={title:"Iris Library/Table/Cells",tags:["autodocs","stable"],parameters:{layout:"padded",backgrounds:{default:"light"},docs:{description:{component:"**Table / Cells** — primitive cell components for the Iris financial/analytics table.\n\nFigma nodes: TableCell `9279:163646` · TableHeaderHorizontal `9279:163718` · TableHeaderVertical `9279:163779`\n\n**When to use**\n- Building financial reporting tables: budget, P&L, cohort analysis\n- Displaying numeric data with semantic colour coding (positive/negative/calculated/derived)\n- Assembling period-column headers (ACTUALS vs FORECAST bands)\n\n**When NOT to use**\n- Generic data tables without financial semantics → use a standard HTML table\n- Non-numeric content rows → cells are right-aligned numeric by design\n\n**Anatomy**\n`[$] [value] [caption?] [icon?]` · width: 146px · height: 38px · padding: 8px 16px\n\nPrimitive cell components for the Iris financial/analytics table — used in reporting dashboards (budget, P&L, cohort analysis).\n\n### TableCell\n\nThe `option` prop controls text colour. `Blue` is the only option that also changes the cell background.\n\n| Option | Text | Cell bg |\n|---|---|---|\n| Default | `#111928` | row bg |\n| Grey | `#6b7280` | row bg |\n| Editable | `#1c64f2` | white (not editing) |\n| Blue | `#1c64f2` | `#ebf5ff` |\n| Calculated | `#0e9f6e` | row bg |\n| Waste | `#e74694` | row bg |\n| Indigo | `#42389d` | row bg |\n\nRow backgrounds by type:\n\n| Row type | Background |\n|---|---|\n| Default | `#ffffff` |\n| Derival | `#fff8f1` |\n| Total | `#f3f4f6` |\n| Defaul-non-collapsible | `#f9fafb` |\n\n### TableHeaderHorizontal\n\nColumn category encoded in background and text colour:\n\n| Type | Background | Text |\n|---|---|---|\n| Default | `#ffffff` | `#111928` |\n| Derival | `#fff8f1` | `#111928` |\n| Total | `#f3f4f6` | `#111928` |\n| Union | `#f3f4f6` | `#42389d` |\n| Defaul-non-collapsible | `#f9fafb` | `#111928` |\n| Expand | `#edebfe` | `#42389d` |\n| Income | `#f3faf7` | `#057a55` |\n| Disbursements | `#fdf2f2` | `#e02424` |\n\n### TableHeaderVertical\n\nPeriod column headers (time-series, e.g. months):\n\n| Type | Background | Text |\n|---|---|---|\n| Default (LABEL) | `#f9fafb` | `#6b7280` |\n| ACTUALS | `#cddbfe` | `#4b5563` |\n| FORECAST | `#96f7e4` | `#4b5563` |\n\n### Developer notes\n- All cells: `height:38px`, `padding:8px 16px`, `box-sizing:border-box`\n- Font: Inter 500 14px / 1.5, values right-aligned; bold headers use 600\n- Period headers: 700 12px uppercase, right-aligned\n- Editing state: inner container has `border:1px solid #1c64f2; border-radius:4px`; outer has `border:1px solid #e5e7eb`\n- **check-circle icon** (APPROX — see JSDoc): Heroicons solid SVG approximation\n\n### QA notes\n- `Grey` and `Default` differ only in text colour (#6b7280 vs #111928) — verify at-a-glance legibility\n- `Blue` uniquely changes the cell background to `#ebf5ff` — other options inherit row bg\n- Editing state text reverts to `#111928` (not blue) — verify with designer intent\n- `$` currency symbol must match value text colour in every option\n- Bold header (600) vs regular (500): check visual weight difference in the type column story"}}},argTypes:{option:{control:"select",options:["default","grey","editable","blue","calculated","waste","indigo"],description:"Cell semantic colour. `blue` is the only option that also changes the cell background to `#ebf5ff`.",table:{category:"Appearance",defaultValue:{summary:"default"}}},rowType:{control:"select",options:["default","derival","total","non-collapsible"],description:"Row background shared by all cells in that row. `blue` option overrides this with `#ebf5ff`.",table:{category:"Appearance",defaultValue:{summary:"default"}}},amount:{control:"text",description:"Formatted numeric value. Use locale-appropriate formatting (e.g. `500,00` or `1,234.56`).",table:{category:"Content",defaultValue:{summary:"500,00"}}},currency:{control:"boolean",description:"Show `$` currency prefix to the left of the value.",table:{category:"Content",defaultValue:{summary:!0}}}},args:{option:"default",rowType:"default",amount:"500,00",currency:!0}},h={name:"Interactive (Controls)",parameters:{docs:{description:{story:"Configure a single cell with **option** (semantic colour), **rowType** (row background), **amount**, and **currency** Controls. The Blue option overrides rowType background with `#ebf5ff`."},source:{transform:(t,n)=>{const{option:e,rowType:i,amount:l,currency:o}=n.args,{textColor:a,cellBg:m}=r[e]||r.default;return`<div style="display:flex;align-items:center;justify-content:flex-end;gap:4px;
     width:146px;height:38px;padding:8px 16px;background:${m||y[i]||"#ffffff"};box-sizing:border-box;">
  ${o?`<span style="font-family:inherit;font-size:var(--text-sm);font-weight:var(--font-medium);line-height:1.5;color:${a};flex-shrink:0;">$</span>`:""}
  <span style="font-family:inherit;font-size:var(--text-sm);font-weight:var(--font-medium);line-height:1.5;color:${a};text-align:right;">${l}</span>
</div>`}}}},render:({option:t,rowType:n,amount:e,currency:i})=>{const{textColor:l,cellBg:o}=r[t]||r.default,a=o||y[n]||"#ffffff";return u({amount:e,currency:i,textColor:l,bg:a})}},f={name:"Cell options — all variants",args:{rowType:"default"},parameters:{controls:{include:["rowType"]},docs:{description:{story:"All 7 `option` variants. Use the **rowType** control to preview how each option looks on different row backgrounds. Note: `Blue` always uses its own `#ebf5ff` background regardless of rowType."},source:{language:"html",code:`<!-- Default option -->
<div style="display:flex;align-items:center;justify-content:flex-end;gap:4px;
            width:146px;height:38px;padding:8px 16px;background:var(--color-bg-surface);box-sizing:border-box;">
  <span style="font-family:inherit;font-size:var(--text-sm);font-weight:var(--font-medium);line-height:1.5;color:#111928;flex-shrink:0;">$</span>
  <span style="font-family:inherit;font-size:var(--text-sm);font-weight:var(--font-medium);line-height:1.5;color:#111928;text-align:right;">500,00</span>
</div>

<!-- Blue option — cell bg + text both blue -->
<div style="display:flex;align-items:center;justify-content:flex-end;gap:4px;
            width:146px;height:38px;padding:8px 16px;background:#ebf5ff;box-sizing:border-box;">
  <span style="font-family:inherit;font-size:var(--text-sm);font-weight:var(--font-medium);line-height:1.5;color:#1c64f2;flex-shrink:0;">$</span>
  <span style="font-family:inherit;font-size:var(--text-sm);font-weight:var(--font-medium);line-height:1.5;color:#1c64f2;text-align:right;">500,00</span>
</div>

<!-- Calculated option -->
<div style="display:flex;align-items:center;justify-content:flex-end;gap:4px;
            width:146px;height:38px;padding:8px 16px;background:var(--color-bg-surface);box-sizing:border-box;">
  <span style="font-family:inherit;font-size:var(--text-sm);font-weight:var(--font-medium);line-height:1.5;color:#0e9f6e;flex-shrink:0;">$</span>
  <span style="font-family:inherit;font-size:var(--text-sm);font-weight:var(--font-medium);line-height:1.5;color:#0e9f6e;text-align:right;">500,00</span>
</div>`}}},render:({rowType:t})=>{const n=y[t]||"#ffffff";return`
      <div style="display:inline-flex;flex-direction:column;gap:1px;">
        ${[{label:"Default",key:"default"},{label:"Grey",key:"grey"},{label:"Editable",key:"editable"},{label:"Blue",key:"blue"},{label:"Calculated",key:"calculated"},{label:"Waste",key:"waste"},{label:"Indigo",key:"indigo"}].map(({label:i,key:l})=>{const{textColor:o,cellBg:a}=r[l],m=a||n;return`
            <div style="display:flex;align-items:center;">
              ${s(i)}
              ${u({textColor:o,bg:m})}
            </div>`}).join("")}
      </div>`}},d={name:"Cell × row type backgrounds",args:{option:"default"},parameters:{controls:{include:["option"]},docs:{description:{story:"All 4 row backgrounds with the same cell. Use the **option** control to see how different semantic colours look across each row type."},source:{code:`<!-- Default row -->
<div style="background:#ffffff;width:146px;height:38px;padding:8px 16px;box-sizing:border-box;display:flex;align-items:center;justify-content:flex-end;gap:4px;">
  <span style="font-family:inherit;font-size:var(--text-sm);font-weight:var(--font-medium);line-height:1.5;color:#111928;">$</span>
  <span style="font-family:inherit;font-size:var(--text-sm);font-weight:var(--font-medium);line-height:1.5;color:#111928;text-align:right;">500,00</span>
</div>
<!-- Derival row -->
<div style="background:#fff8f1;…">…</div>
<!-- Total row -->
<div style="background:var(--color-bg-muted);…">…</div>
<!-- Non-collapsible row -->
<div style="background:var(--color-bg-default);…">…</div>`,language:"html"}}},render:({option:t})=>{const{textColor:n,cellBg:e}=r[t]||r.default;return`
      <div style="display:inline-flex;flex-direction:column;gap:1px;">
        ${[{label:"Default",bg:"#ffffff"},{label:"Derival",bg:"#fff8f1"},{label:"Total",bg:"#f3f4f6"},{label:"Non-collapsible",bg:"#f9fafb"}].map(({label:l,bg:o})=>`
          <div style="display:flex;align-items:center;">
            ${s(l)}
            ${u({textColor:n,bg:e||o})}
          </div>`).join("")}
      </div>`}},c={name:"Editable — not-editing vs editing",parameters:{docs:{description:{story:"Editable option in both states. In `editing=true` state the focus ring is `#1c64f2`; text reverts to `#111928` (not blue)."},source:{language:"html",code:`<!-- Editable, editing=true (focused state) -->
<div style="display:flex;align-items:center;width:146px;height:38px;
            background:var(--color-bg-surface);border:1px solid #e5e7eb;box-sizing:border-box;">
  <div style="flex:1;display:flex;align-items:center;justify-content:flex-end;
              border:1px solid #1c64f2;border-radius:4px;
              padding:8px 16px;overflow:hidden;box-sizing:border-box;">
    <span style="font-family:inherit;font-size:var(--text-sm);font-weight:var(--font-medium);line-height:1.5;color:#111928;text-align:right;">
      500,00|
    </span>
  </div>
</div>`}}},render:()=>`
    <div style="display:inline-flex;flex-direction:column;gap:1px;">
      <div style="display:flex;align-items:center;">
        ${s("Editable (not editing)")}
        ${u({textColor:"#1c64f2"})}
      </div>
      <div style="display:flex;align-items:center;">
        ${s("Editable (editing=true)")}
        ${re()}
      </div>
    </div>`},p={name:"Cell with caption (secondary line)",parameters:{docs:{description:{story:"Optional `showCaption` adds a secondary `12px` line below the value. Caption colour is always `#6b7280` regardless of option."},source:{language:"html",code:`<!-- Cell with caption — Default option -->
<div style="display:flex;align-items:center;justify-content:flex-end;gap:4px;
            width:146px;height:38px;padding:8px 16px;background:var(--color-bg-surface);box-sizing:border-box;">
  <span style="font-family:inherit;font-size:var(--text-sm);font-weight:var(--font-medium);line-height:1.5;color:#111928;flex-shrink:0;">$</span>
  <div style="flex:1 0 0;display:flex;flex-direction:column;align-items:flex-end;
              justify-content:center;min-width:1px;">
    <span style="font-family:inherit;font-size:var(--text-sm);font-weight:var(--font-medium);line-height:1.5;color:#111928;text-align:right;">500,00</span>
    <span style="font-family:inherit;font-size:var(--text-xs);font-weight:var(--font-normal);line-height:1.5;color:var(--color-text-secondary);text-align:right;">500,00</span>
  </div>
</div>`}}},render:()=>`
    <div style="display:inline-flex;flex-direction:column;gap:1px;">
      ${[{label:"Default + caption",color:"#111928",bg:"#ffffff"},{label:"Calculated + caption",color:"#0e9f6e",bg:"#ffffff"},{label:"Waste + caption",color:"#e74694",bg:"#ffffff"},{label:"Indigo + caption",color:"#42389d",bg:"#ffffff"}].map(({label:t,color:n,bg:e})=>`
        <div style="display:flex;align-items:center;">
          ${s(t)}
          ${u({textColor:n,bg:e,caption:"500,00"})}
        </div>`).join("")}
    </div>`},g={name:"Column headers (horizontal) — all types",parameters:{docs:{description:{story:`All 8 **TableHeaderHorizontal** type variants in regular (500) and bold (600).
Column category (Income / Disbursements / Expand / Union) is communicated through background + text colour.`},source:{language:"html",code:`<!-- Income — regular -->
<div style="display:flex;align-items:center;justify-content:flex-end;gap:4px;
            width:146px;height:38px;padding:8px 16px;background:#f3faf7;box-sizing:border-box;">
  <span style="font-family:inherit;font-size:var(--text-sm);font-weight:var(--font-medium);line-height:1.5;color:#057a55;flex:1 0 0;">Income</span>
</div>

<!-- Income — bold -->
<div style="display:flex;align-items:center;justify-content:flex-end;gap:4px;
            width:146px;height:38px;padding:8px 16px;background:#f3faf7;box-sizing:border-box;">
  <span style="font-family:inherit;font-size:var(--text-sm);font-weight:var(--font-semibold);line-height:1.5;color:#057a55;flex:1 0 0;">Income</span>
</div>`}}},render:()=>{const t=[{label:"Default",bg:"#ffffff",color:"#111928"},{label:"Derival",bg:"#fff8f1",color:"#111928"},{label:"Total",bg:"#f3f4f6",color:"#111928"},{label:"Union",bg:"#f3f4f6",color:"#42389d"},{label:"NonCollapsible",bg:"#f9fafb",color:"#111928"},{label:"Expand",bg:"#edebfe",color:"#42389d"},{label:"Income",bg:"#f3faf7",color:"#057a55"},{label:"Disbursements",bg:"#fdf2f2",color:"#e02424"}];return`
      <div style="display:flex;gap:40px;align-items:flex-start;">
        <div>
          ${C("Regular (500)")}
          <div style="display:inline-flex;flex-direction:column;gap:1px;">
            ${t.map(({label:n,bg:e,color:i})=>`
              <div style="display:flex;align-items:center;">
                ${s(n)}
                ${w({text:n,bg:e,color:i,bold:!1})}
              </div>`).join("")}
          </div>
        </div>
        <div>
          ${C("Bold (600)")}
          <div style="display:inline-flex;flex-direction:column;gap:1px;">
            ${t.map(({label:n,bg:e,color:i})=>`
              <div style="display:flex;align-items:center;">
                ${s(n)}
                ${w({text:n,bg:e,color:i,bold:!0})}
              </div>`).join("")}
          </div>
        </div>
      </div>`}},x={name:"Period headers (vertical) — all types",parameters:{docs:{description:{story:"**TableHeaderVertical** — column headers for time-period columns (e.g. months in a cohort or budget table).\nACTUALS use brand/200 (`#cddbfe`); FORECAST use teal/200 (`#96f7e4`)."},source:{language:"html",code:`<!-- ACTUALS period header -->
<div style="display:flex;align-items:center;justify-content:flex-end;gap:4px;
            width:146px;height:38px;padding:8px 16px;background:#cddbfe;box-sizing:border-box;">
  <span style="font-family:inherit;font-size:var(--text-xs);font-weight:var(--font-bold);line-height:1.5;color:#4b5563;
               flex:1 0 0;text-align:right;">ACTUALS</span>
</div>`}}},render:()=>`
      <div style="display:flex;gap:12px;align-items:flex-end;">
        ${[{label:"Default",bg:"#f9fafb",color:"#6b7280",text:"LABEL"},{label:"ACTUALS",bg:"#cddbfe",color:"#4b5563",text:"ACTUALS"},{label:"FORECAST",bg:"#96f7e4",color:"#4b5563",text:"FORECAST"}].map(({label:n,bg:e,color:i,text:l})=>`
          <div>
            <p style="font-family:inherit;font-size:10px;font-weight:var(--font-semibold);line-height:1;text-transform:uppercase;
                      letter-spacing:.08em;color:#9ca3af;margin:0 0 6px;text-align:center;">
              ${n}
            </p>
            ${se({label:l,bg:e,color:i})}
          </div>`).join("")}
      </div>`},b={name:"Cell percent — badge ramp",parameters:{docs:{description:{story:"Percentage badge cell (node 9372:85). A 10-step brand ramp badge used\nin cohort/heatmap table columns. Text flips from dark to white at 60%.\nShown on both `white` (default) and `grey` (#f3f4f6) cell backgrounds."},source:{language:"html",code:`<!-- TableCellPercent — 60% on white cell bg -->
<div style="display:flex;flex-direction:column;align-items:flex-start;
            padding:8px 4px;background:#ffffff;box-sizing:border-box;">
  <div style="display:flex;align-items:center;justify-content:center;
              width:62px;height:42px;padding:10px;border-radius:4px;
              background:#6875f5;box-sizing:border-box;">
    <span style="font-family:inherit;font-size:var(--text-xs);font-weight:var(--font-semibold);line-height:1.5;color:#ffffff;
                 white-space:nowrap;text-align:center;">60%</span>
  </div>
</div>

<!-- TableCellPercent — 40% on grey cell bg (white=false) -->
<div style="display:flex;flex-direction:column;align-items:flex-start;
            padding:8px 4px;background:var(--color-bg-muted);box-sizing:border-box;">
  <div style="display:flex;align-items:center;justify-content:center;
              width:62px;height:42px;padding:10px;border-radius:4px;
              background:#b4c6fc;box-sizing:border-box;">
    <span style="font-family:inherit;font-size:var(--text-xs);font-weight:var(--font-semibold);line-height:1.5;color:#111928;
                 white-space:nowrap;text-align:center;">40%</span>
  </div>
</div>`}}},render:()=>{const t=[{pct:"100%",bg:"#362f78",text:"#ffffff"},{pct:"90%",bg:"#42389d",text:"#ffffff"},{pct:"80%",bg:"#5145cd",text:"#ffffff"},{pct:"70%",bg:"#5850ec",text:"#ffffff"},{pct:"60%",bg:"#6875f5",text:"#ffffff"},{pct:"50%",bg:"#8da2fb",text:"#111928"},{pct:"40%",bg:"#b4c6fc",text:"#111928"},{pct:"30%",bg:"#cddbfe",text:"#111928"},{pct:"20%",bg:"#e5edff",text:"#111928"},{pct:"10%",bg:"#f0f5ff",text:"#111928"}],n=({pct:i,bg:l,text:o,cellBg:a})=>`
      <div style="display:flex;flex-direction:column;align-items:flex-start;
                  padding:8px 4px;background:${a};box-sizing:border-box;flex-shrink:0;">
        <div style="display:flex;align-items:center;justify-content:center;
                    width:62px;height:42px;padding:10px;border-radius:4px;
                    background:${l};box-sizing:border-box;">
          <span style="font-family:inherit;font-size:var(--text-xs);font-weight:var(--font-semibold);line-height:1.5;color:${o};
                       white-space:nowrap;text-align:center;">${i}</span>
        </div>
      </div>`,e=(i,l)=>`
      <div>
        <p style="font-family:inherit;font-size:10px;font-weight:var(--font-semibold);line-height:1;text-transform:uppercase;
                  letter-spacing:.08em;color:#9ca3af;margin:0 0 6px;">
          ${l}
        </p>
        <div style="display:inline-flex;align-items:center;
                    border:1px solid #e5e7eb;border-radius:6px;overflow:hidden;">
          ${t.map(o=>n({...o,cellBg:i})).join("")}
        </div>
      </div>`;return`
      <div style="display:flex;flex-direction:column;gap:20px;">
        ${e("#ffffff","white = true (default)")}
        ${e("#f3f4f6","white = false (grey cell bg)")}
      </div>`}};var k,T,$;h.parameters={...h.parameters,docs:{...(k=h.parameters)==null?void 0:k.docs,source:{originalSource:`{
  name: 'Interactive (Controls)',
  parameters: {
    docs: {
      description: {
        story: 'Configure a single cell with **option** (semantic colour), **rowType** (row background), **amount**, and **currency** Controls. The Blue option overrides rowType background with \`#ebf5ff\`.'
      },
      source: {
        transform: (_src, storyCtx) => {
          const {
            option,
            rowType,
            amount,
            currency
          } = storyCtx.args;
          const {
            textColor,
            cellBg
          } = OPTION_COLORS[option] || OPTION_COLORS.default;
          const bg = cellBg || ROW_BG[rowType] || '#ffffff';
          return \`<div style="display:flex;align-items:center;justify-content:flex-end;gap:4px;
     width:146px;height:38px;padding:8px 16px;background:\${bg};box-sizing:border-box;">
  \${currency ? \`<span style="font-family:inherit;font-size:var(--text-sm);font-weight:var(--font-medium);line-height:1.5;color:\${textColor};flex-shrink:0;">$</span>\` : ''}
  <span style="font-family:inherit;font-size:var(--text-sm);font-weight:var(--font-medium);line-height:1.5;color:\${textColor};text-align:right;">\${amount}</span>
</div>\`;
        }
      }
    }
  },
  render: ({
    option,
    rowType,
    amount,
    currency
  }) => {
    const {
      textColor,
      cellBg
    } = OPTION_COLORS[option] || OPTION_COLORS.default;
    const bg = cellBg || ROW_BG[rowType] || '#ffffff';
    return dataCell({
      amount,
      currency,
      textColor,
      bg
    });
  }
}`,...($=(T=h.parameters)==null?void 0:T.docs)==null?void 0:$.source}}};var z,O,A,B,S;f.parameters={...f.parameters,docs:{...(z=f.parameters)==null?void 0:z.docs,source:{originalSource:`{
  name: 'Cell options — all variants',
  args: {
    rowType: 'default'
  },
  parameters: {
    controls: {
      include: ['rowType']
    },
    docs: {
      description: {
        story: 'All 7 \`option\` variants. Use the **rowType** control to preview how each option looks on different row backgrounds. Note: \`Blue\` always uses its own \`#ebf5ff\` background regardless of rowType.'
      },
      source: {
        language: 'html',
        code: \`<!-- Default option -->
<div style="display:flex;align-items:center;justify-content:flex-end;gap:4px;
            width:146px;height:38px;padding:8px 16px;background:var(--color-bg-surface);box-sizing:border-box;">
  <span style="font-family:inherit;font-size:var(--text-sm);font-weight:var(--font-medium);line-height:1.5;color:#111928;flex-shrink:0;">$</span>
  <span style="font-family:inherit;font-size:var(--text-sm);font-weight:var(--font-medium);line-height:1.5;color:#111928;text-align:right;">500,00</span>
</div>

<!-- Blue option — cell bg + text both blue -->
<div style="display:flex;align-items:center;justify-content:flex-end;gap:4px;
            width:146px;height:38px;padding:8px 16px;background:#ebf5ff;box-sizing:border-box;">
  <span style="font-family:inherit;font-size:var(--text-sm);font-weight:var(--font-medium);line-height:1.5;color:#1c64f2;flex-shrink:0;">$</span>
  <span style="font-family:inherit;font-size:var(--text-sm);font-weight:var(--font-medium);line-height:1.5;color:#1c64f2;text-align:right;">500,00</span>
</div>

<!-- Calculated option -->
<div style="display:flex;align-items:center;justify-content:flex-end;gap:4px;
            width:146px;height:38px;padding:8px 16px;background:var(--color-bg-surface);box-sizing:border-box;">
  <span style="font-family:inherit;font-size:var(--text-sm);font-weight:var(--font-medium);line-height:1.5;color:#0e9f6e;flex-shrink:0;">$</span>
  <span style="font-family:inherit;font-size:var(--text-sm);font-weight:var(--font-medium);line-height:1.5;color:#0e9f6e;text-align:right;">500,00</span>
</div>\`
      }
    }
  },
  render: ({
    rowType
  }) => {
    const rowBg = ROW_BG[rowType] || '#ffffff';
    const OPTIONS = [{
      label: 'Default',
      key: 'default'
    }, {
      label: 'Grey',
      key: 'grey'
    }, {
      label: 'Editable',
      key: 'editable'
    }, {
      label: 'Blue',
      key: 'blue'
    }, {
      label: 'Calculated',
      key: 'calculated'
    }, {
      label: 'Waste',
      key: 'waste'
    }, {
      label: 'Indigo',
      key: 'indigo'
    }];
    return /* html */\`
      <div style="display:inline-flex;flex-direction:column;gap:1px;">
        \${OPTIONS.map(({
      label,
      key
    }) => {
      const {
        textColor,
        cellBg
      } = OPTION_COLORS[key];
      const bg = cellBg || rowBg;
      return /* html */\`
            <div style="display:flex;align-items:center;">
              \${rowLabel(label)}
              \${dataCell({
        textColor,
        bg
      })}
            </div>\`;
    }).join('')}
      </div>\`;
  }
}`,...(A=(O=f.parameters)==null?void 0:O.docs)==null?void 0:A.source},description:{story:`All 7 \`option\` variants of TableCell on a Default (white) row background.

**QA checklist**
- Default: #111928 — visually dominant black
- Grey: #6b7280 — clearly softer than Default, same bg
- Editable: #1c64f2 blue, still white bg (no edit ring)
- Blue: #1c64f2 text + #ebf5ff bg — both $ and value are blue
- Calculated: #0e9f6e green
- Waste: #e74694 pink/magenta
- Indigo: #42389d dark brand purple
- $ symbol colour must match value colour in every row`,...(S=(B=f.parameters)==null?void 0:B.docs)==null?void 0:S.description}}};var E,D,j,P,I;d.parameters={...d.parameters,docs:{...(E=d.parameters)==null?void 0:E.docs,source:{originalSource:`{
  name: 'Cell × row type backgrounds',
  args: {
    option: 'default'
  },
  parameters: {
    controls: {
      include: ['option']
    },
    docs: {
      description: {
        story: 'All 4 row backgrounds with the same cell. Use the **option** control to see how different semantic colours look across each row type.'
      },
      source: {
        code: \`<!-- Default row -->
<div style="background:#ffffff;width:146px;height:38px;padding:8px 16px;box-sizing:border-box;display:flex;align-items:center;justify-content:flex-end;gap:4px;">
  <span style="font-family:inherit;font-size:var(--text-sm);font-weight:var(--font-medium);line-height:1.5;color:#111928;">$</span>
  <span style="font-family:inherit;font-size:var(--text-sm);font-weight:var(--font-medium);line-height:1.5;color:#111928;text-align:right;">500,00</span>
</div>
<!-- Derival row -->
<div style="background:#fff8f1;…">…</div>
<!-- Total row -->
<div style="background:var(--color-bg-muted);…">…</div>
<!-- Non-collapsible row -->
<div style="background:var(--color-bg-default);…">…</div>\`,
        language: 'html'
      }
    }
  },
  render: ({
    option
  }) => {
    const {
      textColor,
      cellBg
    } = OPTION_COLORS[option] || OPTION_COLORS.default;
    const ROW_TYPES = [{
      label: 'Default',
      bg: '#ffffff'
    }, {
      label: 'Derival',
      bg: '#fff8f1'
    }, {
      label: 'Total',
      bg: '#f3f4f6'
    }, {
      label: 'Non-collapsible',
      bg: '#f9fafb'
    }];
    return /* html */\`
      <div style="display:inline-flex;flex-direction:column;gap:1px;">
        \${ROW_TYPES.map(({
      label,
      bg
    }) => /* html */\`
          <div style="display:flex;align-items:center;">
            \${rowLabel(label)}
            \${dataCell({
      textColor,
      bg: cellBg || bg
    })}
          </div>\`).join('')}
      </div>\`;
  }
}`,...(j=(D=d.parameters)==null?void 0:D.docs)==null?void 0:j.source},description:{story:`Default option cell across all 4 row type backgrounds.
The row background is the only difference — cell layout is identical.

**QA checklist**
- Default (white): pure #ffffff
- Derival: warm cream #fff8f1 — subtle orange tint
- Total: cool light gray #f3f4f6
- NonCollapsible: near-white #f9fafb — barely distinguishable from white in isolation`,...(I=(P=d.parameters)==null?void 0:P.docs)==null?void 0:I.description}}};var L,R,H,N,U;c.parameters={...c.parameters,docs:{...(L=c.parameters)==null?void 0:L.docs,source:{originalSource:`{
  name: 'Editable — not-editing vs editing',
  parameters: {
    docs: {
      description: {
        story: 'Editable option in both states. In \`editing=true\` state the focus ring is \`#1c64f2\`; text reverts to \`#111928\` (not blue).'
      },
      source: {
        language: 'html',
        code: \`<!-- Editable, editing=true (focused state) -->
<div style="display:flex;align-items:center;width:146px;height:38px;
            background:var(--color-bg-surface);border:1px solid #e5e7eb;box-sizing:border-box;">
  <div style="flex:1;display:flex;align-items:center;justify-content:flex-end;
              border:1px solid #1c64f2;border-radius:4px;
              padding:8px 16px;overflow:hidden;box-sizing:border-box;">
    <span style="font-family:inherit;font-size:var(--text-sm);font-weight:var(--font-medium);line-height:1.5;color:#111928;text-align:right;">
      500,00|
    </span>
  </div>
</div>\`
      }
    }
  },
  render: () => /* html */\`
    <div style="display:inline-flex;flex-direction:column;gap:1px;">
      <div style="display:flex;align-items:center;">
        \${rowLabel('Editable (not editing)')}
        \${dataCell({
    textColor: '#1c64f2'
  })}
      </div>
      <div style="display:flex;align-items:center;">
        \${rowLabel('Editable (editing=true)')}
        \${editableCell()}
      </div>
    </div>\`
}`,...(H=(R=c.parameters)==null?void 0:R.docs)==null?void 0:H.source},description:{story:`Comparison of Editable option: not-editing vs editing.

Editing state (editing=true):
- Outer container: 1px solid #e5e7eb
- Inner focus ring: 1px solid #1c64f2, border-radius 4px
- Text: #111928 (reverts to primary — not blue)
- Cursor character \`|\` appended to value

**QA checklist**
- Not-editing: blue text (#1c64f2) on white, no outline
- Editing: double border (outer gray + inner blue ring), text reverts to #111928
- Both cells: 146px wide, 38px tall`,...(U=(N=c.parameters)==null?void 0:N.docs)==null?void 0:U.description}}};var _,W,F,V,G;p.parameters={...p.parameters,docs:{...(_=p.parameters)==null?void 0:_.docs,source:{originalSource:`{
  name: 'Cell with caption (secondary line)',
  parameters: {
    docs: {
      description: {
        story: 'Optional \`showCaption\` adds a secondary \`12px\` line below the value. Caption colour is always \`#6b7280\` regardless of option.'
      },
      source: {
        language: 'html',
        code: \`<!-- Cell with caption — Default option -->
<div style="display:flex;align-items:center;justify-content:flex-end;gap:4px;
            width:146px;height:38px;padding:8px 16px;background:var(--color-bg-surface);box-sizing:border-box;">
  <span style="font-family:inherit;font-size:var(--text-sm);font-weight:var(--font-medium);line-height:1.5;color:#111928;flex-shrink:0;">$</span>
  <div style="flex:1 0 0;display:flex;flex-direction:column;align-items:flex-end;
              justify-content:center;min-width:1px;">
    <span style="font-family:inherit;font-size:var(--text-sm);font-weight:var(--font-medium);line-height:1.5;color:#111928;text-align:right;">500,00</span>
    <span style="font-family:inherit;font-size:var(--text-xs);font-weight:var(--font-normal);line-height:1.5;color:var(--color-text-secondary);text-align:right;">500,00</span>
  </div>
</div>\`
      }
    }
  },
  render: () => /* html */\`
    <div style="display:inline-flex;flex-direction:column;gap:1px;">
      \${[{
    label: 'Default + caption',
    color: '#111928',
    bg: '#ffffff'
  }, {
    label: 'Calculated + caption',
    color: '#0e9f6e',
    bg: '#ffffff'
  }, {
    label: 'Waste + caption',
    color: '#e74694',
    bg: '#ffffff'
  }, {
    label: 'Indigo + caption',
    color: '#42389d',
    bg: '#ffffff'
  }].map(({
    label,
    color,
    bg
  }) => /* html */\`
        <div style="display:flex;align-items:center;">
          \${rowLabel(label)}
          \${dataCell({
    textColor: color,
    bg,
    caption: '500,00'
  })}
        </div>\`).join('')}
    </div>\`
}`,...(F=(W=p.parameters)==null?void 0:W.docs)==null?void 0:F.source},description:{story:`Optional \`showCaption\` adds a secondary 12px line below the main value.
Caption is always #6b7280 regardless of option colour.
Available on: Default, Grey, Calculated, Waste, Indigo.
Not available on Editable or Blue.

**QA checklist**
- Caption font: Inter 400 12px / 1.5, colour #6b7280
- Both lines right-aligned
- Cell height remains 38px — content clips if needed
- Caption text is independent from option colour`,...(G=(V=p.parameters)==null?void 0:V.docs)==null?void 0:G.description}}};var Y,Q,M,q,J;g.parameters={...g.parameters,docs:{...(Y=g.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  name: 'Column headers (horizontal) — all types',
  parameters: {
    docs: {
      description: {
        story: \`All 8 **TableHeaderHorizontal** type variants in regular (500) and bold (600).
Column category (Income / Disbursements / Expand / Union) is communicated through background + text colour.\`
      },
      source: {
        language: 'html',
        code: \`<!-- Income — regular -->
<div style="display:flex;align-items:center;justify-content:flex-end;gap:4px;
            width:146px;height:38px;padding:8px 16px;background:#f3faf7;box-sizing:border-box;">
  <span style="font-family:inherit;font-size:var(--text-sm);font-weight:var(--font-medium);line-height:1.5;color:#057a55;flex:1 0 0;">Income</span>
</div>

<!-- Income — bold -->
<div style="display:flex;align-items:center;justify-content:flex-end;gap:4px;
            width:146px;height:38px;padding:8px 16px;background:#f3faf7;box-sizing:border-box;">
  <span style="font-family:inherit;font-size:var(--text-sm);font-weight:var(--font-semibold);line-height:1.5;color:#057a55;flex:1 0 0;">Income</span>
</div>\`
      }
    }
  },
  render: () => {
    const TYPES = [{
      label: 'Default',
      bg: '#ffffff',
      color: '#111928'
    }, {
      label: 'Derival',
      bg: '#fff8f1',
      color: '#111928'
    }, {
      label: 'Total',
      bg: '#f3f4f6',
      color: '#111928'
    }, {
      label: 'Union',
      bg: '#f3f4f6',
      color: '#42389d'
    }, {
      label: 'NonCollapsible',
      bg: '#f9fafb',
      color: '#111928'
    }, {
      label: 'Expand',
      bg: '#edebfe',
      color: '#42389d'
    }, {
      label: 'Income',
      bg: '#f3faf7',
      color: '#057a55'
    }, {
      label: 'Disbursements',
      bg: '#fdf2f2',
      color: '#e02424'
    }];
    return /* html */\`
      <div style="display:flex;gap:40px;align-items:flex-start;">
        <div>
          \${sectionHead('Regular (500)')}
          <div style="display:inline-flex;flex-direction:column;gap:1px;">
            \${TYPES.map(({
      label,
      bg,
      color
    }) => /* html */\`
              <div style="display:flex;align-items:center;">
                \${rowLabel(label)}
                \${hHeader({
      text: label,
      bg,
      color,
      bold: false
    })}
              </div>\`).join('')}
          </div>
        </div>
        <div>
          \${sectionHead('Bold (600)')}
          <div style="display:inline-flex;flex-direction:column;gap:1px;">
            \${TYPES.map(({
      label,
      bg,
      color
    }) => /* html */\`
              <div style="display:flex;align-items:center;">
                \${rowLabel(label)}
                \${hHeader({
      text: label,
      bg,
      color,
      bold: true
    })}
              </div>\`).join('')}
          </div>
        </div>
      </div>\`;
  }
}`,...(M=(Q=g.parameters)==null?void 0:Q.docs)==null?void 0:M.source},description:{story:`All 8 TableHeaderHorizontal types in regular (500) and bold (600) variants.
Column category is encoded in background + text colour.

**QA checklist**
- Default: white bg, #111928 — neutral
- Derival: #fff8f1 warm tint, #111928
- Total: #f3f4f6 gray, #111928
- Union: #f3f4f6 gray, #42389d brand purple (same bg as Total, different text)
- NonCollapsible: #f9fafb near-white, #111928
- Expand: #edebfe purple/100, #42389d — bright purple column
- Income: #f3faf7 green/50, #057a55 — green category
- Disbursements: #fdf2f2 red/50, #e02424 — red category
- Bold (600) vs regular (500): weight difference must be visible at 14px`,...(J=(q=g.parameters)==null?void 0:q.docs)==null?void 0:J.description}}};var K,X,Z,ee,ne;x.parameters={...x.parameters,docs:{...(K=x.parameters)==null?void 0:K.docs,source:{originalSource:`{
  name: 'Period headers (vertical) — all types',
  parameters: {
    docs: {
      description: {
        story: \`**TableHeaderVertical** — column headers for time-period columns (e.g. months in a cohort or budget table).
ACTUALS use brand/200 (\\\`#cddbfe\\\`); FORECAST use teal/200 (\\\`#96f7e4\\\`).\`
      },
      source: {
        language: 'html',
        code: \`<!-- ACTUALS period header -->
<div style="display:flex;align-items:center;justify-content:flex-end;gap:4px;
            width:146px;height:38px;padding:8px 16px;background:#cddbfe;box-sizing:border-box;">
  <span style="font-family:inherit;font-size:var(--text-xs);font-weight:var(--font-bold);line-height:1.5;color:#4b5563;
               flex:1 0 0;text-align:right;">ACTUALS</span>
</div>\`
      }
    }
  },
  render: () => {
    const TYPES = [{
      label: 'Default',
      bg: '#f9fafb',
      color: '#6b7280',
      text: 'LABEL'
    }, {
      label: 'ACTUALS',
      bg: '#cddbfe',
      color: '#4b5563',
      text: 'ACTUALS'
    }, {
      label: 'FORECAST',
      bg: '#96f7e4',
      color: '#4b5563',
      text: 'FORECAST'
    }];
    return /* html */\`
      <div style="display:flex;gap:12px;align-items:flex-end;">
        \${TYPES.map(({
      label,
      bg,
      color,
      text
    }) => /* html */\`
          <div>
            <p style="font-family:inherit;font-size:10px;font-weight:var(--font-semibold);line-height:1;text-transform:uppercase;
                      letter-spacing:.08em;color:#9ca3af;margin:0 0 6px;text-align:center;">
              \${label}
            </p>
            \${vHeader({
      label: text,
      bg,
      color
    })}
          </div>\`).join('')}
      </div>\`;
  }
}`,...(Z=(X=x.parameters)==null?void 0:X.docs)==null?void 0:Z.source},description:{story:`TableHeaderVertical — period column headers for time-series tables.
Font: Inter 700 12px uppercase, right-aligned (distinct from data cell font).

**QA checklist**
- Default: #f9fafb bg, #6b7280 gray text, "LABEL"
- ACTUALS: #cddbfe (brand/200 blue) bg, #4b5563 darker text
- FORECAST: #96f7e4 (teal/200) bg, #4b5563 darker text
- Font is 12px bold uppercase — NOT 14px medium like data cells
- Text is right-aligned (unlike horizontal headers which are left-aligned)`,...(ne=(ee=x.parameters)==null?void 0:ee.docs)==null?void 0:ne.description}}};var te,ie,le,oe,ae;b.parameters={...b.parameters,docs:{...(te=b.parameters)==null?void 0:te.docs,source:{originalSource:`{
  name: 'Cell percent — badge ramp',
  parameters: {
    docs: {
      description: {
        story: \`Percentage badge cell (node 9372:85). A 10-step brand ramp badge used
in cohort/heatmap table columns. Text flips from dark to white at 60%.
Shown on both \\\`white\\\` (default) and \\\`grey\\\` (#f3f4f6) cell backgrounds.\`
      },
      source: {
        language: 'html',
        code: \`<!-- TableCellPercent — 60% on white cell bg -->
<div style="display:flex;flex-direction:column;align-items:flex-start;
            padding:8px 4px;background:#ffffff;box-sizing:border-box;">
  <div style="display:flex;align-items:center;justify-content:center;
              width:62px;height:42px;padding:10px;border-radius:4px;
              background:#6875f5;box-sizing:border-box;">
    <span style="font-family:inherit;font-size:var(--text-xs);font-weight:var(--font-semibold);line-height:1.5;color:#ffffff;
                 white-space:nowrap;text-align:center;">60%</span>
  </div>
</div>

<!-- TableCellPercent — 40% on grey cell bg (white=false) -->
<div style="display:flex;flex-direction:column;align-items:flex-start;
            padding:8px 4px;background:var(--color-bg-muted);box-sizing:border-box;">
  <div style="display:flex;align-items:center;justify-content:center;
              width:62px;height:42px;padding:10px;border-radius:4px;
              background:#b4c6fc;box-sizing:border-box;">
    <span style="font-family:inherit;font-size:var(--text-xs);font-weight:var(--font-semibold);line-height:1.5;color:#111928;
                 white-space:nowrap;text-align:center;">40%</span>
  </div>
</div>\`
      }
    }
  },
  render: () => {
    /* Figma-exact 10-step ramp: percent → badge bg, text colour */
    const RAMP = [{
      pct: '100%',
      bg: '#362f78',
      text: '#ffffff'
    }, {
      pct: '90%',
      bg: '#42389d',
      text: '#ffffff'
    }, {
      pct: '80%',
      bg: '#5145cd',
      text: '#ffffff'
    }, {
      pct: '70%',
      bg: '#5850ec',
      text: '#ffffff'
    }, {
      pct: '60%',
      bg: '#6875f5',
      text: '#ffffff'
    }, {
      pct: '50%',
      bg: '#8da2fb',
      text: '#111928'
    }, {
      pct: '40%',
      bg: '#b4c6fc',
      text: '#111928'
    }, {
      pct: '30%',
      bg: '#cddbfe',
      text: '#111928'
    }, {
      pct: '20%',
      bg: '#e5edff',
      text: '#111928'
    }, {
      pct: '10%',
      bg: '#f0f5ff',
      text: '#111928'
    }];
    const badge = ({
      pct,
      bg,
      text,
      cellBg
    }) => /* html */\`
      <div style="display:flex;flex-direction:column;align-items:flex-start;
                  padding:8px 4px;background:\${cellBg};box-sizing:border-box;flex-shrink:0;">
        <div style="display:flex;align-items:center;justify-content:center;
                    width:62px;height:42px;padding:10px;border-radius:4px;
                    background:\${bg};box-sizing:border-box;">
          <span style="font-family:inherit;font-size:var(--text-xs);font-weight:var(--font-semibold);line-height:1.5;color:\${text};
                       white-space:nowrap;text-align:center;">\${pct}</span>
        </div>
      </div>\`;
    const row = (cellBg, label) => /* html */\`
      <div>
        <p style="font-family:inherit;font-size:10px;font-weight:var(--font-semibold);line-height:1;text-transform:uppercase;
                  letter-spacing:.08em;color:#9ca3af;margin:0 0 6px;">
          \${label}
        </p>
        <div style="display:inline-flex;align-items:center;
                    border:1px solid #e5e7eb;border-radius:6px;overflow:hidden;">
          \${RAMP.map(r => badge({
      ...r,
      cellBg
    })).join('')}
        </div>
      </div>\`;
    return /* html */\`
      <div style="display:flex;flex-direction:column;gap:20px;">
        \${row('#ffffff', 'white = true (default)')}
        \${row('#f3f4f6', 'white = false (grey cell bg)')}
      </div>\`;
  }
}`,...(le=(ie=b.parameters)==null?void 0:ie.docs)==null?void 0:le.source},description:{story:`Percentage badge cell used in cohort/heatmap columns.

Unlike standard data cells this cell does NOT show a currency value —
it shows a coloured badge whose background encodes the percentage on a
10-step brand ramp (brand/50 → brand/900).

## Props (Figma)
| Prop    | Values                              |
|---------|-------------------------------------|
| percent | "10" "20" "30" "40" "50" "60" "70" "80" "90" "100" |
| white   | true (cell bg #fff) · false (cell bg #f3f4f6) |
| hover   | "No" (only documented state)        |

## Badge colour ramp
| Percent | Badge bg  | Text    |
|---------|-----------|---------|
| 10%     | #f0f5ff   | #111928 |
| 20%     | #e5edff   | #111928 |
| 30%     | #cddbfe   | #111928 |
| 40%     | #b4c6fc   | #111928 |
| 50%     | #8da2fb   | #111928 |
| 60%     | #6875f5   | #ffffff |
| 70%     | #5850ec   | #ffffff |
| 80%     | #5145cd   | #ffffff |
| 90%     | #42389d   | #ffffff |
| 100%    | #362f78   | #ffffff |

Text flips from \`#111928\` → \`#ffffff\` at 60% (brand/500).

## Dimensions (Figma-exact)
Cell container: \`width:auto · padding:8px 4px\`
Badge: \`62×42px · border-radius:4px · padding:10px\`
Note: cell uses \`px:4px\` — tighter than the standard \`px:16px\` data cell.

**QA checklist**
- 10 steps, 10% → 100%, all badges present
- Text flips at exactly 60% — no step missed
- Badge: 62×42px, \`border-radius:4px\`
- Cell padding: 4px horizontal (not 16px)
- \`white=false\`: cell container bg = #f3f4f6; badge colours unchanged`,...(ae=(oe=b.parameters)==null?void 0:oe.docs)==null?void 0:ae.description}}};const ce=["Interactive","CellOptions","CellRowTypes","CellEditing","CellWithCaption","HeaderHorizontal","HeaderVertical","CellPercent"];export{c as CellEditing,f as CellOptions,b as CellPercent,d as CellRowTypes,p as CellWithCaption,g as HeaderHorizontal,x as HeaderVertical,h as Interactive,ce as __namedExportsOrder,de as default};
