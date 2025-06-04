import React from 'react';

export interface LabelProps {
  htmlFor?: string;
  required?: boolean;
  optional?: boolean;
  children: React.ReactNode;
}

export const Label: React.FC<LabelProps> = ({ htmlFor, required, optional, children }) => {
  return (
    <label htmlFor={htmlFor} className="label">
      {children}
      {required && <span className="label-required" aria-label="required">*</span>}
      {optional && <span className="label-optional">(optional)</span>}
    </label>
  );
};

export interface FormLabelProps extends LabelProps {
  error?: boolean;
  disabled?: boolean;
}

export const FormLabel: React.FC<FormLabelProps> = ({ 
  error, 
  disabled, 
  children, 
  ...props 
}) => {
  return (
    <label 
      className={`form-label ${error ? 'form-label-error' : ''} ${disabled ? 'form-label-disabled' : ''}`}
      {...props}
    >
      {children}
    </label>
  );
};
