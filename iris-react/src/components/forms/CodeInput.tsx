import React from 'react';

interface CodeInputProps {
  label?: string;
  value: string;
  onChange: (value: string) => void;
  error?: string;
  helpText?: string;
  id?: string;
  className?: string;
}

/**
 * One-time verification code field — `.form-input.form-input-code`, 6-digit numeric.
 *
 * USE FOR: TOTP / SMS / email verification codes
 * REPLACES MUI: custom 6-box OTP composition
 * DO NOT USE FOR: masked PINs → use a password input
 *
 * Sanitizes input to digits only, max 6 characters (strips spaces on paste).
 *
 * Requires iris-components.css to be loaded at app level.
 *
 * @example
 * <CodeInput label="Verification code" value={code} onChange={setCode} helpText="Enter the 6-digit code from your authenticator app." />
 */
export function CodeInput({
  label = 'Verification code',
  value,
  onChange,
  error,
  helpText,
  id,
  className,
}: CodeInputProps) {
  const inputId = id ?? 'code-input';
  const isError = !!error;

  return (
    <div className={['form-group', className].filter(Boolean).join(' ')}>
      {label && <label className="form-label" htmlFor={inputId}>{label}</label>}
      <input
        id={inputId}
        className={`form-input form-input-code${isError ? ' is-error' : ''}`}
        maxLength={6}
        inputMode="numeric"
        autoComplete="one-time-code"
        placeholder="123456"
        aria-label="6-digit verification code"
        aria-invalid={isError || undefined}
        value={value}
        onChange={(e) => onChange(e.target.value.replace(/\D/g, '').slice(0, 6))}
      />
      {helpText && !isError && <p className="form-helper">{helpText}</p>}
      {isError && <p className="form-feedback-error">{error}</p>}
    </div>
  );
}
