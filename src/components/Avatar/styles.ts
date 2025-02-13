import { cva } from "class-variance-authority";

export const avatarStyles = cva(
  "relative flex items-center justify-center bg-neutral-200 overflow-hidden", // Added default background color
  {
    variants: {
      size: {
        sm: "w-8 h-8 text-xs", // 32px
        md: "w-12 h-12 text-sm", // 48px
        lg: "w-16 h-16 text-base", // 64px
      },
      shape: {
        circle: "rounded-full",
        square: "rounded-md",
      },
    },
    defaultVariants: {
      size: "md",
      shape: "circle",
    },
  }
);
