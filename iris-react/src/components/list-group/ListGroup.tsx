import React from 'react';

interface ListGroupItem {
  key: string;
  label: string;
  icon?: React.ReactNode;
  href?: string;
  onClick?: () => void;
}

interface ListGroupProps {
  items: ListGroupItem[];
  dark?: boolean;
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
 * Requires iris-components.css to be loaded at app level.
 *
 * @example
 * <ListGroup items={[{ key: 'profile', label: 'Profile' }, { key: 'settings', label: 'Settings' }]} />
 */
export function ListGroup({ items, dark = false, width, className }: ListGroupProps) {
  const ulClass = ['list-group', dark ? 'list-group--dark' : '', className].filter(Boolean).join(' ');
  const style = width ? { width: typeof width === 'number' ? `${width}px` : width } : undefined;

  return (
    <ul className={ulClass} style={style}>
      {items.map((item) => {
        const content = (
          <>
            {item.icon && <span className="list-group-item__icon">{item.icon}</span>}
            {item.label}
          </>
        );

        if (item.href) {
          return (
            <li key={item.key} className="list-group-item">
              <a href={item.href}>{content}</a>
            </li>
          );
        }
        return (
          <li
            key={item.key}
            className="list-group-item"
            onClick={item.onClick}
            style={item.onClick ? { cursor: 'pointer' } : undefined}
          >
            {content}
          </li>
        );
      })}
    </ul>
  );
}
