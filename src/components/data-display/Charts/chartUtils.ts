export const formatChartValue = (value: number): string => value.toLocaleString();
export const generateChartColors = (count: number): string[] => {
  const colors = ['#3B82F6', '#EF4444', '#10B981', '#F59E0B'];
  return Array.from({ length: count }, (_, i) => colors[i % colors.length]);
};
