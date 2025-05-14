import React, { createContext, useContext, useState } from 'react';

interface MenuContextValue {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}

const MenuContext = createContext<MenuContextValue | null>(null);

export const useMenu = () => {
  const context = useContext(MenuContext);
  if (!context) throw new Error('useMenu must be used within Menu');
  return context;
};

export interface MenuProps {
  children: React.ReactNode;
  trigger?: React.ReactNode;
}

export const Menu: React.FC<MenuProps> = ({ children, trigger }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <MenuContext.Provider value={{ isOpen, setIsOpen }}>
      <div className="menu">
        {trigger && (
          <button
            className="menu-trigger"
            onClick={() => setIsOpen(!isOpen)}
            aria-haspopup="true"
            aria-expanded={isOpen}
          >
            {trigger}
          </button>
        )}
        {isOpen && (
          <div className="menu-content" role="menu">
            {children}
          </div>
        )}
      </div>
    </MenuContext.Provider>
  );
};
