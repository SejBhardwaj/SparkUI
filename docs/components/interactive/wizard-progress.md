# Wizard Progress Indicator

## Overview
Progress indicator component from TailAdmin for wizards.

## Features
- Step numbers
- Progress bar
- Step labels
- Completion status
- Click navigation

## Usage
```jsx
<WizardProgress
  steps={steps}
  currentStep={currentStep}
  completedSteps={completedSteps}
  onStepClick={handleStepClick}
/>
```

## Props
- `steps`: Array of step configurations
- `currentStep`: Current active step
- `completedSteps`: Array of completed step indices
- `onStepClick`: Step click handler
- `allowClickNavigation`: Allow clicking to navigate
- `showLabels`: Show step labels
- `orientation`: 'horizontal' | 'vertical'

## Step States
- **Completed**: Step is finished
- **Active**: Current step
- **Pending**: Not yet reached
- **Error**: Step has validation errors

## Styling
```css
.step-completed { color: green; }
.step-active { color: blue; }
.step-pending { color: gray; }
.step-error { color: red; }
```

## Implementation
See TailAdmin components for details.
