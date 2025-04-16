import React, { FormHTMLAttributes } from 'react';

export interface FormProps extends FormHTMLAttributes<HTMLFormElement> {
  onSubmit: (data: any) => void | Promise<void>;
  children: React.ReactNode;
}

export const Form: React.FC<FormProps> = ({ onSubmit, children, ...props }) => {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());
    await onSubmit(data);
  };
  
  return (
    <form onSubmit={handleSubmit} {...props}>
      {children}
    </form>
  );
};
