import React, { useState } from 'react';

export interface NavbarMobileProps {
  children: React.ReactNode;
  logo?: React.ReactNode;
}

export const NavbarMobile: React.FC<NavbarMobileProps> = ({ children, logo }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="navbar-mobile">
      <div className="mobile-header">
        {logo && <div className="mobile-logo">{logo}</div>}
        <button 
          className="hamburger-button"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation"
        >
          <span className={`hamburger ${isOpen ? 'open' : ''}`}>
            <span></span>
            <span></span>
            <span></span>
          </span>
        </button>
      </div>
      <div className={`mobile-menu ${isOpen ? 'open' : ''}`}>
        {children}
      </div>
    </div>
  );
};
