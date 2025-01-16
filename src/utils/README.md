# Utils Directory

Utility functions and helper modules.

## Categories

- **validation**: Form and data validation
- **formatting**: String, date, number formatting
- **helpers**: General purpose helpers
- **constants**: Shared constants
- **api**: API utilities

## Guidelines

1. Pure functions when possible
2. Well-documented with JSDoc
3. Fully typed with TypeScript
4. Unit tested
5. Tree-shakeable exports

## Example

```ts
/**
 * Formats a date string to a readable format
 * @param date - Date string or Date object
 * @param format - Format string (default: 'MM/DD/YYYY')
 * @returns Formatted date string
 */
export function formatDate(
  date: string | Date, 
  format: string = 'MM/DD/YYYY'
): string {
  // Implementation
}
```
