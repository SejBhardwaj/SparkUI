# Search Input Component

## Overview
Search input component from HyperUI with advanced features.

## Features
- Search icon
- Clear button
- Loading indicator
- Voice search support
- Recent searches

## Usage
```jsx
<SearchInput
  value={query}
  onChange={setQuery}
  onSearch={handleSearch}
  placeholder="Search..."
/>
```

## Props
- `value`: Current search query
- `onChange`: Query change handler
- `onSearch`: Search submit handler
- `placeholder`: Input placeholder
- `autoFocus`: Auto focus on mount
- `showClear`: Show clear button
- `loading`: Show loading state

## Styling
See HyperUI components for styling patterns.
