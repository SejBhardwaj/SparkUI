import React from 'react';
export interface CardFooterProps {
  children: React.ReactNode;
}
export const CardFooter: React.FC<CardFooterProps> = ({ children }) => (
  <div className="card-footer mt-4 pt-4 border-t">{children}</div>
);
