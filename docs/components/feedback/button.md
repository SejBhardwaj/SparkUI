# Button Component

## Overview
Versatile button component with multiple variants, sizes, and states for user interactions.

## Usage
```tsx
<Button variant="primary" size="md" onClick={handleClick}>
  Click me
</Button>
```

## Props
- variant: 'primary' | 'secondary' | 'outline' | 'ghost'
- size: 'sm' | 'md' | 'lg' | 'xl'
- loading: boolean - Shows loading spinner
- disabled: boolean - Disables the button
- fullWidth: boolean - Makes button full width

## Variants
- Primary: Solid background, high emphasis
- Secondary: Alternative solid style
- Outline: Border only, medium emphasis
- Ghost: Text only, low emphasis

## Features
- Multiple size options
- Loading state with spinner
- Icon support (left/right)
- Disabled state
- Full width option
- Accessible with ARIA attributes
