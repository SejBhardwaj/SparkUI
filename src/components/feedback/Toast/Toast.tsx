import React, { useEffect } from 'react';

export interface ToastProps {
  id: string;
  variant?: 'success' | 'error' | 'warning' | 'info';
  title?: string;
  message: string;
  duration?: number;
  onClose?: (id: string) => void;
}

export const Toast: React.FC<ToastProps> = ({ 
  id,
  variant = 'info', 
  title, 
  message, 
  duration = 5000,
  onClose 
}) => {
  useEffect(() => {
    if (duration > 0) {
      const timer = setTimeout(() => {
        onClose?.(id);
      }, duration);
      return () => clearTimeout(timer);
    }
  }, [id, duration, onClose]);
  
  return (
    <div className={`toast toast-${variant}`} role="status" aria-live="polite">
      <div className="toast-content">
        {title && <div className="toast-title">{title}</div>}
        <div className="toast-message">{message}</div>
      </div>
      <button 
        className="toast-close" 
        onClick={() => onClose?.(id)}
        aria-label="Close notification"
      >
        ×
      </button>
    </div>
  );
};

export const toastVariantStyles = {
  success: 'bg-green-600 text-white',
  error: 'bg-red-600 text-white',
  warning: 'bg-yellow-600 text-white',
  info: 'bg-blue-600 text-white',
};
