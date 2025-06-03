import React from 'react';

export interface ButtonIconProps {
  icon: React.ReactNode;
  position?: 'left' | 'right';
  children?: React.ReactNode;
  onClick?: () => void;
}

export const ButtonIcon: React.FC<ButtonIconProps> = ({ 
  icon, 
  position = 'left', 
  children, 
  onClick 
}) => {
  return (
    <button className="btn btn-with-icon" onClick={onClick}>
      {position === 'left' && <span className="btn-icon btn-icon-left">{icon}</span>}
      {children && <span className="btn-label">{children}</span>}
      {position === 'right' && <span className="btn-icon btn-icon-right">{icon}</span>}
    </button>
  );
};

export const IconOnlyButton: React.FC<{ icon: React.ReactNode; 'aria-label': string }> = ({ 
  icon, 
  'aria-label': ariaLabel 
}) => {
  return (
    <button className="btn btn-icon-only" aria-label={ariaLabel}>
      {icon}
    </button>
  );
};
