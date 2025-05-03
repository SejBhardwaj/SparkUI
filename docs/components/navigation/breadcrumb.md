# Breadcrumb Component

## Overview
Accessible breadcrumb navigation with collapse support for long paths.

## Usage
```tsx
<Breadcrumb separator="/">
  <BreadcrumbItem href="/">Home</BreadcrumbItem>
  <BreadcrumbItem href="/products">Products</BreadcrumbItem>
  <BreadcrumbItem active>Details</BreadcrumbItem>
</Breadcrumb>
```

## Props
- separator: Custom separator (default: '/')
- maxItems: Maximum items before collapse

## Variants
- SlashBreadcrumb: Uses '/' separator
- ChevronBreadcrumb: Uses '›' separator
- DotBreadcrumb: Uses '•' separator
- ArrowBreadcrumb: Uses '→' separator

## Features
- Multiple separator styles
- Collapse for long paths
- Active state indication
- Full ARIA support
