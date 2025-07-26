import type { Meta } from '@storybook/react';
import { LineChart } from './LineChart';
const meta: Meta<typeof LineChart> = {
  title: 'Data Display/Charts',
  component: LineChart,
};
export default meta;
export const Basic = { args: { data: [] } };
