import type { Meta, StoryObj } from '@storybook/react';
import { Accordion } from './Accordion';
import { AccordionItem } from './AccordionItem';

const meta: Meta<typeof Accordion> = {
  title: 'Navigation/Accordion',
  component: Accordion,
};

export default meta;
type Story = StoryObj<typeof Accordion>;

export const Default: Story = {
  render: () => (
    <Accordion>
      <AccordionItem id="item1" title="What is React?">
        React is a JavaScript library for building user interfaces.
      </AccordionItem>
      <AccordionItem id="item2" title="What is TypeScript?">
        TypeScript is a typed superset of JavaScript.
      </AccordionItem>
      <AccordionItem id="item3" title="What is Tailwind?">
        Tailwind is a utility-first CSS framework.
      </AccordionItem>
    </Accordion>
  ),
};

export const AllowMultiple: Story = {
  render: () => (
    <Accordion allowMultiple>
      <AccordionItem id="item1" title="Section 1">Content 1</AccordionItem>
      <AccordionItem id="item2" title="Section 2">Content 2</AccordionItem>
      <AccordionItem id="item3" title="Section 3">Content 3</AccordionItem>
    </Accordion>
  ),
};

export const DefaultOpen: Story = {
  render: () => (
    <Accordion defaultOpen={['item1', 'item2']} allowMultiple>
      <AccordionItem id="item1" title="Section 1">Content 1</AccordionItem>
      <AccordionItem id="item2" title="Section 2">Content 2</AccordionItem>
      <AccordionItem id="item3" title="Section 3">Content 3</AccordionItem>
    </Accordion>
  ),
};
