import React from 'react';

type ButtonSpecialVariant = 'chart' | 'table' | 'filter' | 'icon-action';

interface ButtonSpecialProps {
  label?: string;
  variant?: ButtonSpecialVariant;
  icon?: React.ReactNode;
  active?: boolean;
  disabled?: boolean;
  onClick?: () => void;
  ariaLabel?: string;
  className?: string;
}

/**
 * Specialised toolbar and utility buttons for chart, table, and filter contexts.
 *
 * USE FOR:
 *   - chart: chart toolbar actions (zoom, download, settings)
 *   - table: table row actions (edit, delete, expand)
 *   - filter: filter/sort trigger buttons
 *   - icon-action: icon-only action in dense UI (card header, toolbar)
 * REPLACES MUI: <IconButton>, <Tooltip><IconButton>, table row action patterns
 * DO NOT USE FOR:
 *   - Page-level primary actions → Button
 *   - Navigation toggles → ButtonGroup
 *
 * Requires iris-components.css to be loaded at app level.
 *
 * @example
 * <ButtonSpecial variant="chart" icon={<DownloadIcon />} ariaLabel="Download chart" />
 * <ButtonSpecial variant="filter" label="Filter" icon={<FilterIcon />} active={hasFilters} />
 */
export function ButtonSpecial({
  label,
  variant = 'icon-action',
  icon,
  active = false,
  disabled = false,
  onClick,
  ariaLabel,
  className,
}: ButtonSpecialProps) {
  const classes = [
    'btn-special',
    `btn-special--${variant}`,
    active ? 'active' : '',
    className,
  ].filter(Boolean).join(' ');

  return (
    <button
      type="button"
      className={classes}
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel ?? label}
      aria-pressed={active}
    >
      {icon}
      {label && <span>{label}</span>}
    </button>
  );
}
