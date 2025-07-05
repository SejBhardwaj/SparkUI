import React from 'react';
export interface TableSelectionProps {
  selected: Set<number>;
  onSelect: (id: number) => void;
}
export const TableSelection: React.FC<TableSelectionProps> = ({ selected, onSelect }) => (
  <input type="checkbox" onChange={(e) => onSelect(0)} />
);
