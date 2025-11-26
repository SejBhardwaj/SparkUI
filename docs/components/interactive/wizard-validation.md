# Wizard Validation

## Overview
Validation utilities for wizard forms from Bootstrap.

## Validation Strategies

### Step-by-Step Validation
```javascript
const validateStep = (stepIndex, data) => {
  const validators = {
    0: validatePersonalInfo,
    1: validateAddress,
    2: validatePayment
  };
  
  return validators[stepIndex]?.(data) || { isValid: true };
};
```

### Field-Level Validation
```javascript
const fieldValidators = {
  email: (value) => {
    if (!value) return 'Email is required';
    if (!/\S+@\S+\.\S+/.test(value)) return 'Email is invalid';
    return null;
  },
  phone: (value) => {
    if (!value) return 'Phone is required';
    if (!/^\d{10}$/.test(value)) return 'Phone must be 10 digits';
    return null;
  }
};
```

### Async Validation
```javascript
const validateAsync = async (data) => {
  try {
    const response = await api.validate(data);
    return {
      isValid: response.valid,
      errors: response.errors
    };
  } catch (error) {
    return {
      isValid: false,
      errors: { _form: 'Validation failed' }
    };
  }
};
```

## Validation Hooks

### useValidation
```javascript
const useValidation = (schema) => {
  const [errors, setErrors] = useState({});

  const validate = (data) => {
    const newErrors = {};
    
    Object.keys(schema).forEach(field => {
      const validator = schema[field];
      const error = validator(data[field]);
      if (error) newErrors[field] = error;
    });

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateField = (field, value) => {
    const validator = schema[field];
    if (validator) {
      const error = validator(value);
      setErrors(prev => ({
        ...prev,
        [field]: error
      }));
      return !error;
    }
    return true;
  };

  const clearErrors = () => setErrors({});

  return { errors, validate, validateField, clearErrors };
};
```

## Common Validators
```javascript
const validators = {
  required: (message = 'This field is required') => (value) => {
    return value ? null : message;
  },
  
  minLength: (min, message) => (value) => {
    return value && value.length >= min ? null : message;
  },
  
  maxLength: (max, message) => (value) => {
    return value && value.length <= max ? null : message;
  },
  
  pattern: (regex, message) => (value) => {
    return regex.test(value) ? null : message;
  },
  
  custom: (fn) => (value) => {
    return fn(value);
  }
};
```

## Implementation
See Bootstrap form validation for details.
