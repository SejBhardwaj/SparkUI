import React from 'react';

export type ToastPosition = 
  | 'top-left' 
  | 'top-center' 
  | 'top-right' 
  | 'bottom-left' 
  | 'bottom-center' 
  | 'bottom-right';

export const toastPositionStyles: Record<ToastPosition, string> = {
  'top-left': 'top-4 left-4',
  'top-center': 'top-4 left-1/2 -translate-x-1/2',
  'top-right': 'top-4 right-4',
  'bottom-left': 'bottom-4 left-4',
  'bottom-center': 'bottom-4 left-1/2 -translate-x-1/2',
  'bottom-right': 'bottom-4 right-4',
};

export interface ToastContainerProps {
  position?: ToastPosition;
  children: React.ReactNode;
}

export const ToastContainer: React.FC<ToastContainerProps> = ({ 
  position = 'top-right', 
  children 
}) => {
  return (
    <div 
      className={`toast-container fixed ${toastPositionStyles[position]} z-50 flex flex-col gap-2`}
      aria-live="polite"
      aria-atomic="true"
    >
      {children}
    </div>
  );
};
