# Hooks Directory

Custom React hooks for shared logic.

## Hook Categories

- **State Management**: useState wrappers and state utilities
- **Side Effects**: useEffect wrappers and async operations
- **Performance**: Memoization and optimization hooks
- **DOM**: DOM manipulation and event handling
- **Forms**: Form state and validation

## Naming Convention

All hooks must start with `use` prefix (e.g., `useLocalStorage`, `useDebounce`)

## Guidelines

1. Follow React hooks rules
2. Document parameters and return values
3. Include usage examples
4. Add TypeScript types
5. Write tests

## Example

```ts
/**
 * Hook for managing local storage state
 * @param key - Storage key
 * @param initialValue - Initial value
 * @returns [value, setValue] tuple
 */
export function useLocalStorage<T>(
  key: string,
  initialValue: T
): [T, (value: T) => void] {
  // Implementation
}
```

## Usage

```tsx
import { useLocalStorage } from '@hooks/useLocalStorage';

function MyComponent() {
  const [name, setName] = useLocalStorage('name', 'John');
  
  return <input value={name} onChange={e => setName(e.target.value)} />;
}
```
