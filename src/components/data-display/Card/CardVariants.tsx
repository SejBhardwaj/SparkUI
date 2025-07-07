import React from 'react';
export const ElevatedCard: React.FC<{children: React.ReactNode}> = ({ children }) => (
  <div className="bg-white shadow-lg rounded-lg p-6">{children}</div>
);
export const OutlinedCard: React.FC<{children: React.ReactNode}> = ({ children }) => (
  <div className="bg-white border rounded-lg p-6">{children}</div>
);
export const FilledCard: React.FC<{children: React.ReactNode}> = ({ children }) => (
  <div className="bg-gray-100 rounded-lg p-6">{children}</div>
);
