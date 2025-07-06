import React from 'react';
export interface CardHeaderProps {
  children: React.ReactNode;
  actions?: React.ReactNode;
}
export const CardHeader: React.FC<CardHeaderProps> = ({ children, actions }) => (
  <div className="card-header flex justify-between items-center mb-4">
    <div>{children}</div>
    {actions && <div>{actions}</div>}
  </div>
);
