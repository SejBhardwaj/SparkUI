import React from 'react';

export interface HeatMapProps {
  data: number[][];
  colorScale?: string[];
}

export const HeatMap: React.FC<HeatMapProps> = ({ 
  data,
  colorScale = ['#EFF6FF', '#3B82F6', '#1E40AF']
}) => {
  return (
    <div className="heat-map grid gap-1">
      {data.map((row, rowIndex) => (
        <div key={rowIndex} className="flex gap-1">
          {row.map((value, colIndex) => (
            <div
              key={colIndex}
              className="w-8 h-8 rounded"
              style={{ backgroundColor: colorScale[Math.floor(value / 33)] }}
            />
          ))}
        </div>
      ))}
    </div>
  );
};
