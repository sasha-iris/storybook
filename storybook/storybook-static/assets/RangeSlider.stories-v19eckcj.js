const e={track:"#e5e7eb",fill:"#155dfc",thumb:"#ffffff",thumbBorder:"#e5e7eb",tooltip:"#111928",tooltipText:"#ffffff",label:"#6b7280"},V=(t="#6b7280")=>`<svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M11 5 6 9H2v6h4l5 4V5Z" fill="${t}"/><path d="M22 9l-6 6M16 9l6 6" stroke="${t}" stroke-width="1.5" stroke-linecap="round"/></svg>`,B=(t="#6b7280")=>`<svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M11 5 6 9H2v6h4l5 4V5Z" fill="${t}"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07M19.07 4.93a10 10 0 0 1 0 14.14" stroke="${t}" stroke-width="1.5" stroke-linecap="round"/></svg>`;function b({fillPct:t=35,thumbPos:a=null,secondThumbPos:n=null,tooltip:l=!1,labels:p=[],trackWidth:s=580,isVolume:f=!1}){const u=Math.round(t/100*s),c=n===null?`<div style="position:absolute;left:0;top:0;height:8px;width:${u}px;background:${e.fill};border-radius:4px 0 0 4px;"></div>`:"",o=a!==null?a:u-11,h=a!==null||n===null?`<div style="position:absolute;top:50%;left:${o}px;transform:translate(-50%,-50%);
        width:22px;height:22px;border-radius:50%;background:${e.thumb};border:2px solid ${e.thumbBorder};
        box-shadow:0 1px 4px rgba(0,0,0,0.12);cursor:pointer;"></div>`:"",m=l&&a!==null?`<div style="position:absolute;bottom:26px;left:${o}px;transform:translateX(-50%);
        padding:4px 10px;background:${e.tooltip};border-radius:6px;white-space:nowrap;">
        <span style="font-size:12px;font-weight:500;color:${e.tooltipText};font-family:inherit;">35%</span>
        <div style="position:absolute;bottom:-4px;left:50%;transform:translateX(-50%);
          width:8px;height:4px;background:${e.tooltip};clip-path:polygon(0 0,100% 0,50% 100%);"></div>
      </div>`:"",r=n!==null?n:null,d=r!==null?`<div style="position:absolute;top:50%;left:${r}px;transform:translate(-50%,-50%);
        width:22px;height:22px;border-radius:50%;background:${e.thumb};border:2px solid ${e.thumbBorder};
        box-shadow:0 1px 4px rgba(0,0,0,0.12);cursor:pointer;"></div>`:"",i=r!==null?`<div style="position:absolute;top:0;left:${o}px;width:${r-o}px;height:8px;background:${e.fill};"></div>`:"",v=p.length>0?`<div style="display:flex;justify-content:space-between;margin-top:8px;">
        ${p.map(E=>`<span style="font-size:14px;font-weight:500;color:${e.label};font-family:inherit;">${E}</span>`).join("")}
      </div>`:"";return`<div style="position:relative;height:40px;display:flex;align-items:center;">
    <div style="position:relative;width:${s}px;height:8px;background:${e.track};border-radius:4px;">
      ${c}
      ${i}
      ${m}
      ${h}
      ${d}
    </div>
  </div>${v}`}const T={range:{label:"Range — two thumbs",render:t=>b({fillPct:25,thumbPos:Math.round(t*.25),secondThumbPos:Math.round(t*.68),trackWidth:t})},value:{label:"Value — single thumb",render:t=>b({fillPct:35,thumbPos:Math.round(t*.35),trackWidth:t})},"with-data":{label:"With data labels",render:t=>b({fillPct:34,thumbPos:Math.round(t*.34),labels:["0","50","100","150"],trackWidth:t})},"with-tooltip":{label:"With tooltip",render:t=>b({fillPct:35,thumbPos:Math.round(t*.35),tooltip:!0,trackWidth:t})},volume:{label:"Volume control",render:()=>`<div style="display:flex;align-items:center;gap:12px;">
      ${V()}
      <div style="position:relative;flex:1;height:8px;background:#a4cafe;border-radius:4px;">
        <div style="position:absolute;left:0;top:0;height:8px;width:47%;background:${e.fill};border-radius:4px 0 0 4px;"></div>
        <div style="position:absolute;top:50%;left:47%;transform:translate(-50%,-50%);
          width:22px;height:22px;border-radius:50%;background:${e.thumb};border:2px solid ${e.thumbBorder};
          box-shadow:0 1px 4px rgba(0,0,0,0.12);cursor:pointer;"></div>
      </div>
      ${B()}
    </div>`}};function I(t){const{sliderType:a="value",value:n=35,min:l=0,max:p=100}=t,s=`
    appearance:none;-webkit-appearance:none;width:100%;height:8px;
    border-radius:4px;background:linear-gradient(to right,${e.fill} 0%,${e.fill} ${n}%,${e.track} ${n}%,${e.track} 100%);
    outline:none;cursor:pointer;
  `,f=`
    <style>
      .iris-range::-webkit-slider-thumb{appearance:none;-webkit-appearance:none;width:22px;height:22px;border-radius:50%;background:${e.thumb};border:2px solid ${e.thumbBorder};box-shadow:0 1px 4px rgba(0,0,0,.12);cursor:pointer;}
      .iris-range::-moz-range-thumb{width:22px;height:22px;border-radius:50%;background:${e.thumb};border:2px solid ${e.thumbBorder};box-shadow:0 1px 4px rgba(0,0,0,.12);cursor:pointer;}
    </style>`,u=a==="with-data"?`<div style="display:flex;justify-content:space-between;margin-top:6px;">
        ${["0","50","100","150"].map(r=>`<span style="font-size:14px;font-weight:500;color:${e.label};font-family:inherit;">${r}</span>`).join("")}
      </div>`:"",c="tip"+Math.random().toString(36).slice(2,7),o=a==="with-tooltip"?`<div style="text-align:right;margin-bottom:4px;">
        <span id="${c}" style="display:inline-block;padding:3px 10px;background:${e.tooltip};border-radius:6px;font-size:12px;font-weight:500;color:${e.tooltipText};font-family:inherit;">${n}%</span>
      </div>`:"",h=`this.style.background='linear-gradient(to right,${e.fill} 0%,${e.fill} '+this.value+'%,${e.track} '+this.value+'%,${e.track} 100%)'`,m=a==="with-tooltip"?`${h};document.getElementById('${c}').textContent=this.value+'%'`:h;if(a==="volume")return`${f}<div style="display:flex;align-items:center;gap:12px;font-family:inherit;">
      ${V()}
      <input type="range" min="0" max="100" value="${n}" class="iris-range" style="${s}" oninput="${m}" />
      ${B()}
    </div>`;if(a==="range"){const r=Math.max(0,n-20),d=Math.min(100,n+20),i="rng"+Math.random().toString(36).slice(2,7);return`${`
      <style>
        .${i}::-webkit-slider-thumb{
          appearance:none;-webkit-appearance:none;
          width:22px;height:22px;border-radius:50%;
          background:${e.thumb};border:2px solid ${e.thumbBorder};
          box-shadow:0 1px 4px rgba(0,0,0,.12);cursor:pointer;
          pointer-events:auto;
        }
        .${i}::-moz-range-thumb{
          width:22px;height:22px;border-radius:50%;
          background:${e.thumb};border:2px solid ${e.thumbBorder};
          box-shadow:0 1px 4px rgba(0,0,0,.12);cursor:pointer;
        }
      </style>`}
    <div style="font-family:inherit;">
      <div style="display:flex;justify-content:space-between;margin-bottom:8px;font-size:12px;color:${e.label};font-family:inherit;">
        <span id="${i}-lo">Min: ${r}%</span><span id="${i}-hi">Max: ${d}%</span>
      </div>
      <div style="position:relative;height:22px;">
        <div style="position:absolute;left:0;right:0;height:8px;top:7px;background:${e.track};border-radius:4px;"></div>
        <div id="${i}-fill" style="position:absolute;height:8px;top:7px;background:${e.fill};border-radius:2px;left:${r}%;width:${d-r}%;"></div>
        <input id="${i}-a" type="range" min="0" max="100" value="${r}" class="${i}"
          style="position:absolute;width:100%;top:0;margin:0;padding:0;background:transparent;appearance:none;-webkit-appearance:none;outline:none;pointer-events:none;height:22px;">
        <input id="${i}-b" type="range" min="0" max="100" value="${d}" class="${i}"
          style="position:absolute;width:100%;top:0;margin:0;padding:0;background:transparent;appearance:none;-webkit-appearance:none;outline:none;pointer-events:none;height:22px;">
      </div>
    </div>
    <script>
    (function(){
      var a = document.getElementById('${i}-a');
      var b = document.getElementById('${i}-b');
      var fill = document.getElementById('${i}-fill');
      var lo = document.getElementById('${i}-lo');
      var hi = document.getElementById('${i}-hi');
      function upd(){
        var mn = Math.min(+a.value, +b.value);
        var mx = Math.max(+a.value, +b.value);
        fill.style.left = mn + '%';
        fill.style.width = (mx - mn) + '%';
        lo.textContent = 'Min: ' + mn + '%';
        hi.textContent = 'Max: ' + mx + '%';
      }
      a.addEventListener('input', upd);
      b.addEventListener('input', upd);
    })();
    <\/script>`}return`${f}<div style="font-family:inherit;">
    ${o}
    <input type="range" min="${l}" max="${p}" value="${n}" class="iris-range" style="${s}" oninput="${m}" />
    ${u}
  </div>`}const A={title:"Iris Library/Range Slider",tags:["autodocs","stable"],parameters:{docs:{description:{component:`
**Range Slider** lets users select a numeric value or range by dragging a thumb along a track. 5 types from Figma node 3284:22429.

**When to use**
- Price range filters (Range type)
- Volume / brightness controls (Volume type)
- Progress or severity rating (Value type)
- Precision input where step labels help (With data)

**When NOT to use**
- Precise numeric entry where a specific value matters → use a number **Input Field** instead
- Binary on/off → use **Toggle**
- More than 2 boundary values → use multiple separate inputs

**Anatomy**
- Track — \`height:8px\`, bg \`#e5e7eb\`, filled \`#155dfc\`
- Thumb — \`22×22px\` circle, bg \`#ffffff\`, border \`#e5e7eb\`
- Tooltip (optional) — \`bg:#111928\`, appears above thumb
- Data labels (optional) — tick values below track, \`color:#6b7280\`
- Volume variant — volume-off / volume-up icons flank the track, active fill \`#a4cafe→#155dfc\`
        `}}},argTypes:{sliderType:{control:"select",options:Object.keys(T),description:"Slider variant. `range`=two thumbs; `value`=single; `with-data`=tick labels; `with-tooltip`=tooltip on thumb; `volume`=icon flanks.",table:{category:"Appearance",defaultValue:{summary:"value"}}},value:{control:{type:"range",min:0,max:100,step:1},description:"Current value (0–100). Drives the filled track width and tooltip display.",table:{category:"Content",defaultValue:{summary:35}}},min:{control:"number",description:"Minimum value. Affects the accessible `min` attribute. ARIA: `aria-valuemin`.",table:{category:"Content",defaultValue:{summary:0}}},max:{control:"number",description:"Maximum value. Affects the accessible `max` attribute. ARIA: `aria-valuemax`.",table:{category:"Content",defaultValue:{summary:100}}}},args:{sliderType:"value",value:35,min:0,max:100}},g={name:"Interactive (Controls)",render:t=>`<div style="max-width:580px;padding:16px 0;font-family:inherit;">${I(t)}</div>`,parameters:{docs:{source:{transform:(t,a)=>{const{value:n=35}=a.args;return`<input
  type="range"
  min="0"
  max="100"
  value="${n}"
  aria-label="Slider"
  style="
    appearance:none;
    width:100%;
    height:8px;
    border-radius:4px;
    background:linear-gradient(to right,#155dfc 0%,#155dfc ${n}%,#e5e7eb ${n}%,#e5e7eb 100%);
    outline:none;cursor:pointer;
  "
/>`}}}}},x={name:"All types",args:{},parameters:{controls:{disable:!0},docs:{description:{story:`All 5 slider types rendered at full width for visual comparison.

✅ **Range** — always label both min and max values so users understand the boundaries
✅ **With tooltip** — use when the exact value is important (price filter, font size)
✅ **Volume** — icon flanks are mandatory; don't omit them in audio/media contexts
❌ Don't use the **Range** type for a single boundary — use **Value** instead`},source:{code:`<!-- Single value slider -->
<input type="range" min="0" max="100" value="35"
  style="
    appearance:none;width:100%;height:8px;border-radius:4px;
    background:linear-gradient(to right,#155dfc 0%,#155dfc 35%,#e5e7eb 35%,#e5e7eb 100%);
  "
/>

<!-- Range slider (two inputs stacked) -->
<input type="range" min="0" max="100" value="15" style="...fill 15%..." />
<input type="range" min="0" max="100" value="68" style="...fill 68%..." />`}}},render:()=>`<div style="display:flex;flex-direction:column;gap:28px;max-width:580px;font-family:inherit;padding:8px 0;">
      ${Object.entries(T).map(([a,{label:n,render:l}])=>`<div>
          <div style="font-size:11px;color:#6b7280;margin-bottom:8px;font-family:inherit;">${n}</div>
          <div style="padding:4px 0;">${l(500)}</div>
        </div>`).join("")}
    </div>`};var y,$,w;g.parameters={...g.parameters,docs:{...(y=g.parameters)==null?void 0:y.docs,source:{originalSource:`{
  name: 'Interactive (Controls)',
  render: args => \`<div style="max-width:580px;padding:16px 0;font-family:inherit;">\${nativeSlider(args)}</div>\`,
  parameters: {
    docs: {
      source: {
        transform: (_src, ctx) => {
          const {
            value = 35
          } = ctx.args;
          return \`<input
  type="range"
  min="0"
  max="100"
  value="\${value}"
  aria-label="Slider"
  style="
    appearance:none;
    width:100%;
    height:8px;
    border-radius:4px;
    background:linear-gradient(to right,#155dfc 0%,#155dfc \${value}%,#e5e7eb \${value}%,#e5e7eb 100%);
    outline:none;cursor:pointer;
  "
/>\`;
        }
      }
    }
  }
}`,...(w=($=g.parameters)==null?void 0:$.docs)==null?void 0:w.source}}};var k,M,S;x.parameters={...x.parameters,docs:{...(k=x.parameters)==null?void 0:k.docs,source:{originalSource:`{
  name: 'All types',
  args: {},
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      description: {
        story: \`All 5 slider types rendered at full width for visual comparison.

✅ **Range** — always label both min and max values so users understand the boundaries
✅ **With tooltip** — use when the exact value is important (price filter, font size)
✅ **Volume** — icon flanks are mandatory; don't omit them in audio/media contexts
❌ Don't use the **Range** type for a single boundary — use **Value** instead\`
      },
      source: {
        code: \`<!-- Single value slider -->
<input type="range" min="0" max="100" value="35"
  style="
    appearance:none;width:100%;height:8px;border-radius:4px;
    background:linear-gradient(to right,#155dfc 0%,#155dfc 35%,#e5e7eb 35%,#e5e7eb 100%);
  "
/>

<!-- Range slider (two inputs stacked) -->
<input type="range" min="0" max="100" value="15" style="...fill 15%..." />
<input type="range" min="0" max="100" value="68" style="...fill 68%..." />\`
      }
    }
  },
  render: () => {
    const tw = 500;
    return \`<div style="display:flex;flex-direction:column;gap:28px;max-width:580px;font-family:inherit;padding:8px 0;">
      \${Object.entries(TYPES).map(([key, {
      label,
      render
    }]) => \`<div>
          <div style="font-size:11px;color:#6b7280;margin-bottom:8px;font-family:inherit;">\${label}</div>
          <div style="padding:4px 0;">\${render(tw)}</div>
        </div>\`).join('')}
    </div>\`;
  }
}`,...(S=(M=x.parameters)==null?void 0:M.docs)==null?void 0:S.source}}};const R=["Interactive","AllTypes"];export{x as AllTypes,g as Interactive,R as __namedExportsOrder,A as default};
