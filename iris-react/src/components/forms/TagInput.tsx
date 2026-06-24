import React, { useState } from 'react';

interface TagInputProps {
  label?: string;
  tags: string[];
  onChange: (tags: string[]) => void;
  placeholder?: string;
  helpText?: string;
  error?: string;
  /** Indigo pill tags (Multiselect pattern) vs plain gray tags (Tag Input pattern). */
  variant?: 'default' | 'indigo';
  id?: string;
  className?: string;
}

const XSmIcon = ({ color = '#6b7280' }: { color?: string }) => (
  <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true">
    <path d="M7.5 2.5 2.5 7.5M2.5 2.5l5 5" stroke={color} strokeWidth={1.5} strokeLinecap="round" />
  </svg>
);

const ChevronDownIcon = ({ color = '#6b7280' }: { color?: string }) => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
    <path d="m4.5 6.75 4.5 4.5 4.5-4.5" stroke={color} strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

/**
 * Tag/multiselect input — type to add, click × to remove. Backed by `.form-tag-wrap`.
 *
 * USE FOR: email recipient lists, multi-value category pickers, permission tag lists
 * REPLACES MUI: <Autocomplete multiple>, custom chip-input composition
 * DO NOT USE FOR: single value selection → Select
 *
 * `variant="indigo"` renders the Multiselect pattern (`.form-tag--indigo` pills + trailing
 * chevron) — use when the input represents choosing from a fixed option set rather than
 * free-text tags.
 *
 * Requires iris-components.css to be loaded at app level.
 *
 * @example
 * <TagInput label="Tags" tags={tags} onChange={setTags} placeholder="Add tag..." />
 * <TagInput variant="indigo" tags={selected} onChange={setSelected} placeholder="Placeholder" />
 */
export function TagInput({
  label,
  tags,
  onChange,
  placeholder = 'Add tag...',
  helpText,
  error,
  variant = 'default',
  id,
  className,
}: TagInputProps) {
  const [draft, setDraft] = useState('');
  const isError = !!error;
  const tagClass = variant === 'indigo' ? 'form-tag form-tag--indigo' : 'form-tag';
  const xColor = variant === 'indigo' ? '#3730a3' : '#6b7280';

  function commitDraft() {
    const v = draft.trim();
    if (v && !tags.includes(v)) onChange([...tags, v]);
    setDraft('');
  }

  return (
    <div className={className}>
      {label && <label className="form-label" htmlFor={id} style={{ color: isError ? '#f05252' : undefined, fontSize: variant === 'default' ? 16 : undefined }}>{label}</label>}
      <div
        className={`form-tag-wrap${isError ? ' is-error' : ''}`}
        style={{ cursor: 'pointer' }}
        onClick={(e) => { if (e.target === e.currentTarget) document.getElementById(id ?? '')?.focus(); }}
      >
        {tags.map((t) => (
          <span key={t} className={tagClass}>
            {t}
            <button type="button" className="form-tag__x" aria-label={`Remove ${t}`} onClick={() => onChange(tags.filter((x) => x !== t))}>
              <XSmIcon color={xColor} />
            </button>
          </span>
        ))}
        <input
          id={id}
          type="text"
          className="form-tag-input"
          placeholder={placeholder}
          value={draft}
          onChange={(e) => setDraft(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ',') { e.preventDefault(); commitDraft(); }
            else if (e.key === 'Backspace' && !draft && tags.length) onChange(tags.slice(0, -1));
          }}
          onBlur={commitDraft}
        />
        {variant === 'indigo' && <ChevronDownIcon />}
      </div>
      {helpText && !isError && <p className="form-helper">{helpText}</p>}
      {isError && <p className="form-feedback-error">{error}</p>}
    </div>
  );
}
