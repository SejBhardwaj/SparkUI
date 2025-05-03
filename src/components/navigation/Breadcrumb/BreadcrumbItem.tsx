import React from 'react';

export interface BreadcrumbItemProps {
  href?: string;
  active?: boolean;
  children: React.ReactNode;
}

export const BreadcrumbItem: React.FC<BreadcrumbItemProps> = ({ href, active, children }) => {
  if (active || !href) {
    return (
      <span className="breadcrumb-item active" aria-current="page">
        {children}
      </span>
    );
  }
  
  return (
    <a href={href} className="breadcrumb-item">
      {children}
    </a>
  );
};
