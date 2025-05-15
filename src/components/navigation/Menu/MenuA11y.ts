export const menuA11yProps = {
  menu: {
    role: 'menu',
  },
  menuitem: {
    role: 'menuitem',
    tabIndex: -1,
  },
  trigger: (isOpen: boolean) => ({
    'aria-haspopup': 'true' as const,
    'aria-expanded': isOpen,
  }),
};

export const announceMenuState = (isOpen: boolean, itemCount: number) => {
  const message = isOpen 
    ? `Menu opened with ${itemCount} items`
    : 'Menu closed';
  
  const announcement = document.createElement('div');
  announcement.setAttribute('role', 'status');
  announcement.setAttribute('aria-live', 'polite');
  announcement.textContent = message;
  document.body.appendChild(announcement);
  setTimeout(() => document.body.removeChild(announcement), 1000);
};

export const getMenuItemA11yProps = (disabled?: boolean) => ({
  role: 'menuitem',
  tabIndex: disabled ? -1 : 0,
  'aria-disabled': disabled,
});
