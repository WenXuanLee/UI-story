import { cva } from "class-variance-authority";

export const chipStyles = cva(
  "inline-flex items-center rounded-full font-medium transition-all w-fit",
  {
    variants: {
      size: {
        sm: "h-6 text-sm px-2",
        md: "h-8 text-base px-3",
        lg: "h-10 text-lg px-4",
      },
      variant: {
        primary: "bg-primary-500 text-white hover:bg-primary-600",
        "primary-outlined":
          "border border-primary-500 text-primary-500 hover:bg-primary-100",
        secondary: "bg-secondary-500 text-white hover:bg-secondary-600",
        "secondary-outlined":
          "border border-secondary-500 text-secondary-500 hover:bg-secondary-100",
        success: "bg-success-500 text-white hover:bg-success-600",
        "success-outlined":
          "border border-success-500 text-success-500 hover:bg-success-100",
        warning: "bg-warning-500 text-white hover:bg-warning-600",
        "warning-outlined":
          "border border-warning-500 text-warning-500 hover:bg-warning-100",
        error: "bg-error-500 text-white hover:bg-error-600",
        "error-outlined":
          "border border-error-500 text-error-500 hover:bg-error-100",
        disabled: "bg-neutral-400 text-white cursor-not-allowed opacity-50",
      },
      isDisabled: {
        true: "cursor-not-allowed opacity-50",
        false: "",
      }
    },
    defaultVariants: {
      size: "md",
      variant: "primary",
      isDisabled: false,
    },
  }
);
