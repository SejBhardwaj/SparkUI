import React from 'react';
import { useMenu } from './Menu';

export interface MenuItemProps {
  icon?: React.ReactNode;
  disabled?: boolean;
  onClick?: () => void;
  children: React.ReactNode;
}

export const MenuItem: React.FC<MenuItemProps> = ({ 
  icon, 
  disabled, 
  onClick, 
  children 
}) => {
  const { setIsOpen } = useMenu();
  
  const handleClick = () => {
    if (!disabled && onClick) {
      onClick();
      setIsOpen(false);
    }
  };
  
  return (
    <button
      role="menuitem"
      className={`menu-item ${disabled ? 'disabled' : ''}`}
      onClick={handleClick}
      disabled={disabled}
    >
      {icon && <span className="menu-item-icon">{icon}</span>}
      <span className="menu-item-label">{children}</span>
    </button>
  );
};
