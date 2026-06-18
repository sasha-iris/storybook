import React from 'react';

/**
 * General-purpose content card shell for text, optional image, header, and footer.
 *
 * USE FOR: content cards, article previews, dashboard panels, settings sections.
 * REPLACES MUI: <Card>, <CardContent>, <CardHeader>, <CardActions>
 * DO NOT USE FOR: single numeric metrics → CardKPI; sparklines → use card + chart library;
 *   loading/empty/error states → CardStates.
 *
 * Requires iris-components.css to be loaded at app level.
 *
 * @example
 * <Card title="Revenue" body="Monthly recurring revenue overview." showFooter />
 */

export interface CardProps {
  /** Card heading. Keep under ~60 characters. */
  title?: string;
  /** Sub-label shown below the title in the header row. */
  subtitle?: string;
  /** Body copy. Typically 1–3 sentences. */
  body?: string;
  /** Slot for right-side header controls (period selectors, action menus). */
  headerControls?: React.ReactNode;
  /** Image URL. When provided, image renders flush at top and `.card-body` is used (no top padding). */
  image?: string;
  /** Alt text for the image. */
  imageAlt?: string;
  /** Footer content. Renders with border-top separator. */
  footer?: React.ReactNode;
  /**
   * Body slot padding variant.
   * - `padded` (default): `.card-body-padded` — use when no flush image above.
   * - `flush`: `.card-body` — use after a flush image or chart.
   */
  bodyPadding?: 'padded' | 'flush';
  /** Additional className applied to the `.card` root element. */
  className?: string;
  /** Card children override. When provided, `body` prop is ignored. */
  children?: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}

export function Card({
  title,
  subtitle,
  body,
  headerControls,
  image,
  imageAlt = '',
  footer,
  bodyPadding = 'padded',
  className,
  children,
  onClick,
}: CardProps) {
  const hasHeader = title || subtitle || headerControls;
  const bodyClass = image ? 'card-body' : bodyPadding === 'flush' ? 'card-body' : 'card-body-padded';

  return (
    <div className={`card${className ? ` ${className}` : ''}`} onClick={onClick}>
      {image && (
        <img
          src={image}
          alt={imageAlt}
          style={{ width: '100%', height: 180, objectFit: 'cover', display: 'block' }}
        />
      )}
      {hasHeader && (
        <div className="card-header">
          <div>
            {title && <div className="card-header-title">{title}</div>}
            {subtitle && <div className="card-header-sub">{subtitle}</div>}
          </div>
          {headerControls && (
            <div className="card-header-controls">{headerControls}</div>
          )}
        </div>
      )}
      <div className={bodyClass}>
        {children ?? (body && <p style={{ margin: 0 }}>{body}</p>)}
      </div>
      {footer && <div className="card-footer">{footer}</div>}
    </div>
  );
}
