import React from 'react';
export interface TableActionsProps {
  actions: { label: string; onClick: () => void }[];
}
export const TableActions: React.FC<TableActionsProps> = ({ actions }) => (
  <div className="flex gap-2">
    {actions.map((action, i) => (
      <button key={i} onClick={action.onClick} className="px-3 py-1 bg-blue-600 text-white rounded">
        {action.label}
      </button>
    ))}
  </div>
);
