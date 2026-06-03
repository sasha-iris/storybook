const r={gray:{bg:"#f3f4f6",text:"#101828",dismiss:"#6a7282"},blue:{bg:"#dbeafe",text:"#193cb8",dismiss:"#2b7fff"},indigo:{bg:"#e5edff",text:"#42389d",dismiss:"#6875f5"},purple:{bg:"#f3e8ff",text:"#6e11b0",dismiss:"#ad46ff"},pink:{bg:"#fce7f3",text:"#a3004c",dismiss:"#f6339a"},green:{bg:"#d0fae5",text:"#006045",dismiss:"#00bc7d"},yellow:{bg:"#fef9c2",text:"#894b00",dismiss:"#fdc700"},red:{bg:"#ffe2e2",text:"#9f0712",dismiss:"#fb2c36"}},y=Object.keys(r),$="M10 18a8 8 0 100-16 8 8 0 000 16zm.75-13a.75.75 0 00-1.5 0v5c0 .414.336.75.75.75h4a.75.75 0 000-1.5H10.75V5z",C="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z",F="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z",V=[{key:"critical",label:"Critical",color:"red"},{key:"high",label:"High",color:"yellow"},{key:"medium",label:"Medium",color:"blue"},{key:"low",label:"Low",color:"green"},{key:"none",label:"None",color:"gray"}];function X({label:a="Critical",sub:e="11.0% rev",color:n="red",icon:t=!1}){const{bg:i,text:l}=r[n]??r.red,s=t?`<svg width="12" height="12" viewBox="0 0 20 20" fill="${l}" aria-hidden="true" style="flex-shrink:0;margin-bottom:1px;"><path fill-rule="evenodd" d="${F}" clip-rule="evenodd"/></svg>`:"";return`<span style="display:inline-flex;flex-direction:column;align-items:center;gap:0;background:${i};color:${l};font-size:10px;font-weight:600;line-height:1.3;border-radius:8px;padding:4px 8px;white-space:nowrap;text-align:center;font-family:inherit;">
  ${t?`<span style="display:flex;align-items:center;gap:3px;">${s}${a}</span>`:a}
  <span style="font-size:10px;font-weight:400;opacity:0.70;line-height:1.2;">${e}</span>
</span>`}function g({label:a="Badge",color:e="indigo",size:n="lg",icon:t=!1,dismissible:i=!1}){const{bg:l,text:s,dismiss:c}=r[e]??r.indigo,o=n==="lg",u=o?"var(--text-sm)":"var(--text-xs)",d=o?"400":"var(--font-medium)",w=o?"2px 12px":"2px 10px",p=o?16:14,U=t?`<svg width="${p}" height="${p}" viewBox="0 0 20 20" fill="${s}" aria-hidden="true" style="flex-shrink:0;"><path fill-rule="evenodd" d="${$}" clip-rule="evenodd"/></svg>`:"",W=i?`<button type="button" aria-label="Remove" style="display:inline-flex;align-items:center;justify-content:center;background:none;border:none;cursor:pointer;padding:0;line-height:0;"><svg width="${p}" height="${p}" viewBox="0 0 20 20" fill="${c}" aria-hidden="true"><path fill-rule="evenodd" d="${C}" clip-rule="evenodd"/></svg></button>`:"";return`<span style="display:inline-flex;align-items:center;gap:4px;background:${l};color:${s};font-size:${u};font-weight:${d};border-radius:6px;padding:${w};white-space:nowrap;line-height:1.5;font-family:inherit;">${U}<span>${a}</span>${W}</span>`}const q={title:"Iris Library/Badge",tags:["autodocs","stable"],parameters:{layout:"padded",docs:{description:{component:`
Status badges for labeling content, categorizing items, and indicating state.

**When to use**
- Label a record's status (Active, Pending, Archived)
- Categorize items by topic, priority, or type
- Show a removable filter chip in a search or filter bar

**When NOT to use**
- Interactive filter toggles → use Toggle buttons or Chips
- Long explanatory text → use an Alert or inline notice
- Navigation indicators → use a Tab with a counter instead

## Quick Start

**1. Import styles** — Copy \`iris-components.css\` from the repository:
\`\`\`html
<link rel="stylesheet" href="iris-components.css">
\`\`\`

**2. Copy component code** — Use the "Interactive (Controls)" story to generate HTML/React.

## Usage

**Anatomy** — \`[icon?] label [×?]\` — icon and dismiss button are both optional.

**Sizes** — \`lg\` (14 px text, 25 px height) for default usage; \`sm\` (12 px, 22 px) for dense tables and compact lists.

**Colors** — 8 themes: gray (neutral), blue, indigo, purple, pink, green, yellow, red.

\`\`\`jsx
// Basic usage
<span className="badge badge-lg badge-indigo">In review</span>

// With icon
<span className="badge badge-lg badge-green">
  <CheckIcon className="w-4 h-4" />
  <span>Active</span>
</span>

// Dismissible
<span className="badge badge-lg badge-red">
  <span>Failed</span>
  <button aria-label="Remove"><XMarkIcon className="w-4 h-4" /></button>
</span>
\`\`\`

See [SETUP.md](https://github.com/sasha-iris/storybook/blob/main/docs/SETUP.md) for complete installation instructions.
        `}}},argTypes:{label:{control:"text",description:"Badge label text.",table:{category:"Content",defaultValue:{summary:"Active"}}},icon:{control:"boolean",description:"Show a leading icon before the label. Icon color matches the theme text color.",table:{category:"Content",defaultValue:{summary:!1}}},dismissible:{control:"boolean",description:'Show a dismiss × button after the label. Wire `aria-label="Remove [label]"` for screen readers. The × uses a brighter variant of the theme color.',table:{category:"Content",defaultValue:{summary:!1}}},color:{control:"select",options:y,description:"Color theme. Semantic: green = success · red = error · yellow = warning · gray = neutral · blue/indigo/purple/pink = category.",table:{category:"Appearance",defaultValue:{summary:"indigo"}}},size:{control:"radio",options:["lg","sm"],description:"`lg` — 14 px text, 25 px height, 12 px h-padding. `sm` — 12 px text, 22 px height, 10 px h-padding.",table:{category:"Appearance",defaultValue:{summary:"lg"}}}},args:{label:"Active",color:"indigo",size:"lg",icon:!1,dismissible:!1}},b={name:"Interactive (Controls)",render:a=>{const e=a,{bg:n,text:t,dismiss:i}=r[e.color]??r.indigo,s=e.size==="lg"?16:14;e.icon&&`${s}${s}${t}${$}`,e.icon,e.dismissible&&`${e.label}${s}${s}${i}${C}`,e.dismissible&&`${e.label}`;const c=`<span class="badge badge-${e.size} badge-${e.color}">${e.icon?`
  <svg width="16" height="16" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
    <!-- icon -->
  </svg>`:""}
  <span>${e.label}</span>${e.dismissible?`
  <button type="button" aria-label="Remove `+e.label+`">
    <svg width="16" height="16" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
      <!-- x icon -->
    </svg>
  </button>`:""}
</span>`,o=`${e.icon?`import { ClockIcon } from '@heroicons/react/24/outline';
`:""}${e.dismissible?`import { XMarkIcon } from '@heroicons/react/24/outline';
`:""}${e.icon||e.dismissible?`
`:""}<span className="badge badge-${e.size} badge-${e.color}">${e.icon?`
  <ClockIcon className="w-4 h-4" />`:""}
  <span>${e.label}</span>${e.dismissible?`
  <button type="button" aria-label="Remove `+e.label+`">
    <XMarkIcon className="w-4 h-4" />
  </button>`:""}
</span>`,u=c.replace(/</g,"&lt;").replace(/>/g,"&gt;"),d=o.replace(/</g,"&lt;").replace(/>/g,"&gt;");return`
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:40px;align-items:start;">
        <div style="padding:20px;border:1px solid #e5e7eb;border-radius:8px;">
          ${g(a)}
        </div>
        <div style="display:flex;flex-direction:column;gap:24px;">
          <div style="padding:20px;border:1px solid #e5e7eb;border-radius:8px;">
            <div style="font-weight:600;font-size:12px;color:#666;margin-bottom:12px;text-transform:uppercase;letter-spacing:0.5px;">HTML</div>
            <div style="background:#f9fafb;padding:12px;border-radius:6px;margin-bottom:12px;overflow:auto;">
              <pre style="margin:0;font-family:monospace;font-size:13px;white-space:pre-wrap;word-break:break-word;"><code>${u}</code></pre>
            </div>
            <button data-copy="${c.split('"').join("&quot;")}" class="storybook-copy-btn" style="padding:8px 12px;background:#f3f4f6;color:#374151;border:1px solid #d1d5db;border-radius:4px;cursor:pointer;font-family:inherit;font-size:12px;font-weight:500;display:flex;align-items:center;gap:6px;">
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5">
                <rect x="2" y="2" width="8" height="8" rx="1"/>
                <path d="M6 14H12C13.1046 14 14 13.1046 14 12V6"/>
              </svg>
              Copy
            </button>
          </div>
          <div style="padding:20px;border:1px solid #e5e7eb;border-radius:8px;">
            <div style="font-weight:600;font-size:12px;color:#666;margin-bottom:12px;text-transform:uppercase;letter-spacing:0.5px;">React</div>
            <div style="background:#f9fafb;padding:12px;border-radius:6px;margin-bottom:12px;overflow:auto;">
              <pre style="margin:0;font-family:monospace;font-size:13px;white-space:pre-wrap;word-break:break-word;"><code>${d}</code></pre>
            </div>
            <button data-copy="${o.split('"').join("&quot;")}" class="storybook-copy-btn" style="padding:8px 12px;background:#f3f4f6;color:#374151;border:1px solid #d1d5db;border-radius:4px;cursor:pointer;font-family:inherit;font-size:12px;font-weight:500;display:flex;align-items:center;gap:6px;">
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5">
                <rect x="2" y="2" width="8" height="8" rx="1"/>
                <path d="M6 14H12C13.1046 14 14 13.1046 14 12V6"/>
              </svg>
              Copy
            </button>
          </div>
        </div>
      </div>
      <script>
        document.querySelectorAll('.storybook-copy-btn').forEach(btn => {
          btn.addEventListener('click', function() {
            navigator.clipboard.writeText(this.dataset.copy);
            const originalText = this.innerHTML;
            this.innerHTML = '<svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5"><polyline points="13 2 3 13 1 11"></polyline></svg>Copied!';
            this.style.background = '#dcfce7';
            this.style.color = '#166534';
            this.style.borderColor = '#bbf7d0';
            setTimeout(() => {
              this.innerHTML = originalText;
              this.style.background = '#f3f4f6';
              this.style.color = '#374151';
              this.style.borderColor = '#d1d5db';
            }, 2000);
          });
        });
      <\/script>
    `},parameters:{docs:{description:{story:`
## Badge Snippet Reference

Use the **Controls** panel to experiment. Code updates live.

### Basic Syntax

\`\`\`
<span class="badge badge-{size} badge-{color}">Label</span>
\`\`\`

### Sizes

- \`badge-lg\` — 25px height, 14px text (default, use in most cases)
- \`badge-sm\` — 22px height, 12px text (dense tables, compact lists)

### Colors (Semantic)

| Color | Meaning | Use For |
|-------|---------|---------|
| **gray** | Neutral, unknown | Default status, N/A |
| **blue** | Info, assigned | Assigned to user, In queue |
| **indigo** | Primary, in progress | In review, Processing |
| **purple** | Custom, scheduled | Scheduled, Queued |
| **pink** | Draft, preliminary | Draft, Incomplete |
| **green** | Success, active | Active, Approved, Live |
| **yellow** | Warning, pending | Pending, Needs attention |
| **red** | Error, critical | Failed, Error, Critical |

### Modifiers

- **With icon:** \`<ClockIcon className="w-4 h-4" />\` — reinforces meaning
- **Dismissible:** Add \`<button aria-label="Remove [label]">...</button>\` — for filter chips
- **Metric chip:** \`badge--metric\` with \`badge--metric__sub\` for two-line layout

### ✅ Do

- Use semantic color (green = success, red = error, yellow = warning)
- Pair icon with label when using icons
- Use \`badge-lg\` by default
- Set \`aria-label="Remove ..."" on dismiss button

### ❌ Don't

- Don't use color alone to convey meaning (always use label)
- Don't mix badge sizes in the same list
- Don't dismiss non-interactive status badges (use for filter chips only)
- Don't hardcode colors (use badge-{color} class)
        `.trim()},source:{transform:(a,e)=>{const n=e.args,{bg:t,text:i,dismiss:l}=r[n.color]??r.indigo,s=n.size==="lg",c=s?"var(--text-sm)":"var(--text-xs)",o=s?"400":"var(--font-medium)",u=s?"2px 12px":"2px 10px",d=s?16:14,w=n.icon?`
  <svg width="${d}" height="${d}" viewBox="0 0 20 20" fill="${i}" aria-hidden="true">
    <path fill-rule="evenodd" d="${$}" clip-rule="evenodd"/>
  </svg>`:"",p=n.dismissible?`
  <button type="button" aria-label="Remove ${n.label}" style="display:inline-flex;align-items:center;justify-content:center;background:none;border:none;cursor:pointer;padding:0;">
    <svg width="${d}" height="${d}" viewBox="0 0 20 20" fill="${l}" aria-hidden="true">
      <path fill-rule="evenodd" d="${C}" clip-rule="evenodd"/>
    </svg>
  </button>`:"";return`<span style="display:inline-flex;align-items:center;gap:4px;background:${t};color:${i};font-size:${c};font-weight:${o};border-radius:6px;padding:${u};white-space:nowrap;line-height:1.5;">${w}
  <span>${n.label}</span>${p}
</span>`}}}}},m={name:"Colors — all 8 themes",args:{size:"lg"},parameters:{controls:{include:["size"]},docs:{description:{story:`
All 8 color themes. Use the **size** control to compare at either size.

**✅ Do** — pick color by semantic meaning: green = success, red = error/danger, yellow = warning, gray = neutral.
**❌ Don't** — rely on color alone to convey meaning — always pair with a descriptive label (WCAG 1.4.1).
        `},source:{code:`// Gray — neutral status
<span className="badge badge-lg badge-gray">Neutral</span>

// Green — success / active
<span className="badge badge-lg badge-green">Active</span>

// Red — error / failed
<span className="badge badge-lg badge-red">Failed</span>

// Yellow — warning / pending
<span className="badge badge-lg badge-yellow">Pending</span>`,language:"jsx"}}},render:({size:a})=>{const e={gray:"Neutral",blue:"Assigned",indigo:"In review",purple:"Scheduled",pink:"Draft",green:"Active",yellow:"Pending",red:"Failed"};return`<div style="display:flex;flex-wrap:wrap;gap:8px;align-items:center;">
      ${y.map(n=>g({label:e[n],color:n,size:a})).join(`
      `)}
    </div>`}},h={name:"Sizes — lg and sm",args:{color:"indigo"},parameters:{controls:{include:["color"]},docs:{description:{story:"\n`lg` (default) and `sm` at the selected color theme.\n\n**✅ Do** — use `sm` in dense tables or compact list rows where vertical space is tight.\n**✅ Do** — use `lg` as the default in cards, page headers, and status columns.\n**❌ Don't** — mix sizes within the same row — pick one and be consistent per context.\n        "},source:{code:`// lg (default) — 25px height, 14px text
<span className="badge badge-lg badge-indigo">In review</span>

// sm (compact) — 22px height, 12px text
<span className="badge badge-sm badge-indigo">In review</span>`,language:"jsx"}}},render:({color:a})=>`
    <div style="display:flex;flex-direction:column;gap:16px;">
      <div style="display:flex;align-items:center;gap:16px;">
        <span style="width:32px;font:11px/1 sans-serif;color:#9ca3af;">lg</span>
        ${g({label:"In review",color:a,size:"lg"})}
      </div>
      <div style="display:flex;align-items:center;gap:16px;">
        <span style="width:32px;font:11px/1 sans-serif;color:#9ca3af;">sm</span>
        ${g({label:"In review",color:a,size:"sm"})}
      </div>
    </div>`},f={name:"With icon — all themes",args:{size:"lg"},parameters:{controls:{include:["size"]},docs:{description:{story:`
All 8 themes with a leading icon. Use the **size** control to compare.

**✅ Do** — use the icon to reinforce the badge meaning (clock = pending/scheduled, check = done).
**❌ Don't** — use the icon purely as decoration — it adds visual complexity without benefit.
        `},source:{code:`import { ClockIcon } from '@heroicons/react/24/outline';

<span className="badge badge-lg badge-indigo">
  <ClockIcon className="w-4 h-4" />
  <span>Scheduled</span>
</span>`,language:"jsx"}}},render:({size:a})=>{const e={gray:"Unknown",blue:"Assigned",indigo:"Scheduled",purple:"Queued",pink:"Draft",green:"Active",yellow:"Pending",red:"Overdue"};return`<div style="display:flex;flex-wrap:wrap;gap:8px;align-items:center;">
      ${y.map(n=>g({label:e[n],color:n,size:a,icon:!0})).join(`
      `)}
    </div>`}},x={name:"Dismissible — with × button",args:{size:"lg"},parameters:{controls:{include:["size"]},docs:{description:{story:`
All 8 themes with a dismiss × button. The × uses a brighter variant of the theme color (confirmed from Figma — not the same as the text color).

**✅ Do** — use for removable filter chips or tags (e.g. selected filters in a search bar).
**✅ Do** — set \`aria-label="Remove [label]"\` on the × button for screen readers.
**❌ Don't** — use dismissible badges for read-only status labels — use the basic badge instead.
        `},source:{code:`import { XMarkIcon } from '@heroicons/react/24/outline';

<span className="badge badge-lg badge-indigo">
  <span>In review</span>
  <button type="button" aria-label="Remove In review" className="badge-dismiss">
    <XMarkIcon className="w-4 h-4" />
  </button>
</span>`,language:"jsx"}}},render:({size:a})=>{const e={gray:"Neutral",blue:"Assigned",indigo:"In review",purple:"Scheduled",pink:"Draft",green:"Active",yellow:"Pending",red:"Failed"};return`<div style="display:flex;flex-wrap:wrap;gap:8px;align-items:center;">
      ${y.map(n=>g({label:e[n],color:n,size:a,dismissible:!0})).join(`
      `)}
    </div>`}},G={critical:["11.0% rev","10.6% rev","9.8% rev"],high:["6.9% rev","5.9% rev","4.3% rev"],medium:["3.1% rev","2.7% rev"],low:["1.4% rev","0.8% rev"],none:["—"]},v={name:"Metric chip — priority levels",args:{icon:!1},parameters:{controls:{include:["icon"]},docs:{description:{story:`
Two-line priority chip: bold label on top, metric value below. Toggle **icon** in Controls to switch between variants.

**✅ Do** — use when you need both a priority level AND a metric in a confined table cell.
**❌ Don't** — use as a status label without a metric — use the standard single-line badge instead.

CSS: \`<span class="badge badge-red badge--metric">\`
        `},source:{code:`import { ExclamationCircleIcon } from '@heroicons/react/24/outline';

// Basic metric chip
<span className="badge badge-red badge--metric">
  Critical
  <span className="badge--metric__sub">11.0% rev</span>
</span>

// With leading icon
<span className="badge badge-red badge--metric">
  <ExclamationCircleIcon className="w-3 h-3" />
  <span>Critical</span>
  <span className="badge--metric__sub">11.0% rev</span>
</span>`,language:"jsx"}}},render:({icon:a})=>`<div style="display:flex;gap:16px;flex-wrap:wrap;align-items:flex-start;">${V.map(({label:n,color:t,key:i})=>`
        <div style="display:flex;flex-direction:column;gap:6px;align-items:flex-start;">
          ${G[i].map(s=>X({label:n,sub:s,color:t,icon:a})).join(`
          `)}
        </div>`).join("")}</div>`};var k,z,S;b.parameters={...b.parameters,docs:{...(k=b.parameters)==null?void 0:k.docs,source:{originalSource:`{
  name: 'Interactive (Controls)',
  render: args => {
    const a = args;
    const {
      bg,
      text,
      dismiss
    } = BADGE_COLORS[a.color] ?? BADGE_COLORS.indigo;
    const isLg = a.size === 'lg';
    const fs = isLg ? 'var(--text-sm)' : 'var(--text-xs)';
    const fw = isLg ? '400' : 'var(--font-medium)';
    const pad = isLg ? '2px 12px' : '2px 10px';
    const iconSz = isLg ? 16 : 14;
    const iconPartHtml = a.icon ? \`\\n  <svg width="\${iconSz}" height="\${iconSz}" viewBox="0 0 20 20" fill="\${text}" aria-hidden="true">\\n    <path fill-rule="evenodd" d="\${ICON_PATH}" clip-rule="evenodd"/>\\n  </svg>\` : '';
    const iconPartReact = a.icon ? \`\\n  <ClockIcon className="w-4 h-4" />\` : '';
    const dismissPartHtml = a.dismissible ? \`\\n  <button type="button" aria-label="Remove \${a.label}" style="display:inline-flex;align-items:center;justify-content:center;background:none;border:none;cursor:pointer;padding:0;">\\n    <svg width="\${iconSz}" height="\${iconSz}" viewBox="0 0 20 20" fill="\${dismiss}" aria-hidden="true">\\n      <path fill-rule="evenodd" d="\${DISMISS_PATH}" clip-rule="evenodd"/>\\n    </svg>\\n  </button>\` : '';
    const dismissPartReact = a.dismissible ? \`\\n  <button type="button" aria-label="Remove \${a.label}">\\n    <XMarkIcon className="w-4 h-4" />\\n  </button>\` : '';
    const htmlCode = \`<span class="badge badge-\${a.size} badge-\${a.color}">\${a.icon ? '\\n  <svg width="16" height="16" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">\\n    <!-- icon -->\\n  </svg>' : ''}\\n  <span>\${a.label}</span>\${a.dismissible ? '\\n  <button type="button" aria-label="Remove ' + a.label + '">\\n    <svg width="16" height="16" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">\\n      <!-- x icon -->\\n    </svg>\\n  </button>' : ''}\\n</span>\`;
    const reactCode = \`\${a.icon ? "import { ClockIcon } from '@heroicons/react/24/outline';\\n" : ""}\${a.dismissible ? "import { XMarkIcon } from '@heroicons/react/24/outline';\\n" : ""}\${a.icon || a.dismissible ? "\\n" : ""}<span className="badge badge-\${a.size} badge-\${a.color}">\${a.icon ? '\\n  <ClockIcon className="w-4 h-4" />' : ''}\\n  <span>\${a.label}</span>\${a.dismissible ? '\\n  <button type="button" aria-label="Remove ' + a.label + '">\\n    <XMarkIcon className="w-4 h-4" />\\n  </button>' : ''}\\n</span>\`;
    const htmlEscaped = htmlCode.replace(/</g, '&lt;').replace(/>/g, '&gt;');
    const reactEscaped = reactCode.replace(/</g, '&lt;').replace(/>/g, '&gt;');
    return \`
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:40px;align-items:start;">
        <div style="padding:20px;border:1px solid #e5e7eb;border-radius:8px;">
          \${badge(args)}
        </div>
        <div style="display:flex;flex-direction:column;gap:24px;">
          <div style="padding:20px;border:1px solid #e5e7eb;border-radius:8px;">
            <div style="font-weight:600;font-size:12px;color:#666;margin-bottom:12px;text-transform:uppercase;letter-spacing:0.5px;">HTML</div>
            <div style="background:#f9fafb;padding:12px;border-radius:6px;margin-bottom:12px;overflow:auto;">
              <pre style="margin:0;font-family:monospace;font-size:13px;white-space:pre-wrap;word-break:break-word;"><code>\${htmlEscaped}</code></pre>
            </div>
            <button data-copy="\${htmlCode.split('"').join('&quot;')}" class="storybook-copy-btn" style="padding:8px 12px;background:#f3f4f6;color:#374151;border:1px solid #d1d5db;border-radius:4px;cursor:pointer;font-family:inherit;font-size:12px;font-weight:500;display:flex;align-items:center;gap:6px;">
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5">
                <rect x="2" y="2" width="8" height="8" rx="1"/>
                <path d="M6 14H12C13.1046 14 14 13.1046 14 12V6"/>
              </svg>
              Copy
            </button>
          </div>
          <div style="padding:20px;border:1px solid #e5e7eb;border-radius:8px;">
            <div style="font-weight:600;font-size:12px;color:#666;margin-bottom:12px;text-transform:uppercase;letter-spacing:0.5px;">React</div>
            <div style="background:#f9fafb;padding:12px;border-radius:6px;margin-bottom:12px;overflow:auto;">
              <pre style="margin:0;font-family:monospace;font-size:13px;white-space:pre-wrap;word-break:break-word;"><code>\${reactEscaped}</code></pre>
            </div>
            <button data-copy="\${reactCode.split('"').join('&quot;')}" class="storybook-copy-btn" style="padding:8px 12px;background:#f3f4f6;color:#374151;border:1px solid #d1d5db;border-radius:4px;cursor:pointer;font-family:inherit;font-size:12px;font-weight:500;display:flex;align-items:center;gap:6px;">
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5">
                <rect x="2" y="2" width="8" height="8" rx="1"/>
                <path d="M6 14H12C13.1046 14 14 13.1046 14 12V6"/>
              </svg>
              Copy
            </button>
          </div>
        </div>
      </div>
      <script>
        document.querySelectorAll('.storybook-copy-btn').forEach(btn => {
          btn.addEventListener('click', function() {
            navigator.clipboard.writeText(this.dataset.copy);
            const originalText = this.innerHTML;
            this.innerHTML = '<svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5"><polyline points="13 2 3 13 1 11"></polyline></svg>Copied!';
            this.style.background = '#dcfce7';
            this.style.color = '#166534';
            this.style.borderColor = '#bbf7d0';
            setTimeout(() => {
              this.innerHTML = originalText;
              this.style.background = '#f3f4f6';
              this.style.color = '#374151';
              this.style.borderColor = '#d1d5db';
            }, 2000);
          });
        });
      <\/script>
    \`;
  },
  parameters: {
    docs: {
      description: {
        story: \`
## Badge Snippet Reference

Use the **Controls** panel to experiment. Code updates live.

### Basic Syntax

\\\`\\\`\\\`
<span class="badge badge-{size} badge-{color}">Label</span>
\\\`\\\`\\\`

### Sizes

- \\\`badge-lg\\\` — 25px height, 14px text (default, use in most cases)
- \\\`badge-sm\\\` — 22px height, 12px text (dense tables, compact lists)

### Colors (Semantic)

| Color | Meaning | Use For |
|-------|---------|---------|
| **gray** | Neutral, unknown | Default status, N/A |
| **blue** | Info, assigned | Assigned to user, In queue |
| **indigo** | Primary, in progress | In review, Processing |
| **purple** | Custom, scheduled | Scheduled, Queued |
| **pink** | Draft, preliminary | Draft, Incomplete |
| **green** | Success, active | Active, Approved, Live |
| **yellow** | Warning, pending | Pending, Needs attention |
| **red** | Error, critical | Failed, Error, Critical |

### Modifiers

- **With icon:** \\\`<ClockIcon className="w-4 h-4" />\\\` — reinforces meaning
- **Dismissible:** Add \\\`<button aria-label="Remove [label]">...</button>\\\` — for filter chips
- **Metric chip:** \\\`badge--metric\\\` with \\\`badge--metric__sub\\\` for two-line layout

### ✅ Do

- Use semantic color (green = success, red = error, yellow = warning)
- Pair icon with label when using icons
- Use \\\`badge-lg\\\` by default
- Set \\\`aria-label="Remove ..."\\" on dismiss button

### ❌ Don't

- Don't use color alone to convey meaning (always use label)
- Don't mix badge sizes in the same list
- Don't dismiss non-interactive status badges (use for filter chips only)
- Don't hardcode colors (use badge-{color} class)
        \`.trim()
      },
      source: {
        transform: (_src, ctx) => {
          const a = ctx.args;
          const {
            bg,
            text,
            dismiss
          } = BADGE_COLORS[a.color] ?? BADGE_COLORS.indigo;
          const isLg = a.size === 'lg';
          const fs = isLg ? 'var(--text-sm)' : 'var(--text-xs)';
          const fw = isLg ? '400' : 'var(--font-medium)';
          const pad = isLg ? '2px 12px' : '2px 10px';
          const iconSz = isLg ? 16 : 14;
          const iconPart = a.icon ? \`\\n  <svg width="\${iconSz}" height="\${iconSz}" viewBox="0 0 20 20" fill="\${text}" aria-hidden="true">\\n    <path fill-rule="evenodd" d="\${ICON_PATH}" clip-rule="evenodd"/>\\n  </svg>\` : '';
          const dismissPart = a.dismissible ? \`\\n  <button type="button" aria-label="Remove \${a.label}" style="display:inline-flex;align-items:center;justify-content:center;background:none;border:none;cursor:pointer;padding:0;">\\n    <svg width="\${iconSz}" height="\${iconSz}" viewBox="0 0 20 20" fill="\${dismiss}" aria-hidden="true">\\n      <path fill-rule="evenodd" d="\${DISMISS_PATH}" clip-rule="evenodd"/>\\n    </svg>\\n  </button>\` : '';
          return \`<span style="display:inline-flex;align-items:center;gap:4px;background:\${bg};color:\${text};font-size:\${fs};font-weight:\${fw};border-radius:6px;padding:\${pad};white-space:nowrap;line-height:1.5;">\${iconPart}\\n  <span>\${a.label}</span>\${dismissPart}\\n</span>\`;
        }
      }
    }
  }
}`,...(S=(z=b.parameters)==null?void 0:z.docs)==null?void 0:S.source}}};var I,N,A;m.parameters={...m.parameters,docs:{...(I=m.parameters)==null?void 0:I.docs,source:{originalSource:`{
  name: 'Colors — all 8 themes',
  args: {
    size: 'lg'
  },
  parameters: {
    controls: {
      include: ['size']
    },
    docs: {
      description: {
        story: \`
All 8 color themes. Use the **size** control to compare at either size.

**✅ Do** — pick color by semantic meaning: green = success, red = error/danger, yellow = warning, gray = neutral.
**❌ Don't** — rely on color alone to convey meaning — always pair with a descriptive label (WCAG 1.4.1).
        \`
      },
      source: {
        code: \`// Gray — neutral status
<span className="badge badge-lg badge-gray">Neutral</span>

// Green — success / active
<span className="badge badge-lg badge-green">Active</span>

// Red — error / failed
<span className="badge badge-lg badge-red">Failed</span>

// Yellow — warning / pending
<span className="badge badge-lg badge-yellow">Pending</span>\`,
        language: 'jsx'
      }
    }
  },
  render: ({
    size
  }) => {
    const labels = {
      gray: 'Neutral',
      blue: 'Assigned',
      indigo: 'In review',
      purple: 'Scheduled',
      pink: 'Draft',
      green: 'Active',
      yellow: 'Pending',
      red: 'Failed'
    };
    return \`<div style="display:flex;flex-wrap:wrap;gap:8px;align-items:center;">
      \${COLOR_NAMES.map(c => badge({
      label: labels[c],
      color: c,
      size
    })).join('\\n      ')}
    </div>\`;
  }
}`,...(A=(N=m.parameters)==null?void 0:N.docs)==null?void 0:A.source}}};var D,L,M;h.parameters={...h.parameters,docs:{...(D=h.parameters)==null?void 0:D.docs,source:{originalSource:`{
  name: 'Sizes — lg and sm',
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
\\\`lg\\\` (default) and \\\`sm\\\` at the selected color theme.

**✅ Do** — use \\\`sm\\\` in dense tables or compact list rows where vertical space is tight.
**✅ Do** — use \\\`lg\\\` as the default in cards, page headers, and status columns.
**❌ Don't** — mix sizes within the same row — pick one and be consistent per context.
        \`
      },
      source: {
        code: \`// lg (default) — 25px height, 14px text
<span className="badge badge-lg badge-indigo">In review</span>

// sm (compact) — 22px height, 12px text
<span className="badge badge-sm badge-indigo">In review</span>\`,
        language: 'jsx'
      }
    }
  },
  render: ({
    color
  }) => \`
    <div style="display:flex;flex-direction:column;gap:16px;">
      <div style="display:flex;align-items:center;gap:16px;">
        <span style="width:32px;font:11px/1 sans-serif;color:#9ca3af;">lg</span>
        \${badge({
    label: 'In review',
    color,
    size: 'lg'
  })}
      </div>
      <div style="display:flex;align-items:center;gap:16px;">
        <span style="width:32px;font:11px/1 sans-serif;color:#9ca3af;">sm</span>
        \${badge({
    label: 'In review',
    color,
    size: 'sm'
  })}
      </div>
    </div>\`
}`,...(M=(L=h.parameters)==null?void 0:L.docs)==null?void 0:M.source}}};var R,T,E;f.parameters={...f.parameters,docs:{...(R=f.parameters)==null?void 0:R.docs,source:{originalSource:`{
  name: 'With icon — all themes',
  args: {
    size: 'lg'
  },
  parameters: {
    controls: {
      include: ['size']
    },
    docs: {
      description: {
        story: \`
All 8 themes with a leading icon. Use the **size** control to compare.

**✅ Do** — use the icon to reinforce the badge meaning (clock = pending/scheduled, check = done).
**❌ Don't** — use the icon purely as decoration — it adds visual complexity without benefit.
        \`
      },
      source: {
        code: \`import { ClockIcon } from '@heroicons/react/24/outline';

<span className="badge badge-lg badge-indigo">
  <ClockIcon className="w-4 h-4" />
  <span>Scheduled</span>
</span>\`,
        language: 'jsx'
      }
    }
  },
  render: ({
    size
  }) => {
    const labels = {
      gray: 'Unknown',
      blue: 'Assigned',
      indigo: 'Scheduled',
      purple: 'Queued',
      pink: 'Draft',
      green: 'Active',
      yellow: 'Pending',
      red: 'Overdue'
    };
    return \`<div style="display:flex;flex-wrap:wrap;gap:8px;align-items:center;">
      \${COLOR_NAMES.map(c => badge({
      label: labels[c],
      color: c,
      size,
      icon: true
    })).join('\\n      ')}
    </div>\`;
  }
}`,...(E=(T=f.parameters)==null?void 0:T.docs)==null?void 0:E.source}}};var B,P,_;x.parameters={...x.parameters,docs:{...(B=x.parameters)==null?void 0:B.docs,source:{originalSource:`{
  name: 'Dismissible — with × button',
  args: {
    size: 'lg'
  },
  parameters: {
    controls: {
      include: ['size']
    },
    docs: {
      description: {
        story: \`
All 8 themes with a dismiss × button. The × uses a brighter variant of the theme color (confirmed from Figma — not the same as the text color).

**✅ Do** — use for removable filter chips or tags (e.g. selected filters in a search bar).
**✅ Do** — set \\\`aria-label="Remove [label]"\\\` on the × button for screen readers.
**❌ Don't** — use dismissible badges for read-only status labels — use the basic badge instead.
        \`
      },
      source: {
        code: \`import { XMarkIcon } from '@heroicons/react/24/outline';

<span className="badge badge-lg badge-indigo">
  <span>In review</span>
  <button type="button" aria-label="Remove In review" className="badge-dismiss">
    <XMarkIcon className="w-4 h-4" />
  </button>
</span>\`,
        language: 'jsx'
      }
    }
  },
  render: ({
    size
  }) => {
    const labels = {
      gray: 'Neutral',
      blue: 'Assigned',
      indigo: 'In review',
      purple: 'Scheduled',
      pink: 'Draft',
      green: 'Active',
      yellow: 'Pending',
      red: 'Failed'
    };
    return \`<div style="display:flex;flex-wrap:wrap;gap:8px;align-items:center;">
      \${COLOR_NAMES.map(c => badge({
      label: labels[c],
      color: c,
      size,
      dismissible: true
    })).join('\\n      ')}
    </div>\`;
  }
}`,...(_=(P=x.parameters)==null?void 0:P.docs)==null?void 0:_.source}}};var j,H,O;v.parameters={...v.parameters,docs:{...(j=v.parameters)==null?void 0:j.docs,source:{originalSource:`{
  name: 'Metric chip — priority levels',
  args: {
    icon: false
  },
  parameters: {
    controls: {
      include: ['icon']
    },
    docs: {
      description: {
        story: \`
Two-line priority chip: bold label on top, metric value below. Toggle **icon** in Controls to switch between variants.

**✅ Do** — use when you need both a priority level AND a metric in a confined table cell.
**❌ Don't** — use as a status label without a metric — use the standard single-line badge instead.

CSS: \\\`<span class="badge badge-red badge--metric">\\\`
        \`
      },
      source: {
        code: \`import { ExclamationCircleIcon } from '@heroicons/react/24/outline';

// Basic metric chip
<span className="badge badge-red badge--metric">
  Critical
  <span className="badge--metric__sub">11.0% rev</span>
</span>

// With leading icon
<span className="badge badge-red badge--metric">
  <ExclamationCircleIcon className="w-3 h-3" />
  <span>Critical</span>
  <span className="badge--metric__sub">11.0% rev</span>
</span>\`,
        language: 'jsx'
      }
    }
  },
  render: ({
    icon
  }) => {
    const cols = METRIC_LEVELS.map(({
      label,
      color,
      key
    }) => {
      const values = METRIC_SAMPLES[key];
      return \`
        <div style="display:flex;flex-direction:column;gap:6px;align-items:flex-start;">
          \${values.map(v => metricBadge({
        label,
        sub: v,
        color,
        icon
      })).join('\\n          ')}
        </div>\`;
    });
    return \`<div style="display:flex;gap:16px;flex-wrap:wrap;align-items:flex-start;">\${cols.join('')}</div>\`;
  }
}`,...(O=(H=v.parameters)==null?void 0:H.docs)==null?void 0:O.source}}};const Q=["Interactive","AllColors","AllSizes","WithIcon","Dismissible","MetricChip"];export{m as AllColors,h as AllSizes,x as Dismissible,b as Interactive,v as MetricChip,f as WithIcon,Q as __namedExportsOrder,q as default};
