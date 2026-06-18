import React from 'react';

interface KBDProps {
  /** Single key label, e.g. "⌘", "K", "Enter". */
  keys: string | string[];
  size?: 'default' | 'sm';
  className?: string;
}

/**
 * Keyboard shortcut display — renders one or more keys in a combo.
 *
 * USE FOR: displaying keyboard shortcuts in tooltips, help text, command palettes
 * REPLACES MUI: no direct MUI equivalent — typically custom styled <kbd>
 * DO NOT USE FOR: interactive clickable keys — this is display-only
 *
 * Requires iris-components.css to be loaded at app level.
 *
 * @example
 * <KBD keys="⌘K" />
 * <KBD keys={['⌘', 'Shift', 'P']} />
 */
export function KBD({ keys, size = 'default', className }: KBDProps) {
  const kbdClass = ['kbd', size === 'sm' ? 'kbd-sm' : '', className].filter(Boolean).join(' ');
  const keyList = Array.isArray(keys) ? keys : [keys];

  if (keyList.length === 1) {
    return <kbd className={kbdClass}>{keyList[0]}</kbd>;
  }

  return (
    <span className="kbd-combo">
      {keyList.map((k, i) => (
        <React.Fragment key={i}>
          <kbd className={kbdClass}>{k}</kbd>
          {i < keyList.length - 1 && <span className="kbd-sep" aria-hidden="true">+</span>}
        </React.Fragment>
      ))}
    </span>
  );
}
