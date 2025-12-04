import React from 'react';

export interface DonutChartProps {
  data: { label: string; value: number; color: string }[];
  centerText?: string;
}

export const DonutChart: React.FC<DonutChartProps> = ({ data, centerText }) => {
  const total = data.reduce((sum, item) => sum + item.value, 0);
  
  return (
    <div className="donut-chart relative">
      <svg width="200" height="200" viewBox="0 0 200 200">
        <circle r="90" cx="100" cy="100" fill="white" />
        {centerText && (
          <text x="100" y="100" textAnchor="middle" className="text-2xl font-bold">
            {centerText}
          </text>
        )}
      </svg>
    </div>
  );
};
