import React from 'react';

export interface LineGraphProps {
  data: number[];
  labels?: string[];
  color?: string;
}

export const LineGraph: React.FC<LineGraphProps> = ({ data, labels, color = '#10B981' }) => {
  return (
    <div className="line-graph">
      <svg width="100%" height="200" className="overflow-visible">
        <polyline
          fill="none"
          stroke={color}
          strokeWidth="2"
          points={data.map((value, index) => 
            `${(index / (data.length - 1)) * 100}%,${100 - value}%`
          ).join(' ')}
        />
      </svg>
    </div>
  );
};
