const V=`<svg width="20" height="20" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path d="M15 19l-7-7 7-7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,W=`<svg width="20" height="20" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path d="M9 5l7 7-7 7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;function y({content:e,active:a=!1,disabled:n=!1,small:t=!1,ariaLabel:i="",ariaCurrent:l=!1}={}){const s=["page-item",a?"active":"",n?"disabled":""].filter(Boolean).join(" "),o=i?` aria-label="${i}"`:"";return`<li class="${s}"><button class="page-link"${o}${n?' disabled aria-disabled="true"':""}${l?' aria-current="page"':""}${t?' style="min-width:32px;height:32px;"':""}>${e}</button></li>`}function v({page:e,active:a=!1,disabled:n=!1,small:t=!1}={}){return y({content:e,active:a,disabled:n,small:t,ariaLabel:`Page ${e}`,ariaCurrent:a})}function h({disabled:e=!1,small:a=!1}={}){return y({content:V,disabled:e,small:a,ariaLabel:"Previous page"})}function x({disabled:e=!1,small:a=!1}={}){return y({content:W,disabled:e,small:a,ariaLabel:"Next page"})}function X({small:e=!1}={}){return`<li class="page-item"><span class="page-link" aria-hidden="true"${e?' style="min-width:32px;height:32px;"':""}>...</span></li>`}function O(e,a){return a<=5?Array.from({length:a},(n,t)=>t+1):[1,2,3,"ellipsis",a]}function r({size:e="default",currentPage:a=1,totalPages:n=3}={}){const t=O(a,n),i=a<=1,l=a>=n,s=e==="small";return`<nav aria-label="Pagination"><ul class="pagination">${[h({disabled:i,small:s}),...t.map(p=>p==="ellipsis"?X({small:s}):v({page:p,active:p===a,small:s})),x({disabled:l,small:s})].join("")}</ul></nav>`}function P({size:e="default",from:a=1,to:n=10,total:t=100}={}){return`<p class="${e==="small"?"pagination-info pagination-info-sm":"pagination-info"}">Showing <span>${a}</span> to <span>${n}</span> of <span>${t}</span></p>`}const G={title:"Iris Library/Pagination",tags:["autodocs","stable"],parameters:{layout:"padded",docs:{description:{component:'\n**Pagination** lets users navigate between pages of a result set.\n\nFigma sources:\n- Pagination strip: `3284:22499`\n- Button sub-component: `9426:125610`\n- Showing indicator: `9703:152796`\n\nCSS classes: `.pagination` → `.page-item [.active|.disabled]` → `.page-link`\n\n**When to use**\n- Tables, search results, or lists with more items than fit on one screen\n- When you need to preserve URL state per page (use `?page=N` query params)\n- Alongside the **Showing** indicator to tell users where they are in the result set\n\n**When NOT to use**\n- Infinite scroll interfaces — don\'t mix pagination and infinite scroll\n- Very short lists (< 2 pages) — hide the control entirely\n- Mobile-first flows where "Load more" is more ergonomic\n\n**Anatomy**\n`[← Prev] [1] [2] [3] [… last?] [Next →]`\n\nThe current page has `.page-item.active` + `aria-current="page"`. Disabled prev/next have `.page-item.disabled` + `disabled` attribute.\n\n**Accessibility**\n- Each `.page-link` button has `aria-label="Page N"`\n- Active page button has `aria-current="page"`\n- Disabled prev/next have `disabled` + `aria-disabled="true"`\n        '.trim()}}},argTypes:{currentPage:{control:{type:"number",min:1,step:1},description:'The currently active page. Gets `.page-item.active` and `aria-current="page"`.',table:{category:"Content",defaultValue:{summary:1}}},totalPages:{control:{type:"number",min:1,step:1},description:"Total number of pages. When > 5, an ellipsis and last page are shown.",table:{category:"Content",defaultValue:{summary:3}}},size:{control:"select",options:["default","small"],description:"`default` = 36×36px buttons (CSS default). `small` = 32×32px (inline size override — no CSS modifier class exists).",table:{category:"Appearance",defaultValue:{summary:"default"}}}},args:{size:"default",currentPage:1,totalPages:3}},c={name:"Interactive (Controls)",render:e=>r(e),parameters:{docs:{description:{story:"Use **Controls** to change the current page, total pages, and size. Set `totalPages` > 5 to see ellipsis + last page."},source:{transform:(e,a)=>{const{size:n,currentPage:t,totalPages:i}=a.args,s=n==="small"?' style="min-width:32px;height:32px;"':"";return`<nav aria-label="Pagination">
  <ul class="pagination">

    <!-- Prev — disabled when currentPage=1 -->
    <li class="page-item${t<=1?" disabled":""}">
      <button class="page-link" aria-label="Previous page"${t<=1?' disabled aria-disabled="true"':""}${s}>
        <!-- chevron-left 20×20 -->
      </button>
    </li>

    <!-- Page buttons — active page gets .page-item.active + aria-current="page" -->
    <li class="page-item active">
      <button class="page-link" aria-label="Page 1" aria-current="page"${s}>1</button>
    </li>
    <li class="page-item">
      <button class="page-link" aria-label="Page 2"${s}>2</button>
    </li>
    ${i>5?`
    <!-- Ellipsis — non-interactive <span> -->
    <li class="page-item"><span class="page-link" aria-hidden="true"${s}>…</span></li>
    <li class="page-item">
      <button class="page-link" aria-label="Page ${i}"${s}>${i}</button>
    </li>`:""}

    <!-- Next — disabled when currentPage=totalPages -->
    <li class="page-item${t>=i?" disabled":""}">
      <button class="page-link" aria-label="Next page"${t>=i?' disabled aria-disabled="true"':""}${s}>
        <!-- chevron-right 20×20 -->
      </button>
    </li>

  </ul>
</nav>`}}}}},g={name:"Few pages — no ellipsis",parameters:{docs:{description:{story:`
Pagination with ≤ 5 pages — all page numbers shown, no ellipsis. Figma: \`Size=Default, More pages=No\`.

**✅ Do** — hide the pagination entirely when there is only 1 page.
**❌ Don't** — show an ellipsis when all pages fit.
        `.trim()},source:{language:"html",code:`<nav aria-label="Pagination">
  <ul class="pagination">
    <li class="page-item disabled">
      <button class="page-link" aria-label="Previous page" disabled aria-disabled="true"><!-- chevron-left --></button>
    </li>
    <li class="page-item active">
      <button class="page-link" aria-label="Page 1" aria-current="page">1</button>
    </li>
    <li class="page-item">
      <button class="page-link" aria-label="Page 2">2</button>
    </li>
    <li class="page-item">
      <button class="page-link" aria-label="Page 3">3</button>
    </li>
    <li class="page-item">
      <button class="page-link" aria-label="Next page"><!-- chevron-right --></button>
    </li>
  </ul>
</nav>`}}},render:()=>r({size:"default",currentPage:1,totalPages:3})},d={name:"Many pages — with ellipsis",parameters:{docs:{description:{story:'\nPagination with > 5 pages — shows first 3, an ellipsis, and the last page. Figma: `More pages=Yes`.\n\n**✅ Do** — use a non-interactive `<span class="page-link">` for the ellipsis, not a `<button>`.\n**❌ Don\'t** — truncate when ≤ 5 pages fit.\n        '.trim()},source:{language:"html",code:`<nav aria-label="Pagination">
  <ul class="pagination">
    <li class="page-item disabled">
      <button class="page-link" aria-label="Previous page" disabled aria-disabled="true"><!-- chevron-left --></button>
    </li>
    <li class="page-item active">
      <button class="page-link" aria-label="Page 1" aria-current="page">1</button>
    </li>
    <li class="page-item"><button class="page-link" aria-label="Page 2">2</button></li>
    <li class="page-item"><button class="page-link" aria-label="Page 3">3</button></li>

    <!-- Ellipsis: non-interactive -->
    <li class="page-item"><span class="page-link" aria-hidden="true">…</span></li>

    <li class="page-item"><button class="page-link" aria-label="Page 100">100</button></li>
    <li class="page-item">
      <button class="page-link" aria-label="Next page"><!-- chevron-right --></button>
    </li>
  </ul>
</nav>`}}},render:()=>r({size:"default",currentPage:1,totalPages:100})},u={name:"Both sizes",args:{currentPage:1,totalPages:100},parameters:{controls:{include:["currentPage","totalPages"]},docs:{description:{story:"Default (36×36px per CSS) and Small (32×32px inline override) side by side."},source:{language:"html",code:`<!-- Default: CSS .page-link size (36×36px) -->
<nav aria-label="Pagination"><ul class="pagination"><!-- ... --></ul></nav>

<!-- Small: inline override style="min-width:32px;height:32px;" on each .page-link -->
<nav aria-label="Pagination"><ul class="pagination"><!-- ... --></ul></nav>`}}},render:({currentPage:e,totalPages:a})=>`
    <div style="display:flex;flex-direction:column;gap:20px;padding:8px 0;">
      <div>
        <div style="font:700 10px/1.5 ui-monospace,monospace;color:#9ca3af;text-transform:uppercase;letter-spacing:.08em;margin-bottom:10px;">Default (36×36)</div>
        ${r({size:"default",currentPage:e,totalPages:a})}
      </div>
      <div>
        <div style="font:700 10px/1.5 ui-monospace,monospace;color:#9ca3af;text-transform:uppercase;letter-spacing:.08em;margin-bottom:10px;">Small (32×32)</div>
        ${r({size:"small",currentPage:e,totalPages:a})}
      </div>
    </div>
  `},m={name:"Button states — all variants",parameters:{controls:{disable:!0},docs:{description:{story:"\nAll button states from Figma node `9426:125610`.\n\n| CSS class | State | Description |\n|---|---|---|\n| `.page-item` | Default | normal page button |\n| `.page-item.active` | Selected | current page — primary bg, white text |\n| `.page-item.disabled` | Disabled | muted text, no pointer events |\n        ".trim()},source:{language:"html",code:`<!-- Default -->
<li class="page-item"><button class="page-link" aria-label="Page 1">1</button></li>

<!-- Active (selected page) -->
<li class="page-item active"><button class="page-link" aria-label="Page 1" aria-current="page">1</button></li>

<!-- Disabled -->
<li class="page-item disabled"><button class="page-link" aria-label="Previous page" disabled aria-disabled="true"><!-- chevron-left --></button></li>`}}},render:()=>{const e=(t,i)=>`
      <div style="display:flex;flex-direction:column;align-items:center;gap:6px;">
        <div style="font:700 10px/1 ui-monospace,monospace;color:#9ca3af;text-transform:uppercase;letter-spacing:.06em;white-space:nowrap;">${t}</div>
        <ul class="pagination">${i}</ul>
      </div>`,a=`<li class="page-item active"><button class="page-link" aria-label="Previous page">${V}</button></li>`,n=`<li class="page-item active"><button class="page-link" aria-label="Next page">${W}</button></li>`;return`
      <div style="padding:24px;display:flex;flex-wrap:wrap;gap:20px;align-items:flex-end;">
        ${e("Page · Default",v({page:1,active:!1}))}
        ${e("Page · Active",v({page:1,active:!0}))}
        ${e("Page · Disabled",v({page:1,disabled:!0}))}
        ${e("Prev · Default",h({disabled:!1}))}
        ${e("Prev · Selected",a)}
        ${e("Prev · Disabled",h({disabled:!0}))}
        ${e("Next · Default",x({disabled:!1}))}
        ${e("Next · Selected",n)}
        ${e("Next · Disabled",x({disabled:!0}))}
      </div>`}},b={name:"Showing indicator — both sizes",args:{size:"default"},parameters:{controls:{include:["size"]},docs:{description:{story:'\n"Showing X to Y of Z" indicator — Figma node `9703:152796`. Uses `.pagination-info` class.\n\nTypically placed to the left of the pagination strip to orient users within the result set.\n\n- Default: `var(--text-sm)` (14px) — label color `var(--color-text-secondary)`, numbers `var(--color-text-primary)` bold\n- Small: inline font-size override to `var(--text-xs)` (12px)\n        '.trim()},source:{language:"html",code:`<!-- Showing indicator -->
<p class="pagination-info">Showing <span>1</span> to <span>10</span> of <span>100</span></p>`}}},render:({size:e})=>`
    <div style="display:flex;flex-direction:column;gap:16px;padding:8px 0;">
      <div>
        <div style="font:700 10px/1.5 ui-monospace,monospace;color:#9ca3af;text-transform:uppercase;letter-spacing:.08em;margin-bottom:8px;">Default (14px)</div>
        ${P({size:"default",from:1,to:10,total:100})}
      </div>
      <div>
        <div style="font:700 10px/1.5 ui-monospace,monospace;color:#9ca3af;text-transform:uppercase;letter-spacing:.08em;margin-bottom:8px;">Small (12px)</div>
        ${P({size:"small",from:1,to:10,total:100})}
      </div>
    </div>
  `},f={name:"In context — with Showing indicator",args:{size:"default",currentPage:1,totalPages:10},parameters:{controls:{include:["size","currentPage","totalPages"]},docs:{description:{story:`
Typical table footer: **Showing** indicator (\`.pagination-info\`) on the left, **Pagination** (\`.pagination\`) on the right.

**✅ Do** — always pair Showing with Pagination so users know their position.
**✅ Do** — recalculate "Showing X to Y" from currentPage × pageSize.
        `.trim()},source:{language:"html",code:`<div style="display:flex;align-items:center;justify-content:space-between;padding:12px 16px;">
  <!-- Showing indicator (left) -->
  <p class="pagination-info">Showing <span>1</span> to <span>10</span> of <span>100</span></p>

  <!-- Pagination (right) -->
  <nav aria-label="Pagination">
    <ul class="pagination">
      <!-- prev · pages · next -->
    </ul>
  </nav>
</div>`}}},render:({size:e,currentPage:a,totalPages:n})=>{const i=(a-1)*10+1,l=Math.min(a*10,n*10),s=n*10;return`
      <div style="border:1px solid #e5e7eb;border-radius:8px;overflow:hidden;max-width:700px;">
        <div>
          ${[1,2,3,4,5].map(o=>`
            <div style="display:flex;gap:16px;padding:12px 16px;border-bottom:1px solid #f3f4f6;font:400 14px/1.5 inherit;color:#374151;">
              <span style="flex:2;">Row ${(a-1)*5+o} — example data</span>
              <span style="flex:1;color:#9ca3af;">Category ${o}</span>
              <span style="flex:1;color:#9ca3af;">${["Active","Pending","Done","Active","Review"][o-1]}</span>
            </div>
          `).join("")}
        </div>
        <div style="display:flex;align-items:center;justify-content:space-between;padding:12px 16px;background:#f9fafb;border-top:1px solid #e5e7eb;">
          ${P({size:e,from:i,to:l,total:s})}
          ${r({size:e,currentPage:a,totalPages:n})}
        </div>
      </div>`}};var w,S,$;c.parameters={...c.parameters,docs:{...(w=c.parameters)==null?void 0:w.docs,source:{originalSource:`{
  name: 'Interactive (Controls)',
  render: args => pagination(args),
  parameters: {
    docs: {
      description: {
        story: 'Use **Controls** to change the current page, total pages, and size. Set \`totalPages\` > 5 to see ellipsis + last page.'
      },
      source: {
        transform: (_src, storyCtx) => {
          const {
            size,
            currentPage,
            totalPages
          } = storyCtx.args;
          const small = size === 'small';
          const sizeAttr = small ? ' style="min-width:32px;height:32px;"' : '';
          return \`<nav aria-label="Pagination">
  <ul class="pagination">

    <!-- Prev — disabled when currentPage=1 -->
    <li class="page-item\${currentPage <= 1 ? ' disabled' : ''}">
      <button class="page-link" aria-label="Previous page"\${currentPage <= 1 ? ' disabled aria-disabled="true"' : ''}\${sizeAttr}>
        <!-- chevron-left 20×20 -->
      </button>
    </li>

    <!-- Page buttons — active page gets .page-item.active + aria-current="page" -->
    <li class="page-item active">
      <button class="page-link" aria-label="Page 1" aria-current="page"\${sizeAttr}>1</button>
    </li>
    <li class="page-item">
      <button class="page-link" aria-label="Page 2"\${sizeAttr}>2</button>
    </li>
    \${totalPages > 5 ? \`
    <!-- Ellipsis — non-interactive <span> -->
    <li class="page-item"><span class="page-link" aria-hidden="true"\${sizeAttr}>…</span></li>
    <li class="page-item">
      <button class="page-link" aria-label="Page \${totalPages}"\${sizeAttr}>\${totalPages}</button>
    </li>\` : ''}

    <!-- Next — disabled when currentPage=totalPages -->
    <li class="page-item\${currentPage >= totalPages ? ' disabled' : ''}">
      <button class="page-link" aria-label="Next page"\${currentPage >= totalPages ? ' disabled aria-disabled="true"' : ''}\${sizeAttr}>
        <!-- chevron-right 20×20 -->
      </button>
    </li>

  </ul>
</nav>\`;
        }
      }
    }
  }
}`,...($=(S=c.parameters)==null?void 0:S.docs)==null?void 0:$.source}}};var k,z,D;g.parameters={...g.parameters,docs:{...(k=g.parameters)==null?void 0:k.docs,source:{originalSource:`{
  name: 'Few pages — no ellipsis',
  parameters: {
    docs: {
      description: {
        story: \`
Pagination with ≤ 5 pages — all page numbers shown, no ellipsis. Figma: \\\`Size=Default, More pages=No\\\`.

**✅ Do** — hide the pagination entirely when there is only 1 page.
**❌ Don't** — show an ellipsis when all pages fit.
        \`.trim()
      },
      source: {
        language: 'html',
        code: \`<nav aria-label="Pagination">
  <ul class="pagination">
    <li class="page-item disabled">
      <button class="page-link" aria-label="Previous page" disabled aria-disabled="true"><!-- chevron-left --></button>
    </li>
    <li class="page-item active">
      <button class="page-link" aria-label="Page 1" aria-current="page">1</button>
    </li>
    <li class="page-item">
      <button class="page-link" aria-label="Page 2">2</button>
    </li>
    <li class="page-item">
      <button class="page-link" aria-label="Page 3">3</button>
    </li>
    <li class="page-item">
      <button class="page-link" aria-label="Next page"><!-- chevron-right --></button>
    </li>
  </ul>
</nav>\`
      }
    }
  },
  render: () => pagination({
    size: 'default',
    currentPage: 1,
    totalPages: 3
  })
}`,...(D=(z=g.parameters)==null?void 0:z.docs)==null?void 0:D.source}}};var A,N,C;d.parameters={...d.parameters,docs:{...(A=d.parameters)==null?void 0:A.docs,source:{originalSource:`{
  name: 'Many pages — with ellipsis',
  parameters: {
    docs: {
      description: {
        story: \`
Pagination with > 5 pages — shows first 3, an ellipsis, and the last page. Figma: \\\`More pages=Yes\\\`.

**✅ Do** — use a non-interactive \\\`<span class="page-link">\\\` for the ellipsis, not a \\\`<button>\\\`.
**❌ Don't** — truncate when ≤ 5 pages fit.
        \`.trim()
      },
      source: {
        language: 'html',
        code: \`<nav aria-label="Pagination">
  <ul class="pagination">
    <li class="page-item disabled">
      <button class="page-link" aria-label="Previous page" disabled aria-disabled="true"><!-- chevron-left --></button>
    </li>
    <li class="page-item active">
      <button class="page-link" aria-label="Page 1" aria-current="page">1</button>
    </li>
    <li class="page-item"><button class="page-link" aria-label="Page 2">2</button></li>
    <li class="page-item"><button class="page-link" aria-label="Page 3">3</button></li>

    <!-- Ellipsis: non-interactive -->
    <li class="page-item"><span class="page-link" aria-hidden="true">…</span></li>

    <li class="page-item"><button class="page-link" aria-label="Page 100">100</button></li>
    <li class="page-item">
      <button class="page-link" aria-label="Next page"><!-- chevron-right --></button>
    </li>
  </ul>
</nav>\`
      }
    }
  },
  render: () => pagination({
    size: 'default',
    currentPage: 1,
    totalPages: 100
  })
}`,...(C=(N=d.parameters)==null?void 0:N.docs)==null?void 0:C.source}}};var I,B,F;u.parameters={...u.parameters,docs:{...(I=u.parameters)==null?void 0:I.docs,source:{originalSource:`{
  name: 'Both sizes',
  args: {
    currentPage: 1,
    totalPages: 100
  },
  parameters: {
    controls: {
      include: ['currentPage', 'totalPages']
    },
    docs: {
      description: {
        story: 'Default (36×36px per CSS) and Small (32×32px inline override) side by side.'
      },
      source: {
        language: 'html',
        code: \`<!-- Default: CSS .page-link size (36×36px) -->
<nav aria-label="Pagination"><ul class="pagination"><!-- ... --></ul></nav>

<!-- Small: inline override style="min-width:32px;height:32px;" on each .page-link -->
<nav aria-label="Pagination"><ul class="pagination"><!-- ... --></ul></nav>\`
      }
    }
  },
  render: ({
    currentPage,
    totalPages
  }) => \`
    <div style="display:flex;flex-direction:column;gap:20px;padding:8px 0;">
      <div>
        <div style="font:700 10px/1.5 ui-monospace,monospace;color:#9ca3af;text-transform:uppercase;letter-spacing:.08em;margin-bottom:10px;">Default (36×36)</div>
        \${pagination({
    size: 'default',
    currentPage,
    totalPages
  })}
      </div>
      <div>
        <div style="font:700 10px/1.5 ui-monospace,monospace;color:#9ca3af;text-transform:uppercase;letter-spacing:.08em;margin-bottom:10px;">Small (32×32)</div>
        \${pagination({
    size: 'small',
    currentPage,
    totalPages
  })}
      </div>
    </div>
  \`
}`,...(F=(B=u.parameters)==null?void 0:B.docs)==null?void 0:F.source}}};var M,T,j;m.parameters={...m.parameters,docs:{...(M=m.parameters)==null?void 0:M.docs,source:{originalSource:`{
  name: 'Button states — all variants',
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      description: {
        story: \`
All button states from Figma node \\\`9426:125610\\\`.

| CSS class | State | Description |
|---|---|---|
| \\\`.page-item\\\` | Default | normal page button |
| \\\`.page-item.active\\\` | Selected | current page — primary bg, white text |
| \\\`.page-item.disabled\\\` | Disabled | muted text, no pointer events |
        \`.trim()
      },
      source: {
        language: 'html',
        code: \`<!-- Default -->
<li class="page-item"><button class="page-link" aria-label="Page 1">1</button></li>

<!-- Active (selected page) -->
<li class="page-item active"><button class="page-link" aria-label="Page 1" aria-current="page">1</button></li>

<!-- Disabled -->
<li class="page-item disabled"><button class="page-link" aria-label="Previous page" disabled aria-disabled="true"><!-- chevron-left --></button></li>\`
      }
    }
  },
  render: () => {
    const labeled = (label, html) => \`
      <div style="display:flex;flex-direction:column;align-items:center;gap:6px;">
        <div style="font:700 10px/1 ui-monospace,monospace;color:#9ca3af;text-transform:uppercase;letter-spacing:.06em;white-space:nowrap;">\${label}</div>
        <ul class="pagination">\${html}</ul>
      </div>\`;

    // Selected prev/next: Figma Type=back/next, Hover/Selected=Yes → .page-item.active → bg:#f3f4f6, chevron color:#42389d
    const prevSelected = \`<li class="page-item active"><button class="page-link" aria-label="Previous page">\${chevronLeft}</button></li>\`;
    const nextSelected = \`<li class="page-item active"><button class="page-link" aria-label="Next page">\${chevronRight}</button></li>\`;
    return \`
      <div style="padding:24px;display:flex;flex-wrap:wrap;gap:20px;align-items:flex-end;">
        \${labeled('Page · Default', pageNumItem({
      page: 1,
      active: false
    }))}
        \${labeled('Page · Active', pageNumItem({
      page: 1,
      active: true
    }))}
        \${labeled('Page · Disabled', pageNumItem({
      page: 1,
      disabled: true
    }))}
        \${labeled('Prev · Default', prevItem({
      disabled: false
    }))}
        \${labeled('Prev · Selected', prevSelected)}
        \${labeled('Prev · Disabled', prevItem({
      disabled: true
    }))}
        \${labeled('Next · Default', nextItem({
      disabled: false
    }))}
        \${labeled('Next · Selected', nextSelected)}
        \${labeled('Next · Disabled', nextItem({
      disabled: true
    }))}
      </div>\`;
  }
}`,...(j=(T=m.parameters)==null?void 0:T.docs)==null?void 0:j.source}}};var L,R,Y;b.parameters={...b.parameters,docs:{...(L=b.parameters)==null?void 0:L.docs,source:{originalSource:`{
  name: 'Showing indicator — both sizes',
  args: {
    size: 'default'
  },
  parameters: {
    controls: {
      include: ['size']
    },
    docs: {
      description: {
        story: \`
"Showing X to Y of Z" indicator — Figma node \\\`9703:152796\\\`. Uses \\\`.pagination-info\\\` class.

Typically placed to the left of the pagination strip to orient users within the result set.

- Default: \\\`var(--text-sm)\\\` (14px) — label color \\\`var(--color-text-secondary)\\\`, numbers \\\`var(--color-text-primary)\\\` bold
- Small: inline font-size override to \\\`var(--text-xs)\\\` (12px)
        \`.trim()
      },
      source: {
        language: 'html',
        code: \`<!-- Showing indicator -->
<p class="pagination-info">Showing <span>1</span> to <span>10</span> of <span>100</span></p>\`
      }
    }
  },
  render: ({
    size
  }) => \`
    <div style="display:flex;flex-direction:column;gap:16px;padding:8px 0;">
      <div>
        <div style="font:700 10px/1.5 ui-monospace,monospace;color:#9ca3af;text-transform:uppercase;letter-spacing:.08em;margin-bottom:8px;">Default (14px)</div>
        \${showing({
    size: 'default',
    from: 1,
    to: 10,
    total: 100
  })}
      </div>
      <div>
        <div style="font:700 10px/1.5 ui-monospace,monospace;color:#9ca3af;text-transform:uppercase;letter-spacing:.08em;margin-bottom:8px;">Small (12px)</div>
        \${showing({
    size: 'small',
    from: 1,
    to: 10,
    total: 100
  })}
      </div>
    </div>
  \`
}`,...(Y=(R=b.parameters)==null?void 0:R.docs)==null?void 0:Y.source}}};var E,_,U;f.parameters={...f.parameters,docs:{...(E=f.parameters)==null?void 0:E.docs,source:{originalSource:`{
  name: 'In context — with Showing indicator',
  args: {
    size: 'default',
    currentPage: 1,
    totalPages: 10
  },
  parameters: {
    controls: {
      include: ['size', 'currentPage', 'totalPages']
    },
    docs: {
      description: {
        story: \`
Typical table footer: **Showing** indicator (\\\`.pagination-info\\\`) on the left, **Pagination** (\\\`.pagination\\\`) on the right.

**✅ Do** — always pair Showing with Pagination so users know their position.
**✅ Do** — recalculate "Showing X to Y" from currentPage × pageSize.
        \`.trim()
      },
      source: {
        language: 'html',
        code: \`<div style="display:flex;align-items:center;justify-content:space-between;padding:12px 16px;">
  <!-- Showing indicator (left) -->
  <p class="pagination-info">Showing <span>1</span> to <span>10</span> of <span>100</span></p>

  <!-- Pagination (right) -->
  <nav aria-label="Pagination">
    <ul class="pagination">
      <!-- prev · pages · next -->
    </ul>
  </nav>
</div>\`
      }
    }
  },
  render: ({
    size,
    currentPage,
    totalPages
  }) => {
    const pageSize = 10;
    const from = (currentPage - 1) * pageSize + 1;
    const to = Math.min(currentPage * pageSize, totalPages * pageSize);
    const total = totalPages * pageSize;
    return \`
      <div style="border:1px solid #e5e7eb;border-radius:8px;overflow:hidden;max-width:700px;">
        <div>
          \${[1, 2, 3, 4, 5].map(i => \`
            <div style="display:flex;gap:16px;padding:12px 16px;border-bottom:1px solid #f3f4f6;font:400 14px/1.5 inherit;color:#374151;">
              <span style="flex:2;">Row \${(currentPage - 1) * 5 + i} — example data</span>
              <span style="flex:1;color:#9ca3af;">Category \${i}</span>
              <span style="flex:1;color:#9ca3af;">\${['Active', 'Pending', 'Done', 'Active', 'Review'][i - 1]}</span>
            </div>
          \`).join('')}
        </div>
        <div style="display:flex;align-items:center;justify-content:space-between;padding:12px 16px;background:#f9fafb;border-top:1px solid #e5e7eb;">
          \${showing({
      size,
      from,
      to,
      total
    })}
          \${pagination({
      size,
      currentPage,
      totalPages
    })}
        </div>
      </div>\`;
  }
}`,...(U=(_=f.parameters)==null?void 0:_.docs)==null?void 0:U.source}}};const H=["Interactive","FewPages","ManyPages","BothSizes","ButtonStates","ShowingIndicator","InContext"];export{u as BothSizes,m as ButtonStates,g as FewPages,f as InContext,c as Interactive,d as ManyPages,b as ShowingIndicator,H as __namedExportsOrder,G as default};
