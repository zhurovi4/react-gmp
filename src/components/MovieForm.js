import React from "react";
//import styles from "./MovieForm.module.css";

function MovieForm({ initialMovieInfo = {}, onSubmit }) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = Object.fromEntries(new FormData(event.target));
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Title:
        <input type="text" name="title" defaultValue={initialMovieInfo.title} />
      </label>
      <br />
      <label>
        Release Date:
        <input
          type="date"
          name="releaseDate"
          defaultValue={initialMovieInfo.releaseDate}
        />
      </label>
      <br />
      <label>
        Genre:
        <input type="text" name="genre" defaultValue={initialMovieInfo.genre} />
      </label>
      <br />
      <label>
        Movie URL:
        <input
          type="text"
          name="movieUrl"
          defaultValue={initialMovieInfo.movieUrl}
        />
      </label>
      <br />
      <label>
        Rating:
        <input
          type="number"
          name="rating"
          min="0"
          max="10"
          defaultValue={initialMovieInfo.rating}
        />
      </label>
      <br />
      <label>
        Runtime:
        <input
          type="text"
          name="runtime"
          defaultValue={initialMovieInfo.runtime}
        />
      </label>
      <br />
      <button type="submit">Save</button>
    </form>
  );
}

export default MovieForm;
