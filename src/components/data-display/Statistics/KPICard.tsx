import React from 'react';
export interface KPICardProps {
  title: string;
  value: string | number;
  target?: string | number;
  progress?: number;
}
export const KPICard: React.FC<KPICardProps> = ({ title, value, target, progress }) => (
  <div className="kpi-card p-6 bg-white rounded-lg shadow">
    <h3 className="text-sm font-medium text-gray-600">{title}</h3>
    <div className="text-3xl font-bold">{value}</div>
    {target && <div className="text-sm text-gray-500">/ {target}</div>}
    {progress && <div className="w-full bg-gray-200 rounded h-2 mt-2">
      <div className="bg-blue-600 h-2 rounded" style={{width: `${progress}%`}} />
    </div>}
  </div>
);
