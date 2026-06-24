import React from 'react';

type ButtonSpecialVariant = 'chart' | 'table';

interface ButtonSpecialProps {
  variant?: ButtonSpecialVariant;
  icon: React.ReactNode;
  disabled?: boolean;
  onClick?: () => void;
  ariaLabel?: string;
  className?: string;
}

/**
 * Specialised icon-only utility button for chart and table toolbars.
 *
 * USE FOR:
 *   - chart: compact 24px transparent icon button inside chart toolbars (Figma node 9705:152804)
 *   - table: 28px bordered/shadowed icon button for table row actions (Figma node 9287:163857)
 * REPLACES MUI: <IconButton>, table row action patterns
 * DO NOT USE FOR:
 *   - Page-level primary actions → Button
 *   - Navigation toggles → ButtonGroup
 *
 * CSS classes: btn-chart, btn-table (no wrapper/BEM modifier — these are the real classes, not `btn-special--*`).
 * Only :hover and :disabled states exist — there is no "active" state class.
 *
 * Requires iris-components.css to be loaded at app level.
 *
 * @example
 * <ButtonSpecial variant="chart" icon={<DownloadIcon />} ariaLabel="Download chart" />
 * <ButtonSpecial variant="table" icon={<EditIcon />} ariaLabel="Edit row" />
 */
export function ButtonSpecial({
  variant = 'chart',
  icon,
  disabled = false,
  onClick,
  ariaLabel,
  className,
}: ButtonSpecialProps) {
  const classes = [`btn-${variant}`, className].filter(Boolean).join(' ');

  return (
    <button
      type="button"
      className={classes}
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
    >
      {icon}
    </button>
  );
}
