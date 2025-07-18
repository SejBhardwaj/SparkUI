import React from 'react';
export interface BarChartProps {
  data: { label: string; value: number }[];
}
export const BarChart: React.FC<BarChartProps> = ({ data }) => (
  <div className="bar-chart">Bar chart placeholder</div>
);
