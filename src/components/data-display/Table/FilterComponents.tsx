import React from 'react';
export const TextFilter: React.FC<{onChange: (v: string) => void}> = ({ onChange }) => (
  <input type="text" onChange={(e) => onChange(e.target.value)} className="border rounded px-2 py-1" />
);
export const SelectFilter: React.FC<{options: string[]; onChange: (v: string) => void}> = ({ options, onChange }) => (
  <select onChange={(e) => onChange(e.target.value)} className="border rounded px-2 py-1">
    {options.map(opt => <option key={opt} value={opt}>{opt}</option>)}
  </select>
);
