import { ReactNode } from "react"

type ModalFooterProps = {
  children: ReactNode;
};

export const ModalFooter: React.FC<ModalFooterProps> = ({ children }) => (
  <div className="py-2 border-t border-gray-200 flex justify-end space-x-2">{children}</div>
);
