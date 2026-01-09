# Usage Guide

## Installation

```bash
npm install ui-components-project
```

## Quick Start

```tsx
import { Button, Card, Input } from 'ui-components-project';

function App() {
  return (
    <Card>
      <Input placeholder="Enter text" />
      <Button>Submit</Button>
    </Card>
  );
}
```

## Theming

```tsx
import { ThemeProvider } from 'ui-components-project';

<ThemeProvider theme="dark">
  <App />
</ThemeProvider>
```

## Tree Shaking

All components support tree shaking for optimal bundle size.

```tsx
// Import only what you need
import { Button } from 'ui-components-project/components/Button';
```

## TypeScript

Full TypeScript support with type definitions included.

```tsx
import type { ButtonProps } from 'ui-components-project';
```
