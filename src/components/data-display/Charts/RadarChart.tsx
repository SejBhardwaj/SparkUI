import React from 'react';

export interface RadarChartProps {
  data: { label: string; value: number }[];
  maxValue?: number;
}

export const RadarChart: React.FC<RadarChartProps> = ({ data, maxValue = 100 }) => {
  return (
    <div className="radar-chart">
      <svg width="300" height="300" viewBox="0 0 300 300">
        <circle cx="150" cy="150" r="100" fill="none" stroke="#E5E7EB" />
        <circle cx="150" cy="150" r="50" fill="none" stroke="#E5E7EB" />
      </svg>
    </div>
  );
};
