import React, { useState } from 'react';

export interface SidebarProps {
  children: React.ReactNode;
  variant?: 'fixed' | 'overlay' | 'push';
  position?: 'left' | 'right';
  collapsible?: boolean;
  defaultCollapsed?: boolean;
}

export const Sidebar: React.FC<SidebarProps> = ({
  children,
  variant = 'fixed',
  position = 'left',
  collapsible = true,
  defaultCollapsed = false,
}) => {
  const [isCollapsed, setIsCollapsed] = useState(defaultCollapsed);
  
  return (
    <aside
      className={`sidebar sidebar-${variant} sidebar-${position} ${isCollapsed ? 'collapsed' : ''}`}
      aria-label="Sidebar navigation"
    >
      {collapsible && (
        <button
          className="sidebar-toggle"
          onClick={() => setIsCollapsed(!isCollapsed)}
          aria-label={isCollapsed ? 'Expand sidebar' : 'Collapse sidebar'}
          aria-expanded={!isCollapsed}
        >
          {isCollapsed ? '»' : '«'}
        </button>
      )}
      <nav className="sidebar-content">{children}</nav>
    </aside>
  );
};
