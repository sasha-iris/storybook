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
  className?: string;
}

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
export function Breadcrumbs({ items, variant = 'default', className }: BreadcrumbsProps) {
  const nav = (
    <nav aria-label="Breadcrumb" className={variant === 'bg' ? ['breadcrumb-bg', className].filter(Boolean).join(' ') : className}>
      <ol className="breadcrumb">
        {items.map((item, i) => {
          const isLast = i === items.length - 1;
          return (
            <li key={i} className={`breadcrumb-item${isLast ? ' active' : ''}`}>
              {isLast ? (
                <span aria-current="page">
                  {item.icon}
                  {item.label}
                </span>
              ) : (
                <>
                  <a href={item.href ?? '#'}>
                    {item.icon}
                    {item.label}
                  </a>
                  <span className="breadcrumb-sep" aria-hidden="true">
                    <svg width="8" height="14" viewBox="0 0 8 14" fill="none">
                      <path d="m1 1 6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                </>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );

  return nav;
}
