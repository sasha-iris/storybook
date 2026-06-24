import React from 'react';

type SkeletonVariant = 'text' | 'avatar' | 'image' | 'block';

interface SkeletonProps {
  variant?: SkeletonVariant;
  width?: number | string;
  height?: number | string;
  animated?: boolean;
  borderRadius?: number | string;
  className?: string;
}

/**
 * Placeholder skeleton for loading states — replaces real content while data fetches.
 *
 * USE FOR: loading cards, table rows, user avatars, text paragraphs during fetch
 * REPLACES MUI: <Skeleton>, <Skeleton variant="circular">, <Skeleton variant="rectangular">
 * DO NOT USE FOR:
 *   - Indeterminate loading with no known shape → spinner
 *   - Page-level loading gates → full-page spinner or progress bar
 *
 * Requires iris-components.css to be loaded at app level.
 *
 * @example
 * <Skeleton variant="text" width="75%" height={12} />
 * <Skeleton variant="avatar" width={40} height={40} />
 * <Skeleton variant="image" width="100%" height={200} />
 */
export function Skeleton({
  variant = 'text',
  width,
  height,
  animated = true,
  borderRadius,
  className,
}: SkeletonProps) {
  const baseClass = variant === 'avatar' ? 'skeleton-avatar'
    : variant === 'image' ? 'skeleton-image'
    : variant === 'text' ? 'skeleton-text'
    : 'skeleton';

  const animation = animated ? 'skeleton-pulse 1.5s ease-in-out infinite' : 'none';

  const style: React.CSSProperties = {
    animation,
    width: width != null ? (typeof width === 'number' ? `${width}px` : width) : undefined,
    height: height != null ? (typeof height === 'number' ? `${height}px` : height) : undefined,
    borderRadius: borderRadius != null ? (typeof borderRadius === 'number' ? `${borderRadius}px` : borderRadius) : undefined,
  };

  return <div className={[baseClass, className].filter(Boolean).join(' ')} style={style} aria-hidden="true" />;
}
