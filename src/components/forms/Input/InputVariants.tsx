import React from 'react';
import { Input, InputProps } from './Input';

export const TextInput: React.FC<InputProps> = (props) => <Input type="text" {...props} />;
export const EmailInput: React.FC<InputProps> = (props) => <Input type="email" {...props} />;
export const PasswordInput: React.FC<InputProps> = (props) => <Input type="password" {...props} />;
export const NumberInput: React.FC<InputProps> = (props) => <Input type="number" {...props} />;
