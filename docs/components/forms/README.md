# Forms Documentation

## Overview
Complete form component system with validation, accessibility, and examples.

## Components
- Input, Textarea, Checkbox, Radio, Select
- Form wrapper and context
- Field components (Label, Error, Helper, Wrapper)
- Layout components (Grid, Section, Steps)
- Rich text editor
- Validation system

## Examples
- Login form
- Registration form
- Contact form
- Profile form

## Features
- TypeScript support
- Validation (Zod schemas)
- Accessibility (WCAG 2.1 AA)
- Keyboard navigation
- Error handling
- Multi-step forms

## Getting Started
```tsx
import { Form, FieldWrapper, Input } from '@/components/forms';

<Form onSubmit={handleSubmit}>
  <FieldWrapper name="email" label="Email" required>
    <Input type="email" name="email" />
  </FieldWrapper>
  <button type="submit">Submit</button>
</Form>
```
