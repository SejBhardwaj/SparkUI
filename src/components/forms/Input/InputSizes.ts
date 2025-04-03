export type InputSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
export const inputSizeClasses: Record<InputSize, string> = {
  xs: 'text-xs py-1 px-2', sm: 'text-sm py-1.5 px-3',
  md: 'text-base py-2 px-4', lg: 'text-lg py-2.5 px-5', xl: 'text-xl py-3 px-6',
};
