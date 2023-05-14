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
    //console.log("Performing search for query:", searchQuery);
    setSearchQuery(searchQuery);
  };

  const handleMovieTileClick = (movie) => {
    console.log(selectedMovie);
    console.log(movie);
    setSelectedMovie(movie);
  };


  //   const movies2 = [
  //     {
  //       id: 1,
  //       poster_path:
  //         "https://m.media-amazon.com/images/M/MV5BMTE5ZmIwNjEtZmZjYS00NmM0LTgyNDUtNjFjMzM3MDc1NWM2XkEyXkFqcGdeQXVyNTE1MDE2MzY@._V1_QL75_UX380_CR0,4,380,562_.jpg",
  //       name: "Pulp Fiction",
  //       release_date: 1994,
  //       vote_average: 8.9,
  //       overview:
  //         "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
  //       genres: ["Crime", "Drama"],
  //     },
  //     {
  //       id: 2,
  //       poster_path:
  //         "https://m.media-amazon.com/images/M/MV5BYTE2NDI0ZjgtZmI2Ni00NDI4LTgwZTctN2I3OWIzNjhhYjY1XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_.jpg",
  //       name: "Reservoir Dogs",
  //       release_date: 1992,
  //       vote_average: 8.3,
  //       overview:
  //         "When a simple jewelry heist goes horribly wrong, the surviving criminals begin to suspect that one of them is a police informant.",
  //       duration: "1h 39 min",
  //       genres: ["Crime", "Thriller"],
  //     },
  //     {
  //       id: 3,
  //       poster_path:
  //         "https://m.media-amazon.com/images/M/MV5BMTkxOTMyMDI0MV5BMl5BanBnXkFtZTcwODU0OTk1Mw@@._V1_.jpg",
  //       name: "Inception",
  //       release_date: 2010,
  //       vote_average: 8.8,
  //       overview:
  //         "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O., but his tragic past may doom the project and his team to disaster.",
  //       duration: "2h 28 min",
  //       genres: ["Action", "Adventure", "Sci-Fi"],
  //     },
  //     {
  //       id: 4,
  //       poster_path:
  //         "https://m.media-amazon.com/images/M/MV5BNmFiYmJmN2QtNWQwMi00MzliLThiOWMtZjQxNGRhZTQ1MjgyXkEyXkFqcGdeQXVyNzQ1ODk3MTQ@._V1_.jpg",
  //       name: "Kill Bill: Vol. 2",
  //       release_date: 2004,
  //       vote_average: 8.8,
  //       overview:
  //         "The Bride continues her quest of vengeance against her former boss and lover Bill, the reclusive bouncer Budd, and the treacherous, one-eyed Elle.",
  //       duration: "2h 17 min",
  //       genres: ["Action", "Adventure", "Sci-Fi"],
  //     },
  //   ];

  const handleGenreSelect = (genre) => {
    setSelectedGenre(genre);
  };
  return (
    <>
      {selectedMovie ? (
        <MovieDetails movie={selectedMovie} />
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
