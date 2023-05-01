import React from "react";
import { render, screen } from "@testing-library/react";
import Dialog from "./Dialog";

describe("Dialog", () => {
  test("should not render when isOpen is false", () => {
    render(
      <Dialog isOpen={false} onClose={() => {}} title="Test Dialog">
        <p>Test content</p>
      </Dialog>
    );

    const title = screen.queryByText("Test Dialog");
    const content = screen.queryByText("Test content");

    expect(title).not.toBeInTheDocument();
    expect(content).not.toBeInTheDocument();
  });
});
