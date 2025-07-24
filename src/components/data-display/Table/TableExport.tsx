import React from 'react';
export interface TableExportProps {
  data: any[];
  filename?: string;
}
export const TableExport: React.FC<TableExportProps> = ({ data, filename = 'export' }) => (
  <button className="px-4 py-2 bg-blue-600 text-white rounded">Export CSV</button>
);
