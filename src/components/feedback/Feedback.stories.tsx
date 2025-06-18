import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button/Button';
import { Alert } from './Alert/Alert';
import { Badge, CountBadge } from './Badge/Badge';
import { ProgressBar } from './Progress/ProgressBar';
import { CircularProgress } from './Progress/ProgressVariants';
import { Spinner } from './Spinner/Spinner';
import { ToastProvider, useToastContext } from './Toast/ToastProvider';
import { useToast } from './Toast/useToast';

const meta: Meta = {
  title: 'Feedback/Overview',
};

export default meta;

export const AllComponents: StoryObj = {
  render: () => (
    <div style={{ padding: '2rem', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      <section>
        <h2>Buttons</h2>
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <Button variant="primary">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
          <Button loading>Loading</Button>
          <Button disabled>Disabled</Button>
        </div>
      </section>
      
      <section>
        <h2>Alerts</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <Alert variant="success" title="Success">Operation completed successfully</Alert>
          <Alert variant="error" title="Error">An error occurred</Alert>
          <Alert variant="warning" title="Warning">Please review your input</Alert>
          <Alert variant="info">This is an informational message</Alert>
        </div>
      </section>
      
      <section>
        <h2>Badges</h2>
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
          <Badge variant="success">Success</Badge>
          <Badge variant="error">Error</Badge>
          <Badge variant="warning">Warning</Badge>
          <Badge variant="info">Info</Badge>
          <CountBadge count={5} />
          <CountBadge count={150} max={99} />
        </div>
      </section>
      
      <section>
        <h2>Progress Indicators</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <ProgressBar value={25} variant="default" showLabel />
          <ProgressBar value={50} variant="success" showLabel />
          <ProgressBar value={75} variant="warning" showLabel />
          <ProgressBar value={100} variant="error" showLabel />
          <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
            <CircularProgress value={60} />
            <Spinner size="sm" />
            <Spinner size="md" />
            <Spinner size="lg" />
          </div>
        </div>
      </section>
    </div>
  ),
};

const ToastDemo = () => {
  const toast = useToast();
  
  return (
    <div style={{ display: 'flex', gap: '1rem' }}>
      <Button onClick={() => toast.success('Success message!')}>Success</Button>
      <Button onClick={() => toast.error('Error message!')}>Error</Button>
      <Button onClick={() => toast.warning('Warning message!')}>Warning</Button>
      <Button onClick={() => toast.info('Info message!')}>Info</Button>
    </div>
  );
};

export const ToastNotifications: StoryObj = {
  render: () => (
    <ToastProvider>
      <div style={{ padding: '2rem' }}>
        <h2>Toast Notifications</h2>
        <p>Click buttons to show toast notifications</p>
        <ToastDemo />
      </div>
    </ToastProvider>
  ),
};
