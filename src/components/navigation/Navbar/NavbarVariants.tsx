import React from 'react';
import { Navbar, NavbarProps } from './Navbar';

export const FixedNavbar: React.FC<NavbarProps> = (props) => <Navbar variant="fixed" {...props} />;
export const StickyNavbar: React.FC<NavbarProps> = (props) => <Navbar variant="sticky" {...props} />;
export const TransparentNavbar: React.FC<NavbarProps> = (props) => <Navbar variant="transparent" {...props} />;

export const navbarVariantStyles = {
  fixed: 'fixed top-0 left-0 right-0 z-50',
  sticky: 'sticky top-0 z-40',
  transparent: 'bg-transparent backdrop-blur-sm',
};
