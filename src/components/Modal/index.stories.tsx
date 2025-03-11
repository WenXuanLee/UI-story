import { Meta, StoryObj } from "@storybook/react";
import { Modal } from "./index";
import { Button } from "../Button/Button";
import { useState } from "react";

const meta: Meta<typeof Modal> = {
  title: "Components/Modal",
  component: Modal,
  argTypes: {
    isOpen: { control: "boolean" },
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
    },
    bodyContent: {
      control: "text",
    },
    onClose: { action: "onClose" }, // Tracks onClose in Storybook's actions panel
  },
};

export default meta;
type Story = StoryObj<typeof Modal>;

export const Default: Story = {
  args: {
    isOpen: true,
    size: "md",
    bodyContent: "This is the default modal content. Add more text to make it scrollable and test the scroll behavior.",
  },
  render: (args) => {
    const [isOpen, setIsOpen] = useState(args.isOpen);

    const handleClose = () => {
      setIsOpen(false);
      args.onClose(); // Trigger the Storybook action
    };

    return (
      <div>
        <Button onClick={() => setIsOpen(true)}>Open Modal</Button>
        <Modal isOpen={isOpen} onClose={handleClose} size={args.size}>
          <Modal.Header title="Modal Title" onClose={handleClose} />
          <Modal.Body>
            <p>{args.bodyContent}</p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Cancel
            </Button>
            <Button variant="primary">Confirm</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  },
};
