export const accordionA11yProps = {
  button: (id: string, isExpanded: boolean) => ({
    'aria-expanded': isExpanded,
    'aria-controls': `accordion-content-${id}`,
    id: `accordion-header-${id}`,
  }),
  panel: (id: string) => ({
    role: 'region',
    'aria-labelledby': `accordion-header-${id}`,
    id: `accordion-content-${id}`,
  }),
};

export const announceAccordionState = (title: string, isOpen: boolean) => {
  const message = `${title} ${isOpen ? 'expanded' : 'collapsed'}`;
  const announcement = document.createElement('div');
  announcement.setAttribute('role', 'status');
  announcement.setAttribute('aria-live', 'polite');
  announcement.textContent = message;
  document.body.appendChild(announcement);
  setTimeout(() => document.body.removeChild(announcement), 1000);
};
