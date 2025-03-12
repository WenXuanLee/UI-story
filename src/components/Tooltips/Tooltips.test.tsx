import '@testing-library/jest-dom';
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Tooltip } from "./Tooltips"; // Ensure correct import path

describe("Tooltip Component", () => {

  test("renders tooltip content only on hover", async () => {
    render(
      <Tooltip content="Tooltip text">
        <button>Hover me</button>
      </Tooltip>
    );

    expect(screen.queryByText("Tooltip text")).not.toBeInTheDocument(); // ✅ Tooltip should be hidden initially

    await userEvent.hover(screen.getByText("Hover me")); // ✅ Simulate hover
    expect(screen.getByText("Tooltip text")).toBeInTheDocument(); // ✅ Tooltip should now be visible

    await userEvent.unhover(screen.getByText("Hover me")); // ✅ Simulate unhover
    expect(screen.queryByText("Tooltip text")).not.toBeInTheDocument(); // ✅ Tooltip should disappear
  });

  test("applies correct position classes", async () => {
    render(
      <Tooltip content="Tooltip on top" position="top">
        <button>Hover me</button>
      </Tooltip>
    );

    await userEvent.hover(screen.getByText("Hover me"));

    const tooltip = screen.getByTestId("tooltip-wrapper");
    expect(tooltip).toHaveClass("bottom-full"); // Adjust based on your styles
  });

  test("applies max width if provided", async () => {
    render(
      <Tooltip content="Tooltip with max width" maxWidth={300}>
        <button>Hover me</button>
      </Tooltip>
    );

    await userEvent.hover(screen.getByText("Hover me"));

    const tooltip = screen.getByText("Tooltip with max width");
    expect(tooltip).toHaveStyle("max-width: 300px"); // ✅ Checks inline style
  });

  test("supports JSX as tooltip content", async () => {
    render(
      <Tooltip content={<span data-testid="tooltip-content">JSX Tooltip</span>}>
        <button>Hover me</button>
      </Tooltip>
    );

    await userEvent.hover(screen.getByText("Hover me"));

    expect(screen.getByTestId("tooltip-content")).toBeInTheDocument(); // ✅ JSX should render
  });
});
