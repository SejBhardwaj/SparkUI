import React from 'react';
import { Radio, RadioProps } from './Radio';

export type RadioSize = 'sm' | 'md' | 'lg';
export const RadioWithSize: React.FC<RadioProps & { size?: RadioSize }> = ({ size = 'md', ...props }) => (
  <Radio className={`radio-${size}`} {...props} />
);
