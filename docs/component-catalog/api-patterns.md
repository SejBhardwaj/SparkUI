# Common Component API Patterns

## Controlled vs Uncontrolled
### Controlled Components
- Value managed by parent
- onChange handler required
- Predictable state

### Uncontrolled Components
- Internal state management
- defaultValue prop
- Ref access

## Composition Patterns
### Compound Components
- Parent-child relationship
- Shared context
- Flexible composition

### Render Props
- Function as children
- Flexible rendering
- State sharing

### Hooks Pattern
- Custom hooks for logic
- Reusable behavior
- Clean separation

## Common Props
- `className`: string
- `style`: CSSProperties
- `children`: ReactNode
- `disabled`: boolean
- `loading`: boolean
- `error`: boolean | string
- `onChange`: (value) => void
- `onClick`: () => void
