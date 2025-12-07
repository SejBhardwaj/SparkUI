import React from 'react';

export interface AreaChartProps {
  data: number[];
  color?: string;
  fillOpacity?: number;
}

export const AreaChart: React.FC<AreaChartProps> = ({ 
  data, 
  color = '#8B5CF6',
  fillOpacity = 0.3 
}) => {
  return (
    <div className="area-chart">
      <svg width="100%" height="200">
        <defs>
          <linearGradient id="areaGradient" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor={color} stopOpacity={fillOpacity} />
            <stop offset="100%" stopColor={color} stopOpacity="0" />
          </linearGradient>
        </defs>
        <path fill="url(#areaGradient)" stroke={color} strokeWidth="2" />
      </svg>
    </div>
  );
};
