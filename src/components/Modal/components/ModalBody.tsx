import { ReactNode } from "react";

type ModalBodyProps = {
  children: ReactNode;
};

export const ModalBody: React.FC<ModalBodyProps> = ({ children }) => (
  <div className="py-2 overflow-auto max-h-[80vh]">{children}</div>
);
