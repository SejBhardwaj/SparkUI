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
