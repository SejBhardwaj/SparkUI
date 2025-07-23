export type SortDirection = 'asc' | 'desc';
export const sortByKey = <T>(array: T[], key: keyof T, direction: SortDirection = 'asc'): T[] => {
  return [...array].sort((a, b) => {
    if (a[key] < b[key]) return direction === 'asc' ? -1 : 1;
    if (a[key] > b[key]) return direction === 'asc' ? 1 : -1;
    return 0;
  });
};
