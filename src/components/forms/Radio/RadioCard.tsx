import React from 'react';

export interface RadioCardProps {
  name: string;
  value: string;
  title: string;
  description?: string;
  icon?: React.ReactNode;
  checked?: boolean;
  onChange?: () => void;
}

export const RadioCard: React.FC<RadioCardProps> = ({ name, value, title, description, icon, checked, onChange }) => (
  <label className="radio-card">
    <input type="radio" name={name} value={value} checked={checked} onChange={onChange} />
    <div className="radio-card-content">
      {icon && <div className="icon">{icon}</div>}
      <h4>{title}</h4>
      {description && <p>{description}</p>}
    </div>
  </label>
);
