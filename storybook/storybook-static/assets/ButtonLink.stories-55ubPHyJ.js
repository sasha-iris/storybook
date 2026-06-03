const U={title:"Iris Library/Button/Link",tags:["autodocs","stable"],parameters:{layout:"padded",backgrounds:{default:"light"},docs:{description:{component:`
Text-only link buttons — two weight styles (semibold brand / medium subtle),
three sizes, optional left icon.

**CSS:** \`.btn-link\` + \`.btn-link-semibold\` or \`.btn-link-medium\` + \`.btn-{size}\`

\`\`\`html
<!-- Semibold (brand purple) -->
<a class="btn-link btn-link-semibold btn-sm" href="#">Sign In</a>

<!-- Medium (gray) -->
<a class="btn-link btn-link-medium btn-sm" href="#">Sign In</a>

<!-- With icon left -->
<a class="btn-link btn-link-semibold btn-sm" href="#">
  <svg><!-- information-circle --></svg>
  Sign In
</a>
\`\`\`
      `}}},argTypes:{label:{control:"text",description:"Link text.",table:{category:"Content",defaultValue:{summary:"Sign In"}}},showIconLeft:{control:"boolean",description:"Show information-circle icon to the left of the label. Icon scales with size: 12px (xs) / 14px (sm) / 16px (md).",table:{category:"Content",defaultValue:{summary:!1}}},type:{control:"select",options:["semibold","medium"],description:"Font weight style. CSS class: `btn-link-semibold` (weight 600, color #42389d) or `btn-link-medium` (weight 500, color #6b7280).",table:{category:"Appearance",defaultValue:{summary:"semibold"}}},size:{control:"select",options:["xs","sm","md"],description:"Size variant. CSS class: `btn-{size}`. Maps to 12px (xs) / 14px (sm) / 16px (md) font size.",table:{category:"Appearance",defaultValue:{summary:"sm"}}},hover:{control:"boolean",description:"Simulate hover state — applies color #362f78 (brand/900) + `border-bottom: 1px solid #362f78`.",table:{category:"State",defaultValue:{summary:!1}}}},args:{label:"Sign In",type:"semibold",size:"sm",showIconLeft:!1,hover:!1}},B=(e=14)=>`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
  style="width:${e}px;height:${e}px;flex-shrink:0;" aria-hidden="true">
  <path fill-rule="evenodd"
    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9
    9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
    clip-rule="evenodd"/>
</svg>`,T={xs:12,sm:14,md:16},o=({label:e="Sign In",type:t="semibold",size:n="sm",showIconLeft:i=!1,hover:d=!1})=>{const c=`btn-link-${t}`,A=d?"color:#362f78;border-bottom:1px solid #362f78;":"",M=T[n]||14,F=i?B(M):"";return`<a class="btn-link ${c} btn-${n}" href="#"
    style="${A}" onclick="return false;"
  >${F}<span>${e}</span></a>`},l={name:"Interactive (Controls)",render:e=>o(e),parameters:{docs:{description:{story:"Use the **Controls** panel to configure any combination. The rendered HTML updates live."},source:{transform:(e,t)=>{const n=t.args,i=`btn-link-${n.type}`,d=n.hover?' style="color:#362f78;border-bottom:1px solid #362f78;"':"",c=n.showIconLeft?`
  <svg><!-- information-circle --></svg>`:"";return`<a class="btn-link ${i} btn-${n.size}" href="#"${d}>${c}
  <span>${n.label}</span>
</a>`}}}}},s={name:"Semibold — brand purple",args:{hover:!1,showIconLeft:!1},parameters:{controls:{include:["hover","showIconLeft"]},docs:{description:{story:`
Semibold weight (600), default color = **#42389d** (brand/800 purple).
Hover color = **#362f78** (brand/900) + bottom-border underline.
Use **hover** and **showIconLeft** controls to preview states across all 3 sizes at once.
        `},source:{code:`<a class="btn-link btn-link-semibold btn-xs" href="#">Sign In</a>
<a class="btn-link btn-link-semibold btn-sm" href="#">Sign In</a>
<a class="btn-link btn-link-semibold btn-md" href="#">Sign In</a>`,language:"html"}}},render:({hover:e,showIconLeft:t})=>`
    <div style="display:flex;gap:16px;align-items:center;flex-wrap:wrap;">
      ${["xs","sm","md"].map(n=>o({label:`Sign In (${n})`,type:"semibold",size:n,hover:e,showIconLeft:t})).join("")}
    </div>`},a={name:"Medium — subtle gray",args:{hover:!1,showIconLeft:!1},parameters:{controls:{include:["hover","showIconLeft"]},docs:{description:{story:`
Medium weight (500), default color = **#6b7280** (gray/500 = \`--color-text-body-subtle\`).
Hover color = **#362f78** (brand/900) — same as Semibold hover.
Use **hover** and **showIconLeft** controls to preview states across all 3 sizes at once.
        `},source:{code:`<a class="btn-link btn-link-medium btn-xs" href="#">Sign In</a>
<a class="btn-link btn-link-medium btn-sm" href="#">Sign In</a>
<a class="btn-link btn-link-medium btn-md" href="#">Sign In</a>`,language:"html"}}},render:({hover:e,showIconLeft:t})=>`
    <div style="display:flex;gap:16px;align-items:center;flex-wrap:wrap;">
      ${["xs","sm","md"].map(n=>o({label:`Sign In (${n})`,type:"medium",size:n,hover:e,showIconLeft:t})).join("")}
    </div>`},r={name:"Type comparison — Semibold vs Medium",args:{showIconLeft:!1},parameters:{controls:{include:["showIconLeft"]},docs:{description:{story:"Both types at all 3 sizes — default and hover states. Use **showIconLeft** control to toggle icons on all cells."}}},render:({showIconLeft:e})=>`
    <table style="border-collapse:collapse;font-size:13px;width:auto;">
      <thead>
        <tr>
          <th style="text-align:left;padding:6px 16px 6px 0;color:#9CA3AF;font-size:10px;
                     text-transform:uppercase;letter-spacing:.1em;font-weight:600;">Size</th>
          <th style="text-align:left;padding:6px 16px 6px 0;color:#9CA3AF;font-size:10px;
                     text-transform:uppercase;letter-spacing:.1em;font-weight:600;">Semibold default</th>
          <th style="text-align:left;padding:6px 16px 6px 0;color:#9CA3AF;font-size:10px;
                     text-transform:uppercase;letter-spacing:.1em;font-weight:600;">Semibold hover</th>
          <th style="text-align:left;padding:6px 16px 6px 0;color:#9CA3AF;font-size:10px;
                     text-transform:uppercase;letter-spacing:.1em;font-weight:600;">Medium default</th>
          <th style="text-align:left;padding:6px 0;color:#9CA3AF;font-size:10px;
                     text-transform:uppercase;letter-spacing:.1em;font-weight:600;">Medium hover</th>
        </tr>
      </thead>
      <tbody>
        ${["xs","sm","md"].map(t=>`
          <tr>
            <td style="padding:8px 16px 8px 0;color:#9CA3AF;">${t}</td>
            <td style="padding:8px 16px 8px 0;">${o({label:"Sign In",type:"semibold",size:t,showIconLeft:e})}</td>
            <td style="padding:8px 16px 8px 0;">${o({label:"Sign In",type:"semibold",size:t,hover:!0,showIconLeft:e})}</td>
            <td style="padding:8px 16px 8px 0;">${o({label:"Sign In",type:"medium",size:t,showIconLeft:e})}</td>
            <td style="padding:8px 0;">${o({label:"Sign In",type:"medium",size:t,hover:!0,showIconLeft:e})}</td>
          </tr>`).join("")}
      </tbody>
    </table>`};var p,m,b;l.parameters={...l.parameters,docs:{...(p=l.parameters)==null?void 0:p.docs,source:{originalSource:`{
  name: 'Interactive (Controls)',
  render: args => linkBtn(args),
  parameters: {
    docs: {
      description: {
        story: 'Use the **Controls** panel to configure any combination. The rendered HTML updates live.'
      },
      source: {
        transform: (_src, storyCtx) => {
          const a = storyCtx.args;
          const weightClass = \`btn-link-\${a.type}\`;
          const hoverStyle = a.hover ? ' style="color:#362f78;border-bottom:1px solid #362f78;"' : '';
          const icon = a.showIconLeft ? '\\n  <svg><!-- information-circle --></svg>' : '';
          return \`<a class="btn-link \${weightClass} btn-\${a.size}" href="#"\${hoverStyle}>\${icon}\\n  <span>\${a.label}</span>\\n</a>\`;
        }
      }
    }
  }
}`,...(b=(m=l.parameters)==null?void 0:m.docs)==null?void 0:b.source}}};var h,f,g,u,x;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
  name: 'Semibold — brand purple',
  args: {
    hover: false,
    showIconLeft: false
  },
  parameters: {
    controls: {
      include: ['hover', 'showIconLeft']
    },
    docs: {
      description: {
        story: \`
Semibold weight (600), default color = **#42389d** (brand/800 purple).
Hover color = **#362f78** (brand/900) + bottom-border underline.
Use **hover** and **showIconLeft** controls to preview states across all 3 sizes at once.
        \`
      },
      source: {
        code: \`<a class="btn-link btn-link-semibold btn-xs" href="#">Sign In</a>
<a class="btn-link btn-link-semibold btn-sm" href="#">Sign In</a>
<a class="btn-link btn-link-semibold btn-md" href="#">Sign In</a>\`,
        language: 'html'
      }
    }
  },
  render: ({
    hover,
    showIconLeft
  }) => \`
    <div style="display:flex;gap:16px;align-items:center;flex-wrap:wrap;">
      \${['xs', 'sm', 'md'].map(size => linkBtn({
    label: \`Sign In (\${size})\`,
    type: 'semibold',
    size,
    hover,
    showIconLeft
  })).join('')}
    </div>\`
}`,...(g=(f=s.parameters)==null?void 0:f.docs)==null?void 0:g.source},description:{story:"Semibold type — brand purple #42389d default, #362f78 hover.\nShows all 3 sizes. Use `hover` + `showIconLeft` controls to preview states.\nQA: color must be #42389d (NOT blue), underline on hover via border-bottom.",...(x=(u=s.parameters)==null?void 0:u.docs)==null?void 0:x.description}}};var y,v,w,S,I;a.parameters={...a.parameters,docs:{...(y=a.parameters)==null?void 0:y.docs,source:{originalSource:`{
  name: 'Medium — subtle gray',
  args: {
    hover: false,
    showIconLeft: false
  },
  parameters: {
    controls: {
      include: ['hover', 'showIconLeft']
    },
    docs: {
      description: {
        story: \`
Medium weight (500), default color = **#6b7280** (gray/500 = \\\`--color-text-body-subtle\\\`).
Hover color = **#362f78** (brand/900) — same as Semibold hover.
Use **hover** and **showIconLeft** controls to preview states across all 3 sizes at once.
        \`
      },
      source: {
        code: \`<a class="btn-link btn-link-medium btn-xs" href="#">Sign In</a>
<a class="btn-link btn-link-medium btn-sm" href="#">Sign In</a>
<a class="btn-link btn-link-medium btn-md" href="#">Sign In</a>\`,
        language: 'html'
      }
    }
  },
  render: ({
    hover,
    showIconLeft
  }) => \`
    <div style="display:flex;gap:16px;align-items:center;flex-wrap:wrap;">
      \${['xs', 'sm', 'md'].map(size => linkBtn({
    label: \`Sign In (\${size})\`,
    type: 'medium',
    size,
    hover,
    showIconLeft
  })).join('')}
    </div>\`
}`,...(w=(v=a.parameters)==null?void 0:v.docs)==null?void 0:w.source},description:{story:`Medium type — gray #6b7280 default, #362f78 hover.
QA: default color is --color-text-body-subtle (#6b7280), NOT brand color.`,...(I=(S=a.parameters)==null?void 0:S.docs)==null?void 0:I.description}}};var k,z,$,L,C;r.parameters={...r.parameters,docs:{...(k=r.parameters)==null?void 0:k.docs,source:{originalSource:`{
  name: 'Type comparison — Semibold vs Medium',
  args: {
    showIconLeft: false
  },
  parameters: {
    controls: {
      include: ['showIconLeft']
    },
    docs: {
      description: {
        story: 'Both types at all 3 sizes — default and hover states. Use **showIconLeft** control to toggle icons on all cells.'
      }
    }
  },
  render: ({
    showIconLeft
  }) => \`
    <table style="border-collapse:collapse;font-size:13px;width:auto;">
      <thead>
        <tr>
          <th style="text-align:left;padding:6px 16px 6px 0;color:#9CA3AF;font-size:10px;
                     text-transform:uppercase;letter-spacing:.1em;font-weight:600;">Size</th>
          <th style="text-align:left;padding:6px 16px 6px 0;color:#9CA3AF;font-size:10px;
                     text-transform:uppercase;letter-spacing:.1em;font-weight:600;">Semibold default</th>
          <th style="text-align:left;padding:6px 16px 6px 0;color:#9CA3AF;font-size:10px;
                     text-transform:uppercase;letter-spacing:.1em;font-weight:600;">Semibold hover</th>
          <th style="text-align:left;padding:6px 16px 6px 0;color:#9CA3AF;font-size:10px;
                     text-transform:uppercase;letter-spacing:.1em;font-weight:600;">Medium default</th>
          <th style="text-align:left;padding:6px 0;color:#9CA3AF;font-size:10px;
                     text-transform:uppercase;letter-spacing:.1em;font-weight:600;">Medium hover</th>
        </tr>
      </thead>
      <tbody>
        \${['xs', 'sm', 'md'].map(size => \`
          <tr>
            <td style="padding:8px 16px 8px 0;color:#9CA3AF;">\${size}</td>
            <td style="padding:8px 16px 8px 0;">\${linkBtn({
    label: 'Sign In',
    type: 'semibold',
    size,
    showIconLeft
  })}</td>
            <td style="padding:8px 16px 8px 0;">\${linkBtn({
    label: 'Sign In',
    type: 'semibold',
    size,
    hover: true,
    showIconLeft
  })}</td>
            <td style="padding:8px 16px 8px 0;">\${linkBtn({
    label: 'Sign In',
    type: 'medium',
    size,
    showIconLeft
  })}</td>
            <td style="padding:8px 0;">\${linkBtn({
    label: 'Sign In',
    type: 'medium',
    size,
    hover: true,
    showIconLeft
  })}</td>
          </tr>\`).join('')}
      </tbody>
    </table>\`
}`,...($=(z=r.parameters)==null?void 0:z.docs)==null?void 0:$.source},description:{story:"Side-by-side comparison of both types — all 3 sizes, default + hover states.\nUse `showIconLeft` control to add icons to all cells simultaneously.\nQA: Semibold should appear visibly darker/more prominent than Medium.",...(C=(L=r.parameters)==null?void 0:L.docs)==null?void 0:C.description}}};const H=["Interactive","Semibold","Medium","TypeComparison"];export{l as Interactive,a as Medium,s as Semibold,r as TypeComparison,H as __namedExportsOrder,U as default};
