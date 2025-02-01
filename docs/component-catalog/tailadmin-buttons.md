# TailAdmin Button Components Catalog

## Overview
Comprehensive catalog of button components from TailAdmin dashboard template.

## Button Variants

### Primary Buttons
- Solid primary button with brand color
- Hover and active states
- Disabled state styling

### Secondary Buttons
- Outlined secondary button
- Ghost button variant
- Text-only button

### Size Variants
- Small (sm): Compact button for tight spaces
- Medium (md): Default button size
- Large (lg): Prominent call-to-action

### Icon Buttons
- Icon-only buttons
- Icon with text combinations
- Loading state with spinner

## Props
- `variant`: 'primary' | 'secondary' | 'outline' | 'ghost'
- `size`: 'sm' | 'md' | 'lg'
- `disabled`: boolean
- `loading`: boolean
- `icon`: ReactNode
- `onClick`: () => void

## Usage Examples
```tsx
<Button variant="primary" size="md">Click Me</Button>
<Button variant="outline" icon={<Icon />}>With Icon</Button>
```
