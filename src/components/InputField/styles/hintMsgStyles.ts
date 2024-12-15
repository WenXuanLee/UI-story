import { cva, VariantProps } from "class-variance-authority";

export const hintMsgStyles = cva(
  ["text-xs", "mt-1"], // Base styles
  {
    variants: {
      state: {
        error: "text-error-500",
        success: "text-success-500",
        default: "text-neutral-500",
        disabled: "text-neutral-400"
      },
    },
    defaultVariants: {
      state: "default",
    },
  }
);

export type hintMsgStylesProps = VariantProps<typeof hintMsgStyles>;
