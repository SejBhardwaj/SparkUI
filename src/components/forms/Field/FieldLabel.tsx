import React from 'react';

export interface FieldLabelProps {
  htmlFor?: string;
  required?: boolean;
  children: React.ReactNode;
}

export const FieldLabel: React.FC<FieldLabelProps> = ({ htmlFor, required, children }) => (
  <label htmlFor={htmlFor} className="field-label">
    {children}
    {required && <span className="required-indicator">*</span>}
  </label>
);
