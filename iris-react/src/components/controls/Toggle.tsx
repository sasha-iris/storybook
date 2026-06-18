import React from 'react';

interface ToggleProps {
  label: string;
  helper?: string;
  on: boolean;
  onChange: (on: boolean) => void;
  disabled?: boolean;
  destructive?: boolean;
  className?: string;
}

/**
 * Toggle switch with label and optional helper text.
 *
 * USE FOR: feature on/off settings, notifications on/off, enable/disable toggles
 * REPLACES MUI: <Switch>, <FormControlLabel control={<Switch>}>
 * DO NOT USE FOR:
 *   - Multi-value choice → RadioGroup
 *   - View-mode toggle (List/Kanban) → ButtonGroup
 *
 * Requires iris-components.css to be loaded at app level.
 *
 * @example
 * <Toggle label="Email notifications" on={emailOn} onChange={setEmailOn} />
 */
export function Toggle({
  label,
  helper,
  on,
  onChange,
  disabled = false,
  destructive = false,
  className,
}: ToggleProps) {
  const wrapClass = [
    'iris-control',
    destructive ? 'iris-control--destructive' : '',
    disabled ? 'iris-control--disabled' : '',
    className,
  ].filter(Boolean).join(' ');

  const toggleClass = [
    'iris-toggle',
    on ? 'iris-toggle--on' : 'iris-toggle--off',
    destructive ? 'iris-toggle--destructive' : '',
    disabled ? 'iris-toggle--disabled' : '',
  ].filter(Boolean).join(' ');

  return (
    <label className={wrapClass}>
      <span className="iris-control__check">
        <span
          className={toggleClass}
          role="switch"
          aria-checked={on}
          aria-disabled={disabled}
          tabIndex={disabled ? -1 : 0}
          onClick={() => !disabled && onChange(!on)}
          onKeyDown={(e) => { if ((e.key === ' ' || e.key === 'Enter') && !disabled) { e.preventDefault(); onChange(!on); } }}
        >
          <span className="iris-toggle__thumb" />
        </span>
      </span>
      <span className="iris-control__body">
        <span className="iris-control__label">{label}</span>
        {helper && <span className="iris-control__helper">{helper}</span>}
      </span>
    </label>
  );
}
