import { useState, forwardRef, useMemo } from "react";
import { cn } from "@/utils/style-utility-cn";
import { switchStyles, knobStyles } from "./styles";
import Typography from "@/components/Typography"; // Import Typography

type SwitchProps = {
  checked?: boolean; // Controlled state
  onChange?: (checked: boolean) => void; // Change event handler
  size?: "sm" | "md" | "lg"; // Switch sizes
  disabled?: boolean; // Disabled state
  label?: string; // Optional label
  className?: string; // Additional styling
};

export const Switch = forwardRef<HTMLButtonElement, SwitchProps>(
  ({ checked, onChange, size = "md", disabled = false, label, className }, ref) => {
    const [internalChecked, setInternalChecked] = useState(checked || false);

    const labelType = useMemo(() => {
      return size === "lg" ? "body" : size === "md" ? "caption" : "small";
    }, [size]);

    const labelGap = useMemo(() => {
      return size === "lg" ? "gap-2" : size === "md" ? "gap-[6px]" : "gap-1";
    }, [size]);

    const toggleSwitch = () => {
      if (disabled) return;
      const newChecked = !internalChecked;
      setInternalChecked(newChecked);
      onChange?.(newChecked);
    };

    return (
      <div className={cn("flex items-center gap-2", labelGap)}>
        <button
          ref={ref}
          role="switch"
          aria-checked={internalChecked}
          aria-disabled={disabled}
          onClick={toggleSwitch}
          className={cn(
            switchStyles({ size, checked: internalChecked, disabled }),
            className
          )}
        >
          {/* Knob */}
          <span className={knobStyles({ size, checked: internalChecked })} />
        </button>
        {/* Label (Using Typography Component) */}
        {label && (
          <Typography
            type={labelType} // Dynamically set label size            
            weight="medium"
            className={cn("text-neutral-600", disabled && "text-neutral-400")}
          >
            {label}
          </Typography>
        )}
      </div>
    );
  }
);
