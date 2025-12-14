import React from 'react';

export interface Bubble {
  x: number;
  y: number;
  size: number;
  label?: string;
  color?: string;
}

export interface BubbleChartProps {
  data: Bubble[];
}

export const BubbleChart: React.FC<BubbleChartProps> = ({ data }) => {
  return (
    <div className="bubble-chart">
      <svg width="100%" height="400" viewBox="0 0 500 400">
        {data.map((bubble, index) => (
          <g key={index}>
            <circle
              cx={bubble.x}
              cy={bubble.y}
              r={bubble.size}
              fill={bubble.color || '#3B82F6'}
              opacity="0.6"
            />
            {bubble.label && (
              <text
                x={bubble.x}
                y={bubble.y}
                textAnchor="middle"
                className="text-xs"
              >
                {bubble.label}
              </text>
            )}
          </g>
        ))}
      </svg>
    </div>
  );
};
