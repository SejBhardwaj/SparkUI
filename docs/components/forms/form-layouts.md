# Form Layout Patterns

## Overview
Layout components for organizing form fields.

## Components
- FormGrid: Grid layout with columns
- FormSection: Grouped fields with title
- FormSteps: Multi-step forms

## Usage
```tsx
<FormGrid columns={2} gap="md">
  <FieldWrapper>...</FieldWrapper>
  <FieldWrapper>...</FieldWrapper>
</FormGrid>

<FormSteps steps={[...]} onComplete={handleComplete} />
```
