# Wizard Container Component

## Overview
Multi-step wizard container from NamelessUI for complex forms.

## Features
- Step management
- Navigation controls
- Progress tracking
- Validation
- Data persistence

## Usage
```jsx
<WizardContainer
  steps={steps}
  onComplete={handleComplete}
  onCancel={handleCancel}
>
  {/* Step content */}
</WizardContainer>
```

## Props
- `steps`: Array of step configurations
- `onComplete`: Completion callback
- `onCancel`: Cancel callback
- `initialStep`: Starting step index
- `allowSkip`: Allow skipping steps
- `validateOnNext`: Validate before proceeding

## Step Configuration
```javascript
{
  id: string,
  title: string,
  description: string,
  component: React.Component,
  validate: (data) => boolean
}
```

## Implementation
See NamelessUI components for details.
