import React from 'react';
export interface ColumnVisibilityProps {
  columns: { id: string; label: string; visible: boolean }[];
  onToggle: (id: string) => void;
}
export const ColumnVisibility: React.FC<ColumnVisibilityProps> = ({ columns, onToggle }) => (
  <div className="column-visibility">Column visibility controls</div>
);
