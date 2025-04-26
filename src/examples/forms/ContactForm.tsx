import React from 'react';
import { Form } from '../components/forms/Form/Form';
import { FieldWrapper } from '../components/forms/Field/FieldWrapper';
import { Input } from '../components/forms/Input/Input';
import { Textarea } from '../components/forms/Textarea/Textarea';

export const ContactForm: React.FC = () => {
  const handleSubmit = async (data: any) => {
    console.log('Contact:', data);
  };
  
  return (
    <Form onSubmit={handleSubmit}>
      <FieldWrapper name="name" label="Name" required>
        <Input name="name" />
      </FieldWrapper>
      <FieldWrapper name="email" label="Email" required>
        <Input type="email" name="email" />
      </FieldWrapper>
      <FieldWrapper name="message" label="Message" required>
        <Textarea name="message" rows={5} />
      </FieldWrapper>
      <button type="submit">Send</button>
    </Form>
  );
};
