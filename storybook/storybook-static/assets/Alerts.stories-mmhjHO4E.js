const T="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z",S={success:{darkBg:"#046c4e",accent:"#046c4e"},danger:{darkBg:"#c81e1e",accent:"#c81e1e"},info:{darkBg:"#1447e6",accent:"#1447e6"},warning:{darkBg:"#d03801",accent:"#d03801"},default:{darkBg:"#1f2a37",accent:"#1f2a37"}},V={success:"success",danger:"danger",info:"info",warning:"warning",default:"dark"};function m({color:t="success",type:a="medium",heading:r,body:n,cta:s}){const e=S[t],o=V[t]||"dark";let i,l;a==="dark"?(i="alert",l=` style="background:${e.darkBg};color:#ffffff;border-color:${e.darkBg};max-width:640px;"`):a==="light"?(i=`alert alert-${o}`,l=' style="background:#ffffff;max-width:640px;"'):(i=`alert alert-${o}`,l=' style="max-width:640px;"');const D=a==="dark"?` style="background:#ffffff;color:${e.accent};border-color:#ffffff;"`:"",$=s?`
  <div style="margin-top:8px;">
    <button type="button" class="btn btn-xs"${D}>View more</button>
  </div>`:"";return`
<div role="alert" class="${i}"${l}>
  <svg class="alert-icon" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fill-rule="evenodd" d="${T}" clip-rule="evenodd"/></svg>
  <div class="alert-body">
    <div class="alert-title">${r}</div>
    <p style="margin:0;">${n}</p>
    ${$}
  </div>
  <button type="button" class="alert-dismiss" aria-label="Dismiss">×</button>
</div>`}const Y={title:"Iris Library/Alerts",tags:["autodocs","stable"],parameters:{docs:{description:{component:`
**Alert** surfaces a brief, potentially time-sensitive message without interrupting the user's workflow.

**Urgency levels** (from Notification system guidelines, node 9929:153267)
- **High** — requires immediate action to restore full product access (e.g. payment failed, session expired)
- **Medium** — notifies about features or opportunities that benefit the user
- **Low** — status-change messages ("Email verified", "Link copied") and general product info

**When to use**
- Surfacing the outcome of a user action (success, error, warning)
- Showing a persistent state the user should be aware of but can dismiss
- Inline validation feedback on a section (not a single field)

**When NOT to use**
- Requiring an explicit decision → use a **Modal Dialog**
- Communicating a site-wide critical outage → use a **Banner**
- Brief ephemeral feedback after an action → use a **Toast**

**Anatomy**
\`[check-circle icon] [heading] [dismiss ×] / [body text] / [optional CTA button]\`

**Types**
- \`medium\` — tinted background, accent-colored text; default for most use cases
- \`dark\` — solid dark background, white text; high-emphasis variant
- \`light\` — white background with subtle shadow, accent-colored text; use on colored page backgrounds

**Accessibility** — the alert container uses \`role="alert"\` so screen readers announce it immediately. The dismiss button has \`aria-label="Dismiss"\`. Avoid triggering \`role="alert"\` on page load — reserve it for dynamic updates.
        `}}},argTypes:{heading:{control:"text",description:"Short title at 600/14px. Keep to one line.",table:{category:"Content",defaultValue:{summary:"Account created successfully"}}},body:{control:"text",description:"Supporting description at 400/14px. 1–3 sentences maximum.",table:{category:"Content",defaultValue:{summary:"Your account is ready. You can now invite team members and configure your workspace."}}},color:{control:"select",options:["success","danger","info","warning","default"],description:"Semantic color theme.\n\n- `success` — #046c4e\n- `danger` — #c81e1e\n- `info` — #1447e6\n- `warning` — #d03801\n- `default` — #1f2a37",table:{category:"Appearance",defaultValue:{summary:"success"}}},type:{control:"select",options:["medium","dark","light"],description:"Visual weight.\n\n- `medium` — tinted background + accent text (default)\n- `dark` — solid accent background + white text (high-emphasis)\n- `light` — white background + accent text + drop shadow (use on colored surfaces)",table:{category:"Appearance",defaultValue:{summary:"medium"}}},cta:{control:"boolean",description:'Show an optional "View more" CTA button below the body text.',table:{category:"State",defaultValue:{summary:!1}}}},args:{color:"success",type:"medium",heading:"Account created successfully",body:"Your account is ready. You can now invite team members and configure your workspace.",cta:!1}},c={name:"Interactive (Controls)",render:t=>m(t),parameters:{docs:{description:{story:"Use **Controls** to switch color, type, and content, and to toggle the CTA button."},source:{transform:(t,a)=>{const{color:r,type:n,heading:s,body:e,cta:o}=a.args;return`<!-- Alert: ${r} / ${n}${o?" / with CTA":""} -->
<div role="alert" class="alert alert--${r} alert--${n}">
  <div class="alert__content">
    <div class="alert__header">
      <svg class="alert__icon" aria-hidden="true"><!-- check-circle --></svg>
      <span class="alert__heading">${s}</span>
      <button class="alert__dismiss" aria-label="Dismiss"><!-- × --></button>
    </div>
    <p class="alert__body">${e}</p>${o?`
    <button class="alert__cta">View more</button>`:""}
  </div>
</div>`}}}}},d={name:"All colors",args:{type:"medium",cta:!1},parameters:{controls:{include:["type","cta"]},docs:{description:{story:`All five semantic colors. Switch **type** to preview medium / dark / light across all colors.

**✅ Do** — choose the color that matches the message semantics (success for confirmations, danger for errors).
**❌ Don't** — use \`default\` for errors or warnings — it provides no semantic signal to colour-blind users.
**❌ Don't** — use high-urgency colors (danger) for low-urgency messages — it creates alert fatigue.`},source:{code:`<!-- Success -->
<div role="alert" class="alert alert--success alert--medium"> … </div>

<!-- Danger -->
<div role="alert" class="alert alert--danger alert--medium"> … </div>

<!-- Info -->
<div role="alert" class="alert alert--info alert--medium"> … </div>

<!-- Warning -->
<div role="alert" class="alert alert--warning alert--medium"> … </div>

<!-- Default -->
<div role="alert" class="alert alert--default alert--medium"> … </div>`,language:"html"}}},render:({type:t,cta:a})=>{const r=["success","danger","info","warning","default"],n={success:"Success",danger:"Danger",info:"Info",warning:"Warning",default:"Default"},s={success:"Your changes have been saved and are now live.",danger:"We could not process your payment. Please check your card details.",info:"A new version of the app is available. Refresh to update.",warning:"Your free trial ends in 3 days. Upgrade to keep access.",default:"Scheduled maintenance is planned for Sunday 02:00–04:00 UTC."};return`
<div style="display:flex;flex-direction:column;gap:16px;padding:24px;background:var(--color-bg-default);">
  ${r.map(e=>`
  <div>
    <div style="font:var(--font-medium) 11px/1 inherit;color:var(--color-text-secondary);text-transform:uppercase;letter-spacing:.08em;margin-bottom:8px;">${n[e]}</div>
    ${m({color:e,type:t,heading:n[e],body:s[e],cta:a})}
  </div>`).join("")}
</div>`}},u={name:"All types",args:{color:"info",cta:!1},parameters:{controls:{include:["color","cta"]},docs:{description:{story:"Three visual weight variants. Switch **color** to compare type contrast across all themes.\n\n**✅ Do** — use `medium` (default) for most in-page alerts.\n**✅ Do** — use `dark` when the alert must stand out prominently (e.g. a critical action required banner within a form).\n**✅ Do** — use `light` when the alert sits on a tinted or colored page background.\n**❌ Don't** — mix types within the same page section — pick one type and use it consistently."},source:{code:`<!-- Medium — tinted background -->
<div role="alert" class="alert alert--info alert--medium"> … </div>

<!-- Dark — solid accent background -->
<div role="alert" class="alert alert--info alert--dark"> … </div>

<!-- Light — white background with shadow -->
<div role="alert" class="alert alert--info alert--light"> … </div>`,language:"html"}}},render:({color:t,cta:a})=>{const r=["medium","dark","light"],n={medium:"Medium",dark:"Dark",light:"Light"},s="Two-factor authentication is now active",e="Your account is protected. Sign-in attempts will require a verification code.";return`
<div style="display:flex;flex-direction:column;gap:16px;padding:24px;background:var(--color-bg-muted);">
  ${r.map(o=>`
  <div>
    <div style="font:var(--font-medium) 11px/1 inherit;color:var(--color-text-secondary);text-transform:uppercase;letter-spacing:.08em;margin-bottom:8px;">${n[o]}</div>
    ${m({color:t,type:o,heading:s,body:e,cta:a})}
  </div>`).join("")}
</div>`}},g={name:"With CTA",args:{color:"warning",type:"medium",cta:!0},parameters:{controls:{include:["color","type"]},docs:{description:{story:`Alert with an optional **View more** CTA button. Use when users need a direct action path from the alert.

**✅ Do** — pair high-urgency alerts (danger, warning) with a CTA that resolves the issue directly.
**❌ Don't** — add a CTA to low-urgency info alerts — it increases cognitive load without clear benefit.
**❌ Don't** — use generic labels like "Click here" — the button label should describe the destination or action.`},source:{code:`<div role="alert" class="alert alert--warning alert--medium">
  <div class="alert__content">
    <div class="alert__header">
      <svg class="alert__icon" aria-hidden="true"><!-- check-circle --></svg>
      <span class="alert__heading">Your free trial ends in 3 days</span>
      <button class="alert__dismiss" aria-label="Dismiss"><!-- × --></button>
    </div>
    <p class="alert__body">Upgrade to a paid plan to keep all features and avoid data loss.</p>
    <button class="alert__cta">View more</button>
  </div>
</div>`,language:"html"}}},render:({color:t,type:a})=>m({color:t,type:a,heading:"Your free trial ends in 3 days",body:"Upgrade to a paid plan to keep all features and avoid data loss when the trial expires.",cta:!0})};var p,h,f;c.parameters={...c.parameters,docs:{...(p=c.parameters)==null?void 0:p.docs,source:{originalSource:`{
  name: 'Interactive (Controls)',
  render: args => renderAlert(args),
  parameters: {
    docs: {
      description: {
        story: 'Use **Controls** to switch color, type, and content, and to toggle the CTA button.'
      },
      source: {
        transform: (_src, ctx) => {
          const {
            color,
            type,
            heading,
            body,
            cta
          } = ctx.args;
          return \`<!-- Alert: \${color} / \${type}\${cta ? ' / with CTA' : ''} -->
<div role="alert" class="alert alert--\${color} alert--\${type}">
  <div class="alert__content">
    <div class="alert__header">
      <svg class="alert__icon" aria-hidden="true"><!-- check-circle --></svg>
      <span class="alert__heading">\${heading}</span>
      <button class="alert__dismiss" aria-label="Dismiss"><!-- × --></button>
    </div>
    <p class="alert__body">\${body}</p>\${cta ? '\\n    <button class="alert__cta">View more</button>' : ''}
  </div>
</div>\`;
        }
      }
    }
  }
}`,...(f=(h=c.parameters)==null?void 0:h.docs)==null?void 0:f.source}}};var v,y,b;d.parameters={...d.parameters,docs:{...(v=d.parameters)==null?void 0:v.docs,source:{originalSource:`{
  name: 'All colors',
  args: {
    type: 'medium',
    cta: false
  },
  parameters: {
    controls: {
      include: ['type', 'cta']
    },
    docs: {
      description: {
        story: \`All five semantic colors. Switch **type** to preview medium / dark / light across all colors.

**✅ Do** — choose the color that matches the message semantics (success for confirmations, danger for errors).
**❌ Don't** — use \\\`default\\\` for errors or warnings — it provides no semantic signal to colour-blind users.
**❌ Don't** — use high-urgency colors (danger) for low-urgency messages — it creates alert fatigue.\`
      },
      source: {
        code: \`<!-- Success -->
<div role="alert" class="alert alert--success alert--medium"> … </div>

<!-- Danger -->
<div role="alert" class="alert alert--danger alert--medium"> … </div>

<!-- Info -->
<div role="alert" class="alert alert--info alert--medium"> … </div>

<!-- Warning -->
<div role="alert" class="alert alert--warning alert--medium"> … </div>

<!-- Default -->
<div role="alert" class="alert alert--default alert--medium"> … </div>\`,
        language: 'html'
      }
    }
  },
  render: ({
    type,
    cta
  }) => {
    const colors = ['success', 'danger', 'info', 'warning', 'default'];
    const labels = {
      success: 'Success',
      danger: 'Danger',
      info: 'Info',
      warning: 'Warning',
      default: 'Default'
    };
    const bodies = {
      success: 'Your changes have been saved and are now live.',
      danger: 'We could not process your payment. Please check your card details.',
      info: 'A new version of the app is available. Refresh to update.',
      warning: 'Your free trial ends in 3 days. Upgrade to keep access.',
      default: 'Scheduled maintenance is planned for Sunday 02:00–04:00 UTC.'
    };
    return \`
<div style="display:flex;flex-direction:column;gap:16px;padding:24px;background:var(--color-bg-default);">
  \${colors.map(c => \`
  <div>
    <div style="font:var(--font-medium) 11px/1 inherit;color:var(--color-text-secondary);text-transform:uppercase;letter-spacing:.08em;margin-bottom:8px;">\${labels[c]}</div>
    \${renderAlert({
      color: c,
      type,
      heading: labels[c],
      body: bodies[c],
      cta
    })}
  </div>\`).join('')}
</div>\`;
  }
}`,...(b=(y=d.parameters)==null?void 0:y.docs)==null?void 0:b.source}}};var w,k,x;u.parameters={...u.parameters,docs:{...(w=u.parameters)==null?void 0:w.docs,source:{originalSource:`{
  name: 'All types',
  args: {
    color: 'info',
    cta: false
  },
  parameters: {
    controls: {
      include: ['color', 'cta']
    },
    docs: {
      description: {
        story: \`Three visual weight variants. Switch **color** to compare type contrast across all themes.

**✅ Do** — use \\\`medium\\\` (default) for most in-page alerts.
**✅ Do** — use \\\`dark\\\` when the alert must stand out prominently (e.g. a critical action required banner within a form).
**✅ Do** — use \\\`light\\\` when the alert sits on a tinted or colored page background.
**❌ Don't** — mix types within the same page section — pick one type and use it consistently.\`
      },
      source: {
        code: \`<!-- Medium — tinted background -->
<div role="alert" class="alert alert--info alert--medium"> … </div>

<!-- Dark — solid accent background -->
<div role="alert" class="alert alert--info alert--dark"> … </div>

<!-- Light — white background with shadow -->
<div role="alert" class="alert alert--info alert--light"> … </div>\`,
        language: 'html'
      }
    }
  },
  render: ({
    color,
    cta
  }) => {
    const types = ['medium', 'dark', 'light'];
    const labels = {
      medium: 'Medium',
      dark: 'Dark',
      light: 'Light'
    };
    const heading = 'Two-factor authentication is now active';
    const body = 'Your account is protected. Sign-in attempts will require a verification code.';
    return \`
<div style="display:flex;flex-direction:column;gap:16px;padding:24px;background:var(--color-bg-muted);">
  \${types.map(t => \`
  <div>
    <div style="font:var(--font-medium) 11px/1 inherit;color:var(--color-text-secondary);text-transform:uppercase;letter-spacing:.08em;margin-bottom:8px;">\${labels[t]}</div>
    \${renderAlert({
      color,
      type: t,
      heading,
      body,
      cta
    })}
  </div>\`).join('')}
</div>\`;
  }
}`,...(x=(k=u.parameters)==null?void 0:k.docs)==null?void 0:x.source}}};var _,A,C;g.parameters={...g.parameters,docs:{...(_=g.parameters)==null?void 0:_.docs,source:{originalSource:`{
  name: 'With CTA',
  args: {
    color: 'warning',
    type: 'medium',
    cta: true
  },
  parameters: {
    controls: {
      include: ['color', 'type']
    },
    docs: {
      description: {
        story: \`Alert with an optional **View more** CTA button. Use when users need a direct action path from the alert.

**✅ Do** — pair high-urgency alerts (danger, warning) with a CTA that resolves the issue directly.
**❌ Don't** — add a CTA to low-urgency info alerts — it increases cognitive load without clear benefit.
**❌ Don't** — use generic labels like "Click here" — the button label should describe the destination or action.\`
      },
      source: {
        code: \`<div role="alert" class="alert alert--warning alert--medium">
  <div class="alert__content">
    <div class="alert__header">
      <svg class="alert__icon" aria-hidden="true"><!-- check-circle --></svg>
      <span class="alert__heading">Your free trial ends in 3 days</span>
      <button class="alert__dismiss" aria-label="Dismiss"><!-- × --></button>
    </div>
    <p class="alert__body">Upgrade to a paid plan to keep all features and avoid data loss.</p>
    <button class="alert__cta">View more</button>
  </div>
</div>\`,
        language: 'html'
      }
    }
  },
  render: ({
    color,
    type
  }) => {
    return renderAlert({
      color,
      type,
      heading: 'Your free trial ends in 3 days',
      body: 'Upgrade to a paid plan to keep all features and avoid data loss when the trial expires.',
      cta: true
    });
  }
}`,...(C=(A=g.parameters)==null?void 0:A.docs)==null?void 0:C.source}}};const U=["Interactive","AllColors","AllTypes","WithCTA"];export{d as AllColors,u as AllTypes,c as Interactive,g as WithCTA,U as __namedExportsOrder,Y as default};
