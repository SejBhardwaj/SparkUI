import React from 'react';

export interface NavbarItemProps {
  href?: string;
  active?: boolean;
  disabled?: boolean;
  onClick?: () => void;
  children: React.ReactNode;
}

export const NavbarItem: React.FC<NavbarItemProps> = ({ 
  href, 
  active, 
  disabled, 
  onClick, 
  children 
}) => {
  const className = `navbar-item ${active ? 'active' : ''} ${disabled ? 'disabled' : ''}`;
  
  if (href && !disabled) {
    return (
      <a href={href} className={className} onClick={onClick}>
        {children}
      </a>
    );
  }
  
  return (
    <button className={className} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
};
