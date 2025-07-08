import React from 'react';
export interface CardGridProps {
  children: React.ReactNode;
  columns?: 2 | 3 | 4;
}
export const CardGrid: React.FC<CardGridProps> = ({ children, columns = 3 }) => (
  <div className={`card-grid grid grid-cols-${columns} gap-4`}>{children}</div>
);
