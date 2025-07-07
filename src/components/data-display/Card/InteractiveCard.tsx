import React from 'react';
export interface InteractiveCardProps {
  children: React.ReactNode;
  onClick?: () => void;
}
export const InteractiveCard: React.FC<InteractiveCardProps> = ({ children, onClick }) => (
  <div onClick={onClick} className="card bg-white rounded-lg p-6 cursor-pointer hover:shadow-lg transition">
    {children}
  </div>
);
