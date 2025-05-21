export const isActiveRoute = (currentPath: string, linkPath: string): boolean => {
  return currentPath === linkPath || currentPath.startsWith(linkPath + '/');
};

export const generateBreadcrumbs = (path: string): Array<{ label: string; href: string }> => {
  const segments = path.split('/').filter(Boolean);
  return segments.map((segment, index) => ({
    label: segment.charAt(0).toUpperCase() + segment.slice(1),
    href: '/' + segments.slice(0, index + 1).join('/'),
  }));
};

export const scrollToTop = (smooth = true) => {
  window.scrollTo({
    top: 0,
    behavior: smooth ? 'smooth' : 'auto',
  });
};

export const getNavigationDepth = (path: string): number => {
  return path.split('/').filter(Boolean).length;
};

export const isExternalLink = (href: string): boolean => {
  return /^https?:\/\//.test(href);
};
