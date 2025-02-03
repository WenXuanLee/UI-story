import { cva } from "class-variance-authority";

export const radioButtonStyles = cva(
  [
    "appearance-none rounded-full border transition-all focus:ring-2 focus:outline-none",
    "checked:ring-opacity-20",
  ],
  {
    variants: {
      size: {
        sm: "w-4 h-4",
        md: "w-5 h-5",
        lg: "w-6 h-6",
      },
      state: {
        default: "border-neutral-500 checked:bg-primary-500",
        error: "border-error-500 checked:bg-error-500",
        disabled: "border-neutral-300 bg-neutral-300 opacity-50 cursor-not-allowed",
      },
    },
    defaultVariants: {
      size: "md",
      state: "default",
    },
  }
);
