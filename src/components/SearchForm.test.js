import React from "react";
import { render, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import SearchForm from "./SearchForm";

describe("SearchForm component", () => {
  it("renders an input with the value equal to initial value passed in props", () => {
    const { getByRole } = render(<SearchForm initialQuery="Find a movie" />);
    const input = getByRole("textbox");
    expect(input).toHaveValue("Find a movie");
  });

  it("calls the onChange prop with the proper value when clicking the Submit button", () => {
    const handleChange = jest.fn();
    const { getByRole } = render(<SearchForm onSearch={handleChange} />);
    const input = getByRole("textbox");
    const submitButton = getByRole("button");
    fireEvent.change(input, { target: { value: "Kill Bill" } });
    fireEvent.click(submitButton);
    expect(handleChange).toHaveBeenCalledWith("Kill Bill");
  });

  it("calls the onChange prop with the proper value when pressing Enter", () => {
    const handleChange = jest.fn();
    const { getByRole } = render(<SearchForm onSearch={handleChange} />);
    const input = getByRole("textbox");
    userEvent.type(input, "new value{enter}");
    expect(handleChange).toHaveBeenCalledWith("new value");
  });
});
