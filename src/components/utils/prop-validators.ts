/**
 * Prop Validation Utilities
 * 
 * Utilities for validating component props at runtime.
 */

export type Validator<T> = (value: T, propName: string) => string | null;

/**
 * Validate required prop
 */
export const required = <T>(value: T, propName: string): string | null => {
  if (value === undefined || value === null) {
    return `Prop "${propName}" is required`;
  }
  return null;
};

/**
 * Validate prop is one of allowed values
 */
export const oneOf = <T>(allowedValues: T[]) => {
  return (value: T, propName: string): string | null => {
    if (!allowedValues.includes(value)) {
      return `Prop "${propName}" must be one of: ${allowedValues.join(', ')}`;
    }
    return null;
  };
};

/**
 * Validate prop type
 */
export const typeOf = (expectedType: string) => {
  return (value: any, propName: string): string | null => {
    const actualType = typeof value;
    if (actualType !== expectedType) {
      return `Prop "${propName}" must be of type ${expectedType}, got ${actualType}`;
    }
    return null;
  };
};

/**
 * Combine multiple validators
 */
export const combine = <T>(...validators: Validator<T>[]) => {
  return (value: T, propName: string): string | null => {
    for (const validator of validators) {
      const error = validator(value, propName);
      if (error) return error;
    }
    return null;
  };
};
