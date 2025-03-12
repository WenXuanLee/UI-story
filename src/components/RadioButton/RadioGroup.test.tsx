import '@testing-library/jest-dom'
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { RadioGroup } from "./RadioGroup"; // Ensure correct import path

describe("RadioGroup Component", () => {

  test("renders all radio buttons", () => {
    render(
      <RadioGroup
        name="test-group"
        options={[
          { label: "Option 1", value: "1" },
          { label: "Option 2", value: "2" },
          { label: "Option 3", value: "3" },
        ]}
      />
    );

    expect(screen.getByText("Option 1")).toBeInTheDocument();
    expect(screen.getByText("Option 2")).toBeInTheDocument();
    expect(screen.getByText("Option 3")).toBeInTheDocument();
  });

  test("only one radio button can be checked at a time", async () => {
    render(
      <RadioGroup
        name="test-group"
        options={[
          { label: "Option A", value: "A" },
          { label: "Option B", value: "B" },
          { label: "Option C", value: "C" },
        ]}
      />
    );

    const radioA = screen.getByLabelText("Option A");
    const radioB = screen.getByLabelText("Option B");
    const radioC = screen.getByLabelText("Option C");

    await userEvent.click(radioA);
    expect(radioA).toBeChecked();
    expect(radioB).not.toBeChecked();
    expect(radioC).not.toBeChecked();

    await userEvent.click(radioB);
    expect(radioA).not.toBeChecked();
    expect(radioB).toBeChecked();
    expect(radioC).not.toBeChecked();
  });

  test("applies default value correctly", () => {
    render(
      <RadioGroup
        name="test-group"
        defaultValue="2"
        options={[
          { label: "Option 1", value: "1" },
          { label: "Option 2", value: "2" },
          { label: "Option 3", value: "3" },
        ]}
      />
    );

    expect(screen.getByLabelText("Option 2")).toBeChecked();
    expect(screen.getByLabelText("Option 1")).not.toBeChecked();
    expect(screen.getByLabelText("Option 3")).not.toBeChecked();
  });

  test("fires onChange when selection changes", async () => {
    const handleChange = jest.fn();
    render(
      <RadioGroup
        name="test-group"
        options={[
          { label: "Choice A", value: "A" },
          { label: "Choice B", value: "B" },
        ]}
        onChange={handleChange}
      />
    );

    const radioA = screen.getByLabelText("Choice A");
    const radioB = screen.getByLabelText("Choice B");

    await userEvent.click(radioB);
    expect(handleChange).toHaveBeenCalledTimes(1);
    expect(handleChange).toHaveBeenCalledWith("B");

    await userEvent.click(radioA);
    expect(handleChange).toHaveBeenCalledTimes(2);
    expect(handleChange).toHaveBeenCalledWith("A");
  });

  test("does not change selection when disabled", async () => {
    const handleChange = jest.fn();
    render(
      <RadioGroup
        name="test-group"
        state="disabled"
        options={[
          { label: "Option X", value: "X" },
          { label: "Option Y", value: "Y" },
        ]}
        onChange={handleChange}
      />
    );

    const radioX = screen.getByLabelText("Option X");
    const radioY = screen.getByLabelText("Option Y");

    expect(radioX).toBeChecked(); // Default selection
    expect(radioX).toBeDisabled();
    expect(radioY).toBeDisabled();

    await userEvent.click(radioY);
    expect(radioX).toBeChecked(); // Selection should not change
    expect(radioY).not.toBeChecked();
    expect(handleChange).not.toHaveBeenCalled();
  });

  test("applies correct size styles", () => {
    render(
      <RadioGroup
        name="size-test-group"
        size="sm"
        options={[
          { label: "Small", value: "small" },
        ]}
      />
    );
    const smallRadio = screen.getByLabelText("Small");
    expect(smallRadio).toHaveClass("after:w-2 after:h-2"); // Adjust based on your styles

    render(
      <RadioGroup
        name="size-test-group"
        size="lg"
        options={[
          { label: "Large", value: "large" },
        ]}
      />
    );
    const largeRadio = screen.getByLabelText("Large");
    expect(largeRadio).toHaveClass("after:w-3 after:h-3");
  });

});
