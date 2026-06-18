import React from 'react';

interface RadioOption {
  value: string;
  label: string;
  helper?: string;
  disabled?: boolean;
}

interface RadioGroupProps {
  options: RadioOption[];
  value: string;
  onChange: (value: string) => void;
  name: string;
  destructive?: boolean;
  className?: string;
}

/**
 * Radio group for one-of-N selection with optional helper text per option.
 *
 * USE FOR: notification preferences, report type selection, simple settings choices
 * REPLACES MUI: <RadioGroup>, <FormControlLabel control={<Radio>}>
 * DO NOT USE FOR:
 *   - Options needing icons/descriptions → RadioCard
 *   - Binary toggle → Toggle
 *
 * Requires iris-components.css to be loaded at app level.
 *
 * @example
 * <RadioGroup name="theme" options={themeOptions} value={theme} onChange={setTheme} />
 */
export function RadioGroup({
  options,
  value,
  onChange,
  name,
  destructive = false,
  className,
}: RadioGroupProps) {
  return (
    <div role="radiogroup" className={className}>
      {options.map((opt) => {
        const checked = opt.value === value;
        const wrapClass = [
          'iris-control',
          destructive ? 'iris-control--destructive' : '',
          opt.disabled ? 'iris-control--disabled' : '',
        ].filter(Boolean).join(' ');

        const radioClass = [
          'iris-radio',
          checked ? 'iris-radio--checked' : '',
          destructive ? 'iris-radio--destructive' : '',
          opt.disabled ? 'iris-radio--disabled' : '',
        ].filter(Boolean).join(' ');

        return (
          <label key={opt.value} className={wrapClass}>
            <span className="iris-control__check">
              <span
                className={radioClass}
                role="radio"
                aria-checked={checked}
                aria-disabled={opt.disabled}
                tabIndex={opt.disabled ? -1 : 0}
                onClick={() => !opt.disabled && onChange(opt.value)}
                onKeyDown={(e) => { if ((e.key === ' ' || e.key === 'Enter') && !opt.disabled) { e.preventDefault(); onChange(opt.value); } }}
              />
            </span>
            <span className="iris-control__body">
              <span className="iris-control__label">{opt.label}</span>
              {opt.helper && <span className="iris-control__helper">{opt.helper}</span>}
            </span>
          </label>
        );
      })}
    </div>
  );
}
