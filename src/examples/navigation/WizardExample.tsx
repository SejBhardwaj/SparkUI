import React, { useState } from 'react';
import { Stepper } from '../../components/navigation/Stepper/Stepper';
import { StepperStep } from '../../components/navigation/Stepper/StepperStep';
import { StepperNavigation } from '../../components/navigation/Stepper/StepperNavigation';

export const WizardExample: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    account: {},
    profile: {},
    preferences: {},
  });
  
  const handleComplete = () => {
    console.log('Wizard completed with data:', formData);
  };
  
  return (
    <div className="wizard-container">
      <h1>Account Setup Wizard</h1>
      
      <Stepper currentStep={currentStep} onChange={setCurrentStep}>
        <StepperStep 
          index={0} 
          title="Account Information" 
          description="Create your account"
          icon="👤"
        />
        <StepperStep 
          index={1} 
          title="Profile Details" 
          description="Tell us about yourself"
          icon="📝"
        />
        <StepperStep 
          index={2} 
          title="Preferences" 
          description="Customize your experience"
          icon="⚙️"
        />
        <StepperStep 
          index={3} 
          title="Review" 
          description="Review and confirm"
          icon="✓"
        />
      </Stepper>
      
      <div className="wizard-content">
        {currentStep === 0 && (
          <div>
            <h2>Account Information</h2>
            <p>Enter your email and password</p>
          </div>
        )}
        {currentStep === 1 && (
          <div>
            <h2>Profile Details</h2>
            <p>Tell us your name and bio</p>
          </div>
        )}
        {currentStep === 2 && (
          <div>
            <h2>Preferences</h2>
            <p>Choose your preferences</p>
          </div>
        )}
        {currentStep === 3 && (
          <div>
            <h2>Review</h2>
            <p>Review your information</p>
          </div>
        )}
      </div>
      
      <StepperNavigation onComplete={handleComplete} />
    </div>
  );
};
