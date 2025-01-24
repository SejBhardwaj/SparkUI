# Accessibility Guidelines

## WCAG 2.1 Compliance

This project follows WCAG 2.1 Level AA standards.

### Key Principles

1. **Perceivable** - Information must be presentable to users in ways they can perceive
2. **Operable** - UI components must be operable by all users
3. **Understandable** - Information and UI operation must be understandable
4. **Robust** - Content must be robust enough for assistive technologies

### Color Contrast

- Normal text: minimum 4.5:1 contrast ratio
- Large text (18pt+): minimum 3:1 contrast ratio
- Use the color-contrast utility to validate

### Keyboard Navigation

- All interactive elements must be keyboard accessible
- Logical tab order
- Visible focus indicators
- Escape key closes modals/dialogs

### Screen Readers

- Use semantic HTML
- Provide ARIA labels where needed
- Announce dynamic content changes
- Hide decorative elements with aria-hidden

### Testing

- Test with keyboard only
- Test with screen readers (NVDA, JAWS, VoiceOver)
- Use automated tools (axe, Lighthouse)
