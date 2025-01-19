/**
 * Array Helper Utilities
 * Common array manipulation functions
 */

export const unique = <T>(array: T[]): T[] => {
  return [...new Set(array)];
};

export const uniqueBy = <T>(array: T[], key: keyof T): T[] => {
  const seen = new Set();
  return array.filter(item => {
    const value = item[key];
    if (seen.has(value)) return false;
    seen.add(value);
    return true;
  });
};

export const groupBy = <T>(array: T[], key: keyof T): Record<string, T[]> => {
  return array.reduce((result, item) => {
    const groupKey = String(item[key]);
    if (!result[groupKey]) result[groupKey] = [];
    result[groupKey].push(item);
    return result;
  }, {} as Record<string, T[]>);
};

export const chunk = <T>(array: T[], size: number): T[][] => {
  const chunks: T[][] = [];
  for (let i = 0; i < array.length; i += size) {
    chunks.push(array.slice(i, i + size));
  }
  return chunks;
};

export const shuffle = <T>(array: T[]): T[] => {
  const result = [...array];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
};

export const sample = <T>(array: T[]): T => {
  return array[Math.floor(Math.random() * array.length)];
};

export const sampleSize = <T>(array: T[], size: number): T[] => {
  const shuffled = shuffle(array);
  return shuffled.slice(0, Math.min(size, array.length));
};

export const sortBy = <T>(array: T[], key: keyof T, order: 'asc' | 'desc' = 'asc'): T[] => {
  return [...array].sort((a, b) => {
    const aVal = a[key];
    const bVal = b[key];
    if (aVal < bVal) return order === 'asc' ? -1 : 1;
    if (aVal > bVal) return order === 'asc' ? 1 : -1;
    return 0;
  });
};

export const partition = <T>(array: T[], predicate: (item: T) => boolean): [T[], T[]] => {
  const pass: T[] = [];
  const fail: T[] = [];
  array.forEach(item => {
    if (predicate(item)) pass.push(item);
    else fail.push(item);
  });
  return [pass, fail];
};

export const intersection = <T>(array1: T[], array2: T[]): T[] => {
  const set2 = new Set(array2);
  return array1.filter(item => set2.has(item));
};

export const difference = <T>(array1: T[], array2: T[]): T[] => {
  const set2 = new Set(array2);
  return array1.filter(item => !set2.has(item));
};

export const flatten = <T>(array: any[]): T[] => {
  return array.reduce((flat, item) => {
    return flat.concat(Array.isArray(item) ? flatten(item) : item);
  }, []);
};

export const compact = <T>(array: (T | null | undefined | false | 0 | '')[]): T[] => {
  return array.filter(Boolean) as T[];
};
