import React from 'react';
export type InputState = 'default' | 'error' | 'success' | 'warning';
export const stateClasses: Record<InputState, string> = {
  default: 'border-gray-300', error: 'border-red-500',
  success: 'border-green-500', warning: 'border-yellow-500',
};
