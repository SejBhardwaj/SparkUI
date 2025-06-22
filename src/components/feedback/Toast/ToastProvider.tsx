import React, { createContext, useContext, useState, useCallback } from 'react';
import { Toast, ToastProps } from './Toast';

interface ToastContextValue {
  toasts: ToastProps[];
  addToast: (toast: Omit<ToastProps, 'id' | 'onClose'>) => void;
  removeToast: (id: string) => void;
  clearToasts: () => void;
}

const ToastContext = createContext<ToastContextValue | null>(null);

export const useToastContext = () => {
  const context = useContext(ToastContext);
  if (!context) throw new Error('useToastContext must be used within ToastProvider');
  return context;
};

export interface ToastProviderProps {
  children: React.ReactNode;
  maxToasts?: number;
}

export const ToastProvider: React.FC<ToastProviderProps> = ({ children, maxToasts = 5 }) => {
  const [toasts, setToasts] = useState<ToastProps[]>([]);
  
  const addToast = useCallback((toast: Omit<ToastProps, 'id' | 'onClose'>) => {
    const id = `toast-${Date.now()}-${Math.random()}`;
    const newToast: ToastProps = { ...toast, id, onClose: removeToast };
    
    setToasts(prev => {
      const updated = [...prev, newToast];
      return updated.slice(-maxToasts);
    });
  }, [maxToasts]);
  
  const removeToast = useCallback((id: string) => {
    setToasts(prev => prev.filter(toast => toast.id !== id));
  }, []);
  
  const clearToasts = useCallback(() => {
    setToasts([]);
  }, []);
  
  return (
    <ToastContext.Provider value={{ toasts, addToast, removeToast, clearToasts }}>
      {children}
      <div className="toast-container">
        {toasts.map(toast => (
          <Toast key={toast.id} {...toast} />
        ))}
      </div>
    </ToastContext.Provider>
  );
};
