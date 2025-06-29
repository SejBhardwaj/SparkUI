import React from 'react';

export interface SpinnerProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'default' | 'primary' | 'secondary';
  label?: string;
}

export const Spinner: React.FC<SpinnerProps> = ({ 
  size = 'md', 
  variant = 'default',
  label = 'Loading...'
}) => {
  return (
    <div className={`spinner spinner-${size} spinner-${variant}`} role="status">
      <div className="spinner-circle" />
      <span className="sr-only">{label}</span>
    </div>
  );
};

export const spinnerSizeStyles = {
  sm: 'w-4 h-4',
  md: 'w-8 h-8',
  lg: 'w-12 h-12',
  xl: 'w-16 h-16',
};

export const spinnerVariantStyles = {
  default: 'border-gray-300 border-t-gray-600',
  primary: 'border-blue-200 border-t-blue-600',
  secondary: 'border-gray-200 border-t-gray-600',
};
