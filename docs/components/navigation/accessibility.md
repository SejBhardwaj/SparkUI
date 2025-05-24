# Navigation Accessibility Guidelines

## Overview
Accessibility features and best practices for navigation components.

## General Principles

### Semantic HTML
- Use `<nav>` for navigation regions
- Use `<button>` for interactive elements
- Use proper heading hierarchy

### Keyboard Navigation
All navigation components support keyboard navigation:
- **Tab**: Move focus between interactive elements
- **Enter/Space**: Activate buttons and links
- **Arrow keys**: Navigate within menus, tabs, and steppers
- **Escape**: Close menus and dropdowns
- **Home/End**: Jump to first/last item

### ARIA Attributes

#### Navbar
```tsx
<nav aria-label="Main navigation">
  <a href="/" aria-current="page">Home</a>
</nav>
```

#### Breadcrumb
```tsx
<nav aria-label="Breadcrumb">
  <ol>
    <li><a href="/">Home</a></li>
    <li aria-current="page">Current</li>
  </ol>
</nav>
```

#### Tabs
```tsx
<div role="tablist">
  <button role="tab" aria-selected="true" aria-controls="panel-1">Tab 1</button>
</div>
<div role="tabpanel" id="panel-1">Content</div>
```

#### Accordion
```tsx
<button aria-expanded="true" aria-controls="content-1">Header</button>
<div id="content-1" role="region">Content</div>
```

#### Menu
```tsx
<button aria-haspopup="true" aria-expanded="false">Menu</button>
<div role="menu">
  <button role="menuitem">Item</button>
</div>
```

#### Stepper
```tsx
<div role="group" aria-label="Progress steps">
  <button aria-current="step">Step 1</button>
</div>
```

## Screen Reader Support
- Announce navigation state changes
- Provide descriptive labels
- Use live regions for dynamic updates

## Focus Management
- Maintain visible focus indicators
- Trap focus in modal menus
- Return focus after closing

## Best Practices
1. Always provide text alternatives for icons
2. Ensure sufficient color contrast
3. Support keyboard-only navigation
4. Test with screen readers
5. Provide skip navigation links
6. Use semantic HTML elements
7. Implement proper ARIA patterns
8. Announce state changes

## Testing
Test navigation components with:
- Keyboard only
- Screen readers (NVDA, JAWS, VoiceOver)
- Browser zoom (200%+)
- High contrast mode
- Reduced motion preferences
