import React, { useState } from "react";
import Counter from "./components/Counter";
import SearchForm from "./components/SearchForm";
import GenreList from "./components/GengeList";
import MovieTile from "./components/MovieTile";
import MovieDetails from "./components/MovieDetails";
import MovieForm from "./components/MovieForm"
import SortControl from "./components/SortControl";


import "./App.css";

function App() {
  const handleSearch = (searchQuery) => {
    console.log("Performing search for query:", searchQuery);
  };
  const [selectedGenre, setSelectedGenre] = useState("all");
  const genres = ["all", "documentary", "comedy", "horror", "crime"];


  const movie = {
    id: 1,
    imageUrl:
      "https://m.media-amazon.com/images/M/MV5BMTE5ZmIwNjEtZmZjYS00NmM0LTgyNDUtNjFjMzM3MDc1NWM2XkEyXkFqcGdeQXVyNTE1MDE2MzY@._V1_QL75_UX380_CR0,4,380,562_.jpg",
    name: "Pulp Fiction",
    releaseYear: 1994,
    genres: ["Crime", "Drama"],
  };

  const movie2 = {
    id: 2,
    imageUrl:
      "https://m.media-amazon.com/images/M/MV5BYTE2NDI0ZjgtZmI2Ni00NDI4LTgwZTctN2I3OWIzNjhhYjY1XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_.jpg",
    name: "Reservoir Dogs",
    releaseYear: 1992,
    rating: 8.3,
    description:
      "When a simple jewelry heist goes horribly wrong, the surviving criminals begin to suspect that one of them is a police informant.",
    duration: "1h 39 min",
    genres: ["Crime", "Thriller"],
  };

  const handleGenreSelect = (genre) => {
    setSelectedGenre(genre);
  };
  return (
    <div className="App">
      <Counter initialValue={0} />
      <SearchForm
        initialQuery="What do you want to watch?"
        onSearch={handleSearch}
      />
      <MovieDetails movie={movie2} />
      <GenreList
        genres={genres}
        selectedGenre={selectedGenre}
        onSelect={handleGenreSelect}
      />
      <SortControl defaultSelection="release-date" />
      <MovieTile movie={movie} onClick={() => console.log(movie)} />
      <MovieForm onSubmit={() => console.log('movie added')} />
    </div>
  );
}

export default App;
