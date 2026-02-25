import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Button from "./Button";

describe("Button component", () => {
  it("renders a button with the given name", () => {
    render(<Button name="Continue" />);
    expect(screen.getByRole("button").textContent).toMatch(/Continue/i);
  });

  it("applies the given class name", () => {
    render(<Button className="btn btn__continue" />);
    const button = screen.getByRole("button");
    expect(button).toHaveClass("btn");
    expect(button).toHaveClass("btn__continue");
  });

  it("renders a button even without props", () => {
    render(<Button />);
    expect(screen.getByRole("button")).toBeInTheDocument();
  });
});
