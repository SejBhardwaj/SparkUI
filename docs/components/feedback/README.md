# Feedback Components

## Overview
Comprehensive collection of feedback components for user interactions and system status.

## Components

### Interactive Feedback
- **Button**: Primary interaction component with variants, sizes, and states
- **IconButton**: Icon-only button for compact interfaces
- **ButtonGroup**: Group related buttons together

### Notifications
- **Alert**: Inline messages for important information
- **Toast**: Temporary notifications that auto-dismiss
- **Snackbar**: Brief messages at bottom of screen with actions

### Status Indicators
- **Badge**: Small status labels and counts
- **Label**: Form labels with required/optional indicators
- **StatusBadge**: User status indicators (online, offline, etc.)

### Progress & Loading
- **ProgressBar**: Linear progress indicator
- **CircularProgress**: Circular progress indicator
- **Spinner**: Loading spinner with multiple variants
- **Skeleton**: Placeholder for loading content

## Usage Patterns

### Showing Success Feedback
```tsx
// Using Alert
<Alert variant="success">Changes saved!</Alert>

// Using Toast
const toast = useToast();
toast.success('Changes saved!');

// Using Snackbar
<Snackbar open={open} message="Changes saved!" />
```

### Loading States
```tsx
// Button loading
<Button loading>Saving...</Button>

// Progress bar
<ProgressBar value={progress} max={100} />

// Spinner
<Spinner size="lg" />
```

### Status Display
```tsx
// Badge
<Badge variant="success">Active</Badge>

// Count badge
<CountBadge count={5} />

// Status badge
<StatusBadge status="online" />
```

## Accessibility
All feedback components follow ARIA best practices:
- Proper roles and attributes
- Screen reader announcements
- Keyboard navigation support
- Focus management

## Best Practices
1. Use appropriate feedback for the context
2. Keep messages concise and actionable
3. Provide clear visual hierarchy
4. Ensure sufficient color contrast
5. Support keyboard navigation
6. Test with screen readers

## Related Hooks
- `useToast`: Manage toast notifications
- `useFeedback`: Generic feedback state management
