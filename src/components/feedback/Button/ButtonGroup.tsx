import React from 'react';

export interface ButtonGroupProps {
  orientation?: 'horizontal' | 'vertical';
  spacing?: 'none' | 'sm' | 'md';
  children: React.ReactNode;
}

export const ButtonGroup: React.FC<ButtonGroupProps> = ({ 
  orientation = 'horizontal', 
  spacing = 'none',
  children 
}) => {
  return (
    <div 
      className={`btn-group btn-group-${orientation} btn-group-spacing-${spacing}`}
      role="group"
    >
      {children}
    </div>
  );
};

export const buttonGroupStyles = {
  horizontal: 'flex flex-row',
  vertical: 'flex flex-col',
  spacing: {
    none: 'gap-0',
    sm: 'gap-1',
    md: 'gap-2',
  },
};
