# NamelessUI Components

## Overview
NamelessUI provides unstyled, accessible UI components that you can style however you want.

## Component Types
- Headless components
- Accessible primitives
- Unstyled base components
- Behavior-only components

## Features
- Completely unstyled
- Full accessibility
- Keyboard navigation
- Screen reader support
- Bring your own styles
- Framework agnostic

## Usage
Components are located in `NamelessUI-master/`

## Philosophy

NamelessUI provides the behavior and accessibility, you provide the styles:
- No CSS included
- Full control over appearance
- Accessible by default
- Composable primitives

## Example

```jsx
import { Dialog } from '@namelessui/react';

<Dialog>
  <Dialog.Trigger className="your-button-class">
    Open
  </Dialog.Trigger>
  <Dialog.Content className="your-modal-class">
    Your content
  </Dialog.Content>
</Dialog>
```
