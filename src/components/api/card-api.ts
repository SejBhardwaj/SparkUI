/**
 * Unified Card Component API
 * 
 * Standardized API for card components across all libraries.
 */

export type CardVariant = 'elevated' | 'outlined' | 'filled';

export interface CardProps {
  // Content
  children: React.ReactNode;
  
  // Sections
  header?: React.ReactNode;
  footer?: React.ReactNode;
  media?: React.ReactNode;
  
  // Appearance
  variant?: CardVariant;
  
  // Interaction
  hoverable?: boolean;
  clickable?: boolean;
  onClick?: () => void;
  
  // Layout
  horizontal?: boolean;
  
  // Accessibility
  ariaLabel?: string;
  role?: string;
  
  // Styling
  className?: string;
}

export const defaultCardProps: Partial<CardProps> = {
  variant: 'elevated',
  hoverable: false,
  clickable: false,
  horizontal: false,
};
