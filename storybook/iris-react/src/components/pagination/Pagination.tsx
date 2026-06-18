import React from 'react';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  /** Show "Showing X to Y of Z" info text. */
  totalItems?: number;
  pageSize?: number;
  size?: 'default' | 'sm';
  className?: string;
}

/**
 * Page navigation control with prev/next and numbered page buttons.
 *
 * USE FOR: table pagination, list pagination, any multi-page data view
 * REPLACES MUI: <Pagination>, <TablePagination>
 * DO NOT USE FOR: tab switching → Tabs; step-by-step flows → Stepper
 *
 * Requires iris-components.css to be loaded at app level.
 *
 * @example
 * <Pagination currentPage={page} totalPages={10} onPageChange={setPage} totalItems={96} pageSize={10} />
 */
export function Pagination({
  currentPage,
  totalPages,
  onPageChange,
  totalItems,
  pageSize = 10,
  size = 'default',
  className,
}: PaginationProps) {
  const pages = buildPageList(currentPage, totalPages);

  return (
    <div className={className} style={{ display: 'flex', flexDirection: 'column', gap: 8, alignItems: 'flex-start' }}>
      {totalItems != null && (
        <p className={size === 'sm' ? 'pagination-info pagination-info-sm' : 'pagination-info'}>
          Showing <span>{(currentPage - 1) * pageSize + 1}</span> to{' '}
          <span>{Math.min(currentPage * pageSize, totalItems)}</span> of{' '}
          <span>{totalItems}</span>
        </p>
      )}
      <nav aria-label="Pagination">
        <ul className="pagination">
          <li className={`page-item${currentPage <= 1 ? ' disabled' : ''}`}>
            <button
              type="button"
              className="page-link"
              aria-label="Previous page"
              disabled={currentPage <= 1}
              onClick={() => onPageChange(currentPage - 1)}
            >
              ←
            </button>
          </li>
          {pages.map((p, i) =>
            p === '...' ? (
              <li key={`ellipsis-${i}`} className="page-item">
                <span className="page-link" aria-hidden="true">…</span>
              </li>
            ) : (
              <li key={p} className={`page-item${p === currentPage ? ' active' : ''}`}>
                <button
                  type="button"
                  className="page-link"
                  aria-label={`Page ${p}`}
                  aria-current={p === currentPage ? 'page' : undefined}
                  onClick={() => onPageChange(p as number)}
                >
                  {p}
                </button>
              </li>
            )
          )}
          <li className={`page-item${currentPage >= totalPages ? ' disabled' : ''}`}>
            <button
              type="button"
              className="page-link"
              aria-label="Next page"
              disabled={currentPage >= totalPages}
              onClick={() => onPageChange(currentPage + 1)}
            >
              →
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
}

function buildPageList(current: number, total: number): (number | '...')[] {
  if (total <= 7) return Array.from({ length: total }, (_, i) => i + 1);
  const pages: (number | '...')[] = [1];
  if (current > 3) pages.push('...');
  for (let i = Math.max(2, current - 1); i <= Math.min(total - 1, current + 1); i++) pages.push(i);
  if (current < total - 2) pages.push('...');
  pages.push(total);
  return pages;
}
