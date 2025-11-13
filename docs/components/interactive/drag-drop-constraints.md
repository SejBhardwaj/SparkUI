# Drag Constraints Utilities

## Overview
Utilities for constraining drag and drop behavior from TailAdmin.

## Features
- Axis constraints (horizontal/vertical)
- Boundary constraints
- Grid snapping
- Custom constraints
- Collision detection

## Usage
```jsx
<Draggable constraints={{ axis: 'x', bounds: 'parent' }}>
  <div>Drag me</div>
</Draggable>
```

## Constraint Types
- `axis`: 'x' | 'y' | 'both'
- `bounds`: Element | 'parent' | { top, left, right, bottom }
- `grid`: [x, y] for snapping
- `custom`: Custom constraint function

## Examples
See TailAdmin components for implementation details.
