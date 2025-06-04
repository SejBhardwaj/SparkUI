import React from 'react';

export interface BadgeProps {
  variant?: 'default' | 'success' | 'warning' | 'error' | 'info';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export const Badge: React.FC<BadgeProps> = ({ 
  variant = 'default', 
  size = 'md', 
  children 
}) => {
  return (
    <span className={`badge badge-${variant} badge-${size}`} role="status">
      {children}
    </span>
  );
};

export const badgeVariantStyles = {
  default: 'bg-gray-100 text-gray-800',
  success: 'bg-green-100 text-green-800',
  warning: 'bg-yellow-100 text-yellow-800',
  error: 'bg-red-100 text-red-800',
  info: 'bg-blue-100 text-blue-800',
};
