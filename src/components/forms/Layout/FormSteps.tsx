import React, { useState } from 'react';

export interface FormStepsProps {
  steps: Array<{ title: string; content: React.ReactNode }>;
  onComplete?: (data: any) => void;
}

export const FormSteps: React.FC<FormStepsProps> = ({ steps, onComplete }) => {
  const [currentStep, setCurrentStep] = useState(0);
  
  const next = () => setCurrentStep(prev => Math.min(prev + 1, steps.length - 1));
  const prev = () => setCurrentStep(prev => Math.max(prev - 1, 0));
  
  return (
    <div className="form-steps">
      <div className="steps-indicator">
        {steps.map((step, index) => (
          <div key={index} className={`step ${index === currentStep ? 'active' : ''}`}>
            {step.title}
          </div>
        ))}
      </div>
      <div className="step-content">{steps[currentStep].content}</div>
      <div className="step-actions">
        {currentStep > 0 && <button onClick={prev}>Previous</button>}
        {currentStep < steps.length - 1 ? (
          <button onClick={next}>Next</button>
        ) : (
          <button onClick={() => onComplete?.({})}>Complete</button>
        )}
      </div>
    </div>
  );
};
