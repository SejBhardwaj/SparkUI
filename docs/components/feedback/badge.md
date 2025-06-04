# Badge Component

## Overview
Small status indicators and labels for displaying counts, statuses, and notifications.

## Usage
```tsx
<Badge variant="success">New</Badge>
<CountBadge count={5} max={99} />
<StatusBadge status="online" />
<DotBadge variant="error" position="top-right" />
```

## Badge Props
- variant: 'default' | 'success' | 'warning' | 'error' | 'info'
- size: 'sm' | 'md' | 'lg'

## Variants
- Default Badge: Basic text badge
- Dot Badge: Small dot indicator
- Count Badge: Numerical count with max limit
- Status Badge: User status indicator

## Label Component
Form labels with required/optional indicators.

```tsx
<Label htmlFor="email" required>Email</Label>
<Label htmlFor="phone" optional>Phone</Label>
```

## Features
- Multiple badge variants
- Count badges with overflow
- Status indicators
- Dot badges for notifications
- Accessible with ARIA labels
