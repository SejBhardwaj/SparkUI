import React from 'react';
import { Radio } from './Radio';

export interface RadioGroupProps {
  name: string;
  options: Array<{ value: string; label: string; description?: string }>;
  value?: string;
  onChange?: (value: string) => void;
  label?: string;
}

export const RadioGroup: React.FC<RadioGroupProps> = ({ name, options, value, onChange, label }) => (
  <div className="radio-group" role="radiogroup">
    {label && <label>{label}</label>}
    {options.map(opt => (
      <Radio
        key={opt.value}
        name={name}
        value={opt.value}
        label={opt.label}
        description={opt.description}
        checked={value === opt.value}
        onChange={() => onChange?.(opt.value)}
      />
    ))}
  </div>
);
