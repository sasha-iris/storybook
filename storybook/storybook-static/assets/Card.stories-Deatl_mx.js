const W={title:"Iris Library/Card/Basics",tags:["autodocs","stable"],parameters:{layout:"padded",backgrounds:{default:"light"},docs:{description:{component:'The `.card` class is the shared structural shell for every card variant in Iris Library.\nIt provides the border, background, border-radius, and `overflow:hidden` clip.\n\n**Card/Basics** covers the general-purpose content card: text, optional flush image, header with controls, embedded lists, and forms. For numeric metrics see **Card/KPI**; for sparklines see **Card/Metric**; for chart visualisations see **Card/Chart**.\n\n### Slots\n\n| Slot | Class | When to use |\n|---|---|---|\n| Title row | `.card-header` | Whenever the card has a named section |\n| Sub-label | `.card-header-sub` | Supporting context beneath the title |\n| Right controls | `.card-header-controls` | Period selectors, action menus, badges |\n| Body (padded) | `.card-body-padded` | No flush image or chart above; adds 16px top padding |\n| Body (flush) | `.card-body` | Follows a flush image, list, or chart; no top padding |\n| Footer | `.card-footer` | Legend, timestamp, "View all" link, pagination |\n\n### Developer notes\n\n- `overflow:hidden` on `.card` clips **all children** to the 16 px border-radius.\n  Do **not** apply `border-radius` to `<img>` elements inside a card.\n- Use `.card-body` (not `.card-body-padded`) when content follows a flush image —\n  the image provides the visual separation, not padding.\n- For full-width embedded components (list groups, tables), set\n  `border-left:none; border-right:none` on the inner component to remove doubled borders.\n- Card width is set by the **parent container**, not the card itself.\n  Recommended: `max-width:380px` for standalone; `1fr` grid for grids.'}}},argTypes:{title:{control:"text",description:"Card heading. Keep under ~60 characters to avoid multi-line wrapping at 380px width.",table:{category:"Content",defaultValue:{summary:"Introducing the Iris Design System"}}},body:{control:"text",description:"Body copy. Typically 1–3 sentences. Colour: `--color-text-body-subtle` (#6B7280).",table:{category:"Content",defaultValue:{summary:"A shared component library for building consistent product interfaces."}}},showImage:{control:"boolean",description:"Show a flush top image placeholder. Uses `.card-body` (no top padding) when true.",table:{category:"Layout",defaultValue:{summary:!1}}},showFooter:{control:"boolean",description:'Show the "Read more" CTA button (`btn-primary btn-sm`).',table:{category:"Layout",defaultValue:{summary:!0}}},compareText:{table:{disable:!0}}},args:{title:"Introducing the Iris Design System",body:"A shared component library for building consistent product interfaces — buttons, forms, cards, data display, and navigation.",showFooter:!0,showImage:!1,compareText:""}},t={name:"Interactive (Controls)",parameters:{docs:{description:{story:"Use the **Controls** panel to configure any combination — title, body, image slot, footer CTA. The source snippet updates to reflect the current state."},source:{transform:(c,l)=>{const e=l.args,s=e.showImage?`
  <img src="https://picsum.photos/seed/card/380/180" alt="Card image"
       style="width:100%;height:180px;object-fit:cover;display:block;">`:"",d=e.showImage?"card-body":"card-body-padded",G=e.showFooter?`
    <button class="btn btn-primary btn-sm">Read more</button>`:"";return`<div class="card" style="max-width:380px;">${s}
  <div class="${d}">
    <h5 style="font-size:var(--text-lg);font-weight:var(--font-semibold);
               color:var(--color-text-heading);line-height:1.3;margin-bottom:8px;">
      ${e.title}
    </h5>
    <p style="font-size:var(--text-sm);color:var(--color-text-body-subtle);
              line-height:1.6;margin-bottom:${e.showFooter?"16px":"0"};">
      ${e.body}
    </p>${G}
  </div>
</div>`}}}},render:({title:c,body:l,showImage:e,showFooter:s,compareText:d})=>`
    <div class="card" style="max-width:380px;">
      ${e?`
        <div style="height:180px;background:var(--color-bg-tertiary);display:flex;
                    align-items:center;justify-content:center;
                    color:var(--color-text-fg-disabled);font-size:var(--text-sm);">
          Image — 180px · object-fit:cover
        </div>`:""}
      <div class="card-body-padded">
        <h5 style="font-size:var(--text-lg);font-weight:var(--font-semibold);
                   color:var(--color-text-heading);line-height:1.3;margin-bottom:8px;">
          ${c}</h5>
        <p style="font-size:var(--text-sm);color:var(--color-text-body-subtle);
                  line-height:1.6;margin-bottom:${s?"16px":"0"};">
          ${l}</p>
        ${s?'<button class="btn btn-primary btn-sm">Read more</button>':""}
      </div>
      ${d?`
      <div class="card-footer">
        <span style="font-size:var(--text-xs);color:var(--color-text-body-subtle);">${d}</span>
      </div>`:""}
    </div>`},o={args:{showImage:!0,showFooter:!0},parameters:{docs:{description:{story:"Card with a flush image at the top. The `.card` `overflow:hidden` clips the image to the card border-radius automatically — do not add `border-radius` to the `<img>` itself."},source:{language:"html",code:`<!-- Card with flush top image -->
<div class="card">
  <!-- Real usage: replace div with <img src="…" alt="…" style="width:100%;height:180px;object-fit:cover;display:block;"> -->
  <div style="height:180px; background:var(--color-bg-tertiary);"></div>
  <div class="card-body-padded">
    <h5>Card title</h5>
    <p>Body copy goes here.</p>
    <button class="btn btn-primary btn-sm">Read more</button>
  </div>
</div>`}}},render:t.render},r={parameters:{backgrounds:{default:"white"},docs:{description:{story:"Demonstrates the `.card-header` + `.card-footer` shell. This header pattern is shared across all card sub-families (KPI, Metric, Chart)."},source:{language:"html",code:`<!-- Card with header + footer -->
<div class="card">
  <div class="card-header">
    <div>
      <div class="card-header-title">Recent activity</div>
      <div class="card-header-sub">Last 7 days</div>
    </div>
    <div class="card-header-controls">
      <button class="btn btn-alternative btn-xs">View all</button>
      <button class="btn btn-light btn-xs">⋯</button>
    </div>
  </div>
  <div class="card-body">
    <!-- content -->
  </div>
  <div class="card-footer">
    <span>Updated just now</span>
    <a href="#" class="card-footer-link">See details →</a>
  </div>
</div>`}}},render:()=>`
    <div class="card" style="max-width:420px;">
      <div class="card-header">
        <div>
          <div class="card-header-title">Recent activity</div>
          <div class="card-header-sub">Last 7 days</div>
        </div>
        <div class="card-header-controls">
          <button class="btn btn-alternative btn-xs">View all</button>
          <button class="btn btn-light btn-xs" style="padding:6px 8px;">⋯</button>
        </div>
      </div>
      <div class="card-body">
        <p style="font-size:var(--text-sm);color:var(--color-text-body-subtle);
                  line-height:1.6;padding:0 20px 16px;">
          Card body content. Use <code>.card-body</code> (no top padding) when
          content follows a header, or <code>.card-body-padded</code> when there is no header.</p>
      </div>
      <div class="card-footer">
        <span style="font-size:var(--text-xs);color:var(--color-text-body-subtle);">
          Updated just now</span>
        <a href="#" style="font-size:var(--text-xs);color:var(--color-text-fg-brand);
                           font-weight:var(--font-medium);">See details →</a>
      </div>
    </div>`},n={name:"Card with button",parameters:{docs:{description:{story:`General-purpose content card with a prominent CTA button and an arrow-right icon.
Button colour is brand/800 (\`#42389d\`).

\`\`\`html
<div style="background:var(--color-bg-surface);border:1px solid var(--color-border-default);border-radius:8px;padding:24px;max-width:384px;">
  <h5>Noteworthy technology…</h5>
  <p>Here are the biggest enterprise…</p>
  <button style="background:#42389d;…">Read more →</button>
</div>
\`\`\``},source:{language:"html",code:`<div style="background:var(--color-bg-surface);border:1px solid var(--color-border-default);border-radius:8px;
     box-shadow:0 4px 6px -1px rgba(0,0,0,.1),0 2px 4px -2px rgba(0,0,0,.05);
     padding:24px;max-width:384px;">
  <h5 style="font-size:var(--text-2xl);font-weight:var(--font-bold);color:#111928;line-height:1.3;margin:0 0 12px;">
    Noteworthy technology acquisitions 2021
  </h5>
  <p style="font-size:var(--text-base);color:var(--color-text-secondary);line-height:1.6;margin:0 0 20px;">
    Here are the biggest enterprise technology acquisitions of 2021 so far,
    in reverse chronological order.
  </p>
  <button style="display:inline-flex;align-items:center;gap:8px;
                 background:#42389d;color:#fff;font-size:var(--text-sm);font-weight:var(--font-medium);
                 border:none;border-radius:12px;padding:10px 20px;cursor:pointer;">
    Read more
    <svg width="16" height="16" viewBox="0 0 20 20" fill="none"
         xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M4.167 10h11.666M10.833 5l5 5-5 5"
            stroke="currentColor" stroke-width="1.67"
            stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  </button>
</div>`}}},render:()=>`
    <div style="background:var(--color-bg-surface);border:1px solid var(--color-border-default);border-radius:8px;
                box-shadow:0 4px 6px -1px rgba(0,0,0,.1),0 2px 4px -2px rgba(0,0,0,.05);
                padding:24px;max-width:384px;">
      <h5 style="font-size:var(--text-2xl);font-weight:var(--font-bold);color:#111928;
                 line-height:1.3;margin:0 0 12px;">
        Noteworthy technology acquisitions 2021
      </h5>
      <p style="font-size:var(--text-base);color:var(--color-text-secondary);line-height:1.6;margin:0 0 20px;">
        Here are the biggest enterprise technology acquisitions of 2021 so far,
        in reverse chronological order.
      </p>
      <button style="display:inline-flex;align-items:center;gap:8px;
                     background:#42389d;color:#fff;font-size:var(--text-sm);font-weight:var(--font-medium);
                     border:none;border-radius:12px;padding:10px 20px;cursor:pointer;">
        Read more
        <svg width="16" height="16" viewBox="0 0 20 20" fill="none"
             xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path d="M4.167 10h11.666M10.833 5l5 5-5 5"
                stroke="currentColor" stroke-width="1.67"
                stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </button>
    </div>`},i={name:"Card with link",parameters:{docs:{description:{story:`Content card with a top icon, body copy, and an external-link CTA.
Link colour is blue/600 (\`#155dfc\`). Gift icon is approximated (APPROX) — Figma source is a 2-vector raster.

\`\`\`html
<div style="…padding:24px;max-width:384px;">
  <!-- icon badge -->
  <div style="width:40px;height:40px;background:var(--color-bg-default);border-radius:8px;…">…gift svg…</div>
  <h5>Terms of Service</h5>
  <p>Review our full terms…</p>
  <a href="#" style="color:#155dfc;">See our guideline →</a>
</div>
\`\`\``},source:{language:"html",code:`<div style="background:var(--color-bg-surface);border:1px solid var(--color-border-default);border-radius:8px;
     box-shadow:0 4px 6px -1px rgba(0,0,0,.1),0 2px 4px -2px rgba(0,0,0,.05);
     padding:24px;max-width:384px;">
  <!-- Gift icon (APPROX — Heroicons outline gift) -->
  <div style="display:flex;align-items:center;justify-content:center;
              width:40px;height:40px;background:var(--color-bg-default);border-radius:8px;margin-bottom:16px;">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
         xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M20 12v9H4v-9M22 7H2v5h20V7zM12 22V7M12 7H7.5a2.5 2.5 0 010-5C11 2 12 7 12 7z
               M12 7h4.5a2.5 2.5 0 000-5C13 2 12 7 12 7z"
            stroke="#6b7280" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  </div>
  <h5 style="font-size:var(--text-2xl);font-weight:var(--font-bold);color:#111928;line-height:1.3;margin:0 0 12px;">
    Terms of Service
  </h5>
  <p style="font-size:var(--text-base);color:var(--color-text-secondary);line-height:1.6;margin:0 0 20px;">
    Review our full terms of service — understand your rights and responsibilities
    when using the Iris platform.
  </p>
  <a href="#" style="display:inline-flex;align-items:center;gap:6px;
                     color:#155dfc;font-size:var(--text-sm);font-weight:var(--font-medium);text-decoration:none;">
    See our guideline
    <svg width="14" height="14" viewBox="0 0 20 20" fill="none"
         xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M11 3h6m0 0v6m0-6L8 12M5 5H3a1 1 0 00-1 1v11a1 1 0 001 1h11a1 1 0 001-1v-2"
            stroke="currentColor" stroke-width="1.67"
            stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  </a>
</div>`}}},render:()=>`
    <div style="background:var(--color-bg-surface);border:1px solid var(--color-border-default);border-radius:8px;
                box-shadow:0 4px 6px -1px rgba(0,0,0,.1),0 2px 4px -2px rgba(0,0,0,.05);
                padding:24px;max-width:384px;">
      <!-- Gift icon (APPROX — Heroicons outline gift) -->
      <div style="display:flex;align-items:center;justify-content:center;
                  width:40px;height:40px;background:var(--color-bg-default);border-radius:8px;
                  margin-bottom:16px;">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
             xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path d="M20 12v9H4v-9M22 7H2v5h20V7zM12 22V7M12 7H7.5a2.5 2.5 0 010-5C11 2 12 7 12 7zM12 7h4.5a2.5 2.5 0 000-5C13 2 12 7 12 7z"
                stroke="#6b7280" stroke-width="1.5"
                stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </div>
      <h5 style="font-size:var(--text-2xl);font-weight:var(--font-bold);color:#111928;
                 line-height:1.3;margin:0 0 12px;">
        Terms of Service
      </h5>
      <p style="font-size:var(--text-base);color:var(--color-text-secondary);line-height:1.6;margin:0 0 20px;">
        Review our full terms of service — understand your rights and responsibilities
        when using the Iris platform.
      </p>
      <a href="#" style="display:inline-flex;align-items:center;gap:6px;
                         color:#155dfc;font-size:var(--text-sm);font-weight:var(--font-medium);text-decoration:none;">
        See our guideline
        <svg width="14" height="14" viewBox="0 0 20 20" fill="none"
             xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path d="M11 3h6m0 0v6m0-6L8 12M5 5H3a1 1 0 00-1 1v11a1 1 0 001 1h11a1 1 0 001-1v-2"
                stroke="currentColor" stroke-width="1.67"
                stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </a>
    </div>`},a={name:"Horizontal card",parameters:{docs:{description:{story:`Two-column layout: flush image on the left, text content on the right.
Width: 576 px · Height: 258 px · Image column: 192 px.

\`\`\`html
<div style="display:flex;max-width:576px;height:258px;border-radius:8px;overflow:hidden;…">
  <img src="…" style="width:192px;flex-shrink:0;object-fit:cover;" alt="">
  <div style="padding:20px;">
    <h5>…</h5>
    <p>…</p>
  </div>
</div>
\`\`\``},source:{language:"html",code:`<div style="display:flex;max-width:576px;height:258px;
     background:var(--color-bg-surface);border:1px solid var(--color-border-default);border-radius:8px;
     box-shadow:0 4px 6px -1px rgba(0,0,0,.1),0 2px 4px -2px rgba(0,0,0,.05);
     overflow:hidden;">
  <img src="https://picsum.photos/seed/horizcard/192/258"
       alt="Card image"
       style="width:192px;flex-shrink:0;object-fit:cover;">
  <div style="padding:20px;display:flex;flex-direction:column;justify-content:center;">
    <h5 style="font-size:var(--text-2xl);font-weight:var(--font-bold);color:#111928;line-height:1.3;margin:0 0 12px;">
      Noteworthy technology acquisitions 2021
    </h5>
    <p style="font-size:var(--text-base);color:var(--color-text-secondary);line-height:1.6;margin:0;">
      Here are the biggest enterprise technology acquisitions of 2021 so far,
      in reverse chronological order.
    </p>
  </div>
</div>`}}},render:()=>`
    <div style="display:flex;max-width:576px;height:258px;
                background:var(--color-bg-surface);border:1px solid var(--color-border-default);border-radius:8px;
                box-shadow:0 4px 6px -1px rgba(0,0,0,.1),0 2px 4px -2px rgba(0,0,0,.05);
                overflow:hidden;">
      <img src="https://picsum.photos/seed/horizcard/192/258"
           alt="Card image"
           style="width:192px;flex-shrink:0;object-fit:cover;">
      <div style="padding:20px;display:flex;flex-direction:column;justify-content:center;">
        <h5 style="font-size:var(--text-2xl);font-weight:var(--font-bold);color:#111928;
                   line-height:1.3;margin:0 0 12px;">
          Noteworthy technology acquisitions 2021
        </h5>
        <p style="font-size:var(--text-base);color:var(--color-text-secondary);line-height:1.6;margin:0;">
          Here are the biggest enterprise technology acquisitions of 2021 so far,
          in reverse chronological order.
        </p>
      </div>
    </div>`};var h,p,g,x,u;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:`{
  name: 'Interactive (Controls)',
  parameters: {
    docs: {
      description: {
        story: 'Use the **Controls** panel to configure any combination — title, body, image slot, footer CTA. The source snippet updates to reflect the current state.'
      },
      source: {
        transform: (_src, storyCtx) => {
          const a = storyCtx.args;
          const imgSlot = a.showImage ? \`\\n  <img src="https://picsum.photos/seed/card/380/180" alt="Card image"\\n       style="width:100%;height:180px;object-fit:cover;display:block;">\` : '';
          const bodyClass = a.showImage ? 'card-body' : 'card-body-padded';
          const footerSlot = a.showFooter ? \`\\n    <button class="btn btn-primary btn-sm">Read more</button>\` : '';
          return \`<div class="card" style="max-width:380px;">\${imgSlot}
  <div class="\${bodyClass}">
    <h5 style="font-size:var(--text-lg);font-weight:var(--font-semibold);
               color:var(--color-text-heading);line-height:1.3;margin-bottom:8px;">
      \${a.title}
    </h5>
    <p style="font-size:var(--text-sm);color:var(--color-text-body-subtle);
              line-height:1.6;margin-bottom:\${a.showFooter ? '16px' : '0'};">
      \${a.body}
    </p>\${footerSlot}
  </div>
</div>\`;
        }
      }
    }
  },
  render: ({
    title,
    body,
    showImage,
    showFooter,
    compareText
  }) => \`
    <div class="card" style="max-width:380px;">
      \${showImage ? \`
        <div style="height:180px;background:var(--color-bg-tertiary);display:flex;
                    align-items:center;justify-content:center;
                    color:var(--color-text-fg-disabled);font-size:var(--text-sm);">
          Image — 180px · object-fit:cover
        </div>\` : ''}
      <div class="card-body-padded">
        <h5 style="font-size:var(--text-lg);font-weight:var(--font-semibold);
                   color:var(--color-text-heading);line-height:1.3;margin-bottom:8px;">
          \${title}</h5>
        <p style="font-size:var(--text-sm);color:var(--color-text-body-subtle);
                  line-height:1.6;margin-bottom:\${showFooter ? '16px' : '0'};">
          \${body}</p>
        \${showFooter ? \`<button class="btn btn-primary btn-sm">Read more</button>\` : ''}
      </div>
      \${compareText ? \`
      <div class="card-footer">
        <span style="font-size:var(--text-xs);color:var(--color-text-body-subtle);">\${compareText}</span>
      </div>\` : ''}
    </div>\`
}`,...(g=(p=t.parameters)==null?void 0:p.docs)==null?void 0:g.source},description:{story:`Plain content card. Use the Controls panel to toggle the image slot and footer CTA.

**QA checklist**
- Title wraps gracefully at narrow widths (min ~200px)
- Body text colour is \`--color-text-secondary\` (#6B7280), not primary
- Button is \`btn-primary btn-sm\` — verify hover/focus states
- No numeric metric in body — if a number is the hero, use Card/KPI instead`,...(u=(x=t.parameters)==null?void 0:x.docs)==null?void 0:u.description}}};var b,v,m,f,y;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    showImage: true,
    showFooter: true
  },
  parameters: {
    docs: {
      description: {
        story: 'Card with a flush image at the top. The \`.card\` \`overflow:hidden\` clips the image to the card border-radius automatically — do not add \`border-radius\` to the \`<img>\` itself.'
      },
      source: {
        language: 'html',
        code: \`<!-- Card with flush top image -->
<div class="card">
  <!-- Real usage: replace div with <img src="…" alt="…" style="width:100%;height:180px;object-fit:cover;display:block;"> -->
  <div style="height:180px; background:var(--color-bg-tertiary);"></div>
  <div class="card-body-padded">
    <h5>Card title</h5>
    <p>Body copy goes here.</p>
    <button class="btn btn-primary btn-sm">Read more</button>
  </div>
</div>\`
      }
    }
  },
  render: Interactive.render
}`,...(m=(v=o.parameters)==null?void 0:v.docs)==null?void 0:m.source},description:{story:"Image is flush to the top edge — `.card` has `overflow:hidden` which clips the image\nto the 16px border-radius. Do **not** add border-radius to the `<img>` itself.\n\n**QA checklist**\n- Image flush with card top-left and top-right corners (no white gap)\n- Card border-radius visible on image corners\n- No padding between image bottom and body top",...(y=(f=o.parameters)==null?void 0:f.docs)==null?void 0:y.description}}};var w,k,C,z,S;r.parameters={...r.parameters,docs:{...(w=r.parameters)==null?void 0:w.docs,source:{originalSource:`{
  parameters: {
    backgrounds: {
      default: 'white'
    },
    docs: {
      description: {
        story: 'Demonstrates the \`.card-header\` + \`.card-footer\` shell. This header pattern is shared across all card sub-families (KPI, Metric, Chart).'
      },
      source: {
        language: 'html',
        code: \`<!-- Card with header + footer -->
<div class="card">
  <div class="card-header">
    <div>
      <div class="card-header-title">Recent activity</div>
      <div class="card-header-sub">Last 7 days</div>
    </div>
    <div class="card-header-controls">
      <button class="btn btn-alternative btn-xs">View all</button>
      <button class="btn btn-light btn-xs">⋯</button>
    </div>
  </div>
  <div class="card-body">
    <!-- content -->
  </div>
  <div class="card-footer">
    <span>Updated just now</span>
    <a href="#" class="card-footer-link">See details →</a>
  </div>
</div>\`
      }
    }
  },
  render: () => \`
    <div class="card" style="max-width:420px;">
      <div class="card-header">
        <div>
          <div class="card-header-title">Recent activity</div>
          <div class="card-header-sub">Last 7 days</div>
        </div>
        <div class="card-header-controls">
          <button class="btn btn-alternative btn-xs">View all</button>
          <button class="btn btn-light btn-xs" style="padding:6px 8px;">⋯</button>
        </div>
      </div>
      <div class="card-body">
        <p style="font-size:var(--text-sm);color:var(--color-text-body-subtle);
                  line-height:1.6;padding:0 20px 16px;">
          Card body content. Use <code>.card-body</code> (no top padding) when
          content follows a header, or <code>.card-body-padded</code> when there is no header.</p>
      </div>
      <div class="card-footer">
        <span style="font-size:var(--text-xs);color:var(--color-text-body-subtle);">
          Updated just now</span>
        <a href="#" style="font-size:var(--text-xs);color:var(--color-text-fg-brand);
                           font-weight:var(--font-medium);">See details →</a>
      </div>
    </div>\`
}`,...(C=(k=r.parameters)==null?void 0:k.docs)==null?void 0:C.source},description:{story:'`.card-header` is the standard title row used across **all** card families.\nRight-side slot (`.card-header-controls`) holds period selectors, action menus, or badges.\n\n**QA checklist**\n- Title and sub-label left-aligned; controls right-aligned; both vertically centred\n- `.card-footer` border-top is `1px solid --color-border-default`\n- "See details" link colour is `--color-text-link`',...(S=(z=r.parameters)==null?void 0:z.docs)==null?void 0:S.description}}};var j,H,I,M,T;n.parameters={...n.parameters,docs:{...(j=n.parameters)==null?void 0:j.docs,source:{originalSource:`{
  name: 'Card with button',
  parameters: {
    docs: {
      description: {
        story: \`General-purpose content card with a prominent CTA button and an arrow-right icon.
Button colour is brand/800 (\\\`#42389d\\\`).

\\\`\\\`\\\`html
<div style="background:var(--color-bg-surface);border:1px solid var(--color-border-default);border-radius:8px;padding:24px;max-width:384px;">
  <h5>Noteworthy technology…</h5>
  <p>Here are the biggest enterprise…</p>
  <button style="background:#42389d;…">Read more →</button>
</div>
\\\`\\\`\\\`\`
      },
      source: {
        language: 'html',
        code: \`<div style="background:var(--color-bg-surface);border:1px solid var(--color-border-default);border-radius:8px;
     box-shadow:0 4px 6px -1px rgba(0,0,0,.1),0 2px 4px -2px rgba(0,0,0,.05);
     padding:24px;max-width:384px;">
  <h5 style="font-size:var(--text-2xl);font-weight:var(--font-bold);color:#111928;line-height:1.3;margin:0 0 12px;">
    Noteworthy technology acquisitions 2021
  </h5>
  <p style="font-size:var(--text-base);color:var(--color-text-secondary);line-height:1.6;margin:0 0 20px;">
    Here are the biggest enterprise technology acquisitions of 2021 so far,
    in reverse chronological order.
  </p>
  <button style="display:inline-flex;align-items:center;gap:8px;
                 background:#42389d;color:#fff;font-size:var(--text-sm);font-weight:var(--font-medium);
                 border:none;border-radius:12px;padding:10px 20px;cursor:pointer;">
    Read more
    <svg width="16" height="16" viewBox="0 0 20 20" fill="none"
         xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M4.167 10h11.666M10.833 5l5 5-5 5"
            stroke="currentColor" stroke-width="1.67"
            stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  </button>
</div>\`
      }
    }
  },
  render: () => \`
    <div style="background:var(--color-bg-surface);border:1px solid var(--color-border-default);border-radius:8px;
                box-shadow:0 4px 6px -1px rgba(0,0,0,.1),0 2px 4px -2px rgba(0,0,0,.05);
                padding:24px;max-width:384px;">
      <h5 style="font-size:var(--text-2xl);font-weight:var(--font-bold);color:#111928;
                 line-height:1.3;margin:0 0 12px;">
        Noteworthy technology acquisitions 2021
      </h5>
      <p style="font-size:var(--text-base);color:var(--color-text-secondary);line-height:1.6;margin:0 0 20px;">
        Here are the biggest enterprise technology acquisitions of 2021 so far,
        in reverse chronological order.
      </p>
      <button style="display:inline-flex;align-items:center;gap:8px;
                     background:#42389d;color:#fff;font-size:var(--text-sm);font-weight:var(--font-medium);
                     border:none;border-radius:12px;padding:10px 20px;cursor:pointer;">
        Read more
        <svg width="16" height="16" viewBox="0 0 20 20" fill="none"
             xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path d="M4.167 10h11.666M10.833 5l5 5-5 5"
                stroke="currentColor" stroke-width="1.67"
                stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </button>
    </div>\`
}`,...(I=(H=n.parameters)==null?void 0:H.docs)==null?void 0:I.source},description:{story:`Content card with a branded CTA button.
Button uses brand/800 (#42389d) with an arrow-right icon.

**QA checklist**
- Button background: #42389d (brand/800 — not the CSS \`.btn-primary\` blue)
- Arrow icon is inline SVG; verify it sits on the same baseline as the button text
- Card width: 384px; padding: 24px
- No header or footer chrome — body-only card`,...(T=(M=n.parameters)==null?void 0:M.docs)==null?void 0:T.description}}};var R,B,$,A,F;i.parameters={...i.parameters,docs:{...(R=i.parameters)==null?void 0:R.docs,source:{originalSource:`{
  name: 'Card with link',
  parameters: {
    docs: {
      description: {
        story: \`Content card with a top icon, body copy, and an external-link CTA.
Link colour is blue/600 (\\\`#155dfc\\\`). Gift icon is approximated (APPROX) — Figma source is a 2-vector raster.

\\\`\\\`\\\`html
<div style="…padding:24px;max-width:384px;">
  <!-- icon badge -->
  <div style="width:40px;height:40px;background:var(--color-bg-default);border-radius:8px;…">…gift svg…</div>
  <h5>Terms of Service</h5>
  <p>Review our full terms…</p>
  <a href="#" style="color:#155dfc;">See our guideline →</a>
</div>
\\\`\\\`\\\`\`
      },
      source: {
        language: 'html',
        code: \`<div style="background:var(--color-bg-surface);border:1px solid var(--color-border-default);border-radius:8px;
     box-shadow:0 4px 6px -1px rgba(0,0,0,.1),0 2px 4px -2px rgba(0,0,0,.05);
     padding:24px;max-width:384px;">
  <!-- Gift icon (APPROX — Heroicons outline gift) -->
  <div style="display:flex;align-items:center;justify-content:center;
              width:40px;height:40px;background:var(--color-bg-default);border-radius:8px;margin-bottom:16px;">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
         xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M20 12v9H4v-9M22 7H2v5h20V7zM12 22V7M12 7H7.5a2.5 2.5 0 010-5C11 2 12 7 12 7z
               M12 7h4.5a2.5 2.5 0 000-5C13 2 12 7 12 7z"
            stroke="#6b7280" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  </div>
  <h5 style="font-size:var(--text-2xl);font-weight:var(--font-bold);color:#111928;line-height:1.3;margin:0 0 12px;">
    Terms of Service
  </h5>
  <p style="font-size:var(--text-base);color:var(--color-text-secondary);line-height:1.6;margin:0 0 20px;">
    Review our full terms of service — understand your rights and responsibilities
    when using the Iris platform.
  </p>
  <a href="#" style="display:inline-flex;align-items:center;gap:6px;
                     color:#155dfc;font-size:var(--text-sm);font-weight:var(--font-medium);text-decoration:none;">
    See our guideline
    <svg width="14" height="14" viewBox="0 0 20 20" fill="none"
         xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M11 3h6m0 0v6m0-6L8 12M5 5H3a1 1 0 00-1 1v11a1 1 0 001 1h11a1 1 0 001-1v-2"
            stroke="currentColor" stroke-width="1.67"
            stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  </a>
</div>\`
      }
    }
  },
  render: () => \`
    <div style="background:var(--color-bg-surface);border:1px solid var(--color-border-default);border-radius:8px;
                box-shadow:0 4px 6px -1px rgba(0,0,0,.1),0 2px 4px -2px rgba(0,0,0,.05);
                padding:24px;max-width:384px;">
      <!-- Gift icon (APPROX — Heroicons outline gift) -->
      <div style="display:flex;align-items:center;justify-content:center;
                  width:40px;height:40px;background:var(--color-bg-default);border-radius:8px;
                  margin-bottom:16px;">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
             xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path d="M20 12v9H4v-9M22 7H2v5h20V7zM12 22V7M12 7H7.5a2.5 2.5 0 010-5C11 2 12 7 12 7zM12 7h4.5a2.5 2.5 0 000-5C13 2 12 7 12 7z"
                stroke="#6b7280" stroke-width="1.5"
                stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </div>
      <h5 style="font-size:var(--text-2xl);font-weight:var(--font-bold);color:#111928;
                 line-height:1.3;margin:0 0 12px;">
        Terms of Service
      </h5>
      <p style="font-size:var(--text-base);color:var(--color-text-secondary);line-height:1.6;margin:0 0 20px;">
        Review our full terms of service — understand your rights and responsibilities
        when using the Iris platform.
      </p>
      <a href="#" style="display:inline-flex;align-items:center;gap:6px;
                         color:#155dfc;font-size:var(--text-sm);font-weight:var(--font-medium);text-decoration:none;">
        See our guideline
        <svg width="14" height="14" viewBox="0 0 20 20" fill="none"
             xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path d="M11 3h6m0 0v6m0-6L8 12M5 5H3a1 1 0 00-1 1v11a1 1 0 001 1h11a1 1 0 001-1v-2"
                stroke="currentColor" stroke-width="1.67"
                stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </a>
    </div>\`
}`,...($=(B=i.parameters)==null?void 0:B.docs)==null?void 0:$.source},description:{story:`Content card with an icon + body text and a "See our guideline" external link.
The gift icon at the top is approximated with an inline Heroicons SVG
(Figma uses a 2-vector raster with no composite asset).

**QA checklist**
- Link colour: #155dfc (blue/600)
- External-link icon is inline SVG; verify it aligns with the link text baseline
- Gift icon container: 40px × 40px, background #f9fafb, border-radius 8px
- Card width: 384px; padding: 24px`,...(F=(A=i.parameters)==null?void 0:A.docs)==null?void 0:F.description}}};var V,L,P,q,N;a.parameters={...a.parameters,docs:{...(V=a.parameters)==null?void 0:V.docs,source:{originalSource:`{
  name: 'Horizontal card',
  parameters: {
    docs: {
      description: {
        story: \`Two-column layout: flush image on the left, text content on the right.
Width: 576 px · Height: 258 px · Image column: 192 px.

\\\`\\\`\\\`html
<div style="display:flex;max-width:576px;height:258px;border-radius:8px;overflow:hidden;…">
  <img src="…" style="width:192px;flex-shrink:0;object-fit:cover;" alt="">
  <div style="padding:20px;">
    <h5>…</h5>
    <p>…</p>
  </div>
</div>
\\\`\\\`\\\`\`
      },
      source: {
        language: 'html',
        code: \`<div style="display:flex;max-width:576px;height:258px;
     background:var(--color-bg-surface);border:1px solid var(--color-border-default);border-radius:8px;
     box-shadow:0 4px 6px -1px rgba(0,0,0,.1),0 2px 4px -2px rgba(0,0,0,.05);
     overflow:hidden;">
  <img src="https://picsum.photos/seed/horizcard/192/258"
       alt="Card image"
       style="width:192px;flex-shrink:0;object-fit:cover;">
  <div style="padding:20px;display:flex;flex-direction:column;justify-content:center;">
    <h5 style="font-size:var(--text-2xl);font-weight:var(--font-bold);color:#111928;line-height:1.3;margin:0 0 12px;">
      Noteworthy technology acquisitions 2021
    </h5>
    <p style="font-size:var(--text-base);color:var(--color-text-secondary);line-height:1.6;margin:0;">
      Here are the biggest enterprise technology acquisitions of 2021 so far,
      in reverse chronological order.
    </p>
  </div>
</div>\`
      }
    }
  },
  render: () => \`
    <div style="display:flex;max-width:576px;height:258px;
                background:var(--color-bg-surface);border:1px solid var(--color-border-default);border-radius:8px;
                box-shadow:0 4px 6px -1px rgba(0,0,0,.1),0 2px 4px -2px rgba(0,0,0,.05);
                overflow:hidden;">
      <img src="https://picsum.photos/seed/horizcard/192/258"
           alt="Card image"
           style="width:192px;flex-shrink:0;object-fit:cover;">
      <div style="padding:20px;display:flex;flex-direction:column;justify-content:center;">
        <h5 style="font-size:var(--text-2xl);font-weight:var(--font-bold);color:#111928;
                   line-height:1.3;margin:0 0 12px;">
          Noteworthy technology acquisitions 2021
        </h5>
        <p style="font-size:var(--text-base);color:var(--color-text-secondary);line-height:1.6;margin:0;">
          Here are the biggest enterprise technology acquisitions of 2021 so far,
          in reverse chronological order.
        </p>
      </div>
    </div>\`
}`,...(P=(L=a.parameters)==null?void 0:L.docs)==null?void 0:P.source},description:{story:`Side-by-side layout: 192 px image on the left, content panel on the right.
Fixed card height: 258 px. Overall width: 576 px.

**QA checklist**
- Image: 192 px wide, full card height, object-fit: cover
- Card border-radius 8 px clips both image corners (left side only needs rounding)
- Content panel: padding 20px
- Title: 24 px bold, color #111928
- Body: 16 px regular, color #6b7280
- No footer or CTA in this variant`,...(N=(q=a.parameters)==null?void 0:q.docs)==null?void 0:N.description}}};const U=["Interactive","WithImage","WithHeaderControls","CardWithButton","WithLink","HorizontalCard"];export{n as CardWithButton,a as HorizontalCard,t as Interactive,r as WithHeaderControls,o as WithImage,i as WithLink,U as __namedExportsOrder,W as default};
