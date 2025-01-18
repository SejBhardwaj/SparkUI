# Design System Guidelines

## Overview

Our design system provides a consistent, accessible, and scalable foundation for building user interfaces.

## Core Principles

1. **Consistency**: Unified visual language across all components
2. **Accessibility**: WCAG 2.1 AA compliance minimum
3. **Scalability**: Flexible tokens that adapt to different contexts
4. **Performance**: Optimized for fast loading and rendering
5. **Developer Experience**: Easy to use and well-documented

## Design Tokens

### Colors

We use a comprehensive color palette with semantic naming:

- **Primary**: Main brand color
- **Secondary**: Supporting brand color
- **Success**: Positive actions and states
- **Warning**: Cautionary messages
- **Error**: Error states and destructive actions
- **Gray**: Neutral colors for text and backgrounds

Each color has 10 shades (50-900) for flexibility.

### Typography

- **Font Families**: Sans-serif (Inter), Serif (Georgia), Mono (Fira Code)
- **Font Sizes**: 13 sizes from xs (12px) to 9xl (128px)
- **Font Weights**: 9 weights from thin (100) to black (900)
- **Line Heights**: 6 options from none (1) to loose (2)

### Spacing

Consistent spacing scale based on 4px increments:
- Base unit: 4px (0.25rem)
- Scale: 0, 1, 2, 3, 4, 5, 6, 8, 10, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96

### Breakpoints

Responsive breakpoints for different screen sizes:
- xs: 320px (mobile)
- sm: 640px (large mobile)
- md: 768px (tablet)
- lg: 1024px (desktop)
- xl: 1280px (large desktop)
- 2xl: 1536px (extra large)

### Shadows

Elevation system with 7 levels:
- none: No shadow
- sm: Subtle elevation
- base: Default elevation
- md: Medium elevation
- lg: High elevation
- xl: Very high elevation
- 2xl: Maximum elevation

### Animations

- **Durations**: instant, fast (150ms), normal (300ms), slow (500ms)
- **Easing**: linear, easeIn, easeOut, easeInOut, sharp, bounce
- **Transitions**: Predefined transitions for common properties

## Component Guidelines

### Accessibility

All components must:
- Support keyboard navigation
- Include proper ARIA attributes
- Maintain sufficient color contrast (4.5:1 minimum)
- Provide focus indicators
- Support screen readers

### Responsive Design

- Mobile-first approach
- Use breakpoint tokens
- Test on multiple devices
- Ensure touch-friendly targets (44x44px minimum)

### Performance

- Lazy load when possible
- Optimize bundle size
- Use CSS-in-JS efficiently
- Minimize re-renders

## Usage Examples

### Using Design Tokens

```tsx
import { theme } from '@/theme';

const Button = styled.button`
  background-color: ${theme.colors.primary[500]};
  padding: ${theme.spacing[4]} ${theme.spacing[6]};
  border-radius: ${theme.borderRadius.md};
  font-size: ${theme.typography.fontSize.base};
  transition: ${theme.animations.transition.all};
  
  &:hover {
    background-color: ${theme.colors.primary[600]};
    box-shadow: ${theme.shadows.md};
  }
`;
```

### Responsive Design

```tsx
import { breakpoints } from '@/design-tokens/breakpoints';

const Container = styled.div`
  padding: ${theme.spacing[4]};
  
  @media (min-width: ${breakpoints.md}) {
    padding: ${theme.spacing[8]};
  }
  
  @media (min-width: ${breakpoints.lg}) {
    padding: ${theme.spacing[12]};
  }
`;
```

## Resources

- [Color Palette](../src/design-tokens/colors.ts)
- [Typography Scale](../src/design-tokens/typography.ts)
- [Spacing System](../src/design-tokens/spacing.ts)
- [Component Library](../src/components/)

## Contributing

When adding new design tokens:
1. Follow existing naming conventions
2. Document the purpose and usage
3. Update this guide
4. Add examples
5. Test across themes (light/dark)
