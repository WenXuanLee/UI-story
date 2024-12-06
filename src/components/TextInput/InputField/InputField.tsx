import { cn } from "@/utils/style-utilility-cn";
import { ComponentProps, forwardRef } from "react";

type InputProps = ComponentProps<"input"> & {
  state?: string;
};

const InputField = forwardRef<HTMLInputElement, InputProps>(
  ({ state, disabled, ...props }, ref) => {
    return (
      <input
        ref={ref}
        disabled={disabled}
        className={cn(
          "rounded-lg px-3 py-2 border",
          state === "default" && "border-neutral-300 bg-white",
          state === "hover" && "border-neutral-500",
          state === "focus" && "border-primary-500 focus:outline-none",
          state === "disabled" && "bg-neutral-100 border-neutral-200 text-neutral-400 cursor-not-allowed"
        )}
        {...props}
      />
    );
  }
);

export default InputField
