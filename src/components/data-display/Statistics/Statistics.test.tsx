import { render, screen } from '@testing-library/react';
import { Stat } from './Stat';
describe('Statistics', () => {
  it('renders stat', () => {
    render(<Stat label="Users" value={100} />);
    expect(screen.getByText('Users')).toBeInTheDocument();
  });
});
