import React, { createContext, useContext, useState } from 'react';

interface SidebarCollapseContextValue {
  isCollapsed: boolean;
  toggle: () => void;
}

const SidebarCollapseContext = createContext<SidebarCollapseContextValue | null>(null);

export const useSidebarCollapse = () => {
  const context = useContext(SidebarCollapseContext);
  if (!context) throw new Error('useSidebarCollapse must be used within SidebarCollapseProvider');
  return context;
};

export interface SidebarCollapseProviderProps {
  defaultCollapsed?: boolean;
  children: React.ReactNode;
}

export const SidebarCollapseProvider: React.FC<SidebarCollapseProviderProps> = ({
  defaultCollapsed = false,
  children,
}) => {
  const [isCollapsed, setIsCollapsed] = useState(defaultCollapsed);
  
  const toggle = () => setIsCollapsed(prev => !prev);
  
  return (
    <SidebarCollapseContext.Provider value={{ isCollapsed, toggle }}>
      {children}
    </SidebarCollapseContext.Provider>
  );
};
