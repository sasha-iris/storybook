const P={blue:"#155dfc",purple:"#9061f9",indigo:"#6875f5",teal:"#00bba7"},h={available:{bg:"#def7ec",dot:"#0e9f6e",text:"#03543f"},unavailable:{bg:"#fde8e8",dot:"#f05252",text:"#9b1c1c"}},G='<svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M2.5 8.5L6 12L13.5 4"/></svg>';function v({label:t="Indicator text",dotColor:n="#155dfc"}){return`<span style="display:inline-flex;align-items:center;gap:4px;">
  <svg width="12" height="12" viewBox="0 0 12 12" aria-hidden="true">
    <circle cx="6" cy="6" r="6" fill="${n}"/>
  </svg>
  <span style="font-size:var(--text-sm);font-weight:var(--font-medium);color:var(--color-text-heading);line-height:1;">${t}</span>
</span>`}function _({count:t=1}){return`<span style="display:inline-flex;align-items:center;justify-content:center;width:24px;height:24px;border-radius:50%;background:#f05252;border:2px solid #ffffff;font-size:var(--text-sm);font-weight:var(--font-medium);color:#ffffff;line-height:1;" aria-label="${t} notifications">${t}</span>`}function m(){return`<span style="display:inline-flex;align-items:center;justify-content:center;width:24px;height:24px;border-radius:50%;background:#155dfc;" aria-label="Completed">${G}</span>`}function b(){return`<span style="display:inline-flex;align-items:center;justify-content:center;width:24px;height:24px;border-radius:50%;background:#bedbff;" aria-hidden="true">
  <span style="width:12px;height:12px;border-radius:50%;background:#155dfc;display:block;"></span>
</span>`}function r({label:t="Available",variant:n="available"}){const{bg:a,dot:e,text:i}=h[n]??h.available;return`<span style="display:inline-flex;align-items:center;gap:6px;height:22px;padding:0 10px;border-radius:99px;background:${a};" role="status">
  <svg width="12" height="12" viewBox="0 0 12 12" aria-hidden="true">
    <circle cx="6" cy="6" r="6" fill="${e}"/>
  </svg>
  <span style="font-size:var(--text-xs);font-weight:var(--font-medium);color:${i};line-height:1;white-space:nowrap;">${t}</span>
</span>`}const O={title:"Iris Library/Indicators",tags:["autodocs","stable"],parameters:{layout:"padded",docs:{description:{component:`
Small visual signals that communicate status, count, or progress — without taking up significant space.

**When to use**
- Show online/offline or availability status next to a user name → **Badge indicator**
- Label chart series or legend items with a color dot → **Dot (legend) indicator**
- Show an unread count on a button or nav icon → **Count indicator**
- Mark completed or active steps in a multi-step form → **Icon / Stepper indicator**

**When NOT to use**
- Standalone status labels that need more prominence → use Badge or Chip
- Dismissible tags or filter chips → use Chip or Tag
- Page-level alerts requiring action → use Alert or Toast

**Anatomy**
Five distinct types — all light mode only:
- \`Dot\` — 12×12 dot + label (var(--text-sm)/var(--font-medium)). Used for chart legends and status rows.
- \`Count\` — 24×24 red circle with a number. Overlaid on buttons or nav items.
- \`Icon\` — 24×24 blue circle with a check mark. Marks a completed step.
- \`Stepper\` — 24×24 outer ring (#bedbff) with 12×12 inner dot (#155dfc). Active/pending step in a stepper.
- \`Badge\` — pill shape (h=22, br=99). Green = available, red = unavailable.
        `}}},argTypes:{type:{control:"select",options:["dot","count","icon","stepper","badge"],description:"Indicator variant. Each type has a distinct visual and semantic role.",table:{category:"Appearance",defaultValue:{summary:"badge"}}},label:{control:"text",description:"Text label. Used by `dot` and `badge` types. Ignored by `count`, `icon`, `stepper`.",table:{category:"Content",defaultValue:{summary:"Available"}}},variant:{control:"select",options:["available","unavailable"],description:"Color variant for the **badge** type only. `available` = green, `unavailable` = red.",table:{category:"Appearance",defaultValue:{summary:"available"}}},dotColor:{control:"color",description:"Dot fill for the **dot (legend)** type. Use one of the standard legend colors: blue `#155dfc`, purple `#9061f9`, indigo `#6875f5`, teal `#00bba7`.",table:{category:"Appearance",defaultValue:{summary:"#155dfc"}}},count:{control:{type:"number",min:1,max:99},description:"Number shown inside the **count** indicator. Pairs with `aria-label` for screen readers.",table:{category:"Content",defaultValue:{summary:1}}}},args:{type:"badge",label:"Available",variant:"available",dotColor:"#155dfc",count:3}},l={name:"Interactive (Controls)",render:({type:t,label:n,variant:a,dotColor:e,count:i})=>{switch(t){case"dot":return v({label:n,dotColor:e});case"count":return _({count:i});case"icon":return m();case"stepper":return b();case"badge":return r({label:n,variant:a});default:return r({label:n,variant:a})}},parameters:{docs:{description:{story:"Use the **Controls** panel to switch between all 5 indicator types and configure their props. Note: `label` / `variant` apply to badge; `dotColor` applies to dot; `count` applies to count."},source:{transform:(t,n)=>{const{type:a,label:e,variant:i,dotColor:o,count:s}=n.args;if(a==="dot")return`<span style="display:inline-flex;align-items:center;gap:4px;">
  <svg width="12" height="12" viewBox="0 0 12 12" aria-hidden="true">
    <circle cx="6" cy="6" r="6" fill="${o}"/>
  </svg>
  <span style="font-size:var(--text-sm);font-weight:var(--font-medium);color:var(--color-text-heading);line-height:1;">${e}</span>
</span>`;if(a==="count")return`<span style="display:inline-flex;align-items:center;justify-content:center;width:24px;height:24px;border-radius:50%;background:#f05252;border:2px solid #ffffff;font-size:var(--text-sm);font-weight:var(--font-medium);color:#ffffff;line-height:1;" aria-label="${s} notifications">${s}</span>`;if(a==="icon")return`<span style="display:inline-flex;align-items:center;justify-content:center;width:24px;height:24px;border-radius:50%;background:#155dfc;" aria-label="Completed">
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
    <path d="M2.5 8.5L6 12L13.5 4"/>
  </svg>
</span>`;if(a==="stepper")return`<span style="display:inline-flex;align-items:center;justify-content:center;width:24px;height:24px;border-radius:50%;background:#bedbff;" aria-hidden="true">
  <span style="width:12px;height:12px;border-radius:50%;background:#155dfc;display:block;"></span>
</span>`;const x=h[i]??h.available;return`<span style="display:inline-flex;align-items:center;gap:6px;height:22px;padding:0 10px;border-radius:99px;background:${x.bg};" role="status">
  <svg width="12" height="12" viewBox="0 0 12 12" aria-hidden="true">
    <circle cx="6" cy="6" r="6" fill="${x.dot}"/>
  </svg>
  <span style="font-size:var(--text-xs);font-weight:var(--font-medium);color:${x.text};line-height:1;white-space:nowrap;">${e}</span>
</span>`}}}}},d={name:"All types",parameters:{controls:{disable:!0},docs:{description:{story:`
All 5 indicator types side by side.

| Type | Size | Use case |
|---|---|---|
| Dot | 12×12 + text | Chart legend, status row |
| Count | 24×24 | Notification count on button/nav |
| Icon | 24×24 | Completed step |
| Stepper | 24×24 | Active/pending step |
| Badge | 22px pill | Availability status |

**✅ Do** — pick the type that matches the semantic (status, count, step, legend) — don't use count badge just for color.
**❌ Don't** — stack multiple indicator types on the same element.
        `},source:{code:`<!-- Dot (legend) -->
<span style="display:inline-flex;align-items:center;gap:4px;">
  <svg width="12" height="12" viewBox="0 0 12 12" aria-hidden="true"><circle cx="6" cy="6" r="6" fill="#155dfc"/></svg>
  <span style="font-size:var(--text-sm);font-weight:var(--font-medium);color:var(--color-text-heading);">Revenue</span>
</span>

<!-- Count -->
<span style="display:inline-flex;align-items:center;justify-content:center;width:24px;height:24px;border-radius:50%;background:#f05252;border:2px solid #ffffff;font-size:var(--text-sm);font-weight:var(--font-medium);color:#ffffff;" aria-label="3 notifications">3</span>

<!-- Badge: available -->
<span style="display:inline-flex;align-items:center;gap:6px;height:22px;padding:0 10px;border-radius:99px;background:#def7ec;" role="status">
  <svg width="12" height="12" viewBox="0 0 12 12" aria-hidden="true"><circle cx="6" cy="6" r="6" fill="#0e9f6e"/></svg>
  <span style="font-size:var(--text-xs);font-weight:var(--font-medium);color:#03543f;">Available</span>
</span>`,language:"html"}}},render:()=>`<div style="display:flex;flex-wrap:wrap;align-items:center;gap:24px;">
    <div style="display:flex;flex-direction:column;align-items:center;gap:8px;">
      <span style="font-size:11px;color:var(--color-text-secondary);text-transform:uppercase;letter-spacing:.05em;">Dot</span>
      ${v({label:"Revenue",dotColor:"#155dfc"})}
    </div>
    <div style="display:flex;flex-direction:column;align-items:center;gap:8px;">
      <span style="font-size:11px;color:var(--color-text-secondary);text-transform:uppercase;letter-spacing:.05em;">Count</span>
      ${_({count:3})}
    </div>
    <div style="display:flex;flex-direction:column;align-items:center;gap:8px;">
      <span style="font-size:11px;color:var(--color-text-secondary);text-transform:uppercase;letter-spacing:.05em;">Icon</span>
      ${m()}
    </div>
    <div style="display:flex;flex-direction:column;align-items:center;gap:8px;">
      <span style="font-size:11px;color:var(--color-text-secondary);text-transform:uppercase;letter-spacing:.05em;">Stepper</span>
      ${b()}
    </div>
    <div style="display:flex;flex-direction:column;align-items:center;gap:8px;">
      <span style="font-size:11px;color:var(--color-text-secondary);text-transform:uppercase;letter-spacing:.05em;">Badge</span>
      ${r({label:"Available",variant:"available"})}
    </div>
  </div>`},p={name:"Dot — legend colors",parameters:{controls:{disable:!0},docs:{description:{story:`
The 4 standard chart legend colors from Figma. Use these dots to label series in charts, tables, or dashboards.

**✅ Do** — pair each dot color with a meaningful series name — never use color alone (WCAG 1.4.1).
**✅ Do** — maintain consistent color-to-series mapping across all charts on the same page.
**❌ Don't** — invent new dot colors outside this palette — extend in Figma first.
        `},source:{code:`<span style="display:inline-flex;align-items:center;gap:4px;">
  <svg width="12" height="12" viewBox="0 0 12 12" aria-hidden="true"><circle cx="6" cy="6" r="6" fill="#155dfc"/></svg>
  <span style="font-size:var(--text-sm);font-weight:var(--font-medium);color:var(--color-text-heading);">Revenue</span>
</span>`,language:"html"}}},render:()=>{const t={blue:"Revenue",purple:"Expenses",indigo:"Profit",teal:"Forecast"};return`<div style="display:flex;flex-wrap:wrap;gap:16px;align-items:center;">
      ${Object.entries(P).map(([n,a])=>v({label:t[n],dotColor:a})).join(`
      `)}
    </div>`}},c={name:"Badge — availability status",parameters:{controls:{disable:!0},docs:{description:{story:`
Two badge indicator variants for user availability status (from Figma node 110:22652).

**✅ Do** — use \`role="status"\` on the badge so screen readers announce availability changes.
**✅ Do** — pair with a user name for context — never use the badge alone.
**❌ Don't** — use these pill badges for general-purpose categorization — use Tag or Badge for that.
        `},source:{code:`<!-- Available -->
<span style="display:inline-flex;align-items:center;gap:6px;height:22px;padding:0 10px;border-radius:99px;background:#def7ec;" role="status">
  <svg width="12" height="12" viewBox="0 0 12 12" aria-hidden="true"><circle cx="6" cy="6" r="6" fill="#0e9f6e"/></svg>
  <span style="font-size:var(--text-xs);font-weight:var(--font-medium);color:#03543f;">Available</span>
</span>

<!-- Unavailable -->
<span style="display:inline-flex;align-items:center;gap:6px;height:22px;padding:0 10px;border-radius:99px;background:#fde8e8;" role="status">
  <svg width="12" height="12" viewBox="0 0 12 12" aria-hidden="true"><circle cx="6" cy="6" r="6" fill="#f05252"/></svg>
  <span style="font-size:var(--text-xs);font-weight:var(--font-medium);color:#9b1c1c;">Unavailable</span>
</span>`,language:"html"}}},render:()=>`<div style="display:flex;gap:12px;align-items:center;">
    ${r({label:"Available",variant:"available"})}
    ${r({label:"Unavailable",variant:"unavailable"})}
  </div>`},u={name:"In context — button with count",parameters:{controls:{disable:!0},docs:{description:{story:`
Count indicator overlaid on a button — the pattern from Figma node 110:22652.

**✅ Do** — position the count indicator at the top-right corner of the button using \`position:absolute\`.
**✅ Do** — add \`aria-label\` with the full count to the indicator span for screen readers.
**❌ Don't** — show a count of 0 — hide the indicator entirely when there are no notifications.
        `},source:{code:`<div style="position:relative;display:inline-flex;">
  <button type="button" class="btn btn-primary btn-md">
    Messages
  </button>
  <span style="position:absolute;top:-8px;right:-8px;display:inline-flex;align-items:center;justify-content:center;min-width:24px;height:24px;border-radius:50%;background:#f05252;border:2px solid #ffffff;font-size:var(--text-xs);font-weight:var(--font-medium);color:#ffffff;padding:0 4px;" aria-label="8 unread messages">8</span>
</div>`,language:"html"}}},render:()=>`<div style="padding:16px;display:inline-flex;">
    <div style="position:relative;display:inline-flex;">
      <button type="button" style="display:inline-flex;align-items:center;gap:8px;padding:10px 16px;background:#42389d;border:none;border-radius:12px;font-size:var(--text-sm);font-weight:var(--font-medium);color:#ffffff;cursor:pointer;font-family:inherit;">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"/></svg>
        Messages
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z"/><path stroke-linecap="round" stroke-linejoin="round" d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z"/></svg>
      </button>
      <span style="position:absolute;top:-8px;right:-8px;display:inline-flex;align-items:center;justify-content:center;min-width:24px;height:24px;border-radius:50%;background:#f05252;border:2px solid #ffffff;font-size:var(--text-xs);font-weight:var(--font-medium);color:#ffffff;padding:0 4px;" aria-label="8 unread messages">8</span>
    </div>
  </div>`},f={name:"In context — customer table",parameters:{controls:{disable:!0},docs:{description:{story:`
Badge indicators used as status labels in a customer list — the "Badge indicator" example from Figma node 110:22652.

**✅ Do** — align the badge to the right of user info for quick scanning.
**✅ Do** — use \`role="status"\` so screen readers announce status changes live.
**❌ Don't** — use the badge as the only status signal without a text label (color blindness).
        `},source:{code:`<div style="border:1px solid var(--color-border-default);border-radius:8px;overflow:hidden;">
  <div style="display:flex;align-items:center;justify-content:space-between;padding:10px 16px;">
    <span style="font-size:var(--text-sm);color:var(--color-text-heading);font-weight:var(--font-medium);">Sarah Johnson</span>
    <span style="display:inline-flex;align-items:center;gap:6px;height:22px;padding:0 10px;border-radius:99px;background:#def7ec;" role="status">
      <svg width="12" height="12" viewBox="0 0 12 12" aria-hidden="true"><circle cx="6" cy="6" r="6" fill="#0e9f6e"/></svg>
      <span style="font-size:var(--text-xs);font-weight:var(--font-medium);color:#03543f;">Available</span>
    </span>
  </div>
</div>`,language:"html"}}},render:()=>{const t=[{name:"Sarah Johnson",role:"Account Manager",variant:"available"},{name:"Marcus Lee",role:"Support Engineer",variant:"unavailable"},{name:"Priya Sharma",role:"Customer Success",variant:"available"},{name:"Tom Eriksson",role:"Solutions Architect",variant:"unavailable"}],n=e=>{const i=e.split(" ").map(s=>s[0]).join(""),o=e.charCodeAt(0)*37%360;return`<span style="display:inline-flex;align-items:center;justify-content:center;width:32px;height:32px;border-radius:50%;background:hsl(${o},60%,85%);font-size:var(--text-xs);font-weight:var(--font-semibold);color:hsl(${o},40%,30%);flex-shrink:0;">${i}</span>`};return`<div style="border:1px solid var(--color-border-default);border-radius:8px;overflow:hidden;max-width:480px;">
      <div style="padding:12px 16px;border-bottom:1px solid var(--color-border-default);background:var(--color-bg-default);">
        <span style="font-size:13px;font-weight:var(--font-semibold);color:#374151;text-transform:uppercase;letter-spacing:.05em;">Support Team</span>
      </div>
      ${t.map(e=>`<div style="display:flex;align-items:center;justify-content:space-between;padding:12px 16px;border-bottom:1px solid var(--color-bg-muted);">
      <div style="display:flex;align-items:center;gap:10px;">
        ${n(e.name)}
        <div>
          <div style="font-size:var(--text-sm);font-weight:var(--font-medium);color:var(--color-text-heading);">${e.name}</div>
          <div style="font-size:var(--text-xs);color:var(--color-text-secondary);">${e.role}</div>
        </div>
      </div>
      ${r({label:e.variant==="available"?"Available":"Unavailable",variant:e.variant})}
    </div>`).join("")}
    </div>`}},g={name:"In context — stepper",parameters:{controls:{disable:!0},docs:{description:{story:`
Stepper indicators used in a multi-step progress bar — the "Stepper" example from Figma node 110:22652.

**✅ Do** — use \`aria-current="step"\` on the active step for screen readers.
**✅ Do** — use the icon indicator (blue circle + check) to mark completed steps.
**❌ Don't** — use the stepper indicator for non-sequential status states — use badge or dot instead.
        `},source:{code:`<div style="display:flex;align-items:center;gap:0;">
  <!-- Completed step -->
  <span style="display:inline-flex;align-items:center;justify-content:center;width:24px;height:24px;border-radius:50%;background:#155dfc;" aria-label="Step 1: Completed">
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M2.5 8.5L6 12L13.5 4"/></svg>
  </span>
  <span style="flex:1;height:1px;background:var(--color-border-default);"></span>
  <!-- Active step -->
  <span style="display:inline-flex;align-items:center;justify-content:center;width:24px;height:24px;border-radius:50%;background:#bedbff;" aria-current="step" aria-label="Step 2: Current">
    <span style="width:12px;height:12px;border-radius:50%;background:#155dfc;display:block;"></span>
  </span>
  <span style="flex:1;height:1px;background:var(--color-border-default);"></span>
  <!-- Pending step -->
  <span style="display:inline-flex;align-items:center;justify-content:center;width:24px;height:24px;border-radius:50%;background:#bedbff;" aria-label="Step 3: Pending">
    <span style="width:12px;height:12px;border-radius:50%;background:#155dfc;display:block;"></span>
  </span>
</div>`,language:"html"}}},render:()=>{const t=[{label:"Account details",state:"complete"},{label:"Company info",state:"active"},{label:"Review & submit",state:"pending"}],n=e=>e==="complete"?m():b();return`<div style="max-width:480px;padding:16px;">
      <div style="display:flex;align-items:flex-start;">
        ${t.map((e,i)=>`
      <div style="display:flex;flex-direction:column;align-items:center;gap:8px;flex:1;">
        <div style="display:flex;align-items:center;width:100%;">
          ${i>0?'<span style="flex:1;height:1px;background:var(--color-border-default);"></span>':'<span style="flex:1;"></span>'}
          ${n(e.state)}
          ${i<t.length-1?'<span style="flex:1;height:1px;background:var(--color-border-default);"></span>':'<span style="flex:1;"></span>'}
        </div>
        <span style="font-size:var(--text-xs);font-weight:${e.state==="active"?"var(--font-semibold)":"var(--font-normal)"};color:${e.state==="active"?"var(--color-text-heading)":"var(--color-text-secondary)"};white-space:nowrap;">${e.label}</span>
      </div>`).join("")}
      </div>
    </div>`}};var y,w,k;l.parameters={...l.parameters,docs:{...(y=l.parameters)==null?void 0:y.docs,source:{originalSource:`{
  name: 'Interactive (Controls)',
  render: ({
    type,
    label,
    variant,
    dotColor,
    count
  }) => {
    switch (type) {
      case 'dot':
        return dotIndicator({
          label,
          dotColor
        });
      case 'count':
        return countIndicator({
          count
        });
      case 'icon':
        return iconIndicator();
      case 'stepper':
        return stepperIndicator();
      case 'badge':
        return badgeIndicator({
          label,
          variant
        });
      default:
        return badgeIndicator({
          label,
          variant
        });
    }
  },
  parameters: {
    docs: {
      description: {
        story: 'Use the **Controls** panel to switch between all 5 indicator types and configure their props. Note: \`label\` / \`variant\` apply to badge; \`dotColor\` applies to dot; \`count\` applies to count.'
      },
      source: {
        transform: (_src, ctx) => {
          const {
            type,
            label,
            variant,
            dotColor,
            count
          } = ctx.args;
          if (type === 'dot') {
            return \`<span style="display:inline-flex;align-items:center;gap:4px;">
  <svg width="12" height="12" viewBox="0 0 12 12" aria-hidden="true">
    <circle cx="6" cy="6" r="6" fill="\${dotColor}"/>
  </svg>
  <span style="font-size:var(--text-sm);font-weight:var(--font-medium);color:var(--color-text-heading);line-height:1;">\${label}</span>
</span>\`;
          }
          if (type === 'count') {
            return \`<span style="display:inline-flex;align-items:center;justify-content:center;width:24px;height:24px;border-radius:50%;background:#f05252;border:2px solid #ffffff;font-size:var(--text-sm);font-weight:var(--font-medium);color:#ffffff;line-height:1;" aria-label="\${count} notifications">\${count}</span>\`;
          }
          if (type === 'icon') {
            return \`<span style="display:inline-flex;align-items:center;justify-content:center;width:24px;height:24px;border-radius:50%;background:#155dfc;" aria-label="Completed">
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
    <path d="M2.5 8.5L6 12L13.5 4"/>
  </svg>
</span>\`;
          }
          if (type === 'stepper') {
            return \`<span style="display:inline-flex;align-items:center;justify-content:center;width:24px;height:24px;border-radius:50%;background:#bedbff;" aria-hidden="true">
  <span style="width:12px;height:12px;border-radius:50%;background:#155dfc;display:block;"></span>
</span>\`;
          }
          // badge
          const bv = BADGE_VARIANTS[variant] ?? BADGE_VARIANTS.available;
          return \`<span style="display:inline-flex;align-items:center;gap:6px;height:22px;padding:0 10px;border-radius:99px;background:\${bv.bg};" role="status">
  <svg width="12" height="12" viewBox="0 0 12 12" aria-hidden="true">
    <circle cx="6" cy="6" r="6" fill="\${bv.dot}"/>
  </svg>
  <span style="font-size:var(--text-xs);font-weight:var(--font-medium);color:\${bv.text};line-height:1;white-space:nowrap;">\${label}</span>
</span>\`;
        }
      }
    }
  }
}`,...(k=(w=l.parameters)==null?void 0:w.docs)==null?void 0:k.source}}};var C,$,A;d.parameters={...d.parameters,docs:{...(C=d.parameters)==null?void 0:C.docs,source:{originalSource:`{
  name: 'All types',
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      description: {
        story: \`
All 5 indicator types side by side.

| Type | Size | Use case |
|---|---|---|
| Dot | 12×12 + text | Chart legend, status row |
| Count | 24×24 | Notification count on button/nav |
| Icon | 24×24 | Completed step |
| Stepper | 24×24 | Active/pending step |
| Badge | 22px pill | Availability status |

**✅ Do** — pick the type that matches the semantic (status, count, step, legend) — don't use count badge just for color.
**❌ Don't** — stack multiple indicator types on the same element.
        \`
      },
      source: {
        code: \`<!-- Dot (legend) -->
<span style="display:inline-flex;align-items:center;gap:4px;">
  <svg width="12" height="12" viewBox="0 0 12 12" aria-hidden="true"><circle cx="6" cy="6" r="6" fill="#155dfc"/></svg>
  <span style="font-size:var(--text-sm);font-weight:var(--font-medium);color:var(--color-text-heading);">Revenue</span>
</span>

<!-- Count -->
<span style="display:inline-flex;align-items:center;justify-content:center;width:24px;height:24px;border-radius:50%;background:#f05252;border:2px solid #ffffff;font-size:var(--text-sm);font-weight:var(--font-medium);color:#ffffff;" aria-label="3 notifications">3</span>

<!-- Badge: available -->
<span style="display:inline-flex;align-items:center;gap:6px;height:22px;padding:0 10px;border-radius:99px;background:#def7ec;" role="status">
  <svg width="12" height="12" viewBox="0 0 12 12" aria-hidden="true"><circle cx="6" cy="6" r="6" fill="#0e9f6e"/></svg>
  <span style="font-size:var(--text-xs);font-weight:var(--font-medium);color:#03543f;">Available</span>
</span>\`,
        language: 'html'
      }
    }
  },
  render: () => \`<div style="display:flex;flex-wrap:wrap;align-items:center;gap:24px;">
    <div style="display:flex;flex-direction:column;align-items:center;gap:8px;">
      <span style="font-size:11px;color:var(--color-text-secondary);text-transform:uppercase;letter-spacing:.05em;">Dot</span>
      \${dotIndicator({
    label: 'Revenue',
    dotColor: '#155dfc'
  })}
    </div>
    <div style="display:flex;flex-direction:column;align-items:center;gap:8px;">
      <span style="font-size:11px;color:var(--color-text-secondary);text-transform:uppercase;letter-spacing:.05em;">Count</span>
      \${countIndicator({
    count: 3
  })}
    </div>
    <div style="display:flex;flex-direction:column;align-items:center;gap:8px;">
      <span style="font-size:11px;color:var(--color-text-secondary);text-transform:uppercase;letter-spacing:.05em;">Icon</span>
      \${iconIndicator()}
    </div>
    <div style="display:flex;flex-direction:column;align-items:center;gap:8px;">
      <span style="font-size:11px;color:var(--color-text-secondary);text-transform:uppercase;letter-spacing:.05em;">Stepper</span>
      \${stepperIndicator()}
    </div>
    <div style="display:flex;flex-direction:column;align-items:center;gap:8px;">
      <span style="font-size:11px;color:var(--color-text-secondary);text-transform:uppercase;letter-spacing:.05em;">Badge</span>
      \${badgeIndicator({
    label: 'Available',
    variant: 'available'
  })}
    </div>
  </div>\`
}`,...(A=($=d.parameters)==null?void 0:$.docs)==null?void 0:A.source}}};var I,z,D;p.parameters={...p.parameters,docs:{...(I=p.parameters)==null?void 0:I.docs,source:{originalSource:`{
  name: 'Dot — legend colors',
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      description: {
        story: \`
The 4 standard chart legend colors from Figma. Use these dots to label series in charts, tables, or dashboards.

**✅ Do** — pair each dot color with a meaningful series name — never use color alone (WCAG 1.4.1).
**✅ Do** — maintain consistent color-to-series mapping across all charts on the same page.
**❌ Don't** — invent new dot colors outside this palette — extend in Figma first.
        \`
      },
      source: {
        code: \`<span style="display:inline-flex;align-items:center;gap:4px;">
  <svg width="12" height="12" viewBox="0 0 12 12" aria-hidden="true"><circle cx="6" cy="6" r="6" fill="#155dfc"/></svg>
  <span style="font-size:var(--text-sm);font-weight:var(--font-medium);color:var(--color-text-heading);">Revenue</span>
</span>\`,
        language: 'html'
      }
    }
  },
  render: () => {
    const labels = {
      blue: 'Revenue',
      purple: 'Expenses',
      indigo: 'Profit',
      teal: 'Forecast'
    };
    return \`<div style="display:flex;flex-wrap:wrap;gap:16px;align-items:center;">
      \${Object.entries(LEGEND_COLORS).map(([name, color]) => dotIndicator({
      label: labels[name],
      dotColor: color
    })).join('\\n      ')}
    </div>\`;
  }
}`,...(D=(z=p.parameters)==null?void 0:z.docs)==null?void 0:D.source}}};var B,S,j;c.parameters={...c.parameters,docs:{...(B=c.parameters)==null?void 0:B.docs,source:{originalSource:`{
  name: 'Badge — availability status',
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      description: {
        story: \`
Two badge indicator variants for user availability status (from Figma node 110:22652).

**✅ Do** — use \\\`role="status"\\\` on the badge so screen readers announce availability changes.
**✅ Do** — pair with a user name for context — never use the badge alone.
**❌ Don't** — use these pill badges for general-purpose categorization — use Tag or Badge for that.
        \`
      },
      source: {
        code: \`<!-- Available -->
<span style="display:inline-flex;align-items:center;gap:6px;height:22px;padding:0 10px;border-radius:99px;background:#def7ec;" role="status">
  <svg width="12" height="12" viewBox="0 0 12 12" aria-hidden="true"><circle cx="6" cy="6" r="6" fill="#0e9f6e"/></svg>
  <span style="font-size:var(--text-xs);font-weight:var(--font-medium);color:#03543f;">Available</span>
</span>

<!-- Unavailable -->
<span style="display:inline-flex;align-items:center;gap:6px;height:22px;padding:0 10px;border-radius:99px;background:#fde8e8;" role="status">
  <svg width="12" height="12" viewBox="0 0 12 12" aria-hidden="true"><circle cx="6" cy="6" r="6" fill="#f05252"/></svg>
  <span style="font-size:var(--text-xs);font-weight:var(--font-medium);color:#9b1c1c;">Unavailable</span>
</span>\`,
        language: 'html'
      }
    }
  },
  render: () => \`<div style="display:flex;gap:12px;align-items:center;">
    \${badgeIndicator({
    label: 'Available',
    variant: 'available'
  })}
    \${badgeIndicator({
    label: 'Unavailable',
    variant: 'unavailable'
  })}
  </div>\`
}`,...(j=(S=c.parameters)==null?void 0:S.docs)==null?void 0:j.source}}};var T,L,M;u.parameters={...u.parameters,docs:{...(T=u.parameters)==null?void 0:T.docs,source:{originalSource:`{
  name: 'In context — button with count',
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      description: {
        story: \`
Count indicator overlaid on a button — the pattern from Figma node 110:22652.

**✅ Do** — position the count indicator at the top-right corner of the button using \\\`position:absolute\\\`.
**✅ Do** — add \\\`aria-label\\\` with the full count to the indicator span for screen readers.
**❌ Don't** — show a count of 0 — hide the indicator entirely when there are no notifications.
        \`
      },
      source: {
        code: \`<div style="position:relative;display:inline-flex;">
  <button type="button" class="btn btn-primary btn-md">
    Messages
  </button>
  <span style="position:absolute;top:-8px;right:-8px;display:inline-flex;align-items:center;justify-content:center;min-width:24px;height:24px;border-radius:50%;background:#f05252;border:2px solid #ffffff;font-size:var(--text-xs);font-weight:var(--font-medium);color:#ffffff;padding:0 4px;" aria-label="8 unread messages">8</span>
</div>\`,
        language: 'html'
      }
    }
  },
  render: () => \`<div style="padding:16px;display:inline-flex;">
    <div style="position:relative;display:inline-flex;">
      <button type="button" style="display:inline-flex;align-items:center;gap:8px;padding:10px 16px;background:#42389d;border:none;border-radius:12px;font-size:var(--text-sm);font-weight:var(--font-medium);color:#ffffff;cursor:pointer;font-family:inherit;">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"/></svg>
        Messages
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z"/><path stroke-linecap="round" stroke-linejoin="round" d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z"/></svg>
      </button>
      <span style="position:absolute;top:-8px;right:-8px;display:inline-flex;align-items:center;justify-content:center;min-width:24px;height:24px;border-radius:50%;background:#f05252;border:2px solid #ffffff;font-size:var(--text-xs);font-weight:var(--font-medium);color:#ffffff;padding:0 4px;" aria-label="8 unread messages">8</span>
    </div>
  </div>\`
}`,...(M=(L=u.parameters)==null?void 0:L.docs)==null?void 0:M.source}}};var U,E,F;f.parameters={...f.parameters,docs:{...(U=f.parameters)==null?void 0:U.docs,source:{originalSource:`{
  name: 'In context — customer table',
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      description: {
        story: \`
Badge indicators used as status labels in a customer list — the "Badge indicator" example from Figma node 110:22652.

**✅ Do** — align the badge to the right of user info for quick scanning.
**✅ Do** — use \\\`role="status"\\\` so screen readers announce status changes live.
**❌ Don't** — use the badge as the only status signal without a text label (color blindness).
        \`
      },
      source: {
        code: \`<div style="border:1px solid var(--color-border-default);border-radius:8px;overflow:hidden;">
  <div style="display:flex;align-items:center;justify-content:space-between;padding:10px 16px;">
    <span style="font-size:var(--text-sm);color:var(--color-text-heading);font-weight:var(--font-medium);">Sarah Johnson</span>
    <span style="display:inline-flex;align-items:center;gap:6px;height:22px;padding:0 10px;border-radius:99px;background:#def7ec;" role="status">
      <svg width="12" height="12" viewBox="0 0 12 12" aria-hidden="true"><circle cx="6" cy="6" r="6" fill="#0e9f6e"/></svg>
      <span style="font-size:var(--text-xs);font-weight:var(--font-medium);color:#03543f;">Available</span>
    </span>
  </div>
</div>\`,
        language: 'html'
      }
    }
  },
  render: () => {
    const customers = [{
      name: 'Sarah Johnson',
      role: 'Account Manager',
      variant: 'available'
    }, {
      name: 'Marcus Lee',
      role: 'Support Engineer',
      variant: 'unavailable'
    }, {
      name: 'Priya Sharma',
      role: 'Customer Success',
      variant: 'available'
    }, {
      name: 'Tom Eriksson',
      role: 'Solutions Architect',
      variant: 'unavailable'
    }];
    const avatar = name => {
      const initials = name.split(' ').map(w => w[0]).join('');
      const hue = name.charCodeAt(0) * 37 % 360;
      return \`<span style="display:inline-flex;align-items:center;justify-content:center;width:32px;height:32px;border-radius:50%;background:hsl(\${hue},60%,85%);font-size:var(--text-xs);font-weight:var(--font-semibold);color:hsl(\${hue},40%,30%);flex-shrink:0;">\${initials}</span>\`;
    };
    const rows = customers.map(c => \`<div style="display:flex;align-items:center;justify-content:space-between;padding:12px 16px;border-bottom:1px solid var(--color-bg-muted);">
      <div style="display:flex;align-items:center;gap:10px;">
        \${avatar(c.name)}
        <div>
          <div style="font-size:var(--text-sm);font-weight:var(--font-medium);color:var(--color-text-heading);">\${c.name}</div>
          <div style="font-size:var(--text-xs);color:var(--color-text-secondary);">\${c.role}</div>
        </div>
      </div>
      \${badgeIndicator({
      label: c.variant === 'available' ? 'Available' : 'Unavailable',
      variant: c.variant
    })}
    </div>\`).join('');
    return \`<div style="border:1px solid var(--color-border-default);border-radius:8px;overflow:hidden;max-width:480px;">
      <div style="padding:12px 16px;border-bottom:1px solid var(--color-border-default);background:var(--color-bg-default);">
        <span style="font-size:13px;font-weight:var(--font-semibold);color:#374151;text-transform:uppercase;letter-spacing:.05em;">Support Team</span>
      </div>
      \${rows}
    </div>\`;
  }
}`,...(F=(E=f.parameters)==null?void 0:E.docs)==null?void 0:F.source}}};var R,V,N;g.parameters={...g.parameters,docs:{...(R=g.parameters)==null?void 0:R.docs,source:{originalSource:`{
  name: 'In context — stepper',
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      description: {
        story: \`
Stepper indicators used in a multi-step progress bar — the "Stepper" example from Figma node 110:22652.

**✅ Do** — use \\\`aria-current="step"\\\` on the active step for screen readers.
**✅ Do** — use the icon indicator (blue circle + check) to mark completed steps.
**❌ Don't** — use the stepper indicator for non-sequential status states — use badge or dot instead.
        \`
      },
      source: {
        code: \`<div style="display:flex;align-items:center;gap:0;">
  <!-- Completed step -->
  <span style="display:inline-flex;align-items:center;justify-content:center;width:24px;height:24px;border-radius:50%;background:#155dfc;" aria-label="Step 1: Completed">
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M2.5 8.5L6 12L13.5 4"/></svg>
  </span>
  <span style="flex:1;height:1px;background:var(--color-border-default);"></span>
  <!-- Active step -->
  <span style="display:inline-flex;align-items:center;justify-content:center;width:24px;height:24px;border-radius:50%;background:#bedbff;" aria-current="step" aria-label="Step 2: Current">
    <span style="width:12px;height:12px;border-radius:50%;background:#155dfc;display:block;"></span>
  </span>
  <span style="flex:1;height:1px;background:var(--color-border-default);"></span>
  <!-- Pending step -->
  <span style="display:inline-flex;align-items:center;justify-content:center;width:24px;height:24px;border-radius:50%;background:#bedbff;" aria-label="Step 3: Pending">
    <span style="width:12px;height:12px;border-radius:50%;background:#155dfc;display:block;"></span>
  </span>
</div>\`,
        language: 'html'
      }
    }
  },
  render: () => {
    const steps = [{
      label: 'Account details',
      state: 'complete'
    }, {
      label: 'Company info',
      state: 'active'
    }, {
      label: 'Review & submit',
      state: 'pending'
    }];
    const stepIcon = state => {
      if (state === 'complete') return iconIndicator();
      return stepperIndicator();
    };
    const stepItems = steps.map((s, i) => \`
      <div style="display:flex;flex-direction:column;align-items:center;gap:8px;flex:1;">
        <div style="display:flex;align-items:center;width:100%;">
          \${i > 0 ? '<span style="flex:1;height:1px;background:var(--color-border-default);"></span>' : '<span style="flex:1;"></span>'}
          \${stepIcon(s.state)}
          \${i < steps.length - 1 ? '<span style="flex:1;height:1px;background:var(--color-border-default);"></span>' : '<span style="flex:1;"></span>'}
        </div>
        <span style="font-size:var(--text-xs);font-weight:\${s.state === 'active' ? 'var(--font-semibold)' : 'var(--font-normal)'};color:\${s.state === 'active' ? 'var(--color-text-heading)' : 'var(--color-text-secondary)'};white-space:nowrap;">\${s.label}</span>
      </div>\`).join('');
    return \`<div style="max-width:480px;padding:16px;">
      <div style="display:flex;align-items:flex-start;">
        \${stepItems}
      </div>
    </div>\`;
  }
}`,...(N=(V=g.parameters)==null?void 0:V.docs)==null?void 0:N.source}}};const q=["Interactive","AllTypes","LegendColors","BadgeVariants","InContextButton","InContextTable","InContextStepper"];export{d as AllTypes,c as BadgeVariants,u as InContextButton,g as InContextStepper,f as InContextTable,l as Interactive,p as LegendColors,q as __namedExportsOrder,O as default};
