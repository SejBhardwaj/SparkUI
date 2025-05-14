import React, { useState } from 'react';

export interface SubMenuProps {
  title: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
}

export const SubMenu: React.FC<SubMenuProps> = ({ title, icon, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="submenu">
      <button
        className="submenu-trigger"
        onClick={() => setIsOpen(!isOpen)}
        aria-haspopup="true"
        aria-expanded={isOpen}
      >
        {icon && <span className="submenu-icon">{icon}</span>}
        <span className="submenu-title">{title}</span>
        <span className={`submenu-arrow ${isOpen ? 'open' : ''}`}>›</span>
      </button>
      {isOpen && (
        <div className="submenu-content" role="menu">
          {children}
        </div>
      )}
    </div>
  );
};
