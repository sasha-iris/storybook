import React from 'react';

type LogoSize = 'xs' | 'sm' | 'md' | 'lg';

interface LogoProps {
  size?: LogoSize;
  dark?: boolean;
  /** Show the "Iris" wordmark next to the mark. Set false for icon-only slots (collapsed sidebars, favicons). */
  showText?: boolean;
  /** Base path where iris-mark-*.svg assets are hosted. Defaults to '/assets'. */
  assetsBasePath?: string;
  className?: string;
}

/** Figma-exact size config from LogoNew component (node 3778:41269). */
const SIZES: Record<LogoSize, { mark: number; text: number; gap: number }> = {
  xs: { mark: 24, text: 18, gap: 8 },
  sm: { mark: 32, text: 24, gap: 12 },
  md: { mark: 48, text: 36, gap: 16 },
  lg: { mark: 64, text: 60, gap: 16 },
};

/**
 * Iris hexagonal Smart mark — standalone or with the "Iris" wordmark.
 *
 * USE FOR: nav bar branding, onboarding headers, splash screens, sidebar logo slot
 * REPLACES MUI: custom <img> + <Typography> brand lockup
 * DO NOT USE FOR: favicon/card-badge slots smaller than 24px → mark loses hex detail below xs
 *
 * Note: `xs` dark has no dedicated raster in Figma and falls back to the `xs` light mark
 * (visually identical at 24px). Requires iris-mark-*.svg assets hosted at `assetsBasePath`
 * (defaults to '/assets' — copy from Storybook's public/assets/).
 *
 * @example
 * <Logo size="sm" />
 * <Logo size="md" dark showText={false} />
 */
export function Logo({ size = 'sm', dark = false, showText = true, assetsBasePath = '/assets', className }: LogoProps) {
  const { mark, text, gap } = SIZES[size];
  const fileSuffix = dark && size !== 'xs' ? `${size}-dark` : size;
  const src = `${assetsBasePath}/iris-mark-${fileSuffix}.svg`;

  if (!showText) {
    return (
      <img
        src={src}
        height={mark}
        alt="Iris"
        className={className}
        style={{ display: 'block', flexShrink: 0, width: 'auto' }}
      />
    );
  }

  return (
    <div
      className={['iris-logo', className].filter(Boolean).join(' ')}
      style={{ display: 'inline-flex', alignItems: 'center', gap }}
    >
      <img src={src} height={mark} alt="" aria-hidden="true" style={{ display: 'block', flexShrink: 0, width: 'auto' }} />
      <span
        style={{
          fontSize: text,
          fontWeight: 600,
          color: dark ? 'var(--color-bg-white)' : '#101828',
          whiteSpace: 'nowrap',
          lineHeight: 1,
        }}
      >
        Iris
      </span>
    </div>
  );
}
