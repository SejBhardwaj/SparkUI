import React, { createContext, useContext, useState } from 'react';

interface StepperContextValue {
  currentStep: number;
  setCurrentStep: (step: number) => void;
  totalSteps: number;
}

const StepperContext = createContext<StepperContextValue | null>(null);

export const useStepper = () => {
  const context = useContext(StepperContext);
  if (!context) throw new Error('useStepper must be used within Stepper');
  return context;
};

export interface StepperProps {
  currentStep?: number;
  onChange?: (step: number) => void;
  children: React.ReactNode;
}

export const Stepper: React.FC<StepperProps> = ({ 
  currentStep: controlledStep, 
  onChange, 
  children 
}) => {
  const [internalStep, setInternalStep] = useState(0);
  const currentStep = controlledStep ?? internalStep;
  const totalSteps = React.Children.count(children);
  
  const setCurrentStep = (step: number) => {
    if (controlledStep === undefined) {
      setInternalStep(step);
    }
    onChange?.(step);
  };
  
  return (
    <StepperContext.Provider value={{ currentStep, setCurrentStep, totalSteps }}>
      <div className="stepper" role="group" aria-label="Progress steps">
        {children}
      </div>
    </StepperContext.Provider>
  );
};
