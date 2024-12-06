import { cn } from "@/utils/style-utilility-cn";

type LabelProps = {
  text: string;
  state?: "default" | "error" | "success" | "disabled";
  size?: "small" | "medium" | "large";
  htmlFor?: string;
  className?: string; // Optional for additional customization
};

// Centralize size and state mappings
const sizeStyles: Record<NonNullable<LabelProps["size"]>, string> = {
  small: "text-xs", // ~12px
  medium: "text-sm", // ~14px
  large: "text-base", // ~16px
};

const stateStyles: Record<NonNullable<LabelProps["state"]>, string> = {
  default: "text-neutral-700",
  error: "text-error-500",
  success: "text-success-500",
  disabled: "text-neutral-400",
};

const Label = ({
  text,
  state = "default",
  size = "medium",
  htmlFor,
  className,
}: LabelProps) => {
  return (
    <label
      htmlFor={htmlFor}
      className={cn(
        "font-medium transition-colors", // Common styles
        sizeStyles[size], // Dynamically apply size styles
        stateStyles[state], // Dynamically apply state styles
        state !== "disabled" && "focus-within:text-primary-600", // focus styles
        className // Allow custom class names
      )}
    >
      {text}
    </label>
  );
};

export default Label;
