const i={bg:"#ffffff",bgDark:"#1f2a37",titleMuted:"#6b7280",body:"#6b7280",bodyDark:"#9ca3af",border:"#e5e7eb",navText:"#111928",navIcon:"#6b7280",navActive:"#f3f4f6",inputBg:"#f9fafb",inputBorder:"#d1d5db",label:"#111928",btnPurple:"#42389d",overlay:"rgba(75,85,99,0.5)"},D=(e="#6b7280")=>`<svg width="14" height="14" viewBox="0 0 20 20" fill="${e}" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"/></svg>`,u={overview:e=>`<svg width="20" height="20" viewBox="0 0 20 20" fill="${e}"><path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"/></svg>`,pages:e=>`<svg width="20" height="20" viewBox="0 0 20 20" fill="${e}"><path fill-rule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clip-rule="evenodd"/></svg>`,sales:e=>`<svg width="20" height="20" viewBox="0 0 20 20" fill="${e}"><path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C4.343 11.227 4.8 12 5.586 12h9.828a1 1 0 000-2H7.586l.35-.35A1 1 0 008 9H5.72l-.899-3.596A.997.997 0 004 5H3zm13 13a1 1 0 11-2 0 1 1 0 012 0zm-8 0a1 1 0 11-2 0 1 1 0 012 0z"/></svg>`,messages:e=>`<svg width="20" height="20" viewBox="0 0 20 20" fill="${e}"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/></svg>`,auth:e=>`<svg width="20" height="20" viewBox="0 0 20 20" fill="${e}"><path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd"/></svg>`,chevDown:e=>`<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="${e}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>`};function c(e,t){const o=t?"#9ca3af":i.titleMuted;return`
  <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:20px;">
    <h5 style="margin:0;font-size:16px;font-weight:600;color:${o};font-family:inherit;">${e}</h5>
    <button style="display:flex;align-items:center;justify-content:center;width:28px;height:28px;
                   border:none;background:transparent;cursor:pointer;border-radius:4px;padding:0;">
      ${D(o)}
    </button>
  </div>`}function w(e){const t=e?i.bodyDark:i.body;return`
  <div style="padding:24px 16px;">
    ${c("Info",e)}
    <p style="margin:0 0 24px;font-size:14px;font-weight:400;color:${t};line-height:1.6;font-family:inherit;">
      Supercharge your hiring by taking advantage of our <strong style="font-weight:600;">limited-time sale</strong>
      for Flowbite Docs + Job Board. Unlimited access to over 190K top-ranked candidates and the #1 design job board.
    </p>
    <div style="display:flex;gap:12px;">
      <button class="btn btn-primary btn-md">Get access</button>
      <button class="btn btn-outline-gray btn-md">Decline</button>
    </div>
  </div>`}function $(e){const t=e?"#e5e7eb":i.navText,o=e?"#9ca3af":i.navIcon,n=e?"#374151":i.navActive,a=e?"#374151":i.border,r=(s,l,g=!1,f=!1)=>`
  <div style="display:flex;align-items:center;justify-content:space-between;
              padding:${f?"8px 8px 8px 32px":"8px"};border-radius:6px;
              background:${g?n:"transparent"};cursor:pointer;gap:8px;">
    <div style="display:flex;align-items:center;gap:10px;">
      ${l?`<span style="flex-shrink:0;">${u[l](g?t:o)}</span>`:""}
      <span style="font-size:${f?"14px":"16px"};font-weight:500;color:${t};font-family:inherit;">${s}</span>
    </div>
    ${f?"":`${u.chevDown(o)}`}
  </div>`;return`
  <div style="padding:24px 16px;">
    ${c("Menu",e)}
    <nav style="display:flex;flex-direction:column;gap:2px;">
      ${r("Overview","overview")}
      ${r("Pages","pages")}
      <div>
        ${r("Sales","sales",!0)}
        <div style="display:flex;flex-direction:column;gap:1px;margin-top:2px;">
          ${r("Product List",null,!1,!0)}
          ${r("Billing",null,!1,!0)}
          ${r("Invoice",null,!1,!0)}
        </div>
      </div>
      ${r("Messages","messages")}
      ${r("Authentication","auth")}
    </nav>
    <div style="height:1px;background:${a};margin:16px 0;"></div>
    <div style="display:flex;flex-direction:column;gap:2px;">
      <div style="display:flex;align-items:center;gap:10px;padding:8px;cursor:pointer;">
        <span style="font-size:14px;color:${o};font-family:inherit;">Docs</span>
      </div>
      <div style="display:flex;align-items:center;gap:10px;padding:8px;cursor:pointer;">
        <span style="font-size:14px;color:${o};font-family:inherit;">Components</span>
      </div>
      <div style="display:flex;align-items:center;gap:10px;padding:8px;cursor:pointer;">
        <span style="font-size:14px;color:${o};font-family:inherit;">Blog</span>
      </div>
    </div>
  </div>`}function k(e){const t=e?i.bodyDark:i.body,o=e?"#e5e7eb":i.label,n=e?"#4b5563":i.inputBg,a=e?"#e5e7eb":i.inputBorder;return`
  <div style="padding:24px 16px;">
    ${c("Contact us",e)}
    <div style="display:flex;flex-direction:column;gap:16px;margin-bottom:24px;">
      <div class="form-group" style="margin-bottom:0;">
        <label class="form-label" style="color:${o};">Your email</label>
        <input class="form-input" type="email" placeholder="name@flowbite.com"
               style="background:${n};border-color:${a};color:${t};">
        <span class="form-helper" style="color:${t};">We'll never share your details. See our Privacy Policy.</span>
      </div>
      <div class="form-group" style="margin-bottom:0;">
        <label class="form-label" style="color:${o};">Subject</label>
        <input class="form-input" type="text" placeholder="Let us know how we can help you"
               style="background:${n};border-color:${a};color:${t};">
      </div>
      <div class="form-group" style="margin-bottom:0;">
        <label class="form-label" style="color:${o};">Your message</label>
        <textarea class="form-textarea" placeholder="Write text here..."
                  style="background:${n};border-color:${a};color:${t};min-height:80px;"></textarea>
        <span class="form-helper" style="color:${t};">A note for extra info</span>
      </div>
    </div>
    <button style="display:inline-flex;align-items:center;gap:8px;padding:10px 20px;
                   background:${i.btnPurple};color:#fff;border:none;border-radius:8px;
                   font-size:14px;font-weight:500;cursor:pointer;font-family:inherit;margin-bottom:16px;">
      Send message
    </button>
    <div style="display:flex;flex-direction:column;gap:4px;padding-top:8px;border-top:1px solid ${e?"#374151":i.border};">
      <span style="font-size:14px;color:${t};font-family:inherit;">info@flowbite.com</span>
      <span style="font-size:14px;color:${t};font-family:inherit;">1-234-56789-10</span>
    </div>
  </div>`}function z(e){return`
  <div style="padding:24px 16px;">
    ${c("Notice",e)}
    <div class="alert alert-info" style="margin-bottom:16px;">
      <div class="alert-icon">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"/></svg>
      </div>
      <div class="alert-body">
        <div class="alert-title">New update available</div>
        <p style="margin:4px 0 0;font-size:14px;line-height:1.5;">
          A new software version is available for download. It is important that you update as soon as possible to stay secure.
        </p>
      </div>
    </div>
    <div style="display:flex;gap:12px;">
      <button class="btn btn-primary btn-md">Update now</button>
      <button class="btn btn-outline-gray btn-md">Skip</button>
    </div>
  </div>`}function B(e){const t=e?i.bodyDark:i.body;return`
  <div style="display:flex;align-items:center;justify-content:space-between;padding:16px 24px;
              border-top:1px solid ${e?"#374151":i.border};font-family:inherit;">
    <div style="display:flex;align-items:center;gap:24px;flex:1;">
      <p style="margin:0;font-size:14px;color:${t};max-width:600px;line-height:1.5;">
        Supercharge your hiring by taking advantage of our <strong style="font-weight:600;">limited-time sale</strong>
        for Flowbite Docs + Job Board. Unlimited access to over 190K top-ranked candidates.
      </p>
    </div>
    <div style="display:flex;gap:12px;flex-shrink:0;">
      <button class="btn btn-primary btn-md">Get access</button>
      <button class="btn btn-outline-gray btn-md">No, thanks</button>
    </div>
  </div>`}function M({type:e="default",dark:t=!1,position:o="right",showOverlay:n=!0}){const a=t?i.bgDark:i.bg,r=e==="textBottom";let s;if(e==="navigation"?s=$(t):e==="contactForm"?s=k(t):e==="alertMessage"?s=z(t):e==="textBottom"?s=B(t):s=w(t),r)return`
<div style="position:relative;width:700px;height:200px;font-family:inherit;">
  ${n?`<div style="position:absolute;inset:0;background:${i.overlay};border-radius:8px;"></div>`:""}
  <div style="position:absolute;bottom:0;left:0;right:0;background:${a};border-radius:8px 8px 0 0;
              box-shadow:0 -4px 16px rgba(0,0,0,.12);">
    ${s}
  </div>
</div>`;const l=o==="left"?"left:0;":"right:0;";return`
<div style="position:relative;width:700px;height:520px;font-family:inherit;overflow:hidden;border-radius:8px;">
  ${n?`<div style="position:absolute;inset:0;background:${i.overlay};"></div>`:""}
  <div style="position:absolute;top:0;bottom:0;${l}width:320px;background:${a};
              box-shadow:${o==="right"?"-4px":"4px"} 0 16px rgba(0,0,0,.12);overflow-y:auto;">
    ${s}
  </div>
</div>`}const A={title:"Iris Library/Drawer",tags:["!dev"],parameters:{docs:{description:{component:`
**Drawer** (also called a side sheet or flyout) slides in from the edge of the screen to reveal supplementary content without navigating away from the current page.

> ⚠️ **Status: hidden — design story usage unconfirmed.** This component is committed for reference. It is not shown in the sidebar until it is used in active design stories.

**Types confirmed in Figma (node 13261:81153)**
- \`default\` — info text + CTA buttons (right panel)
- \`navigation\` — site nav menu with icons + submenus
- \`contactForm\` — email/subject/message form fields
- \`alertMessage\` — alert card + action buttons
- \`textBottom\` — bottom sheet with text + CTAs

**Breakpoints**
- Desktop & Tablet & Mobile: panel width \`320px\`
- Text Bottom: full-width bottom sheet, ~\`150px\` height

**When to use**
- Displaying supplementary details without leaving the current context
- Mobile navigation menus (hamburger → Navigation drawer)
- Quick-fill forms like contact or filters without a full page

**When NOT to use**
- Complex multi-step flows → use a full page or wizard
- Critical destructive actions → use a **Modal** with explicit confirmation
- Simple one-field inputs → use an inline form
        `}}},argTypes:{type:{control:"select",options:["default","navigation","contactForm","alertMessage","textBottom"],description:"Drawer content type. Maps to Figma `Type=` variant.",table:{category:"Appearance",defaultValue:{summary:"default"}}},dark:{control:"boolean",description:"Dark theme. Drawer bg changes to `#1f2a37`, text to `#9ca3af`.",table:{category:"Appearance",defaultValue:{summary:!1}}},position:{control:"select",options:["right","left"],description:"Side from which the panel slides in. `textBottom` ignores this.",table:{category:"Appearance",defaultValue:{summary:"right"}}},showOverlay:{control:"boolean",description:"Show the semi-transparent overlay behind the drawer. Use `false` to inspect the panel alone.",table:{category:"Appearance",defaultValue:{summary:!0}}}},args:{type:"default",dark:!1,position:"right",showOverlay:!0}},d={name:"Interactive (Controls)",render:e=>M(e),parameters:{docs:{description:{story:"Use **Controls** to switch between types, themes, and position. The panel is shown in a fixed 700×520 preview container."},source:{transform:(e,t)=>{const{type:o,dark:n,position:a}=t.args;return`<!-- Overlay -->
<div style="position:fixed;inset:0;background:rgba(75,85,99,0.5);z-index:40;"></div>

<!-- Drawer panel -->
<div style="position:fixed;top:0;bottom:0;${a==="left"?"left:0":"right:0"};width:320px;background:${n?"#1f2a37":"#ffffff"};
            z-index:50;overflow-y:auto;box-shadow:0 0 16px rgba(0,0,0,.2);">
  <!-- type="${o}" dark=${n} -->
  <!-- content goes here -->
</div>`}}}}},p={name:"All types",args:{dark:!1},parameters:{controls:{include:["dark"]},docs:{description:{story:"All 5 Figma drawer types. Toggle **dark** to preview dark theme across all.\n\n✅ Use `default` for info panels and announcements\n✅ Use `navigation` for mobile hamburger menu\n✅ Use `contactForm` for quick-submit forms\n✅ Use `textBottom` for cookie banners or upgrade nudges\n❌ Don't use Drawer for destructive confirmations — use Modal instead"},source:{language:"html",code:`<!-- Side drawer (right) -->
<div style="position:fixed;top:0;bottom:0;right:0;width:320px;background:#fff;z-index:50;box-shadow:-4px 0 16px rgba(0,0,0,.12);">
  <!-- drawer content -->
</div>

<!-- Bottom sheet -->
<div style="position:fixed;bottom:0;left:0;right:0;background:#fff;z-index:50;box-shadow:0 -4px 16px rgba(0,0,0,.12);">
  <!-- bottom content -->
</div>`}}},render:({dark:e})=>{const t=[{type:"default",label:"Default"},{type:"navigation",label:"Navigation"},{type:"contactForm",label:"Contact Form"},{type:"alertMessage",label:"Alert Message"}],o=e?"#1f2a37":"#ffffff",n="#6b7280";return`
<div style="display:flex;flex-direction:column;gap:32px;font-family:inherit;">
  <div style="display:grid;grid-template-columns:repeat(2,auto);gap:24px;align-items:start;">
    ${t.map(({type:a,label:r})=>`
    <div>
      <div style="font-size:11px;color:${n};margin-bottom:8px;font-family:inherit;">${r}</div>
      <div style="position:relative;width:340px;height:360px;overflow:hidden;border-radius:8px;
                  border:1px solid #e5e7eb;">
        <div style="position:absolute;inset:0;background:rgba(75,85,99,0.3);"></div>
        <div style="position:absolute;top:0;bottom:0;right:0;width:320px;background:${o};
                    box-shadow:-4px 0 16px rgba(0,0,0,.12);overflow-y:auto;">
          ${a==="navigation"?$(e):a==="contactForm"?k(e):a==="alertMessage"?z(e):w(e)}
        </div>
      </div>
    </div>`).join("")}
  </div>
  <div>
    <div style="font-size:11px;color:${n};margin-bottom:8px;font-family:inherit;">Text Bottom</div>
    <div style="position:relative;width:700px;height:140px;border-radius:8px;
                border:1px solid #e5e7eb;overflow:hidden;">
      <div style="position:absolute;inset:0;background:rgba(75,85,99,0.3);"></div>
      <div style="position:absolute;bottom:0;left:0;right:0;background:${o};
                  box-shadow:0 -4px 16px rgba(0,0,0,.12);">
        ${B(e)}
      </div>
    </div>
  </div>
</div>`}};var b,v,m;d.parameters={...d.parameters,docs:{...(b=d.parameters)==null?void 0:b.docs,source:{originalSource:`{
  name: 'Interactive (Controls)',
  render: args => drawer(args),
  parameters: {
    docs: {
      description: {
        story: 'Use **Controls** to switch between types, themes, and position. The panel is shown in a fixed 700×520 preview container.'
      },
      source: {
        transform: (_src, ctx) => {
          const {
            type,
            dark,
            position
          } = ctx.args;
          const bg = dark ? '#1f2a37' : '#ffffff';
          const side = position === 'left' ? 'left:0' : 'right:0';
          return \`<!-- Overlay -->
<div style="position:fixed;inset:0;background:rgba(75,85,99,0.5);z-index:40;"></div>

<!-- Drawer panel -->
<div style="position:fixed;top:0;bottom:0;\${side};width:320px;background:\${bg};
            z-index:50;overflow-y:auto;box-shadow:0 0 16px rgba(0,0,0,.2);">
  <!-- type="\${type}" dark=\${dark} -->
  <!-- content goes here -->
</div>\`;
        }
      }
    }
  }
}`,...(m=(v=d.parameters)==null?void 0:v.docs)==null?void 0:m.source}}};var x,h,y;p.parameters={...p.parameters,docs:{...(x=p.parameters)==null?void 0:x.docs,source:{originalSource:`{
  name: 'All types',
  args: {
    dark: false
  },
  parameters: {
    controls: {
      include: ['dark']
    },
    docs: {
      description: {
        story: \`All 5 Figma drawer types. Toggle **dark** to preview dark theme across all.

✅ Use \\\`default\\\` for info panels and announcements
✅ Use \\\`navigation\\\` for mobile hamburger menu
✅ Use \\\`contactForm\\\` for quick-submit forms
✅ Use \\\`textBottom\\\` for cookie banners or upgrade nudges
❌ Don't use Drawer for destructive confirmations — use Modal instead\`
      },
      source: {
        language: 'html',
        code: \`<!-- Side drawer (right) -->
<div style="position:fixed;top:0;bottom:0;right:0;width:320px;background:#fff;z-index:50;box-shadow:-4px 0 16px rgba(0,0,0,.12);">
  <!-- drawer content -->
</div>

<!-- Bottom sheet -->
<div style="position:fixed;bottom:0;left:0;right:0;background:#fff;z-index:50;box-shadow:0 -4px 16px rgba(0,0,0,.12);">
  <!-- bottom content -->
</div>\`
      }
    }
  },
  render: ({
    dark
  }) => {
    const types = [{
      type: 'default',
      label: 'Default'
    }, {
      type: 'navigation',
      label: 'Navigation'
    }, {
      type: 'contactForm',
      label: 'Contact Form'
    }, {
      type: 'alertMessage',
      label: 'Alert Message'
    }];
    const panelsBg = dark ? '#1f2a37' : '#ffffff';
    const labelClr = '#6b7280';
    return \`
<div style="display:flex;flex-direction:column;gap:32px;font-family:inherit;">
  <div style="display:grid;grid-template-columns:repeat(2,auto);gap:24px;align-items:start;">
    \${types.map(({
      type,
      label
    }) => \`
    <div>
      <div style="font-size:11px;color:\${labelClr};margin-bottom:8px;font-family:inherit;">\${label}</div>
      <div style="position:relative;width:340px;height:360px;overflow:hidden;border-radius:8px;
                  border:1px solid #e5e7eb;">
        <div style="position:absolute;inset:0;background:rgba(75,85,99,0.3);"></div>
        <div style="position:absolute;top:0;bottom:0;right:0;width:320px;background:\${panelsBg};
                    box-shadow:-4px 0 16px rgba(0,0,0,.12);overflow-y:auto;">
          \${type === 'navigation' ? drawerNavigation(dark) : type === 'contactForm' ? drawerContactForm(dark) : type === 'alertMessage' ? drawerAlertMessage(dark) : drawerDefault(dark)}
        </div>
      </div>
    </div>\`).join('')}
  </div>
  <div>
    <div style="font-size:11px;color:\${labelClr};margin-bottom:8px;font-family:inherit;">Text Bottom</div>
    <div style="position:relative;width:700px;height:140px;border-radius:8px;
                border:1px solid #e5e7eb;overflow:hidden;">
      <div style="position:absolute;inset:0;background:rgba(75,85,99,0.3);"></div>
      <div style="position:absolute;bottom:0;left:0;right:0;background:\${panelsBg};
                  box-shadow:0 -4px 16px rgba(0,0,0,.12);">
        \${drawerTextBottom(dark)}
      </div>
    </div>
  </div>
</div>\`;
  }
}`,...(y=(h=p.parameters)==null?void 0:h.docs)==null?void 0:y.source}}};const C=["Interactive","AllTypes"];export{p as AllTypes,d as Interactive,C as __namedExportsOrder,A as default};
