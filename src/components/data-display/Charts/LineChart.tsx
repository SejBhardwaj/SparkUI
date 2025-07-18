import React from 'react';
export interface LineChartProps {
  data: { label: string; value: number }[];
}
export const LineChart: React.FC<LineChartProps> = ({ data }) => (
  <div className="line-chart">Simple line chart placeholder</div>
);
