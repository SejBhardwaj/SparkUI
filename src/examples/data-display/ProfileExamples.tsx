import React from 'react';
import { UserProfile } from '../../components/data-display/UserProfile/UserProfile';
import { ProfileCard } from '../../components/data-display/UserProfile/ProfileCard';
import { ProfileHeader } from '../../components/data-display/UserProfile/ProfileHeader';
import { ProfileInfo } from '../../components/data-display/UserProfile/ProfileInfo';

export const ProfileExamples: React.FC = () => {
  const profileStats = [
    { label: 'Posts', value: 142 },
    { label: 'Followers', value: '2.5K' },
    { label: 'Following', value: 389 },
  ];
  
  const profileInfoItems = [
    { label: 'Email', value: 'john@example.com', link: 'mailto:john@example.com' },
    { label: 'Location', value: 'San Francisco, CA' },
    { label: 'Joined', value: 'January 2024' },
    { label: 'Website', value: 'johndoe.com', link: 'https://johndoe.com' },
  ];
  
  return (
    <div className="examples-container p-6 space-y-8">
      <h1 className="text-2xl font-bold mb-6">User Profile Examples</h1>
      
      <section>
        <h2 className="text-xl font-semibold mb-4">Basic Profile</h2>
        <UserProfile
          name="John Doe"
          email="john@example.com"
          role="Software Engineer"
          bio="Passionate about building great user experiences"
        >
          <button className="px-4 py-2 bg-blue-600 text-white rounded">
            Edit Profile
          </button>
        </UserProfile>
      </section>
      
      <section>
        <h2 className="text-xl font-semibold mb-4">Profile Card</h2>
        <ProfileCard
          name="John Doe"
          title="Software Engineer at Tech Co"
          stats={profileStats}
          actions={
            <div className="flex gap-2">
              <button className="flex-1 px-4 py-2 bg-blue-600 text-white rounded">
                Follow
              </button>
              <button className="flex-1 px-4 py-2 border rounded">
                Message
              </button>
            </div>
          }
        />
      </section>
      
      <section>
        <h2 className="text-xl font-semibold mb-4">Profile Header</h2>
        <ProfileHeader
          name="John Doe"
          username="johndoe"
          verified
          following={false}
          onFollowClick={() => console.log('Follow clicked')}
        />
      </section>
      
      <section>
        <h2 className="text-xl font-semibold mb-4">Profile Information</h2>
        <ProfileInfo items={profileInfoItems} />
      </section>
    </div>
  );
};
