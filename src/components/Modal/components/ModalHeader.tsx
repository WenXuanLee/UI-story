import React from "react";
import { AiOutlineClose } from "react-icons/ai"; // Importing a close icon from react-icons

type ModalHeaderProps = {
  title: string;
  onClose?: () => void;
};

export const ModalHeader: React.FC<ModalHeaderProps> = ({ title, onClose }) => (
  <div className="py-2 border-b border-gray-200 flex items-center justify-between">
    <h2 className="text-lg font-bold">{title}</h2>
    {/* Close button */}
    {onClose && (
    <button
      onClick={onClose}
      className="text-gray-500 hover:text-gray-800 transition-colors"
      aria-label="Close"
    >
      <AiOutlineClose size={20} />
    </button>
    )}
  </div>
);
