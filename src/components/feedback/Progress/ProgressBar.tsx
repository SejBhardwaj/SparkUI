import React from 'react';

export interface ProgressBarProps {
  value: number;
  max?: number;
  variant?: 'default' | 'success' | 'warning' | 'error';
  size?: 'sm' | 'md' | 'lg';
  showLabel?: boolean;
  label?: string;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({ 
  value, 
  max = 100, 
  variant = 'default',
  size = 'md',
  showLabel = false,
  label
}) => {
  const percentage = Math.min(Math.max((value / max) * 100, 0), 100);
  
  return (
    <div className={`progress-bar progress-bar-${size}`}>
      {showLabel && (
        <div className="progress-label">
          {label || `${Math.round(percentage)}%`}
        </div>
      )}
      <div 
        className="progress-track"
        role="progressbar"
        aria-valuenow={value}
        aria-valuemin={0}
        aria-valuemax={max}
      >
        <div 
          className={`progress-fill progress-fill-${variant}`}
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
};

export const progressBarSizeStyles = {
  sm: 'h-1',
  md: 'h-2',
  lg: 'h-3',
};
