import { Meta, StoryObj } from "@storybook/react";
import { Avatar } from "./index";

const meta: Meta<typeof Avatar> = {
  title: "Components/Avatar",
  component: Avatar,
  argTypes: {
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
    },
    shape: {
      control: "select",
      options: ["circle", "square"],
    },
    status: {
      control: "select",
      options: ["online", "offline", "busy", "idle", null],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Avatar>;

export const Default: Story = {
  args: {
    src: "https://i.pravatar.cc/300",
    alt: "User Avatar",
    size: "md",
    shape: "circle",
  },
};

export const WithInitials: Story = {
  args: {
    initials: "BB",
    size: "md",
    shape: "circle",
  },
};

export const WithStatusOnline: Story = {
  args: {
    src: "https://i.pravatar.cc/300",
    status: "online",
    size: "lg",
    shape: "circle",
  },
};

export const SquareAvatar: Story = {
  args: {
    src: "https://i.pravatar.cc/300",
    size: "lg",
    shape: "square",
  },
};

export const WithIconFallback: Story = {
  args: {
    size: "sm",
    shape: "circle",
  },
};
