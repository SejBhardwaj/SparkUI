/**
 * Screen reader utility functions
 */

export const createScreenReaderOnly = (): string => {
  return 'sr-only';
};

export const hideFromScreenReader = (element: HTMLElement): void => {
  element.setAttribute('aria-hidden', 'true');
};

export const showToScreenReader = (element: HTMLElement): void => {
  element.removeAttribute('aria-hidden');
};

export const announcePolite = (message: string): void => {
  const announcement = document.createElement('div');
  announcement.setAttribute('role', 'status');
  announcement.setAttribute('aria-live', 'polite');
  announcement.textContent = message;
  document.body.appendChild(announcement);
  setTimeout(() => announcement.remove(), 1000);
};

export const announceAssertive = (message: string): void => {
  const announcement = document.createElement('div');
  announcement.setAttribute('role', 'alert');
  announcement.setAttribute('aria-live', 'assertive');
  announcement.textContent = message;
  document.body.appendChild(announcement);
  setTimeout(() => announcement.remove(), 1000);
};
