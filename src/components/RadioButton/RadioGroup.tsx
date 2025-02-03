import { useState } from "react";
import { RadioButton } from "./index";

type RadioGroupProps = {
  name: string;
  options: { label: string; value: string }[];
  defaultValue?: string;
  size?: "sm" | "md" | "lg";
  state?: "default" | "error" | "disabled";
  onChange?: (value: string) => void;
};

export const RadioGroup = ({
  name,
  options,
  defaultValue,
  size = "md",
  state = "default",
  onChange,
}: RadioGroupProps) => {
  const [selectedValue, setSelectedValue] = useState(defaultValue || options[0].value);

  const handleChange = (value: string) => {
    setSelectedValue(value);
    onChange?.(value);
  };

  return (
    <div className="flex flex-col gap-3">
      {options.map((option) => (
        <RadioButton
          key={option.value}
          name={name}
          value={option.value}
          label={option.label}
          size={size}
          state={state}
          checked={selectedValue === option.value}
          onChange={handleChange}
        />
      ))}
    </div>
  );
};
