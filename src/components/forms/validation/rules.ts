export const validationRules = {
  required: (value: any) => !!value || 'This field is required',
  email: (value: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) || 'Invalid email',
  minLength: (min: number) => (value: string) => value.length >= min || `Min ${min} characters`,
  maxLength: (max: number) => (value: string) => value.length <= max || `Max ${max} characters`,
  pattern: (regex: RegExp, message: string) => (value: string) => regex.test(value) || message,
};
