export const accordionAnimations = {
  expand: {
    initial: { height: 0, opacity: 0 },
    animate: { height: 'auto', opacity: 1 },
    transition: { duration: 0.3, ease: 'easeInOut' },
  },
  collapse: {
    initial: { height: 'auto', opacity: 1 },
    animate: { height: 0, opacity: 0 },
    transition: { duration: 0.3, ease: 'easeInOut' },
  },
};

export const getAccordionHeight = (element: HTMLElement | null): number => {
  if (!element) return 0;
  return element.scrollHeight;
};

export const animateAccordion = (
  element: HTMLElement,
  isOpen: boolean
) => {
  if (isOpen) {
    element.style.height = '0px';
    element.style.overflow = 'hidden';
    requestAnimationFrame(() => {
      element.style.height = `${element.scrollHeight}px`;
      element.style.transition = 'height 0.3s ease-in-out';
    });
  } else {
    element.style.height = `${element.scrollHeight}px`;
    requestAnimationFrame(() => {
      element.style.height = '0px';
    });
  }
};
