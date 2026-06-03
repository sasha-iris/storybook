function y({color:o,title:t,body:e}){const i=o==="dark";return`
<div style="background:${i?"var(--color-bg-dark)":"var(--color-bg-surface)"};border-radius:4px;padding:8px;min-width:100px;max-width:200px;${i?"":"box-shadow:0 2px 8px rgba(0,0,0,.15);"}font-family:inherit;">
  <div style="color:${i?"#ffffff":"var(--color-text-heading)"};font-weight:var(--font-medium);font-size:var(--text-sm);line-height:20px;margin-bottom:6px;white-space:nowrap;">${t}</div>
  <div style="height:1px;background:${i?"#4b5563":"var(--color-border-default)"};margin:0 0 6px;"></div>
  <div style="color:${i?"var(--color-bg-muted)":"var(--color-text-secondary)"};font-weight:var(--font-normal);font-size:var(--text-xs);line-height:16px;">${e}</div>
</div>`}function w({position:o,color:t}){const e=t==="dark"?"var(--color-bg-dark)":"var(--color-bg-surface)";return`<div style="width:0;height:0;flex-shrink:0;${{top:`border-left:17px solid transparent;border-right:17px solid transparent;border-top:8px solid ${e}`,bottom:`border-left:17px solid transparent;border-right:17px solid transparent;border-bottom:8px solid ${e}`,right:`border-top:17px solid transparent;border-bottom:17px solid transparent;border-right:8px solid ${e}`,left:`border-top:17px solid transparent;border-bottom:17px solid transparent;border-left:8px solid ${e}`}[o]}"></div>`}const a='<button class="btn btn-primary btn-sm" style="cursor:default;white-space:nowrap;">Show info</button>';function d({color:o="dark",position:t="top",title:e,body:i}){const r=y({color:o,title:e,body:i}),n=w({position:t,color:o});return t==="top"?`<div style="display:inline-flex;flex-direction:column;align-items:center;">${r}${n}${a}</div>`:t==="bottom"?`<div style="display:inline-flex;flex-direction:column;align-items:center;">${a}${n}${r}</div>`:t==="right"?`<div style="display:inline-flex;flex-direction:row;align-items:center;">${a}${n}${r}</div>`:`<div style="display:inline-flex;flex-direction:row;align-items:center;">${r}${n}${a}</div>`}const C={title:"Iris Library/Tooltip",tags:["autodocs","stable"],parameters:{docs:{description:{component:`
**Tooltip** surfaces a short label or explanation when a user hovers or focuses an element.

**When to use**
- Clarifying an icon button that has no visible label
- Surfacing extra context for a form field or data point without cluttering the layout
- Showing keyboard shortcuts or command names on hover

**When NOT to use**
- Long or critical information → use a popover or inline help text (tooltips are hidden by default and not read on mobile)
- Required form guidance → use a visible hint below the field
- Error messages → use an inline validation message

**Anatomy**
\`[arrow] [title] [divider] [body]\` — title + body combination; use the \`title\`-only pattern for short single-line labels.

**Colors**: \`dark\` (default) suits most page backgrounds; \`white\` suits dark-background contexts or when the tooltip sits on a dark card.
        `}}},argTypes:{title:{control:"text",description:"Short label rendered at var(--font-medium)/var(--text-sm). Keep to one line — overflow is not handled.",table:{category:"Content",defaultValue:{summary:"More information"}}},body:{control:"text",description:"Supporting description at var(--font-normal)/var(--text-xs). Keep to 1–2 sentences maximum.",table:{category:"Content",defaultValue:{summary:"Descriptive text…"}}},color:{control:"select",options:["dark","white"],description:"Color theme. `dark` — bg `var(--color-bg-dark)`, text white/`var(--color-bg-muted)`. `white` — bg `var(--color-bg-surface)`, text `var(--color-text-heading)`/`var(--color-text-secondary)` with a drop shadow.",table:{category:"Appearance",defaultValue:{summary:"dark"}}},position:{control:"select",options:["top","right","bottom","left"],description:"Direction the tooltip appears relative to its trigger. The arrow caret always points toward the trigger.",table:{category:"Appearance",defaultValue:{summary:"top"}}}},args:{color:"dark",position:"top",title:"More information",body:"The user wants to find a specific page or site."}},s={name:"Interactive (Controls)",render:o=>`<div style="padding:60px;display:inline-flex;align-items:center;justify-content:center;">
      ${d(o)}
    </div>`,parameters:{docs:{description:{story:"Use **Controls** to switch color, position, and content. The tooltip is always visible here — in production it appears on hover/focus."},source:{transform:(o,t)=>{const{color:e,position:i,title:r,body:n}=t.args;return`<!-- Tooltip: ${e} / ${i} -->
<div class="tooltip-wrap tooltip-${i}" data-tooltip>
  <button class="btn btn-primary btn-sm" aria-describedby="tip-1">Show info</button>
  <div class="tooltip-bubble tooltip-${e}" role="tooltip" id="tip-1">
    <strong style="font-weight:var(--font-medium);font-size:var(--text-sm);">${r}</strong>
    <div style="height:1px;background:var(--color-border-default);margin:6px 0;"></div>
    <p style="font-size:var(--text-xs);color:var(--color-text-secondary);">${n}</p>
  </div>
</div>`}}}}},l={name:"All positions",args:{color:"dark"},parameters:{controls:{include:["color"]},docs:{description:{story:"All four position variants. Switch **color** to preview both themes across all positions.\n\n**✅ Do** — choose the position that keeps the tooltip within the viewport (prefer `top` or `bottom` for most inline elements).\n**❌ Don't** — use `left`/`right` on elements near viewport edges; the tooltip will clip."},source:{code:`<!-- Top -->
<div class="tooltip-wrap tooltip-top" data-tooltip>
  <button class="btn btn-primary btn-sm" aria-describedby="tip-top">Trigger</button>
  <div class="tooltip-bubble tooltip-dark" role="tooltip" id="tip-top"> … </div>
</div>

<!-- Right -->
<div class="tooltip-wrap tooltip-right" data-tooltip>
  <button class="btn btn-primary btn-sm" aria-describedby="tip-right">Trigger</button>
  <div class="tooltip-bubble tooltip-dark" role="tooltip" id="tip-right"> … </div>
</div>

<!-- Bottom -->
<div class="tooltip-wrap tooltip-bottom" data-tooltip>
  <button class="btn btn-primary btn-sm" aria-describedby="tip-bottom">Trigger</button>
  <div class="tooltip-bubble tooltip-dark" role="tooltip" id="tip-bottom"> … </div>
</div>

<!-- Left -->
<div class="tooltip-wrap tooltip-left" data-tooltip>
  <button class="btn btn-primary btn-sm" aria-describedby="tip-left">Trigger</button>
  <div class="tooltip-bubble tooltip-dark" role="tooltip" id="tip-left"> … </div>
</div>`,language:"html"}}},render:({color:o})=>{const t={title:"More information",body:"The user wants to find a specific page or site."},e=["top","right","bottom","left"],i={top:"Top",right:"Right",bottom:"Bottom",left:"Left"};return`
<div style="display:grid;grid-template-columns:1fr 1fr;gap:64px 80px;padding:80px 60px;background:var(--color-bg-default);width:fit-content;">
  ${e.map(r=>`
    <div style="display:flex;flex-direction:column;align-items:center;gap:8px;">
      <span style="font:var(--font-medium) 11px/1 inherit;color:var(--color-text-secondary);text-transform:uppercase;letter-spacing:.08em;margin-bottom:4px;">${i[r]}</span>
      ${d({color:o,position:r,...t})}
    </div>`).join("")}
</div>`}},p={name:"Both colors",args:{position:"top"},parameters:{controls:{include:["position"]},docs:{description:{story:"Dark vs White color themes side by side. Switch **position** to compare arrow placement across both themes.\n\n**✅ Do** — use `dark` (default) on light-background pages.\n**✅ Do** — use `white` on dark-background surfaces (dark cards, dark sidebars).\n**❌ Don't** — use `white` on a white page background without ensuring the drop shadow provides sufficient separation."},source:{code:`<!-- Dark tooltip -->
<div class="tooltip-bubble tooltip-dark" role="tooltip">
  <strong style="font-weight:var(--font-medium);font-size:var(--text-sm);color:#ffffff;">More information</strong>
  <div style="height:1px;background:#4b5563;margin:6px 0;"></div>
  <p style="font-size:var(--text-xs);color:var(--color-bg-muted);">The user wants to find a specific page or site.</p>
</div>

<!-- White tooltip -->
<div class="tooltip-bubble tooltip-light" role="tooltip">
  <strong style="font-weight:var(--font-medium);font-size:var(--text-sm);color:var(--color-text-heading);">More information</strong>
  <div style="height:1px;background:var(--color-border-default);margin:6px 0;"></div>
  <p style="font-size:var(--text-xs);color:var(--color-text-secondary);">The user wants to find a specific page or site.</p>
</div>`,language:"html"}}},render:({position:o})=>{const t={title:"More information",body:"The user wants to find a specific page or site."};return`
<div style="display:flex;gap:80px;padding:80px 60px;align-items:center;justify-content:center;background:var(--color-bg-muted);">
  <div style="display:flex;flex-direction:column;align-items:center;gap:8px;">
    <span style="font:var(--font-medium) 11px/1 inherit;color:var(--color-text-secondary);text-transform:uppercase;letter-spacing:.08em;margin-bottom:4px;">Dark</span>
    ${d({color:"dark",position:o,...t})}
  </div>
  <div style="display:flex;flex-direction:column;align-items:center;gap:8px;">
    <span style="font:var(--font-medium) 11px/1 inherit;color:var(--color-text-secondary);text-transform:uppercase;letter-spacing:.08em;margin-bottom:4px;">White</span>
    ${d({color:"white",position:o,...t})}
  </div>
</div>`}};var c,b,m;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`{
  name: 'Interactive (Controls)',
  render: args => {
    return \`<div style="padding:60px;display:inline-flex;align-items:center;justify-content:center;">
      \${tooltip(args)}
    </div>\`;
  },
  parameters: {
    docs: {
      description: {
        story: 'Use **Controls** to switch color, position, and content. The tooltip is always visible here — in production it appears on hover/focus.'
      },
      source: {
        transform: (_src, ctx) => {
          const {
            color,
            position,
            title,
            body
          } = ctx.args;
          return \`<!-- Tooltip: \${color} / \${position} -->
<div class="tooltip-wrap tooltip-\${position}" data-tooltip>
  <button class="btn btn-primary btn-sm" aria-describedby="tip-1">Show info</button>
  <div class="tooltip-bubble tooltip-\${color}" role="tooltip" id="tip-1">
    <strong style="font-weight:var(--font-medium);font-size:var(--text-sm);">\${title}</strong>
    <div style="height:1px;background:var(--color-border-default);margin:6px 0;"></div>
    <p style="font-size:var(--text-xs);color:var(--color-text-secondary);">\${body}</p>
  </div>
</div>\`;
        }
      }
    }
  }
}`,...(m=(b=s.parameters)==null?void 0:b.docs)==null?void 0:m.source}}};var u,g,f;l.parameters={...l.parameters,docs:{...(u=l.parameters)==null?void 0:u.docs,source:{originalSource:`{
  name: 'All positions',
  args: {
    color: 'dark'
  },
  parameters: {
    controls: {
      include: ['color']
    },
    docs: {
      description: {
        story: \`All four position variants. Switch **color** to preview both themes across all positions.

**✅ Do** — choose the position that keeps the tooltip within the viewport (prefer \\\`top\\\` or \\\`bottom\\\` for most inline elements).
**❌ Don't** — use \\\`left\\\`/\\\`right\\\` on elements near viewport edges; the tooltip will clip.\`
      },
      source: {
        code: \`<!-- Top -->
<div class="tooltip-wrap tooltip-top" data-tooltip>
  <button class="btn btn-primary btn-sm" aria-describedby="tip-top">Trigger</button>
  <div class="tooltip-bubble tooltip-dark" role="tooltip" id="tip-top"> … </div>
</div>

<!-- Right -->
<div class="tooltip-wrap tooltip-right" data-tooltip>
  <button class="btn btn-primary btn-sm" aria-describedby="tip-right">Trigger</button>
  <div class="tooltip-bubble tooltip-dark" role="tooltip" id="tip-right"> … </div>
</div>

<!-- Bottom -->
<div class="tooltip-wrap tooltip-bottom" data-tooltip>
  <button class="btn btn-primary btn-sm" aria-describedby="tip-bottom">Trigger</button>
  <div class="tooltip-bubble tooltip-dark" role="tooltip" id="tip-bottom"> … </div>
</div>

<!-- Left -->
<div class="tooltip-wrap tooltip-left" data-tooltip>
  <button class="btn btn-primary btn-sm" aria-describedby="tip-left">Trigger</button>
  <div class="tooltip-bubble tooltip-dark" role="tooltip" id="tip-left"> … </div>
</div>\`,
        language: 'html'
      }
    }
  },
  render: ({
    color
  }) => {
    const t = {
      title: 'More information',
      body: 'The user wants to find a specific page or site.'
    };
    const positions = ['top', 'right', 'bottom', 'left'];
    const labels = {
      top: 'Top',
      right: 'Right',
      bottom: 'Bottom',
      left: 'Left'
    };
    return \`
<div style="display:grid;grid-template-columns:1fr 1fr;gap:64px 80px;padding:80px 60px;background:var(--color-bg-default);width:fit-content;">
  \${positions.map(pos => \`
    <div style="display:flex;flex-direction:column;align-items:center;gap:8px;">
      <span style="font:var(--font-medium) 11px/1 inherit;color:var(--color-text-secondary);text-transform:uppercase;letter-spacing:.08em;margin-bottom:4px;">\${labels[pos]}</span>
      \${tooltip({
      color,
      position: pos,
      ...t
    })}
    </div>\`).join('')}
</div>\`;
  }
}`,...(f=(g=l.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};var v,h,x;p.parameters={...p.parameters,docs:{...(v=p.parameters)==null?void 0:v.docs,source:{originalSource:`{
  name: 'Both colors',
  args: {
    position: 'top'
  },
  parameters: {
    controls: {
      include: ['position']
    },
    docs: {
      description: {
        story: \`Dark vs White color themes side by side. Switch **position** to compare arrow placement across both themes.

**✅ Do** — use \\\`dark\\\` (default) on light-background pages.
**✅ Do** — use \\\`white\\\` on dark-background surfaces (dark cards, dark sidebars).
**❌ Don't** — use \\\`white\\\` on a white page background without ensuring the drop shadow provides sufficient separation.\`
      },
      source: {
        code: \`<!-- Dark tooltip -->
<div class="tooltip-bubble tooltip-dark" role="tooltip">
  <strong style="font-weight:var(--font-medium);font-size:var(--text-sm);color:#ffffff;">More information</strong>
  <div style="height:1px;background:#4b5563;margin:6px 0;"></div>
  <p style="font-size:var(--text-xs);color:var(--color-bg-muted);">The user wants to find a specific page or site.</p>
</div>

<!-- White tooltip -->
<div class="tooltip-bubble tooltip-light" role="tooltip">
  <strong style="font-weight:var(--font-medium);font-size:var(--text-sm);color:var(--color-text-heading);">More information</strong>
  <div style="height:1px;background:var(--color-border-default);margin:6px 0;"></div>
  <p style="font-size:var(--text-xs);color:var(--color-text-secondary);">The user wants to find a specific page or site.</p>
</div>\`,
        language: 'html'
      }
    }
  },
  render: ({
    position
  }) => {
    const t = {
      title: 'More information',
      body: 'The user wants to find a specific page or site.'
    };
    return \`
<div style="display:flex;gap:80px;padding:80px 60px;align-items:center;justify-content:center;background:var(--color-bg-muted);">
  <div style="display:flex;flex-direction:column;align-items:center;gap:8px;">
    <span style="font:var(--font-medium) 11px/1 inherit;color:var(--color-text-secondary);text-transform:uppercase;letter-spacing:.08em;margin-bottom:4px;">Dark</span>
    \${tooltip({
      color: 'dark',
      position,
      ...t
    })}
  </div>
  <div style="display:flex;flex-direction:column;align-items:center;gap:8px;">
    <span style="font:var(--font-medium) 11px/1 inherit;color:var(--color-text-secondary);text-transform:uppercase;letter-spacing:.08em;margin-bottom:4px;">White</span>
    \${tooltip({
      color: 'white',
      position,
      ...t
    })}
  </div>
</div>\`;
  }
}`,...(x=(h=p.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};const D=["Interactive","AllPositions","BothColors"];export{l as AllPositions,p as BothColors,s as Interactive,D as __namedExportsOrder,C as default};
