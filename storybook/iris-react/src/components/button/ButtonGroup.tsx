import React from 'react';

type ButtonGroupSize = 'default' | 'sm';

interface ButtonGroupSegment {
  label: string;
  /** Icon node rendered inside the segment. When provided without label, segment becomes icon-only. */
  icon?: React.ReactNode;
  /** aria-label for icon-only segments. */
  ariaLabel?: string;
}

interface ButtonGroupProps {
  /** Array of segment definitions. Minimum 2. */
  segments: ButtonGroupSegment[];
  /** Zero-based index of the active segment. */
  activeIndex?: number;
  /**
   * Adds btn-group--primary — soft indigo active state for chart/visualisation toggles.
   * Use for Daily/Cumulative chart mode, time-range pickers, KPI metric selectors.
   */
  primary?: boolean;
  /** sm adds btn-group--sm — compact ~32px height for card/chart areas. */
  size?: ButtonGroupSize;
  /** Called with the clicked segment index. */
  onChange?: (index: number) => void;
  className?: string;
}

/**
 * Segmented button group — joined segments sharing a single border line.
 *
 * USE FOR: view mode toggles (List/Kanban), chart toggles (Daily/Cumulative),
 *   time-range pickers, prev/next pagination controls
 * REPLACES MUI: <ToggleButtonGroup>, <ButtonGroup>
 * DO NOT USE FOR:
 *   - Page-level navigation → iris-tab (Tab component)
 *   - Independent unrelated buttons → use separate Button components
 *
 * Requires iris-components.css to be loaded at app level.
 *
 * @example
 * <ButtonGroup
 *   segments={[{ label: 'Years' }, { label: 'Months' }, { label: 'Days' }]}
 *   activeIndex={2}
 *   onChange={setActive}
 * />
 *
 * // Chart toggle (primary + sm)
 * <ButtonGroup
 *   segments={[{ label: 'Daily' }, { label: 'Cumulative' }]}
 *   activeIndex={0}
 *   primary
 *   size="sm"
 *   onChange={setMode}
 * />
 */
export function ButtonGroup({
  segments,
  activeIndex = 0,
  primary = false,
  size = 'default',
  onChange,
  className,
}: ButtonGroupProps) {
  const classes = [
    'btn-group',
    primary ? 'btn-group--primary' : '',
    size === 'sm' ? 'btn-group--sm' : '',
    className,
  ].filter(Boolean).join(' ');

  return (
    <div className={classes}>
      {segments.map((seg, i) => (
        <button
          key={i}
          className={i === activeIndex ? 'btn active' : 'btn'}
          onClick={() => onChange?.(i)}
          aria-label={seg.ariaLabel}
          aria-pressed={i === activeIndex}
        >
          {seg.icon}
          {seg.label && <span>{seg.label}</span>}
        </button>
      ))}
    </div>
  );
}
