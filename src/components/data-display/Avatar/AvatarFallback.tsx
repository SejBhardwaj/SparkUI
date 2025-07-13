import React from 'react';

export interface AvatarFallbackProps {
  name: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  bgColor?: string;
}

export const AvatarFallback: React.FC<AvatarFallbackProps> = ({ 
  name, 
  size = 'md',
  bgColor 
}) => {
  const getInitials = (name: string): string => {
    const parts = name.trim().split(' ');
    if (parts.length >= 2) {
      return `${parts[0][0]}${parts[parts.length - 1][0]}`.toUpperCase();
    }
    return name.substring(0, 2).toUpperCase();
  };
  
  const sizeClasses = {
    sm: 'w-8 h-8 text-xs',
    md: 'w-10 h-10 text-sm',
    lg: 'w-12 h-12 text-base',
    xl: 'w-16 h-16 text-lg',
  };
  
  const backgroundColor = bgColor || generateColorFromName(name);
  
  return (
    <div 
      className={`avatar-fallback flex items-center justify-center rounded-full font-semibold text-white ${sizeClasses[size]}`}
      style={{ backgroundColor }}
    >
      {getInitials(name)}
    </div>
  );
};

const generateColorFromName = (name: string): string => {
  const colors = [
    '#3B82F6', '#EF4444', '#10B981', '#F59E0B', '#8B5CF6',
    '#EC4899', '#14B8A6', '#F97316', '#6366F1', '#84CC16'
  ];
  const index = name.charCodeAt(0) % colors.length;
  return colors[index];
};
