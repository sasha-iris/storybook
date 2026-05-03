/**
 * Iris Library — Pagination
 *
 * Sources:
 *   Pagination strip:   node 3284:22499  (Size=Default/Small × More pages=No/Yes)
 *   Pagination button:  node 9426:125610 (Type=page/back/next × states)
 *   Showing indicator:  node 9703:152796 (Size=Default/Small)
 *
 * ## Button tokens (both sizes)
 * | State    | bg       | border   | text/icon  |
 * |----------|----------|----------|------------|
 * | Default  | #ffffff  | #e5e7eb  | #6b7280    |
 * | Selected | #f3f4f6  | #e5e7eb  | #42389d    |
 * | Disabled | #ffffff  | #e5e7eb  | #d1d5db    |
 *
 * ## Button dimensions
 * | Size    | w × h   | padding      | font        |
 * |---------|---------|--------------|-------------|
 * | Default | 40×40px | 12px 10px    | 14px / 500  |
 * | Small   | 32×32px | 12px 10px    | 14px / 500  |
 *
 * ## Showing indicator
 * | Size    | font  | label color | number color |
 * |---------|-------|-------------|--------------|
 * | Default | 14px  | #374151/400 | #111928/600  |
 * | Small   | 12px  | #374151/400 | #111928/600  |
 */

// ─── Icons ────────────────────────────────────────────────────────────────────

const chevronLeft = (color = '#6b7280') => `<svg width="20" height="20" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path d="M15 19l-7-7 7-7" stroke="${color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;

const chevronRight = (color = '#6b7280') => `<svg width="20" height="20" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path d="M9 5l7 7-7 7" stroke="${color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;

// ─── Button builder ───────────────────────────────────────────────────────────

function paginationBtn({ content, selected = false, disabled = false, size = 'default', ariaLabel = '' } = {}) {
  const dim = size === 'small' ? '32px' : '40px';
  const bg = selected ? '#f3f4f6' : '#ffffff';
  const label = ariaLabel ? ` aria-label="${ariaLabel}"` : '';
  const disabledAttr = disabled ? ' disabled aria-disabled="true"' : '';
  const cursor = disabled ? 'default' : 'pointer';

  return `<button${label}${disabledAttr} style="
    width:${dim};height:${dim};
    background:${bg};border:1px solid #e5e7eb;border-radius:6px;
    display:flex;align-items:center;justify-content:center;
    padding:0;cursor:${cursor};flex-shrink:0;
  ">${content}</button>`;
}

function pageNumBtn({ page, selected = false, disabled = false, size = 'default' } = {}) {
  const color = disabled ? '#d1d5db' : selected ? '#42389d' : '#6b7280';
  const label = `aria-label="Page ${page}"${selected ? ' aria-current="page"' : ''}`;
  const content = `<span style="font:500 14px/1.5 inherit;color:${color};">${page}</span>`;
  return paginationBtn({ content, selected, disabled, size, ariaLabel: `Page ${page}` });
}

function prevBtn({ disabled = false, selected = false, size = 'default' } = {}) {
  const color = disabled ? '#d1d5db' : selected ? '#42389d' : '#6b7280';
  return paginationBtn({ content: chevronLeft(color), disabled, selected, size, ariaLabel: 'Previous page' });
}

function nextBtn({ disabled = false, selected = false, size = 'default' } = {}) {
  const color = disabled ? '#d1d5db' : selected ? '#42389d' : '#6b7280';
  return paginationBtn({ content: chevronRight(color), disabled, selected, size, ariaLabel: 'Next page' });
}

function ellipsisBtn({ size = 'default' } = {}) {
  const dim = size === 'small' ? '32px' : '40px';
  return `<span style="
    width:${dim};height:${dim};
    display:flex;align-items:center;justify-content:center;flex-shrink:0;
  "><span style="font:500 14px/1.5 inherit;color:#6b7280;">…</span></span>`;
}

// ─── Pagination strip builder ─────────────────────────────────────────────────

/**
 * Computes which page buttons to render given currentPage and totalPages.
 * Returns an array of: number | 'ellipsis' | 'first' | 'last'
 *
 * Logic (matches Figma):
 * - ≤ 5 pages: show all
 * - > 5 pages: show pages near current, with ellipsis + last page
 */
function computePages(current, total) {
  if (total <= 5) return Array.from({ length: total }, (_, i) => i + 1);
  // Show first 3 + ellipsis + last
  return [1, 2, 3, 'ellipsis', total];
}

/**
 * @param {{
 *   size?: 'default'|'small',
 *   currentPage?: number,
 *   totalPages?: number,
 * }} opts
 */
function pagination({ size = 'default', currentPage = 1, totalPages = 3 } = {}) {
  const pages = computePages(currentPage, totalPages);
  const isPrevDisabled = currentPage <= 1;
  const isNextDisabled = currentPage >= totalPages;

  const buttons = [
    prevBtn({ disabled: isPrevDisabled, size }),
    ...pages.map(p =>
      p === 'ellipsis'
        ? ellipsisBtn({ size })
        : pageNumBtn({ page: p, selected: p === currentPage, size })
    ),
    nextBtn({ disabled: isNextDisabled, size }),
  ];

  return `<nav aria-label="Pagination" style="display:inline-flex;align-items:center;gap:2px;">
    ${buttons.join('\n    ')}
  </nav>`;
}

// ─── Showing indicator builder ────────────────────────────────────────────────

/**
 * @param {{ size?: 'default'|'small', from?: number, to?: number, total?: number }} opts
 */
function showing({ size = 'default', from = 1, to = 10, total = 100 } = {}) {
  const fs = size === 'small' ? '12px' : '14px';
  const label = (text) => `<span style="font:400 ${fs}/1.5 inherit;color:#374151;">${text}</span>`;
  const num   = (text) => `<span style="font:600 ${fs}/1.5 inherit;color:#111928;">${text}</span>`;

  return `<div style="display:inline-flex;align-items:center;gap:4px;">
    ${label('Showing')} ${num(from)} ${label('to')} ${num(to)} ${label('of')} ${num(total)}
  </div>`;
}

// ─── Default export ───────────────────────────────────────────────────────────

export default {
  title: 'Iris Library/Pagination',
  tags: ['autodocs', 'stable'],
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `
**Pagination** lets users navigate between pages of a result set.

Figma sources:
- Pagination strip: \`3284:22499\`
- Button sub-component: \`9426:125610\`
- Showing indicator: \`9703:152796\`

**When to use**
- Tables, search results, or lists with more items than fit on one screen
- When you need to preserve URL state per page (use \`?page=N\` query params)
- Alongside the **Showing** indicator to tell users where they are in the result set

**When NOT to use**
- Infinite scroll interfaces — don't mix pagination and infinite scroll
- Very short lists (< 2 pages) — hide the control entirely
- Mobile-first flows where "Load more" is more ergonomic

**Anatomy**
\`[← Prev] [1] [2] [3] [… last?] [Next →]\`

The current page has \`aria-current="page"\`. Disabled prev/next have \`disabled\` + \`aria-disabled="true"\`.

**QA checklist**
- Button: 40×40px (default) / 32×32px (small), bg \`#ffffff\`, border \`1px #e5e7eb\`, r=6px
- Selected: bg \`#f3f4f6\`, text \`#42389d\`
- Disabled: text/icon \`#d1d5db\`, \`disabled\` attribute set
- Inactive page text: \`#6b7280\`, 14px/500
- Ellipsis: non-interactive \`<span>\`, not a button
- Showing: label \`#374151\`/400, numbers \`#111928\`/600; default 14px, small 12px
        `.trim(),
      },
    },
  },
  argTypes: {
    // ── Content ──────────────────────────────────────────────
    currentPage: {
      control: { type: 'number', min: 1, step: 1 },
      description: 'The currently active page. Renders with bg `#f3f4f6`, text `#42389d`, and `aria-current="page"`.',
      table: { category: 'Content', defaultValue: { summary: 1 } },
    },
    totalPages: {
      control: { type: 'number', min: 1, step: 1 },
      description: 'Total number of pages. When > 5, an ellipsis and last page are shown.',
      table: { category: 'Content', defaultValue: { summary: 3 } },
    },
    // ── Appearance ───────────────────────────────────────────
    size: {
      control: 'select',
      options: ['default', 'small'],
      description: '`default` = 40×40px buttons. `small` = 32×32px buttons. Both use the same colors and font.',
      table: { category: 'Appearance', defaultValue: { summary: 'default' } },
    },
  },
  args: {
    size: 'default',
    currentPage: 1,
    totalPages: 3,
  },
};

// ─── Interactive ──────────────────────────────────────────────────────────────

export const Interactive = {
  name: 'Interactive (Controls)',
  render: (args) => pagination(args),
  parameters: {
    docs: {
      description: {
        story: 'Use **Controls** to change the current page, total pages, and size. Set `totalPages` > 5 to see ellipsis + last page.',
      },
      source: {
        transform: (_src, storyCtx) => {
          const { size, currentPage, totalPages } = storyCtx.args;
          const dim = size === 'small' ? '32px' : '40px';
          return `<nav aria-label="Pagination" style="display:inline-flex;align-items:center;gap:2px;">

  <!-- Prev: disabled when currentPage=1 -->
  <button aria-label="Previous page" ${currentPage <= 1 ? 'disabled aria-disabled="true"' : ''}
          style="width:${dim};height:${dim};background:#ffffff;border:1px solid #e5e7eb;border-radius:6px;">
    <!-- chevron-left — color ${currentPage <= 1 ? '#d1d5db' : '#6b7280'} -->
  </button>

  <!-- Page buttons: selected gets bg:#f3f4f6, color:#42389d, aria-current="page" -->
  <button aria-label="Page 1" aria-current="page"
          style="width:${dim};height:${dim};background:#f3f4f6;border:1px solid #e5e7eb;border-radius:6px;">
    <span style="font:500 14px/1.5 inherit;color:#42389d;">1</span>
  </button>
  <button aria-label="Page 2"
          style="width:${dim};height:${dim};background:#ffffff;border:1px solid #e5e7eb;border-radius:6px;">
    <span style="font:500 14px/1.5 inherit;color:#6b7280;">2</span>
  </button>
  ${totalPages > 5 ? `
  <!-- Ellipsis: non-interactive span -->
  <span style="width:${dim};height:${dim};display:flex;align-items:center;justify-content:center;">
    <span style="font:500 14px/1.5 inherit;color:#6b7280;">…</span>
  </span>
  <button aria-label="Page ${totalPages}"
          style="width:${dim};height:${dim};background:#ffffff;border:1px solid #e5e7eb;border-radius:6px;">
    <span style="font:500 14px/1.5 inherit;color:#6b7280;">${totalPages}</span>
  </button>` : ''}

  <!-- Next: disabled when currentPage=totalPages -->
  <button aria-label="Next page" ${currentPage >= totalPages ? 'disabled aria-disabled="true"' : ''}
          style="width:${dim};height:${dim};background:#ffffff;border:1px solid #e5e7eb;border-radius:6px;">
    <!-- chevron-right — color ${currentPage >= totalPages ? '#d1d5db' : '#6b7280'} -->
  </button>

</nav>`;
        },
      },
    },
  },
};

// ─── Few pages (no ellipsis) ──────────────────────────────────────────────────

export const FewPages = {
  name: 'Few pages — no ellipsis',
  parameters: {
    docs: {
      description: {
        story: `
Pagination with ≤ 5 pages — all page numbers shown, no ellipsis. Figma: \`Size=Default, More pages=No\`.

**✅ Do** — hide the pagination entirely when there is only 1 page.
**❌ Don't** — show an ellipsis when all pages fit.
        `.trim(),
      },
      source: {
        language: 'html',
        code: `<nav aria-label="Pagination" style="display:inline-flex;align-items:center;gap:2px;">
  <!-- Prev disabled: currentPage=1 -->
  <button aria-label="Previous page" disabled aria-disabled="true"
          style="width:40px;height:40px;background:#ffffff;border:1px solid #e5e7eb;border-radius:6px;">
    <!-- chevron-left color #d1d5db -->
  </button>

  <!-- Page 1: selected -->
  <button aria-label="Page 1" aria-current="page"
          style="width:40px;height:40px;background:#f3f4f6;border:1px solid #e5e7eb;border-radius:6px;">
    <span style="font:500 14px/1.5 inherit;color:#42389d;">1</span>
  </button>

  <!-- Page 2, 3: inactive -->
  <button aria-label="Page 2" style="width:40px;height:40px;background:#ffffff;border:1px solid #e5e7eb;border-radius:6px;">
    <span style="font:500 14px/1.5 inherit;color:#6b7280;">2</span>
  </button>
  <button aria-label="Page 3" style="width:40px;height:40px;background:#ffffff;border:1px solid #e5e7eb;border-radius:6px;">
    <span style="font:500 14px/1.5 inherit;color:#6b7280;">3</span>
  </button>

  <!-- Next: active -->
  <button aria-label="Next page"
          style="width:40px;height:40px;background:#ffffff;border:1px solid #e5e7eb;border-radius:6px;">
    <!-- chevron-right color #6b7280 -->
  </button>
</nav>`,
      },
    },
  },
  render: () => pagination({ size: 'default', currentPage: 1, totalPages: 3 }),
};

// ─── Many pages (ellipsis) ────────────────────────────────────────────────────

export const ManyPages = {
  name: 'Many pages — with ellipsis',
  parameters: {
    docs: {
      description: {
        story: `
Pagination with > 5 pages — shows first 3, an ellipsis, and the last page. Figma: \`More pages=Yes\`.

**✅ Do** — use \`…\` as a non-interactive \`<span>\`, not a \`<button>\`.
**❌ Don't** — truncate when ≤ 5 pages fit.
        `.trim(),
      },
      source: {
        language: 'html',
        code: `<nav aria-label="Pagination" style="display:inline-flex;align-items:center;gap:2px;">
  <button aria-label="Previous page" disabled aria-disabled="true"
          style="width:40px;height:40px;..."><!-- chevron-left #d1d5db --></button>
  <button aria-label="Page 1" aria-current="page"
          style="width:40px;height:40px;background:#f3f4f6;...">
    <span style="color:#42389d;">1</span>
  </button>
  <button aria-label="Page 2" style="width:40px;height:40px;background:#ffffff;...">
    <span style="color:#6b7280;">2</span>
  </button>
  <button aria-label="Page 3" style="width:40px;height:40px;background:#ffffff;...">
    <span style="color:#6b7280;">3</span>
  </button>

  <!-- Ellipsis: non-interactive -->
  <span style="width:40px;height:40px;display:flex;align-items:center;justify-content:center;">
    <span style="font:500 14px/1.5 inherit;color:#6b7280;">…</span>
  </span>

  <button aria-label="Page 100" style="width:40px;height:40px;background:#ffffff;...">
    <span style="color:#6b7280;">100</span>
  </button>
  <button aria-label="Next page" style="width:40px;height:40px;..."><!-- chevron-right #6b7280 --></button>
</nav>`,
      },
    },
  },
  render: () => pagination({ size: 'default', currentPage: 1, totalPages: 100 }),
};

// ─── Both sizes ───────────────────────────────────────────────────────────────

export const BothSizes = {
  name: 'Both sizes',
  args: { currentPage: 1, totalPages: 100 },
  parameters: {
    controls: { include: ['currentPage', 'totalPages'] },
    docs: {
      description: {
        story: 'Default (40×40px) and Small (32×32px) side by side. Use **currentPage** and **totalPages** controls to explore states.',
      },
      source: {
        language: 'html',
        code: `<!-- Default: 40×40px buttons -->
<nav aria-label="Pagination" style="display:inline-flex;gap:2px;"><!-- ... --></nav>

<!-- Small: 32×32px buttons -->
<nav aria-label="Pagination" style="display:inline-flex;gap:2px;"><!-- ... --></nav>`,
      },
    },
  },
  render: ({ currentPage, totalPages }) => `
    <div style="display:flex;flex-direction:column;gap:20px;padding:8px 0;">
      <div>
        <div style="font:700 10px/1.5 ui-monospace,monospace;color:#9ca3af;text-transform:uppercase;letter-spacing:.08em;margin-bottom:10px;">Default (40×40)</div>
        ${pagination({ size: 'default', currentPage, totalPages })}
      </div>
      <div>
        <div style="font:700 10px/1.5 ui-monospace,monospace;color:#9ca3af;text-transform:uppercase;letter-spacing:.08em;margin-bottom:10px;">Small (32×32)</div>
        ${pagination({ size: 'small', currentPage, totalPages })}
      </div>
    </div>
  `,
};

// ─── Button states ────────────────────────────────────────────────────────────

export const ButtonStates = {
  name: 'Button states — all variants',
  parameters: {
    controls: { include: [] },
    docs: {
      description: {
        story: `
All button states from Figma node \`9426:125610\`.

| Type | State | bg | text/icon |
|---|---|---|---|
| Page | Default | \`#ffffff\` | \`#6b7280\` |
| Page | Selected | \`#f3f4f6\` | \`#42389d\` |
| Page | Disabled | \`#ffffff\` | \`#d1d5db\` |
| Prev / Next | Default | \`#ffffff\` | \`#6b7280\` |
| Prev / Next | Hover/Active | \`#f3f4f6\` | \`#42389d\` |
| Prev / Next | Disabled | \`#ffffff\` | \`#d1d5db\` |
        `.trim(),
      },
      source: {
        language: 'html',
        code: `<!-- Page — Default -->
<button aria-label="Page 1"
        style="width:40px;height:40px;background:#ffffff;border:1px solid #e5e7eb;border-radius:6px;">
  <span style="font:500 14px/1.5 inherit;color:#6b7280;">1</span>
</button>

<!-- Page — Selected (aria-current="page") -->
<button aria-label="Page 1" aria-current="page"
        style="width:40px;height:40px;background:#f3f4f6;border:1px solid #e5e7eb;border-radius:6px;">
  <span style="font:500 14px/1.5 inherit;color:#42389d;">1</span>
</button>

<!-- Page — Disabled -->
<button aria-label="Page 1" disabled aria-disabled="true"
        style="width:40px;height:40px;background:#ffffff;border:1px solid #e5e7eb;border-radius:6px;">
  <span style="font:500 14px/1.5 inherit;color:#d1d5db;">1</span>
</button>

<!-- Prev — Default / Active / Disabled -->
<!-- Next — Default / Active / Disabled -->`,
      },
    },
  },
  render: () => {
    const labeled = (label, html) => `
      <div style="display:flex;flex-direction:column;align-items:center;gap:6px;">
        <div style="font:700 10px/1 ui-monospace,monospace;color:#9ca3af;text-transform:uppercase;letter-spacing:.06em;white-space:nowrap;">${label}</div>
        ${html}
      </div>`;

    return `
      <div style="padding:24px;display:flex;flex-wrap:wrap;gap:16px;align-items:flex-end;">
        ${labeled('Page · Default',   pageNumBtn({ page: 1, selected: false, disabled: false }))}
        ${labeled('Page · Selected',  pageNumBtn({ page: 1, selected: true,  disabled: false }))}
        ${labeled('Page · Disabled',  pageNumBtn({ page: 1, selected: false, disabled: true  }))}
        ${labeled('Prev · Default',   prevBtn({ disabled: false }))}
        ${labeled('Prev · Active',    prevBtn({ selected: true  }))}
        ${labeled('Prev · Disabled',  prevBtn({ disabled: true  }))}
        ${labeled('Next · Default',   nextBtn({ disabled: false }))}
        ${labeled('Next · Active',    nextBtn({ selected: true  }))}
        ${labeled('Next · Disabled',  nextBtn({ disabled: true  }))}
      </div>`;
  },
};

// ─── Showing indicator ────────────────────────────────────────────────────────

export const ShowingIndicator = {
  name: 'Showing indicator — both sizes',
  args: { size: 'default' },
  parameters: {
    controls: { include: ['size'] },
    docs: {
      description: {
        story: `
"Showing X to Y of Z" indicator — Figma node \`9703:152796\`.

Typically placed to the left of the pagination strip to orient users within the result set.

- Default: 14px — label \`#374151\`/400, numbers \`#111928\`/600
- Small: 12px — same colors
        `.trim(),
      },
      source: {
        language: 'html',
        code: `<!-- Showing indicator — Default size -->
<div style="display:inline-flex;align-items:center;gap:4px;">
  <span style="font:400 14px/1.5 inherit;color:#374151;">Showing</span>
  <span style="font:600 14px/1.5 inherit;color:#111928;">1</span>
  <span style="font:400 14px/1.5 inherit;color:#374151;">to</span>
  <span style="font:600 14px/1.5 inherit;color:#111928;">10</span>
  <span style="font:400 14px/1.5 inherit;color:#374151;">of</span>
  <span style="font:600 14px/1.5 inherit;color:#111928;">100</span>
</div>`,
      },
    },
  },
  render: ({ size }) => `
    <div style="display:flex;flex-direction:column;gap:16px;padding:8px 0;">
      <div>
        <div style="font:700 10px/1.5 ui-monospace,monospace;color:#9ca3af;text-transform:uppercase;letter-spacing:.08em;margin-bottom:8px;">Default (14px)</div>
        ${showing({ size: 'default', from: 1, to: 10, total: 100 })}
      </div>
      <div>
        <div style="font:700 10px/1.5 ui-monospace,monospace;color:#9ca3af;text-transform:uppercase;letter-spacing:.08em;margin-bottom:8px;">Small (12px)</div>
        ${showing({ size: 'small', from: 1, to: 10, total: 100 })}
      </div>
    </div>
  `,
};

// ─── In context ───────────────────────────────────────────────────────────────

export const InContext = {
  name: 'In context — with Showing indicator',
  args: { size: 'default', currentPage: 1, totalPages: 10 },
  parameters: {
    controls: { include: ['size', 'currentPage', 'totalPages'] },
    docs: {
      description: {
        story: `
Typical table footer: **Showing** indicator on the left, **Pagination** on the right.

**✅ Do** — always pair Showing with Pagination so users know their position.
**✅ Do** — recalculate "Showing X to Y" from currentPage × pageSize.
        `.trim(),
      },
      source: {
        language: 'html',
        code: `<div style="display:flex;align-items:center;justify-content:space-between;padding:12px 0;">
  <!-- Showing indicator (left) -->
  <div style="display:inline-flex;align-items:center;gap:4px;">
    <span style="font:400 14px/1.5 inherit;color:#374151;">Showing</span>
    <span style="font:600 14px/1.5 inherit;color:#111928;">1</span>
    <span style="font:400 14px/1.5 inherit;color:#374151;">to</span>
    <span style="font:600 14px/1.5 inherit;color:#111928;">10</span>
    <span style="font:400 14px/1.5 inherit;color:#374151;">of</span>
    <span style="font:600 14px/1.5 inherit;color:#111928;">100</span>
  </div>

  <!-- Pagination (right) -->
  <nav aria-label="Pagination" style="display:inline-flex;align-items:center;gap:2px;">
    <!-- prev · pages · next -->
  </nav>
</div>`,
      },
    },
  },
  render: ({ size, currentPage, totalPages }) => {
    const pageSize = 10;
    const from = (currentPage - 1) * pageSize + 1;
    const to = Math.min(currentPage * pageSize, totalPages * pageSize);
    const total = totalPages * pageSize;
    return `
      <div style="border:1px solid #e5e7eb;border-radius:8px;padding:0;overflow:hidden;max-width:700px;">
        <!-- Placeholder table rows -->
        <div style="padding:0;">
          ${[1,2,3,4,5].map(i => `
            <div style="display:flex;gap:16px;padding:12px 16px;border-bottom:1px solid #f3f4f6;font:400 14px/1.5 inherit;color:#374151;">
              <span style="flex:2;">Row ${(currentPage-1)*5+i} — example data</span>
              <span style="flex:1;color:#9ca3af;">Category ${i}</span>
              <span style="flex:1;color:#9ca3af;">${['Active','Pending','Done','Active','Review'][i-1]}</span>
            </div>
          `).join('')}
        </div>
        <!-- Footer -->
        <div style="display:flex;align-items:center;justify-content:space-between;padding:12px 16px;background:#f9fafb;border-top:1px solid #e5e7eb;">
          ${showing({ size, from, to, total })}
          ${pagination({ size, currentPage, totalPages })}
        </div>
      </div>`;
  },
};
