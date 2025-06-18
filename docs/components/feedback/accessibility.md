# Feedback Components Accessibility Guidelines

## Overview
Comprehensive accessibility guidelines for all feedback components.

## Button Accessibility

### ARIA Attributes
- Use `aria-label` for icon-only buttons
- Set `aria-busy="true"` for loading states
- Use `aria-pressed` for toggle buttons
- Set `aria-disabled` for disabled buttons

### Keyboard Support
- Enter/Space: Activate button
- Tab: Navigate between buttons
- Focus visible indicator required

### Best Practices
```tsx
// Good: Icon button with label
<IconButton icon={<SearchIcon />} aria-label="Search" />

// Good: Loading state
<Button loading aria-busy="true">Saving...</Button>

// Good: Toggle button
<Button aria-pressed={isActive}>Toggle</Button>
```

## Alert Accessibility

### ARIA Attributes
- Use `role="alert"` for important messages
- Use `role="status"` for non-critical updates
- Set `aria-live="polite"` or `"assertive"`

### Best Practices
```tsx
// Critical error
<Alert role="alert" aria-live="assertive">
  Critical error occurred
</Alert>

// Status update
<Alert role="status" aria-live="polite">
  Changes saved
</Alert>
```

## Toast/Snackbar Accessibility

### ARIA Attributes
- Use `role="status"` for notifications
- Set `aria-live="polite"` for non-urgent
- Set `aria-atomic="true"` for complete messages

### Focus Management
- Don't steal focus from current task
- Provide dismiss button with clear label
- Support Escape key to dismiss

### Best Practices
```tsx
<Toast
  role="status"
  aria-live="polite"
  aria-atomic="true"
>
  Message sent successfully
</Toast>
```

## Progress Indicators Accessibility

### ARIA Attributes
- Use `role="progressbar"` for determinate progress
- Set `aria-valuenow`, `aria-valuemin`, `aria-valuemax`
- Use `role="status"` for indeterminate (spinner)

### Screen Reader Announcements
```tsx
// Determinate progress
<ProgressBar
  value={75}
  max={100}
  aria-valuenow={75}
  aria-valuemin={0}
  aria-valuemax={100}
  aria-label="Upload progress"
/>

// Indeterminate loading
<Spinner role="status" aria-label="Loading content" />
```

## Badge Accessibility

### ARIA Attributes
- Use `role="status"` for status badges
- Provide `aria-label` for icon-only badges
- Use `aria-live` for dynamic updates

### Best Practices
```tsx
// Count badge
<CountBadge count={5} aria-label="5 unread notifications" />

// Status badge
<StatusBadge status="online" aria-label="User is online" />
```

## Color and Contrast

### Requirements
- Minimum 4.5:1 contrast ratio for text
- 3:1 for large text and UI components
- Don't rely on color alone for meaning

### Implementation
- Use icons with color variants
- Provide text labels
- Test with color blindness simulators

## Keyboard Navigation

### General Requirements
- All interactive elements must be keyboard accessible
- Visible focus indicators required
- Logical tab order
- Support standard keyboard shortcuts

### Component-Specific
- **Buttons**: Enter/Space to activate
- **Alerts**: Escape to dismiss (if dismissible)
- **Toasts**: Escape to dismiss all
- **Button Groups**: Arrow keys to navigate

## Screen Reader Support

### Announcements
- Use live regions for dynamic updates
- Provide context for status changes
- Announce loading states
- Confirm actions

### Implementation
```tsx
// Announce feedback
const announceToScreenReader = (message: string) => {
  const announcement = document.createElement('div');
  announcement.setAttribute('role', 'status');
  announcement.setAttribute('aria-live', 'polite');
  announcement.textContent = message;
  document.body.appendChild(announcement);
  setTimeout(() => document.body.removeChild(announcement), 1000);
};
```

## Testing Checklist

### Manual Testing
- [ ] Test with keyboard only
- [ ] Test with screen reader (NVDA, JAWS, VoiceOver)
- [ ] Verify focus indicators
- [ ] Check color contrast
- [ ] Test with browser zoom (200%)

### Automated Testing
- [ ] Run axe-core or similar tool
- [ ] Validate ARIA attributes
- [ ] Check semantic HTML
- [ ] Verify keyboard support

## Resources
- [ARIA Authoring Practices Guide](https://www.w3.org/WAI/ARIA/apg/)
- [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)
- [Inclusive Components](https://inclusive-components.design/)
