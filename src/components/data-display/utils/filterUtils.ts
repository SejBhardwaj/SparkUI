export const filterBySearch = <T>(array: T[], searchTerm: string, keys: (keyof T)[]): T[] => {
  const lower = searchTerm.toLowerCase();
  return array.filter(item =>
    keys.some(key => String(item[key]).toLowerCase().includes(lower))
  );
};
