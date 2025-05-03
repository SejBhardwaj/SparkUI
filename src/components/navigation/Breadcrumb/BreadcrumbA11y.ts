export const breadcrumbA11yProps = {
  nav: {
    'aria-label': 'Breadcrumb',
    role: 'navigation',
  },
  list: {
    role: 'list',
  },
  item: {
    role: 'listitem',
  },
  currentPage: {
    'aria-current': 'page',
  },
};

export const getBreadcrumbItemProps = (isActive: boolean) => ({
  ...(isActive && breadcrumbA11yProps.currentPage),
  className: `breadcrumb-item ${isActive ? 'active' : ''}`,
});

export const announceBreadcrumbNavigation = (path: string[]) => {
  const announcement = `Navigated to ${path.join(' > ')}`;
  const liveRegion = document.createElement('div');
  liveRegion.setAttribute('role', 'status');
  liveRegion.setAttribute('aria-live', 'polite');
  liveRegion.textContent = announcement;
  document.body.appendChild(liveRegion);
  setTimeout(() => document.body.removeChild(liveRegion), 1000);
};
