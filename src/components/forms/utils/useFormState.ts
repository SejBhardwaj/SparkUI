import { useState } from 'react';

export const useFormState = <T extends Record<string, any>>(initialValues: T) => {
  const [values, setValues] = useState<T>(initialValues);
  const [errors, setErrors] = useState<Partial<Record<keyof T, string>>>({});
  const [touched, setTouched] = useState<Partial<Record<keyof T, boolean>>>({});
  
  const setValue = (name: keyof T, value: any) => {
    setValues(prev => ({ ...prev, [name]: value }));
  };
  
  const setError = (name: keyof T, error: string) => {
    setErrors(prev => ({ ...prev, [name]: error }));
  };
  
  const setTouched = (name: keyof T) => {
    setTouched(prev => ({ ...prev, [name]: true }));
  };
  
  const reset = () => {
    setValues(initialValues);
    setErrors({});
    setTouched({});
  };
  
  return { values, errors, touched, setValue, setError, setTouched, reset };
};
