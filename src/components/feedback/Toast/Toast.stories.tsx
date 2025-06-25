import type { Meta, StoryObj } from '@storybook/react';
import { Toast } from './Toast';
import { ToastProvider } from './ToastProvider';
import { useToast } from './useToast';

const meta: Meta<typeof Toast> = {
  title: 'Feedback/Toast',
  component: Toast,
};

export default meta;
type Story = StoryObj<typeof Toast>;

export const Success: Story = {
  args: {
    id: '1',
    variant: 'success',
    title: 'Success',
    message: 'Your changes have been saved.',
  },
};

export const Error: Story = {
  args: {
    id: '2',
    variant: 'error',
    title: 'Error',
    message: 'Something went wrong.',
  },
};

export const Warning: Story = {
  args: {
    id: '3',
    variant: 'warning',
    title: 'Warning',
    message: 'Please review your input.',
  },
};

export const Info: Story = {
  args: {
    id: '4',
    variant: 'info',
    message: 'New updates available.',
  },
};

const ToastDemo = () => {
  const toast = useToast();
  
  return (
    <div style={{ display: 'flex', gap: '1rem' }}>
      <button onClick={() => toast.success('Success message!')}>
        Show Success
      </button>
      <button onClick={() => toast.error('Error message!')}>
        Show Error
      </button>
      <button onClick={() => toast.warning('Warning message!')}>
        Show Warning
      </button>
      <button onClick={() => toast.info('Info message!')}>
        Show Info
      </button>
    </div>
  );
};

export const Interactive: Story = {
  render: () => (
    <ToastProvider>
      <ToastDemo />
    </ToastProvider>
  ),
};
