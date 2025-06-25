import React from 'react';

export interface SnackbarAction {
  label: string;
  onClick: () => void;
}

export interface SnackbarWithActionsProps {
  open: boolean;
  message: string;
  action?: SnackbarAction;
  autoHideDuration?: number;
  onClose?: () => void;
  position?: 'bottom-left' | 'bottom-center' | 'bottom-right';
}

export const SnackbarWithActions: React.FC<SnackbarWithActionsProps> = ({ 
  open, 
  message, 
  action,
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
      className={`snackbar snackbar-${position} snackbar-with-action`}
      role="status"
      aria-live="polite"
    >
      <div className="snackbar-content">
        <div className="snackbar-message">{message}</div>
        {action && (
          <button 
            className="snackbar-action" 
            onClick={action.onClick}
          >
            {action.label}
          </button>
        )}
      </div>
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
