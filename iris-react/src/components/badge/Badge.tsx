import React from 'react';

type BadgeColor = 'gray' | 'blue' | 'indigo' | 'purple' | 'pink' | 'green' | 'yellow' | 'red';
type BadgeSize = 'sm' | 'md' | 'lg';

interface BadgeProps {
  label: string;
  color?: BadgeColor;
  size?: BadgeSize;
  /** Dismissible — renders an × button. */
  onDismiss?: () => void;
  /** Icon node rendered before the label (e.g. status dot, clock icon). */
  icon?: React.ReactNode;
  /** Second line below the label, e.g. "11.0% rev" — renders the two-line `badge--metric` layout. */
  sub?: string;
  className?: string;
}

/**
 * Status and category label badge.
 *
 * USE FOR: status labels (Active, Pending, Closed), category tags, count chips,
 *   environment labels (Production, Staging), user role indicators
 * REPLACES MUI: <Chip label="..." size="small">, <Chip variant="outlined">
 * DO NOT USE FOR:
 *   - Interactive filter/toggle chips → Chip component
 *   - Notification counts on icons → Indicator component
 *
 * Requires iris-components.css to be loaded at app level.
 *
 * @example
 * <Badge label="Active" color="green" />
 * <Badge label="In review" color="indigo" size="lg" />
 * <Badge label="Beta" color="purple" onDismiss={handleDismiss} />
 */
export function Badge({
  label,
  color = 'gray',
  size = 'md',
  onDismiss,
  icon,
  sub,
  className,
}: BadgeProps) {
  const classes = [
    'badge',
    size !== 'md' ? `badge-${size}` : '',
    `badge-${color}`,
    sub != null ? 'badge--metric' : '',
    className,
  ].filter(Boolean).join(' ');

  if (sub != null) {
    return (
      <span className={classes}>
        {icon ? <span className="badge--metric__icon">{icon}{label}</span> : label}
        <span className="badge--metric__sub">{sub}</span>
      </span>
    );
  }

  return (
    <span className={classes}>
      {icon}
      <span>{label}</span>
      {onDismiss && (
        <button
          type="button"
          className="badge__dismiss"
          aria-label={`Remove ${label}`}
          onClick={onDismiss}
        >
          ×
        </button>
      )}
    </span>
  );
}
