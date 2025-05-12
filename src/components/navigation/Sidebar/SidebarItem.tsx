import React from 'react';

export interface SidebarItemProps {
  href?: string;
  icon?: React.ReactNode;
  active?: boolean;
  disabled?: boolean;
  onClick?: () => void;
  children: React.ReactNode;
}

export const SidebarItem: React.FC<SidebarItemProps> = ({
  href,
  icon,
  active,
  disabled,
  onClick,
  children,
}) => {
  const className = `sidebar-item ${active ? 'active' : ''} ${disabled ? 'disabled' : ''}`;
  
  const content = (
    <>
      {icon && <span className="sidebar-item-icon">{icon}</span>}
      <span className="sidebar-item-label">{children}</span>
    </>
  );
  
  if (href && !disabled) {
    return (
      <a href={href} className={className} onClick={onClick} aria-current={active ? 'page' : undefined}>
        {content}
      </a>
    );
  }
  
  return (
    <button className={className} onClick={onClick} disabled={disabled}>
      {content}
    </button>
  );
};
