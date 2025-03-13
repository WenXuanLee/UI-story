import React, { ReactNode } from "react";
import { modalStyles } from "./Modal.styles";
import { ModalHeader } from "./components/ModalHeader";
import { ModalBody } from "./components/ModalBody";
import { ModalFooter } from "./components/ModalFooter";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  size?: "sm" | "md" | "lg";
  children: ReactNode;
  bodyContent?: string; // for storybook mock prop
};

const ModalComponent: React.FC<ModalProps> = ({ isOpen, onClose, size = "md", children }) => {
  if (!isOpen) return null;

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose(); // Only close when clicking on the backdrop, not on the modal content
    }
  };

  return (
    <div
      data-testid="dialog-wrapper"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
      onClick={handleBackdropClick}
    > 
      <div className={modalStyles({ size }) + " relative bg-white rounded-lg shadow-lg"}>
        {children}
      </div>
    </div>
  );
};

// Add subcomponents as before
type ModalWithSubComponents = React.FC<ModalProps> & {
  Header: typeof ModalHeader;
  Body: typeof ModalBody;
  Footer: typeof ModalFooter;
};

const Modal = ModalComponent as ModalWithSubComponents;

Modal.Header = ModalHeader;
Modal.Body = ModalBody;
Modal.Footer = ModalFooter;

export { Modal };
