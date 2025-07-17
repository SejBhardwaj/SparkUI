import React from 'react';
export interface MetricItem {
  label: string;
  value: string | number;
}
export interface MetricsDisplayProps {
  metrics: MetricItem[];
}
export const MetricsDisplay: React.FC<MetricsDisplayProps> = ({ metrics }) => (
  <div className="metrics-display grid grid-cols-4 gap-4">
    {metrics.map((m, i) => (
      <div key={i} className="metric p-4 bg-white rounded shadow">
        <div className="text-2xl font-bold">{m.value}</div>
        <div className="text-sm text-gray-600">{m.label}</div>
      </div>
    ))}
  </div>
);
