import React from 'react';

export interface ScatterPoint {
  x: number;
  y: number;
  label?: string;
}

export interface ScatterPlotProps {
  data: ScatterPoint[];
  color?: string;
}

export const ScatterPlot: React.FC<ScatterPlotProps> = ({ data, color = '#EF4444' }) => {
  return (
    <div className="scatter-plot">
      <svg width="100%" height="300">
        {data.map((point, index) => (
          <circle
            key={index}
            cx={point.x}
            cy={point.y}
            r="4"
            fill={color}
          />
        ))}
      </svg>
    </div>
  );
};
