import React from 'react';
import { useStepper } from './Stepper';

export interface StepperStepProps {
  index: number;
  title: string;
  description?: string;
  icon?: React.ReactNode;
}

export const StepperStep: React.FC<StepperStepProps> = ({ 
  index, 
  title, 
  description, 
  icon 
}) => {
  const { currentStep, setCurrentStep } = useStepper();
  
  const status = 
    index < currentStep ? 'completed' :
    index === currentStep ? 'active' :
    'pending';
  
  return (
    <div className={`stepper-step stepper-step-${status}`}>
      <button
        className="stepper-step-button"
        onClick={() => setCurrentStep(index)}
        aria-current={status === 'active' ? 'step' : undefined}
      >
        <div className="stepper-step-indicator">
          {status === 'completed' ? (
            <span className="stepper-check">✓</span>
          ) : icon ? (
            <span className="stepper-icon">{icon}</span>
          ) : (
            <span className="stepper-number">{index + 1}</span>
          )}
        </div>
        <div className="stepper-step-content">
          <div className="stepper-step-title">{title}</div>
          {description && (
            <div className="stepper-step-description">{description}</div>
          )}
        </div>
      </button>
    </div>
  );
};
