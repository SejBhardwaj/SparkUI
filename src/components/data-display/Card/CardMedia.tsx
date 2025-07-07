import React from 'react';
export interface CardMediaProps {
  src: string;
  alt: string;
  height?: number;
}
export const CardMedia: React.FC<CardMediaProps> = ({ src, alt, height = 200 }) => (
  <img src={src} alt={alt} className="w-full rounded-t-lg object-cover" style={{height: `${height}px`}} />
);
