import { render, screen, fireEvent } from '@testing-library/react';
import { Radio } from './Radio';
import { RadioGroup } from './RadioGroup';

describe('Radio', () => {
  it('renders with label', () => {
    render(<Radio label="Option A" />);
    expect(screen.getByLabelText('Option A')).toBeInTheDocument();
  });
  
  it('handles selection', () => {
    const onChange = jest.fn();
    render(<Radio onChange={onChange} />);
    fireEvent.click(screen.getByRole('radio'));
    expect(onChange).toHaveBeenCalled();
  });
});
