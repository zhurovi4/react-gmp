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
  const vote_averageInput = screen.getByLabelText("Rating:");
  expect(vote_averageInput).toBeInTheDocument();
  const genreInput = screen.getByLabelText("Genre:");
  expect(genreInput).toBeInTheDocument();
  const runtimeInput = screen.getByLabelText("Runtime:");
  expect(runtimeInput).toBeInTheDocument();
  const overviewInput = screen.getByPlaceholderText("Movie overview");
  expect(overviewInput).toBeInTheDocument();
});
