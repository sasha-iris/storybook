const A="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z",V="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z",H="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z",I="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z",_="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z",E=t=>`<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="${t}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"/></svg>`;function o(t,e,s){return`<svg width="${e}" height="${e}" viewBox="0 0 20 20" fill="${s}" aria-hidden="true"><path fill-rule="evenodd" d="${t}" clip-rule="evenodd"/></svg>`}function d(t,e){return`<div style="width:32px;height:32px;background:${t};border-radius:8px;flex-shrink:0;display:flex;align-items:center;justify-content:center;">${e}</div>`}function u({cta:t,title:e,description:s,ctaLabel:a}){return t?`
<div class="toast" style="border-color:#84e1bc;flex-direction:column;align-items:stretch;">
  <div style="display:flex;align-items:center;gap:8px;margin-bottom:8px;">
    ${o(V,18,"#0e9f6e")}
    <span class="toast-title" style="flex:1;color:#0e9f6e;">Success</span>
    <button type="button" class="toast-close" style="color:#0e9f6e;" aria-label="Dismiss">×</button>
  </div>
  <p class="toast-message" style="margin:0 0 12px;color:#0e9f6e;">${s}</p>
  <button type="button" class="btn btn-green btn-xs">${a}</button>
</div>`:`
<div class="toast" style="border-color:#84e1bc;">
  ${d("#ecfdf5",o(A,20,"#007a55"))}
  <p class="toast-body" style="margin:0;color:#0e9f6e;">${e}</p>
  <button type="button" class="toast-close" style="color:#0e9f6e;" aria-label="Dismiss">×</button>
</div>`}function p({cta:t,title:e,description:s,ctaLabel:a}){return t?`
<div class="toast" style="border-color:#f8b4b4;flex-direction:column;align-items:stretch;">
  <div style="display:flex;align-items:center;gap:8px;margin-bottom:8px;">
    ${o(H,18,"#e02424")}
    <span class="toast-title" style="flex:1;color:var(--color-danger);">Attention</span>
    <button type="button" class="toast-close" style="color:#e02424;" aria-label="Dismiss">×</button>
  </div>
  <p class="toast-message" style="margin:0 0 12px;color:var(--color-danger);">${s}</p>
  <button type="button" class="btn btn-red btn-xs">${a}</button>
</div>`:`
<div class="toast" style="border-color:#f8b4b4;">
  ${d("#fde8e8",E("#f05252"))}
  <p class="toast-body" style="margin:0;color:#f05252;">${e}</p>
  <button type="button" class="toast-close" style="color:#f05252;" aria-label="Dismiss">×</button>
</div>`}function D({title:t}){return`
<div class="toast">
  ${d("#dbeafe",o(A,20,"#155dfc"))}
  <p class="toast-body" style="margin:0;">${t}</p>
  <button type="button" class="toast-close" aria-label="Dismiss">×</button>
</div>`}function $({title:t}){return`
<div class="toast">
  ${o(I,24,"#155dfc")}
  <div class="toast-body" style="border-left:1px solid var(--color-border-default);padding-left:12px;">
    <p style="margin:0;">${t}</p>
  </div>
</div>`}function C({title:t,description:e}){return`
<div class="toast" style="flex-direction:column;align-items:stretch;">
  <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:12px;">
    <span class="toast-title">New notification</span>
    <button type="button" class="toast-close" aria-label="Dismiss">×</button>
  </div>
  <div style="display:flex;gap:12px;align-items:flex-start;">
    <div style="width:48px;height:48px;border-radius:50%;background:var(--color-bg-muted);border:1px solid var(--color-border-default);flex-shrink:0;display:flex;align-items:center;justify-content:center;font-size:var(--text-base);font-weight:var(--font-semibold);color:var(--color-text-secondary);">BG</div>
    <div class="toast-body" style="min-width:0;">
      <p class="toast-title" style="margin:0 0 2px;">${t}</p>
      <p class="toast-message" style="margin:0 0 4px;line-height:1.4;">${e}</p>
      <p style="margin:0;font-size:var(--text-xs);font-weight:var(--font-medium);color:#155dfc;">a few seconds ago</p>
    </div>
  </div>
</div>`}function T({title:t,description:e,ctaLabel:s}){return`
<div class="toast" style="flex-direction:column;align-items:stretch;">
  <div style="display:flex;gap:12px;align-items:flex-start;">
    ${d("#dbeafe",o(_,20,"#155dfc"))}
    <div class="toast-body" style="min-width:0;">
      <p class="toast-title" style="margin:0 0 2px;">${t}</p>
      <p class="toast-message" style="margin:0 0 12px;line-height:1.4;">${e}</p>
      <div style="display:flex;gap:8px;">
        <button type="button" class="btn btn-primary btn-xs" style="flex:1;">${s}</button>
        <button type="button" class="btn btn-light btn-xs" style="flex:1;">Later</button>
      </div>
    </div>
    <button type="button" class="toast-close" aria-label="Dismiss">×</button>
  </div>
</div>`}function U(t){const{type:e="success",cta:s=!1,title:a,description:n,ctaLabel:i}=t;switch(e){case"danger":return p({cta:s,title:a,description:n,ctaLabel:i});case"default":return D({title:a});case"simple":return $({title:a});case"push":return C({title:a,description:n});case"interactive":return T({title:a,description:n,ctaLabel:i});default:return u({cta:s,title:a,description:n,ctaLabel:i})}}const B={title:"Iris Library/Toast",tags:["autodocs","stable"],parameters:{docs:{description:{component:`
**Toast** is a brief, auto-dismissing notification that appears in response to a user action or system event.

**When to use**
- Confirming an action just completed (file saved, form submitted)
- Reporting a non-blocking error or warning (upload failed, quota exceeded)
- Delivering a push notification or incoming message alert
- Prompting the user to undo a destructive action within a short time window

**When NOT to use**
- Critical errors that block the workflow → use a modal or inline error state
- Persistent information the user must act on → use an Alert or Banner
- Long messages (> 2 sentences) → toasts are too small; use a notification drawer

**Anatomy**
\`[icon box?] [title / message] [description?] [CTA button?] [dismiss ×]\`

The \`cta\` flag switches from the compact single-line layout to the expanded layout with a heading row, body text, and action button.

**Colors / types**
| Type | Use for |
|------|---------|
| \`success\` | Positive confirmation (saved, uploaded, sent) |
| \`danger\` | Destructive action or error (deleted, failed, denied) |
| \`default\` | Neutral status update with blue icon |
| \`simple\` | Minimal send-confirmation (paper-airplane style) |
| \`push\` | Incoming message / social notification |
| \`interactive\` | Prompt requiring an immediate decision (update, confirm) |
        `}}},argTypes:{title:{control:"text",description:"Primary message. For `push` and `interactive` types this is the sender name or notification headline.",table:{category:"Content",defaultValue:{summary:"File saved successfully."}}},description:{control:"text",description:"Secondary body text shown when `cta` is true, or as the message body in `push`/`interactive` types.",table:{category:"Content",defaultValue:{summary:""}}},ctaLabel:{control:"text",description:"Action button label. Shown only when `cta` is true (or always for `interactive` type).",table:{category:"Content",defaultValue:{summary:"Take action"}}},type:{control:"select",options:["success","danger","default","simple","push","interactive"],description:"Visual theme and layout. Determines color, icon, border, and structure.",table:{category:"Appearance",defaultValue:{summary:"success"}}},cta:{control:"boolean",description:"Expands `success` and `danger` toasts to show a title row, body text, and action button. Has no effect on `default`, `simple`, `push`, or `interactive` types.",table:{category:"State",defaultValue:{summary:!1}}}},args:{type:"success",cta:!1,title:"File saved successfully.",description:"Your changes have been saved and are now visible to all collaborators.",ctaLabel:"View file"}},l={name:"Interactive (Controls)",render:t=>`<div style="padding:40px;display:inline-flex;">${U(t)}</div>`,parameters:{docs:{description:{story:"Use **Controls** to switch type, toggle `cta`, and edit message content. `cta` only affects `success` and `danger` types."},source:{transform:(t,e)=>{const{type:s,cta:a,title:n,description:i,ctaLabel:S}=e.args,L=a?' data-cta="true"':"",k=a||["push","interactive"].includes(s)?`
  <p class="toast-message">${i}</p>`:"",P=a||s==="interactive"?`
  <button class="btn btn-primary btn-xs">${S}</button>`:"";return`<div class="toast toast--${s}"${L} role="status" aria-live="polite">
  <p class="toast-title">${n}</p>${k}${P}
  <button class="toast-close" aria-label="Dismiss notification">×</button>
</div>`}}}}},r={name:"All types",args:{},parameters:{controls:{disable:!0},docs:{description:{story:"All six toast types in their compact (no-CTA) form. No scoped controls — each type has its own fixed layout.\n\n**✅ Do** — match the toast type to the semantic meaning of the event (success for confirmations, danger for errors).\n**❌ Don't** — use `success` for neutral status messages — use `default` instead.\n**❌ Don't** — stack more than 3 toasts simultaneously — the stack becomes unreadable."},source:{code:`<!-- Success -->
<div class="toast toast--success" role="status" aria-live="polite">
  <div class="toast-icon toast-icon-success"><!-- check icon --></div>
  <p class="toast-title">File saved successfully.</p>
  <button class="toast-close" aria-label="Dismiss">×</button>
</div>

<!-- Danger -->
<div class="toast toast--danger" role="alert" aria-live="assertive">
  <div class="toast-icon toast-icon-danger"><!-- bell icon --></div>
  <p class="toast-title">The file was permanently deleted.</p>
  <button class="toast-close" aria-label="Dismiss">×</button>
</div>

<!-- Default -->
<div class="toast toast--default" role="status" aria-live="polite"> … </div>

<!-- Simple -->
<div class="toast toast--simple" role="status" aria-live="polite"> … </div>

<!-- Push notification -->
<div class="toast toast--push" role="status" aria-live="polite"> … </div>

<!-- Interactive -->
<div class="toast toast--interactive" role="status" aria-live="polite"> … </div>`,language:"html"}}},render:()=>`
<div style="display:flex;flex-direction:column;gap:16px;padding:32px;background:var(--color-bg-default);">
  ${[{label:"Success",html:u({cta:!1,title:"Report exported to CSV."})},{label:"Danger",html:p({cta:!1,title:"The file flowbite-figma-pro.fig was permanently deleted."})},{label:"Default",html:D({title:"Set yourself free."})},{label:"Simple",html:$({title:"Message sent successfully."})},{label:"Push",html:C({title:"Bonnie Green",description:"Hi Neil, thanks for sharing your thoughts."})},{label:"Interactive",html:T({title:"Software update available",description:"Version 3.1 is ready to install. Restart to apply.",ctaLabel:"Update now"})}].map(({label:e,html:s})=>`
    <div>
      <div style="font:var(--font-medium) 11px/1 inherit;color:var(--color-text-secondary);text-transform:uppercase;letter-spacing:.08em;margin-bottom:8px;">${e}</div>
      ${s}
    </div>`).join("")}
</div>`},c={name:"With CTA button",args:{type:"success"},parameters:{controls:{include:["type"]},docs:{description:{story:`Expanded toast with title row, description, and an action button. Switch **type** to compare \`success\` vs \`danger\` CTA variants.

**✅ Do** — use CTA toasts for reversible destructive actions ("Undo delete") or high-value follow-up actions.
**✅ Do** — keep the CTA label short (≤ 2 words) — it must fit inside the toast without wrapping.
**❌ Don't** — use the CTA variant for routine confirmations; the compact form is less intrusive.`},source:{code:`<!-- Success with CTA -->
<div class="toast toast--success toast--expanded" role="status" aria-live="polite">
  <div class="toast-title-row">
    <!-- check-circle icon -->
    <strong class="toast-title">Success</strong>
    <button class="toast-close" aria-label="Dismiss">×</button>
  </div>
  <p class="toast-message">Your changes have been saved and are now visible to all collaborators.</p>
  <button class="btn btn-green btn-xs">View file</button>
</div>

<!-- Danger with CTA -->
<div class="toast toast--danger toast--expanded" role="alert" aria-live="assertive">
  <div class="toast-title-row">
    <!-- x-circle icon -->
    <strong class="toast-title">Attention</strong>
    <button class="toast-close" aria-label="Dismiss">×</button>
  </div>
  <p class="toast-message">Oh snap! Something went wrong. Your changes could not be saved.</p>
  <button class="btn btn-red btn-xs">Undo action</button>
</div>`,language:"html"}}},render:({type:t})=>{const e=u({cta:!0,title:"Success",description:"Your changes have been saved and are now visible to all collaborators. Be sure to review the live version.",ctaLabel:"View file"}),s=p({cta:!0,title:"Attention",description:"Oh snap! Something went wrong and your changes could not be saved. Please try again or contact support.",ctaLabel:"Undo action"});return`<div style="padding:40px;display:inline-flex;">${t==="danger"?s:e}</div>`}};var v,b,m;l.parameters={...l.parameters,docs:{...(v=l.parameters)==null?void 0:v.docs,source:{originalSource:`{
  name: 'Interactive (Controls)',
  render: args => \`<div style="padding:40px;display:inline-flex;">\${toast(args)}</div>\`,
  parameters: {
    docs: {
      description: {
        story: 'Use **Controls** to switch type, toggle \`cta\`, and edit message content. \`cta\` only affects \`success\` and \`danger\` types.'
      },
      source: {
        transform: (_src, ctx) => {
          const {
            type,
            cta,
            title,
            description,
            ctaLabel
          } = ctx.args;
          const ctaAttr = cta ? \` data-cta="true"\` : '';
          const descLine = cta || ['push', 'interactive'].includes(type) ? \`\\n  <p class="toast-message">\${description}</p>\` : '';
          const btnLine = cta || type === 'interactive' ? \`\\n  <button class="btn btn-primary btn-xs">\${ctaLabel}</button>\` : '';
          return \`<div class="toast toast--\${type}"\${ctaAttr} role="status" aria-live="polite">
  <p class="toast-title">\${title}</p>\${descLine}\${btnLine}
  <button class="toast-close" aria-label="Dismiss notification">×</button>
</div>\`;
        }
      }
    }
  }
}`,...(m=(b=l.parameters)==null?void 0:b.docs)==null?void 0:m.source}}};var g,f,h;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`{
  name: 'All types',
  args: {},
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      description: {
        story: \`All six toast types in their compact (no-CTA) form. No scoped controls — each type has its own fixed layout.

**✅ Do** — match the toast type to the semantic meaning of the event (success for confirmations, danger for errors).
**❌ Don't** — use \\\`success\\\` for neutral status messages — use \\\`default\\\` instead.
**❌ Don't** — stack more than 3 toasts simultaneously — the stack becomes unreadable.\`
      },
      source: {
        code: \`<!-- Success -->
<div class="toast toast--success" role="status" aria-live="polite">
  <div class="toast-icon toast-icon-success"><!-- check icon --></div>
  <p class="toast-title">File saved successfully.</p>
  <button class="toast-close" aria-label="Dismiss">×</button>
</div>

<!-- Danger -->
<div class="toast toast--danger" role="alert" aria-live="assertive">
  <div class="toast-icon toast-icon-danger"><!-- bell icon --></div>
  <p class="toast-title">The file was permanently deleted.</p>
  <button class="toast-close" aria-label="Dismiss">×</button>
</div>

<!-- Default -->
<div class="toast toast--default" role="status" aria-live="polite"> … </div>

<!-- Simple -->
<div class="toast toast--simple" role="status" aria-live="polite"> … </div>

<!-- Push notification -->
<div class="toast toast--push" role="status" aria-live="polite"> … </div>

<!-- Interactive -->
<div class="toast toast--interactive" role="status" aria-live="polite"> … </div>\`,
        language: 'html'
      }
    }
  },
  render: () => {
    const items = [{
      label: 'Success',
      html: toastSuccess({
        cta: false,
        title: 'Report exported to CSV.'
      })
    }, {
      label: 'Danger',
      html: toastDanger({
        cta: false,
        title: 'The file flowbite-figma-pro.fig was permanently deleted.'
      })
    }, {
      label: 'Default',
      html: toastDefault({
        title: 'Set yourself free.'
      })
    }, {
      label: 'Simple',
      html: toastSimple({
        title: 'Message sent successfully.'
      })
    }, {
      label: 'Push',
      html: toastPush({
        title: 'Bonnie Green',
        description: 'Hi Neil, thanks for sharing your thoughts.'
      })
    }, {
      label: 'Interactive',
      html: toastInteractive({
        title: 'Software update available',
        description: 'Version 3.1 is ready to install. Restart to apply.',
        ctaLabel: 'Update now'
      })
    }];
    return \`
<div style="display:flex;flex-direction:column;gap:16px;padding:32px;background:var(--color-bg-default);">
  \${items.map(({
      label,
      html
    }) => \`
    <div>
      <div style="font:var(--font-medium) 11px/1 inherit;color:var(--color-text-secondary);text-transform:uppercase;letter-spacing:.08em;margin-bottom:8px;">\${label}</div>
      \${html}
    </div>\`).join('')}
</div>\`;
  }
}`,...(h=(f=r.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};var y,x,w;c.parameters={...c.parameters,docs:{...(y=c.parameters)==null?void 0:y.docs,source:{originalSource:`{
  name: 'With CTA button',
  args: {
    type: 'success'
  },
  parameters: {
    controls: {
      include: ['type']
    },
    docs: {
      description: {
        story: \`Expanded toast with title row, description, and an action button. Switch **type** to compare \\\`success\\\` vs \\\`danger\\\` CTA variants.

**✅ Do** — use CTA toasts for reversible destructive actions ("Undo delete") or high-value follow-up actions.
**✅ Do** — keep the CTA label short (≤ 2 words) — it must fit inside the toast without wrapping.
**❌ Don't** — use the CTA variant for routine confirmations; the compact form is less intrusive.\`
      },
      source: {
        code: \`<!-- Success with CTA -->
<div class="toast toast--success toast--expanded" role="status" aria-live="polite">
  <div class="toast-title-row">
    <!-- check-circle icon -->
    <strong class="toast-title">Success</strong>
    <button class="toast-close" aria-label="Dismiss">×</button>
  </div>
  <p class="toast-message">Your changes have been saved and are now visible to all collaborators.</p>
  <button class="btn btn-green btn-xs">View file</button>
</div>

<!-- Danger with CTA -->
<div class="toast toast--danger toast--expanded" role="alert" aria-live="assertive">
  <div class="toast-title-row">
    <!-- x-circle icon -->
    <strong class="toast-title">Attention</strong>
    <button class="toast-close" aria-label="Dismiss">×</button>
  </div>
  <p class="toast-message">Oh snap! Something went wrong. Your changes could not be saved.</p>
  <button class="btn btn-red btn-xs">Undo action</button>
</div>\`,
        language: 'html'
      }
    }
  },
  render: ({
    type
  }) => {
    const successCTA = toastSuccess({
      cta: true,
      title: 'Success',
      description: 'Your changes have been saved and are now visible to all collaborators. Be sure to review the live version.',
      ctaLabel: 'View file'
    });
    const dangerCTA = toastDanger({
      cta: true,
      title: 'Attention',
      description: 'Oh snap! Something went wrong and your changes could not be saved. Please try again or contact support.',
      ctaLabel: 'Undo action'
    });
    const which = type === 'danger' ? dangerCTA : successCTA;
    return \`<div style="padding:40px;display:inline-flex;">\${which}</div>\`;
  }
}`,...(w=(x=c.parameters)==null?void 0:x.docs)==null?void 0:w.source}}};const M=["Interactive","AllTypes","WithCTA"];export{r as AllTypes,l as Interactive,c as WithCTA,M as __namedExportsOrder,B as default};
