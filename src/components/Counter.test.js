import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Counter from "./Counter";

describe("Counter component", () => {
  it("renders with the initial value provided in props", () => {
    const { getByText } = render(<Counter initialValue={9} />);
    expect(getByText("Counter: 9")).toBeInTheDocument();
  });

  it("decrements the count when the decrement button is clicked", () => {
    const { getByText } = render(<Counter initialValue={9} />);
    const decrementButton = getByText("Decrement");
    fireEvent.click(decrementButton);
    expect(getByText("Counter: 8")).toBeInTheDocument();
  });

  it("increments the count when the increment button is clicked", () => {
    const { getByText } = render(<Counter initialValue={9} />);
    const incrementButton = getByText("Increment");
    fireEvent.click(incrementButton);
    expect(getByText("Counter: 10")).toBeInTheDocument();
  });
});



