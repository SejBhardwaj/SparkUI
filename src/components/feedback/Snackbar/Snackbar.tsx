import React from 'react';

export interface SnackbarProps {
  open: boolean;
  message: string;
  autoHideDuration?: number;
  onClose?: () => void;
  position?: 'bottom-left' | 'bottom-center' | 'bottom-right';
}

export const Snackbar: React.FC<SnackbarProps> = ({ 
  open, 
  message, 
  autoHideDuration = 6000,
  onClose,
  position = 'bottom-center'
}) => {
  React.useEffect(() => {
    if (open && autoHideDuration > 0) {
      const timer = setTimeout(() => {
        onClose?.();
      }, autoHideDuration);
      return () => clearTimeout(timer);
    }
  }, [open, autoHideDuration, onClose]);
  
  if (!open) return null;
  
  return (
    <div 
      className={`snackbar snackbar-${position}`}
      role="status"
      aria-live="polite"
    >
      <div className="snackbar-message">{message}</div>
      {onClose && (
        <button 
          className="snackbar-close" 
          onClick={onClose}
          aria-label="Close"
        >
          ×
        </button>
      )}
    </div>
  );
};

export const snackbarPositionStyles = {
  'bottom-left': 'bottom-4 left-4',
  'bottom-center': 'bottom-4 left-1/2 -translate-x-1/2',
  'bottom-right': 'bottom-4 right-4',
};
