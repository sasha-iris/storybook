/**
 * Iris Library — Pagination
 *
 * Sources:
 *   Pagination frame:   node 3284:22497  (contains strip + button + showing component sets)
 *   Pagination strip:   node 3284:22499  (Size=Default/Small × More pages=No/Yes)
 *   Pagination button:  node 9426:125610 (Type=page/back/next × Hover/Selected × Disabled)
 *   Showing indicator:  node 9703:152796 (Size=Default/Small)
 *
 * Figma active state: bg=var(--color-bg-secondary) border=var(--color-border-default) color=#42389d (NOT blue fill)
 * Figma button size:  Default=40×40px, Small=32×32px
 *
 * CSS classes used (from styles.css):
 *   .pagination — outer <ul> strip
 *   .page-item  — each <li>
 *   .page-item.active   — selected page button
 *   .page-item.disabled — disabled prev/next
 *   .page-link  — inner <button>
 *   .pagination-info — "Showing X to Y of Z" text
 *
 * Size modifier (small = 32×32): no CSS class exists; inline style override on .page-link.
 */

// ─── Icons ────────────────────────────────────────────────────────────────────

const chevronLeft = `<svg width="20" height="20" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path d="M15 19l-7-7 7-7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;

const chevronRight = `<svg width="20" height="20" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path d="M9 5l7 7-7 7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;

// ─── Button builder ───────────────────────────────────────────────────────────

function pageItem({ content, active = false, disabled = false, small = false, ariaLabel = '', ariaCurrent = false } = {}) {
  const liClass = ['page-item', active ? 'active' : '', disabled ? 'disabled' : ''].filter(Boolean).join(' ');
  const labelAttr = ariaLabel ? ` aria-label="${ariaLabel}"` : '';
  const disabledAttr = disabled ? ' disabled aria-disabled="true"' : '';
  const currentAttr = ariaCurrent ? ' aria-current="page"' : '';
  const sizeStyle = small ? ' style="min-width:32px;height:32px;"' : '';
  return `<li class="${liClass}"><button class="page-link"${labelAttr}${disabledAttr}${currentAttr}${sizeStyle}>${content}</button></li>`;
}

function pageNumItem({ page, active = false, disabled = false, small = false } = {}) {
  return pageItem({ content: page, active, disabled, small, ariaLabel: `Page ${page}`, ariaCurrent: active });
}

function prevItem({ disabled = false, small = false } = {}) {
  return pageItem({ content: chevronLeft, disabled, small, ariaLabel: 'Previous page' });
}

function nextItem({ disabled = false, small = false } = {}) {
  return pageItem({ content: chevronRight, disabled, small, ariaLabel: 'Next page' });
}

function ellipsisItem({ small = false } = {}) {
  const sizeStyle = small ? ' style="min-width:32px;height:32px;"' : '';
  return `<li class="page-item"><span class="page-link" aria-hidden="true"${sizeStyle}>...</span></li>`;
}

// ─── Pagination strip builder ─────────────────────────────────────────────────

function computePages(current, total) {
  if (total <= 5) return Array.from({ length: total }, (_, i) => i + 1);
  return [1, 2, 3, 'ellipsis', total];
}

/**
 * @param {{ size?: 'default'|'small', currentPage?: number, totalPages?: number }} opts
 */
function pagination({ size = 'default', currentPage = 1, totalPages = 3 } = {}) {
  const pages = computePages(currentPage, totalPages);
  const isPrevDisabled = currentPage <= 1;
  const isNextDisabled = currentPage >= totalPages;
  const small = size === 'small';

  const items = [
    prevItem({ disabled: isPrevDisabled, small }),
    ...pages.map(p =>
      p === 'ellipsis'
        ? ellipsisItem({ small })
        : pageNumItem({ page: p, active: p === currentPage, small })
    ),
    nextItem({ disabled: isNextDisabled, small }),
  ];

  return `<nav aria-label="Pagination"><ul class="pagination">${items.join('')}</ul></nav>`;
}

// ─── Showing indicator builder ────────────────────────────────────────────────

/**
 * @param {{ size?: 'default'|'small', from?: number, to?: number, total?: number }} opts
 */
function showing({ size = 'default', from = 1, to = 10, total = 100 } = {}) {
  const small = size === 'small';
  const cls = small ? 'pagination-info pagination-info-sm' : 'pagination-info';
  return `<p class="${cls}">Showing <span>${from}</span> to <span>${to}</span> of <span>${total}</span></p>`;
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

CSS classes: \`.pagination\` → \`.page-item [.active|.disabled]\` → \`.page-link\`

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

The current page has \`.page-item.active\` + \`aria-current="page"\`. Disabled prev/next have \`.page-item.disabled\` + \`disabled\` attribute.

**Accessibility**
- Each \`.page-link\` button has \`aria-label="Page N"\`
- Active page button has \`aria-current="page"\`
- Disabled prev/next have \`disabled\` + \`aria-disabled="true"\`

See [SETUP.md](https://github.com/sasha-iris/storybook/blob/main/docs/SETUP.md) for complete installation instructions.
        `.trim(),
      },
    },
  },
  argTypes: {
    // ── Content ──────────────────────────────────────────────
    currentPage: {
      control: { type: 'number', min: 1, step: 1 },
      description: 'The currently active page. Gets `.page-item.active` and `aria-current="page"`.',
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
      description: '`default` = 36×36px buttons (CSS default). `small` = 32×32px (inline size override — no CSS modifier class exists).',
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
  render: (args) => {
    const a = args;
    const small = a.size === 'small';
    const sizeAttr = small ? ' style="min-width:32px;height:32px;"' : '';
    const htmlCode = `<nav aria-label="Pagination">\n  <ul class="pagination">\n    <li class="page-item${a.currentPage <= 1 ? ' disabled' : ''}">\n      <button class="page-link" aria-label="Previous page"${a.currentPage <= 1 ? ' disabled' : ''}>${a.currentPage <= 1 ? '←' : '←'}</button>\n    </li>\n    ${[...Array(Math.min(2, a.totalPages))].map((_, i) => `<li class="page-item${i + 1 === a.currentPage ? ' active' : ''}"><button class="page-link" ${i + 1 === a.currentPage ? 'aria-current="page"' : ''}>${i + 1}</button></li>`).join('\n    ')}\n    ${a.totalPages > 5 ? `<li class="page-item"><span aria-hidden="true">…</span></li>\n    <li class="page-item"><button class="page-link">${a.totalPages}</button></li>` : ''}\n    <li class="page-item${a.currentPage >= a.totalPages ? ' disabled' : ''}">\n      <button class="page-link" aria-label="Next page"${a.currentPage >= a.totalPages ? ' disabled' : ''}>→</button>\n    </li>\n  </ul>\n</nav>`;

    const reactCode = `<nav aria-label="Pagination">\n  <ul className="pagination">\n    <button\n      className="page-link"\n      aria-label="Previous page"\n      disabled={currentPage <= 1}\n      onClick={() => onPageChange(currentPage - 1)}\n    >\n      ← Prev\n    </button>\n    {[...Array(Math.min(3, totalPages))].map((_, i) => (\n      <button\n        key={i + 1}\n        className={currentPage === i + 1 ? 'page-link active' : 'page-link'}\n        aria-current={currentPage === i + 1 ? 'page' : undefined}\n        onClick={() => onPageChange(i + 1)}\n      >\n        {i + 1}\n      </button>\n    ))}\n    {totalPages > 5 && <span className="page-link">…</span>}\n    <button\n      className="page-link"\n      aria-label="Next page"\n      disabled={currentPage >= totalPages}\n      onClick={() => onPageChange(currentPage + 1)}\n    >\n      Next →\n    </button>\n  </ul>\n</nav>`;

    const componentCode = `export function Pagination({ currentPage = ${a.currentPage}, totalPages = ${a.totalPages}, size = "${a.size}", onPageChange }) {\n  const goToPage = (page) => {\n    if (page >= 1 && page <= totalPages) {\n      onPageChange?.(page);\n    }\n  };\n\n  return (\n    <nav aria-label="Pagination">\n      <ul className="pagination">\n        <li className={currentPage <= 1 ? 'page-item disabled' : 'page-item'}>\n          <button\n            className="page-link"\n            aria-label="Previous page"\n            disabled={currentPage <= 1}\n            onClick={() => goToPage(currentPage - 1)}\n          >\n            ← Prev\n          </button>\n        </li>\n        {Array.from({length: Math.min(3, totalPages)}, (_, i) => i + 1).map((page) => (\n          <li key={page} className={currentPage === page ? 'page-item active' : 'page-item'}>\n            <button\n              className="page-link"\n              aria-current={currentPage === page ? 'page' : undefined}\n              onClick={() => goToPage(page)}\n            >\n              {page}\n            </button>\n          </li>\n        ))}\n        {totalPages > 5 && <li className="page-item"><span>…</span></li>}\n        <li className={currentPage >= totalPages ? 'page-item disabled' : 'page-item'}>\n          <button\n            className="page-link"\n            aria-label="Next page"\n            disabled={currentPage >= totalPages}\n            onClick={() => goToPage(currentPage + 1)}\n          >\n            Next →\n          </button>\n        </li>\n      </ul>\n    </nav>\n  );\n}`;

    const htmlEscaped = htmlCode.replace(/</g, '&lt;').replace(/>/g, '&gt;');
    const reactEscaped = reactCode.replace(/</g, '&lt;').replace(/>/g, '&gt;');
    const componentEscaped = componentCode.replace(/</g, '&lt;').replace(/>/g, '&gt;');

    return `
      <div style="display:flex;flex-direction:column;gap:24px;">
        <div style="padding:16px;border:1px solid var(--color-border-default);border-radius:8px;">
          ${pagination(args)}
        </div>
        <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:16px;align-items:start;">
          <div style="padding:16px;border:1px solid var(--color-border-default);border-radius:8px;">
            <div style="font-weight:600;font-size:12px;color:var(--color-text-secondary);margin-bottom:12px;text-transform:uppercase;letter-spacing:0.5px;">HTML</div>
            <div style="background:var(--color-bg-tertiary);padding:12px;border-radius:6px;margin-bottom:12px;overflow:auto;">
              <pre style="margin:0;font-family:monospace;font-size:13px;white-space:pre-wrap;word-break:break-word;"><code>${htmlEscaped}</code></pre>
            </div>
            <button data-copy="${htmlCode.split('"').join('&quot;')}" class="storybook-copy-btn" style="padding:8px 12px;background:var(--color-bg-secondary);color:var(--color-text-primary);border:1px solid var(--color-border-default);border-radius:4px;cursor:pointer;font-family:inherit;font-size:12px;font-weight:500;display:flex;align-items:center;gap:6px;">
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="2" y="2" width="8" height="8" rx="1"/><path d="M6 14H12C13.1046 14 14 13.1046 14 12V6"/></svg>Copy
            </button>
          </div>
          <div style="padding:16px;border:1px solid var(--color-border-default);border-radius:8px;">
            <div style="font-weight:600;font-size:12px;color:var(--color-text-secondary);margin-bottom:12px;text-transform:uppercase;letter-spacing:0.5px;">React</div>
            <div style="background:var(--color-bg-tertiary);padding:12px;border-radius:6px;margin-bottom:12px;overflow:auto;">
              <pre style="margin:0;font-family:monospace;font-size:13px;white-space:pre-wrap;word-break:break-word;"><code>${reactEscaped}</code></pre>
            </div>
            <button data-copy="${reactCode.split('"').join('&quot;')}" class="storybook-copy-btn" style="padding:8px 12px;background:var(--color-bg-secondary);color:var(--color-text-primary);border:1px solid var(--color-border-default);border-radius:4px;cursor:pointer;font-family:inherit;font-size:12px;font-weight:500;display:flex;align-items:center;gap:6px;">
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="2" y="2" width="8" height="8" rx="1"/><path d="M6 14H12C13.1046 14 14 13.1046 14 12V6"/></svg>Copy
            </button>
          </div>
          <div style="padding:16px;border:1px solid var(--color-border-default);border-radius:8px;">
            <div style="font-weight:600;font-size:12px;color:var(--color-text-secondary);margin-bottom:12px;text-transform:uppercase;letter-spacing:0.5px;">Component (With Events)</div>
            <div style="background:var(--color-bg-tertiary);padding:12px;border-radius:6px;margin-bottom:12px;overflow:auto;">
              <pre style="margin:0;font-family:monospace;font-size:13px;white-space:pre-wrap;word-break:break-word;"><code>${componentEscaped}</code></pre>
            </div>
            <button data-copy="${componentCode.split('"').join('&quot;')}" class="storybook-copy-btn" style="padding:8px 12px;background:var(--color-bg-secondary);color:var(--color-text-primary);border:1px solid var(--color-border-default);border-radius:4px;cursor:pointer;font-family:inherit;font-size:12px;font-weight:500;display:flex;align-items:center;gap:6px;">
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="2" y="2" width="8" height="8" rx="1"/><path d="M6 14H12C13.1046 14 14 13.1046 14 12V6"/></svg>Copy
            </button>
          </div>
        </div>
      </div>
      <script>
        document.querySelectorAll('.storybook-copy-btn').forEach(btn => {
          btn.addEventListener('click', function() {
            navigator.clipboard.writeText(this.dataset.copy);
            const originalText = this.innerHTML;
            this.innerHTML = '<svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5"><polyline points="13 2 3 13 1 11"></polyline></svg>Copied!';
            this.style.background = 'var(--color-success-light)';
            this.style.color = 'var(--color-success-dark)';
            this.style.borderColor = 'var(--color-success-lighter)';
            setTimeout(() => {
              this.innerHTML = originalText;
              this.style.background = 'var(--color-bg-secondary)';
              this.style.color = 'var(--color-text-primary)';
              this.style.borderColor = 'var(--color-border-default)';
            }, 2000);
          });
        });
      </script>
    `;
  },
  parameters: {
    docs: {
      description: {
        story: 'Use **Controls** to change the current page, total pages, and size. Set `totalPages` > 5 to see ellipsis + last page.',
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
        code: `<nav aria-label="Pagination">
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

**✅ Do** — use a non-interactive \`<span class="page-link">\` for the ellipsis, not a \`<button>\`.
**❌ Don't** — truncate when ≤ 5 pages fit.
        `.trim(),
      },
      source: {
        language: 'html',
        code: `<nav aria-label="Pagination">
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
        story: 'Default (36×36px per CSS) and Small (32×32px inline override) side by side.',
      },
      source: {
        language: 'html',
        code: `<!-- Default: CSS .page-link size (36×36px) -->
<nav aria-label="Pagination"><ul class="pagination"><!-- ... --></ul></nav>

<!-- Small: inline override style="min-width:32px;height:32px;" on each .page-link -->
<nav aria-label="Pagination"><ul class="pagination"><!-- ... --></ul></nav>`,
      },
    },
  },
  render: ({ currentPage, totalPages }) => `
    <div style="display:flex;flex-direction:column;gap:20px;padding:8px 0;">
      <div>
        <div style="font:700 10px/1.5 ui-monospace,monospace;color:var(--color-border-light);text-transform:uppercase;letter-spacing:.08em;margin-bottom:10px;">Default (36×36)</div>
        ${pagination({ size: 'default', currentPage, totalPages })}
      </div>
      <div>
        <div style="font:700 10px/1.5 ui-monospace,monospace;color:var(--color-border-light);text-transform:uppercase;letter-spacing:.08em;margin-bottom:10px;">Small (32×32)</div>
        ${pagination({ size: 'small', currentPage, totalPages })}
      </div>
    </div>
  `,
};

// ─── Button states ────────────────────────────────────────────────────────────

export const ButtonStates = {
    name: 'Button states — all variants',
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story: `
All button states from Figma node \`9426:125610\`.

| CSS class | State | Description |
|---|---|---|
| \`.page-item\` | Default | normal page button |
| \`.page-item.active\` | Selected | current page — primary bg, white text |
| \`.page-item.disabled\` | Disabled | muted text, no pointer events |
        `.trim(),
      },
      source: {
        language: 'html',
        code: `<!-- Default -->
<li class="page-item"><button class="page-link" aria-label="Page 1">1</button></li>

<!-- Active (selected page) -->
<li class="page-item active"><button class="page-link" aria-label="Page 1" aria-current="page">1</button></li>

<!-- Disabled -->
<li class="page-item disabled"><button class="page-link" aria-label="Previous page" disabled aria-disabled="true"><!-- chevron-left --></button></li>`,
      },
    },
  },
  render: () => {
    const labeled = (label, html) => `
      <div style="display:flex;flex-direction:column;align-items:center;gap:6px;">
        <div style="font:700 10px/1 ui-monospace,monospace;color:var(--color-border-light);text-transform:uppercase;letter-spacing:.06em;white-space:nowrap;">${label}</div>
        <ul class="pagination">${html}</ul>
      </div>`;

    // Selected prev/next: Figma Type=back/next, Hover/Selected=Yes → .page-item.active → bg:var(--color-bg-secondary), chevron color:#42389d
    const prevSelected = `<li class="page-item active"><button class="page-link" aria-label="Previous page">${chevronLeft}</button></li>`;
    const nextSelected = `<li class="page-item active"><button class="page-link" aria-label="Next page">${chevronRight}</button></li>`;
    return `
      <div style="padding:24px;display:flex;flex-wrap:wrap;gap:20px;align-items:flex-end;">
        ${labeled('Page · Default',  pageNumItem({ page: 1, active: false }))}
        ${labeled('Page · Active',   pageNumItem({ page: 1, active: true  }))}
        ${labeled('Page · Disabled', pageNumItem({ page: 1, disabled: true }))}
        ${labeled('Prev · Default',  prevItem({ disabled: false }))}
        ${labeled('Prev · Selected', prevSelected)}
        ${labeled('Prev · Disabled', prevItem({ disabled: true  }))}
        ${labeled('Next · Default',  nextItem({ disabled: false }))}
        ${labeled('Next · Selected', nextSelected)}
        ${labeled('Next · Disabled', nextItem({ disabled: true  }))}
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
"Showing X to Y of Z" indicator — Figma node \`9703:152796\`. Uses \`.pagination-info\` class.

Typically placed to the left of the pagination strip to orient users within the result set.

- Default: \`var(--text-sm)\` (14px) — label color \`var(--color-text-secondary)\`, numbers \`var(--color-text-primary)\` bold
- Small: inline font-size override to \`var(--text-xs)\` (12px)
        `.trim(),
      },
      source: {
        language: 'html',
        code: `<!-- Showing indicator -->
<p class="pagination-info">Showing <span>1</span> to <span>10</span> of <span>100</span></p>`,
      },
    },
  },
  render: ({ size }) => `
    <div style="display:flex;flex-direction:column;gap:16px;padding:8px 0;">
      <div>
        <div style="font:700 10px/1.5 ui-monospace,monospace;color:var(--color-border-light);text-transform:uppercase;letter-spacing:.08em;margin-bottom:8px;">Default (14px)</div>
        ${showing({ size: 'default', from: 1, to: 10, total: 100 })}
      </div>
      <div>
        <div style="font:700 10px/1.5 ui-monospace,monospace;color:var(--color-border-light);text-transform:uppercase;letter-spacing:.08em;margin-bottom:8px;">Small (12px)</div>
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
Typical table footer: **Showing** indicator (\`.pagination-info\`) on the left, **Pagination** (\`.pagination\`) on the right.

**✅ Do** — always pair Showing with Pagination so users know their position.
**✅ Do** — recalculate "Showing X to Y" from currentPage × pageSize.
        `.trim(),
      },
      source: {
        language: 'html',
        code: `<div style="display:flex;align-items:center;justify-content:space-between;padding:12px 16px;">
  <!-- Showing indicator (left) -->
  <p class="pagination-info">Showing <span>1</span> to <span>10</span> of <span>100</span></p>

  <!-- Pagination (right) -->
  <nav aria-label="Pagination">
    <ul class="pagination">
      <!-- prev · pages · next -->
    </ul>
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
      <div style="border:1px solid var(--color-border-default);border-radius:8px;overflow:hidden;max-width:700px;">
        <div>
          ${[1,2,3,4,5].map(i => `
            <div style="display:flex;gap:16px;padding:12px 16px;border-bottom:1px solid var(--color-bg-secondary);font:400 14px/1.5 inherit;color:var(--color-text-primary);">
              <span style="flex:2;">Row ${(currentPage-1)*5+i} — example data</span>
              <span style="flex:1;color:var(--color-border-light);">Category ${i}</span>
              <span style="flex:1;color:var(--color-border-light);">${['Active','Pending','Done','Active','Review'][i-1]}</span>
            </div>
          `).join('')}
        </div>
        <div style="display:flex;align-items:center;justify-content:space-between;padding:12px 16px;background:var(--color-bg-tertiary);border-top:1px solid var(--color-border-default);">
          ${showing({ size, from, to, total })}
          ${pagination({ size, currentPage, totalPages })}
        </div>
      </div>`;
  },
};
