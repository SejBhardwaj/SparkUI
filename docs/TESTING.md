# Testing Guide

## Testing Strategy

### Unit Tests

- Test individual components in isolation
- Use Vitest for unit testing
- Aim for 90%+ code coverage

### Integration Tests

- Test component interactions
- Test data flow between components
- Use React Testing Library

### E2E Tests

- Test complete user workflows
- Use Playwright or Cypress
- Cover critical user paths

### Accessibility Tests

- Automated: axe-core, jest-axe
- Manual: keyboard navigation, screen readers
- Color contrast validation

## Running Tests

```bash
# Run all tests
npm test

# Run with coverage
npm run test:coverage

# Run in watch mode
npm run test:watch

# Run E2E tests
npm run test:e2e
```

## Writing Tests

- Follow AAA pattern (Arrange, Act, Assert)
- Use descriptive test names
- Test behavior, not implementation
- Mock external dependencies
