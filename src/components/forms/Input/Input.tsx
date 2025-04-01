import React, { forwardRef, InputHTMLAttributes } from 'react';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helperText?: string;
  fullWidth?: boolean;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, helperText, fullWidth, className, ...props }, ref) => {
    return (
      <div className={`input-wrapper ${fullWidth ? 'w-full' : ''}`}>
        {label && <label className="input-label">{label}</label>}
        <input
          ref={ref}
          className={`input ${error ? 'input-error' : ''} ${className || ''}`}
          aria-invalid={!!error}
          {...props}
        />
        {error && <span className="input-error-text">{error}</span>}
        {helperText && !error && <span className="input-helper-text">{helperText}</span>}
      </div>
    );
  }
);

Input.displayName = 'Input';
