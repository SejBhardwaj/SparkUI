import React from 'react';
import { Checkbox } from './Checkbox';

export interface CheckboxGroupProps {
  options: Array<{ value: string; label: string }>;
  value?: string[];
  onChange?: (value: string[]) => void;
  label?: string;
}

export const CheckboxGroup: React.FC<CheckboxGroupProps> = ({ options, value = [], onChange, label }) => (
  <div className="checkbox-group">
    {label && <label>{label}</label>}
    {options.map(opt => (
      <Checkbox
        key={opt.value}
        label={opt.label}
        checked={value.includes(opt.value)}
        onChange={(e) => {
          const newValue = e.target.checked
            ? [...value, opt.value]
            : value.filter(v => v !== opt.value);
          onChange?.(newValue);
        }}
      />
    ))}
  </div>
);
