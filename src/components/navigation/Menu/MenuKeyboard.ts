export const handleMenuKeyboard = (
  event: React.KeyboardEvent,
  items: HTMLElement[],
  currentIndex: number,
  onClose: () => void
) => {
  const { key } = event;
  
  switch (key) {
    case 'ArrowDown':
      event.preventDefault();
      const nextIndex = (currentIndex + 1) % items.length;
      items[nextIndex]?.focus();
      break;
      
    case 'ArrowUp':
      event.preventDefault();
      const prevIndex = (currentIndex - 1 + items.length) % items.length;
      items[prevIndex]?.focus();
      break;
      
    case 'Home':
      event.preventDefault();
      items[0]?.focus();
      break;
      
    case 'End':
      event.preventDefault();
      items[items.length - 1]?.focus();
      break;
      
    case 'Escape':
      event.preventDefault();
      onClose();
      break;
      
    case 'Tab':
      event.preventDefault();
      onClose();
      break;
  }
};

export const focusFirstMenuItem = (menuElement: HTMLElement) => {
  const firstItem = menuElement.querySelector('[role="menuitem"]') as HTMLElement;
  firstItem?.focus();
};
