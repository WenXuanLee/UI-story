import { cva } from "class-variance-authority";

export const selectContainerStyles = cva(
  "relative w-full flex items-center justify-between border rounded-md transition-all cursor-pointer",
  {
    variants: {
      size: {
        sm: "h-8 px-2 text-sm",
        md: "h-10 px-3 text-base",
        lg: "h-12 px-4 text-lg",
      },
      state: {
        default: "border-neutral-300 bg-white hover:border-primary-500",
        focus: "border-primary-500 ring-1 ring-primary-500",
        disabled: "border-neutral-200 bg-neutral-100 text-neutral-500 cursor-not-allowed",
      },
    },
    defaultVariants: {
      size: "md",
      state: "default",
    },
  }
);

export const dropdownStyles = cva(
  "absolute left-0 mt-1 w-full bg-white border border-neutral-300 rounded-md shadow-md max-h-60 overflow-auto z-50",
  {
    variants: {
      size: {
        sm: "text-sm py-1",
        md: "text-base py-2",
        lg: "text-lg py-3",
      },
    },
    defaultVariants: {
      size: "md",
    },
  }
);

export const optionStyles = cva(
  "px-3 py-2 cursor-pointer transition-all",
  {
    variants: {
      state: {
        default: "hover:bg-primary-100 text-neutral-900",
        selected: "bg-primary-500 text-white font-medium", // ✅ Highlighted correctly
        disabled: "text-neutral-400 cursor-not-allowed bg-neutral-100", // ✅ Grayed out & disabled
      },
    },
    defaultVariants: {
      state: "default",
    },
  }
);

