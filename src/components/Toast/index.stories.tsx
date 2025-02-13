import { Meta, StoryObj } from "@storybook/react";
import { Toast } from "./index";

const meta: Meta<typeof Toast> = {
  title: "Components/Toast",
  component: Toast,
  argTypes: {
    position: {
      control: "select",
      options: ["top-center", "top-right", "top-left", "bottom-right", "bottom-left"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Toast>;

export const Default: Story = {
  args: {
    message: "This is a default toast at top-center",
    variant: "info",
    autoDismiss: false
  },
};

export const BottomRight: Story = {
  args: {
    message: "This is a toast at bottom-right",
    variant: "success",
    position: "bottom-right",
  },
};

export const ManualClose: Story = {
  args: {
    message: "This toast requires manual close",
    variant: "warning",
    autoDismiss: false,
  },
};
