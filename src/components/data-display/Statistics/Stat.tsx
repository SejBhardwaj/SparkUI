import React from 'react';
export interface StatProps {
  label: string;
  value: string | number;
  change?: number;
  changeType?: 'increase' | 'decrease';
}
export const Stat: React.FC<StatProps> = ({ label, value, change, changeType }) => (
  <div className="stat">
    <div className="stat-value text-3xl font-bold">{value}</div>
    <div className="stat-label text-sm text-gray-600">{label}</div>
    {change && <div className={changeType === 'increase' ? 'text-green-600' : 'text-red-600'}>
      {changeType === 'increase' ? '↑' : '↓'} {Math.abs(change)}%
    </div>}
  </div>
);
