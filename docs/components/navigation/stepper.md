# Stepper Component

## Overview
Multi-step navigation component for wizards and sequential processes.

## Usage
```tsx
<Stepper currentStep={0} onChange={handleStepChange}>
  <StepperStep index={0} title="Account" description="Create your account" />
  <StepperStep index={1} title="Profile" description="Set up your profile" />
  <StepperStep index={2} title="Complete" description="Finish setup" />
  <StepperNavigation onComplete={handleComplete} />
</Stepper>
```

## Props
- currentStep: Current active step index
- onChange: Callback when step changes

## Variants
- Horizontal: Steps displayed in a row
- Vertical: Steps displayed in a column

## Features
- Step status (pending, active, completed)
- Navigation controls
- Custom icons
- Step descriptions
- Clickable steps
- Full ARIA support
