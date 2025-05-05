import React, { useRef, useEffect } from 'react';
import { useTabs } from './Tabs';

export interface TabProps {
  value: string;
  children: React.ReactNode;
  disabled?: boolean;
}

export const Tab: React.FC<TabProps> = ({ value, children, disabled }) => {
  const { activeTab, setActiveTab } = useTabs();
  const isActive = activeTab === value;
  const tabRef = useRef<HTMLButtonElement>(null);
  
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
      e.preventDefault();
      const tabs = Array.from(document.querySelectorAll('[role="tab"]'));
      const currentIndex = tabs.indexOf(e.currentTarget);
      const nextIndex = e.key === 'ArrowRight' 
        ? (currentIndex + 1) % tabs.length
        : (currentIndex - 1 + tabs.length) % tabs.length;
      (tabs[nextIndex] as HTMLElement).focus();
    }
  };
  
  return (
    <button
      ref={tabRef}
      role="tab"
      id={`tab-${value}`}
      aria-selected={isActive}
      aria-controls={`tabpanel-${value}`}
      tabIndex={isActive ? 0 : -1}
      disabled={disabled}
      onClick={() => !disabled && setActiveTab(value)}
      onKeyDown={handleKeyDown}
      className={`tab ${isActive ? 'active' : ''} ${disabled ? 'disabled' : ''}`}
    >
      {children}
    </button>
  );
};

export interface TabListProps {
  children: React.ReactNode;
}

export const TabList: React.FC<TabListProps> = ({ children }) => {
  return (
    <div role="tablist" className="tab-list">
      {children}
    </div>
  );
};
