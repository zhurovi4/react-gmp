import React from "react";
import { render, screen } from "@testing-library/react";
import MovieForm from "./MovieForm";

test("renders the MovieForm component correctly", () => {
  render(<MovieForm />);
  const titleInput = screen.getByLabelText("Title:");
  expect(titleInput).toBeInTheDocument();
  const releaseDateInput = screen.getByLabelText("Release Date:");
  expect(releaseDateInput).toBeInTheDocument();
  const movieUrlInput = screen.getByLabelText("Movie URL:");
  expect(movieUrlInput).toBeInTheDocument();
  const ratingInput = screen.getByLabelText("Rating:");
  expect(ratingInput).toBeInTheDocument();
  const genreInput = screen.getByLabelText("Genre:");
  expect(genreInput).toBeInTheDocument();
  const runtimeInput = screen.getByLabelText("Runtime:");
  expect(runtimeInput).toBeInTheDocument();
  const descriptionInput = screen.getByPlaceholderText("Movie description");
  expect(descriptionInput).toBeInTheDocument();
});
