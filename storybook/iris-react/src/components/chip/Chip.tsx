import React from 'react';

type ChipColor = 'light' | 'dark' | 'indigo' | 'green' | 'red' | 'orange' | 'teal' | 'blue' | 'purple';

interface ChipProps {
  label: string;
  color?: ChipColor;
  /** Dismissible × button. */
  onDismiss?: () => void;
  /** Icon node rendered before label. */
  icon?: React.ReactNode;
  disabled?: boolean;
  onClick?: () => void;
  className?: string;
}

/**
 * Interactive filter/selection chip — clickable, dismissible.
 *
 * USE FOR: active filter indicators, selected tags, multi-select values,
 *   removable items in tag inputs
 * REPLACES MUI: <Chip clickable>, <Chip onDelete={...}>
 * DO NOT USE FOR:
 *   - Static read-only labels → Badge
 *   - Navigation tabs → Tabs
 *
 * Requires iris-components.css to be loaded at app level.
 *
 * @example
 * <Chip label="Finance" color="indigo" onDismiss={() => removeFilter('finance')} />
 * <Chip label="Active" color="green" onClick={handleToggle} />
 */
export function Chip({
  label,
  color = 'light',
  onDismiss,
  icon,
  disabled = false,
  onClick,
  className,
}: ChipProps) {
  const classes = [
    'iris-chip',
    `iris-chip--${color}`,
    disabled ? 'iris-chip--disabled' : '',
    className,
  ].filter(Boolean).join(' ');

  return (
    <button
      type="button"
      className={classes}
      onClick={onClick}
      disabled={disabled}
      aria-pressed={undefined}
    >
      {icon}
      <span>{label}</span>
      {onDismiss && (
        <span
          role="button"
          aria-label={`Remove ${label}`}
          onClick={(e) => { e.stopPropagation(); onDismiss(); }}
          style={{ marginLeft: 4, cursor: 'pointer' }}
        >
          ×
        </span>
      )}
    </button>
  );
}
