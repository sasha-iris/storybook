import React from 'react';

interface BreadcrumbItem {
  label: string;
  href?: string;
  icon?: React.ReactNode;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  /** 'default' = plain; 'bg' = pill background style. */
  variant?: 'default' | 'bg';
  /** Auto-render a home icon on the first item (unless it already has a custom `icon`). Default true. */
  showHomeIcon?: boolean;
  className?: string;
}

const HomeIcon = () => (
  <svg width="16" height="16" viewBox="0 0 20 20" fill="currentColor" style={{ flexShrink: 0, verticalAlign: 'middle' }} aria-hidden="true">
    <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
  </svg>
);

const ChevronRightSep = () => (
  <span className="breadcrumb-sep" aria-hidden="true">
    <svg width="16" height="16" fill="none" viewBox="0 0 24 24">
      <path d="M9 5l7 7-7 7" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  </span>
);

/**
 * Breadcrumb trail showing the current page's path in the hierarchy.
 *
 * USE FOR: nested page paths (Settings > Security > 2FA), drill-down navigation,
 *   data explorer hierarchies
 * REPLACES MUI: <Breadcrumbs>, <Breadcrumbs separator="›">
 * DO NOT USE FOR: top-level navigation → Sidebar or Tabs
 *
 * Requires iris-components.css to be loaded at app level.
 *
 * @example
 * <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Settings', href: '/settings' }, { label: '2FA' }]} />
 */
export function Breadcrumbs({ items, variant = 'default', showHomeIcon = true, className }: BreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb" className={variant === 'bg' ? ['breadcrumb-bg', className].filter(Boolean).join(' ') : className}>
      <ol className="breadcrumb">
        {items.map((item, i) => {
          const isLast = i === items.length - 1;
          const isFirst = i === 0;
          const icon = item.icon ?? (isFirst && showHomeIcon ? <HomeIcon /> : null);
          return (
            <li key={i} className={`breadcrumb-item${isLast ? ' active' : ''}`}>
              {isLast ? (
                <span aria-current="page">
                  {icon}
                  {item.label}
                </span>
              ) : (
                <>
                  <a href={item.href ?? '#'}>
                    {icon}
                    {item.label}
                  </a>
                  <ChevronRightSep />
                </>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
