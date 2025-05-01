import type { Meta, StoryObj } from '@storybook/react';
import { Navbar } from './Navbar';
import { NavbarItem } from './NavbarItem';
import { NavbarDropdown } from './NavbarDropdown';

const meta: Meta<typeof Navbar> = {
  title: 'Navigation/Navbar',
  component: Navbar,
};

export default meta;
type Story = StoryObj<typeof Navbar>;

export const Default: Story = {
  render: () => (
    <Navbar>
      <NavbarItem href="/">Home</NavbarItem>
      <NavbarItem href="/about">About</NavbarItem>
      <NavbarItem href="/contact">Contact</NavbarItem>
    </Navbar>
  ),
};

export const WithDropdown: Story = {
  render: () => (
    <Navbar>
      <NavbarItem href="/">Home</NavbarItem>
      <NavbarDropdown trigger="Products">
        <NavbarItem href="/products/1">Product 1</NavbarItem>
        <NavbarItem href="/products/2">Product 2</NavbarItem>
      </NavbarDropdown>
    </Navbar>
  ),
};

export const Sticky: Story = {
  args: {
    variant: 'sticky',
  },
};
