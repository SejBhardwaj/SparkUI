import React from 'react';
export interface TableFilterProps {
  onFilter: (value: string) => void;
}
export const TableFilter: React.FC<TableFilterProps> = ({ onFilter }) => (
  <input
    type="text"
    onChange={(e) => onFilter(e.target.value)}
    placeholder="Filter..."
    className="px-3 py-2 border rounded"
  />
);
