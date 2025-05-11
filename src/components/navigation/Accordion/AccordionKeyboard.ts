export const handleAccordionKeyboard = (
  event: React.KeyboardEvent,
  items: string[],
  currentIndex: number,
  toggleItem: (id: string) => void
) => {
  const { key } = event;
  
  switch (key) {
    case 'ArrowDown':
      event.preventDefault();
      const nextIndex = (currentIndex + 1) % items.length;
      document.getElementById(`accordion-header-${items[nextIndex]}`)?.focus();
      break;
      
    case 'ArrowUp':
      event.preventDefault();
      const prevIndex = (currentIndex - 1 + items.length) % items.length;
      document.getElementById(`accordion-header-${items[prevIndex]}`)?.focus();
      break;
      
    case 'Home':
      event.preventDefault();
      document.getElementById(`accordion-header-${items[0]}`)?.focus();
      break;
      
    case 'End':
      event.preventDefault();
      document.getElementById(`accordion-header-${items[items.length - 1]}`)?.focus();
      break;
      
    case 'Enter':
    case ' ':
      event.preventDefault();
      toggleItem(items[currentIndex]);
      break;
  }
};
