import { cva } from "class-variance-authority";
// Define styles using `cva`
export const checkboxStyles = cva(
  "border relative flex items-center justify-center rounded transition-all", // Base styles
  {
    variants: {
      size: {
        sm: "h-4 w-4",
        md: "h-5 w-5",
        lg: "h-6 w-6",
      },
      checked: {
        true: "border-primary-500 bg-primary-500 hover:bg-primary-600 focus:ring-2 focus:ring-primary-500",
        false: "border-neutral-400 bg-transparent hover:border-primary-500 focus:ring-2 focus:ring-primary-500",
      },
      disabled: {
        true: "border-neutral-300 bg-neutral-100 cursor-not-allowed hover:border-neutral-300 focus:ring-0 hover:bg-neutral-100",
        false: "",
      },
    },
    compoundVariants: [
      {
        checked: true,
        disabled: true,
        className: "border-neutral-100 bg-neutral-200 text-neutral-400 hover:border-neutral-100 hover:bg-neutral-200 focus:ring-0",
      },
    ],
    defaultVariants: {
      size: "md",
      checked: false,
      disabled: false,
    },
  }
);

export const labelStyles = cva("ml-2 transition-colors", {
  variants: {
    size: {
      sm: "text-sm",
      md: "text-base",
      lg: "text-lg",
    },
    disabled: {
      true: "text-neutral-400",
      false: "text-neutral-600",
    },
  },
  defaultVariants: {
    size: "md",
    disabled: false,
  },
});