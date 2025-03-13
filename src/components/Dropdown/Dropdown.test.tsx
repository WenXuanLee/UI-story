import '@testing-library/jest-dom';
import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Dropdown } from "./Dropdown"; // Ensure correct import path

const mockOptions = [
  { value: "1", label: "Option 1" },
  { value: "2", label: "Option 2" },
  { value: "3", label: "Option 3", disabled: true },
];

describe("Dropdown Component", () => {

  test("renders dropdown with default placeholder", () => {
    render(<Dropdown options={mockOptions} onChange={() => {}} />);
    expect(screen.getByText("Dropdown option")).toBeInTheDocument();
  });

  test("opens dropdown when clicked", async () => {
    render(<Dropdown options={mockOptions} onChange={() => {}} />);
    
    const dropdownTrigger = screen.getByText("Dropdown option");
    await userEvent.click(dropdownTrigger);

    expect(screen.getByText("Option 1")).toBeInTheDocument();
    expect(screen.getByText("Option 2")).toBeInTheDocument();
  });

  test("closes dropdown when clicking outside", async () => {
    render(<Dropdown options={mockOptions} onChange={() => {}} />);
    
    await userEvent.click(screen.getByText("Dropdown option")); // Open dropdown
    expect(screen.getByText("Option 1")).toBeInTheDocument();
    
    await userEvent.click(document.body); // Click outside dropdown
    expect(screen.queryByText("Option 1")).not.toBeInTheDocument();
  });

  test("selects an option", async () => {
    const handleChange = jest.fn();
    render(<Dropdown options={mockOptions} onChange={handleChange} />);
    
    await userEvent.click(screen.getByText("Dropdown option")); // Open dropdown
    await userEvent.click(screen.getByText("Option 2")); // Select option

    // TODO investigate if should be call twice
    expect(screen.getByText("Option 2")).toBeInTheDocument();
    expect(handleChange).toHaveBeenCalledWith("2");
  });

  test("supports multiple selections", async () => {
    const handleChange = jest.fn();
    render(<Dropdown options={mockOptions} multiple onChange={handleChange} />);
    
    await userEvent.click(screen.getByText("Dropdown option"));
    await userEvent.click(screen.getByText("Option 1"));
    await userEvent.click(screen.getByText("Option 2"));

    expect(screen.getByText("Option 1, Option 2")).toBeInTheDocument();
    expect(handleChange).toHaveBeenCalledWith(["1", "2"]);
  });

  test("filters options when searching", async () => {
    render(<Dropdown options={mockOptions} searchable onChange={() => {}} />);
    
    await userEvent.click(screen.getByText("Dropdown option"));
    await userEvent.type(screen.getByPlaceholderText("Search..."), "2");

    expect(screen.getByText("Option 2")).toBeInTheDocument();
    expect(screen.queryByText("Option 1")).not.toBeInTheDocument();
  });

  test("clears selection when clearable button is clicked", async () => {
    const handleChange = jest.fn();
    render(<Dropdown options={mockOptions} clearable onChange={handleChange} />);

    await userEvent.click(screen.getByText("Dropdown option")); // Open dropdown
    await userEvent.click(screen.getByText("Option 1")); // Select option

    expect(screen.getByText("Option 1")).toBeInTheDocument();

    await userEvent.click(screen.getByRole("button", { name: "Close" })); // Click clear button

    expect(screen.getByText("Dropdown option")).toBeInTheDocument(); // Back to placeholder
    expect(handleChange).toHaveBeenCalledWith("");
  });

  test("does not select a disabled option", async () => {
    const handleChange = jest.fn();
    render(<Dropdown options={mockOptions} onChange={handleChange} />);

    await userEvent.click(screen.getByText("Dropdown option"));
    await userEvent.click(screen.getByText("Option 3")); // This option is disabled

    expect(screen.getByText("Dropdown option")).toBeInTheDocument(); // No selection change
    expect(handleChange).not.toHaveBeenCalled();
  });

});
