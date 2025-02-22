/**
 * Container Size System
 */

export const containers = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
  full: '100%',
} as const;

export type ContainerSize = keyof typeof containers;

export const createContainer = (size: ContainerSize = 'xl') => ({
  width: '100%',
  maxWidth: containers[size],
  marginLeft: 'auto',
  marginRight: 'auto',
  paddingLeft: '1rem',
  paddingRight: '1rem',
});

export const fluidContainer = {
  width: '100%',
  paddingLeft: '1rem',
  paddingRight: '1rem',
};
