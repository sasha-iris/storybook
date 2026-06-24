import React, { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

type ModalSize = 'sm' | 'md' | 'lg' | 'xl';

interface ModalProps {
  open: boolean;
  onClose: () => void;
  /** Omit for titleless modals (PopUp/WithForms/CryptoWallet patterns) — renders a
   *  borderless header with only the close button, right-aligned. */
  title?: string;
  children: React.ReactNode;
  footer?: React.ReactNode;
  size?: ModalSize;
  /** Allow close on backdrop click (default true). */
  closeOnBackdrop?: boolean;
  className?: string;
}

const SIZE_CLASS: Record<ModalSize, string> = {
  sm: 'modal-dialog-sm',
  md: '',
  lg: 'modal-dialog-lg',
  xl: 'modal-dialog-xl',
};

/**
 * Modal dialog overlay.
 *
 * USE FOR: confirmations, form dialogs, detail views, multi-step wizards
 * REPLACES MUI: <Dialog>, <DialogTitle>, <DialogContent>, <DialogActions>
 * DO NOT USE FOR:
 *   - Slide-in panels → Drawer
 *   - Simple confirmations with no form → consider a small confirm dialog pattern
 *
 * Requires iris-components.css to be loaded at app level.
 *
 * @example
 * <Modal open={isOpen} onClose={() => setIsOpen(false)} title="Confirm deletion"
 *   footer={<><Button label="Delete" color="red" onClick={handleDelete} /><Button label="Cancel" color="alternative" onClick={() => setIsOpen(false)} /></>}
 * >
 *   <p>Are you sure you want to delete this item?</p>
 * </Modal>
 */
export function Modal({
  open,
  onClose,
  title,
  children,
  footer,
  size = 'md',
  closeOnBackdrop = true,
  className,
}: ModalProps) {
  const dialogRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') onClose();
    }
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open, onClose]);

  if (!open) return null;

  const dialogClass = [
    'modal-dialog',
    SIZE_CLASS[size],
    className,
  ].filter(Boolean).join(' ');

  return createPortal(
    <div
      className="modal-backdrop"
      onClick={closeOnBackdrop ? onClose : undefined}
    >
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={title ? 'modal-title' : undefined}
        className={dialogClass}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modal-header" style={title ? undefined : { borderBottom: 'none', justifyContent: 'flex-end', paddingBottom: 8 }}>
          {title && <h2 className="modal-title" id="modal-title">{title}</h2>}
          <button type="button" className="modal-close" aria-label="Close dialog" onClick={onClose}>
            ×
          </button>
        </div>
        <div className="modal-body">{children}</div>
        {footer && <div className="modal-footer">{footer}</div>}
      </div>
    </div>,
    document.body,
  );
}
