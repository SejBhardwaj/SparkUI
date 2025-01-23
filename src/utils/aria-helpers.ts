/**
 * ARIA attribute helper functions
 */

export const setAriaExpanded = (element: HTMLElement, expanded: boolean): void => {
  element.setAttribute('aria-expanded', String(expanded));
};

export const setAriaHidden = (element: HTMLElement, hidden: boolean): void => {
  element.setAttribute('aria-hidden', String(hidden));
};

export const setAriaPressed = (element: HTMLElement, pressed: boolean): void => {
  element.setAttribute('aria-pressed', String(pressed));
};
