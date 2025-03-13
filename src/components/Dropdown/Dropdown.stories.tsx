import { Meta, StoryObj } from "@storybook/react";
import { Dropdown } from "./Dropdown";

const meta: Meta<typeof Dropdown> = {
  title: "Components/Dropdown",
  component: Dropdown,
  argTypes: {
    size: {
      control: { type: "select" },
      options: ["sm", "md", "lg"],
    },
    multiple: {
      control: { type: "boolean" },
    },
    searchable: {
      control: { type: "boolean" },
    },
    clearable: {
      control: { type: "boolean" },
    },
    renderOption: {
      control: false, // Disabling because it's a function
    },
    onChange: { action: "selected" },
  },
};

export default meta;

type Story = StoryObj<typeof Dropdown>;

// 🔹 Basic Example
export const Default: Story = {
  args: {
    options: [
      { value: "apple", label: "Apple" },
      { value: "banana", label: "Banana" },
      { value: "cherry", label: "Cherry", disabled: true },
    ],
  },
};

// 🔹 Multi-Dropdown Example
export const MultiDropdown: Story = {
  args: {
    multiple: true,
    options: [
      { value: "react", label: "React" },
      { value: "vue", label: "Vue" },
      { value: "angular", label: "Angular" },
    ],
  },
};

// 🔹 Searchable Dropdown Example
export const Searchable: Story = {
  args: {
    searchable: true,
    options: [
      { value: "lion", label: "Lion" },
      { value: "tiger", label: "Tiger" },
      { value: "bear", label: "Bear" },
    ],
  },
};

// 🔹 Custom Rendered Options Example
export const CustomRender: Story = {
  args: {
    options: [
      { value: "dog", label: "Dog" },
      { value: "cat", label: "Cat" },
      { value: "rabbit", label: "Rabbit" },
    ],
    renderOption: (option) => (
      <div className="flex items-center gap-2">
        <span>🐾</span>
        <span>{option.label}</span>
      </div>
    ),
  },
};
