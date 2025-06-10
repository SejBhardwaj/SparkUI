export const buttonA11yProps = {
  button: {
    role: 'button',
    tabIndex: 0,
  },
  loading: (isLoading: boolean) => ({
    'aria-busy': isLoading,
    'aria-live': 'polite' as const,
  }),
  disabled: (isDisabled: boolean) => ({
    'aria-disabled': isDisabled,
    disabled: isDisabled,
  }),
  pressed: (isPressed: boolean) => ({
    'aria-pressed': isPressed,
  }),
};

export const announceButtonAction = (action: string) => {
  const announcement = document.createElement('div');
  announcement.setAttribute('role', 'status');
  announcement.setAttribute('aria-live', 'polite');
  announcement.textContent = action;
  document.body.appendChild(announcement);
  setTimeout(() => document.body.removeChild(announcement), 1000);
};

export const getButtonA11yProps = (loading?: boolean, disabled?: boolean, pressed?: boolean) => {
  return {
    ...buttonA11yProps.button,
    ...(loading && buttonA11yProps.loading(loading)),
    ...(disabled && buttonA11yProps.disabled(disabled)),
    ...(pressed !== undefined && buttonA11yProps.pressed(pressed)),
  };
};
