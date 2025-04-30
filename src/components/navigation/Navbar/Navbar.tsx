import React, { forwardRef, HTMLAttributes } from 'react';

export interface NavbarProps extends HTMLAttributes<HTMLElement> {
  variant?: 'fixed' | 'sticky' | 'transparent';
  position?: 'top' | 'bottom';
  children: React.ReactNode;
}

export const Navbar = forwardRef<HTMLElement, NavbarProps>(
  ({ variant = 'fixed', position = 'top', children, className, ...props }, ref) => {
    return (
      <nav
        ref={ref}
        className={`navbar navbar-${variant} navbar-${position} ${className || ''}`}
        role="navigation"
        {...props}
      >
        {children}
      </nav>
    );
  }
);

Navbar.displayName = 'Navbar';
