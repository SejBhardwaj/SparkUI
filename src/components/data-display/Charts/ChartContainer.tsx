import React from 'react';

export interface ChartContainerProps {
  title?: string;
  children: React.ReactNode;
  height?: number;
}

export const ChartContainer: React.FC<ChartContainerProps> = ({
  title,
  children,
  height = 300
}) => {
  return (
    <div className="chart-container bg-white rounded-lg shadow p-6">
      {title && <h3 className="text-lg font-semibold mb-4">{title}</h3>}
      <div style={{ height: `${height}px` }}>{children}</div>
    </div>
  );
};
