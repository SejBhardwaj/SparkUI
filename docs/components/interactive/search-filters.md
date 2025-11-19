# Search Filters Component

## Overview
Advanced search filters from Forklifter for refining results.

## Features
- Multiple filter types
- Filter chips
- Clear all filters
- Filter persistence
- Dynamic filters

## Filter Types

### Category Filter
```jsx
<CategoryFilter
  categories={categories}
  selected={selectedCategories}
  onChange={handleCategoryChange}
/>
```

### Date Range Filter
```jsx
<DateRangeFilter
  startDate={startDate}
  endDate={endDate}
  onChange={handleDateChange}
/>
```

### Price Range Filter
```jsx
<PriceRangeFilter
  min={minPrice}
  max={maxPrice}
  onChange={handlePriceChange}
/>
```

### Custom Filters
```jsx
<CustomFilter
  options={filterOptions}
  selected={selectedFilters}
  onChange={handleFilterChange}
/>
```

## Usage
```jsx
<SearchFilters
  filters={availableFilters}
  activeFilters={activeFilters}
  onFilterChange={handleFilterChange}
  onClearAll={handleClearAll}
/>
```

## Props
- `filters`: Available filter options
- `activeFilters`: Currently active filters
- `onFilterChange`: Filter change handler
- `onClearAll`: Clear all filters handler
- `collapsible`: Allow collapsing filter groups

## Implementation
See Forklifter components for details.
