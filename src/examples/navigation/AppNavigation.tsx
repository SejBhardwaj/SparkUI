import React from 'react';
import { Navbar } from '../../components/navigation/Navbar/Navbar';
import { NavbarItem } from '../../components/navigation/Navbar/NavbarItem';
import { NavbarDropdown } from '../../components/navigation/Navbar/NavbarDropdown';
import { NavbarSearch } from '../../components/navigation/Navbar/NavbarSearch';
import { Breadcrumb } from '../../components/navigation/Breadcrumb/Breadcrumb';
import { BreadcrumbItem } from '../../components/navigation/Breadcrumb/BreadcrumbItem';

export const AppNavigation: React.FC = () => {
  return (
    <>
      <Navbar variant="sticky" position="top">
        <div className="navbar-brand">
          <img src="/logo.png" alt="Logo" />
          <span>MyApp</span>
        </div>
        
        <div className="navbar-menu">
          <NavbarItem href="/">Home</NavbarItem>
          <NavbarItem href="/features">Features</NavbarItem>
          
          <NavbarDropdown trigger="Products">
            <NavbarItem href="/products/web">Web Apps</NavbarItem>
            <NavbarItem href="/products/mobile">Mobile Apps</NavbarItem>
            <NavbarItem href="/products/desktop">Desktop Apps</NavbarItem>
          </NavbarDropdown>
          
          <NavbarItem href="/pricing">Pricing</NavbarItem>
          <NavbarItem href="/about">About</NavbarItem>
        </div>
        
        <NavbarSearch onSearch={(query) => console.log('Search:', query)} />
        
        <div className="navbar-actions">
          <NavbarItem href="/login">Login</NavbarItem>
          <NavbarItem href="/signup">Sign Up</NavbarItem>
        </div>
      </Navbar>
      
      <Breadcrumb>
        <BreadcrumbItem href="/">Home</BreadcrumbItem>
        <BreadcrumbItem href="/products">Products</BreadcrumbItem>
        <BreadcrumbItem active>Web Apps</BreadcrumbItem>
      </Breadcrumb>
    </>
  );
};
