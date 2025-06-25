export const toastAnimations = {
  enter: {
    initial: { opacity: 0, y: -20, scale: 0.95 },
    animate: { opacity: 1, y: 0, scale: 1 },
    transition: { duration: 0.2, ease: 'easeOut' },
  },
  exit: {
    initial: { opacity: 1, y: 0, scale: 1 },
    animate: { opacity: 0, y: -20, scale: 0.95 },
    transition: { duration: 0.15, ease: 'easeIn' },
  },
};

export const toastSlideAnimations = {
  fromRight: {
    enter: { transform: 'translateX(100%)', opacity: 0 },
    active: { transform: 'translateX(0)', opacity: 1 },
    exit: { transform: 'translateX(100%)', opacity: 0 },
  },
  fromLeft: {
    enter: { transform: 'translateX(-100%)', opacity: 0 },
    active: { transform: 'translateX(0)', opacity: 1 },
    exit: { transform: 'translateX(-100%)', opacity: 0 },
  },
  fromTop: {
    enter: { transform: 'translateY(-100%)', opacity: 0 },
    active: { transform: 'translateY(0)', opacity: 1 },
    exit: { transform: 'translateY(-100%)', opacity: 0 },
  },
  fromBottom: {
    enter: { transform: 'translateY(100%)', opacity: 0 },
    active: { transform: 'translateY(0)', opacity: 1 },
    exit: { transform: 'translateY(100%)', opacity: 0 },
  },
};

export const getToastAnimationClasses = (position: string) => {
  const animations: Record<string, string> = {
    'top-right': 'animate-slide-in-right',
    'top-left': 'animate-slide-in-left',
    'bottom-right': 'animate-slide-in-right',
    'bottom-left': 'animate-slide-in-left',
    'top-center': 'animate-slide-in-top',
    'bottom-center': 'animate-slide-in-bottom',
  };
  return animations[position] || 'animate-fade-in';
};
