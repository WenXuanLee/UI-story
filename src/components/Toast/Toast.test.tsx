import '@testing-library/jest-dom';
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Toast } from "./Toast"; // Ensure correct import path

describe("Toast Component", () => {

  test("renders toast with message", () => {
    render(<Toast message="This is a toast" />);
    expect(screen.getByText("This is a toast")).toBeInTheDocument();
  });

  test("renders correct icon for success variant", () => {
    render(<Toast message="Success Message" variant="success" />);
    expect(screen.getByTestId("toast-icon-success")).toBeInTheDocument();
  });

  test("renders correct icon for warning variant", () => {
    render(<Toast message="Warning Message" variant="warning" />);
    expect(screen.getByTestId("toast-icon-warning")).toBeInTheDocument();
  });

  test("renders correct icon for error variant", () => {
    render(<Toast message="Error Message" variant="error" />);
    expect(screen.getByTestId("toast-icon-error")).toBeInTheDocument();
  });

  test("renders correct icon for info variant", () => {
    render(<Toast message="Info Message" variant="info" />);
    expect(screen.getByTestId("toast-icon-info")).toBeInTheDocument();
  });

  test("disappears automatically after duration when autoDismiss is enabled", async () => {
    render(<Toast message="Auto dismissing toast" duration={1000} autoDismiss />);
    
    expect(screen.getByText("Auto dismissing toast")).toBeInTheDocument();

    await waitFor(() => {
      expect(screen.queryByText("Auto dismissing toast")).not.toBeInTheDocument();
    }, { timeout: 1500 });
  });

  test("does not disappear automatically when autoDismiss is false", async () => {
    render(<Toast message="Persistent toast" autoDismiss={false} />);
    
    expect(screen.getByText("Persistent toast")).toBeInTheDocument();

    await new Promise((resolve) => setTimeout(resolve, 1500)); // Wait but expect it to still be there

    expect(screen.getByText("Persistent toast")).toBeInTheDocument();
  });

  test("closes when close button is clicked", async () => {
    render(<Toast message="Close Me" />);
    
    const closeButton = screen.getByRole("button", { name: "×" });

    await userEvent.click(closeButton);

    expect(screen.queryByText("Close Me")).not.toBeInTheDocument();
  });

  test("calls onClose callback when manually closed", async () => {
    const handleClose = jest.fn();
    render(<Toast message="Close Callback Toast" onClose={handleClose} />);
    
    const closeButton = screen.getByRole("button", { name: "×" });

    await userEvent.click(closeButton);

    expect(handleClose).toHaveBeenCalledTimes(1);
  });

  test("calls onClose callback when auto dismissed", async () => {
    const handleClose = jest.fn();
    render(<Toast message="Auto Dismiss Callback" duration={1000} autoDismiss onClose={handleClose} />);
    
    await waitFor(() => {
      expect(handleClose).toHaveBeenCalledTimes(1);
    }, { timeout: 1500 });
  });

  test("applies correct position classes", () => {
    render(<Toast message="Top Right Toast" position="top-right" />);
    const toast = screen.getByTestId("toast-wrapper");

    expect(toast).toHaveClass("top-4 right-4");
  });

});
