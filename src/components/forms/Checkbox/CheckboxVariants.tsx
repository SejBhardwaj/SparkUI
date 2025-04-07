import React from 'react';
import { Checkbox, CheckboxProps } from './Checkbox';

export const IndeterminateCheckbox: React.FC<CheckboxProps> = (props) => <Checkbox indeterminate {...props} />;
export const DisabledCheckbox: React.FC<CheckboxProps> = (props) => <Checkbox disabled {...props} />;
