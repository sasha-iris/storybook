import React, { useState, useRef, useEffect } from 'react';

interface DropdownItem {
  key: string;
  label: string;
  icon?: React.ReactNode;
  active?: boolean;
  danger?: boolean;
  dividerBefore?: boolean;
  onClick?: () => void;
}

interface DropdownProps {
  trigger: React.ReactNode;
  items: DropdownItem[];
  /** Position relative to trigger. */
  align?: 'left' | 'right';
  className?: string;
}

/**
 * Dropdown menu attached to a trigger element.
 *
 * USE FOR: action menus ("More" / "⋯"), context menus, user avatar menus,
 *   secondary navigation options
 * REPLACES MUI: <Menu>, <MenuItem>, <IconButton> + <Menu>
 * DO NOT USE FOR:
 *   - Single-value selection from a form → Select
 *   - Page navigation → Tabs or Sidebar
 *
 * Requires iris-components.css to be loaded at app level.
 *
 * @example
 * <Dropdown
 *   trigger={<Button label="Actions" iconRight={<ChevronIcon />} />}
 *   items={[
 *     { key: 'edit', label: 'Edit', onClick: handleEdit },
 *     { key: 'delete', label: 'Delete', danger: true, onClick: handleDelete },
 *   ]}
 * />
 */
export function Dropdown({ trigger, items, align = 'left', className }: DropdownProps) {
  const [open, setOpen] = useState(false);
  const wrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    function handleOutside(e: MouseEvent) {
      if (wrapRef.current && !wrapRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener('mousedown', handleOutside);
    return () => document.removeEventListener('mousedown', handleOutside);
  }, [open]);

  function handleKey(e: React.KeyboardEvent) {
    if (e.key === 'Escape') setOpen(false);
  }

  return (
    <div ref={wrapRef} style={{ position: 'relative', display: 'inline-block' }} className={className} onKeyDown={handleKey}>
      <div onClick={() => setOpen((o) => !o)}>
        {trigger}
      </div>
      {open && (
        <ul
          className="dropdown-menu dropdown-menu--absolute"
          role="menu"
          style={align === 'right' ? { right: 0, left: 'auto' } : undefined}
        >
          {items.map((item) => (
            <React.Fragment key={item.key}>
              {item.dividerBefore && <li role="separator"><hr className="dropdown-divider" /></li>}
              <li role="none">
                <button
                  type="button"
                  role="menuitem"
                  className={['dropdown-item', item.active ? 'active' : '', item.danger ? 'danger' : ''].filter(Boolean).join(' ')}
                  onClick={() => { item.onClick?.(); setOpen(false); }}
                >
                  {item.icon && <span className="dropdown-item__icon">{item.icon}</span>}
                  <span className="dropdown-item__text">{item.label}</span>
                </button>
              </li>
            </React.Fragment>
          ))}
        </ul>
      )}
    </div>
  );
}
