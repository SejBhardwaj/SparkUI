# Component Usage Examples Template

## Basic Usage
```tsx
// Simplest form
<Component />
```

## With Props
```tsx
// Common configuration
<Component
  prop1="value"
  prop2={true}
  prop3={42}
/>
```

## With Event Handlers
```tsx
// Interactive example
<Component
  onClick={() => console.log('clicked')}
  onChange={(value) => setValue(value)}
/>
```

## With Children
```tsx
// Composition example
<Component>
  <ChildComponent />
  <AnotherChild />
</Component>
```

## Advanced Usage
```tsx
// Complex scenario
<Component
  variant="primary"
  size="lg"
  disabled={isDisabled}
  loading={isLoading}
  icon={<Icon />}
  onSubmit={handleSubmit}
>
  Advanced content
</Component>
```

## Edge Cases
```tsx
// Error handling
<Component
  error={errorMessage}
  onError={handleError}
/>

// Empty state
<Component
  data={[]}
  emptyState={<EmptyMessage />}
/>
```
