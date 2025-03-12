import '@testing-library/jest-dom'
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Switch } from "./Switch"; // Ensure correct import path

describe("Switch Component", () => {
  
  test("renders switch with label", () => {
    render(<Switch label="Toggle Me" />);
    expect(screen.getByText("Toggle Me")).toBeInTheDocument();
  });

  test("switch reflects checked state correctly", () => {
    render(<Switch label="Checked Switch" checked />);
    const switchButton = screen.getByTestId("switch-button");
    expect(switchButton).toHaveAttribute("aria-checked", "true");
  });

  test("switch toggles when clicked", async () => {
    render(<Switch label="Toggle Switch" />);
    const switchButton = screen.getByTestId("switch-button");

    expect(switchButton).toHaveAttribute("aria-checked", "false");

    await userEvent.click(switchButton);
    expect(switchButton).toHaveAttribute("aria-checked", "true");

    await userEvent.click(switchButton);
    expect(switchButton).toHaveAttribute("aria-checked", "false");
  });

  test("calls onChange when toggled", async () => {
    const handleChange = jest.fn();
    render(<Switch label="Change Switch" onChange={handleChange} />);

    const switchButton = screen.getByTestId("switch-button");

    await userEvent.click(switchButton);
    expect(handleChange).toHaveBeenCalledTimes(1);
    expect(handleChange).toHaveBeenCalledWith(true);

    await userEvent.click(switchButton);
    expect(handleChange).toHaveBeenCalledTimes(2);
    expect(handleChange).toHaveBeenCalledWith(false);
  });

  test("does not toggle when disabled", async () => {
    const handleChange = jest.fn();
    render(<Switch label="Disabled Switch" disabled onChange={handleChange} />);

    const switchButton = screen.getByTestId("switch-button");
    expect(switchButton).toHaveAttribute("aria-disabled", "true");

    await userEvent.click(switchButton);

    expect(switchButton).toHaveAttribute("aria-checked", "false"); // Should remain unchanged
    expect(handleChange).not.toHaveBeenCalled();
  });

  test("applies correct size styles", () => {
    const { rerender } = render(<Switch label="Small Switch" size="sm" />);
    const smallSwitch = screen.getByTestId("switch-button");
    expect(smallSwitch).toHaveClass("w-8 h-4"); // Adjust based on your styles

    rerender(<Switch label="Large Switch" size="lg" />);
    const largeSwitch = screen.getByTestId("switch-button");
    expect(largeSwitch).toHaveClass("w-16 h-8");
  });

  test("switch has correct accessibility attributes", () => {
    const { rerender } = render(<Switch label="Accessible Switch" />);
    const switchButton = screen.getByTestId("switch-button");

    expect(switchButton).toHaveAttribute("aria-checked", "false");
    expect(switchButton).toHaveAttribute("aria-disabled", "false");

    rerender(<Switch label="Disabled Switch" disabled />);
    expect(screen.getByRole("switch")).toHaveAttribute("aria-disabled", "true");
  });

});
