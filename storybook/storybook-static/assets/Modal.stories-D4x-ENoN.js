const f=`<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M13.5 4.5L4.5 13.5M4.5 4.5L13.5 13.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
</svg>`,H=`<svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
  <circle cx="21" cy="21" r="21" fill="#FEF3C7"/>
  <path d="M21 11v12" stroke="#D97706" stroke-width="2" stroke-linecap="round"/>
  <circle cx="21" cy="28.5" r="1.5" fill="#D97706"/>
</svg>`,_=`<svg width="16" height="16" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M2 4h16v12H2V4zm0 0l8 7 8-7" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,J=`<svg width="16" height="16" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect x="3" y="9" width="14" height="10" rx="2" stroke="currentColor" stroke-width="1.5"/>
  <path d="M7 9V6a3 3 0 016 0v3" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
</svg>`,K=`<svg width="14" height="14" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
  <circle cx="10" cy="10" r="9" stroke="currentColor" stroke-width="1.5"/>
  <path d="M10 13v1M10 7a2 2 0 012 2c0 1.1-.9 1.7-1.5 2.2-.5.4-.5.6-.5.8" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
</svg>`;function g(o){return o?{bg:"#374151",title:"#ffffff",body:"#9ca3af",border:"#4b5563",closeClr:"#9ca3af",walletRow:"#4b5563",badgeBg:"#374151",badgeClr:"#9ca3af"}:{bg:"var(--color-bg-surface)",title:"var(--color-text-primary)",body:"var(--color-text-secondary)",border:"var(--color-border-default)",closeClr:"var(--color-text-secondary)",walletRow:"var(--color-bg-default)",badgeBg:"var(--color-bg-muted)",badgeClr:"var(--color-text-secondary)"}}function v(o){return o==="sm"?" modal-dialog-sm":o==="lg"?" modal-dialog-lg":o==="xl"?" modal-dialog-xl":""}function y(o,a=!0){return a?`<div style="position:relative;width:100%;min-height:420px;
    background:rgba(17,25,40,0.82);display:flex;align-items:center;
    justify-content:center;padding:40px;box-sizing:border-box;">
    ${o}
  </div>`:o}function n({size:o="default",darkMode:a=!1,showOverlay:t=!0}={}){const e=g(a),l=`
<div role="dialog" aria-modal="true" aria-labelledby="modal-title"
     class="modal-dialog${v(o)}"
     style="background:${e.bg};">
  <div class="modal-header" style="border-color:${e.border};">
    <h2 class="modal-title" id="modal-title" style="color:${e.title};">Terms of Service</h2>
    <button class="modal-close" aria-label="Close dialog" style="color:${e.closeClr};">${f}</button>
  </div>
  <div class="modal-body" style="color:${e.body};font-size:var(--text-base);line-height:1.7;">
    <p style="margin:0 0 12px;">The European Union's General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant to ensure a common set of data rights in the European Union. It requires organizations to notify users as soon as possible of high-risk data breaches that could personally affect them.</p>
    <p style="margin:0;">With less than a month to go before the European Union enacts new consumer privacy laws for its citizens, companies around the world are updating their terms of service agreements to comply.</p>
  </div>
  <div class="modal-footer" style="border-color:${e.border};">
    <button class="btn btn-primary btn-md">I accept</button>
  </div>
</div>`;return y(l,t)}function h({size:o="sm",darkMode:a=!1,showOverlay:t=!0}={}){const e=g(a),l=`
<div role="dialog" aria-modal="true" aria-labelledby="popup-title"
     class="modal-dialog${v(o)}"
     style="background:${e.bg};">
  <div class="modal-header" style="border-bottom:none;justify-content:flex-end;padding-bottom:8px;">
    <button class="modal-close" aria-label="Close dialog" style="color:${e.closeClr};">${f}</button>
  </div>
  <div class="modal-body" style="text-align:center;padding-top:0;color:${e.body};">
    <div style="display:flex;justify-content:center;margin-bottom:16px;">${H}</div>
    <p id="popup-title" style="margin:0;font-size:var(--text-base);line-height:1.6;color:${e.body};">Are you sure you want to delete this product?</p>
  </div>
  <div class="modal-footer" style="border-color:${e.border};justify-content:center;gap:12px;">
    <button class="btn btn-red btn-md">Yes, I'm sure</button>
    <button class="btn btn-alternative btn-md">No, cancel</button>
  </div>
</div>`;return y(l,t)}function x({size:o="sm",darkMode:a=!1,showOverlay:t=!0}={}){const e=g(a),l=`
<div role="dialog" aria-modal="true" aria-labelledby="form-modal-title"
     class="modal-dialog${v(o)}"
     style="background:${e.bg};">
  <div class="modal-header" style="border-bottom:none;justify-content:flex-end;padding-bottom:8px;">
    <button class="modal-close" aria-label="Close dialog" style="color:${e.closeClr};">${f}</button>
  </div>
  <div class="modal-body" style="padding-top:4px;">
    <h3 id="form-modal-title" style="font-size:var(--text-xl);font-weight:var(--font-semibold);
         color:${e.title};margin:0 0 20px;line-height:1.4;">Sign in to our platform</h3>

    <div class="form-group">
      <label class="form-label" style="color:${e.body};">Your email</label>
      <div style="position:relative;">
        <span style="position:absolute;left:12px;top:50%;transform:translateY(-50%);color:${e.body};">${_}</span>
        <input class="form-input" type="email" placeholder="name@flowbite.com"
               style="padding-left:36px;background:${a?"#4b5563":"var(--color-bg-default)"};
                      color:${e.body};border-color:${e.border};">
      </div>
      <span class="form-helper" style="color:${e.body};">We'll never share your details. See our Privacy Policy.</span>
    </div>

    <div class="form-group">
      <label class="form-label" style="color:${e.title};">Password</label>
      <div style="position:relative;">
        <span style="position:absolute;left:12px;top:50%;transform:translateY(-50%);color:${e.body};">${J}</span>
        <input class="form-input" type="password" placeholder="••••••••••"
               style="padding-left:36px;background:${a?"#4b5563":"var(--color-bg-default)"};
                      color:${e.body};border-color:${e.border};">
      </div>
    </div>

    <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:16px;">
      <label style="display:flex;align-items:center;gap:8px;font-size:var(--text-sm);color:${e.title};cursor:pointer;">
        <span class="iris-checkbox" role="checkbox" aria-checked="false"></span>
        Remember me
      </label>
      <a href="#" style="font-size:var(--text-sm);color:#155dfc;text-decoration:none;">Lost Password?</a>
    </div>

    <button class="btn btn-primary btn-md" style="width:100%;justify-content:center;margin-bottom:12px;">
      Create account
    </button>
    <p style="text-align:center;font-size:var(--text-sm);margin:0;">
      <a href="#" style="color:#155dfc;font-weight:var(--font-medium);text-decoration:none;">Not registered? Create account</a>
    </p>
  </div>
</div>`;return y(l,t)}function w({size:o="sm",darkMode:a=!1,showOverlay:t=!0}={}){const e=g(a),X=[{name:"MetaMask",badge:"Popular",icon:"🦊"},{name:"Coinbase Wallet",badge:"",icon:"🔵"},{name:"Opera Wallet",badge:"",icon:"🔴"},{name:"WalletConnect",badge:"",icon:"🔷"},{name:"Fortmatic",badge:"",icon:"🟣"}].map(s=>`
    <div style="display:flex;align-items:center;justify-content:space-between;
                padding:12px 16px;background:${e.walletRow};border-radius:var(--radius-md);">
      <div style="display:flex;align-items:center;gap:12px;">
        <span style="font-size:22px;line-height:1;">${s.icon}</span>
        <span style="font-size:var(--text-base);font-weight:var(--font-bold);color:${e.title};">${s.name}</span>
      </div>
      ${s.badge?`<span style="font-size:var(--text-xs);font-weight:var(--font-medium);
        background:${e.badgeBg};color:${e.badgeClr};
        padding:2px 8px;border-radius:var(--radius-full);">${s.badge}</span>`:""}
    </div>`).join(""),q=`
<div role="dialog" aria-modal="true" aria-labelledby="wallet-title"
     class="modal-dialog${v(o)}"
     style="background:${e.bg};">
  <div class="modal-header" style="border-color:${e.border};">
    <h2 class="modal-title" id="wallet-title" style="color:${e.title};">Connect wallet</h2>
    <button class="modal-close" aria-label="Close dialog" style="color:${e.closeClr};">${f}</button>
  </div>
  <div class="modal-body">
    <p style="margin:0 0 16px;font-size:var(--text-sm);color:${e.body};line-height:1.6;">
      Connect with one of our available wallet providers or create a new one.
    </p>
    <div style="display:flex;flex-direction:column;gap:8px;margin-bottom:16px;">${X}</div>
    <div style="display:flex;align-items:center;gap:6px;color:${e.body};font-size:var(--text-xs);">
      <span style="flex-shrink:0;color:${e.body};">${K}</span>
      Why do I need to connect with my wallet?
    </div>
  </div>
  <div class="modal-footer" style="border-color:${e.border};">
    <button class="btn btn-primary btn-md">I accept</button>
  </div>
</div>`;return y(q,t)}const Q={title:"Iris Library/Modal",tags:["autodocs","stable"],parameters:{layout:"fullscreen",docs:{description:{component:`
**Modal Dialog** — a layer above the page that requires user interaction before continuing.

Figma source: \`3284:23643\` (Modal component set).

CSS classes: \`.modal-dialog\` → \`.modal-header\` + \`.modal-title\` + \`.modal-close\` + \`.modal-body\` + \`.modal-footer\`

**When to use**
- Displaying legal or consent content (Terms of Service, Privacy Policy) before proceeding
- Confirming a destructive action (delete, remove) — use the Pop-up type
- Collecting authentication data inline — use the With forms type
- Selecting a third-party integration provider — use the Crypto wallet type

**When NOT to use**
- Simple success/error feedback → use an Alert or Toast instead
- Complex multi-step flows → use a dedicated page or side panel
- Non-blocking information → use an inline Banner

**Anatomy**
\`[.modal-header: .modal-title + .modal-close] / [.modal-body] / [.modal-footer]\`

Pop-up and With forms types have no \`.modal-title\` in the header — only the close button.

**Sizes** (via modifier class on \`.modal-dialog\`)
| Class | Max-width | Figma |
|---|---|---|
| *(default)* | 512px | Size=Default |
| \`.modal-dialog-sm\` | 320px | Size=SM |
| \`.modal-dialog-lg\` | 720px | Size=LG |
| \`.modal-dialog-xl\` | 1024px | Size=XL |

**Accessibility**
- \`role="dialog"\`, \`aria-modal="true"\`, \`aria-labelledby\` on every dialog
- Close button: \`aria-label="Close dialog"\`
- Keyboard: Escape closes; Tab cycles within the dialog (trap focus in JS)
        `.trim()}}},argTypes:{type:{control:"select",options:["info","popup","forms","wallet"],description:"Modal type matching Figma variants: `info` (Terms of Service), `popup` (delete confirm), `forms` (sign-in), `wallet` (crypto wallet).",table:{category:"Appearance",defaultValue:{summary:"info"}}},size:{control:"select",options:["sm","default","lg","xl"],description:"`sm`=320px · `default`=512px · `lg`=720px · `xl`=1024px. Applied via `.modal-dialog-{size}` modifier class.",table:{category:"Appearance",defaultValue:{summary:"default"}}},darkMode:{control:"boolean",description:"Dark mode variant — Figma `Dark mode=True`. Applies dark background and inverted text tokens.",table:{category:"Appearance",defaultValue:{summary:!1}}},showOverlay:{control:"boolean",description:"Show the dark overlay background behind the dialog. Disable for isolated component preview.",table:{category:"State",defaultValue:{summary:!0}}}},args:{type:"info",size:"default",darkMode:!1,showOverlay:!0}},i={name:"Interactive (Controls)",render:({type:o,size:a,darkMode:t,showOverlay:e})=>o==="popup"?h({size:a,darkMode:t,showOverlay:e}):o==="forms"?x({size:a,darkMode:t,showOverlay:e}):o==="wallet"?w({size:a,darkMode:t,showOverlay:e}):n({size:a,darkMode:t,showOverlay:e}),parameters:{docs:{description:{story:"Use **Controls** to switch between all 4 modal types, all 4 sizes, and light/dark mode."},source:{transform:(o,a)=>{const{type:t,size:e}=a.args,l=e==="sm"?" modal-dialog-sm":e==="lg"?" modal-dialog-lg":e==="xl"?" modal-dialog-xl":"";return t==="popup"?`<!-- Pop-up: no title in header, icon + question in body -->
<div class="modal-backdrop">
  <div role="dialog" aria-modal="true" aria-labelledby="popup-title" class="modal-dialog${l}">
    <div class="modal-header" style="border-bottom:none;justify-content:flex-end;">
      <button class="modal-close" aria-label="Close dialog"><!-- × SVG --></button>
    </div>
    <div class="modal-body" style="text-align:center;">
      <!-- exclamation-circle icon 42×42 -->
      <p id="popup-title">Are you sure you want to delete this product?</p>
    </div>
    <div class="modal-footer" style="justify-content:center;">
      <button class="btn btn-red btn-md">Yes, I'm sure</button>
      <button class="btn btn-alternative btn-md">No, cancel</button>
    </div>
  </div>
</div>`:t==="forms"?`<!-- With forms: no title in header, form in body -->
<div class="modal-backdrop">
  <div role="dialog" aria-modal="true" aria-labelledby="form-modal-title" class="modal-dialog${l}">
    <div class="modal-header" style="border-bottom:none;justify-content:flex-end;">
      <button class="modal-close" aria-label="Close dialog"><!-- × SVG --></button>
    </div>
    <div class="modal-body">
      <h3 id="form-modal-title">Sign in to our platform</h3>
      <div class="form-group">
        <label class="form-label">Your email</label>
        <input class="form-input" type="email" placeholder="name@flowbite.com">
        <span class="form-helper">We'll never share your details.</span>
      </div>
      <div class="form-group">
        <label class="form-label">Password</label>
        <input class="form-input" type="password" placeholder="••••••••••">
      </div>
      <button class="btn btn-primary btn-md" style="width:100%;">Create account</button>
    </div>
  </div>
</div>`:t==="wallet"?`<!-- Crypto wallet: title header + wallet list body -->
<div class="modal-backdrop">
  <div role="dialog" aria-modal="true" aria-labelledby="wallet-title" class="modal-dialog${l}">
    <div class="modal-header">
      <h2 class="modal-title" id="wallet-title">Connect wallet</h2>
      <button class="modal-close" aria-label="Close dialog"><!-- × SVG --></button>
    </div>
    <div class="modal-body">
      <p>Connect with one of our available wallet providers or create a new one.</p>
      <!-- wallet list items -->
    </div>
    <div class="modal-footer">
      <button class="btn btn-primary btn-md">I accept</button>
    </div>
  </div>
</div>`:`<!-- Info: title header + scrollable body paragraphs + single button footer -->
<div class="modal-backdrop">
  <div role="dialog" aria-modal="true" aria-labelledby="modal-title" class="modal-dialog${l}">
    <div class="modal-header">
      <h2 class="modal-title" id="modal-title">Terms of Service</h2>
      <button class="modal-close" aria-label="Close dialog"><!-- × SVG --></button>
    </div>
    <div class="modal-body">
      <p>The European Union's General Data Protection Regulation (G.D.P.R.) goes into effect on May 25...</p>
      <p>With less than a month to go before the European Union enacts new consumer privacy laws...</p>
    </div>
    <div class="modal-footer">
      <button class="btn btn-primary btn-md">I accept</button>
    </div>
  </div>
</div>`}}}}},r={name:"Info — Terms of Service",parameters:{controls:{disable:!0},docs:{description:{story:'\nInformational modal — Figma: `Type=Info`. Presents legal or consent content before a user can proceed.\n\n**✅ Do** — use a single primary action button ("I accept", "Got it") — never put Cancel here.\n**✅ Do** — make the body scrollable when content is long — `max-height: 90vh` is set on `.modal-dialog`.\n**❌ Don\'t** — use this type for destructive confirmations — use **Pop-up** instead.\n**❌ Don\'t** — omit `aria-labelledby` pointing to `.modal-title`.\n        '.trim()},source:{language:"html",code:`<div role="dialog" aria-modal="true" aria-labelledby="modal-title" class="modal-dialog">
  <div class="modal-header">
    <h2 class="modal-title" id="modal-title">Terms of Service</h2>
    <button class="modal-close" aria-label="Close dialog"><!-- × --></button>
  </div>
  <div class="modal-body">
    <p>The European Union's General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant to ensure a common set of data rights in the European Union.</p>
    <p>With less than a month to go before the European Union enacts new consumer privacy laws for its citizens, companies around the world are updating their terms of service agreements to comply.</p>
  </div>
  <div class="modal-footer">
    <button class="btn btn-primary btn-md">I accept</button>
  </div>
</div>`}}},render:()=>n({size:"default",darkMode:!1})},d={name:"Pop-up — delete confirmation",parameters:{controls:{disable:!0},docs:{description:{story:`
Destructive confirmation modal — Figma: \`Type=Pop-up\`. No title in header; body centers a warning icon + question; footer has two actions.

**✅ Do** — use \`.btn-red\` for the destructive action; \`.btn-alternative\` for dismiss.
**✅ Do** — use the warning icon (exclamation-circle) to signal danger.
**❌ Don't** — add a title to the header in this type — the Figma spec omits it intentionally.
**❌ Don't** — label the confirm button just "Yes" — use the specific action verb ("Yes, I'm sure", "Delete it").
        `.trim()},source:{language:"html",code:`<div role="dialog" aria-modal="true" aria-labelledby="popup-title" class="modal-dialog modal-dialog-sm">
  <!-- Header: close button only, no title, no border -->
  <div class="modal-header" style="border-bottom:none;justify-content:flex-end;">
    <button class="modal-close" aria-label="Close dialog"><!-- × --></button>
  </div>
  <div class="modal-body" style="text-align:center;">
    <!-- exclamation-circle icon 42×42 -->
    <p id="popup-title">Are you sure you want to delete this product?</p>
  </div>
  <div class="modal-footer" style="justify-content:center;">
    <button class="btn btn-red btn-md">Yes, I'm sure</button>
    <button class="btn btn-alternative btn-md">No, cancel</button>
  </div>
</div>`}}},render:()=>h({size:"sm",darkMode:!1})},c={name:"With forms — sign in",parameters:{controls:{disable:!0},docs:{description:{story:'\nForm modal — Figma: `Type=With forms`. No title in header; form fields and heading inside the body.\n\nUses `.form-group` + `.form-label` + `.form-input` + `.form-helper` from `styles.css`.\n\n**✅ Do** — include `aria-labelledby` pointing to the inline heading inside `.modal-body`.\n**✅ Do** — set `type="email"` and `type="password"` for native browser validation.\n**❌ Don\'t** — add a `.modal-footer` — the submit button lives inside `.modal-body` for this type.\n        '.trim()},source:{language:"html",code:`<div role="dialog" aria-modal="true" aria-labelledby="form-modal-title" class="modal-dialog modal-dialog-sm">
  <!-- Header: close button only, no title, no border -->
  <div class="modal-header" style="border-bottom:none;justify-content:flex-end;">
    <button class="modal-close" aria-label="Close dialog"><!-- × --></button>
  </div>
  <div class="modal-body">
    <h3 id="form-modal-title">Sign in to our platform</h3>

    <div class="form-group">
      <label class="form-label">Your email</label>
      <input class="form-input" type="email" placeholder="name@flowbite.com">
      <span class="form-helper">We'll never share your details. See our Privacy Policy.</span>
    </div>

    <div class="form-group">
      <label class="form-label">Password</label>
      <input class="form-input" type="password" placeholder="••••••••••">
    </div>

    <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:16px;">
      <label style="display:flex;align-items:center;gap:8px;">
        <input type="checkbox"> Remember me
      </label>
      <a href="#" style="color:#155dfc;">Lost Password?</a>
    </div>

    <button class="btn btn-primary btn-md" style="width:100%;justify-content:center;">Create account</button>
    <p style="text-align:center;margin-top:12px;">
      <a href="#" style="color:#155dfc;">Not registered? Create account</a>
    </p>
  </div>
</div>`}}},render:()=>x({size:"sm",darkMode:!1})},m={name:"Crypto wallet — connect wallet",parameters:{controls:{disable:!0},docs:{description:{story:`
Wallet selection modal — Figma: \`Type=Crypto wallet\`. Title in header; wallet list with optional badge; single "I accept" footer.

**✅ Do** — use background \`var(--color-bg-default)\` for wallet list rows.
**✅ Do** — show the "Popular" badge on the most common wallet provider.
**❌ Don't** — use this pattern for non-wallet provider selection — use a standard list or radio group.
        `.trim()},source:{language:"html",code:`<div role="dialog" aria-modal="true" aria-labelledby="wallet-title" class="modal-dialog modal-dialog-sm">
  <div class="modal-header">
    <h2 class="modal-title" id="wallet-title">Connect wallet</h2>
    <button class="modal-close" aria-label="Close dialog"><!-- × --></button>
  </div>
  <div class="modal-body">
    <p>Connect with one of our available wallet providers or create a new one.</p>

    <!-- Wallet list -->
    <div style="display:flex;flex-direction:column;gap:8px;margin:16px 0;">
      <!-- Item with badge -->
      <div style="display:flex;align-items:center;justify-content:space-between;
                  padding:12px 16px;background:var(--color-bg-default);border-radius:var(--radius-md);">
        <!-- wallet icon + name -->
        <span style="font-size:var(--text-base);font-weight:var(--font-bold);">MetaMask</span>
        <span style="font-size:var(--text-xs);background:var(--color-bg-muted);padding:2px 8px;
                     border-radius:var(--radius-full);">Popular</span>
      </div>
      <!-- More items... -->
    </div>
  </div>
  <div class="modal-footer">
    <button class="btn btn-primary btn-md">I accept</button>
  </div>
</div>`}}},render:()=>w({size:"sm",darkMode:!1})},p={name:"Dark mode — all types",parameters:{controls:{disable:!0},docs:{description:{story:"\nAll 4 modal types in dark mode — Figma: `Dark mode=True`.\n\nDark mode tokens: `bg:#374151`, `title:#ffffff`, `body:#9ca3af`, `separator:#4b5563`.\n\n**✅ Do** — apply dark tokens consistently to header, body, and footer.\n**❌ Don't** — mix light and dark tokens within the same modal instance.\n        ".trim()},source:{language:"html",code:`<!-- Dark mode: inline style overrides for bg, text, and border colors -->
<div class="modal-dialog" style="background:#374151;">
  <div class="modal-header" style="border-color:#4b5563;">
    <h2 class="modal-title" style="color:#ffffff;">Terms of Service</h2>
    <button class="modal-close" style="color:#9ca3af;"><!-- × --></button>
  </div>
  <div class="modal-body" style="color:#9ca3af;">...</div>
  <div class="modal-footer" style="border-color:#4b5563;">
    <button class="btn btn-primary btn-md">I accept</button>
  </div>
</div>`}}},render:()=>`
    <div style="display:flex;flex-wrap:wrap;gap:24px;padding:32px;
                background:rgba(17,25,40,0.9);justify-content:center;">
      <div>
        <div style="font-family:ui-monospace,monospace;font-size:10px;color:#9ca3af;
                    text-transform:uppercase;letter-spacing:.08em;margin-bottom:8px;">Info</div>
        ${n({size:"sm",darkMode:!0,showOverlay:!1})}
      </div>
      <div>
        <div style="font-family:ui-monospace,monospace;font-size:10px;color:#9ca3af;
                    text-transform:uppercase;letter-spacing:.08em;margin-bottom:8px;">Pop-up</div>
        ${h({size:"sm",darkMode:!0,showOverlay:!1})}
      </div>
      <div>
        <div style="font-family:ui-monospace,monospace;font-size:10px;color:#9ca3af;
                    text-transform:uppercase;letter-spacing:.08em;margin-bottom:8px;">With forms</div>
        ${x({size:"sm",darkMode:!0,showOverlay:!1})}
      </div>
      <div>
        <div style="font-family:ui-monospace,monospace;font-size:10px;color:#9ca3af;
                    text-transform:uppercase;letter-spacing:.08em;margin-bottom:8px;">Crypto wallet</div>
        ${w({size:"sm",darkMode:!0,showOverlay:!1})}
      </div>
    </div>
  `},u={name:"Sizes — SM / Default / LG / XL",parameters:{controls:{disable:!0},docs:{description:{story:`
All four size variants — Figma: \`Size=SM/Default/LG/XL\`. All use the Info type.

| Size | Class | Max-width |
|---|---|---|
| SM | \`.modal-dialog-sm\` | 320px |
| Default | *(none)* | 512px |
| LG | \`.modal-dialog-lg\` | 720px |
| XL | \`.modal-dialog-xl\` | 1024px |
        `.trim()},source:{language:"html",code:`<div class="modal-dialog modal-dialog-sm">...</div>    <!-- 320px -->
<div class="modal-dialog">...</div>               <!-- 512px (default) -->
<div class="modal-dialog modal-dialog-lg">...</div>  <!-- 720px -->
<div class="modal-dialog modal-dialog-xl">...</div>  <!-- 1024px -->`}}},render:()=>`
    <div style="display:flex;flex-direction:column;gap:24px;padding:32px;background:#374151;">
      ${[["SM · 320px",n({size:"sm",darkMode:!1,showOverlay:!1})],["Default · 512px",n({size:"default",darkMode:!1,showOverlay:!1})],["LG · 720px",n({size:"lg",darkMode:!1,showOverlay:!1})],["XL · 1024px",n({size:"xl",darkMode:!1,showOverlay:!1})]].map(([o,a])=>`
        <div>
          <div style="font-family:ui-monospace,monospace;font-size:10px;color:#9ca3af;
                      text-transform:uppercase;letter-spacing:.08em;margin-bottom:8px;">${o}</div>
          ${a}
        </div>`).join("")}
    </div>
  `},b={name:"All types — light mode",parameters:{controls:{disable:!0},docs:{description:{story:"All 4 modal types side-by-side in light mode: Info, Pop-up, With forms, Crypto wallet."},source:{language:"html",code:`<!-- Info: .modal-dialog (default) + title + body paragraphs + single button -->
<!-- Pop-up: .modal-dialog-sm + no title + icon + two buttons -->
<!-- With forms: .modal-dialog-sm + no title + form fields + submit in body -->
<!-- Crypto wallet: .modal-dialog-sm + title + wallet list + single button -->`}}},render:()=>`
    <div style="display:flex;flex-wrap:wrap;gap:24px;padding:32px;
                background:rgba(17,25,40,0.82);justify-content:center;">
      <div>
        <div style="font-family:ui-monospace,monospace;font-size:10px;color:#9ca3af;
                    text-transform:uppercase;letter-spacing:.08em;margin-bottom:8px;">Info</div>
        ${n({size:"sm",darkMode:!1,showOverlay:!1})}
      </div>
      <div>
        <div style="font-family:ui-monospace,monospace;font-size:10px;color:#9ca3af;
                    text-transform:uppercase;letter-spacing:.08em;margin-bottom:8px;">Pop-up</div>
        ${h({size:"sm",darkMode:!1,showOverlay:!1})}
      </div>
      <div>
        <div style="font-family:ui-monospace,monospace;font-size:10px;color:#9ca3af;
                    text-transform:uppercase;letter-spacing:.08em;margin-bottom:8px;">With forms</div>
        ${x({size:"sm",darkMode:!1,showOverlay:!1})}
      </div>
      <div>
        <div style="font-family:ui-monospace,monospace;font-size:10px;color:#9ca3af;
                    text-transform:uppercase;letter-spacing:.08em;margin-bottom:8px;">Crypto wallet</div>
        ${w({size:"sm",darkMode:!1,showOverlay:!1})}
      </div>
    </div>
  `};var k,C,z;i.parameters={...i.parameters,docs:{...(k=i.parameters)==null?void 0:k.docs,source:{originalSource:`{
  name: 'Interactive (Controls)',
  render: ({
    type,
    size,
    darkMode,
    showOverlay
  }) => {
    if (type === 'popup') return modalPopUp({
      size,
      darkMode,
      showOverlay
    });
    if (type === 'forms') return modalWithForms({
      size,
      darkMode,
      showOverlay
    });
    if (type === 'wallet') return modalCryptoWallet({
      size,
      darkMode,
      showOverlay
    });
    return modalInfo({
      size,
      darkMode,
      showOverlay
    });
  },
  parameters: {
    docs: {
      description: {
        story: 'Use **Controls** to switch between all 4 modal types, all 4 sizes, and light/dark mode.'
      },
      source: {
        transform: (_src, ctx) => {
          const {
            type,
            size
          } = ctx.args;
          const sc = size === 'sm' ? ' modal-dialog-sm' : size === 'lg' ? ' modal-dialog-lg' : size === 'xl' ? ' modal-dialog-xl' : '';
          if (type === 'popup') return \`<!-- Pop-up: no title in header, icon + question in body -->
<div class="modal-backdrop">
  <div role="dialog" aria-modal="true" aria-labelledby="popup-title" class="modal-dialog\${sc}">
    <div class="modal-header" style="border-bottom:none;justify-content:flex-end;">
      <button class="modal-close" aria-label="Close dialog"><!-- × SVG --></button>
    </div>
    <div class="modal-body" style="text-align:center;">
      <!-- exclamation-circle icon 42×42 -->
      <p id="popup-title">Are you sure you want to delete this product?</p>
    </div>
    <div class="modal-footer" style="justify-content:center;">
      <button class="btn btn-red btn-md">Yes, I'm sure</button>
      <button class="btn btn-alternative btn-md">No, cancel</button>
    </div>
  </div>
</div>\`;
          if (type === 'forms') return \`<!-- With forms: no title in header, form in body -->
<div class="modal-backdrop">
  <div role="dialog" aria-modal="true" aria-labelledby="form-modal-title" class="modal-dialog\${sc}">
    <div class="modal-header" style="border-bottom:none;justify-content:flex-end;">
      <button class="modal-close" aria-label="Close dialog"><!-- × SVG --></button>
    </div>
    <div class="modal-body">
      <h3 id="form-modal-title">Sign in to our platform</h3>
      <div class="form-group">
        <label class="form-label">Your email</label>
        <input class="form-input" type="email" placeholder="name@flowbite.com">
        <span class="form-helper">We'll never share your details.</span>
      </div>
      <div class="form-group">
        <label class="form-label">Password</label>
        <input class="form-input" type="password" placeholder="••••••••••">
      </div>
      <button class="btn btn-primary btn-md" style="width:100%;">Create account</button>
    </div>
  </div>
</div>\`;
          if (type === 'wallet') return \`<!-- Crypto wallet: title header + wallet list body -->
<div class="modal-backdrop">
  <div role="dialog" aria-modal="true" aria-labelledby="wallet-title" class="modal-dialog\${sc}">
    <div class="modal-header">
      <h2 class="modal-title" id="wallet-title">Connect wallet</h2>
      <button class="modal-close" aria-label="Close dialog"><!-- × SVG --></button>
    </div>
    <div class="modal-body">
      <p>Connect with one of our available wallet providers or create a new one.</p>
      <!-- wallet list items -->
    </div>
    <div class="modal-footer">
      <button class="btn btn-primary btn-md">I accept</button>
    </div>
  </div>
</div>\`;
          return \`<!-- Info: title header + scrollable body paragraphs + single button footer -->
<div class="modal-backdrop">
  <div role="dialog" aria-modal="true" aria-labelledby="modal-title" class="modal-dialog\${sc}">
    <div class="modal-header">
      <h2 class="modal-title" id="modal-title">Terms of Service</h2>
      <button class="modal-close" aria-label="Close dialog"><!-- × SVG --></button>
    </div>
    <div class="modal-body">
      <p>The European Union's General Data Protection Regulation (G.D.P.R.) goes into effect on May 25...</p>
      <p>With less than a month to go before the European Union enacts new consumer privacy laws...</p>
    </div>
    <div class="modal-footer">
      <button class="btn btn-primary btn-md">I accept</button>
    </div>
  </div>
</div>\`;
        }
      }
    }
  }
}`,...(z=(C=i.parameters)==null?void 0:C.docs)==null?void 0:z.source}}};var $,D,M;r.parameters={...r.parameters,docs:{...($=r.parameters)==null?void 0:$.docs,source:{originalSource:`{
  name: 'Info — Terms of Service',
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      description: {
        story: \`
Informational modal — Figma: \\\`Type=Info\\\`. Presents legal or consent content before a user can proceed.

**✅ Do** — use a single primary action button ("I accept", "Got it") — never put Cancel here.
**✅ Do** — make the body scrollable when content is long — \\\`max-height: 90vh\\\` is set on \\\`.modal-dialog\\\`.
**❌ Don't** — use this type for destructive confirmations — use **Pop-up** instead.
**❌ Don't** — omit \\\`aria-labelledby\\\` pointing to \\\`.modal-title\\\`.
        \`.trim()
      },
      source: {
        language: 'html',
        code: \`<div role="dialog" aria-modal="true" aria-labelledby="modal-title" class="modal-dialog">
  <div class="modal-header">
    <h2 class="modal-title" id="modal-title">Terms of Service</h2>
    <button class="modal-close" aria-label="Close dialog"><!-- × --></button>
  </div>
  <div class="modal-body">
    <p>The European Union's General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant to ensure a common set of data rights in the European Union.</p>
    <p>With less than a month to go before the European Union enacts new consumer privacy laws for its citizens, companies around the world are updating their terms of service agreements to comply.</p>
  </div>
  <div class="modal-footer">
    <button class="btn btn-primary btn-md">I accept</button>
  </div>
</div>\`
      }
    }
  },
  render: () => modalInfo({
    size: 'default',
    darkMode: false
  })
}`,...(M=(D=r.parameters)==null?void 0:D.docs)==null?void 0:M.source}}};var I,S,P;d.parameters={...d.parameters,docs:{...(I=d.parameters)==null?void 0:I.docs,source:{originalSource:`{
  name: 'Pop-up — delete confirmation',
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      description: {
        story: \`
Destructive confirmation modal — Figma: \\\`Type=Pop-up\\\`. No title in header; body centers a warning icon + question; footer has two actions.

**✅ Do** — use \\\`.btn-red\\\` for the destructive action; \\\`.btn-alternative\\\` for dismiss.
**✅ Do** — use the warning icon (exclamation-circle) to signal danger.
**❌ Don't** — add a title to the header in this type — the Figma spec omits it intentionally.
**❌ Don't** — label the confirm button just "Yes" — use the specific action verb ("Yes, I'm sure", "Delete it").
        \`.trim()
      },
      source: {
        language: 'html',
        code: \`<div role="dialog" aria-modal="true" aria-labelledby="popup-title" class="modal-dialog modal-dialog-sm">
  <!-- Header: close button only, no title, no border -->
  <div class="modal-header" style="border-bottom:none;justify-content:flex-end;">
    <button class="modal-close" aria-label="Close dialog"><!-- × --></button>
  </div>
  <div class="modal-body" style="text-align:center;">
    <!-- exclamation-circle icon 42×42 -->
    <p id="popup-title">Are you sure you want to delete this product?</p>
  </div>
  <div class="modal-footer" style="justify-content:center;">
    <button class="btn btn-red btn-md">Yes, I'm sure</button>
    <button class="btn btn-alternative btn-md">No, cancel</button>
  </div>
</div>\`
      }
    }
  },
  render: () => modalPopUp({
    size: 'sm',
    darkMode: false
  })
}`,...(P=(S=d.parameters)==null?void 0:S.docs)==null?void 0:P.source}}};var W,j,T;c.parameters={...c.parameters,docs:{...(W=c.parameters)==null?void 0:W.docs,source:{originalSource:`{
  name: 'With forms — sign in',
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      description: {
        story: \`
Form modal — Figma: \\\`Type=With forms\\\`. No title in header; form fields and heading inside the body.

Uses \\\`.form-group\\\` + \\\`.form-label\\\` + \\\`.form-input\\\` + \\\`.form-helper\\\` from \\\`styles.css\\\`.

**✅ Do** — include \\\`aria-labelledby\\\` pointing to the inline heading inside \\\`.modal-body\\\`.
**✅ Do** — set \\\`type="email"\\\` and \\\`type="password"\\\` for native browser validation.
**❌ Don't** — add a \\\`.modal-footer\\\` — the submit button lives inside \\\`.modal-body\\\` for this type.
        \`.trim()
      },
      source: {
        language: 'html',
        code: \`<div role="dialog" aria-modal="true" aria-labelledby="form-modal-title" class="modal-dialog modal-dialog-sm">
  <!-- Header: close button only, no title, no border -->
  <div class="modal-header" style="border-bottom:none;justify-content:flex-end;">
    <button class="modal-close" aria-label="Close dialog"><!-- × --></button>
  </div>
  <div class="modal-body">
    <h3 id="form-modal-title">Sign in to our platform</h3>

    <div class="form-group">
      <label class="form-label">Your email</label>
      <input class="form-input" type="email" placeholder="name@flowbite.com">
      <span class="form-helper">We'll never share your details. See our Privacy Policy.</span>
    </div>

    <div class="form-group">
      <label class="form-label">Password</label>
      <input class="form-input" type="password" placeholder="••••••••••">
    </div>

    <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:16px;">
      <label style="display:flex;align-items:center;gap:8px;">
        <input type="checkbox"> Remember me
      </label>
      <a href="#" style="color:#155dfc;">Lost Password?</a>
    </div>

    <button class="btn btn-primary btn-md" style="width:100%;justify-content:center;">Create account</button>
    <p style="text-align:center;margin-top:12px;">
      <a href="#" style="color:#155dfc;">Not registered? Create account</a>
    </p>
  </div>
</div>\`
      }
    }
  },
  render: () => modalWithForms({
    size: 'sm',
    darkMode: false
  })
}`,...(T=(j=c.parameters)==null?void 0:j.docs)==null?void 0:T.source}}};var O,F,G;m.parameters={...m.parameters,docs:{...(O=m.parameters)==null?void 0:O.docs,source:{originalSource:`{
  name: 'Crypto wallet — connect wallet',
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      description: {
        story: \`
Wallet selection modal — Figma: \\\`Type=Crypto wallet\\\`. Title in header; wallet list with optional badge; single "I accept" footer.

**✅ Do** — use background \\\`var(--color-bg-default)\\\` for wallet list rows.
**✅ Do** — show the "Popular" badge on the most common wallet provider.
**❌ Don't** — use this pattern for non-wallet provider selection — use a standard list or radio group.
        \`.trim()
      },
      source: {
        language: 'html',
        code: \`<div role="dialog" aria-modal="true" aria-labelledby="wallet-title" class="modal-dialog modal-dialog-sm">
  <div class="modal-header">
    <h2 class="modal-title" id="wallet-title">Connect wallet</h2>
    <button class="modal-close" aria-label="Close dialog"><!-- × --></button>
  </div>
  <div class="modal-body">
    <p>Connect with one of our available wallet providers or create a new one.</p>

    <!-- Wallet list -->
    <div style="display:flex;flex-direction:column;gap:8px;margin:16px 0;">
      <!-- Item with badge -->
      <div style="display:flex;align-items:center;justify-content:space-between;
                  padding:12px 16px;background:var(--color-bg-default);border-radius:var(--radius-md);">
        <!-- wallet icon + name -->
        <span style="font-size:var(--text-base);font-weight:var(--font-bold);">MetaMask</span>
        <span style="font-size:var(--text-xs);background:var(--color-bg-muted);padding:2px 8px;
                     border-radius:var(--radius-full);">Popular</span>
      </div>
      <!-- More items... -->
    </div>
  </div>
  <div class="modal-footer">
    <button class="btn btn-primary btn-md">I accept</button>
  </div>
</div>\`
      }
    }
  },
  render: () => modalCryptoWallet({
    size: 'sm',
    darkMode: false
  })
}`,...(G=(F=m.parameters)==null?void 0:F.docs)==null?void 0:G.source}}};var A,L,U;p.parameters={...p.parameters,docs:{...(A=p.parameters)==null?void 0:A.docs,source:{originalSource:`{
  name: 'Dark mode — all types',
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      description: {
        story: \`
All 4 modal types in dark mode — Figma: \\\`Dark mode=True\\\`.

Dark mode tokens: \\\`bg:#374151\\\`, \\\`title:#ffffff\\\`, \\\`body:#9ca3af\\\`, \\\`separator:#4b5563\\\`.

**✅ Do** — apply dark tokens consistently to header, body, and footer.
**❌ Don't** — mix light and dark tokens within the same modal instance.
        \`.trim()
      },
      source: {
        language: 'html',
        code: \`<!-- Dark mode: inline style overrides for bg, text, and border colors -->
<div class="modal-dialog" style="background:#374151;">
  <div class="modal-header" style="border-color:#4b5563;">
    <h2 class="modal-title" style="color:#ffffff;">Terms of Service</h2>
    <button class="modal-close" style="color:#9ca3af;"><!-- × --></button>
  </div>
  <div class="modal-body" style="color:#9ca3af;">...</div>
  <div class="modal-footer" style="border-color:#4b5563;">
    <button class="btn btn-primary btn-md">I accept</button>
  </div>
</div>\`
      }
    }
  },
  render: () => \`
    <div style="display:flex;flex-wrap:wrap;gap:24px;padding:32px;
                background:rgba(17,25,40,0.9);justify-content:center;">
      <div>
        <div style="font-family:ui-monospace,monospace;font-size:10px;color:#9ca3af;
                    text-transform:uppercase;letter-spacing:.08em;margin-bottom:8px;">Info</div>
        \${modalInfo({
    size: 'sm',
    darkMode: true,
    showOverlay: false
  })}
      </div>
      <div>
        <div style="font-family:ui-monospace,monospace;font-size:10px;color:#9ca3af;
                    text-transform:uppercase;letter-spacing:.08em;margin-bottom:8px;">Pop-up</div>
        \${modalPopUp({
    size: 'sm',
    darkMode: true,
    showOverlay: false
  })}
      </div>
      <div>
        <div style="font-family:ui-monospace,monospace;font-size:10px;color:#9ca3af;
                    text-transform:uppercase;letter-spacing:.08em;margin-bottom:8px;">With forms</div>
        \${modalWithForms({
    size: 'sm',
    darkMode: true,
    showOverlay: false
  })}
      </div>
      <div>
        <div style="font-family:ui-monospace,monospace;font-size:10px;color:#9ca3af;
                    text-transform:uppercase;letter-spacing:.08em;margin-bottom:8px;">Crypto wallet</div>
        \${modalCryptoWallet({
    size: 'sm',
    darkMode: true,
    showOverlay: false
  })}
      </div>
    </div>
  \`
}`,...(U=(L=p.parameters)==null?void 0:L.docs)==null?void 0:U.source}}};var R,E,Y;u.parameters={...u.parameters,docs:{...(R=u.parameters)==null?void 0:R.docs,source:{originalSource:`{
  name: 'Sizes — SM / Default / LG / XL',
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      description: {
        story: \`
All four size variants — Figma: \\\`Size=SM/Default/LG/XL\\\`. All use the Info type.

| Size | Class | Max-width |
|---|---|---|
| SM | \\\`.modal-dialog-sm\\\` | 320px |
| Default | *(none)* | 512px |
| LG | \\\`.modal-dialog-lg\\\` | 720px |
| XL | \\\`.modal-dialog-xl\\\` | 1024px |
        \`.trim()
      },
      source: {
        language: 'html',
        code: \`<div class="modal-dialog modal-dialog-sm">...</div>    <!-- 320px -->
<div class="modal-dialog">...</div>               <!-- 512px (default) -->
<div class="modal-dialog modal-dialog-lg">...</div>  <!-- 720px -->
<div class="modal-dialog modal-dialog-xl">...</div>  <!-- 1024px -->\`
      }
    }
  },
  render: () => \`
    <div style="display:flex;flex-direction:column;gap:24px;padding:32px;background:#374151;">
      \${[['SM · 320px', modalInfo({
    size: 'sm',
    darkMode: false,
    showOverlay: false
  })], ['Default · 512px', modalInfo({
    size: 'default',
    darkMode: false,
    showOverlay: false
  })], ['LG · 720px', modalInfo({
    size: 'lg',
    darkMode: false,
    showOverlay: false
  })], ['XL · 1024px', modalInfo({
    size: 'xl',
    darkMode: false,
    showOverlay: false
  })]].map(([label, html]) => \`
        <div>
          <div style="font-family:ui-monospace,monospace;font-size:10px;color:#9ca3af;
                      text-transform:uppercase;letter-spacing:.08em;margin-bottom:8px;">\${label}</div>
          \${html}
        </div>\`).join('')}
    </div>
  \`
}`,...(Y=(E=u.parameters)==null?void 0:E.docs)==null?void 0:Y.source}}};var N,V,B;b.parameters={...b.parameters,docs:{...(N=b.parameters)==null?void 0:N.docs,source:{originalSource:`{
  name: 'All types — light mode',
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      description: {
        story: 'All 4 modal types side-by-side in light mode: Info, Pop-up, With forms, Crypto wallet.'
      },
      source: {
        language: 'html',
        code: \`<!-- Info: .modal-dialog (default) + title + body paragraphs + single button -->
<!-- Pop-up: .modal-dialog-sm + no title + icon + two buttons -->
<!-- With forms: .modal-dialog-sm + no title + form fields + submit in body -->
<!-- Crypto wallet: .modal-dialog-sm + title + wallet list + single button -->\`
      }
    }
  },
  render: () => \`
    <div style="display:flex;flex-wrap:wrap;gap:24px;padding:32px;
                background:rgba(17,25,40,0.82);justify-content:center;">
      <div>
        <div style="font-family:ui-monospace,monospace;font-size:10px;color:#9ca3af;
                    text-transform:uppercase;letter-spacing:.08em;margin-bottom:8px;">Info</div>
        \${modalInfo({
    size: 'sm',
    darkMode: false,
    showOverlay: false
  })}
      </div>
      <div>
        <div style="font-family:ui-monospace,monospace;font-size:10px;color:#9ca3af;
                    text-transform:uppercase;letter-spacing:.08em;margin-bottom:8px;">Pop-up</div>
        \${modalPopUp({
    size: 'sm',
    darkMode: false,
    showOverlay: false
  })}
      </div>
      <div>
        <div style="font-family:ui-monospace,monospace;font-size:10px;color:#9ca3af;
                    text-transform:uppercase;letter-spacing:.08em;margin-bottom:8px;">With forms</div>
        \${modalWithForms({
    size: 'sm',
    darkMode: false,
    showOverlay: false
  })}
      </div>
      <div>
        <div style="font-family:ui-monospace,monospace;font-size:10px;color:#9ca3af;
                    text-transform:uppercase;letter-spacing:.08em;margin-bottom:8px;">Crypto wallet</div>
        \${modalCryptoWallet({
    size: 'sm',
    darkMode: false,
    showOverlay: false
  })}
      </div>
    </div>
  \`
}`,...(B=(V=b.parameters)==null?void 0:V.docs)==null?void 0:B.source}}};const Z=["Interactive","Info","PopUp","WithForms","CryptoWallet","DarkMode","Sizes","AllTypes"];export{b as AllTypes,m as CryptoWallet,p as DarkMode,r as Info,i as Interactive,d as PopUp,u as Sizes,c as WithForms,Z as __namedExportsOrder,Q as default};
