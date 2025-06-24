import React from 'react';
import { Skeleton } from './Skeleton';

export const TextSkeleton: React.FC<{ lines?: number; width?: string }> = ({ 
  lines = 3, 
  width = '100%' 
}) => {
  return (
    <div className="skeleton-text">
      {Array.from({ length: lines }).map((_, index) => (
        <Skeleton 
          key={index} 
          variant="text" 
          width={index === lines - 1 ? '80%' : width}
        />
      ))}
    </div>
  );
};

export const CircleSkeleton: React.FC<{ size?: number }> = ({ size = 40 }) => {
  return <Skeleton variant="circular" width={size} height={size} />;
};

export const RectSkeleton: React.FC<{ width?: string | number; height?: string | number }> = ({ 
  width = '100%', 
  height = 200 
}) => {
  return <Skeleton variant="rectangular" width={width} height={height} />;
};

export const AvatarSkeleton: React.FC<{ size?: 'sm' | 'md' | 'lg' }> = ({ size = 'md' }) => {
  const sizes = {
    sm: 32,
    md: 48,
    lg: 64,
  };
  return <CircleSkeleton size={sizes[size]} />;
};

export const CardSkeleton: React.FC = () => {
  return (
    <div className="skeleton-card">
      <RectSkeleton height={200} />
      <div style={{ padding: '1rem' }}>
        <Skeleton variant="text" width="60%" />
        <TextSkeleton lines={2} />
      </div>
    </div>
  );
};

export const ListItemSkeleton: React.FC = () => {
  return (
    <div className="skeleton-list-item" style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
      <CircleSkeleton size={40} />
      <div style={{ flex: 1 }}>
        <Skeleton variant="text" width="40%" />
        <Skeleton variant="text" width="60%" />
      </div>
    </div>
  );
};

export const TableSkeleton: React.FC<{ rows?: number; columns?: number }> = ({ 
  rows = 5, 
  columns = 4 
}) => {
  return (
    <div className="skeleton-table">
      {Array.from({ length: rows }).map((_, rowIndex) => (
        <div key={rowIndex} className="skeleton-table-row" style={{ display: 'flex', gap: '1rem' }}>
          {Array.from({ length: columns }).map((_, colIndex) => (
            <Skeleton key={colIndex} variant="text" width={`${100 / columns}%`} />
          ))}
        </div>
      ))}
    </div>
  );
};
