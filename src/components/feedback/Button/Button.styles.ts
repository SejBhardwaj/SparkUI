export const buttonStyles = {
  base: 'inline-flex items-center justify-center font-medium rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2',
  variants: {
    primary: 'bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500',
    secondary: 'bg-gray-600 text-white hover:bg-gray-700 focus:ring-gray-500',
    outline: 'border-2 border-blue-600 text-blue-600 hover:bg-blue-50 focus:ring-blue-500',
    ghost: 'text-blue-600 hover:bg-blue-50 focus:ring-blue-500',
  },
  sizes: {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg',
    xl: 'px-8 py-4 text-xl',
  },
  states: {
    loading: 'opacity-75 cursor-wait',
    disabled: 'opacity-50 cursor-not-allowed',
    active: 'ring-2 ring-blue-500 ring-offset-2',
  },
};

export const getButtonClasses = (
  variant: string,
  size: string,
  loading?: boolean,
  disabled?: boolean,
  fullWidth?: boolean
) => {
  const classes = [
    buttonStyles.base,
    buttonStyles.variants[variant as keyof typeof buttonStyles.variants],
    buttonStyles.sizes[size as keyof typeof buttonStyles.sizes],
  ];
  
  if (loading) classes.push(buttonStyles.states.loading);
  if (disabled) classes.push(buttonStyles.states.disabled);
  if (fullWidth) classes.push('w-full');
  
  return classes.join(' ');
};
