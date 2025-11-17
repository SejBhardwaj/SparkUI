# Autocomplete Keyboard Navigation

## Overview
Keyboard navigation implementation for autocomplete components.

## Key Bindings

### Navigation
- `ArrowDown`: Move to next suggestion
- `ArrowUp`: Move to previous suggestion
- `Enter`: Select current suggestion
- `Escape`: Close dropdown
- `Tab`: Select and move to next field

### Advanced
- `Home`: Jump to first suggestion
- `End`: Jump to last suggestion
- `PageUp/PageDown`: Scroll suggestions

## Implementation
```javascript
const handleKeyDown = (e) => {
  switch (e.key) {
    case 'ArrowDown':
      e.preventDefault();
      setActiveIndex(prev => Math.min(prev + 1, options.length - 1));
      break;
    case 'ArrowUp':
      e.preventDefault();
      setActiveIndex(prev => Math.max(prev - 1, 0));
      break;
    case 'Enter':
      e.preventDefault();
      if (activeIndex >= 0) {
        handleSelect(options[activeIndex]);
      }
      break;
    case 'Escape':
      setIsOpen(false);
      break;
  }
};
```

## Accessibility
- ARIA attributes
- Screen reader announcements
- Focus management
- Keyboard-only operation

## Best Practices
- Prevent default browser behavior
- Maintain focus visibility
- Announce state changes
- Handle edge cases
