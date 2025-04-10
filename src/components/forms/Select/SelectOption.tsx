import React from 'react';

export interface SelectOptionProps {
  value: string;
  label: string;
  icon?: React.ReactNode;
  description?: string;
  disabled?: boolean;
}

export const SelectOption: React.FC<SelectOptionProps> = ({ value, label, icon, description }) => (
  <div className="select-option">
    {icon && <span className="icon">{icon}</span>}
    <div>
      <span>{label}</span>
      {description && <span className="description">{description}</span>}
    </div>
  </div>
);
