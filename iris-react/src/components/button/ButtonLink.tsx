import React from 'react';

type ButtonLinkType = 'semibold' | 'medium';
type ButtonLinkSize = 'xs' | 'sm' | 'md';

interface ButtonLinkProps {
  label: string;
  type?: ButtonLinkType;
  size?: ButtonLinkSize;
  /** Render as <a> with href instead of <button>. */
  href?: string;
  icon?: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
}

/**
 * Inline text link styled as an action — no border, no background.
 *
 * USE FOR: inline text actions, "View all", "Learn more", card footer links,
 *   secondary navigation links within body copy
 * REPLACES MUI: <Link component="button">, <Button variant="text">
 * DO NOT USE FOR:
 *   - Primary/secondary actions with clear affordance → Button
 *   - Navigation links in sidebar → Sidebar nav items
 *
 * semibold = brand purple (#42389d), use for clickable actions
 * medium   = gray, use for de-emphasised secondary links
 *
 * Requires iris-components.css to be loaded at app level.
 *
 * @example
 * <ButtonLink label="View report" type="semibold" onClick={handleView} />
 * <ButtonLink label="Learn more" href="/docs" size="sm" />
 */
export function ButtonLink({
  label,
  type = 'semibold',
  size = 'md',
  href,
  icon,
  onClick,
  disabled = false,
  className,
}: ButtonLinkProps) {
  const classes = [
    'btn-link',
    type === 'semibold' ? 'btn-link-semibold' : 'btn-link-medium',
    `btn-${size}`,
    className,
  ].filter(Boolean).join(' ');

  if (href) {
    return (
      <a href={href} className={classes}>
        {icon}
        {label}
      </a>
    );
  }

  return (
    <button type="button" className={classes} onClick={onClick} disabled={disabled}>
      {icon}
      {label}
    </button>
  );
}
