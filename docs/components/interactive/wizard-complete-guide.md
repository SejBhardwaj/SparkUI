# Multi-Step Wizard Complete Guide

## Overview
Comprehensive guide for implementing multi-step wizard components.

## Architecture

### Component Hierarchy
```
WizardContainer
├── WizardProgress
├── WizardSteps
│   ├── Step 1
│   ├── Step 2
│   └── Step 3
└── WizardNavigation
```

### State Management
```javascript
const wizardState = {
  currentStep: 0,
  totalSteps: 3,
  stepData: {},
  completedSteps: [],
  errors: {},
  isValid: false,
  isSubmitting: false
};
```

## Complete Implementation

```jsx
import { useState } from 'react';

const CompleteWizard = () => {
  // State
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({});
  const [completedSteps, setCompletedSteps] = useState([]);
  const [errors, setErrors] = useState({});

  // Steps configuration
  const steps = [
    {
      id: 'personal',
      title: 'Personal Information',
      component: PersonalInfoStep,
      validate: validatePersonalInfo
    },
    {
      id: 'address',
      title: 'Address',
      component: AddressStep,
      validate: validateAddress
    },
    {
      id: 'review',
      title: 'Review',
      component: ReviewStep,
      validate: () => ({ isValid: true })
    }
  ];

  // Navigation handlers
  const goNext = async () => {
    const step = steps[currentStep];
    const validation = await step.validate(formData);
    
    if (validation.isValid) {
      setCompletedSteps([...completedSteps, currentStep]);
      setCurrentStep(currentStep + 1);
      setErrors({});
    } else {
      setErrors(validation.errors);
    }
  };

  const goPrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
      setErrors({});
    }
  };

  const goToStep = (stepIndex) => {
    if (completedSteps.includes(stepIndex - 1) || stepIndex === 0) {
      setCurrentStep(stepIndex);
      setErrors({});
    }
  };

  // Data handlers
  const updateData = (data) => {
    setFormData({ ...formData, ...data });
  };

  // Submit handler
  const handleSubmit = async () => {
    try {
      const response = await api.submitWizard(formData);
      onSuccess(response);
    } catch (error) {
      setErrors({ _form: error.message });
    }
  };

  const CurrentStepComponent = steps[currentStep].component;

  return (
    <div className="wizard-container">
      <WizardProgress
        steps={steps}
        currentStep={currentStep}
        completedSteps={completedSteps}
        onStepClick={goToStep}
      />

      <div className="wizard-content">
        <h2>{steps[currentStep].title}</h2>
        <CurrentStepComponent
          data={formData}
          onChange={updateData}
          errors={errors}
        />
      </div>

      <WizardNavigation
        currentStep={currentStep}
        totalSteps={steps.length}
        onPrevious={goPrevious}
        onNext={currentStep === steps.length - 1 ? handleSubmit : goNext}
        canGoNext={Object.keys(errors).length === 0}
        canGoPrevious={currentStep > 0}
      />
    </div>
  );
};
```

## Features

### Basic Features
- Step navigation
- Progress tracking
- Form validation
- Data persistence

### Advanced Features
- Conditional steps
- Branching logic
- Async validation
- Auto-save
- Resume functionality
- Mobile responsive
- Accessibility

## Best Practices

### UX
- Clear progress indication
- Allow backward navigation
- Save progress automatically
- Provide helpful error messages
- Show completion status

### Performance
- Lazy load step components
- Debounce validation
- Cache validation results
- Optimize re-renders

### Accessibility
- Keyboard navigation
- ARIA labels
- Screen reader support
- Focus management
- Error announcements

## Common Patterns

### Conditional Steps
```javascript
const getNextStep = (currentStep, data) => {
  if (currentStep === 0 && data.userType === 'business') {
    return 2; // Skip personal step
  }
  return currentStep + 1;
};
```

### Branching Logic
```javascript
const steps = [
  { id: 'start', next: (data) => data.type === 'A' ? 'pathA' : 'pathB' },
  { id: 'pathA', next: 'end' },
  { id: 'pathB', next: 'end' },
  { id: 'end' }
];
```

### Resume Functionality
```javascript
const useWizardResume = (key) => {
  const loadSavedState = () => {
    const saved = localStorage.getItem(key);
    return saved ? JSON.parse(saved) : null;
  };

  const saveState = (state) => {
    localStorage.setItem(key, JSON.stringify(state));
  };

  const clearSavedState = () => {
    localStorage.removeItem(key);
  };

  return { loadSavedState, saveState, clearSavedState };
};
```

## Testing

### Unit Tests
```javascript
describe('Wizard', () => {
  it('should navigate to next step', () => {
    const { result } = renderHook(() => useWizard(steps));
    act(() => result.current.goNext());
    expect(result.current.currentStep).toBe(1);
  });

  it('should validate before proceeding', async () => {
    const { result } = renderHook(() => useWizard(steps));
    await act(async () => await result.current.goNext());
    expect(result.current.errors).toBeDefined();
  });
});
```

### Integration Tests
```javascript
describe('Wizard Integration', () => {
  it('should complete full flow', async () => {
    render(<Wizard />);
    
    // Fill step 1
    fireEvent.change(screen.getByLabelText('Name'), { target: { value: 'John' } });
    fireEvent.click(screen.getByText('Next'));
    
    // Fill step 2
    fireEvent.change(screen.getByLabelText('Address'), { target: { value: '123 Main St' } });
    fireEvent.click(screen.getByText('Next'));
    
    // Submit
    fireEvent.click(screen.getByText('Submit'));
    
    await waitFor(() => {
      expect(screen.getByText('Success')).toBeInTheDocument();
    });
  });
});
```

## Resources
- NamelessUI wizard container
- Material Kit step components
- Shadcraft navigation
- TailAdmin progress indicators
- Bootstrap validation
- HyperUI form integration

## Examples

See the following for complete examples:
- Basic wizard: `/examples/wizard-basic`
- Multi-path wizard: `/examples/wizard-branching`
- Async wizard: `/examples/wizard-async`
- Mobile wizard: `/examples/wizard-mobile`

---

*This guide covers all aspects of implementing multi-step wizards in your application.*
