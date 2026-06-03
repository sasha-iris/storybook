const M={title:"Iris Library/Button/Special",tags:["autodocs","stable"],parameters:{layout:"padded",backgrounds:{default:"light"},docs:{description:{component:`
Two compact utility button patterns used inside chart toolbars and data tables.

**Chart button** — \`.btn-chart\` — 24×24px, transparent bg, no border, icon-only
**Table button** — \`.btn-table\` — 28×28px, white bg, border + shadow, icon-only

\`\`\`html
<!-- Chart button -->
<button class="btn-chart" aria-label="Navigate">
  <!-- 16px arrow-right icon -->
</button>

<!-- Table button -->
<button class="btn-table" aria-label="Navigate">
  <!-- 12px arrow-right icon -->
</button>
\`\`\`

These are NOT general-purpose buttons — purpose-built for dense UI contexts.
      `}}},argTypes:{variant:{control:"select",options:["chart","table"],description:"Button type. `chart`: 24×24px, transparent bg, no border. `table`: 28×28px, white bg, border + shadow.",table:{category:"Appearance",defaultValue:{summary:"chart"}}},state:{control:"select",options:["default","hover","disabled"],description:"Render state. Hover and disabled are simulated via inline styles (not real CSS :hover).",table:{category:"State",defaultValue:{summary:"default"}}}},args:{variant:"chart",state:"default"}},a=(t=16)=>`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
  style="width:${t}px;height:${t}px;" aria-hidden="true">
  <path fill-rule="evenodd"
    d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414
    -1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
    clip-rule="evenodd"/>
</svg>`,U=({state:t="default"}={})=>`<button class="btn-chart"${t==="disabled"?" disabled":""} aria-label="Navigate" style="${t==="hover"?"background:var(--color-bg-tertiary,#f3f4f6);border-radius:9px;":""}">${a(16)}</button>`,z=({state:t="default"}={})=>`<button class="btn-table"${t==="disabled"?" disabled":""} aria-label="Navigate" style="${t==="hover"?"background:var(--color-bg-muted);box-shadow:0 10px 15px -3px rgba(0,0,0,.1),0 4px 6px rgba(0,0,0,.05);":""}">${a(12)}</button>`,d={name:"Interactive (Controls)",render:({variant:t,state:e})=>t==="chart"?U({state:e}):z({state:e}),parameters:{docs:{description:{story:"Use **variant** to switch between chart and table button. Use **state** to simulate default / hover / disabled."},source:{transform:(t,e)=>{const{variant:i,state:F}=e.args;return`<button class="${i==="chart"?"btn-chart":"btn-table"}" aria-label="Navigate"${F==="disabled"?" disabled":""}>
  <!-- ${i==="chart"?16:12}px arrow-right icon -->
</button>`}}}}},n={name:"Chart Button — states",args:{state:"default"},parameters:{controls:{include:["state"]},docs:{description:{story:`
Chart button (node 9705:152804) — 24×24px, transparent bg. Use **state** control to switch between Default / Hover / Disabled.

| State    | BG           | Icon color |
|---------|--------------|------------|
| Default  | transparent  | #374151    |
| Hover    | #f3f4f6      | #374151    |
| Disabled | transparent  | #D1D5DB    |
        `},source:{code:`<button class="btn-chart" aria-label="Navigate">
  <!-- 16px arrow-right icon -->
</button>`,language:"html"}}},render:({state:t})=>U({state:t})},r={name:"Chart Button — toolbar context",parameters:{controls:{disable:!0},docs:{description:{story:"All 3 states shown in a simulated chart toolbar wrapper."}}},render:()=>`
    <div style="display:inline-flex;border:1px solid var(--color-border-default);border-radius:8px;
                padding:4px;gap:2px;background:var(--color-bg-surface);">
      <button class="btn-chart" aria-label="Previous"
        style="transform:scaleX(-1);">${a(16)}</button>
      <button class="btn-chart" style="background:var(--color-bg-tertiary,#f3f4f6);border-radius:9px;"
        aria-label="Next (hovered)">${a(16)}</button>
      <button class="btn-chart" disabled aria-label="Disabled">${a(16)}</button>
    </div>
    <p style="margin-top:12px;font:11px/1.5 sans-serif;color:var(--color-text-secondary);">
      Default · Hover (simulated) · Disabled — shown in a chart toolbar wrapper
    </p>`},o={name:"Table Button — states",args:{state:"default"},parameters:{controls:{include:["state"]},docs:{description:{story:`
Table button (node 9287:163857) — 28×28px, always bordered. Use **state** control to switch states.

| State    | BG       | Shadow    | Icon     |
|---------|----------|-----------|----------|
| Default  | #ffffff  | shadow-sm | #374151  |
| Hover    | #f3f4f6  | shadow-lg | #374151  |
| Disabled | #f3f4f6  | none      | #D1D5DB  |

QA: Icon is **12px** (smaller than chart button's 16px).
        `},source:{code:`<button class="btn-table" aria-label="Navigate">
  <!-- 12px arrow-right icon -->
</button>`,language:"html"}}},render:({state:t})=>z({state:t})},s={name:"Table Button — table row context",parameters:{controls:{disable:!0},docs:{description:{story:"Button shown in a realistic data table row to verify sizing and shadow in context."}}},render:()=>`
    <table style="border-collapse:collapse;width:100%;max-width:600px;font-size:14px;">
      <thead>
        <tr style="border-bottom:2px solid var(--color-border-default);">
          <th style="text-align:left;padding:8px 12px;color:var(--color-text-secondary);font-weight:500;">Name</th>
          <th style="text-align:left;padding:8px 12px;color:var(--color-text-secondary);font-weight:500;">Status</th>
          <th style="text-align:left;padding:8px 12px;color:var(--color-text-secondary);font-weight:500;">Amount</th>
          <th style="padding:8px 12px;"></th>
        </tr>
      </thead>
      <tbody>
        ${[{name:"Alice Martin",status:"Active",amount:"$1,240"},{name:"Bob Chen",status:"Inactive",amount:"$890"},{name:"Carol Williams",status:"Active",amount:"$2,110"}].map(t=>`
          <tr style="border-bottom:1px solid var(--color-bg-muted);">
            <td style="padding:12px;">${t.name}</td>
            <td style="padding:12px;">${t.status}</td>
            <td style="padding:12px;">${t.amount}</td>
            <td style="padding:12px;text-align:right;">
              <button class="btn-table" aria-label="View ${t.name}">${a(12)}</button>
            </td>
          </tr>`).join("")}
      </tbody>
    </table>`},l={name:"Overview — Chart vs Table button",parameters:{controls:{disable:!0},docs:{description:{story:`
Both utility button types side-by-side for easy QA comparison.

| Property        | Chart Button | Table Button |
|----------------|-------------|-------------|
| Size            | 24×24px     | 28×28px     |
| Border          | none        | 1px #e5e7eb |
| Shadow          | none        | shadow-sm   |
| Border-radius   | 6px         | 6px         |
| Icon size       | 16px        | 12px        |
| Hover bg        | #f3f4f6     | #f3f4f6     |
| Disabled icon   | #D1D5DB     | #D1D5DB     |
      `}}},render:()=>`
    <div style="display:flex;flex-direction:column;gap:24px;">
      <div>
        <p style="font:11px/1 600 sans-serif;text-transform:uppercase;letter-spacing:.1em;
                  color:#9CA3AF;margin:0 0 10px;">Chart Button (node 9705:152804)</p>
        <div style="display:flex;gap:12px;align-items:center;">
          <button class="btn-chart" aria-label="Default">${a(16)}</button>
          <button class="btn-chart" style="background:var(--color-bg-tertiary,#f3f4f6);"
            aria-label="Hover">${a(16)}</button>
          <button class="btn-chart" disabled aria-label="Disabled">${a(16)}</button>
          <span style="font:11px/1 sans-serif;color:#9CA3AF;">Default · Hover · Disabled</span>
        </div>
      </div>
      <div>
        <p style="font:11px/1 600 sans-serif;text-transform:uppercase;letter-spacing:.1em;
                  color:#9CA3AF;margin:0 0 10px;">Table Button (node 9287:163857)</p>
        <div style="display:flex;gap:12px;align-items:center;">
          <button class="btn-table" aria-label="Default">${a(12)}</button>
          <button class="btn-table" style="background:var(--color-bg-muted);box-shadow:0 10px 15px -3px rgba(0,0,0,.1),0 4px 6px rgba(0,0,0,.05);"
            aria-label="Hover">${a(12)}</button>
          <button class="btn-table" disabled aria-label="Disabled">${a(12)}</button>
          <span style="font:11px/1 sans-serif;color:#9CA3AF;">Default · Hover · Disabled</span>
        </div>
      </div>
    </div>`};var c,b,p;d.parameters={...d.parameters,docs:{...(c=d.parameters)==null?void 0:c.docs,source:{originalSource:`{
  name: 'Interactive (Controls)',
  render: ({
    variant,
    state
  }) => variant === 'chart' ? chartBtn({
    state
  }) : tableBtn({
    state
  }),
  parameters: {
    docs: {
      description: {
        story: 'Use **variant** to switch between chart and table button. Use **state** to simulate default / hover / disabled.'
      },
      source: {
        transform: (_src, storyCtx) => {
          const {
            variant,
            state
          } = storyCtx.args;
          const cls = variant === 'chart' ? 'btn-chart' : 'btn-table';
          const iconPx = variant === 'chart' ? 16 : 12;
          const dis = state === 'disabled' ? ' disabled' : '';
          return \`<button class="\${cls}" aria-label="Navigate"\${dis}>\\n  <!-- \${iconPx}px arrow-right icon -->\\n</button>\`;
        }
      }
    }
  }
}`,...(p=(b=d.parameters)==null?void 0:b.docs)==null?void 0:p.source}}};var u,x,h,f,g;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
  name: 'Chart Button — states',
  args: {
    state: 'default'
  },
  parameters: {
    controls: {
      include: ['state']
    },
    docs: {
      description: {
        story: \`
Chart button (node 9705:152804) — 24×24px, transparent bg. Use **state** control to switch between Default / Hover / Disabled.

| State    | BG           | Icon color |
|---------|--------------|------------|
| Default  | transparent  | #374151    |
| Hover    | #f3f4f6      | #374151    |
| Disabled | transparent  | #D1D5DB    |
        \`
      },
      source: {
        code: \`<button class="btn-chart" aria-label="Navigate">
  <!-- 16px arrow-right icon -->
</button>\`,
        language: 'html'
      }
    }
  },
  render: ({
    state
  }) => chartBtn({
    state
  })
}`,...(h=(x=n.parameters)==null?void 0:x.docs)==null?void 0:h.source},description:{story:"Chart button — switch between states using the `state` control.\nQA: Default = transparent bg, no border. Hover = bg #f3f4f6. Disabled = icon #D1D5DB.",...(g=(f=n.parameters)==null?void 0:f.docs)==null?void 0:g.description}}};var m,y,v,w,D;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  name: 'Chart Button — toolbar context',
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      description: {
        story: 'All 3 states shown in a simulated chart toolbar wrapper.'
      }
    }
  },
  render: () => \`
    <div style="display:inline-flex;border:1px solid var(--color-border-default);border-radius:8px;
                padding:4px;gap:2px;background:var(--color-bg-surface);">
      <button class="btn-chart" aria-label="Previous"
        style="transform:scaleX(-1);">\${ARROW_RIGHT(16)}</button>
      <button class="btn-chart" style="background:var(--color-bg-tertiary,#f3f4f6);border-radius:9px;"
        aria-label="Next (hovered)">\${ARROW_RIGHT(16)}</button>
      <button class="btn-chart" disabled aria-label="Disabled">\${ARROW_RIGHT(16)}</button>
    </div>
    <p style="margin-top:12px;font:11px/1.5 sans-serif;color:var(--color-text-secondary);">
      Default · Hover (simulated) · Disabled — shown in a chart toolbar wrapper
    </p>\`
}`,...(v=(y=r.parameters)==null?void 0:y.docs)==null?void 0:v.source},description:{story:`Chart button — all 3 states side by side, simulated toolbar context.
QA: No border, no bg in default. Hover fills bg only. Disabled icon = gray/300.`,...(D=(w=r.parameters)==null?void 0:w.docs)==null?void 0:D.description}}};var B,$,A,C,T;o.parameters={...o.parameters,docs:{...(B=o.parameters)==null?void 0:B.docs,source:{originalSource:`{
  name: 'Table Button — states',
  args: {
    state: 'default'
  },
  parameters: {
    controls: {
      include: ['state']
    },
    docs: {
      description: {
        story: \`
Table button (node 9287:163857) — 28×28px, always bordered. Use **state** control to switch states.

| State    | BG       | Shadow    | Icon     |
|---------|----------|-----------|----------|
| Default  | #ffffff  | shadow-sm | #374151  |
| Hover    | #f3f4f6  | shadow-lg | #374151  |
| Disabled | #f3f4f6  | none      | #D1D5DB  |

QA: Icon is **12px** (smaller than chart button's 16px).
        \`
      },
      source: {
        code: \`<button class="btn-table" aria-label="Navigate">
  <!-- 12px arrow-right icon -->
</button>\`,
        language: 'html'
      }
    }
  },
  render: ({
    state
  }) => tableBtn({
    state
  })
}`,...(A=($=o.parameters)==null?void 0:$.docs)==null?void 0:A.source},description:{story:"Table button — switch between states using the `state` control.\nQA: Shadow always present in default. Hover = amplified shadow. Disabled = no shadow, bg gray.",...(T=(C=o.parameters)==null?void 0:C.docs)==null?void 0:T.description}}};var H,R,S,I,N;s.parameters={...s.parameters,docs:{...(H=s.parameters)==null?void 0:H.docs,source:{originalSource:`{
  name: 'Table Button — table row context',
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      description: {
        story: 'Button shown in a realistic data table row to verify sizing and shadow in context.'
      }
    }
  },
  render: () => \`
    <table style="border-collapse:collapse;width:100%;max-width:600px;font-size:14px;">
      <thead>
        <tr style="border-bottom:2px solid var(--color-border-default);">
          <th style="text-align:left;padding:8px 12px;color:var(--color-text-secondary);font-weight:500;">Name</th>
          <th style="text-align:left;padding:8px 12px;color:var(--color-text-secondary);font-weight:500;">Status</th>
          <th style="text-align:left;padding:8px 12px;color:var(--color-text-secondary);font-weight:500;">Amount</th>
          <th style="padding:8px 12px;"></th>
        </tr>
      </thead>
      <tbody>
        \${[{
    name: 'Alice Martin',
    status: 'Active',
    amount: '$1,240'
  }, {
    name: 'Bob Chen',
    status: 'Inactive',
    amount: '$890'
  }, {
    name: 'Carol Williams',
    status: 'Active',
    amount: '$2,110'
  }].map(row => \`
          <tr style="border-bottom:1px solid var(--color-bg-muted);">
            <td style="padding:12px;">\${row.name}</td>
            <td style="padding:12px;">\${row.status}</td>
            <td style="padding:12px;">\${row.amount}</td>
            <td style="padding:12px;text-align:right;">
              <button class="btn-table" aria-label="View \${row.name}">\${ARROW_RIGHT(12)}</button>
            </td>
          </tr>\`).join('')}
      </tbody>
    </table>\`
}`,...(S=(R=s.parameters)==null?void 0:R.docs)==null?void 0:S.source},description:{story:"Table button — in a realistic table row context.",...(N=(I=s.parameters)==null?void 0:I.docs)==null?void 0:N.description}}};var _,G,O,W,k;l.parameters={...l.parameters,docs:{...(_=l.parameters)==null?void 0:_.docs,source:{originalSource:`{
  name: 'Overview — Chart vs Table button',
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      description: {
        story: \`
Both utility button types side-by-side for easy QA comparison.

| Property        | Chart Button | Table Button |
|----------------|-------------|-------------|
| Size            | 24×24px     | 28×28px     |
| Border          | none        | 1px #e5e7eb |
| Shadow          | none        | shadow-sm   |
| Border-radius   | 6px         | 6px         |
| Icon size       | 16px        | 12px        |
| Hover bg        | #f3f4f6     | #f3f4f6     |
| Disabled icon   | #D1D5DB     | #D1D5DB     |
      \`
      }
    }
  },
  render: () => \`
    <div style="display:flex;flex-direction:column;gap:24px;">
      <div>
        <p style="font:11px/1 600 sans-serif;text-transform:uppercase;letter-spacing:.1em;
                  color:#9CA3AF;margin:0 0 10px;">Chart Button (node 9705:152804)</p>
        <div style="display:flex;gap:12px;align-items:center;">
          <button class="btn-chart" aria-label="Default">\${ARROW_RIGHT(16)}</button>
          <button class="btn-chart" style="background:var(--color-bg-tertiary,#f3f4f6);"
            aria-label="Hover">\${ARROW_RIGHT(16)}</button>
          <button class="btn-chart" disabled aria-label="Disabled">\${ARROW_RIGHT(16)}</button>
          <span style="font:11px/1 sans-serif;color:#9CA3AF;">Default · Hover · Disabled</span>
        </div>
      </div>
      <div>
        <p style="font:11px/1 600 sans-serif;text-transform:uppercase;letter-spacing:.1em;
                  color:#9CA3AF;margin:0 0 10px;">Table Button (node 9287:163857)</p>
        <div style="display:flex;gap:12px;align-items:center;">
          <button class="btn-table" aria-label="Default">\${ARROW_RIGHT(12)}</button>
          <button class="btn-table" style="background:var(--color-bg-muted);box-shadow:0 10px 15px -3px rgba(0,0,0,.1),0 4px 6px rgba(0,0,0,.05);"
            aria-label="Hover">\${ARROW_RIGHT(12)}</button>
          <button class="btn-table" disabled aria-label="Disabled">\${ARROW_RIGHT(12)}</button>
          <span style="font:11px/1 sans-serif;color:#9CA3AF;">Default · Hover · Disabled</span>
        </div>
      </div>
    </div>\`
}`,...(O=(G=l.parameters)==null?void 0:G.docs)==null?void 0:O.source},description:{story:"Both utility button types side-by-side for QA comparison.",...(k=(W=l.parameters)==null?void 0:W.docs)==null?void 0:k.description}}};const j=["Interactive","ChartButtonStates","ChartButtonToolbar","TableButtonStates","TableButtonInContext","BothUtilityButtons"];export{l as BothUtilityButtons,n as ChartButtonStates,r as ChartButtonToolbar,d as Interactive,s as TableButtonInContext,o as TableButtonStates,j as __namedExportsOrder,M as default};
