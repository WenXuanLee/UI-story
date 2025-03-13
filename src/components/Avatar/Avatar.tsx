import React, { useMemo } from "react";
import { AiOutlineUser } from "react-icons/ai";
import { avatarStyles } from "./Avatar.styles";
import { cn } from "@/utils/style-utility-cn";
import { StatusIndicator } from "./StatusIndicator";

type AvatarProps = {
  src?: string;
  alt?: string;
  initials?: string;
  status?: "online" | "offline" | "idle" | "busy" | null;
  size?: "sm" | "md" | "lg";
  shape?: "circle" | "square";
};

const iconSizeMap = {
  sm: 16,
  md: 24,
  lg: 32,
};

export const Avatar: React.FC<AvatarProps> = ({
  src,
  alt = "Avatar",
  initials,
  status,
  size = "md",
  shape = "circle",
}) => {
  const initialsText = useMemo(() => {
    if (!initials) return "";
    const words = initials.trim();
    return words
      .slice(0, 2)
      .toUpperCase()
  }, [initials]);

  const renderContent = () => {
    if (src) {
      return <img src={src} alt={alt} className="w-full h-full object-cover" />;
    }
    if (initials) {
      return <span className="font-medium text-neutral-700">{initialsText}</span>;
    }
    return <AiOutlineUser data-testid="avatar-default-icon" size={iconSizeMap[size]} className="text-neutral-700" />;
  };

  return (
    <div className="relative w-fit h-fit">
      <div data-testid="avatar-wrapper" className={cn(avatarStyles({ size, shape }))}>
        {renderContent()}
      </div>
      {status && (
        <StatusIndicator status={status} size={size} shape={shape} />
      )}
    </div>
  );
};
