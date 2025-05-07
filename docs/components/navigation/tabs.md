# Tabs Component

## Overview
Accessible tabs component with keyboard navigation and multiple variants.

## Usage
```tsx
<Tabs defaultTab="tab1">
  <TabList>
    <Tab value="tab1">Tab 1</Tab>
    <Tab value="tab2">Tab 2</Tab>
  </TabList>
  <TabPanel value="tab1">Content 1</TabPanel>
  <TabPanel value="tab2">Content 2</TabPanel>
</Tabs>
```

## Props
- defaultTab: Initial active tab
- onChange: Callback when tab changes

## Variants
- Underline: Border bottom indicator
- Pills: Rounded pill style
- Enclosed: Card-like enclosed tabs

## Features
- Keyboard navigation (Arrow keys)
- Vertical orientation support
- Icon support
- Disabled state
- Full ARIA support
