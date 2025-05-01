import React, { useState } from 'react';

export interface NavbarSearchProps {
  placeholder?: string;
  onSearch?: (query: string) => void;
}

export const NavbarSearch: React.FC<NavbarSearchProps> = ({ 
  placeholder = 'Search...', 
  onSearch 
}) => {
  const [query, setQuery] = useState('');
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch?.(query);
  };
  
  return (
    <form className="navbar-search" onSubmit={handleSubmit}>
      <input
        type="search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder={placeholder}
        className="search-input"
        aria-label="Search"
      />
      <button type="submit" className="search-button" aria-label="Submit search">
        🔍
      </button>
    </form>
  );
};
