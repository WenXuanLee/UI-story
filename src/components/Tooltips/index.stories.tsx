import { Meta, StoryObj } from "@storybook/react";
import { Tooltip } from "./index";

const meta: Meta<typeof Tooltip> = {
  title: "Components/Tooltip",
  component: Tooltip,
  argTypes: {
    content: { control: "text" },
    position: { control: "select", options: ["top", "bottom", "left", "right"] },
    maxWidth: { control: "number" },
  },
};

export default meta;
type Story = StoryObj<typeof Tooltip>;

// ✅ Tooltip on Top (Default)
export const Default: Story = {
  args: {
    content: "This is a tooltip asdfasdasdassadasdsaad",
    position: "top",
    children: <button className="p-2 border rounded-md">Hover me</button>,
  },
};

// ✅ Tooltip on Bottom
export const Bottom: Story = {
  args: {
    content: "Tooltip on bottom",
    position: "bottom",
    children: <button className="p-2 border rounded-md">Hover me</button>,
  },
};

// ✅ Tooltip on Left
export const Left: Story = {
  args: {
    content: "Tooltip on left",
    position: "left",
    children: <button className="p-2 border rounded-md">Hover me</button>,
  },
};

// ✅ Tooltip on Right
export const Right: Story = {
  args: {
    content: "Tooltip on right",
    position: "right",
    children: <button className="p-2 border rounded-md">Hover me</button>,
  },
};

// ✅ Tooltip with Custom Max Width
export const CustomWidth: Story = {
  args: {
    content: "This is a tooltip with a longer text that should wrap correctly within the max width.",
    position: "bottom",
    maxWidth: 250, // ✅ User-defined width
    children: <button className="p-2 border rounded-md">Hover me</button>,
  },
};