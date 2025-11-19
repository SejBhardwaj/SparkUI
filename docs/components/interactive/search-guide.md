# Search Component Complete Guide

## Overview
Comprehensive guide for implementing search functionality.

## Architecture

### Core Components
1. Search input
2. Results display
3. Filters panel
4. Pagination
5. Sort controls

### State Management
```javascript
const [query, setQuery] = useState('');
const [results, setResults] = useState([]);
const [filters, setFilters] = useState({});
const [sort, setSort] = useState('relevance');
const [page, setPage] = useState(1);
const [loading, setLoading] = useState(false);
```

## Implementation Example

```jsx
const SearchComponent = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [filters, setFilters] = useState({});
  const [loading, setLoading] = useState(false);

  const performSearch = async () => {
    setLoading(true);
    try {
      const data = await searchAPI({
        query,
        filters,
        page,
        sort
      });
      setResults(data.results);
    } catch (error) {
      console.error('Search failed:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (query.length > 2) {
      const timer = setTimeout(performSearch, 300);
      return () => clearTimeout(timer);
    }
  }, [query, filters, page, sort]);

  return (
    <div className="search-container">
      <SearchInput
        value={query}
        onChange={setQuery}
        loading={loading}
      />
      <div className="search-content">
        <SearchFilters
          filters={filters}
          onChange={setFilters}
        />
        <SearchResults
          results={results}
          query={query}
          loading={loading}
        />
      </div>
    </div>
  );
};
```

## Features

### Basic Search
- Text input
- Submit button
- Results display

### Advanced Features
- Autocomplete
- Filters
- Sorting
- Pagination
- Faceted search
- Search history
- Saved searches
- Export results

## Best Practices

### Performance
- Debounce input
- Cache results
- Lazy load results
- Optimize queries

### UX
- Show loading states
- Handle empty results
- Provide suggestions
- Clear error messages

### Accessibility
- Keyboard navigation
- ARIA labels
- Screen reader support
- Focus management

## Search Strategies

### Full-Text Search
```javascript
const fullTextSearch = (query, documents) => {
  return documents.filter(doc =>
    doc.content.toLowerCase().includes(query.toLowerCase())
  );
};
```

### Fuzzy Search
```javascript
const fuzzySearch = (query, documents) => {
  return documents.filter(doc =>
    fuzzyMatch(query, doc.content)
  ).sort((a, b) => b.score - a.score);
};
```

### Faceted Search
```javascript
const facetedSearch = (query, filters, documents) => {
  return documents
    .filter(doc => matchesQuery(doc, query))
    .filter(doc => matchesFilters(doc, filters));
};
```

## Testing
- Unit tests for search logic
- Integration tests for API
- E2E tests for user flows
- Performance tests

## Resources
- HyperUI examples
- Matdash components
- Forklifter filters
- Bootstrap patterns
