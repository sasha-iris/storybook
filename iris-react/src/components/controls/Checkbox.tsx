import React from 'react';

interface CheckboxProps {
  label: string;
  helper?: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
  intermediate?: boolean;
  disabled?: boolean;
  destructive?: boolean;
  className?: string;
}

/**
 * Checkbox with label and optional helper text.
 *
 * USE FOR: multi-select lists, boolean settings, accept ToS, feature toggles
 * REPLACES MUI: <Checkbox>, <FormControlLabel control={<Checkbox>}>
 * DO NOT USE FOR:
 *   - On/off setting that should look like a switch → Toggle
 *   - One-of-N selection → RadioGroup
 *
 * Requires iris-components.css to be loaded at app level.
 *
 * @example
 * <Checkbox label="Send me emails" checked={emails} onChange={setEmails} />
 * <Checkbox label="Delete account" destructive checked={confirm} onChange={setConfirm} />
 */
export function Checkbox({
  label,
  helper,
  checked,
  onChange,
  intermediate = false,
  disabled = false,
  destructive = false,
  className,
}: CheckboxProps) {
  const wrapClass = [
    'iris-control',
    destructive ? 'iris-control--destructive' : '',
    disabled ? 'iris-control--disabled' : '',
    className,
  ].filter(Boolean).join(' ');

  const checkClass = [
    'iris-checkbox',
    checked && !intermediate ? 'iris-checkbox--checked' : '',
    intermediate ? 'iris-checkbox--intermediate' : '',
    destructive ? 'iris-checkbox--destructive' : '',
    disabled ? 'iris-checkbox--disabled' : '',
  ].filter(Boolean).join(' ');

  return (
    <label className={wrapClass}>
      <span className="iris-control__check">
        <span
          className={checkClass}
          role="checkbox"
          aria-checked={intermediate ? 'mixed' : checked}
          aria-disabled={disabled}
          tabIndex={disabled ? -1 : 0}
          onClick={() => !disabled && onChange(!checked)}
          onKeyDown={(e) => { if ((e.key === ' ' || e.key === 'Enter') && !disabled) { e.preventDefault(); onChange(!checked); } }}
        />
      </span>
      <span className="iris-control__body">
        <span className="iris-control__label">{label}</span>
        {helper && <span className="iris-control__helper">{helper}</span>}
      </span>
    </label>
  );
}
