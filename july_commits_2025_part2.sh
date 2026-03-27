#!/bin/bash

# July 2025 Commit Script - Part 2
# Days 11-21 (45 commits)
# Phase 4 Month 1: Data Display Components

echo "Starting July 2025 commits - Part 2 (Days 11-21)..."

# Create necessary directories
mkdir -p src/components/data-display/Avatar
mkdir -p src/components/data-display/UserProfile
mkdir -p src/components/data-display/Statistics
mkdir -p src/components/data-display/Charts
mkdir -p src/components/data-display/utils
mkdir -p src/components/data-display/DataGrid
mkdir -p src/components/data-display/Timeline
mkdir -p src/examples/data-display
mkdir -p docs/components/data-display

# =============================================================================
# Week 3: July 14-20, 2025
# Working Days: July 14, 15, 16, 18, 19, 20 (6 days)
# =============================================================================

# DAY 11 - Monday, July 14, 2025 (5 commits)
echo "Day 11: July 14, 2025 - Avatar enhancements"

# Commit 1
cat > src/components/data-display/Avatar/AvatarGroup.tsx << 'EOF'
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
EOF
git add src/components/data-display/Avatar/AvatarGroup.tsx
GIT_AUTHOR_DATE="2025-07-14T00:11:00" GIT_COMMITTER_DATE="2025-07-14T00:11:00" git commit -m "feat: create avatar group component"

# Commit 2
cat > src/components/data-display/Avatar/AvatarBadge.tsx << 'EOF'
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
EOF
git add src/components/data-display/Avatar/AvatarBadge.tsx
GIT_AUTHOR_DATE="2025-07-14T00:39:00" GIT_COMMITTER_DATE="2025-07-14T00:39:00" git commit -m "feat: implement avatar with status badge"

# Commit 3
cat > src/components/data-display/Avatar/AvatarFallback.tsx << 'EOF'
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
EOF
git add src/components/data-display/Avatar/AvatarFallback.tsx
GIT_AUTHOR_DATE="2025-07-14T01:08:00" GIT_COMMITTER_DATE="2025-07-14T01:08:00" git commit -m "feat: add avatar fallback with initials"

# Commit 4
cat > src/components/data-display/Avatar/Avatar.test.tsx << 'EOF'
import { render, screen } from '@testing-library/react';
import { AvatarFallback } from './AvatarFallback';
import { AvatarGroup } from './AvatarGroup';
import { AvatarBadge } from './AvatarBadge';

describe('Avatar Components', () => {
  describe('AvatarFallback', () => {
    it('renders initials correctly', () => {
      render(<AvatarFallback name="John Doe" />);
      expect(screen.getByText('JD')).toBeInTheDocument();
    });
    
    it('handles single name', () => {
      render(<AvatarFallback name="John" />);
      expect(screen.getByText('JO')).toBeInTheDocument();
    });
    
    it('applies size classes', () => {
      const { container } = render(<AvatarFallback name="John Doe" size="lg" />);
      expect(container.querySelector('.w-12')).toBeInTheDocument();
    });
  });
  
  describe('AvatarGroup', () => {
    it('renders multiple avatars', () => {
      render(
        <AvatarGroup>
          <AvatarFallback name="John Doe" />
          <AvatarFallback name="Jane Smith" />
        </AvatarGroup>
      );
      expect(screen.getByText('JD')).toBeInTheDocument();
      expect(screen.getByText('JS')).toBeInTheDocument();
    });
    
    it('shows remaining count when max is exceeded', () => {
      render(
        <AvatarGroup max={2}>
          <AvatarFallback name="User 1" />
          <AvatarFallback name="User 2" />
          <AvatarFallback name="User 3" />
          <AvatarFallback name="User 4" />
        </AvatarGroup>
      );
      expect(screen.getByText('+2')).toBeInTheDocument();
    });
  });
  
  describe('AvatarBadge', () => {
    it('renders with correct status color', () => {
      const { container } = render(<AvatarBadge status="online" />);
      expect(container.querySelector('.bg-green-500')).toBeInTheDocument();
    });
  });
});
EOF
git add src/components/data-display/Avatar/Avatar.test.tsx
GIT_AUTHOR_DATE="2025-07-14T01:36:00" GIT_COMMITTER_DATE="2025-07-14T01:36:00" git commit -m "test: add avatar component tests"

# Commit 5
cat > docs/components/data-display/avatar.md << 'EOF'
# Avatar Component

## Overview
Avatar components for displaying user profile images, initials, and status indicators.

## Basic Usage
```tsx
<AvatarFallback name="John Doe" size="md" />
```

## Avatar with Image
```tsx
<Avatar src="/path/to/image.jpg" alt="John Doe" />
```

## Avatar Group
```tsx
<AvatarGroup max={3} spacing="normal">
  <AvatarFallback name="User 1" />
  <AvatarFallback name="User 2" />
  <AvatarFallback name="User 3" />
  <AvatarFallback name="User 4" />
</AvatarGroup>
```

## Avatar with Status Badge
```tsx
<div className="relative">
  <AvatarFallback name="John Doe" />
  <AvatarBadge status="online" position="bottom-right" />
</div>
```

## Props

### AvatarFallback
- name: string (required) - User's name for generating initials
- size: 'sm' | 'md' | 'lg' | 'xl' - Avatar size
- bgColor: string - Custom background color

### AvatarGroup
- max: number - Maximum avatars to display
- spacing: 'tight' | 'normal' | 'loose' - Space between avatars

### AvatarBadge
- status: 'online' | 'offline' | 'away' | 'busy'
- position: 'top-right' | 'bottom-right' | 'top-left' | 'bottom-left'
- showBorder: boolean - Show white border around badge

## Features
- Automatic initial generation
- Color generation from name
- Status indicators
- Group display with overflow count
- Multiple size variants
- Accessible with ARIA labels
EOF
git add docs/components/data-display/avatar.md
GIT_AUTHOR_DATE="2025-07-14T01:54:00" GIT_COMMITTER_DATE="2025-07-14T01:54:00" git commit -m "docs: document avatar component API"

# DAY 12 - Tuesday, July 15, 2025 (6 commits)
echo "Day 12: July 15, 2025 - User profile components"

# Commit 1
cat > src/components/data-display/UserProfile/UserProfile.tsx << 'EOF'
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
EOF
git add src/components/data-display/UserProfile/UserProfile.tsx
GIT_AUTHOR_DATE="2025-07-15T00:09:00" GIT_COMMITTER_DATE="2025-07-15T00:09:00" git commit -m "feat: create user profile component"

# Commit 2
cat > src/components/data-display/UserProfile/ProfileCard.tsx << 'EOF'
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
EOF
git add src/components/data-display/UserProfile/ProfileCard.tsx
GIT_AUTHOR_DATE="2025-07-15T00:34:00" GIT_COMMITTER_DATE="2025-07-15T00:34:00" git commit -m "feat: implement profile card component"

# Commit 3
cat > src/components/data-display/UserProfile/ProfileHeader.tsx << 'EOF'
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
EOF
git add src/components/data-display/UserProfile/ProfileHeader.tsx
GIT_AUTHOR_DATE="2025-07-15T00:58:00" GIT_COMMITTER_DATE="2025-07-15T00:58:00" git commit -m "feat: create profile header with avatar"

# Commit 4
cat > src/components/data-display/UserProfile/ProfileInfo.tsx << 'EOF'
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
EOF
git add src/components/data-display/UserProfile/ProfileInfo.tsx
GIT_AUTHOR_DATE="2025-07-15T01:24:00" GIT_COMMITTER_DATE="2025-07-15T01:24:00" git commit -m "feat: implement profile information display"

# Commit 5
cat > src/components/data-display/Avatar/Avatar.stories.tsx << 'EOF'
import type { Meta, StoryObj } from '@storybook/react';
import { AvatarFallback } from './AvatarFallback';
import { AvatarGroup } from './AvatarGroup';
import { AvatarBadge } from './AvatarBadge';

const meta: Meta<typeof AvatarFallback> = {
  title: 'Data Display/Avatar',
  component: AvatarFallback,
};

export default meta;
type Story = StoryObj<typeof AvatarFallback>;

export const Basic: Story = {
  args: {
    name: 'John Doe',
    size: 'md',
  },
};

export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <AvatarFallback name="John Doe" size="sm" />
      <AvatarFallback name="John Doe" size="md" />
      <AvatarFallback name="John Doe" size="lg" />
      <AvatarFallback name="John Doe" size="xl" />
    </div>
  ),
};

export const WithBadge: Story = {
  render: () => (
    <div className="flex gap-4">
      <div className="relative">
        <AvatarFallback name="John Doe" />
        <AvatarBadge status="online" />
      </div>
      <div className="relative">
        <AvatarFallback name="Jane Smith" />
        <AvatarBadge status="away" />
      </div>
      <div className="relative">
        <AvatarFallback name="Bob Johnson" />
        <AvatarBadge status="busy" />
      </div>
    </div>
  ),
};

export const Group: Story = {
  render: () => (
    <AvatarGroup max={3}>
      <AvatarFallback name="User One" />
      <AvatarFallback name="User Two" />
      <AvatarFallback name="User Three" />
      <AvatarFallback name="User Four" />
      <AvatarFallback name="User Five" />
    </AvatarGroup>
  ),
};
EOF
git add src/components/data-display/Avatar/Avatar.stories.tsx
GIT_AUTHOR_DATE="2025-07-15T01:43:00" GIT_COMMITTER_DATE="2025-07-15T01:43:00" git commit -m "docs: add Storybook stories for avatars"

# Commit 6
cat > src/examples/data-display/ProfileExamples.tsx << 'EOF'
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
EOF
git add src/examples/data-display/ProfileExamples.tsx
GIT_AUTHOR_DATE="2025-07-15T01:56:00" GIT_COMMITTER_DATE="2025-07-15T01:56:00" git commit -m "example: create user profile examples"

# DAY 13 - Wednesday, July 16, 2025 (7 commits)
echo "Day 13: July 16, 2025 - Statistics display foundation"

# Commit 1
cat > src/components/data-display/Statistics/Stat.tsx << 'EOF'
import React from 'react';

export interface StatProps {
  label: string;
  value: string | number;
  change?: number;
  changeType?: 'increase' | 'decrease';
  icon?: React.ReactNode;
}

export const Stat: React.FC<StatProps> = ({ 
  label, 
  value, 
  change, 
  changeType,
  icon 
}) => {
  return (
    <div className="stat">
      <div className="stat-content">
        {icon && <div className="stat-icon text-2xl mb-2">{icon}</div>}
        <div className="stat-value text-3xl font-bold">{value}</div>
        <div className="stat-label text-sm text-gray-600">{label}</div>
        {change !== undefined && (
          <div className={`stat-change text-sm mt-1 ${
            changeType === 'increase' ? 'text-green-600' : 'text-red-600'
          }`}>
            {changeType === 'increase' ? '↑' : '↓'} {Math.abs(change)}%
          </div>
        )}
      </div>
    </div>
  );
};
EOF
git add src/components/data-display/Statistics/Stat.tsx
GIT_AUTHOR_DATE="2025-07-16T00:08:00" GIT_COMMITTER_DATE="2025-07-16T00:08:00" git commit -m "feat: create base statistics component"

# Commit 2
cat > src/components/data-display/Statistics/StatCard.tsx << 'EOF'
import React from 'react';

export interface StatCardProps {
  title: string;
  value: string | number;
  description?: string;
  trend?: {
    value: number;
    isPositive: boolean;
  };
  icon?: React.ReactNode;
}

export const StatCard: React.FC<StatCardProps> = ({ 
  title, 
  value, 
  description,
  trend,
  icon 
}) => {
  return (
    <div className="stat-card p-6 bg-white rounded-lg shadow">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-sm font-medium text-gray-600">{title}</h3>
        {icon && <div className="text-gray-400">{icon}</div>}
      </div>
      <div className="stat-value text-3xl font-bold mb-2">{value}</div>
      {description && <p className="text-sm text-gray-500">{description}</p>}
      {trend && (
        <div className={`flex items-center mt-2 text-sm ${
          trend.isPositive ? 'text-green-600' : 'text-red-600'
        }`}>
          <span>{trend.isPositive ? '↑' : '↓'}</span>
          <span className="ml-1">{Math.abs(trend.value)}%</span>
        </div>
      )}
    </div>
  );
};
EOF
git add src/components/data-display/Statistics/StatCard.tsx
GIT_AUTHOR_DATE="2025-07-16T00:31:00" GIT_COMMITTER_DATE="2025-07-16T00:31:00" git commit -m "feat: implement statistics card component"

# Commit 3
cat > src/components/data-display/Statistics/StatGroup.tsx << 'EOF'
import React from 'react';

export interface StatGroupProps {
  children: React.ReactNode;
  columns?: 2 | 3 | 4;
  gap?: 'sm' | 'md' | 'lg';
}

export const StatGroup: React.FC<StatGroupProps> = ({ 
  children, 
  columns = 3,
  gap = 'md' 
}) => {
  const gapClasses = {
    sm: 'gap-2',
    md: 'gap-4',
    lg: 'gap-6',
  };
  
  return (
    <div className={`stat-group grid grid-cols-${columns} ${gapClasses[gap]}`}>
      {children}
    </div>
  );
};
EOF
git add src/components/data-display/Statistics/StatGroup.tsx
GIT_AUTHOR_DATE="2025-07-16T00:55:00" GIT_COMMITTER_DATE="2025-07-16T00:55:00" git commit -m "feat: create statistics group layout"

# Commit 4
cat > src/components/data-display/Statistics/StatWithIcon.tsx << 'EOF'
import React from 'react';

export interface StatWithIconProps {
  label: string;
  value: string | number;
  icon: React.ReactNode;
  iconColor?: string;
  iconBgColor?: string;
}

export const StatWithIcon: React.FC<StatWithIconProps> = ({ 
  label, 
  value, 
  icon,
  iconColor = 'text-blue-600',
  iconBgColor = 'bg-blue-100'
}) => {
  return (
    <div className="stat-with-icon flex items-center gap-4 p-4 bg-white rounded-lg">
      <div className={`icon-wrapper p-3 rounded-full ${iconBgColor}`}>
        <div className={`text-2xl ${iconColor}`}>{icon}</div>
      </div>
      <div>
        <div className="stat-value text-2xl font-bold">{value}</div>
        <div className="stat-label text-sm text-gray-600">{label}</div>
      </div>
    </div>
  );
};
EOF
git add src/components/data-display/Statistics/StatWithIcon.tsx
GIT_AUTHOR_DATE="2025-07-16T01:18:00" GIT_COMMITTER_DATE="2025-07-16T01:18:00" git commit -m "feat: implement stat with icon support"

# Commit 5
cat > src/components/data-display/Statistics/TrendIndicator.tsx << 'EOF'
import React from 'react';

export interface TrendIndicatorProps {
  value: number;
  showPercentage?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

export const TrendIndicator: React.FC<TrendIndicatorProps> = ({ 
  value, 
  showPercentage = true,
  size = 'md' 
}) => {
  const isPositive = value >= 0;
  const sizeClasses = {
    sm: 'text-xs',
    md: 'text-sm',
    lg: 'text-base',
  };
  
  return (
    <span className={`trend-indicator inline-flex items-center ${sizeClasses[size]} ${
      isPositive ? 'text-green-600' : 'text-red-600'
    }`}>
      <span className="mr-1">{isPositive ? '↑' : '↓'}</span>
      <span>{Math.abs(value)}{showPercentage ? '%' : ''}</span>
    </span>
  );
};
EOF
git add src/components/data-display/Statistics/TrendIndicator.tsx
GIT_AUTHOR_DATE="2025-07-16T01:35:00" GIT_COMMITTER_DATE="2025-07-16T01:35:00" git commit -m "feat: add trend indicator (up/down arrows)"

# Commit 6
cat > src/components/data-display/Statistics/Statistics.types.ts << 'EOF'
export interface StatData {
  label: string;
  value: string | number;
  change?: number;
  changeType?: 'increase' | 'decrease';
}

export interface TrendData {
  value: number;
  isPositive: boolean;
  label?: string;
}

export interface MetricData {
  title: string;
  value: string | number;
  description?: string;
  trend?: TrendData;
}

export type StatSize = 'sm' | 'md' | 'lg' | 'xl';
export type StatVariant = 'default' | 'card' | 'minimal';
EOF
git add src/components/data-display/Statistics/Statistics.types.ts
GIT_AUTHOR_DATE="2025-07-16T01:48:00" GIT_COMMITTER_DATE="2025-07-16T01:48:00" git commit -m "feat: define statistics TypeScript interfaces"

# Commit 7
cat > src/components/data-display/Statistics/statUtils.ts << 'EOF'
export const formatStatValue = (value: number, format?: 'currency' | 'percentage' | 'number'): string => {
  switch (format) {
    case 'currency':
      return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(value);
    case 'percentage':
      return `${value}%`;
    case 'number':
    default:
      return new Intl.NumberFormat('en-US').format(value);
  }
};

export const calculateChange = (current: number, previous: number): number => {
  if (previous === 0) return 0;
  return ((current - previous) / previous) * 100;
};

export const formatChange = (change: number): string => {
  const sign = change >= 0 ? '+' : '';
  return `${sign}${change.toFixed(2)}%`;
};
EOF
git add src/components/data-display/Statistics/statUtils.ts
GIT_AUTHOR_DATE="2025-07-16T01:57:00" GIT_COMMITTER_DATE="2025-07-16T01:57:00" git commit -m "feat: add statistics helper utilities"

# DAY 14 - Friday, July 18, 2025 (5 commits)
echo "Day 14: July 18, 2025 - Metrics display"

# Commit 1
cat > src/components/data-display/Statistics/MetricsDisplay.tsx << 'EOF'
import React from 'react';

export interface MetricItem {
  label: string;
  value: string | number;
  icon?: React.ReactNode;
  color?: string;
}

export interface MetricsDisplayProps {
  metrics: MetricItem[];
  layout?: 'horizontal' | 'vertical' | 'grid';
}

export const MetricsDisplay: React.FC<MetricsDisplayProps> = ({ 
  metrics, 
  layout = 'grid' 
}) => {
  const layoutClasses = {
    horizontal: 'flex flex-row gap-6',
    vertical: 'flex flex-col gap-4',
    grid: 'grid grid-cols-2 md:grid-cols-4 gap-4',
  };
  
  return (
    <div className={`metrics-display ${layoutClasses[layout]}`}>
      {metrics.map((metric, index) => (
        <div key={index} className="metric-item p-4 bg-white rounded-lg shadow">
          {metric.icon && <div className="metric-icon mb-2">{metric.icon}</div>}
          <div className="metric-value text-2xl font-bold" style={{ color: metric.color }}>
            {metric.value}
          </div>
          <div className="metric-label text-sm text-gray-600">{metric.label}</div>
        </div>
      ))}
    </div>
  );
};
EOF
git add src/components/data-display/Statistics/MetricsDisplay.tsx
GIT_AUTHOR_DATE="2025-07-18T00:13:00" GIT_COMMITTER_DATE="2025-07-18T00:13:00" git commit -m "feat: create metrics display component"

# Commit 2
cat > src/components/data-display/Statistics/KPICard.tsx << 'EOF'
import React from 'react';

export interface KPICardProps {
  title: string;
  value: string | number;
  target?: string | number;
  progress?: number;
  trend?: {
    value: number;
    period: string;
  };
}

export const KPICard: React.FC<KPICardProps> = ({ 
  title, 
  value, 
  target,
  progress,
  trend 
}) => {
  return (
    <div className="kpi-card p-6 bg-white rounded-lg shadow">
      <h3 className="text-sm font-medium text-gray-600 mb-2">{title}</h3>
      <div className="flex items-baseline gap-2 mb-3">
        <span className="text-3xl font-bold">{value}</span>
        {target && <span className="text-sm text-gray-500">/ {target}</span>}
      </div>
      {progress !== undefined && (
        <div className="mb-3">
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-blue-600 h-2 rounded-full" 
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      )}
      {trend && (
        <div className={`text-sm ${trend.value >= 0 ? 'text-green-600' : 'text-red-600'}`}>
          {trend.value >= 0 ? '↑' : '↓'} {Math.abs(trend.value)}% {trend.period}
        </div>
      )}
    </div>
  );
};
EOF
git add src/components/data-display/Statistics/KPICard.tsx
GIT_AUTHOR_DATE="2025-07-18T00:42:00" GIT_COMMITTER_DATE="2025-07-18T00:42:00" git commit -m "feat: implement KPI card component"

# Commit 3
cat > src/components/data-display/Statistics/ProgressStat.tsx << 'EOF'
import React from 'react';

export interface ProgressStatProps {
  label: string;
  value: number;
  max: number;
  showPercentage?: boolean;
  color?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const ProgressStat: React.FC<ProgressStatProps> = ({ 
  label, 
  value, 
  max,
  showPercentage = true,
  color = 'bg-blue-600',
  size = 'md'
}) => {
  const percentage = (value / max) * 100;
  const sizeClasses = {
    sm: 'h-1',
    md: 'h-2',
    lg: 'h-3',
  };
  
  return (
    <div className="progress-stat">
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-medium text-gray-700">{label}</span>
        {showPercentage && (
          <span className="text-sm text-gray-600">{percentage.toFixed(0)}%</span>
        )}
      </div>
      <div className={`w-full bg-gray-200 rounded-full ${sizeClasses[size]}`}>
        <div 
          className={`${color} ${sizeClasses[size]} rounded-full transition-all duration-300`}
          style={{ width: `${percentage}%` }}
        />
      </div>
      <div className="flex justify-between items-center mt-1">
        <span className="text-xs text-gray-500">{value}</span>
        <span className="text-xs text-gray-500">{max}</span>
      </div>
    </div>
  );
};
EOF
git add src/components/data-display/Statistics/ProgressStat.tsx
GIT_AUTHOR_DATE="2025-07-18T01:11:00" GIT_COMMITTER_DATE="2025-07-18T01:11:00" git commit -m "feat: add statistics with progress bars"

# Commit 4
cat > src/components/data-display/Statistics/Statistics.test.tsx << 'EOF'
import { render, screen } from '@testing-library/react';
import { Stat } from './Stat';
import { StatCard } from './StatCard';
import { TrendIndicator } from './TrendIndicator';

describe('Statistics Components', () => {
  describe('Stat', () => {
    it('renders label and value', () => {
      render(<Stat label="Total Users" value={1234} />);
      expect(screen.getByText('Total Users')).toBeInTheDocument();
      expect(screen.getByText('1234')).toBeInTheDocument();
    });
    
    it('displays change indicator', () => {
      render(<Stat label="Revenue" value="$50K" change={12.5} changeType="increase" />);
      expect(screen.getByText(/12.5%/)).toBeInTheDocument();
    });
  });
  
  describe('StatCard', () => {
    it('renders title and value', () => {
      render(<StatCard title="Sales" value={500} />);
      expect(screen.getByText('Sales')).toBeInTheDocument();
      expect(screen.getByText('500')).toBeInTheDocument();
    });
    
    it('displays trend', () => {
      render(<StatCard title="Growth" value={100} trend={{ value: 15, isPositive: true }} />);
      expect(screen.getByText(/15%/)).toBeInTheDocument();
    });
  });
  
  describe('TrendIndicator', () => {
    it('shows positive trend', () => {
      const { container } = render(<TrendIndicator value={10} />);
      expect(container.querySelector('.text-green-600')).toBeInTheDocument();
    });
    
    it('shows negative trend', () => {
      const { container } = render(<TrendIndicator value={-5} />);
      expect(container.querySelector('.text-red-600')).toBeInTheDocument();
    });
  });
});
EOF
git add src/components/data-display/Statistics/Statistics.test.tsx
GIT_AUTHOR_DATE="2025-07-18T01:38:00" GIT_COMMITTER_DATE="2025-07-18T01:38:00" git commit -m "test: add statistics component tests"

# Commit 5
cat > docs/components/data-display/statistics.md << 'EOF'
# Statistics Components

## Overview
Components for displaying statistical data, metrics, and KPIs.

## Basic Stat
```tsx
<Stat label="Total Users" value={1234} change={12.5} changeType="increase" />
```

## Stat Card
```tsx
<StatCard 
  title="Revenue" 
  value="$50,000" 
  description="Monthly revenue"
  trend={{ value: 15, isPositive: true }}
/>
```

## Stat Group
```tsx
<StatGroup columns={3} gap="md">
  <Stat label="Users" value={1234} />
  <Stat label="Revenue" value="$50K" />
  <Stat label="Orders" value={567} />
</StatGroup>
```

## KPI Card
```tsx
<KPICard 
  title="Sales Target" 
  value={75000} 
  target={100000}
  progress={75}
  trend={{ value: 8.5, period: 'this month' }}
/>
```

## Progress Stat
```tsx
<ProgressStat 
  label="Completion" 
  value={75} 
  max={100}
  color="bg-green-600"
/>
```

## Props

### Stat
- label: string - Stat label
- value: string | number - Stat value
- change: number - Change percentage
- changeType: 'increase' | 'decrease'
- icon: ReactNode - Optional icon

### StatCard
- title: string - Card title
- value: string | number - Main value
- description: string - Optional description
- trend: { value: number, isPositive: boolean }
- icon: ReactNode - Optional icon

### KPICard
- title: string - KPI title
- value: string | number - Current value
- target: string | number - Target value
- progress: number - Progress percentage (0-100)
- trend: { value: number, period: string }

## Features
- Multiple display variants
- Trend indicators
- Progress visualization
- Responsive layouts
- Customizable colors
- Icon support
EOF
git add docs/components/data-display/statistics.md
GIT_AUTHOR_DATE="2025-07-18T01:53:00" GIT_COMMITTER_DATE="2025-07-18T01:53:00" git commit -m "docs: document statistics components API"

# DAY 15 - Saturday, July 19, 2025 (6 commits)
echo "Day 15: July 19, 2025 - Charts integration foundation"

# Commit 1
cat > src/components/data-display/Charts/ChartWrapper.tsx << 'EOF'
import React from 'react';

export interface ChartWrapperProps {
  title?: string;
  description?: string;
  children: React.ReactNode;
  height?: number;
  loading?: boolean;
}

export const ChartWrapper: React.FC<ChartWrapperProps> = ({ 
  title, 
  description,
  children,
  height = 300,
  loading 
}) => {
  return (
    <div className="chart-wrapper bg-white rounded-lg shadow p-6">
      {(title || description) && (
        <div className="chart-header mb-4">
          {title && <h3 className="text-lg font-semibold">{title}</h3>}
          {description && <p className="text-sm text-gray-600">{description}</p>}
        </div>
      )}
      <div className="chart-content" style={{ height: `${height}px` }}>
        {loading ? (
          <div className="flex items-center justify-center h-full">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600" />
          </div>
        ) : (
          children
        )}
      </div>
    </div>
  );
};
EOF
git add src/components/data-display/Charts/ChartWrapper.tsx
GIT_AUTHOR_DATE="2025-07-19T00:10:00" GIT_COMMITTER_DATE="2025-07-19T00:10:00" git commit -m "feat: create base chart wrapper component"

# Commit 2
cat > src/components/data-display/Charts/Chart.types.ts << 'EOF'
export interface ChartDataPoint {
  label: string;
  value: number;
  color?: string;
}

export interface ChartSeries {
  name: string;
  data: number[];
  color?: string;
}

export interface ChartConfig {
  width?: number;
  height?: number;
  responsive?: boolean;
  maintainAspectRatio?: boolean;
}

export interface ChartLegendItem {
  label: string;
  color: string;
  value?: string | number;
}

export type ChartType = 'line' | 'bar' | 'pie' | 'doughnut' | 'area';
EOF
git add src/components/data-display/Charts/Chart.types.ts
GIT_AUTHOR_DATE="2025-07-19T00:36:00" GIT_COMMITTER_DATE="2025-07-19T00:36:00" git commit -m "feat: define chart TypeScript interfaces"

# Commit 3
cat > src/components/data-display/Charts/LineChart.tsx << 'EOF'
import React from 'react';

export interface LineChartProps {
  data: { label: string; value: number }[];
  color?: string;
  showGrid?: boolean;
  showPoints?: boolean;
}

export const LineChart: React.FC<LineChartProps> = ({ 
  data, 
  color = '#3B82F6',
  showGrid = true,
  showPoints = true 
}) => {
  // Simplified line chart implementation
  const maxValue = Math.max(...data.map(d => d.value));
  const points = data.map((d, i) => {
    const x = (i / (data.length - 1)) * 100;
    const y = 100 - (d.value / maxValue) * 100;
    return `${x},${y}`;
  }).join(' ');
  
  return (
    <div className="line-chart w-full h-full">
      <svg viewBox="0 0 100 100" className="w-full h-full">
        {showGrid && (
          <g className="grid" stroke="#e5e7eb" strokeWidth="0.2">
            {[0, 25, 50, 75, 100].map(y => (
              <line key={y} x1="0" y1={y} x2="100" y2={y} />
            ))}
          </g>
        )}
        <polyline
          points={points}
          fill="none"
          stroke={color}
          strokeWidth="2"
        />
        {showPoints && data.map((d, i) => {
          const x = (i / (data.length - 1)) * 100;
          const y = 100 - (d.value / maxValue) * 100;
          return <circle key={i} cx={x} cy={y} r="2" fill={color} />;
        })}
      </svg>
    </div>
  );
};
EOF
git add src/components/data-display/Charts/LineChart.tsx
GIT_AUTHOR_DATE="2025-07-19T01:02:00" GIT_COMMITTER_DATE="2025-07-19T01:02:00" git commit -m "feat: implement basic line chart component"

# Commit 4
cat > src/components/data-display/Charts/BarChart.tsx << 'EOF'
import React from 'react';

export interface BarChartProps {
  data: { label: string; value: number }[];
  color?: string;
  horizontal?: boolean;
}

export const BarChart: React.FC<BarChartProps> = ({ 
  data, 
  color = '#3B82F6',
  horizontal = false 
}) => {
  const maxValue = Math.max(...data.map(d => d.value));
  
  return (
    <div className={`bar-chart flex ${horizontal ? 'flex-col' : 'flex-row items-end'} gap-2 h-full p-4`}>
      {data.map((item, index) => {
        const percentage = (item.value / maxValue) * 100;
        return (
          <div 
            key={index} 
            className={`bar-item flex ${horizontal ? 'flex-row' : 'flex-col'} items-center gap-2 flex-1`}
          >
            <div 
              className={`bar ${horizontal ? 'h-8' : 'w-full'}`}
              style={{
                backgroundColor: color,
                [horizontal ? 'width' : 'height']: `${percentage}%`,
              }}
            />
            <span className="text-xs text-gray-600">{item.label}</span>
          </div>
        );
      })}
    </div>
  );
};
EOF
git add src/components/data-display/Charts/BarChart.tsx
GIT_AUTHOR_DATE="2025-07-19T01:27:00" GIT_COMMITTER_DATE="2025-07-19T01:27:00" git commit -m "feat: create basic bar chart component"

# Commit 5
cat > src/components/data-display/Charts/chartUtils.ts << 'EOF'
export const formatChartValue = (value: number, format?: 'currency' | 'percentage' | 'number'): string => {
  switch (format) {
    case 'currency':
      return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(value);
    case 'percentage':
      return `${value}%`;
    case 'number':
    default:
      return new Intl.NumberFormat('en-US').format(value);
  }
};

export const calculateChartDimensions = (
  containerWidth: number,
  containerHeight: number,
  aspectRatio: number = 16 / 9
): { width: number; height: number } => {
  const calculatedHeight = containerWidth / aspectRatio;
  if (calculatedHeight <= containerHeight) {
    return { width: containerWidth, height: calculatedHeight };
  }
  return { width: containerHeight * aspectRatio, height: containerHeight };
};

export const generateChartColors = (count: number): string[] => {
  const baseColors = [
    '#3B82F6', '#EF4444', '#10B981', '#F59E0B', '#8B5CF6',
    '#EC4899', '#14B8A6', '#F97316', '#6366F1', '#84CC16'
  ];
  return Array.from({ length: count }, (_, i) => baseColors[i % baseColors.length]);
};
EOF
git add src/components/data-display/Charts/chartUtils.ts
GIT_AUTHOR_DATE="2025-07-19T01:45:00" GIT_COMMITTER_DATE="2025-07-19T01:45:00" git commit -m "feat: add chart helper utilities"

# Commit 6
cat > src/components/data-display/Charts/chartConfig.ts << 'EOF'
export const defaultChartConfig = {
  responsive: true,
  maintainAspectRatio: true,
  aspectRatio: 16 / 9,
  animation: {
    duration: 750,
    easing: 'easeInOutQuart',
  },
  colors: {
    primary: '#3B82F6',
    secondary: '#8B5CF6',
    success: '#10B981',
    warning: '#F59E0B',
    danger: '#EF4444',
  },
  grid: {
    show: true,
    color: '#E5E7EB',
    strokeWidth: 1,
  },
  legend: {
    show: true,
    position: 'bottom',
  },
  tooltip: {
    enabled: true,
    backgroundColor: '#1F2937',
    textColor: '#FFFFFF',
  },
};

export const chartThemes = {
  light: {
    backgroundColor: '#FFFFFF',
    textColor: '#1F2937',
    gridColor: '#E5E7EB',
  },
  dark: {
    backgroundColor: '#1F2937',
    textColor: '#F9FAFB',
    gridColor: '#374151',
  },
};
EOF
git add src/components/data-display/Charts/chartConfig.ts
GIT_AUTHOR_DATE="2025-07-19T01:56:00" GIT_COMMITTER_DATE="2025-07-19T01:56:00" git commit -m "feat: create chart configuration system"

# DAY 16 - Sunday, July 20, 2025 (4 commits)
echo "Day 16: July 20, 2025 - Chart enhancements"

# Commit 1
cat > src/components/data-display/Charts/PieChart.tsx << 'EOF'
import React from 'react';

export interface PieChartProps {
  data: { label: string; value: number; color?: string }[];
  size?: number;
  showLabels?: boolean;
}

export const PieChart: React.FC<PieChartProps> = ({ 
  data, 
  size = 200,
  showLabels = true 
}) => {
  const total = data.reduce((sum, item) => sum + item.value, 0);
  let currentAngle = 0;
  
  const slices = data.map((item, index) => {
    const percentage = (item.value / total) * 100;
    const angle = (item.value / total) * 360;
    const startAngle = currentAngle;
    currentAngle += angle;
    
    return {
      ...item,
      percentage,
      startAngle,
      endAngle: currentAngle,
      color: item.color || `hsl(${(index * 360) / data.length}, 70%, 50%)`,
    };
  });
  
  return (
    <div className="pie-chart flex items-center gap-4">
      <svg width={size} height={size} viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="50" fill="#f3f4f6" />
        {slices.map((slice, index) => {
          const startRad = (slice.startAngle - 90) * (Math.PI / 180);
          const endRad = (slice.endAngle - 90) * (Math.PI / 180);
          const x1 = 50 + 50 * Math.cos(startRad);
          const y1 = 50 + 50 * Math.sin(startRad);
          const x2 = 50 + 50 * Math.cos(endRad);
          const y2 = 50 + 50 * Math.sin(endRad);
          const largeArc = slice.endAngle - slice.startAngle > 180 ? 1 : 0;
          
          return (
            <path
              key={index}
              d={`M 50 50 L ${x1} ${y1} A 50 50 0 ${largeArc} 1 ${x2} ${y2} Z`}
              fill={slice.color}
            />
          );
        })}
      </svg>
      {showLabels && (
        <div className="chart-legend space-y-2">
          {slices.map((slice, index) => (
            <div key={index} className="flex items-center gap-2">
              <div className="w-3 h-3 rounded" style={{ backgroundColor: slice.color }} />
              <span className="text-sm">{slice.label}: {slice.percentage.toFixed(1)}%</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
EOF
git add src/components/data-display/Charts/PieChart.tsx
GIT_AUTHOR_DATE="2025-07-20T00:18:00" GIT_COMMITTER_DATE="2025-07-20T00:18:00" git commit -m "feat: implement basic pie chart component"

# Commit 2
cat > src/components/data-display/Charts/ChartLegend.tsx << 'EOF'
import React from 'react';

export interface ChartLegendItem {
  label: string;
  color: string;
  value?: string | number;
}

export interface ChartLegendProps {
  items: ChartLegendItem[];
  position?: 'top' | 'bottom' | 'left' | 'right';
  orientation?: 'horizontal' | 'vertical';
}

export const ChartLegend: React.FC<ChartLegendProps> = ({ 
  items, 
  position = 'bottom',
  orientation = 'horizontal' 
}) => {
  const orientationClasses = orientation === 'horizontal' 
    ? 'flex flex-row flex-wrap gap-4' 
    : 'flex flex-col gap-2';
  
  return (
    <div className={`chart-legend ${orientationClasses}`}>
      {items.map((item, index) => (
        <div key={index} className="legend-item flex items-center gap-2">
          <div 
            className="legend-color w-3 h-3 rounded" 
            style={{ backgroundColor: item.color }}
          />
          <span className="legend-label text-sm text-gray-700">{item.label}</span>
          {item.value !== undefined && (
            <span className="legend-value text-sm font-semibold">{item.value}</span>
          )}
        </div>
      ))}
    </div>
  );
};
EOF
git add src/components/data-display/Charts/ChartLegend.tsx
GIT_AUTHOR_DATE="2025-07-20T00:51:00" GIT_COMMITTER_DATE="2025-07-20T00:51:00" git commit -m "feat: create chart legend component"

# Commit 3
cat > src/components/data-display/Charts/ChartTooltip.tsx << 'EOF'
import React from 'react';

export interface ChartTooltipProps {
  visible: boolean;
  x: number;
  y: number;
  content: React.ReactNode;
}

export const ChartTooltip: React.FC<ChartTooltipProps> = ({ 
  visible, 
  x, 
  y, 
  content 
}) => {
  if (!visible) return null;
  
  return (
    <div 
      className="chart-tooltip absolute z-50 bg-gray-900 text-white text-sm rounded px-3 py-2 shadow-lg pointer-events-none"
      style={{
        left: `${x}px`,
        top: `${y}px`,
        transform: 'translate(-50%, -100%)',
      }}
    >
      {content}
      <div 
        className="tooltip-arrow absolute left-1/2 bottom-0 transform -translate-x-1/2 translate-y-full"
        style={{
          width: 0,
          height: 0,
          borderLeft: '6px solid transparent',
          borderRight: '6px solid transparent',
          borderTop: '6px solid #1F2937',
        }}
      />
    </div>
  );
};
EOF
git add src/components/data-display/Charts/ChartTooltip.tsx
GIT_AUTHOR_DATE="2025-07-20T01:26:00" GIT_COMMITTER_DATE="2025-07-20T01:26:00" git commit -m "feat: implement chart tooltip component"

# Commit 4
cat > docs/components/data-display/charts.md << 'EOF'
# Chart Components

## Overview
Components for data visualization including line charts, bar charts, and pie charts.

## Chart Wrapper
```tsx
<ChartWrapper title="Sales Overview" description="Monthly sales data" height={300}>
  <LineChart data={salesData} />
</ChartWrapper>
```

## Line Chart
```tsx
<LineChart 
  data={[
    { label: 'Jan', value: 100 },
    { label: 'Feb', value: 150 },
    { label: 'Mar', value: 120 },
  ]}
  color="#3B82F6"
  showGrid
  showPoints
/>
```

## Bar Chart
```tsx
<BarChart 
  data={[
    { label: 'Product A', value: 45 },
    { label: 'Product B', value: 30 },
    { label: 'Product C', value: 25 },
  ]}
  color="#10B981"
  horizontal={false}
/>
```

## Pie Chart
```tsx
<PieChart 
  data={[
    { label: 'Desktop', value: 60, color: '#3B82F6' },
    { label: 'Mobile', value: 30, color: '#10B981' },
    { label: 'Tablet', value: 10, color: '#F59E0B' },
  ]}
  size={200}
  showLabels
/>
```

## Chart Legend
```tsx
<ChartLegend 
  items={[
    { label: 'Series 1', color: '#3B82F6', value: 100 },
    { label: 'Series 2', color: '#10B981', value: 150 },
  ]}
  orientation="horizontal"
/>
```

## Props

### ChartWrapper
- title: string - Chart title
- description: string - Chart description
- height: number - Chart height in pixels
- loading: boolean - Show loading state

### LineChart
- data: Array<{ label: string, value: number }> - Chart data
- color: string - Line color
- showGrid: boolean - Show grid lines
- showPoints: boolean - Show data points

### BarChart
- data: Array<{ label: string, value: number }> - Chart data
- color: string - Bar color
- horizontal: boolean - Horizontal orientation

### PieChart
- data: Array<{ label: string, value: number, color?: string }> - Chart data
- size: number - Chart size in pixels
- showLabels: boolean - Show legend labels

## Features
- Responsive design
- Multiple chart types
- Customizable colors
- Grid and axis support
- Legend component
- Tooltip support
- Loading states
EOF
git add docs/components/data-display/charts.md
GIT_AUTHOR_DATE="2025-07-20T01:49:00" GIT_COMMITTER_DATE="2025-07-20T01:49:00" git commit -m "docs: document chart components API"

echo "Part 2 complete! Days 11-16 finished."

# =============================================================================
# Week 4: July 21-27, 2025
# Skip: July 21, 22, 23 (Monday, Tuesday, Wednesday)
# Working Days: July 24, 25, 26, 27 (4 days)
# =============================================================================

# DAY 17 - Thursday, July 24, 2025 (6 commits)
echo "Day 17: July 24, 2025 - Data display utilities"

# Commit 1
cat > src/components/data-display/utils/dataFormatters.ts << 'EOF'
export const formatCurrency = (value: number, currency: string = 'USD', locale: string = 'en-US'): string => {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency,
  }).format(value);
};

export const formatPercentage = (value: number, decimals: number = 2): string => {
  return `${value.toFixed(decimals)}%`;
};

export const formatCompactNumber = (value: number): string => {
  return new Intl.NumberFormat('en-US', {
    notation: 'compact',
    compactDisplay: 'short',
  }).format(value);
};

export const formatBytes = (bytes: number, decimals: number = 2): string => {
  if (bytes === 0) return '0 Bytes';
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return `${parseFloat((bytes / Math.pow(k, i)).toFixed(decimals))} ${sizes[i]}`;
};
EOF
git add src/components/data-display/utils/dataFormatters.ts
GIT_AUTHOR_DATE="2025-07-24T00:09:00" GIT_COMMITTER_DATE="2025-07-24T00:09:00" git commit -m "feat: create data formatting utilities"

# Commit 2
cat > src/components/data-display/utils/numberFormatters.ts << 'EOF'
export const formatNumber = (value: number, options?: Intl.NumberFormatOptions): string => {
  return new Intl.NumberFormat('en-US', options).format(value);
};

export const formatOrdinal = (n: number): string => {
  const s = ['th', 'st', 'nd', 'rd'];
  const v = n % 100;
  return n + (s[(v - 20) % 10] || s[v] || s[0]);
};

export const formatPhoneNumber = (phone: string): string => {
  const cleaned = phone.replace(/\D/g, '');
  const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
  if (match) {
    return `(${match[1]}) ${match[2]}-${match[3]}`;
  }
  return phone;
};

export const abbreviateNumber = (value: number): string => {
  if (value >= 1000000) {
    return `${(value / 1000000).toFixed(1)}M`;
  }
  if (value >= 1000) {
    return `${(value / 1000).toFixed(1)}K`;
  }
  return value.toString();
};
EOF
git add src/components/data-display/utils/numberFormatters.ts
GIT_AUTHOR_DATE="2025-07-24T00:35:00" GIT_COMMITTER_DATE="2025-07-24T00:35:00" git commit -m "feat: implement number formatting utilities"

# Commit 3
cat > src/components/data-display/utils/dateFormatters.ts << 'EOF'
export const formatDate = (date: Date, format: string = 'short'): string => {
  const options: Record<string, Intl.DateTimeFormatOptions> = {
    short: { year: 'numeric', month: 'short', day: 'numeric' },
    long: { year: 'numeric', month: 'long', day: 'numeric' },
    full: { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' },
  };
  return new Intl.DateTimeFormat('en-US', options[format] || options.short).format(date);
};

export const formatRelativeTime = (date: Date): string => {
  const now = new Date();
  const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000);
  
  if (diffInSeconds < 60) return 'just now';
  if (diffInSeconds < 3600) return `${Math.floor(diffInSeconds / 60)} minutes ago`;
  if (diffInSeconds < 86400) return `${Math.floor(diffInSeconds / 3600)} hours ago`;
  if (diffInSeconds < 604800) return `${Math.floor(diffInSeconds / 86400)} days ago`;
  return formatDate(date);
};

export const formatTime = (date: Date, includeSeconds: boolean = false): string => {
  const options: Intl.DateTimeFormatOptions = {
    hour: '2-digit',
    minute: '2-digit',
    ...(includeSeconds && { second: '2-digit' }),
  };
  return new Intl.DateTimeFormat('en-US', options).format(date);
};
EOF
git add src/components/data-display/utils/dateFormatters.ts
GIT_AUTHOR_DATE="2025-07-24T01:01:00" GIT_COMMITTER_DATE="2025-07-24T01:01:00" git commit -m "feat: add date formatting utilities"

# Commit 4
cat > src/components/data-display/utils/dataHelpers.ts << 'EOF'
export const groupBy = <T>(array: T[], key: keyof T): Record<string, T[]> => {
  return array.reduce((result, item) => {
    const groupKey = String(item[key]);
    if (!result[groupKey]) {
      result[groupKey] = [];
    }
    result[groupKey].push(item);
    return result;
  }, {} as Record<string, T[]>);
};

export const sumBy = <T>(array: T[], key: keyof T): number => {
  return array.reduce((sum, item) => sum + Number(item[key]), 0);
};

export const averageBy = <T>(array: T[], key: keyof T): number => {
  if (array.length === 0) return 0;
  return sumBy(array, key) / array.length;
};

export const uniqueBy = <T>(array: T[], key: keyof T): T[] => {
  const seen = new Set();
  return array.filter(item => {
    const value = item[key];
    if (seen.has(value)) {
      return false;
    }
    seen.add(value);
    return true;
  });
};

export const paginate = <T>(array: T[], page: number, pageSize: number): T[] => {
  const start = (page - 1) * pageSize;
  return array.slice(start, start + pageSize);
};
EOF
git add src/components/data-display/utils/dataHelpers.ts
GIT_AUTHOR_DATE="2025-07-24T01:26:00" GIT_COMMITTER_DATE="2025-07-24T01:26:00" git commit -m "feat: create data manipulation helpers"

# Commit 5
cat > src/components/data-display/utils/sortUtils.ts << 'EOF'
export type SortDirection = 'asc' | 'desc';

export const sortByKey = <T>(array: T[], key: keyof T, direction: SortDirection = 'asc'): T[] => {
  return [...array].sort((a, b) => {
    const aVal = a[key];
    const bVal = b[key];
    
    if (aVal < bVal) return direction === 'asc' ? -1 : 1;
    if (aVal > bVal) return direction === 'asc' ? 1 : -1;
    return 0;
  });
};

export const sortByMultipleKeys = <T>(
  array: T[],
  keys: { key: keyof T; direction: SortDirection }[]
): T[] => {
  return [...array].sort((a, b) => {
    for (const { key, direction } of keys) {
      const aVal = a[key];
      const bVal = b[key];
      
      if (aVal < bVal) return direction === 'asc' ? -1 : 1;
      if (aVal > bVal) return direction === 'asc' ? 1 : -1;
    }
    return 0;
  });
};

export const sortByDate = <T>(array: T[], key: keyof T, direction: SortDirection = 'asc'): T[] => {
  return [...array].sort((a, b) => {
    const aDate = new Date(a[key] as any).getTime();
    const bDate = new Date(b[key] as any).getTime();
    return direction === 'asc' ? aDate - bDate : bDate - aDate;
  });
};
EOF
git add src/components/data-display/utils/sortUtils.ts
GIT_AUTHOR_DATE="2025-07-24T01:44:00" GIT_COMMITTER_DATE="2025-07-24T01:44:00" git commit -m "feat: implement sorting utilities"

# Commit 6
cat > src/components/data-display/utils/filterUtils.ts << 'EOF'
export const filterBySearch = <T>(array: T[], searchTerm: string, keys: (keyof T)[]): T[] => {
  const lowerSearch = searchTerm.toLowerCase();
  return array.filter(item =>
    keys.some(key => {
      const value = String(item[key]).toLowerCase();
      return value.includes(lowerSearch);
    })
  );
};

export const filterByRange = <T>(
  array: T[],
  key: keyof T,
  min: number,
  max: number
): T[] => {
  return array.filter(item => {
    const value = Number(item[key]);
    return value >= min && value <= max;
  });
};

export const filterByDate = <T>(
  array: T[],
  key: keyof T,
  startDate: Date,
  endDate: Date
): T[] => {
  return array.filter(item => {
    const date = new Date(item[key] as any);
    return date >= startDate && date <= endDate;
  });
};

export const filterByMultipleCriteria = <T>(
  array: T[],
  filters: Partial<Record<keyof T, any>>
): T[] => {
  return array.filter(item =>
    Object.entries(filters).every(([key, value]) => item[key as keyof T] === value)
  );
};
EOF
git add src/components/data-display/utils/filterUtils.ts
GIT_AUTHOR_DATE="2025-07-24T01:57:00" GIT_COMMITTER_DATE="2025-07-24T01:57:00" git commit -m "feat: create filtering utilities"

# DAY 18 - Friday, July 25, 2025 (7 commits)
echo "Day 18: July 25, 2025 - Advanced table features"

# Commit 1
cat > src/components/data-display/Table/VirtualTable.tsx << 'EOF'
import React, { useRef, useState, useEffect } from 'react';

export interface VirtualTableProps<T> {
  data: T[];
  rowHeight: number;
  visibleRows: number;
  renderRow: (item: T, index: number) => React.ReactNode;
}

export function VirtualTable<T>({ 
  data, 
  rowHeight, 
  visibleRows,
  renderRow 
}: VirtualTableProps<T>) {
  const [scrollTop, setScrollTop] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  
  const totalHeight = data.length * rowHeight;
  const startIndex = Math.floor(scrollTop / rowHeight);
  const endIndex = Math.min(startIndex + visibleRows + 1, data.length);
  const visibleData = data.slice(startIndex, endIndex);
  const offsetY = startIndex * rowHeight;
  
  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    setScrollTop(e.currentTarget.scrollTop);
  };
  
  return (
    <div 
      ref={containerRef}
      className="virtual-table overflow-auto"
      style={{ height: visibleRows * rowHeight }}
      onScroll={handleScroll}
    >
      <div style={{ height: totalHeight, position: 'relative' }}>
        <div style={{ transform: `translateY(${offsetY}px)` }}>
          {visibleData.map((item, index) => renderRow(item, startIndex + index))}
        </div>
      </div>
    </div>
  );
}
EOF
git add src/components/data-display/Table/VirtualTable.tsx
GIT_AUTHOR_DATE="2025-07-25T00:07:00" GIT_COMMITTER_DATE="2025-07-25T00:07:00" git commit -m "feat: implement virtual scrolling for tables"

# Commit 2
cat > src/components/data-display/Table/TableExport.tsx << 'EOF'
import React from 'react';

export interface TableExportProps {
  data: any[];
  filename?: string;
  format?: 'csv' | 'json';
}

export const TableExport: React.FC<TableExportProps> = ({ 
  data, 
  filename = 'export',
  format = 'csv' 
}) => {
  const exportToCSV = () => {
    if (data.length === 0) return;
    
    const headers = Object.keys(data[0]);
    const csvContent = [
      headers.join(','),
      ...data.map(row => headers.map(header => row[header]).join(','))
    ].join('\n');
    
    downloadFile(csvContent, `${filename}.csv`, 'text/csv');
  };
  
  const exportToJSON = () => {
    const jsonContent = JSON.stringify(data, null, 2);
    downloadFile(jsonContent, `${filename}.json`, 'application/json');
  };
  
  const downloadFile = (content: string, filename: string, type: string) => {
    const blob = new Blob([content], { type });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    link.click();
    URL.revokeObjectURL(url);
  };
  
  const handleExport = () => {
    if (format === 'csv') {
      exportToCSV();
    } else {
      exportToJSON();
    }
  };
  
  return (
    <button 
      onClick={handleExport}
      className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
    >
      Export {format.toUpperCase()}
    </button>
  );
};
EOF
git add src/components/data-display/Table/TableExport.tsx
GIT_AUTHOR_DATE="2025-07-25T00:30:00" GIT_COMMITTER_DATE="2025-07-25T00:30:00" git commit -m "feat: add table data export functionality"

# Commit 3
cat > src/components/data-display/Table/TableSearch.tsx << 'EOF'
import React, { useState } from 'react';

export interface TableSearchProps {
  onSearch: (query: string) => void;
  placeholder?: string;
  debounceMs?: number;
}

export const TableSearch: React.FC<TableSearchProps> = ({ 
  onSearch, 
  placeholder = 'Search...',
  debounceMs = 300 
}) => {
  const [query, setQuery] = useState('');
  const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout | null>(null);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);
    
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    
    const newTimeoutId = setTimeout(() => {
      onSearch(value);
    }, debounceMs);
    
    setTimeoutId(newTimeoutId);
  };
  
  const handleClear = () => {
    setQuery('');
    onSearch('');
  };
  
  return (
    <div className="table-search relative">
      <input
        type="text"
        value={query}
        onChange={handleChange}
        placeholder={placeholder}
        className="w-full px-4 py-2 border rounded-lg pr-10"
      />
      {query && (
        <button
          onClick={handleClear}
          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
        >
          ✕
        </button>
      )}
    </div>
  );
};
EOF
git add src/components/data-display/Table/TableSearch.tsx
GIT_AUTHOR_DATE="2025-07-25T00:54:00" GIT_COMMITTER_DATE="2025-07-25T00:54:00" git commit -m "feat: implement table search functionality"

# Commit 4
cat > src/components/data-display/Table/ColumnVisibility.tsx << 'EOF'
import React, { useState } from 'react';

export interface Column {
  id: string;
  label: string;
  visible: boolean;
}

export interface ColumnVisibilityProps {
  columns: Column[];
  onToggle: (columnId: string) => void;
}

export const ColumnVisibility: React.FC<ColumnVisibilityProps> = ({ 
  columns, 
  onToggle 
}) => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="column-visibility relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="px-4 py-2 border rounded hover:bg-gray-50"
      >
        Columns
      </button>
      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white border rounded-lg shadow-lg z-10">
          <div className="p-2 space-y-2">
            {columns.map(column => (
              <label key={column.id} className="flex items-center gap-2 cursor-pointer hover:bg-gray-50 p-2 rounded">
                <input
                  type="checkbox"
                  checked={column.visible}
                  onChange={() => onToggle(column.id)}
                  className="rounded"
                />
                <span className="text-sm">{column.label}</span>
              </label>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
EOF
git add src/components/data-display/Table/ColumnVisibility.tsx
GIT_AUTHOR_DATE="2025-07-25T01:17:00" GIT_COMMITTER_DATE="2025-07-25T01:17:00" git commit -m "feat: create column visibility toggle"

# Commit 5
cat > src/components/data-display/Table/TableToolbar.tsx << 'EOF'
import React from 'react';

export interface TableToolbarProps {
  title?: string;
  actions?: React.ReactNode;
  search?: React.ReactNode;
  filters?: React.ReactNode;
}

export const TableToolbar: React.FC<TableToolbarProps> = ({ 
  title, 
  actions,
  search,
  filters 
}) => {
  return (
    <div className="table-toolbar bg-white border-b p-4">
      <div className="flex items-center justify-between mb-4">
        {title && <h2 className="text-lg font-semibold">{title}</h2>}
        {actions && <div className="flex gap-2">{actions}</div>}
      </div>
      {(search || filters) && (
        <div className="flex items-center gap-4">
          {search && <div className="flex-1">{search}</div>}
          {filters && <div className="flex gap-2">{filters}</div>}
        </div>
      )}
    </div>
  );
};
EOF
git add src/components/data-display/Table/TableToolbar.tsx
GIT_AUTHOR_DATE="2025-07-25T01:34:00" GIT_COMMITTER_DATE="2025-07-25T01:34:00" git commit -m "feat: implement table toolbar component"

# Commit 6
cat > src/components/data-display/Table/useTable.ts << 'EOF'
import { useState, useMemo } from 'react';

export interface UseTableOptions<T> {
  data: T[];
  pageSize?: number;
  sortBy?: keyof T;
  sortDirection?: 'asc' | 'desc';
}

export const useTable = <T>({ 
  data, 
  pageSize = 10,
  sortBy,
  sortDirection = 'asc' 
}: UseTableOptions<T>) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [sort, setSort] = useState<{ key: keyof T; direction: 'asc' | 'desc' }>({
    key: sortBy || ('' as keyof T),
    direction: sortDirection,
  });
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedRows, setSelectedRows] = useState<Set<number>>(new Set());
  
  const sortedData = useMemo(() => {
    if (!sort.key) return data;
    
    return [...data].sort((a, b) => {
      const aVal = a[sort.key];
      const bVal = b[sort.key];
      
      if (aVal < bVal) return sort.direction === 'asc' ? -1 : 1;
      if (aVal > bVal) return sort.direction === 'asc' ? 1 : -1;
      return 0;
    });
  }, [data, sort]);
  
  const paginatedData = useMemo(() => {
    const start = (currentPage - 1) * pageSize;
    return sortedData.slice(start, start + pageSize);
  }, [sortedData, currentPage, pageSize]);
  
  const totalPages = Math.ceil(data.length / pageSize);
  
  const handleSort = (key: keyof T) => {
    setSort(prev => ({
      key,
      direction: prev.key === key && prev.direction === 'asc' ? 'desc' : 'asc',
    }));
  };
  
  const toggleRowSelection = (index: number) => {
    setSelectedRows(prev => {
      const newSet = new Set(prev);
      if (newSet.has(index)) {
        newSet.delete(index);
      } else {
        newSet.add(index);
      }
      return newSet;
    });
  };
  
  return {
    data: paginatedData,
    currentPage,
    totalPages,
    sort,
    searchQuery,
    selectedRows,
    setCurrentPage,
    handleSort,
    setSearchQuery,
    toggleRowSelection,
  };
};
EOF
git add src/components/data-display/Table/useTable.ts
GIT_AUTHOR_DATE="2025-07-25T01:47:00" GIT_COMMITTER_DATE="2025-07-25T01:47:00" git commit -m "feat: create useTable hook"

# Commit 7
cat > src/components/data-display/Table/TableContext.tsx << 'EOF'
import React, { createContext, useContext, ReactNode } from 'react';

export interface TableContextValue {
  sortBy?: string;
  sortDirection?: 'asc' | 'desc';
  onSort?: (key: string) => void;
  selectedRows?: Set<number>;
  onRowSelect?: (index: number) => void;
}

const TableContext = createContext<TableContextValue | undefined>(undefined);

export const useTableContext = () => {
  const context = useContext(TableContext);
  if (!context) {
    throw new Error('useTableContext must be used within TableProvider');
  }
  return context;
};

export interface TableProviderProps {
  children: ReactNode;
  value: TableContextValue;
}

export const TableProvider: React.FC<TableProviderProps> = ({ children, value }) => {
  return <TableContext.Provider value={value}>{children}</TableContext.Provider>;
};
EOF
git add src/components/data-display/Table/TableContext.tsx
GIT_AUTHOR_DATE="2025-07-25T01:56:00" GIT_COMMITTER_DATE="2025-07-25T01:56:00" git commit -m "feat: implement table context provider"

# DAY 19 - Saturday, July 26, 2025 (5 commits)
echo "Day 19: July 26, 2025 - Advanced card features"

# Commit 1
cat > src/components/data-display/Card/CardCarousel.tsx << 'EOF'
import React, { useState } from 'react';

export interface CardCarouselProps {
  children: React.ReactNode[];
  autoPlay?: boolean;
  interval?: number;
}

export const CardCarousel: React.FC<CardCarouselProps> = ({ 
  children, 
  autoPlay = false,
  interval = 3000 
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  React.useEffect(() => {
    if (!autoPlay) return;
    
    const timer = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % children.length);
    }, interval);
    
    return () => clearInterval(timer);
  }, [autoPlay, interval, children.length]);
  
  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % children.length);
  };
  
  const goToPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + children.length) % children.length);
  };
  
  return (
    <div className="card-carousel relative">
      <div className="carousel-content overflow-hidden">
        <div 
          className="flex transition-transform duration-300"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {children.map((child, index) => (
            <div key={index} className="w-full flex-shrink-0">
              {child}
            </div>
          ))}
        </div>
      </div>
      <button
        onClick={goToPrev}
        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow"
      >
        ←
      </button>
      <button
        onClick={goToNext}
        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow"
      >
        →
      </button>
      <div className="flex justify-center gap-2 mt-4">
        {children.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full ${
              index === currentIndex ? 'bg-blue-600' : 'bg-gray-300'
            }`}
          />
        ))}
      </div>
    </div>
  );
};
EOF
git add src/components/data-display/Card/CardCarousel.tsx
GIT_AUTHOR_DATE="2025-07-26T00:15:00" GIT_COMMITTER_DATE="2025-07-26T00:15:00" git commit -m "feat: implement card carousel component"

# Commit 2
cat > src/components/data-display/Card/CardMasonry.tsx << 'EOF'
import React from 'react';

export interface CardMasonryProps {
  children: React.ReactNode;
  columns?: 2 | 3 | 4;
  gap?: number;
}

export const CardMasonry: React.FC<CardMasonryProps> = ({ 
  children, 
  columns = 3,
  gap = 16 
}) => {
  return (
    <div 
      className="card-masonry"
      style={{
        columnCount: columns,
        columnGap: `${gap}px`,
      }}
    >
      {React.Children.map(children, (child, index) => (
        <div 
          key={index}
          style={{
            breakInside: 'avoid',
            marginBottom: `${gap}px`,
          }}
        >
          {child}
        </div>
      ))}
    </div>
  );
};
EOF
git add src/components/data-display/Card/CardMasonry.tsx
GIT_AUTHOR_DATE="2025-07-26T00:44:00" GIT_COMMITTER_DATE="2025-07-26T00:44:00" git commit -m "feat: create masonry card layout"

# Commit 3
cat > src/components/data-display/Card/FlipCard.tsx << 'EOF'
import React, { useState } from 'react';

export interface FlipCardProps {
  front: React.ReactNode;
  back: React.ReactNode;
  flipOnHover?: boolean;
}

export const FlipCard: React.FC<FlipCardProps> = ({ 
  front, 
  back, 
  flipOnHover = false 
}) => {
  const [isFlipped, setIsFlipped] = useState(false);
  
  const handleFlip = () => {
    if (!flipOnHover) {
      setIsFlipped(!isFlipped);
    }
  };
  
  const handleMouseEnter = () => {
    if (flipOnHover) {
      setIsFlipped(true);
    }
  };
  
  const handleMouseLeave = () => {
    if (flipOnHover) {
      setIsFlipped(false);
    }
  };
  
  return (
    <div 
      className="flip-card perspective-1000 cursor-pointer"
      onClick={handleFlip}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div 
        className={`flip-card-inner relative w-full h-full transition-transform duration-600 transform-style-3d ${
          isFlipped ? 'rotate-y-180' : ''
        }`}
      >
        <div className="flip-card-front absolute w-full h-full backface-hidden">
          {front}
        </div>
        <div className="flip-card-back absolute w-full h-full backface-hidden rotate-y-180">
          {back}
        </div>
      </div>
    </div>
  );
};
EOF
git add src/components/data-display/Card/FlipCard.tsx
GIT_AUTHOR_DATE="2025-07-26T01:13:00" GIT_COMMITTER_DATE="2025-07-26T01:13:00" git commit -m "feat: implement flip card animation"

# Commit 4
cat > src/components/data-display/Card/CardSkeleton.tsx << 'EOF'
import React from 'react';

export interface CardSkeletonProps {
  variant?: 'default' | 'media' | 'profile';
  count?: number;
}

export const CardSkeleton: React.FC<CardSkeletonProps> = ({ 
  variant = 'default',
  count = 1 
}) => {
  const renderSkeleton = () => {
    switch (variant) {
      case 'media':
        return (
          <div className="card-skeleton bg-white rounded-lg shadow p-4 animate-pulse">
            <div className="bg-gray-300 h-48 rounded mb-4" />
            <div className="bg-gray-300 h-4 rounded mb-2" />
            <div className="bg-gray-300 h-4 rounded w-2/3" />
          </div>
        );
      case 'profile':
        return (
          <div className="card-skeleton bg-white rounded-lg shadow p-4 animate-pulse">
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-gray-300 w-12 h-12 rounded-full" />
              <div className="flex-1">
                <div className="bg-gray-300 h-4 rounded mb-2" />
                <div className="bg-gray-300 h-3 rounded w-1/2" />
              </div>
            </div>
            <div className="bg-gray-300 h-4 rounded mb-2" />
            <div className="bg-gray-300 h-4 rounded w-3/4" />
          </div>
        );
      default:
        return (
          <div className="card-skeleton bg-white rounded-lg shadow p-4 animate-pulse">
            <div className="bg-gray-300 h-4 rounded mb-4" />
            <div className="bg-gray-300 h-4 rounded mb-2" />
            <div className="bg-gray-300 h-4 rounded mb-2" />
            <div className="bg-gray-300 h-4 rounded w-2/3" />
          </div>
        );
    }
  };
  
  return (
    <>
      {Array.from({ length: count }).map((_, index) => (
        <div key={index}>{renderSkeleton()}</div>
      ))}
    </>
  );
};
EOF
git add src/components/data-display/Card/CardSkeleton.tsx
GIT_AUTHOR_DATE="2025-07-26T01:39:00" GIT_COMMITTER_DATE="2025-07-26T01:39:00" git commit -m "feat: create card loading skeleton"

# Commit 5
cat > src/components/data-display/Card/useCard.ts << 'EOF'
import { useState, useCallback } from 'react';

export interface UseCardOptions {
  initialExpanded?: boolean;
  onExpand?: () => void;
  onCollapse?: () => void;
}

export const useCard = ({ 
  initialExpanded = false,
  onExpand,
  onCollapse 
}: UseCardOptions = {}) => {
  const [isExpanded, setIsExpanded] = useState(initialExpanded);
  const [isHovered, setIsHovered] = useState(false);
  const [isSelected, setIsSelected] = useState(false);
  
  const expand = useCallback(() => {
    setIsExpanded(true);
    onExpand?.();
  }, [onExpand]);
  
  const collapse = useCallback(() => {
    setIsExpanded(false);
    onCollapse?.();
  }, [onCollapse]);
  
  const toggle = useCallback(() => {
    if (isExpanded) {
      collapse();
    } else {
      expand();
    }
  }, [isExpanded, expand, collapse]);
  
  const handleMouseEnter = useCallback(() => {
    setIsHovered(true);
  }, []);
  
  const handleMouseLeave = useCallback(() => {
    setIsHovered(false);
  }, []);
  
  const toggleSelection = useCallback(() => {
    setIsSelected(prev => !prev);
  }, []);
  
  return {
    isExpanded,
    isHovered,
    isSelected,
    expand,
    collapse,
    toggle,
    handleMouseEnter,
    handleMouseLeave,
    toggleSelection,
  };
};
EOF
git add src/components/data-display/Card/useCard.ts
GIT_AUTHOR_DATE="2025-07-26T01:52:00" GIT_COMMITTER_DATE="2025-07-26T01:52:00" git commit -m "feat: add useCard hook"

# DAY 20 - Sunday, July 27, 2025 (4 commits)
echo "Day 20: July 27, 2025 - Chart stories and examples"

# Commit 1
cat > src/components/data-display/Charts/Charts.stories.tsx << 'EOF'
import type { Meta, StoryObj } from '@storybook/react';
import { ChartWrapper } from './ChartWrapper';
import { LineChart } from './LineChart';
import { BarChart } from './BarChart';
import { PieChart } from './PieChart';

const meta: Meta<typeof ChartWrapper> = {
  title: 'Data Display/Charts',
  component: ChartWrapper,
};

export default meta;
type Story = StoryObj<typeof ChartWrapper>;

const sampleLineData = [
  { label: 'Jan', value: 30 },
  { label: 'Feb', value: 45 },
  { label: 'Mar', value: 35 },
  { label: 'Apr', value: 50 },
  { label: 'May', value: 60 },
  { label: 'Jun', value: 55 },
];

const sampleBarData = [
  { label: 'Product A', value: 45 },
  { label: 'Product B', value: 30 },
  { label: 'Product C', value: 25 },
  { label: 'Product D', value: 40 },
];

const samplePieData = [
  { label: 'Desktop', value: 60, color: '#3B82F6' },
  { label: 'Mobile', value: 30, color: '#10B981' },
  { label: 'Tablet', value: 10, color: '#F59E0B' },
];

export const LineChartExample: Story = {
  render: () => (
    <ChartWrapper title="Sales Trend" description="Monthly sales data" height={300}>
      <LineChart data={sampleLineData} color="#3B82F6" />
    </ChartWrapper>
  ),
};

export const BarChartExample: Story = {
  render: () => (
    <ChartWrapper title="Product Sales" description="Sales by product" height={300}>
      <BarChart data={sampleBarData} color="#10B981" />
    </ChartWrapper>
  ),
};

export const PieChartExample: Story = {
  render: () => (
    <ChartWrapper title="Device Distribution" description="Traffic by device" height={300}>
      <PieChart data={samplePieData} size={200} />
    </ChartWrapper>
  ),
};

export const LoadingState: Story = {
  render: () => (
    <ChartWrapper title="Loading Chart" height={300} loading>
      <div />
    </ChartWrapper>
  ),
};
EOF
git add src/components/data-display/Charts/Charts.stories.tsx
GIT_AUTHOR_DATE="2025-07-27T00:19:00" GIT_COMMITTER_DATE="2025-07-27T00:19:00" git commit -m "docs: add Storybook stories for charts"

# Commit 2
cat > src/examples/data-display/ChartExamples.tsx << 'EOF'
import React from 'react';
import { ChartWrapper } from '../../components/data-display/Charts/ChartWrapper';
import { LineChart } from '../../components/data-display/Charts/LineChart';
import { BarChart } from '../../components/data-display/Charts/BarChart';
import { PieChart } from '../../components/data-display/Charts/PieChart';
import { ChartLegend } from '../../components/data-display/Charts/ChartLegend';

export const ChartExamples: React.FC = () => {
  const salesData = [
    { label: 'Jan', value: 4500 },
    { label: 'Feb', value: 5200 },
    { label: 'Mar', value: 4800 },
    { label: 'Apr', value: 6100 },
    { label: 'May', value: 7200 },
    { label: 'Jun', value: 6800 },
  ];
  
  const productData = [
    { label: 'Product A', value: 45 },
    { label: 'Product B', value: 30 },
    { label: 'Product C', value: 25 },
    { label: 'Product D', value: 40 },
    { label: 'Product E', value: 35 },
  ];
  
  const deviceData = [
    { label: 'Desktop', value: 60, color: '#3B82F6' },
    { label: 'Mobile', value: 30, color: '#10B981' },
    { label: 'Tablet', value: 10, color: '#F59E0B' },
  ];
  
  const legendItems = [
    { label: 'Desktop', color: '#3B82F6', value: '60%' },
    { label: 'Mobile', color: '#10B981', value: '30%' },
    { label: 'Tablet', color: '#F59E0B', value: '10%' },
  ];
  
  return (
    <div className="examples-container p-6 space-y-8">
      <h1 className="text-2xl font-bold mb-6">Chart Examples</h1>
      
      <section>
        <h2 className="text-xl font-semibold mb-4">Line Chart</h2>
        <ChartWrapper title="Monthly Sales" description="Sales trend over 6 months" height={300}>
          <LineChart data={salesData} color="#3B82F6" showGrid showPoints />
        </ChartWrapper>
      </section>
      
      <section>
        <h2 className="text-xl font-semibold mb-4">Bar Chart</h2>
        <ChartWrapper title="Product Performance" description="Sales by product" height={300}>
          <BarChart data={productData} color="#10B981" />
        </ChartWrapper>
      </section>
      
      <section>
        <h2 className="text-xl font-semibold mb-4">Horizontal Bar Chart</h2>
        <ChartWrapper title="Product Comparison" height={300}>
          <BarChart data={productData} color="#8B5CF6" horizontal />
        </ChartWrapper>
      </section>
      
      <section>
        <h2 className="text-xl font-semibold mb-4">Pie Chart</h2>
        <ChartWrapper title="Device Distribution" description="Traffic by device type" height={300}>
          <PieChart data={deviceData} size={250} showLabels />
        </ChartWrapper>
      </section>
      
      <section>
        <h2 className="text-xl font-semibold mb-4">Chart with Legend</h2>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-4">Traffic Sources</h3>
          <ChartLegend items={legendItems} orientation="horizontal" />
        </div>
      </section>
    </div>
  );
};
EOF
git add src/examples/data-display/ChartExamples.tsx
GIT_AUTHOR_DATE="2025-07-27T00:52:00" GIT_COMMITTER_DATE="2025-07-27T00:52:00" git commit -m "example: create chart usage examples"

# Commit 3
cat > src/components/data-display/Statistics/Statistics.stories.tsx << 'EOF'
import type { Meta, StoryObj } from '@storybook/react';
import { Stat } from './Stat';
import { StatCard } from './StatCard';
import { StatGroup } from './StatGroup';
import { KPICard } from './KPICard';
import { ProgressStat } from './ProgressStat';

const meta: Meta<typeof Stat> = {
  title: 'Data Display/Statistics',
  component: Stat,
};

export default meta;
type Story = StoryObj<typeof Stat>;

export const BasicStat: Story = {
  args: {
    label: 'Total Users',
    value: 1234,
    change: 12.5,
    changeType: 'increase',
  },
};

export const StatCardExample: Story = {
  render: () => (
    <StatCard 
      title="Revenue" 
      value="$50,000" 
      description="Monthly revenue"
      trend={{ value: 15, isPositive: true }}
    />
  ),
};

export const StatGroupExample: Story = {
  render: () => (
    <StatGroup columns={3} gap="md">
      <Stat label="Users" value={1234} change={12} changeType="increase" />
      <Stat label="Revenue" value="$50K" change={8} changeType="increase" />
      <Stat label="Orders" value={567} change={-3} changeType="decrease" />
    </StatGroup>
  ),
};

export const KPICardExample: Story = {
  render: () => (
    <KPICard 
      title="Sales Target" 
      value={75000} 
      target={100000}
      progress={75}
      trend={{ value: 8.5, period: 'this month' }}
    />
  ),
};

export const ProgressStatExample: Story = {
  render: () => (
    <div className="space-y-4">
      <ProgressStat label="Completion" value={75} max={100} color="bg-green-600" />
      <ProgressStat label="Storage Used" value={45} max={100} color="bg-blue-600" />
      <ProgressStat label="CPU Usage" value={90} max={100} color="bg-red-600" />
    </div>
  ),
};
EOF
git add src/components/data-display/Statistics/Statistics.stories.tsx
GIT_AUTHOR_DATE="2025-07-27T01:28:00" GIT_COMMITTER_DATE="2025-07-27T01:28:00" git commit -m "docs: add Storybook stories for statistics"

# Commit 4
cat > src/examples/data-display/StatisticsExamples.tsx << 'EOF'
import React from 'react';
import { Stat } from '../../components/data-display/Statistics/Stat';
import { StatCard } from '../../components/data-display/Statistics/StatCard';
import { StatGroup } from '../../components/data-display/Statistics/StatGroup';
import { KPICard } from '../../components/data-display/Statistics/KPICard';
import { ProgressStat } from '../../components/data-display/Statistics/ProgressStat';
import { MetricsDisplay } from '../../components/data-display/Statistics/MetricsDisplay';

export const StatisticsExamples: React.FC = () => {
  const metrics = [
    { label: 'Total Users', value: '12.5K', color: '#3B82F6' },
    { label: 'Revenue', value: '$45K', color: '#10B981' },
    { label: 'Orders', value: 892, color: '#F59E0B' },
    { label: 'Conversion', value: '3.2%', color: '#8B5CF6' },
  ];
  
  return (
    <div className="examples-container p-6 space-y-8">
      <h1 className="text-2xl font-bold mb-6">Statistics Examples</h1>
      
      <section>
        <h2 className="text-xl font-semibold mb-4">Basic Stats</h2>
        <StatGroup columns={4} gap="md">
          <Stat label="Total Users" value={12543} change={12.5} changeType="increase" />
          <Stat label="Revenue" value="$45,230" change={8.3} changeType="increase" />
          <Stat label="Orders" value={892} change={-2.1} changeType="decrease" />
          <Stat label="Conversion" value="3.2%" change={0.5} changeType="increase" />
        </StatGroup>
      </section>
      
      <section>
        <h2 className="text-xl font-semibold mb-4">Stat Cards</h2>
        <div className="grid grid-cols-3 gap-4">
          <StatCard 
            title="Total Revenue" 
            value="$125,430" 
            description="Last 30 days"
            trend={{ value: 15.3, isPositive: true }}
          />
          <StatCard 
            title="New Customers" 
            value={234} 
            description="This month"
            trend={{ value: 8.7, isPositive: true }}
          />
          <StatCard 
            title="Bounce Rate" 
            value="42.3%" 
            description="Average"
            trend={{ value: -3.2, isPositive: false }}
          />
        </div>
      </section>
      
      <section>
        <h2 className="text-xl font-semibold mb-4">KPI Cards</h2>
        <div className="grid grid-cols-2 gap-4">
          <KPICard 
            title="Sales Target" 
            value={75000} 
            target={100000}
            progress={75}
            trend={{ value: 8.5, period: 'this month' }}
          />
          <KPICard 
            title="Customer Satisfaction" 
            value={4.8} 
            target={5.0}
            progress={96}
            trend={{ value: 2.1, period: 'this quarter' }}
          />
        </div>
      </section>
      
      <section>
        <h2 className="text-xl font-semibold mb-4">Progress Stats</h2>
        <div className="space-y-4 max-w-md">
          <ProgressStat label="Project Completion" value={75} max={100} color="bg-green-600" />
          <ProgressStat label="Storage Used" value={45} max={100} color="bg-blue-600" />
          <ProgressStat label="CPU Usage" value={90} max={100} color="bg-red-600" size="lg" />
        </div>
      </section>
      
      <section>
        <h2 className="text-xl font-semibold mb-4">Metrics Display</h2>
        <MetricsDisplay metrics={metrics} layout="grid" />
      </section>
    </div>
  );
};
EOF
git add src/examples/data-display/StatisticsExamples.tsx
GIT_AUTHOR_DATE="2025-07-27T01:47:00" GIT_COMMITTER_DATE="2025-07-27T01:47:00" git commit -m "example: create statistics usage examples"

# DAY 21 - Monday, July 28, 2025 (6 commits)
echo "Day 21: July 28, 2025 - Documentation and final components"

# Commit 1
cat > docs/components/data-display/README.md << 'EOF'
# Data Display Components

## Overview
A comprehensive collection of components for displaying data in various formats including tables, cards, lists, charts, and statistics.

## Components

### Tables
- **Table**: Base table component with sorting, filtering, and pagination
- **VirtualTable**: High-performance table with virtual scrolling
- **TableToolbar**: Toolbar with search, filters, and actions
- **TableExport**: Export table data to CSV or JSON

### Cards
- **Card**: Flexible card component with header, body, and footer
- **CardGrid**: Responsive grid layout for cards
- **CardCarousel**: Carousel for displaying multiple cards
- **CardMasonry**: Masonry layout for cards
- **FlipCard**: Card with flip animation

### Lists
- **List**: Base list component
- **OrderedList**: Numbered list
- **UnorderedList**: Bulleted list
- **DescriptionList**: Key-value pair list
- **NestedList**: Multi-level list

### Avatars
- **Avatar**: User avatar with image or initials
- **AvatarGroup**: Group of overlapping avatars
- **AvatarBadge**: Avatar with status indicator

### Statistics
- **Stat**: Basic statistic display
- **StatCard**: Statistic in card format
- **KPICard**: Key Performance Indicator card
- **ProgressStat**: Statistic with progress bar
- **MetricsDisplay**: Grid of metrics

### Charts
- **LineChart**: Line chart for trends
- **BarChart**: Bar chart for comparisons
- **PieChart**: Pie chart for proportions
- **ChartWrapper**: Container for charts with title and description
- **ChartLegend**: Legend for charts

## Installation

```bash
npm install @your-library/data-display
```

## Quick Start

```tsx
import { Table, Card, Stat } from '@your-library/data-display';

function Dashboard() {
  return (
    <div>
      <Stat label="Users" value={1234} change={12} changeType="increase" />
      <Card>
        <Table data={myData} />
      </Card>
    </div>
  );
}
```

## Features

- **TypeScript Support**: Full TypeScript definitions
- **Responsive Design**: Mobile-first responsive layouts
- **Accessibility**: WCAG 2.1 AA compliant
- **Customizable**: Extensive theming and styling options
- **Performance**: Optimized for large datasets
- **Testing**: Comprehensive test coverage

## Documentation

- [Table Components](./table.md)
- [Card Components](./card.md)
- [List Components](./list.md)
- [Avatar Components](./avatar.md)
- [Statistics Components](./statistics.md)
- [Chart Components](./charts.md)
- [Accessibility Guidelines](./accessibility.md)
- [Best Practices](./best-practices.md)

## Support

For issues and questions, please visit our [GitHub repository](https://github.com/your-org/your-library).
EOF
git add docs/components/data-display/README.md
GIT_AUTHOR_DATE="2025-07-28T00:11:00" GIT_COMMITTER_DATE="2025-07-28T00:11:00" git commit -m "docs: create data display components overview"

# Commit 2
cat > docs/components/data-display/accessibility.md << 'EOF'
# Accessibility Guidelines for Data Display Components

## Overview
All data display components follow WCAG 2.1 AA standards to ensure accessibility for all users.

## Tables

### Keyboard Navigation
- Use Tab to navigate between interactive elements
- Use Arrow keys to navigate table cells
- Use Enter/Space to activate buttons and links

### Screen Reader Support
- Tables use proper semantic HTML (`<table>`, `<thead>`, `<tbody>`)
- Column headers use `<th>` with `scope="col"`
- Row headers use `<th>` with `scope="row"`
- Complex tables include `aria-label` or `aria-labelledby`

### Best Practices
```tsx
<Table
  aria-label="User data table"
  caption="List of registered users"
>
  {/* table content */}
</Table>
```

## Cards

### Focus Management
- Cards with actions are keyboard accessible
- Focus indicators are clearly visible
- Tab order follows logical reading order

### ARIA Attributes
```tsx
<Card
  role="article"
  aria-labelledby="card-title"
>
  <h3 id="card-title">Card Title</h3>
  {/* card content */}
</Card>
```

## Lists

### Semantic HTML
- Use `<ul>` for unordered lists
- Use `<ol>` for ordered lists
- Use `<dl>` for description lists

### Navigation Lists
```tsx
<nav aria-label="Main navigation">
  <List role="navigation">
    {/* list items */}
  </List>
</nav>
```

## Charts

### Alternative Text
- Provide text alternatives for visual data
- Include data tables for complex charts
- Use `aria-label` to describe chart purpose

### Color Contrast
- Ensure sufficient contrast ratios (4.5:1 minimum)
- Don't rely solely on color to convey information
- Provide patterns or labels in addition to colors

### Example
```tsx
<ChartWrapper
  aria-label="Monthly sales chart showing upward trend"
  role="img"
>
  <LineChart data={salesData} />
  <table className="sr-only">
    {/* data table for screen readers */}
  </table>
</ChartWrapper>
```

## Statistics

### Meaningful Labels
- Use descriptive labels for all statistics
- Include units of measurement
- Provide context for trends

### Live Regions
```tsx
<Stat
  label="Active Users"
  value={count}
  aria-live="polite"
  aria-atomic="true"
/>
```

## General Guidelines

### Color Contrast
- Text: 4.5:1 minimum contrast ratio
- Large text (18pt+): 3:1 minimum
- Interactive elements: 3:1 minimum

### Focus Indicators
- Visible focus indicators on all interactive elements
- Minimum 2px outline or border
- High contrast with background

### Keyboard Support
- All functionality available via keyboard
- Logical tab order
- No keyboard traps

### Screen Reader Testing
- Test with NVDA (Windows)
- Test with JAWS (Windows)
- Test with VoiceOver (macOS/iOS)

## Testing Checklist

- [ ] All interactive elements are keyboard accessible
- [ ] Focus indicators are visible
- [ ] Color contrast meets WCAG AA standards
- [ ] Screen readers announce content correctly
- [ ] ARIA attributes are used appropriately
- [ ] Alternative text provided for visual content
- [ ] Forms have proper labels and error messages
- [ ] Dynamic content updates are announced

## Resources

- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [ARIA Authoring Practices](https://www.w3.org/WAI/ARIA/apg/)
- [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)
EOF
git add docs/components/data-display/accessibility.md
GIT_AUTHOR_DATE="2025-07-28T00:37:00" GIT_COMMITTER_DATE="2025-07-28T00:37:00" git commit -m "docs: create accessibility guidelines"

# Commit 3
cat > docs/components/data-display/best-practices.md << 'EOF'
# Best Practices for Data Display Components

## Tables

### Performance
- Use virtual scrolling for tables with 100+ rows
- Implement pagination for better UX
- Debounce search and filter operations
- Memoize expensive calculations

```tsx
const MemoizedTable = React.memo(Table);

function DataView() {
  const sortedData = useMemo(() => 
    sortData(data, sortKey), 
    [data, sortKey]
  );
  
  return <MemoizedTable data={sortedData} />;
}
```

### Data Management
- Keep data fetching separate from display logic
- Use proper loading and error states
- Implement optimistic updates for better UX
- Cache frequently accessed data

### User Experience
- Provide clear column headers
- Show loading indicators during data fetch
- Display empty states with helpful messages
- Allow column resizing and reordering

## Cards

### Layout
- Use consistent card sizes within a grid
- Maintain proper spacing between cards
- Ensure cards are responsive across devices
- Use skeleton loaders during data fetch

### Content
- Keep card content concise and scannable
- Use clear hierarchy with headings
- Include relevant actions in footer
- Provide visual feedback on hover/focus

### Performance
- Lazy load images in cards
- Virtualize long lists of cards
- Use CSS Grid or Flexbox for layouts
- Optimize re-renders with React.memo

## Charts

### Data Visualization
- Choose appropriate chart type for data
- Keep charts simple and focused
- Use consistent color schemes
- Provide legends and labels

### Accessibility
- Include alternative text descriptions
- Provide data tables for screen readers
- Ensure sufficient color contrast
- Support keyboard navigation

### Performance
- Limit data points for better performance
- Use canvas for large datasets
- Implement data aggregation
- Debounce interactive updates

## Statistics

### Display
- Use appropriate number formatting
- Show trends with clear indicators
- Provide context with comparisons
- Use consistent units and scales

### Updates
- Animate value changes smoothly
- Use live regions for dynamic updates
- Highlight significant changes
- Provide historical context

## General Guidelines

### State Management
```tsx
// Good: Centralized state
const [tableState, setTableState] = useState({
  data: [],
  loading: false,
  error: null,
  page: 1,
  sortBy: 'name',
});

// Avoid: Multiple useState calls
const [data, setData] = useState([]);
const [loading, setLoading] = useState(false);
const [error, setError] = useState(null);
// ... more states
```

### Error Handling
```tsx
function DataTable() {
  const { data, error, loading } = useData();
  
  if (loading) return <TableSkeleton />;
  if (error) return <ErrorMessage error={error} />;
  if (!data.length) return <EmptyState />;
  
  return <Table data={data} />;
}
```

### Responsive Design
```tsx
// Use responsive props
<StatGroup 
  columns={{ sm: 1, md: 2, lg: 4 }}
  gap={{ sm: 'sm', md: 'md', lg: 'lg' }}
/>

// Or use CSS Grid
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
  {stats.map(stat => <Stat key={stat.id} {...stat} />)}
</div>
```

### Testing
- Write unit tests for component logic
- Test accessibility with automated tools
- Perform manual keyboard testing
- Test with real screen readers
- Verify responsive behavior

### Documentation
- Document all props with TypeScript
- Provide usage examples
- Include accessibility notes
- Document performance considerations

## Anti-Patterns to Avoid

### Don't
- ❌ Fetch data inside display components
- ❌ Use inline styles for theming
- ❌ Ignore loading and error states
- ❌ Forget keyboard accessibility
- ❌ Use tables for layout
- ❌ Rely solely on color for information

### Do
- ✅ Separate data fetching from display
- ✅ Use CSS classes or styled-components
- ✅ Handle all component states
- ✅ Support keyboard navigation
- ✅ Use semantic HTML
- ✅ Provide multiple visual cues

## Performance Optimization

### Code Splitting
```tsx
const HeavyChart = lazy(() => import('./HeavyChart'));

function Dashboard() {
  return (
    <Suspense fallback={<ChartSkeleton />}>
      <HeavyChart data={data} />
    </Suspense>
  );
}
```

### Memoization
```tsx
const expensiveCalculation = useMemo(() => {
  return processLargeDataset(data);
}, [data]);

const MemoizedRow = React.memo(TableRow, (prev, next) => {
  return prev.id === next.id && prev.selected === next.selected;
});
```

### Virtualization
```tsx
import { VirtualTable } from '@your-library/data-display';

<VirtualTable
  data={largeDataset}
  rowHeight={50}
  visibleRows={20}
  renderRow={(item) => <TableRow {...item} />}
/>
```
EOF
git add docs/components/data-display/best-practices.md
GIT_AUTHOR_DATE="2025-07-28T01:03:00" GIT_COMMITTER_DATE="2025-07-28T01:03:00" git commit -m "docs: document best practices"

# Commit 4
cat > docs/components/data-display/migration.md << 'EOF'
# Migration Guide

## Migrating from v1 to v2

### Breaking Changes

#### Table Component
**Before (v1):**
```tsx
<Table 
  data={data}
  onSort={(key) => handleSort(key)}
  sortable
/>
```

**After (v2):**
```tsx
<Table 
  data={data}
  sortConfig={{ key: 'name', direction: 'asc' }}
  onSortChange={(config) => handleSort(config)}
/>
```

#### Card Component
**Before (v1):**
```tsx
<Card elevated shadow="md">
  <CardTitle>Title</CardTitle>
  <CardContent>Content</CardContent>
</Card>
```

**After (v2):**
```tsx
<Card variant="elevated">
  <CardHeader>
    <h3>Title</h3>
  </CardHeader>
  <CardBody>Content</CardBody>
</Card>
```

### New Features

#### Virtual Scrolling
```tsx
import { VirtualTable } from '@your-library/data-display';

<VirtualTable
  data={largeDataset}
  rowHeight={50}
  visibleRows={20}
  renderRow={(item) => <Row {...item} />}
/>
```

#### Chart Components
```tsx
import { ChartWrapper, LineChart } from '@your-library/data-display';

<ChartWrapper title="Sales">
  <LineChart data={salesData} />
</ChartWrapper>
```

### Deprecated APIs

#### Removed in v2
- `Table.sortable` prop - Use `sortConfig` instead
- `Card.shadow` prop - Use `variant` instead
- `List.bullet` prop - Use `UnorderedList` component

#### Migration Steps

1. **Update imports:**
```tsx
// Before
import { Table, Card } from '@your-library/components';

// After
import { Table, Card } from '@your-library/data-display';
```

2. **Update prop names:**
```tsx
// Before
<Table sortable onSort={handleSort} />

// After
<Table sortConfig={config} onSortChange={handleSort} />
```

3. **Update component structure:**
```tsx
// Before
<Card>
  <CardTitle>Title</CardTitle>
  <CardContent>Content</CardContent>
</Card>

// After
<Card>
  <CardHeader>Title</CardHeader>
  <CardBody>Content</CardBody>
</Card>
```

### Codemod

We provide a codemod to automate most migrations:

```bash
npx @your-library/codemod v1-to-v2 path/to/src
```

### Support

If you encounter issues during migration:
- Check the [changelog](./CHANGELOG.md)
- Review [examples](../../examples/data-display)
- Open an issue on [GitHub](https://github.com/your-org/your-library)
EOF
git add docs/components/data-display/migration.md
GIT_AUTHOR_DATE="2025-07-28T01:28:00" GIT_COMMITTER_DATE="2025-07-28T01:28:00" git commit -m "docs: create migration guide"

# Commit 5
cat > docs/components/data-display/api-reference.md << 'EOF'
# API Reference

## Table Components

### Table
```tsx
interface TableProps<T> {
  data: T[];
  columns: Column<T>[];
  sortConfig?: SortConfig;
  onSortChange?: (config: SortConfig) => void;
  loading?: boolean;
  emptyMessage?: string;
}
```

### VirtualTable
```tsx
interface VirtualTableProps<T> {
  data: T[];
  rowHeight: number;
  visibleRows: number;
  renderRow: (item: T, index: number) => ReactNode;
}
```

## Card Components

### Card
```tsx
interface CardProps {
  variant?: 'default' | 'elevated' | 'outlined';
  children: ReactNode;
  onClick?: () => void;
  className?: string;
}
```

### CardHeader
```tsx
interface CardHeaderProps {
  children: ReactNode;
  actions?: ReactNode;
}
```

### CardBody
```tsx
interface CardBodyProps {
  children: ReactNode;
  padding?: 'none' | 'sm' | 'md' | 'lg';
}
```

### CardFooter
```tsx
interface CardFooterProps {
  children: ReactNode;
  align?: 'left' | 'center' | 'right';
}
```

## List Components

### List
```tsx
interface ListProps {
  children: ReactNode;
  spacing?: 'tight' | 'normal' | 'loose';
}
```

### ListItem
```tsx
interface ListItemProps {
  children: ReactNode;
  icon?: ReactNode;
  onClick?: () => void;
  selected?: boolean;
}
```

## Avatar Components

### Avatar
```tsx
interface AvatarProps {
  src?: string;
  alt: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  shape?: 'circle' | 'square' | 'rounded';
}
```

### AvatarGroup
```tsx
interface AvatarGroupProps {
  children: ReactNode;
  max?: number;
  spacing?: 'tight' | 'normal' | 'loose';
}
```

## Statistics Components

### Stat
```tsx
interface StatProps {
  label: string;
  value: string | number;
  change?: number;
  changeType?: 'increase' | 'decrease';
  icon?: ReactNode;
}
```

### StatCard
```tsx
interface StatCardProps {
  title: string;
  value: string | number;
  description?: string;
  trend?: {
    value: number;
    isPositive: boolean;
  };
  icon?: ReactNode;
}
```

### KPICard
```tsx
interface KPICardProps {
  title: string;
  value: string | number;
  target?: string | number;
  progress?: number;
  trend?: {
    value: number;
    period: string;
  };
}
```

## Chart Components

### ChartWrapper
```tsx
interface ChartWrapperProps {
  title?: string;
  description?: string;
  children: ReactNode;
  height?: number;
  loading?: boolean;
}
```

### LineChart
```tsx
interface LineChartProps {
  data: { label: string; value: number }[];
  color?: string;
  showGrid?: boolean;
  showPoints?: boolean;
}
```

### BarChart
```tsx
interface BarChartProps {
  data: { label: string; value: number }[];
  color?: string;
  horizontal?: boolean;
}
```

### PieChart
```tsx
interface PieChartProps {
  data: { label: string; value: number; color?: string }[];
  size?: number;
  showLabels?: boolean;
}
```

## Utility Functions

### Data Formatters
```tsx
formatCurrency(value: number, currency?: string): string
formatPercentage(value: number, decimals?: number): string
formatCompactNumber(value: number): string
formatBytes(bytes: number, decimals?: number): string
```

### Sort Utilities
```tsx
sortByKey<T>(array: T[], key: keyof T, direction?: SortDirection): T[]
sortByDate<T>(array: T[], key: keyof T, direction?: SortDirection): T[]
```

### Filter Utilities
```tsx
filterBySearch<T>(array: T[], searchTerm: string, keys: (keyof T)[]): T[]
filterByRange<T>(array: T[], key: keyof T, min: number, max: number): T[]
```

## Hooks

### useTable
```tsx
interface UseTableOptions<T> {
  data: T[];
  pageSize?: number;
  sortBy?: keyof T;
  sortDirection?: 'asc' | 'desc';
}

const {
  data,
  currentPage,
  totalPages,
  sort,
  selectedRows,
  setCurrentPage,
  handleSort,
  toggleRowSelection,
} = useTable(options);
```

### useCard
```tsx
interface UseCardOptions {
  initialExpanded?: boolean;
  onExpand?: () => void;
  onCollapse?: () => void;
}

const {
  isExpanded,
  isHovered,
  isSelected,
  expand,
  collapse,
  toggle,
  handleMouseEnter,
  handleMouseLeave,
  toggleSelection,
} = useCard(options);
```
EOF
git add docs/components/data-display/api-reference.md
GIT_AUTHOR_DATE="2025-07-28T01:45:00" GIT_COMMITTER_DATE="2025-07-28T01:45:00" git commit -m "docs: create comprehensive API reference"

# Commit 6
cat > docs/components/data-display/troubleshooting.md << 'EOF'
# Troubleshooting Guide

## Common Issues

### Table Not Sorting

**Problem:** Table columns don't sort when clicked.

**Solution:**
```tsx
// Make sure you're handling the sort event
<Table
  data={data}
  sortConfig={sortConfig}
  onSortChange={(config) => setSortConfig(config)}
/>

// And applying the sort to your data
const sortedData = useMemo(() => {
  return sortByKey(data, sortConfig.key, sortConfig.direction);
}, [data, sortConfig]);
```

### Virtual Table Performance Issues

**Problem:** Virtual table is slow or janky.

**Solutions:**
1. Ensure row height is consistent
2. Memoize the renderRow function
3. Use React.memo for row components

```tsx
const MemoizedRow = React.memo(TableRow);

<VirtualTable
  data={data}
  rowHeight={50} // Must be consistent
  renderRow={useCallback((item) => (
    <MemoizedRow {...item} />
  ), [])}
/>
```

### Chart Not Rendering

**Problem:** Chart appears blank or doesn't render.

**Solutions:**
1. Check data format
2. Ensure parent has defined height
3. Verify chart wrapper has height prop

```tsx
// Parent must have height
<div style={{ height: '400px' }}>
  <ChartWrapper height={300}>
    <LineChart data={validData} />
  </ChartWrapper>
</div>
```

### Card Images Not Loading

**Problem:** Images in cards don't load or appear broken.

**Solutions:**
1. Verify image URLs are correct
2. Add error handling
3. Use placeholder images

```tsx
<CardMedia
  src={imageUrl}
  alt="Description"
  onError={(e) => {
    e.currentTarget.src = '/placeholder.jpg';
  }}
/>
```

### Statistics Not Updating

**Problem:** Stat values don't update when data changes.

**Solution:**
```tsx
// Ensure you're passing new values, not mutating
const [stats, setStats] = useState({ value: 100 });

// Wrong: Mutating state
stats.value = 200;

// Correct: Creating new object
setStats({ value: 200 });
```

## Performance Issues

### Slow Table Rendering

**Symptoms:** Table takes long to render or update.

**Solutions:**
1. Implement pagination
2. Use virtual scrolling
3. Memoize expensive calculations
4. Debounce search/filter

```tsx
const debouncedSearch = useMemo(
  () => debounce((query) => setSearchQuery(query), 300),
  []
);
```

### Memory Leaks

**Symptoms:** App slows down over time.

**Solutions:**
1. Clean up event listeners
2. Cancel pending requests
3. Clear timers

```tsx
useEffect(() => {
  const timer = setInterval(() => {
    // Update logic
  }, 1000);
  
  return () => clearInterval(timer);
}, []);
```

## Styling Issues

### Components Not Styled

**Problem:** Components appear unstyled.

**Solutions:**
1. Import CSS file
2. Check Tailwind configuration
3. Verify class names

```tsx
// Import styles
import '@your-library/data-display/dist/styles.css';

// Or use Tailwind
import 'tailwindcss/tailwind.css';
```

### Custom Styles Not Applied

**Problem:** Custom styles are overridden.

**Solutions:**
1. Use className prop
2. Increase specificity
3. Use !important (last resort)

```tsx
<Card className="my-custom-card">
  {/* content */}
</Card>

// In CSS
.my-custom-card {
  /* Your styles */
}
```

## TypeScript Issues

### Type Errors

**Problem:** TypeScript shows type errors.

**Solutions:**
1. Install type definitions
2. Use generic types correctly
3. Check prop types

```tsx
// Correct generic usage
interface User {
  id: number;
  name: string;
}

<Table<User>
  data={users}
  columns={columns}
/>
```

## Accessibility Issues

### Keyboard Navigation Not Working

**Problem:** Can't navigate with keyboard.

**Solutions:**
1. Ensure tabIndex is set
2. Add keyboard event handlers
3. Check focus management

```tsx
<div
  tabIndex={0}
  onKeyDown={(e) => {
    if (e.key === 'Enter') {
      handleAction();
    }
  }}
>
  {/* content */}
</div>
```

### Screen Reader Issues

**Problem:** Screen reader doesn't announce content.

**Solutions:**
1. Add ARIA labels
2. Use semantic HTML
3. Provide alternative text

```tsx
<Table
  aria-label="User data"
  role="table"
>
  {/* table content */}
</Table>
```

## Getting Help

If you can't resolve your issue:

1. Check the [documentation](./README.md)
2. Search [existing issues](https://github.com/your-org/your-library/issues)
3. Create a [new issue](https://github.com/your-org/your-library/issues/new) with:
   - Clear description
   - Code example
   - Expected vs actual behavior
   - Environment details

## Debug Mode

Enable debug mode for additional logging:

```tsx
import { setDebugMode } from '@your-library/data-display';

setDebugMode(true);
```
EOF
git add docs/components/data-display/troubleshooting.md
GIT_AUTHOR_DATE="2025-07-28T01:57:00" GIT_COMMITTER_DATE="2025-07-28T01:57:00" git commit -m "docs: create troubleshooting guide"

echo "July 2025 Part 2 complete! All commits for Days 11-21 have been created."
echo "Total commits in Part 2: 45 commits across 11 working days"
