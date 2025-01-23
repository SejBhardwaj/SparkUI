/**
 * Keyboard navigation utilities
 */

export const KEYS = {
  ENTER: 'Enter',
  SPACE: ' ',
  ESCAPE: 'Escape',
  ARROW_UP: 'ArrowUp',
  ARROW_DOWN: 'ArrowDown',
  ARROW_LEFT: 'ArrowLeft',
  ARROW_RIGHT: 'ArrowRight',
  TAB: 'Tab',
} as const;

export const handleKeyboardNavigation = (
  event: KeyboardEvent,
  handlers: Partial<Record<keyof typeof KEYS, () => void>>
): void => {
  const key = event.key;
  Object.entries(KEYS).forEach(([name, value]) => {
    if (key === value && handlers[name as keyof typeof KEYS]) {
      event.preventDefault();
      handlers[name as keyof typeof KEYS]?.();
    }
  });
};
