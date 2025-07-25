import React from 'react';
export interface CardMasonryProps {
  children: React.ReactNode;
  columns?: number;
}
export const CardMasonry: React.FC<CardMasonryProps> = ({ children, columns = 3 }) => (
  <div className="card-masonry" style={{columnCount: columns}}>{children}</div>
);
