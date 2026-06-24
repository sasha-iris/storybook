import React from 'react';

type TagColor = 'grey' | 'blue' | 'indigo' | 'green' | 'red' | 'orange' | 'teal' | 'purple' | 'pink';

const DOT_FILL: Record<TagColor, string> = {
  grey:   '#4b5563',
  indigo: '#5850ec',
  green:  '#057a55',
  red:    '#e02424',
  orange: '#d03801',
  teal:   '#009689',
  blue:   'var(--color-primary)',
  purple: '#7e3af2',
  pink:   '#d61f69',
};

interface TagProps {
  label: string;
  color?: TagColor;
  /** Dot indicator before label. */
  dot?: boolean;
  onDismiss?: () => void;
  className?: string;
}

/**
 * Compact taxonomy tag — smaller than Badge, used for classification.
 *
 * USE FOR: article tags, content categories, multi-select taxonomy labels,
 *   inline classification markers
 * REPLACES MUI: <Chip size="small" variant="outlined">
 * DO NOT USE FOR:
 *   - Status labels with color meaning → Badge
 *   - Interactive filter chips → Chip
 *
 * Requires iris-components.css to be loaded at app level.
 *
 * @example
 * <Tag label="Finance" color="indigo" />
 * <Tag label="Q4 2024" dot color="green" />
 */
export function Tag({
  label,
  color = 'grey',
  dot = false,
  onDismiss,
  className,
}: TagProps) {
  const classes = ['iris-tag', `iris-tag--${color}`, className].filter(Boolean).join(' ');
  const fill = DOT_FILL[color];

  return (
    <span className={classes}>
      {dot && (
        <span className="iris-tag__dot">
          <svg width="12" height="12" viewBox="0 0 12 12" fill={fill} aria-hidden="true">
            <circle cx="6" cy="6" r="3" />
          </svg>
        </span>
      )}
      <span>{label}</span>
      {onDismiss && (
        <button
          type="button"
          aria-label={`Remove ${label}`}
          onClick={onDismiss}
          style={{ display: 'inline-flex', alignItems: 'center', background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
        >
          <svg width="12" height="12" viewBox="0 0 20 20" fill={fill} aria-hidden="true">
            <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"/>
          </svg>
        </button>
      )}
    </span>
  );
}
