# Wizard Step Component

## Overview
Individual step component from Material Kit for wizard flows.

## Features
- Step content area
- Step validation
- Custom rendering
- Error display
- Help text

## Usage
```jsx
<WizardStep
  title="Personal Information"
  description="Enter your details"
  onValidate={validateStep}
>
  <FormFields />
</WizardStep>
```

## Props
- `title`: Step title
- `description`: Step description
- `onValidate`: Validation function
- `children`: Step content
- `helpText`: Additional help text
- `required`: Mark step as required

## Validation
```javascript
const validateStep = (data) => {
  const errors = {};
  if (!data.name) errors.name = 'Name is required';
  if (!data.email) errors.email = 'Email is required';
  return {
    isValid: Object.keys(errors).length === 0,
    errors
  };
};
```

## Implementation
See Material Kit components for details.
