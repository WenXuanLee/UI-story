import { cva } from "class-variance-authority";

export const tooltipStyles = cva(
  "absolute z-50 bg-neutral-800 text-white text-xs rounded-md px-3 py-2 shadow-md transition-opacity duration-200 w-max inline-flex flex-col break-all whitespace-pre-line",
  {
    variants: {
      position: {
        top: "bottom-full left-1/2 transform -translate-x-1/2 mb-3",
        bottom: "top-full left-1/2 transform -translate-x-1/2 mt-3",
        left: "right-full top-1/2 transform -translate-y-1/2 mr-3",
        right: "left-full top-1/2 transform -translate-y-1/2 ml-3",
      },
    },
    defaultVariants: {
      position: "top",
    },
  }
);

export const arrowStyles = cva(
  "absolute w-3 h-3 bg-neutral-800 rotate-45",
  {
    variants: {
      position: {
        top: "left-1/2 transform -translate-x-1/2 bottom-[-3px]",
        bottom: "left-1/2 transform -translate-x-1/2 top-[-3px]",
        left: "top-1/2 transform -translate-y-1/2 right-[-3px]",
        right: "top-1/2 transform -translate-y-1/2 left-[-3px]",
      },
    },
    defaultVariants: {
      position: "top",
    },
  }
);
