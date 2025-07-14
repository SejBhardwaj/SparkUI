import React from 'react';

export interface UserProfileProps {
  name: string;
  email?: string;
  avatar?: string;
  bio?: string;
  role?: string;
  children?: React.ReactNode;
}

export const UserProfile: React.FC<UserProfileProps> = ({
  name,
  email,
  avatar,
  bio,
  role,
  children
}) => {
  return (
    <div className="user-profile">
      <div className="profile-content">
        {avatar && (
          <img src={avatar} alt={name} className="profile-avatar w-20 h-20 rounded-full" />
        )}
        <div className="profile-details">
          <h3 className="profile-name text-xl font-bold">{name}</h3>
          {role && <p className="profile-role text-sm text-gray-600">{role}</p>}
          {email && <p className="profile-email text-sm text-gray-500">{email}</p>}
          {bio && <p className="profile-bio mt-2 text-gray-700">{bio}</p>}
        </div>
      </div>
      {children && <div className="profile-actions mt-4">{children}</div>}
    </div>
  );
};
