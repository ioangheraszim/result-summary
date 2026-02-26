import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Result from "./Result";

describe("result component", () => {
  it("renders result components title", () => {
    render(<Result />);
    expect(screen.getByRole("heading").textContent).toMatch(/Result/i);
  });

  it("renders average score text", () => {
    render(<Result />);
    expect(screen.getByText(/76/i)).toBeInTheDocument();
  });

  it("renders out of number of people text", () => {
    render(<Result />);
    expect(screen.getByText(/of 100/i)).toBeInTheDocument();
  });

  it("renders achievment text", () => {
    render(<Result />);
    expect(screen.getByText(/Great/i)).toBeInTheDocument();
  });

  it("renders information text", () => {
    render(<Result />);
    expect(
      screen.getByText(
        /You scored higher than 65% of the people who have taken these tests./i,
      ),
    ).toBeInTheDocument();
  });
});
