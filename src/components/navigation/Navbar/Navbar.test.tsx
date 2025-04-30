import { render, screen } from '@testing-library/react';
import { Navbar } from './Navbar';
import { NavbarItem } from './NavbarItem';

describe('Navbar', () => {
  it('renders navbar with items', () => {
    render(
      <Navbar>
        <NavbarItem>Home</NavbarItem>
        <NavbarItem>About</NavbarItem>
      </Navbar>
    );
    expect(screen.getByRole('navigation')).toBeInTheDocument();
    expect(screen.getByText('Home')).toBeInTheDocument();
  });
  
  it('applies variant classes', () => {
    const { container } = render(<Navbar variant="sticky">Content</Navbar>);
    expect(container.querySelector('.navbar-sticky')).toBeInTheDocument();
  });
});
