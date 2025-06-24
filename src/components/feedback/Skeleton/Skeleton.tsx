import React from 'react';

export interface SkeletonProps {
  variant?: 'text' | 'circular' | 'rectangular';
  width?: string | number;
  height?: string | number;
  animation?: 'pulse' | 'wave' | 'none';
  className?: string;
}

export const Skeleton: React.FC<SkeletonProps> = ({ 
  variant = 'text', 
  width,
  height,
  animation = 'pulse',
  className = ''
}) => {
  const style: React.CSSProperties = {
    width: typeof width === 'number' ? `${width}px` : width,
    height: typeof height === 'number' ? `${height}px` : height,
  };
  
  return (
    <div 
      className={`skeleton skeleton-${variant} skeleton-${animation} ${className}`}
      style={style}
      aria-busy="true"
      aria-live="polite"
      aria-label="Loading..."
    />
  );
};

export const skeletonVariantStyles = {
  text: 'rounded h-4',
  circular: 'rounded-full',
  rectangular: 'rounded',
};

export const skeletonAnimationStyles = {
  pulse: 'animate-pulse',
  wave: 'animate-wave',
  none: '',
};
