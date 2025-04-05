import { render, screen } from '@testing-library/react';
import { Textarea } from './Textarea';

describe('Textarea', () => {
  it('renders with label', () => {
    render(<Textarea label="Description" />);
    expect(screen.getByLabelText('Description')).toBeInTheDocument();
  });
  
  it('shows character count', () => {
    render(<Textarea value="Hello" maxLength={100} showCharCount />);
    expect(screen.getByText('5/100')).toBeInTheDocument();
  });
});
