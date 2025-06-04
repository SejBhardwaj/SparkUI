import { render, screen } from '@testing-library/react';
import { Badge } from './Badge';
import { CountBadge, StatusBadge } from './BadgeVariants';

describe('Badge', () => {
  it('renders badge with text', () => {
    render(<Badge>New</Badge>);
    expect(screen.getByText('New')).toBeInTheDocument();
  });
  
  it('applies variant classes', () => {
    const { container } = render(<Badge variant="success">Success</Badge>);
    expect(container.querySelector('.badge-success')).toBeInTheDocument();
  });
  
  it('renders count badge', () => {
    render(<CountBadge count={5} />);
    expect(screen.getByText('5')).toBeInTheDocument();
  });
  
  it('shows max+ for counts over max', () => {
    render(<CountBadge count={150} max={99} />);
    expect(screen.getByText('99+')).toBeInTheDocument();
  });
  
  it('renders status badge', () => {
    render(<StatusBadge status="online" />);
    expect(screen.getByText('online')).toBeInTheDocument();
  });
});
