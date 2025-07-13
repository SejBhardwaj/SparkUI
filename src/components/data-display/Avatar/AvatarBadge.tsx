import React from 'react';

export interface AvatarBadgeProps {
  status?: 'online' | 'offline' | 'away' | 'busy';
  position?: 'top-right' | 'bottom-right' | 'top-left' | 'bottom-left';
  showBorder?: boolean;
}

export const AvatarBadge: React.FC<AvatarBadgeProps> = ({ 
  status = 'online',
  position = 'bottom-right',
  showBorder = true 
}) => {
  const statusColors = {
    online: 'bg-green-500',
    offline: 'bg-gray-400',
    away: 'bg-yellow-500',
    busy: 'bg-red-500',
  };
  
  const positionClasses = {
    'top-right': 'top-0 right-0',
    'bottom-right': 'bottom-0 right-0',
    'top-left': 'top-0 left-0',
    'bottom-left': 'bottom-0 left-0',
  };
  
  return (
    <span 
      className={`avatar-badge absolute w-3 h-3 rounded-full ${statusColors[status]} ${positionClasses[position]} ${showBorder ? 'border-2 border-white' : ''}`}
      aria-label={`Status: ${status}`}
    />
  );
};
