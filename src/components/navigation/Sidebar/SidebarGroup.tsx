import React, { useState } from 'react';

export interface SidebarGroupProps {
  title: string;
  icon?: React.ReactNode;
  collapsible?: boolean;
  defaultOpen?: boolean;
  children: React.ReactNode;
}

export const SidebarGroup: React.FC<SidebarGroupProps> = ({
  title,
  icon,
  collapsible = true,
  defaultOpen = true,
  children,
}) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  
  return (
    <div className="sidebar-group">
      <button
        className="sidebar-group-header"
        onClick={() => collapsible && setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        disabled={!collapsible}
      >
        {icon && <span className="sidebar-group-icon">{icon}</span>}
        <span className="sidebar-group-title">{title}</span>
        {collapsible && (
          <span className={`sidebar-group-toggle ${isOpen ? 'open' : ''}`}>▼</span>
        )}
      </button>
      {isOpen && <div className="sidebar-group-content">{children}</div>}
    </div>
  );
};
