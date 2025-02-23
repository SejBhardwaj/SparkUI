/**
 * Animation Utility Functions
 */

export const keyframes = {
  fadeIn: {
    from: { opacity: 0 },
    to: { opacity: 1 },
  },
  
  fadeOut: {
    from: { opacity: 1 },
    to: { opacity: 0 },
  },
  
  slideInUp: {
    from: { transform: 'translateY(100%)' },
    to: { transform: 'translateY(0)' },
  },
  
  slideInDown: {
    from: { transform: 'translateY(-100%)' },
    to: { transform: 'translateY(0)' },
  },
  
  scaleIn: {
    from: { transform: 'scale(0.9)', opacity: 0 },
    to: { transform: 'scale(1)', opacity: 1 },
  },
  
  spin: {
    from: { transform: 'rotate(0deg)' },
    to: { transform: 'rotate(360deg)' },
  },
  
  pulse: {
    '0%, 100%': { opacity: 1 },
    '50%': { opacity: 0.5 },
  },
};

export const createAnimation = (
  name: keyof typeof keyframes,
  duration: string = '300ms',
  timing: string = 'ease-in-out',
  iterationCount: number | 'infinite' = 1
) => ({
  animation: `${name} ${duration} ${timing} ${iterationCount}`,
});
