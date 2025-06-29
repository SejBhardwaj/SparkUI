import { render, screen } from '@testing-library/react';
import { ProgressBar } from './ProgressBar';
import { CircularProgress } from './ProgressVariants';
import { Spinner } from '../Spinner/Spinner';

describe('ProgressBar', () => {
  it('renders progress bar', () => {
    const { container } = render(<ProgressBar value={50} />);
    expect(container.querySelector('.progress-bar')).toBeInTheDocument();
  });
  
  it('displays correct percentage', () => {
    const { container } = render(<ProgressBar value={75} max={100} showLabel />);
    expect(screen.getByText('75%')).toBeInTheDocument();
  });
  
  it('has proper ARIA attributes', () => {
    render(<ProgressBar value={60} max={100} />);
    const progressBar = screen.getByRole('progressbar');
    expect(progressBar).toHaveAttribute('aria-valuenow', '60');
    expect(progressBar).toHaveAttribute('aria-valuemax', '100');
  });
});

describe('CircularProgress', () => {
  it('renders circular progress', () => {
    const { container } = render(<CircularProgress value={50} />);
    expect(container.querySelector('.circular-progress')).toBeInTheDocument();
  });
  
  it('displays percentage label', () => {
    render(<CircularProgress value={80} showLabel />);
    expect(screen.getByText('80%')).toBeInTheDocument();
  });
});

describe('Spinner', () => {
  it('renders spinner', () => {
    const { container } = render(<Spinner />);
    expect(container.querySelector('.spinner')).toBeInTheDocument();
  });
  
  it('has accessible label', () => {
    render(<Spinner label="Loading content" />);
    expect(screen.getByText('Loading content')).toBeInTheDocument();
  });
});
