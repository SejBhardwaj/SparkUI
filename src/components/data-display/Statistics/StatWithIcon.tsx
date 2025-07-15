import React from 'react';
export interface StatWithIconProps {
  label: string;
  value: string | number;
  icon: React.ReactNode;
}
export const StatWithIcon: React.FC<StatWithIconProps> = ({ label, value, icon }) => (
  <div className="stat-with-icon flex items-center gap-4 p-4">
    <div className="icon-wrapper p-3 rounded-full bg-blue-100">{icon}</div>
    <div>
      <div className="stat-value text-2xl font-bold">{value}</div>
      <div className="stat-label text-sm text-gray-600">{label}</div>
    </div>
  </div>
);
