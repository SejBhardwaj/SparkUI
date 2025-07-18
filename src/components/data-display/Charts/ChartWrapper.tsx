import React from 'react';
export interface ChartWrapperProps {
  title?: string;
  children: React.ReactNode;
  height?: number;
}
export const ChartWrapper: React.FC<ChartWrapperProps> = ({ title, children, height = 300 }) => (
  <div className="chart-wrapper bg-white rounded-lg shadow p-6">
    {title && <h3 className="text-lg font-semibold mb-4">{title}</h3>}
    <div style={{height: `${height}px`}}>{children}</div>
  </div>
);
