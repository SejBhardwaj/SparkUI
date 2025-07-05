import type { Meta } from '@storybook/react';
import { Table } from './Table';
const meta: Meta<typeof Table> = {
  title: 'Data Display/Table',
  component: Table,
};
export default meta;
export const Basic = {
  args: {
    data: [{ id: 1, name: 'Item 1' }],
    columns: [{ key: 'name' as const, label: 'Name' }],
  },
};
