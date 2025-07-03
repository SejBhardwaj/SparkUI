import React from 'react';
export interface TableCellProps {
  children: React.ReactNode;
  variant?: 'default' | 'header';
}
export const TableCell: React.FC<TableCellProps> = ({ children, variant = 'default' }) => {
  const Tag = variant === 'header' ? 'th' : 'td';
  return <Tag className="px-6 py-4 text-sm">{children}</Tag>;
};
