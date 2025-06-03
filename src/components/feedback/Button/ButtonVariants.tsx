import React from 'react';
import { Button, ButtonProps } from './Button';

export const PrimaryButton: React.FC<ButtonProps> = (props) => <Button variant="primary" {...props} />;
export const SecondaryButton: React.FC<ButtonProps> = (props) => <Button variant="secondary" {...props} />;
export const OutlineButton: React.FC<ButtonProps> = (props) => <Button variant="outline" {...props} />;
export const GhostButton: React.FC<ButtonProps> = (props) => <Button variant="ghost" {...props} />;

export const buttonVariantStyles = {
  primary: 'bg-blue-600 text-white hover:bg-blue-700 active:bg-blue-800',
  secondary: 'bg-gray-600 text-white hover:bg-gray-700 active:bg-gray-800',
  outline: 'border-2 border-blue-600 text-blue-600 hover:bg-blue-50',
  ghost: 'text-blue-600 hover:bg-blue-50',
};
