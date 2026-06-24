import React, { useRef, useState } from 'react';

type FileUploadType = 'default' | 'drag' | 'drag-btn';

interface FileUploadProps {
  label?: string;
  helpText?: string;
  type?: FileUploadType;
  size?: 'default' | 'lg';
  accept?: string;
  onFileSelect?: (file: File | null) => void;
  /** Hint text inside the drop zone. Default "Click to upload or drag and drop". */
  dropHint?: string;
  /** Format/size hint below the drop hint. */
  formatsHint?: string;
  id?: string;
  className?: string;
}

const ChevronDownIcon = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
    <path d="m4.5 6.75 4.5 4.5 4.5-4.5" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const CloudIcon = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true">
    <path d="M13 28a7 7 0 0 1 0-14 7 7 0 0 1 6.5-4.4A7 7 0 0 1 28 14.7 6 6 0 1 1 28 27H13Z" stroke="var(--color-border-light)" strokeWidth={1.5} />
    <path d="M20 32v-8M17 27l3-3 3 3" stroke="var(--color-border-light)" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const SearchIcon = ({ color = '#fff' }: { color?: string }) => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <path d="M14 14 10.5 10.5M11.5 7a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Z" stroke={color} strokeWidth={1.5} strokeLinecap="round" />
  </svg>
);

/**
 * File upload field — button-style chooser or drag-and-drop drop zone.
 *
 * USE FOR: avatar/logo uploads, document attachments, CSV import
 * REPLACES MUI: custom <input type="file"> styling
 * DO NOT USE FOR: text/number entry → FormInput
 *
 * Types: `default` (button + filename), `drag` (drop zone), `drag-btn` (drop zone + Browse File button).
 *
 * Requires iris-components.css to be loaded at app level.
 *
 * @example
 * <FileUpload type="drag" label="Upload file" onFileSelect={setFile} />
 */
export function FileUpload({
  label = 'Upload file',
  helpText = 'A note for extra info',
  type = 'default',
  size = 'default',
  accept,
  onFileSelect,
  dropHint = 'Click to upload or drag and drop',
  formatsHint,
  id,
  className,
}: FileUploadProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [fileName, setFileName] = useState<string | null>(null);
  const lgPad = size === 'lg' ? { paddingTop: 15, paddingBottom: 15 } : undefined;

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0] ?? null;
    setFileName(file?.name ?? null);
    onFileSelect?.(file);
  }

  if (type === 'default') {
    return (
      <div className={className}>
        <label className="form-label" htmlFor={id}>{label}</label>
        <label className="form-file-label">
          <input id={id} ref={inputRef} type="file" accept={accept} style={{ display: 'none' }} onChange={handleChange} />
          <span className="form-file-btn" style={lgPad}>Choose file <ChevronDownIcon /></span>
          <span className="form-file-placeholder" style={lgPad}>{fileName ?? 'No file chosen'}</span>
        </label>
        {helpText && <p className="form-helper">{helpText}</p>}
      </div>
    );
  }

  return (
    <div className={className}>
      <label className="form-label" htmlFor={id}>{label}</label>
      <div
        className="form-file-drop"
        onClick={() => inputRef.current?.click()}
        onDragOver={(e) => e.preventDefault()}
        onDrop={(e) => {
          e.preventDefault();
          const file = e.dataTransfer.files?.[0] ?? null;
          setFileName(file?.name ?? null);
          onFileSelect?.(file);
        }}
        style={{ cursor: 'pointer' }}
      >
        <input id={id} ref={inputRef} type="file" accept={accept} style={{ display: 'none' }} onChange={handleChange} />
        <CloudIcon />
        <div className="form-file-drop__hint">{fileName ?? dropHint}</div>
        <div className="form-file-drop__formats" style={type === 'drag-btn' ? { fontWeight: 'var(--font-semibold)' } : undefined}>
          {formatsHint ?? (type === 'drag-btn' ? 'Max. File Size: 30MB' : 'SVG, PNG, JPG or GIF (MAX. 800×400px)')}
        </div>
        {type === 'drag-btn' && (
          <button type="button" className="btn btn-blue btn-sm" style={{ display: 'flex', alignItems: 'center', gap: 6 }} onClick={(e) => { e.stopPropagation(); inputRef.current?.click(); }}>
            <SearchIcon /> Browse File
          </button>
        )}
      </div>
      {helpText && <p className="form-helper">{helpText}</p>}
    </div>
  );
}
