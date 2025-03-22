/**
 * Unified Modal Component API
 * 
 * Standardized API for modal/dialog components across all libraries.
 */

export type ModalSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'full';
export type ModalPlacement = 'center' | 'top' | 'bottom';

export interface ModalProps {
  // Visibility
  isOpen: boolean;
  onClose: () => void;
  
  // Content
  title?: string;
  children: React.ReactNode;
  footer?: React.ReactNode;
  
  // Appearance
  size?: ModalSize;
  placement?: ModalPlacement;
  
  // Behavior
  closeOnOverlayClick?: boolean;
  closeOnEscape?: boolean;
  showCloseButton?: boolean;
  preventScroll?: boolean;
  
  // Animation
  animated?: boolean;
  
  // Accessibility
  ariaLabel?: string;
  ariaDescribedBy?: string;
  
  // Styling
  className?: string;
  overlayClassName?: string;
}

export const defaultModalProps: Partial<ModalProps> = {
  size: 'md',
  placement: 'center',
  closeOnOverlayClick: true,
  closeOnEscape: true,
  showCloseButton: true,
  preventScroll: true,
  animated: true,
};
