import React, { useMemo } from "react";
import { cva, VariantProps } from "class-variance-authority";
import { cn } from "@/utils/style-utility-cn";

const typographyStyles = cva(
  "transition-colors", // Base styles: smooth color transition
  {
    variants: {
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
      state: {
        default: "text-black",
        primary: "text-primary-600",
        error: "text-error-500",
        success: "text-success-500",
        warning: "text-warning-500",
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

type TypographyProps = {
  as?: HTMLElement | string; // Allows dynamic HTML tags
} & React.HTMLAttributes<HTMLElement> &
  VariantProps<typeof typographyStyles>;

export const Typography: React.FC<TypographyProps> = ({
  as,
  type,
  state,
  weight,
  className,
  children,
  ...props
}) => {

  const Tag = useMemo(() => {
    return (
      as || {
        h1: "h1",
        h2: "h2",
        h3: "h3",
        h4: "h4",
        subHeading: "h5",
        body: "p",
        caption: "span",
        small: "small",
      }[type || "body"]
    );
  }, [as, type]);
  return React.createElement(
    Tag as keyof JSX.IntrinsicElements,
    {
      className: cn(typographyStyles({ type, state, weight, className })),
      ...props
    },
    children
  );

};

export default Typography;
