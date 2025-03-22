/**
 * Unified Select Component API
 * 
 * Standardized API for select/dropdown components across all libraries.
 */

export type SelectSize = 'sm' | 'md' | 'lg';

export interface SelectOption {
  value: string | number;
  label: string;
  disabled?: boolean;
  icon?: React.ReactNode;
}

export interface SelectProps {
  // Options
  options: SelectOption[];
  
  // Value
  value?: string | number;
  defaultValue?: string | number;
  
  // Appearance
  size?: SelectSize;
  
  // Labels
  label?: string;
  placeholder?: string;
  helperText?: string;
  
  // Validation
  error?: string;
  required?: boolean;
  disabled?: boolean;
  
  // Multiple selection
  multiple?: boolean;
  
  // Search
  searchable?: boolean;
  
  // Events
  onChange?: (value: string | number | (string | number)[]) => void;
  onSearch?: (query: string) => void;
  
  // Accessibility
  ariaLabel?: string;
  
  // Styling
  className?: string;
}

export const defaultSelectProps: Partial<SelectProps> = {
  size: 'md',
  disabled: false,
  required: false,
  multiple: false,
  searchable: false,
};
