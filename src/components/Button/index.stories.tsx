import type { Meta, StoryObj } from "@storybook/react";
import Button from ".";

const meta: Meta<typeof Button> = {
  title: 'Component/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
}

export default meta;

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: "click me",
    onClick: () => {},
    variant: "solid",
    size: 'lg',
    colorscheme: 'primary',
  }
}