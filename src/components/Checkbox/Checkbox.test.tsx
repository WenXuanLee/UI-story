import '@testing-library/jest-dom'
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Checkbox } from "./Checkbox"; // Ensure correct import path

describe("Checkbox Component", () => {
  test("renders checkbox with label", () => {
    render(<Checkbox label="Accept Terms" />);
    expect(screen.getByText("Accept Terms")).toBeInTheDocument();
  });

  test("checkbox toggles when clicked (uncontrolled)", async () => {
    render(<Checkbox label="Click me" />);
    const checkbox = screen.getByRole("checkbox");

    expect(checkbox).toHaveAttribute("aria-checked", "false");

    await userEvent.click(checkbox);
    expect(checkbox).toHaveAttribute("aria-checked", "true");

    await userEvent.click(checkbox);
    expect(checkbox).toHaveAttribute("aria-checked", "false");
  });

  test("checkbox does not toggle when disabled", async () => {
    render(<Checkbox label="Disabled Checkbox" disabled />);
    const checkbox = screen.getByRole("checkbox");

    expect(checkbox).toHaveAttribute("aria-checked", "false");

    await userEvent.click(checkbox);
    expect(checkbox).toHaveAttribute("aria-checked", "false"); // Should remain unchanged
  });

  test("checkbox toggles correctly when controlled", async () => {
    let checkedState = false;
    const handleChange = jest.fn((newState) => (checkedState = newState));

    const { rerender } = render(
      <Checkbox label="Controlled Checkbox" checked={checkedState} onChange={handleChange} />
    );

    const checkbox = screen.getByRole("checkbox");

    expect(checkbox).toHaveAttribute("aria-checked", "false");

    await userEvent.click(checkbox);
    expect(handleChange).toHaveBeenCalledTimes(1);
    
    // Update controlled state
    rerender(<Checkbox label="Controlled Checkbox" checked={true} onChange={handleChange} />);
    expect(checkbox).toHaveAttribute("aria-checked", "true");
  });

  test("applies small size styles", () => {
    render(<Checkbox label="Small Checkbox" size="sm" />);
    const checkboxLabel = screen.getByTestId("checkbox-label");
    expect(checkboxLabel).toHaveClass("text-sm"); // Adjust class based on your styles


  });

  test("applies lg size styles", () => {
    render(<Checkbox label="Large Checkbox" size="lg" />);
    const checkboxLabel = screen.getByTestId("checkbox-label");
    expect(checkboxLabel).toHaveClass("text-lg");
  });

  test("renders checkmark when checked", async () => {
    render(<Checkbox label="Checked Checkbox" checked />);
    const checkIcon = screen.getByText((content, element) => element?.tagName.toLowerCase() === "svg");
    expect(checkIcon).toBeInTheDocument();
  });

  test("checkbox has correct accessibility attributes", () => {
    render(<Checkbox label="Accessible Checkbox" />);
    const checkbox = screen.getByRole("checkbox");

    expect(checkbox).toHaveAttribute("aria-checked", "false");
    expect(checkbox).not.toHaveAttribute("aria-disabled");
  });
});
