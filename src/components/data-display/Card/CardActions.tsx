import React from 'react';
export interface CardActionsProps {
  children: React.ReactNode;
  align?: 'left' | 'center' | 'right';
}
export const CardActions: React.FC<CardActionsProps> = ({ children, align = 'right' }) => {
  const alignClasses = { left: 'justify-start', center: 'justify-center', right: 'justify-end' };
  return <div className={`card-actions flex gap-2 ${alignClasses[align]}`}>{children}</div>;
};
