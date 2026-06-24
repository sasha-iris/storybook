import React, { useState } from 'react';

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

const ChevronDownIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
    <path d="m5 7.5 5 5 5-5" stroke="#1f2a37" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const ChevronUpIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
    <path d="m5 12.5 5-5 5 5" stroke="#1f2a37" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

function SidebarNavItem({
  item,
  activeKey,
  onItemClick,
}: {
  item: SidebarItem;
  activeKey: string;
  onItemClick?: (key: string) => void;
}) {
  const hasChildren = !!item.children?.length;
  const isActive = item.key === activeKey;
  const isChildActive = hasChildren && item.children!.some((c) => c.key === activeKey);
  const [expanded, setExpanded] = useState(isActive || isChildActive);
  const Tag = item.href && !hasChildren ? 'a' : 'div';

  return (
    <>
      <Tag
        className={`sidebar-item${isActive ? ' active' : ''}`}
        href={!hasChildren ? item.href : undefined}
        aria-current={isActive ? 'page' : undefined}
        aria-expanded={hasChildren ? expanded : undefined}
        onClick={hasChildren ? () => setExpanded((e) => !e) : !item.href ? () => onItemClick?.(item.key) : undefined}
        style={hasChildren || !item.href ? { cursor: 'pointer' } : undefined}
      >
        <div style={{ display: 'flex', flex: 1, gap: 4, alignItems: 'center', minWidth: 0 }}>
          {item.icon && (
            <span className="sidebar-item-icon" style={{ display: 'flex', alignItems: 'center' }}>
              {item.icon}
            </span>
          )}
          <span style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{item.label}</span>
        </div>
        {hasChildren && (
          <span style={{ flexShrink: 0, display: 'flex' }}>
            {expanded ? <ChevronUpIcon /> : <ChevronDownIcon />}
          </span>
        )}
      </Tag>
      {hasChildren && expanded && (
        <div style={{ paddingLeft: 28 }}>
          {item.children!.map((child) => {
            const childActive = child.key === activeKey;
            const ChildTag = child.href ? 'a' : 'div';
            return (
              <ChildTag
                key={child.key}
                className={`sidebar-item${childActive ? ' active' : ''}`}
                href={child.href}
                style={{ paddingLeft: 0, cursor: child.href ? undefined : 'pointer' }}
                aria-current={childActive ? 'page' : undefined}
                onClick={!child.href ? () => onItemClick?.(child.key) : undefined}
              >
                <span>{child.label}</span>
              </ChildTag>
            );
          })}
        </div>
      )}
    </>
  );
}
