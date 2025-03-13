import React, { useMemo } from "react";
import { VariantProps } from "class-variance-authority";
import { cn } from "@/utils/style-utility-cn";
import { typographyStyles } from './Typography.styles';


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

  const Typography = useMemo(() => {
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
    Typography as keyof JSX.IntrinsicElements,
    {
      className: cn(typographyStyles({ type, state, weight, className })),
      ...props
    },
    children
  );

};

