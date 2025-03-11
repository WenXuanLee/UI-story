import { ComponentProps, useMemo, useCallback, useState, forwardRef } from "react";
import { VariantProps } from "class-variance-authority";
import { FiCheck } from "react-icons/fi"; // Import the checkmark icon
import { cn } from "@/utils/style-utility-cn";
import { labelStyles, checkboxStyles } from "./Checkbox.styles";

type CheckboxProps = Omit<ComponentProps<"input">, "size"> &
  VariantProps<typeof checkboxStyles> & {
    label?: string;
    onChange?: (checked: boolean) => void;
  };

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ checked: controlledChecked,
    onChange,
    size = 'md', disabled, label, className, ...props }, ref) => {
    const [internalChecked, setInternalChecked] = useState(false);

    // Determine whether to use controlled or uncontrolled state
    const isControlled = useMemo(() => {
      return controlledChecked !== undefined;
    }, [controlledChecked])

    const isChecked = useMemo(() => {
      return isControlled ? controlledChecked : internalChecked;
    }, [isControlled, controlledChecked, internalChecked])

  // Memoize click handler
  const handleClick = useCallback(() => {
    if (disabled) return;

    const newChecked = !isChecked;

    if (!isControlled) {
      setInternalChecked(newChecked);
    }

    onChange?.(newChecked);
  }, [disabled, isChecked, isControlled, onChange]);
  
    return (
      <label className="flex items-center space-x-2">
        <div
          className={cn(
            checkboxStyles({
              size,
              checked: controlledChecked,
              disabled,
            }),
            className
          )}
          onClick={handleClick}
        >
          <input
            ref={ref}
            type="checkbox"
            className={`absolute opacity-0 w-full h-full ${disabled ? "cursor-not-allowed" : "cursor-pointer"}`}
            role="checkbox"
            checked={isChecked}
            disabled={disabled}
            aria-checked={isChecked}
            aria-disabled={disabled}
            onClick={(e) => e.stopPropagation()}
            onChange={handleClick}
            {...props}
          />
          <FiCheck
            className={`text-white ${isChecked ? "block" : "hidden"} ${disabled ? "cursor-not-allowed" : "cursor-pointer"}`}
            size={size === "sm" ? 12 : size === "md" ? 14 : 16}
          />
        </div>
        {label && (
          <span
            data-testid="checkbox-label"
            className={labelStyles({
              size,
              disabled,
            })}
          >
            {label}
          </span>
        )}
      </label>
    );
  }
);

Checkbox.displayName = "Checkbox";
