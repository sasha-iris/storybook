import React from 'react';

interface NotificationItem {
  initials: string;
  message: string;
  time: string;
}

interface NotificationMenuProps {
  notifications: NotificationItem[];
  title?: string;
  onViewAll?: () => void;
  className?: string;
}

const EyeIcon = () => (
  <svg width="14" height="14" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
    <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
    <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
  </svg>
);

/**
 * Notification feed panel — bell-icon dropdown showing recent activity.
 *
 * USE FOR: bell-icon notification feeds (up to ~5 items, then "View all")
 * DO NOT USE FOR: action menus → Dropdown
 *
 * CSS classes: dropdown-menu, dropdown-notification, dropdown-notification__avatar,
 *   dropdown-notification__body, dropdown-notification__msg, dropdown-notification__time
 *
 * Requires iris-components.css to be loaded at app level.
 *
 * @example
 * <NotificationMenu notifications={[{ initials: 'JL', message: 'Jese Leos: "Hey, what\'s up?"', time: 'a few moments ago' }]} onViewAll={openAll} />
 */
export function NotificationMenu({ notifications, title = 'Notifications', onViewAll, className }: NotificationMenuProps) {
  return (
    <div className={['dropdown-menu', className].filter(Boolean).join(' ')} style={{ width: 384 }}>
      <div style={{ background: 'var(--color-bg-default)', padding: '8px 12px' }}>
        <span style={{ fontSize: 'var(--text-base)', fontWeight: 500, color: 'var(--color-text-heading)' }}>{title}</span>
      </div>
      <div style={{ paddingTop: 12 }}>
        {notifications.map((n, i) => (
          <div key={i} className="dropdown-notification">
            <span className="dropdown-notification__avatar">{n.initials}</span>
            <div className="dropdown-notification__body">
              <span className="dropdown-notification__msg">{n.message}</span>
              <span className="dropdown-notification__time">{n.time}</span>
            </div>
          </div>
        ))}
      </div>
      <div style={{ background: 'var(--color-bg-default)', padding: '8px 12px', display: 'flex', alignItems: 'center', gap: 8, cursor: onViewAll ? 'pointer' : undefined }} onClick={onViewAll}>
        <EyeIcon />
        <span style={{ fontSize: 'var(--text-sm)', fontWeight: 500, color: 'var(--color-text-heading)' }}>View all</span>
      </div>
    </div>
  );
}
