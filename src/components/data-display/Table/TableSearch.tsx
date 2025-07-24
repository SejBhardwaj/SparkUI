import React from 'react';
export interface TableSearchProps {
  onSearch: (query: string) => void;
}
export const TableSearch: React.FC<TableSearchProps> = ({ onSearch }) => (
  <input type="text" onChange={(e) => onSearch(e.target.value)} className="px-4 py-2 border rounded" placeholder="Search..." />
);
