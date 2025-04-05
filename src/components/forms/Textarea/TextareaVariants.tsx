import React from 'react';
import { Textarea, TextareaProps } from './Textarea';

export const AutoResizeTextarea: React.FC<TextareaProps> = (props) => <Textarea autoResize {...props} />;
export const LimitedTextarea: React.FC<TextareaProps & { maxLength: number }> = (props) => (
  <Textarea showCharCount {...props} />
);
