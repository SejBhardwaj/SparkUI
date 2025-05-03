import { render, screen } from '@testing-library/react';
import { Breadcrumb } from './Breadcrumb';
import { BreadcrumbItem } from './BreadcrumbItem';

describe('Breadcrumb', () => {
  it('renders breadcrumb navigation', () => {
    render(
      <Breadcrumb>
        <BreadcrumbItem href="/">Home</BreadcrumbItem>
        <BreadcrumbItem href="/products">Products</BreadcrumbItem>
        <BreadcrumbItem active>Details</BreadcrumbItem>
      </Breadcrumb>
    );
    
    expect(screen.getByLabelText('Breadcrumb')).toBeInTheDocument();
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('Details')).toHaveAttribute('aria-current', 'page');
  });
  
  it('renders custom separator', () => {
    const { container } = render(
      <Breadcrumb separator=">">
        <BreadcrumbItem>Home</BreadcrumbItem>
        <BreadcrumbItem>About</BreadcrumbItem>
      </Breadcrumb>
    );
    
    expect(container.textContent).toContain('>');
  });
});
