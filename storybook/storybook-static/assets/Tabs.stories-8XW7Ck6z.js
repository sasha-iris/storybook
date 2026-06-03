const L={title:"Iris Library/Tabs",tags:["autodocs","stable"],parameters:{layout:"padded",backgrounds:{default:"white"},docs:{description:{component:`
**Tabs** allow users to navigate between related views within the same context without leaving the page.

**When to use**
- Switch between different sections of related content (e.g. Overview / Details / History)
- Filter or segment a data set shown in the same area (e.g. Active / Archived / Draft)
- Organise form steps or configuration groups that don't require a separate page

**When NOT to use**
- Do not use tabs for navigation between unrelated pages — use the Sidebar or a nav menu instead
- Do not nest tabs inside other tabs — it creates orientation issues
- Do not use tabs when there are more than 7–8 items — consider a dropdown or sidebar nav

**Anatomy**
- **Label** — required; text identifying the tab's content section
- **Counter badge** — optional; numeric badge showing count (e.g. unread items, results)
- **Dropdown chevron** — optional; indicates the tab opens a sub-menu (chevron toggles down ↔ up)
- **Active indicator** — 2 px bottom border in brand purple (\`#42389d\`) on the active tab
- **Tab bar** — container row with a 1 px bottom separator (\`#e5e7eb\`)
        `.trim()}}},argTypes:{label:{control:"text",description:'Tab label text. Use a short noun or noun phrase (e.g. "Overview", "All transactions").',table:{category:"Content",defaultValue:{summary:"Overview"}}},state:{control:"select",options:["default","hover","active"],description:"Visual state of the tab. Maps to `aria-selected` (active) and CSS `:hover`.",table:{category:"State",defaultValue:{summary:"default"}}},counter:{control:"boolean",description:"Show a numeric counter badge next to the label.",table:{category:"Content",defaultValue:{summary:"false"}}},counterCount:{control:"number",description:"Value shown in the counter badge. Only visible when `counter` is true.",table:{category:"Content",defaultValue:{summary:"0"}}},dropdown:{control:"boolean",description:"Show a dropdown chevron indicating sub-navigation. Chevron points down (closed) or up (open/active).",table:{category:"Content",defaultValue:{summary:"false"}}}},args:{label:"Overview",state:"default",counter:!1,counterCount:0,dropdown:!1}},_=`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
  viewBox="0 0 24 24" fill="none" stroke="currentColor"
  stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <polyline points="6 9 12 15 18 9"/>
</svg>`,M=`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
  viewBox="0 0 24 24" fill="none" stroke="currentColor"
  stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <polyline points="18 15 12 9 6 15"/>
</svg>`;function e({label:o="Tab",state:p="default",counter:m=!1,counterCount:r=0,dropdown:b=!1}={}){const n=p==="active",u=p==="hover",t=n?"#42389d":u?"#374151":"#4b5563",x=n?"#42389d":u?"#d1d5db":"transparent",c=n?"#42389d":"#d1d5db",h=n?"#ffffff":"#4b5563",f=n&&b?M:_;return`
    <button
      role="tab"
      aria-selected="${n}"
      style="
        display: inline-flex;
        align-items: center;
        gap: 6px;
        padding: 12px 16px;
        height: 45px;
        background: transparent;
        border: none;
        border-bottom: 2px solid ${x};
        margin-bottom: -1px;
        font-family: inherit;
        font-size: var(--text-sm);
        font-weight: var(--font-medium);
        color: ${t};
        cursor: pointer;
        white-space: nowrap;
        line-height: 1.5;
        transition: color 0.15s, border-color 0.15s;
      "
    >
      ${o}
      ${m?`
        <span style="
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 0 4px;
          min-width: 16px;
          height: 18px;
          background: ${c};
          color: ${h};
          font-size: var(--text-xs);
          font-weight: var(--font-medium);
          border-radius: 4px;
          line-height: 1;
        ">${r}</span>
      `:""}
      ${b?`<span style="display:inline-flex;align-items:center;color:${t};">${f}</span>`:""}
    </button>`}function l(o){return`
    <div
      role="tablist"
      style="
        display: flex;
        align-items: flex-end;
        background: var(--color-bg-surface);
        border-bottom: 1px solid var(--color-border-default);
        gap: 0;
      "
    >
      ${o.join("")}
    </div>`}const g={name:"Interactive (Controls)",render:o=>l([e(o)]),parameters:{docs:{source:{transform:(o,p)=>{const{label:m,state:r,counter:b,counterCount:n,dropdown:u}=p.args,t=r==="active",x=t?"#42389d":r==="hover"?"#d1d5db":"transparent",c=t?"#42389d":r==="hover"?"#374151":"#4b5563";return`<div role="tablist" style="display:flex;align-items:flex-end;border-bottom:1px solid var(--color-border-default);">
  <button
    role="tab"
    aria-selected="${t}"
    style="padding:12px 16px;height:45px;font-size:var(--text-sm);font-weight:var(--font-medium);color:${c};border:none;border-bottom:2px solid ${x};margin-bottom:-1px;background:transparent;display:inline-flex;align-items:center;gap:6px;"
  >
    ${m}${b?`
    <span style="padding:0 4px;height:18px;min-width:16px;background:${t?"#42389d":"#d1d5db"};color:${t?"#ffffff":"#4b5563"};font-size:var(--text-xs);font-weight:var(--font-medium);border-radius:4px;display:inline-flex;align-items:center;justify-content:center;">${n}</span>`:""}${u?`
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="${c}" stroke-width="2"><polyline points="${t?"18 15 12 9 6 15":"6 9 12 15 18 9"}"/></svg>`:""}
  </button>
</div>`}}}}},a={name:"All states",parameters:{controls:{disable:!0},docs:{description:{story:'\nAll three states from Figma node `10007:72664`:\n- **Default** — no border indicator, muted gray text (`#4b5563`)\n- **Hover** — light gray bottom border (`#d1d5db`), slightly darker text (`#374151`)\n- **Active** — brand purple bottom border (`#42389d`), matching text colour; `aria-selected="true"`\n\n**✅ Do** — always include exactly one `aria-selected="true"` tab per tab list.\n**✅ Do** — keep labels short (1–3 words); long labels break the horizontal flow.\n**❌ Don\'t** — use colour alone to convey active state — the label colour change provides the primary cue.\n**❌ Don\'t** — apply a hover state to the currently active tab.\n        '.trim()},source:{code:`<div role="tablist" style="display:flex;align-items:flex-end;border-bottom:1px solid var(--color-border-default);">
  <!-- Default -->
  <button role="tab" aria-selected="false"
    style="padding:12px 16px;height:45px;font-size:var(--text-sm);font-weight:var(--font-medium);
           color:#4b5563;border:none;border-bottom:2px solid transparent;
           margin-bottom:-1px;background:transparent;">
    Overview
  </button>

  <!-- Hover (applied via :hover in CSS) -->
  <button role="tab" aria-selected="false"
    style="padding:12px 16px;height:45px;font-size:var(--text-sm);font-weight:var(--font-medium);
           color:#374151;border:none;border-bottom:2px solid #d1d5db;
           margin-bottom:-1px;background:transparent;">
    Transactions
  </button>

  <!-- Active -->
  <button role="tab" aria-selected="true"
    style="padding:12px 16px;height:45px;font-size:var(--text-sm);font-weight:var(--font-medium);
           color:#42389d;border:none;border-bottom:2px solid #42389d;
           margin-bottom:-1px;background:transparent;">
    Reports
  </button>
</div>`,language:"html"}}},render:()=>l([e({label:"Overview",state:"default"}),e({label:"Transactions",state:"hover"}),e({label:"Reports",state:"active"})])},i={name:"With counter badge",parameters:{controls:{disable:!0},docs:{description:{story:`
Counter badges (Figma \`Counter=yes\`) indicate the number of items in each tab's content.

Badge colours per state (Figma node \`10007:72664\`):
- **Default / hover** — gray background \`#d1d5db\`, gray text \`#4b5563\`
- **Active** — brand purple background \`#42389d\`, white text

**✅ Do** — use counters only when the number adds meaningful context (pending items, new entries).
**✅ Do** — cap displayed value at "99+" for large numbers.
**❌ Don't** — add a counter badge to every tab — reserve it for tabs where the count is actionable.
        `.trim()},source:{code:`<div role="tablist" style="display:flex;align-items:flex-end;border-bottom:1px solid var(--color-border-default);">
  <button role="tab" aria-selected="false"
    style="display:inline-flex;align-items:center;gap:6px;padding:12px 16px;height:45px;
           font-size:var(--text-sm);font-weight:var(--font-medium);color:#4b5563;border:none;
           border-bottom:2px solid transparent;margin-bottom:-1px;background:transparent;">
    Inbox
    <span style="padding:0 4px;height:18px;min-width:16px;background:#d1d5db;color:#4b5563;
                 font-size:var(--text-xs);font-weight:var(--font-medium);border-radius:4px;
                 display:inline-flex;align-items:center;justify-content:center;">5</span>
  </button>

  <!-- Active tab — badge uses brand purple background -->
  <button role="tab" aria-selected="true"
    style="display:inline-flex;align-items:center;gap:6px;padding:12px 16px;height:45px;
           font-size:var(--text-sm);font-weight:var(--font-medium);color:#42389d;border:none;
           border-bottom:2px solid #42389d;margin-bottom:-1px;background:transparent;">
    Pending
    <span style="padding:0 4px;height:18px;min-width:16px;background:#42389d;color:#ffffff;
                 font-size:var(--text-xs);font-weight:var(--font-medium);border-radius:4px;
                 display:inline-flex;align-items:center;justify-content:center;">12</span>
  </button>
</div>`,language:"html"}}},render:()=>l([e({label:"Inbox",state:"default",counter:!0,counterCount:5}),e({label:"Sent",state:"hover",counter:!0,counterCount:0}),e({label:"Pending",state:"active",counter:!0,counterCount:12}),e({label:"Archived",state:"default",counter:!0,counterCount:3})])},s={name:"With dropdown chevron",parameters:{controls:{disable:!0},docs:{description:{story:`
Dropdown tabs (Figma \`dropdown=yes\`) indicate that clicking the tab opens a sub-menu.

- Chevron **down** (↓) — tab is closed or in default/hover state
- Chevron **up** (↑) — tab is active / menu open

**✅ Do** — use dropdown tabs when a section has multiple sub-views that don't all fit as separate tabs.
**❌ Don't** — use dropdown tabs as the primary navigation — they add interaction cost.
        `.trim()},source:{code:`<div role="tablist" style="display:flex;align-items:flex-end;border-bottom:1px solid var(--color-border-default);">
  <button role="tab" aria-selected="false"
    style="display:inline-flex;align-items:center;gap:6px;padding:12px 16px;height:45px;
           font-size:var(--text-sm);font-weight:var(--font-medium);color:#4b5563;border:none;
           border-bottom:2px solid transparent;margin-bottom:-1px;background:transparent;">
    Reports
    <!-- chevron-down when closed -->
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
      stroke="#4b5563" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <polyline points="6 9 12 15 18 9"/>
    </svg>
  </button>

  <!-- Active / open — chevron-up -->
  <button role="tab" aria-selected="true"
    style="display:inline-flex;align-items:center;gap:6px;padding:12px 16px;height:45px;
           font-size:var(--text-sm);font-weight:var(--font-medium);color:#42389d;border:none;
           border-bottom:2px solid #42389d;margin-bottom:-1px;background:transparent;">
    Filters
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
      stroke="#42389d" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <polyline points="18 15 12 9 6 15"/>
    </svg>
  </button>
</div>`,language:"html"}}},render:()=>l([e({label:"Overview",state:"default"}),e({label:"Reports",state:"hover",dropdown:!0}),e({label:"Filters",state:"active",dropdown:!0})])},d={name:"Full tab bar (realistic)",parameters:{controls:{disable:!0},docs:{description:{story:`
Realistic tab bar combining plain tabs, counter badges, and a dropdown — as seen in data-heavy views like
transaction lists, team dashboards, or approval queues.

**✅ Do** — mix plain and counter tabs; not every tab needs a badge.
**❌ Don't** — exceed 6–7 tabs in one bar; add a "More" overflow menu or move to sidebar nav for deep hierarchies.
        `.trim()},source:{code:`<div role="tablist" style="display:flex;align-items:flex-end;border-bottom:1px solid var(--color-border-default);">
  <button role="tab" aria-selected="true"
    style="display:inline-flex;align-items:center;gap:6px;padding:12px 16px;height:45px;
           font-size:var(--text-sm);font-weight:var(--font-medium);color:#42389d;border:none;
           border-bottom:2px solid #42389d;margin-bottom:-1px;background:transparent;">
    All transactions
  </button>
  <button role="tab" aria-selected="false"
    style="display:inline-flex;align-items:center;gap:6px;padding:12px 16px;height:45px;
           font-size:var(--text-sm);font-weight:var(--font-medium);color:#4b5563;border:none;
           border-bottom:2px solid transparent;margin-bottom:-1px;background:transparent;">
    Pending
    <span style="padding:0 4px;height:18px;min-width:16px;background:#d1d5db;color:#4b5563;
                 font-size:var(--text-xs);font-weight:var(--font-medium);border-radius:4px;
                 display:inline-flex;align-items:center;justify-content:center;">8</span>
  </button>
  <button role="tab" aria-selected="false"
    style="display:inline-flex;align-items:center;gap:6px;padding:12px 16px;height:45px;
           font-size:var(--text-sm);font-weight:var(--font-medium);color:#4b5563;border:none;
           border-bottom:2px solid transparent;margin-bottom:-1px;background:transparent;">
    Completed
  </button>
  <button role="tab" aria-selected="false"
    style="display:inline-flex;align-items:center;gap:6px;padding:12px 16px;height:45px;
           font-size:var(--text-sm);font-weight:var(--font-medium);color:#4b5563;border:none;
           border-bottom:2px solid transparent;margin-bottom:-1px;background:transparent;">
    Exports
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
      stroke="#4b5563" stroke-width="2"><polyline points="6 9 12 15 18 9"/></svg>
  </button>
</div>`,language:"html"}}},render:()=>l([e({label:"All transactions",state:"active"}),e({label:"Pending",state:"default",counter:!0,counterCount:8}),e({label:"Completed",state:"default"}),e({label:"Exports",state:"default",dropdown:!0})])};var v,y,w;g.parameters={...g.parameters,docs:{...(v=g.parameters)==null?void 0:v.docs,source:{originalSource:`{
  name: 'Interactive (Controls)',
  render: args => tabBar([tab(args)]),
  parameters: {
    docs: {
      source: {
        transform: (_src, ctx) => {
          const {
            label,
            state,
            counter,
            counterCount,
            dropdown
          } = ctx.args;
          const isActive = state === 'active';
          const borderColor = isActive ? '#42389d' : state === 'hover' ? '#d1d5db' : 'transparent';
          const textColor = isActive ? '#42389d' : state === 'hover' ? '#374151' : '#4b5563';
          const counterBg = isActive ? '#42389d' : '#d1d5db';
          const counterText = isActive ? '#ffffff' : '#4b5563';
          return \`<div role="tablist" style="display:flex;align-items:flex-end;border-bottom:1px solid var(--color-border-default);">
  <button
    role="tab"
    aria-selected="\${isActive}"
    style="padding:12px 16px;height:45px;font-size:var(--text-sm);font-weight:var(--font-medium);color:\${textColor};border:none;border-bottom:2px solid \${borderColor};margin-bottom:-1px;background:transparent;display:inline-flex;align-items:center;gap:6px;"
  >
    \${label}\${counter ? \`
    <span style="padding:0 4px;height:18px;min-width:16px;background:\${counterBg};color:\${counterText};font-size:var(--text-xs);font-weight:var(--font-medium);border-radius:4px;display:inline-flex;align-items:center;justify-content:center;">\${counterCount}</span>\` : ''}\${dropdown ? \`
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="\${textColor}" stroke-width="2"><polyline points="\${isActive ? '18 15 12 9 6 15' : '6 9 12 15 18 9'}"/></svg>\` : ''}
  </button>
</div>\`;
        }
      }
    }
  }
}`,...(w=(y=g.parameters)==null?void 0:y.docs)==null?void 0:w.source}}};var k,C,D,A,z;a.parameters={...a.parameters,docs:{...(k=a.parameters)==null?void 0:k.docs,source:{originalSource:`{
  name: 'All states',
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      description: {
        story: \`
All three states from Figma node \\\`10007:72664\\\`:
- **Default** — no border indicator, muted gray text (\\\`#4b5563\\\`)
- **Hover** — light gray bottom border (\\\`#d1d5db\\\`), slightly darker text (\\\`#374151\\\`)
- **Active** — brand purple bottom border (\\\`#42389d\\\`), matching text colour; \\\`aria-selected="true"\\\`

**✅ Do** — always include exactly one \\\`aria-selected="true"\\\` tab per tab list.
**✅ Do** — keep labels short (1–3 words); long labels break the horizontal flow.
**❌ Don't** — use colour alone to convey active state — the label colour change provides the primary cue.
**❌ Don't** — apply a hover state to the currently active tab.
        \`.trim()
      },
      source: {
        code: \`<div role="tablist" style="display:flex;align-items:flex-end;border-bottom:1px solid var(--color-border-default);">
  <!-- Default -->
  <button role="tab" aria-selected="false"
    style="padding:12px 16px;height:45px;font-size:var(--text-sm);font-weight:var(--font-medium);
           color:#4b5563;border:none;border-bottom:2px solid transparent;
           margin-bottom:-1px;background:transparent;">
    Overview
  </button>

  <!-- Hover (applied via :hover in CSS) -->
  <button role="tab" aria-selected="false"
    style="padding:12px 16px;height:45px;font-size:var(--text-sm);font-weight:var(--font-medium);
           color:#374151;border:none;border-bottom:2px solid #d1d5db;
           margin-bottom:-1px;background:transparent;">
    Transactions
  </button>

  <!-- Active -->
  <button role="tab" aria-selected="true"
    style="padding:12px 16px;height:45px;font-size:var(--text-sm);font-weight:var(--font-medium);
           color:#42389d;border:none;border-bottom:2px solid #42389d;
           margin-bottom:-1px;background:transparent;">
    Reports
  </button>
</div>\`,
        language: 'html'
      }
    }
  },
  render: () => tabBar([tab({
    label: 'Overview',
    state: 'default'
  }), tab({
    label: 'Transactions',
    state: 'hover'
  }), tab({
    label: 'Reports',
    state: 'active'
  })])
}`,...(D=(C=a.parameters)==null?void 0:C.docs)==null?void 0:D.source},description:{story:`All three tab states from Figma node 10007:72664.
The active tab has a 2 px purple bottom indicator and matching label colour.
Hover shows a light gray indicator.

**✅ Do** — always include exactly one \`aria-selected="true"\` tab per tab list.
**✅ Do** — keep labels short (1–3 words); long labels break the horizontal flow.
**❌ Don't** — use colour alone to convey active state; the label change to purple provides the primary cue.
**❌ Don't** — show a hover state on the currently active tab.`,...(z=(A=a.parameters)==null?void 0:A.docs)==null?void 0:z.description}}};var $,B,S,F,T;i.parameters={...i.parameters,docs:{...($=i.parameters)==null?void 0:$.docs,source:{originalSource:`{
  name: 'With counter badge',
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      description: {
        story: \`
Counter badges (Figma \\\`Counter=yes\\\`) indicate the number of items in each tab's content.

Badge colours per state (Figma node \\\`10007:72664\\\`):
- **Default / hover** — gray background \\\`#d1d5db\\\`, gray text \\\`#4b5563\\\`
- **Active** — brand purple background \\\`#42389d\\\`, white text

**✅ Do** — use counters only when the number adds meaningful context (pending items, new entries).
**✅ Do** — cap displayed value at "99+" for large numbers.
**❌ Don't** — add a counter badge to every tab — reserve it for tabs where the count is actionable.
        \`.trim()
      },
      source: {
        code: \`<div role="tablist" style="display:flex;align-items:flex-end;border-bottom:1px solid var(--color-border-default);">
  <button role="tab" aria-selected="false"
    style="display:inline-flex;align-items:center;gap:6px;padding:12px 16px;height:45px;
           font-size:var(--text-sm);font-weight:var(--font-medium);color:#4b5563;border:none;
           border-bottom:2px solid transparent;margin-bottom:-1px;background:transparent;">
    Inbox
    <span style="padding:0 4px;height:18px;min-width:16px;background:#d1d5db;color:#4b5563;
                 font-size:var(--text-xs);font-weight:var(--font-medium);border-radius:4px;
                 display:inline-flex;align-items:center;justify-content:center;">5</span>
  </button>

  <!-- Active tab — badge uses brand purple background -->
  <button role="tab" aria-selected="true"
    style="display:inline-flex;align-items:center;gap:6px;padding:12px 16px;height:45px;
           font-size:var(--text-sm);font-weight:var(--font-medium);color:#42389d;border:none;
           border-bottom:2px solid #42389d;margin-bottom:-1px;background:transparent;">
    Pending
    <span style="padding:0 4px;height:18px;min-width:16px;background:#42389d;color:#ffffff;
                 font-size:var(--text-xs);font-weight:var(--font-medium);border-radius:4px;
                 display:inline-flex;align-items:center;justify-content:center;">12</span>
  </button>
</div>\`,
        language: 'html'
      }
    }
  },
  render: () => tabBar([tab({
    label: 'Inbox',
    state: 'default',
    counter: true,
    counterCount: 5
  }), tab({
    label: 'Sent',
    state: 'hover',
    counter: true,
    counterCount: 0
  }), tab({
    label: 'Pending',
    state: 'active',
    counter: true,
    counterCount: 12
  }), tab({
    label: 'Archived',
    state: 'default',
    counter: true,
    counterCount: 3
  })])
}`,...(S=(B=i.parameters)==null?void 0:B.docs)==null?void 0:S.source},description:{story:`Counter badges show numeric counts alongside tab labels — useful for indicating
items requiring attention (e.g. unread notifications, pending approvals).

**✅ Do** — use counters only when the number adds meaningful context (not just for decoration).
**✅ Do** — keep counters for small numbers; consider "99+" for values over 99.
**❌ Don't** — add counters to every tab — it creates visual noise.`,...(T=(F=i.parameters)==null?void 0:F.docs)==null?void 0:T.description}}};var j,O,R,W,I;s.parameters={...s.parameters,docs:{...(j=s.parameters)==null?void 0:j.docs,source:{originalSource:`{
  name: 'With dropdown chevron',
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      description: {
        story: \`
Dropdown tabs (Figma \\\`dropdown=yes\\\`) indicate that clicking the tab opens a sub-menu.

- Chevron **down** (↓) — tab is closed or in default/hover state
- Chevron **up** (↑) — tab is active / menu open

**✅ Do** — use dropdown tabs when a section has multiple sub-views that don't all fit as separate tabs.
**❌ Don't** — use dropdown tabs as the primary navigation — they add interaction cost.
        \`.trim()
      },
      source: {
        code: \`<div role="tablist" style="display:flex;align-items:flex-end;border-bottom:1px solid var(--color-border-default);">
  <button role="tab" aria-selected="false"
    style="display:inline-flex;align-items:center;gap:6px;padding:12px 16px;height:45px;
           font-size:var(--text-sm);font-weight:var(--font-medium);color:#4b5563;border:none;
           border-bottom:2px solid transparent;margin-bottom:-1px;background:transparent;">
    Reports
    <!-- chevron-down when closed -->
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
      stroke="#4b5563" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <polyline points="6 9 12 15 18 9"/>
    </svg>
  </button>

  <!-- Active / open — chevron-up -->
  <button role="tab" aria-selected="true"
    style="display:inline-flex;align-items:center;gap:6px;padding:12px 16px;height:45px;
           font-size:var(--text-sm);font-weight:var(--font-medium);color:#42389d;border:none;
           border-bottom:2px solid #42389d;margin-bottom:-1px;background:transparent;">
    Filters
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
      stroke="#42389d" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <polyline points="18 15 12 9 6 15"/>
    </svg>
  </button>
</div>\`,
        language: 'html'
      }
    }
  },
  render: () => tabBar([tab({
    label: 'Overview',
    state: 'default'
  }), tab({
    label: 'Reports',
    state: 'hover',
    dropdown: true
  }), tab({
    label: 'Filters',
    state: 'active',
    dropdown: true
  })])
}`,...(R=(O=s.parameters)==null?void 0:O.docs)==null?void 0:R.source},description:{story:`Dropdown tabs (Figma \`dropdown=yes\`) expand a sub-menu below the tab bar.
The chevron toggles between down (closed) and up (open/active).

**✅ Do** — use dropdown tabs for grouping related sub-views under a single tab.
**❌ Don't** — use dropdown tabs as the primary navigation pattern; prefer sidebar nav for deep hierarchies.`,...(I=(W=s.parameters)==null?void 0:W.docs)==null?void 0:I.description}}};var P,H,V,q,E;d.parameters={...d.parameters,docs:{...(P=d.parameters)==null?void 0:P.docs,source:{originalSource:`{
  name: 'Full tab bar (realistic)',
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      description: {
        story: \`
Realistic tab bar combining plain tabs, counter badges, and a dropdown — as seen in data-heavy views like
transaction lists, team dashboards, or approval queues.

**✅ Do** — mix plain and counter tabs; not every tab needs a badge.
**❌ Don't** — exceed 6–7 tabs in one bar; add a "More" overflow menu or move to sidebar nav for deep hierarchies.
        \`.trim()
      },
      source: {
        code: \`<div role="tablist" style="display:flex;align-items:flex-end;border-bottom:1px solid var(--color-border-default);">
  <button role="tab" aria-selected="true"
    style="display:inline-flex;align-items:center;gap:6px;padding:12px 16px;height:45px;
           font-size:var(--text-sm);font-weight:var(--font-medium);color:#42389d;border:none;
           border-bottom:2px solid #42389d;margin-bottom:-1px;background:transparent;">
    All transactions
  </button>
  <button role="tab" aria-selected="false"
    style="display:inline-flex;align-items:center;gap:6px;padding:12px 16px;height:45px;
           font-size:var(--text-sm);font-weight:var(--font-medium);color:#4b5563;border:none;
           border-bottom:2px solid transparent;margin-bottom:-1px;background:transparent;">
    Pending
    <span style="padding:0 4px;height:18px;min-width:16px;background:#d1d5db;color:#4b5563;
                 font-size:var(--text-xs);font-weight:var(--font-medium);border-radius:4px;
                 display:inline-flex;align-items:center;justify-content:center;">8</span>
  </button>
  <button role="tab" aria-selected="false"
    style="display:inline-flex;align-items:center;gap:6px;padding:12px 16px;height:45px;
           font-size:var(--text-sm);font-weight:var(--font-medium);color:#4b5563;border:none;
           border-bottom:2px solid transparent;margin-bottom:-1px;background:transparent;">
    Completed
  </button>
  <button role="tab" aria-selected="false"
    style="display:inline-flex;align-items:center;gap:6px;padding:12px 16px;height:45px;
           font-size:var(--text-sm);font-weight:var(--font-medium);color:#4b5563;border:none;
           border-bottom:2px solid transparent;margin-bottom:-1px;background:transparent;">
    Exports
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
      stroke="#4b5563" stroke-width="2"><polyline points="6 9 12 15 18 9"/></svg>
  </button>
</div>\`,
        language: 'html'
      }
    }
  },
  render: () => tabBar([tab({
    label: 'All transactions',
    state: 'active'
  }), tab({
    label: 'Pending',
    state: 'default',
    counter: true,
    counterCount: 8
  }), tab({
    label: 'Completed',
    state: 'default'
  }), tab({
    label: 'Exports',
    state: 'default',
    dropdown: true
  })])
}`,...(V=(H=d.parameters)==null?void 0:H.docs)==null?void 0:V.source},description:{story:`A realistic tab bar combining counter badges and regular tabs as they appear in
a typical data-heavy screen (e.g. transactions, team members, activity log).

**✅ Do** — mix tabs with and without counters in the same bar — not every tab needs one.
**❌ Don't** — use more than 6–7 tabs in a single bar — add a "More" dropdown or switch to sidebar nav.`,...(E=(q=d.parameters)==null?void 0:q.docs)==null?void 0:E.description}}};const U=["Interactive","AllStates","WithCounter","WithDropdown","FullBar"];export{a as AllStates,d as FullBar,g as Interactive,i as WithCounter,s as WithDropdown,U as __namedExportsOrder,L as default};
