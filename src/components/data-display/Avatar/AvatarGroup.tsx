import React from 'react';

export interface AvatarGroupProps {
  children: React.ReactNode;
  max?: number;
  spacing?: 'tight' | 'normal' | 'loose';
}

export const AvatarGroup: React.FC<AvatarGroupProps> = ({ 
  children, 
  max = 5,
  spacing = 'normal' 
}) => {
  const spacingClasses = {
    tight: '-space-x-2',
    normal: '-space-x-4',
    loose: '-space-x-1',
  };
  
  const childArray = React.Children.toArray(children);
  const visibleChildren = max ? childArray.slice(0, max) : childArray;
  const remainingCount = childArray.length - visibleChildren.length;
  
  return (
    <div className={`avatar-group flex ${spacingClasses[spacing]}`}>
      {visibleChildren}
      {remainingCount > 0 && (
        <div className="avatar-more flex items-center justify-center w-10 h-10 rounded-full bg-gray-300 text-sm">
          +{remainingCount}
        </div>
      )}
    </div>
  );
};
