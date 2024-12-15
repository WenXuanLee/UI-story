import { cva, VariantProps } from "class-variance-authority";

export const labelStyles = cva(
  ["font-medium", "block", "mb-1"], // Common styles
  {
    variants: {
      size: {
        sm: "text-xs",
        md: "text-sm",
        lg: "text-base",
      },
      state: {
        default: "text-neutral-600 group-focus-within:text-primary-600",
        error: "text-error-500",
        success: "text-success-500",
        disabled: "text-neutral-400",
      },
    },
    defaultVariants: {
      size: "md",
      state: "default",
    },
  }
);

export type LabelStylesProps = VariantProps<typeof labelStyles>;
