import React, { useState } from 'react';
import { Modal } from '../modal/Modal';
import { FormSearch } from '../forms/FormSearch';
import { Button } from '../button/Button';
import { ListGroup } from '../list-group/ListGroup';

// ── Data ──────────────────────────────────────────────────────────────────────

const CATEGORIES = [
  { key: 'all',           label: 'All Widgets',  count: 918 },
  { key: 'custom',        label: 'Custom',        count: 896 },
  { key: 'income',        label: 'Income',        count: 3   },
  { key: 'cash',          label: 'Cash',          count: 4   },
  { key: 'profitability', label: 'Profitability', count: 11  },
  { key: 'marketing',     label: 'Marketing',     count: 4   },
];

const WIDGETS = [
  { id: 'amazon-rev',   name: 'Amazon Gross Revenue',                    category: 'custom', value: '$224,169.29' },
  { id: 'mer',          name: 'Overall Marketing Efficiency Ratio (MER)', category: 'custom', value: '3.2×'        },
  { id: 'total-income', name: 'Total Income',                             category: 'income', value: '$1,842,300'  },
  { id: 'net-cash',     name: 'Net Cash Flow',                            category: 'cash',   value: '$98,450'     },
];

// ── Widget row ────────────────────────────────────────────────────────────────

const IconCheck = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <polyline points="2 7 6 11 12 3" />
  </svg>
);

const IconPlus = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
    <line x1="7" y1="2" x2="7" y2="12" /><line x1="2" y1="7" x2="12" y2="7" />
  </svg>
);

function WidgetRow({ name, value, selected, onSelect }: {
  name: string; value: string; selected: boolean; onSelect: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onSelect}
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: 10,
        width: '100%',
        padding: '0 16px',
        height: 44,
        border: 'none',
        borderBottom: '1px solid var(--color-border-default)',
        background: selected ? '#eef2ff' : 'transparent',
        cursor: 'pointer',
        textAlign: 'left',
      }}
    >
      <span style={{
        width: 18,
        height: 18,
        flexShrink: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        border: `1.5px solid ${selected ? '#4f46e5' : 'var(--color-border-default)'}`,
        borderRadius: 4,
        background: selected ? '#4f46e5' : 'transparent',
        color: '#fff',
      }}>
        {selected && <IconCheck />}
      </span>
      <span style={{ flex: 1, fontSize: 'var(--text-sm)', color: 'var(--color-text-primary)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
        {name}
      </span>
      <span style={{ fontSize: 'var(--text-sm)', color: 'var(--color-text-secondary)', flexShrink: 0 }}>
        {value}
      </span>
    </button>
  );
}

function CreateRow({ onClick }: { onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: 10,
        width: '100%',
        padding: '0 16px',
        height: 44,
        border: 'none',
        borderBottom: '1px solid var(--color-border-default)',
        background: 'transparent',
        cursor: 'pointer',
        color: 'var(--color-text-secondary)',
        fontSize: 'var(--text-sm)',
      }}
    >
      <span style={{
        width: 18,
        height: 18,
        flexShrink: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        border: '1.5px dashed var(--color-border-default)',
        borderRadius: 4,
        color: 'var(--color-text-secondary)',
      }}>
        <IconPlus />
      </span>
      Create a new widget
    </button>
  );
}

// ── Main ─────────────────────────────────────────────────────────────────────

export interface AddWidgetModalProps {
  open: boolean;
  onClose: () => void;
  onConfirm?: (ids: string[]) => void;
}

export function AddWidgetModal({ open, onClose, onConfirm }: AddWidgetModalProps) {
  const [activeCategory, setActiveCategory] = useState('all');
  const [search, setSearch] = useState('');
  const [selected, setSelected] = useState<Set<string>>(new Set());

  function toggleWidget(id: string) {
    setSelected(prev => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  }

  const activeCat = CATEGORIES.find(c => c.key === activeCategory)!;
  const filtered = WIDGETS.filter(w => {
    const matchCat = activeCategory === 'all' || w.category === activeCategory;
    const matchSearch = w.name.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  const footer = (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
      <span style={{ fontSize: 'var(--text-sm)', color: 'var(--color-text-secondary)' }}>
        {selected.size} selected
      </span>
      <div style={{ display: 'flex', gap: 8 }}>
        <Button label="Cancel" color="alternative" size="md" onClick={onClose} />
        <Button
          label="Add to dashboard"
          color="primary"
          size="md"
          disabled={selected.size === 0}
          onClick={() => { onConfirm?.(Array.from(selected)); onClose(); }}
        />
      </div>
    </div>
  );

  return (
    <Modal open={open} onClose={onClose} title="Add Widget" size="lg" footer={footer}>
      <div style={{ display: 'flex', margin: '-20px', height: 480 }}>

        {/* Category nav */}
        <div style={{ width: 200, flexShrink: 0, borderRight: '1px solid var(--color-border-default)' }}>
          <ListGroup
            flush
            items={CATEGORIES.map(cat => ({
              key: cat.key,
              label: cat.label,
              count: cat.count,
              active: cat.key === activeCategory,
              onClick: () => setActiveCategory(cat.key),
            }))}
          />
        </div>

        {/* Widget list */}
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>

          {/* Search */}
          <div style={{ padding: '10px 12px', borderBottom: '1px solid var(--color-border-default)' }}>
            <FormSearch value={search} onChange={setSearch} placeholder="Search widgets..." />
          </div>

          {/* Section label */}
          <div style={{ padding: '8px 16px 4px' }}>
            <span style={{ fontSize: 'var(--text-xs)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--color-text-secondary)' }}>
              {activeCat.label} ({activeCat.count})
            </span>
          </div>

          {/* Rows */}
          <div style={{ flex: 1, overflowY: 'auto' }}>
            <CreateRow onClick={() => {}} />
            {filtered.map(w => (
              <WidgetRow
                key={w.id}
                name={w.name}
                value={w.value}
                selected={selected.has(w.id)}
                onSelect={() => toggleWidget(w.id)}
              />
            ))}
          </div>

        </div>
      </div>
    </Modal>
  );
}
