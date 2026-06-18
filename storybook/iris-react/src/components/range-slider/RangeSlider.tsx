import React, { useId } from 'react';

interface RangeSliderProps {
  value: number;
  onChange: (value: number) => void;
  min?: number;
  max?: number;
  step?: number;
  label?: string;
  showValue?: boolean;
  disabled?: boolean;
  id?: string;
  className?: string;
}

/** Compute the CSS linear-gradient fill string for a range track. */
function fillStyle(value: number, min: number, max: number): string {
  const pct = ((value - min) / (max - min)) * 100;
  return `background: linear-gradient(to right, var(--color-brand-600) 0%, var(--color-brand-600) ${pct}%, var(--color-border-default) ${pct}%, var(--color-border-default) 100%)`;
}

/**
 * Single-thumb range slider.
 *
 * USE FOR: volume controls, budget sliders, opacity pickers, threshold settings
 * REPLACES MUI: <Slider>, <Slider value={n} onChange={...} min={0} max={100}>
 * DO NOT USE FOR: dual-thumb range → RangeSliderDual (or compose two inputs)
 *
 * Requires iris-components.css to be loaded at app level.
 *
 * @example
 * <RangeSlider value={volume} onChange={setVolume} label="Volume" showValue />
 */
export function RangeSlider({
  value,
  onChange,
  min = 0,
  max = 100,
  step = 1,
  label,
  showValue = false,
  disabled = false,
  id,
  className,
}: RangeSliderProps) {
  const generatedId = useId();
  const inputId = id ?? generatedId;

  return (
    <div className={`form-group${className ? ' ' + className : ''}`}>
      {(label || showValue) && (
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 6 }}>
          {label && <label className="form-label" htmlFor={inputId} style={{ marginBottom: 0 }}>{label}</label>}
          {showValue && <span className="form-helper" style={{ marginBottom: 0 }}>{value}</span>}
        </div>
      )}
      <input
        id={inputId}
        type="range"
        className="form-range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        disabled={disabled}
        aria-label={label ?? 'Slider'}
        aria-valuemin={min}
        aria-valuemax={max}
        aria-valuenow={value}
        style={fillStyle(value, min, max) as unknown as React.CSSProperties}
      />
    </div>
  );
}
