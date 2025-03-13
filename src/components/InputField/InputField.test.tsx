import '@testing-library/jest-dom';
import { render, screen, fireEvent } from "@testing-library/react";
import { InputField } from "./InputField"; // Ensure correct import path

describe("InputField Component", () => {
  
  test("renders input field with placeholder", () => {
    render(<InputField placeholder="Enter text..." />);
    expect(screen.getByPlaceholderText("Enter text...")).toBeInTheDocument();
  });

  test("updates value when controlled", () => {
    const { rerender } = render(<InputField value="Initial" onChange={() => {}} />);
    
    const input = screen.getByTestId("input-field");
    expect(input).toHaveValue("Initial");

    rerender(<InputField value="Updated" onChange={() => {}} />);
    expect(input).toHaveValue("Updated");
  });

  test("calls onChange when typing", () => {
    const handleChange = jest.fn();
    render(<InputField onChange={handleChange} />);

    const input = screen.getByTestId("input-field");
    fireEvent.change(input, { target: { value: "Hello" } });

    expect(handleChange).toHaveBeenCalledTimes(1);
  });

  test("input field is disabled when state='disabled'", () => {
    render(<InputField state="disabled" />);
    
    const input = screen.getByTestId("input-field");
    expect(input).toBeDisabled();
  });

  test("renders label correctly", () => {
    const { rerender } = render(<InputField label="Input Label" id="test-input" />);
    const label = screen.getByTestId("input-label");
    expect(label).toBeInTheDocument();
    expect(label).toHaveClass("text-neutral-600");

    // Test for 'state' prop
    rerender(<InputField label=" Label" id="test-input" state="error" />);
    expect(label).toHaveClass("text-error-500");
    rerender(<InputField label=" Label" id="test-input" state="success" />);
    expect(label).toHaveClass("text-success-500");
    rerender(<InputField label=" Label" id="test-input" state="disabled" />);
    expect(label).toHaveClass("text-neutral-400");
  });

  test("renders hint message correctly", () => {
    const { rerender } = render(<InputField hintMessage="Hint text here" />);
    const hintMessage = screen.getByTestId("input-hint-message");
    expect(hintMessage).toBeInTheDocument();
    expect(hintMessage).toHaveClass("text-neutral-500");
    // Test for 'state' prop
    rerender(<InputField hintMessage="Hint error" id="test-input" state="error" />);
    expect(hintMessage).toHaveClass("text-error-500");
    rerender(<InputField hintMessage="Hint success" id="test-input" state="success" />);
    expect(hintMessage).toHaveClass("text-success-500");
    rerender(<InputField hintMessage="Hint disabled" id="test-input" state="disabled" />);
    expect(hintMessage).toHaveClass("text-neutral-400");
  });

  test("renders prefix icon correctly", () => {
    render(<InputField prefixIcon={<span data-testid="prefix-icon">🔍</span>} />);
    expect(screen.getByTestId("prefix-icon")).toBeInTheDocument();
  });

  test("renders suffix icon correctly", () => {
    render(<InputField suffixIcon={<span data-testid="suffix-icon">✔</span>} />);
    expect(screen.getByTestId("suffix-icon")).toBeInTheDocument();
  });

  test("applies correct class for error state", () => {
    render(<InputField state="error" />);
    const input = screen.getByRole("textbox");
    expect(input).toHaveClass("border-error-500"); // Adjust class based on your styles
  });

  test("applies correct class for success state", () => {
    render(<InputField state="success" />);
    const input = screen.getByRole("textbox");
    expect(input).toHaveClass("border-success-500"); // Adjust class based on your styles
  });

});
