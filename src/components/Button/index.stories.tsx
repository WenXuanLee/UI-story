import { Meta, StoryFn, StoryObj } from "@storybook/react";
import { Button } from "./";
import { FiCheck } from "react-icons/fi";

const meta: Meta<typeof Button> = {
  component: Button,
  title: "Components/Button",
  argTypes: {
    variant: { control: false },
    size: { control: 'radio', options: ['sm', 'md', 'lg'] },
    icon: { control: false }, // Icons are not handled via controls
    iconPosition: { control: { type: "select", options: ["left", "right"] } },
    fullWidth: { control: 'boolean' },
    disabled: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

const Template: StoryFn = (args) => (
  <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
    <Button variant="primary" {...args}>Primary</Button>
    <Button variant="secondary">Secondary</Button>
    <Button variant="outline">Tertiary</Button>
    <Button variant="text">Accent</Button>
  </div>
);

export const Variants = Template.bind({});
Variants.parameters = {
  docs: {
    hide: true,
  }
}
export const Primary: Story = {
  args: {
    variant: "primary",
    size: "md",
    children: "Primary Button",
  }
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
    size: "md",
    children: "Secondary Button",
  }
};

export const Outline: Story = {
  args: {
    variant: "outline",
    size: "md",
    children: "Outline Button",
  }
};

export const Text: Story = {
  args: {
    variant: "text",
    size: "md",
    children: "Text Button",
  }
};

export const WithIcon: Story = {
  args: {
    variant: "primary",
    size: "md",
    icon: <FiCheck />,
    iconPosition: "left",
    children: "Left Icon",
  }
};

export const Disabled: Story = {
  args: {
    variant: "primary",
    size: "md",
    disabled: true,
    children: "Disabled Button",
  }
};
