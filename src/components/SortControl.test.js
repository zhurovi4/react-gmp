import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import SortControl from "./SortControl";

describe("SortControl", () => {
  test("matches snapshot", () => {
    const { container } = render(
      <SortControl currentSelection="release-date" />
    );
    expect(container).toMatchSnapshot();
  });

  test("renders label and select elements", () => {
    render(<SortControl currentSelection="release-date" />);

    const labelElement = screen.getByLabelText("Sort by:");
    const selectElement = screen.getByRole("combobox", { name: "Sort by:" });

    expect(labelElement).toBeInTheDocument();
    expect(selectElement).toBeInTheDocument();
  });
});
