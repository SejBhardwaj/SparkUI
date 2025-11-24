# Wizard State Management

## Overview
State management utilities for wizard components.

## State Structure
```javascript
const wizardState = {
  currentStep: 0,
  completedSteps: [],
  stepData: {},
  errors: {},
  isValid: false,
  isSubmitting: false
};
```

## Hooks

### useWizard
```javascript
const useWizard = (steps, initialData = {}) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [stepData, setStepData] = useState(initialData);
  const [completedSteps, setCompletedSteps] = useState([]);
  const [errors, setErrors] = useState({});

  const goToStep = (stepIndex) => {
    if (stepIndex >= 0 && stepIndex < steps.length) {
      setCurrentStep(stepIndex);
    }
  };

  const goNext = async () => {
    const isValid = await validateCurrentStep();
    if (isValid) {
      setCompletedSteps([...completedSteps, currentStep]);
      setCurrentStep(currentStep + 1);
    }
  };

  const goPrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const updateStepData = (data) => {
    setStepData({ ...stepData, ...data });
  };

  const validateCurrentStep = async () => {
    const step = steps[currentStep];
    if (step.validate) {
      const result = await step.validate(stepData);
      setErrors(result.errors || {});
      return result.isValid;
    }
    return true;
  };

  const reset = () => {
    setCurrentStep(0);
    setStepData(initialData);
    setCompletedSteps([]);
    setErrors({});
  };

  return {
    currentStep,
    stepData,
    completedSteps,
    errors,
    goToStep,
    goNext,
    goPrevious,
    updateStepData,
    validateCurrentStep,
    reset,
    isFirstStep: currentStep === 0,
    isLastStep: currentStep === steps.length - 1,
    progress: (completedSteps.length / steps.length) * 100
  };
};
```

### useWizardPersistence
```javascript
const useWizardPersistence = (key, wizardState) => {
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(wizardState));
  }, [key, wizardState]);

  const loadState = () => {
    const saved = localStorage.getItem(key);
    return saved ? JSON.parse(saved) : null;
  };

  const clearState = () => {
    localStorage.removeItem(key);
  };

  return { loadState, clearState };
};
```

## Context Provider
```javascript
const WizardContext = createContext();

export const WizardProvider = ({ children, steps, initialData }) => {
  const wizard = useWizard(steps, initialData);
  return (
    <WizardContext.Provider value={wizard}>
      {children}
    </WizardContext.Provider>
  );
};

export const useWizardContext = () => {
  const context = useContext(WizardContext);
  if (!context) {
    throw new Error('useWizardContext must be used within WizardProvider');
  }
  return context;
};
```

## Best Practices
- Validate before proceeding
- Persist state for long forms
- Handle errors gracefully
- Provide clear feedback
- Allow navigation to previous steps
