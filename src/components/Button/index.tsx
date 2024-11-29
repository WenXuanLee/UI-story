import { ComponentProps, ReactNode, forwardRef } from "react"
import { cva, VariantProps } from 'class-variance-authority'
import { cn } from '@/utils/style-utilility-cn'


const buttonStyles = cva(
  [
    "w-full",
    "rounded-lg",
    "focus:outline-none",
    "disabled:cursor-not-allowed",
    "inline-flex", // Ensures proper alignment for icon + text
    "items-center", // Centers icon and text vertically
    "justify-center", // Ensures text is centered for full-width buttons
  ],
  {
    variants: {
      variant: {
        primary: "text-neutral-50 bg-primary-500 hover:bg-primary-600 active:bg-primary-700",
        secondary: "border bg-neutral-50 text-primary-500 border-primary-500 hover:text-primary-600 hover:border-primary-600 active:border-primary-700 active:text-primary-700 hover:bg-neutral-100 active:bg-neutral-200",
        outline: "border bg-transparent border-primary-500 text-primary-500 hover:text-primary-600 hover:border-primary-600 active:border-primary-700 active:text-primary-700",
        text: "bg-transparent text-primary-500 hover:text-primary-600 active:text-primary-700",
        error: "text-white bg-error-500 hover:bg-error-600 active:bg-error-700",
      },
      size: {
        sm: "px-3 py-2 text-sm",
        md: "px-4 py-3 text-base",
        lg: "px-5 py-4 text-lg",
      },
      fullWidth: {
        true: "w-full",
        false: "w-auto",
      },
      disabled: {
        true: "",
        false: "",
      }
    },
    compoundVariants: [
      {
        variant: "primary",
        disabled: true,
        className: "text-neutral-300 bg-neutral-200 hover:bg-neutral-200 active:bg-neutral-200 hover:text-neutral-300 active:text-neutral-300",
      },
      {
        variant: "secondary",
        disabled: true,
        className: "text-neutral-400 bg-neutral-100 border-neutral-200 hover:bg-neutral-100 hover:border-neutral-200 active:bg-neutral-100 active:border-neutral-200 hover:text-neutral-400 active:text-neutral-400",
      },
      {
        variant: "outline",
        disabled: true,
        className: "text-neutral-400 bg-transparent border-neutral-200 hover:border-neutral-200 active:border-neutral-200 hover:text-neutral-400 active:text-neutral-400",
      },
      {
        variant: "text",
        disabled: true,
        className: "text-neutral-400 bg-transparent hover:text-neutral-400 active:text-neutral-400",
      },
      {
        variant: "error",
        disabled: true,
        className: "text-white bg-error-200 hover:bg-error-200 active:bg-error-200",
      },
    ],
    defaultVariants: {
      variant: "primary",
      size: "md",
      fullWidth: false,
      disabled: false,
    },
  }
);

type ButtonProps = ComponentProps<"button"> & VariantProps<typeof buttonStyles> & {
  icon?: ReactNode; // Accepts any ReactNode, typically an SVG icon
  iconPosition?: "left" | "right"; // Icon can appear on the left or right
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ icon, iconPosition = "left", variant, size, fullWidth, disabled, className, onClick, children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(buttonStyles({ variant, size, fullWidth, disabled, className }))}
        disabled={disabled}
        {...props}
      >
        {/* Render icon and text based on iconPosition */}
        {icon && iconPosition === "left" && (
          <span className="mr-1">{icon}</span> // Adds 4px space between icon and text
        )}
        {children}
        {icon && iconPosition === "right" && (
          <span className="ml-1">{icon}</span> // Adds 4px space between text and icon
        )}
      </button>
    );
  }
);

export default Button