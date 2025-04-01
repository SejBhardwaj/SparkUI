import { render, screen } from '@testing-library/react';
import { Input } from './Input';

describe('Input', () => {
  it('renders with label', () => {
    render(<Input label="Username" />);
    expect(screen.getByLabelText('Username')).toBeInTheDocument();
  });
  
  it('displays error', () => {
    render(<Input error="Invalid" />);
    expect(screen.getByText('Invalid')).toBeInTheDocument();
  });
});
