import React from 'react';

interface ReadOnlyFieldProps {
  label: string;
  value: string;
  className?: string;
}

const ChevronDownIcon = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
    <path d="m4.5 6.75 4.5 4.5 4.5-4.5" stroke="#d1d5db" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

/**
 * Read-only field — displays a label/value pair styled like a disabled select trigger.
 *
 * USE FOR: non-editable account fields (email, plan, account ID) shown inside a form layout
 * REPLACES MUI: <TextField disabled>
 * DO NOT USE FOR: editable fields → FormInput
 *
 * Requires iris-components.css to be loaded at app level.
 *
 * @example
 * <ReadOnlyField label="Email:" value="namesurname@company.com" />
 */
export function ReadOnlyField({ label, value, className }: ReadOnlyFieldProps) {
  return (
    <div className={['form-readonly', className].filter(Boolean).join(' ')}>
      <span className="form-readonly__label">{label}</span>
      <span className="form-readonly__value">{value}</span>
      <ChevronDownIcon />
    </div>
  );
}
