import React from 'react';
import { Stepper, StepperProps } from './Stepper';

export type StepperOrientation = 'horizontal' | 'vertical';

export interface StepperWithOrientationProps extends StepperProps {
  orientation?: StepperOrientation;
}

export const HorizontalStepper: React.FC<StepperProps> = (props) => (
  <div className="stepper-horizontal">
    <Stepper {...props} />
  </div>
);

export const VerticalStepper: React.FC<StepperProps> = (props) => (
  <div className="stepper-vertical">
    <Stepper {...props} />
  </div>
);

export const stepperOrientationStyles = {
  horizontal: 'flex flex-row items-center',
  vertical: 'flex flex-col',
};
