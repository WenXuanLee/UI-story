import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom'
import userEvent from "@testing-library/user-event";
import Button from "./Button";
import { FiCheck } from "react-icons/fi";

describe("Button Component", () => {
  test("renders button with correct text", () => {
    render(<Button>Click me</Button>);
    expect(screen.getByText("Click me")).toBeInTheDocument();
  });

  test("button has the correct role", () => {
    render(<Button>Accessible Button</Button>);
    expect(screen.getByRole("button", { name: "Accessible Button" })).toBeInTheDocument();
  });

  test("applies correct styles for primary variant", () => {
    render(<Button variant="primary">Primary</Button>);
    const button = screen.getByText("Primary");
    expect(button).toHaveClass("bg-primary-500 text-neutral-50");
  });

  test("applies correct styles for secondary variant", () => {
    render(<Button variant="secondary">Secondary</Button>);
    const button = screen.getByText("Secondary");
    expect(button).toHaveClass("bg-neutral-50", "text-primary-500", "border-primary-500");
  });

  test("applies correct styles for outline variant", () => {
    render(<Button variant="outline">Outline</Button>);
    const button = screen.getByText("Outline");
    expect(button).toHaveClass("border", "border-primary-500", "text-primary-500");
  });

  test("applies correct styles for text variant", () => {
    render(<Button variant="text">Text</Button>);
    const button = screen.getByText("Text");
    expect(button).toHaveClass("bg-transparent", "text-primary-500");
  });

  test("applies correct styles for error variant", () => {
    render(<Button variant="error">Error</Button>);
    const button = screen.getByText("Error");
    expect(button).toHaveClass("bg-error-500 text-white");
  });

  test("handles click events", async () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Click me</Button>);

    await userEvent.click(screen.getByText("Click me"));

    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  test("button is disabled and does not trigger click event", async () => {
    const handleClick = jest.fn();
    render(<Button disabled onClick={handleClick}>Disabled</Button>);

    const button = screen.getByText("Disabled");
    expect(button).toBeDisabled();

    await userEvent.click(button);
    expect(handleClick).not.toHaveBeenCalled();
  });

  test("button with fullWidth applies correct class", () => {
    render(<Button fullWidth>Full Width</Button>);
    const button = screen.getByText("Full Width");
    expect(button).toHaveClass("w-full");
  });


  test("renders left icon correctly", () => {
    render(<Button icon={<FiCheck />} iconPosition="left">Left Icon</Button>);
    expect(screen.getByTestId("left-button-icon")).toBeInTheDocument();
  });

  test("renders right icon correctly", () => {
    render(<Button icon={<FiCheck />} iconPosition="right">Right Icon</Button>);
    expect(screen.getByTestId("right-button-icon")).toBeInTheDocument();
  });

  test("renders button without crashing when no props are provided", () => {
    render(<Button />);
    expect(screen.getByRole("button")).toBeInTheDocument();
  });

});
