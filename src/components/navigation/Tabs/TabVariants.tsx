import React from 'react';

export type TabVariant = 'underline' | 'pills' | 'enclosed';

export const tabVariantStyles: Record<TabVariant, string> = {
  underline: 'border-b-2 border-transparent hover:border-gray-300 aria-selected:border-blue-500',
  pills: 'rounded-full px-4 py-2 hover:bg-gray-100 aria-selected:bg-blue-500 aria-selected:text-white',
  enclosed: 'border border-gray-300 rounded-t-lg aria-selected:border-b-white aria-selected:bg-white',
};

export interface TabsWithVariantProps {
  variant?: TabVariant;
  children: React.ReactNode;
}

export const TabsWithVariant: React.FC<TabsWithVariantProps> = ({ 
  variant = 'underline', 
  children 
}) => {
  return (
    <div className={`tabs tabs-${variant}`}>
      {children}
    </div>
  );
};
