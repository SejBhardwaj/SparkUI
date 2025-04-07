import React, { forwardRef, InputHTMLAttributes } from 'react';

export interface CheckboxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label?: string;
  error?: string;
  indeterminate?: boolean;
}

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ label, error, indeterminate, ...props }, ref) => (
    <div className="checkbox-wrapper">
      <label>
        <input ref={ref} type="checkbox" {...props} />
        {label && <span>{label}</span>}
      </label>
      {error && <span className="error">{error}</span>}
    </div>
  )
);
