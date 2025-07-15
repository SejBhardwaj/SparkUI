import React from 'react';
export interface StatGroupProps {
  children: React.ReactNode;
  columns?: 2 | 3 | 4;
}
export const StatGroup: React.FC<StatGroupProps> = ({ children, columns = 3 }) => (
  <div className={`stat-group grid grid-cols-${columns} gap-4`}>{children}</div>
);
