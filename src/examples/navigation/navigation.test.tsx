import { render, screen } from '@testing-library/react';
import { DashboardLayout } from './DashboardLayout';
import { AppNavigation } from './AppNavigation';
import { WizardExample } from './WizardExample';

describe('Navigation Examples', () => {
  describe('DashboardLayout', () => {
    it('renders dashboard with sidebar and navbar', () => {
      render(
        <DashboardLayout>
          <div>Content</div>
        </DashboardLayout>
      );
      
      expect(screen.getByText('Dashboard')).toBeInTheDocument();
      expect(screen.getByText('Analytics')).toBeInTheDocument();
      expect(screen.getByText('Content')).toBeInTheDocument();
    });
  });
  
  describe('AppNavigation', () => {
    it('renders app navigation with navbar and breadcrumbs', () => {
      render(<AppNavigation />);
      
      expect(screen.getByText('MyApp')).toBeInTheDocument();
      expect(screen.getByText('Home')).toBeInTheDocument();
      expect(screen.getByText('Features')).toBeInTheDocument();
    });
  });
  
  describe('WizardExample', () => {
    it('renders wizard with stepper', () => {
      render(<WizardExample />);
      
      expect(screen.getByText('Account Setup Wizard')).toBeInTheDocument();
      expect(screen.getByText('Account Information')).toBeInTheDocument();
      expect(screen.getByText('Profile Details')).toBeInTheDocument();
    });
  });
});
