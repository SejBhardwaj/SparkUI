import { validationRules } from './rules';

describe('Validation Rules', () => {
  it('validates required fields', () => {
    expect(validationRules.required('')).toBe('This field is required');
    expect(validationRules.required('value')).toBe(true);
  });
  
  it('validates email format', () => {
    expect(validationRules.email('invalid')).toBe('Invalid email');
    expect(validationRules.email('test@example.com')).toBe(true);
  });
  
  it('validates min length', () => {
    const rule = validationRules.minLength(5);
    expect(rule('abc')).toBe('Min 5 characters');
    expect(rule('abcdef')).toBe(true);
  });
});
