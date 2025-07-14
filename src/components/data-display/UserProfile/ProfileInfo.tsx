import React from 'react';

export interface ProfileInfoItem {
  icon?: React.ReactNode;
  label: string;
  value: string;
  link?: string;
}

export interface ProfileInfoProps {
  items: ProfileInfoItem[];
  layout?: 'vertical' | 'horizontal';
}

export const ProfileInfo: React.FC<ProfileInfoProps> = ({ 
  items, 
  layout = 'vertical' 
}) => {
  const layoutClasses = layout === 'horizontal' 
    ? 'flex flex-wrap gap-4' 
    : 'space-y-3';
  
  return (
    <div className={`profile-info ${layoutClasses}`}>
      {items.map((item, index) => (
        <div key={index} className="info-item flex items-center gap-2">
          {item.icon && <span className="info-icon text-gray-500">{item.icon}</span>}
          <div>
            <span className="info-label text-sm text-gray-600">{item.label}: </span>
            {item.link ? (
              <a href={item.link} className="info-value text-blue-600 hover:underline">
                {item.value}
              </a>
            ) : (
              <span className="info-value font-medium">{item.value}</span>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};
