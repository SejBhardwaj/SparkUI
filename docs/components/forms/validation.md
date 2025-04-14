# Form Validation System

## Overview
Comprehensive validation system with Zod schemas and custom rules.

## Usage
```tsx
const { errors, validate } = useValidation(loginSchema);
const isValid = validate(formData);
```

## Features
- Built-in rules (required, email, minLength, etc.)
- Zod schema support
- Custom validation
- Error messages
- TypeScript support
