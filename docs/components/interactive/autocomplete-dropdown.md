# Autocomplete Dropdown

## Overview
Dropdown component for autocomplete suggestions from Shadcraft.

## Features
- Virtualized list for performance
- Highlighting matched text
- Group suggestions
- Custom rendering
- Positioning logic

## Usage
```jsx
<AutocompleteDropdown
  suggestions={filteredOptions}
  onSelect={handleSelect}
  highlightQuery={query}
/>
```

## Props
- `suggestions`: Filtered options
- `onSelect`: Selection callback
- `highlightQuery`: Query to highlight
- `maxHeight`: Maximum dropdown height
- `renderOption`: Custom option renderer

## Styling
See Shadcraft UI components for styling patterns.
