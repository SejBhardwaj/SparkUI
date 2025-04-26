import React from 'react';
import { Form } from '../components/forms/Form/Form';
import { FormGrid } from '../components/forms/Layout/FormGrid';
import { FieldWrapper } from '../components/forms/Field/FieldWrapper';
import { Input } from '../components/forms/Input/Input';

export const ProfileForm: React.FC = () => {
  const handleSubmit = async (data: any) => {
    console.log('Profile:', data);
  };
  
  return (
    <Form onSubmit={handleSubmit}>
      <FormGrid columns={2}>
        <FieldWrapper name="firstName" label="First Name">
          <Input name="firstName" />
        </FieldWrapper>
        <FieldWrapper name="lastName" label="Last Name">
          <Input name="lastName" />
        </FieldWrapper>
      </FormGrid>
      <FieldWrapper name="bio" label="Bio">
        <Input name="bio" />
      </FieldWrapper>
      <button type="submit">Save</button>
    </Form>
  );
};
