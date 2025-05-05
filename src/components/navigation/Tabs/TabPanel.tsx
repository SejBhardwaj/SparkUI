import React from 'react';
import { useTabs } from './Tabs';

export interface TabPanelProps {
  value: string;
  children: React.ReactNode;
}

export const TabPanel: React.FC<TabPanelProps> = ({ value, children }) => {
  const { activeTab } = useTabs();
  
  if (activeTab !== value) return null;
  
  return (
    <div 
      role="tabpanel"
      id={`tabpanel-${value}`}
      aria-labelledby={`tab-${value}`}
      className="tab-panel"
    >
      {children}
    </div>
  );
};
