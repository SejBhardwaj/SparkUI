import { useState, useCallback, useEffect } from 'react';

export interface FeedbackState {
  show: boolean;
  message: string;
  variant: 'success' | 'error' | 'warning' | 'info';
  duration?: number;
}

export const useFeedback = (defaultDuration: number = 5000) => {
  const [feedback, setFeedback] = useState<FeedbackState>({
    show: false,
    message: '',
    variant: 'info',
  });
  
  const showFeedback = useCallback((
    message: string,
    variant: 'success' | 'error' | 'warning' | 'info' = 'info',
    duration?: number
  ) => {
    setFeedback({
      show: true,
      message,
      variant,
      duration: duration ?? defaultDuration,
    });
  }, [defaultDuration]);
  
  const hideFeedback = useCallback(() => {
    setFeedback(prev => ({ ...prev, show: false }));
  }, []);
  
  useEffect(() => {
    if (feedback.show && feedback.duration && feedback.duration > 0) {
      const timer = setTimeout(hideFeedback, feedback.duration);
      return () => clearTimeout(timer);
    }
  }, [feedback.show, feedback.duration, hideFeedback]);
  
  return {
    feedback,
    showFeedback,
    hideFeedback,
    showSuccess: (message: string, duration?: number) => showFeedback(message, 'success', duration),
    showError: (message: string, duration?: number) => showFeedback(message, 'error', duration),
    showWarning: (message: string, duration?: number) => showFeedback(message, 'warning', duration),
    showInfo: (message: string, duration?: number) => showFeedback(message, 'info', duration),
  };
};
