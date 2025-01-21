/**
 * Common Component Prop Types
 */

import { ReactNode, CSSProperties } from 'react';

export type Size = 'sm' | 'md' | 'lg' | 'xl';
export type Variant = 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info';
export type Color = 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger';

export interface BaseComponentProps {
  className?: string;
  style?: CSSProperties;
  children?: ReactNode;
  id?: string;
  testId?: string;
}

export interface ButtonBaseProps extends BaseComponentProps {
  variant?: Variant;
  size?: Size;
  disabled?: boolean;
  loading?: boolean;
  fullWidth?: boolean;
  onClick?: () => void;
}

export interface InputBaseProps extends BaseComponentProps {
  value?: string;
  defaultValue?: string;
  placeholder?: string;
  disabled?: boolean;
  readOnly?: boolean;
  required?: boolean;
  error?: boolean;
  helperText?: string;
  onChange?: (value: string) => void;
}

export interface ModalBaseProps extends BaseComponentProps {
  open: boolean;
  onClose: () => void;
  title?: string;
  footer?: ReactNode;
  size?: Size;
  closeOnOverlayClick?: boolean;
  closeOnEscape?: boolean;
}
