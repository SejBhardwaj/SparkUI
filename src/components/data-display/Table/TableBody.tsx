import React from 'react';
export interface TableBodyProps {
  children: React.ReactNode;
}
export const TableBody: React.FC<TableBodyProps> = ({ children }) => (
  <tbody className="bg-white divide-y divide-gray-200">{children}</tbody>
);
export const TableRow: React.FC<{children: React.ReactNode}> = ({ children }) => (
  <tr className="hover:bg-gray-50">{children}</tr>
);
