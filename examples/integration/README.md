# Framework Integration Examples

## Next.js

```tsx
// pages/_app.tsx
import { ThemeProvider } from 'ui-components-project';

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
```

## Remix

```tsx
// app/root.tsx
import { ThemeProvider } from 'ui-components-project';

export default function App() {
  return (
    <ThemeProvider>
      <Outlet />
    </ThemeProvider>
  );
}
```

## Vite

```tsx
// main.tsx
import { ThemeProvider } from 'ui-components-project';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <ThemeProvider>
    <App />
  </ThemeProvider>
);
```
