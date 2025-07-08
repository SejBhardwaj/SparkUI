import type { Meta } from '@storybook/react';
import { Card } from './Card';
const meta: Meta<typeof Card> = {
  title: 'Data Display/Card',
  component: Card,
};
export default meta;
export const Basic = { args: { children: 'Card content' } };
