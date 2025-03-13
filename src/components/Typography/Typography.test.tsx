import '@testing-library/jest-dom';
import { render, screen } from "@testing-library/react";
import { Typography } from "./Typography"; // Ensure correct import path

describe("Typography Component", () => {
  
  test("renders default as <p> when no 'as' or 'type' is provided", () => {
    render(<Typography>Default Typography</Typography>);
    const typographyElement = screen.getByText("Default Typography");
    expect(typographyElement.tagName.toLowerCase()).toBe("p");
  });

  test("renders correct tag based on 'as' prop", () => {
    render(<Typography as="h1">Heading Text</Typography>);
    const typographyElement = screen.getByText("Heading Text");
    expect(typographyElement.tagName.toLowerCase()).toBe("h1");
  });

  test("renders correct tag based on 'type' prop", () => {
    render(<Typography type="h2">H2 Typography</Typography>);
    const typographyElement = screen.getByText("H2 Typography");
    expect(typographyElement.tagName.toLowerCase()).toBe("h2");
  });

  test("applies correct class based on 'type' prop", () => {
    render(<Typography type="caption">Caption Text</Typography>);
    const typographyElement = screen.getByText("Caption Text");
    expect(typographyElement).toHaveClass("text-sm text-neutral-700"); // Adjust based on actual styles
  });

  test("applies correct class based on 'weight' prop", () => {
    render(<Typography type="body" weight="bold">Bold Text</Typography>);
    const typographyElement = screen.getByText("Bold Text");
    expect(typographyElement).toHaveClass("font-bold"); // Adjust based on actual styles
  });

  test("applies correct class based on 'state' prop", () => {
    render(<Typography type="body" state="error">Error Text</Typography>);
    const typographyElement = screen.getByText("Error Text");
    expect(typographyElement).toHaveClass("text-error-500"); // Adjust based on actual styles
  });

  test("supports custom class names", () => {
    render(<Typography className="custom-class">Custom Class Typography</Typography>);
    const typographyElement = screen.getByText("Custom Class Typography");
    expect(typographyElement).toHaveClass("custom-class");
  });

});
