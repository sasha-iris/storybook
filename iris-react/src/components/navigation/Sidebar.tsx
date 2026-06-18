import React from 'react';

interface SidebarItem {
  key: string;
  label: string;
  icon?: React.ReactNode;
  href?: string;
  children?: SidebarItem[];
}

interface SidebarProps {
  items: SidebarItem[];
  activeKey: string;
  onItemClick?: (key: string) => void;
  logo?: React.ReactNode;
  footer?: React.ReactNode;
  color?: 'white' | 'gray';
  collapsed?: boolean;
  className?: string;
}

/**
 * Application navigation sidebar.
 *
 * USE FOR: main app navigation, section navigation, multi-level nav trees
 * REPLACES MUI: <Drawer permanent>, custom nav list with MUI ListItem
 * DO NOT USE FOR:
 *   - Page-level tab switching → Tabs
 *   - Temporary slide-in panels → Drawer
 *
 * Requires iris-components.css to be loaded at app level.
 *
 * @example
 * <Sidebar
 *   items={[{ key: 'overview', label: 'Overview', icon: <HomeIcon /> }]}
 *   activeKey={route}
 *   onItemClick={navigate}
 *   color="gray"
 * />
 */
export function Sidebar({
  items,
  activeKey,
  onItemClick,
  logo,
  footer,
  color = 'gray',
  collapsed = false,
  className,
}: SidebarProps) {
  const asideClass = [
    'sidebar',
    color === 'gray' ? 'sidebar--gray' : '',
    collapsed ? 'sidebar--collapsed' : '',
    className,
  ].filter(Boolean).join(' ');

  if (collapsed) {
    return (
      <aside className={asideClass}>
        {items.map((item) => (
          <button
            key={item.key}
            type="button"
            className={`sidebar-contracted-item${item.key === activeKey ? ' active' : ''}`}
            title={item.label}
            aria-label={item.label}
            aria-current={item.key === activeKey ? 'page' : undefined}
            onClick={() => onItemClick?.(item.key)}
          >
            {item.icon}
          </button>
        ))}
      </aside>
    );
  }

  return (
    <aside className={asideClass}>
      {logo && <div className="sidebar-brand">{logo}</div>}
      <nav className="sidebar-nav">
        {items.map((item) => (
          <SidebarNavItem
            key={item.key}
            item={item}
            activeKey={activeKey}
            onItemClick={onItemClick}
          />
        ))}
      </nav>
      {footer && <div className="sidebar-footer">{footer}</div>}
    </aside>
  );
}

function SidebarNavItem({
  item,
  activeKey,
  onItemClick,
}: {
  item: SidebarItem;
  activeKey: string;
  onItemClick?: (key: string) => void;
}) {
  const isActive = item.key === activeKey;
  const Tag = item.href ? 'a' : 'div';

  return (
    <Tag
      className={`sidebar-item${isActive ? ' active' : ''}`}
      href={item.href}
      aria-current={isActive ? 'page' : undefined}
      onClick={!item.href ? () => onItemClick?.(item.key) : undefined}
      style={!item.href ? { cursor: 'pointer' } : undefined}
    >
      {item.icon && (
        <span className="sidebar-item-icon" style={{ display: 'flex', alignItems: 'center' }}>
          {item.icon}
        </span>
      )}
      {item.label}
    </Tag>
  );
}
