import type { Meta } from '@storybook/react';
import { Stat } from './Stat';
const meta: Meta<typeof Stat> = {
  title: 'Data Display/Statistics',
  component: Stat,
};
export default meta;
export const Basic = { args: { label: 'Users', value: 100 } };
