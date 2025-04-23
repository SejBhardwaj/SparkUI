import React from 'react';
import { FieldLabel } from './FieldLabel';
import { FieldError } from './FieldError';
import { FieldHelper } from './FieldHelper';

export interface FieldWrapperProps {
  name: string;
  label?: string;
  error?: string;
  helperText?: string;
  required?: boolean;
  children: React.ReactNode;
}

export const FieldWrapper: React.FC<FieldWrapperProps> = ({
  name,
  label,
  error,
  helperText,
  required,
  children,
}) => (
  <div className="field-wrapper">
    {label && <FieldLabel htmlFor={name} required={required}>{label}</FieldLabel>}
    {children}
    <FieldError error={error} id={`${name}-error`} />
    <FieldHelper text={helperText} id={`${name}-helper`} />
  </div>
);
