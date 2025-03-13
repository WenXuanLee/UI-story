import { Meta, StoryObj } from "@storybook/react";
import { InputField } from "./InputField";
import { Search01Icon } from "hugeicons-react";


const meta: Meta<typeof InputField> = {
  title: "Components/InputField",
  component: InputField,
  argTypes: {
    size: { control: "select", options: ["sm", "md", "lg"] },
    state: { control: "select", options: ["default", "error", "success", "disabled"] },
  },
};

export default meta;

type Story = StoryObj<typeof InputField>;

// Default InputField
export const Default: Story = {
  args: {
    placeholder: "Enter text...",
    size: "md",
    state: "default",
  },
};

// Input with Prefix Icon
export const WithPrefixIcon: Story = {
  args: {
    placeholder: "Search...",
    size: "md",
    prefixIcon: <Search01Icon />,
  },
};

// Input with Suffix Icon
export const WithSuffixIcon: Story = {
  args: {
    placeholder: "Enter text...",
    size: "md",
    suffixIcon: <Search01Icon />,
  },
};

// Input with Hint Message
export const WithHintMessage: Story = {
  args: {
    placeholder: "Enter text...",
    size: "md",
    hintMessage: "This is a hint message.",
  },
};

// Input with Error State
export const ErrorState: Story = {
  args: {
    placeholder: "Enter text...",
    size: "md",
    label: 'error input',
    state: "error",
    hintMessage: "This field is required.",
  },
};

// Disabled Input
export const Disabled: Story = {
  args: {
    label: 'disabled',
    placeholder: "Enter text...",
    size: "md",
    state: "disabled",
  },
};
