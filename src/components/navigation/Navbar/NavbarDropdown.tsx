import React, { useState, useRef, useEffect } from 'react';

export interface NavbarDropdownProps {
  trigger: React.ReactNode;
  children: React.ReactNode;
}

export const NavbarDropdown: React.FC<NavbarDropdownProps> = ({ trigger, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);
  
  return (
    <div className="navbar-dropdown" ref={dropdownRef}>
      <button 
        className="dropdown-trigger"
        onClick={() => setIsOpen(!isOpen)}
        aria-haspopup="true"
        aria-expanded={isOpen}
      >
        {trigger}
      </button>
      {isOpen && (
        <div className="dropdown-menu" role="menu">
          {children}
        </div>
      )}
    </div>
  );
};
