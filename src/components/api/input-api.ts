/**
 * Unified Input Component API
 * 
 * Standardized API for input components across all libraries.
 */

export type InputType = 'text' | 'email' | 'password' | 'number' | 'tel' | 'url' | 'search';
export type InputSize = 'sm' | 'md' | 'lg';

export interface InputProps {
  // Value
  value?: string;
  defaultValue?: string;
  
  // Type
  type?: InputType;
  
  // Appearance
  size?: InputSize;
  
  // Labels
  label?: string;
  placeholder?: string;
  helperText?: string;
  
  // Validation
  error?: string;
  required?: boolean;
  disabled?: boolean;
  readOnly?: boolean;
  
  // Icon
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  
  // Events
  onChange?: (value: string, event: React.ChangeEvent<HTMLInputElement>) => void;
  onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
  
  // Accessibility
  ariaLabel?: string;
  ariaDescribedBy?: string;
  
  // Styling
  className?: string;
}

export const defaultInputProps: Partial<InputProps> = {
  type: 'text',
  size: 'md',
  disabled: false,
  readOnly: false,
  required: false,
};
