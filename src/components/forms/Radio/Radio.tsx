import React, { forwardRef, InputHTMLAttributes } from 'react';

export interface RadioProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label?: string;
  description?: string;
}

export const Radio = forwardRef<HTMLInputElement, RadioProps>(
  ({ label, description, ...props }, ref) => (
    <div className="radio-wrapper">
      <label>
        <input ref={ref} type="radio" {...props} />
        <div>
          {label && <span>{label}</span>}
          {description && <span className="description">{description}</span>}
        </div>
      </label>
    </div>
  )
);
