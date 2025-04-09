export const handleRadioKeyboard = (
  event: React.KeyboardEvent,
  options: string[],
  currentValue: string,
  onChange: (value: string) => void
) => {
  const currentIndex = options.indexOf(currentValue);
  let nextIndex = currentIndex;
  
  if (event.key === 'ArrowDown' || event.key === 'ArrowRight') {
    event.preventDefault();
    nextIndex = (currentIndex + 1) % options.length;
  } else if (event.key === 'ArrowUp' || event.key === 'ArrowLeft') {
    event.preventDefault();
    nextIndex = currentIndex === 0 ? options.length - 1 : currentIndex - 1;
  }
  
  onChange(options[nextIndex]);
};
