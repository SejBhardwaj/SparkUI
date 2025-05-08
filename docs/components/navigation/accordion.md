# Accordion Component

## Overview
Collapsible accordion component with single or multiple expand support.

## Usage
```tsx
<Accordion allowMultiple={false}>
  <AccordionItem id="item1" title="Section 1">
    Content for section 1
  </AccordionItem>
  <AccordionItem id="item2" title="Section 2">
    Content for section 2
  </AccordionItem>
</Accordion>
```

## Props
- allowMultiple: Allow multiple items open (default: false)
- defaultOpen: Array of initially open item IDs

## Features
- Single or multiple expand modes
- Smooth animations
- Custom icons (chevron, plus, arrow)
- Disabled state
- Full ARIA support
