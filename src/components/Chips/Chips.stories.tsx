import { Meta, StoryObj } from "@storybook/react";
import { Chip } from "./Chips";

const meta: Meta<typeof Chip> = {
  title: "Components/Chips",
  component: Chip,
  argTypes: {
    size: { control: "select", options: ["sm", "md", "lg"] },
    variant: {
      control: "select",
      options: [
        "primary",
        "primary-outlined",
        "secondary",
        "secondary-outlined",
        "success",
        "success-outlined",
        "warning",
        "warning-outlined",
        "error",
        "error-outlined",
      ],
    },
    removable: { control: "boolean" },
  },
};

export default meta;

type Story = StoryObj<typeof Chip>;

// Default Primary Chip
export const PrimaryFilled: Story = {
  args: {
    label: "Primary",
    size: "md",
    variant: "primary",
  },
};

// Outlined Primary Chip
export const PrimaryOutlined: Story = {
  args: {
    label: "Primary Outlined",
    size: "md",
    variant: "primary-outlined",
  },
};

// Secondary Chip
export const SecondaryFilled: Story = {
  args: {
    label: "Secondary",
    size: "md",
    variant: "secondary",
  },
};

// Outlined Secondary Chip
export const SecondaryOutlined: Story = {
  args: {
    label: "Secondary Outlined",
    size: "md",
    variant: "secondary-outlined",
  },
};

// Success Chip
export const SuccessFilled: Story = {
  args: {
    label: "Success",
    size: "md",
    variant: "success",
  },
};

// Outlined Success Chip
export const SuccessOutlined: Story = {
  args: {
    label: "Success Outlined",
    size: "md",
    variant: "success-outlined",
  },
};

// Warning Chip
export const WarningFilled: Story = {
  args: {
    label: "Warning",
    size: "md",
    variant: "warning",
  },
};

// Outlined Warning Chip
export const WarningOutlined: Story = {
  args: {
    label: "Warning Outlined",
    size: "md",
    variant: "warning-outlined",
  },
};

// Error Chip
export const ErrorFilled: Story = {
  args: {
    label: "Error",
    size: "md",
    variant: "error",
  },
};

// Outlined Error Chip
export const ErrorOutlined: Story = {
  args: {
    label: "Error Outlined",
    size: "md",
    variant: "error-outlined",
  },
};
