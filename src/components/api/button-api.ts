/**
 * Unified Button Component API
 * 
 * Standardized API for button components across all libraries.
 */

export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'link';
export type ButtonSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
export type ButtonColor = 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger';

export interface ButtonProps {
  // Content
  children: React.ReactNode;
  
  // Appearance
  variant?: ButtonVariant;
  size?: ButtonSize;
  color?: ButtonColor;
  
  // State
  disabled?: boolean;
  loading?: boolean;
  active?: boolean;
  
  // Layout
  fullWidth?: boolean;
  
  // Icon
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  
  // Events
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  
  // Accessibility
  ariaLabel?: string;
  ariaPressed?: boolean;
  
  // Styling
  className?: string;
}

export const defaultButtonProps: Partial<ButtonProps> = {
  variant: 'primary',
  size: 'md',
  color: 'default',
  disabled: false,
  loading: false,
  fullWidth: false,
};
