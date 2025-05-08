import React from 'react';

export interface AccordionIconProps {
  isOpen: boolean;
  variant?: 'chevron' | 'plus' | 'arrow';
}

export const AccordionIcon: React.FC<AccordionIconProps> = ({ 
  isOpen, 
  variant = 'chevron' 
}) => {
  const icons = {
    chevron: isOpen ? '▲' : '▼',
    plus: isOpen ? '−' : '+',
    arrow: isOpen ? '↑' : '→',
  };
  
  return (
    <span className={`accordion-icon ${isOpen ? 'open' : ''}`}>
      {icons[variant]}
    </span>
  );
};
