# Components Directory

This directory contains all reusable UI components.

## Structure

```
components/
├── atoms/          # Basic building blocks
├── molecules/      # Simple component combinations
├── organisms/      # Complex UI sections
├── templates/      # Page-level layouts
└── index.ts        # Component exports
```

## Naming Conventions

- Use PascalCase for component names
- Use descriptive, semantic names
- Suffix with component type when needed (e.g., ButtonGroup, CardList)

## Component Guidelines

1. **Single Responsibility**: Each component should do one thing well
2. **Composability**: Components should be easily composable
3. **Accessibility**: Follow WCAG 2.1 AA standards
4. **TypeScript**: Fully typed props and exports
5. **Documentation**: Include JSDoc comments
6. **Testing**: Unit tests for all components

## Example Component

```tsx
import { FC } from 'react';

interface ButtonProps {
  variant?: 'primary' | 'secondary';
  children: React.ReactNode;
  onClick?: () => void;
}

export const Button: FC<ButtonProps> = ({ 
  variant = 'primary', 
  children, 
  onClick 
}) => {
  return (
    <button 
      className={`btn btn-${variant}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
```
