import React from 'react';

export interface SelectMenuProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  position?: 'top' | 'bottom';
}

export const SelectMenu: React.FC<SelectMenuProps> = ({ isOpen, onClose, children, position = 'bottom' }) => {
  if (!isOpen) return null;
  
  return (
    <div className={`select-menu ${position}`} onClick={onClose}>
      {children}
    </div>
  );
};
