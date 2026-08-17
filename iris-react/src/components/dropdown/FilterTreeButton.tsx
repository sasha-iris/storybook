import React, { useState, useRef, useEffect, useMemo } from 'react';

export interface FilterTreeNode {
  value: string;
  label: string;
  /** Optional leading icon/avatar for the row. */
  icon?: React.ReactNode;
  /** Child nodes. A node with no children is a selectable leaf. */
  children?: FilterTreeNode[];
}

interface FilterTreeButtonProps {
  /** Trigger label, e.g. "Filters". */
  label: string;
  icon?: React.ReactNode;
  nodes: FilterTreeNode[];
  /** Selected LEAF values. */
  selected: string[];
  /** Called with the new selected leaf values. In `apply` mode, fires on Apply; in `live` mode, on every toggle. */
  onChange: (selectedLeaves: string[]) => void;
  /** `apply` (default) buffers changes until the Apply button; `live` emits on every toggle. */
  mode?: 'apply' | 'live';
  /** Badge text from the committed selected-leaf count. Default: `${n} selected`. */
  countLabel?: (count: number) => string;
  /** Auto-expand nodes up to this depth (0 = only roots collapsed-expanded). Default: expand all. */
  defaultExpandedDepth?: number;
  onClear?: () => void;
  width?: number;
  className?: string;
}

const ChevronDownIcon = () => (
  <svg width="18" height="18" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
  </svg>
);
const ChevronUpIcon = () => (
  <svg width="18" height="18" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
    <path fillRule="evenodd" d="M14.707 5.293a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L10 8.586l3.293-3.293a1 1 0 011.414 0z" clipRule="evenodd" />
  </svg>
);
const ChevronRightSmall = () => (
  <svg width="16" height="16" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
  </svg>
);
const ChevronDownSmall = () => (
  <svg width="16" height="16" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
  </svg>
);

function isLeaf(n: FilterTreeNode) {
  return !n.children || n.children.length === 0;
}

function collectLeaves(n: FilterTreeNode, acc: string[] = []): string[] {
  if (isLeaf(n)) acc.push(n.value);
  else n.children!.forEach((c) => collectLeaves(c, acc));
  return acc;
}

type NodeState = 'checked' | 'indeterminate' | 'unchecked';

function nodeState(n: FilterTreeNode, sel: Set<string>): NodeState {
  const leaves = collectLeaves(n);
  const on = leaves.filter((v) => sel.has(v)).length;
  if (on === 0) return 'unchecked';
  if (on === leaves.length) return 'checked';
  return 'indeterminate';
}

/**
 * Hierarchical multi-select filter — a popover with a checkbox TREE (parent/child),
 * indentation, expand/collapse, and tri-state parent checkboxes (checked / indeterminate / unchecked).
 * Toggling a parent selects/clears all of its leaf descendants; the trigger shows a count badge.
 *
 * USE FOR: multi-level filters (channel hierarchies: DTC → Amazon → US → amazon.com), nested categories, org trees
 * DO NOT USE FOR: a flat one-level filter → FilterSelectButton; single-value selection → Select
 *
 * Selection is tracked as LEAF values only; parent state is derived. `mode="apply"` (default)
 * buffers edits until the Apply button; `mode="live"` emits on every toggle.
 *
 * CSS classes: dropdown-trigger--outline, dropdown-menu, iris-checkbox (+--checked/--intermediate)
 *
 * Requires iris-components.css to be loaded at app level.
 *
 * @example
 * <FilterTreeButton
 *   label="Filters"
 *   nodes={channelTree}
 *   selected={selectedLeaves}
 *   onChange={setSelectedLeaves}
 *   countLabel={(n) => `${n} channels`}
 * />
 */
export function FilterTreeButton({
  label,
  icon,
  nodes,
  selected,
  onChange,
  mode = 'apply',
  countLabel = (n) => `${n} selected`,
  defaultExpandedDepth = Infinity,
  onClear,
  width = 320,
  className,
}: FilterTreeButtonProps) {
  const [open, setOpen] = useState(false);
  const [draft, setDraft] = useState<string[]>(selected);
  const ref = useRef<HTMLDivElement>(null);

  const allLeaves = useMemo(() => nodes.flatMap((n) => collectLeaves(n)), [nodes]);

  // Nodes expanded by default up to defaultExpandedDepth.
  const initialExpanded = useMemo(() => {
    const set = new Set<string>();
    const walk = (n: FilterTreeNode, depth: number) => {
      if (!isLeaf(n)) {
        if (depth <= defaultExpandedDepth) set.add(n.value);
        n.children!.forEach((c) => walk(c, depth + 1));
      }
    };
    nodes.forEach((n) => walk(n, 0));
    return set;
  }, [nodes, defaultExpandedDepth]);
  const [expanded, setExpanded] = useState<Set<string>>(initialExpanded);

  // Re-sync the draft when the popover opens or the committed selection changes.
  useEffect(() => { setDraft(selected); }, [selected, open]);

  useEffect(() => {
    if (!open) return;
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, [open]);

  const working = mode === 'live' ? selected : draft;
  const workingSet = useMemo(() => new Set(working), [working]);

  function commit(next: string[]) {
    if (mode === 'live') onChange(next);
    else setDraft(next);
  }

  function toggleNode(n: FilterTreeNode) {
    const leaves = collectLeaves(n);
    const state = nodeState(n, workingSet);
    let next: string[];
    if (state === 'checked') {
      const rm = new Set(leaves);
      next = working.filter((v) => !rm.has(v));
    } else {
      next = Array.from(new Set([...working, ...leaves]));
    }
    commit(next);
  }

  function toggleExpand(value: string) {
    setExpanded((prev) => {
      const nx = new Set(prev);
      if (nx.has(value)) nx.delete(value); else nx.add(value);
      return nx;
    });
  }

  const committedCount = selected.filter((v) => allLeaves.includes(v)).length;
  const dirty = mode === 'apply' && (draft.length !== selected.length || draft.some((v) => !selected.includes(v)));

  function renderRow(n: FilterTreeNode, depth: number): React.ReactNode {
    const leaf = isLeaf(n);
    const state = nodeState(n, workingSet);
    const isOpen = expanded.has(n.value);
    const cbClass = ['iris-checkbox',
      state === 'checked' ? 'iris-checkbox--checked' : '',
      state === 'indeterminate' ? 'iris-checkbox--intermediate' : ''].filter(Boolean).join(' ');

    return (
      <React.Fragment key={n.value}>
        <div
          role="treeitem"
          aria-expanded={leaf ? undefined : isOpen}
          onClick={() => toggleNode(n)}
          style={{
            display: 'flex', alignItems: 'center', gap: 8, cursor: 'pointer',
            padding: '8px 12px', paddingLeft: 12 + depth * 22, borderRadius: 6,
          }}
          onMouseEnter={(e) => (e.currentTarget.style.background = 'var(--color-bg-muted)')}
          onMouseLeave={(e) => (e.currentTarget.style.background = 'transparent')}
        >
          <span
            className={cbClass}
            role="checkbox"
            aria-checked={state === 'indeterminate' ? 'mixed' : state === 'checked'}
            style={{ flexShrink: 0 }}
          />
          {n.icon && <span style={{ display: 'flex', alignItems: 'center', flexShrink: 0 }}>{n.icon}</span>}
          <span style={{ flex: 1, fontSize: 14, color: 'var(--color-text-primary)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
            {n.label}
          </span>
          {!leaf && (
            <button
              type="button"
              aria-label={isOpen ? 'Collapse' : 'Expand'}
              onClick={(e) => { e.stopPropagation(); toggleExpand(n.value); }}
              style={{ display: 'flex', alignItems: 'center', background: 'none', border: 'none', cursor: 'pointer', padding: 0, color: 'var(--color-text-secondary)', flexShrink: 0 }}
            >
              {isOpen ? <ChevronDownSmall /> : <ChevronRightSmall />}
            </button>
          )}
        </div>
        {!leaf && isOpen && n.children!.map((c) => renderRow(c, depth + 1))}
      </React.Fragment>
    );
  }

  return (
    <div ref={ref} style={{ position: 'relative', display: 'inline-block' }} className={className}>
      <button
        type="button"
        className="dropdown-trigger dropdown-trigger--outline"
        style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: open ? 'var(--color-bg-muted)' : undefined }}
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        aria-haspopup="true"
      >
        {icon}
        <span style={{ fontSize: 14 }}>{label}:</span>
        <span style={{
          fontSize: 12, fontWeight: 600, color: 'var(--btn-primary-bg)', background: '#ede9fe',
          padding: '2px 8px', borderRadius: 100, whiteSpace: 'nowrap',
        }}>
          {countLabel(committedCount)}
        </span>
        {open ? <ChevronUpIcon /> : <ChevronDownIcon />}
      </button>
      {open && (
        <div
          className="dropdown-menu dropdown-menu--absolute"
          role="tree"
          style={{ width, top: 'calc(100% + 4px)', left: 0, padding: 8, maxHeight: 420, display: 'flex', flexDirection: 'column' }}
        >
          <div style={{ overflowY: 'auto', flex: 1 }}>
            {nodes.map((n) => renderRow(n, 0))}
          </div>
          <div style={{ display: 'flex', gap: 8, alignItems: 'center', paddingTop: 8, marginTop: 4, borderTop: '1px solid var(--color-border-default)' }}>
            {onClear && (
              <button
                type="button"
                className="btn btn-link btn-sm"
                style={{ padding: 0 }}
                onClick={() => { commit([]); if (mode === 'live') onClear(); }}
              >
                Clear
              </button>
            )}
            {mode === 'apply' && (
              <button
                type="button"
                className="btn btn-primary btn-sm"
                style={{ flex: 1, justifyContent: 'center' }}
                disabled={!dirty}
                onClick={() => { onChange(draft); setOpen(false); }}
              >
                Apply
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
