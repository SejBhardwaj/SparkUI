import React from 'react';
export interface TableToolbarProps {
  title?: string;
  actions?: React.ReactNode;
}
export const TableToolbar: React.FC<TableToolbarProps> = ({ title, actions }) => (
  <div className="table-toolbar flex justify-between p-4 border-b">
    {title && <h2 className="text-lg font-semibold">{title}</h2>}
    {actions}
  </div>
);
