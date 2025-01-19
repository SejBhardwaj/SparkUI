/**
 * Testing Utilities
 * Helper functions for component testing
 */

import { render, RenderOptions } from '@testing-library/react';
import { ReactElement } from 'react';

// Custom render function with providers
export function renderWithProviders(
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>
) {
  return render(ui, { ...options });
}

// Mock data generators
export const mockUser = (overrides = {}) => ({
  id: '1',
  name: 'Test User',
  email: 'test@example.com',
  ...overrides,
});

// Wait utilities
export const waitFor = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

// Event helpers
export const createMockEvent = (overrides = {}) => ({
  preventDefault: jest.fn(),
  stopPropagation: jest.fn(),
  ...overrides,
});

export * from '@testing-library/react';
