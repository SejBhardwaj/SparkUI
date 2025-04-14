export const errorMessages = {
  required: 'This field is required',
  email: 'Please enter a valid email address',
  minLength: (min: number) => `Must be at least ${min} characters`,
  maxLength: (max: number) => `Must be no more than ${max} characters`,
  pattern: 'Invalid format',
  passwordMatch: 'Passwords must match',
  custom: (message: string) => message,
};

export const getErrorMessage = (type: string, params?: any): string => {
  const message = errorMessages[type as keyof typeof errorMessages];
  return typeof message === 'function' ? message(params) : message || 'Validation error';
};
