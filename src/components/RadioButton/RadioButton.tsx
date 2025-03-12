import { forwardRef, useMemo } from "react";
import { cn } from "@/utils/style-utility-cn";
import { radioButtonStyles } from "./RadioButton.styles";

type RadioButtonProps = {
  id?: string;
  name: string;
  value: string;
  label?: string;
  size?: "sm" | "md" | "lg";
  state?: "default" | "error" | "disabled";
  checked?: boolean;
  onChange?: (value: string) => void;
};

export const RadioButton = forwardRef<HTMLInputElement, RadioButtonProps>(
  ({ id, name, value, label, size, state, checked, onChange }, ref) => {
    const isDisabled = useMemo(() => {
      return state === "disabled";
    }, [state]);

    return (
      <label
        htmlFor={id}
        className={cn(
          "flex items-center gap-2 cursor-pointer",
          isDisabled && "opacity-50 cursor-not-allowed"
        )}
      >
        {/* Radio Infput */}
        <input
          id={id}
          data-testid="radio-button"
          type="radio"
          name={name}
          value={value}
          ref={ref}
          checked={checked}
          role="radio"
          disabled={isDisabled}
          aria-disabled={isDisabled}
          aria-checked={checked}
          onChange={(event) => onChange?.(event.target.value)}
          className={cn(
            radioButtonStyles({ size, state }),
            "relative flex items-center justify-center after:content-[''] after:absolute after:rounded-full after:transition-all",
            size === "sm" && "after:w-2 after:h-2",
            size === "md" && "after:w-2.5 after:h-2.5",
            size === "lg" && "after:w-3 after:h-3",
            "after:bg-white after:scale-0 checked:after:scale-100"
          )}
        />
        {/* Label */}
        {label && (
          <span
            className={cn(
              "text-neutral-900",
              size === "sm" && "text-sm",
              size === "md" && "text-base",
              size === "lg" && "text-lg"
            )}
          >
            {label}
          </span>
        )}
      </label>
    );
  }
);
