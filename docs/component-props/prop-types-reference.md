# Component Prop Types Reference

## Overview
Comprehensive reference for component prop types.

## Common Types
```typescript
type Size = 'sm' | 'md' | 'lg' | 'xl';
type Variant = 'primary' | 'secondary' | 'outline' | 'ghost';
type Color = 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger';
```

## Event Handler Types
```typescript
type ClickHandler = (event: MouseEvent) => void;
type ChangeHandler = (value: any) => void;
type SubmitHandler = (event: FormEvent) => void;
```

## Component Props
Base props extended by all components.
