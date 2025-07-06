import React from 'react';
export interface CardProps {
  children: React.ReactNode;
  variant?: 'default' | 'elevated' | 'outlined';
}
export const Card: React.FC<CardProps> = ({ children, variant = 'default' }) => {
  const variants = {
    default: 'bg-white',
    elevated: 'bg-white shadow-lg',
    outlined: 'bg-white border',
  };
  return <div className={`card rounded-lg p-6 ${variants[variant]}`}>{children}</div>;
};
