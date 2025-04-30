import React, { useState } from 'react';

export interface NavbarMenuProps {
  children: React.ReactNode;
  responsive?: boolean;
}

export const NavbarMenu: React.FC<NavbarMenuProps> = ({ children, responsive = true }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="navbar-menu">
      {responsive && (
        <button 
          className="navbar-toggle"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          <span className="hamburger-icon" />
        </button>
      )}
      <div className={`navbar-menu-content ${isOpen ? 'open' : ''}`}>
        {children}
      </div>
    </div>
  );
};
