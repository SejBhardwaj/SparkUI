# API Documentation Guidelines

## Component API Documentation

Each component should document:

### Props

```typescript
interface ButtonProps {
  /** The button label text */
  children: React.ReactNode;
  /** Button variant style */
  variant?: 'primary' | 'secondary' | 'outline';
  /** Button size */
  size?: 'sm' | 'md' | 'lg';
  /** Disabled state */
  disabled?: boolean;
  /** Click handler */
  onClick?: () => void;
}
```

### Usage Examples

```tsx
// Basic usage
<Button>Click me</Button>

// With variant
<Button variant="primary">Submit</Button>

// With size
<Button size="lg">Large Button</Button>
```

### Accessibility

- Document ARIA attributes
- Keyboard interactions
- Screen reader behavior

### Best Practices

- Use TypeScript for type safety
- Provide default values
- Document all props with JSDoc comments
- Include usage examples
- Note accessibility considerations
