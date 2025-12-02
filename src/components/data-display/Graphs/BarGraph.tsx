import React from 'react';

export interface BarGraphProps {
  data: { label: string; value: number }[];
  color?: string;
}

export const BarGraph: React.FC<BarGraphProps> = ({ data, color = '#3B82F6' }) => {
  const maxValue = Math.max(...data.map(d => d.value));
  
  return (
    <div className="bar-graph space-y-2">
      {data.map((item, index) => (
        <div key={index} className="bar-item">
          <div className="flex justify-between mb-1">
            <span className="text-sm">{item.label}</span>
            <span className="text-sm font-semibold">{item.value}</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="h-2 rounded-full"
              style={{ width: `${(item.value / maxValue) * 100}%`, backgroundColor: color }}
            />
          </div>
        </div>
      ))}
    </div>
  );
};
