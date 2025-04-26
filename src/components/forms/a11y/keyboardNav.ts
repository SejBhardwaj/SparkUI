export const handleFormKeyboard = (event: React.KeyboardEvent) => {
  if (event.key === 'Enter' && event.target instanceof HTMLInputElement) {
    const form = event.target.form;
    if (form) {
      const elements = Array.from(form.elements) as HTMLElement[];
      const currentIndex = elements.indexOf(event.target);
      const nextElement = elements[currentIndex + 1];
      if (nextElement && 'focus' in nextElement) {
        event.preventDefault();
        nextElement.focus();
      }
    }
  }
};
