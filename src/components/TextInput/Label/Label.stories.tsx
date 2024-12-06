import React from 'react'
import type { Meta, StoryObj } from '@storybook/react';
import Label from './Label';

// Meta Configuration
const meta: Meta<typeof Label> = {
  title: 'Components/TextInput/Label',
  component: Label,
  tags: ['autodocs'],
  argTypes: {
    size: { control: 'select', options: ['small', 'medium', 'large'] },
    state: { control: 'select', options: ['default', 'error', 'success', 'disabled'] },
  },
};

export default meta;

type Story = StoryObj<typeof Label>;

// Default Story
export const Default: Story = {
  args: {
    text: 'Label Text',
    size: 'medium',
    state: 'default',
  },
};

// Error State Story
export const Error: Story = {
  args: {
    text: 'Label Text',
    size: 'medium',
    state: 'error',
  },
};

// Success State Story
export const Success: Story = {
  args: {
    text: 'Label Text',
    size: 'medium',
    state: 'success',
  },
};

// Disabled State Story
export const Disabled: Story = {
  args: {
    text: 'Label Text',
    size: 'medium',
    state: 'disabled',
  },
};

// Small Size Story
export const Small: Story = {
  args: {
    text: 'Label Text',
    size: 'small',
    state: 'default',
  },
};

// Large Size Story
export const Large: Story = {
  args: {
    text: 'Label Text',
    size: 'large',
    state: 'default',
  },
};

// Dynamic States Story with Interaction
export const DynamicStates: Story = {
  args: {
    text: 'Email Address',
    size: 'medium',
    state: 'default',
  },
  render: (args) => {
    const [dynamicState, setDynamicState] = React.useState<'default' | 'error' | 'success' | 'disabled'>(
      'default'
    );

    return (
      <div>
        <Label {...args} state={dynamicState} />
        <select
          value={dynamicState}
          onChange={(e) => setDynamicState(e.target.value as any)}
          className="mt-4"
        >
          <option value="default">Default</option>
          <option value="error">Error</option>
          <option value="success">Success</option>
          <option value="disabled">Disabled</option>
        </select>
      </div>
    );
  },
};
