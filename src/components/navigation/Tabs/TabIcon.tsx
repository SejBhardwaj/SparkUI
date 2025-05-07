import React from 'react';

export interface TabWithIconProps {
  icon: React.ReactNode;
  label: string;
  value: string;
}

export const TabWithIcon: React.FC<TabWithIconProps> = ({ icon, label, value }) => {
  return (
    <div className="tab-with-icon">
      <span className="tab-icon">{icon}</span>
      <span className="tab-label">{label}</span>
    </div>
  );
};
