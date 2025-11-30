import React from 'react';

export interface LegendItem {
  label: string;
  color: string;
}

export interface ChartLegendProps {
  items: LegendItem[];
  position?: 'top' | 'bottom' | 'left' | 'right';
}

export const ChartLegend: React.FC<ChartLegendProps> = ({ items, position = 'bottom' }) => {
  return (
    <div className={`chart-legend flex gap-4 ${position === 'bottom' ? 'mt-4' : ''}`}>
      {items.map((item, index) => (
        <div key={index} className="legend-item flex items-center gap-2">
          <span className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }} />
          <span className="text-sm">{item.label}</span>
        </div>
      ))}
    </div>
  );
};
