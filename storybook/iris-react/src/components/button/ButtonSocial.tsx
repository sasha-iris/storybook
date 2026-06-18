import React from 'react';

type ButtonSocialColor = 'dark' | 'dark-outline' | 'white' | 'white-outline';
type ButtonSocialSize = 'xs' | 'sm' | 'md' | 'lg';

interface ButtonSocialProps {
  label: string;
  color?: ButtonSocialColor;
  size?: ButtonSocialSize;
  /** Icon node (e.g. Google, GitHub SVG). */
  icon?: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
}

/**
 * Social / OAuth sign-in button with provider icon slot.
 *
 * USE FOR: "Continue with Google", "Sign in with GitHub", OAuth provider buttons
 * REPLACES MUI: custom Button with startIcon for OAuth flows
 * DO NOT USE FOR:
 *   - Regular actions → Button
 *   - Share/follow social actions → use plain Button with icon
 *
 * Requires iris-components.css to be loaded at app level.
 *
 * @example
 * <ButtonSocial label="Continue with Google" color="white-outline" icon={<GoogleIcon />} />
 * <ButtonSocial label="Sign in with GitHub" color="dark" icon={<GitHubIcon />} />
 */
export function ButtonSocial({
  label,
  color = 'dark',
  size = 'md',
  icon,
  onClick,
  disabled = false,
  className,
}: ButtonSocialProps) {
  const colorClass = `btn-social-${color}`;
  const classes = ['btn-social', colorClass, `btn-${size}`, className]
    .filter(Boolean).join(' ');

  return (
    <button type="button" className={classes} onClick={onClick} disabled={disabled}>
      {icon}
      <span>{label}</span>
    </button>
  );
}
