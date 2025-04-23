import React from 'react';

export interface FieldHelperProps {
  text?: string;
  id?: string;
}

export const FieldHelper: React.FC<FieldHelperProps> = ({ text, id }) => {
  if (!text) return null;
  
  return (
    <span id={id} className="field-helper">
      {text}
    </span>
  );
};
