export const formatStatValue = (value: number, format?: 'currency' | 'percentage'): string => {
  if (format === 'currency') return `$${value.toLocaleString()}`;
  if (format === 'percentage') return `${value}%`;
  return value.toLocaleString();
};
