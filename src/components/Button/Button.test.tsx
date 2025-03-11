import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom'
import userEvent from "@testing-library/user-event";
import Button from "./index";


describe("Button Component", () => {
  test("renders button with correct text", () => {
    render(<Button>Click me</Button>);
    expect(screen.getByText("Click me")).toBeInTheDocument();
  });

  test("applies correct styles for primary variant", () => {
    render(<Button variant="primary">Primary</Button>);
    const button = screen.getByText("Primary");
    expect(button).toHaveClass("bg-blue-500 text-white");
  });

  test("applies correct styles for error variant", () => {
    render(<Button variant="error">Error</Button>);
    const button = screen.getByText("Error");
    expect(button).toHaveClass("bg-red-500 text-white");
  });

  test("handles click events", async () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Click me</Button>);

    await userEvent.click(screen.getByText("Click me"));

    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
