import React from 'react';

export interface ProfileCardProps {
  name: string;
  title?: string;
  avatar?: string;
  coverImage?: string;
  stats?: { label: string; value: string | number }[];
  actions?: React.ReactNode;
}

export const ProfileCard: React.FC<ProfileCardProps> = ({
  name,
  title,
  avatar,
  coverImage,
  stats,
  actions
}) => {
  return (
    <div className="profile-card rounded-lg shadow-md overflow-hidden bg-white">
      {coverImage && (
        <div className="cover-image h-32 bg-gradient-to-r from-blue-500 to-purple-600">
          <img src={coverImage} alt="Cover" className="w-full h-full object-cover" />
        </div>
      )}
      <div className="profile-content p-6">
        <div className="flex items-center gap-4">
          {avatar && (
            <img src={avatar} alt={name} className="w-16 h-16 rounded-full border-4 border-white -mt-8" />
          )}
          <div>
            <h3 className="text-lg font-bold">{name}</h3>
            {title && <p className="text-sm text-gray-600">{title}</p>}
          </div>
        </div>
        {stats && stats.length > 0 && (
          <div className="stats-grid grid grid-cols-3 gap-4 mt-4">
            {stats.map((stat, index) => (
              <div key={index} className="stat-item text-center">
                <div className="stat-value text-xl font-bold">{stat.value}</div>
                <div className="stat-label text-xs text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        )}
        {actions && <div className="profile-actions mt-4">{actions}</div>}
      </div>
    </div>
  );
};
