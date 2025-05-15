import React, { useState, useEffect, useRef } from 'react';

export interface ContextMenuProps {
  children: React.ReactNode;
  menu: React.ReactNode;
}

export const ContextMenu: React.FC<ContextMenuProps> = ({ children, menu }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const menuRef = useRef<HTMLDivElement>(null);
  
  const handleContextMenu = (e: React.MouseEvent) => {
    e.preventDefault();
    setPosition({ x: e.clientX, y: e.clientY });
    setIsOpen(true);
  };
  
  useEffect(() => {
    const handleClick = () => setIsOpen(false);
    if (isOpen) {
      document.addEventListener('click', handleClick);
      return () => document.removeEventListener('click', handleClick);
    }
  }, [isOpen]);
  
  return (
    <div onContextMenu={handleContextMenu}>
      {children}
      {isOpen && (
        <div
          ref={menuRef}
          className="context-menu"
          style={{ top: position.y, left: position.x }}
          role="menu"
        >
          {menu}
        </div>
      )}
    </div>
  );
};
