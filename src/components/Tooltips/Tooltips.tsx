import { useState, useRef, ReactNode } from "react";
import { cn } from "@/utils/style-utility-cn";
import { tooltipStyles, arrowStyles } from "./Tooltips.styles";

type TooltipProps = {
  content: string | ReactNode;
  position?: "top" | "bottom" | "left" | "right";
  maxWidth?: number; // Allow users to set a max width
  children: ReactNode;
};

export const Tooltip = ({ content, position = "top", maxWidth, children }: TooltipProps) => {
  const [visible, setVisible] = useState(false);
  const tooltipRef = useRef<HTMLDivElement>(null)

  return (
    <div
      className="relative inline-block"
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
    >
      {children}
      {visible && (
        <div
          data-testid="tooltip-wrapper"
          ref={tooltipRef}
          className={cn(tooltipStyles({ position: position }))}
          style={{ maxWidth: maxWidth ? `${maxWidth}px` : "200px" }} // ✅ Apply max width dynamically
        >
          {content}
          <div className={cn(arrowStyles({ position: position }))} />
        </div>
      )}
    </div>
  );
};
