import { Meta, StoryObj } from "@storybook/react";
import { useState } from 'react';
import { Switch } from "./index";

const meta: Meta<typeof Switch> = {
  title: "Components/Switch",
  component: Switch,
  argTypes: {
    checked: { control: "boolean" },
    size: { control: "select", options: ["sm", "md", "lg"] },
    disabled: { control: "boolean" },
    label: { control: "text" },
  },
};

export default meta;
type Story = StoryObj<typeof Switch>;

// ✅ Default Switch (Uncontrolled)
export const Default: Story = {
  args: {
    label: "Toggle Switch",
    size: "md",
  },
};

// ✅ Controlled Switch
export const Controlled: Story = {
  args: {
    label: "Controlled Switch",
    size: "md",
    checked: true,
  },
  render: (args) => {
    const [checked, setChecked] = useState(args.checked);
    return <Switch {...args} checked={checked} onChange={setChecked} />;
  },
};

// ✅ Small Size
export const Small: Story = {
  args: {
    label: "Small Switch",
    size: "sm",
  },
};

// ✅ Large Size
export const Large: Story = {
  args: {
    label: "Large Switch",
    size: "lg",
  },
};

// ✅ Disabled Switch
export const Disabled: Story = {
  args: {
    label: "Disabled Switch",
    size: "md",
    disabled: true,
  },
};

// ✅ Without Label
export const NoLabel: Story = {
  args: {
    size: "md",
  },
};
