import { Meta, StoryObj } from "@storybook/react";
import { RadioButton } from "./index";
import { RadioGroup } from "./RadioGroup";

const meta: Meta<typeof RadioButton> = {
  title: "Components/RadioButton",
  component: RadioButton,
  argTypes: {
    size: { control: "select", options: ["sm", "md", "lg"] },
    state: { control: "select", options: ["default", "error", "disabled"] },
  },
};

export default meta;

type Story = StoryObj<typeof RadioButton>;

// Default Radio Button
export const Default: Story = {
  args: {
    name: "radio-group",
    value: "default",
    label: "Default Radio",
    size: "md",
    state: "default",
  },
};

// Radio Button with Checked State
export const Checked: Story = {
  args: {
    name: "radio-group",
    value: "checked",
    label: "Checked Radio",
    size: "md",
    state: "default",
    checked: true,
  },
};

// Radio Button with Error State
export const ErrorState: Story = {
  args: {
    name: "radio-group",
    value: "error",
    label: "Error Radio",
    size: "md",
    state: "error",
  },
};

// Disabled Radio Button
export const Disabled: Story = {
  args: {
    name: "radio-group",
    value: "disabled",
    label: "Disabled Radio",
    size: "md",
    state: "disabled",
  },
};

// Different Sizes
export const Sizes = () => (
  <div className="flex flex-col gap-4">
    <RadioButton name="radio-group" value="sm" label="Small Size" size="sm" />
    <RadioButton name="radio-group" value="md" label="Medium Size" size="md" />
    <RadioButton name="radio-group" value="lg" label="Large Size" size="lg" />
  </div>
);

export const RadioGroupExample = {
  render: () => (
    <RadioGroup
      name="example"
      options={[
        { label: "Option 1", value: "option1" },
        { label: "Option 2", value: "option2" },
        { label: "Option 3", value: "option3" },
      ]}
      defaultValue="option1"
      size="md"
      state="default"
      onChange={(value) => console.log(value)}
    />
  ),
};