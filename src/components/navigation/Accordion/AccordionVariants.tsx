import React from 'react';
import { Accordion, AccordionProps } from './Accordion';

export const SingleAccordion: React.FC<Omit<AccordionProps, 'allowMultiple'>> = (props) => (
  <Accordion allowMultiple={false} {...props} />
);

export const MultipleAccordion: React.FC<Omit<AccordionProps, 'allowMultiple'>> = (props) => (
  <Accordion allowMultiple={true} {...props} />
);

export type AccordionVariant = 'default' | 'bordered' | 'separated';

export const accordionVariantStyles: Record<AccordionVariant, string> = {
  default: 'border-b last:border-b-0',
  bordered: 'border rounded-lg mb-2',
  separated: 'mb-4 shadow-sm',
};
