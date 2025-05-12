import React from 'react';

export interface PaginationInfoProps {
  currentPage: number;
  totalPages: number;
  totalItems: number;
  itemsPerPage: number;
}

export const PaginationInfo: React.FC<PaginationInfoProps> = ({
  currentPage,
  totalPages,
  totalItems,
  itemsPerPage,
}) => {
  const startItem = (currentPage - 1) * itemsPerPage + 1;
  const endItem = Math.min(currentPage * itemsPerPage, totalItems);
  
  return (
    <div className="pagination-info" aria-live="polite">
      Showing {startItem} to {endItem} of {totalItems} items
      <span className="sr-only">
        , page {currentPage} of {totalPages}
      </span>
    </div>
  );
};
