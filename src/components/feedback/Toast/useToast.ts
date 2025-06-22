import { useToastContext } from './ToastProvider';

export const useToast = () => {
  const { addToast, removeToast, clearToasts } = useToastContext();
  
  const toast = {
    success: (message: string, title?: string, duration?: number) => {
      addToast({ variant: 'success', message, title, duration });
    },
    error: (message: string, title?: string, duration?: number) => {
      addToast({ variant: 'error', message, title, duration });
    },
    warning: (message: string, title?: string, duration?: number) => {
      addToast({ variant: 'warning', message, title, duration });
    },
    info: (message: string, title?: string, duration?: number) => {
      addToast({ variant: 'info', message, title, duration });
    },
    custom: (message: string, options?: { title?: string; variant?: 'success' | 'error' | 'warning' | 'info'; duration?: number }) => {
      addToast({ message, ...options });
    },
    dismiss: removeToast,
    clear: clearToasts,
  };
  
  return toast;
};

export type ToastFunction = ReturnType<typeof useToast>;
