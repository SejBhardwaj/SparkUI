export const formatCurrency = (value: number): string => `$${value.toLocaleString()}`;
export const formatPercentage = (value: number): string => `${value}%`;
export const formatCompactNumber = (value: number): string => {
  if (value >= 1000000) return `${(value / 1000000).toFixed(1)}M`;
  if (value >= 1000) return `${(value / 1000).toFixed(1)}K`;
  return value.toString();
};
