import React from 'react';

interface ListGroupItem {
  key: string;
  label: string;
  icon?: React.ReactNode;
  /** Right-aligned count badge. */
  count?: number;
  /** Highlights item with active background. */
  active?: boolean;
  href?: string;
  onClick?: () => void;
}

interface ListGroupProps {
  items: ListGroupItem[];
  dark?: boolean;
  /** Remove outer border and border-radius — use when embedding inside a panel or modal column. */
  flush?: boolean;
  width?: number | string;
  className?: string;
}

/**
 * Vertical list of navigable items — menu, settings links, quick nav.
 *
 * USE FOR: dropdown-adjacent item lists, contextual menus, settings navigation,
 *   entity property lists in sidebars
 * REPLACES MUI: <List>, <ListItem>, <ListItemButton>
 * DO NOT USE FOR:
 *   - Full sidebar navigation → Sidebar
 *   - Data tables → Table
 *
 * flush=true — removes outer border/radius, use when embedding inside a modal or panel column.
 *
 * Requires iris-components.css to be loaded at app level.
 *
 * @example
 * <ListGroup items={[{ key: 'profile', label: 'Profile' }, { key: 'settings', label: 'Settings' }]} />
 * <ListGroup flush items={categories} />
 */
export function ListGroup({ items, dark = false, flush = false, width, className }: ListGroupProps) {
  const ulClass = ['list-group', dark ? 'list-group--dark' : '', flush ? 'list-group--flush' : '', className].filter(Boolean).join(' ');
  const style = width ? { width: typeof width === 'number' ? `${width}px` : width } : undefined;

  return (
    <ul className={ulClass} style={style}>
      {items.map((item) => {
        const liClass = ['list-group-item', item.active ? 'active' : ''].filter(Boolean).join(' ');
        const inner = (
          <>
            {item.icon && <span className="list-group-item__icon">{item.icon}</span>}
            <span style={{ flex: 1 }}>{item.label}</span>
            {item.count !== undefined && (
              <span className="list-group-item-meta">({item.count})</span>
            )}
          </>
        );

        if (item.href) {
          return (
            <li key={item.key} className={liClass}>
              <a href={item.href} style={{ display: 'flex', width: '100%' }}>{inner}</a>
            </li>
          );
        }
        return (
          <li
            key={item.key}
            className={liClass}
            onClick={item.onClick}
            style={item.onClick ? { cursor: 'pointer' } : undefined}
          >
            {inner}
          </li>
        );
      })}
    </ul>
  );
}
