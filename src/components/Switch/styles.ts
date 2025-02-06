import { cva } from "class-variance-authority";

export const switchStyles = cva(
  "relative flex items-center rounded-full transition-all cursor-pointer",
  {
    variants: {
      size: {
        sm: "w-8 h-4 p-[2px]",
        md: "w-12 h-6 p-[3px]",
        lg: "w-16 h-8 p-1",
      },
      checked: {
        true: "bg-primary-600",
        false: "bg-gray-300",
      },
      disabled: {
        true: "opacity-50 cursor-not-allowed",
        false: "",
      },
    },
    defaultVariants: {
      size: "md",
      checked: false,
      disabled: false,
    },
  }
);

export const knobStyles = cva(
  "rounded-full bg-white transition-transform",
  {
    variants: {
      size: {
        sm: "w-3 h-3",
        md: "w-5 h-5",
        lg: "w-7 h-7",
      },
      checked: {
        true: "translate-x-full",
        false: "translate-x-0",
      },
    },
    defaultVariants: {
      size: "md",
      checked: false,
    },
  }
);
