import React from 'react';

type ButtonColor = 'primary' | 'dark' | 'green' | 'red' | 'yellow' | 'blue' | 'gray' | 'alternative' | 'light' | 'purple';
type ButtonSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

interface ButtonProps {
  /** Button label text. Ignored when iconOnly is true. */
  label: string;
  color?: ButtonColor;
  size?: ButtonSize;
  /** Outline / ghost mode. Swaps btn-{color} for btn-outline-{color}. */
  outline?: boolean;
  /** Full pill border-radius via .btn-pill. */
  pill?: boolean;
  disabled?: boolean;
  /** Icon-only mode — removes label, forces square aspect ratio via .btn-icon. */
  iconOnly?: boolean;
  /** Icon node rendered before the label. */
  iconLeft?: React.ReactNode;
  /** Icon node rendered after the label. */
  iconRight?: React.ReactNode;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
  /** aria-label for icon-only buttons. Falls back to label when iconOnly=true. */
  ariaLabel?: string;
}

/**
 * Standard Iris button — 7 colors × 5 sizes × outline × pill × icon slots.
 *
 * USE FOR: form submit, CTA, save/confirm, page-level primary actions, danger/destructive actions
 * REPLACES MUI: <Button variant="contained">, <Button variant="outlined">, <IconButton>
 * DO NOT USE FOR:
 *   - Text/link actions → ButtonLink
 *   - Social sign-in → ButtonSocial
 *   - Segmented view toggles → ButtonGroup
 *   - Chart toolbar actions → ButtonSpecial variant="chart"
 *   - Table row actions → ButtonSpecial variant="table"
 *
 * Requires iris-components.css to be loaded at app level.
 *
 * @example
 * <Button color="primary" size="md" label="Save Changes" onClick={handleSave} />
 * <Button color="red" outline size="sm" label="Delete" onClick={handleDelete} />
 * <Button color="primary" iconOnly label="Action" iconLeft={<StarIcon />} />
 */
export function Button({
  label,
  color = 'primary',
  size = 'md',
  outline = false,
  pill = false,
  disabled = false,
  iconOnly = false,
  iconLeft,
  iconRight,
  onClick,
  type = 'button',
  className,
  ariaLabel,
}: ButtonProps) {
  const colorClass = outline ? `btn-outline-${color}` : `btn-${color}`;
  const classes = [
    'btn',
    colorClass,
    `btn-${size}`,
    pill ? 'btn-pill' : '',
    iconOnly ? 'btn-icon' : '',
    className,
  ].filter(Boolean).join(' ');

  return (
    <button
      type={type}
      className={classes}
      disabled={disabled}
      onClick={onClick}
      aria-label={iconOnly ? (ariaLabel ?? label) : ariaLabel}
      aria-disabled={disabled || undefined}
    >
      {iconLeft}
      {!iconOnly && <span>{label}</span>}
      {iconRight}
    </button>
  );
}
