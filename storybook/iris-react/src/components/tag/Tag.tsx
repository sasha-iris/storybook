import React from 'react';

type TagColor = 'gray' | 'blue' | 'indigo' | 'green' | 'yellow' | 'red' | 'purple' | 'pink';

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
  color = 'gray',
  dot = false,
  onDismiss,
  className,
}: TagProps) {
  const classes = ['tag', `tag-${color}`, className].filter(Boolean).join(' ');

  return (
    <span className={classes}>
      {dot && <span className="tag-dot" aria-hidden="true" />}
      {label}
      {onDismiss && (
        <button type="button" className="tag-dismiss" aria-label={`Remove ${label}`} onClick={onDismiss}>
          ×
        </button>
      )}
    </span>
  );
}
