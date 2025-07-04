import { render, screen } from '@testing-library/react';
import { Table } from './Table';
describe('Table', () => {
  it('renders table', () => {
    const data = [{ id: 1, name: 'Test' }];
    const columns = [{ key: 'name' as const, label: 'Name' }];
    render(<Table data={data} columns={columns} />);
    expect(screen.getByText('Test')).toBeInTheDocument();
  });
});
