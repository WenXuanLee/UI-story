import React, { forwardRef } from "react";
import { cn } from "@/utils/style-utility-cn";
import { inputFieldStyles } from "./styles/inputFieldStyles";
import { labelStyles } from "./styles/labelStyles";
import { hintMsgStyles } from "./styles/hintMsgStyles";

type InputProps = {
  size?: "sm" | "md" | "lg";
  state?: "default" | "error" | "success" | "disabled";
  placeholder?: string;
  prefixIcon?: React.ReactNode;
  suffixIcon?: React.ReactNode;
  label?: string;
  hintMessage?: string;
  id?: string;
  value?: string | number;
  className?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export const InputField = forwardRef<HTMLInputElement, InputProps>(
  (
    { size = "md", state = "default", placeholder, prefixIcon, suffixIcon, label, hintMessage, id, value, className, onChange, ...props },
    ref
  ) => {
    return (
      <div className="flex flex-col gap-1">
        <div>
          {/* Label */}
          {label && (
            <label data-testid="input-label" htmlFor={id} className={cn(labelStyles({ size, state }))}>
              {label}
            </label>
          )}

          {/* Input Wrapper */}
          <div className="relative">
            {prefixIcon && <span className="absolute left-3 top-1/2 -translate-y-1/2">{prefixIcon}</span>}
            <input
              data-testid="input-field"
              id={id}
              ref={ref}
              placeholder={placeholder}
              disabled={state === "disabled"}
              className={cn(
                inputFieldStyles({
                  size,
                  state,
                  hasPrefixIcon: !!prefixIcon,
                  hasSuffixIcon: !!suffixIcon,
                }),
                className,
              )}
              value={value}
              onChange={onChange}
              {...props}
            />
            {suffixIcon && <span className="absolute right-3 top-1/2 -translate-y-1/2">{suffixIcon}</span>}
          </div>
        </div>


        {/* Validation / Hint Message */}
        {hintMessage && (
          <span data-testid="input-hint-message" className={cn(hintMsgStyles({ state }))}>{hintMessage}</span>
        )}
      </div>
    );
  }
);

