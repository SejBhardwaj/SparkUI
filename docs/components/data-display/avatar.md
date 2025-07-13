# Avatar Component

## Overview
Avatar components for displaying user profile images, initials, and status indicators.

## Basic Usage
```tsx
<AvatarFallback name="John Doe" size="md" />
```

## Avatar with Image
```tsx
<Avatar src="/path/to/image.jpg" alt="John Doe" />
```

## Avatar Group
```tsx
<AvatarGroup max={3} spacing="normal">
  <AvatarFallback name="User 1" />
  <AvatarFallback name="User 2" />
  <AvatarFallback name="User 3" />
  <AvatarFallback name="User 4" />
</AvatarGroup>
```

## Avatar with Status Badge
```tsx
<div className="relative">
  <AvatarFallback name="John Doe" />
  <AvatarBadge status="online" position="bottom-right" />
</div>
```

## Props

### AvatarFallback
- name: string (required) - User's name for generating initials
- size: 'sm' | 'md' | 'lg' | 'xl' - Avatar size
- bgColor: string - Custom background color

### AvatarGroup
- max: number - Maximum avatars to display
- spacing: 'tight' | 'normal' | 'loose' - Space between avatars

### AvatarBadge
- status: 'online' | 'offline' | 'away' | 'busy'
- position: 'top-right' | 'bottom-right' | 'top-left' | 'bottom-left'
- showBorder: boolean - Show white border around badge

## Features
- Automatic initial generation
- Color generation from name
- Status indicators
- Group display with overflow count
- Multiple size variants
- Accessible with ARIA labels
