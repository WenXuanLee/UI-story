import { ComponentProps, ReactNode, forwardRef } from "react"
import { VariantProps } from 'class-variance-authority'
import { cn } from '@/utils/style-utility-cn'
import { buttonStyles } from "./Button.styles";

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
        onClick={onClick}
        {...props}
      >
        {/* Render icon and text based on iconPosition */}
        {icon && iconPosition === "left" && (
          <span data-testid="left-button-icon" className="mr-1">{icon}</span> // Adds 4px space between icon and text
        )}
        {children}
        {icon && iconPosition === "right" && (
          <span data-testid="right-button-icon" className="ml-1">{icon}</span> // Adds 4px space between text and icon
        )}
      </button>
    );
  }
);

export default Button