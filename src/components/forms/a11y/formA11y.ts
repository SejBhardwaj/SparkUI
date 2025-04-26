export const getFieldA11yProps = (name: string, error?: string, helperText?: string) => ({
  id: name,
  'aria-invalid': !!error,
  'aria-describedby': error ? `${name}-error` : helperText ? `${name}-helper` : undefined,
});

export const announceFormError = (message: string) => {
  const announcement = document.createElement('div');
  announcement.setAttribute('role', 'alert');
  announcement.setAttribute('aria-live', 'assertive');
  announcement.textContent = message;
  document.body.appendChild(announcement);
  setTimeout(() => document.body.removeChild(announcement), 3000);
};
