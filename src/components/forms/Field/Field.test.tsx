import { render, screen } from '@testing-library/react';
import { FieldWrapper } from './FieldWrapper';
import { Input } from '../Input/Input';

describe('FieldWrapper', () => {
  it('renders label', () => {
    render(
      <FieldWrapper name="test" label="Test Field">
        <Input />
      </FieldWrapper>
    );
    expect(screen.getByText('Test Field')).toBeInTheDocument();
  });
  
  it('displays error', () => {
    render(
      <FieldWrapper name="test" error="Required">
        <Input />
      </FieldWrapper>
    );
    expect(screen.getByText('Required')).toBeInTheDocument();
  });
});
