import React from 'react';
import { Button, ButtonProps } from './Button';

export const SmallButton: React.FC<ButtonProps> = (props) => <Button size="sm" {...props} />;
export const MediumButton: React.FC<ButtonProps> = (props) => <Button size="md" {...props} />;
export const LargeButton: React.FC<ButtonProps> = (props) => <Button size="lg" {...props} />;
export const ExtraLargeButton: React.FC<ButtonProps> = (props) => <Button size="xl" {...props} />;

export const buttonSizeStyles = {
  sm: 'px-3 py-1.5 text-sm',
  md: 'px-4 py-2 text-base',
  lg: 'px-6 py-3 text-lg',
  xl: 'px-8 py-4 text-xl',
};

export const getButtonSizeClasses = (size: 'sm' | 'md' | 'lg' | 'xl') => {
  return buttonSizeStyles[size];
};
