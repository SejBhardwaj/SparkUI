# Alert Component

## Overview
Feedback component for displaying important messages to users with different severity levels.

## Usage
```tsx
<Alert variant="success" title="Success!" onClose={handleClose}>
  Your changes have been saved successfully.
</Alert>
```

## Props
- variant: 'success' | 'error' | 'warning' | 'info'
- title: Optional alert title
- onClose: Callback for close button
- children: Alert message content

## Variants
- Success: Positive confirmation messages
- Error: Error and failure messages
- Warning: Warning and caution messages
- Info: Informational messages

## Alert with Actions
```tsx
<AlertWithActions
  variant="warning"
  title="Unsaved Changes"
  actions={[
    { label: 'Save', onClick: handleSave },
    { label: 'Discard', onClick: handleDiscard, variant: 'secondary' }
  ]}
>
  You have unsaved changes.
</AlertWithActions>
```

## Features
- Multiple severity variants
- Optional title
- Dismissible with close button
- Action buttons support
- Icon support
- Accessible with ARIA role
