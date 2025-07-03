import React from 'react';
export interface TableProps<T> {
  data: T[];
  columns: { key: keyof T; label: string }[];
}
export function Table<T>({ data, columns }: TableProps<T>) {
  return (
    <table className="min-w-full divide-y divide-gray-200">
      <thead><tr>
        {columns.map(col => <th key={String(col.key)}>{col.label}</th>)}
      </tr></thead>
      <tbody>
        {data.map((row, i) => (
          <tr key={i}>
            {columns.map(col => <td key={String(col.key)}>{String(row[col.key])}</td>)}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
