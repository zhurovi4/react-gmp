import React from "react";
import { render, screen } from "@testing-library/react";
import MovieDetails from "./MovieDetails";

describe("MovieDetails component", () => {
  const movie = {
    imageUrl: "https://m.media-amazon.com/images/M/MV5BZmExNmEwYWItYmQzOS00YjA5LTk2MjktZjEyZDE1Y2QxNjA1XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_QL75_UX285_CR0,2,285,422_.jpg",
    name: "A Good movie",
    rating: 4.5,
    duration: "1h 30m",
    description: "This is an example movie.",
    releaseYear: 2023,
    genres: ["Action", "Comedy"],
  };

  it("renders movie details", () => {
    render(<MovieDetails movie={movie} />);
    expect(screen.getByAltText(movie.name)).toBeInTheDocument();
    expect(screen.getByText(movie.name)).toBeInTheDocument();
    expect(screen.getByText(movie.rating.toString())).toBeInTheDocument();
    expect(screen.getByText(movie.duration)).toBeInTheDocument();
    expect(screen.getByText(movie.description)).toBeInTheDocument();
    expect(screen.getByText(movie.releaseYear.toString())).toBeInTheDocument();
    expect(screen.getByText(movie.genres.join(", "))).toBeInTheDocument();
  });

  it("matches snapshot", () => {
    const { container } = render(<MovieDetails movie={movie} />);
    expect(container).toMatchSnapshot();
  });
});
