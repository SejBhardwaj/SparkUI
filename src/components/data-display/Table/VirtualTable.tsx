import React from 'react';
export interface VirtualTableProps<T> {
  data: T[];
  rowHeight: number;
  renderRow: (item: T) => React.ReactNode;
}
export function VirtualTable<T>({ data, rowHeight, renderRow }: VirtualTableProps<T>) {
  return <div className="virtual-table">Virtual table placeholder</div>;
}
