const at={title:"Iris Library/Button/Group",tags:["autodocs","stable"],parameters:{layout:"padded",backgrounds:{default:"light"},docs:{description:{component:`
Segmented button groups — joined segments sharing a single border line.

**CSS:** wrap \`.btn\` elements in \`.btn-group\`

\`\`\`html
<div class="btn-group">
  <button class="btn">Years</button>
  <button class="btn">Months</button>
  <button class="btn active">Days</button>
</div>
\`\`\`

Border-radius: **6px** on the container (not the standard 12px).
        `}}},argTypes:{seg1:{control:"text",description:"Label for segment 1 (leftmost).",table:{category:"Content",defaultValue:{summary:"Years"}}},seg2:{control:"text",description:"Label for segment 2 (middle).",table:{category:"Content",defaultValue:{summary:"Months"}}},seg3:{control:"text",description:"Label for segment 3 (rightmost).",table:{category:"Content",defaultValue:{summary:"Days"}}},primary:{control:"boolean",description:"Adds `btn-group--primary` — soft indigo active state for chart/visualisation toggles.",table:{category:"Appearance",defaultValue:{summary:!1}}},size:{control:"select",options:["default","sm"],description:"`sm` adds `btn-group--sm` — compact ~32px height for card/chart areas.",table:{category:"Appearance",defaultValue:{summary:"default"}}},activeIndex:{control:"select",options:[0,1,2],description:"Which segment (0-indexed) gets the `.active` class.",table:{category:"State",defaultValue:{summary:2}}}},args:{seg1:"Years",seg2:"Months",seg3:"Days",primary:!1,size:"default",activeIndex:2}},tt=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
  style="width:16px;height:16px;" aria-hidden="true">
  <path fill-rule="evenodd"
    d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4
    a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd"/>
</svg>`,nt=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
  style="width:16px;height:16px;" aria-hidden="true">
  <path fill-rule="evenodd"
    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4
    a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"/>
</svg>`,et=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
  style="width:16px;height:16px;" aria-hidden="true">
  <path fill-rule="evenodd"
    d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9
    10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414
    0l-3-3a1 1 0 010-1.414z" clip-rule="evenodd"/>
</svg>`,b=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
  style="width:16px;height:16px;" aria-hidden="true">
  <path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z"/>
</svg>`,d={name:"Interactive (Controls)",render:({seg1:n,seg2:t,seg3:e,activeIndex:s,primary:g,size:u})=>`<div class="${["btn-group",g&&"btn-group--primary",u==="sm"&&"btn-group--sm"].filter(Boolean).join(" ")}">
      <button class="btn${s===0?" active":""}">${n}</button>
      <button class="btn${s===1?" active":""}">${t}</button>
      <button class="btn${s===2?" active":""}">${e}</button>
    </div>`,parameters:{docs:{description:{story:"Configure all modifiers and content. Use **primary** + **size=sm** to match chart-area toggles."},source:{transform:(n,t)=>{const e=t.args,s=["btn-group",e.primary&&"btn-group--primary",e.size==="sm"&&"btn-group--sm"].filter(Boolean).join(" "),u=[e.seg1,e.seg2,e.seg3].map((m,st)=>`  <button class="btn${st===e.activeIndex?" active":""}">${m}</button>`).join(`
`);return`<div class="${s}">
${u}
</div>`}}}}},a={name:"Default — text segments (Years / Months / Days)",args:{activeIndex:2},parameters:{controls:{include:["activeIndex"]},docs:{description:{story:"Standard 3-segment text group. Use **activeIndex** control to highlight a different segment."},source:{code:`<div class="btn-group">
  <button class="btn">Years</button>
  <button class="btn">Months</button>
  <button class="btn active">Days</button>
</div>`,language:"html"}}},render:({activeIndex:n})=>`
    <div class="btn-group">
      <button class="btn${n===0?" active":""}">Years</button>
      <button class="btn${n===1?" active":""}">Months</button>
      <button class="btn${n===2?" active":""}">Days</button>
    </div>`},o={name:"Only Icon — prev / next",parameters:{controls:{disable:!0},docs:{description:{story:"Icon-only segments — common for pagination controls. Segments are square (40×40px)."},source:{code:`<div class="btn-group">
  <button class="btn" style="padding:9px;" aria-label="Previous"><!-- chevron-left --></button>
  <button class="btn" style="padding:9px;" aria-label="Next"><!-- chevron-right --></button>
</div>`,language:"html"}}},render:()=>`
    <div class="btn-group">
      <button class="btn" style="padding:9px;" aria-label="Previous">${tt}</button>
      <button class="btn" style="padding:9px;" aria-label="Next">${nt}</button>
    </div>`},r={name:"With stat — action + count",parameters:{controls:{disable:!0},docs:{description:{story:"Left segment: icon + label. Right segment: numeric count in muted style (`btn-group-stat-count`)."},source:{code:`<div class="btn-group">
  <button class="btn" style="gap:8px;padding:8px 16px;">
    <!-- download icon -->
    <span>Download</span>
  </button>
  <button class="btn" style="padding:8px 16px;">
    <span class="btn-group-stat-count">12k</span>
  </button>
</div>`,language:"html"}}},render:()=>`
    <div class="btn-group">
      <button class="btn" style="gap:8px;padding:8px 16px;">
        ${et}
        <span>Download</span>
      </button>
      <button class="btn" style="padding:8px 16px;">
        <span class="btn-group-stat-count">12k</span>
      </button>
    </div>`},i={name:"With dropdown — text + icon slot",parameters:{controls:{disable:!0},docs:{description:{story:"Common pattern: primary action text + secondary icon (save/bookmark). Right slot is icon-only square."},source:{code:`<div class="btn-group">
  <button class="btn" style="padding:8px 16px;">Save changes</button>
  <button class="btn" style="padding:8px 9px;" aria-label="Bookmark"><!-- bookmark icon --></button>
</div>`,language:"html"}}},render:()=>`
    <div style="display:flex;flex-direction:column;gap:12px;">
      <div>
        <p style="font:10px/1 600 sans-serif;text-transform:uppercase;letter-spacing:.1em;
                  color:#9CA3AF;margin:0 0 6px;">Default</p>
        <div class="btn-group">
          <button class="btn" style="padding:8px 16px;">Save changes</button>
          <button class="btn" style="padding:8px 9px;" aria-label="Bookmark">${b}</button>
        </div>
      </div>
      <div>
        <p style="font:10px/1 600 sans-serif;text-transform:uppercase;letter-spacing:.1em;
                  color:#9CA3AF;margin:0 0 6px;">Active (hover) state</p>
        <div class="btn-group">
          <button class="btn active" style="padding:8px 16px;">Save changes</button>
          <button class="btn active" style="padding:8px 9px;" aria-label="Bookmark">${b}</button>
        </div>
      </div>
    </div>`},l={name:"With tooltip",parameters:{controls:{disable:!0},docs:{description:{story:`
Tooltip appears above the active segment.
Figma specs: bg \`#111928\`, border-radius 4px, shadow-xs, arrow pointing down.
        `}}},render:()=>`
    <div style="display:flex;align-items:flex-end;gap:40px;padding-top:48px;">
      <div style="position:relative;display:inline-block;">
        <div style="
          position:absolute;bottom:calc(100% + 6px);left:50%;transform:translateX(-50%);
          background:#111928;color:#fff;font-size:12px;font-weight:500;
          padding:6px 12px;border-radius:4px;white-space:nowrap;
          box-shadow:0px 1px 2px rgba(0,0,0,0.08);pointer-events:none;">
          Tooltip on top
          <span style="
            position:absolute;top:100%;left:50%;transform:translateX(-50%);
            border:5px solid transparent;border-top-color:#111928;display:block;width:0;height:0;">
          </span>
        </div>
        <div class="btn-group">
          <button class="btn">Years</button>
          <button class="btn active">Months</button>
          <button class="btn">Days</button>
        </div>
      </div>
    </div>`},p={name:"Primary — chart & visualisation toggles",args:{size:"sm"},parameters:{controls:{include:["size"]},docs:{description:{story:`
Add \`btn-group--primary\` for the brand purple active state.
Add \`btn-group--sm\` for compact ~32px height — typical for chart-area toggles.
Modifiers are independent and composable.

**When to use primary:** toggle directly controls a chart — Daily/Cumulative, time-range pickers, KPI metric selectors.
**When to use sm:** toggle sits inside a card or chart area where full-size feels heavy.
**Default btn-group** (no modifiers) → filter bars, toolbars, table-mode toggles.

Use the **size** control below to compare sm vs default height across all examples.

\`\`\`html
<!-- chart toggle: compact + purple -->
<div class="btn-group btn-group--primary btn-group--sm">
  <button class="btn active">Daily</button>
  <button class="btn">Cumulative</button>
</div>
\`\`\`
        `}}},render:({size:n})=>{const t=n==="sm"?" btn-group--sm":"";return`
    <div style="display:flex;flex-direction:column;gap:24px;">

      <div>
        <p style="font:10px/1 600 sans-serif;text-transform:uppercase;letter-spacing:.1em;
                  color:#9CA3AF;margin:0 0 8px;">Chart mode toggle — primary${t?" + sm":""}</p>
        <div class="btn-group btn-group--primary${t}">
          <button class="btn active">Daily</button>
          <button class="btn">Cumulative</button>
        </div>
      </div>

      <div>
        <p style="font:10px/1 600 sans-serif;text-transform:uppercase;letter-spacing:.1em;
                  color:#9CA3AF;margin:0 0 8px;">Time-range picker — primary${t?" + sm":""} (5 segments)</p>
        <div class="btn-group btn-group--primary${t}">
          <button class="btn active">Entire month</button>
          <button class="btn">Week 1</button>
          <button class="btn">Week 2</button>
          <button class="btn">Week 3</button>
          <button class="btn">Week 4</button>
        </div>
      </div>

      <div>
        <p style="font:10px/1 600 sans-serif;text-transform:uppercase;letter-spacing:.1em;
                  color:#9CA3AF;margin:0 0 8px;">Default btn-group for comparison (grey)</p>
        <div class="btn-group${t}">
          <button class="btn active">Daily</button>
          <button class="btn">Cumulative</button>
        </div>
      </div>

    </div>`}},c={name:"All types — overview",parameters:{controls:{disable:!0},docs:{description:{story:"All group patterns in one view for quick QA comparison."}}},render:()=>`
    <div style="display:flex;flex-direction:column;gap:20px;">
      <div style="display:flex;align-items:center;gap:12px;">
        <span style="width:160px;font:11px/1 sans-serif;color:var(--color-text-secondary);">Default</span>
        <div class="btn-group">
          <button class="btn">Years</button>
          <button class="btn">Months</button>
          <button class="btn active">Days</button>
        </div>
      </div>
      <div style="display:flex;align-items:center;gap:12px;">
        <span style="width:160px;font:11px/1 sans-serif;color:var(--color-text-secondary);">Primary (chart toggle)</span>
        <div class="btn-group btn-group--primary">
          <button class="btn active">Daily</button>
          <button class="btn">Cumulative</button>
        </div>
      </div>
      <div style="display:flex;align-items:center;gap:12px;">
        <span style="width:160px;font:11px/1 sans-serif;color:var(--color-text-secondary);">Only Icon</span>
        <div class="btn-group">
          <button class="btn" style="padding:9px;" aria-label="Prev">${tt}</button>
          <button class="btn" style="padding:9px;" aria-label="Next">${nt}</button>
        </div>
      </div>
      <div style="display:flex;align-items:center;gap:12px;">
        <span style="width:160px;font:11px/1 sans-serif;color:var(--color-text-secondary);">With stat</span>
        <div class="btn-group">
          <button class="btn" style="gap:8px;padding:8px 16px;">${et}<span>Download</span></button>
          <button class="btn" style="padding:8px 16px;"><span class="btn-group-stat-count">12k</span></button>
        </div>
      </div>
      <div style="display:flex;align-items:center;gap:12px;">
        <span style="width:160px;font:11px/1 sans-serif;color:var(--color-text-secondary);">With dropdown</span>
        <div class="btn-group">
          <button class="btn" style="padding:8px 16px;">Save changes</button>
          <button class="btn" style="padding:8px 9px;" aria-label="Bookmark">${b}</button>
        </div>
      </div>
    </div>`};var v,x,y;d.parameters={...d.parameters,docs:{...(v=d.parameters)==null?void 0:v.docs,source:{originalSource:`{
  name: 'Interactive (Controls)',
  render: ({
    seg1,
    seg2,
    seg3,
    activeIndex,
    primary,
    size
  }) => {
    const cls = ['btn-group', primary && 'btn-group--primary', size === 'sm' && 'btn-group--sm'].filter(Boolean).join(' ');
    return \`<div class="\${cls}">
      <button class="btn\${activeIndex === 0 ? ' active' : ''}">\${seg1}</button>
      <button class="btn\${activeIndex === 1 ? ' active' : ''}">\${seg2}</button>
      <button class="btn\${activeIndex === 2 ? ' active' : ''}">\${seg3}</button>
    </div>\`;
  },
  parameters: {
    docs: {
      description: {
        story: 'Configure all modifiers and content. Use **primary** + **size=sm** to match chart-area toggles.'
      },
      source: {
        transform: (_src, storyCtx) => {
          const a = storyCtx.args;
          const cls = ['btn-group', a.primary && 'btn-group--primary', a.size === 'sm' && 'btn-group--sm'].filter(Boolean).join(' ');
          const segs = [a.seg1, a.seg2, a.seg3];
          const buttons = segs.map((seg, i) => \`  <button class="btn\${i === a.activeIndex ? ' active' : ''}">\${seg}</button>\`).join('\\n');
          return \`<div class="\${cls}">\\n\${buttons}\\n</div>\`;
        }
      }
    }
  }
}`,...(y=(x=d.parameters)==null?void 0:x.docs)==null?void 0:y.source}}};var h,f,w,$,k;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`{
  name: 'Default — text segments (Years / Months / Days)',
  args: {
    activeIndex: 2
  },
  parameters: {
    controls: {
      include: ['activeIndex']
    },
    docs: {
      description: {
        story: 'Standard 3-segment text group. Use **activeIndex** control to highlight a different segment.'
      },
      source: {
        code: \`<div class="btn-group">
  <button class="btn">Years</button>
  <button class="btn">Months</button>
  <button class="btn active">Days</button>
</div>\`,
        language: 'html'
      }
    }
  },
  render: ({
    activeIndex
  }) => \`
    <div class="btn-group">
      <button class="btn\${activeIndex === 0 ? ' active' : ''}">Years</button>
      <button class="btn\${activeIndex === 1 ? ' active' : ''}">Months</button>
      <button class="btn\${activeIndex === 2 ? ' active' : ''}">Days</button>
    </div>\`
}`,...(w=(f=a.parameters)==null?void 0:f.docs)==null?void 0:w.source},description:{story:"Default 3-segment text group.\nUse `activeIndex` control to change which segment is active.\nQA: Each segment is 40px tall. Active segment gets #f3f4f6 bg.",...(k=($=a.parameters)==null?void 0:$.docs)==null?void 0:k.description}}};var A,D,C,I,W;o.parameters={...o.parameters,docs:{...(A=o.parameters)==null?void 0:A.docs,source:{originalSource:`{
  name: 'Only Icon — prev / next',
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      description: {
        story: 'Icon-only segments — common for pagination controls. Segments are square (40×40px).'
      },
      source: {
        code: \`<div class="btn-group">
  <button class="btn" style="padding:9px;" aria-label="Previous"><!-- chevron-left --></button>
  <button class="btn" style="padding:9px;" aria-label="Next"><!-- chevron-right --></button>
</div>\`,
        language: 'html'
      }
    }
  },
  render: () => \`
    <div class="btn-group">
      <button class="btn" style="padding:9px;" aria-label="Previous">\${CHEVRON_LEFT}</button>
      <button class="btn" style="padding:9px;" aria-label="Next">\${CHEVRON_RIGHT}</button>
    </div>\`
}`,...(C=(D=o.parameters)==null?void 0:D.docs)==null?void 0:C.source},description:{story:`Icon-only 2-segment group (pagination prev/next).
QA: Segments are square, icon centered, 40×40px.`,...(W=(I=o.parameters)==null?void 0:I.docs)==null?void 0:W.description}}};var O,S,z,B,M;r.parameters={...r.parameters,docs:{...(O=r.parameters)==null?void 0:O.docs,source:{originalSource:`{
  name: 'With stat — action + count',
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      description: {
        story: 'Left segment: icon + label. Right segment: numeric count in muted style (\`btn-group-stat-count\`).'
      },
      source: {
        code: \`<div class="btn-group">
  <button class="btn" style="gap:8px;padding:8px 16px;">
    <!-- download icon -->
    <span>Download</span>
  </button>
  <button class="btn" style="padding:8px 16px;">
    <span class="btn-group-stat-count">12k</span>
  </button>
</div>\`,
        language: 'html'
      }
    }
  },
  render: () => \`
    <div class="btn-group">
      <button class="btn" style="gap:8px;padding:8px 16px;">
        \${DOWNLOAD_ICON}
        <span>Download</span>
      </button>
      <button class="btn" style="padding:8px 16px;">
        <span class="btn-group-stat-count">12k</span>
      </button>
    </div>\`
}`,...(z=(S=r.parameters)==null?void 0:S.docs)==null?void 0:z.source},description:{story:`With stat — left segment has icon+label, right segment shows a count.
QA: Right slot text is smaller, muted color (#6a7282). No pill around the count.`,...(M=(B=r.parameters)==null?void 0:B.docs)==null?void 0:M.description}}};var N,R,T,_,P;i.parameters={...i.parameters,docs:{...(N=i.parameters)==null?void 0:N.docs,source:{originalSource:`{
  name: 'With dropdown — text + icon slot',
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      description: {
        story: 'Common pattern: primary action text + secondary icon (save/bookmark). Right slot is icon-only square.'
      },
      source: {
        code: \`<div class="btn-group">
  <button class="btn" style="padding:8px 16px;">Save changes</button>
  <button class="btn" style="padding:8px 9px;" aria-label="Bookmark"><!-- bookmark icon --></button>
</div>\`,
        language: 'html'
      }
    }
  },
  render: () => \`
    <div style="display:flex;flex-direction:column;gap:12px;">
      <div>
        <p style="font:10px/1 600 sans-serif;text-transform:uppercase;letter-spacing:.1em;
                  color:#9CA3AF;margin:0 0 6px;">Default</p>
        <div class="btn-group">
          <button class="btn" style="padding:8px 16px;">Save changes</button>
          <button class="btn" style="padding:8px 9px;" aria-label="Bookmark">\${BOOKMARK_ICON}</button>
        </div>
      </div>
      <div>
        <p style="font:10px/1 600 sans-serif;text-transform:uppercase;letter-spacing:.1em;
                  color:#9CA3AF;margin:0 0 6px;">Active (hover) state</p>
        <div class="btn-group">
          <button class="btn active" style="padding:8px 16px;">Save changes</button>
          <button class="btn active" style="padding:8px 9px;" aria-label="Bookmark">\${BOOKMARK_ICON}</button>
        </div>
      </div>
    </div>\`
}`,...(T=(R=i.parameters)==null?void 0:R.docs)==null?void 0:T.source},description:{story:`With dropdown — text action on the left, icon action on the right.
QA: Right segment is icon-only square. Hover state darkens both independently.`,...(P=(_=i.parameters)==null?void 0:_.docs)==null?void 0:P.description}}};var L,F,E,V,Y;l.parameters={...l.parameters,docs:{...(L=l.parameters)==null?void 0:L.docs,source:{originalSource:`{
  name: 'With tooltip',
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      description: {
        story: \`
Tooltip appears above the active segment.
Figma specs: bg \\\`#111928\\\`, border-radius 4px, shadow-xs, arrow pointing down.
        \`
      }
    }
  },
  render: () => \`
    <div style="display:flex;align-items:flex-end;gap:40px;padding-top:48px;">
      <div style="position:relative;display:inline-block;">
        <div style="
          position:absolute;bottom:calc(100% + 6px);left:50%;transform:translateX(-50%);
          background:#111928;color:#fff;font-size:12px;font-weight:500;
          padding:6px 12px;border-radius:4px;white-space:nowrap;
          box-shadow:0px 1px 2px rgba(0,0,0,0.08);pointer-events:none;">
          Tooltip on top
          <span style="
            position:absolute;top:100%;left:50%;transform:translateX(-50%);
            border:5px solid transparent;border-top-color:#111928;display:block;width:0;height:0;">
          </span>
        </div>
        <div class="btn-group">
          <button class="btn">Years</button>
          <button class="btn active">Months</button>
          <button class="btn">Days</button>
        </div>
      </div>
    </div>\`
}`,...(E=(F=l.parameters)==null?void 0:F.docs)==null?void 0:E.source},description:{story:`With tooltip — active segment triggers a tooltip positioned above.
QA: Tooltip bg = #111928, text white, 4px border-radius.
    Tooltip arrow points down toward the triggering segment.`,...(Y=(V=l.parameters)==null?void 0:V.docs)==null?void 0:Y.description}}};var H,K,q,U,Q;p.parameters={...p.parameters,docs:{...(H=p.parameters)==null?void 0:H.docs,source:{originalSource:`{
  name: 'Primary — chart & visualisation toggles',
  args: {
    size: 'sm'
  },
  parameters: {
    controls: {
      include: ['size']
    },
    docs: {
      description: {
        story: \`
Add \\\`btn-group--primary\\\` for the brand purple active state.
Add \\\`btn-group--sm\\\` for compact ~32px height — typical for chart-area toggles.
Modifiers are independent and composable.

**When to use primary:** toggle directly controls a chart — Daily/Cumulative, time-range pickers, KPI metric selectors.
**When to use sm:** toggle sits inside a card or chart area where full-size feels heavy.
**Default btn-group** (no modifiers) → filter bars, toolbars, table-mode toggles.

Use the **size** control below to compare sm vs default height across all examples.

\\\`\\\`\\\`html
<!-- chart toggle: compact + purple -->
<div class="btn-group btn-group--primary btn-group--sm">
  <button class="btn active">Daily</button>
  <button class="btn">Cumulative</button>
</div>
\\\`\\\`\\\`
        \`
      }
    }
  },
  render: ({
    size
  }) => {
    const sm = size === 'sm' ? ' btn-group--sm' : '';
    return \`
    <div style="display:flex;flex-direction:column;gap:24px;">

      <div>
        <p style="font:10px/1 600 sans-serif;text-transform:uppercase;letter-spacing:.1em;
                  color:#9CA3AF;margin:0 0 8px;">Chart mode toggle — primary\${sm ? ' + sm' : ''}</p>
        <div class="btn-group btn-group--primary\${sm}">
          <button class="btn active">Daily</button>
          <button class="btn">Cumulative</button>
        </div>
      </div>

      <div>
        <p style="font:10px/1 600 sans-serif;text-transform:uppercase;letter-spacing:.1em;
                  color:#9CA3AF;margin:0 0 8px;">Time-range picker — primary\${sm ? ' + sm' : ''} (5 segments)</p>
        <div class="btn-group btn-group--primary\${sm}">
          <button class="btn active">Entire month</button>
          <button class="btn">Week 1</button>
          <button class="btn">Week 2</button>
          <button class="btn">Week 3</button>
          <button class="btn">Week 4</button>
        </div>
      </div>

      <div>
        <p style="font:10px/1 600 sans-serif;text-transform:uppercase;letter-spacing:.1em;
                  color:#9CA3AF;margin:0 0 8px;">Default btn-group for comparison (grey)</p>
        <div class="btn-group\${sm}">
          <button class="btn active">Daily</button>
          <button class="btn">Cumulative</button>
        </div>
      </div>

    </div>\`;
  }
}`,...(q=(K=p.parameters)==null?void 0:K.docs)==null?void 0:q.source},description:{story:`Primary modifier — for toggles attached to charts or data visualisations.
Active segment gets a soft indigo bg (#e5edff) with brand purple text (#42389d)
instead of the default grey — visually connects the control to the chart it drives.

Use cases: Daily/Cumulative chart mode, Entire month/Week pickers, KPI metric toggles.
Plain UI filters and toolbars should use the default btn-group (grey active).`,...(Q=(U=p.parameters)==null?void 0:U.docs)==null?void 0:Q.description}}};var j,G,X,J,Z;c.parameters={...c.parameters,docs:{...(j=c.parameters)==null?void 0:j.docs,source:{originalSource:`{
  name: 'All types — overview',
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      description: {
        story: 'All group patterns in one view for quick QA comparison.'
      }
    }
  },
  render: () => \`
    <div style="display:flex;flex-direction:column;gap:20px;">
      <div style="display:flex;align-items:center;gap:12px;">
        <span style="width:160px;font:11px/1 sans-serif;color:var(--color-text-secondary);">Default</span>
        <div class="btn-group">
          <button class="btn">Years</button>
          <button class="btn">Months</button>
          <button class="btn active">Days</button>
        </div>
      </div>
      <div style="display:flex;align-items:center;gap:12px;">
        <span style="width:160px;font:11px/1 sans-serif;color:var(--color-text-secondary);">Primary (chart toggle)</span>
        <div class="btn-group btn-group--primary">
          <button class="btn active">Daily</button>
          <button class="btn">Cumulative</button>
        </div>
      </div>
      <div style="display:flex;align-items:center;gap:12px;">
        <span style="width:160px;font:11px/1 sans-serif;color:var(--color-text-secondary);">Only Icon</span>
        <div class="btn-group">
          <button class="btn" style="padding:9px;" aria-label="Prev">\${CHEVRON_LEFT}</button>
          <button class="btn" style="padding:9px;" aria-label="Next">\${CHEVRON_RIGHT}</button>
        </div>
      </div>
      <div style="display:flex;align-items:center;gap:12px;">
        <span style="width:160px;font:11px/1 sans-serif;color:var(--color-text-secondary);">With stat</span>
        <div class="btn-group">
          <button class="btn" style="gap:8px;padding:8px 16px;">\${DOWNLOAD_ICON}<span>Download</span></button>
          <button class="btn" style="padding:8px 16px;"><span class="btn-group-stat-count">12k</span></button>
        </div>
      </div>
      <div style="display:flex;align-items:center;gap:12px;">
        <span style="width:160px;font:11px/1 sans-serif;color:var(--color-text-secondary);">With dropdown</span>
        <div class="btn-group">
          <button class="btn" style="padding:8px 16px;">Save changes</button>
          <button class="btn" style="padding:8px 9px;" aria-label="Bookmark">\${BOOKMARK_ICON}</button>
        </div>
      </div>
    </div>\`
}`,...(X=(G=c.parameters)==null?void 0:G.docs)==null?void 0:X.source},description:{story:"All group types side by side for a quick QA scan.",...(Z=(J=c.parameters)==null?void 0:J.docs)==null?void 0:Z.description}}};const ot=["Interactive","Default","OnlyIcon","WithStat","WithDropdown","WithTooltip","Primary","AllTypes"];export{c as AllTypes,a as Default,d as Interactive,o as OnlyIcon,p as Primary,i as WithDropdown,r as WithStat,l as WithTooltip,ot as __namedExportsOrder,at as default};
