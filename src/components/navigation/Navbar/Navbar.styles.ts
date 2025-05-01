export const navbarStyles = {
  base: 'w-full flex items-center justify-between px-4 py-3',
  variants: {
    fixed: 'fixed top-0 left-0 right-0 z-50 bg-white shadow-md',
    sticky: 'sticky top-0 z-40 bg-white shadow-sm',
    transparent: 'bg-transparent backdrop-blur-md',
  },
  positions: {
    top: 'top-0',
    bottom: 'bottom-0',
  },
  item: 'px-3 py-2 rounded hover:bg-gray-100 transition-colors',
  itemActive: 'bg-blue-100 text-blue-600',
  itemDisabled: 'opacity-50 cursor-not-allowed',
};

export const getNavbarClasses = (variant: string, position: string) => {
  return `${navbarStyles.base} ${navbarStyles.variants[variant as keyof typeof navbarStyles.variants]} ${navbarStyles.positions[position as keyof typeof navbarStyles.positions]}`;
};
