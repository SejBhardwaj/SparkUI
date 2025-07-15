import React from 'react';
export interface StatCardProps {
  title: string;
  value: string | number;
  trend?: { value: number; isPositive: boolean };
}
export const StatCard: React.FC<StatCardProps> = ({ title, value, trend }) => (
  <div className="stat-card p-6 bg-white rounded-lg shadow">
    <h3 className="text-sm font-medium text-gray-600">{title}</h3>
    <div className="stat-value text-3xl font-bold mb-2">{value}</div>
    {trend && <div className={trend.isPositive ? 'text-green-600' : 'text-red-600'}>
      {trend.isPositive ? '↑' : '↓'} {Math.abs(trend.value)}%
    </div>}
  </div>
);
