import React from 'react';

export interface GaugeChartProps {
  value: number;
  max?: number;
  label?: string;
}

export const GaugeChart: React.FC<GaugeChartProps> = ({ 
  value, 
  max = 100,
  label 
}) => {
  const percentage = (value / max) * 100;
  
  return (
    <div className="gauge-chart text-center">
      <svg width="200" height="120" viewBox="0 0 200 120">
        <path
          d="M 20 100 A 80 80 0 0 1 180 100"
          fill="none"
          stroke="#E5E7EB"
          strokeWidth="20"
        />
        <path
          d="M 20 100 A 80 80 0 0 1 180 100"
          fill="none"
          stroke="#3B82F6"
          strokeWidth="20"
          strokeDasharray={`${percentage * 2.51} 251`}
        />
      </svg>
      <div className="mt-2">
        <div className="text-3xl font-bold">{value}</div>
        {label && <div className="text-sm text-gray-600">{label}</div>}
      </div>
    </div>
  );
};
