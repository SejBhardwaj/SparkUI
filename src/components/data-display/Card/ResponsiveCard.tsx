import React from 'react';
export interface ResponsiveCardProps {
  children: React.ReactNode;
}
export const ResponsiveCard: React.FC<ResponsiveCardProps> = ({ children }) => (
  <div className="card bg-white rounded-lg p-4 md:p-6 lg:p-8">{children}</div>
);
