# Menu Component

## Overview
Flexible menu component with dropdown, context menu, and keyboard navigation.

## Usage
```tsx
<Menu trigger="Options">
  <MenuItem icon={<EditIcon />} onClick={handleEdit}>Edit</MenuItem>
  <MenuItem icon={<DeleteIcon />} onClick={handleDelete}>Delete</MenuItem>
  <MenuDivider />
  <SubMenu title="More">
    <MenuItem>Option 1</MenuItem>
    <MenuItem>Option 2</MenuItem>
  </SubMenu>
</Menu>
```

## Context Menu
```tsx
<ContextMenu menu={<MenuItem>Copy</MenuItem>}>
  <div>Right-click me</div>
</ContextMenu>
```

## Features
- Dropdown menus
- Context menus (right-click)
- Nested submenus
- Keyboard navigation
- Menu dividers and groups
- Icon support
- Full ARIA support
