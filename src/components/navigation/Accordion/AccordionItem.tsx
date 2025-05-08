import React, { useRef } from 'react';
import { useAccordion } from './Accordion';

export interface AccordionItemProps {
  id: string;
  title: string;
  children: React.ReactNode;
  disabled?: boolean;
}

export const AccordionItem: React.FC<AccordionItemProps> = ({ 
  id, 
  title, 
  children, 
  disabled 
}) => {
  const { openItems, toggleItem } = useAccordion();
  const isOpen = openItems.includes(id);
  const contentRef = useRef<HTMLDivElement>(null);
  
  return (
    <div className="accordion-item">
      <button
        className="accordion-header"
        onClick={() => !disabled && toggleItem(id)}
        aria-expanded={isOpen}
        aria-controls={`accordion-content-${id}`}
        id={`accordion-header-${id}`}
        disabled={disabled}
      >
        <span>{title}</span>
        <span className={`accordion-icon ${isOpen ? 'open' : ''}`}>▼</span>
      </button>
      <div
        ref={contentRef}
        id={`accordion-content-${id}`}
        role="region"
        aria-labelledby={`accordion-header-${id}`}
        className={`accordion-content ${isOpen ? 'open' : ''}`}
        hidden={!isOpen}
      >
        {children}
      </div>
    </div>
  );
};
