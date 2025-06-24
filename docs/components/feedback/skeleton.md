# Skeleton Loader Component

## Overview
Placeholder components that display while content is loading, providing visual feedback about the structure of upcoming content.

## Basic Usage
```tsx
<Skeleton variant="text" width="100%" />
<Skeleton variant="circular" width={40} height={40} />
<Skeleton variant="rectangular" width="100%" height={200} />
```

## Props
- variant: 'text' | 'circular' | 'rectangular'
- width: string | number - Width of skeleton
- height: string | number - Height of skeleton
- animation: 'pulse' | 'wave' | 'none' - Animation type

## Variants

### Text Skeleton
For text content placeholders.
```tsx
<TextSkeleton lines={3} width="100%" />
```

### Circle Skeleton
For avatar and icon placeholders.
```tsx
<CircleSkeleton size={48} />
<AvatarSkeleton size="md" />
```

### Rectangle Skeleton
For image and card placeholders.
```tsx
<RectSkeleton width="100%" height={200} />
```

## Composite Skeletons

### Card Skeleton
Complete card placeholder with image and text.
```tsx
<CardSkeleton />
```

### List Item Skeleton
List item with avatar and text.
```tsx
<ListItemSkeleton />
```

### Table Skeleton
Table placeholder with rows and columns.
```tsx
<TableSkeleton rows={5} columns={4} />
```

## Animation Types

### Pulse (Default)
Gentle pulsing animation.
```tsx
<Skeleton animation="pulse" />
```

### Wave
Wave animation across the skeleton.
```tsx
<Skeleton animation="wave" />
```

### None
No animation (static).
```tsx
<Skeleton animation="none" />
```

## Best Practices

### Match Content Structure
Design skeletons to match the actual content layout.
```tsx
// Good: Matches actual card structure
<CardSkeleton />

// Bad: Generic rectangle that doesn't match
<Skeleton variant="rectangular" />
```

### Use Appropriate Sizes
Match skeleton sizes to actual content.
```tsx
<AvatarSkeleton size="lg" /> // For large avatars
<TextSkeleton lines={3} />   // For 3-line text
```

### Combine Variants
Create complex layouts by combining variants.
```tsx
<div className="profile-skeleton">
  <AvatarSkeleton size="lg" />
  <div>
    <Skeleton variant="text" width="200px" />
    <TextSkeleton lines={2} />
  </div>
</div>
```

## Accessibility
- Uses `aria-busy="true"` to indicate loading state
- Includes `aria-live="polite"` for screen reader updates
- Provides `aria-label="Loading..."` for context

## Examples

### Loading Profile
```tsx
<div className="profile-loading">
  <CircleSkeleton size={80} />
  <Skeleton variant="text" width="200px" />
  <TextSkeleton lines={3} />
</div>
```

### Loading List
```tsx
<div className="list-loading">
  {Array.from({ length: 5 }).map((_, i) => (
    <ListItemSkeleton key={i} />
  ))}
</div>
```

### Loading Grid
```tsx
<div className="grid-loading">
  {Array.from({ length: 6 }).map((_, i) => (
    <CardSkeleton key={i} />
  ))}
</div>
```

## Features
- Multiple shape variants
- Customizable dimensions
- Animation options
- Composite patterns
- Accessible loading states
- Responsive design
