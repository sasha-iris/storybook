import React from 'react';

interface TabItem {
  key: string;
  label: string;
  count?: number;
}

interface TabsProps {
  tabs: TabItem[];
  activeKey: string;
  onChange: (key: string) => void;
  className?: string;
}

/**
 * Page-level tab navigation bar.
 *
 * USE FOR: page sections (Overview / Transactions / Reports), entity detail views,
 *   content switching at the top of a page or card
 * REPLACES MUI: <Tabs>, <Tab>
 * DO NOT USE FOR:
 *   - View toggles like List/Kanban → ButtonGroup
 *   - Filter buttons → ButtonGroup
 *
 * Requires iris-components.css to be loaded at app level.
 *
 * @example
 * const tabs = [{ key: 'overview', label: 'Overview' }, { key: 'txn', label: 'Transactions', count: 42 }];
 * <Tabs tabs={tabs} activeKey={active} onChange={setActive} />
 */
export function Tabs({ tabs, activeKey, onChange, className }: TabsProps) {
  return (
    <div className={['iris-tab-bar', className].filter(Boolean).join(' ')} role="tablist">
      {tabs.map((tab) => (
        <button
          key={tab.key}
          type="button"
          role="tab"
          aria-selected={tab.key === activeKey}
          className={tab.key === activeKey ? 'iris-tab iris-tab--active' : 'iris-tab'}
          onClick={() => onChange(tab.key)}
        >
          {tab.label}
          {tab.count != null && (
            <span className="iris-tab__counter">{tab.count}</span>
          )}
        </button>
      ))}
    </div>
  );
}
