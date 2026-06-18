import React from 'react';

/**
 * Standard text input field with label, helper text, and validation states.
 *
 * USE FOR: sign-up forms, settings panels, search configuration, inline editing
 * REPLACES MUI: <TextField variant="outlined"> / <TextField variant="filled">
 * DO NOT USE FOR: dropdowns or single-item selection (use Select); multi-value tags (use TagInput)
 *
 * Requires iris-components.css to be loaded at app level.
 *
 * @example
 * <FormInput label="Email" value={email} onChange={setEmail} />
 * <FormInput label="First name" fieldState="error" helpText="This field is required." />
 */

export type FormFieldState = 'normal' | 'success' | 'error' | 'disabled';
export type FormInputSize = 'small' | 'regular' | 'large';

export interface FormInputProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  helpText?: string;
  placeholder?: string;
  fieldState?: FormFieldState;
  size?: FormInputSize;
  disabled?: boolean;
  required?: boolean;
  id?: string;
  type?: string;
}

export function FormInput({
  label,
  value,
  onChange,
  helpText,
  placeholder,
  fieldState = 'normal',
  size = 'regular',
  disabled = false,
  required = false,
  id,
  type = 'text',
}: FormInputProps) {
  const inputId = id ?? `input-${label.toLowerCase().replace(/\s+/g, '-')}`;
  const isDisabled = disabled || fieldState === 'disabled';

  const sizeClass = size === 'small' ? ' form-input-sm' : size === 'large' ? ' form-input-lg' : '';
  const stateClass = fieldState === 'error' ? ' is-error' : fieldState === 'success' ? ' is-success' : '';
  const feedbackClass =
    fieldState === 'error' ? 'form-feedback-error' :
    fieldState === 'success' ? 'form-feedback-success' :
    'form-helper';

  return (
    <div className="form-group">
      <label className="form-label" htmlFor={inputId}>
        {label}{required && <span aria-hidden="true"> *</span>}
      </label>
      <input
        id={inputId}
        type={type}
        className={`form-input${sizeClass}${stateClass}`}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        disabled={isDisabled}
        aria-describedby={helpText ? `${inputId}-help` : undefined}
        aria-invalid={fieldState === 'error' || undefined}
        aria-required={required || undefined}
      />
      {helpText && (
        <p id={`${inputId}-help`} className={feedbackClass}>
          {helpText}
        </p>
      )}
    </div>
  );
}
