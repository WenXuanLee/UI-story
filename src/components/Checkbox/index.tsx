import { ComponentProps, useMemo, useCallback, useState, forwardRef } from "react";
import { cva, VariantProps } from "class-variance-authority";
import { FiCheck } from "react-icons/fi"; // Import the checkmark icon
import { cn } from "@/utils/style-utility-cn";

// Define styles using `cva`
const checkboxStyles = cva(
  "border relative flex items-center justify-center rounded transition-all", // Base styles
  {
    variants: {
      size: {
        sm: "h-4 w-4",
        md: "h-5 w-5",
        lg: "h-6 w-6",
      },
      checked: {
        true: "border-primary-500 bg-primary-500 hover:bg-primary-600 focus:ring-2 focus:ring-primary-500",
        false: "border-neutral-400 bg-transparent hover:border-primary-500 focus:ring-2 focus:ring-primary-500",
      },
      disabled: {
        true: "border-neutral-300 bg-neutral-100 cursor-not-allowed hover:border-neutral-300 focus:ring-0 hover:bg-neutral-100",
        false: "",
      },
    },
    compoundVariants: [
      {
        checked: true,
        disabled: true,
        className: "border-neutral-100 bg-neutral-200 text-neutral-400 hover:border-neutral-100 hover:bg-neutral-200 focus:ring-0",
      },
    ],
    defaultVariants: {
      size: "md",
      checked: false,
      disabled: false,
    },
  }
);

const labelStyles = cva("ml-2 transition-colors", {
  variants: {
    size: {
      sm: "text-sm",
      md: "text-base",
      lg: "text-lg",
    },
    disabled: {
      true: "text-neutral-400",
      false: "text-neutral-600",
    },
  },
  defaultVariants: {
    size: "md",
    disabled: false,
  },
});

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
          role="checkbox"
          aria-checked={isChecked}
          aria-disabled={disabled}
        >
          <input
            ref={ref}
            type="checkbox"
            className={`absolute opacity-0 w-full h-full ${disabled ? "cursor-not-allowed" : "cursor-pointer"}`}
            checked={isChecked}
            disabled={disabled}
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
