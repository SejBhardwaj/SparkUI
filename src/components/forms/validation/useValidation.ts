import { useState } from 'react';

export const useValidation = <T extends Record<string, any>>(schema: any) => {
  const [errors, setErrors] = useState<Partial<Record<keyof T, string>>>({});
  
  const validate = (data: T): boolean => {
    try {
      schema.parse(data);
      setErrors({});
      return true;
    } catch (error: any) {
      const newErrors: any = {};
      error.errors?.forEach((err: any) => {
        newErrors[err.path[0]] = err.message;
      });
      setErrors(newErrors);
      return false;
    }
  };
  
  return { errors, validate };
};
