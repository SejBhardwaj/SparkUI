import React from 'react';

export interface FormFieldProps {
  name: string;
  label?: string;
  error?: string;
  required?: boolean;
  children: React.ReactNode;
}

export const FormField: React.FC<FormFieldProps> = ({ name, label, error, required, children }) => (
  <div className="form-field">
    {label && (
      <label htmlFor={name}>
        {label}
        {required && <span className="required">*</span>}
      </label>
    )}
    {children}
    {error && <span className="field-error">{error}</span>}
  </div>
);
