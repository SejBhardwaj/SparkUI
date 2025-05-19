import { render, screen, fireEvent } from '@testing-library/react';
import { Stepper } from './Stepper';
import { StepperStep } from './StepperStep';
import { StepperNavigation } from './StepperNavigation';

describe('Stepper', () => {
  it('renders stepper steps', () => {
    render(
      <Stepper>
        <StepperStep index={0} title="Step 1" />
        <StepperStep index={1} title="Step 2" />
        <StepperStep index={2} title="Step 3" />
      </Stepper>
    );
    
    expect(screen.getByText('Step 1')).toBeInTheDocument();
    expect(screen.getByText('Step 2')).toBeInTheDocument();
    expect(screen.getByText('Step 3')).toBeInTheDocument();
  });
  
  it('navigates between steps', () => {
    const onChange = jest.fn();
    render(
      <Stepper onChange={onChange}>
        <StepperStep index={0} title="Step 1" />
        <StepperStep index={1} title="Step 2" />
        <StepperNavigation />
      </Stepper>
    );
    
    fireEvent.click(screen.getByText('Next'));
    expect(onChange).toHaveBeenCalledWith(1);
  });
  
  it('shows completed status for previous steps', () => {
    render(
      <Stepper currentStep={2}>
        <StepperStep index={0} title="Step 1" />
        <StepperStep index={1} title="Step 2" />
        <StepperStep index={2} title="Step 3" />
      </Stepper>
    );
    
    const completedSteps = screen.getAllByText('✓');
    expect(completedSteps).toHaveLength(2);
  });
});
