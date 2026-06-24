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
const XIcon = () => (
  <svg width="12" height="12" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" style={{ opacity: 0.75 }}>
    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
  </svg>
);

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

  const content = (
    <>
      {icon}
      <span>{label}</span>
      {onDismiss && (
        <button
          type="button"
          aria-label={`Remove ${label}`}
          aria-disabled={disabled}
          disabled={disabled}
          onClick={(e) => { e.stopPropagation(); onDismiss(); }}
          style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', background: 'none', border: 'none', color: 'inherit', cursor: disabled ? 'not-allowed' : 'pointer', padding: 0, lineHeight: 0 }}
        >
          <XIcon />
        </button>
      )}
    </>
  );

  if (onClick && !onDismiss) {
    return (
      <button type="button" className={classes} onClick={onClick} disabled={disabled} style={{ cursor: disabled ? 'not-allowed' : 'pointer' }}>
        {icon}
        <span>{label}</span>
      </button>
    );
  }

  return (
    <span className={classes} onClick={disabled ? undefined : onClick} style={onClick ? { cursor: 'pointer' } : undefined}>
      {content}
    </span>
  );
}
