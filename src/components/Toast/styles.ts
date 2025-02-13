import { cva } from "class-variance-authority";

export const toastStyles = cva(
  "flex items-center gap-2 px-4 py-2 rounded-md shadow-lg transition-transform duration-300 ease-in-out transform",
  {
    variants: {
      variant: {
        info: "bg-primary-100 text-primary-800",
        success: "bg-success-100 text-success-800",
        warning: "bg-warning-100 text-warning-800",
        error: "bg-error-100 text-error-800",
      },
      size: {
        md: "text-sm",
        lg: "text-base",
      },
    },
    defaultVariants: {
      variant: "info",
      size: "md",
    },
  }
);
