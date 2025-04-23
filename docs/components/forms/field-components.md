# Field Components System

## Overview
Reusable field components for consistent form layouts.

## Components
- FieldLabel: Label with required indicator
- FieldError: Error message display
- FieldHelper: Helper text
- FieldWrapper: Complete field wrapper

## Usage
```tsx
<FieldWrapper name="email" label="Email" error={errors.email} required>
  <Input name="email" />
</FieldWrapper>
```
