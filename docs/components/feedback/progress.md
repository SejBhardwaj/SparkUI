# Progress Indicators

## Overview
Components for displaying progress and loading states.

## Progress Bar

### Usage
```tsx
<ProgressBar value={75} max={100} showLabel />
```

### Props
- value: Current progress value
- max: Maximum value (default: 100)
- variant: 'default' | 'success' | 'warning' | 'error'
- size: 'sm' | 'md' | 'lg'
- showLabel: Display percentage label
- label: Custom label text

## Circular Progress

### Usage
```tsx
<CircularProgress value={60} size={120} showLabel />
```

### Props
- value: Current progress value
- max: Maximum value (default: 100)
- size: Circle diameter in pixels
- strokeWidth: Circle stroke width
- variant: 'default' | 'success' | 'warning' | 'error'
- showLabel: Display percentage in center

## Spinner

### Usage
```tsx
<Spinner size="md" variant="primary" />
```

### Props
- size: 'sm' | 'md' | 'lg' | 'xl'
- variant: 'default' | 'primary' | 'secondary'
- label: Accessible label for screen readers

## Spinner Variants
- Default Spinner: Circular rotating spinner
- Dot Spinner: Three animated dots
- Pulse Spinner: Pulsing rings
- Bar Spinner: Animated bars

## Features
- Determinate progress (with value)
- Indeterminate loading (spinner)
- Multiple size options
- Color variants
- Accessible with ARIA attributes
- Smooth animations
