import React, { useState } from 'react';
import { Select, SelectProps } from './Select';

export const SelectSearch: React.FC<SelectProps> = ({ options, ...props }) => {
  const [search, setSearch] = useState('');
  const filtered = options.filter(opt => 
    opt.label.toLowerCase().includes(search.toLowerCase())
  );
  
  return (
    <div className="select-search">
      <input
        type="text"
        placeholder="Search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <Select options={filtered} {...props} />
    </div>
  );
};
