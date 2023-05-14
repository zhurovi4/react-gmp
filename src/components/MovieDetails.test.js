import React from "react";
import { render, screen } from "@testing-library/react";
import MovieDetails from "./MovieDetails";

describe("MovieDetails component", () => {
  const movie = {
    poster_path: "https://m.media-amazon.com/images/M/MV5BZmExNmEwYWItYmQzOS00YjA5LTk2MjktZjEyZDE1Y2QxNjA1XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_QL75_UX285_CR0,2,285,422_.jpg",
    title: "A Good movie",
    vote_average: 4.5,
    duration: "1h 30m",
    overview: "This is an example movie.",
    release_date: '2004-11-11',
    genres: ["Action", "Comedy"],
  };

  it("renders movie details", () => {
    render(<MovieDetails movie={movie} />);
    expect(screen.getByAltText(movie.title)).toBeInTheDocument();
    expect(screen.getByText(movie.title)).toBeInTheDocument();
    expect(screen.getByText(movie.vote_average.toString())).toBeInTheDocument();
    expect(screen.getByText(movie.duration)).toBeInTheDocument();
    expect(screen.getByText(movie.overview)).toBeInTheDocument();
    expect(screen.getByText(movie.release_date.toString())).toBeInTheDocument();
    expect(screen.getByText(movie.genres.join(", "))).toBeInTheDocument();
  });

  it("matches snapshot", () => {
    const { container } = render(<MovieDetails movie={movie} />);
    expect(container).toMatchSnapshot();
  });
});
