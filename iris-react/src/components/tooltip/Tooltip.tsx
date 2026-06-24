import React, { useState } from 'react';

type TooltipPosition = 'top' | 'right' | 'bottom' | 'left';
type TooltipColor = 'dark' | 'white';

interface TooltipProps {
  content: React.ReactNode;
  children: React.ReactElement;
  position?: TooltipPosition;
  color?: TooltipColor;
  id?: string;
}

/**
 * Tooltip shown on hover/focus over a trigger element.
 *
 * USE FOR: explaining icon buttons, surfacing extra details on hover,
 *   keyboard shortcut hints (pair with KBD inside content)
 * REPLACES MUI: <Tooltip>, <Tooltip title="..."><element /></Tooltip>
 * DO NOT USE FOR:
 *   - Long or critical information → use inline help text or popover
 *   - Mobile-primary interfaces (tooltips are invisible on touch)
 *
 * Requires iris-components.css to be loaded at app level.
 *
 * @example
 * <Tooltip content="Save changes" position="top">
 *   <button className="btn-icon" aria-label="Save"><SaveIcon /></button>
 * </Tooltip>
 */
export function Tooltip({
  content,
  children,
  position = 'top',
  color = 'dark',
  id,
}: TooltipProps) {
  const [visible, setVisible] = useState(false);
  const tipId = id ?? `tooltip-${Math.random().toString(36).slice(2, 8)}`;

  const child = React.cloneElement(children, {
    'aria-describedby': visible ? tipId : undefined,
    onMouseEnter: () => setVisible(true),
    onMouseLeave: () => setVisible(false),
    onFocus: () => setVisible(true),
    onBlur: () => setVisible(false),
  });

  return (
    <div className="tooltip-wrap" data-tooltip>
      {child}
      {visible && (
        <div
          id={tipId}
          className={[
            'tooltip-bubble',
            `tooltip-${position}`,
            color === 'white' ? 'tooltip-light' : '',
          ].filter(Boolean).join(' ')}
          role="tooltip"
        >
          {content}
        </div>
      )}
    </div>
  );
}
