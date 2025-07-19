import React from 'react';
export interface PieChartProps {
  data: { label: string; value: number }[];
}
export const PieChart: React.FC<PieChartProps> = ({ data }) => (
  <div className="pie-chart">Pie chart placeholder</div>
);
