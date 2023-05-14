import React, { useState, useEffect } from "react";
import axios from "axios";
import SearchForm from "./SearchForm";
import GenreList from "./GengeList";
import MovieTile from "./MovieTile";
import MovieDetails from "./MovieDetails";
import MovieForm from "./MovieForm";
import SortControl from "./SortControl";
import Header from ".//Header";
import styles from "./MovieListPage.module.css";

export const MovieListPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [sortingCriterion, setSortingCriterion] = useState("release-date");
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [movies, setMovies] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState("all");
  const genres = ["all", "documentary", "comedy", "horror", "crime"];

  useEffect(() => {
    let cancelTokenSource = axios.CancelToken.source();

    const fetchMovies = async () => {
      try {
        const response = await axios.get("http://localhost:4000/movies", {
          cancelToken: cancelTokenSource.token,
          params: {
            search: searchQuery,
            searchBy: 'title',
            sortBy: sortingCriterion,
            ...(selectedGenre !== 'all' && {
              filter: selectedGenre.toLowerCase(),
            }),
          },
        });

        const data = response.data;
        setMovies(data.data);
      } catch (error) {
        if (axios.isCancel(error)) {
          console.log("Request canceled:", error.message);
        } else {
          console.error("Error fetching movies:", error);
        }
      }
    };

    fetchMovies();

    return () => {
      cancelTokenSource.cancel("Request canceled due to component unmount");
    };
  }, [searchQuery, sortingCriterion, selectedGenre]);

  const handleSearch = (searchQuery) => {
    setSearchQuery(searchQuery);
  };

  const handleMovieTileClick = (movie) => {
    setSelectedMovie(movie);
  };

  const handleGenreSelect = (genre) => {
    setSelectedGenre(genre);
  };

  const closeMovieDetails = () => {
    setSelectedMovie(null)
  }
  return (
    <>
      {selectedMovie ? (
        <>
        <button className={styles.searchButton} onClick={closeMovieDetails}></button>
        <MovieDetails movie={selectedMovie} />
        </>
      ) : (
        <Header>
          <SearchForm initialQuery={searchQuery} onSearch={handleSearch} />
        </Header>
      )}
      <div className={styles.controlPanel}>
        <GenreList
          genres={genres}
          selectedGenre={selectedGenre}
          onSelect={handleGenreSelect}
        />
        <SortControl
          defaultSelection={sortingCriterion}
          onSortingCriterionChange={setSortingCriterion}
        />
      </div>

      <div className={styles.movieList}>
        {movies.map((movie) => (
          <MovieTile
            key={movie.id}
            movie={movie}
            isSelected={selectedMovie === movie}
            onClick={handleMovieTileClick}
          />
        ))}
      </div>
      <MovieForm onSubmit={() => console.log("movie added")} />
    </>
  );
};
