import React from 'react';

export interface BreadcrumbProps {
  children: React.ReactNode;
  separator?: React.ReactNode;
}

export const Breadcrumb: React.FC<BreadcrumbProps> = ({ children, separator = '/' }) => {
  return (
    <nav aria-label="Breadcrumb" className="breadcrumb">
      <ol className="breadcrumb-list">
        {React.Children.map(children, (child, index) => (
          <li key={index} className="breadcrumb-list-item">
            {child}
            {index < React.Children.count(children) - 1 && (
              <span className="breadcrumb-separator" aria-hidden="true">
                {separator}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};
