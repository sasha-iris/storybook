import React, { useEffect } from 'react';

type DrawerSide = 'right' | 'left';

interface DrawerProps {
  open: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
  footer?: React.ReactNode;
  side?: DrawerSide;
  /** Width of the drawer panel (default: 400px). */
  width?: number | string;
  className?: string;
}

/**
 * Slide-in drawer panel — overlays content from the side.
 *
 * USE FOR: detail panels, filter sidebars, navigation menus on mobile,
 *   contextual editing panels without leaving the current page
 * REPLACES MUI: <Drawer>, <SwipeableDrawer>
 * DO NOT USE FOR:
 *   - Full-page navigation sidebar → Sidebar component
 *   - Focused confirmation dialogs → Modal
 *
 * Note: Drawer uses inline positioning styles (no dedicated Iris CSS class).
 * Requires iris-components.css for inner form/button elements.
 *
 * @example
 * <Drawer open={isOpen} onClose={() => setIsOpen(false)} title="Filters">
 *   <FormInput label="Search" value={q} onChange={setQ} />
 * </Drawer>
 */
export function Drawer({
  open,
  onClose,
  title,
  children,
  footer,
  side = 'right',
  width = 400,
  className,
}: DrawerProps) {
  useEffect(() => {
    if (!open) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') onClose();
    }
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open, onClose]);

  if (!open) return null;

  const widthVal = typeof width === 'number' ? `${width}px` : width;

  return (
    <>
      <div
        style={{
          position: 'fixed', inset: 0,
          background: 'rgba(75,85,99,0.5)',
          zIndex: 999,
        }}
        aria-hidden="true"
        onClick={onClose}
      />
      <aside
        role="dialog"
        aria-modal="true"
        aria-label={title}
        className={className}
        style={{
          position: 'fixed',
          top: 0,
          [side]: 0,
          bottom: 0,
          width: widthVal,
          background: 'var(--color-bg-white)',
          zIndex: 1000,
          display: 'flex',
          flexDirection: 'column',
          boxShadow: '-4px 0 24px rgba(0,0,0,0.12)',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '24px 16px 20px', borderBottom: '1px solid var(--color-border-default)' }}>
          <h5 style={{ margin: 0, fontSize: 'var(--text-base)', fontWeight: 'var(--font-semibold)', color: 'var(--color-text-primary)' }}>
            {title}
          </h5>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: 28, height: 28, border: 'none', background: 'transparent', cursor: 'pointer', borderRadius: 4, fontSize: 18, color: 'var(--color-text-secondary)' }}
          >
            ×
          </button>
        </div>
        <div style={{ flex: 1, overflowY: 'auto', padding: '16px' }}>
          {children}
        </div>
        {footer && (
          <div style={{ padding: '16px', borderTop: '1px solid var(--color-border-default)', display: 'flex', gap: 8 }}>
            {footer}
          </div>
        )}
      </aside>
    </>
  );
}
