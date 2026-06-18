import React from 'react';

type IndicatorDotColor = 'blue' | 'purple' | 'indigo' | 'teal' | 'green' | 'yellow' | 'red' | 'gray';
type IndicatorBadgeVariant = 'active' | 'inactive' | 'pending' | 'online' | 'offline';

// ── Dot indicator — for chart legends, inline status labels ──────────────────

interface IndicatorDotProps {
  label: string;
  color?: IndicatorDotColor;
  className?: string;
}

/**
 * Dot label indicator — color dot + text label, typically for chart legends or status.
 *
 * USE FOR: chart series legends, inline metric labels, data series labels
 * REPLACES MUI: custom legend chip or <Chip> with dot avatar
 * DO NOT USE FOR: notification counts on icons → IndicatorCount; user presence → IndicatorBadge
 *
 * Requires iris-components.css to be loaded at app level.
 *
 * @example
 * <IndicatorDot label="Revenue" color="blue" />
 */
export function IndicatorDot({ label, color = 'blue', className }: IndicatorDotProps) {
  const dotClass = `iris-indicator__dot iris-indicator__dot--${color}`;
  return (
    <span className={['iris-indicator', className].filter(Boolean).join(' ')}>
      <span className={dotClass} aria-hidden="true" />
      <span>{label}</span>
    </span>
  );
}

// ── Count indicator — notification badge on icon ────────────────────────────

interface IndicatorCountProps {
  count: number;
  max?: number;
  className?: string;
}

/**
 * Notification count badge — small number overlaid on an icon.
 *
 * USE FOR: unread message counts, notification bell badges, cart item counts
 * REPLACES MUI: <Badge badgeContent={n}>, <Badge color="error">
 * DO NOT USE FOR: status labels → Badge; dot-only status → IndicatorBadge
 *
 * Wrap with a relative-positioned container to position over an icon.
 *
 * @example
 * <div style={{ position: 'relative', display: 'inline-flex' }}>
 *   <BellIcon />
 *   <IndicatorCount count={5} />
 * </div>
 */
export function IndicatorCount({ count, max = 99, className }: IndicatorCountProps) {
  const display = count > max ? `${max}+` : count;
  return (
    <span
      className={['iris-indicator__count', className].filter(Boolean).join(' ')}
      aria-label={`${count} notifications`}
    >
      {display}
    </span>
  );
}

// ── Badge indicator — user presence / online status ──────────────────────────

interface IndicatorBadgeProps {
  variant: IndicatorBadgeVariant;
  className?: string;
}

/**
 * Status badge dot — user online/offline/active/inactive presence indicator.
 *
 * USE FOR: user presence status in user lists, avatar overlays, team member status
 * REPLACES MUI: custom <Badge> with colored dot variant
 * DO NOT USE FOR: notification counts → IndicatorCount; chart legends → IndicatorDot
 *
 * @example
 * <IndicatorBadge variant="online" />
 */
export function IndicatorBadge({ variant, className }: IndicatorBadgeProps) {
  return (
    <span
      className={['iris-indicator-badge', `iris-indicator-badge--${variant}`, className].filter(Boolean).join(' ')}
      role="status"
    >
      <span className="iris-indicator-badge__dot" />
    </span>
  );
}
