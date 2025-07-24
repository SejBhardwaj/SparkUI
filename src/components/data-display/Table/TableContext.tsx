import React, { createContext } from 'react';
export interface TableContextValue {
  sortBy?: string;
}
export const TableContext = createContext<TableContextValue>({});
export const TableProvider: React.FC<{children: React.ReactNode; value: TableContextValue}> = ({ children, value }) => (
  <TableContext.Provider value={value}>{children}</TableContext.Provider>
);
