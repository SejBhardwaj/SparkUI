import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { Button } from './Button/Button';
import { Alert } from './Alert/Alert';
import { Badge } from './Badge/Badge';
import { ProgressBar } from './Progress/ProgressBar';
import { Spinner } from './Spinner/Spinner';
import { ToastProvider, useToastContext } from './Toast/ToastProvider';
import { useToast } from './Toast/useToast';

describe('Feedback Components Integration', () => {
  describe('Button Integration', () => {
    it('shows loading state correctly', () => {
      render(<Button loading>Submit</Button>);
      expect(screen.getByRole('button')).toHaveAttribute('aria-busy', 'true');
    });
    
    it('handles click events', () => {
      const onClick = jest.fn();
      render(<Button onClick={onClick}>Click me</Button>);
      fireEvent.click(screen.getByText('Click me'));
      expect(onClick).toHaveBeenCalled();
    });
  });
  
  describe('Alert Integration', () => {
    it('renders with proper ARIA role', () => {
      render(<Alert variant="error">Error message</Alert>);
      expect(screen.getByRole('alert')).toBeInTheDocument();
    });
    
    it('can be dismissed', () => {
      const onClose = jest.fn();
      render(<Alert onClose={onClose}>Message</Alert>);
      fireEvent.click(screen.getByLabelText('Close alert'));
      expect(onClose).toHaveBeenCalled();
    });
  });
  
  describe('Progress Integration', () => {
    it('shows correct progress value', () => {
      render(<ProgressBar value={75} max={100} />);
      const progressBar = screen.getByRole('progressbar');
      expect(progressBar).toHaveAttribute('aria-valuenow', '75');
    });
  });
  
  describe('Toast Integration', () => {
    const TestComponent = () => {
      const toast = useToast();
      return (
        <button onClick={() => toast.success('Success!')}>
          Show Toast
        </button>
      );
    };
    
    it('shows toast notification', async () => {
      render(
        <ToastProvider>
          <TestComponent />
        </ToastProvider>
      );
      
      fireEvent.click(screen.getByText('Show Toast'));
      await waitFor(() => {
        expect(screen.getByText('Success!')).toBeInTheDocument();
      });
    });
  });
  
  describe('Accessibility', () => {
    it('all interactive elements are keyboard accessible', () => {
      render(
        <div>
          <Button>Button</Button>
          <Alert onClose={() => {}}>Alert</Alert>
        </div>
      );
      
      const button = screen.getByText('Button');
      const closeButton = screen.getByLabelText('Close alert');
      
      expect(button).toHaveAttribute('type', 'button');
      expect(closeButton).toHaveAttribute('type', 'button');
    });
  });
});
