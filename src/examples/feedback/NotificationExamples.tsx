import React, { useState } from 'react';
import { ToastProvider, useToast } from '../../components/feedback/Toast/ToastProvider';
import { Snackbar } from '../../components/feedback/Snackbar/Snackbar';
import { SnackbarWithActions } from '../../components/feedback/Snackbar/SnackbarActions';

const ToastExamples: React.FC = () => {
  const toast = useToast();
  
  return (
    <div className="examples-section">
      <h3>Toast Notifications</h3>
      <div className="example-row">
        <button onClick={() => toast.success('Success!', 'Operation completed')}>
          Success Toast
        </button>
        <button onClick={() => toast.error('Error!', 'Something went wrong')}>
          Error Toast
        </button>
        <button onClick={() => toast.warning('Warning!', 'Please be careful')}>
          Warning Toast
        </button>
        <button onClick={() => toast.info('Info', 'New updates available')}>
          Info Toast
        </button>
      </div>
    </div>
  );
};

const SnackbarExamples: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [openWithAction, setOpenWithAction] = useState(false);
  
  return (
    <div className="examples-section">
      <h3>Snackbar Notifications</h3>
      <div className="example-row">
        <button onClick={() => setOpen(true)}>
          Show Snackbar
        </button>
        <button onClick={() => setOpenWithAction(true)}>
          Show Snackbar with Action
        </button>
      </div>
      
      <Snackbar
        open={open}
        message="This is a snackbar message"
        onClose={() => setOpen(false)}
      />
      
      <SnackbarWithActions
        open={openWithAction}
        message="Item deleted"
        action={{ label: 'Undo', onClick: () => console.log('Undo clicked') }}
        onClose={() => setOpenWithAction(false)}
      />
    </div>
  );
};

export const NotificationExamples: React.FC = () => {
  return (
    <ToastProvider>
      <div className="examples-container">
        <h2>Notification Examples</h2>
        <ToastExamples />
        <SnackbarExamples />
      </div>
    </ToastProvider>
  );
};
