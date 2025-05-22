import React from 'react';
import { Sidebar } from '../../components/navigation/Sidebar/Sidebar';
import { SidebarItem } from '../../components/navigation/Sidebar/SidebarItem';
import { SidebarGroup } from '../../components/navigation/Sidebar/SidebarGroup';
import { Navbar } from '../../components/navigation/Navbar/Navbar';
import { NavbarItem } from '../../components/navigation/Navbar/NavbarItem';

export const DashboardLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="dashboard-layout">
      <Navbar variant="fixed" position="top">
        <div className="navbar-brand">Dashboard</div>
        <NavbarItem href="/profile">Profile</NavbarItem>
        <NavbarItem href="/settings">Settings</NavbarItem>
      </Navbar>
      
      <div className="dashboard-content">
        <Sidebar variant="fixed" position="left" collapsible>
          <SidebarItem icon="🏠" href="/" active>Dashboard</SidebarItem>
          <SidebarGroup title="Analytics">
            <SidebarItem icon="📊" href="/analytics/overview">Overview</SidebarItem>
            <SidebarItem icon="📈" href="/analytics/reports">Reports</SidebarItem>
          </SidebarGroup>
          <SidebarGroup title="Management">
            <SidebarItem icon="👥" href="/users">Users</SidebarItem>
            <SidebarItem icon="⚙️" href="/settings">Settings</SidebarItem>
          </SidebarGroup>
        </Sidebar>
        
        <main className="dashboard-main">
          {children}
        </main>
      </div>
    </div>
  );
};
