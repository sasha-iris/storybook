const f='<svg width="44" height="31" viewBox="0 0 44 31" fill="none" opacity="0.35"><circle cx="7" cy="8" r="4" fill="#6b7280"/><path d="M0 31 L14 12 L27 24 L35 15 L44 31 Z" fill="#6b7280"/></svg>';function t(e,i=""){return`class="skeleton" style="${e?"":"animation:none;"}${i}"`}function n(e,i=""){return`class="skeleton" style="background:#d1d5db;${e?"":"animation:none;"}${i}"`}function l(e,i=""){return`class="skeleton-avatar" style="${e?"":"animation:none;"}${i}"`}function k(e,i=""){return`class="skeleton-image" style="background:#d1d5db;${e?"":"animation:none;"}${i}"`}function w({animated:e}){return`
<div style="width:384px;padding:16px;background:var(--color-bg-surface);border-radius:8px;box-shadow:0 1px 3px rgba(0,0,0,.1);">
  <div ${k(e,"height:95px;border-radius:8px;margin-bottom:16px;display:flex;align-items:center;justify-content:center;")}>
    ${f}
  </div>
  <div style="margin-bottom:14px;">
    <div ${n(e,"height:8px;border-radius:20px;margin-bottom:10px;")}></div>
    <div style="display:flex;flex-direction:column;gap:8px;">
      <div ${t(e,"height:8px;border-radius:12px;")}></div>
      <div ${t(e,"height:8px;border-radius:12px;width:88%;")}></div>
      <div ${t(e,"height:8px;border-radius:12px;width:75%;")}></div>
      <div ${t(e,"height:8px;border-radius:12px;width:60%;")}></div>
    </div>
  </div>
  <div style="display:flex;align-items:center;gap:8px;">
    <div ${l(e,"width:26px;height:26px;flex-shrink:0;")}></div>
    <div>
      <div ${t(e,"width:69px;height:8px;border-radius:6px;margin-bottom:4px;")}></div>
      <div ${t(e,"width:90px;height:6px;border-radius:6px;")}></div>
    </div>
  </div>
</div>`}function I({animated:e}){return`
<div style="width:600px;padding:16px;background:var(--color-bg-surface);border-radius:8px;box-shadow:0 1px 3px rgba(0,0,0,.1);display:flex;gap:24px;align-items:flex-start;">
  <div ${k(e,"width:224px;height:148px;flex-shrink:0;display:flex;align-items:center;justify-content:center;")}>
    ${f}
  </div>
  <div style="flex:1;">
    <div ${t(e,"width:147px;height:9px;border-radius:15px;margin-bottom:14px;")}></div>
    <div style="display:flex;flex-direction:column;gap:8px;">
      <div ${t(e,"height:6px;border-radius:12px;width:88%;")}></div>
      <div ${t(e,"height:6px;border-radius:12px;width:100%;")}></div>
      <div ${t(e,"height:6px;border-radius:12px;width:74%;")}></div>
      <div ${t(e,"height:6px;border-radius:12px;width:39%;")}></div>
    </div>
  </div>
</div>`}function A({animated:e}){return`
<div style="width:640px;padding:16px;background:var(--color-bg-surface);border-radius:8px;box-shadow:0 1px 3px rgba(0,0,0,.1);">
  <div style="margin-bottom:14px;">
    <div ${n(e,"width:396px;height:9px;border-radius:15px;margin-bottom:8px;")}></div>
    <div ${n(e,"width:246px;height:9px;border-radius:15px;")}></div>
  </div>
  <div style="display:flex;align-items:center;justify-content:space-between;">
    <div style="display:flex;align-items:center;gap:6px;">
      <div ${l(e,"width:16px;height:16px;flex-shrink:0;")}></div>
      <div ${t(e,"width:54px;height:5px;border-radius:6px;")}></div>
    </div>
    <div ${t(e,"width:38px;height:4px;border-radius:6px;")}></div>
  </div>
</div>`}function C({animated:e}){const i=[70,85,76,92,68],r=[50,62,55,48,60];return`
<div style="width:300px;background:var(--color-bg-surface);border-radius:8px;box-shadow:0 1px 3px rgba(0,0,0,.1);padding:0 16px;">
  ${i.map((T,p)=>`
    <div style="display:flex;align-items:center;justify-content:space-between;height:40px;${p<4?"border-bottom:1px solid var(--color-bg-muted);":""}">
      <div style="display:flex;align-items:center;gap:8px;">
        <div ${l(e,"width:32px;height:32px;flex-shrink:0;")}></div>
        <div>
          <div ${n(e,`width:${T}px;height:8px;border-radius:6px;margin-bottom:4px;`)}></div>
          <div ${t(e,`width:${r[p]}px;height:6px;border-radius:6px;`)}></div>
        </div>
      </div>
      <div ${t(e,"width:20px;height:5px;border-radius:4px;")}></div>
    </div>`).join("")}
</div>`}function W({animated:e}){return`
<div style="width:640px;padding:16px;background:var(--color-bg-surface);border-radius:8px;box-shadow:0 1px 3px rgba(0,0,0,.1);">
  <div style="display:flex;flex-direction:column;gap:16px;">
    <div ${n(e,"height:8px;border-radius:6px;")}></div>
    <div ${n(e,"height:8px;border-radius:6px;width:371px;")}></div>
    <div style="display:flex;gap:8px;">
      <div ${n(e,"flex:1;height:8px;border-radius:6px;")}></div>
      <div ${t(e,"flex:1;height:8px;border-radius:6px;")}></div>
      <div ${n(e,"flex:1;height:8px;border-radius:6px;")}></div>
    </div>
    <div ${n(e,"height:8px;border-radius:6px;width:610px;")}></div>
    <div ${n(e,"height:8px;border-radius:6px;width:432px;")}></div>
    <div style="display:flex;gap:8px;">
      <div ${n(e,"flex:1;height:8px;border-radius:6px;")}></div>
      <div ${t(e,"flex:1;height:8px;border-radius:6px;")}></div>
      <div ${n(e,"flex:1;height:8px;border-radius:6px;")}></div>
    </div>
    <div ${n(e,"height:8px;border-radius:6px;width:294px;")}></div>
  </div>
</div>`}function D({animated:e}){const i=Array(7).fill(null).map(()=>`<div ${t(e,"width:17px;height:229px;border-radius:2px;")}></div>`).join("");return`
<div style="width:300px;padding:16px;background:var(--color-bg-surface);border-radius:4px;box-shadow:0 1px 3px rgba(0,0,0,.1);">
  <div style="margin-bottom:16px;">
    <div ${n(e,"width:119px;height:8px;border-radius:2px;")}></div>
    <div ${t(e,"width:79px;height:6px;border-radius:2px;margin-top:6px;")}></div>
  </div>
  <div style="display:flex;gap:24px;align-items:flex-end;">
    ${i}
  </div>
</div>`}const $={"card-image":w,"image-text":I,text:A,list:C,"simple-text":W,widget:D};function S(e){return($[e.type]||w)(e)}const L={title:"Iris Library/Skeleton",tags:["autodocs","stable"],parameters:{docs:{description:{component:`
**Skeleton** renders a low-fidelity placeholder that mirrors the shape of content while it loads.

**When to use**
- While async data is being fetched (API calls, lazy imports)
- When the exact shape of the incoming content is known
- To reduce perceived latency — users see structure immediately

**When NOT to use**
- Short waits (< 300 ms) → use a spinner instead
- Unknown content shape → use a generic full-area spinner
- Error or empty states → use a dedicated empty-state component

**Anatomy**
Skeleton blocks come in two weights: \`#d1d5db\` (darker, used for headings and image areas)
and \`#e5e7eb\` (lighter, used for body text). Both support an optional shimmer animation.
The \`animated\` prop should be disabled when \`prefers-reduced-motion: reduce\` is detected.
        `}}},argTypes:{type:{control:"select",options:["card-image","image-text","text","list","simple-text","widget"],description:"Layout pattern to render. Each type mirrors a real UI pattern:\n`card-image` — blog/content card with image header;\n`image-text` — media object (image left, text right);\n`text` — article header with author row;\n`list` — data list with avatar + metadata rows;\n`simple-text` — paragraph block with 7 text rows;\n`widget` — dashboard widget with bar chart.",table:{category:"Appearance",defaultValue:{summary:"card-image"}}},animated:{control:"boolean",description:"Enables the left-to-right shimmer animation. **Disable** when `prefers-reduced-motion: reduce` is active — the WCAG 2.1 AA guideline requires no animation for users who request it.",table:{category:"State",defaultValue:{summary:!0}}}},args:{type:"card-image",animated:!0}},a={name:"Interactive (Controls)",render:e=>S(e),parameters:{docs:{description:{story:"Use **Controls** to switch between skeleton layouts and toggle the shimmer animation."},source:{transform:(e,i)=>{const{type:r,animated:s}=i.args;return`<!-- Skeleton loader: ${r} -->
<div class="skeleton skeleton--${r}${s?"":" skeleton--static"}">
  <!-- Replace with real content once data is loaded -->
</div>`}}}}},d={name:"All types",args:{animated:!0},parameters:{controls:{include:["animated"]},docs:{description:{story:`All six skeleton layout types. Toggle **animated** to preview the static (no-motion) state.

**✅ Do** — match the skeleton layout to the actual content shape that will replace it.
**❌ Don't** — use a generic rectangle when the content shape is known — it increases layout shift.
**❌ Don't** — leave skeletons visible after data loads; always replace them immediately.`},source:{code:`<!-- Card + Image skeleton -->
<div class="skeleton skeleton--card-image"> … </div>

<!-- Image + Text skeleton -->
<div class="skeleton skeleton--image-text"> … </div>

<!-- Text skeleton -->
<div class="skeleton skeleton--text"> … </div>

<!-- List skeleton (5 rows) -->
<div class="skeleton skeleton--list"> … </div>

<!-- Simple text skeleton (7 rows) -->
<div class="skeleton skeleton--simple-text"> … </div>

<!-- Widget (bar chart) skeleton -->
<div class="skeleton skeleton--widget"> … </div>`,language:"html"}}},render:({animated:e})=>{const i=["card-image","image-text","text","list","simple-text","widget"],r={"card-image":"Card + Image","image-text":"Image + Text",text:"Text",list:"List","simple-text":"Simple text",widget:"Widget"};return`
<div style="display:flex;flex-direction:column;gap:32px;padding:24px;background:var(--color-bg-default);">
  ${i.map(s=>`
    <div>
      <div style="font:var(--font-medium) 11px/1 inherit;color:var(--color-text-secondary);text-transform:uppercase;letter-spacing:.08em;margin-bottom:10px;">${r[s]}</div>
      ${$[s]({animated:e})}
    </div>`).join("")}
</div>`}},o={name:"Static — no animation",args:{animated:!1},parameters:{controls:{include:["type"]},docs:{description:{story:"Skeleton with animation disabled — for `prefers-reduced-motion: reduce` users.\n\n**✅ Do** — detect `prefers-reduced-motion` via a media query and pass `animated={false}` when active.\n**❌ Don't** — rely on CSS alone to disable animation; the prop must also stop JS-driven loops."},source:{code:`<!-- Check for reduced motion preference -->
<script>
  const animated = !window.matchMedia('(prefers-reduced-motion: reduce)').matches;
<\/script>

<!-- Pass animated=false when reduced motion is preferred -->
<div class="skeleton skeleton--card-image skeleton--static"> … </div>`,language:"html"}}},render:({type:e})=>S({type:e,animated:!1})};var c,x,h;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  name: 'Interactive (Controls)',
  render: args => skeleton(args),
  parameters: {
    docs: {
      description: {
        story: 'Use **Controls** to switch between skeleton layouts and toggle the shimmer animation.'
      },
      source: {
        transform: (_src, ctx) => {
          const {
            type,
            animated
          } = ctx.args;
          return \`<!-- Skeleton loader: \${type} -->
<div class="skeleton skeleton--\${type}\${animated ? '' : ' skeleton--static'}">
  <!-- Replace with real content once data is loaded -->
</div>\`;
        }
      }
    }
  }
}`,...(h=(x=a.parameters)==null?void 0:x.docs)==null?void 0:h.source}}};var u,m,g;d.parameters={...d.parameters,docs:{...(u=d.parameters)==null?void 0:u.docs,source:{originalSource:`{
  name: 'All types',
  args: {
    animated: true
  },
  parameters: {
    controls: {
      include: ['animated']
    },
    docs: {
      description: {
        story: \`All six skeleton layout types. Toggle **animated** to preview the static (no-motion) state.

**✅ Do** — match the skeleton layout to the actual content shape that will replace it.
**❌ Don't** — use a generic rectangle when the content shape is known — it increases layout shift.
**❌ Don't** — leave skeletons visible after data loads; always replace them immediately.\`
      },
      source: {
        code: \`<!-- Card + Image skeleton -->
<div class="skeleton skeleton--card-image"> … </div>

<!-- Image + Text skeleton -->
<div class="skeleton skeleton--image-text"> … </div>

<!-- Text skeleton -->
<div class="skeleton skeleton--text"> … </div>

<!-- List skeleton (5 rows) -->
<div class="skeleton skeleton--list"> … </div>

<!-- Simple text skeleton (7 rows) -->
<div class="skeleton skeleton--simple-text"> … </div>

<!-- Widget (bar chart) skeleton -->
<div class="skeleton skeleton--widget"> … </div>\`,
        language: 'html'
      }
    }
  },
  render: ({
    animated
  }) => {
    const types = ['card-image', 'image-text', 'text', 'list', 'simple-text', 'widget'];
    const labels = {
      'card-image': 'Card + Image',
      'image-text': 'Image + Text',
      'text': 'Text',
      'list': 'List',
      'simple-text': 'Simple text',
      'widget': 'Widget'
    };
    return \`
<div style="display:flex;flex-direction:column;gap:32px;padding:24px;background:var(--color-bg-default);">
  \${types.map(type => \`
    <div>
      <div style="font:var(--font-medium) 11px/1 inherit;color:var(--color-text-secondary);text-transform:uppercase;letter-spacing:.08em;margin-bottom:10px;">\${labels[type]}</div>
      \${TYPE_MAP[type]({
      animated
    })}
    </div>\`).join('')}
</div>\`;
  }
}`,...(g=(m=d.parameters)==null?void 0:m.docs)==null?void 0:g.source}}};var v,b,y;o.parameters={...o.parameters,docs:{...(v=o.parameters)==null?void 0:v.docs,source:{originalSource:`{
  name: 'Static — no animation',
  args: {
    animated: false
  },
  parameters: {
    controls: {
      include: ['type']
    },
    docs: {
      description: {
        story: \`Skeleton with animation disabled — for \\\`prefers-reduced-motion: reduce\\\` users.

**✅ Do** — detect \\\`prefers-reduced-motion\\\` via a media query and pass \\\`animated={false}\\\` when active.
**❌ Don't** — rely on CSS alone to disable animation; the prop must also stop JS-driven loops.\`
      },
      source: {
        code: \`<!-- Check for reduced motion preference -->
<script>
  const animated = !window.matchMedia('(prefers-reduced-motion: reduce)').matches;
<\/script>

<!-- Pass animated=false when reduced motion is preferred -->
<div class="skeleton skeleton--card-image skeleton--static"> … </div>\`,
        language: 'html'
      }
    }
  },
  render: ({
    type
  }) => skeleton({
    type,
    animated: false
  })
}`,...(y=(b=o.parameters)==null?void 0:b.docs)==null?void 0:y.source}}};const j=["Interactive","AllTypes","StaticNoAnimation"];export{d as AllTypes,a as Interactive,o as StaticNoAnimation,j as __namedExportsOrder,L as default};
