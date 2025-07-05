import React from 'react';
import { Table } from '../../components/data-display/Table/Table';
export const TableExamples: React.FC = () => {
  const data = [{ id: 1, name: 'Example', status: 'Active' }];
  const columns = [
    { key: 'name' as const, label: 'Name' },
    { key: 'status' as const, label: 'Status' },
  ];
  return <div><h1>Table Examples</h1><Table data={data} columns={columns} /></div>;
};
