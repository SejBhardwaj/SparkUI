import React from 'react';

export interface FormGridProps {
  columns?: 1 | 2 | 3 | 4;
  gap?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export const FormGrid: React.FC<FormGridProps> = ({ columns = 1, gap = 'md', children }) => (
  <div className={`form-grid cols-${columns} gap-${gap}`}>
    {children}
  </div>
);
