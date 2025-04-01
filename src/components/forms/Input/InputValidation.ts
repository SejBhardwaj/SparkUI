export type ValidationRule = {
  required?: boolean;
  minLength?: number;
  maxLength?: number;
  pattern?: RegExp;
};

export const validateInput = (value: string, rules: ValidationRule): string | null => {
  if (rules.required && !value.trim()) return 'This field is required';
  if (rules.minLength && value.length < rules.minLength) return `Min ${rules.minLength} chars`;
  if (rules.maxLength && value.length > rules.maxLength) return `Max ${rules.maxLength} chars`;
  if (rules.pattern && !rules.pattern.test(value)) return 'Invalid format';
  return null;
};
