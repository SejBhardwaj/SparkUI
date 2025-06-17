import { render, screen, fireEvent } from '@testing-library/react';
import { Alert } from './Alert';

describe('Alert', () => {
  it('renders alert with message', () => {
    render(<Alert>This is an alert</Alert>);
    expect(screen.getByText('This is an alert')).toBeInTheDocument();
  });
  
  it('applies variant classes', () => {
    const { container } = render(<Alert variant="success">Success message</Alert>);
    expect(container.querySelector('.alert-success')).toBeInTheDocument();
  });
  
  it('renders with title', () => {
    render(<Alert title="Alert Title">Message</Alert>);
    expect(screen.getByText('Alert Title')).toBeInTheDocument();
  });
  
  it('calls onClose when close button clicked', () => {
    const handleClose = jest.fn();
    render(<Alert onClose={handleClose}>Alert</Alert>);
    fireEvent.click(screen.getByLabelText('Close alert'));
    expect(handleClose).toHaveBeenCalledTimes(1);
  });
  
  it('has proper ARIA role', () => {
    const { container } = render(<Alert>Alert</Alert>);
    expect(container.querySelector('[role="alert"]')).toBeInTheDocument();
  });
});
