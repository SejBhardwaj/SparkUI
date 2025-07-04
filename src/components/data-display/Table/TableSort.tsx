import React from 'react';
export interface TableSortProps {
  column: string;
  direction: 'asc' | 'desc';
  onSort: (column: string) => void;
}
export const TableSort: React.FC<TableSortProps> = ({ column, direction, onSort }) => (
  <button onClick={() => onSort(column)} className="flex items-center gap-1">
    Sort {direction === 'asc' ? '↑' : '↓'}
  </button>
);
