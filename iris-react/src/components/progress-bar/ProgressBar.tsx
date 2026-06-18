import React from 'react';

type ProgressColor = 'primary' | 'blue' | 'green' | 'red' | 'yellow' | 'indigo' | 'purple' | 'dark';

interface ProgressBarProps {
  value: number;
  color?: ProgressColor;
  /** Show percentage label. 'above' = above track; 'below' = below track. */
  label?: 'above' | 'below' | 'none';
  className?: string;
}

/**
 * Horizontal progress bar with fill percentage.
 *
 * USE FOR: file upload progress, form completion, onboarding steps completed,
 *   quota usage, task progress
 * REPLACES MUI: <LinearProgress>, <LinearProgress variant="determinate" value={n}>
 * DO NOT USE FOR:
 *   - Indeterminate loading → use a spinner
 *   - Step wizard progress → Stepper
 *
 * Requires iris-components.css to be loaded at app level.
 *
 * @example
 * <ProgressBar value={72} color="primary" label="above" />
 * <ProgressBar value={45} color="green" />
 */
export function ProgressBar({
  value,
  color = 'primary',
  label = 'none',
  className,
}: ProgressBarProps) {
  const pct = Math.max(0, Math.min(100, value));
  const labelEl = (
    <div style={{ fontSize: 'var(--text-xs)', fontWeight: 500, color: 'var(--color-text-secondary)', textAlign: 'right', marginBottom: label === 'above' ? 4 : 0, marginTop: label === 'below' ? 4 : 0 }}>
      {pct}%
    </div>
  );

  return (
    <div className={className}>
      {label === 'above' && labelEl}
      <div className="progress" role="progressbar" aria-valuenow={pct} aria-valuemin={0} aria-valuemax={100}>
        <div className={`progress-bar progress-bar-${color}`} style={{ width: `${pct}%` }} />
      </div>
      {label === 'below' && labelEl}
    </div>
  );
}
