import '@testing-library/jest-dom'
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { RadioButton } from "./RadioButton"; // Ensure correct import path

describe("RadioButton Component", () => {
  
  test("renders radio button with label", () => {
    render(<RadioButton label="Option 1" name="group1" value="1" />);
    expect(screen.getByText("Option 1")).toBeInTheDocument();
  });

  test("renders as checked when `checked` prop is true", () => {
    render(<RadioButton label="Checked Option" name="group1" value="1" checked />);
    const radio = screen.getByRole("radio");
    expect(radio).toBeChecked();
  });

  test("renders as unchecked when `checked` prop is false", () => {
    render(<RadioButton label="Unchecked Option" name="group1" value="2" checked={false} />);
    const radio = screen.getByRole("radio");
    expect(radio).not.toBeChecked();
  });

  test("calls onChange when clicked", async () => {
    const handleChange = jest.fn();
    render(<RadioButton label="Clickable Radio" name="group1" value="3" onChange={handleChange} />);
    
    const radio = screen.getByRole("radio");

    await userEvent.click(radio);
    
    expect(handleChange).toHaveBeenCalledTimes(1);
    expect(handleChange).toHaveBeenCalledWith("3"); // Ensure value is passed correctly
  });

  test("does not trigger onChange when disabled", async () => {
    const handleChange = jest.fn();
    render(<RadioButton label="Disabled Radio" name="group1" value="4" state="disabled" onChange={handleChange} />);
    
    const radio = screen.getByRole("radio");
    expect(radio).toBeDisabled();

    await userEvent.click(radio);
    
    expect(handleChange).not.toHaveBeenCalled();
  });

  test("applies Small size styles", () => {
    render(<RadioButton label="Small Radio" name="group1" value="5" size="sm" />);
    const radio = screen.getByRole("radio");
    expect(radio).toHaveClass("after:w-2 after:h-2"); // Adjust based on your style file
  });

  test("applies Large size styles", () => {
    render(<RadioButton label="Large Radio" name="group1" value="6" size="lg" />);
    const radio = screen.getByRole("radio");
    expect(radio).toHaveClass("after:w-3 after:h-3");
  });

  test("radio button has correct accessibility attributes", () => {
    render(<RadioButton checked={false} label="Accessible Radio" name="group1" value="7" />);
    const radio = screen.getByTestId("radio-button");

    expect(radio).toHaveAttribute("aria-checked", "false");
    expect(radio).toHaveAttribute("aria-disabled", "false");
  });
});
