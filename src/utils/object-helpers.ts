/**
 * Object Helper Utilities
 * Common object manipulation functions
 */

export const pick = <T extends object, K extends keyof T>(
  obj: T,
  keys: K[]
): Pick<T, K> => {
  const result = {} as Pick<T, K>;
  keys.forEach(key => {
    if (key in obj) result[key] = obj[key];
  });
  return result;
};

export const omit = <T extends object, K extends keyof T>(
  obj: T,
  keys: K[]
): Omit<T, K> => {
  const result = { ...obj };
  keys.forEach(key => delete result[key]);
  return result;
};

export const deepClone = <T>(obj: T): T => {
  if (obj === null || typeof obj !== 'object') return obj;
  if (obj instanceof Date) return new Date(obj.getTime()) as any;
  if (obj instanceof Array) return obj.map(item => deepClone(item)) as any;
  
  const cloned = {} as T;
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      cloned[key] = deepClone(obj[key]);
    }
  }
  return cloned;
};

export const deepMerge = <T extends object>(target: T, ...sources: Partial<T>[]): T => {
  if (!sources.length) return target;
  const source = sources.shift();
  
  if (source === undefined) return target;
  
  if (isObject(target) && isObject(source)) {
    for (const key in source) {
      if (isObject(source[key])) {
        if (!target[key]) Object.assign(target, { [key]: {} });
        deepMerge(target[key] as any, source[key] as any);
      } else {
        Object.assign(target, { [key]: source[key] });
      }
    }
  }
  
  return deepMerge(target, ...sources);
};

export const isObject = (item: any): item is object => {
  return item && typeof item === 'object' && !Array.isArray(item);
};

export const isEmpty = (obj: object): boolean => {
  return Object.keys(obj).length === 0;
};

export const hasKey = <T extends object>(obj: T, key: PropertyKey): key is keyof T => {
  return key in obj;
};

export const getNestedValue = (obj: any, path: string): any => {
  return path.split('.').reduce((current, key) => current?.[key], obj);
};

export const setNestedValue = (obj: any, path: string, value: any): void => {
  const keys = path.split('.');
  const lastKey = keys.pop()!;
  const target = keys.reduce((current, key) => {
    if (!current[key]) current[key] = {};
    return current[key];
  }, obj);
  target[lastKey] = value;
};

export const flattenObject = (obj: any, prefix: string = ''): Record<string, any> => {
  return Object.keys(obj).reduce((acc, key) => {
    const prefixedKey = prefix ? `${prefix}.${key}` : key;
    if (isObject(obj[key]) && !Array.isArray(obj[key])) {
      Object.assign(acc, flattenObject(obj[key], prefixedKey));
    } else {
      acc[prefixedKey] = obj[key];
    }
    return acc;
  }, {} as Record<string, any>);
};

export const mapKeys = <T extends object>(
  obj: T,
  fn: (key: string) => string
): Record<string, any> => {
  return Object.keys(obj).reduce((result, key) => {
    result[fn(key)] = obj[key as keyof T];
    return result;
  }, {} as Record<string, any>);
};

export const mapValues = <T extends object, R>(
  obj: T,
  fn: (value: T[keyof T], key: keyof T) => R
): Record<keyof T, R> => {
  return Object.keys(obj).reduce((result, key) => {
    result[key as keyof T] = fn(obj[key as keyof T], key as keyof T);
    return result;
  }, {} as Record<keyof T, R>);
};
