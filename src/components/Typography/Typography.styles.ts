import { cva } from "class-variance-authority";

export const typographyStyles = cva(
  "transition-colors", // Base styles: smooth color transition
  {
    variants: {
      state: {
        default: "text-black",
        primary: "text-primary-600",
        error: "text-error-500",
        success: "text-success-500",
        warning: "text-warning-500",
      },
      type: {
        h1: "text-3xl md:text-xl", // Headings
        h2: 'text-2xl',
        h3: 'text-lg',
        h4: 'text-base leading-normal',
        subHeading: 'text-base leading-normal',
        body: "text-base", // Regular body text
        caption: "text-sm text-neutral-700", // Small text or captions
        small: 'text-xs'
      },
      weight: {
        regular: "font-normal",
        medium: "font-medium",
        semiBold: "font-semibold",
        bold: "font-bold",
        extraBold: "font-extrabold",
      },
    },
    defaultVariants: {
      type: "body",
      state: "default",
      weight: "regular",
    },
  }
);