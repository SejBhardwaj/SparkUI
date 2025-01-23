/**
 * Accessibility utility functions
 * Provides helpers for WCAG 2.1 compliance
 */

export const getAriaLabel = (element: HTMLElement): string | null => {
  return element.getAttribute('aria-label');
};

export const setAriaLabel = (element: HTMLElement, label: string): void => {
  element.setAttribute('aria-label', label);
};

export const isElementFocusable = (element: HTMLElement): boolean => {
  const tabIndex = element.getAttribute('tabindex');
  return tabIndex !== null && parseInt(tabIndex) >= 0;
};

export const announceToScreenReader = (message: string): void => {
  const announcement = document.createElement('div');
  announcement.setAttribute('role', 'status');
  announcement.setAttribute('aria-live', 'polite');
  announcement.className = 'sr-only';
  announcement.textContent = message;
  document.body.appendChild(announcement);
  setTimeout(() => announcement.remove(), 1000);
};
