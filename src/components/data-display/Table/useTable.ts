import { useState } from 'react';
export const useTable = <T>(data: T[]) => {
  const [currentPage, setCurrentPage] = useState(1);
  return { data, currentPage, setCurrentPage };
};
