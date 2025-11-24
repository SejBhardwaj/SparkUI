# Wizard Navigation Component

## Overview
Navigation controls for wizard from Shadcraft.

## Features
- Previous/Next buttons
- Step indicators
- Skip functionality
- Cancel button
- Submit button

## Usage
```jsx
<WizardNavigation
  currentStep={currentStep}
  totalSteps={totalSteps}
  onPrevious={handlePrevious}
  onNext={handleNext}
  onCancel={handleCancel}
  canGoNext={isValid}
/>
```

## Props
- `currentStep`: Current step index
- `totalSteps`: Total number of steps
- `onPrevious`: Previous button handler
- `onNext`: Next button handler
- `onCancel`: Cancel button handler
- `onSkip`: Skip button handler
- `canGoNext`: Enable/disable next button
- `canGoPrevious`: Enable/disable previous button
- `showCancel`: Show cancel button
- `showSkip`: Show skip button

## Button States
```javascript
{
  previous: {
    disabled: currentStep === 0,
    label: 'Back'
  },
  next: {
    disabled: !canGoNext,
    label: currentStep === totalSteps - 1 ? 'Finish' : 'Next'
  }
}
```

## Implementation
See Shadcraft UI components for details.
