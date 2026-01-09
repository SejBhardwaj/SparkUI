# Migration Guide

## Migrating to v1.0.0

### Breaking Changes

None - this is the initial stable release.

### New Features

- 500+ components
- Full TypeScript support
- Tree-shakeable exports
- Performance optimizations
- Comprehensive documentation

### Upgrading

```bash
npm install ui-components-project@1.0.0
```

### Import Changes

Old (if migrating from beta):
```tsx
import Button from 'ui-components/Button';
```

New:
```tsx
import { Button } from 'ui-components-project';
```

### Component API Changes

All component APIs are stable and follow consistent patterns.
