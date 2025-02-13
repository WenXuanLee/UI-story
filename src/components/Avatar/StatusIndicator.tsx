import React from "react";
import { cn } from "@/utils/style-utility-cn";

type StatusIndicatorProps = {
  status: "online" | "offline" | "busy" | "idle";
  size?: "sm" | "md" | "lg";
  shape?: "circle" | "square";
};

const sizeMap = {
  sm: "w-2 h-2", // 8px
  md: "w-3 h-3", // 12px
  lg: "w-4 h-4", // 16px
};

const positionMap = {
  circle: 'bottom-0 right-0',
  square: '-bottom-1 -right-1',
}
const statusMap = {
  online: "bg-success-500",
  offline: "bg-gray-400",
  busy: "bg-error-500",
  idle: "bg-warning-500",
}



export const StatusIndicator: React.FC<StatusIndicatorProps> = ({ status, size = "md", shape = "circle" }) => {
  return <span className={cn(
    "absolute rounded-full border-2 border-white", // Add a white border to blend with the avatar edge
    sizeMap[size],
    positionMap[shape],
    statusMap[status]
  )} />;
};
