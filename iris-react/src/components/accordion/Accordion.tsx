import React, { useState } from 'react';

interface AccordionItem {
  key: string;
  title: string;
  body: React.ReactNode;
  icon?: React.ReactNode;
}

interface AccordionProps {
  items: AccordionItem[];
  defaultOpenKey?: string;
  /** 'card' = one bordered container; 'flush' = no outer border, dividers only. */
  style?: 'card' | 'flush';
  /** Allow multiple items open simultaneously. */
  multiple?: boolean;
  className?: string;
}

/**
 * Collapsible accordion — expands one or more sections.
 *
 * USE FOR: FAQ sections, collapsible settings groups, expandable detail rows,
 *   help documentation with progressive disclosure
 * REPLACES MUI: <Accordion>, <AccordionSummary>, <AccordionDetails>
 * DO NOT USE FOR:
 *   - Tab switching → Tabs
 *   - Nested data trees → use TreeView or nested lists
 *
 * Requires iris-components.css to be loaded at app level.
 *
 * @example
 * <Accordion items={faqItems} style="flush" defaultOpenKey="faq-1" />
 */
export function Accordion({
  items,
  defaultOpenKey,
  style = 'card',
  multiple = false,
  className,
}: AccordionProps) {
  const [openKeys, setOpenKeys] = useState<Set<string>>(
    defaultOpenKey ? new Set([defaultOpenKey]) : new Set()
  );

  function toggle(key: string) {
    setOpenKeys((prev) => {
      const next = new Set(prev);
      if (next.has(key)) {
        next.delete(key);
      } else {
        if (!multiple) next.clear();
        next.add(key);
      }
      return next;
    });
  }

  const wrapClass = [
    'accordion',
    style === 'flush' ? 'accordion-flush' : '',
    className,
  ].filter(Boolean).join(' ');

  return (
    <div className={wrapClass}>
      {items.map((item, idx) => {
        const isOpen = openKeys.has(item.key);
        return (
          <div key={item.key} className={`accordion-item${isOpen ? ' open' : ''}`}>
            <button
              type="button"
              className="accordion-header"
              id={`accordion-header-${item.key}`}
              aria-expanded={isOpen}
              aria-controls={`accordion-body-${item.key}`}
              onClick={() => toggle(item.key)}
            >
              {item.icon}
              {item.title}
              <svg className="accordion-chevron" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="m6 9 6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <div
              className="accordion-body"
              id={`accordion-body-${item.key}`}
              role="region"
              aria-labelledby={`accordion-header-${item.key}`}
            >
              {item.body}
            </div>
          </div>
        );
      })}
    </div>
  );
}
