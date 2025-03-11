import { Meta, StoryObj } from "@storybook/react";
import { Checkbox } from "./Checkbox";

const meta: Meta<typeof Checkbox> = {
  title: "Components/Checkbox",
  component: Checkbox,
  argTypes: {
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
    },
    label: {
      control: "text",
    },
  },
};

export default meta;

type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {
  args: {
    size: "md",
    checked: false,
    label: "Label text",
  },
};

export const Checked: Story = {
  args: {
    size: "sm",
    checked: true,
    disabled: false
  },
};

export const Disabled: Story = {
  args: {
    size: "md",
    checked: true,
    disabled: true
  },
};
