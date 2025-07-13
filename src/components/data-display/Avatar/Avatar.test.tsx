import { render, screen } from '@testing-library/react';
import { AvatarFallback } from './AvatarFallback';
import { AvatarGroup } from './AvatarGroup';
import { AvatarBadge } from './AvatarBadge';

describe('Avatar Components', () => {
  describe('AvatarFallback', () => {
    it('renders initials correctly', () => {
      render(<AvatarFallback name="John Doe" />);
      expect(screen.getByText('JD')).toBeInTheDocument();
    });
    
    it('handles single name', () => {
      render(<AvatarFallback name="John" />);
      expect(screen.getByText('JO')).toBeInTheDocument();
    });
    
    it('applies size classes', () => {
      const { container } = render(<AvatarFallback name="John Doe" size="lg" />);
      expect(container.querySelector('.w-12')).toBeInTheDocument();
    });
  });
  
  describe('AvatarGroup', () => {
    it('renders multiple avatars', () => {
      render(
        <AvatarGroup>
          <AvatarFallback name="John Doe" />
          <AvatarFallback name="Jane Smith" />
        </AvatarGroup>
      );
      expect(screen.getByText('JD')).toBeInTheDocument();
      expect(screen.getByText('JS')).toBeInTheDocument();
    });
    
    it('shows remaining count when max is exceeded', () => {
      render(
        <AvatarGroup max={2}>
          <AvatarFallback name="User 1" />
          <AvatarFallback name="User 2" />
          <AvatarFallback name="User 3" />
          <AvatarFallback name="User 4" />
        </AvatarGroup>
      );
      expect(screen.getByText('+2')).toBeInTheDocument();
    });
  });
  
  describe('AvatarBadge', () => {
    it('renders with correct status color', () => {
      const { container } = render(<AvatarBadge status="online" />);
      expect(container.querySelector('.bg-green-500')).toBeInTheDocument();
    });
  });
});
