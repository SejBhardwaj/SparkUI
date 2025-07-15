import React from 'react';
export interface TrendIndicatorProps {
  value: number;
}
export const TrendIndicator: React.FC<TrendIndicatorProps> = ({ value }) => (
  <span className={`trend-indicator ${value >= 0 ? 'text-green-600' : 'text-red-600'}`}>
    {value >= 0 ? '↑' : '↓'} {Math.abs(value)}%
  </span>
);
