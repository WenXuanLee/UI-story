import { forwardRef, ReactNode, useMemo } from "react";
import { cn } from "@/utils/style-utility-cn";
import { chipStyles } from "./styles";
import { AiOutlineClose } from "react-icons/ai"; // Using react-icons for close button

type ChipProps = {
  label: string;
  size?: "sm" | "md" | "lg";
  variant?:
    | "primary"
    | "primary-outlined"
    | "secondary"
    | "secondary-outlined"
    | "success"
    | "success-outlined"
    | "warning"
    | "warning-outlined"
    | "error"
    | "error-outlined"
  isDisabled?: boolean;
  icon?: ReactNode; // Supports avatar or category icon
  removable?: boolean;
  onClick?: () => void;
  onRemove?: () => void;
};

export const Chip = forwardRef<HTMLDivElement, ChipProps>(
  ({ label, size = "md", variant, isDisabled, icon, removable, onClick, onRemove }, ref) => {
    
    // Memoizing text size and icon size to optimize re-renders
    const textSize = useMemo(() => {
      return size === "sm" ? "text-sm" : size === "lg" ? "text-lg" : "text-base";
    }, [size]);

    const iconSize = useMemo(() => {
      return size === "sm" ? 14 : size === "lg" ? 20 : 16;
    }, [size]);

    return (
      <div
        ref={ref}
        className={cn(
          chipStyles({ size, variant, isDisabled }),
          "gap-2 px-2 flex items-center cursor-pointer"
        )}
        onClick={onClick}
      >
        {/* Prefix Icon (Avatar or Category Icon) */}
        {icon && <span className={cn("flex items-center", textSize)}>{icon}</span>}

        {/* Chip Label */}
        <span className={textSize}>{label}</span>

        {/* Close Button (If Removable) */}
        {removable && (
          <button
            onClick={(e) => {
              e.stopPropagation(); // ✅ Prevents onClick from triggering
              if (onRemove) onRemove();
            }}
            className="rounded-full"
            aria-label="Remove chip"
          >
            <AiOutlineClose size={iconSize} /> {/* Memoized icon size */}
          </button>
        )}
      </div>
    );
  }
);
