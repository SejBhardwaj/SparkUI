import React from 'react';

export interface MultiSelectProps {
  options: Array<{ value: string; label: string }>;
  value: string[];
  onChange: (value: string[]) => void;
  label?: string;
}

export const MultiSelect: React.FC<MultiSelectProps> = ({ options, value, onChange, label }) => (
  <div className="multi-select">
    {label && <label>{label}</label>}
    <div className="selected-chips">
      {value.map(v => (
        <span key={v} className="chip">
          {options.find(o => o.value === v)?.label}
          <button onClick={() => onChange(value.filter(val => val !== v))}>×</button>
        </span>
      ))}
    </div>
    <select
      multiple
      value={value}
      onChange={(e) => {
        const selected = Array.from(e.target.selectedOptions, opt => opt.value);
        onChange(selected);
      }}
    >
      {options.map(opt => (
        <option key={opt.value} value={opt.value}>{opt.label}</option>
      ))}
    </select>
  </div>
);
