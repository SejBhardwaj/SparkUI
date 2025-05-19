import React from 'react';
import { useStepper } from './Stepper';

export interface StepperNavigationProps {
  onNext?: () => void;
  onPrevious?: () => void;
  onComplete?: () => void;
  nextLabel?: string;
  previousLabel?: string;
  completeLabel?: string;
}

export const StepperNavigation: React.FC<StepperNavigationProps> = ({
  onNext,
  onPrevious,
  onComplete,
  nextLabel = 'Next',
  previousLabel = 'Previous',
  completeLabel = 'Complete',
}) => {
  const { currentStep, setCurrentStep, totalSteps } = useStepper();
  
  const isFirstStep = currentStep === 0;
  const isLastStep = currentStep === totalSteps - 1;
  
  const handleNext = () => {
    if (isLastStep) {
      onComplete?.();
    } else {
      setCurrentStep(currentStep + 1);
      onNext?.();
    }
  };
  
  const handlePrevious = () => {
    if (!isFirstStep) {
      setCurrentStep(currentStep - 1);
      onPrevious?.();
    }
  };
  
  return (
    <div className="stepper-navigation">
      <button
        onClick={handlePrevious}
        disabled={isFirstStep}
        className="stepper-nav-button stepper-nav-previous"
      >
        {previousLabel}
      </button>
      <button
        onClick={handleNext}
        className="stepper-nav-button stepper-nav-next"
      >
        {isLastStep ? completeLabel : nextLabel}
      </button>
    </div>
  );
};
