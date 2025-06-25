# Toast and Snackbar Components

## Toast Component

### Overview
Temporary notification messages that appear on screen and auto-dismiss.

### Usage
```tsx
import { ToastProvider, useToast } from './Toast';

function App() {
  return (
    <ToastProvider>
      <YourApp />
    </ToastProvider>
  );
}

function YourComponent() {
  const toast = useToast();
  
  const handleClick = () => {
    toast.success('Operation successful!');
  };
  
  return <button onClick={handleClick}>Show Toast</button>;
}
```

### Toast Methods
- `toast.success(message, title?, duration?)`
- `toast.error(message, title?, duration?)`
- `toast.warning(message, title?, duration?)`
- `toast.info(message, title?, duration?)`
- `toast.dismiss(id)` - Dismiss specific toast
- `toast.clear()` - Clear all toasts

### Props
- variant: 'success' | 'error' | 'warning' | 'info'
- title: Optional toast title
- message: Toast message content
- duration: Auto-dismiss duration (default: 5000ms)

## Snackbar Component

### Overview
Brief messages that appear at the bottom of the screen with optional actions.

### Usage
```tsx
<Snackbar
  open={open}
  message="Item deleted"
  action={{ label: 'Undo', onClick: handleUndo }}
  onClose={handleClose}
/>
```

### Props
- open: boolean - Controls visibility
- message: Snackbar message
- action: Optional action button
- autoHideDuration: Auto-hide duration (default: 6000ms)
- position: 'bottom-left' | 'bottom-center' | 'bottom-right'

## Features
- Auto-dismiss with configurable duration
- Multiple positioning options
- Stacking support for multiple toasts
- Action buttons for snackbars
- Smooth enter/exit animations
- Accessible with ARIA attributes
