import type { Meta, StoryObj } from '@storybook/react';
import { Input } from './Input';

const meta: Meta<typeof Input> = { title: 'Forms/Input', component: Input };
export default meta;

export const Default: StoryObj<typeof Input> = { args: { placeholder: 'Enter text' } };
export const WithLabel: StoryObj<typeof Input> = { args: { label: 'Username' } };
export const WithError: StoryObj<typeof Input> = { args: { error: 'Required field' } };
