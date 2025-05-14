import React from 'react';

export const MenuDivider: React.FC = () => {
  return <hr className="menu-divider" role="separator" />;
};

export interface MenuGroupProps {
  label?: string;
  children: React.ReactNode;
}

export const MenuGroup: React.FC<MenuGroupProps> = ({ label, children }) => {
  return (
    <div className="menu-group" role="group" aria-label={label}>
      {label && <div className="menu-group-label">{label}</div>}
      {children}
    </div>
  );
};
