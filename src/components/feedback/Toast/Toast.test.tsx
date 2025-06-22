import { render, screen, waitFor } from '@testing-library/react';
import { Toast } from './Toast';
import { ToastProvider, useToastContext } from './ToastProvider';
import { useToast } from './useToast';

describe('Toast', () => {
  it('renders toast with message', () => {
    render(<Toast id="1" message="Test message" />);
    expect(screen.getByText('Test message')).toBeInTheDocument();
  });
  
  it('renders with title', () => {
    render(<Toast id="1" title="Title" message="Message" />);
    expect(screen.getByText('Title')).toBeInTheDocument();
  });
  
  it('auto-dismisses after duration', async () => {
    const onClose = jest.fn();
    render(<Toast id="1" message="Test" duration={100} onClose={onClose} />);
    
    await waitFor(() => {
      expect(onClose).toHaveBeenCalledWith('1');
    }, { timeout: 200 });
  });
});

describe('ToastProvider', () => {
  const TestComponent = () => {
    const toast = useToast();
    return (
      <button onClick={() => toast.success('Success!')}>
        Show Toast
      </button>
    );
  };
  
  it('provides toast context', () => {
    render(
      <ToastProvider>
        <TestComponent />
      </ToastProvider>
    );
    expect(screen.getByText('Show Toast')).toBeInTheDocument();
  });
});
