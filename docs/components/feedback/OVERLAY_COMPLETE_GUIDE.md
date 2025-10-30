# Complete Overlay Components Guide

## Overview
Comprehensive guide to all overlay components including modals, drawers, popovers, tooltips, dropdowns, and context menus.

## Modal Components
- Base modal with header, body, footer
- Size variants (sm, md, lg, xl)
- Centered and fullscreen variants
- Scrollable content support
- Animation transitions
- Accessibility features
- Modal manager and portal
- Queue system for multiple modals
- Specialized types: alert, confirm, prompt, image, video

## Drawer Components
- Base drawer with positions (left, right, top, bottom)
- Persistent and temporary variants
- Mini drawer with expand/collapse
- Overlay backdrop
- Slide animations

## Side Panel Components
- Navigation drawer
- Filter panel
- Settings panel
- Notification panel
- Shopping cart drawer

## Tooltip Components
- Base tooltip with positions
- Arrow indicator
- Color variants
- Trigger options (hover, click, focus)
- State management hooks

## Popover Components
- Base popover with content and trigger
- Placement system
- Info and confirmation variants
- Form and menu popovers
- Animation transitions
- Accessibility features

## Dropdown Components
- Base dropdown with menu and items
- Section dividers
- User profile dropdown
- Notification dropdown
- Action dropdown with icons
- Select dropdown
- Nested dropdown menus
- Searchable dropdown with filter

## Context Menu Components
- Base context menu with items
- Right-click trigger
- Table row context menu
- File/item context menu
- Text selection context menu
- Image context menu
- Section groups

## Best Practices
1. Always provide proper ARIA attributes
2. Implement keyboard navigation
3. Use focus management
4. Handle escape key to close
5. Return focus after closing
6. Use semantic HTML
7. Test with screen readers
8. Provide clear visual feedback

## Accessibility
All overlay components follow WCAG 2.1 AA guidelines with:
- Proper ARIA roles and attributes
- Keyboard navigation support
- Focus trap when needed
- Screen reader announcements
- High contrast support
- Reduced motion support

## Performance
- Lazy loading for large content
- Portal rendering for proper z-index
- Animation optimization
- Event delegation
- Memory leak prevention

## Browser Support
All components support modern browsers:
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## Examples
See individual component examples for detailed usage patterns.
