import React from 'react';

interface RadioCardOption {
  value: string;
  label: string;
  helper?: string;
  icon?: React.ReactNode;
  disabled?: boolean;
}

interface RadioCardGroupProps {
  options: RadioCardOption[];
  value: string;
  onChange: (value: string) => void;
  name: string;
  className?: string;
}

/**
 * Selectable card radio group — large clickable cards with icon, label, and description.
 *
 * USE FOR: verification method selection (SMS/Authenticator/Email), plan selection,
 *   report type choice, any one-of-N selection that benefits from visual emphasis
 * REPLACES MUI: custom <Card> + <Radio> composition, or <ToggleButtonGroup> with cards
 * DO NOT USE FOR:
 *   - Short options without descriptions → RadioGroup
 *   - Multi-select → Checkbox
 *
 * Requires iris-components.css to be loaded at app level.
 *
 * @example
 * <RadioCardGroup
 *   name="auth"
 *   value={method}
 *   onChange={setMethod}
 *   options={[
 *     { value: 'sms', label: 'SMS', helper: 'Receive a code via text message' },
 *     { value: 'app', label: 'Authenticator App', helper: 'Use an authenticator app' },
 *   ]}
 * />
 */
export function RadioCardGroup({
  options,
  value,
  onChange,
  name,
  className,
}: RadioCardGroupProps) {
  return (
    <div role="radiogroup" className={className} style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
      {options.map((opt) => {
        const selected = opt.value === value;
        const cardClass = [
          'iris-radio-card',
          selected ? 'iris-radio-card--selected' : '',
          opt.disabled ? 'iris-radio-card--disabled' : '',
        ].filter(Boolean).join(' ');

        const radioClass = [
          'iris-radio',
          selected ? 'iris-radio--checked' : '',
          opt.disabled ? 'iris-radio--disabled' : '',
        ].filter(Boolean).join(' ');

        return (
          <label key={opt.value} className={cardClass}>
            <span className="iris-control__check">
              <span className={radioClass} aria-hidden="true" />
            </span>
            {opt.icon && <span className="iris-radio-card__icon">{opt.icon}</span>}
            <span className="iris-control__body">
              <span className="iris-control__label">{opt.label}</span>
              {opt.helper && <span className="iris-control__helper">{opt.helper}</span>}
            </span>
            <input
              type="radio"
              role="radio"
              name={name}
              value={opt.value}
              checked={selected}
              disabled={opt.disabled}
              onChange={() => !opt.disabled && onChange(opt.value)}
              style={{ position: 'absolute', opacity: 0, pointerEvents: 'none' }}
            />
          </label>
        );
      })}
    </div>
  );
}
