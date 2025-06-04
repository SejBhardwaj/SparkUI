import React from 'react';

export interface DotBadgeProps {
  variant?: 'success' | 'warning' | 'error' | 'info';
  position?: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left';
}

export const DotBadge: React.FC<DotBadgeProps> = ({ variant = 'error', position = 'top-right' }) => {
  return (
    <span 
      className={`badge-dot badge-dot-${variant} badge-dot-${position}`}
      aria-label={`${variant} indicator`}
    />
  );
};

export interface CountBadgeProps {
  count: number;
  max?: number;
  showZero?: boolean;
}

export const CountBadge: React.FC<CountBadgeProps> = ({ count, max = 99, showZero = false }) => {
  if (count === 0 && !showZero) return null;
  
  const displayCount = count > max ? `${max}+` : count;
  
  return (
    <span className="badge badge-count" aria-label={`${count} notifications`}>
      {displayCount}
    </span>
  );
};

export interface StatusBadgeProps {
  status: 'online' | 'offline' | 'away' | 'busy';
}

export const StatusBadge: React.FC<StatusBadgeProps> = ({ status }) => {
  return (
    <span className={`badge badge-status badge-status-${status}`} aria-label={`Status: ${status}`}>
      {status}
    </span>
  );
};
