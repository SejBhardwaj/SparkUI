import React from 'react';

export interface FieldErrorProps {
  error?: string;
  id?: string;
}

export const FieldError: React.FC<FieldErrorProps> = ({ error, id }) => {
  if (!error) return null;
  
  return (
    <span id={id} className="field-error" role="alert">
      {error}
    </span>
  );
};
