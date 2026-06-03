import{s as V,a as W,i as Q}from"./brand-assets-CFpBGnxd.js";const re={title:"Iris Library/Card/Reporting",tags:["autodocs","stable"],parameters:{layout:"padded",backgrounds:{default:"light"},docs:{description:{component:`
**Card / Reporting** — Figma node \`10046:76406\`.

Scheduled-report card for the Iris Finance reporting dashboard. Shows report configuration: delivery channels (E-mail / Slack), schedule, recipients, connected sales channels (Shopify, Amazon), and owner attribution.

**When to use**
- Displaying a configured scheduled report in a report list or dashboard
- Showing report status (active / paused) with delivery channel detail
- Letting users toggle a report on/off inline

**When NOT to use**
- General content display → use Card/Basics
- Metric data → use Card/KPI or Card/Reporting

**Anatomy**
\`[title + arrow] / [delivery chips] / [schedule] / [recipients] / [channels] / [owner + toggle]\`

**CSS:** \`.card-reporting\` + optional state modifier.

\`\`\`html
<!-- Default (active, Iris-owned) -->
<div class="card-reporting">…</div>

<!-- Hover state -->
<div class="card-reporting card-reporting--hovered">…</div>

<!-- Inactive (paused) -->
<div class="card-reporting card-reporting--inactive">…</div>
\`\`\`

> **Note:** This card is **not** the same as \`.card\`. It has no base border,
> uses \`border-radius: 12px\` (not 16px), and its own toggle + chip sub-components.
        `}}},argTypes:{active:{control:"boolean",description:"Report is enabled — toggle ON. When false, applies `card-reporting--inactive`: gray/50 bg, chips gray, toggle OFF.",table:{category:"State",defaultValue:{summary:!0}}},hovered:{control:"boolean",description:"Simulate hover: brand/500 border (#6875f5), shadow-md, title → brand purple (#42389d) + arrow-right icon.",table:{category:"State",defaultValue:{summary:!1}}},owner:{control:"select",options:["iris","user"],description:'`iris` = Iris Finance logo + "Iris Finance" label. `user` = avatar circle + "Jese Leos" name.',table:{category:"Content",defaultValue:{summary:"iris"}}}},args:{active:!0,hovered:!1,owner:"iris"}},v=`<svg width="12" height="12" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
</svg>`,f=`<svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
  <path d="M5.042 15.165a2.528 2.528 0 01-2.52 2.523A2.528 2.528 0 010 15.165a2.527 2.527 0 012.522-2.52h2.52v2.52zM6.313 15.165a2.527 2.527 0 012.521-2.52 2.527 2.527 0 012.521 2.52v6.313A2.528 2.528 0 018.834 24a2.528 2.528 0 01-2.521-2.522v-6.313zM8.834 5.042a2.528 2.528 0 01-2.521-2.52A2.528 2.528 0 018.834 0a2.527 2.527 0 012.521 2.522v2.52H8.834zM8.834 6.313a2.527 2.527 0 012.521 2.521 2.527 2.527 0 01-2.521 2.521H2.522A2.528 2.528 0 010 8.834a2.528 2.528 0 012.522-2.521h6.312zM18.956 8.834a2.528 2.528 0 012.522-2.521A2.528 2.528 0 0124 8.834a2.527 2.527 0 01-2.522 2.521h-2.522V8.834zM17.688 8.834a2.527 2.527 0 01-2.523 2.521 2.527 2.527 0 01-2.52-2.521V2.522A2.527 2.527 0 0115.165 0a2.528 2.528 0 012.523 2.522v6.312zM15.165 18.956a2.528 2.528 0 012.523 2.522A2.528 2.528 0 0115.165 24a2.527 2.527 0 01-2.52-2.522v-2.522h2.52zM15.165 17.688a2.527 2.527 0 01-2.52-2.523 2.527 2.527 0 012.52-2.52h6.313A2.527 2.527 0 0124 15.165a2.528 2.528 0 01-2.522 2.523h-6.313z"/>
</svg>`,G=`<svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
  <path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"/>
</svg>`,q=e=>`<span class="iris-toggle iris-toggle--${e?"on":"off"}" role="switch" aria-checked="${e}" aria-label="Report ${e?"enabled":"disabled"}">
    <span class="iris-toggle__thumb"></span>
  </span>`,K=e=>e?`<span class="rpt-chip rpt-chip--email">${v}E-mail</span>
     <span class="rpt-chip rpt-chip--slack">${f}Slack</span>`:`<span class="rpt-chip rpt-chip--muted">${v}E-mail</span>
     <span class="rpt-chip rpt-chip--muted">${f}Slack</span>`,Y=()=>`<div style="display:flex;flex-wrap:wrap;gap:4px;">
    <span class="rpt-chip" style="background:var(--color-bg-muted);color:#4a5565;">namesur@gmail.com</span>
    <span class="rpt-chip" style="background:var(--color-bg-muted);color:#4a5565;">name@gmail.com</span>
    <span class="rpt-chip" style="background:var(--color-bg-muted);color:#4a5565;">+5</span>
  </div>`,X=e=>`
  <div style="display:flex;gap:8px;align-items:center;">
    ${V}
    ${W(e)}
  </div>`,Z=e=>`
    <div style="display:flex;flex-direction:column;align-items:flex-end;gap:2px;">
      <span style="font-size:var(--text-xs);font-weight:var(--font-medium);color:var(--color-text-secondary);line-height:1.5;">Owned by</span>
      <div style="display:flex;align-items:center;gap:4px;">${e==="iris"?`${Q({size:"xs"})}
       <span style="font-size:var(--text-sm);font-weight:var(--font-semibold);color:#111928;line-height:1.5;
                    white-space:nowrap;">Iris Finance</span>`:`<span aria-label="Jese Leos avatar"
             style="display:inline-flex;align-items:center;justify-content:center;
                    width:20px;height:20px;border-radius:100px;border:1px solid var(--color-border-default);
                    background:var(--color-bg-muted);font-size:8px;font-weight:600;color:#374151;
                    flex-shrink:0;">JL</span>
       <span style="font-size:var(--text-sm);font-weight:var(--font-semibold);color:#111928;line-height:1.5;
                    white-space:nowrap;">Jese Leos</span>`}</div>
    </div>`,n=({active:e=!0,owner:t="iris",hovered:r=!1})=>{const p=["card-reporting",r&&"card-reporting--hovered",!e&&"card-reporting--inactive"].filter(Boolean).join(" "),a=r?"#42389d":"#111928",g=e?"Every day at 7am (PST)":"Right now the report is paused. We’ll send it to you at 7am tomorrow morning when you turn it on";return`
    <div class="${p}">

      <!-- ① Heading row: title + toggle -->
      <div style="display:flex;gap:12px;align-items:flex-start;">
        <div style="flex:1;min-width:0;display:flex;flex-direction:column;gap:8px;">

          <div style="display:flex;align-items:center;justify-content:space-between;gap:8px;">
            <div style="display:flex;align-items:center;gap:8px;">
              <p style="font-size:var(--text-lg);font-weight:var(--font-semibold);line-height:1.5;color:${a};
                        margin:0;white-space:nowrap;">Daily Report</p>
              ${r?`<span style="color:${a};display:inline-flex;">${G}</span>`:""}
            </div>
            ${q(e)}
          </div>

          <!-- Delivery channel chips -->
          <div style="display:flex;gap:4px;">${K(e)}</div>

        </div>
      </div>

      <!-- ② Details: schedule text + recipient chips -->
      <div style="flex:1;min-height:0;display:flex;flex-direction:column;gap:12px;">
        <p style="font-size:var(--text-sm);font-weight:var(--font-normal);line-height:1.5;
                  color:${e?"#111928":"#4b5563"};margin:0;">
          ${g}
        </p>
        ${Y()}
      </div>

      <!-- ③ Footer: sales channel icons + owner attribution -->
      <div style="display:flex;align-items:flex-end;justify-content:space-between;gap:12px;">
        ${X(e)}
        ${Z(t)}
      </div>

    </div>`},i={name:"Interactive (Controls)",parameters:{docs:{description:{story:"Use **active**, **hovered**, and **owner** Controls to preview all state combinations. Toggle `active` to see the paused state; toggle `hovered` to preview the hover treatment. You can also **click the toggle** inside the card to switch it on/off directly."},source:{transform:(e,t)=>{const{active:r,hovered:p}=t.args;return`<div class="card-reporting${p?" card-reporting--hovered":r?"":" card-reporting--inactive"}">
  <!-- title row, delivery chips, schedule, recipients, channels, owner + toggle -->
  <!-- See individual state stories for full markup -->
</div>`}}}},render:e=>n(e),play:async({canvasElement:e})=>{e._reportingToggleHandler&&e.removeEventListener("click",e._reportingToggleHandler),e._reportingToggleHandler=t=>{const r=t.target.closest(".iris-toggle");if(!r)return;const a=!r.classList.contains("iris-toggle--on");r.classList.toggle("iris-toggle--on",a),r.classList.toggle("iris-toggle--off",!a),r.setAttribute("aria-checked",String(a)),r.setAttribute("aria-label",`Report ${a?"enabled":"disabled"}`);const g=r.closest(".card-reporting");g&&g.classList.toggle("card-reporting--inactive",!a)},e.addEventListener("click",e._reportingToggleHandler)}},s={name:"Default — active, Iris owner",parameters:{docs:{description:{story:`
Default state: **active=yes, owner=Iris**. White bg, shadow-sm, no border, toggle ON.

| Property       | Value                    |
|---------------|--------------------------|
| Background     | #ffffff                  |
| Border         | transparent (none)       |
| Shadow         | shadow-sm                |
| Toggle         | ON — #42389d (brand/800) |
| E-mail chip    | #e60076 (pink/600)       |
| Slack chip     | #9810fa (purple/600)     |
| Amazon icon bg | #fef9c2 (yellow/100)     |
        `},source:{language:"html",code:`<!-- Card Reporting — Default (active, Iris owner) -->
<div class="card-reporting">
  <!-- ① Heading row: title + toggle -->
  <div style="display:flex;gap:12px;align-items:flex-start;">
    <div style="flex:1;display:flex;flex-direction:column;gap:8px;">
      <div style="display:flex;align-items:center;justify-content:space-between;gap:8px;">
        <p style="font-size:var(--text-lg);font-weight:var(--font-semibold);color:#111928;margin:0;">Daily Report</p>
        <!-- Toggle ON: class iris-toggle iris-toggle--on -->
        <span class="iris-toggle iris-toggle--on" role="switch" aria-checked="true" aria-label="Report enabled">
          <span class="iris-toggle__thumb"></span>
        </span>
      </div>
      <!-- Channel chips (active: colored) -->
      <div style="display:flex;gap:4px;">
        <span class="rpt-chip rpt-chip--email"><!-- mail icon -->E-mail</span>
        <span class="rpt-chip rpt-chip--slack"><!-- slack icon -->Slack</span>
      </div>
    </div>
  </div>
  <!-- ② Schedule + recipients -->
  <div style="display:flex;flex-direction:column;gap:12px;">
    <p style="font-size:var(--text-sm);color:#111928;margin:0;">Every day at 7am (PST)</p>
    <div style="display:flex;flex-wrap:wrap;gap:4px;">
      <span class="rpt-chip" style="background:var(--color-bg-muted);color:#4a5565;">namesur@gmail.com</span>
      <span class="rpt-chip" style="background:var(--color-bg-muted);color:#4a5565;">name@gmail.com</span>
      <span class="rpt-chip" style="background:var(--color-bg-muted);color:#4a5565;">+5</span>
    </div>
  </div>
  <!-- ③ Footer: sales channels + owner -->
  <div style="display:flex;align-items:flex-end;justify-content:space-between;gap:12px;">
    <!-- Shopify + Amazon icons -->
    <div style="display:flex;gap:8px;"><!-- shopify badge --><!-- amazon badge (active: yellow) --></div>
    <!-- Owner: Iris Finance -->
    <div style="display:flex;flex-direction:column;align-items:flex-end;gap:2px;">
      <span style="font-size:var(--text-xs);font-weight:var(--font-medium);color:var(--color-text-secondary);">Owned by</span>
      <div style="display:flex;align-items:center;gap:4px;">
        <!-- Iris Finance logo mark (xs) -->
        <span style="font-size:var(--text-sm);font-weight:var(--font-semibold);color:#111928;">Iris Finance</span>
      </div>
    </div>
  </div>
</div>`}}},render:()=>n({active:!0,owner:"iris",hovered:!1})},o={name:"Hovered — active, Iris owner",parameters:{docs:{description:{story:`
Hover state: **border 1px solid #6875f5** (brand/500), **shadow-md**, title → **#42389d** with arrow-right.

| Property     | Default       | Hovered        |
|-------------|---------------|----------------|
| Border       | transparent   | #6875f5        |
| Shadow       | shadow-sm     | shadow-md      |
| Title color  | #111928       | #42389d        |
| Arrow icon   | hidden        | visible        |
        `},source:{language:"html",code:`<!-- Card Reporting — Hovered: add modifier class card-reporting--hovered -->
<div class="card-reporting card-reporting--hovered">
  <div style="display:flex;gap:12px;align-items:flex-start;">
    <div style="flex:1;display:flex;flex-direction:column;gap:8px;">
      <div style="display:flex;align-items:center;justify-content:space-between;gap:8px;">
        <div style="display:flex;align-items:center;gap:8px;">
          <!-- Title: color #42389d on hover (brand/800) -->
          <p style="font-size:var(--text-lg);font-weight:var(--font-semibold);color:#42389d;margin:0;">Daily Report</p>
          <!-- Arrow-right icon: only visible on hover -->
          <span style="color:#42389d;display:inline-flex;"><!-- arrow-right SVG --></span>
        </div>
        <span class="iris-toggle iris-toggle--on" role="switch" aria-checked="true" aria-label="Report enabled">
          <span class="iris-toggle__thumb"></span>
        </span>
      </div>
      <div style="display:flex;gap:4px;">
        <span class="rpt-chip rpt-chip--email"><!-- mail -->E-mail</span>
        <span class="rpt-chip rpt-chip--slack"><!-- slack -->Slack</span>
      </div>
    </div>
  </div>
  <!-- ② + ③ same as Default state -->
</div>
<!-- CSS for hovered modifier:
.card-reporting--hovered {
  border: 1px solid #6875f5;
  box-shadow: var(--shadow-md);
} -->`}}},render:()=>n({active:!0,owner:"iris",hovered:!0})},l={name:"Inactive — paused",parameters:{docs:{description:{story:`
Inactive state (active=no): report is paused.

| Property          | Active                 | Inactive                    |
|------------------|------------------------|-----------------------------|
| Background        | #ffffff                | **#f9fafb** (gray/50)       |
| Toggle            | ON — brand/800 purple  | **OFF** — gray/300 (#d1d5db)|
| E-mail chip bg    | #e60076 (pink/600)     | **#f3f4f6** (gray/100)      |
| Slack chip bg     | #9810fa (purple/600)   | **#f3f4f6** (gray/100)      |
| Amazon icon bg    | #fef9c2 (yellow/100)   | **#e5e7eb** (gray/200)      |
| Schedule text     | Time + frequency       | Paused message              |
        `},source:{language:"html",code:`<!-- Card Reporting — Inactive (paused): add modifier class card-reporting--inactive -->
<div class="card-reporting card-reporting--inactive">
  <div style="display:flex;gap:12px;align-items:flex-start;">
    <div style="flex:1;display:flex;flex-direction:column;gap:8px;">
      <div style="display:flex;align-items:center;justify-content:space-between;gap:8px;">
        <p style="font-size:var(--text-lg);font-weight:var(--font-semibold);color:#111928;margin:0;">Daily Report</p>
        <!-- Toggle OFF: iris-toggle--off; thumb color white, track gray/300 -->
        <span class="iris-toggle iris-toggle--off" role="switch" aria-checked="false" aria-label="Report disabled">
          <span class="iris-toggle__thumb"></span>
        </span>
      </div>
      <!-- Chips: muted (gray/100 bg + gray text when inactive) -->
      <div style="display:flex;gap:4px;">
        <span class="rpt-chip rpt-chip--muted"><!-- mail -->E-mail</span>
        <span class="rpt-chip rpt-chip--muted"><!-- slack -->Slack</span>
      </div>
    </div>
  </div>
  <!-- Schedule text changes to paused message; text color #4b5563 (gray/600) -->
  <p style="font-size:var(--text-sm);color:#4b5563;margin:0;">
    Right now the report is paused. We'll send it to you at 7am tomorrow morning when you turn it on
  </p>
  <!-- ③ Footer: Amazon bg changes to #e5e7eb (gray/200) when inactive -->
</div>
<!-- CSS for inactive modifier:
.card-reporting--inactive {
  background: #f9fafb;
} -->`}}},render:()=>n({active:!1,owner:"iris",hovered:!1})},d={name:"User owner",parameters:{docs:{description:{story:`
Owner=User variant. The owner section at the bottom-right shows a **round avatar + user name**
instead of the Iris Finance logo mark.

| Property | Owner=Iris            | Owner=User             |
|---------|-----------------------|------------------------|
| Badge   | Iris monogram logo    | Round avatar circle    |
| Name    | "Iris Finance"        | "Jese Leos"            |
        `},source:{language:"html",code:`<!-- Card Reporting — User owner: only the owner section changes -->
<!-- Replace the Iris Finance logo section with: -->
<div style="display:flex;flex-direction:column;align-items:flex-end;gap:2px;">
  <span style="font-size:var(--text-xs);font-weight:var(--font-medium);color:var(--color-text-secondary);">Owned by</span>
  <div style="display:flex;align-items:center;gap:4px;">
    <!-- Round avatar: initials circle, 20×20px, border 1px #e5e7eb -->
    <span aria-label="Jese Leos avatar"
          style="display:inline-flex;align-items:center;justify-content:center;
                 width:20px;height:20px;border-radius:100px;border:1px solid var(--color-border-default);
                 background:var(--color-bg-muted);font-size:8px;font-weight:600;color:#374151;
                 flex-shrink:0;">JL</span>
    <span style="font-size:var(--text-sm);font-weight:var(--font-semibold);color:#111928;white-space:nowrap;">Jese Leos</span>
  </div>
</div>`}}},render:()=>n({active:!0,owner:"user",hovered:!1})},c={name:"All variants — overview",parameters:{docs:{description:{story:`
All 4 Figma light-mode variants in a 2×2 grid.
Use this story for design review — verify each container's bg, border, toggle, and owner section.
        `},source:{language:"html",code:`<!-- Card Reporting — All 4 variants in a 2×2 grid -->
<div style="display:grid;grid-template-columns:repeat(2,362px);gap:24px;">
  <div class="card-reporting"><!-- Default: active, Iris owner --></div>
  <div class="card-reporting card-reporting--hovered"><!-- Hovered: brand border #6875f5 --></div>
  <div class="card-reporting card-reporting--inactive"><!-- Inactive: gray/50 bg, toggle off --></div>
  <div class="card-reporting"><!-- User owner: avatar circle + "Jese Leos" --></div>
</div>
<!-- See individual state stories for full markup of each variant -->`}}},render:()=>`
    <div style="display:grid;grid-template-columns:repeat(2,362px);gap:24px;">

      <div>
        <p style="font:10px/1 600 sans-serif;text-transform:uppercase;letter-spacing:.1em;
                  color:#9CA3AF;margin:0 0 10px;">Default — active · Iris</p>
        ${n({active:!0,owner:"iris",hovered:!1})}
      </div>

      <div>
        <p style="font:10px/1 600 sans-serif;text-transform:uppercase;letter-spacing:.1em;
                  color:#9CA3AF;margin:0 0 10px;">Hovered — active · Iris</p>
        ${n({active:!0,owner:"iris",hovered:!0})}
      </div>

      <div>
        <p style="font:10px/1 600 sans-serif;text-transform:uppercase;letter-spacing:.1em;
                  color:#9CA3AF;margin:0 0 10px;">Inactive — paused · Iris</p>
        ${n({active:!1,owner:"iris",hovered:!1})}
      </div>

      <div>
        <p style="font:10px/1 600 sans-serif;text-transform:uppercase;letter-spacing:.1em;
                  color:#9CA3AF;margin:0 0 10px;">User owner — active · User</p>
        ${n({active:!0,owner:"user",hovered:!1})}
      </div>

    </div>`};var m,h,u,y,x;i.parameters={...i.parameters,docs:{...(m=i.parameters)==null?void 0:m.docs,source:{originalSource:`{
  name: 'Interactive (Controls)',
  parameters: {
    docs: {
      description: {
        story: 'Use **active**, **hovered**, and **owner** Controls to preview all state combinations. Toggle \`active\` to see the paused state; toggle \`hovered\` to preview the hover treatment. You can also **click the toggle** inside the card to switch it on/off directly.'
      },
      source: {
        transform: (_src, storyCtx) => {
          const {
            active,
            hovered
          } = storyCtx.args;
          const mod = hovered ? ' card-reporting--hovered' : !active ? ' card-reporting--inactive' : '';
          return \`<div class="card-reporting\${mod}">
  <!-- title row, delivery chips, schedule, recipients, channels, owner + toggle -->
  <!-- See individual state stories for full markup -->
</div>\`;
        }
      }
    }
  },
  render: args => reportingCard(args),
  play: async ({
    canvasElement
  }) => {
    // Clean up previous listener to prevent duplicates on args re-render
    if (canvasElement._reportingToggleHandler) {
      canvasElement.removeEventListener('click', canvasElement._reportingToggleHandler);
    }
    canvasElement._reportingToggleHandler = e => {
      const tog = e.target.closest('.iris-toggle');
      if (!tog) return;
      const isOn = tog.classList.contains('iris-toggle--on');
      const nowOn = !isOn;
      tog.classList.toggle('iris-toggle--on', nowOn);
      tog.classList.toggle('iris-toggle--off', !nowOn);
      tog.setAttribute('aria-checked', String(nowOn));
      tog.setAttribute('aria-label', \`Report \${nowOn ? 'enabled' : 'disabled'}\`);
      // Reflect inactive state on the card container
      const card = tog.closest('.card-reporting');
      if (card) card.classList.toggle('card-reporting--inactive', !nowOn);
    };
    canvasElement.addEventListener('click', canvasElement._reportingToggleHandler);
  }
}`,...(u=(h=i.parameters)==null?void 0:h.docs)==null?void 0:u.source},description:{story:'Primary interactive story. Use Controls to toggle all three props.\n\nQA checklist:\n- `active:true, hovered:false` → white bg, no border, toggle ON (purple)\n- `active:true, hovered:true`  → brand border (#6875f5), title purple, arrow icon\n- `active:false`               → gray/50 bg, toggle OFF, chips gray, paused text\n- `owner:user`                 → avatar circle + "Jese Leos" in owner section',...(x=(y=i.parameters)==null?void 0:y.docs)==null?void 0:x.description}}};var w,b,k,I,A;s.parameters={...s.parameters,docs:{...(w=s.parameters)==null?void 0:w.docs,source:{originalSource:`{
  name: 'Default — active, Iris owner',
  parameters: {
    docs: {
      description: {
        story: \`
Default state: **active=yes, owner=Iris**. White bg, shadow-sm, no border, toggle ON.

| Property       | Value                    |
|---------------|--------------------------|
| Background     | #ffffff                  |
| Border         | transparent (none)       |
| Shadow         | shadow-sm                |
| Toggle         | ON — #42389d (brand/800) |
| E-mail chip    | #e60076 (pink/600)       |
| Slack chip     | #9810fa (purple/600)     |
| Amazon icon bg | #fef9c2 (yellow/100)     |
        \`
      },
      source: {
        language: 'html',
        code: \`<!-- Card Reporting — Default (active, Iris owner) -->
<div class="card-reporting">
  <!-- ① Heading row: title + toggle -->
  <div style="display:flex;gap:12px;align-items:flex-start;">
    <div style="flex:1;display:flex;flex-direction:column;gap:8px;">
      <div style="display:flex;align-items:center;justify-content:space-between;gap:8px;">
        <p style="font-size:var(--text-lg);font-weight:var(--font-semibold);color:#111928;margin:0;">Daily Report</p>
        <!-- Toggle ON: class iris-toggle iris-toggle--on -->
        <span class="iris-toggle iris-toggle--on" role="switch" aria-checked="true" aria-label="Report enabled">
          <span class="iris-toggle__thumb"></span>
        </span>
      </div>
      <!-- Channel chips (active: colored) -->
      <div style="display:flex;gap:4px;">
        <span class="rpt-chip rpt-chip--email"><!-- mail icon -->E-mail</span>
        <span class="rpt-chip rpt-chip--slack"><!-- slack icon -->Slack</span>
      </div>
    </div>
  </div>
  <!-- ② Schedule + recipients -->
  <div style="display:flex;flex-direction:column;gap:12px;">
    <p style="font-size:var(--text-sm);color:#111928;margin:0;">Every day at 7am (PST)</p>
    <div style="display:flex;flex-wrap:wrap;gap:4px;">
      <span class="rpt-chip" style="background:var(--color-bg-muted);color:#4a5565;">namesur@gmail.com</span>
      <span class="rpt-chip" style="background:var(--color-bg-muted);color:#4a5565;">name@gmail.com</span>
      <span class="rpt-chip" style="background:var(--color-bg-muted);color:#4a5565;">+5</span>
    </div>
  </div>
  <!-- ③ Footer: sales channels + owner -->
  <div style="display:flex;align-items:flex-end;justify-content:space-between;gap:12px;">
    <!-- Shopify + Amazon icons -->
    <div style="display:flex;gap:8px;"><!-- shopify badge --><!-- amazon badge (active: yellow) --></div>
    <!-- Owner: Iris Finance -->
    <div style="display:flex;flex-direction:column;align-items:flex-end;gap:2px;">
      <span style="font-size:var(--text-xs);font-weight:var(--font-medium);color:var(--color-text-secondary);">Owned by</span>
      <div style="display:flex;align-items:center;gap:4px;">
        <!-- Iris Finance logo mark (xs) -->
        <span style="font-size:var(--text-sm);font-weight:var(--font-semibold);color:#111928;">Iris Finance</span>
      </div>
    </div>
  </div>
</div>\`
      }
    }
  },
  render: () => reportingCard({
    active: true,
    owner: 'iris',
    hovered: false
  })
}`,...(k=(b=s.parameters)==null?void 0:b.docs)==null?void 0:k.source},description:{story:`Default state — active=yes, owner=Iris.
QA: white bg, shadow-sm, no visible border, toggle ON, E-mail + Slack chips colored.`,...(A=(I=s.parameters)==null?void 0:I.docs)==null?void 0:A.description}}};var C,S,z,O,F;o.parameters={...o.parameters,docs:{...(C=o.parameters)==null?void 0:C.docs,source:{originalSource:`{
  name: 'Hovered — active, Iris owner',
  parameters: {
    docs: {
      description: {
        story: \`
Hover state: **border 1px solid #6875f5** (brand/500), **shadow-md**, title → **#42389d** with arrow-right.

| Property     | Default       | Hovered        |
|-------------|---------------|----------------|
| Border       | transparent   | #6875f5        |
| Shadow       | shadow-sm     | shadow-md      |
| Title color  | #111928       | #42389d        |
| Arrow icon   | hidden        | visible        |
        \`
      },
      source: {
        language: 'html',
        code: \`<!-- Card Reporting — Hovered: add modifier class card-reporting--hovered -->
<div class="card-reporting card-reporting--hovered">
  <div style="display:flex;gap:12px;align-items:flex-start;">
    <div style="flex:1;display:flex;flex-direction:column;gap:8px;">
      <div style="display:flex;align-items:center;justify-content:space-between;gap:8px;">
        <div style="display:flex;align-items:center;gap:8px;">
          <!-- Title: color #42389d on hover (brand/800) -->
          <p style="font-size:var(--text-lg);font-weight:var(--font-semibold);color:#42389d;margin:0;">Daily Report</p>
          <!-- Arrow-right icon: only visible on hover -->
          <span style="color:#42389d;display:inline-flex;"><!-- arrow-right SVG --></span>
        </div>
        <span class="iris-toggle iris-toggle--on" role="switch" aria-checked="true" aria-label="Report enabled">
          <span class="iris-toggle__thumb"></span>
        </span>
      </div>
      <div style="display:flex;gap:4px;">
        <span class="rpt-chip rpt-chip--email"><!-- mail -->E-mail</span>
        <span class="rpt-chip rpt-chip--slack"><!-- slack -->Slack</span>
      </div>
    </div>
  </div>
  <!-- ② + ③ same as Default state -->
</div>
<!-- CSS for hovered modifier:
.card-reporting--hovered {
  border: 1px solid #6875f5;
  box-shadow: var(--shadow-md);
} -->\`
      }
    }
  },
  render: () => reportingCard({
    active: true,
    owner: 'iris',
    hovered: true
  })
}`,...(z=(S=o.parameters)==null?void 0:S.docs)==null?void 0:z.source},description:{story:`Hover state — brand/500 border, shadow-md, title purple + arrow.
QA: border 1px solid #6875f5, title color #42389d, arrow-right icon visible next to title.`,...(F=(O=o.parameters)==null?void 0:O.docs)==null?void 0:F.description}}};var R,T,$,L,D;l.parameters={...l.parameters,docs:{...(R=l.parameters)==null?void 0:R.docs,source:{originalSource:`{
  name: 'Inactive — paused',
  parameters: {
    docs: {
      description: {
        story: \`
Inactive state (active=no): report is paused.

| Property          | Active                 | Inactive                    |
|------------------|------------------------|-----------------------------|
| Background        | #ffffff                | **#f9fafb** (gray/50)       |
| Toggle            | ON — brand/800 purple  | **OFF** — gray/300 (#d1d5db)|
| E-mail chip bg    | #e60076 (pink/600)     | **#f3f4f6** (gray/100)      |
| Slack chip bg     | #9810fa (purple/600)   | **#f3f4f6** (gray/100)      |
| Amazon icon bg    | #fef9c2 (yellow/100)   | **#e5e7eb** (gray/200)      |
| Schedule text     | Time + frequency       | Paused message              |
        \`
      },
      source: {
        language: 'html',
        code: \`<!-- Card Reporting — Inactive (paused): add modifier class card-reporting--inactive -->
<div class="card-reporting card-reporting--inactive">
  <div style="display:flex;gap:12px;align-items:flex-start;">
    <div style="flex:1;display:flex;flex-direction:column;gap:8px;">
      <div style="display:flex;align-items:center;justify-content:space-between;gap:8px;">
        <p style="font-size:var(--text-lg);font-weight:var(--font-semibold);color:#111928;margin:0;">Daily Report</p>
        <!-- Toggle OFF: iris-toggle--off; thumb color white, track gray/300 -->
        <span class="iris-toggle iris-toggle--off" role="switch" aria-checked="false" aria-label="Report disabled">
          <span class="iris-toggle__thumb"></span>
        </span>
      </div>
      <!-- Chips: muted (gray/100 bg + gray text when inactive) -->
      <div style="display:flex;gap:4px;">
        <span class="rpt-chip rpt-chip--muted"><!-- mail -->E-mail</span>
        <span class="rpt-chip rpt-chip--muted"><!-- slack -->Slack</span>
      </div>
    </div>
  </div>
  <!-- Schedule text changes to paused message; text color #4b5563 (gray/600) -->
  <p style="font-size:var(--text-sm);color:#4b5563;margin:0;">
    Right now the report is paused. We'll send it to you at 7am tomorrow morning when you turn it on
  </p>
  <!-- ③ Footer: Amazon bg changes to #e5e7eb (gray/200) when inactive -->
</div>
<!-- CSS for inactive modifier:
.card-reporting--inactive {
  background: #f9fafb;
} -->\`
      }
    }
  },
  render: () => reportingCard({
    active: false,
    owner: 'iris',
    hovered: false
  })
}`,...($=(T=l.parameters)==null?void 0:T.docs)==null?void 0:$.source},description:{story:`Inactive (paused) — toggle OFF, gray/50 bg, muted chips.
QA: bg #f9fafb, toggle off (gray/300 bg), both chips gray/100 + gray text,
    Amazon bg → #e5e7eb (not yellow), schedule text changes to paused message.`,...(D=(L=l.parameters)==null?void 0:L.docs)==null?void 0:D.description}}};var H,_,E,U,B;d.parameters={...d.parameters,docs:{...(H=d.parameters)==null?void 0:H.docs,source:{originalSource:`{
  name: 'User owner',
  parameters: {
    docs: {
      description: {
        story: \`
Owner=User variant. The owner section at the bottom-right shows a **round avatar + user name**
instead of the Iris Finance logo mark.

| Property | Owner=Iris            | Owner=User             |
|---------|-----------------------|------------------------|
| Badge   | Iris monogram logo    | Round avatar circle    |
| Name    | "Iris Finance"        | "Jese Leos"            |
        \`
      },
      source: {
        language: 'html',
        code: \`<!-- Card Reporting — User owner: only the owner section changes -->
<!-- Replace the Iris Finance logo section with: -->
<div style="display:flex;flex-direction:column;align-items:flex-end;gap:2px;">
  <span style="font-size:var(--text-xs);font-weight:var(--font-medium);color:var(--color-text-secondary);">Owned by</span>
  <div style="display:flex;align-items:center;gap:4px;">
    <!-- Round avatar: initials circle, 20×20px, border 1px #e5e7eb -->
    <span aria-label="Jese Leos avatar"
          style="display:inline-flex;align-items:center;justify-content:center;
                 width:20px;height:20px;border-radius:100px;border:1px solid var(--color-border-default);
                 background:var(--color-bg-muted);font-size:8px;font-weight:600;color:#374151;
                 flex-shrink:0;">JL</span>
    <span style="font-size:var(--text-sm);font-weight:var(--font-semibold);color:#111928;white-space:nowrap;">Jese Leos</span>
  </div>
</div>\`
      }
    }
  },
  render: () => reportingCard({
    active: true,
    owner: 'user',
    hovered: false
  })
}`,...(E=(_=d.parameters)==null?void 0:_.docs)==null?void 0:E.source},description:{story:`User-owned variant — avatar + name instead of Iris Finance logo.
QA: "Owned by" section shows initials circle + "Jese Leos", NOT the Iris Finance logo.`,...(B=(U=d.parameters)==null?void 0:U.docs)==null?void 0:B.description}}};var N,J,P,j,M;c.parameters={...c.parameters,docs:{...(N=c.parameters)==null?void 0:N.docs,source:{originalSource:`{
  name: 'All variants — overview',
  parameters: {
    docs: {
      description: {
        story: \`
All 4 Figma light-mode variants in a 2×2 grid.
Use this story for design review — verify each container's bg, border, toggle, and owner section.
        \`
      },
      source: {
        language: 'html',
        code: \`<!-- Card Reporting — All 4 variants in a 2×2 grid -->
<div style="display:grid;grid-template-columns:repeat(2,362px);gap:24px;">
  <div class="card-reporting"><!-- Default: active, Iris owner --></div>
  <div class="card-reporting card-reporting--hovered"><!-- Hovered: brand border #6875f5 --></div>
  <div class="card-reporting card-reporting--inactive"><!-- Inactive: gray/50 bg, toggle off --></div>
  <div class="card-reporting"><!-- User owner: avatar circle + "Jese Leos" --></div>
</div>
<!-- See individual state stories for full markup of each variant -->\`
      }
    }
  },
  render: () => \`
    <div style="display:grid;grid-template-columns:repeat(2,362px);gap:24px;">

      <div>
        <p style="font:10px/1 600 sans-serif;text-transform:uppercase;letter-spacing:.1em;
                  color:#9CA3AF;margin:0 0 10px;">Default — active · Iris</p>
        \${reportingCard({
    active: true,
    owner: 'iris',
    hovered: false
  })}
      </div>

      <div>
        <p style="font:10px/1 600 sans-serif;text-transform:uppercase;letter-spacing:.1em;
                  color:#9CA3AF;margin:0 0 10px;">Hovered — active · Iris</p>
        \${reportingCard({
    active: true,
    owner: 'iris',
    hovered: true
  })}
      </div>

      <div>
        <p style="font:10px/1 600 sans-serif;text-transform:uppercase;letter-spacing:.1em;
                  color:#9CA3AF;margin:0 0 10px;">Inactive — paused · Iris</p>
        \${reportingCard({
    active: false,
    owner: 'iris',
    hovered: false
  })}
      </div>

      <div>
        <p style="font:10px/1 600 sans-serif;text-transform:uppercase;letter-spacing:.1em;
                  color:#9CA3AF;margin:0 0 10px;">User owner — active · User</p>
        \${reportingCard({
    active: true,
    owner: 'user',
    hovered: false
  })}
      </div>

    </div>\`
}`,...(P=(J=c.parameters)==null?void 0:J.docs)==null?void 0:P.source},description:{story:`All 4 Figma light-mode variants in a 2×2 grid.
QA: compare containers — default (no border) vs hover (brand border) vs
    inactive (gray bg) vs user owner (different owner section).`,...(M=(j=c.parameters)==null?void 0:j.docs)==null?void 0:M.description}}};const ae=["Interactive","Default","Hovered","Inactive","UserOwner","AllVariants"];export{c as AllVariants,s as Default,o as Hovered,l as Inactive,i as Interactive,d as UserOwner,ae as __namedExportsOrder,re as default};
