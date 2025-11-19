# Search Results Display

## Overview
Search results display component from Matdash with rich formatting.

## Features
- Result cards
- Highlighting
- Pagination
- Sorting options
- Empty states
- Loading skeletons

## Usage
```jsx
<SearchResults
  results={searchResults}
  query={query}
  onResultClick={handleClick}
  loading={loading}
/>
```

## Props
- `results`: Array of search results
- `query`: Search query for highlighting
- `onResultClick`: Result click handler
- `loading`: Show loading state
- `emptyMessage`: Custom empty message
- `pageSize`: Results per page

## Result Format
```javascript
{
  id: string,
  title: string,
  description: string,
  url: string,
  metadata: object
}
```

## Implementation
See Matdash dashboard components for details.
