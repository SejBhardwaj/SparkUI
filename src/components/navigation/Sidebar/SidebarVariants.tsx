import React from 'react';
import { Sidebar, SidebarProps } from './Sidebar';

export const FixedSidebar: React.FC<Omit<SidebarProps, 'variant'>> = (props) => (
  <Sidebar variant="fixed" {...props} />
);

export const OverlaySidebar: React.FC<Omit<SidebarProps, 'variant'>> = (props) => (
  <Sidebar variant="overlay" {...props} />
);

export const PushSidebar: React.FC<Omit<SidebarProps, 'variant'>> = (props) => (
  <Sidebar variant="push" {...props} />
);

export const sidebarVariantStyles = {
  fixed: 'fixed top-0 bottom-0 z-40',
  overlay: 'fixed top-0 bottom-0 z-50 shadow-xl',
  push: 'relative',
};

export const sidebarPositionStyles = {
  left: 'left-0',
  right: 'right-0',
};
