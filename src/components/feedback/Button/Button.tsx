import React, { forwardRef, ButtonHTMLAttributes } from 'react';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  loading?: boolean;
  fullWidth?: boolean;
  children: React.ReactNode;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'primary', size = 'md', loading, fullWidth, children, className, disabled, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={`btn btn-${variant} btn-${size} ${fullWidth ? 'btn-full' : ''} ${className || ''}`}
        disabled={disabled || loading}
        aria-busy={loading}
        {...props}
      >
        {loading ? <span className="btn-spinner" /> : null}
        <span className={loading ? 'btn-content-loading' : ''}>{children}</span>
      </button>
    );
  }
);

Button.displayName = 'Button';
