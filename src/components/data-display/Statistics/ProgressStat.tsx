import React from 'react';
export interface ProgressStatProps {
  label: string;
  value: number;
  max: number;
}
export const ProgressStat: React.FC<ProgressStatProps> = ({ label, value, max }) => {
  const percentage = (value / max) * 100;
  return (
    <div className="progress-stat">
      <div className="flex justify-between mb-2">
        <span className="text-sm">{label}</span>
        <span className="text-sm">{percentage.toFixed(0)}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded h-2">
        <div className="bg-blue-600 h-2 rounded" style={{width: `${percentage}%`}} />
      </div>
    </div>
  );
};
