import { cva } from "class-variance-authority";

export const modalStyles = cva(
  "p-4 relative bg-white rounded-lg shadow-lg transition-opacity duration-300 ease-out animate-[fadeIn_300ms_ease-out_forwards]", // Base styles
  {
    variants: {
      size: {
        sm: "w-80", // 320px
        md: "w-96", // 480px
        lg: "w-[640px]", // 640px
      },
    },
    defaultVariants: {
      size: "md",
    },
  }
);
