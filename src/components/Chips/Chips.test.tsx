import '@testing-library/jest-dom'
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Chip } from "./Chips"; // Ensure correct import path
import { AiFillStar } from "react-icons/ai"; // Example icon

describe("Chips Component", () => {
  
  test("renders chip with label", () => {
    render(<Chip label="My Chip" />);
    expect(screen.getByText("My Chip")).toBeInTheDocument();
  });

  test("applies correct styles for primary variant", () => {
    render(<Chip label="Primary Chip" variant="primary" />);
    const chip = screen.getByText("Primary Chip");
    expect(chip.parentElement).toHaveClass("bg-primary-500");
  });

  test("applies correct styles for outlined variant", () => {
    render(<Chip label="Outlined Chip" variant="primary-outlined" />);
    const chip = screen.getByText("Outlined Chip");
    expect(chip.parentElement).toHaveClass("border", "border-primary-500");
  });

  test("applies correct size for 'sm'", () => {
    render(<Chip label="Small Chip" size="sm" />);
    const chip = screen.getByText("Small Chip");
    expect(chip).toHaveClass("text-sm");
  });

  test("applies correct size for 'lg'", () => {
    render(<Chip label="Large Chip" size="lg" />);
    const chip = screen.getByText("Large Chip");
    expect(chip).toHaveClass("text-lg");
  });

  test("handles click event", async () => {
    const clickTest = jest.fn();
    render(<Chip label="Clickable Chip" isDisabled={false} onClick={clickTest} />);
    
    await userEvent.click(screen.getByText("Clickable Chip"));
    
    expect(clickTest).toHaveBeenCalledTimes(1);
  });

  test("does not trigger onClick when disabled", async () => {
    const handleClick = jest.fn();
    render(<Chip label="Disabled Chip" isDisabled onClick={handleClick} />);
    
    await userEvent.click(screen.getByText("Disabled Chip"));
    
    expect(handleClick).not.toHaveBeenCalled();
  });

  test("renders icon if provided", () => {
    render(<Chip label="Chip with Icon" icon={<AiFillStar />} />);
    expect(screen.getByTestId("chip-icon")).toBeInTheDocument();
  });

  test("renders removable chip with close button", () => {
    render(<Chip label="Removable Chip" removable />);
    expect(screen.getByLabelText("Remove chip")).toBeInTheDocument();
  });

  test("handles remove event when clicking close button", async () => {
    const handleRemove = jest.fn();
    render(<Chip label="Removable Chip" removable onRemove={handleRemove} />);

    await userEvent.click(screen.getByLabelText("Remove chip"));

    expect(handleRemove).toHaveBeenCalledTimes(1);
  });

  test("clicking remove button does not trigger chip onClick", async () => {
    const handleClick = jest.fn();
    const handleRemove = jest.fn();

    render(
      <Chip label="Removable Chip" removable onClick={handleClick} onRemove={handleRemove} />
    );

    await userEvent.click(screen.getByLabelText("Remove chip"));

    expect(handleRemove).toHaveBeenCalledTimes(1);
    expect(handleClick).not.toHaveBeenCalled();
  });
});
