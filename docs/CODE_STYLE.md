# Code Style Guide

## General Principles

- Write clean, readable code
- Follow DRY (Don't Repeat Yourself)
- Use meaningful variable names
- Keep functions small and focused

## TypeScript

- Use strict mode
- Avoid `any` type
- Define interfaces for props
- Use type inference when possible

## React

- Use functional components
- Use hooks for state management
- Keep components small and reusable
- Props should be typed with interfaces

## Naming Conventions

- Components: PascalCase (e.g., `Button`, `UserProfile`)
- Files: kebab-case (e.g., `user-profile.tsx`)
- Functions: camelCase (e.g., `handleClick`, `getUserData`)
- Constants: UPPER_SNAKE_CASE (e.g., `API_URL`, `MAX_ITEMS`)

## File Structure

```
src/
  components/
    Button/
      Button.tsx
      Button.test.tsx
      Button.styles.ts
      index.ts
```

## Formatting

- Use Prettier for automatic formatting
- 2 spaces for indentation
- Single quotes for strings
- Semicolons required
- Trailing commas in multi-line

## Comments

- Use JSDoc for functions and components
- Explain "why", not "what"
- Keep comments up to date
