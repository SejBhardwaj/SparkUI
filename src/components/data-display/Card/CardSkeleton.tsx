import React from 'react';
export interface CardSkeletonProps {
  variant?: 'default' | 'media';
}
export const CardSkeleton: React.FC<CardSkeletonProps> = ({ variant = 'default' }) => (
  <div className="card-skeleton animate-pulse bg-gray-200 h-32 rounded"></div>
);
