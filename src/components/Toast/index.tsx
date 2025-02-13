import React, { useState, useEffect } from "react";
import { AiOutlineCheckCircle, AiOutlineInfoCircle, AiOutlineCloseCircle, AiOutlineWarning } from "react-icons/ai";
import { toastStyles } from "./styles";
import { cn } from "@/utils/style-utility-cn";

type ToastProps = {
  message: string;
  variant?: "info" | "success" | "warning" | "error";
  duration?: number;
  autoDismiss?: boolean;
  position?: "top-center" | "top-right" | "top-left" | "bottom-right" | "bottom-left";
  onClose?: () => void;
};

export const Toast: React.FC<ToastProps> = ({
  message,
  variant = "info",
  duration = 5000,
  autoDismiss = true,
  position = "top-center", // Default position
  onClose,
}) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if (autoDismiss) {
      const timer = setTimeout(() => {
        setVisible(false);
        if (onClose) onClose();
      }, duration);

      return () => clearTimeout(timer);
    }
  }, [autoDismiss, duration, onClose]);

  if (!visible) return null;

  const positionClass = getPositionClass(position);

  return (
    <div className={cn("fixed z-50", positionClass)}>
      <div className={cn(toastStyles({ variant }))}>
        <span className="w-5 h-5">{getIcon(variant)}</span>
        <p>{message}</p>
        <button className="ml-auto text-xl" onClick={() => {
          setVisible(false);
          if (onClose) onClose();
        }}>
          ×
        </button>
      </div>
    </div>
  );
};

const getPositionClass = (position: ToastProps["position"]) => {
  switch (position) {
    case "top-right":
      return "top-4 right-4";
    case "top-left":
      return "top-4 left-4";
    case "bottom-right":
      return "bottom-4 right-4";
    case "bottom-left":
      return "bottom-4 left-4";
    default:
      return "top-4 left-1/2 transform -translate-x-1/2";
  }
};

const getIcon = (variant: ToastProps["variant"]) => {
  switch (variant) {
    case "success":
      return <AiOutlineCheckCircle size={20} className="text-success-800" />;
    case "warning":
      return <AiOutlineWarning size={20} className="text-warning-800" />;
    case "error":
      return <AiOutlineCloseCircle size={20} className="text-error-800" />;
    default:
      return <AiOutlineInfoCircle size={20} className="text-primary-800" />;
  }
};
