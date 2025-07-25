import React from 'react';
export interface FlipCardProps {
  front: React.ReactNode;
  back: React.ReactNode;
}
export const FlipCard: React.FC<FlipCardProps> = ({ front, back }) => (
  <div className="flip-card">Flip card placeholder</div>
);
