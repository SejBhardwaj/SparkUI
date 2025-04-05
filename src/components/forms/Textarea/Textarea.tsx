import React, { forwardRef, TextareaHTMLAttributes } from 'react';

export interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  autoResize?: boolean;
  maxLength?: number;
  showCharCount?: boolean;
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ label, error, autoResize, maxLength, showCharCount, ...props }, ref) => (
    <div className="textarea-wrapper">
      {label && <label>{label}</label>}
      <textarea ref={ref} maxLength={maxLength} {...props} />
      {showCharCount && maxLength && <span>{props.value?.toString().length || 0}/{maxLength}</span>}
      {error && <span className="error">{error}</span>}
    </div>
  )
);
