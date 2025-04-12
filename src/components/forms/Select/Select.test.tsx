import { render, screen, fireEvent } from '@testing-library/react';
import { Select } from './Select';

describe('Select', () => {
  const options = [
    { value: '1', label: 'Option 1' },
    { value: '2', label: 'Option 2' },
  ];
  
  it('renders with options', () => {
    render(<Select options={options} />);
    expect(screen.getByRole('combobox')).toBeInTheDocument();
  });
  
  it('handles selection', () => {
    const onChange = jest.fn();
    render(<Select options={options} onChange={onChange} />);
    fireEvent.change(screen.getByRole('combobox'), { target: { value: '1' } });
    expect(onChange).toHaveBeenCalled();
  });
});
