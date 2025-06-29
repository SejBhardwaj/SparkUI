import React from 'react';

export interface CircularProgressProps {
  value: number;
  max?: number;
  size?: number;
  strokeWidth?: number;
  variant?: 'default' | 'success' | 'warning' | 'error';
  showLabel?: boolean;
}

export const CircularProgress: React.FC<CircularProgressProps> = ({ 
  value, 
  max = 100, 
  size = 120,
  strokeWidth = 8,
  variant = 'default',
  showLabel = true
}) => {
  const percentage = Math.min(Math.max((value / max) * 100, 0), 100);
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const offset = circumference - (percentage / 100) * circumference;
  
  return (
    <div className="circular-progress" style={{ width: size, height: size }}>
      <svg width={size} height={size}>
        <circle
          className="circular-progress-track"
          cx={size / 2}
          cy={size / 2}
          r={radius}
          strokeWidth={strokeWidth}
          fill="none"
        />
        <circle
          className={`circular-progress-fill circular-progress-${variant}`}
          cx={size / 2}
          cy={size / 2}
          r={radius}
          strokeWidth={strokeWidth}
          fill="none"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          transform={`rotate(-90 ${size / 2} ${size / 2})`}
        />
      </svg>
      {showLabel && (
        <div className="circular-progress-label">
          {Math.round(percentage)}%
        </div>
      )}
    </div>
  );
};

export const LinearProgress: React.FC<{ variant?: 'default' | 'success' | 'warning' | 'error' }> = ({ 
  variant = 'default' 
}) => {
  return (
    <div className="linear-progress" role="progressbar">
      <div className={`linear-progress-bar linear-progress-${variant}`} />
    </div>
  );
};
