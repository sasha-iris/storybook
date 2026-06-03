const _={title:"Iris Library/Button",tags:["autodocs"],parameters:{layout:"padded",backgrounds:{default:"light"},docs:{description:{component:`
Iris button component — 7 colors × 5 sizes × 2 outline modes × icon-only.

## Quick Start

**1. Import styles** — Copy \`iris-components.css\` from the repository:
\`\`\`html
<link rel="stylesheet" href="iris-components.css">
\`\`\`

**2. Copy component code** — Use the "Interactive (Controls)" story:
- Adjust size, color, and modifiers using Controls
- Click "Copy" to get HTML or React code

## Usage

**CSS classes:** \`btn btn-{color} btn-{size}\`
**Outline:** swap \`btn-{color}\` for \`btn-outline-{color}\`
**Icon-only:** add \`btn-icon\` modifier (removes padding, sets square dimensions)
**Group:** wrap in \`.btn-group\` container

\`\`\`jsx
<button className="btn btn-primary btn-md">Button text</button>
<button className="btn btn-outline-primary btn-md">Button text</button>
<button className="btn btn-icon btn-primary btn-md" aria-label="Action">
  {/* icon here */}
</button>
\`\`\`

See [SETUP.md](https://github.com/sasha-iris/storybook/blob/main/docs/SETUP.md) for complete installation instructions.
        `}}},argTypes:{label:{control:"text",description:"Button label text. Ignored when `iconOnly` is true.",table:{category:"Content",defaultValue:{summary:"Button text"}}},iconLeft:{control:"boolean",description:"Prepend a left icon (star placeholder). Size: 16px for xs/sm, 20px for md/lg/xl.",table:{category:"Content",defaultValue:{summary:!1}}},iconRight:{control:"boolean",description:"Append a right icon (arrow). Ignored when `iconOnly` is true.",table:{category:"Content",defaultValue:{summary:!1}}},iconOnly:{control:"boolean",description:"Icon-only mode — removes label, forces square aspect ratio via `.btn-icon`.",table:{category:"Content",defaultValue:{summary:!1}}},color:{control:"select",options:["primary","dark","green","red","yellow","blue","gray","alternative","light","purple"],description:["Figma colors: **primary** `#42389d` · **dark** `#1e2939` · **green** `#007a55` ·","**red** `#c10007` · **yellow** `#d03801` (renders orange) · **blue** `#1447e6` ·","**gray** light surface w/ dark text.","","`alternative` / `light` / `purple` are legacy variants not in current Figma."].join(`
`),table:{category:"Appearance",defaultValue:{summary:"primary"}}},size:{control:"select",options:["xs","sm","md","lg","xl"],description:"Figma sizes: xs (34px h) · sm (36px) · md / base (40px) · lg / l (48px) · xl (52px).",table:{category:"Appearance",defaultValue:{summary:"md"}}},outline:{control:"boolean",description:"Outline / ghost mode. Swaps `.btn-{color}` for `.btn-outline-{color}`. Background becomes transparent.",table:{category:"Appearance",defaultValue:{summary:!1}}},pill:{control:"boolean",description:"Full pill border-radius via `.btn-pill`. Default radius is 12px (`--radius-lg`).",table:{category:"Appearance",defaultValue:{summary:!1}}},disabled:{control:"boolean",description:'Disabled state — 50% opacity, `pointer-events: none`. Adds `disabled` + `aria-disabled="true"` attributes.',table:{category:"State",defaultValue:{summary:!1}}}},args:{label:"Button text",color:"primary",size:"md",outline:!1,pill:!1,disabled:!1,iconLeft:!1,iconRight:!1,iconOnly:!1}},q={xs:16,sm:16,md:20,lg:20,xl:20},G=e=>`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
  style="width:${e}px;height:${e}px;flex-shrink:0;" aria-hidden="true">
  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462
    c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755
    1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197
    -1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81
    h3.461a1 1 0 00.951-.69l1.07-3.292z" />
</svg>`,W=e=>`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
  style="width:${e}px;height:${e}px;flex-shrink:0;" aria-hidden="true">
  <path fill-rule="evenodd"
    d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414
    L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
    clip-rule="evenodd"/>
</svg>`,o=({label:e="Button text",color:n="primary",size:t="md",outline:a=!1,pill:r=!1,disabled:l=!1,iconLeft:i=!1,iconRight:c=!1,iconOnly:s=!1})=>{const d=["btn",a?`btn-outline-${n}`:`btn-${n}`,`btn-${t}`,r?"btn-pill":"",s?"btn-icon":""].filter(Boolean).join(" "),v=q[t]||20,M=i||s?G(v):"",H=c&&!s?W(v):"",V=s?"":`<span>${e}</span>`;return`<button class="${d}"${l?' disabled aria-disabled="true"':""}
    aria-label="${s?e:""}"
  >${M}${V}${H}</button>`},p={name:"Interactive (Controls)",render:e=>{const n=e,a=["btn",n.outline?`btn-outline-${n.color}`:`btn-${n.color}`,`btn-${n.size}`,n.pill?"btn-pill":"",n.iconOnly?"btn-icon":""].filter(Boolean).join(" ");let r="",l="";if(n.iconOnly)r=`<button class="${a}" aria-label="${n.label}">
  <!-- icon svg here -->
</button>`,l=`<button className="${a}" aria-label="${n.label}">
  {/* icon here */}
</button>`;else{const s=n.iconLeft?`
  {/* left icon */}`:"",f=n.iconRight?`
  {/* right icon */}`:"",d=n.disabled?' disabled aria-disabled="true"':"";r=`<button class="${a}"${d}>
  <span>${n.label}</span>${n.iconLeft?`
  <!-- left icon -->`:""}${n.iconRight?`
  <!-- right icon -->`:""}
</button>`,l=`<button className="${a}"${d}>${s}
  <span>${n.label}</span>${f}
</button>`}const i=r.replace(/</g,"&lt;").replace(/>/g,"&gt;"),c=l.replace(/</g,"&lt;").replace(/>/g,"&gt;");return`
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:40px;align-items:start;">
        <div style="padding:20px;border:1px solid #e5e7eb;border-radius:8px;">
          ${o(e)}
        </div>
        <div style="display:flex;flex-direction:column;gap:24px;">
          <div style="padding:20px;border:1px solid #e5e7eb;border-radius:8px;">
            <div style="font-weight:600;font-size:12px;color:#666;margin-bottom:12px;text-transform:uppercase;letter-spacing:0.5px;">HTML</div>
            <div style="background:#f9fafb;padding:12px;border-radius:6px;margin-bottom:12px;overflow:auto;">
              <pre style="margin:0;font-family:monospace;font-size:13px;white-space:pre-wrap;word-break:break-word;"><code>${i}</code></pre>
            </div>
            <button data-copy="${r.split('"').join("&quot;")}" class="storybook-copy-btn" style="padding:8px 12px;background:#f3f4f6;color:#374151;border:1px solid #d1d5db;border-radius:4px;cursor:pointer;font-family:inherit;font-size:12px;font-weight:500;display:flex;align-items:center;gap:6px;">
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
              <pre style="margin:0;font-family:monospace;font-size:13px;white-space:pre-wrap;word-break:break-word;"><code>${c}</code></pre>
            </div>
            <button data-copy="${l.split('"').join("&quot;")}" class="storybook-copy-btn" style="padding:8px 12px;background:#f3f4f6;color:#374151;border:1px solid #d1d5db;border-radius:4px;cursor:pointer;font-family:inherit;font-size:12px;font-weight:500;display:flex;align-items:center;gap:6px;">
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
## Button Snippet Reference

Use the **Controls** panel to experiment with all combinations. The code below updates live.

### Basic Syntax

\`\`\`
<button class="btn btn-{color} btn-{size}">Label</button>
\`\`\`

### Color Variants

- **Solid:** \`btn-primary\`, \`btn-dark\`, \`btn-green\`, \`btn-red\`, \`btn-yellow\`, \`btn-blue\`, \`btn-gray\`
- **Outline:** \`btn-outline-{color}\` (replaces \`btn-{color}\`)

### Sizes

\`btn-xs\` (34px) · \`btn-sm\` (36px) · \`btn-md\` (40px) · \`btn-lg\` (48px) · \`btn-xl\` (52px)

### Modifiers

- \`btn-pill\` — full border-radius
- \`btn-icon\` — square aspect ratio (icon-only buttons)
- \`disabled aria-disabled="true"\` — disabled state

### When to Use Each Color

| Color | Use Case | Example |
|-------|----------|---------|
| **primary** (purple) | Main action, call-to-action | Submit form, Save, Create |
| **dark** | Secondary/neutral actions | Cancel, Close, Back |
| **green** | Success, approval, confirm | Approve, Activate, Enable |
| **red** | Danger, destructive action | Delete, Revoke, Remove |
| **yellow** (orange) | Warning, caution | Restart, Retry, Important |
| **blue** | Info, secondary | Learn more, View details |
| **gray** | Disabled-like, de-emphasized | Archived, Inactive |

### ✅ Do

- Use \`btn-primary\` for the main action on a page (only ONE primary button)
- Use \`btn-outline-primary\` for secondary actions
- Use \`btn-gray\` for grouped, less important actions
- Always provide \`aria-label\` for icon-only buttons

### ❌ Don't

- Don't use multiple primary buttons on one page
- Don't use inline styles — all styling via CSS classes
- Don't hardcode colors (use btn-{color} class)
- Don't forget \`disabled aria-disabled="true"\` attribute for disabled buttons
        `.trim()},source:{transform:(e,n)=>{const t=n.args,r=["btn",t.outline?`btn-outline-${t.color}`:`btn-${t.color}`,`btn-${t.size}`,t.pill?"btn-pill":"",t.iconOnly?"btn-icon":""].filter(Boolean).join(" ");if(t.iconOnly)return`<button class="${r}" aria-label="${t.label}">
  <!-- icon svg here -->
</button>`;const l=t.iconLeft?`
  <!-- left icon -->`:"",i=t.iconRight?`
  <!-- right icon -->`:"",c=t.disabled?' disabled aria-disabled="true"':"";return`<button class="${r}"${c}>${l}
  <span>${t.label}</span>${i}
</button>`}}}}},b={name:"Colors — all Figma colors",args:{size:"md"},parameters:{controls:{include:["size"]},docs:{description:{story:'\nAll 7 Figma colors shown solid + outline. Use **size** control to preview all colors at any size.\n\n**QA:** Primary = `#42389d` (purple, not blue). "Yellow" = `#d03801` (orange — intentional). Gray = light surface `#f9fafb` with dark text `#1e2939`.\n        '},source:{code:`// Solid colors
<button className="btn btn-primary btn-md">Primary</button>
<button className="btn btn-dark btn-md">Dark</button>
<button className="btn btn-green btn-md">Green</button>
<button className="btn btn-red btn-md">Red</button>
<button className="btn btn-yellow btn-md">Yellow</button>
<button className="btn btn-blue btn-md">Blue</button>
<button className="btn btn-gray btn-md">Gray</button>

// Outline variants
<button className="btn btn-outline-primary btn-md">Primary</button>
<button className="btn btn-outline-dark btn-md">Dark</button>`,language:"jsx"}}},render:({size:e})=>`
    <div style="display:flex;flex-direction:column;gap:16px;">
      <div>
        <p style="font:10px/1 600 sans-serif;text-transform:uppercase;letter-spacing:.1em;
                  color:#9CA3AF;margin:0 0 8px;">Solid</p>
        <div style="display:flex;flex-wrap:wrap;gap:8px;align-items:center;">
          ${["primary","dark","green","red","yellow","blue","gray"].map(n=>o({label:n.charAt(0).toUpperCase()+n.slice(1),color:n,size:e})).join("")}
        </div>
      </div>
      <div>
        <p style="font:10px/1 600 sans-serif;text-transform:uppercase;letter-spacing:.1em;
                  color:#9CA3AF;margin:0 0 8px;">Outline</p>
        <div style="display:flex;flex-wrap:wrap;gap:8px;align-items:center;">
          ${["primary","dark","green","red","yellow","blue","gray"].map(n=>o({label:n.charAt(0).toUpperCase()+n.slice(1),color:n,size:e,outline:!0})).join("")}
        </div>
      </div>
    </div>`},u={name:"Sizes — xs to xl",args:{color:"primary",outline:!1},parameters:{controls:{include:["color","outline"]},docs:{description:{story:`
All 5 sizes: xs (34px) · sm (36px) · md (40px) · lg (48px) · xl (52px).
Use **color** and **outline** controls to preview the full size scale in any color.
        `},source:{code:`<button className="btn btn-primary btn-xs">xs</button>
<button className="btn btn-primary btn-sm">sm</button>
<button className="btn btn-primary btn-md">md</button>
<button className="btn btn-primary btn-lg">lg</button>
<button className="btn btn-primary btn-xl">xl</button>`,language:"jsx"}}},render:({color:e,outline:n})=>`
    <div style="display:flex;flex-direction:column;gap:20px;">
      <div>
        <p style="font:10px/1 600 sans-serif;text-transform:uppercase;letter-spacing:.1em;
                  color:#9CA3AF;margin:0 0 8px;">Text button — all sizes</p>
        <div style="display:flex;flex-wrap:wrap;gap:8px;align-items:center;">
          ${[{size:"xs",label:"xs · 12px"},{size:"sm",label:"sm · 14px"},{size:"md",label:"md · 14px"},{size:"lg",label:"lg · 16px"},{size:"xl",label:"xl · 16px"}].map(({size:t,label:a})=>o({label:a,color:e,size:t,outline:n})).join("")}
        </div>
      </div>
      <div>
        <p style="font:10px/1 600 sans-serif;text-transform:uppercase;letter-spacing:.1em;
                  color:#9CA3AF;margin:0 0 8px;">Icon-only — all sizes</p>
        <div style="display:flex;flex-wrap:wrap;gap:8px;align-items:center;">
          ${["xs","sm","md","lg","xl"].map(t=>o({label:`${t}`,color:e,size:t,outline:n,iconOnly:!0})).join("")}
        </div>
      </div>
    </div>`},m={name:"States — default / disabled",args:{size:"md"},parameters:{controls:{include:["size"]},docs:{description:{story:`
Each row: **Default** · **Disabled** · **Outline** · **Outline disabled**.
Use **size** control to verify states render correctly at all sizes.

**QA:** Disabled = 50% opacity, \`pointer-events: none\`. Hover darkens fill by one palette step.
        `}}},render:({size:e})=>`
    <div style="display:flex;flex-direction:column;gap:12px;">
      ${["primary","dark","green","red","yellow","blue"].map(n=>`
        <div style="display:flex;gap:8px;align-items:center;">
          <span style="width:64px;font:11px/1 sans-serif;color:var(--color-text-secondary);flex-shrink:0;">${n}</span>
          ${o({label:"Default",color:n,size:e})}
          ${o({label:"Disabled",color:n,size:e,disabled:!0})}
          ${o({label:"Outline",color:n,size:e,outline:!0})}
          ${o({label:"Outline disabled",color:n,size:e,outline:!0,disabled:!0})}
        </div>`).join("")}
    </div>`},y={name:"With Icons",args:{color:"primary",size:"md"},parameters:{controls:{include:["color","size"]},docs:{description:{story:`
Left icon, right icon, and icon-only at any **color** + **size** combination.
Icon size: 20px for md/lg/xl, 16px for xs/sm.
        `},source:{code:`import { StarIcon, ArrowRightIcon } from '@heroicons/react/24/outline';

// Left icon
<button className="btn btn-primary btn-md">
  <StarIcon className="w-5 h-5" />
  <span>Label</span>
</button>

// Right icon
<button className="btn btn-primary btn-md">
  <span>Label</span>
  <ArrowRightIcon className="w-5 h-5" />
</button>

// Icon only
<button className="btn btn-primary btn-icon btn-md" aria-label="Action">
  <StarIcon className="w-5 h-5" />
</button>`,language:"jsx"}}},render:({color:e,size:n})=>`
    <div style="display:flex;flex-direction:column;gap:12px;">
      <div style="display:flex;gap:8px;align-items:center;">
        <span style="width:100px;font:11px/1 sans-serif;color:var(--color-text-secondary);">Left icon</span>
        ${o({label:"Button",color:e,size:n,iconLeft:!0})}
        ${o({label:"Button",color:e,size:n,iconLeft:!0,outline:!0})}
      </div>
      <div style="display:flex;gap:8px;align-items:center;">
        <span style="width:100px;font:11px/1 sans-serif;color:var(--color-text-secondary);">Right icon</span>
        ${o({label:"Button",color:e,size:n,iconRight:!0})}
        ${o({label:"Button",color:e,size:n,iconRight:!0,outline:!0})}
      </div>
      <div style="display:flex;gap:8px;align-items:center;">
        <span style="width:100px;font:11px/1 sans-serif;color:var(--color-text-secondary);">Icon only</span>
        ${o({label:"Action",color:e,size:n,iconOnly:!0})}
        ${o({label:"Action",color:e,size:n,iconOnly:!0,outline:!0})}
      </div>
    </div>`},x={name:"Pill — rounded corners",args:{size:"md"},parameters:{controls:{include:["size"]},docs:{description:{story:"Full pill border-radius via `.btn-pill`. Use **size** to see pill at any size."},source:{code:`<button className="btn btn-primary btn-pill btn-md">Primary</button>
<button className="btn btn-outline-primary btn-pill btn-md">Primary outline</button>`,language:"jsx"}}},render:({size:e})=>`
    <div style="display:flex;flex-direction:column;gap:12px;">
      <div style="display:flex;flex-wrap:wrap;gap:8px;align-items:center;">
        ${["primary","dark","green","red","yellow","blue","gray"].map(n=>o({label:n.charAt(0).toUpperCase()+n.slice(1),color:n,size:e,pill:!0})).join("")}
      </div>
      <div style="display:flex;flex-wrap:wrap;gap:8px;align-items:center;">
        ${["primary","dark","green","red","yellow","blue"].map(n=>o({label:n.charAt(0).toUpperCase()+n.slice(1),color:n,size:e,pill:!0,outline:!0})).join("")}
      </div>
    </div>`},g={name:"Disabled state",args:{size:"md"},parameters:{controls:{include:["size"]},docs:{description:{story:"Disabled renders at 50% opacity with `pointer-events: none`. Use **size** to verify across sizes."},source:{code:`<button className="btn btn-primary btn-md" disabled aria-disabled="true">Disabled</button>
<button className="btn btn-outline-primary btn-md" disabled aria-disabled="true">Outline disabled</button>`,language:"jsx"}}},render:({size:e})=>`
    <div style="display:flex;flex-direction:column;gap:12px;">
      <div style="display:flex;flex-wrap:wrap;gap:8px;">
        ${["primary","dark","green","red","yellow","blue","gray"].map(n=>o({label:n.charAt(0).toUpperCase()+n.slice(1),color:n,size:e,disabled:!0})).join("")}
      </div>
      <div style="display:flex;flex-wrap:wrap;gap:8px;">
        ${["primary","dark","green","red","yellow","blue"].map(n=>o({label:n.charAt(0).toUpperCase()+n.slice(1),color:n,size:e,disabled:!0,outline:!0})).join("")}
      </div>
    </div>`};var h,w,$;p.parameters={...p.parameters,docs:{...(h=p.parameters)==null?void 0:h.docs,source:{originalSource:`{
  name: 'Interactive (Controls)',
  render: args => {
    const a = args;
    const colorClass = a.outline ? \`btn-outline-\${a.color}\` : \`btn-\${a.color}\`;
    const classes = ['btn', colorClass, \`btn-\${a.size}\`, a.pill ? 'btn-pill' : '', a.iconOnly ? 'btn-icon' : ''].filter(Boolean).join(' ');
    let htmlCode = '';
    let reactCode = '';
    if (a.iconOnly) {
      htmlCode = \`<button class="\${classes}" aria-label="\${a.label}">\\n  <!-- icon svg here -->\\n</button>\`;
      reactCode = \`<button className="\${classes}" aria-label="\${a.label}">\\n  {/* icon here */}\\n</button>\`;
    } else {
      const left = a.iconLeft ? '\\n  {/* left icon */}' : '';
      const right = a.iconRight ? '\\n  {/* right icon */}' : '';
      const dis = a.disabled ? ' disabled aria-disabled="true"' : '';
      htmlCode = \`<button class="\${classes}"\${dis}>\\n  <span>\${a.label}</span>\${a.iconLeft ? '\\n  <!-- left icon -->' : ''}\${a.iconRight ? '\\n  <!-- right icon -->' : ''}\\n</button>\`;
      reactCode = \`<button className="\${classes}"\${dis}>\${left}\\n  <span>\${a.label}</span>\${right}\\n</button>\`;
    }
    const htmlEscaped = htmlCode.replace(/</g, '&lt;').replace(/>/g, '&gt;');
    const reactEscaped = reactCode.replace(/</g, '&lt;').replace(/>/g, '&gt;');
    return \`
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:40px;align-items:start;">
        <div style="padding:20px;border:1px solid #e5e7eb;border-radius:8px;">
          \${btn(args)}
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
## Button Snippet Reference

Use the **Controls** panel to experiment with all combinations. The code below updates live.

### Basic Syntax

\\\`\\\`\\\`
<button class="btn btn-{color} btn-{size}">Label</button>
\\\`\\\`\\\`

### Color Variants

- **Solid:** \\\`btn-primary\\\`, \\\`btn-dark\\\`, \\\`btn-green\\\`, \\\`btn-red\\\`, \\\`btn-yellow\\\`, \\\`btn-blue\\\`, \\\`btn-gray\\\`
- **Outline:** \\\`btn-outline-{color}\\\` (replaces \\\`btn-{color}\\\`)

### Sizes

\\\`btn-xs\\\` (34px) · \\\`btn-sm\\\` (36px) · \\\`btn-md\\\` (40px) · \\\`btn-lg\\\` (48px) · \\\`btn-xl\\\` (52px)

### Modifiers

- \\\`btn-pill\\\` — full border-radius
- \\\`btn-icon\\\` — square aspect ratio (icon-only buttons)
- \\\`disabled aria-disabled="true"\\\` — disabled state

### When to Use Each Color

| Color | Use Case | Example |
|-------|----------|---------|
| **primary** (purple) | Main action, call-to-action | Submit form, Save, Create |
| **dark** | Secondary/neutral actions | Cancel, Close, Back |
| **green** | Success, approval, confirm | Approve, Activate, Enable |
| **red** | Danger, destructive action | Delete, Revoke, Remove |
| **yellow** (orange) | Warning, caution | Restart, Retry, Important |
| **blue** | Info, secondary | Learn more, View details |
| **gray** | Disabled-like, de-emphasized | Archived, Inactive |

### ✅ Do

- Use \\\`btn-primary\\\` for the main action on a page (only ONE primary button)
- Use \\\`btn-outline-primary\\\` for secondary actions
- Use \\\`btn-gray\\\` for grouped, less important actions
- Always provide \\\`aria-label\\\` for icon-only buttons

### ❌ Don't

- Don't use multiple primary buttons on one page
- Don't use inline styles — all styling via CSS classes
- Don't hardcode colors (use btn-{color} class)
- Don't forget \\\`disabled aria-disabled="true"\\\` attribute for disabled buttons
        \`.trim()
      },
      source: {
        transform: (_src, storyCtx) => {
          const a = storyCtx.args;
          const colorClass = a.outline ? \`btn-outline-\${a.color}\` : \`btn-\${a.color}\`;
          const classes = ['btn', colorClass, \`btn-\${a.size}\`, a.pill ? 'btn-pill' : '', a.iconOnly ? 'btn-icon' : ''].filter(Boolean).join(' ');
          if (a.iconOnly) return \`<button class="\${classes}" aria-label="\${a.label}">\\n  <!-- icon svg here -->\\n</button>\`;
          const left = a.iconLeft ? '\\n  <!-- left icon -->' : '';
          const right = a.iconRight ? '\\n  <!-- right icon -->' : '';
          const dis = a.disabled ? ' disabled aria-disabled="true"' : '';
          return \`<button class="\${classes}"\${dis}>\${left}\\n  <span>\${a.label}</span>\${right}\\n</button>\`;
        }
      }
    }
  }
}`,...($=(w=p.parameters)==null?void 0:w.docs)==null?void 0:$.source}}};var z,C,k;b.parameters={...b.parameters,docs:{...(z=b.parameters)==null?void 0:z.docs,source:{originalSource:`{
  name: 'Colors — all Figma colors',
  args: {
    size: 'md'
  },
  parameters: {
    controls: {
      include: ['size']
    },
    docs: {
      description: {
        story: \`
All 7 Figma colors shown solid + outline. Use **size** control to preview all colors at any size.

**QA:** Primary = \\\`#42389d\\\` (purple, not blue). "Yellow" = \\\`#d03801\\\` (orange — intentional). Gray = light surface \\\`#f9fafb\\\` with dark text \\\`#1e2939\\\`.
        \`
      },
      source: {
        code: \`// Solid colors
<button className="btn btn-primary btn-md">Primary</button>
<button className="btn btn-dark btn-md">Dark</button>
<button className="btn btn-green btn-md">Green</button>
<button className="btn btn-red btn-md">Red</button>
<button className="btn btn-yellow btn-md">Yellow</button>
<button className="btn btn-blue btn-md">Blue</button>
<button className="btn btn-gray btn-md">Gray</button>

// Outline variants
<button className="btn btn-outline-primary btn-md">Primary</button>
<button className="btn btn-outline-dark btn-md">Dark</button>\`,
        language: 'jsx'
      }
    }
  },
  render: ({
    size
  }) => \`
    <div style="display:flex;flex-direction:column;gap:16px;">
      <div>
        <p style="font:10px/1 600 sans-serif;text-transform:uppercase;letter-spacing:.1em;
                  color:#9CA3AF;margin:0 0 8px;">Solid</p>
        <div style="display:flex;flex-wrap:wrap;gap:8px;align-items:center;">
          \${['primary', 'dark', 'green', 'red', 'yellow', 'blue', 'gray'].map(c => btn({
    label: c.charAt(0).toUpperCase() + c.slice(1),
    color: c,
    size
  })).join('')}
        </div>
      </div>
      <div>
        <p style="font:10px/1 600 sans-serif;text-transform:uppercase;letter-spacing:.1em;
                  color:#9CA3AF;margin:0 0 8px;">Outline</p>
        <div style="display:flex;flex-wrap:wrap;gap:8px;align-items:center;">
          \${['primary', 'dark', 'green', 'red', 'yellow', 'blue', 'gray'].map(c => btn({
    label: c.charAt(0).toUpperCase() + c.slice(1),
    color: c,
    size,
    outline: true
  })).join('')}
        </div>
      </div>
    </div>\`
}`,...(k=(C=b.parameters)==null?void 0:C.docs)==null?void 0:k.source}}};var A,S,N;u.parameters={...u.parameters,docs:{...(A=u.parameters)==null?void 0:A.docs,source:{originalSource:`{
  name: 'Sizes — xs to xl',
  args: {
    color: 'primary',
    outline: false
  },
  parameters: {
    controls: {
      include: ['color', 'outline']
    },
    docs: {
      description: {
        story: \`
All 5 sizes: xs (34px) · sm (36px) · md (40px) · lg (48px) · xl (52px).
Use **color** and **outline** controls to preview the full size scale in any color.
        \`
      },
      source: {
        code: \`<button className="btn btn-primary btn-xs">xs</button>
<button className="btn btn-primary btn-sm">sm</button>
<button className="btn btn-primary btn-md">md</button>
<button className="btn btn-primary btn-lg">lg</button>
<button className="btn btn-primary btn-xl">xl</button>\`,
        language: 'jsx'
      }
    }
  },
  render: ({
    color,
    outline
  }) => \`
    <div style="display:flex;flex-direction:column;gap:20px;">
      <div>
        <p style="font:10px/1 600 sans-serif;text-transform:uppercase;letter-spacing:.1em;
                  color:#9CA3AF;margin:0 0 8px;">Text button — all sizes</p>
        <div style="display:flex;flex-wrap:wrap;gap:8px;align-items:center;">
          \${[{
    size: 'xs',
    label: 'xs · 12px'
  }, {
    size: 'sm',
    label: 'sm · 14px'
  }, {
    size: 'md',
    label: 'md · 14px'
  }, {
    size: 'lg',
    label: 'lg · 16px'
  }, {
    size: 'xl',
    label: 'xl · 16px'
  }].map(({
    size,
    label
  }) => btn({
    label,
    color,
    size,
    outline
  })).join('')}
        </div>
      </div>
      <div>
        <p style="font:10px/1 600 sans-serif;text-transform:uppercase;letter-spacing:.1em;
                  color:#9CA3AF;margin:0 0 8px;">Icon-only — all sizes</p>
        <div style="display:flex;flex-wrap:wrap;gap:8px;align-items:center;">
          \${['xs', 'sm', 'md', 'lg', 'xl'].map(size => btn({
    label: \`\${size}\`,
    color,
    size,
    outline,
    iconOnly: true
  })).join('')}
        </div>
      </div>
    </div>\`
}`,...(N=(S=u.parameters)==null?void 0:S.docs)==null?void 0:N.source}}};var B,D,I;m.parameters={...m.parameters,docs:{...(B=m.parameters)==null?void 0:B.docs,source:{originalSource:`{
  name: 'States — default / disabled',
  args: {
    size: 'md'
  },
  parameters: {
    controls: {
      include: ['size']
    },
    docs: {
      description: {
        story: \`
Each row: **Default** · **Disabled** · **Outline** · **Outline disabled**.
Use **size** control to verify states render correctly at all sizes.

**QA:** Disabled = 50% opacity, \\\`pointer-events: none\\\`. Hover darkens fill by one palette step.
        \`
      }
    }
  },
  render: ({
    size
  }) => \`
    <div style="display:flex;flex-direction:column;gap:12px;">
      \${['primary', 'dark', 'green', 'red', 'yellow', 'blue'].map(color => \`
        <div style="display:flex;gap:8px;align-items:center;">
          <span style="width:64px;font:11px/1 sans-serif;color:var(--color-text-secondary);flex-shrink:0;">\${color}</span>
          \${btn({
    label: 'Default',
    color,
    size
  })}
          \${btn({
    label: 'Disabled',
    color,
    size,
    disabled: true
  })}
          \${btn({
    label: 'Outline',
    color,
    size,
    outline: true
  })}
          \${btn({
    label: 'Outline disabled',
    color,
    size,
    outline: true,
    disabled: true
  })}
        </div>\`).join('')}
    </div>\`
}`,...(I=(D=m.parameters)==null?void 0:D.docs)==null?void 0:I.source}}};var j,L,U;y.parameters={...y.parameters,docs:{...(j=y.parameters)==null?void 0:j.docs,source:{originalSource:`{
  name: 'With Icons',
  args: {
    color: 'primary',
    size: 'md'
  },
  parameters: {
    controls: {
      include: ['color', 'size']
    },
    docs: {
      description: {
        story: \`
Left icon, right icon, and icon-only at any **color** + **size** combination.
Icon size: 20px for md/lg/xl, 16px for xs/sm.
        \`
      },
      source: {
        code: \`import { StarIcon, ArrowRightIcon } from '@heroicons/react/24/outline';

// Left icon
<button className="btn btn-primary btn-md">
  <StarIcon className="w-5 h-5" />
  <span>Label</span>
</button>

// Right icon
<button className="btn btn-primary btn-md">
  <span>Label</span>
  <ArrowRightIcon className="w-5 h-5" />
</button>

// Icon only
<button className="btn btn-primary btn-icon btn-md" aria-label="Action">
  <StarIcon className="w-5 h-5" />
</button>\`,
        language: 'jsx'
      }
    }
  },
  render: ({
    color,
    size
  }) => \`
    <div style="display:flex;flex-direction:column;gap:12px;">
      <div style="display:flex;gap:8px;align-items:center;">
        <span style="width:100px;font:11px/1 sans-serif;color:var(--color-text-secondary);">Left icon</span>
        \${btn({
    label: 'Button',
    color,
    size,
    iconLeft: true
  })}
        \${btn({
    label: 'Button',
    color,
    size,
    iconLeft: true,
    outline: true
  })}
      </div>
      <div style="display:flex;gap:8px;align-items:center;">
        <span style="width:100px;font:11px/1 sans-serif;color:var(--color-text-secondary);">Right icon</span>
        \${btn({
    label: 'Button',
    color,
    size,
    iconRight: true
  })}
        \${btn({
    label: 'Button',
    color,
    size,
    iconRight: true,
    outline: true
  })}
      </div>
      <div style="display:flex;gap:8px;align-items:center;">
        <span style="width:100px;font:11px/1 sans-serif;color:var(--color-text-secondary);">Icon only</span>
        \${btn({
    label: 'Action',
    color,
    size,
    iconOnly: true
  })}
        \${btn({
    label: 'Action',
    color,
    size,
    iconOnly: true,
    outline: true
  })}
      </div>
    </div>\`
}`,...(U=(L=y.parameters)==null?void 0:L.docs)==null?void 0:U.source}}};var O,R,F;x.parameters={...x.parameters,docs:{...(O=x.parameters)==null?void 0:O.docs,source:{originalSource:`{
  name: 'Pill — rounded corners',
  args: {
    size: 'md'
  },
  parameters: {
    controls: {
      include: ['size']
    },
    docs: {
      description: {
        story: 'Full pill border-radius via \`.btn-pill\`. Use **size** to see pill at any size.'
      },
      source: {
        code: \`<button className="btn btn-primary btn-pill btn-md">Primary</button>
<button className="btn btn-outline-primary btn-pill btn-md">Primary outline</button>\`,
        language: 'jsx'
      }
    }
  },
  render: ({
    size
  }) => \`
    <div style="display:flex;flex-direction:column;gap:12px;">
      <div style="display:flex;flex-wrap:wrap;gap:8px;align-items:center;">
        \${['primary', 'dark', 'green', 'red', 'yellow', 'blue', 'gray'].map(c => btn({
    label: c.charAt(0).toUpperCase() + c.slice(1),
    color: c,
    size,
    pill: true
  })).join('')}
      </div>
      <div style="display:flex;flex-wrap:wrap;gap:8px;align-items:center;">
        \${['primary', 'dark', 'green', 'red', 'yellow', 'blue'].map(c => btn({
    label: c.charAt(0).toUpperCase() + c.slice(1),
    color: c,
    size,
    pill: true,
    outline: true
  })).join('')}
      </div>
    </div>\`
}`,...(F=(R=x.parameters)==null?void 0:R.docs)==null?void 0:F.source}}};var T,E,P;g.parameters={...g.parameters,docs:{...(T=g.parameters)==null?void 0:T.docs,source:{originalSource:`{
  name: 'Disabled state',
  args: {
    size: 'md'
  },
  parameters: {
    controls: {
      include: ['size']
    },
    docs: {
      description: {
        story: 'Disabled renders at 50% opacity with \`pointer-events: none\`. Use **size** to verify across sizes.'
      },
      source: {
        code: \`<button className="btn btn-primary btn-md" disabled aria-disabled="true">Disabled</button>
<button className="btn btn-outline-primary btn-md" disabled aria-disabled="true">Outline disabled</button>\`,
        language: 'jsx'
      }
    }
  },
  render: ({
    size
  }) => \`
    <div style="display:flex;flex-direction:column;gap:12px;">
      <div style="display:flex;flex-wrap:wrap;gap:8px;">
        \${['primary', 'dark', 'green', 'red', 'yellow', 'blue', 'gray'].map(c => btn({
    label: c.charAt(0).toUpperCase() + c.slice(1),
    color: c,
    size,
    disabled: true
  })).join('')}
      </div>
      <div style="display:flex;flex-wrap:wrap;gap:8px;">
        \${['primary', 'dark', 'green', 'red', 'yellow', 'blue'].map(c => btn({
    label: c.charAt(0).toUpperCase() + c.slice(1),
    color: c,
    size,
    disabled: true,
    outline: true
  })).join('')}
      </div>
    </div>\`
}`,...(P=(E=g.parameters)==null?void 0:E.docs)==null?void 0:P.source}}};const Q=["Interactive","FigmaColors","FigmaSizes","FigmaStates","IconPlacement","Pill","Disabled"];export{g as Disabled,b as FigmaColors,u as FigmaSizes,m as FigmaStates,y as IconPlacement,p as Interactive,x as Pill,Q as __namedExportsOrder,_ as default};
