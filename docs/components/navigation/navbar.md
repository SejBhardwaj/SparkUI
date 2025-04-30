# Navbar Component

## Overview
Flexible navigation bar component with multiple variants and responsive support.

## Usage
```tsx
<Navbar variant="fixed" position="top">
  <NavbarItem href="/">Home</NavbarItem>
  <NavbarItem href="/about">About</NavbarItem>
  <NavbarMenu>
    <NavbarItem href="/contact">Contact</NavbarItem>
  </NavbarMenu>
</Navbar>
```

## Props
- variant: 'fixed' | 'sticky' | 'transparent'
- position: 'top' | 'bottom'

## Features
- Multiple variants (fixed, sticky, transparent)
- Responsive menu with hamburger
- Active state support
- Accessible navigation
