export const getVariantColor = (variant: 'success' | 'error' | 'warning' | 'info') => {
  const colors = {
    success: { bg: 'bg-green-50', text: 'text-green-800', border: 'border-green-200' },
    error: { bg: 'bg-red-50', text: 'text-red-800', border: 'border-red-200' },
    warning: { bg: 'bg-yellow-50', text: 'text-yellow-800', border: 'border-yellow-200' },
    info: { bg: 'bg-blue-50', text: 'text-blue-800', border: 'border-blue-200' },
  };
  return colors[variant];
};

export const getVariantIcon = (variant: 'success' | 'error' | 'warning' | 'info') => {
  const icons = {
    success: '✓',
    error: '✕',
    warning: '⚠',
    info: 'ℹ',
  };
  return icons[variant];
};

export const formatDuration = (ms: number): string => {
  if (ms < 1000) return `${ms}ms`;
  return `${(ms / 1000).toFixed(1)}s`;
};

export const generateId = (prefix: string = 'feedback'): string => {
  return `${prefix}-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
};

export const announceToScreenReader = (message: string, priority: 'polite' | 'assertive' = 'polite') => {
  const announcement = document.createElement('div');
  announcement.setAttribute('role', 'status');
  announcement.setAttribute('aria-live', priority);
  announcement.setAttribute('aria-atomic', 'true');
  announcement.className = 'sr-only';
  announcement.textContent = message;
  document.body.appendChild(announcement);
  setTimeout(() => document.body.removeChild(announcement), 1000);
};
