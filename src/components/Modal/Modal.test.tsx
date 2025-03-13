import '@testing-library/jest-dom';
import { render, screen, fireEvent } from "@testing-library/react";
import { Modal } from "./Modal"; // Ensure correct import path

describe("Modal Component", () => {
  
  test("renders modal when isOpen=true", () => {
    render(
      <Modal isOpen onClose={() => {}}>
        <Modal.Header title="Title" />
        <Modal.Body>Modal content</Modal.Body>
        <Modal.Footer>Footer content</Modal.Footer>
      </Modal>
    );

    expect(screen.getByText("Title")).toBeInTheDocument();
    expect(screen.getByText("Modal content")).toBeInTheDocument();
    expect(screen.getByText("Footer content")).toBeInTheDocument();
  });

  test("does not render modal when isOpen=false", () => {
    render(
      <Modal isOpen={false} onClose={() => {}}>
        <Modal.Body>Should not be visible</Modal.Body>
      </Modal>
    );

    expect(screen.queryByText("Should not be visible")).not.toBeInTheDocument();
  });

  test("closes modal when clicking on backdrop", () => {
    const handleClose = jest.fn();
    render(
      <Modal isOpen onClose={handleClose}>
        <Modal.Body>Modal content</Modal.Body>
      </Modal>
    );

    const backdrop = screen.getByTestId("dialog-wrapper");
    fireEvent.click(backdrop); // Simulating a backdrop click

    expect(handleClose).toHaveBeenCalledTimes(1);
  });

  test("does not close modal when clicking inside the content", () => {
    const handleClose = jest.fn();
    render(
      <Modal isOpen onClose={handleClose}>
        <Modal.Body>Modal content</Modal.Body>
      </Modal>
    );

    const modalContent = screen.getByText("Modal content");
    fireEvent.click(modalContent); // Clicking inside should NOT trigger close

    expect(handleClose).not.toHaveBeenCalled();
  });

  test("applies correct size styles", () => {
    const { rerender } = render(
      <Modal isOpen size="lg" onClose={() => {}}>
        <Modal.Body>Large Modal</Modal.Body>
      </Modal>
    );

    const modalElement = screen.getByText("Large Modal").parentElement;
    expect(modalElement).toHaveClass("w-[640px]"); // Adjust based on your style system
    rerender(
      <Modal isOpen size="md" onClose={() => {}}>
        <Modal.Body>Medium Modal</Modal.Body>
      </Modal>
    );
    const modalMdElement = screen.getByText("Medium Modal").parentElement;
    expect(modalMdElement).toHaveClass("w-96"); // Adjust based on your style system
    rerender(
      <Modal isOpen size="sm" onClose={() => {}}>
        <Modal.Body>Small Modal</Modal.Body>
      </Modal>
    );
    const modalSmElement = screen.getByText("Small Modal").parentElement;
    expect(modalSmElement).toHaveClass("w-80"); // Adjust based on your style system
  });

});
