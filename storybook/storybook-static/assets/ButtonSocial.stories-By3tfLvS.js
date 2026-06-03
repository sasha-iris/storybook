const _={title:"Iris Library/Button/Social",tags:["autodocs","stable"],parameters:{layout:"padded",backgrounds:{default:"light"},docs:{description:{component:`
Social sign-in buttons — provider icon + text, 2 color modes, 2 outline modes, 4 sizes.

**CSS:** \`.btn-social\` + \`.btn-social-dark\` / \`.btn-social-dark-outline\` /
\`.btn-social-white\` / \`.btn-social-white-outline\` + size modifier

\`\`\`html
<!-- Dark solid -->
<button class="btn-social btn-social-dark btn-md">
  <!-- provider icon -->
  Sign in with Google
</button>

<!-- Dark outline (light bg) -->
<button class="btn-social btn-social-dark-outline btn-md">
  <!-- provider icon -->
  Sign in with Google
</button>
\`\`\`

> **Note:** Border-radius is **8px** on social buttons, not the standard 12px.
      `}}},argTypes:{label:{control:"text",description:'Button text, typically "Sign in with {Provider}".',table:{category:"Content",defaultValue:{summary:"Sign in with Facebook"}}},color:{control:"select",options:["dark","white"],description:"Color mode. `dark` = bg #111928, text white. `white` = bg #fff, text #111928. CSS class suffix added to `.btn-social-{color}`.",table:{category:"Appearance",defaultValue:{summary:"dark"}}},outline:{control:"boolean",description:"Outline mode. Dark outline: border #e5e7eb (gray/200). White outline: border #fff (use on dark backgrounds).",table:{category:"Appearance",defaultValue:{summary:!1}}},size:{control:"select",options:["xs","sm","md","lg"],description:"Size variant. CSS class: `btn-{size}`. Icon scales: 18px (xs/sm), 20px (md), 24px (lg).",table:{category:"Appearance",defaultValue:{summary:"md"}}}},args:{label:"Sign in with Facebook",color:"dark",outline:!1,size:"md"}},a=(n=20)=>`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
  style="width:${n}px;height:${n}px;flex-shrink:0;" aria-hidden="true">
  <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073c0 6.027 4.388
    11.022 10.125 11.927v-8.437H7.078v-3.49h3.047V9.43c0-3.007 1.792-4.669
    4.533-4.669 1.312 0 2.686.235 2.686.235v2.953h-1.514c-1.491 0-1.956.925
    -1.956 1.874v2.25h3.328l-.532 3.49h-2.796v8.437C19.612 23.095 24 18.1 24 12.073z"/>
</svg>`,I=(n=20)=>`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
  style="width:${n}px;height:${n}px;flex-shrink:0;" aria-hidden="true">
  <path fill="#4285F4" d="M23.745 12.27c0-.79-.07-1.54-.19-2.27h-11.3v4.51h6.47c-.29 1.48-1.14 2.73-2.4 3.58v3h3.86c2.26-2.09 3.56-5.17 3.56-8.82z"/>
  <path fill="#34A853" d="M12.255 24c3.24 0 5.95-1.08 7.93-2.91l-3.86-3c-1.08.72-2.45 1.16-4.07 1.16-3.13 0-5.78-2.11-6.73-4.96h-3.98v3.09C3.515 21.3 7.615 24 12.255 24z"/>
  <path fill="#FBBC05" d="M5.525 14.29c-.25-.72-.38-1.49-.38-2.29s.14-1.57.38-2.29V6.62h-3.98a11.86 11.86 0 000 10.76l3.98-3.09z"/>
  <path fill="#EA4335" d="M12.255 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C18.205 1.19 15.495 0 12.255 0c-4.64 0-8.74 2.7-10.71 6.62l3.98 3.09c.95-2.85 3.6-4.96 6.73-4.96z"/>
</svg>`,W=(n=20)=>`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
  style="width:${n}px;height:${n}px;flex-shrink:0;" aria-hidden="true">
  <path fill-rule="evenodd" clip-rule="evenodd"
    d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255
    .825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135
    -.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87
    1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605
    -2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54
    -1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135
    3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84
    1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81
    1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02
    12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
</svg>`,r=({label:n="Sign in with Facebook",color:o="dark",outline:e=!1,size:l="md",iconFn:$=a})=>`<button class="btn-social ${o==="dark"?e?"btn-social-dark-outline":"btn-social-dark":e?"btn-social-white-outline":"btn-social-white"} btn-${l}">
    ${$(l==="lg"?24:l==="xs"?18:20)}
    <span>${n}</span>
  </button>`,c={name:"Interactive (Controls)",render:n=>r(n),parameters:{docs:{description:{story:"Use the **Controls** panel to configure any combination. The rendered HTML updates live."},source:{transform:(n,o)=>{const e=o.args;return`<button class="btn-social ${e.color==="dark"?e.outline?"btn-social-dark-outline":"btn-social-dark":e.outline?"btn-social-white-outline":"btn-social-white"} btn-${e.size}">
  <!-- provider icon -->
  <span>${e.label}</span>
</button>`}}}}},t={name:"Dark — all sizes",args:{outline:!1},parameters:{controls:{include:["outline"]},docs:{description:{story:"Dark color at all 4 sizes. Toggle **outline** to switch between solid (bg #111928) and outline (border #e5e7eb)."},source:{code:`<!-- Dark solid -->
<button class="btn-social btn-social-dark btn-md">
  <!-- provider icon -->
  Sign in with Facebook
</button>

<!-- Dark outline -->
<button class="btn-social btn-social-dark-outline btn-md">
  <!-- provider icon -->
  Sign in with Facebook
</button>`,language:"html"}}},render:({outline:n})=>`
    <div style="display:flex;flex-direction:column;gap:12px;">
      ${["xs","sm","md","lg"].map(o=>`<div style="display:flex;align-items:center;gap:12px;">
          <span style="width:32px;font:10px/1 sans-serif;color:#6B7280;">${o}</span>
          ${r({label:"Sign in with Facebook",color:"dark",outline:n,size:o,iconFn:a})}
        </div>`).join("")}
    </div>`},i={name:"White variants (on dark background)",args:{size:"md"},parameters:{backgrounds:{default:"dark"},controls:{include:["size"]},docs:{description:{story:"White-mode buttons for dark/photo backgrounds. Use **size** control to preview at any size."},source:{code:`<!-- White solid -->
<button class="btn-social btn-social-white btn-md">
  <!-- provider icon -->
  Sign in with Facebook
</button>

<!-- White outline -->
<button class="btn-social btn-social-white-outline btn-md">
  <!-- provider icon -->
  Sign in with Facebook
</button>`,language:"html"}}},render:({size:n})=>`
    <div style="background:#111928;padding:24px;border-radius:8px;
                display:flex;flex-direction:column;gap:16px;">
      <div>
        <p style="font:10px/1 600 sans-serif;text-transform:uppercase;letter-spacing:.1em;
                  color:#6B7280;margin:0 0 8px;">White solid</p>
        ${r({label:"Sign in with Facebook",color:"white",outline:!1,size:n,iconFn:a})}
      </div>
      <div>
        <p style="font:10px/1 600 sans-serif;text-transform:uppercase;letter-spacing:.1em;
                  color:#6B7280;margin:0 0 8px;">White outline</p>
        ${r({label:"Sign in with Facebook",color:"white",outline:!0,size:n,iconFn:a})}
      </div>
    </div>`},s={name:"Multi-provider showcase",args:{size:"md",outline:!1},parameters:{controls:{include:["size","outline"]},docs:{description:{story:"Same button shell, different provider icons. Use **size** and **outline** controls to preview combinations."}}},render:({size:n,outline:o})=>`
    <div style="display:flex;flex-direction:column;gap:10px;">
      ${[{label:"Sign in with Facebook",iconFn:a},{label:"Sign in with Google",iconFn:I},{label:"Sign in with GitHub",iconFn:W}].map(e=>r({...e,color:"dark",outline:o,size:n})).join("")}
    </div>`};var d,p,u;c.parameters={...c.parameters,docs:{...(d=c.parameters)==null?void 0:d.docs,source:{originalSource:`{
  name: 'Interactive (Controls)',
  render: args => socialBtn(args),
  parameters: {
    docs: {
      description: {
        story: 'Use the **Controls** panel to configure any combination. The rendered HTML updates live.'
      },
      source: {
        transform: (_src, storyCtx) => {
          const a = storyCtx.args;
          const colorClass = a.color === 'dark' ? a.outline ? 'btn-social-dark-outline' : 'btn-social-dark' : a.outline ? 'btn-social-white-outline' : 'btn-social-white';
          return \`<button class="btn-social \${colorClass} btn-\${a.size}">\\n  <!-- provider icon -->\\n  <span>\${a.label}</span>\\n</button>\`;
        }
      }
    }
  }
}`,...(u=(p=c.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var b,g,h,m,v;t.parameters={...t.parameters,docs:{...(b=t.parameters)==null?void 0:b.docs,source:{originalSource:`{
  name: 'Dark — all sizes',
  args: {
    outline: false
  },
  parameters: {
    controls: {
      include: ['outline']
    },
    docs: {
      description: {
        story: 'Dark color at all 4 sizes. Toggle **outline** to switch between solid (bg #111928) and outline (border #e5e7eb).'
      },
      source: {
        code: \`<!-- Dark solid -->
<button class="btn-social btn-social-dark btn-md">
  <!-- provider icon -->
  Sign in with Facebook
</button>

<!-- Dark outline -->
<button class="btn-social btn-social-dark-outline btn-md">
  <!-- provider icon -->
  Sign in with Facebook
</button>\`,
        language: 'html'
      }
    }
  },
  render: ({
    outline
  }) => \`
    <div style="display:flex;flex-direction:column;gap:12px;">
      \${['xs', 'sm', 'md', 'lg'].map(size => \`<div style="display:flex;align-items:center;gap:12px;">
          <span style="width:32px;font:10px/1 sans-serif;color:#6B7280;">\${size}</span>
          \${socialBtn({
    label: 'Sign in with Facebook',
    color: 'dark',
    outline,
    size,
    iconFn: FB_ICON
  })}
        </div>\`).join('')}
    </div>\`
}`,...(h=(g=t.parameters)==null?void 0:g.docs)==null?void 0:h.source},description:{story:"Dark color variant — all 4 sizes.\nUse `outline` control to toggle between solid (bg #111928) and outline (border #e5e7eb).\nQA: solid bg=#111928, text=white; outline border=#e5e7eb (NOT brand color); border-radius=8px.",...(v=(m=t.parameters)==null?void 0:m.docs)==null?void 0:v.description}}};var k,w,x,f,y;i.parameters={...i.parameters,docs:{...(k=i.parameters)==null?void 0:k.docs,source:{originalSource:`{
  name: 'White variants (on dark background)',
  args: {
    size: 'md'
  },
  parameters: {
    backgrounds: {
      default: 'dark'
    },
    controls: {
      include: ['size']
    },
    docs: {
      description: {
        story: 'White-mode buttons for dark/photo backgrounds. Use **size** control to preview at any size.'
      },
      source: {
        code: \`<!-- White solid -->
<button class="btn-social btn-social-white btn-md">
  <!-- provider icon -->
  Sign in with Facebook
</button>

<!-- White outline -->
<button class="btn-social btn-social-white-outline btn-md">
  <!-- provider icon -->
  Sign in with Facebook
</button>\`,
        language: 'html'
      }
    }
  },
  render: ({
    size
  }) => \`
    <div style="background:#111928;padding:24px;border-radius:8px;
                display:flex;flex-direction:column;gap:16px;">
      <div>
        <p style="font:10px/1 600 sans-serif;text-transform:uppercase;letter-spacing:.1em;
                  color:#6B7280;margin:0 0 8px;">White solid</p>
        \${socialBtn({
    label: 'Sign in with Facebook',
    color: 'white',
    outline: false,
    size,
    iconFn: FB_ICON
  })}
      </div>
      <div>
        <p style="font:10px/1 600 sans-serif;text-transform:uppercase;letter-spacing:.1em;
                  color:#6B7280;margin:0 0 8px;">White outline</p>
        \${socialBtn({
    label: 'Sign in with Facebook',
    color: 'white',
    outline: true,
    size,
    iconFn: FB_ICON
  })}
      </div>
    </div>\`
}`,...(x=(w=i.parameters)==null?void 0:w.docs)==null?void 0:x.source},description:{story:"White variants on dark background — solid and outline.\nUse `size` control to preview at any size.\nQA: White solid on dark bg, white outline with white border, border-radius=8px.",...(y=(f=i.parameters)==null?void 0:f.docs)==null?void 0:y.description}}};var S,z,F,C,B;s.parameters={...s.parameters,docs:{...(S=s.parameters)==null?void 0:S.docs,source:{originalSource:`{
  name: 'Multi-provider showcase',
  args: {
    size: 'md',
    outline: false
  },
  parameters: {
    controls: {
      include: ['size', 'outline']
    },
    docs: {
      description: {
        story: 'Same button shell, different provider icons. Use **size** and **outline** controls to preview combinations.'
      }
    }
  },
  render: ({
    size,
    outline
  }) => \`
    <div style="display:flex;flex-direction:column;gap:10px;">
      \${[{
    label: 'Sign in with Facebook',
    iconFn: FB_ICON
  }, {
    label: 'Sign in with Google',
    iconFn: GOOGLE_ICON
  }, {
    label: 'Sign in with GitHub',
    iconFn: GITHUB_ICON
  }].map(p => socialBtn({
    ...p,
    color: 'dark',
    outline,
    size
  })).join('')}
    </div>\`
}`,...(F=(z=s.parameters)==null?void 0:z.docs)==null?void 0:F.source},description:{story:"Multi-provider showcase — different icons, same button shell.\nUse `size` + `outline` controls to preview all providers at any size/mode.\nFigma uses Facebook as the representative example icon.",...(B=(C=s.parameters)==null?void 0:C.docs)==null?void 0:B.description}}};const M=["Interactive","DarkSizes","WhiteVariants","MultiProvider"];export{t as DarkSizes,c as Interactive,s as MultiProvider,i as WhiteVariants,M as __namedExportsOrder,_ as default};
