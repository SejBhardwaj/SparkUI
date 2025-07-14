import React from 'react';

export interface ProfileHeaderProps {
  name: string;
  username?: string;
  avatar?: string;
  verified?: boolean;
  following?: boolean;
  onFollowClick?: () => void;
}

export const ProfileHeader: React.FC<ProfileHeaderProps> = ({
  name,
  username,
  avatar,
  verified,
  following,
  onFollowClick
}) => {
  return (
    <div className="profile-header flex items-center justify-between p-4 border-b">
      <div className="flex items-center gap-3">
        {avatar && (
          <img src={avatar} alt={name} className="w-12 h-12 rounded-full" />
        )}
        <div>
          <div className="flex items-center gap-2">
            <h3 className="font-bold">{name}</h3>
            {verified && (
              <svg className="w-5 h-5 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
            )}
          </div>
          {username && <p className="text-sm text-gray-600">@{username}</p>}
        </div>
      </div>
      {onFollowClick && (
        <button
          onClick={onFollowClick}
          className={`px-4 py-2 rounded-full font-semibold ${
            following 
              ? 'bg-gray-200 text-gray-800 hover:bg-gray-300' 
              : 'bg-blue-600 text-white hover:bg-blue-700'
          }`}
        >
          {following ? 'Following' : 'Follow'}
        </button>
      )}
    </div>
  );
};
