import type { Meta, StoryObj } from '@storybook/react';
import { Tabs } from './Tabs';
import { TabList, Tab } from './TabList';
import { TabPanel } from './TabPanel';

const meta: Meta<typeof Tabs> = {
  title: 'Navigation/Tabs',
  component: Tabs,
};

export default meta;
type Story = StoryObj<typeof Tabs>;

export const Default: Story = {
  render: () => (
    <Tabs defaultTab="home">
      <TabList>
        <Tab value="home">Home</Tab>
        <Tab value="profile">Profile</Tab>
        <Tab value="settings">Settings</Tab>
      </TabList>
      <TabPanel value="home">Home content</TabPanel>
      <TabPanel value="profile">Profile content</TabPanel>
      <TabPanel value="settings">Settings content</TabPanel>
    </Tabs>
  ),
};

export const WithIcons: Story = {
  render: () => (
    <Tabs defaultTab="home">
      <TabList>
        <Tab value="home">🏠 Home</Tab>
        <Tab value="profile">👤 Profile</Tab>
        <Tab value="settings">⚙️ Settings</Tab>
      </TabList>
      <TabPanel value="home">Home content</TabPanel>
      <TabPanel value="profile">Profile content</TabPanel>
      <TabPanel value="settings">Settings content</TabPanel>
    </Tabs>
  ),
};
