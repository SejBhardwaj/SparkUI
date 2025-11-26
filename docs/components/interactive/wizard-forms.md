# Wizard Form Integration

## Overview
Form integration patterns for wizard components from HyperUI.

## Form Structure

### Multi-Step Form
```jsx
const MultiStepForm = () => {
  const { currentStep, stepData, updateStepData, goNext, goPrevious } = useWizard();

  const handleSubmit = (data) => {
    updateStepData(data);
    goNext();
  };

  return (
    <WizardContainer>
      <WizardProgress />
      <Form onSubmit={handleSubmit}>
        {currentStep === 0 && <PersonalInfoStep data={stepData} />}
        {currentStep === 1 && <AddressStep data={stepData} />}
        {currentStep === 2 && <ReviewStep data={stepData} />}
      </Form>
      <WizardNavigation />
    </WizardContainer>
  );
};
```

### Form State Management
```javascript
const useFormWizard = (initialData) => {
  const [formData, setFormData] = useState(initialData);
  const [touched, setTouched] = useState({});
  const [errors, setErrors] = useState({});

  const updateField = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    setTouched(prev => ({ ...prev, [field]: true }));
  };

  const updateFields = (fields) => {
    setFormData(prev => ({ ...prev, ...fields }));
  };

  const resetForm = () => {
    setFormData(initialData);
    setTouched({});
    setErrors({});
  };

  return {
    formData,
    touched,
    errors,
    updateField,
    updateFields,
    setErrors,
    resetForm
  };
};
```

## Field Components

### Text Input
```jsx
const WizardTextField = ({ name, label, value, onChange, error }) => (
  <div className="form-field">
    <label htmlFor={name}>{label}</label>
    <input
      id={name}
      name={name}
      value={value}
      onChange={(e) => onChange(name, e.target.value)}
      className={error ? 'error' : ''}
    />
    {error && <span className="error-message">{error}</span>}
  </div>
);
```

### Select Field
```jsx
const WizardSelectField = ({ name, label, options, value, onChange, error }) => (
  <div className="form-field">
    <label htmlFor={name}>{label}</label>
    <select
      id={name}
      name={name}
      value={value}
      onChange={(e) => onChange(name, e.target.value)}
      className={error ? 'error' : ''}
    >
      {options.map(opt => (
        <option key={opt.value} value={opt.value}>
          {opt.label}
        </option>
      ))}
    </select>
    {error && <span className="error-message">{error}</span>}
  </div>
);
```

## Form Submission

### Final Submit
```javascript
const handleFinalSubmit = async () => {
  try {
    setIsSubmitting(true);
    const response = await api.submitForm(formData);
    onSuccess(response);
  } catch (error) {
    setErrors({ _form: error.message });
  } finally {
    setIsSubmitting(false);
  }
};
```

### Auto-Save
```javascript
const useAutoSave = (data, delay = 2000) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      localStorage.setItem('wizard-draft', JSON.stringify(data));
    }, delay);
    
    return () => clearTimeout(timer);
  }, [data, delay]);
};
```

## Best Practices
- Validate on blur
- Show errors after touch
- Persist form data
- Handle submission errors
- Provide clear feedback
- Support keyboard navigation

## Implementation
See HyperUI form components for details.
