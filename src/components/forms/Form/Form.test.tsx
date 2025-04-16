import { render, screen, fireEvent } from '@testing-library/react';
import { Form } from './Form';
import { Input } from '../Input/Input';

describe('Form', () => {
  it('handles form submission', async () => {
    const onSubmit = jest.fn();
    render(
      <Form onSubmit={onSubmit}>
        <Input name="username" />
        <button type="submit">Submit</button>
      </Form>
    );
    
    fireEvent.click(screen.getByText('Submit'));
    expect(onSubmit).toHaveBeenCalled();
  });
});
