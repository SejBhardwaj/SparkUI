import React from 'react';

export interface DotSpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  color?: string;
}

export const DotSpinner: React.FC<DotSpinnerProps> = ({ size = 'md', color = 'blue' }) => {
  return (
    <div className={`dot-spinner dot-spinner-${size}`} role="status">
      <div className={`dot dot-${color}`} />
      <div className={`dot dot-${color}`} />
      <div className={`dot dot-${color}`} />
    </div>
  );
};

export interface PulseSpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  variant?: 'default' | 'primary';
}

export const PulseSpinner: React.FC<PulseSpinnerProps> = ({ size = 'md', variant = 'default' }) => {
  return (
    <div className={`pulse-spinner pulse-spinner-${size} pulse-spinner-${variant}`} role="status">
      <div className="pulse-ring" />
      <div className="pulse-ring" />
    </div>
  );
};

export interface BarSpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  color?: string;
}

export const BarSpinner: React.FC<BarSpinnerProps> = ({ size = 'md', color = 'blue' }) => {
  return (
    <div className={`bar-spinner bar-spinner-${size}`} role="status">
      {[1, 2, 3, 4, 5].map(i => (
        <div key={i} className={`bar bar-${color}`} />
      ))}
    </div>
  );
};
