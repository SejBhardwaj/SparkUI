import React from 'react';
export interface ChartLegendProps {
  items: { label: string; color: string }[];
}
export const ChartLegend: React.FC<ChartLegendProps> = ({ items }) => (
  <div className="chart-legend flex gap-4">
    {items.map((item, i) => (
      <div key={i} className="flex items-center gap-2">
        <div className="w-3 h-3 rounded" style={{backgroundColor: item.color}} />
        <span className="text-sm">{item.label}</span>
      </div>
    ))}
  </div>
);
