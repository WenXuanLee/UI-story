import { cva, VariantProps } from "class-variance-authority";

export const inputFieldStyles = cva(
  [
    "w-full",
    "rounded-lg",
    "focus:outline-none",
  ],
  {
    variants: {
      state: {
        default: "border border-neutral-300 bg-white focus:border-primary-500",
        error: "border border-error-500 bg-white focus:border-error-500",
        success: "border border-success-500 bg-white",
        disabled: "border border-neutral-200 bg-neutral-100 text-neutral-400 cursor-not-allowed",
      },
      size: {
        sm: "h-8 px-2 text-sm",
        md: "h-10 px-3 text-base",
        lg: "h-12 px-4 text-lg",
      },
      hasPrefixIcon: {
        true: "pl-10", // Adds padding for prefix icon
        false: "",
      },
      hasSuffixIcon: {
        true: "pr-10", // Adds padding for suffix icon
        false: "",
      },
    },
    defaultVariants: {
      state: "default",
      size: "md",
      hasPrefixIcon: false,
      hasSuffixIcon: false,
    },
  }
);

export type InputFieldStylesProps = VariantProps<typeof inputFieldStyles>;
