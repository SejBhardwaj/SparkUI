# Sidebar Component

## Overview
Flexible sidebar navigation with collapsible support and multiple variants.

## Usage
```tsx
<Sidebar variant="fixed" position="left" collapsible>
  <SidebarItem icon={<HomeIcon />} href="/">Home</SidebarItem>
  <SidebarGroup title="Products">
    <SidebarItem href="/products/1">Product 1</SidebarItem>
    <SidebarItem href="/products/2">Product 2</SidebarItem>
  </SidebarGroup>
</Sidebar>
```

## Props
- variant: 'fixed' | 'overlay' | 'push'
- position: 'left' | 'right'
- collapsible: Enable collapse functionality
- defaultCollapsed: Initial collapsed state

## Features
- Multiple variants (fixed, overlay, push)
- Collapsible with animation
- Item groups with nesting
- Icon support
- Active state indication
- Responsive design
