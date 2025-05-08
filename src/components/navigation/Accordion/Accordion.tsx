import React, { useState, createContext, useContext } from 'react';

interface AccordionContextValue {
  openItems: string[];
  toggleItem: (id: string) => void;
  allowMultiple: boolean;
}

const AccordionContext = createContext<AccordionContextValue | null>(null);

export const useAccordion = () => {
  const context = useContext(AccordionContext);
  if (!context) throw new Error('useAccordion must be used within Accordion');
  return context;
};

export interface AccordionProps {
  allowMultiple?: boolean;
  defaultOpen?: string[];
  children: React.ReactNode;
}

export const Accordion: React.FC<AccordionProps> = ({ 
  allowMultiple = false, 
  defaultOpen = [],
  children 
}) => {
  const [openItems, setOpenItems] = useState<string[]>(defaultOpen);
  
  const toggleItem = (id: string) => {
    setOpenItems(prev => {
      if (allowMultiple) {
        return prev.includes(id) 
          ? prev.filter(item => item !== id)
          : [...prev, id];
      } else {
        return prev.includes(id) ? [] : [id];
      }
    });
  };
  
  return (
    <AccordionContext.Provider value={{ openItems, toggleItem, allowMultiple }}>
      <div className="accordion">{children}</div>
    </AccordionContext.Provider>
  );
};
