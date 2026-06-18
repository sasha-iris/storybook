import React from 'react';

/**
 * Multiline text input with label and helper text.
 *
 * USE FOR: feedback forms, comments, descriptions, message composition
 * REPLACES MUI: <TextField multiline rows={4} variant="outlined">
 * DO NOT USE FOR: single-line inputs (use FormInput); rich-text editing (use a WYSIWYG library)
 *
 * Requires iris-components.css to be loaded at app level.
 *
 * @example
 * <FormTextarea label="Your message" value={msg} onChange={setMsg} />
 * <FormTextarea label="Bio" rows={6} fieldState="error" helpText="Too long." />
 */

export type FormTextareaState = 'normal' | 'success' | 'error' | 'disabled';

export interface FormTextareaProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  helpText?: string;
  placeholder?: string;
  fieldState?: FormTextareaState;
  rows?: number;
  disabled?: boolean;
  required?: boolean;
  id?: string;
}

export function FormTextarea({
  label,
  value,
  onChange,
  helpText,
  placeholder,
  fieldState = 'normal',
  rows = 4,
  disabled = false,
  required = false,
  id,
}: FormTextareaProps) {
  const textareaId = id ?? `textarea-${label.toLowerCase().replace(/\s+/g, '-')}`;
  const isDisabled = disabled || fieldState === 'disabled';

  const stateClass = fieldState === 'error' ? ' is-error' : fieldState === 'success' ? ' is-success' : '';
  const feedbackClass =
    fieldState === 'error' ? 'form-feedback-error' :
    fieldState === 'success' ? 'form-feedback-success' :
    'form-helper';

  return (
    <div className="form-group">
      <label className="form-label" htmlFor={textareaId}>
        {label}{required && <span aria-hidden="true"> *</span>}
      </label>
      <textarea
        id={textareaId}
        className={`form-textarea${stateClass}`}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        rows={rows}
        disabled={isDisabled}
        aria-describedby={helpText ? `${textareaId}-help` : undefined}
        aria-invalid={fieldState === 'error' || undefined}
        aria-required={required || undefined}
      />
      {helpText && (
        <p id={`${textareaId}-help`} className={feedbackClass}>
          {helpText}
        </p>
      )}
    </div>
  );
}
