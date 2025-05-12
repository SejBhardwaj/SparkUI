import { render, screen, fireEvent } from '@testing-library/react';
import { Sidebar } from './Sidebar';
import { SidebarItem } from './SidebarItem';

describe('Sidebar', () => {
  it('renders sidebar with items', () => {
    render(
      <Sidebar>
        <SidebarItem href="/">Home</SidebarItem>
        <SidebarItem href="/about">About</SidebarItem>
      </Sidebar>
    );
    
    expect(screen.getByLabelText('Sidebar navigation')).toBeInTheDocument();
    expect(screen.getByText('Home')).toBeInTheDocument();
  });
  
  it('toggles collapse state', () => {
    render(
      <Sidebar collapsible>
        <SidebarItem>Item</SidebarItem>
      </Sidebar>
    );
    
    const toggleButton = screen.getByLabelText('Collapse sidebar');
    fireEvent.click(toggleButton);
    
    expect(screen.getByLabelText('Expand sidebar')).toBeInTheDocument();
  });
  
  it('renders with different variants', () => {
    const { container } = render(
      <Sidebar variant="overlay">
        <SidebarItem>Item</SidebarItem>
      </Sidebar>
    );
    
    expect(container.querySelector('.sidebar-overlay')).toBeInTheDocument();
  });
});
