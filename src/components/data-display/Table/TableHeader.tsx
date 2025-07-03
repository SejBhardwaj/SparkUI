import React from 'react';
export interface TableHeaderProps {
  children: React.ReactNode;
}
export const TableHeader: React.FC<TableHeaderProps> = ({ children }) => (
  <thead className="bg-gray-50">{children}</thead>
);
