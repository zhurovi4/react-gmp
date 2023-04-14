import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import MovieTile from "./MovieTile";

describe("MovieTile component", () => {
  const movie = {
    imageUrl: "https://m.media-amazon.com/images/M/MV5BNDg2NjIxMDUyNF5BMl5BanBnXkFtZTgwMzEzNTE1NTM@._V1_FMjpg_UY508_.jpg",
    name: "Bohemian Rhapsody",
    releaseYear: 2021,
    genres: ["Biography", "Drama", "Music"],
  };
  const onClick = jest.fn();

  it("matches snapshot", () => {
    const { asFragment } = render(<MovieTile movie={movie} onClick={onClick} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it("renders movie details", () => {
    render(<MovieTile movie={movie} onClick={onClick} />);
    expect(screen.getByText(movie.name)).toBeInTheDocument();
    expect(screen.getByText(`${movie.releaseYear}`)).toBeInTheDocument();
    expect(screen.getByText(`${movie.genres.join(", ")}`)).toBeInTheDocument();
  });

  it("calls onClick when clicked", () => {
    render(<MovieTile movie={movie} onClick={onClick} />);
    fireEvent.click(screen.getByRole("img"));
    expect(onClick).toHaveBeenCalledTimes(1);
    expect(onClick).toHaveBeenCalledWith(movie);
  });
});
