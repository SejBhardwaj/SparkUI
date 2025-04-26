import { render, screen } from '@testing-library/react';
import { LoginForm } from './LoginForm';
import { RegistrationForm } from './RegistrationForm';

describe('Form Examples', () => {
  it('renders login form', () => {
    render(<LoginForm />);
    expect(screen.getByLabelText('Email')).toBeInTheDocument();
    expect(screen.getByLabelText('Password')).toBeInTheDocument();
  });
  
  it('renders registration form', () => {
    render(<RegistrationForm />);
    expect(screen.getByLabelText('Username')).toBeInTheDocument();
  });
});
