import React from 'react';
import { Form } from '../components/forms/Form/Form';
import { FieldWrapper } from '../components/forms/Field/FieldWrapper';
import { Input } from '../components/forms/Input/Input';

export const RegistrationForm: React.FC = () => {
  const handleSubmit = async (data: any) => {
    console.log('Register:', data);
  };
  
  return (
    <Form onSubmit={handleSubmit}>
      <FieldWrapper name="username" label="Username" required>
        <Input name="username" />
      </FieldWrapper>
      <FieldWrapper name="email" label="Email" required>
        <Input type="email" name="email" />
      </FieldWrapper>
      <FieldWrapper name="password" label="Password" required>
        <Input type="password" name="password" />
      </FieldWrapper>
      <button type="submit">Register</button>
    </Form>
  );
};
