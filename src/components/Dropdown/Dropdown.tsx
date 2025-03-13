import React, { useRef, useEffect, useCallback, useState } from "react";
import { selectContainerStyles, dropdownStyles, optionStyles } from "./Dropdown.styles";
import { AiOutlineClose } from "react-icons/ai"; // Importing a close icon from react-icons
import { InputField } from '../InputField/InputField'; // Importing the InputField component

export type OptionType = {
  value: string;
  label: string;
  disabled?: boolean;
};

export type DropdownProps = {
  options: OptionType[];
  multiple?: boolean;
  searchable?: boolean;
  clearable?: boolean;
  renderOption?: (option: OptionType) => React.ReactNode;
  size?: "sm" | "md" | "lg";
  onChange: (value: string | string[]) => void;
};

const DEFAULT_PLACEHOLDER = "Dropdown option";
export const Dropdown: React.FC<DropdownProps> = ({
  options,
  multiple = false,
  searchable = false,
  clearable = true,
  renderOption,
  size = "md",
  onChange,
}) => {
  const [selected, setSelected] = useState<string | string[] | null>(multiple ? [] : null);
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState("");
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
  
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = useCallback((option: OptionType) => {
    if (multiple) {
      const newSelection = selected?.includes(option.value)
        ? (selected as string[]).filter((v) => v !== option.value)
        : [...(selected as string[]), option.value];
      setSelected(newSelection);
      onChange(newSelection);
    } else {
      setSelected(option.value);
      onChange(option.value);
      setIsOpen(false); // Close dropdown in single-select mode
    }
  }, [multiple, selected, onChange]);

  const handleClear = useCallback(() => {
    setSelected(multiple ? [] : null);
    onChange(multiple ? [] : "");
  }, [multiple, onChange]);

  const filteredOptions = searchable
    ? options.filter((opt) => opt.label.toLowerCase().includes(search.toLowerCase()))
    : options;

  return (
    <div className="relative w-full" ref={dropdownRef}>
      {/* Dropdown Trigger */}
      <div
        className={selectContainerStyles({ size })}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>
          {multiple
            ? (selected as string[]).map((s) => options.find((o) => o.value === s)?.label).join(", ") || DEFAULT_PLACEHOLDER
            : options.find((o) => o.value === selected)?.label || DEFAULT_PLACEHOLDER}
        </span>
        {clearable && selected && (
          <button
            onClick={handleClear}
            className="text-gray-500 hover:text-gray-800 transition-colors"
            aria-label="Close"
          >
            <AiOutlineClose size={20} />
          </button>
        )}
      </div>

      {/* Dropdown Panel */}
      {isOpen && (
        <div ref={dropdownRef} className={dropdownStyles({ size })}>
            { searchable && (
              <InputField
                size="md"
                state="default"
                placeholder="Search..."
                value={search}
                className="border-transparent focus:border-transparent"
                onChange={(e) => setSearch(e.target.value)}
              />
            )}

          {filteredOptions.map((option) => (
            <div
              key={option.value}
              className={optionStyles({
                state: option.disabled ? "disabled" : selected === option.value ? "selected" : "default",
              })}
              onClick={() => !option.disabled && handleSelect(option)}
            >
              {renderOption ? renderOption(option) : option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
