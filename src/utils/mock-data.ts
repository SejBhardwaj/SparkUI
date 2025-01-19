/**
 * Mock Data Generators
 * Utilities for generating test data
 */

export const generateId = (): string => {
  return Math.random().toString(36).substring(2, 15);
};

export const generateEmail = (name: string = 'user'): string => {
  return `${name.toLowerCase()}@example.com`;
};

export const generateUser = (overrides = {}) => ({
  id: generateId(),
  name: 'John Doe',
  email: generateEmail('john.doe'),
  avatar: 'https://i.pravatar.cc/150',
  createdAt: new Date().toISOString(),
  ...overrides,
});

export const generateUsers = (count: number) => {
  return Array.from({ length: count }, (_, i) => generateUser({
    name: `User ${i + 1}`,
    email: generateEmail(`user${i + 1}`),
  }));
};

export const generatePost = (overrides = {}) => ({
  id: generateId(),
  title: 'Sample Post Title',
  content: 'This is sample post content.',
  author: generateUser(),
  createdAt: new Date().toISOString(),
  ...overrides,
});

export const generatePosts = (count: number) => {
  return Array.from({ length: count }, (_, i) => generatePost({
    title: `Post ${i + 1}`,
  }));
};
