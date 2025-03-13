import '@testing-library/jest-dom';
import { render, screen } from "@testing-library/react";
import { Avatar } from "./Avatar"; // Ensure correct import path

describe("Avatar Component", () => {

  test("renders fallback icon when no src or initials are provided", () => {
    render(<Avatar />);
    expect(screen.getByTestId("avatar-default-icon")).toBeInTheDocument();
  });

  test("renders image when src is provided", () => {
    render(<Avatar src="https://example.com/avatar.jpg" alt="User Avatar" />);
    const img = screen.getByRole("img", { name: "User Avatar" });
    expect(img).toHaveAttribute("src", "https://example.com/avatar.jpg");
  });

  test("renders initials when provided", () => {
    render(<Avatar initials="JD" />);
    expect(screen.getByText("JD")).toBeInTheDocument();
  });

  test("renders online status indicator", () => {
    render(<Avatar status="online" />);
    expect(screen.getByTestId("status-indicator")).toHaveClass("bg-success-500");
  });

  test("renders offline status indicator", () => {
    render(<Avatar status="offline" />);
    expect(screen.getByTestId("status-indicator")).toHaveClass("bg-gray-400");
  });

  test("renders busy status indicator", () => {
    render(<Avatar status="busy" />);
    expect(screen.getByTestId("status-indicator")).toHaveClass("bg-error-500");
  });

  test("renders idle status indicator", () => {
    render(<Avatar status="idle" />);
    expect(screen.getByTestId("status-indicator")).toHaveClass("bg-warning-500");
  });

  test("applies correct size styles", () => {
    render(<Avatar size="lg" />);
    const avatarElement = screen.getByTestId("avatar-wrapper");
    expect(avatarElement).toHaveClass("w-16 h-16"); // Adjust based on actual styles
  });

  test("applies correct shape styles for circle", () => {
    render(<Avatar shape="circle" />);
    const avatarElement = screen.getByTestId("avatar-wrapper");
    expect(avatarElement).toHaveClass("rounded-full"); // Adjust based on actual styles
  });

  test("applies correct shape styles for square", () => {
    render(<Avatar shape="square" />);
    const avatarElement = screen.getByTestId("avatar-wrapper");
    expect(avatarElement).toHaveClass("rounded-md"); // Adjust based on actual styles
  });

});
