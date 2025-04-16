import React, { createContext, useContext, useState } from 'react';

interface FormContextValue {
  values: Record<string, any>;
  errors: Record<string, string>;
  setFieldValue: (name: string, value: any) => void;
  setFieldError: (name: string, error: string) => void;
}

const FormContext = createContext<FormContextValue | null>(null);

export const FormProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [values, setValues] = useState<Record<string, any>>({});
  const [errors, setErrors] = useState<Record<string, string>>({});
  
  const setFieldValue = (name: string, value: any) => {
    setValues(prev => ({ ...prev, [name]: value }));
  };
  
  const setFieldError = (name: string, error: string) => {
    setErrors(prev => ({ ...prev, [name]: error }));
  };
  
  return (
    <FormContext.Provider value={{ values, errors, setFieldValue, setFieldError }}>
      {children}
    </FormContext.Provider>
  );
};

export const useFormContext = () => {
  const context = useContext(FormContext);
  if (!context) throw new Error('useFormContext must be used within FormProvider');
  return context;
};
