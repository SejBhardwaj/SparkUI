import React from 'react';
import { Input, InputProps } from './Input';

export interface InputWithIconsProps extends InputProps {
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

export const InputWithIcons: React.FC<InputWithIconsProps> = ({ leftIcon, rightIcon, ...props }) => (
  <div className="relative">
    {leftIcon && <div className="absolute left-3 top-1/2 -translate-y-1/2">{leftIcon}</div>}
    <Input {...props} />
    {rightIcon && <div className="absolute right-3 top-1/2 -translate-y-1/2">{rightIcon}</div>}
  </div>
);
