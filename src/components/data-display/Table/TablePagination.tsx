import React from 'react';
export interface TablePaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}
export const TablePagination: React.FC<TablePaginationProps> = ({ currentPage, totalPages, onPageChange }) => (
  <div className="flex gap-2">
    <button onClick={() => onPageChange(currentPage - 1)} disabled={currentPage === 1}>Previous</button>
    <span>Page {currentPage} of {totalPages}</span>
    <button onClick={() => onPageChange(currentPage + 1)} disabled={currentPage === totalPages}>Next</button>
  </div>
);
